# Dean Schiltz — Developer Portfolio

Personal, single-page developer portfolio. Recruiters get a fast scan of who I am, what I build, and how to reach me. The site is a static React app with no backend.

**Live site:** https://deanschiltz.com

## Tech stack

| Piece                       | Why it is here                                           |
| --------------------------- | -------------------------------------------------------- |
| React + TypeScript (strict) | UI components and type-safe content                      |
| Vite                        | Dev server and static production build                   |
| Tailwind CSS v4             | Layout, spacing, and theme tokens                        |
| Motion (`motion/react`)     | Scroll/entrance animation, with `prefers-reduced-motion` |
| ESLint + Prettier           | Lint and format                                          |
| Vitest                      | Small unit tests (class-name helper)                     |
| GitHub Actions              | CI quality gate + GitHub Pages deploy                    |
| GitHub Pages                | Free static hosting and HTTPS                            |

## Repository map

Content changes belong in data files, not in JSX.

```text
src/
  data/          Profile, projects, experience, skills, education, nav, social
  types/         Shared TypeScript models
  sections/      Page sections (Hero, About, Projects, …)
  components/    Reusable UI (nav, cards, dialog, buttons)
  assets/images  Headshot and optional project screenshots
  hooks/         Theme and reduced-motion helpers
  styles/        Color tokens
public/          OG image, robots.txt, sitemap.xml, CNAME
```

- Add a project: append an object in `src/data/projects.ts`.
- Replace the headshot: drop a **transparent PNG** at `src/assets/images/headshot.png`, update the import in `src/data/profile.ts`, and set `headshotAlt`.
- Resume is request-only via mailto (“Ask for Resume”); do **not** put a PDF in `public/` (it would be publicly downloadable).
- Change the public URL: update `siteUrl` in `src/data/profile.ts`, then the same value in `index.html`, `public/robots.txt`, `public/sitemap.xml`, and `public/CNAME`.

## Prerequisites

- Node.js 22+ (see `.nvmrc`)
- npm 10+

## Local development

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

Optional visual check before launch (Chrome required):

```bash
npx lighthouse http://localhost:4173 --only-categories=performance,accessibility,seo --view
```

## Deployment path

```text
Local development (Vite)
        ↓
Git commit + push to main
        ↓
GitHub Actions: typecheck, lint, test, build
        ↓
GitHub Pages deploy from dist/
        ↓
Live site: https://deanschiltz.com
```

### Enable GitHub Pages (one-time)

1. Open the repo on GitHub: https://github.com/deanschiltz/dev-portfolio
2. Go to **Settings → Pages**
3. Under **Build and deployment → Source**, choose **GitHub Actions**
4. Push to `main` (or re-run the **Deploy GitHub Pages** workflow under the **Actions** tab)

CI workflow: `.github/workflows/ci.yml`  
Deploy workflow: `.github/workflows/deploy-pages.yml`

### Custom domain: deanschiltz.com

1. At your DNS provider, add these records for the **apex** domain:

| Type | Name | Value |
| ---- | ---- | ----- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

2. Optional but recommended — redirect `www` to the apex:

| Type | Name | Value |
| ---- | ---- | ----- |
| CNAME | `www` | `deanschiltz.github.io` |

3. In GitHub: **Settings → Pages → Custom domain** → enter `deanschiltz.com` → Save.
4. Wait for DNS check to pass, then enable **Enforce HTTPS**.
5. Push the repo changes that set Vite `base` to `/` and update site URLs (already in this project via `public/CNAME`).

DNS can take a few minutes to a few hours to propagate.

## License

Copyright © 2026 Dean Schiltz. All rights reserved.

No part of this repository may be copied, modified, or distributed without prior written permission.
