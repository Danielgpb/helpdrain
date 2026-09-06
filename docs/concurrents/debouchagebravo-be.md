# Analyse concurrent — debouchagebravo.be

> Position observée : organique #4 sur « débouchage bruxelles », avec un snippet prix (« Débouchage simple d'un évier ou d'un lavabo : entre 60 € et 120 € »).
> Date de crawl : 2026-09-06. Méthode : `curl -sL` avec User-Agent navigateur + extraction Python (titles, Hn, texte, liens, images, JSON-LD, scripts). 17 URLs récupérées, toutes en HTTP 200.
> Tout le contenu cité ci-dessous est de la donnée observée sur le site concurrent.

---

## 1. Fiche

| Élément | Valeur observée |
|---|---|
| Domaine | https://debouchagebravo.be (canonicals sans `www`, HTTPS) |
| Marque | « Débouchage Bravo » / « Bravo Débouchage » (les deux formes coexistent, parfois « Égouttage Bravo » sur la page inspection caméra) |
| Nb de pages (sitemap Yoast `sitemap_index.xml`) | **page-sitemap : 25 pages** · post-sitemap : **88 articles** (2019-09-30 → 2026-08-07) · category : 3 · author : 2 · `ville-seo` : 9 URLs en `?ville-seo=...` (CPT non réécrit) · `dyn-localisation` : 3 et `dyn-mot-cle` : 4 URLs **« brouillon-auto »** (brouillons exposés dans le sitemap). ≈ **125 URLs**, dont ~113 contenus réels. |
| CMS / stack | **WordPress 7.0.4** (meta generator) · thème **Divi 4.27.5** (Elegant Themes) · **Divi Builder** comme page builder · plugin **Supreme Modules Pro for Divi** · **Yoast SEO v28.1** · **FAQ Schema for pages and posts v2.0** (accordéons jQuery UI) · **SWIS Performance** (cache/minification `wp-content/swis/cache/`) · `theme-customisations-master` · PHP 8.4.25 |
| Hébergement | nginx + **Plesk** (`x-powered-by: PleskLin`), IP 194.1.205.133 — **VERIXI SA / P4X SPRL (AS6696), Neupré, Belgique**. Mentions légales : « Hébergeur du site : ID Agency srl, Tribezone 26, 4890 Thimister-Clermont ». Site réalisé par **idagency.be** (crédit footer sur toutes les pages). |
| Téléphone | Principal : **0472 39 46 15** (`tel:+32472394615`, header + footer + boutons). Secondaire : **0488 81 76 63** (`tel:0488817663` sur les rows cliquables Divi de la home, page `debouchage-a-bruxelles2`, mentions légales). Un troisième numéro **073 942 84 36** apparaît 2× (texte brut, non lié). |
| E-mail | `debouchagebravo@gmail.com` (contact, mentions légales) et `info@debouchagebravo.be` (landing pages) — **incohérent**. |
| NAP | Footer + contact : **Clos Hof te Ophem 16, 1070 Anderlecht**. Mentions légales : **Rue Verbist 12, 1210 Saint-Josse-ten-Noode**, TVA **BE0744679985**, gérant « Bangoura Oumar ». → **Deux adresses différentes** sur le même site. |
| Langues | **FR uniquement** (`<html lang="fr-FR">`, `og:locale fr_FR`). Aucun hreflang, aucune version NL/EN. |
| Avis | Widget maison « 4,7 · 66 avis — Voir sur Google » (pages vidange + bac à graisse), lien vers une recherche Google locale « Bravo Avis ». 2 témoignages texte sur la home. Landing : « 96% de clients satisfait ». |
| Réseaux | Facebook (SDK chargé, lien « Suivez-nous sur Facebook »). Icônes X/Instagram/RSS sans liens réels dans le footer Divi. |
| Périmètre | Multi-métier : débouchage + plomberie + chauffage (chaudières) + vidange fosse + bac à graisse + inspection caméra. Pages communes : Etterbeek, Ixelles, Auderghem, Woluwe-Saint-Lambert, Uccle, Saint-Gilles + Waterloo/Nivelles/Braine-l'Alleud (chauffage-plomberie). |

---

## 2. Homepage — https://debouchagebravo.be/

- **Title** : `Accueil - Débouchage Bravo , votre déboucheur spécialisé à Bruxelles` (espace avant la virgule, « Accueil - » en tête : title faible).
- **Meta description : absente.**
- **H1 exact** : `Débouchage à Bruxelles`
- **Nb de mots (contenu principal) : ≈ 2 860** (HTML 279 Ko).
- **Liste des H2 dans l'ordre** :
  1. Votre canalisation bouchée à Bruxelles ? Nous intervenons en urgence
  2. Pourquoi choisir Débouchage Bravo comme déboucheur à Bruxelles ?
  3. FAQ sur le débouchage à Bruxelles
  4. Combien coûte un dépannage ?
  5. Les causes les plus courantes des bouchons dans les canalisations à Bruxelles
  6. Comment prévenir les problèmes de débouchage dans votre maison à Bruxelles ?
  7. Les dangers des bouchons de canalisation non traités à Bruxelles
  8. Pourquoi faire appel à un déboucheur professionnel à Bruxelles ?
  9. Comment choisir le bon déboucheur à Bruxelles ?
  10. Nos dernières actualités
  11–13. (titres des 3 derniers articles de blog en H2 — erreur de hiérarchie)
- **H3** : « Quels signes indiquent une canalisation bouchée ? », « Notre zone d'intervention à Bruxelles et en périphérie », « Service d'urgence 24/24 », « Plombiers, chauffagistes et installateurs sanitaires à Bruxelles ». **Les questions FAQ sont en H5** (16 questions).

### Structure des sections (ordre d'affichage)
1. **Hero** : numéro « 0472 39 46 15 » en haut, H1, paragraphe d'intro, 2 boutons « Appelez nous » (→ /contact/, pas `tel:`) et « Découvrir nos services ».
2. **Bandeau chiffres** : « +10 ans d'expérience » · « 24/7 service d'urgence » · « 3 spécialistes certifiés » · « 100% devis transparents ».
3. **4 cartes services** (images shutterstock, sans alt) : Débouchage des égouts / Chauffage / Plomberie / Inspection par caméra.
4. **Bloc « Débouchage de canalisation à Bruxelles »** : signes d'une canalisation bouchée (liste), encart « ⚡ CONSEIL ».
5. **Pourquoi choisir** + **zone d'intervention** (liste de communes, « 📍Vous ne voyez pas votre commune ? Nous confirmons notre disponibilité en quelques minutes. ») + bouton « Nous contacter ».
6. **FAQ accordéon (16 Q/R)** — c'est ici que se trouvent les **prix** (voir §4).
7. **Service d'urgence 24/24** + **citation du patron** (« En tant que patron, je suis présent sur tous les chantiers… »).
8. **« Combien coûte un dépannage ? »** → bouton « Demandez-nous un devis » (pas de prix ici).
9. **5 blocs texte SEO génériques** (causes, prévention, dangers, pourquoi un pro, comment choisir) — ~120 mots chacun, contenu manifestement généré.
10. **3 derniers articles** de blog.
11. **2 témoignages** (Louise Janssens, Schaerbeek / Yannick Wouters, Bruxelles-capitale) — datés 2019, sur une rénovation de salle de bain, pas sur du débouchage.
12. **Footer** : « Débouchage à Bruxelles et dans le Brabant Wallon », coordonnées Anderlecht, téléphone, mentions, Facebook, crédit idagency.

### CTA
- Texte des CTA : « Appelez nous », « Découvrir nos services », « Nous contacter », « Contacter débouchage Bravo », « Demandez-nous un devis », « voir tous les services », « Afficher plus d'articles ».
- **Liens `tel:` : 2** (`+32472394615` header et footer) + 2 rows Divi cliquables vers `tel:0488817663` (numéro différent !). Les boutons principaux du hero renvoient vers /contact/ et non vers `tel:`.
- Pas de bouton sticky mobile, pas de WhatsApp, pas de formulaire sur la home.

### Trust signals
- « +10 ans d'expérience », « 3 spécialistes certifiés », « 100% devis transparents », « 24/7 service d'urgence », « Notre travail est toujours soigné, garanti et au meilleur prix ».
- Aucune note Google sur la home (le widget 4,7/66 avis n'est que sur vidange/bac à graisse). Aucun logo d'agrément, aucune assurance, aucune garantie chiffrée.

### Prix sur la home
Oui, dans la réponse FAQ « Quel est le prix d'un débouchage à Bruxelles ? » (c'est le texte repris dans le snippet Google) — voir §4.

### FAQ (16 questions exactes, en H5)
1. Pourquoi ma canalisation est-elle bouchée à Bruxelles ?
2. Comment déboucher un tuyau bouché à Bruxelles ?
3. Les principales techniques de débouchage
4. Comment entretenir une canalisation pour éviter qu'elle ne se bouche ?
5. Qui appeler quand une canalisation est bouchée à Bruxelles ?
6. Quel est le prix d'un débouchage à Bruxelles ?
7. Est-ce que l'assurance habitation prend en charge les canalisations bouchées ?
8. Canalisation bouchée à Bruxelles : locataire ou propriétaire, qui doit payer ?
9. Quels signes indiquent qu'une canalisation est bouchée ?
10. Comment enlever un gros bouchon dans une canalisation ?
11. Que faire si ma canalisation est bouchée et que l'eau remonte ?
12. Débouchage Bravo propose-t-il aussi des services de plomberie et de chauffage ?
13. L'entretien de chaudière est-il obligatoire à Bruxelles ?
14. Combien de temps dure une intervention de débouchage à Bruxelles ?
15. Comment entretenir ses canalisations pour éviter les bouchons ?
16. (doublon quasi identique de la 4 et de la 9 — la FAQ se répète)

**Aucun schema FAQPage n'est émis** malgré le plugin « FAQ Schema » installé (0 bloc `application/ld+json` sur tout le site).

---

## 3. Pages service récupérées

Le site n'a **pas** de page dédiée WC, évier, hydrocurage/curage, tarifs ou urgence : ces intentions sont traitées dans la home, la page pilier « debouchage-bruxelles », les pages communes et le blog. Toutes les pages partagent : header Divi (menu « Nos services » + « Actualités » + « Inspection » + « Contact »), footer identique, bloc « 4 cartes services » recyclé en bas de page, `robots: index, follow`, canonical auto-référent, OG title/url/image (og:description seulement quand Yoast a une meta), **0 JSON-LD**, images shutterstock **sans alt**.

### 3.1 /debouchage-bruxelles/ (page pilier, la mieux construite)
- **Title** : `Débouchage à Bruxelles - Débouchage Bravo , votre déboucheur spécialisé à Bruxelles`
- **Meta description** : absente
- **H1 (×2 !)** : `Débouchage à Bruxelles` puis `Bravo, votre expert en canalisations et égouts`
- **H2** : Pourquoi choisir Bravo pour votre débouchage à Bruxelles ? · Service de débouchage d'urgence à Bruxelles · Débouchage de canalisations à Bruxelles · Débouchage d'égouts à Bruxelles · Débouchage de WC, éviers et douches · Entretien préventif des canalisations · Un débouchage écologique et responsable · Bravo, votre partenaire pour votre débouchage à Bruxelles · ❓FAQ – Tout savoir sur le débouchage à Bruxelles
- **Mots** : ≈ 1 090
- **Prix** : aucun (« un devis clair et transparent est toujours proposé avant le début des travaux »)
- **Maillage interne** : 1 seul lien contextuel → /contact/ (« Nous contacter ») + les 4 cartes services (image, sans ancre texte). Aucun lien vers les pages communes ni le blog.
- **FAQ (5, H5)** : Quels sont les signes indiquant qu'un débouchage est nécessaire ? · Faut-il toujours appeler un professionnel ? · Quels sont vos délais d'intervention ? · Quels sont les tarifs pour un débouchage à Bruxelles ? · Proposez-vous un service d'entretien régulier ?
- **Images** : 10 (1 png logo, 9 jpg shutterstock), 8 lazy, **9 sans alt**.
- Note : cette page n'est **pas dans le menu** ; elle n'est liée que par les pages communes (« débouchage à Bruxelles » → / en réalité). Curieusement la home et cette page ont le même H1.

### 3.2 /debouchage-de-canalisations-et-degouts/ (page « Débouchage » du menu)
- **Title** : `Débouchage de canalisations et d'égouts - Débouchage Bravo`
- **Meta** : `Une mauvaise odeur persistante, un écoulement difficile ? Faites appel à Débouchage Bravo pour le débouchage de canalisations et égouts.`
- **H1** : `Débouchage des canalisations et des égouts` (le texte affiché commence par « Débouchage des WC, des éviers, des canalisations d'égouts »)
- **H2** : Une mauvaise odeur persistante, un écoulement difficile? · Débouchage par haute pression · Vous êtes un professionnel ou le gestionnaire de travaux d'une commune? · Débouchage rapide à Bruxelles et dans les communes du Brabant Flamand · (H3) Une question, un devis ?
- **Mots** : ≈ 350 — **page très mince** pour la page service principale du menu.
- **Prix** : aucun. **FAQ** : aucune.
- **Maillage** : → /contact/ « Nous Appeler » + galerie de 5 photos de chantier (liens vers les fichiers jpg) + 4 cartes.
- **Images** : 13 (5 photos réelles de chantier `IMG_2019…` **sans attribut alt du tout**, reste shutterstock alt vide).

### 3.3 /inspection-camera-canalisations/
- **Title** : `Inspection camera des canalisations - Débouchage Bravo` (sans accent sur caméra)
- **Meta** : `L'inspection caméra des canalisations permet d'identifier les causes de bouchons réguliers et permet d'intervenir rapidement.`
- **H1** : `Inspection des canalisations par caméra vidéo`
- **H2** : « L'inspection des canalisations à l'aide d'une caméra est devenue une étape incontournable dans le domaine de l'exploration des réseaux d'évacuation et d'égouttage… » (phrase entière en H2) · Du matériel d'endoscopie moderne · Rapide et redoutablement efficace · En plus de localiser le problème, cette inspection aide à faire le point sur l'état général de vos canalisations · Dépannage rapide à Bruxelles et dans les communes du Brabant Flamand
- **Mots** : ≈ 335. **Prix** : aucun. **FAQ** : aucune. Marque écrite « Égouttage Bravo ».
- **Maillage** : → /contact/ + 4 cartes. **Images** : 8, 7 sans alt.

### 3.4 /vidange-fosse-septique-bruxelles/ (nouvelle génération, 2025-2026)
- **Title** : `Vidange de fosse septique à Bruxelles - Débouchage Bravo`
- **Meta** : `Votre fosse septique déborde ? Vos WC refoulent ? Bravo Débouchage intervient rapidement pour la vidange de votre septique à Bruxelles.`
- **H1** : `Vidange de fosse septique à Bruxelles`
- **H2** : Pourquoi faire vidanger sa fosse ? · Notre méthode de vidange (procédure professionnelle) · Ce que Bravo Débouchage garantit · Où intervenons-nous ? · Tous types de fosses et dispositifs · Sécurité : pourquoi éviter le "fait-maison" ? · Entretien préventif : nos 7 conseils simples · Tarifs & devis · Urgences courantes que nous résolvons · Services complémentaires · Besoin d'une vidange de fosse septique à Bruxelles ? · FAQ – Vidange de fosse septique à Bruxelles
- **Mots** : ≈ 850
- **Prix** : aucun chiffre ; « tarification au m³ + options (curage, urgence) », « devis gratuit avant intervention ».
- **Maillage interne : 0 lien contextuel** (seulement 7 boutons `tel:`), pas de lien vers débouchage/curage alors que le texte les mentionne.
- **FAQ (5, H5)** : À quelle fréquence vidanger ? · Combien de temps dure l'intervention ? · Faut-il vider complètement ? · Que se passe-t-il si la fosse est vide d'eau après vidange ? · Proposez-vous un passage préventif ?
- **Formulaire** Divi Contact Form (Nom, Téléphone, Code postal, Sujet, Message, bouton « Être rappelé rapidement », « Réponse garantie dans les 15 minutes ») + reCAPTCHA. Widget avis « 4,7 · 66 avis Voir sur Google ».
- **Images** : 7, 5 sans alt (une avec alt « camera-inspection-debouchage3 » — nom de fichier).

### 3.5 /nettoyage-bac-a-graisse-bruxelles/ (même gabarit que vidange)
- **Title** : `Nettoyage de bac à graisse à Bruxelles - Débouchage Bravo`
- **Meta** : `Evacuation lente, mauvaises odeurs ? Bravo Débouchage intervient partout à Bruxelles pour le nettoyage de votre bac à graisse.`
- **H1** : `Nettoyage de bac à graisse à Bruxelles`
- **H2** : Pourquoi dégraisser votre bac à graisse ? · Fréquence recommandée : · Notre méthode professionnelle (procédure en 6 étapes) · Ce que Bravo Débouchage garantit · Types de bacs pris en charge · Service en cuisine : zéro perturbation · Entretien préventif : nos 8 bonnes pratiques · Options utiles · Sécurité & conformité · Tarifs & devis pour faire dégraisser votre bac à graisse · Besoin d'un dégraissage de bac à graisse à Bruxelles ? · FAQ – Dégraissage bac à graisse à Bruxelles
- **Mots** : ≈ 975
- **Prix** : aucun chiffre ; « Forfait bac intérieur (petits volumes) : prix d'appel attractif. Bacs enterrés : chiffrage au m³ pompé. Urgence soir/week-end : majoration transparente annoncée à la prise de RDV. »
- **FAQ (5)** : À quelle fréquence dois-je dégraisser mon bac ? · Combien de temps dure l'intervention ? · Pouvez-vous gérer aussi mes égouts ? · Que se passe-t-il si je tarde ? · Fournissez-vous une preuve pour mon registre HACCP ?
- **Maillage** : 0 lien contextuel. Formulaire + reCAPTCHA + widget avis. Images : 7, 6 sans alt.

### 3.6 /debouchage-uccle/ (page commune, gabarit répliqué sur Etterbeek/Ixelles/Auderghem/WSL/Saint-Gilles)
- **Title** : `Débouchage à Uccle - Débouchage Bravo`
- **Meta** : `Les urgences de débouchage peuvent survenir à n'importe quel moment et provoquer des désagréments importants. Faites appel à Débouchage Bravo`
- **H1 (×2)** : `Débouchage à Uccle` + `Bravo, votre expert déboucheur`
- **H2** : Le spécialiste du débouchage en urgence à Uccle · Débouchage de canalisation · Débouchage d'égout · Débouchage de toilettes · Débouchage d'évier · Débouchage de baignoire/douche · FAQ sur le débouchage à Uccle
- **Mots** : ≈ 1 750 (texte long, très répétitif, « À Uccle, Bravo Débouchage… » en tête de chaque bloc)
- **Prix** : aucun (« Nos tarifs dépendent de la complexité de l'intervention… n'hésitez pas à nous contacter »)
- **FAQ (5)** : Comment éviter les bouchons dans les canalisations ? · Quels sont les signes indiquant un bouchon dans une canalisation ? · Est-il nécessaire de faire appel à un professionnel pour déboucher une canalisation ? · En combien de temps intervenez-vous à Uccle ? · Quels sont vos tarifs ?
- **Maillage** : 1 lien « débouchage à Bruxelles » → home. Images : 11, 10 sans alt.

### 3.7 /landing-page-debouchage-bravo/ (landing Ads, indexable)
- **Title** : `Landing page - Débouchage Bravo - Débouchage Bravo , votre déboucheur spécialisé à Bruxelles` — meta absente.
- **H1** : `Débouchage rapide et efficace partout à Bruxelles`
- **H2** : Pourquoi choisir Bravo Débouchage à Bruxelles ? · Nos services de débouchage à Bruxelles : · Zone d'intervention ultra rapide à Bruxelles · Besoin d'un débouchage urgent à Bruxelles ? · Foire aux questions Bravo Débouchage à Bruxelles
- **Mots** : ≈ 440. Bandeau « Intervention rapide 7j/7 · Devis gratuit · 96% de clients satisfait ». Puces emoji : « 🚚 Débouchage par hydrocurage haute pression », « 📹 Inspection caméra offerte si besoin », « 💸 Tarifs transparents – devis gratuit avant intervention ».
- **FAQ (5)** : Quels types de bouchons pouvez-vous déboucher ? · En combien de temps pouvez-vous intervenir ? · Combien coûte une intervention de débouchage ? · Proposez-vous l'inspection caméra ? · Êtes-vous disponibles le week-end ou les jours fériés ?
- **Prix** : aucun. 6 liens `tel:`. Formulaire + reCAPTCHA. Images : 5, 4 sans alt.
- Deux autres landings indexables : `/debouchage-a-bruxelles/` (title « Landing page - Débouchage… », 343 mots) et `/debouchage-a-bruxelles2/` (title « **backupLanding page** - Débouchage… », H1 « Débouchage Plombier chauffagiste », 594 mots) — **pages de test/backup indexées**, quasi dupliquées de la home.

### 3.8 /contact/
- **Title** : `Contact - Débouchage Bravo , votre déboucheur spécialisé à Bruxelles` — meta absente.
- **H1** : `Formulaire de Contact` · H2 : `Coordonnées` · ≈ 22 mots.
- Formulaire Divi (Prénom, Nom, Email, Téléphone, Message, « Envoyer ») + reCAPTCHA. Image statique `map-bravo.png` (pas de Google Maps embed). Adresse Anderlecht, 0472 39 46 15, debouchagebravo@gmail.com.

### 3.9 Articles de blog consultés (pertinents pour nos pages)
| URL | Title | Mots | H2 notables |
|---|---|---|---|
| /curage-canalisation-bruxelles-tout-savoir-avant-intervenir/ (08/07/2026) | Curage de canalisations, savoir avant d'agir \| Bravo Débouchage | ≈ 2 465 | Curage ou débouchage : quelle est la vraie différence ? · Quelles techniques de curage existent ? · À quelle fréquence faut-il curer ses canalisations à Bruxelles ? · **Combien coûte un curage de canalisation à Bruxelles ?** · Curage préventif vs curage d'urgence · FAQ |
| /canalisation-bouchee-qui-doit-payer-en-belgique/ (10/03/2026) | Canalisations bouchées : locataire ou propriétaire, qui doit payer ? | ≈ 1 915 | Qui est responsable… en Belgique ? · Quand le locataire est-il clairement responsable ? · L'assurance habitation couvre-t-elle… ? · **Peut-on bénéficier d'un taux de TVA réduit… ?** |
| /les-differentes-techniques-de-debouchage-manuel-mecanique-ou-hydrodynamique/ (20/06/2025) | Les différentes techniques de débouchage : manuel, mécanique ou hydrodynamique ? | ≈ 1 115 | 1. Débouchage manuel · 2. Débouchage mécanique · 3. Débouchage hydrodynamique · 4. Comparatif rapide (tableau) |
| /deboucher-un-egout-techniques-et-outils-de-pros/ (2019) | Déboucher un égout : techniques et outils de pros | ≈ 855 | Comment font les pros… · L'importance de l'inspection d'un égout bouché · Les bons outils… |

Le blog est majoritairement **chauffage/plomberie** (chaudières, pompes à chaleur, chauffe-eau…) ; ~25 % des 88 articles touchent au débouchage. Auteurs : `admin_bravo` / `admin_bravodebouchage` (pas de nom réel, pas de bio).

---

## 4. Prix — tout ce qui est chiffré sur le site

| Service | Prix affiché (texte exact) | Où |
|---|---|---|
| Débouchage simple évier / lavabo | « entre 60 € et 120 € » | Home, FAQ « Quel est le prix d'un débouchage à Bruxelles ? » |
| Débouchage WC ou colonne | « entre 80 € et 180 € » | Home, même FAQ |
| Curage d'égout par hydrocurage | « à partir de 150 € » | Home, même FAQ |
| Supplément urgence nuit/week-end | « variable selon prestataire » (non chiffré) | Home, même FAQ |
| Curage de réseau domestique standard | « se situe généralement entre 150 et 350 € » ; « Un curage d'urgence de nuit peut être facturé 50 à 100 % plus cher » ; « curer ses canalisations tous les 3 ans pour quelques centaines d'euros » | Article curage (2026) |
| Débouchage manuel (DIY) | « Très faible (1–20 €) » (coût du matériel) | Article techniques, tableau comparatif |
| TVA | « taux de TVA réduit à 6 % au lieu du taux standard de 21 % » pour logement > 10 ans ; exemple « sur une intervention facturée 200 euros hors TVA … économie de 30 euros » | Article locataire/propriétaire |
| Vidange fosse septique | « tarification au m³ + options (curage, urgence) », devis gratuit — **aucun chiffre** | Page vidange |
| Bac à graisse | « Forfait bac intérieur (petits volumes) : prix d'appel attractif », « Bacs enterrés : chiffrage au m³ pompé », « majoration transparente » — **aucun chiffre** | Page bac à graisse |
| Inspection caméra | « 📹 Inspection caméra offerte si besoin » (landing) — aucun chiffre | Landing |
| Durées annoncées | « débouchage simple (évier, lavabo, WC) … 30 à 60 minutes », « curage d'égout ou bouchon profond … entre 1h et 3h », « inspection caméra … 30 à 45 minutes supplémentaires » | Home FAQ |
| Délai | « généralement dans l'heure » | Pilier, Uccle, landing |

Phrase-cadre exacte : « Le tarif d'un débouchage à Bruxelles varie selon plusieurs facteurs : la nature du bouchon, sa localisation, la technique utilisée et l'heure d'intervention. À titre indicatif : … Chez Débouchage Bravo, nos devis sont transparents et sans surprise. »

**Constat clé** : les seules fourchettes chiffrées sont enterrées dans un accordéon FAQ de la home (et c'est pourtant ce que Google a choisi pour le snippet). Il n'existe **aucune page tarifs**, aucun tableau, aucune mention du déplacement, de la TVA (6 %/21 %) sur les pages service, ni de majoration chiffrée.

---

## 5. Technique

| Point | Observation |
|---|---|
| **Schema JSON-LD** | **Aucun** sur les 17 pages crawlées (0 bloc `application/ld+json`). Yoast est présent mais son graph schema est désactivé ; le plugin « FAQ Schema for pages and posts » ne sort que l'accordéon jQuery UI, pas de `FAQPage`. Pas de `LocalBusiness`/`Plumber`, pas de `Service`, pas de `BreadcrumbList`, pas d'`AggregateRating`. Le rich snippet prix vient du texte brut, pas d'un balisage. |
| **Canonical** | Présent et auto-référent sur chaque page (Yoast). |
| **Hreflang** | Aucun (site FR mono-langue). |
| **Open Graph** | `og:locale fr_FR`, `og:type website/article`, `og:title` = title, `og:url`, `og:site_name`, `og:image` (favicon 512 px sur la home ; images « Debouchage-Bravo-…png » 2026 sur les pages service). `og:description` uniquement là où une meta existe. Pas de Twitter card visible. |
| **Robots** | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` partout, y compris sur les landings « backup ». robots.txt : `Disallow:` vide, 3 sitemaps déclarés (`sitemap.xml`, `sitemap.rss`, `sitemap_index.xml`). |
| **Structure d'URL** | Plate, à la racine, sans dossier : `/debouchage-bruxelles/`, `/debouchage-uccle/`, `/inspection-camera-canalisations/`, articles aussi à la racine. Incohérences : `/debouchage-a-ixelles/` vs `/debouchage-uccle/`, `/debouchage-a-bruxelles/` + `/debouchage-a-bruxelles2/` + `/debouchage-bruxelles/` (3 URLs pour la même intention). CPT non réécrits (`/?ville-seo=…`, `/?dyn-mot-cle=brouillon-auto`). |
| **Lazy loading** | `loading="lazy"` natif (WordPress/Divi) sur la majorité des images, `srcset` présent (10 sur la home). |
| **Formats d'images** | **JPG / PNG uniquement, 0 WebP, 0 AVIF**. Banques d'images shutterstock (`shutterstock_xxxx.jpg`), fichiers de chantier bruts (`IMG_20190301_141152.jpg`). Alt vide ou absent sur ~85 % des images. |
| **Scripts tiers** | **GTM `GTM-MMBC5KK` servi via proxy first-party `analytics.idagency.be/gtm.js`** (server-side tagging) ; **GA4 `G-B7S1RNG5EZ`** (visible via les paramètres `_gl`/`_ga_B7S1RNG5EZ` qui polluent les liens internes) ; **Facebook JS SDK** (`connect.facebook.net`, appId 1194707394284361) ; **Google reCAPTCHA** sur les pages à formulaire ; Google Fonts (Open Sans, chargé 2×). **Pas de call tracking, pas de chat, pas de WhatsApp, pas de Hotjar/Clarity.** |
| **Formulaire** | **Divi Contact Form natif** (`et_pb_contact_form`, POST sur la page elle-même, nonce WP) + reCAPTCHA. Champs landing/service : Nom, Téléphone, Code postal, Sujet, Message → « Être rappelé rapidement ». Contact : Prénom, Nom, Email, Téléphone, Message. |
| **Poids / requêtes** | HTML **167–279 Ko** par page (home 279 Ko : CSS Divi inline massif). ~25 scripts, ~25–29 feuilles CSS, ≈ **45–63 requêtes** estimées par page (SWIS minifie/concatène partiellement, jQuery + jquery-migrate + jQuery UI accordion + mediaelement chargés partout). TTFB observé 0,07–0,44 s (cache) mais jusqu'à 1,9 s sur cache froid. |
| **Mobile** | viewport `maximum-scale=1.0, user-scalable=0` (bloque le zoom — pénalisant accessibilité). Pas de bouton d'appel sticky. |
| **Hiérarchie Hn** | 2 H1 sur le pilier et les pages communes ; FAQ en H5 ; phrases entières en H2 ; titres d'articles en H2 sur la home. |
| **Hygiène sitemap** | 7 URLs « brouillon-auto » et 9 URLs `?ville-seo=` dans le sitemap ; landings « backup » indexables ; catégorie `uncategorized` dans le sitemap. |
| **Divers** | Copyright « 2019 » sur les pages anciennes, « 2025 » sur les nouvelles. Widget avis codé à la main avec commentaire de dev laissé dans le HTML : `<!-- Exemple : remplace les valeurs (4,3 et 213) et le href par les tiennes -->` et `aria-label="Note Google 4,3 sur 5 basée sur 213 avis"` alors que l'affichage dit 4,7 / 66 avis. |

---

## 6. Ton rédactionnel

**Vouvoiement exclusif** (86 « vous », 0 tutoiement). Registre commercial poli, mélange de deux générations de contenu :
- **Ancien (2019, idagency)** : ton « artisan », première personne du patron, phrases longues, quelques coquilles (« probl è mes », « compos é e », « Contactezr par téléphone », « déboucheurs professionelles »).
- **Récent (2025-2026)** : ton « fiche technique » très structuré, listes à puces, gras, emojis (⚡ 📍 ❓ 🛠️ 🚚 📹 💸), anglicismes (« FOG (Fats, Oils & Grease) », « by-pass », « HP rotatif »).

### 8 phrases exactes citées
1. « Vous cherchez un déboucheur à Bruxelles pour déboucher vos canalisations, WC, éviers, ou égouts bouchés ? Débouchage Bravo intervient en urgence et sur rendez-vous, partout à Bruxelles et dans la périphérie. » (home, hero)
2. « Notre travail est toujours soigné, garanti et au meilleur prix. » (home)
3. « ⚡ CONSEIL : n'attendez pas que la situation empire. Un bouchon partiel détecté tôt se règle souvent en une seule intervention, sans casse ni dégâts des eaux. » (home)
4. « En tant que patron, je suis présent sur tous les chantiers et mets un point d'honneur à répondre à toutes vos exigences. » (home, citation)
5. « Saviez-vous que plus de 60 % des urgences de débouchage à Bruxelles pourraient être évitées grâce à un entretien régulier ? » (pilier — statistique non sourcée)
6. « Le réseau d'égouts bruxellois, en grande partie centenaire, nécessite un entretien particulier. » (pilier)
7. « Que faire pour déboucher un évier ? Appeler Débouchage Bravo bien-sûr ! » (landing)
8. « C'est la question que tout le monde se pose et à laquelle peu de prestataires répondent clairement. Voici les repères honnêtes. » (article curage)
9. « Débouchage Bravo est sans aucun doute la solution à tous vos probl è mes! » (landing, coquille d'origine)

### Signes de contenu généré / spun
- Les 5 blocs SEO de la home (« Les causes les plus courantes… », « Comment prévenir… », « Les dangers… », « Pourquoi faire appel… », « Comment choisir… ») : ~120 mots chacun, même structure (affirmation → 3 exemples → « Pour éviter ces problèmes, faites appel à… »), « tranquillité d'esprit aux propriétaires de maison à Bruxelles », « offrant ainsi », « De plus, ». Typique d'un template IA.
- Pages communes : 1 750 mots où chaque bloc commence par « À Uccle, Bravo Débouchage… » et se termine par « … prolonge également la durée de vie de vos installations » — gabarit spinné par commune.
- FAQ home : deux questions quasi identiques (« Quels signes indiquent… » ×2, « Comment entretenir… » ×2).
- Marqueurs relevés sur le corpus (≈ 15 000 mots) : « de plus » ×11, « de manière » ×9, « désagréments » ×8, « afin de » ×8, « en effet » ×7, « rapide et efficace » ×6, « n'hésitez pas » ×5, « tout type » ×5, « que ce soit » ×4, « sans surprise » ×3, « point d'honneur » ×3.
- Les articles 2026 (curage, locataire/propriétaire) sont nettement mieux écrits, avec un vrai angle belge (TVA 6 %, Bruxelles-Environnement, bail).

### Belgicismes / ancrage local
- « chambre de visite » ×5, « boiler » ×2, « avaloir » ×2, « égouttage » ×3, « syndic » ×5, « copropriété » ×7, « Région de Bruxelles-Capitale », « les 19 communes » ×5, « Brabant Wallon / Brabant Flamand » ×16, « Bruxelles-Environnement » ×1, « AFSCA », « HACCP », « GSM » 0, « septante/nonante » 0.
- **« sterput » : 0 occurrence** sur tout le corpus (« siphon de sol » ×5, « regard » ×15 à la place). **Vivaqua / Hydria : 0.**
- Faute récurrente : « Anderlect » (home), « Woluwé ».

---

## 7. Vocabulaire technique métier relevé

**Outils / techniques** : furet (×20 : « furet manuel », « furet électrique », « furet mécanique »), hydrocureur / camion hydrocureur (×12), hydrocurage (×8), « jet à haute pression », « haute ou basse pression », « débouchage hydrodynamique », « HP rotatif », « pompe manuelle », ventouse, « bicarbonate + vinaigre + eau bouillante », « caméra endoscopique » / « endoscopie », « caméra flexible reliée à l'aide d'un câble de fibre optique », « émetteur… récepteur » (localisation sonde), « test fumigène », « camions combinés HP + pompage », « traitement enzymatique/bio », « doseur auto ».

**Réseau / ouvrages** : canalisation, égout (×68), « collecteur public », « réseau d'égouts bruxellois centenaire », chambre de visite, regard / « regard d'égout », siphon de sol, avaloir, colonne / « colonne d'immeuble » / « colonne collective », « conduite enterrée sous dallage », « eaux usées », refoulement, « remontée d'égout », « fosse toutes eaux », « fosse septique (avec décanteur + préfiltre) », micro-station, « champs d'épandage / filtres compacts », « bac hydromécanique sous évier », « bac gravitaire enterré », « séparateur de graisses », « poste de relevage », « déversoir », « pré-dégrillage », « bac dégraisseur ».

**Causes** : calcaire (×16), racines (×15), lingettes (×9), graisses / FOG, cheveux, savon, « défaut de conception : mauvaise pente, diamètre trop petit, coude mal placé », « vétusté des conduites », « tartre ».

**Process / conformité** : « rapport d'intervention », « bon d'évacuation / bon d'enlèvement des déchets », « filière agréée », « registre HACCP », « contrôle AFSCA/commune », « gestion des gaz (H₂S) », « ventilation des regards », « EPI », « remise en eau », « écosystème bactérien », « règle des 25 % », « boues = 50 % du volume utile », « contrat d'entretien », « curage préventif tous les 2 à 4 ans », « TVA réduite 6 % logement > 10 ans », « attestation », « assurance habitation / garantie d'assistance à domicile », « locataire / propriétaire / bail ».

**Questions FAQ relevées (toutes pages, dédoublonnées)** — 33 questions :
Pourquoi ma canalisation est-elle bouchée à Bruxelles ? · Comment déboucher un tuyau bouché à Bruxelles ? · Comment entretenir une canalisation pour éviter qu'elle ne se bouche ? · Qui appeler quand une canalisation est bouchée à Bruxelles ? · Quel est le prix d'un débouchage à Bruxelles ? · Est-ce que l'assurance habitation prend en charge les canalisations bouchées ? · Canalisation bouchée à Bruxelles : locataire ou propriétaire, qui doit payer ? · Quels signes indiquent qu'une canalisation est bouchée ? · Comment enlever un gros bouchon dans une canalisation ? · Que faire si ma canalisation est bouchée et que l'eau remonte ? · L'entretien de chaudière est-il obligatoire à Bruxelles ? · Combien de temps dure une intervention de débouchage à Bruxelles ? · Quels sont les signes indiquant qu'un débouchage est nécessaire ? · Faut-il toujours appeler un professionnel ? · Quels sont vos délais d'intervention ? · Quels sont les tarifs pour un débouchage à Bruxelles ? · Proposez-vous un service d'entretien régulier ? · Quels types de bouchons pouvez-vous déboucher ? · En combien de temps pouvez-vous intervenir ? · Combien coûte une intervention de débouchage ? · Proposez-vous l'inspection caméra ? · Êtes-vous disponibles le week-end ou les jours fériés ? · À quelle fréquence vidanger ? · Faut-il vider complètement ? · Que se passe-t-il si la fosse est vide d'eau après vidange ? · Proposez-vous un passage préventif ? · À quelle fréquence dois-je dégraisser mon bac ? · Pouvez-vous gérer aussi mes égouts ? · Que se passe-t-il si je tarde ? · Fournissez-vous une preuve pour mon registre HACCP ? · Comment éviter les bouchons dans les canalisations ? · Est-il nécessaire de faire appel à un professionnel pour déboucher une canalisation ? · En combien de temps intervenez-vous à Uccle ?

---

## 8. Forces / faiblesses / ce que helpdrain.be doit faire mieux

### Forces de debouchagebravo.be
- **Ancienneté et volume** : domaine actif depuis 2019, 88 articles, ~25 pages, mises à jour régulières (articles mensuels en 2026) → autorité thématique et fraîcheur.
- **Fourchettes de prix en clair** sur la home → gagne le snippet Google sur une requête commerciale.
- **Une FAQ riche et localisée** (16 Q/R sur la home) avec des réponses utiles : assurance, locataire/propriétaire, durée d'intervention, Bruxelles-Environnement.
- Pages 2026 (vidange, bac à graisse) **bien structurées** : méthode en étapes, garanties, fréquence, sécurité, FAQ, formulaire rappel « réponse garantie dans les 15 minutes ».
- Contenu blog récent de qualité (curage, TVA 6 %, responsabilité locative) avec un vrai angle belge.
- Analytics propre (GTM server-side first-party, GA4).

### Faiblesses
- **0 données structurées** (pas de LocalBusiness, FAQPage, Service, Breadcrumb) malgré Yoast + plugin FAQ.
- **NAP incohérent** : 2 adresses (Anderlecht / Saint-Josse), 3 numéros de téléphone, 2 e-mails.
- **Aucune page tarifs**, aucune page WC / évier / hydrocurage / urgence / syndic ; la page « Débouchage » du menu fait 350 mots ; la page inspection caméra 335 mots.
- **Cannibalisation** : `/`, `/debouchage-bruxelles/`, `/debouchage-a-bruxelles/`, `/debouchage-a-bruxelles2/` (« backupLanding ») et `/landing-page-debouchage-bravo/` visent tous « débouchage bruxelles », tous indexables, même H1.
- Hygiène SEO : titles « Accueil - … », « Landing page - … », meta descriptions absentes sur la home et le pilier, 2 H1, FAQ en H5, brouillons dans le sitemap, `?ville-seo=` indexables, liens internes pollués par `?_gl=`.
- **Images** : shutterstock génériques, ~85 % sans alt, JPG/PNG seulement, pas de WebP.
- **Maillage interne quasi inexistant** entre pages service (0 lien contextuel sur vidange/bac à graisse, 1 seul sur le pilier).
- Preuve sociale faible : 2 témoignages 2019 (rénovation SDB, pas débouchage), note Google absente de la home, widget avis bricolé avec commentaire de dev et aria-label faux.
- Poids HTML lourd (Divi, 279 Ko home, ~60 requêtes), zoom mobile bloqué, pas de CTA sticky ni WhatsApp.
- Dilution thématique : chauffage/plomberie/chaudières occupent la moitié du menu et du blog.
- Aucun contenu NL alors qu'ils revendiquent la périphérie néerlandophone.

### 10 actions concrètes pour helpdrain.be
1. **Page /tarifs-debouchage-bruxelles avec un vrai tableau chiffré** (évier/lavabo, WC, douche/baignoire, colonne, égout, hydrocurage, inspection caméra, vidange, bac à graisse, majoration nuit/WE, déplacement, TVA 6 %/21 %) + `Offer`/`PriceSpecification` en JSON-LD, et **reprendre la fourchette en H2 + paragraphe brut** sur chaque page service pour viser le snippet. Se positionner au moins aussi transparent : Bravo affiche 60–120 € évier, 80–180 € WC/colonne, 150 €+ hydrocurage, 150–350 € curage.
2. **JSON-LD complet** sur toutes les pages : `Plumber`/`LocalBusiness` (NAP unique, `areaServed` 19 communes, `openingHours` 24/7, `telephone`, `aggregateRating`), `Service` par page, `FAQPage` (Bravo n'en a aucun), `BreadcrumbList`.
3. **Une page par intention** (déjà prévu dans l'arbo 34 pages) : WC, évier, lavabo, douche, colonne, égout, sterput, avaloir, urgent, syndic, horeca — Bravo n'a aucune de ces pages ; viser 900–1 500 mots utiles chacune avec méthode, causes, prix, durée, FAQ 5–8 questions.
4. **NAP unique et cohérent** partout (footer, contact, mentions, schema, GBP) + 1 seul numéro, en `tel:` cliquable dans le hero, en sticky mobile, et WhatsApp.
5. **FAQ localisées belges** en H2/H3 (pas H5) reprenant et améliorant les questions relevées (assurance, locataire/propriétaire, TVA 6 %, Vivaqua/Hydria vs égout privé, délai, durée, sterput, chambre de visite) — répondre en 40–60 mots citables.
6. **Vocabulaire belge que Bravo n'exploite pas** : « sterput » (0 chez eux), « chambre de visite », « avaloir », « Vivaqua », « Hydria », « syndic », « copropriété », « ACP » — à intégrer naturellement dans les H2 et le corps.
7. **Preuve sociale réelle** : note Google + nombre d'avis sur la home et chaque page (widget propre, `AggregateRating`), avis récents sur du débouchage, photos de chantier réelles avec alt descriptifs (Bravo utilise du shutterstock sans alt).
8. **Maillage interne systématique** : blocs « services liés » avec ancres texte, liens contextuels tarifs ↔ services ↔ communes, breadcrumb ; Bravo a 0–1 lien contextuel par page.
9. **Performance** : HTML < 60 Ko, WebP/AVIF, pas de jQuery, < 20 requêtes, zoom mobile autorisé, LCP < 2 s — facile à battre face à Divi.
10. **Hygiène d'indexation** : 1 URL par intention (pas de landings dupliquées), titles orientés bénéfice + ville sans « Accueil - », meta descriptions partout, sitemap propre sans brouillons, et pas de dilution hors débouchage/assainissement (Bravo perd de la pertinence avec chauffage/chaudières).

---

### Annexe — pages récupérées (toutes HTTP 200)
`/`, `/robots.txt`, `/sitemap.xml` (+7 sous-sitemaps), `/debouchage-bruxelles/`, `/debouchage-a-bruxelles/`, `/debouchage-a-bruxelles2/`, `/debouchage-de-canalisations-et-degouts/`, `/inspection-camera-canalisations/`, `/vidange-fosse-septique-bruxelles/`, `/nettoyage-bac-a-graisse-bruxelles/`, `/debouchage-uccle/`, `/contact/`, `/plomberie-bruxelles/`, `/landing-page-debouchage-bravo/`, `/mentions-legales/`, `/actualites/`, `/deboucher-un-egout-techniques-et-outils-de-pros/`, `/curage-canalisation-bruxelles-tout-savoir-avant-intervenir/`, `/canalisation-bouchee-qui-doit-payer-en-belgique/`, `/les-differentes-techniques-de-debouchage-manuel-mecanique-ou-hydrodynamique/`.
