#!/usr/bin/env node
/* Vérifie les liens internes du dist/ : chaque href local doit correspondre
   à un fichier généré. Échoue (exit 1) au moindre lien cassé ou page orpheline. */

const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : (e.name.endsWith('.html') ? [p] : []);
  });
}

const htmlFiles = walk(DIST);
const errors = [];
const inbound = {}; // url -> Set de pages sources

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = '/' + path.relative(DIST, file).replace(/\\/g, '/');
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]);

  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:|#)/.test(href)) {
      if (href === '#' ) errors.push(`${rel} : lien vide "#"`);
      continue;
    }
    if (href.startsWith('#')) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (href.includes('#') && !href.startsWith('#main') && href !== '#main') {
      // liens ancres interdits sauf skip-link #main
      if (!href.endsWith('#main')) errors.push(`${rel} : lien ancre interdit "${href}"`);
    }
    if (!clean) continue;
    const target = clean.endsWith('/') ? clean + 'index.html' : clean;
    const fsPath = path.join(DIST, target);
    if (!fs.existsSync(fsPath)) {
      errors.push(`${rel} : lien cassé "${href}"`);
    } else {
      (inbound[clean] ||= new Set()).add(rel);
    }
  }
}

// pages orphelines (aucun lien entrant) — hors 404 et merci
for (const file of htmlFiles) {
  const rel = '/' + path.relative(DIST, file).replace(/\\/g, '/');
  const url = rel.replace(/index\.html$/, '');
  if (url === '/404.html' || url === '/merci/' || url === '/') continue;
  if (!inbound[url] || inbound[url].size === 0) errors.push(`Page orpheline : ${url}`);
}

if (errors.length) {
  console.error('✗ ' + errors.length + ' problème(s) :\n' + errors.map(e => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log('✓ ' + htmlFiles.length + ' pages, tous les liens internes sont valides, aucune page orpheline.');
