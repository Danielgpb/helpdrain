# Analyse concurrent : debouchages.brussels

*Analyse réalisée le 6 septembre 2026 par récupération directe du HTML (curl, User-Agent Chrome). 19 URL récupérées, toutes en HTTP 200 : homepage, robots.txt, sitemap index + 7 sous-sitemaps, 16 pages internes. Tout le contenu cité est reproduit tel quel, fautes comprises.*

---

## 1. Fiche

| Élément | Valeur relevée |
|---|---|
| Domaine | `https://www.debouchages.brussels/` (canonical avec www, trailing slash) |
| Nom de marque (schema WebSite) | « Debouchages.brussels » — description « Déboucheur N°1 en Belgique » |
| Autres noms utilisés dans le texte/titles | « Débouchage Bruxelles », « DEBOUCHAGES Bruxelles », « Déboucheur Gaston » (dans 3 titles), « Allo débouchage » (page zones), « La Compagnie des Déboucheurs » (texte copié d'un concurrent français, homepage) |
| Nb de pages (sitemap Yoast) | **216 pages** (`page-sitemap.xml`) + **11 articles** (`post-sitemap.xml`) + 7 catégories + 15 tags + 1 auteur ≈ **250 URL indexables**. Sitemap index modifié le 2026-06-28. |
| Répartition des 216 pages | ~10 pages « services Bruxelles » (canalisation, WC, évier, lavabo, égout, urgent, pas cher, entreprise, fosse septique, inspection caméra), ~150 pages « commune × intention » (Anderlecht, Ixelles, Forest, Jette, Evere, Auderghem, Saint-Gilles… déclinées en urgent / urgence / pas cher / WC / évier / lavabo / égout / société / entreprise / plombier), ~35 pages Hainaut + Brabant wallon + périphérie flamande (Charleroi, Mons, Ath, Wavre, Waterloo, Dilbeek, Zaventem, Tervuren…), + tarifs, zones, contact, demande-intervention, blog, plan de site, confidentialité. |
| Doublons visibles dans le sitemap | slugs suffixés `-2`, `-3`, `-2-2` : `debouchage-anderlecht-urgent-2`, `urgent-debouchage-forest-2`, `urgent-debouchage-forest-3`, `debouchage-pas-cher-auderghem-2-2`, `debouchage-evier-anderlecht-2`, `debouchage-canalisations-etterbeek-2`, `deboucheur-canalisation-eaux-usees-laeken-1020-2`, etc. Slug aberrant : `/debouchage-canalisation-farciennes-de-20e-a-120e-n-0487-51-52-53/`. |
| CMS / stack | **WordPress 6.8.3**, thème **Astra**, page builder **Elementor 3.32.4** (+ Elementor Header/Footer builder), **Yoast SEO** (sitemap, JSON-LD, OG), **Metform** (formulaires), **kk Star Ratings** (notes étoiles), **Cookie Notice**, **Call Now Button** (barre d'appel mobile), **WP-Optimize** (cache : header `wpo-cache-status: cached`), **Optimole** (CDN images `mldltbkx45tc.i.optimole.com`). |
| Serveur | `server: Apache`, `x-powered-by: PHP/8.2`, HTTP/2, pas de Cloudflare, pas de header d'hébergeur identifiable. Trace d'un ancien domaine : og:image de la page WC pointe vers `debouchage.at-lev.com/wp-content/…` (site cloné/migré). |
| Téléphone principal | **0474 77 77 01** (`tel:+32474777701`, header, footer, hero, 10 liens sur la homepage) |
| Téléphone secondaire | **0487 51 52 53** (`tel:0487515253`, dans les H2 des pages service et les titles ; bouton d'appel flottant mobile `tel:0032487515253`) |
| Email | infos@debouchages.brussels |
| Adresse (footer, texte brut) | « Chaussée de jette 105 1081 koekelberg, Belgique » — **non présente dans le schema** |
| NAP | Incohérent : 2 numéros différents selon les pages, nom de marque variable (« Debouchages.brussels » / « Débouchage Bruxelles » / « Déboucheur Gaston »), adresse uniquement dans le footer. |
| Horaires affichés | « Ouvert 24 heures sur 24 et 7 jours sur 7 » (bandeau top), « 24H/7J » (footer) |
| Langues | **FR uniquement** (`lang="fr-FR"`, `og:locale fr_FR`), **aucun hreflang**, aucune version NL/EN. |
| Réseaux | Facebook `web.facebook.com/debouchagesbruxelles`, Twitter `@Debouchages` |
| Liens sortants « Nos Partenaires » (footer, sur toutes les pages) | debouchages-canalisation.be (« Déboucheur André »), services-express.be (« Plombier Bruxelles »), sosplombierixelles.be (« Plombier Ixelles »), chauffagiste-agree-vaillant.be, chauffagiste-agree-bulex.be → réseau de sites satellites du même éditeur. |
| Auteur WordPress | « Harnad2223 » (schema Article) |

---

## 2. Homepage (`/`)

- **Title** : `Débouchage Bruxelles pas cher àpde: 20€ N° direct: 0474 77 77 01`
- **Meta description** : `Le #N1 Services Debouchage Bruxelles pas cher en Belgique. Dépannage WC, évier, lavabo, égout pas cher-7/7 Garantie 100%✅`
- **H1 exact** : `Débouchage Bruxelles`
- **Nb de mots visibles** : ≈ **2 230** (nav + footer inclus ; ≈ 1 900 de contenu)
- **HTML** : 264 Ko

### H2 dans l'ordre (18)
1. Entreprise spécialisée dans le débouchage de canalisations
2. DÉBOUCHAGE BRUXELLES
3. Un débouchage professionnel
4. CANALISATION BOUCHÉE ?
5. 0474 77 77 01
6. Demander un rappel immédiat
7. TARIFS DEBOUCHAGE BRUXELLES PAS CHER
8. Contactez-nous
9. VOTRE DÉBOUCHEUR À BRUXELLES
10. Pourquoi nous choisir?
11. Nos services
12. Débouchage Bruxelles à votre service 24H/24, 7J/7
13. DÉBOUCHAGE DE CANALISATION
14. LE DÉBOUCHAGE DE VOS CANALISATIONS
15. UN DÉBOUCHEUR PROFESSIONNEL POUR DÉBOUCHER UNE CANALISATION
16. Débouchage Bruxelles: Nettoyage de canalisations bouché
17. ENFIN DES SPÉCIALISTES DU DÉBOUCHAGE DE CANALISATION À BRUXELLES
18. Intervention d'un spécialiste de Débouchage sur Bruxelles

H3 notables : « Expertise en débouchage », « Disponible 7J7 & 24H/24 », « Qualité & Sérieux », « Prix abordable », « Débouchage canalisation », « Débouchage WC bouché », « Vidange fosse septique », puis le bloc spun : « Ce qu'il faut confier aux experts du débouchage à Bruxelles : », « Les raisons de blocage du pipeline », « C'est que se passe si une canalisation WC bouchée. », « La nécessité d'un Débouchage Bruxelles », « Collaborez avec débauchage Bruxelles pour résoudre votre problème Débouchage. », « Ne tardez pas … », « Les raisons pourquoi vous devez fait collaborez avec Débouchage Bruxelles ».

### Structure des sections
1. **Bandeau top** : « Ouvert 24 heures sur 24 et 7 jours sur 7 » + tel + email.
2. **Header** : logo, menu (Accueil / Débouchage ▾ [Débouchage canalisation, WC bouche toilette bouchée, Vidange fosse septique, Inspection canalisations par caméra] / Zones d'intervention / Contact).
3. **Hero** : H1 + « Pour toute demande d'intervention Veuillez nous contactez sur : 0474 77 77 01 » + image hydrocureuse.
4. **2 blocs de présentation** (« DÉBOUCHAGE BRUXELLES », « Un débouchage professionnel ») avec matériel en photo.
5. **CTA « CANALISATION BOUCHÉE ? Appelez-nous sans tarder ! »** + gros numéro en H2.
6. **Formulaire « Demander un rappel immédiat »** (Metform).
7. **Tableau de tarifs** (voir §4) — c'est le seul tableau de prix du site.
8. **Bloc « Contactez-nous »** (numéro en H3).
9. **« VOTRE DÉBOUCHEUR À BRUXELLES »** : texte hors sujet sur les fuites de « ligne d'eau » (traduction d'un site US).
10. **« Pourquoi nous choisir? »** : 4 icônes (Expertise / 7J7 & 24H/24 / Qualité & Sérieux / Prix abordable).
11. **« Nos services »** : 3 cartes (Débouchage canalisation / Débouchage WC bouché / Vidange fosse septique).
12. **CTA 24/7** + numéro.
13. **3 blocs texte SEO** (« DÉBOUCHAGE DE CANALISATION », « LE DÉBOUCHAGE DE VOS CANALISATIONS » avec 6 puces de réassurance, « UN DÉBOUCHEUR PROFESSIONNEL… »).
14. **Vidéo YouTube** embarquée (`watch?v=uMTZzrfaz_I`).
15. **Bloc en argot/tutoiement** (« Nettoyage de canalisations bouché »).
16. **Blocs spun** (H3 « pipeline », « infrastructure de santé »…).
17. **Footer** : « Suivez Débouchage Bruxelles », nuage de 15 tags, Menu, Nos Services (5), Nos Partenaires (5 liens sortants), Contacts (email, tel, 24H/7J, adresse), copyright.
18. **Barre d'appel flottante mobile** (Call Now Button, orange `#f88205`, `tel:0032487515253`) + bannière cookies.

### CTA
- **11 liens `tel:`** sur la homepage : 10 × `tel:+32474777701` + 1 × `tel:0032487515253` (barre flottante mobile).
- Textes : « Appelez-nous sans tarder ! », « Appelez vite le 0474 77 77 01 (Appel direct) pour joindre votre déboucheur professionnel ! », « Demander un rappel immédiat », « Contactez-nous ».
- Le numéro est répété en **H2/H3** (3 fois) — pratique SEO douteuse mais très visible.
- Formulaire de rappel Metform (champ texte + textarea, sans captcha).
- Pas de WhatsApp, pas de chat, pas de bouton devis en ligne.

### Trust signals affichés
- « Nous avons plus de 10 ans d'expérience » **puis 3 lignes plus bas** « Grâce à plus de 25 ans d'expérience » (contradiction).
- « Jusqu'à 24 mois de garantie » (homepage) vs « garantie 1 AN » (meta de la page WC bouché) vs « Garantie 100%✅ » (meta homepage).
- « Nous n'utilisons aucun produit chimique », « Vous savez avant notre intervention le tarif de notre prestation. Transparence à 100% », « Le devis est gratuit et les tarifs seront communiqués par téléphone avant notre arrivée ».
- « comme plus de 20 000 clients » (page WC).
- « déboucheurs agréés » (47 occurrences de « agréé » sur le corpus) — aucune accréditation nommée.
- **Aucun avis client réel** (pas de widget Google, pas de témoignage nommé). Les étoiles kk-star-ratings ne s'affichent pas sur la homepage mais sur les pages internes (voir §5).
- Pas de logo d'assurance, pas de n° BCE/TVA, pas de photo d'équipe ni de camion identifiable.

### Prix sur la homepage : **oui** (tableau, §4). FAQ : **non** (0 accordéon, 0 schema FAQPage).

---

## 3. Pages service analysées

Structure commune à toutes les pages : header/menu identiques, H1, gros numéro en H2, 1 à 3 images de stock recyclées, blocs de texte, bloc « Contactez-nous », étoiles kk-star, footer avec tag cloud. **Aucune page n'a de FAQ, de tableau de prix (sauf caméra), de témoignages ou de liste d'étapes structurée.** Le maillage interne « dans le contenu » se limite à 1–4 liens ; tout le reste passe par le menu/footer (≈16 liens uniques identiques partout).

### 3.1 `/debouchage-wc-bruxelles/`
- **Title** : `Débouchage WC bruxelles - Debouchages.brussels`
- **Meta** : `Demandez une offre de tarif à un Débouchage WC Bruxelles pas cher, déboucher la toilette, wc, la cuisine ou la salle de bain.`
- **H1** : `Débouchage WC bruxelles`
- **H2** : « Problème de Débouchage ? » / « Pourquoi notre équipe ? » / « Le vidangeur le plus qualifié interviendra immédiatement chez vous pour vider votre fosse septique bouchée. » / « Choisissez des techniques de professionnelles et sur-mesure pour vider votre fosse septique. » / « Comment vider votre fosse septique ? Quelles sont les étapes ? » / « débouchage WC bruxelles se déplacera jusqu'à chez vous rapidement, que vous soyez sur Bruxelles ou environs, pour vidanger votre fosse septique : »
- **Mots** : ≈ 1 360 | **Prix** : aucun | **Tel links** : 6 | **Images** : 4 (1 de contenu, alt vide) | **FAQ** : non
- **Maillage contenu** : 1 lien → `/debouchage-canalisation/`
- **Constat** : le contenu est **celui de la page fosse septique** avec un rechercher/remplacer « débouchage WC bruxelles ». La page ne parle jamais de déboucher un WC. La page `/debouchage-urgent-bruxelles/` et `/debouchage-pas-cher-bruxelles/` sont le **même texte** avec un autre H1.

### 3.2 `/debouchage-wc-bouche/` (page WC du menu principal)
- **Title** : `WC bouche, toilette bouchée - Service de débouchage àpd 20€`
- **Meta** : `Cas d'urgence: wc bouche, evier, lavabo, égout, toilette bouchée? dans 30 min chez vous 24/24 et 7j/7 avec des prix pas cher et garantie 1 AN.`
- **H1** : `WC bouche, toilette bouchée`
- **H2** : « Vous avez des problèmes avec la plomberie de la toilette, wc bouche? Vous recherchez un spécialiste pour les déboucher pour vous ? » / « Vous avez une urgence WC bouché ! » / « Besoin d'un dépannage urgent en Débouchage à Bruxelles et ses environs ? » / « 0474 77 77 01 » / « WC bouche: Comment déboucher des toilettes ? Conseils de plomberie » / « Contactez-nous »
- **Mots** : ≈ 520 (très mince) | **Prix** : aucun dans le corps (seulement « àpd 20€ » dans le title) | **Images** : 6 | **FAQ** : non

### 3.3 `/debouchage-canalisation/` (page canalisation du menu)
- **Title** : `Débouchage canalisation pas cher de 20€ à 120€ tél 0474 77 77 01`
- **Meta** : `Contactez-nous pour Débouchage canalisation, Curage, égout, WC. Intervention 24H/24, 7J/7. Service d'urgence. Intervention dans l'heure.`
- **H1** : `Débouchage canalisation`
- **H2** : « Une entreprise spécialiste du Débouchage canalisation (canalisation bouchée) » / « 0474 77 77 01 » / « Plusieurs services dans le domaine de l'assainissement » / « Intervention d'un spécialiste de Débouchage canalisation sur bruxelles » / « Besoin d'un dépannage urgent en Débouchage à Bruxelles et ses environs ? » / « A bruxelles, nous fournissons des services de Débouchage primaire. »
- **H3** : la série spun (« Les raisons de blocage du pipeline », « Pourquoi mes vidanges d'huile prennent-elles si longtemps ? », « Qu'est-ce qui cause le colmatage de mes drains ? », « Pourquoi ai-je besoin d'un professionnel pour déboucher mes égouts ? »)
- **Mots** : ≈ 2 030 | **Prix** : aucun dans le corps | **Tel links** : 8 | **Images** : 8 | **Note affichée** : « 4.8/5 - (1745 votes) »

### 3.4 `/debouchage-canalisation-wc-bruxelles/`
- **Title** : `débouchage canalisation WC pas cher àpt de 20€ | 0487 51 52 53`
- **Meta** : `Contactez l'expert débouchage canalisation WC efficace au 0487 51 52 53 Prix A.P.D 20€ Pas cher devis gratuit égout, évier, WC, ….`
- **H1** : `Débouchage canalisation à bas prix sur Bruxelles et environs`
- **H2** : « Débouchages Bruxelles met à votre disposition une équipe de techniciens très expérimentés en débouchage canalisation WC à un prix pas cher. » / « 0487 51 52 53 » / « Pourquoi faire appel à notre équipe ? » / « Débouchage canalisation, WC à petit prix ! » / « Nos services de débouchage canalisation, WC pas cher : » / « Intervention d'un spécialiste de Débouchage sur Bruxelles » / « A chatelet, nous fournissons des services de Débouchage primaire. » (← résidu de spin « Chatelet » sur une page Bruxelles)
- **Mots** : ≈ 2 430 | **Prix** : aucun dans le corps | **Images** : 12 (10 sans alt) | **Note** : « 4.8/5 - (7864 votes) »
- **Maillage contenu** : → `/debouchage-canalisation/`, → `/prix-inspection-canalisation-camera/inspection-canalisation-camera-bruxelles/`
- Phrase révélatrice du modèle : « Nous travaillons sous forme d'association de déboucheurs indépendants, qui se déplacent dans toute la région de Bruxelles. […] nous disposons aussi de l'exclusivité d'avoir un centre d'appel » → **plateforme de sous-traitance**, pas une entreprise avec ses propres camions.

### 3.5 `/debouchage-egout-bruxelles/`
- **Title** : `Débouchage Égout Bruxelles: Comment Trouver le Meilleur Service`
- **Meta** : `Besoin d'un service de débouchage d'égout à Bruxelles? Découvrez comment trouver le meilleur service avec nos conseils pratiques et notre liste de recommandations.`
- **H1** : `Débouchage Égout Bruxelles`
- **H2** : « Débouchage Égout Bruxelles (Brussels) » / « Comprendre les différents types de services de débouchage d'égout. » / « Rechercher des entreprises avec une expérience et une réputation solides. » / « Demander des devis et comparer les prix. » / « Rechercher des entreprises avec une expérience et une réputation solides. » (**H2 dupliqué**) / « Région Bruxelles-Capitale »
- **Mots** : ≈ 850 | **Prix** : aucun | **Images** : 4 (1 de contenu, alt « Débouchage égout Bruxelles ») | **FAQ** : non
- **Constat** : contenu générique type « guide pour choisir un prestataire » (IA), zéro contenu technique sur les égouts bruxellois (pas de chambre de visite, pas de Vivaqua, pas de raccordement).

### 3.6 `/tarifs-debouchage/`
- **Title** : `Tarifs d'un débouchage de canalisation - Debouchages.brussels`
- **Meta** : `Le prix pour un débouchage de canalisation varie entre. 50€ - 300€. Ce montant correspond au prix moyen calculé en Belgique.`
- **H1** : `Tarifs d'un débouchage de canalisation`
- **H2** : « Quel est le prix pour déboucher un WC? A quel tarif un débouchage de canalisation arrive? Combien coût un désengorgement de toilette ou d'un curage de canalisation? ici des réponse des Tarifs Débouchage: » / « 0487 51 52 53 » / « Tarifs d'un débouchage de canalisation : selon les techniques » / « Contactez-nous »
- **Mots** : ≈ 500 (≈ 250 de contenu réel) | **Prix dans le corps : AUCUN** | **Images** : 4 (alt vide) | **FAQ** : non
- **Constat** : la page « tarifs » **ne donne aucun tarif** ; elle promet « des conseils pour estimer le prix » et s'arrête après 3 paragraphes. Résidu de spin : « Service de débouchage Forest pour tous cas d'urgence ! » sur une page nationale. **C'est le trou le plus exploitable pour helpdrain.be.**

### 3.7 `/debouchage-urgent-bruxelles/`
- **Title** : `Débouchage urgent bruxelles - Debouchages.brussels`
- **Meta** : `Demandez une offre de tarif à un Débouchage urgent bruxelles pas cher, déboucher la toilette, wc, la cuisine ou la salle de bain.` (identique à la page WC)
- **H1** : `Débouchage urgent bruxelles`
- **H2** : « Problème de Débouchage ? » / « Choisissez des techniques de professionnelles et sur-mesure pour vider votre fosse septique: » / « débouchage urgent bruxelles se déplacera jusqu'à chez vous rapidement… pour vidanger votre fosse septique : » / « Comment vider votre fosse septique ? Quelles sont les étapes ? »
- **Mots** : ≈ 1 280 | **Prix** : aucun | **Images** : 3 | **FAQ** : non
- **Constat** : même texte « fosse septique » que la page WC. Aucune promesse de délai chiffrée dans le corps (le « dans 30 min chez vous » n'existe que dans une meta).

### 3.8 `/inspection-canalisation-camera-bruxelles/` (article de blog utilisé comme page service)
- **Title** : `Inspection caméra Bruxelles | àpt de 20€ | Deboucheur Gaston`
- **Meta** : `Inspection caméra Bruxelles àpt de 20€ , Debouchage Bruxelles à votre service 24h/24, 7j/7, devis gratuits contactez nous: 0474 77 77 01`
- **H1** : `CONTRÔLE ET INSPECTION DES CANALISATIONS PAR CAMERA`
- **H2** : « Inspection caméra Bruxelles » / « Une société à votre disposition pour tous les travaux de inspection canalisation par caméra Bruxelles dans la zone Bruxelloise & Brabant » / « Un débouchage avec une inspection canalisation ? » / « **Inspection vidéo canalisations 250€ Inspection vidéo canalisations 150€ en sus d'une prestation de curage** » / « Vous cherchez un spécialiste Inspection caméra Bruxelles? »
- **Mots** : ≈ 1 160 (schema `wordCount: 1061`) | **Prix** : 250 € / 150 € | **Images** : 8 (toutes alt vide) | **Note** : « 4.6/5 - (10482 votes) »
- **Maillage contenu** : → `/vidange-fosse-septique/`, `/debouchage-canalisation/`, `/degorgement-canalisations-bruxelles/`, `/fosse-septique-bruxelles/` (la page la mieux maillée du corpus)
- Contenu le plus « métier » du site : liste de marques de matériel (« Virax, Rothenberger, Rom Koks, Rioned, Salmson, Remacle Saniclair, Prossed, Ridgid, Rems »), « hydrocureuse haute pression », « rapport de qualité et photos » pour l'assurance. Contradiction : title « àpt de 20€ » vs corps « 250€ ».

### 3.9 `/curage-canalisation-prix-wezembeek-1970/` (page curage — la seule avec « curage » dans le slug)
- **Title** : `Curage canalisation Wezembeek de 20€ à 120€ N°:0487 51 52 53`
- **Meta** : `Débouchage ou Curage canalisation Wezembeek pas cher, Débouchage aspirateur, Déboucheur Wezembeek, curage canalisation de salle de bain.`
- **H1** : `Curage canalisation Wezembeek à bas prix`
- **H2** : « 0487 51 52 53 » / « Curage canalisation Wezembeek » / « Trouvez exactement ce dont vous avez besoin avant de faire l'appel: » / « Problèmes de plomberie qui nécessitent un plombier professionnel: » / « Intervention d'un spécialiste de Curage canalisation sur Wezembeek » / « Contactez-nous » / « A Wezembeek, nous fournissons des services de Curage canalisation primaire. »
- **H3** : « Ce qu'il faut confier aux experts du Curage canalisation canalisation Wezembeek » (**doublon « canalisation canalisation »** = variable de spin mal remplacée, répété 5 fois)
- **Mots** : ≈ 2 330 | **Prix** : aucun dans le corps | **Images** : 14 (11 sans alt) | **Note** : « 4.8/5 - (2985 votes) »
- **Constat** : il n'existe **aucune page hydrocurage / curage Bruxelles** ; le mot « hydrocurage » n'apparaît que 4 fois sur tout le corpus, « hydrocureur » 0 fois.

### 3.10 `/debouchage-ixelles/` (page commune type)
- **Title** : `Débouchage Ixelles pas cher de 19€à 119€ | Déboucheur Gaston`
- **Meta** : `Société débouchage Ixelles: lavabo, salle de bain, égout, toilette, WC, fosse septique, canalisation, baignoire, inspection caméra, 24h/7j.`
- **H1** : `DÉBOUCHAGE DE CANALISATION À IXELLES`
- **H2** : « 0487 51 52 53 » / « Les spécialistes de débouchage de canalisation à Ixelles » / « Des techniques modernes de débouchage : » (**× 2**) / « Contactez-nous » / « Veillez, ces types des déchets provoquent les blocages ! » / « Intervention d'un spécialiste de Débouchage sur Ixelles » / « A Ixelles, nous fournissons des services de Débouchage primaire. »
- **H3** (18) : « En Débouchage Ixelles , nous sommes une référence: », « Des produits chimiques pour décomposer l'obstruction ! » (contredit « Nous n'utilisons aucun produit chimique » de la homepage), « Dégorgement et débouchage de canalisations à Ixelles », + la série spun.
- **Mots** : ≈ 2 940 (page la plus longue) | **Prix** : aucun dans le corps | **Images** : 8 | **Note** : « 4.8/5 - (4949 votes) »
- **Maillage contenu** : → `/debouchage-wc-bouche/` (×2), `/debouchage/` (×2), `/debouchage-canalisation/`, `/vidange-fosse-septique/`
- **Constat** : zéro contenu local réel (pas de quartier, pas de rue, pas de type de bâti ixellois) ; le nom de la commune est injecté par variable.

### 3.11 Autres pages relevées (résumé)
| URL | Title | H1 | Mots | Particularité |
|---|---|---|---|---|
| `/debouchage-evier-bruxelles/` | `Débouchage évier Bruxelles pas cher àpt de 19€ N°: 0487 51 52 53` | Débouchage évier bruxelles | ≈ 910 | H2 « plombier pas cher Bruxelles : » ; note « 4.9/5 - (249 votes) » |
| `/vidange-fosse-septique-bruxelles/` | `Vidange fosse septique Bruxelles - Déboucheur Gaston` | Vidange fosse septique Bruxelles | ≈ 1 130 | H2 « Appelez le ☎ 0 487 51 52 53 pour un débouchage pas cher Ixelles et rapide: » (résidu Ixelles) |
| `/degorgement-canalisations-bruxelles/` | `Dégorgement canalisations à Bruxelles - Debouchages.brussels` | Dégorgement canalisations à Bruxelles | ≈ 640 | H2 de 60 mots ; 10 images |
| `/debouchage-pas-cher-bruxelles/` | `Débouchage pas cher bruxelles àpt de 19 N°: 0487 51 52 53` | Débouchage pas cher bruxelles | ≈ 920 | texte fosse septique recyclé ; meta mentionne « depannage chaudiere ixelles » ; note « 4.7/5 - (10769 votes) » |
| `/entreprise-debouchage-bruxelles/` | `Entreprise débouchage Bruxelles - Debouchages.brussels` | Entreprise débouchage Bruxelles | ≈ 1 020 | « Nos prix et tarifs sont imbattables à partir de 49€, déplacement inclus » |
| `/zones-intervention/` | — | Zones d'intervention | ≈ 1 500 | liste des 19 communes + Hainaut (17) + Brabant wallon (6) + périphérie flamande ; H3 « PRIX DE 20 Euros A 120 Euros » ; note « 4.7/5 - (8652 votes) » |
| `/contact/` | — | (H2 « Par Tél », « Par Email », « Formulaire de contact ») | ≈ 300 | liste des 19 communes en texte ; note « 4.8/5 - (278 votes) » |
| `/demande-intervention/` | `Demande d'intervention - Debouchages.brussels` | Demande d'intervention | ≈ 280 | formulaire Metform seul ; meta « Zone d'action : toutes la Belgique » |

---

## 4. Prix relevés sur le site

### Tableau homepage (« TARIFS DEBOUCHAGE BRUXELLES PAS CHER », colonne « Tarif (HT) »)
| Prestation (texte exact) | Prix affiché |
|---|---|
| Débouchage WC | **Entre 20€ et 120€** |
| Entretien ballon d'eau | Entre 25€ et 125€ |
| Débouchage évier ou lavabo | **Entre 30€ et 130€** |
| Débouchage des égouts | **Entre 35€ et 150€** |
| Vidange des fosses septiques | **environ de 95€/m3** |
| Prestations spécifique | « Prix adaptables et sur devis, ☎:0474 77 77 01 » |

### Autres montants dispersés
| Où | Texte exact |
|---|---|
| Page inspection caméra (H2) | « Inspection vidéo canalisations **250€** » / « Inspection vidéo canalisations **150€** en sus d'une prestation de curage » |
| Page entreprise | « Nos prix et tarifs sont imbattables **à partir de 49€, déplacement inclus** » |
| Page zones (H3) | « PRIX DE **20 Euros A 120 Euros** » |
| Meta page tarifs | « varie entre. **50€ - 300€**. Ce montant correspond au prix moyen calculé en Belgique. » |
| Titles | « àpde: 20€ » (home), « àpt de 20€ » (canalisation WC, caméra), « àpt de 19€ » (évier, pas cher), « de 19€à 119€ » (Ixelles), « de 20€ à 120€ » (canalisation, curage Wezembeek), « àpd 20€ » (WC bouché) |
| Meta WC bouché | « dans 30 min chez vous 24/24 et 7j/7 avec des prix pas cher et garantie 1 AN » |

### Lecture critique (pour notre page tarifs)
- Le « à partir de 19/20 € » est un **prix d'appel non crédible** (aucune intervention de débouchage à Bruxelles ne se fait à 20 €) ; le même site dit ailleurs « à partir de 49 € déplacement inclus », « 50–300 € prix moyen » et « 250 € » pour une caméra.
- Les tarifs sont annoncés **HT** alors que la cible est le particulier (TTC obligatoire en B2C en Belgique).
- Aucune mention : frais de déplacement, majoration nuit/week-end, tarif horaire, forfait hydrocurage, tarif syndic/HoReCa, TVA 6 % vs 21 %, moyen de paiement, devis écrit.
- La page `/tarifs-debouchage/` est vide de chiffres → une vraie grille tarifaire structurée (tableau + FAQ + schema) sur helpdrain.be a un boulevard.

---

## 5. Technique

| Point | Constat |
|---|---|
| **JSON-LD** | Bloc Yoast `@graph` sur chaque page : `WebPage` (name, description, datePublished, dateModified, breadcrumb), `ImageObject`, `BreadcrumbList`, `WebSite` (SearchAction), `Organization` (name « Debouchages.brussels », logo — **sans telephone, address, areaServed, openingHours**). Sur les articles : `Article` (author « Harnad2223 », wordCount, articleSection). |
| **Schema notes** | 2ᵉ bloc kk-star-ratings : `{"@type":"CreativeWorkSeries","aggregateRating":{"ratingValue":"4.8","bestRating":"5","ratingCount":"7864"}}` — notes **auto-attribuées via widget étoiles** (pas d'avis réels), volumes irréalistes (10 482 votes sur la page caméra, 10 769 sur « pas cher »), type `CreativeWorkSeries` inadapté → contraire aux guidelines Google « self-serving reviews », risque d'action manuelle. |
| **Absents** | `LocalBusiness` / `Plumber`, `Service`, `FAQPage`, `HowTo`, `OfferCatalog`, `telephone`, `address`, `priceRange`, `areaServed`, `openingHoursSpecification`. |
| **Canonical** | Auto-référente sur toutes les pages, avec www + trailing slash. OK. |
| **Hreflang** | Aucun. Site monolingue FR. |
| **Open Graph** | Yoast : `og:locale fr_FR`, `og:type website` (home) / `article` (pages), `og:title`, `og:description`, `og:url`, `og:site_name`, `og:image` (via Optimole ; page WC → image sur `debouchage.at-lev.com`). `twitter:card summary_large_image`. |
| **Robots** | `robots.txt` : Disallow `/cgi-bin/ /comments/ /Tags/ /author/ /old/ /old2/ /new/` — **pas de ligne `Sitemap:`**. Aucune meta robots. |
| **Sitemap** | Yoast, index + 7 sous-sitemaps, avec `lastmod`. Inclut auteur et tags (dilution). |
| **Structure d'URL** | Plate, tout à la racine `/slug/`. Slugs bourrés de mots-clés, incohérents (`debouchage-ixelles-urgent`, `debouchage-urgent-ixelles`, `urgent-deboucheur-ixelles`, `debouchage-ixelles-urgence`, `debouchage-urgence-ixelles` = 5 pages pour la même intention). Une seule URL avec dossier : `/prix-inspection-canalisation-camera/inspection-canalisation-camera-bruxelles/` (permalien de catégorie, liée aussi sans dossier → duplicate). |
| **Images** | CDN **Optimole** (`q:mauto/f:best` → WebP/AVIF négocié, redimensionnement à la volée). Fichiers sources JPG/PNG/WebP. `loading="lazy"` natif sur les images sous la ligne de flottaison, `srcset` sur 14 images, pas de `<picture>`. **Alt majoritairement vides** sur les pages service (canalisation WC : 10/12 vides ; caméra : 8/8 vides ; curage : 11/14 vides). Mêmes ~8 photos de stock recyclées sur tout le site avec des noms de fichiers stuffés (`debouchage-bruxelles-debouchage-canalisations-debouchage-bruxelles-debouchage-canalisation-bruxelles-deboucheur-debouchage.jpg`). Elementor duplique chaque image (version desktop + mobile) → 26 `<img>` pour 13 visuels. |
| **Scripts tiers** | **Aucun** GTM, GA4, gtag, Meta pixel, Hotjar, Tawk, WhatsApp, call-tracking, reCAPTCHA détecté dans le HTML. Seuls domaines tiers : `fonts.googleapis.com` (Poppins, Montserrat, Staatliches) et Optimole. → Le site **ne mesure vraisemblablement pas ses conversions** (ou via un plugin server-side non visible). |
| **Formulaire** | **Metform** (addon Elementor), POST REST `metform/v1/entries/insert/`, **sans captcha/honeypot visible**. 3 formulaires : « Demander un rappel immédiat » (home), contact, demande-intervention. |
| **Bouton d'appel** | Plugin **Call Now Button** : barre pleine largeur en bas, mobile uniquement, orange `#f88205`, `tel:0032487515253` (numéro différent du header !). |
| **Cookies** | Plugin Cookie Notice, bandeau « Nous utilisons des cookies pour vous garantir la meilleure expérience… OK » (consentement implicite, non conforme RGPD strict). |
| **Vidéo** | 1 iframe YouTube (widget Elementor video) sur la homepage. |
| **Poids / vitesse ressentie** | HTML homepage **264 Ko** (170–225 Ko sur les pages internes) — très lourd pour du texte. **21 fichiers JS + 17 scripts inline, 27 feuilles CSS + 9 `<style>` inline, 26 `<img>`, 1 iframe, 3 polices Google** → ≈ **90–100 requêtes** estimées au premier chargement. Font Awesome chargé 2× (min et non-min). Cache WP-Optimize actif (`wpo-cache-status: cached`) mais `cache-control: no-cache` côté navigateur. Pas de CDN HTML. Elementor + Astra : CLS et LCP probablement médiocres sur mobile (LCP = image Optimole 600×700 dans le hero). |
| **Mobile** | Viewport OK ; menu hamburger Astra ; barre d'appel fixe. |
| **Sécurité / conformité** | Pas de n° d'entreprise (BCE), pas de TVA, pas de mentions légales, pas de CGV ; `xmlrpc.php` et `wp-json` exposés dans le head. |

---

## 6. Ton rédactionnel

**Registre** : vouvoiement par défaut, **avec un bloc entier en tutoiement/argot sur la homepage** (insertion visiblement générée par IA « ton décontracté ») ; passages traduits automatiquement de l'anglais ; blocs spun par variables (`{ville}`, `{service}`) avec résidus visibles.

### Phrases exactes citées
1. « Résultat : un bouchon, et paf, ça te fout ta journée en l'air. » (homepage)
2. « Et t'inquiète, on est dispo 24h/24, 7j/7 pour les urgences — parce que bon, les canalisations bouchées, ça choisit jamais le bon moment ! » (homepage)
3. « En gros, si ça commence à devenir galère ou que ça revient souvent, ne chipote pas : laisse ça aux experts, tu gagneras du temps et t'éviteras d'empirer le truc 👍 » (homepage)
4. « Après tout, nous ne nettoyons pas les comptes bancaires, nous nettoyons les tuyaux. » (homepage — traduction d'un slogan américain « we don't clean out bank accounts, we clean drains »)
5. « Lorsque ces matériaux atteignent vos égouts. Ils stagnent. Entraînant un mauvais air. À long terme. Cette situation nuit à l'état de votre pipeline. Si elle n'est pas traitée. Bloque le bon fonctionnement de votre infrastructure de santé. » (homepage, répété 2× à l'identique sous deux H3 différents)
6. « Notre équipe Débouchage Bruxelles assure toutes les interventions de plomberie dans toutes les communes de Bruxelles et ses environs 7 jours sur 24 heures. » (homepage)
7. « Pourquoi nôtres équipes?Par ailleurs comme plus de 20 000 clients, faites confiance à débouchages.brussels pour vos débouchages de canalisations, WC, égout, plus inspection caméra, aussi curage, pompage et aussi vos travaux. » (page WC)
8. « ils disposent du matériel et des compétences pour faire sourire vos canalisations. » (page égout)
9. « Nous travaillons sous forme d'association de déboucheurs indépendants […] nous disposons aussi de l'exclusivité d'avoir un centre d'appel pour vous permettre de diminuer les frais administratifs » (page canalisation WC)
10. « Bruxelles, chère capitale de notre beau pays ! Imaginez-vous le nombre de canalisations existantes dans cette ville cosmopolite ! Imaginez-vous le nombre de bouchons occasionnés ? Il ne vaut mieux pas y penser ! » (homepage)

### Signes de contenu généré / spun
- **Variables mal remplacées** : « Curage canalisation canalisation Wezembeek », « A chatelet, nous fournissons des services de Débouchage primaire. » (sur la page Bruxelles), « Service de débouchage Forest » (sur la page tarifs), « débouchage pas cher Ixelles » (sur la page fosse septique Bruxelles), « Débouchage urgent Saint-Gilles contient des techniciens » (page WC Bruxelles).
- **Faute récurrente issue du spin** : « Collaborez avec **débauchage** Bruxelles » (débauchage ≠ débouchage), présent sur home, canalisation, canalisation WC, curage, Ixelles.
- **Même série de H3 sur ≥ 5 pages** : « Les raisons de blocage du pipeline » / « C'est que se passe si une canalisation WC bouchée. » / « Ne tardez pas … » / « Les raisons pourquoi vous devez fait collaborez avec … ».
- **Traductions automatiques EN→FR** : « pipeline » (20×), « drains » (31×), « ligne d'eau », « infrastructure de santé », « ingénieurs de drainage », « Pourquoi mes vidanges d'huile prennent-elles si longtemps ? » (oil changes), « Il y a trois raisons pour notre séjour prolongé. », « dépôts et centres de services stratégiquement implantés ».
- **Pages clonées** : WC / urgent / pas cher = texte fosse septique ; égout = guide générique IA.
- **Tics** : « à votre disposition » 32×, « meilleur rapport qualité-prix » 20×, « faire appel à » 25×, « que ce soit » 12×, « n'hésitez pas » 7×, « pas cher » 42×, « agréé » 47×, « 24h/24 » 44×, « 7j/7 » 38×, « 19 communes » 20×.
- **Contradictions** : 10 ans vs 25 ans d'expérience ; « aucun produit chimique » vs « Des produits chimiques pour décomposer l'obstruction ! » ; garantie 24 mois vs 1 an vs 100 % ; àpd 20 € vs àpd 49 € vs 50–300 €.
- **Fragmentation en phrases d'un mot** (« À long terme. », « Dans des délais serrés. ») typique d'un spinner.
- **Keyword stuffing** : la page zones contient un paragraphe de 60 expressions séparées par des virgules (« débouchage toilette, débouchage lavabo, débouchage douche, débouchage baignoire, équipements sanitaires bouchés, douche bouchée, … dissoudre le bouchon. »).

### Belgicismes relevés
« **ne chipote pas** » (chipoter), « **sterput** », « **égouttage** » / « réseau public d'égouttage », « **chambre de visite** », « **19 communes** », « Brabant » (sans « wallon »/« flamand »), « **àpd / àpde / àpt** » (à partir de), « **avaloir** », « **citerne (d')eau de pluie** », « **puits perdu** », « GSM » (absent), « eaux-vannes ». Le reste de l'argot (« proprio », « matos », « galère », « tout le tralala », « ça te fout ») est du français hexagonal, pas belge.

---

## 7. Vocabulaire métier et questions relevées

### Termes techniques (occurrences sur les 18 pages récupérées)
| Terme exact | Occ. | Terme exact | Occ. |
|---|---|---|---|
| fosse septique | 205 | bac à graisse / dégraissage bac à graisse | 11 |
| égout / égouts / égouttage | 186 | racines | 12 |
| caméra / inspection caméra / caméra endoscopique | 103 | pompage (puits perdu, citerne) | 8 |
| curage (égout, canalisation, fosse, WC) | 100 | colonne (d'évacuation, eaux usées) | 7 |
| déboucheur / déboucheurs agréés | 117 | citerne (eau de pluie) | 8 |
| plombier / plombier déboucheur vidangeur | 134 | furet | 5 |
| dégorgement / désengorgement | 39 | endoscopique | 5 |
| drain(s) (anglicisme) | 31 | chambre de visite | 4 |
| vidangeur / camion pompe | 24 / 4 | hydrocurage / hydrocureuse haute pression | 4 |
| haute pression / purge forte pression | 13 | lingettes | 4 |
| pipeline (anglicisme) | 20 | siphon | 4 |
| sterput | 3 | détartrage / détartrer | 2 / 2 |
| regard d'égout | 1 | avaloir | 1 |
| ouvre-tour basse pression, flexible mécanique | 1 / 2 | calcaire / tartre | 2 |
| **hydrocureur, clapet anti-retour, chemisage, gaine, syndic, copropriété, HoReCa, Vivaqua, raccordement, TVA** | **0** | | |

Autres expressions métier utilisées : « assainissement non collectif », « eaux-vannes » / « eaux ménagères », « préfiltre », « pompe de relevage », « tout à l'égout » (dans « fosse septique, tout à l'égout »), « déboucheur électrique », « pompe de nettoyage à vide », « Débouchage aspirateur », « recherche de fuite », « taches d'humidité », « rapport … et photos » (pour l'assurance), « lingettes pour bébé, graisse, cheveux, restes de nourriture ». Marques citées : Virax, Rothenberger, Rom Koks, Rioned, Salmson, Remacle Saniclair, Prossed, Ridgid, Rems.

### Questions relevées dans les titres (aucune n'est balisée FAQPage)
- « Quel est le prix pour déboucher un WC? » / « A quel tarif un débouchage de canalisation arrive? » / « Combien coût un désengorgement de toilette ou d'un curage de canalisation? »
- « Comment vider votre fosse septique ? Quelles sont les étapes ? »
- « Pourquoi mes vidanges d'huile prennent-elles si longtemps ? »
- « Qu'est-ce qui cause le colmatage de mes drains ? » / « … de mes canalisations ? »
- « Pourquoi ai-je besoin d'un professionnel pour déboucher mes égouts ? »
- « Pourquoi je dois contacter le Service de Débouchage canalisation Chatelet ? »
- « Un débouchage avec une inspection canalisation ? »
- « Vous cherchez un spécialiste Inspection caméra Bruxelles? »
- « WC bouche: Comment déboucher des toilettes ? Conseils de plomberie »
- « Pourquoi nous choisir? » / « Pourquoi faire appel à notre équipe ? » / « Problème de Débouchage ? »
- « Vous avez des problèmes avec la plomberie de la toilette, wc bouche? Vous recherchez un spécialiste pour les déboucher pour vous ? »
- Blog (titres) : « Comment déboucher lavabo salle de bain », « Des odeurs dans les canalisations ? Voici les causes », « Déboucher toilette Bruxelles comme plombier », « Fuites d'eau : les sources inconnues », « Les tuyaux de plomberie en plastique sont-ils moins performants ? », « Comment installer un nouveau lave-vaisselle », « Comment économiser l'eau, l'énergie, l'argent ».
- Tags (intentions) : « wc bouché que faire », « comment déboucher les wc », « canalisation wc bouchée », « plombier bruxelles 24h », « sos plombier », « fuites d'eau ».

---

## 8. Forces / faiblesses / ce que helpdrain.be doit faire mieux

### Forces (pourquoi il ranke malgré tout)
1. **Ancienneté et volume** : domaine actif depuis ≥ 2021 (`datePublished 2021-05-11`), ≈ 250 URL, mises à jour récentes (juin 2026) → autorité thématique accumulée.
2. **Couverture exhaustive des intentions** : chaque commune × {urgent, pas cher, WC, évier, lavabo, égout, société, entreprise} a sa page ; le site capte la longue traîne « débouchage + commune ».
3. **Domaine exact-match** `.brussels` + ancre de marque = requête (« Débouchage Bruxelles »).
4. **Numéro omniprésent** (11 liens tel: sur la home, numéro en H2, barre d'appel mobile) → CTR d'appel élevé.
5. **Un tableau de prix sur la homepage** (rare chez les concurrents) + prix dans les titles (« àpd 20€ ») → CTR SERP.
6. **Réseau de sites satellites** (5 domaines partenaires en footer) qui se lient entre eux.
7. Bases techniques correctes : canonical, Yoast, sitemap, CDN images, lazy loading.

### Faiblesses (exploitables)
1. **Contenu spun/IA de très basse qualité**, contradictoire, avec résidus de variables (« Chatelet » sur Bruxelles, « débauchage », « canalisation canalisation ») — vulnérable aux mises à jour Helpful Content / spam.
2. **Pages clés vides ou hors sujet** : `/tarifs-debouchage/` sans un seul prix, `/debouchage-wc-bruxelles/` et `/debouchage-urgent-bruxelles/` qui parlent de fosse septique, `/debouchage-egout-bruxelles/` = guide générique.
3. **Cannibalisation massive** : 5 pages « débouchage Ixelles urgent », doublons `-2`/`-3`.
4. **Aucune preuve réelle** : pas d'avis Google, notes étoiles auto-attribuées (10 000+ « votes ») via schema `CreativeWorkSeries` → risque de pénalité rich results ; pas de BCE/TVA, pas d'équipe, pas de photos réelles de chantier.
5. **NAP incohérent** (2 numéros, 3 noms de marque, adresse absente du schema) → faiblesse local pack.
6. **Aucun schema LocalBusiness/Service/FAQPage**, aucune FAQ, aucun HowTo.
7. **Trous de couverture service** : pas de page hydrocurage Bruxelles, curage égout, chambre de visite, sterput, avaloir, gouttière, colonne d'immeuble, clapet anti-retour, chemisage, raccordement égout, bac à graisse, citerne, pompage cave, syndic, HoReCa, entretien.
8. **Performance** : 264 Ko de HTML, ~95 requêtes, Elementor + Astra + 27 CSS + doublons Font Awesome.
9. Monolingue FR (0 % du marché NL bruxellois).
10. Pas de tracking → ils n'optimisent probablement pas leur conversion.

### 10 actions concrètes pour helpdrain.be
1. **Page `/tarifs-debouchage-bruxelles` = la meilleure grille tarifaire de Bruxelles** : tableau TTC (TVA 6 % rénovation / 21 %) par prestation (WC, évier/lavabo, douche, colonne, égout, chambre de visite, hydrocurage/h, caméra, vidange fosse/m³, bac à graisse), déplacement inclus ou non, majorations nuit/WE, « pas de surprise » + schema `Service`/`Offer` + FAQPage. Le concurrent affiche 20–120 € HT ; se positionner sur une fourchette crédible (ex. WC 90–150 € TTC) avec l'argument « devis ferme avant intervention », pas sur le prix d'appel mensonger.
2. **Une page = un vrai sujet** : chaque page service de helpdrain (WC, égout, urgent…) doit parler de SON sujet avec symptômes, causes, méthode (furet / hydrocureuse / caméra), durée, prix, garantie, quand appeler. Zéro texte partagé entre pages.
3. **Schema complet et honnête** : `Plumber`/`LocalBusiness` (telephone, address, areaServed = 19 communes, openingHours 24/7, priceRange), `Service` par page, `FAQPage` sur chaque page service, `BreadcrumbList`. **Pas de notes auto-attribuées** ; brancher les vrais avis Google (widget + `AggregateRating` uniquement si avis réels et affichés).
4. **NAP unique et strict** : un seul numéro (le même que la fiche Google Business), un seul nom, adresse + BCE + TVA en footer et dans le schema.
5. **Preuves réelles** : photos de chantier bruxellois (chambre de visite, sterput, colonne), photo équipe/camion hydrocureur, avis Google nommés, n° BCE, assurance RC, mention « rapport caméra fourni pour l'assurance ».
6. **Vocabulaire local et technique que le concurrent ignore** : sterput, chambre de visite, avaloir, colonne d'immeuble, clapet anti-retour, raccordement Vivaqua, hydrocureur, syndic/copropriété, HoReCa, cave inondée — nos 34 pages couvrent déjà ces trous ; s'assurer que chaque terme apparaît en H1/H2 et dans les FAQ.
7. **FAQ sur chaque page** (5–8 questions réelles) reprenant les intentions repérées : « wc bouché que faire », « combien coûte un débouchage à Bruxelles », « qui paie : locataire ou propriétaire / syndic ? », « débouchage remboursé par l'assurance ? », « produits chimiques ou furet ? », « délai d'intervention ».
8. **Maillage interne éditorial** (pas seulement menu/footer) : 4–8 liens contextuels par page vers les services liés + page tarifs + page urgence ; hub `/services`. Le concurrent en a 1–4.
9. **Ton** : vouvoiement constant, phrases courtes, belge sans caricature (« sterput », « chambre de visite », « GSM », « 19 communes »), aucun « n'hésitez pas », aucun tutoiement, pas de « pas cher » à répétition — jouer « prix annoncé = prix payé ».
10. **Performance et conversion** : HTML < 60 Ko, < 30 requêtes, LCP < 2 s, un seul numéro cliquable en sticky mobile + bouton WhatsApp, formulaire court avec honeypot, GA4/GTM + suivi des clics tel: dès le lancement. Ajouter à terme une version NL (`/nl/ontstopping-brussel`) avec hreflang : le concurrent n'en a pas.

---

## Résumé

1. debouchages.brussels = WordPress/Astra/Elementor, ≈ 250 URL, dont ~150 pages « commune × intention » spun par variables, sans version NL.
2. Il ranke par ancienneté, volume, domaine exact-match et omniprésence du numéro, pas par la qualité.
3. Le contenu est massivement spun/traduit/IA : « débauchage », « pipeline », « Chatelet » sur une page Bruxelles, blocs en tutoiement argotique sur la home.
4. Les pages WC, urgent et pas cher sont un copier-coller de la page fosse septique ; la page tarifs ne contient aucun prix.
5. Seuls prix chiffrés : tableau homepage HT (WC 20–120 €, évier/lavabo 30–130 €, égout 35–150 €, fosse ~95 €/m³), caméra 250 €/150 €, « àpd 49 € déplacement inclus » ; contradictoires entre eux.
6. Aucune preuve réelle : notes étoiles auto-attribuées (10 000+ votes) via schema CreativeWorkSeries, pas d'avis Google, pas de BCE/TVA, NAP incohérent (2 numéros, 3 noms).
7. Schema limité à Yoast (WebPage/Organization sans téléphone ni adresse) ; zéro LocalBusiness, Service, FAQPage, hreflang.
8. Technique lourde : 264 Ko HTML, ~95 requêtes, 27 CSS ; aucun tracking (GA/GTM/pixel) détecté ; formulaire Metform sans captcha.
9. Trous de couverture : hydrocurage, curage égout, chambre de visite, sterput, avaloir, colonne, clapet, chemisage, raccordement, bac à graisse, syndic, HoReCa — tous déjà prévus dans nos 34 pages.
10. Priorités helpdrain.be : grille tarifaire TTC crédible + FAQ + schema Service/FAQPage, une page = un sujet réel, NAP unique + vrais avis Google + preuves (BCE, photos, rapport caméra), maillage contextuel, site rapide, puis version NL.
