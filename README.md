# Mix for a Mission — Website

This repository contains the source code for the **Mix for a Mission** website.
If you're looking for the bakery — menu, ordering, contact info — you want the
actual site:

> **🌐 [mixforamission.github.io](https://mixforamission.github.io/)**
> (custom domain once live: **mixforamission.com**)

This repo is just the code that builds it.

---

## What is this?

**Mix for a Mission** is a vegan home microbakery in Kirkland, WA, founded by
high school students in 2024. Washington State Cottage Food approved. This
repository holds the files that make up the bakery's website — the pages,
styling, and a small bit of interactivity (mobile menu, sticky header).

The website is **static** — meaning it's made of plain HTML, CSS, and a little
JavaScript, with no database, no login, and no build process. It's hosted for
free via **GitHub Pages**, which serves the files directly from this repository
to anyone who visits the URL above.

You don't need to install anything or run any code to view the site — just
follow the link. The rest of this README is for anyone who wants to preview,
edit, or deploy the code themselves.

---

## For developers

Everything below this point is for someone working with the code — previewing
locally, making edits, deploying updates, or understanding the project
structure. If you're just here to find the bakery, the link at the top is all
you need.

---

### 📁 Project structure

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
│   └── index.html                      # Contact & order — form embed, phone/email/address/delivery, social
├── css/
│   ├── tokens.css                      # Design tokens (CSS custom properties — colors, type, spacing)
│   └── styles.css                      # All styles: reset, base, components, per-page sections
├── js/
│   └── main.js                         # Sticky header, mobile nav, footer year, scroll-spy
├── assets/
│   ├── icons/                          # Favicon (logo.ico) and header logo (logo.jpeg)
│   └── images/                         # Drop product photos here
├── .gitignore                          # Excludes dev-server artifacts & OS/editor files
└── README.md                           # This file
```

---

### 🧑‍💻 Preview locally

No build tools required. Pick either option:

#### Option A — Python (already installed on macOS/Linux)

```bash
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

#### Option B — VS Code Live Server extension

1. Install the **Live Server** extension (by Ritwick Dey) in VS Code.
2. Right-click `index.html` → **Open with Live Server**.
3. The site opens at `http://127.0.0.1:5500` and auto-reloads on save.

> **Why a local server?** Opening the HTML files directly via `file://` can cause
> the CSS `@import` and font loading to behave inconsistently across browsers. A
> local HTTP server mimics how GitHub Pages serves the site.

---

### 🚀 Deploy to GitHub Pages

The site is already deployed. To publish an update, just push to `main` —
GitHub Pages publishes automatically within 1–2 minutes. No build step.

If setting up from scratch:

1. Push the code to a GitHub repo (this one is `mixforamission.github.io`).
2. Go to the repo → **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Under **Branch**, select **`main`** and **`/ (root)`** folder. Click **Save**.
5. Wait 1–2 minutes. The site goes live at:

   ```
   https://<your-username>.github.io/mixforamission.github.io/
   ```

6. Verify: open the URL. Check all 8 pages and the mobile nav. Hard-refresh
   to clear cache if you don't see your latest changes.

> **Repo-name note:** This repo is named `mixforamission.github.io`. If your GitHub
> username is **`mixforamission`**, GitHub treats this as a **user/org page** served
> at the root (`https://mixforamission.github.io/`) instead of a project page at a
> subpath. If your username is anything else, it's a project page at
> `https://<username>.github.io/mixforamission.github.io/` (as in step 5 above). The
> relative links used throughout this site work correctly in **both** cases — no
> changes needed when switching.

---

### 🌐 Custom domain (optional — for later)

When you're ready to serve the site at **mixforamission.com** instead of the
`github.io` URL:

#### Step 1 — Add a CNAME file

Create a file named `CNAME` (no extension) in the repo root containing exactly:

```
mixforamission.com
```

Commit and push. GitHub Pages detects this file and updates its routing.

#### Step 2 — Configure DNS at your domain registrar

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

#### Step 3 — Enable HTTPS & enforce

1. Back in **Settings → Pages**, enter `mixforamission.com` in the **Custom domain**
   field and click **Save**.
2. Wait for DNS to propagate (can take minutes to hours).
3. Once GitHub shows "DNS check: Successful", tick **Enforce HTTPS** so all
   traffic is upgraded to `https://`.

---

### 🔗 Internal links — all relative

Every internal link and asset reference uses **relative paths** (`../css/styles.css`,
`about/donations.html`, `contact/#order-form`, etc.) — no leading slashes, no absolute
URLs. This means the site works identically:

- **Locally** via `python3 -m http.server` or Live Server.
- **As a project page** at `username.github.io/mixforamission.github.io/` (the
  subpath doesn't break relative links).
- **With a custom domain** at `mixforamission.com` (root-level serving).

No changes needed when switching between these environments.

---

### 🎨 Design system summary

All visual decisions live as CSS custom properties in **`css/tokens.css`**. Edit that
file alone to retheme the whole site.

| Token group | Choices |
|-------------|---------|
| **Background** | Light grey `#f2f2f2` ground, `#e9e8e8` alt sections, white surfaces |
| **Text** | Near-black `#212121` primary, muted `#5f5f5f`, soft `#8a8a8a` |
| **Primary** | Muted purple-brown `#4f474e` (header, footer, primary buttons) |
| **Accent** | Dusty pink `#ea9999` fills / `#ad5050` text (buttons, borders, highlights) |
| **Body font** | Inter (clean grotesque, loaded via Google Fonts) |
| **Display font** | Newsreader (editorial serif — used sparingly for hero h1 and stat numbers only) |
| **Type scale** | Modular ratio 1.250 (major third), base 1rem; fluid `clamp()` for display sizes |
| **Spacing** | 4px base unit (`--sp-1` … `--sp-10`) |
| **Max width** | `--container-max` 1200px; `--container-narrow` 760px |

#### Responsive strategy

- **Mobile-first layout**: base = single column, full-bleed.
- **≥ 640px** (small tablet): 2-column grids where useful.
- **≥ 900px** (tablet/desktop): multi-column layouts, larger horizontal padding.
- **≥ 1200px** (wide desktop): capped at `--container-max`.
- Type is fluid via `clamp()`, so most headings need no breakpoint overrides.
- `prefers-reduced-motion` fully respected.

---

### ✅ Remaining TODOs

These are the remaining placeholders marked with `TODO` comments in the code:

- **Order form URL** — replace the `srcdoc` placeholder iframe in `contact/index.html`
  with the real Google Form embed URL. Clear instructions are in a comment block above
  the `<iframe>`.
- **Product photos** — add real images to `assets/images/` per `assets/images/README.md`
  and swap the styled placeholder `<div>`s for `<img>` tags (the TODO comments show the
  exact `src` and `alt` to use).
- **Delivery details** — replace the "Placeholder, content coming soon" value in the
  Delivery contact card on `contact/index.html` with real delivery info (radius, fees,
  areas served).
- **Yelp & Google Reviews URLs** — re-enable the disabled footer social links by
  removing `aria-disabled` and adding the real `href` (instructions in the TODO comments).
- **OG image** — add a dedicated `assets/images/og-image.jpg` (1200×630). Currently using
  `assets/icons/logo.jpeg` as a fallback.
- **Donations list** — edit the `DONATIONS` array in `about/donations.html` to replace
  the placeholder entries with real donation history (instructions are in the comment).
- **Local partnerships** — replace the placeholder partner cards on
  `outreach/local-partnerships.html` with real partner content.
