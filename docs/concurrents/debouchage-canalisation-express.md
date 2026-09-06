# Analyse concurrent : debouchage-canalisation.express

> Positionnement observé : #2 organique Google sur « débouchage bruxelles » avec `/service-debouchage-bruxelles`.
> Date de l'analyse : 2026-09-06. Méthode : récupération par `curl` (UA navigateur) de 17 URLs + sitemap.xml + robots.txt, parsing HTML (BeautifulSoup). Toutes les pages ont répondu HTTP 200.
> Pages récupérées : `/`, `/service-debouchage-bruxelles`, `/debouchage-wc-bruxelles`, `/service-debouchage-canalisation`, `/debouchage-egouts-bruxelles`, `/tarif-service-debouchage-bruxelles`, `/service-haute-pression`, `/inspection-camera-bruxelles`, `/tarif-inspection-camera-bruxelles`, `/sos-debouchage-bruxelles`, `/service-debouchage-uccle`, `/tarif-debouchage-uccle`, `/service-debouchage-evier-bruxelles`, `/faq-debouchage-bruxelles`, `/faq-prix-debouchage`, `/services`, `/contact-devis`.

---

## 1. Fiche

| Élément | Constat |
|---|---|
| Domaine | `www.debouchage-canalisation.express` (TLD `.express`, redirection non-www → www OK, HTTPS + HSTS preload) |
| Nb de pages (sitemap) | **208 URLs** dans `/sitemap.xml`. Lastmod : 147 en 2026, 25 en 2024, 26 en 2022, 4 en 2021 (site actif, mises à jour massives récentes). 5 URLs avec accents non encodés (`/service-débouchage-liège`, `/inspection-caméra-wavre`…). Doublons évidents : `/debouchage-uccle` + `/service-debouchage-uccle`, `/debouchage-liege` + `/service-debouchage-liege`, `/debouchage-vise` + `/service-debouchage-vise`, etc. |
| Répartition sitemap | 34 URLs « Liège », 21 URLs « Bruxelles », 27 pages « chemisage » (villes), 25 pages « inspection caméra » (villes), 17 pages « tarif/prix », 14 pages « faq-… ». Ville d'origine = **Liège** ; Bruxelles est une extension. |
| CMS / stack | **Duda** (website builder SaaS) : assets sur `static.cdn-website.com` / `irp.cdn-website.com`, classes `dmRoot`, `dmform-*`, `dmRespDesignRow`, mention « Share by: » en pied de page, auteur d'articles « websitebuilder », en-tête HTTP `d-cache`, `d-geo: EU`, serveur `nginx`. Pas de WordPress, pas de page builder tiers. Runtime `d-js-one-runtime-unified-desktop.min.js` + jQuery 3.7.0 + jquery-migrate. |
| Hébergement | CDN Duda (Cloudfront/Fastly derrière `cdn-website.com`), réponse HTML en ~0,5 à 0,7 s. |
| Téléphone | `0475.289.981` (156 occurrences, `tel:0475.289.981`) ; variante incohérente `0475.28.99.81` dans le footer (34 occ.) ; **second numéro `0479.247.500`** sur la page inspection caméra Bruxelles (« APPELEZ MAINTENANT LE 0479.247.500 ! ») |
| NAP | Nom affiché : « DÉBOUCHAGE CANALISATION » (header), « SOS DÉBOUCHAGE CANALISATION EXPRESS » (footer), « Débouchage Canalisation Express » (FAQ), et même « Débouchage Expert Services » (page FAQ prix, erreur de template). Adresse : **27, Quai de la Boverie, 4000 Liège** (page contact). Pour Bruxelles : « Adresse : Bruxelles, Belgique » uniquement (pas d'adresse physique). E-mail : `debouchage.canalisation.liege@gmail.com`. Footer : « Tous droits réservés \| Nom de l'entreprise » (placeholder Duda non rempli). Pas de n° TVA/BCE visible. |
| Horaires | « Lun - Dim / Ouvert 24 heures sur 24 » |
| Langues | FR uniquement (`<html lang="fr">`), aucun hreflang, aucun NL malgré les 19 communes (les noms NL des communes sont cités entre parenthèses dans la FAQ). |
| Réseaux sociaux | Liens footer vers `facebook.com/`, `instagram.com/`, `linkedin.com/` **sans profil** (liens racine vides). |
| Ancienneté revendiquée | « Service débouchage depuis 1962 » (footer) vs « Plus de 10 ans d'expérience » (FAQ Bruxelles) — contradictoire. |

---

## 2. Homepage + page Bruxelles

### 2.1 Homepage `/`

- **Title** : `SERVICE DÉBOUCHAGE LIÈGE | 0475.289.981`
- **Meta description** : `SERVICE DÉBOUCHAGE CANALISATION LIÈGE. VOTRE DÉBOUCHEUR PROFESSIONNEL POUR UN ÉGOUT BOUCHÉ ? INSPECTION CAMÉRA LIÈGE. DÉBOUCHAGE HAUTE PRESSION AU JUSTE TARIF !`
- **H1 exact** : `🧼 Débouchage Liège – Service Rapide 7j/7` (un seul H1, mais placé APRÈS deux H2 « SERVICE DÉPANNAGE RAPIDE LIÈGE » et « DEMANDER UN DEVIS »)
- **H2 dans l'ordre** (H2 vides exclus — il y a une dizaine de `<h2></h2>` vides dans le code) :
  1. SERVICE DÉPANNAGE RAPIDE LIÈGE
  2. DEMANDER UN DEVIS
  3. Vous recherchez un service de débouchage à Liège rapide et efficace ?
  4. 🚨 Urgence Débouchage Liège – Intervention Rapide 7j/7
  5. 🔧 Débouchage Canalisation Liège (tous types de bouchons)
  6. 💦 Débouchage Haute Pression à Liège
  7. 🎥 Inspection Caméra Canalisation Liège
  8. 💧 Pourquoi vos canalisations se bouchent à Liège ?
  9. 📍 Débouchage Liège et alentours
  10. ⭐ Pourquoi nous choisir pour un débouchage à Liège ?
  11. 📞 Débouchage Liège – Contact
  12. Tarifs de Débouchage et Interventions de Canalisation à Liège
  13. 🚰 Tarif Débouchage Canalisation à Liège À partir de 115,00 € HTVA
  14. 💧 Tarif Débouchage Égouts à Liège À partir de 115,00 € HTVA
  15. 🛁 Tarif Débouchage Évier & Lavabo à Liège À partir de 95,00 € HTVA
  16. 🚽 Tarif Débouchage Toilette à Liège À partir de 115,00 € HTVA
  17. 💡 Tarif Débouchage WC broyeur à Liège À partir de 115,00 € HTVA
  18. 🎥 Tarif Inspection Caméra Canalisation à Liège À partir de 150,00 € HTVA
  19. 💦 Tarif Débouchage Haute Pression à Liège À partir de 150,00 € HTVA
  20. 🏠 Tarif Débouchage Gouttières à Liège Sur devis
  21. 🚨 Interventions en urgence à Liège
  22. ⭐ Pourquoi choisir nos services à Liège ?
  23. 📞 Contact – Débouchage Liège
  24. Avis Clients satisfaits
  25. SERVICE PLOMBERIE LIÈGE ?
  26. 🔧 Service de Plomberie et Débouchage de Canalisation à Liège
  27. ❓ Foire Aux Questions – Débouchage canalisation à Liège
  28. SOS DÉBOUCHAGE CANALISATION EXPRESS (footer)
- **Nb de mots** : ~3 300 mots (dont ~600 mots de méga-menu : le nav contient ~110 liens). Contenu utile ≈ 2 700 mots.
- **Structure** : hero (bandeau MAJUSCULES + tel) → 4 blocs « DEVIS GRATUIT / PRIX COMPÉTITIFS / SERVICE 24H/24 / GARANTIE INTERVENTION* » → formulaire devis → long bloc rédactionnel avec emojis (urgence, canalisation, haute pression, caméra, causes, zones, pourquoi nous, contact) → grille tarifs Liège (8 cartes) → grille 12 vignettes services (images + H3) → widget avis (2) → blog (3 articles datés 31 juillet 2021) → FAQ 7 questions → footer méga-liste.
- **CTA** : « APPELEZ MAINTENANT LE 0475.289.981 EN URGENCE ! » (hero), « DEMANDER UN DEVIS » (formulaire), « Appelez-nous au 0475.28.99.81 » (footer). **3 liens `tel:`** seulement (header, hero, footer). Pas de bouton sticky mobile détecté dans le HTML, pas de WhatsApp.
- **Trust signals** : « DEVIS GRATUIT », « PRIX COMPÉTITIFS / LES MOINS CHERS DU MARCHÉ », « SERVICE 24H/24 », « GARANTIE INTERVENTION* » (astérisque : « A CONDITION D'UTILISER NOS PIÈCES DE QUALITÉ »), « Service débouchage depuis 1962 », « UN DÉBOUCHEUR PROFESSIONNEL CHEZ VOUS DANS 30 MINUTES ! ». Avis : 2 témoignages génériques (« Le plomber a résolu des problèmes de plomberie… », signés « Sophie Willems ») — ce sont les **textes d'exemple du widget avis Duda**, pas de vrais avis Google ; aucune note, aucun nombre d'avis, aucun lien vers Google.
- **Prix** : oui, largement (voir §4).
- **FAQ** : oui, 7 questions (H3 avec 🔹), sans schema FAQPage.

### 2.2 Page Bruxelles `/service-debouchage-bruxelles` (la page qui ranke)

- **Title** : `DÉBOUCHAGE BRUXELLES URGENT 24h/24 | 0475.289.981`
- **Meta description** : `Débouchage Bruxelles 24h/24 – Intervention urgente et rapide pour WC, éviers, canalisations, égouts bouchés. Service pas cher, efficace et professionnel.`
- **H1 exact** : `Service Débouchage Bruxelles`
- **H2 dans l'ordre** :
  1. SERVICES DÉPANNAGE RAPIDE
  2. DEMANDER UN DEVIS
  3. Débouchage Bruxelles – Votre Expert en Débouchage Rapide et Efficace
  4. Besoin d'un débouchage à Bruxelles en urgence ?
  5. Des Solutions de Débouchage Professionnelles à Bruxelles ?
  6. Pourquoi choisir notre entreprise de débouchage à Bruxelles ?
  7. Débouchage pour particuliers, syndics et entreprises ?
  8. TARIF DÉBOUCHAGE BRUXELLES ?
  9. Clients satisfaits
  10. SERVICE PLOMBIER BRUXELLES ?
  11. FAQ – Débouchage Bruxelles
  12. SOS DÉBOUCHAGE CANALISATION EXPRESS
  (H3 : DÉBOUCHAGE SIPHON BRUXELLES, DÉBOUCHAGE ÉVIER BRUXELLES, TARIF CHEMISAGE CANALISATION BRUXELLES, INSPECTION CAMÉRA CANALISATION BRUXELLES, DÉTECTION CANALISATION BRUXELLES, TARIF DÉBOUCHAGE BRUXELLES + 7 questions FAQ)
- **Nb de mots** : ~1 900 (≈ 1 300 hors nav/footer).
- **Structure** : hero MAJUSCULES « APPELEZ MAINTEANT LE 0475.289.981 EN URGENCE ! DÉBOUCHAGE BRUXELLES 24h/24… » → 4 blocs promesse (identiques à la home, copiés-collés) → formulaire devis (select : DÉBOUCHAGE HAUTE PRESSION BRUXELLES / INSPECTION CAMÉRA BRUXELLES / CHEMISAGE CANALISATION BRUXELLES / DEVIS GRATUIT BRUXELLES) → texte rédactionnel ~350 mots (intro, urgence, méthodes, pourquoi nous, cibles) → liste tarifs (9 lignes) → 6 vignettes services (H3 + texte MAJUSCULES + image) → widget avis (2, « Jon » / « Adam », signés MIKE T. / SHANNON W. = **placeholders Duda**) → blog 3 articles 2021 → FAQ 7 Q → bloc « SERVICE DÉBOUCHAGE SUR LES 19 COMMUNES DE BRUXELLES » (liens vers Evere, Woluwe-Saint-Pierre, Uccle, Ganshoren, Jette, Ville de Bruxelles, Wemmel ; les autres communes sont du texte non lié, avec faute « Wtermael Boitsfort ») → footer.
- **CTA** : 3 liens `tel:`, 1 formulaire, 1 mention texte « Contactez nous dès maintenant pour un débouchage rapide à Bruxelles : 0475.289.981 ». Pas de WhatsApp, pas de bouton sticky.
- **Trust** : « Techniciens certifiés et expérimentés », « Devis gratuit et sans engagement », « Nous vous garantissons une intervention dans l'heure », « garantie de résultat. Si le problème persiste, une seconde intervention est programmée sans frais supplémentaires selon les cas ». Aucun avis réel, aucune photo d'équipe/camion, aucune mention TVA.
- **Prix** : liste « A PARTIR DE 95.00 € HTVA » pour tout (évier, lavabo, toilette, WC, égout, canalisation), 150 € caméra, 250 € chemisage, et dans la FAQ « Les tarifs commencent à partir de 89€ TTC ».
- **FAQ** : 7 questions (Quels services ? / En combien de temps ? / Quel prix ? / Signes ? / Solutions écologiques ? / Toutes les communes ? / Garanti ?) — en H3, pas de JSON-LD FAQPage.

---

## 3. Pages service analysées

Note générale : **toutes** les pages partagent le même squelette Duda : nav méga-menu (~110 liens), 4 blocs promesse identiques, formulaire, grille tarifs, 6 vignettes, widget avis placeholder, 3 articles blog 2021, footer 35 liens. Le contenu unique par page est souvent limité à 1 à 3 phrases. Le nombre de mots indiqué est le total (nav + footer inclus, ≈ 600 mots de boilerplate) ; entre parenthèses l'estimation hors boilerplate.

### `/debouchage-wc-bruxelles`
- Title : `SERVICE DÉBOUCHAGE WC BRUXELLES | 0475.289.981`
- Meta : `SERVICE DÉBOUCHAGE WC BRUXELLES RAPIDE DANS L'HEURE ! WC BOUCHÉ ? VOTRE WC SUSPENDU NE S'ÉVACUE PAS ? INSPECTION CAMÉRA WC A PARTIR DE 95.00 € HTVA. DÉBOUCHAGE HAUTE PRESSION SUR LA RÉGION DE BRUXELLES. PLOMBIER DÉBOUCHEUR ÉVIER, TOILETTE…` (tronquée, > 200 caractères)
- H1 : `Service Débouchage WC Bruxelles`
- H2 : SERVICES DÉPANNAGE RAPIDE / DEMANDER UN DEVIS / SERVICE DÉBOUCHAGE BRUXELLES / Clients satisfaits / SERVICE PLOMBERIE ? / SOS DÉBOUCHAGE CANALISATION EXPRESS
- Mots : ~1 210 (≈ 100 mots uniques). Le seul texte spécifique : « Votre déboucheurs Bruxellois propose un service débouchage rapide pour tous types de canalisations, siphons, égouts, évier, toilette, WC au juste prix ! » + « Le déboucheur Bruxelleois, s'engage à vous fournir un service débouchage WC pas cher et professionnel au juste prix avec l'inspection caméra pour nous garantir un travail fait dans les règles ! »
- Prix : évier/évier cuisine/lavabo/toilette/WC/égout/canalisation « A PARTIR DE 95.00 € HTVA », caméra 150 € HTVA.
- Maillage : 83 liens internes uniques, mais quasi tous issus du nav/footer ; dans le corps : vignettes vers `/service-debouchage-evier-bruxelles`, `/reparation-canalisation-bruxelles`, `/inspection-camera-bruxelles`, `/service-localisation-canalisation`, « Tous les services ».
- FAQ : non.
- Images : 13 (`<img data-src>` sans `loading=lazy`, sans srcset) ; alts : « Débouchage siphon Bruxelles », « Débouchage évier Bruxelles », « Chemisage canalisation Bruxelles », « Inspection caméra Bruxelles », « Détection canalisation Bruxelles », + 3 alts vides + alts « Liège » résiduels (« Débouchage Liège », « TARIF DÉBOUCHAGE LIÈGE », « Inspection caméra canalisation Liège »). Aucune image spécifique WC.

### `/debouchage-egouts-bruxelles`
- Title : `SERVICE DÉBOUCHAGE ÉGOUTS BRUXELLES | 0475.289.981`
- Meta : `SERVICE DÉBOUCHAGE ÉGOUTS BRUXELLES RAPIDE DANS L'HEURE ! ÉGOUTS BOUCHÉS ? VOTRE CHAMBRE DE VISITE NE S'ÉVACUE PAS ? INSPECTION CAMÉRA ÉGOUT A PARTIR DE 95.00 € HTVA. DÉBOUCHAGE HAUTE PRESSION SUR LA RÉGION DE BRUXELLES. PLOMBIER DÉBOUCH…`
- H1 : `Service Débouchage Égouts Bruxelles`
- H2 : identiques à la page WC (SERVICES DÉPANNAGE RAPIDE / DEMANDER UN DEVIS / SERVICE DÉBOUCHAGE BRUXELLES / Clients satisfaits / SERVICE PLOMBERIE BRUXELLES ? / SOS…)
- Mots : ~1 210 — **clone quasi exact de la page WC**, seul le mot « égouts » change dans la phrase d'accroche.
- Prix : mêmes 8 lignes à 95 € HTVA + caméra 150 €.
- Maillage / images / FAQ : identiques à la page WC (mêmes 13 images, mêmes alts, pas de FAQ).

### `/service-debouchage-canalisation`
- Title : `SERVICE DÉBOUCHAGE CANALISATION | 0475.289.981`
- Meta : `SERVICE DÉBOUCHAGE CANALISATION ? DÉBOUCHEUR ? DÉBOUCHAGE ? SIPHON BOUCHÉ ? LE SIPHON DE VOTRE TOILETTE, WC,  ÉVIER, DOUCHE, BAIGNOIRE OU DE CAVE NE S'ÉVACUE PLUS DU TOUT ALORS FAITES APPEL A NOS SERVICE DE DÉBOUCHAGE HAUTE PRESSION POUR UN N…`
- H1 : `SERVICE DÉBOUCHAGE CANALISATION` ; H2 : aucun hors footer.
- Mots : ~580 (< 100 uniques). Page « hub » de vignettes (diagnostic égouttage, caméra, chemisage, détection, odeurs, tarif). Pas de formulaire, pas de FAQ. 8 images (alt « Détection & Locaalisation canalisation » avec faute).
- Prix : 1 mention (tarif vignette).

### `/tarif-service-debouchage-bruxelles`
- Title : `TARIF DÉBOCHAGE BRUXELLES – PLOMBIER URGENT 24h/24` (faute « DÉBOCHAGE » dans le title)
- Meta : `Débouchage à Bruxelles 24/7 pas cher. Tarifs clairs pour WC, éviers, canalisations et égouts. Intervention rapide, devis gratuit.`
- H1 : `Tarif Débouchage Bruxelles – Service rapide et pas chère 24/7` (faute « pas chère »)
- H2 : Nos tarifs de débouchage à Bruxelles / Débouchage urgent 24/7 à Bruxelles ? / Pourquoi choisir notre service de débouchage à Bruxelles ? / Zones d'intervention à Bruxelles / Demandez votre devis gratuit pour un débouchage à Bruxelles / Conclusion / TARIF DÉBOUCHAGE INTERVENTION CANALISATION URGENTE ? / Obtenir un devis gratuit / Profitez de notre savoir-faire à Bruxelles dans le domaine du Débouchage Haute Pression ? / FAQ Débouchage Bruxelles / Service Débouchage immédiat ? / SOS…
- Mots : ~1 300 (≈ 700 uniques).
- Prix : liste rédactionnelle (WC 115, évier 115, caméra 150, HP « sur devis », chemisage 250) PUIS grille MAJUSCULES contradictoire (évier & lavabo 95, WC 115, HP 150, « TARIF DÉBOUCHEUR BRUXELLES A PARTIR DE 150.00 € HTVA »), PUIS FAQ « Le prix varie de 125.00 € à 250.00 € pour un débouchage canalisation haute pression sous réserve d'une visite chantier ».
- Maillage : 80 liens uniques ; corps : « Réserver un service → » vers `/contact-devis`, vignettes chemisage/service Bruxelles.
- FAQ : 5 questions (prix, urgent 24/7, types de canalisations, caméra, devis gratuit) + note « Concernant les devis pour des projets importants celui-ci sera facturé et à déduire lors de la facturation des travaux. »
- Images : 5 (alts « Tarif débouchage Bruxelles », « Seervice débouchage Bruxelles » [sic], « Chemisage canalisation Bruxelles », « TARIF DÉBOUCHAGE LIÈGE », 1 vide).

### `/service-haute-pression` (Liège — pas de page hydrocurage Bruxelles dédiée)
- Title : `DÉBOUCHAGE LIÈGE 24/24 HAUTE PRESSION - ÉGOUTS WC ÉVIER`
- Meta : `DÉBOUCHAGE HAUTE PRESSION LIÈGE URGENT 24H/24. CURAGE CANALISATIONS, TOILETTES, ÉGOUTS, ÉVIERS. INSPECTION CAMÉRA RÉPARATION CHEMISAGE GRÈS. DEVIS EN LIGNE 7/7.`
- H1 : `Service Haute Pression Liège`
- H2 : SERVICES DÉPANNAGE RAPIDE / DEMANDER UN DEVIS / SERVICE DÉBOUCHAGE HAUTE PRESSION LIÈGE / TARIF DÉBOUCHAGE LIÈGE ? / Clients satisfaits / DÉBOUCHEUR HAUTE PRESSION CANALISATION LIÈGE ? / FAQ – Débouchage Haute Pression et Canalisations à Liège / SOS…
- Mots : ~2 500 (≈ 1 900 uniques, surtout grâce à une **FAQ de 26 questions**).
- Prix : 6 mentions (grille Liège).
- FAQ : 26 questions (liste complète en §7).
- Images : 15, alts Liège.

### `/inspection-camera-bruxelles`
- Title : `SERVICE INSPECTION CAMÉRA CANALISATION BRUXELLES | 0475.289.981`
- Meta : `SERVICE INSPECTION CAMÉRA CANALISATION BRUXELLES VOTRE DÉBOUCHEUR BRUXELLEOIS QUI DÉBOUCHE TOUT RAPIDEMENT. DÉPANNAGE PLOMBERIE ÉVIER BOUCHÉ, CHASSE D'EAU, ROBINET, RÉPARATION FUITE D'EAU, RECHERCHE DE FUITES, DÉTECTION CANALISATION. DÉBOUC…`
- H1 : `Service Inspection Caméra Bruxelles`
- H2 : SERVICE DÉBOUCHAGE BRUXELLES ! / DEMANDER UN DEVIS / SERVICE INSPECTION CAMÉRA BRUXELLES ? / Avis Clients satisfaits / SERVICE PLOMBERIE BRUXELLES ? / SOS…
- Mots : ~1 580 (≈ 900 uniques, presque tout en MAJUSCULES).
- Prix : canalisation 115, égouts 115 (et plus bas « SERVICE DÉBOUCHAGE ÉGOUTS BRUXELLES : 125 € HTVA »), évier & lavabo 95, toilette 115, WC 115, caméra 150, chemisage « SUR DEVIS ».
- Maillage : 95 liens uniques ; 12 vignettes (caméra, chemisage, détection, évier, toilette, canalisation, égout, douche, baignoire…).
- FAQ : non (mais une page séparée `/faq-inspection-camera-canalisation-bruxelles` existe).
- Images : 18 (alts « INSPECTION CAMÉRA BRUXELLES », « Débouchage égout Bruxelles », « Débouchage douche Bruxelles », etc. + résidus Liège).
- Contient le second numéro `0479.247.500`.

### `/tarif-inspection-camera-bruxelles`
- Title : `TARIF INSPECTION CAMÉRA BRUXELLES | 0475.289.981`
- Meta : `TARIF INSPECTION CAMÉRA CANALISATION BRUXELLES. DIAGNOSTIC RÉPARATION CANALISATION EN GRÈS PAR CHEMISAGE. DÉBOUCHAGE HAUTE PRESSION AVEC CAMÉRA. DEVIS GRATUIT`
- H1 : `Tarif Inspection Caméra Bruxelles`
- H2 : CHEMISAGE CANALISATION BRUXELLES ! / DEMANDER UN DEVIS / SERVICE INSPECTION CAMÉRA BRUXELLES ? / Avis Clients satisfaits / SERVICE PLOMBIER BRUXELLES / FAQ : Tarifs d'Inspection Caméra à Bruxelles / SOS…
- Mots : ~2 760 (la plus longue des pages Bruxelles).
- Prix : grille différente encore (canalisation 150, égouts 150, évier & lavabo 125, toilette 125, WC 125, caméra 150, chemisage 250) + FAQ « varie entre 150 et 400 euros », « Inspection simple : 100 à 150 € », « 10 à 20 mètres : 150 à 250 € », « au-delà de 30 mètres : 250 à 400 € », « Inspection caméra canalisation avec rapport et photos à Bruxelles : à partir de 395.00 € ».
- FAQ : 6+ questions numérotées (format « 1. Qu'est-ce qu'une inspection caméra… », puces « · » Word) — texte générique.
- Images : 18.

### `/sos-debouchage-bruxelles`
- Title : `SERVICE SOS DÉBOUCHAGE BRUXELLES 24/24 | 0475.289.981`
- Meta : copie de la meta « égouts » (`SERVICE SOS DÉBOUCHAGE BRUXELLES RAPIDE DANS L'HEURE ! ÉGOUTS BOUCHÉS ? VOTRE CHAMBRE DE VISITE NE S'ÉVACUE PAS ? …`)
- H1 : `Service SOS Débouchage Bruxelles`
- H2 : SERVICES DÉPANNAGE RAPIDE / DEMANDER UN DEVIS / SERVICE DÉBOUCHAGE BRUXELLES / SOS Débouchage Bruxelles – Intervention Rapide 24h/24 et 7j/7 / Débouchage rapide et efficace à Bruxelles / Pourquoi faire appel à notre service SOS Débouchage ? / Zones d'intervention à Bruxelles / Nos services de débouchage en urgence / Entretien préventif / Besoin d'un débouchage urgent à Bruxelles ? Contactez-nous maintenant ! / TARIF DÉBOUCHAGE BRUXELLES ? / Clients satisfaits / SERVICE PLOMBIER BRUXELLES ? / SOS…
- Mots : ~1 440 (≈ 350 mots uniques, texte IA visible : « Téléphone : [0475.289.981] », « Email : [via le formulaire réponse immédiate] » — crochets de template laissés).
- Prix : grille 95 € HTVA.
- FAQ : non. Images : 13.

### `/service-debouchage-uccle` (page commune)
- Title : `SERVICE DÉBOUCHAGE UCCLE | 0475.289.981`
- Meta : `SERVICE DÉBOUCHAGE UCCLE VOTRE DÉBOUCHEUR POUR VOS CANALISATIONS BOUCHÉES. INSPECTION CAMÉRA POUR GARANTIR LES ÉCOULEMENTS DES EAUX USÉES DES ÉGOUTS ET WC.`
- H1 : `Service Débouchage Uccle`
- H2 : SERVICES DÉPANNAGE RAPIDE / DEMANDER UN DEVIS / SERVICE DÉBOUCHAGE UCCLE / Clients satisfaits / SERVICE PLOMBIER UCCLE ? / SOS…
- Mots : ~1 230 (≈ 60 mots uniques : « le service déboucheur Ucclois propose un service débouchage haute pression des évacuations des eaux usées rapide en urgence… »). Aucun contenu local (quartiers, rues, spécificités). Alts des images = find/replace « Uccle » (« Débouchage siphon Uccle », « Chemisage canalisation Uccle »).
- Prix : 4 mentions (grille). FAQ : non. Images : 13.
- Page sœur `/tarif-debouchage-uccle` : H1 `TARIF DÉBOUCHAGE UCCLE`, ~630 mots, meta « TRANSPARENCE TOTALE AVEC LES PRIX ! VOIR SUR NOTRE SITE WEB… ».

### `/service-debouchage-evier-bruxelles`
- Title : `DÉBOUCHAGE ÉVIER BRUXELLES | 0475.289.981`
- Meta : `DÉBOUCHAGE ÉVIER &amp; LAVABO, ÉVIER DE CUISINE A BRUXELLES EN URGENCE AU  JUSTE PRIX !  DÉBOUCHAGE HAUTE PRESSION AVEC INSPECTION CAMÉRA ÉVIER.  PLOMBIER BRUXELLES` (entité `&amp;` mal encodée, doubles espaces)
- H1 : `Service Débouchage évier Bruxelles`
- H2 : … / Le débouchage d'évier à Bruxelles : Une solution efficace pour des canalisations obstruées / Pourquoi les éviers se bouchent-ils ? / Comment déboucher un évier à Bruxelles ? / Pourquoi faire appel à un professionnel du débouchage à Bruxelles ? / Choisir un bon service de débouchage à Bruxelles / Conclusion / TARIF DÉBOUCHAGE D'ÉVIERS BRUXELLES ? / …
- Mots : ~2 020 (≈ 900 mots d'article générique type IA : « À Bruxelles, comme dans toutes les grandes villes, les problèmes de plomberie peuvent rapidement se transformer en source de stress… »).
- Prix : 4 mentions (grille). FAQ : non. Images : 13.

### `/faq-debouchage-bruxelles`
- Title : `FAQ DÉBOUCHAGE BRUXELLES | 0475.289.981` ; H1 : `FAQ DÉBOUCHAGE  BRUXELLES` (double espace)
- Meta : `Trouvez toutes les réponses à vos questions sur le débouchage à Bruxelles : délais, prix, urgences, méthodes, zones couvertes et services 24h/24, 7j/7.` (réutilisée à l'identique sur `/faq-prix-debouchage`)
- 17 questions en H2 + un second article « Débouchage à Bruxelles – Intervention rapide 24h/24 – Dès 99€ HT ». ~1 880 mots. Liste complète des 19 communes avec noms NL entre parenthèses. Mentions « Intervention en moins de 30 minutes », « Tarifs clairs dès 99€ HT », « Plus de 10 ans d'expérience », « Téléphone : [0475.289.981] », « Email : [via notre formulaire sur notre site web] ». Section « Comment vous trouver sur Google ? » listant des mots-clés (« Débouchage canalisation Bruxelles », « Plombier urgence WC bouché Bruxelles »…) — keyword stuffing assumé.

### `/faq-prix-debouchage`
- Title : `FAQ PRIX & TARIF DÉBOUCHAGE | 0475.289.981` ; H1 : `Tarifs débouchage canalisation – Prix, interventions et conseils 2025`
- ~1 490 mots. Contenu IA brut non relu : un H2 littéral « **H2 : Comment sont calculés les prix d'un débouchage** », section « **Pourquoi choisir Débouchage Expert Services** » (mauvais nom d'entreprise), « Zone d'intervention — **À personnaliser selon votre localisation.** ». Grille de fourchettes (voir §4) contredisant les « à partir de 95 € » du reste du site.

### `/services`
- Title : `DÉPANNAGE PLOMBERIE & DÉBOUCHAGE LIÈGE | 0475.289.981` ; H1 : `Débouchage Canalisation à Liège – Service Rapide et Fiable 24h/24` (H1 placé après 3 H2).
- ~1 880 mots. Contient « 📞 Appelez dès maintenant : **[TON NUMÉRO]** » — placeholder du prompt IA laissé en production. FAQ 5 Q (« Nos interventions commencent à 95 € »). Zones : quartiers de Liège.

### `/contact-devis`
- Title : `DEVIS DÉBOUCHAGE CANALISATION GRATUIT LIÈGE | 0475.289.981` ; H1 : `Réserver un service de plomberie`.
- ~470 mots. Formulaire Duda natif (Nom, téléphone, e-mail, select « Type de service » 12 options, Message) ; adresse Liège ; e-mail Gmail. 4 liens `tel:`.

---

## 4. Prix relevés (tout ce qui est chiffré)

Le site affiche **des prix contradictoires selon la page** pour le même service à Bruxelles. Tableau consolidé (HTVA sauf mention) :

| Service | Page Bruxelles `/service-debouchage-bruxelles` | Pages WC / Égouts / SOS / Uccle | `/tarif-service-debouchage-bruxelles` | `/inspection-camera-bruxelles` | `/tarif-inspection-camera-bruxelles` | Homepage (Liège) | `/faq-prix-debouchage` (fourchettes) |
|---|---|---|---|---|---|---|---|
| Débouchage évier | à partir de 95 € | 95 € | 95 € (grille) / 115 € (texte) | 95 € | 125 € | 95 € | 120–160 € |
| Débouchage lavabo | 95 € | 95 € | 95 € | 95 € | 125 € | 95 € | 120–160 € |
| Débouchage évier de cuisine | — | 95 € | — | — | — | — | siphon cuisine 120–160 € |
| Débouchage toilette | 95 € | 95 € | 115 € | 115 € | 125 € | 115 € | 120–180 € |
| Débouchage WC | 95 € | 95 € | 115 € | 115 € | 125 € | 115 € | 120–180 € |
| WC broyeur | — | — | — | — | — | 115 € | — |
| Débouchage douche / baignoire | — | — | — | — | — | 95 € (douche) | 120–160 € |
| Débouchage canalisation | 95 € | 95 € | 115 € | 115 € | 150 € | 115 € / 125 € | principale 150–250 € |
| Débouchage égout / chambre de visite | 95 € | 95 € | 115 € | 115 € et « 125 € HTVA » | 150 € | 115 € / 125 € | — |
| Débouchage haute pression / hydrocurage | — | — | 150 € (grille) / « sur devis » (texte) | — | — | 150 € | 250–400 € ; curage complet 250–450 € |
| Furet électrique | — | — | — | — | — | — | 150–220 € |
| « Tarif déboucheur Bruxelles » | — | — | 150 € | — | — | — | — |
| Inspection caméra | 150 € | 150 € | 150 € | 150 € | 150 € ; simple 100–150 € ; 10–20 m 150–250 € ; >30 m 250–400 € ; **avec rapport + photos : à partir de 395 €** | 150 € | 100–200 € |
| Localisation de fuite | — | — | — | — | — | — | 150–300 € |
| Chemisage canalisation | à partir de 250 € | — | 250 € sur devis | sur devis | 250 € sur devis | 250 € HTVA **/ par mètre** | — |
| Gouttières | — | — | — | — | — | sur devis | — |
| Prix plancher « FAQ » | « à partir de 89€ TTC » (FAQ page Bruxelles) | — | « de 125.00 € à 250.00 € pour un débouchage canalisation haute pression » | — | — | « les tarifs débutent à 80€ TTC pour un débouchage simple » | « Un prix inférieur à 80 euros est presque toujours trompeur » ; « Un débouchage standard ne dépasse pas 180 euros » ; « entre 120 et 350 euros » |
| Majoration urgence | — | — | — | — | « Tarifs pouvant être majorés » | — | soir/dimanche/férié : **+30 % à +70 %** |
| `/faq-debouchage-bruxelles` | « Nos tarifs débutent à 99 € HT, tout compris (déplacement, main-d'œuvre, petit matériel) » | | | | | | |

Autres règles tarifaires énoncées : « DEVIS GRATUIT PAR TÉLÉPHONE … UN NOUVEAU DEVIS SERA ÉTABLI SUR PLACE AVANT LE TRAVAIL AFIN DE GARANTIR LES DEUX PARTIES » ; « Concernant les devis pour des projets importants celui-ci sera facturé et à déduire lors de la facturation des travaux » ; « Chaque intervention est annoncée avant le déplacement ».

**À retenir pour notre page tarifs** : leur ancre psychologique publique est « à partir de 95 € HTVA » (≈ 115 € TTC) pour tout débouchage simple, 150 € HTVA pour caméra et hydrocurage, 250 €/m pour le chemisage. Mais ils s'auto-contredisent (80 € TTC, 89 € TTC, 99 € HT, 95, 115, 125, 150 HTVA selon la page) — une grille unique, cohérente, TVAC, avec ce qui est inclus (déplacement, 1re heure, caméra de contrôle) sera immédiatement plus crédible.

---

## 5. Technique

| Point | Constat |
|---|---|
| JSON-LD | **Un seul bloc sur tout le site**, homepage uniquement : `{"@type":"WebSite","name":"DÉBOUCHAGE CANALISATION LIÈGE","url":"https://www.debouchage-canalisation.express/"}`. Aucun `LocalBusiness`/`Plumber`, aucun `Service`, aucun `FAQPage` (malgré 14 pages FAQ), aucun `BreadcrumbList`, aucun `AggregateRating`. Aucun microdata `itemtype`. |
| Canonical | Présent et auto-référent sur chaque page (`<link rel="canonical">`). Les doublons (`/debouchage-uccle` vs `/service-debouchage-uccle`) ont chacun leur propre canonical → duplication non gérée. |
| Hreflang | Aucun. `lang="fr"`. Pas de version NL. |
| Open Graph / Twitter | `og:type=website`, `og:url`, `og:title`, `og:description` (= title/meta), `twitter:card=summary`. **Pas d'`og:image`**. |
| Robots / sitemap | `robots.txt` : `User-agent: *` sans Disallow, `Sitemap:` déclaré, et directive `Content-Signal: search=yes, ai-input=yes, ai-train=yes` (Cloudflare). Pas de `noindex` relevé. Sitemap monolithique 208 URLs, priorité 1.0 partout, changefreq monthly. |
| Structure d'URL | Plate, tout à la racine, incohérente : `/debouchage-wc-bruxelles`, `/service-debouchage-evier-bruxelles`, `/tarif-service-debouchage-bruxelles`, `/tarif-debouchage-uccle`, `/faq-debouchage-bruxelles`, `/Blog` (majuscule), `/servicesd69c6473` (URL orpheline Duda liée depuis le menu), `/heating-and-cooling` (reste du template Duda « plombier »). 5 URLs avec accents. |
| Feeds | `<link rel="alternate">` vers `/feed/rss2` et `/feed/atom` (blog Duda). |
| Images | `<img data-src="…" onerror="handleImageLoadError(this)">` (lazy loading JS propriétaire Duda ; attribut `loading="lazy"` seulement sur la home). **Aucun `srcset`**, images servies en `-1920w` même pour des vignettes. Formats : majoritairement `.jpg` et `.png`, quelques `.WebP` ; 17 `background-image` CSS (hero non lazy). Noms de fichiers avec espaces encodés (`inspection+cam%C3%A9ra+sterput-1920w.WebP`). Alts présents mais 3 vides par page + alts « Liège » sur les pages Bruxelles. Pas d'`og:image`. |
| Scripts tiers | Aucun GTM, aucun GA4 (`G-…`), aucun pixel Meta, aucun Clarity/Hotjar, aucun call tracking, aucun chat, aucun WhatsApp. Seul reCAPTCHA (formulaire Duda). 23 `<script>` dont 3 externes (jQuery 3.7.0, jquery-migrate, runtime Duda). |
| Formulaire | Widget natif Duda (`dmform`, champs `dmform-0..4`, `dmformsendto`, `page_uuid`) : Nom / E-mail / téléphone / select services. Envoi par e-mail Duda. Options du select laissées par défaut sur certaines pages (« Option 1 / Option 2 / Option 3 » visibles dans le HTML). |
| Poids / requêtes | HTML : 194 Ko (page Bruxelles), 259 Ko (home), 126–226 Ko ailleurs — très lourd pour du texte (42 Ko de CSS inline en 13 `<style>`, méga-menu de 110 liens répété). Estimation par page : 3 JS + 6 CSS (dont **3 feuilles Google Fonts chargeant ~15 familles** : Amiko, Alegreya, Noto Serif, Nunito Sans, Vidaloka, Work Sans, Yeseva One…) + widget CSS + 14 `<img>` + ~10 fonds CSS + polices ≈ **45–60 requêtes**. TTFB ~0,5 s via CDN. |
| Sécurité / headers | HSTS preload, `X-Frame-Options: SAMEORIGIN`, CSP `frame-ancestors 'self'`, `nosniff`. Correct. |
| Mobile | Viewport OK ; le runtime Duda sert une version « desktop » (`d-js-one-runtime-unified-desktop`) avec `vary: user-agent` → rendu mobile distinct côté serveur. |
| Blog | `/Blog` avec 3 articles datés « 31 juillet 2021 », auteurs « websitebuilder » et « Plombier Liège ». |

---

## 6. Ton rédactionnel

**Vouvoiement** systématique (« Vous recherchez… », « Faites appel à… »). Mélange de deux registres : (a) des blocs historiques 100 % en **MAJUSCULES**, phrases longues sans ponctuation, fautes nombreuses ; (b) des blocs récents rédigés par IA (2025-2026), lisses, avec emojis dans les H2 et structure « intro / pourquoi / comment / conclusion ».

Phrases exactes citées :

1. « APPELEZ MAINTEANT LE 0475.289.981 EN URGENCE ! DÉBOUCHAGE BRUXELLES 24h/24 DES TOILETTES, WC, ÉVIERS, CANALISATIONS, ÉGOUTS & ÉVACUATIONS ET SIPHONS DES EAUX USÉES SANITAIRES. » (hero Bruxelles — faute « MAINTEANT »)
2. « DEVIS GRATUIT PAR TÉLÉPHONE UNE SÉRIE DE QUESTIONS VOUS SERA POSÉE POUR VOUS DONNER UNE APROXIMATIMATION DU PRIX DEMANDÉ POUR L'INTERVENTION. » (bloc répété sur ~15 pages — « APROXIMATIMATION »)
3. « LES MOINS CHERS DU MARCHÉ NOUS SOMMES ATTENTIFS A VOUS FOURNIR DES TRAVAUX AU JUSTE PRIX. NOUS ESSAYONS DE TROUVER DES MARCHANDISES DE QUALITÉ CAR LA PROVENANCE DES PRODUITS CHINOIS PEU FIABLE SURTOUT POUR LES PIÈCES QUI DOIVENT ETRE MISE SOUS PRESSION AVEC LE RISQUE D'UNE FUITE. »
4. « TOUS NOS TRAVAUX DÉFINITIFS SONT GARANTIS A CONDITION D'UTILISER NOS PIÈCES DE QUALITÉ. VEUILLEZ NOUS CONSULTER POUR NOS CONDTIONS DE GARANTIE* »
5. « Le déboucheur Bruxelleois, s'engage à vous fournir un service débouchage WC pas cher et professionnel au juste prix avec l'inspection caméra pour nous garantir un travail fait dans les règles ! » (« Bruxelleois », virgule fautive)
6. « Chez [Débouchage canalisation. express], nous intervenons dans tous les quartiers de Bruxelles pour le débouchage de WC, éviers, douches, baignoires, égouts, colonnes et canalisations, avec ou sans caméra d'inspection. » (crochets de template IA laissés)
7. « LE DÉBOUCHAGE ÉGOUT DEMANDE DU MATÉRIEL PUISSANT ON NE DÉBOUCHE PALES AVEC UN FIL DE FER : »
8. « Un WC bouché, un évier qui refoule ou une canalisation obstruée peuvent vite devenir un cauchemar. C'est pourquoi nous assurons un service d'urgence disponible jour et nuit, même le week-end et les jours fériés. »
9. « 📞 Appelez dès maintenant : [TON NUMÉRO] pour un débouchage rapide à Liège. » (page `/services`)

**Signes de contenu IA / non relu** : « [TON NUMÉRO] », « [Débouchage canalisation. express] », « Téléphone : [0475.289.981] », « Email : [via le formulaire réponse immédiate] », « H2 : Comment sont calculés… » (label de structure copié), « Pourquoi choisir Débouchage Expert Services » (autre marque), « Zone d'intervention — À personnaliser selon votre localisation. », « Conclusion » comme H2 sur 3 pages, « En résumé », « Que ce soit » ×3, « N'attendez pas » ×2, « Heureusement, il existe des solutions… », « Il est donc conseillé… », emojis en tête de H2 (🧼🚨🔧💦🎥💧📍⭐📞🚰🛁🚽💡🏠), listes « Devis gratuit et sans engagement / Tarifs clairs et transparents / Techniciens certifiés et expérimentés ». Pas de « n'hésitez pas » relevé. Contenu spun : pages WC / Égouts / SOS / Uccle = même page avec un mot changé.

**Belgicismes / marqueurs locaux** : « sterput » (18 occ., en menu « DÉBOUCHAGE STERPUT » mais lien vers `/`), « chambre de visite » (20), « HTVA » (109 — usage belge), « égouttage » (45), « corniches » (3), « citerne d'eau de pluie », « dégraisseur », « WC suspendu », « conduites en grès », « syndic », « copropriété », noms NL des communes entre parenthèses. Faute récurrente : « A » sans accent pour « À » (« A PARTIR DE », « FAITES APPEL A »).

**MAJUSCULES** : ~40 % du contenu visible des pages service est en capitales (hero, 4 blocs promesse, vignettes, grille tarifs, titles et metas des pages anciennes). Impression « flyer » / criarde ; les metas en capitales sont réécrites par Google.

---

## 7. Vocabulaire métier et questions FAQ relevées

**Termes exacts** : débouchage, déboucheur / déboucheur haute pression / plombier déboucheur, débouche-tout, canalisation bouchée / obstruée / engorgée, siphon (siphon bouché, siphon douche, chemisage siphon), sterput, chambre de visite, égout / égouts / égouttage / raccordement à l'égout / refoulement égout, colonne d'immeuble / colonnes montantes / descentes d'immeuble, évacuations, eaux usées, furet (manuel / mécanique / électrique / professionnel), ventouse, pompe professionnelle, hydrocurage / hydro cureuse / hydrocureuse haute pression / curage haute pression / nettoyage haute pression / débouchage haute pression, inspection caméra / caméra endoscopique / endoscopie canalisation / caméra HD / cadastre de l'état de la canalisation, détection canalisation / localisation conduite / recherche de fuite / gaz traceur, chemisage (« chaussette en synthétique », « sans ouverture du sol »), conduites en grès & PVC, cassure / fissure / affaissement / déboîtement, racines, lingettes, graisses / boues / calcaire / tartre / dépôts, WC broyeur / sanibroyeur, WC suspendu, fosse septique / vidange / dégraisseur, citerne d'eau de pluie / crépine / filtres pompes, gouttières / corniches, mauvaises odeurs, dégâts des eaux / inondation / cave, vide sanitaire, entretien préventif / contrat de maintenance, terrassement / travaux d'égouttage.

**Questions FAQ relevées (pages Bruxelles)** :
- Quels sont les services de débouchage proposés à Bruxelles ?
- En combien de temps intervenez-vous pour un débouchage à Bruxelles ?
- Quel est le prix d'un débouchage à Bruxelles ? / Combien coûte un débouchage de canalisation à Bruxelles ?
- Quels sont les signes indiquant un besoin de débouchage ? / …que mes canalisations sont bouchées ?
- Proposez-vous des solutions écologiques pour le débouchage ?
- Intervenez-vous dans toutes les communes de Bruxelles ? / Dans quels quartiers de Bruxelles intervenez-vous ? / Intervenez-vous uniquement à Bruxelles ?
- Est-ce que le débouchage est garanti ?
- Qui est Débouchage Canalisation Express à Bruxelles ?
- Quels types de débouchage proposez-vous ? / Quels types de canalisations débouchez-vous ?
- Quelle méthode utilisez-vous pour déboucher une canalisation ?
- Proposez-vous un service de débouchage d'urgent 24/7 ?
- Proposez-vous l'inspection caméra des canalisations ? / Utilisez-vous une caméra d'inspection pour le débouchage ?
- Peut-on prendre rendez-vous en ligne ?
- Proposez-vous un contrat d'entretien pour les copropriétés ou les entreprises ?
- Quels sont vos engagements en matière d'environnement ?
- Comment obtenir un devis gratuit pour un Débouchage à Bruxelles ?
- Qu'est-ce qu'une inspection caméra de canalisation ? / Pourquoi faire appel à une inspection caméra ? / Quels facteurs influencent le tarif ? / Quel est le tarif ? / Inclut-elle un rapport détaillé ? / Y a-t-il des frais supplémentaires ?

**Questions FAQ (page haute pression Liège, 26 Q — réutilisables)** : Qu'est-ce que le débouchage haute pression ? · Quand faut-il faire appel à un spécialiste ? · Quels sont les signes d'une canalisation bouchée ? · Le débouchage haute pression est-il dangereux pour les tuyaux ? · Réalisez-vous le débouchage de WC bouchés ? · Intervenez-vous pour les éviers, lavabos et douches bouchés ? · Intervenez-vous pour les égouts bouchés ? · Les racines peuvent-elles boucher une canalisation ? · Les produits déboucheurs du commerce sont-ils efficaces ? · Le débouchage haute pression élimine-t-il les mauvaises odeurs ? · Réalisez-vous l'inspection caméra ? · Combien coûte un débouchage ? · Proposez-vous un devis gratuit avant intervention ? · Intervenez-vous en urgence 24h/24 ? · Quel est le délai d'intervention pour une urgence ? · Dans quelles communes intervenez-vous ? · Le débouchage haute pression est-il plus efficace qu'un furet ? · Les interventions sont-elles garanties ? · Que faire avant l'arrivée du technicien ? · Peut-on prévenir les bouchons ? · Faut-il entretenir ses canalisations même sans bouchon ? · Pourquoi mes canalisations se bouchent-elles régulièrement ? · Combien de temps dure une intervention ? · Quels types de canalisations pouvez-vous déboucher ? · Proposez-vous l'entretien préventif ? · Pourquoi faire appel à un spécialiste ?

**Questions homepage** : Quels sont les signes d'une canalisation bouchée ? · Combien coûte un débouchage ? · Faut-il faire appel à un professionnel ou puis-je déboucher moi-même ? · À quelle fréquence faut-il entretenir ses canalisations ? · L'inspection caméra est-elle toujours nécessaire ? · Quels types de canalisations pouvez-vous déboucher ? · Intervenez-vous en urgence ?

---

## 8. Forces / faiblesses / ce qu'on doit faire mieux sur helpdrain.be

### Forces (pourquoi ça ranke quand même)
- Domaine exact-match « debouchage-canalisation » + ancienneté (contenu 2021, site vivant en 2026, 147 pages retouchées cette année).
- Volume : 208 pages, 21 pages Bruxelles, maillage interne massif (~110 liens nav + 35 footer sur chaque page) → chaque page cible reçoit des liens depuis tout le site.
- Prix affichés partout (« à partir de 95 € HTVA ») : répond à l'intention « prix débouchage ».
- Vocabulaire belge authentique (sterput, chambre de visite, HTVA, égouttage, grès) et liste des 19 communes avec noms NL.
- Titles optimisés « SERVICE DÉBOUCHAGE X BRUXELLES | téléphone », téléphone visible partout, 24/7, FAQ sur la page principale.
- FAQ longue sur la page haute pression (26 Q) : bonne banque de questions.

### Faiblesses (exploitables)
- Site fondamentalement liégeois : homepage, `/services`, `/contact-devis` = Liège ; adresse à Liège ; alts « Liège » sur pages Bruxelles ; e-mail Gmail « debouchage.canalisation.liege@ ». Aucune preuve de présence bruxelloise.
- Zéro schema utile (pas de LocalBusiness/Plumber, FAQPage, Service, Breadcrumb, Review), pas d'`og:image`, pas de GA/GTM.
- Pages service Bruxelles = clones (WC / Égouts / SOS / Uccle diffèrent par 1 phrase). Contenu unique ~60-100 mots.
- Prix contradictoires (80 € TTC / 89 € TTC / 99 € HT / 95 / 115 / 125 / 150 HTVA pour la même prestation), 2 numéros de téléphone, 2 formats du même numéro, 4 noms d'entreprise, « depuis 1962 » vs « 10 ans ».
- Contenu IA non relu en production : « [TON NUMÉRO] », « H2 : », « À personnaliser selon votre localisation », « Débouchage Expert Services », options « Option 1/2/3 » dans les formulaires, « Nom de l'entreprise » en footer.
- Avis = placeholders du widget Duda (« Jon », « Adam », « MIKE T. », « SHANNON W. »). Aucun avis Google, aucune note, liens sociaux vides.
- Fautes massives (MAINTEANT, APROXIMATIMATION, CONDTIONS, DÉBOCHAGE dans un title, « pas chère », « Bruxelleois », « PALES », « Seervice », « Locaalisation », « Wtermael »).
- Technique : HTML 190-260 Ko, ~15 familles Google Fonts, pas de srcset, images 1920w pour des vignettes, méga-menu de 110 liens dilue le PageRank, doublons d'URL non canonisés, URLs accentuées, `/heating-and-cooling` résiduel.
- Pas de NL, pas de WhatsApp, pas de CTA sticky, seulement 3 liens tel: par page.
- Pas de pages pour : colonne d'immeuble, sterput (menu → home), avaloir, bac à graisse, clapet anti-retour, pompage cave, syndic, horeca, remplacement canalisation — tout ce que helpdrain.be couvre.

### Ce qu'on doit faire mieux (10 actions concrètes)
1. **Grille tarifaire unique et cohérente, TVAC**, reprise à l'identique sur toutes les pages (composant partagé) : déplacement inclus ou non, prix « dès » + fourchette + majoration soir/WE chiffrée + ce qui est inclus (caméra de contrôle, nettoyage). Ancrer légèrement au-dessus ou au niveau de 95 € HTVA ≈ 115 € TVAC pour rester compétitif sans paraître « prix d'appel ».
2. **Schema complet** : `Plumber`/`LocalBusiness` (adresse bruxelloise réelle, `areaServed` = 19 communes, `openingHoursSpecification` 24/7, `telephone`, `priceRange`), `Service` + `Offer` par page, `FAQPage` sur chaque page avec FAQ, `BreadcrumbList`, `AggregateRating` dès qu'on a des avis réels.
3. **Preuves bruxelloises** : adresse à Bruxelles, numéro 02 ou 04xx unique partout, n° BCE/TVA visible, e-mail sur le domaine, avis Google réels (nom + commune + date), photos de chantiers bruxellois (caves, sterputs, chambres de visite), mention des quartiers/rues.
4. **Contenu unique par page service** (600-1 200 mots) : symptômes, causes typiques à Bruxelles (vieux réseaux en grès, colonnes d'immeubles, caves), méthode (furet / hydrocureur / caméra), durée, prix, garantie, FAQ 5-8 Q spécifique — jamais de clone.
5. **Pages communes uniquement si contenu local réel** (sinon un seul bloc « zones d'intervention » sur la page canalisation). Éviter les doublons `/x` et `/service-x`.
6. **Relecture orthographique stricte** et zéro majuscules intégrales dans les titles/metas ; H1 en premier dans le DOM ; pas d'emojis dans les H2.
7. **Conversion** : bouton d'appel sticky mobile, lien WhatsApp, `tel:` sur chaque mention du numéro (viser 6-10 liens tel: par page), formulaire court avec urgence/commune, temps de réponse annoncé et tenu.
8. **Performance** : HTML < 60 Ko, 1-2 familles de polices auto-hébergées, images WebP/AVIF avec `srcset` + `loading="lazy"` + `og:image`, nav ≤ 25 liens + footer par catégories (pas 145 liens par page).
9. **Bilingue FR/NL** avec hreflang (concurrent 100 % FR : opportunité sur « ontstoppingsdienst Brussel », « ontstoppen Brussel », « riool ontstoppen »).
10. **Réutiliser leur banque de questions FAQ** (haute pression 26 Q + Bruxelles 17 Q) en y répondant avec des chiffres concrets (délai, durée d'intervention, prix, garantie) et en couvrant les niches qu'ils n'ont pas (colonne immeuble, sterput, avaloir, bac à graisse, clapet anti-retour, syndic, horeca) — ce sont des pages sans concurrence directe chez eux.
