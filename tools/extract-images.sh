#!/usr/bin/env bash
set -euo pipefail

PDF="Practical_Code_and_Output_Report.pdf"
OUTDIR="assets/outputs"
PREFIX="${OUTDIR}/output"

if ! command -v pdfimages >/dev/null 2>&1; then
  echo "pdfimages not found. Install poppler-utils (Linux) or poppler (brew) and retry."
  exit 1
fi

mkdir -p "$OUTDIR"

echo "Extracting images from $PDF into $OUTDIR ..."
# pdfimages will create files like output-000.png, output-001.png (with -png)
pdfimages -png "$PDF" "$PREFIX"

# Normalize names to output-01.png etc
# pdfimages may produce files like assets/outputs/output-000.png
# Iterate and rename in numeric order
shopt -s nullglob
files=(${PREFIX}-*.png)
if [ ${#files[@]} -eq 0 ]; then
  echo "No images found in $PDF (or pdfimages produced no PNGs)."
  exit 0
fi

i=1
for f in "${files[@]}"; do
  new=$(printf "%s-%02d.png" "$OUTDIR/output" "$i")
  mv -v "$f" "$new"
  i=$((i+1))
done

echo "Done. Files written to $OUTDIR/"
