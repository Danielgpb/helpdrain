# Spec — helpdrain.be, phase 1 (silo services Bruxelles)
Date : 6 septembre 2026. Périmètre validé avec Daniel le même jour.

## 1. Objectif
Site statique de HelpDrain Débouchage (helpdrain.be) qui ranke sur « débouchage bruxelles » et ses déclinaisons service, et convertit en appels au +32 460 20 30 90. Phase 1 = 34 pages services, zéro page commune. Phase 2 (hors spec) = une page par commune (19 RBC, puis Brabant wallon).

## 2. Données d'entreprise (source unique : `data/business.json`)
- siteName « HelpDrain Débouchage », domain `https://helpdrain.be`
- phone `+32460203090`, phoneDisplay `0460 20 30 90`, WhatsApp sur le même numéro (`https://wa.me/32460203090`) — hypothèse à confirmer
- email `contact@helpdrain.be` (provisoire), street vide, postalCode `1000`, city `Bruxelles`
- TVA / BCE : inconnus, champ vide → non affiché tant que vide
- openingHours `Mo-Su 00:00-23:59`, affichage « 24h/24, 7j/7 »
- gbp : null tant que la fiche n'existe pas → pas de lien carte, pas de bloc avis
- Marque séparée d'HelpCar : aucune mention d'HelpCar nulle part.

## 3. Trust signals (les seuls claims autorisés, tous confirmés tenables)
1. Intervention 24h/24 et 7j/7, délai d'arrivée annoncé à l'appel
2. Inspection caméra avant et après intervention
3. Prix fixe annoncé au téléphone avant de partir : le prix annoncé est le prix payé
4. Rapport photo et vidéo fourni pour l'assurance
Interdits : « pas cher », « agréé » sans agrément réel, années d'expérience chiffrées, nombre d'avis tant que `data/avis.json` est vide.

## 4. Architecture technique
Copie adaptée du générateur de peintre-batiment-bruxelles.

```
build.js                 générateur statique zéro dépendance → dist/
data/business.json       NAP, source unique
data/avis.json           note, nombreAvis, avis[] (vide au départ ; bloc + AggregateRating masqués si vide)
data/tarifs.json         grille tarifaire unique → tableau de /tarifs + phrase indicative des FAQ + schema Offer
data/communes/           vide en phase 1 ; le build tolère le dossier vide
content/pages/*.html     38 fichiers : 34 pages + 404, merci, mentions-legales, politique-confidentialite
templates/base.html      layout : top bar, header + menu déroulant (4 groupes), footer 5 colonnes, barre CTA mobile
assets/css/main.css      design system, inliné au build
assets/img/*.webp        heros ; si le fichier manque, la page-head reste unie (pas d'image cassée)
scripts/check-links.js   liens internes, ancres interdites, pages orphelines
scripts/check-content.js H1 unique, title ≤ 60, description ≤ 160, tournures interdites, téléphone en dur, règles de maillage
netlify.toml + netlify/functions/lead.mjs   déploiement, redirect www→apex, relais Suivi Leads (env vars)
```

Build : inline CSS, JSON-LD par page (`Plumber` @id `/#business` partout + `Service`/`FAQPage`/`BreadcrumbList` selon META + `OfferCatalog` sur /tarifs), `{{PHONE}}`, `{{PHONE_DISPLAY}}`, `{{WHATSAPP}}`, `{{EMAIL}}`, sitemap.xml, robots.txt, favicon.svg, 404.

Schema `Plumber` : name, url, telephone, email, address (1000 Bruxelles), openingHoursSpecification 24/7, areaServed = 19 communes (liste en dur dans build.js), knowsAbout = les 5 familles de services, priceRange « €€ ». `AggregateRating`/`review` seulement si avis.json contient des avis réels affichés.

## 5. Design
- Palette : navy `#0F2A44` (fond hero, titres), orange `#E0611A` (CTA, accents, famille HelpCar), blanc cassé `#F7F6F2`, gris ardoise `#5B6B7E`, bleu-gris `#E4E9EF` pour les bandeaux, vert `#2E7D5B` pour les ✓.
- Typo : une seule Google Font pour les titres (Archivo, 600-800), corps en police système. Aucune autre requête externe.
- Composants (classes reprises du site peintre) : `.page-head.has-img`, `.trust-strip`, `.section` / `.section-alt`, `.wrap` / `.narrow`, `.cards` + `.card`, `.steps` + `.step`, `.callout`, `.table-scroll`, `.cta-band`, `.faq-block`, `.reviews`, `.form-card`, `.mobile-cta` (Appeler + WhatsApp).
- Menu : Accueil · Débouchage ▾ · Curage & entretien ▾ · Assainissement ▾ · Réparation ▾ · Tarifs · Contact (contenu exact dans l'arborescence). Menu mobile en accordéon sans JS lourd (bouton + classe).
- Footer : Débouchage intérieur (core 1 + enfants) · Égout & réseau (core 2 + enfants) · Curage & assainissement (cat 1 + cat 2) · Réparation (cat 3) · Professionnels (syndic, horeca, entretien) + bloc NAP, liens mentions légales et confidentialité.
- Poids visé : HTML < 60 Ko, < 15 requêtes, LCP < 2 s mobile.

## 6. Contenu

### Ton (voir docs/redaction-spec.md, écrit avant les pages)
« Comme parler à son voisin » : « on » + « vous » en base, phrases courtes, exemples bruxellois concrets (maison de maître à Ixelles, cave sous voirie à Anderlecht, brasserie du Pentagone). Le « tu » uniquement dans des questions de FAQ formulées comme le client (« Mon sterput refoule quand il pleut, c'est normal ? ») ou dans un aparté court, jamais tu/vous dans un même paragraphe. Français de Belgique : sterput, corniche, chambre de visite, égouttage, syndic, commune, GSM. Interdits : « n'hésitez pas », « que ce soit », « au cœur de », « en outre », « de plus, », « il est important de », « il convient de », « haut de gamme », « clé en main », « partenaire de confiance », « service de qualité », « équipe expérimentée », « satisfaction client », « pas cher », majuscules intégrales, listes à puces dans l'éditorial, emojis.

### Gabarits par type de page
- **Homepage** (~1500 mots) : hero (H1 « Débouchage Bruxelles 24h/24 » + lead + 2 CTA + trust strip) · « Ce qu'on débouche » (grille 2 core + 3 catégories) · « Comment ça se passe » (4 étapes : appel, prix annoncé, intervention, rapport) · « Le prix, vous le connaissez avant qu'on parte » (lien tarifs) · « Bruxelles a un réseau particulier » (les 6 local issues) · « Pour les professionnels » (syndic, horeca) · 5 services généraux · avis (masqué si vide) · 19 communes en texte (sans liens) · FAQ 6 questions · CTA.
- **Core / catégorie** (1000-1200 mots) : page-head + trust strip · ouverture problème client · H2 symptômes / causes bruxelloises · H2 ce qu'on fait (méthode, matériel) · H2 grille des enfants (cards) · H2 déroulé · FAQ 5-6 · CTA. Liens corps : enfants + liens transverses autorisés (§7) + homepage.
- **Enfant** (600-800 mots) : page-head + breadcrumb · ouverture · H2 pourquoi ça bouche (spécifique) · H2 comment on intervient · H2 ce que ça coûte (facteurs + une phrase indicative depuis tarifs.json + lien parent, pas de tableau) · FAQ 3-4 · CTA. Liens corps : parent + /contact (+ inspection caméra si pertinent). Rien d'autre.
- **Généraux** (800-1000 mots) : même squelette qu'un enfant, FAQ 5, liens selon §7.
- **/tarifs** : tableau depuis tarifs.json (prestation, fourchette TVAC, inclus), H2 ce qui fait varier le prix, H2 nuit/WE, H2 TVA 6 %/21 %, H2 qui paie (locataire/propriétaire/syndic/assurance), FAQ 6, CTA. Seule page avec des chiffres en tableau.
- **/services** : hub, toutes les pages en cards groupées par famille, 300 mots.
- **/a-propos** : équipe, matériel (hydrocureur, caméra, machine à tambour), méthode, zone, 600 mots. Pas de chiffres inventés.
- **/contact** : NAP, formulaire Netlify `depannage` (nom, téléphone, commune, problème, message, honeypot), promesse de rappel, 300 mots.
- **Utilitaires** noindex : merci, mentions légales (données à compléter signalées), confidentialité, 404.

### Titles / metas
Title ≤ 60 caractères, mot-clé cible + bénéfice, structures variées. Meta ≤ 160 caractères avec le numéro ou un CTA. Un seul H1 avec le mot-clé cible. Alt des heros : descriptif + service + Bruxelles.

## 7. Maillage (règles vérifiées par check-content.js)
- Homepage → 2 core, 3 catégories, 5 généraux, /services, /contact.
- Core 1 → ses 5 enfants, /inspection-camera, /debouchage-urgent, homepage.
- Core 2 → ses 4 enfants, /curage-hydrocurage, /reparation-canalisation, homepage.
- Cat 1 → ses 3 enfants, /debouchage-egout, homepage. Cat 2 → ses 4 enfants, homepage. Cat 3 → ses 4 enfants, /inspection-camera, homepage.
- Enfant → son parent, /contact, optionnellement /inspection-camera-canalisation-bruxelles. Jamais un autre enfant, jamais /tarifs dans le corps (le menu s'en charge).
- Généraux → homepage, /contact ; horeca → /nettoyage-bac-a-graisse ; syndic → /debouchage-colonne-immeuble + /entretien-canalisations ; tarifs → 2 core + 3 catégories.
- Ancres naturelles, jamais deux fois la même ancre sur une page, zéro lien `#`.
Le checker lit la matrice `docs/maillage.json` (page → liens corps autorisés) et échoue sur tout lien de corps hors matrice.

## 8. Prix (`data/tarifs.json`, base proposée dans docs/concurrents/00-synthese.md §2, ajustable)
Fourchettes TVAC : évier/lavabo/douche/baignoire 95-150 · WC 110-180 · colonne 180-350 · égout/chambre/sterput/avaloir 150-350 · hydrocurage 250-450 · caméra seule 150-250 · caméra après débouchage offerte · vidange fosse 250-500 · bac à graisse 150-400 · pompage cave 200-500 · clapet posé 400-900 · chemisage 250-400 €/m · nuit/dimanche/férié +30 % · TVA 6 % logement > 10 ans sinon 21 %.

## 9. Conversion
- `tel:` dans top bar, header, hero, CTA band, footer, barre mobile (6+ par page).
- WhatsApp : bouton secondaire hero + barre mobile.
- Formulaire sur /contact uniquement (Netlify Forms + relais Suivi Leads, source « helpdrain.be »).
- Suivi : pas de GA/GTM dans cette phase (à brancher au lancement, hors spec).

## 10. Erreurs et garde-fous
- Build échoue si META manquant ou JSON invalide, si une page référence une image absente ? Non : image absente → page-head sans image, avertissement console.
- `npm run check` = check-links + check-content ; le déploiement Netlify lance `npm run build && npm run check`.
- Aucun numéro en dur dans content/ (vérifié).

## 11. Tests / vérification
- `npm run build` : 38 pages, sitemap 34 URL indexables.
- `npm run check` : 0 lien cassé, 0 orpheline, 0 tournure interdite, matrice de maillage respectée, titles/metas dans les limites.
- Contrôle visuel dans le navigateur intégré : homepage, une page core, une enfant, tarifs, contact, mobile 375 px.
- Validation JSON-LD d'une page core avec un parseur JSON (structure) ; test Rich Results à faire après mise en ligne.

## 12. Hors périmètre
Pages communes, version NL, blog, GA/GTM, photos réelles (prompts livrés dans docs/prompts-photos-copier-coller.md), fiche GBP, logo définitif (un logo SVG texte est généré).
