# VOLTA — web

Single-page site for a small electrical / smart-home / renovation team
working in South Bohemia, Austria, and Bavaria.

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Stack

- Vanilla HTML / CSS / JS, built with Vite.
- Google Fonts: Fraunces (display) + Inter (body).
- Single page, no framework.

## Brand

- Name: **VOLTA**
- Mark: bold wordmark + small copper dot
- Display type: Fraunces (italic on accents)
- Body type: Inter
- Palette:
  - ink `#0a0a0b`
  - paper `#f5f2ea`
  - cream `#faf7f0`
  - accent (copper) `#c8682a`
  - accent hot `#e88a3d`

## Photos

The page ships without photos — empty `.photo` slots render with a dark
gradient and a small italicized fallback label, so the layout looks
intentional even before any imagery is added.

To wire a real project photo, drop a JPG/WebP into `public/images/` and
inline it on the slot:

```html
<div
  class="photo"
  style="background-image: url(/images/dum-cb.webp); background-size: cover; background-position: center;"
></div>
```

Ready-to-run AI prompts are in [`public/images/prompts.md`](public/images/prompts.md).
