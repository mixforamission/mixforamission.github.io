# Mix for a Mission — Website

A static, multi-page website for **Mix for a Mission**, a vegan home microbakery in
Kirkland, WA, founded by high school students in 2024. Washington State Cottage Food
approved.

Built with **plain HTML, CSS, and vanilla JavaScript** — no frameworks, no build step,
no dependencies. Designed to run as-is on GitHub Pages.

---

## 📁 Project structure

```
.
├── index.html                          # Home — hero, about summary, featured cakes, reviews, social
├── menu/
│   └── index.html                      # Full menu — cakes, cupcakes, cookies, cake pops, cake jars
├── about/
│   ├── index.html                      # About hub — intro, mission statement, results, board CTA
│   ├── donations.html                  # Donations — $1,000+ stat, Hope Link (50%), editable timeline
│   └── board.html                      # Board — 3-member team grid (Emi, Tandisse, Ishwin)
├── outreach/
│   ├── index.html                      # Events timeline — Wave Seattle, Eastside Dandiya
│   └── local-partnerships.html         # Partner grid — Hope Link + placeholder slots
├── contact/
│   └── index.html                      # Contact & order — form embed, phone/email/address, social
├── css/
│   ├── tokens.css                      # Design tokens (CSS custom properties — colors, type, spacing)
│   └── styles.css                      # All styles: reset, base, components, per-page sections
├── js/
│   └── main.js                         # Sticky header, mobile nav, footer year, banner, scroll-spy
├── assets/
│   └── images/                         # Drop all photos here (see images/README.md for filenames)
│       └── README.md                   # Expected image filenames & sizes
├── .gitignore                          # Excludes dev-server artifacts & OS/editor files
└── README.md                           # This file
```

---

## 🧑‍💻 Preview locally

No build tools required. Pick either option:

### Option A — Python (already installed on macOS/Linux)

```bash
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

### Option B — VS Code Live Server extension

1. Install the **Live Server** extension (by Ritwick Dey) in VS Code.
2. Right-click `index.html` → **Open with Live Server**.
3. The site opens at `http://127.0.0.1:5500` and auto-reloads on save.

> **Why a local server?** Opening the HTML files directly via `file://` can cause
> the CSS `@import` and font loading to behave inconsistently across browsers. A
> local HTTP server mimics how GitHub Pages serves the site.

---

## 🚀 Deploy to GitHub Pages

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Mix for a Mission website"
git branch -M main
git remote add origin https://github.com/<your-username>/mixforamission.github.io.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Under **Branch**, select **`main`** and **`/ (root)`** folder.
4. Click **Save**.
5. Wait 1–2 minutes. Your site goes live at:

   ```
   https://<your-username>.github.io/mixforamission.github.io/
   ```

6. Verify: open the URL. Check all 8 pages and the mobile nav. The green action
   banner at the top should show "Accepting orders for the holiday season!"
   (injected by `js/main.js` — if it's blank, hard-refresh to clear cache).

No build step — every push to `main` publishes instantly.

> **Repo-name note:** This repo is named `mixforamission.github.io`. If your GitHub
> username is **`mixforamission`**, GitHub treats this as a **user/org page** served
> at the root (`https://mixforamission.github.io/`) instead of a project page at a
> subpath. If your username is anything else, it's a project page at
> `https://<username>.github.io/mixforamission.github.io/` (as in step 5 above). The
> relative links used throughout this site work correctly in **both** cases — no
> changes needed when switching.

---

## 🌐 Custom domain (optional — for later)

When you're ready to serve the site at **mixforamission.com** instead of the
`github.io` URL:

### Step 1 — Add a CNAME file

Create a file named `CNAME` (no extension) in the repo root containing exactly:

```
mixforamission.com
```

Commit and push. GitHub Pages detects this file and updates its routing.

### Step 2 — Configure DNS at your domain registrar

GitHub publishes the current IP addresses at
<https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site>.

**For an apex domain** (`mixforamission.com`), add four **A records**:

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**For a `www` subdomain** (`www.mixforamission.com`), add a **CNAME record**:

| Type | Host | Value |
|------|------|-------|
| CNAME | `www` | `<your-username>.github.io.` |

> ⚠️ Double-check the A-record IPs against GitHub's docs before saving — they
> can change. The values above are current as of July 2026.

### Step 3 — Enable HTTPS & enforce

1. Back in **Settings → Pages**, enter `mixforamission.com` in the **Custom domain**
   field and click **Save**.
2. Wait for DNS to propagate (can take minutes to hours).
3. Once GitHub shows "DNS check: Successful", tick **Enforce HTTPS** so all
   traffic is upgraded to `https://`.

---

## 🔗 Internal links — all relative

Every internal link and asset reference uses **relative paths** (`../css/styles.css`,
`about/donations.html`, `contact/#order-form`, etc.) — no leading slashes, no absolute
URLs. This means the site works identically:

- **Locally** via `python3 -m http.server` or Live Server.
- **As a project page** at `username.github.io/mixforamission.github.io/` (the
  subpath doesn't break relative links).
- **With a custom domain** at `mixforamission.com` (root-level serving).

No changes needed when switching between these environments.

---

## 🎨 Design system summary

All visual decisions live as CSS custom properties in **`css/tokens.css`**. Edit that
file alone to retheme the whole site.

| Token group | Choices |
|-------------|---------|
| **Background** | Warm off-white `#faf7f2` ground, `#f1ece4` alt sections, white surfaces |
| **Text** | Near-black `#1f1d1b` primary, muted `#5c574f`, soft `#8a847a` |
| **Primary accent** | Deep forest green `#2f4a3a` (the "vegan/fresh" voice) — `--color-primary` |
| **Secondary accent** | Soft terracotta `#c0643f` for warm CTAs/highlights — `--color-accent` |
| **Sage** | Muted companion `#8a9a87` for secondary surfaces |
| **Body font** | Inter (clean grotesque, loaded via Google Fonts) |
| **Display font** | Fraunces (modern serif with optical sizing — headings) |
| **Type scale** | Modular ratio 1.250 (major third), base 1rem; fluid `clamp()` for display sizes |
| **Spacing** | 4px base unit (`--sp-1` … `--sp-10`) |
| **Max width** | `--container-max` 1200px; `--container-narrow` 760px |

### Responsive strategy

- **Mobile-first layout**: base = single column, full-bleed.
- **≥ 640px** (small tablet): 2-column grids where useful.
- **≥ 900px** (tablet/desktop): multi-column layouts, larger horizontal padding.
- **≥ 1200px** (wide desktop): capped at `--container-max`.
- Type is fluid via `clamp()`, so most headings need no breakpoint overrides.
- `prefers-reduced-motion` fully respected.

---

## ✅ TODOs before launch

These are the remaining placeholders marked with `TODO` comments in the code:

- **Order form URL** — replace the `srcdoc` placeholder iframe in `contact/index.html`
  with the real Google Form embed URL. Clear instructions are in a comment block above
  the `<iframe>`.
- **Product photos** — add real images to `assets/images/` per `assets/images/README.md`
  and swap the styled placeholder `<div>`s for `<img>` tags (the TODO comments show the
  exact `src` and `alt` to use).
- **Yelp & Google Reviews URLs** — replace the `href="#"` placeholders in every
  footer's social row with the real profile URLs.
- **OG image** — add `assets/images/og-image.jpg` (1200×630) and set the `og:image`
  meta tag in `index.html`.
- **Favicon** — the current favicon is an inline SVG data-URI (a green circle with "M").
  Replace with `assets/images/favicon.svg` when a real logo is ready.
- **Seasonal banner** — edit the `SEASONAL_MESSAGE` constant in `js/main.js` to change
  the announcement text (single source, appears on home + contact pages).
- **Donations list** — edit the `DONATIONS` array in `about/donations.html` to replace
  the placeholder entries with real donation history (instructions are in the comment).
