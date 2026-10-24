# Apex Aluminium website

React + Vite single-page site.

## Run it
```
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production files in /dist
```
Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, cPanel).

## What to edit
All business details are in `src/data.jsx`:
- `WA_NUMBER` – WhatsApp number, international format, digits only (e.g. 971501234567)
- `ADDRESS`, `PHONE` – shown in the "Find us" section
- `SV` services, `PR` process steps, `PJ` previous jobs, `TM` testimonials, `FQ` FAQ
- `LG` – Privacy policy and Terms text (have a lawyer review)

Other things to replace:
- Company name "Apex Aluminium" (`src/App.jsx`, `index.html`)
- CEO name, quote and portrait (`src/App.jsx`, About section)
- Testimonials are placeholders – use real customer reviews
- Hero video: `public/hero.mp4`
- Colours and fonts: CSS variables at the top of `src/styles.css`
- The contact form currently only shows a thank-you message. Connect it to an email/form service (e.g. Formspree) in `src/App.jsx`.
