# Analyse concurrent : maesdebouchage.be

Date de l'analyse : 2026-09-06. Méthode : `curl -sL` avec User-Agent Chrome sur 18 URL (homepage, robots.txt, sitemap_index + page-sitemap + post-sitemap, 8 pages service, 3 articles "prix", 2 pages commune, à-propos, contact, mentions légales). Tout ce qui est cité ci-dessous est du texte brut récupéré sur le site, reproduit tel quel (fautes comprises).

Position SERP fournie en contexte : local pack #3 (116 avis), organique #8 sur "débouchage bruxelles".

---

## 1. Fiche

| Élément | Valeur relevée |
|---|---|
| Domaine | maesdebouchage.be (HTTPS, `<html lang="fr-BE">`) |
| Raison sociale | "Maes Deboucheur", SRL, BCE **BE 0802.545.930** (numéro de la série 0802.xxx = immatriculation 2023, donc société récente malgré le compteur "24 ans d'expériences" affiché sur /a-propos-de-nous/) |
| Siège / NAP | Oudesmidsestraat 20, 1700 Dilbeek. Affiché en footer comme « Oudesmidsestraat 20, Dilbeek, 1700 Bruxelles, Belgique » (incohérent : Dilbeek n'est pas Bruxelles). Le JSON-LD LocalBusiness indique `postalCode: "1000"`, `addressLocality: "Dilbeek"`, `addressRegion: "Bruxelles"` → **NAP incohérent entre footer, schema et réalité**. |
| Téléphones | Deux numéros : **+32 456 68 41 45** (header, footer, schema `telephone`) et **+32 470 417 862** (tous les boutons "Demande d'intervention", WhatsApp, mentions légales, bloc Google Maps). Page contact affiche « 04 566 841 45 » (formatage bizarre). Mentions légales contiennent aussi un +212 (agence marocaine). |
| E-mail | contact@maesdebouchage.be |
| Fiche Google (GBP) | Nom de fiche keyword-stuffé : « Débouchage Bruxelles - Canalisation - Plombier Urgence » (kgmid /g/11y3np02yh). Widget Trustindex : « EXCELLENT – Basée sur 113 avis ». Schema Product annonce `reviewCount: 150`. |
| Nb de pages (sitemap Yoast) | **93 pages + 28 articles = 121 URL** indexables. Dont ~15 pages service Bruxelles, ~35 pages "débouchage + ville" (Anderlecht → Waremme, Antwerpen, Gent, Liège…), ~30 pages "plombier + ville", 4 pages plomberie (fuite, robinet, boiler, WC), 2 pages "marques" tierces (/warzee-debouchage/, /plomberie-dewame/). |
| CMS / stack | **WordPress** + **Elementor 4.2.4 + Elementor Pro 4.2.3**, thème **Plumer (Themeholy)** + plugin plumer-core, **Yoast SEO**, Contact Form 7 6.1.7 + reCAPTCHA, Click-to-Chat WhatsApp (HoliThemes), Trustindex (avis Google), jQuery 3.7.1 + jquery-migrate, Bootstrap 4.3.1, Slick, Isotope, Magnific, Swiper. PHP 8.3.33. |
| Hébergeur | **Hostinger** (header `platform: hostinger`, `server: hcdn`, LiteSpeed cache). |
| Agence | Mentions légales : « Accompagnement Digital et Référencement – DIGIDARING, SARL, Oujda 60000, Maroc ». L'iframe Google Maps est générée avec la locale `!2sma` (Maroc). |
| Langues | FR uniquement. Aucun hreflang. `og:locale: fr_FR` (pas fr_BE). |
| Réseaux | Facebook, Instagram (@maes_deboucheur), TikTok (@maes.deboucheur), Medium (@maesdebouchage). Schema Organization `sameAs` ne contient que TikTok. |
| Sites liés | Lien sortant vers https://www.plombier-bruxelles-urgence.be/ (« plombier spécialisé en débouchage »). Page /debouchage-bac-a-graisse-bruxelles/ a pour title « … - HBA Debouchage » et une image nommée `deboucheur-bruxelles-urgence-hba-deboucheur.jpg` → réseau de sites / templates réutilisés. |

---

## 2. Homepage (https://maesdebouchage.be/)

- **Title** : « Débouchage Bruxelles - Prix Pas Cher & Urgence 24h/7j - Maes Debouchage »
- **Meta description** : « Intervention rapide de débouchage à Bruxelles 24h/24 et 7j/7. Canalisations, WC, éviers et égouts. Prix pas chers, devis clair et service fiable. Contactez Maes Déboucheur dès maintenant pour une urgence ou une intervention rapide. »
- **H1 exact** : « Débouchage Bruxelles »
- **H2 dans l'ordre** :
  1. Entreprise de Débouchage à Bruxelles Disponible 24/7
  2. Service de Débouchage à Bruxelles Rapide et Efficace (grille de 11 H3 : Débouchage de Canalisation, Inspection vidéo caméra, Débouchage Lavabo, Curage Canalisation, Débouchage tuyau, Débouchage WC, Débouchage d'égouts, Débouchage Baignoire, Débouchage de gouttière, Débouchage évier, Débouchage bac à graisse)
  3. Débouchage à Bruxelles : Entreprise Agréée et Professionnelle
  4. Pourquoi Choisir Notre Service de Débouchage à Bruxelles ?
  5. Débouchage Canalisation à Bruxelles – Solution Durable
  6. Zone d'Intervention à Bruxelles et Alentours
  7. Notre Processus de Travail Standard (+ 3 H2 abusifs : Prise de Contact / Inspection & Analyse / Solution Rapide & Durable)
  8. Avis Clients sur Notre Service de Débouchage à Bruxelles
  9. Retrouvez Notre Entreprise de Débouchage à Bruxelles sur Google Maps
  10. Contactez-nous pour un débouchage à Bruxelles
  11. Blog Maes Débouchage
  12. FAQ : Débouchage à Bruxelles
- **Nb de mots** : ~2 100 mots page entière, **~1 550 mots de contenu** hors nav/footer/bloc avis.
- **Structure** : hero (H1 + 1 paragraphe + bouton « Demander une Intervention ») → intro 24/7 → grille 11 services (cartes icône SVG + 1 phrase + « En Savoir Plus ») → bloc « agréée » avec photo → liste 6 arguments (« Intervention rapide en moins d'une heure », « Techniciens expérimentés », « Matériel professionnel haute pression », « Devis clair et transparent », « Prix compétitifs sans surprise », « Service disponible 24/7 ») → bloc solution durable → zone d'intervention (liste de communes en texte, sans liens) → process 3 étapes → widget Trustindex (9 avis Google affichés) → iframe Google Maps + « Obtenir un itinéraire » → bandeau CTA → 4 articles blog → FAQ accordéon (5 questions) → footer.
- **CTA** : bouton header « Devis gratuit » / « Demande d'intervention » (tel:), bouton hero « Demander une Intervention », bandeau « Demande d'intervention / Nous contacter », bouton flottant WhatsApp (bas droite, numéro 32470417862). **4 liens `tel:`** sur la homepage (2 vers +32 456 68 41 45, 2 vers +32 470 417 862). Aucun formulaire dans le hero (le formulaire CF7 est en pied de page/contact).
- **Trust signals** : « Basée sur 113 avis » (Trustindex), « Entreprise Agréée », « 24h/24 et 7j/7 », « Intervention rapide en moins d'une heure », « Devis gratuit ». Pas d'années d'expérience sur la homepage (le « 24 Ans d'expériences » n'est que sur /a-propos-de-nous/). Pas de garantie chiffrée sur la homepage (la garantie « deux ans » n'apparaît que dans l'article /debouchage-bruxelles/).
- **Prix** : oui, dans la FAQ « Combien coûte un service de plombier & débouchage en Belgique ? » (voir section 4). C'est la seule page service qui affiche des prix « à partir de ».
- **FAQ** (5 questions, accordéon Elementor, **sans schema FAQPage**) :
  - « Quels sont les services proposés par votre entreprise de plomberie à Bruxelles ? »
  - « Dans quelles villes de Belgique intervenez-vous pour un service de plombier & débouchage ? » (réponse : Bruxelles, Liège, Charleroi, Namur, Mons, Tournai, Gand, Bruges, Anvers, Louvain, Malines, Wavre, Nivelles, Ottignies, Arlon, Bastogne, « Toutes les communes rurales et zones périurbaines »)
  - « Pourquoi choisir un plombier à Bruxelles spécialisé dans le débouchage sans produits chimiques ? »
  - « Combien coûte un service de plombier & débouchage en Belgique ? »
  - « Quels sont les signes indiquant un besoin de débouchage urgent ? »
- **Anomalie notable** : le texte du hero contient la phrase « Select 58 more words to run Humanizer. » — artefact d'une extension navigateur « Humanizer » (outil de réécriture de texte IA) copié-collé dans le HTML. Même artefact sur /debouchage-canalisation-bruxelles/ (« Select 75 more words to run Humanizer. ») et /deboucheur-bruxelles/. Preuve directe de contenu généré par IA puis « humanisé ».

---

## 3. Pages service récupérées

Gabarit commun à toutes les pages service « Bruxelles » (créées via Elementor, même squelette) : H1 = mot-clé exact → 1-2 paragraphes intro → H2 « Entreprise Agréée en … » + photo → H2 « Services … » avec 6 à 12 H3 (1-2 phrases chacun) → H2 « Pourquoi choisir … » → widget Trustindex (mêmes 9 avis partout) → H2 « Retrouvez … sur Google Maps » → bandeau CTA → H2 « FAQ : … » (5 questions) → footer. Aucun prix sur les pages service (sauf homepage FAQ). Maillage interne dans le corps de texte : **quasi nul** (les seuls liens du corps de la page WC vont vers Google Maps, Google Search, g.page/review, tel: et /contact/). Le maillage repose uniquement sur le menu (18 entrées) et le footer.

### 3.1 /debouchage-wc-bruxelles/
- Title : « Débouchage WC Bruxelles - Intervention Rapide 24h/24 - Maes Debouchage »
- Meta : « Besoin d'un débouchage WC à Bruxelles ? Intervention rapide 24h/24 et 7j/7 pour WC bouchés, canalisations et urgences. Service professionnel, efficace et durable dans toute la région bruxelloise. »
- H1 : « Débouchage WC Bruxelles » (publiée 2023-04-03, modifiée 2026)
- H2 : Entreprise Agréée en Débouchage WC à Bruxelles / Service de débouchage WC à Bruxelles 24h/24 / Pourquoi choisir nos experts en débouchage WC à Bruxelles? / Nos méthodes efficaces pour un débouchage WC à Bruxelles rapide et durable / Avis clients débouchage WC à Bruxelles / Retrouvez notre entreprise de débouchage de WC à Bruxelles sur Google Maps / Contactez-nous pour un Débouchage de vos toilettes ? / FAQ : Service débouchage WC à Bruxelles
- H3 services : Débouchage WC simple, WC totalement bouché, WC haute pression (hydrocurage), WC avec démontage, WC en immeuble et copropriété, Débouchage de colonne de chute, Inspection caméra des canalisations WC, Nettoyage complet des canalisations, WC après remontées d'eaux usées ; méthodes : Analyse précise du problème / Techniques professionnelles adaptées / Résultat durable et sans dégâts
- Mots : ~930 mots de contenu (1 490 page entière)
- Prix : aucun (« Le tarif dépend de la gravité du bouchon et de la technique utilisée. Un devis clair est toujours proposé avant intervention. »)
- Maillage : 24 liens internes uniques, tous nav/footer. 4 liens tel:.
- FAQ (5) : « Quel est le délai d'intervention pour un débouchage WC à Bruxelles ? », « Quels sont les prix pour un débouchage WC à Bruxelles ? », « Quelles techniques utilisez-vous pour déboucher un WC à Bruxelles ? », « Intervenez-vous en urgence pour un WC bouché à Bruxelles ? », « Comment éviter que mes WC se bouchent à nouveau à Bruxelles ? »
- Images : 77 `<img>` dont 60 étoiles/logos Trustindex ; 3 photos de contenu : `meiolleur-service-debouchage-wc-a-bruxelles-maes-debouchage.jpg` (alt « debouchage wc bruxelles »), `entreprise-maes-debouchage-a-bruxelles.jpg` (alt « pourquoi choisir Maes debouchage »), 1 photo **alt vide**. JPG 650×433, pas de WebP.

### 3.2 /debouchage-canalisation-bruxelles/
- Title : « Débouchage Canalisation Bruxelles - Intervention Rapide 24h/7j & Devis Gratuit »
- Meta : « Débouchage canalisation à Bruxelles rapide et efficace. Intervention 24h/24 et 7j/7 pour WC, éviers, douches et égouts. Devis gratuit et service urgent. »
- H1 : « Débouchage Canalisation Bruxelles »
- H2 : Débouchage canalisation Bruxelles : intervention rapide 24h/24 et 7j/7 / Découvrez les avis de nos clients à Bruxelles / Nos services spécialisés en débouchage de canalisations à Bruxelles / Pourquoi choisir notre entreprise de débouchage de **Canalaisation** à Bruxelles ? (coquille) / Zones d'intervention à Bruxelles et alentours / Retrouvez Notre Entreprise… / FAQ : Débouchage Canalisation à Bruxelles / Demandez votre devis gratuit… / Contactez-nous pour un Débouchage de **Lavabo à Bruxelle** (copié-collé de la page lavabo, coquille)
- H3 services : Inspection caméra des canalisations, Curage et nettoyage de canalisations, Nettoyage et Entretien de Siphon, Débouchage lavabo salle de bain, Débouchage canalisation lavabo, Débouchage siphon lavabo (→ contenu recyclé de la page lavabo ; image hero = `meilleur-service-debouchage-lavaboa-a-bruxelles.jpg` alt « debouchage lavabo bruxelles »)
- Mots : ~1 040 mots de contenu. Prix : aucun. FAQ : 5 questions dont « Combien coûte un débouchage de canalisation à Bruxelles ? » (réponse sans chiffre). Balises `<p>` échappées visibles dans le HTML de la FAQ (bug d'édition). Artefact « Select 75 more words to run Humanizer ».
- Bloc « causes » utile : Déchets alimentaires / Cheveux et savon / Objets étrangers / Calcaire / Racines d'arbres.

### 3.3 /debouchage-egout-bruxelles/
- Title : « Débouchage Égouts Bruxelles – Service Rapide 24h/24 & Prix Transparent »
- Meta : « Besoin d'un débouchage d'égouts à Bruxelles ? Intervention rapide 24h/24 et 7j/7, diagnostic précis et solutions durables pour canalisations bouchées. Service fiable, propre et sans mauvaise surprise. »
- H1 : « Débouchage Égout Bruxelles » (publiée 2024-10-09)
- H2 : « Entreprise Agréée **en de** débouchage d'égout à Bruxelles » (faute) / Services professionnels… / Pourquoi faire confiance à notre société… / Avis clients… / Retrouvez… sur Google / Expertise en débouchage d'égout à Bruxelles / Intervention d'Urgence… / FAQ
- 12 H3 : égout principal, canalisation, WC, lavabo, évier de cuisine, douche et baignoire, colonne d'immeuble, conduites d'eaux usées, siphon, fosse septique, curage haute pression, inspection caméra.
- Mots : ~960. Prix : aucun (« Vos tarifs sont-ils transparents ? Oui, nous proposons des prix clairs et annoncés à l'avance, sans frais cachés »). Un paragraphe est tronqué en plein mot : « Nous privilégions des solutions durables, des interven ».
- Images : 3 photos contenu (alt « debouchage egout bruxelles », « pourquoi choisir Maes debouchage », « Expertise en débouchage d'égout à Bruxelles »).

### 3.4 /curage-canalisation-bruxelles/
- Title : « Curage Canalisation Bruxelles - Nettoyage Haute Pression - Maes Débouchage »
- Meta : « Besoin d'un curage canalisation à Bruxelles ? Maes Débouchage réalise le nettoyage haute pression de vos canalisations, égouts et réseaux d'évacuation. Intervention rapide et efficace. »
- H1 : « Curage Canalisation Bruxelles » (2024-10-12)
- H2 : Entreprise de Curage Canalisation à Bruxelles 24/7 / Services de Curage… (12 H3 : domestique, égouts, colonnes d'immeubles, réseaux eaux usées, eaux pluviales, préventif, curatif, débouchage+curage combiné, copropriété, restaurants et commerces, inspection caméra + curage, détartrage) / Curage Canalisation pour Particuliers et Professionnels / Pourquoi Choisir Maes Débouchage ? / Avis / Découvrez… / Demandez Votre Devis / Questions Fréquentes
- Mots : ~1 020. Prix : aucun. FAQ intéressante : « Quelle est la différence entre un débouchage et un curage ? », « À quelle fréquence faut-il effectuer un curage ? » (« tous les 3 à 5 ans »), « Le curage haute pression peut-il endommager les canalisations ? ».
- Images : 3 photos (alt « curage canalisation bruxelles », « Curage Canalisation pour Particuliers et Professionnels-maes debouchage », « pourquoi choisir Maes debouchage »).

### 3.5 /inspection-camera-bruxelles/
- Title : « Inspection Caméra Bruxelles - Détection Rapide de Canalisations »
- Meta : « Inspection caméra à Bruxelles pour canalisations, égouts et fuites. Diagnostic précis, rapide et sans casse. Intervention professionnelle pour particuliers et entreprises. »
- H1 : « Inspection Caméra Bruxelles » (2024-10-12)
- H2 : Entreprise Agréée en Inspection Caméra à Bruxelles / Services d'inspection par caméra (6 H3 : Détection de fuite, Inspection caméra de canalisation, Inspection vidéo des égouts, Passage caméra pour canalisation, Détection de racines, Curage et inspection caméra) / Pourquoi choisir Maes Deboucheur / Avis Google / Expertise (3 H3) / Retrouvez Notre Entreprise **de** Inspection Caméra (faute) / Contactez-nous / FAQ
- Mots : ~800 (la plus courte). Prix : aucun (alors que la homepage annonce « Inspection caméra : 250€ »). FAQ : « Combien de temps dure une inspection vidéo des égouts ? » → « entre 30 minutes et 1 heure », « L'intervention nécessite-t-elle de casser les murs ou le sol ? ».

### 3.6 /debouchage-bruxelles-urgent-7j-7j/
- Title : « Débouchage Bruxelles Urgent - Expert 24h/24 7j/7 - Prix Pas Cher »
- Meta : « Besoin d'un débouchage à Bruxelles Urgent ? Nos techniciens experts interviennent en urgence 24h/24 et 7j/7. Tarifs transparents, devis gratuit et service rapide et réactif. »
- H1 : « Débouchage Bruxelles Urgent 7j/7j– Plombier Express, Résultat Garanti ! » (2025-03-17). Gabarit différent (ancien template plumer avec formulaire CF7 dans le hero, listes d'emoji, ~30 H2 dont plusieurs vides).
- Mots : **~3 860 mots** de contenu, 10 liens tel:, 117 liens internes (bloc « Trouver un Plombier dans Votre Région » avec ~70 liens villes).
- Prix : « En moyenne, le prix moyen pour un débouchage à Bruxelles se situe entre 80€ et 250€ ». Promesses : « Intervention en moins de 30 minutes », « 100% Satisfaction Garantie », « Aucun surcoût nocturne ».
- Certifications revendiquées : « agréments RGIE, les certifications Belca, ainsi que le niveau VCA – Petrochemical », « ISO14001 », « véhicules Euro 6 fonctionnant au carburant HVO–100 (réduction de -90 % de CO₂) », « station mobile d'hydrocurage 200 bars, une caméra endoscopique HD 60 m et un pack colmatage express ». (RGIE = règlement électrique, sans rapport avec le débouchage ; à considérer comme du remplissage.)
- FAQ : **13 questions** numérotées avec emoji (1️⃣ … 1️⃣3️⃣), réponses très longues et génériques (« la plupart des entreprises… »). Témoignages « Sophie L., Martine D., Julien M., Claire B., Thomas V., Patrick H. » tous évoquant « un plombier à Anderlecht » (copié de la page Anderlecht).
- Images : hotlinkées depuis **themeholy.com** (démo du thème : `hero_overlay_1.png`, `process_card_2.jpg`, `process_card_3.jpg`) + photos de stock (alt « Plombier effectuant un débouchage sous un évier, portant une salopette bleue… »).

### 3.7 /debouchage-ixelles/ (page commune, représentative des ~35 pages villes)
- Title : « Debouchage Ixelles - 24h/24 & 7j/7 | Déboucheur Professionnel à Ixelles »
- Meta : « Besoin d'un service de débouchage à Ixelles ? Intervention rapide 24h/24 et 7j/7 pour déboucher WC, canalisations, éviers et égouts. Devis gratuit et tarifs transparents. »
- H1 : « Débouchage Ixelles - Confiez Vos Canalisations à un Pro Agréé ! »
- 16 H2, dont plusieurs avec emoji (« 🚰 Débouchage Ixelles – Dépannage Express pour Canalisations Bouchées 🔧 »), « Rejoignez Notre Communauté de Plus de 100 Clients Satisfaits à Ixelles ! ». ~2 960 mots, 13 liens tel:. Mot-clé « débouchage Ixelles » répété dans quasiment chaque phrase de la FAQ (8 questions). Aucun contenu local réel (pas de quartiers hors « Flagey, Châtelain » cités sur une autre page, pas de spécificité bâti/égouts). Prix : aucun.

### 3.8 /debouchage-bac-a-graisse-bruxelles/
- Title : « Débouchage Bac à Graisse Bruxelles - Intervention Rapide 24h/24 - **HBA Debouchage** » (mauvaise marque)
- Meta : « Besoin d'un débouchage de bac à graisse à Bruxelles ? Intervention rapide 24h/24 et 7j/7. Nettoyage, pompage et entretien pour particuliers et professionnels. Devis gratuit et service fiable dans toute la région bruxelloise. »
- H1 : « Débouchage Bac à Graisse Bruxelles ». ~930 mots. Cibles citées : « restaurants, hôtels, friteries, boulangeries, collectivités et entreprises ». Prestations : « Pompage des déchets et graisses », nettoyage, entretien. Prix : « devis gratuit ». FAQ 5 questions (coût, signes, urgence, fréquence, pourquoi un pro). H2 avec coquille « bacc à graisse ».

### 3.9 /deboucheur-bruxelles/
- Title : « Déboucheur Bruxelles - Intervention Rapide 24h/24 - Maes Deboucheur ». H1 « Déboucheur Bruxelles ». ~1 760 mots, 10 liens tel: (« APPELEZ MAINTENANT 0470 417 862 »). H2 « Déboucheur Bruxelles Pas Cher Qualité et Accessibilité », « Tarif Débouchage Bruxelles » (facteurs de prix, **aucun chiffre**). Contient le bloc « Zones d'intervention » le plus détaillé du site (Ville de Bruxelles : Centre-Ville, Grand-Place, Sablon ; Laeken : Atomium, Château Royal ; Haren et Neder-Over-Heembeek ; Etterbeek ; Ixelles : Flagey, Châtelain ; Saint-Gilles ; Schaerbeek ; Anderlecht ; Molenbeek-Saint-Jean…). Porte les mêmes 5 blocs JSON-LD que la homepage (LocalBusiness, Service, Product + AggregateRating).

### 3.10 Articles « prix » (blog, type Article)
- **/debouchage-bruxelles/** (2026-04-13, ~2 020 mots, sans meta description) : title « Débouchage à Bruxelles rapide, urgent et pas cher - Maes Débouchage - Deboucheur à Bruxelles - Belgique ». C'est probablement l'URL classée #8 en organique : c'est la seule page avec un vrai **tableau de prix** (voir §4), H2 « Prix et tarifs transparents pour un débouchage de canalisation », « Combien coûte un débouchage à Bruxelles en 2024 » (titre daté 2024 dans un article de 2026), garantie « jusqu'à deux ans », « Aucun surcoût nocturne ».
- **/prix-pour-deboucher-canalisation/** (2025-02-27, ~2 570 mots, sans meta description) : 2 500 mots sur le prix **sans un seul chiffre**. Texte manifestement généré (« Alors, prêt à garder vos canalisations au top . », « un un débouchage de canalisation », « faire appel à les professionnels »).
- **/curage-canalisation-tarif/** (2026-05-01, ~1 900 mots, sans meta description) : le plus riche en chiffres (voir §4) mais **prix « HT » et « TVA à 10 % »** = contenu recopié d'une source française (en Belgique : TVA 6 % / 21 %, pas de « HT » dans la communication B2C). Doublon /curage-canalisation-tarif-2/ dans le sitemap.

---

## 4. Prix relevés (tout ce qui est chiffré sur le site)

### 4.1 Grille officielle « à partir de » (FAQ homepage, seule grille sur une page service)
| Service | Prix affiché |
|---|---|
| Débouchage WC | à partir de 150 € |
| Débouchage baignoire | à partir de 150 € |
| Débouchage évier | à partir de 180 € |
| Débouchage lavabo | à partir de 180 € |
| Débouchage tuyaux | à partir de 180 € |
| Débouchage canalisation | à partir de 250 € |
| Débouchage égout | à partir de 250 € |
| Inspection caméra | 250 € |
| Remplacement chasse d'eau | 320 € |
| Recherche de fuite d'eau | 450 € |
| Installation de robinetterie | à partir de 250 € |
| Installation chauffe-eau | à partir de 500 € |
| Dépannage plomberie / Remplacement de canalisation / Débouchage bac à graisse | devis sur place |

Phrase d'accompagnement : « 👉 En cas d'urgence, un plombier à Bruxelles ou un déboucheur Bruxelles établit généralement un devis sur place afin d'adapter le prix à la situation réelle ».

### 4.2 Tableau de l'article /debouchage-bruxelles/ (contredit la grille ci-dessus)
| Type de débouchage | Prix estimé | Équipement |
|---|---|---|
| Évier ou lavabo bouché | 20 € – 80 € | Furet manuel ou motorisé |
| WC bouché standard | 80 € – 120 € | Furet électrique ou pompe manuelle |
| Baignoire ou douche bouchée | 60 € – 100 € | Furet léger ou hydrocurage doux |
| Dégorgement haute pression | 150 € – 250 € | Hydrocurage 150-200 bars |
| Inspection caméra 60 mètres | 120 € – 180 € | Caméra endoscopique HD |
| Curage préventif annuel | 200 € – 400 € | Hydrocurage complet |

Phrases : « Nos tarifs débutent à 20€ pour une petite intervention, et varient généralement entre 80€ et 250€ pour un débouchage de canalisation plus complexe. », « une de nos clientes a dernièrement payé 95€ pour un débouchage à Bruxelles », « l'extraction d'un amas de gravats a été réalisée rapidement pour 180€ », « Aucun surcoût nocturne : Les tarifs restent identiques la nuit et le week-end. » (contredit par /deboucheur-bruxelles/ : « Les interventions effectuées en urgence peuvent inclure des frais supplémentaires »).

### 4.3 Page /debouchage-bruxelles-urgent-7j-7j/
« En moyenne, le prix moyen pour un débouchage à Bruxelles se situe entre 80€ et 250€ ». « Un simple débouchage wc bruxelles avec un furet manuel coûtera généralement moins cher qu'un débouchage d'égouts nécessitant un camion hydrocureur. »

### 4.4 Article /curage-canalisation-tarif/ (chiffres « HT », origine française)
| Prestation | Prix cité |
|---|---|
| « Notre équipe facture à partir de 89 € pour une intervention simple » | 89 € |
| Débouchage simple (évier, WC) jusqu'à 10 m | 89 – 150 € |
| Débouchage manuel simple | 89 – 150 € |
| Eau qui s'écoule lentement (simple débouchage) | 150 – 250 € |
| Dégorgement haute pression (odeurs persistantes) | 250 – 400 € |
| Curage par jet d'eau | 200 – 400 € |
| Nettoyage programmé | 120 – 350 € ; « contre 200 € à 600 € pour un dégorgement tard le soir, un dimanche ou un jour férié » |
| Intervention urgente | 400 – 700 € |
| Inspection vidéo seule jusqu'à 20 m | 120 – 150 € HT « avec rapport PDF et images » |
| Inspection 20-30 m | 150 – 200 € HT |
| Inspection + curage 30-50 m | 350 – 500 € HT |
| Option caméra 4K | +50 à 100 € HT |
| Camion hydrocureur 50 m et plus | 500 – 800 € ; « tarif camion débouchage canalisation oscille entre 350 € HT et 800 € » |
| Égout de gros diamètre | 500 – 700 € HT |
| Entretien préventif (foyer 4 pers.) | « tous les 5 ans, représentant environ 50 à 70 € par an » ; immeuble : « tous les 3 à 4 ans, soit un budget annuel de 85 à 120 € » |

### 4.5 Page /plombier-bruxelles/
« Le tarif moyen d'un plombier **en France** varie généralement entre 40€/h et 80€/h, avec des frais de déplacement de 30€ à 160€ » puis « Les prix moyen pour l'intervention d'un plombier varient entre 60 € et 160 € » (Belgique).

**Synthèse prix** : le site affiche 4 grilles incompatibles (WC « à partir de 150 € » vs « 80-120 € » vs « 89-150 € » ; caméra « 250 € » vs « 120-180 € » vs « 120-200 € HT »). Le positionnement affiché est « pas cher » / « à partir de » mais le prix plancher réel des pages service est 150 €. Pour helpdrain.be, une grille unique, cohérente, TVAC, avec ce qui est inclus (déplacement, 1ère heure, matériel) sera un différenciateur net.

---

## 5. Technique

- **Schema JSON-LD** (homepage et /deboucheur-bruxelles/, /plombier-bruxelles/ : 4-5 blocs ; pages service : 1 seul bloc Yoast) :
  - Yoast `@graph` : WebPage, ImageObject, BreadcrumbList, WebSite (+SearchAction), Organization (`name: "Maes Debouchage"`, logo SVG, `sameAs` TikTok uniquement), `inLanguage: fr-BE`. Articles : Article + Person (« Maes Déboucheur »).
  - Bloc manuel `LocalBusiness` : `name` = le title complet keyword-stuffé (« Débouchage Bruxelles - Prix Pas Cher & Urgence 24h/7j - Maes Debouchage »), `telephone: +32456684145`, `priceRange: "€€"`, adresse **postalCode 1000 / Dilbeek / addressRegion Bruxelles** (faux), geo 50.859285/4.3351248, `areaServed: City Bruxelles`. Pas d'`openingHoursSpecification`, pas de `sameAs`, pas de `image` photo réelle, pas de sous-type (Plumber).
  - Bloc `Service` : `name: "Plomberie Bruxelles"`, `serviceType: "Débouchage générale et urgence"`.
  - Bloc `Product` : `name: "Débouchage Bruxelles"`, `aggregateRating 5 / reviewCount 150` **sans offre ni avis** → schema d'avis auto-attribué, non conforme aux consignes Google (risque d'action manuelle « structured data spam »). Chiffre 150 ≠ 113 affiché ≠ 116 sur GBP.
  - **Aucun FAQPage**, aucun Service par page service, aucun BreadcrumbList visible (fil d'Ariane « Home > … » en texte).
- **Canonical** : self-canonical sur toutes les pages (Yoast). **Hreflang : aucun**. `og:locale fr_FR`.
- **Open Graph / Twitter** : og:title, og:description, og:image (photo JPG 650×433 ou webp 800×532), og:type website, twitter:card summary_large_image. Les articles n'ont **pas de meta description** (5 URL sur 18 sans description : /a-propos-de-nous/, /contact/, 3 articles).
- **URL** : plates, sans dossier (`/debouchage-wc-bruxelles/`), une exception `/plomberie-bruxelles/recherche-fuite-bruxelles/`. Slugs cohérents « [service]-bruxelles » et « debouchage-[ville] » / « plombier-[ville] ». Doublon `/curage-canalisation-tarif/` + `/curage-canalisation-tarif-2/`.
- **Images** : homepage = 101 `<img>` (79 SVG, 10 JPG, 2 PNG, **1 WebP**) ; 60 images = étoiles/logos Trustindex. `loading="lazy"` sur seulement 3 img + iframe Maps ; 1 `fetchpriority`. Photos de contenu en JPG (650×433, 680×382, 751×499) avec noms de fichier SEO longs (`meiolleur-service-debouchage-wc-a-bruxelles-maes-debouchage.jpg`, coquille incluse). Alt = mot-clé exact (« debouchage wc bruxelles »). Plusieurs images **hotlinkées depuis themeholy.com** (démo du thème) sur les pages urgent/anderlecht. Photos = banques d'images (« side-view-man-working-as-plumber », « plumbing-professional-doing-his-job »), aucune photo réelle de chantier/camion/équipe identifiable (sauf 2 portraits UUID sur la page urgent).
- **Scripts tiers** : GA4 `gtag/js?id=G-XFSPREJQ1F` (pas de GTM), **Fraud Blocker** (protection clics Google Ads → ils font du SEA), Trustindex loader.js, Google reCAPTCHA (CF7), Click to Chat WhatsApp (HoliThemes, numéro 32470417862, events GA/GTM/Pixel activés), Google Maps embed iframe, Google Fonts (Outfit + Roboto + Poppins chargées séparément = 3 familles, 3 requêtes). Pas de call tracking, pas de chat live, pas de pixel Meta détecté, mention `crisp` dans le CSS du thème seulement.
- **Formulaire** : Contact Form 7 + reCAPTCHA v3. Champs : Nom, Adresse électronique, Numéro de téléphone, menu déroulant « Devis Gratuit » (Débouchage Canalisation / WC / égout / Évier et Lavabo / Salle de bains / gouttière / **Sterput** / Inspection vidéo caméra / Curage / Vidange fosses septiques / **Chambre de visite** / Réparation de fuite / Remplacement de robinet), Message. Page urgent : formulaire réduit (email + menu). Pas de champ adresse/commune, pas de créneau.
- **Poids / requêtes (homepage)** : HTML **168 Ko** (31 Ko gzip), **30 scripts JS** externes, **32 feuilles CSS**, 101 images, 1 iframe → ~170 requêtes estimées. jQuery + jquery-migrate + Bootstrap + Elementor + Elementor Pro + Swiper + Slick + Isotope + Magnific + tilt + counterup chargés sur chaque page. LiteSpeed cache en `no-cache` sur la requête testée. TTFB mesuré 0,4-0,8 s depuis curl. Vitesse ressentie : site Elementor lourd, LCP probablement > 3 s sur mobile (JPG non-lazy, 3 polices, widget avis chargé au-dessus du footer).
- **Robots.txt** : `Disallow:` vide (tout autorisé), sitemap déclaré. Meta robots `max-image-preview:large`.

---

## 6. Ton rédactionnel

**Vouvoiement** systématique (« vous » ≈ 200 occurrences sur 18 pages, aucun tutoiement). Voix « nous / notre entreprise / notre équipe ». Registre commercial générique, peu de « je », aucun nom de technicien, aucune anecdote réelle (les « exemples clients » sont inventés : « une de nos clientes a dernièrement payé 95€ »).

Phrases exactes citées :
1. « Débouchage à Bruxelles rapide et efficace pour tous types de canalisations bouchées. Intervention 7j/7 pour particuliers et professionnels, avec des solutions durables et un dépannage en urgence dans toute la région bruxelloise. Select 58 more words to run Humanizer. » (hero homepage)
2. « Une canalisation bouchée ? C'est le cauchemar assuré ! Mauvaises odeurs, eau stagnante, voire dégâts matériels… Il vaut mieux agir vite. » (article prix)
3. « Grâce à notre expertise en débouchage WC à Bruxelles, nous assurons un résultat durable et une satisfaction optimale. » (page WC)
4. « Nous mettons un point d'honneur à proposer des interventions propres, transparentes et adaptées aux besoins des particuliers comme des professionnels dans toute la région bruxelloise. » (page WC)
5. « Vous recherchez sur Google une entreprise de débouchage d'égout à Bruxelles capable d'intervenir rapidement et efficacement ? » (page égout — s'adresse littéralement au chercheur Google)
6. « Débouchage Bruxelles Urgent 7j/7j ! Sans dégâts et 100% efficace. ➡️ 📲 Demandez votre intervention dès maintenant ! » (page urgent)
7. « Avec nos solutions de débouchage, vous pouvez enfin vous relaxer ! Nous intervenons rapidement en cas d'urgence et assurons un suivi régulier pour prévenir les soucis de canalisation. Confiez-nous l'entretien de vos installations et concentrez-vous sur ce qui compte vraiment ! » (à propos)
8. « Un appel à un plombier spécialisé vous permettra de bénéficier d'un diagnostic complet et d'un débouchage de canalisation se situe précisément sur la zone concernée. » (article prix — phrase agrammaticale typique du spinning)

**Signes de contenu IA / spun** (comptages sur les 18 pages) : « rapide et efficace » ×52, « grâce à » ×54, « afin de » ×38, « efficace et durable » ×23, « matériel professionnel » ×22, « que ce soit » ×17, « dès maintenant » ×8, « tranquillité d'esprit » ×8, « partenaire de confiance » ×7, « de pointe » ×7, « en un rien de temps » ×5, « n'hésitez pas » ×3, « 24h/24 » ×133. Chaque page service reprend le même paragraphe « Les clients nous font confiance pour … Notre réactivité, notre professionnalisme et la qualité de nos interventions sont régulièrement salués. 👉 » avec seulement le service remplacé. Mot-clé exact répété dans presque chaque H2/H3 et chaque réponse de FAQ (« débouchage Ixelles » 30+ fois sur la page Ixelles). Coquilles de génération : « Canalaisation », « bacc à graisse », « Bruxelle », « meiolleur », « en de débouchage », « un un débouchage », « faire appel à les professionnels », paragraphes coupés (« des interven »), balises `<p>` échappées dans la FAQ, artefacts « Select N more words to run Humanizer », témoignages « plombier à Anderlecht » copiés sur la page Bruxelles urgent, « HBA Debouchage » dans un title. Emoji dans les H2/H3 (🚰 🔧 🚽 🕳️ 1️⃣…1️⃣3️⃣). Références françaises non localisées (« TVA à 10 % », « HT », « tarif moyen d'un plombier en France »).

**Belgicismes / marqueurs belges utilisés** : « sterput » (7, formulaire + page urgent), « chambre de visite » (6), « boiler » (46, pages plomberie), « syndic » (2), « copropriété » (8), « GSM » : absent, « septante » : absent, « friteries » (page bac à graisse), « dégâts des eaux » (usage FR), « RGIE », « Belca », « VCA ». Le reste du lexique est standard/français de France (« dégorgement », « regard » ×2, « avaloir » 0, « citerne » 0).

---

## 7. Vocabulaire technique métier relevé et questions de FAQ

**Termes exacts (occurrences sur 18 pages)** : curage (307), égout (171), haute pression (91), furet (55) / « furet électrique » / « furet mécanique » / « furet motorisé » / « furet manuel », gouttière (47), boiler (46), hydrocurage (40) / « hydrocureur » (8) / « camion hydrocureur » / « station mobile d'hydrocurage 200 bars » / « Hydrocurage 150-200 bars », fosse septique (39), bac à graisse (35) / « bac dégraisseur » (11), agréé (34), camion (22) / « camion pompe », eaux usées (22), racines (20), dégorgement (15), siphon (13), remontée (11), calcaire (10), chemisage (8) / « réfection sans tranchée », copropriété (8), sterput (7), chambre de visite (6), refoulement (6), lingettes (5), colonne de chute (2) / « colonne d'immeuble » / « colonnes verticales d'évacuation », tartre (3), regard (2), eaux pluviales (2), « caméra endoscopique HD 60 m », « caméra thermique », « détartrage », « pompage », « vidange », « ventouse », « bicarbonate de soude et vinaigre », « eau dure », « PVC, fonte, cuivre », « hydromonitor », « pack colmatage express ». **Absents** : avaloir, citerne d'eau de pluie, clapet anti-retour, raccordement égout, Vivaqua, Hydria, cave inondée, pompage cave, gargouille (« gargouillis » utilisé), « chambre de visite » jamais expliquée.

**Questions de FAQ relevées (toutes pages)** :
- Quels sont les services proposés par votre entreprise de plomberie à Bruxelles ?
- Dans quelles villes de Belgique intervenez-vous pour un service de plombier & débouchage ?
- Pourquoi choisir un plombier à Bruxelles spécialisé dans le débouchage sans produits chimiques ?
- Combien coûte un service de plombier & débouchage en Belgique ?
- Quels sont les signes indiquant un besoin de débouchage urgent ?
- Quel est le délai d'intervention pour un débouchage WC à Bruxelles ?
- Quels sont les prix pour un débouchage WC à Bruxelles ?
- Quelles techniques utilisez-vous pour déboucher un WC à Bruxelles ?
- Intervenez-vous en urgence pour un WC bouché à Bruxelles ?
- Comment éviter que mes WC se bouchent à nouveau à Bruxelles ?
- Comment savoir si ma canalisation est bouchée ?
- Quels types de canalisations pouvez-vous déboucher ?
- Combien coûte un débouchage de canalisation à Bruxelles ?
- Comment éviter qu'une canalisation se bouche ?
- Quels types de canalisations débouchez-vous à Bruxelles ? / Intervenez-vous en urgence 24h/24 ? / Quels sont les délais d'intervention ? / Utilisez-vous du matériel professionnel ? / Vos tarifs sont-ils transparents ? (égout)
- Combien coûte un curage de canalisation à Bruxelles ? / Quelle est la différence entre un débouchage et un curage de canalisation ? / À quelle fréquence faut-il effectuer un curage de canalisation ? / Le curage haute pression peut-il endommager les canalisations ? / Intervenez-vous en urgence pour un curage ?
- En quoi consiste une inspection caméra des canalisations ? / Dans quels cas faut-il réaliser une inspection caméra ? / Combien de temps dure une inspection vidéo des égouts ? / L'inspection caméra permet-elle de détecter tous les types de problèmes ? / L'intervention nécessite-t-elle de casser les murs ou le sol ?
- Combien coûte un débouchage de bac à graisse ? / Quels sont les signes d'un bac à graisse bouché ? / À quelle fréquence faut-il entretenir un bac à graisse ? / Pourquoi faire appel à un professionnel pour le débouchage d'un bac à graisse ?
- Page urgent (13) : Comment obtenir un service … en moins de 30 minutes ? / Quel est le prix d'un débouchage urgent ? / Intervient-il les jours fériés et la nuit ? / Quels sont les signes … ? / Quels types de canalisations … ? / Pourquoi choisir un plombier plutôt que d'essayer soi-même ? / Inclut-il une inspection caméra ? / Peut-on bénéficier d'un devis gratuit avant ? / Quelles techniques … ? / Peut-il intervenir sur une canalisation totalement obstruée ? / Peut-il être réalisé sans endommager les canalisations ? / Quelles solutions écologiques ? / Comment éviter d'avoir à faire appel … à l'avenir ?
- À propos : Quels sont les signes indiquant que ma canalisation est bouchée ? / Est-ce que je peux déboucher moi-même une canalisation avec des produits du commerce ? / Proposez-vous des services d'urgence ? / Intervenez-vous pour le débouchage dans toutes les régions de Belgique ?
- Article : Quel est le prix d'un débouchage à Bruxelles ? / Combien de temps faut-il pour intervenir en cas d'urgence ? / Quels types de canalisations pouvez-vous déboucher à Bruxelles ?

---

## 8. Forces / faiblesses / ce qu'on doit faire mieux sur helpdrain.be

**Forces de maesdebouchage.be**
- Volume : 121 URL, une page par service ET par commune/ville, blog actif (28 articles, dernières publications mai 2026), pages régulièrement mises à jour (dateModified juin-juillet 2026).
- Signal avis fort : widget Trustindex avec 113 avis Google réels et récents (avril-mai 2026) sur toutes les pages, lien direct « Écrire un avis », fiche GBP keyword-stuffée bien classée.
- Structure on-page propre : H1 = mot-clé exact, title/meta optimisés avec « 24h/24 », « Devis gratuit », « Prix », FAQ sur chaque page, slugs courts.
- Un article avec vrai tableau de prix (/debouchage-bruxelles/) qui capte probablement l'intention « prix débouchage bruxelles ».
- CTA téléphone omniprésent + WhatsApp flottant + Google Ads (Fraud Blocker).

**Faiblesses**
- Contenu IA/spun visible (artefacts « Humanizer », coquilles, phrases cassées, témoignages copiés, « HBA Debouchage », TVA française). Mot-clé martelé dans chaque phrase.
- Prix incohérents (4 grilles contradictoires, « pas cher » vs plancher 150 €), inspection caméra 250 € vs 120-180 €.
- NAP incohérent (Dilbeek « 1700 Bruxelles », schema postalCode 1000), deux numéros de téléphone, société créée en 2023 vs « 24 ans d'expériences ».
- Schema Product + AggregateRating factice (150 avis), pas de FAQPage, LocalBusiness keyword-stuffé sans horaires.
- Zéro maillage contextuel dans le corps des pages ; pas de pages sterput / chambre de visite / avaloir / cave inondée / clapet / syndic / horeca / tarifs dédiée.
- Performance : Elementor + 30 JS + 32 CSS + 3 polices + JPG non lazy, images hotlinkées depuis la démo du thème.
- Aucune photo réelle (stock), aucun nom de technicien, aucune preuve terrain, pas de NL.

**Ce que helpdrain.be doit faire mieux (10 points)**
1. **Page /tarifs-debouchage-bruxelles/ unique et honnête** : tableau TVAC (6 % si logement > 10 ans, sinon 21 %), ce qui est inclus (déplacement, 1ère heure, furet/hydrocureur), supplément nuit/WE explicite, fourchettes réalistes calibrées face à « WC à partir de 150 € / canalisation 250 € / caméra 250 € » du concurrent. Reprendre ces mêmes prix « à partir de » dans les FAQ de chaque page service (ils ne le font que sur la homepage) + schema `Offer`/`priceRange` cohérent.
2. **NAP unique** (1 numéro, 1 adresse réelle Bruxelles, code postal juste) partout : header, footer, schema LocalBusiness (sous-type `Plumber`), GBP, `openingHoursSpecification` 24/7, `sameAs` complets, `areaServed` = les 19 communes.
3. **Schema FAQPage réel sur chaque page** + `Service` par page + `BreadcrumbList` visible ; **aucun** AggregateRating auto-déclaré sans avis réels affichés (éviter leur schéma Product frauduleux).
4. **Contenu écrit par un humain du métier**, sans répétition du mot-clé, en français de Belgique (sterput, chambre de visite, avaloir, citerne, boiler, syndic, copropriété, Vivaqua/Hydria pour le raccordement égout, TVA 6 %), avec des cas concrets bruxellois (maisons de maître 1900 en fonte/grès, colonnes d'immeuble, caves en zone inondable, égouts unitaires). Relire pour zéro coquille : c'est leur talon d'Achille le plus visible.
5. **Maillage contextuel dans le corps** : chaque page service lie vers 3-5 pages sœurs (WC → colonne immeuble → inspection caméra → tarifs), hub /services, et un bloc « communes desservies » avec liens (pas juste une liste texte).
6. **Pages qu'ils n'ont pas** : sterput, chambre de visite, avaloir, pompage cave inondée, clapet anti-retour, raccordement égout public, chemisage (ils n'ont qu'un article), entretien canalisations/contrats, syndic, horeca, citerne eau de pluie — helpdrain les a toutes prévues : les traiter en profondeur (800-1 200 mots utiles, pas 900 mots de remplissage).
7. **Preuves réelles** : photos de chantier/camion/caméra, prénoms des techniciens, avant/après caméra, numéro BCE + assurance RC + agrément (vidange : agrément Bruxelles Environnement collecteur de déchets) affichés — le concurrent ne montre que du stock.
8. **Avis Google** : viser ≥ 116 avis à terme ; en attendant, afficher les avis réels via l'API Places ou capture avec lien « Écrire un avis », et les afficher **près du CTA** plutôt qu'en bas de page.
9. **Performance** : HTML statique/léger (< 60 Ko), WebP/AVIF avec `loading="lazy"` + `fetchpriority="high"` sur le hero, 1 police système ou 1 seule Google Font, pas de jQuery, LCP < 2 s mobile — gain facile face à un Elementor à 170 requêtes.
10. **Conversion urgence** : bloc « appel + WhatsApp + formulaire 3 champs (commune, problème, téléphone) » dans le hero de chaque page, délai d'arrivée réaliste et engageant (« 30-60 min en RBC »), mention « sans supplément le soir » seulement si vrai, et une FAQ orientée décision (« combien ça coûte », « faut-il être présent », « que faire en attendant »).
