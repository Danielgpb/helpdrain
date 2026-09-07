#!/usr/bin/env bash
# Variantes responsive : hero-*-800.webp (mobile) et etape-*-600.webp, générées depuis assets/img/src/*.orig
# (ou depuis le webp 1600 si l'original manque). Appelé par optimiser-images.sh ; relançable seul.
set -euo pipefail
cd "$(dirname "$0")/../assets/img"
shopt -s nullglob
n=0
for f in hero-*.webp etape-*.webp; do
  [[ "$f" =~ -(800|600)\.webp$ ]] && continue
  name="${f%.webp}"
  case "$name" in etape-*) w=600;; *) w=800;; esac
  out="$name-$w.webp"
  [ -f "$out" ] && [ "$out" -nt "$f" ] && continue
  src="$f"
  for o in src/*.orig; do
    low=$(echo "$o" | tr '[:upper:]' '[:lower:]')
    if [[ "$low" == *"$name"* ]] || { [[ "$name" == "hero-debouchage-wc" ]] && [[ "$low" == *"debouchage-wc.orig" ]]; }; then src="$o"; break; fi
  done
  cwebp -quiet -q 70 -resize "$w" 0 -metadata none "$src" -o "$out" && n=$((n+1))
done
echo "✓ $n variante(s) responsive générée(s)"
