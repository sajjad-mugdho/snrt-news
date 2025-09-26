# SNRT News — Tailwind HTML Template

This repository contains a static HTML news site template generated from a Figma design and implemented with Tailwind CSS.

Quick start (CDN)

This template is configured to use Tailwind via the browser CDN/script so no local build is required.

1. Open `src/index.html` in a browser. For best results serve the repo root with a simple static server and open:

```bash
# from project root
python3 -m http.server 5000
# then open:
http://localhost:5000/src/index.html
```

2. Fonts:

    - Tajawal is preloaded from Google Fonts and will work automatically.
    - Nobel Uno is expected to be self-hosted at `fonts/` in the project root (optional). If present, it will be used; otherwise Tajawal/system fonts are used.

Notes

- This CDN approach is great for quick prototyping and Figma-to-HTML previews.
- For production or to customize Tailwind (add plugins, purging, etc.) switch to the official Tailwind CLI/PostCSS/Vite setup described at https://tailwindcss.com/docs/installation.

Mobile-first with Tailwind

This project follows a mobile-first pattern (the Tailwind default). A few rules to keep the codebase consistent:

- Base styles should target the smallest viewport (mobile). Use responsive prefixes for larger screens: e.g. `md:flex` means "flex on screens >= md" while staying stacked by default.
- Prefer utilities without breakpoint prefixes for mobile behavior, and add `sm:`, `md:`, `lg:`, `xl:` only to change layout on larger sizes.
- Examples:

    - Hide the desktop nav on mobile and show it on md+: `hidden md:flex`
    - Typography: `text-base md:text-lg lg:text-2xl` (base is mobile)
    - Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

- Keep the layout container centered with limited max width — this repository uses `src/layout.css` `.site-container` to enforce max-width: 1440px and consistent horizontal padding. The base padding is mobile-friendly; larger screens get more space via media queries.

Following these conventions will keep the template predictable and easy to extend from mobile to desktop.

Fonts

- Tajawal is loaded from Google Fonts for quick preview. The CSS also imports it — you can keep or remove the `@import` depending on your production setup.
- Nobel Uno is referenced as a self-hosted font. To enable it, place your font files at `public/fonts/` in the project root with these names (or update the paths in `src/input.css`):

      - `fonts/NobelUno-Regular.woff2`
      - `fonts/NobelUno-Regular.woff`
      - `fonts/NobelUno-Bold.woff2`
      - `fonts/NobelUno-Bold.woff`

      Place the `fonts/` folder at the project root so it will be served at `/fonts/...` by your static server.

  If you don't have the files, the template will fall back to Tajawal and system fonts.
