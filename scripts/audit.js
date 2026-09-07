#!/usr/bin/env node
/* Audit qualité complet de dist/ : par page, mots, title/description (longueur, unicité), H1 unique sur le site,
   liens autorisés utilisés ou non, liens contextuels (dans un <p>) vs cartes, tel:, images sans alt, FAQ,
   phrases dupliquées entre pages. Sortie lisible ; `--json` pour la version brute. */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), DIST = path.join(ROOT, 'dist');
const maillage = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/maillage.json'), 'utf8'));
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => { const p = path.join(d, e.name); return e.isDirectory() ? walk(p) : e.name.endsWith('.html') ? [p] : []; });
const strip = s => s.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const pages = [], titles = {}, descs = {}, h1s = {}, sentences = {};
for (const f of walk(DIST)) {
  const html = fs.readFileSync(f, 'utf8');
  const url = f.endsWith('404.html') ? '/404.html' : '/' + path.relative(DIST, f).replace(/\\/g, '/').replace(/index\.html$/, '');
  if (/noindex/.test(html) || url === '/404.html') continue;
  const main = (html.match(/<main id="main">([\s\S]*?)<\/main>/) || ['', ''])[1];
  const title = (html.match(/<title>([^<]*)<\/title>/) || ['', ''])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || ['', ''])[1];
  const h1 = strip((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || ['', ''])[1]);
  const text = strip(main);
  const words = text.split(' ').length;
  const body = main.replace(/<nav class="breadcrumb"[\s\S]*?<\/nav>/g, '');
  const links = [...body.matchAll(/<a\s[^>]*href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g)].filter(m => !m[1].startsWith('/assets/'));
  const inP = [...body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].flatMap(m => [...m[1].matchAll(/href="(\/[^"#?]*)"/g)].map(x => x[1]));
  const faqLinks = [...(body.match(/<div class="faq-a">[\s\S]*?<\/div>/g) || [])].flatMap(b => [...b.matchAll(/href="(\/[^"#?]*)"/g)].map(x => x[1]));
  const used = new Set(links.map(l => l[1]));
  const allowed = maillage[url] || [];
  const unused = allowed.filter(a => !used.has(a) && a !== '/');
  const tel = (main.match(/href="tel:/g) || []).length;
  const imgs = [...main.matchAll(/<img\b[^>]*>/g)].map(m => m[0]);
  const noAlt = imgs.filter(i => !/alt="[^"]+"/.test(i)).length;
  const faq = (main.match(/<details/g) || []).length;
  const h2 = (main.match(/<h2/g) || []).length;
  for (const s of text.split(/(?<=[.!?])\s+/)) { if (s.length > 60) (sentences[s] ||= new Set()).add(url); }
  (titles[title] ||= []).push(url); (descs[desc] ||= []).push(url); (h1s[h1] ||= []).push(url);
  pages.push({ url, words, title: title.length, desc: desc.length, h2, faq, tel, imgs: imgs.length, noAlt, links: links.length, contextuels: new Set(inP).size, unused });
}
pages.sort((a, b) => a.url.localeCompare(b.url));
if (process.argv.includes('--json')) { console.log(JSON.stringify(pages, null, 1)); process.exit(0); }
console.log('url'.padEnd(46), 'mots', 'title', 'desc', 'h2', 'faq', 'tel', 'img', 'liens', 'ctx', 'non utilisés (autorisés par la matrice)');
for (const p of pages) console.log(p.url.padEnd(46), String(p.words).padStart(4), String(p.title).padStart(5), String(p.desc).padStart(4), String(p.h2).padStart(2), String(p.faq).padStart(3), String(p.tel).padStart(3), String(p.imgs).padStart(3) + (p.noAlt ? '!' : ' '), String(p.links).padStart(5), String(p.contextuels).padStart(3), p.unused.join(' '));
const dup = o => Object.entries(o).filter(([, v]) => v.length > 1);
console.log('\nTitles dupliqués :', dup(titles).length, dup(titles).map(([k, v]) => k + ' → ' + v.join(', ')).join('\n') || '');
console.log('Descriptions dupliquées :', dup(descs).length);
console.log('H1 dupliqués :', dup(h1s).length, dup(h1s).map(([k, v]) => k + ' → ' + v.join(', ')).join('\n') || '');
const dupS = Object.entries(sentences).filter(([, v]) => v.size > 1);
console.log('Phrases (> 60 car.) présentes sur plusieurs pages :', dupS.length);
for (const [s, v] of dupS.slice(0, 40)) console.log('  [' + v.size + '] ' + s.slice(0, 110) + (s.length > 110 ? '…' : '') + '  ← ' + [...v].slice(0, 3).join(' '));
