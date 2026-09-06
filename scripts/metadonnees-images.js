#!/usr/bin/env node
/* Écrit les métadonnées XMP dans chaque image de assets/img/ : titre et description
   (identiques aux alt de data/images.json), auteur, copyright, mots-clés par famille,
   ville, pays et géolocalisation (data/business.json). Relancé automatiquement par
   `npm run images`, ou seul avec `npm run meta`. Nécessite exiftool. */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const biz = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/business.json'), 'utf8'));
const alts = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/images.json'), 'utf8'));

const AUTEUR = biz.siteName;
const COPYRIGHT = '© ' + biz.siteName + ' — ' + biz.domain.replace(/^https?:\/\//, '');
const LIEU = (biz.street ? biz.street + ', ' : '') + biz.postalCode + ' ' + biz.city;
/* Sans adresse précise : centre de Bruxelles (Grand-Place). Remplacé par biz.geo dès qu'il existe. */
const GEO = biz.geo || { lat: 50.8467, lng: 4.3525 };

function motsCles(cle) {
  const base = ['débouchage', 'Bruxelles', 'HelpDrain', 'canalisation'];
  if (/wc|evier|lavabo|douche|colonne|canalisation$/.test(cle)) base.push('débouchage canalisation', 'plombier déboucheur');
  if (/egout|chambre|sterput|avaloir|gouttiere/.test(cle)) base.push('débouchage égout', 'égouttage', 'sterput', 'chambre de visite');
  if (/curage|hydrocurage|entretien/.test(cle)) base.push('curage', 'hydrocurage', 'camion hydrocureur');
  if (/vidange|fosse|graisse|citerne|pompage/.test(cle)) base.push('vidange', 'assainissement', 'fosse septique', 'bac à graisse');
  if (/reparation|chemisage|remplacement|clapet|raccordement/.test(cle)) base.push('réparation canalisation', 'chemisage', 'clapet anti-retour');
  if (/camera/.test(cle)) base.push('inspection caméra');
  if (/urgent/.test(cle)) base.push('débouchage urgent', '24h/24');
  if (/syndic|horeca/.test(cle)) base.push('syndic', 'horeca');
  return [...new Set(base)].join(', ');
}

let n = 0;
for (const f of fs.readdirSync(path.join(ROOT, 'assets/img')).filter(f => /\.(webp|png|jpg)$/.test(f))) {
  const cle = f.replace(/\.(webp|png|jpg)$/, '');
  const desc = alts[cle];
  if (!desc) { console.warn('  ! pas de description pour ' + f + ' (data/images.json)'); continue; }
  execFileSync('exiftool', [
    '-overwrite_original', '-q',
    '-XMP-dc:Title=' + desc,
    '-XMP-dc:Description=' + desc,
    '-XMP-dc:Creator=' + AUTEUR,
    '-XMP-dc:Rights=' + COPYRIGHT,
    '-XMP-dc:Subject=' + motsCles(cle),
    '-XMP-photoshop:City=' + biz.city,
    '-XMP-photoshop:Country=Belgique',
    '-XMP-iptcCore:Location=' + LIEU,
    '-XMP-exif:GPSLatitude=' + GEO.lat, '-XMP-exif:GPSLongitude=' + GEO.lng,
    path.join(ROOT, 'assets/img', f)
  ]);
  n++;
}
console.log('✓ métadonnées XMP écrites sur ' + n + ' image(s)');
