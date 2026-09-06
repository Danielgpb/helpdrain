# helpdrain.be — HelpDrain Débouchage (Bruxelles)

Site statique rank-and-rent, débouchage et assainissement de canalisations à Bruxelles. Phase 1 : 34 pages services, zéro page commune.

## Commandes

```bash
npm run build     # génère dist/ (CSS inliné, JSON-LD, sitemap, robots, favicon, 404)
npm run check     # liens internes + pages orphelines + règles éditoriales et de maillage
npm run serve     # prévisualisation locale de dist/
```

## Où changer quoi

| Besoin | Fichier |
|---|---|
| Téléphone, WhatsApp, email, adresse, TVA, fiche GBP | `data/business.json` (source unique, jamais de numéro en dur dans les pages) |
| Grille de prix | `data/tarifs.json` → tableau de `/tarifs-debouchage-bruxelles/` + phrases `{{PRIX:cle}}` + schema Offer |
| Avis Google | `data/avis.json` (bloc et AggregateRating masqués tant que `avis` est vide) |
| Texte d'une page | `content/pages/<slug>.html` (bloc META + corps) — règles dans `docs/redaction-spec.md` |
| Menu, footer, barre mobile | `templates/base.html` |
| Design | `assets/css/main.css` |
| Photos hero | déposer dans `assets/img/` puis `npm run images` : renommage, WebP 1600 px, métadonnées XMP (titre, description, auteur, mots-clés, GPS) ; alts et descriptions dans `data/images.json` |
| Liens autorisés par page | `docs/maillage.json` (le checker refuse tout lien de corps hors matrice) |

## Ajouter une commune (phase 2)

1. Créer `templates/commune.html` (gabarit) puis `data/communes/<slug>.json` : `name, slug, cp, title, metaDescription, h1, accroche, sections[{h2,html}], heroImg`.
2. Ajouter `/debouchage-<slug>/` à `docs/maillage.json`.
3. `npm run build && npm run check`. Le sitemap et le footer (zones) se mettent à jour seuls.
Règle : une seule page par commune, jamais service × commune.

## Déploiement

Netlify : build `npm run build`, publish `dist/` (`netlify.toml`). Formulaire `depannage` en Netlify Forms (notifications à configurer dans l'UI). Relais vers l'app Suivi Leads via `netlify/functions/lead.mjs` : variables d'environnement `LEADAPP_URL`, `LEADAPP_SITE`, `LEADAPP_TYPE`, `LEADAPP_SECRET`.

## Docs

`docs/superpowers/specs/` (spec), `docs/superpowers/plans/` (plan), `docs/concurrents/` (analyse des 4 leaders SERP + synthèse), `docs/redaction-spec.md`, `docs/prompts-photos-copier-coller.md`.
