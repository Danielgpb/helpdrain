#!/usr/bin/env bash
# Prend toute image déposée dans assets/img/ (png/jpg/webp, n'importe quel nom),
# devine le nom attendu par build.js (hero-<slug>.webp, portrait-a-propos.webp, og-default.webp, couverture-gbp.webp),
# la redimensionne à 1600 px de large et l'encode en WebP q72 sous ce nom.
# L'original part dans assets/img/src/ (ignoré par git et par le build).
set -euo pipefail
cd "$(dirname "$0")/../assets/img"
mkdir -p src
shopt -s nullglob
for f in *.png *.jpg *.jpeg *.webp *.PNG *.JPG *.JPEG *.WEBP; do
  size=$(stat -f%z "$f")
  # déjà optimisé (< 400 Ko et vrai WebP) → on passe
  if [ "$size" -lt 400000 ] && file "$f" | grep -q "Web/P"; then continue; fi
  base=$(basename "$f"); base="${base%.*}"
  lower=$(echo "$base" | tr '[:upper:]' '[:lower:]' | sed 's/[[:space:]]*—[[:space:]]*/—/g')
  if [[ "$lower" =~ (hero-[a-z0-9-]+) ]]; then name="${BASH_REMATCH[1]}"
  elif [[ "$lower" =~ (portrait-a-propos|og-default|couverture-gbp|etape-[1-4]) ]]; then name="${BASH_REMATCH[1]}"
  else name="hero-$(echo "$lower" | sed 's/[^a-z0-9-]/-/g; s/--*/-/g; s/^-//; s/-$//; s/-bruxelles$//')"
  fi
  name="${name%-bruxelles}"
  if [[ ! "$name" =~ ^(og-default|couverture-gbp)$ ]] && ! grep -q "\"$name\"" ../../data/images.json; then echo "  ! $f → nom « $name » inconnu de data/images.json, vérifie"; fi
  mv "$f" "src/$base.orig"
  w=1600; case "$name" in portrait-a-propos) w=1080;; etape-*) w=1200;; og-default) w=1200;; couverture-gbp) w=1024;; esac
  cwebp -quiet -q 72 -resize "$w" 0 -metadata none "src/$base.orig" -o "$name.webp"
  echo "  ✓ $f → $name.webp ($(( $(stat -f%z "$name.webp") / 1024 )) Ko)"
done
echo "Terminé. Originaux dans assets/img/src/."
