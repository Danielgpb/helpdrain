#!/usr/bin/env node
/* Garde-fous éditoriaux et de maillage.
   - content/pages/*.html : title ≤ 60, description ≤ 160, téléphone en dur, tournures interdites,
     <ul> hors composants, emojis, MAJUSCULES intégrales.
   - dist/** : un seul <h1>, liens du <main> conformes à docs/maillage.json, ancres non dupliquées.
   Échoue (exit 1) au moindre problème. */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const maillage = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/maillage.json'), 'utf8'));

const INTERDITS = ["n'hésitez pas", "n’hésitez pas", 'que ce soit', 'au cœur de', 'au coeur de', 'en outre', 'de plus,', 'il est important de', 'il convient de',
  'haut de gamme', 'clé en main', 'clés en main', 'partenaire de confiance', 'service de qualité', 'équipe expérimentée', 'satisfaction client', 'pas cher', 'pas chère', 'sans plus attendre', 'niché'];
const SIGLES = new Set(['HTVA', 'TVAC', 'HELP', 'PVC', 'CCTV', 'HACCP', 'AFSCA', 'RGPD', 'HORECA', 'FAQ', 'JSON', 'HTML', 'META', 'WHATSAPP', 'PHONE', 'EMAIL', 'DISPLAY', 'PRIX', 'ADDRESS', 'HOURS', 'AVIS', 'TARIFS', 'BREADCRUMB', 'POST', 'SIRET', 'HELPDRAIN', 'ONLY']);
const UL_OK = /class="(trust-strip|hero-usp|zones|communes|footer-zones)/;
const errors = [];
const strip = s => s.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');

/* ---- sources ---- */
const pagesDir = path.join(ROOT, 'content/pages');
for (const f of fs.readdirSync(pagesDir).filter(f => f.endsWith('.html') && !f.startsWith('_'))) {
  const raw = fs.readFileSync(path.join(pagesDir, f), 'utf8');
  const m = raw.match(/^<!--META\s*([\s\S]*?)\s*META-->/);
  const meta = m ? JSON.parse(m[1]) : {};
  const src = 'content/pages/' + f;
  if (meta.title && meta.title.length > 60) errors.push(`${src} : title de ${meta.title.length} caractères (max 60)`);
  if (meta.description && meta.description.length > 160) errors.push(`${src} : description de ${meta.description.length} caractères (max 160)`);
  if (/0460\s?20\s?30\s?90|\+32\s?460/.test(raw)) errors.push(`${src} : numéro de téléphone en dur (utiliser {{PHONE}} / {{PHONE_DISPLAY}})`);
  const text = strip(raw);
  const low = text.toLowerCase();
  for (const t of INTERDITS) if (low.includes(t)) errors.push(`${src} : tournure interdite « ${t} »`);
  for (const ul of raw.matchAll(/<ul[^>]*>/g)) if (!UL_OK.test(ul[0])) errors.push(`${src} : <ul> dans l'éditorial (${ul[0]})`);
  if (/\p{Extended_Pictographic}/u.test(text)) errors.push(`${src} : emoji détecté`);
  for (const w of text.match(/\b[A-ZÉÈÀÙ]{4,}\b/g) || []) if (!SIGLES.has(w.normalize('NFD').replace(/[̀-ͯ]/g, ''))) { errors.push(`${src} : mot en majuscules « ${w} »`); break; }
  if (/helpcar/i.test(raw)) errors.push(`${src} : mention d'HelpCar interdite`);
}

/* ---- dist ---- */
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : (e.name.endsWith('.html') ? [p] : []);
  });
}
for (const file of walk(DIST)) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = '/' + path.relative(DIST, file).replace(/\\/g, '/');
  const url = rel === '/404.html' ? rel : rel.replace(/index\.html$/, '');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${url} : ${h1} <h1> (il en faut exactement 1)`);
  const mainM = html.match(/<main id="main">([\s\S]*?)<\/main>/);
  if (!mainM) { errors.push(`${url} : <main> introuvable`); continue; }
  const main = mainM[1].replace(/<nav class="breadcrumb"[\s\S]*?<\/nav>/g, '');
  const allowed = maillage[url];
  if (!allowed) { errors.push(`${url} : page absente de docs/maillage.json`); continue; }
  const seen = new Map();
  for (const a of main.matchAll(/<a\s[^>]*href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const href = a[1], anchor = strip(a[2]).trim();
    if (href.startsWith('/assets/')) continue;
    if (!allowed.includes(href)) errors.push(`${url} : lien hors matrice de maillage → ${href}`);
    const key = anchor.toLowerCase();
    if (seen.has(key)) errors.push(`${url} : ancre répétée « ${anchor} »`); else seen.set(key, href);
  }
}

if (errors.length) {
  console.error('✗ ' + errors.length + ' problème(s) de contenu :\n' + errors.map(e => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log('✓ contenu OK : titles, metas, ton, H1, maillage conformes.');
