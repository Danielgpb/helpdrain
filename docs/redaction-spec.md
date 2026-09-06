# Spec de rédaction — helpdrain.be (content/pages/*.html)

Référence obligatoire pour toute page. Le build (`build.js`) assemble ces fichiers dans le layout global : header, menu, footer et barre CTA mobile existent déjà, ne PAS les réécrire. `npm run build && npm run check` doit passer : le checker refuse les tournures interdites, les numéros en dur, les liens hors matrice, les ancres répétées, les titles trop longs.

## 1. Qui parle, à qui, comment

HelpDrain, c'est une équipe de déboucheurs bruxellois. On parle comme à un voisin qui vient de nous appeler parce que ça déborde : direct, concret, un peu d'humour quand la situation le permet, jamais de jargon commercial.

- **« on » + « vous »** en base. « On arrive, on débouche, vous respirez. » « Vous appelez, on vous dit le prix, on part. »
- **« tu »** uniquement dans une question de FAQ formulée comme le client (« Mon sterput refoule quand il pleut, c'est normal ? » est mieux ; « Tu fais quoi si… » est possible) ou dans un aparté d'une phrase. Jamais tu et vous dans le même paragraphe.
- **Phrases courtes.** Une idée par phrase. Des exemples bruxellois précis : la maison de maître divisée en trois appartements à Ixelles, la cave sous le niveau de la rue à Anderlecht, la brasserie du Pentagone qui rouvre à 11h, l'arbre d'alignement avenue Louise dont les racines passent dans le raccordement.
- **Français de Belgique** : sterput, corniche (gouttière), chambre de visite, égouttage, syndic, copropriété, commune, GSM, boiler, chipoter, « ça refoule ». Pas d'anglicismes (« drain », « pipeline »), pas de « placo », pas de TVA à 10 % (France).
- **Honnêteté** : on dit quand ce n'est pas la peine de nous appeler (une ventouse suffit parfois), on dit ce qu'on ne fait pas, on explique le prix.

### Tournures interdites (le checker échoue)
« n'hésitez pas », « que ce soit », « au cœur de », « en outre », « de plus, », « il est important de », « il convient de », « haut de gamme », « clé en main », « partenaire de confiance », « service de qualité », « équipe expérimentée », « satisfaction client », « pas cher », « sans plus attendre », « niché ». Interdit aussi : emojis, mots en MAJUSCULES (sigles WC, TVA, PVC, HTVA, TVAC, ACP, HACCP, AFSCA autorisés), listes à puces `<ul>` dans l'éditorial, symétries parfaites de trois adjectifs, ouvertures du type « Vous cherchez un déboucheur à Bruxelles ? », toute mention d'HelpCar, années d'expérience chiffrées, nombre d'avis ou de clients, mots « agréé » / « certifié » sans preuve.

### Les seuls arguments (trust signals)
1. 24h/24, 7j/7, et on annonce le délai d'arrivée à l'appel.
2. Inspection caméra avant et après l'intervention.
3. Le prix annoncé au téléphone est le prix payé. Pas de supplément à l'arrivée.
4. Rapport photo et vidéo fourni pour l'assurance (dégât des eaux) ou le syndic.

## 2. Format de fichier

`content/pages/{slug}.html` :

```html
<!--META
{
  "path": "/debouchage-wc-bruxelles/",
  "title": "≤ 60 caractères, mot-clé + bénéfice",
  "description": "≤ 160 caractères, concret, finit par une incitation (appel 24h/24, prix annoncé)",
  "priority": 0.7,
  "service": {"name": "Débouchage WC", "type": "Débouchage de WC et toilettes"},
  "breadcrumb": [{"name":"Accueil","url":"/"},{"name":"Débouchage canalisation","url":"/debouchage-canalisation-bruxelles/"},{"name":"Débouchage WC"}],
  "faq": [{"q":"Question ?","a":"<p>Réponse HTML, 40 à 80 mots, citable telle quelle.</p>"}]
}
META-->
```
- `priority` : homepage 1.0 · core/catégories 0.9 · généraux 0.8 · enfants 0.7 · standard 0.5.
- `service` uniquement sur les pages service (ajoute le schema Service). Pas sur /services, /a-propos, /contact, /tarifs.
- `breadcrumb` sur toutes les pages sauf la homepage. Enfant : Accueil → Parent → Page. Core/cat/général : Accueil → Page.
- `faq` : 3-4 questions (enfant), 5-6 (core, catégorie, général, tarifs, homepage). `<!--FAQ-->` dans le corps est remplacé par l'accordéon + schema FAQPage.
- `noindex: true` pour merci, mentions légales, confidentialité.

### Placeholders (remplacés au build, JAMAIS de numéro en dur)
`{{PHONE}}` (dans href tel:), `{{PHONE_DISPLAY}}` (texte), `{{WHATSAPP}}` (href), `{{EMAIL}}`, `{{ADDRESS}}`, `{{HOURS}}`, `{{PRIX:cle}}` → « entre 95 et 150 € TVAC » (clés : evier, wc, colonne, egout, hydrocurage, camera, camera-apres, fosse, graisse, cave, clapet, chemisage), `<!--BREADCRUMB-->`, `<!--FAQ-->`, `<!--AVIS-->` (homepage, à-propos ; vide tant qu'il n'y a pas d'avis), `<!--TARIFS-->` (page tarifs uniquement).

## 3. Squelettes HTML

### Page enfant (600-800 mots) et service général (800-1000 mots)
```html
<div class="page-head has-img" style="--pg-img:url('/assets/img/hero-debouchage-wc.webp')">
  <div class="wrap">
    <!--BREADCRUMB-->
    <h1>Débouchage WC et toilettes à Bruxelles</h1>
    <p class="lead">2-3 phrases : la situation du client, ce qu'on fait, la promesse de prix.</p>
    <div class="hero-cta">
      <a class="btn" href="tel:{{PHONE}}">Appeler {{PHONE_DISPLAY}}</a>
      <a class="btn btn-ghost" href="{{WHATSAPP}}" rel="noopener">Écrire sur WhatsApp</a>
    </div>
    <ul class="trust-strip">
      <li>✓ 24h/24, délai annoncé à l'appel</li>
      <li>✓ Prix annoncé = prix payé</li>
      <li>✓ Caméra avant et après</li>
      <li>✓ Rapport pour l'assurance</li>
    </ul>
  </div>
</div>
<div class="section"><div class="wrap narrow">
  <p>Ouverture : la scène concrète, 2-3 phrases.</p>
  <p>Ce qu'on est, ce qu'on fait, en une phrase avec le lien vers le parent : <a href="/debouchage-canalisation-bruxelles/">ancre naturelle</a>.</p>
  <h2>Pourquoi ça bouche (spécifique au sujet)</h2>
  <p>…</p>
  <h2>Comment on intervient</h2>
  <p>… méthode, matériel, durée, contrôle caméra …</p>
  <h2>Ce que ça coûte</h2>
  <p>Facteurs de prix + une phrase avec {{PRIX:wc}} + « le prix annoncé au téléphone est le prix payé ». Pas de tableau, pas d'autre chiffre.</p>
  <!--FAQ-->
  <div class="cta-band">
    <div>
      <h2>Titre CTA 5-8 mots, orienté action</h2>
      <p>1 phrase de réassurance (24h/24, prix annoncé).</p>
    </div>
    <div class="hero-cta">
      <a class="btn" href="tel:{{PHONE}}">{{PHONE_DISPLAY}}</a>
      <a class="btn btn-ghost" href="/contact/">Demander un rappel</a>
    </div>
  </div>
</div></div>
```
Nom de l'image hero : `hero-<slug sans -bruxelles>.webp` (liste exacte dans build.js `ALT_IMAGES`, ex. `hero-debouchage-sterput`, `hero-inspection-camera`, `hero-nettoyage-citerne`, `hero-debouchage-urgent`, `hero-tarifs-debouchage`).

### Page core / catégorie (1000-1200 mots)
Même page-head. Corps :
```html
<div class="section"><div class="wrap narrow">
  <p>Ouverture…</p>
  <h2>Symptômes / ce qui se passe chez vous</h2><p>…</p>
  <h2>Pourquoi ça bouche à Bruxelles</h2><p>… réseau ancien, fonte, calcaire, racines, caves sous voirie …</p>
  <h2>Ce qu'on fait</h2><p>… méthode, matériel …</p>
</div></div>
<div class="section section-alt"><div class="wrap">
  <p class="kicker">Nos interventions</p>
  <h2>Titre de la grille</h2>
  <div class="cards">
    <a class="card" href="/debouchage-wc-bruxelles/"><h3>Débouchage WC</h3><p>1-2 phrases.</p><span class="card-more">En savoir plus →</span></a>
    …
  </div>
</div></div>
<div class="section"><div class="wrap narrow">
  <h2>Comment ça se passe</h2>
  <div class="steps">
    <div class="step"><div class="num">1</div><h3>Votre appel</h3><p>…</p></div>
    <div class="step"><div class="num">2</div><h3>Le prix, annoncé</h3><p>…</p></div>
    <div class="step"><div class="num">3</div><h3>On intervient</h3><p>…</p></div>
    <div class="step"><div class="num">4</div><h3>Contrôle caméra et rapport</h3><p>…</p></div>
  </div>
  <p>Paragraphe avec les liens transverses autorisés et le lien retour <a href="/">accueil</a> avec une ancre naturelle (« notre service de débouchage à Bruxelles », « HelpDrain à Bruxelles »).</p>
  <!--FAQ-->
  <div class="cta-band">…</div>
</div></div>
```
Attention : le texte « En savoir plus → » des cards compte comme ancre ; le checker refuse deux ancres identiques. Dans une grille de cards, varier : « En savoir plus → », « Voir le service → », « Lire la suite → », « Détails → », « On vous explique → ». Ou mieux : mettre le `<span class="card-more">` avec un texte propre à chaque card (« Déboucher un WC → »).

### Classes disponibles
`.section`, `.section-alt` (bandeau bleu-gris pleine largeur : fermer `.wrap` avant), `.wrap` / `.wrap.narrow`, `.kicker`, `.cards` + `.card`, `.steps` + `.step`, `.callout` / `.callout-blue` (encadré, pour un conseil « en attendant qu'on arrive »), `.table-scroll` + `table` (tarifs uniquement), `.cta-band`, `.form-card`, `.form-grid`, `.communes-txt`.

## 4. Maillage (matrice `docs/maillage.json`, vérifiée au build)
- Enfant → parent + /contact/ (+ /inspection-camera-canalisation-bruxelles/ si pertinent). Rien d'autre dans le corps, pas même /tarifs.
- Core / catégorie → ses enfants + liens transverses listés dans la matrice + / + /contact/.
- Général → / + /contact/ (+ exceptions matrice : horeca → bac à graisse ; syndic → colonne + entretien ; tarifs → 2 core + 3 catégories).
- Ancres naturelles, dans le corps du texte, jamais deux fois la même ancre sur une page. Zéro `href="#…"`.

## 5. Titles et metas
- Title ≤ 60 caractères : mot-clé cible + bénéfice, structures variées (« Débouchage WC Bruxelles — on vient dans l'heure, 24h/24 », « Sterput qui refoule à Bruxelles ? Débouchage 24h/24 »). Pas de « Accueil - », pas de majuscules.
- Description ≤ 160 : concret, un bénéfice, une incitation. Pas de numéro dedans (il change).
- Un seul H1 avec le mot-clé cible, formulation humaine.
- H2 = questions ou requêtes secondaires, jamais des étiquettes vides (« Nos services »).

## 6. Prix
Tableau chiffré uniquement sur /tarifs-debouchage-bruxelles/ (`<!--TARIFS-->`). Ailleurs : une seule phrase avec `{{PRIX:cle}}`, dans la section « Ce que ça coûte » ou dans une réponse de FAQ. Toujours accompagnée de « le prix annoncé au téléphone est le prix payé ». Majoration nuit/dimanche : « +30 %, annoncé à l'appel » (en phrase, jamais en tableau hors tarifs).
