# HelpDrain phase 1 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Livrer helpdrain.be phase 1 : générateur statique + 34 pages services Bruxelles + 4 utilitaires, vérifiées par `npm run build && npm run check`, prêtes pour Netlify.

**Architecture:** Générateur Node zéro dépendance (`build.js`) copié-adapté du site peintre-batiment-bruxelles : pages éditoriales `content/pages/*.html` avec bloc META JSON, layout `templates/base.html`, CSS inliné, JSON-LD par page, sitemap/robots/404. Deux checkers (`check-links.js`, `check-content.js`) font office de tests : le build + les checks doivent passer à chaque tâche.

**Tech Stack:** Node ≥ 18 (fs/path seulement), HTML/CSS statique, Netlify (Forms + Functions), une Google Font (Archivo).

**Spec:** `docs/superpowers/specs/2026-09-06-helpdrain-site-design.md` — lire aussi `docs/concurrents/00-synthese.md` (prix, vocabulaire, FAQ) et `docs/redaction-spec.md` (créé en tâche 2).

## Global Constraints
- Téléphone `+32460203090` / `0460 20 30 90` : JAMAIS en dur dans `content/` ; toujours `{{PHONE}}` / `{{PHONE_DISPLAY}}` / `{{WHATSAPP}}` / `{{EMAIL}}`.
- Aucune mention d'HelpCar. Aucun chiffre d'expérience, d'avis ou d'agrément inventé.
- Trust signals autorisés (4) : 24h/24 délai annoncé · caméra avant/après · prix annoncé = prix payé · rapport photo/vidéo assurance.
- Tournures interdites (échec du check) : « n'hésitez pas », « que ce soit », « au cœur de », « en outre », « de plus, », « il est important de », « il convient de », « haut de gamme », « clé en main », « partenaire de confiance », « service de qualité », « équipe expérimentée », « satisfaction client », « pas cher ». Pas d'emojis, pas de MAJUSCULES intégrales, pas de `<ul>` dans l'éditorial (autorisé : trust-strip, cards, steps, FAQ).
- Un seul `<h1>` par page ; title ≤ 60 car. ; description ≤ 160 car. ; zéro lien `href="#..."` sauf `#main`.
- Prix chiffrés : tableau uniquement sur `/tarifs-debouchage-bruxelles` ; ailleurs une seule phrase indicative via `{{PRIX:cle}}` (remplacé au build depuis `data/tarifs.json`).
- Maillage du corps de page : strictement la matrice `docs/maillage.json` (tâche 2). Le menu/footer ne comptent pas.
- URLs à plat avec slash final : `/debouchage-wc-bruxelles/`.

---

### Task 1: Scaffold du générateur

**Files:**
- Create: `package.json`, `build.js`, `templates/base.html`, `assets/css/main.css`, `data/business.json`, `data/avis.json`, `data/tarifs.json`, `netlify.toml`, `netlify/functions/lead.mjs`, `scripts/check-links.js`, `content/pages/404.html`, `content/pages/merci.html`, `assets/img/.gitkeep`, `data/communes/.gitkeep`
- Source à copier : `/Users/macbook/Desktop/peintre-batiment-bruxelles/{build.js,templates/base.html,assets/css/main.css,scripts/check-links.js,netlify/functions/lead.mjs,netlify.toml}`

**Interfaces:**
- Produces: `npm run build` → `dist/`, `npm run check` → exit 0/1. Placeholders disponibles dans content/ : `{{PHONE}}`, `{{PHONE_DISPLAY}}`, `{{WHATSAPP}}`, `{{EMAIL}}`, `{{ADDRESS}}`, `{{HOURS}}`, `{{PRIX:cle}}`, `<!--BREADCRUMB-->`, `<!--FAQ-->`, `<!--AVIS-->`, `<!--TARIFS-->`. META : `path, title, description, priority, service{name,type}, breadcrumb[], faq[], faqTitle, noindex, extraSchema`.

- [ ] **Step 1: package.json + data**

```json
{ "name": "helpdrain", "private": true, "scripts": {
  "build": "node build.js",
  "check": "node scripts/check-links.js && node scripts/check-content.js",
  "serve": "npx serve dist" } }
```
`data/business.json` :
```json
{ "siteName": "HelpDrain Débouchage", "domain": "https://helpdrain.be",
  "phone": "+32460203090", "phoneDisplay": "0460 20 30 90", "whatsapp": "https://wa.me/32460203090",
  "email": "contact@helpdrain.be", "street": "", "postalCode": "1000", "city": "Bruxelles",
  "region": "Région de Bruxelles-Capitale", "country": "BE", "vat": "", "priceRange": "€€",
  "openingHours": "Mo-Su 00:00-23:59", "openingHoursDisplay": "24h/24, 7j/7", "gbp": null,
  "leadApp": { "enabled": true } }
```
`data/avis.json` : `{ "source": "", "note": 0, "nombreAvis": 0, "avis": [] }`.
`data/tarifs.json` : tableau `{ "tva": "TVA 6 % si le logement a plus de 10 ans, sinon 21 %", "majoration": "+30 % la nuit (22h-7h), le dimanche et les jours fériés, annoncé à l'appel", "lignes": [ {"cle":"evier","prestation":"Débouchage évier, lavabo, douche ou baignoire","min":95,"max":150,"inclus":"déplacement, furet ou machine, contrôle de l'écoulement"}, {"cle":"wc","prestation":"Débouchage WC","min":110,"max":180,"inclus":"déplacement, machine, contrôle"}, {"cle":"colonne","prestation":"Débouchage de colonne d'immeuble","min":180,"max":350,"inclus":"machine à tambour, contrôle caméra"}, {"cle":"egout","prestation":"Débouchage égout, chambre de visite, sterput, avaloir","min":150,"max":350,"inclus":"hydrocureur si nécessaire"}, {"cle":"hydrocurage","prestation":"Hydrocurage haute pression","min":250,"max":450,"inclus":"camion, contrôle caméra après"}, {"cle":"camera","prestation":"Inspection caméra seule","min":150,"max":250,"inclus":"rapport vidéo et photos pour l'assurance"}, {"cle":"camera-apres","prestation":"Inspection caméra après un débouchage","min":0,"max":0,"inclus":"offerte"}, {"cle":"fosse","prestation":"Vidange de fosse septique","min":250,"max":500,"inclus":"selon volume"}, {"cle":"graisse","prestation":"Nettoyage de bac à graisse","min":150,"max":400,"inclus":"selon volume, contrat possible"}, {"cle":"cave","prestation":"Pompage de cave inondée","min":200,"max":500,"inclus":"selon hauteur d'eau"}, {"cle":"clapet","prestation":"Clapet anti-retour posé","min":400,"max":900,"inclus":"fourniture et pose"}, {"cle":"chemisage","prestation":"Chemisage de canalisation","min":250,"max":400,"inclus":"par mètre, sur devis après caméra","unite":"/ m"} ] }`

- [ ] **Step 2: build.js** — copier celui du peintre puis :
  - schema `HousePainter` → `Plumber` ; `knowsAbout` = ["Débouchage de canalisation","Débouchage d'égout","Curage et hydrocurage","Vidange et assainissement","Réparation de canalisation"] ; `areaServed` = liste en dur des 19 communes (Anderlecht, Auderghem, Berchem-Sainte-Agathe, Bruxelles-Ville, Etterbeek, Evere, Forest, Ganshoren, Ixelles, Jette, Koekelberg, Molenbeek-Saint-Jean, Saint-Gilles, Saint-Josse-ten-Noode, Schaerbeek, Uccle, Watermael-Boitsfort, Woluwe-Saint-Lambert, Woluwe-Saint-Pierre) ; `aggregateRating`/`review` seulement si `avisData.avis.filter(a=>a.afficher).length > 0` ; `address.streetAddress` omis si vide ; `vatID` si `biz.vat`.
  - `renderAvisHtml` retourne `''` si aucun avis ; `{{MAP_EMBED}}`/`{{GBP_URL}}` → `''` si `gbp` null.
  - Nouveau : `{{WHATSAPP}}` → `biz.whatsapp` ; `{{PRIX:cle}}` → « entre 95 et 150 € TVAC » (ou « offerte » si min=0, ou « 250 à 400 € par mètre » si unite) ; `<!--TARIFS-->` → `<div class="table-scroll"><table>…</table></div>` + `OfferCatalog` schema poussé dans `schemas` de la page ; `injecterImagesHero` : si `assets/img/<nom>.webp` absent → retirer `has-img` et le style, `console.warn('image manquante: …')`.
  - Boucle communes : garder, elle tourne à vide (`data/communes/` sans JSON) ; `footerZones()` → `''`.
  - `ALT_IMAGES` : 34 entrées `hero-<slug>` → alt en français (« Technicien HelpDrain déroulant un tuyau d'hydrocurage devant une maison bruxelloise », etc.).
  - favicon : cercle navy `#0F2A44` + goutte orange `#E0611A` en path SVG.
- [ ] **Step 3: templates/base.html** — head identique (Archivo à la place de Fraunces : `family=Archivo:wght@600;700;800`), lang `fr-BE`, `og:image` `/assets/img/og-default.webp`. Top bar : « Débouchage à Bruxelles — 19 communes, 24h/24 » + tel. Header : logo texte `<a class="logo" href="/"><em>Help</em>Drain<small>Débouchage Bruxelles 24h/24</small></a>`, nav 4 groupes déroulants (`<details class="nav-group"><summary>Débouchage</summary><div>…</div></details>` : fonctionne sans JS), liens Tarifs, Contact, CTA tel. Footer 5 colonnes exactes de la spec §5 + colonne NAP (`{{ADDRESS}}`, `{{HOURS}}`, mailto, tel, WhatsApp, liens /mentions-legales/ et /politique-confidentialite/). `.mobile-cta` : Appeler (tel) + WhatsApp (`{{WHATSAPP}}`).
- [ ] **Step 4: assets/css/main.css** — copier puis remplacer la palette : `--paper:#F7F6F2; --paper-2:#E4E9EF; --ink:#0F2A44; --ink-2:#1F2937; --ink-3:#5B6B7E; --terra:#E0611A; --terra-dark:#B84D12; --ocre:#F2A25C; --line:#D9DFE6; --font-display:"Archivo",…`. Ajouter `.nav-group{position:relative}.nav-group summary{list-style:none;cursor:pointer;padding:8px 11px;border-radius:6px;font-weight:500}.nav-group[open]>div{position:absolute;top:100%;left:0;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:var(--shadow);min-width:260px;padding:8px;z-index:60;display:grid}.nav-group div a{padding:8px 10px;display:block}` + version mobile (nav en colonne, sous-menus statiques). `.m-wa{background:#25D366;color:#fff}`.
- [ ] **Step 5: netlify.toml** (redirect `https://www.helpdrain.be/*` → `https://helpdrain.be/:splat`), `lead.mjs` copié tel quel, `check-links.js` copié tel quel.
- [ ] **Step 6: content/pages/404.html + merci.html** (noindex, 80 mots chacun, CTA tel).
- [ ] **Step 7: Run** `npm run build && node scripts/check-links.js` → « Build OK — 3 pages », check OK.
- [ ] **Step 8: Commit** `git add -A && git commit -m "feat: générateur statique HelpDrain (build, layout, CSS, données)"`.

---

### Task 2: check-content.js, matrice de maillage, spec de rédaction

**Files:**
- Create: `scripts/check-content.js`, `docs/maillage.json`, `docs/redaction-spec.md`

**Interfaces:**
- Consumes: `dist/**/index.html`, `content/pages/*.html`, `docs/maillage.json` = `{ "/debouchage-wc-bruxelles/": ["/debouchage-canalisation-bruxelles/","/contact/","/inspection-camera-canalisation-bruxelles/"], … }` (liste blanche des liens autorisés dans `<main>` hors `.page-head`, `.faq-block` compris).
- Produces: exit 1 avec liste d'erreurs.

- [ ] **Step 1: Écrire une page de test volontairement fautive** `content/pages/_test-fautif.html` (2 H1, « n'hésitez pas », numéro en dur `0460 20 30 90`, lien vers `/debouchage-evier-bruxelles/` depuis une enfant, title de 70 caractères).
- [ ] **Step 2: check-content.js** — pour chaque `content/pages/*.html` : parse META (title/description longueur), `grep` numéro en dur `/0460 ?20 ?30 ?90|\+32 ?460/`, tournures interdites (insensible à la casse, sur le texte sans balises), `<ul>` hors `.trust-strip/.cards/.steps/.faq/.hero-usp`, emojis (regex `\p{Extended_Pictographic}`), mots en MAJUSCULES ≥ 4 lettres consécutifs hors sigles (WC, TVA, HTVA, TVAC, RBC, GSM, PVC, HD, CCTV, ACP, HACCP, AFSCA, BCE). Pour chaque `dist/**/index.html` : compte `<h1`, extrait les `href` internes dans `<main>` (hors bloc `.page-head`, hors `href="/"` sur le logo), compare à `docs/maillage.json` (page absente de la matrice → erreur ; lien hors liste → erreur ; ancre dupliquée sur une même page → erreur). Sortie : `✓ contenu OK (N pages)` ou liste + exit 1.
- [ ] **Step 3: Run** `npm run build && node scripts/check-content.js` → doit lister les 5 fautes de la page test.
- [ ] **Step 4: Supprimer `_test-fautif.html`**, relancer → `✓`.
- [ ] **Step 5: docs/maillage.json** — écrire la matrice complète des 34 pages selon spec §7 (homepage : 2 core + 3 cat + 5 généraux + /services/ + /contact/ ; core 1 : 5 enfants + /inspection-camera-canalisation-bruxelles/ + /debouchage-urgent-bruxelles/ + / ; core 2 : 4 enfants + /curage-hydrocurage-bruxelles/ + /reparation-canalisation-bruxelles/ + / ; cat 1 : 3 enfants + /debouchage-egout-bruxelles/ + / ; cat 2 : 4 enfants + / ; cat 3 : 4 enfants + /inspection-camera-canalisation-bruxelles/ + / ; chaque enfant : parent + /contact/ + /inspection-camera-canalisation-bruxelles/ ; généraux : / + /contact/ (+ horeca → /nettoyage-bac-a-graisse-bruxelles/ ; syndic → /debouchage-colonne-immeuble-bruxelles/ + /entretien-canalisations-bruxelles/ ; tarifs → 2 core + 3 cat) ; /services/ : les 34 ; /a-propos/ : / + /contact/ + /services/ ; /contact/ : / + /services/).
- [ ] **Step 6: docs/redaction-spec.md** — format META + squelette HTML de chaque type de page (copier §6 de la spec en HTML concret avec les classes), ton, interdits, exemples de phrases « voisin » (« Ça refoule dans la cave dès qu'il pleut fort ? À Bruxelles, on connaît. »), règle tu/vous, règle prix `{{PRIX:cle}}`, alt images.
- [ ] **Step 7: Commit** `git commit -m "feat: check-content, matrice de maillage, spec de rédaction"`.

---

### Task 3: Pages standard — accueil, services, contact, à propos, mentions, confidentialité

**Files:** `content/pages/index.html`, `services.html`, `contact.html`, `a-propos.html`, `mentions-legales.html`, `politique-confidentialite.html`

Briefs :
| Page | Title | H1 | Contenu |
|---|---|---|---|
| `/` | Débouchage Bruxelles 24h/24 — HelpDrain, prix annoncé à l'appel | Débouchage à Bruxelles, 24h/24 : on arrive, on débouche, vous respirez | ~1500 mots, sections spec §6 (hero, 5 familles en cards, 4 étapes, prix annoncé, réseau bruxellois avec les 6 local issues, pros, 5 généraux, `<!--AVIS-->`, 19 communes en texte, FAQ 6 : prix, délai, nuit/dimanche, qui paie locataire/propriétaire, assurance, furet ou produit chimique) |
| `/services/` | Tous nos services de débouchage à Bruxelles | Tout ce qu'on débouche, cure, vidange et répare à Bruxelles | 300 mots + cards des 34 pages groupées par famille |
| `/contact/` | Contact HelpDrain — débouchage Bruxelles, devis gratuit | Un appel, un prix, on part | NAP, formulaire Netlify `depannage` (nom, telephone, commune select 19 + Autre, probleme select : WC · évier/lavabo · douche/baignoire · égout/chambre de visite/sterput · cave inondée · fosse/bac à graisse · autre, message, honeypot, action `/merci/`), 300 mots |
| `/a-propos/` | À propos de HelpDrain Débouchage Bruxelles | Qui débarque chez vous quand ça déborde | 600 mots : équipe, matériel (camion hydrocureur, caméra, machine à tambour, pompe), méthode, zone, les 4 trust signals racontés. Zéro chiffre inventé |
| `/mentions-legales/` | noindex | Mentions légales | raison sociale « [à compléter] », TVA « [à compléter] », siège 1000 Bruxelles, hébergeur Netlify, contact |
| `/politique-confidentialite/` | noindex | Politique de confidentialité | formulaire, données collectées, durée, droits RGPD, pas de cookies tiers |

- [ ] **Step 1: Écrire les 6 pages** selon `docs/redaction-spec.md`.
- [ ] **Step 2: Run** `npm run build && npm run check` (temporairement, les cards de /services/ vers des pages pas encore créées cassent check-links : créer d'abord `/services/` avec seulement les liens des pages existantes, compléter en tâche 9).
- [ ] **Step 3: Commit** `git commit -m "content: pages standard"`.

---

### Task 4: Page tarifs

**Files:** `content/pages/tarifs-debouchage-bruxelles.html`

Title « Tarifs débouchage Bruxelles 2026 — prix annoncés avant de partir » · H1 « Tarifs débouchage à Bruxelles : le prix, vous le connaissez avant qu'on parte » · `<!--TARIFS-->` · H2 « Ce qui fait varier le prix » (accès, longueur, nature du bouchon, hydrocureur ou pas) · H2 « La nuit, le dimanche, les jours fériés » · H2 « TVA 6 % ou 21 % » · H2 « Qui paie : locataire, propriétaire, syndic, assurance » · FAQ 6 (« Le déplacement est-il compris ? », « Vous facturez si vous ne trouvez pas le bouchon ? », « Combien coûte un débouchage de WC à Bruxelles ? », « Le devis est-il gratuit ? », « Vous prenez la carte ? », « Le prix change si ça prend plus longtemps que prévu ? ») · liens corps : 2 core + 3 catégories + `/contact/`.

- [ ] Écrire · `npm run build && npm run check` · commit `content: tarifs`.

---

### Task 5: Silo core 1 — débouchage canalisation + 5 enfants

**Files:** `debouchage-canalisation-bruxelles.html`, `debouchage-wc-bruxelles.html`, `debouchage-evier-bruxelles.html`, `debouchage-lavabo-bruxelles.html`, `debouchage-douche-baignoire-bruxelles.html`, `debouchage-colonne-immeuble-bruxelles.html`

| Page | Title | H1 | Angle / H2 | FAQ (questions) |
|---|---|---|---|---|
| canalisation (core, 1100 mots) | Débouchage canalisation Bruxelles — 24h/24, prix annoncé | Débouchage de canalisation à Bruxelles : tout ce qui est bouché à l'intérieur | intérieur du bâtiment ; symptômes (glouglou, remontée, odeur) ; causes bruxelloises (fonte ancienne, calcaire, graisse) ; méthode (furet, machine à tambour, caméra) ; cards 5 enfants ; déroulé | Combien ça coûte ; furet ou produit ; ça revient souvent, pourquoi ; vous cassez quelque chose ; qui paie en location ; c'est urgent ou ça peut attendre demain |
| wc (enfant) | Débouchage WC Bruxelles — on vient dans l'heure, 24h/24 | Débouchage WC et toilettes à Bruxelles | lingettes, papier en excès, objet tombé, siphon ; ventouse d'abord ? ; machine ; quand c'est la colonne ; `{{PRIX:wc}}` | Mon WC déborde, je fais quoi en attendant ? ; Débouchage chimique, mauvaise idée ? ; Tous les WC de l'immeuble refoulent ? ; Vous démontez le WC ? |
| evier | Débouchage évier cuisine Bruxelles — graisse, siphon, 24h/24 | Débouchage d'évier de cuisine à Bruxelles | graisse figée, restes, siphon, eau dure ; méthode ; prévention (pas d'huile) ; `{{PRIX:evier}}` | Eau qui stagne des deux côtés ? ; Le lave-vaisselle refoule dans l'évier ? ; Produit déboucheur : oui ou non ? |
| lavabo | Débouchage lavabo Bruxelles — cheveux, savon, calcaire | Débouchage de lavabo à Bruxelles | cheveux + savon + calcaire ; bonde clic-clac ; siphon ; méthode ; `{{PRIX:evier}}` | Ça glougloute quand la douche coule ? ; Le lavabo sent l'égout ? ; Vous changez le siphon ? |
| douche-baignoire | Débouchage douche et baignoire Bruxelles — 24h/24 | Débouchage de douche et baignoire à Bruxelles | cheveux, savon, bonde, siphon de sol de douche italienne ; méthode ; `{{PRIX:evier}}` | Douche à l'italienne, c'est différent ? ; Odeur après douche ? ; Combien de temps ? |
| colonne-immeuble | Débouchage colonne d'immeuble Bruxelles — syndics, 24h/24 | Débouchage de colonne de chute en immeuble à Bruxelles | colonne fonte étroite maisons de maître divisées, refoulement aux étages bas, graisse+calcaire ; accès par trappe/pied de colonne ; machine à tambour + caméra ; syndic et copropriété ; `{{PRIX:colonne}}` | Qui paie : l'occupant du rez ou la copropriété ? ; Vous coupez l'eau de tout l'immeuble ? ; Ça peut revenir ? ; Vous faites un rapport pour le syndic ? |

- [ ] Écrire les 6 pages · `npm run build && npm run check` · commit `content: silo canalisation`.

---

### Task 6: Silo core 2 — débouchage égout + 4 enfants

| Page | Title | H1 | Angle | FAQ |
|---|---|---|---|---|
| egout (core, 1100 mots) | Débouchage égout Bruxelles — refoulement, 24h/24 | Débouchage d'égout à Bruxelles : tout ce qui bouche dehors et dans le réseau | extérieur/réseau privé jusqu'au raccordement ; réseau unitaire ancien, refoulement par fortes pluies, racines des arbres d'alignement, caves sous voirie ; méthode hydrocureur + caméra ; cards 4 enfants ; liens curage-hydrocurage + reparation-canalisation | Égout privé ou public, qui intervient ? ; Ça refoule à chaque orage ? ; Vous trouvez les racines comment ? ; Prix ; Délai ; Rapport assurance |
| chambre-de-visite | Débouchage chambre de visite Bruxelles — 24h/24 | Débouchage de chambre de visite à Bruxelles | où elle est (cour, cave, trottoir), regard, dépôts, méthode, `{{PRIX:egout}}` | Je ne trouve pas ma chambre de visite ? ; Elle déborde dans la cour ? ; Faut-il la nettoyer régulièrement ? |
| sterput | Débouchage sterput Bruxelles — cave qui refoule, 24h/24 | Débouchage de sterput à Bruxelles | sterput = siphon de sol de cave ; refoulement sous le niveau de la voirie ; odeurs ; méthode ; mention clapet via parent seulement (pas de lien) ; `{{PRIX:egout}}` | Mon sterput refoule quand il pleut, c'est normal ? ; Ça sent l'égout dans la cave ? ; On peut éviter que ça recommence ? |
| avaloir | Débouchage avaloir Bruxelles — cour, garage, terrasse | Débouchage d'avaloir à Bruxelles | grille de cour/entrée de garage/terrasse, feuilles, sable ; aspiration + hydrocurage ; `{{PRIX:egout}}` | Cour inondée après l'orage ? ; Avaloir de rue, c'est la commune ? ; Entretien avant l'automne ? |
| gouttiere | Débouchage gouttière et corniche Bruxelles | Débouchage de gouttière et descente pluviale à Bruxelles | corniche (belgicisme), descente en fonte, mousse, feuilles, raccord au sterput/égout ; échelle sécurisée ; `{{PRIX:egout}}` | Corniche ou gouttière, c'est pareil ? ; L'eau déborde de la corniche ? ; Vous montez sur le toit ? |

- [ ] Écrire · build + check · commit `content: silo égout`.

---

### Task 7: Silos catégories — curage/hydrocurage (3 enfants), vidange/assainissement (4), réparation (4)

| Page | Title | H1 | Angle | FAQ |
|---|---|---|---|---|
| curage-hydrocurage (cat) | Curage et hydrocurage canalisation Bruxelles | Curage et hydrocurage de canalisation à Bruxelles | différence débouchage/curage, camion hydrocureur, quand curer ; cards 3 enfants ; lien debouchage-egout | Débouchage ou curage ? ; Fréquence ; Prix ; Bruit/accès rue ; Caméra incluse ? |
| hydrocurage-haute-pression | Hydrocurage haute pression Bruxelles — camion hydrocureur | Hydrocurage haute pression à Bruxelles | buses rotatives, pression, ce que ça enlève (graisse, calcaire, racines), sécurité des vieilles canalisations ; `{{PRIX:hydrocurage}}` | Ça abîme les vieux tuyaux ? ; Combien de temps ? ; Vous passez partout à Bruxelles avec le camion ? |
| curage-egout | Curage d'égout Bruxelles — collecteur privé, syndics | Curage d'égout à Bruxelles | collecteur privé d'immeuble, dépôts, caméra avant/après ; `{{PRIX:hydrocurage}}` | Tous les combien ? ; Le syndic doit prévenir les occupants ? ; Rapport fourni ? |
| entretien-canalisations | Entretien préventif canalisations Bruxelles — contrat | Entretien préventif de canalisations à Bruxelles | contrat annuel immeubles/horeca, planning, caméra, prévention des refoulements ; `{{PRIX:hydrocurage}}` | Ça vaut le coup pour une maison ? ; Contrat syndic ? ; Que comprend l'entretien ? |
| vidange-assainissement (cat) | Vidange et assainissement Bruxelles — fosse, bac à graisse | Vidange et assainissement à Bruxelles | camion de vidange, ce qu'on vidange, réglementation (traitement en centre agréé, sans inventer d'agrément) ; cards 4 enfants | Combien de temps ; Prix ; Odeur ; Où vont les boues ; Accès camion |
| vidange-fosse-septique | Vidange fosse septique Bruxelles — camion, 7j/7 | Vidange de fosse septique à Bruxelles | où il en reste (périphérie, maisons non raccordées), fréquence, signes de saturation ; `{{PRIX:fosse}}` | Tous les combien ? ; Vous nettoyez aussi ? ; Faut-il être présent ? |
| nettoyage-bac-a-graisse | Nettoyage bac à graisse Bruxelles — restaurants, horeca | Nettoyage de bac à graisse à Bruxelles | obligation pour l'horeca, saturation, odeurs, planning hors service ; `{{PRIX:graisse}}` | Fréquence pour un restaurant ? ; Vous venez avant l'ouverture ? ; Contrat ? |
| nettoyage-citerne-eau-de-pluie | Nettoyage citerne eau de pluie Bruxelles | Nettoyage de citerne d'eau de pluie à Bruxelles | boues, algues, pompe, filtre, tous les 5-10 ans ; `{{PRIX:fosse}}` | Tous les combien ? ; Vous descendez dedans ? ; L'eau est potable après ? (non) |
| pompage-cave-inondee | Pompage cave inondée Bruxelles — intervention 24h/24 | Pompage de cave inondée à Bruxelles | orage, refoulement d'égout, nappe ; pompe, assèchement, cause ; `{{PRIX:cave}}` | Je coupe l'électricité ? ; Assurance ? ; Ça va recommencer ? |
| reparation-canalisation (cat) | Réparation canalisation Bruxelles — sans tranchée ou remplacement | Réparation de canalisation à Bruxelles | quand déboucher ne suffit plus : casse, racines, contre-pente ; diagnostic caméra d'abord (lien inspection-camera) ; cards 4 enfants | Réparer ou remplacer ? ; Sans creuser, vraiment ? ; Prix ; Durée ; Garantie |
| chemisage-canalisation | Chemisage canalisation Bruxelles — réparation sans tranchée | Chemisage de canalisation sans tranchée à Bruxelles | gaine résine, sans casser le sol, quand c'est possible ; `{{PRIX:chemisage}}` | Ça tient combien de temps ? ; Tous les tuyaux ? ; Combien de temps ça prend ? |
| remplacement-canalisation | Remplacement canalisation Bruxelles — grès, fonte, PVC | Remplacement de canalisation à Bruxelles | quand le chemisage ne suffit pas, tranchée, PVC, raccords ; prix sur devis après caméra | Vous refaites le sol ? ; Durée ; Permis nécessaire ? |
| clapet-anti-retour | Clapet anti-retour Bruxelles — stop aux refoulements d'égout | Placement de clapet anti-retour à Bruxelles | caves sous voirie, réseau unitaire, principe, entretien ; `{{PRIX:clapet}}` | Obligatoire ? ; Ça se bloque ? ; Où on le pose ? |
| raccordement-egout-public | Raccordement égout public Bruxelles — mise en conformité | Raccordement à l'égout public à Bruxelles | démarches (gestionnaire du réseau, commune), tranchée, contrôle ; sur devis | Qui fait la demande ? ; Délai ; Prix |

- [ ] Écrire les 14 pages (un agent par silo) · build + check · commit `content: silos curage, assainissement, réparation`.

---

### Task 8: Services généraux — inspection caméra, urgent, syndic, horeca

| Page | Title | H1 | Angle | FAQ |
|---|---|---|---|---|
| inspection-camera-canalisation | Inspection caméra canalisation Bruxelles — rapport vidéo | Inspection caméra de canalisation à Bruxelles | quand (odeur, refoulements répétés, achat immobilier), matériel, localisation du défaut, rapport photo/vidéo pour assurance et syndic ; `{{PRIX:camera}}` / `{{PRIX:camera-apres}}` | Obligatoire avant une réparation ? ; Combien de temps ? ; Achat d'une maison ? ; Rapport pour l'assurance ? ; Prix |
| debouchage-urgent | Débouchage urgent Bruxelles — 24h/24, délai annoncé à l'appel | Débouchage urgent à Bruxelles, jour et nuit | page de conversion : ce qui se passe à l'appel, délai, ce que vous faites en attendant, nuit/dimanche `+30 %` en phrase (pas de tableau), zones | Vous venez vraiment la nuit ? ; Délai ? ; Prix majoré ? ; Je coupe l'eau ? ; Vous prenez la carte ? |
| debouchage-syndic-immeuble | Débouchage syndic et immeuble Bruxelles — colonnes, collecteur | Débouchage pour syndics et immeubles à Bruxelles | interlocuteur unique, colonnes, collecteur, rapport, facturation à l'ACP, contrat d'entretien ; liens colonne-immeuble + entretien-canalisations | Qui paie ? ; Rapport pour l'AG ? ; Contrat ? ; Intervention sans l'occupant ? ; Délai |
| debouchage-horeca | Débouchage horeca Bruxelles — cuisines, bac à graisse | Débouchage et bac à graisse pour l'horeca à Bruxelles | cuisine pro, graisse, siphons de sol, intervention avant service, bac à graisse (lien) ; contrat | Vous venez hors service ? ; Contrôle AFSCA ? ; Contrat ? ; Prix ; Odeurs |

- [ ] Écrire · build + check · commit `content: services généraux`.

---

### Task 9: Hub /services complet, revue croisée, contrôle visuel, livraison

- [ ] Compléter `/services/` avec les 34 cards, `npm run build && npm run check` → `✓`.
- [ ] Revue éditoriale : un agent relit les 34 pages contre `docs/redaction-spec.md` (ton, tu/vous, belgicismes, répétitions, coquilles) et corrige.
- [ ] Contrôle visuel navigateur : `/`, `/debouchage-canalisation-bruxelles/`, `/debouchage-sterput-bruxelles/`, `/tarifs-debouchage-bruxelles/`, `/contact/` en desktop et 375 px ; menu déroulant, barre mobile, formulaire.
- [ ] `wc -c dist/index.html` < 60 000 ; vérifier JSON-LD parse (`node -e` sur le script extrait).
- [ ] Commit final `chore: phase 1 prête pour Netlify`, README court (comment builder, où changer le numéro, comment ajouter une commune plus tard).
