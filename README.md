# Fati

CRM SaaS dashboard built with Next.js and Tailwind CSS.

Repo: https://github.com/yusosadick/fati.git

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Iconsax icons (`iconsax-react`, linear style)
- Inter via `next/font`

## Getting started

```bash
npm install
npm run dev
```

| Script          | Description          |
| --------------- | -------------------- |
| `npm run dev`   | Start the dev server |
| `npm run build` | Production build     |
| `npm start`     | Serve the build      |

## Structure

```
docs/            Project docs, notes, references, design inspiration
scripts/         Screenshot + diff tooling for matching the design
src/app/         Routes, layout, global styles and theme tokens
src/components/  Dashboard sections (Sidebar, Header, StatCards, ...)
```

## Matching the design

The dashboard is tuned against `docs/dashbaord-inspiration.webp` at the
inspiration's screen size (1014 × 720). With the dev server running on port 3100:

```bash
node scripts/shot.mjs                      # screenshot -> scripts/out/shot.png
python3 scripts/compare.py                 # overall + per-region diff, side.png, diff.png
python3 scripts/compare.py x y w h [zoom]  # zoomed side-by-side crop -> zoom.png
```

Requires Google Chrome and Python with Pillow.
