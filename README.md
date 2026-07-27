# Mix for a Mission — Website

A static, multi-page website for **Mix for a Mission**, a vegan home microbakery in
Kirkland, WA, founded by high school students in 2024. Washington State Cottage Food
approved.

Built with **plain HTML, CSS, and vanilla JavaScript** — no frameworks, no build step,
no dependencies. Designed to run as-is on GitHub Pages.

## ✨ Highlights

- **Modern minimalist design** — generous whitespace, restrained earthy palette, clean
  sans-serif + serif display type. The bakery's photography is meant to be the visual
  interest, so layouts leave room for it.
- **Mobile-first & fully responsive** — works from small phones up to wide desktops.
- **Accessible** — semantic landmarks, skip link, proper alt text, visible focus
  states, `prefers-reduced-motion` support, keyboard-friendly mobile nav.
- **No lorem ipsum** — all copy uses the real business facts provided.

## 📁 Structure

```
.
├── index.html              # Home — hero, mission, highlights, featured menu, outreach teaser, CTA
├── menu/
│   └── index.html          # Menu — sticky anchor nav + Cakes, Cupcakes, Cookies, Cake Pops, Cake Jars
├── about/
│   └── index.html          # About — story, mission statement, donations, board (Emi/Tandisse/Ishwin)
├── outreach/
│   └── index.html          # Outreach — Eastside Dandiya, Wave Seattle, Hope Link
├── contact/
│   └── index.html          # Contact — order form CTA, contact details, socials, map embed
├── assets/
│   ├── css/
│   │   └── styles.css      # Shared design system (tokens, components, responsive, a11y)
│   ├── js/
│   │   └── main.js         # Mobile nav, sticky header, scroll-reveal, menu anchor spy
│   └── img/                # Drop product/brand photos here (see TODOs)
└── README.md
```

## 🧑‍💻 Local development

No build tools needed. To preview locally, run any static file server from the project
root, for example:

```bash
# Python 3 (built into macOS)
python3 -m http.server 8000

# or Node
npx serve .
```

Then open <http://localhost:8000>.

> You can also just open `index.html` directly in a browser, but a local server is
> recommended so relative paths and the map embed behave like production.

## 🚀 Deploy to GitHub Pages

1. Push this repository to GitHub. The repo name should be
   `mixforamission.github.io` (for a root domain) **or** any name (for a project page).
2. In the repo settings → **Pages**, set **Source** to the `main` branch `/ (root)`.
3. Your site goes live at `https://<username>.github.io/mixforamission.github.io/`
   (or `https://<username>.github.io/<repo>/` for a project repo).

Because there's no build step, every push to `main` publishes instantly.

## ✅ TODO list (things to swap in later)

Search the codebase for `TODO` to find every spot. The main ones:

| # | What | Where | How |
|---|------|-------|-----|
| 1 | **Real Google Form URL** | Every `#order-form` link, plus the CTA on `/contact/` | Replace `#order-form` with the form URL (e.g. `https://docs.google.com/forms/d/e/<ID>/viewform`). Optionally swap the CTA `<a>` for an `<iframe>` embed. |
| 2 | **Product / brand photos** | Styled placeholder divs across all pages | Drop images in `assets/img/` and replace the `.hero-visual`, `.card-media`, `.product-media`, `.split-media`, and `.member-avatar` placeholders with `<img>` tags. Recommended sizes noted near each placeholder. |
| 3 | **Open Graph image** | `index.html` `<meta property="og:image">` | Add a 1200×630 brand image and point the meta tag at it. |
| 4 | **Favicon** | Each page's `<link rel="icon">` | Currently an inline SVG "M" badge. Swap for `assets/img/favicon.svg` or a `.ico`. |
| 5 | **Yelp & Google Reviews URLs** | `/contact/` social row | Replace the two `#order-form` placeholder links with the real profile URLs. |

## 🎨 Design tokens

All colors, spacing, type, and radii live as CSS custom properties at the top of
`assets/css/styles.css` (under `:root`). Tweak them there to retheme the whole site.

Palette summary:

| Token | Use |
|-------|-----|
| `--color-primary` `#2f4a3a` | Deep forest green — buttons, headers, accents |
| `--color-accent` `#c0643f` | Terracotta — eyebrows, hover states, CTAs |
| `--color-bg` `#faf7f1` | Warm cream page background |
| `--color-surface` `#ffffff` | Cards / surfaces |

## 📝 Notes

- All products are made in a home kitchen under Washington State Cottage Food law.
- Pickup only at 6735 132nd Ave NE, Kirkland, WA 98033 — no shipping or storefront.
- Contact: 425-739-9862 · MixForAMission@gmail.com
