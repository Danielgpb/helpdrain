#!/usr/bin/env node
/* Build statique helpdrain.be — zéro dépendance.
   npm run build → dist/ prêt pour Netlify.
   - content/pages/*.html  : pages éditoriales (bloc <!--META {json} META--> + corps HTML)
   - data/communes/*.json  : pages communes (phase 2 ; vide en phase 1)
   - data/tarifs.json      : grille tarifaire unique ({{PRIX:cle}} + <!--TARIFS-->)
   - templates/base.html   : layout global (head, header, footer, CTA mobile)
   Le CSS est inliné, le schema JSON-LD est injecté par page. */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
fs.rmSync(DIST, { recursive: true, force: true });
const biz = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/business.json'), 'utf8'));
const avisData = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/avis.json'), 'utf8'));
const tarifs = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/tarifs.json'), 'utf8'));
const avisAffiches = (avisData.avis || []).filter(a => a.afficher);
const css = fs.readFileSync(path.join(ROOT, 'assets/css/main.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '\n').trim();
const baseTpl = fs.readFileSync(path.join(ROOT, 'templates/base.html'), 'utf8');
const formTpl = fs.readFileSync(path.join(ROOT, 'templates/formulaire.html'), 'utf8');
const communeTplPath = path.join(ROOT, 'templates/commune.html');
const communeTpl = fs.existsSync(communeTplPath) ? fs.readFileSync(communeTplPath, 'utf8') : '';

const communesDir = path.join(ROOT, 'data/communes');
const communes = fs.readdirSync(communesDir)
  .filter(f => f.endsWith('.json'))
  .map(f => JSON.parse(fs.readFileSync(path.join(communesDir, f), 'utf8')))
  .sort((a, b) => a.name.localeCompare(b.name, 'fr'));

/* Les 19 communes de la Région de Bruxelles-Capitale (areaServed du schema). */
const COMMUNES_RBC = [
  ['Anderlecht', '1070'], ['Auderghem', '1160'], ['Berchem-Sainte-Agathe', '1082'], ['Bruxelles-Ville', '1000'],
  ['Etterbeek', '1040'], ['Evere', '1140'], ['Forest', '1190'], ['Ganshoren', '1083'], ['Ixelles', '1050'],
  ['Jette', '1090'], ['Koekelberg', '1081'], ['Molenbeek-Saint-Jean', '1080'], ['Saint-Gilles', '1060'],
  ['Saint-Josse-ten-Noode', '1210'], ['Schaerbeek', '1030'], ['Uccle', '1180'], ['Watermael-Boitsfort', '1170'],
  ['Woluwe-Saint-Lambert', '1200'], ['Woluwe-Saint-Pierre', '1150']
];

const BUSINESS_ID = biz.domain + '/#business';
const pagesBuilt = [];

/* ---------- helpers ---------- */

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function stripTags(s) {
  return String(s).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function localBusinessSchema() {
  const address = { '@type': 'PostalAddress', postalCode: biz.postalCode, addressLocality: biz.city, addressRegion: biz.region, addressCountry: biz.country };
  if (biz.street) address.streetAddress = biz.street;
  const s = {
    '@type': 'Plumber',
    '@id': BUSINESS_ID,
    name: biz.siteName,
    url: biz.domain + '/',
    telephone: biz.phone,
    email: biz.email,
    priceRange: biz.priceRange,
    address,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00', closes: '23:59'
    },
    areaServed: COMMUNES_RBC.map(([n, cp]) => ({ '@type': 'Place', name: n + ' (' + cp + ')' })),
    knowsAbout: ['Débouchage de canalisation', "Débouchage d'égout", 'Curage et hydrocurage', 'Vidange et assainissement', 'Réparation de canalisation', 'Inspection caméra de canalisation']
  };
  if (biz.vat) s.vatID = biz.vat;
  if (biz.geo) s.geo = { '@type': 'GeoCoordinates', latitude: biz.geo.lat, longitude: biz.geo.lng };
  if (biz.gbp) { s.hasMap = biz.gbp.url; s.sameAs = [biz.gbp.url]; }
  if (avisAffiches.length) {
    s.aggregateRating = { '@type': 'AggregateRating', ratingValue: avisData.note, reviewCount: avisData.nombreAvis, bestRating: 5 };
    s.review = avisAffiches.map(a => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: a.auteur },
      datePublished: a.date,
      reviewRating: { '@type': 'Rating', ratingValue: a.note, bestRating: 5 },
      reviewBody: a.texte
    }));
  }
  return s;
}

/* Bloc d'avis Google : 3 avis par page choisis par hachage de l'URL. Vide tant qu'il n'y a pas d'avis réels. */
const MOIS_FR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
function renderAvisHtml(urlPath) {
  if (!avisAffiches.length) return '';
  let h = 0;
  for (const ch of urlPath) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const start = h % avisAffiches.length;
  const picked = [0, 1, 2].map(i => avisAffiches[(start + i) % avisAffiches.length]);
  const cards = picked.map(a => {
    const d = new Date(a.date + 'T12:00:00');
    const quand = MOIS_FR[d.getMonth()] + ' ' + d.getFullYear();
    return '<div class="review"><div class="stars" aria-label="' + a.note + ' étoiles sur 5">★★★★★</div>' +
      '<p>« ' + esc(a.texte) + ' »</p>' +
      '<footer>' + esc(a.auteur) + ' — avis Google, ' + quand + '</footer></div>';
  }).join('\n    ');
  const note = String(Number(avisData.note).toFixed(1)).replace('.', ',');
  const lien = biz.gbp ? '<a href="' + biz.gbp.url + '" target="_blank" rel="noopener">lire nos ' + avisData.nombreAvis + ' avis sur Google ↗</a>' : avisData.nombreAvis + ' avis Google';
  return '<section class="avis-block"><h2>Ce qu\'on entend après une intervention</h2><div class="reviews">\n    ' + cards + '\n  </div>\n' +
    '  <p class="avis-note"><span class="stars" aria-hidden="true">★★★★★</span> <strong>' + note + '/5</strong> — ' + lien + '</p></section>';
}

function breadcrumbSchema(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c.name,
      ...(c.url ? { item: biz.domain + c.url } : {})
    }))
  };
}
function faqSchema(faq) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) }
    }))
  };
}
function serviceSchema(meta) {
  return {
    '@type': 'Service',
    name: meta.service.name,
    serviceType: meta.service.type || meta.service.name,
    description: meta.description,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'Place', name: 'Bruxelles, Région de Bruxelles-Capitale' },
    url: biz.domain + meta.path
  };
}

/* ---------- tarifs ---------- */
const eur = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' €';
function prixPhrase(cle) {
  const l = tarifs.lignes.find(x => x.cle === cle);
  if (!l) throw new Error('Clé tarif inconnue : ' + cle);
  if (l.min === 0 && l.max === 0) return l.inclus;
  const base = 'entre ' + eur(l.min) + ' et ' + eur(l.max) + ' TVAC';
  return l.unite ? base + ' ' + l.unite : base;
}
function renderTarifsHtml() {
  const rows = tarifs.lignes.map(l => {
    const prix = (l.min === 0 && l.max === 0) ? '<strong>Offerte</strong>' : '<strong>' + eur(l.min) + ' – ' + eur(l.max) + '</strong>' + (l.unite ? ' ' + l.unite : '');
    return '<tr><td>' + esc(l.prestation) + '</td><td>' + prix + '</td><td>' + esc(l.inclus) + '</td></tr>';
  }).join('\n');
  return '<div class="table-scroll"><table><thead><tr><th>Prestation</th><th>Fourchette TVA comprise</th><th>Ce qui est compris</th></tr></thead><tbody>\n' + rows + '\n</tbody></table></div>' +
    '<p class="tarif-note">' + esc(tarifs.majoration) + ' ' + esc(tarifs.tva) + '</p>';
}
function offerCatalogSchema() {
  return {
    '@type': 'OfferCatalog',
    name: 'Tarifs débouchage Bruxelles',
    itemListElement: tarifs.lignes.filter(l => l.max > 0).map(l => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: l.prestation, provider: { '@id': BUSINESS_ID } },
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', minPrice: l.min, maxPrice: l.max, valueAddedTaxIncluded: true },
      availableAtOrFrom: { '@id': BUSINESS_ID }
    }))
  };
}

function renderFaqHtml(faq, title) {
  const items = faq.map(f =>
    '<details open><summary>' + esc(f.q) + '</summary><div class="faq-a">' + f.a + '</div></details>'
  ).join('\n');
  return '<section class="faq-block"><h2>' + esc(title || 'Questions fréquentes') + '</h2><div class="faq">' + items + '</div></section>';
}
function renderBreadcrumbHtml(crumbs) {
  const items = crumbs.map((c, i) => {
    const last = i === crumbs.length - 1;
    return last
      ? '<li aria-current="page">' + esc(c.name) + '</li>'
      : '<li><a href="' + c.url + '">' + esc(c.name) + '</a></li>';
  }).join('');
  return '<nav class="breadcrumb" aria-label="Fil d\'Ariane"><ol>' + items + '</ol></nav>';
}
function footerZones() {
  return communes.map(c => '        <li><a href="/debouchage-' + c.slug + '/">' + esc(c.name) + '</a></li>').join('\n');
}

/* Relais du lead vers l'app Suivi Leads via /.netlify/functions/lead (secrets en env Netlify). */
function leadAppScript() {
  const la = biz.leadApp;
  if (!la || !la.enabled) return '';
  return '<script>(function(){document.querySelectorAll(\'form[name="depannage"]\').forEach(function(f){' +
    'f.addEventListener("submit",function(){try{var d=new FormData(f);var ch={};' +
    'if(d.get("commune"))ch["Commune"]=d.get("commune");' +
    'if(d.get("probleme"))ch["Problème"]=d.get("probleme");' +
    'if(d.get("delai"))ch["Délai souhaité"]=d.get("delai");' +
    'fetch("/.netlify/functions/lead",{method:"POST",keepalive:true,' +
    'headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:d.get("nom"),telephone:d.get("telephone"),' +
    'email:d.get("email"),message:d.get("message"),page:location.pathname,source:"helpdrain.be",' +
    'champs:ch,_piege:d.get("bot-field")})})}catch(e){}});});})();</script>';
}

/* Alt des visuels de hero (fichier assets/img/<cle>.webp). */
/* Alt des visuels (fichier assets/img/<cle>.webp) : data/images.json, partagé avec scripts/metadonnees-images.js. */
const ALT_IMAGES = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/images.json'), 'utf8'));

/* Les heros deviennent une vraie <img> (alt indexable, LCP prioritaire). Image absente → bandeau uni. */
function injecterImagesHero(html) {
  return html.replace(
    /<div class="([^"]*page-head[^"]*has-img[^"]*)"([^>]*)style="--pg-img:url\('([^']+)'\)"([^>]*)>/g,
    (balise, classes, avant, src, apres) => {
      const nom = src.split('/').pop();
      const cle = nom.replace('.webp', '');
      if (!fs.existsSync(path.join(ROOT, 'assets/img', nom))) {
        console.warn('  ! image manquante : ' + nom + ' (bandeau uni)');
        return '<div class="' + classes.replace('has-img', '').replace(/\s+/g, ' ').trim() + '"' + avant + apres + '>';
      }
      const alt = ALT_IMAGES[cle] || 'Intervention de débouchage à Bruxelles';
      return balise + '<img class="ph-img" src="' + src + '" alt="' + esc(alt) +
        '" width="1600" height="900" fetchpriority="high" decoding="async">';
    }
  );
}

/* Blocs .steps : si assets/img/etape-N.webp existe, une photo 4:3 est ajoutée au-dessus du numéro. */
function injecterImagesEtapes(html) {
  return html.replace(/<div class="step"><div class="num">(\d)<\/div>/g, (bloc, n) => {
    const nom = 'etape-' + n + '.webp';
    if (!fs.existsSync(path.join(ROOT, 'assets/img', nom))) return bloc;
    const alt = ALT_IMAGES['etape-' + n] || 'Étape ' + n;
    return '<div class="step"><img class="step-img" src="/assets/img/' + nom + '" alt="' + esc(alt) + '" width="1200" height="900" loading="lazy" decoding="async"><div class="num">' + n + '</div>';
  });
}

function renderPage({ path: urlPath, title, description, bodyHtml, schemas, priority, noindex }) {
  const graph = { '@context': 'https://schema.org', '@graph': [localBusinessSchema(), ...schemas] };
  let html = baseTpl
    .replace(/\{\{TITLE\}\}/g, esc(title))
    .replace(/\{\{DESC\}\}/g, esc(description))
    .replace(/\{\{CANONICAL\}\}/g, biz.domain + urlPath)
    .replace('{{ROBOTS}}', noindex ? '<meta name="robots" content="noindex">\n' : '')
    .replace(/\{\{SITE_NAME\}\}/g, esc(biz.siteName))
    .replace(/\{\{DOMAIN\}\}/g, biz.domain)
    .replace('{{CSS}}', css)
    .replace('{{SCHEMA}}', '<script type="application/ld+json">' + JSON.stringify(graph) + '</script>')
    .replace('{{CONTENT}}', injecterImagesHero(bodyHtml))
    .replace('{{FOOTER_ZONES}}', footerZones())
    .replace('{{YEAR}}', String(new Date().getFullYear()));
  const addr = (biz.street ? biz.street + ', ' : '') + biz.postalCode + ' ' + biz.city;
  html = html.replace(/\{\{PHONE\}\}/g, biz.phone)
    .replace(/\{\{PHONE_DISPLAY\}\}/g, biz.phoneDisplay)
    .replace(/\{\{EMAIL\}\}/g, biz.email)
    .replace(/\{\{ADDRESS\}\}/g, esc(addr))
    .replace(/\{\{VAT\}\}/g, biz.vat ? 'TVA ' + esc(biz.vat) : '')
    .replace(/\{\{HOURS\}\}/g, esc(biz.openingHoursDisplay || biz.openingHours))
    .replace(/\{\{GBP_URL\}\}/g, biz.gbp ? biz.gbp.url : '')
    .replace(/\{\{MAP_EMBED\}\}/g, '')
    .replace(/\{\{PRIX:([a-z-]+)\}\}/g, (_, cle) => prixPhrase(cle));
  if (html.includes('<!--AVIS-->')) html = html.replace('<!--AVIS-->', renderAvisHtml(urlPath));
  if (bodyHtml.includes('name="depannage"')) html = html.replace('</body>', leadAppScript() + '</body>');

  const outDir = urlPath === '/404.html' ? DIST : path.join(DIST, urlPath);
  const outFile = urlPath === '/404.html' ? path.join(DIST, '404.html') : path.join(outDir, 'index.html');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, html);
  if (!noindex && urlPath !== '/404.html') pagesBuilt.push({ url: urlPath, priority });
}

/* ---------- pages éditoriales (content/pages/*.html) ---------- */

const pagesDir = path.join(ROOT, 'content/pages');
const metaRe = /^<!--META\s*([\s\S]*?)\s*META-->/;

for (const file of fs.readdirSync(pagesDir).filter(f => f.endsWith('.html') && !f.startsWith('_')).sort()) {
  const raw = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  const m = raw.match(metaRe);
  if (!m) throw new Error('Bloc META manquant dans content/pages/' + file);
  let meta;
  try { meta = JSON.parse(m[1]); }
  catch (e) { throw new Error('META JSON invalide dans ' + file + ' : ' + e.message); }
  let body = raw.slice(m[0].length).trim();

  body = body.replace(/<!--FORMULAIRE-->/g, formTpl);
  body = injecterImagesEtapes(body);
  if (meta.breadcrumb) body = body.replace('<!--BREADCRUMB-->', renderBreadcrumbHtml(meta.breadcrumb));
  if (meta.faq) body = body.replace('<!--FAQ-->', renderFaqHtml(meta.faq, meta.faqTitle));

  const schemas = [];
  if (meta.breadcrumb) schemas.push(breadcrumbSchema(meta.breadcrumb));
  if (meta.service) schemas.push(serviceSchema(meta));
  if (meta.faq) schemas.push(faqSchema(meta.faq));
  if (body.includes('<!--TARIFS-->')) { body = body.replace('<!--TARIFS-->', renderTarifsHtml()); schemas.push(offerCatalogSchema()); }
  if (meta.extraSchema) schemas.push(meta.extraSchema);

  renderPage({
    path: meta.path, title: meta.title, description: meta.description,
    bodyHtml: body, schemas, priority: meta.priority || 0.6, noindex: !!meta.noindex
  });
}

/* ---------- pages communes (phase 2 : data/communes/*.json + templates/commune.html) ---------- */

for (const c of communes) {
  if (!communeTpl) throw new Error('templates/commune.html manquant alors que data/communes/ contient des fichiers');
  const sections = c.sections.map(s => '<h2>' + esc(s.h2) + '</h2>\n' + s.html).join('\n');
  const body = communeTpl
    .replace(/\{\{COMMUNE_NAME\}\}/g, esc(c.name))
    .replace('{{HERO_IMG}}', c.heroImg || '/assets/img/hero-debouchage-egout.webp')
    .replace(/\{\{CP\}\}/g, c.cp)
    .replace('{{H1}}', esc(c.h1))
    .replace('{{ACCROCHE}}', c.accroche)
    .replace('{{SECTIONS}}', sections);
  const crumbs = [{ name: 'Accueil', url: '/' }, { name: 'Débouchage ' + c.name }];
  renderPage({
    path: '/debouchage-' + c.slug + '/', title: c.title, description: c.metaDescription,
    bodyHtml: body,
    schemas: [breadcrumbSchema(crumbs), {
      '@type': 'Service',
      name: 'Débouchage à ' + c.name,
      serviceType: 'Débouchage de canalisation et d\'égout',
      provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'Place', name: c.name + ' (' + c.cp + ')' },
      url: biz.domain + '/debouchage-' + c.slug + '/'
    }],
    priority: 0.6
  });
}

/* ---------- fichiers racine ---------- */

fs.mkdirSync(DIST, { recursive: true });
const today = new Date().toISOString().slice(0, 10);
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pagesBuilt
    .sort((a, b) => (b.priority - a.priority) || a.url.localeCompare(b.url))
    .map(p => '  <url><loc>' + biz.domain + p.url + '</loc><lastmod>' + today + '</lastmod><priority>' + p.priority.toFixed(1) + '</priority></url>')
    .join('\n') + '\n</urlset>\n';
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(DIST, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: ' + biz.domain + '/sitemap.xml\n');

const imgSrc = path.join(ROOT, 'assets/img');
const imgDst = path.join(DIST, 'assets/img');
fs.mkdirSync(imgDst, { recursive: true });
for (const f of fs.readdirSync(imgSrc).filter(f => /\.(webp|png|svg|jpg)$/.test(f))) {
  fs.copyFileSync(path.join(imgSrc, f), path.join(imgDst, f));
}

/* favicon : rond navy + goutte orange */
fs.writeFileSync(path.join(DIST, 'favicon.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
  '<rect width="64" height="64" rx="14" fill="#0F2A44"/>' +
  '<path d="M32 10c8 11 15 19 15 28a15 15 0 0 1-30 0c0-9 7-17 15-28z" fill="#E0611A"/>' +
  '<path d="M24 40a8 8 0 0 0 8 8" stroke="#F7F6F2" stroke-width="3" fill="none" stroke-linecap="round"/></svg>\n');

console.log('Build OK — ' + (pagesBuilt.length + 1) + ' pages générées dans dist/ (' + pagesBuilt.length + ' indexables + 404 et noindex).');
