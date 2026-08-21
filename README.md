# Dean Schiltz — Developer Portfolio

Personal, single-page developer portfolio. Recruiters get a fast scan of who I am, what I build, and how to reach me. The site is a static React app with no backend.

**Live site:** https://deanschiltz.github.io/dev-portfolio/ (after the first GitHub Pages deploy)

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
public/          Resume PDF, OG image, robots.txt, sitemap.xml
```

- Add a project: append an object in `src/data/projects.ts`.
- Replace the headshot: drop a **transparent PNG** at `src/assets/images/headshot.png`, update the import in `src/data/profile.ts`, and set `headshotAlt`.
- Replace the resume: put the PDF at `public/resume.pdf`.
- Change the public URL: update `siteUrl` in `src/data/profile.ts`, then the same value in `index.html`, `public/robots.txt`, and `public/sitemap.xml`. If you move to a custom domain at the site root, also set Vite `base` to `'/'` in `vite.config.ts`.

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

`npm run preview` serves the production build with the GitHub Pages base path (`/dev-portfolio/`). Open the URL Vite prints (it includes that path).

Optional visual check before launch (Chrome required):

```bash
npx lighthouse http://localhost:4173/dev-portfolio/ --only-categories=performance,accessibility,seo --view
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
Live site: https://deanschiltz.github.io/dev-portfolio/
```

### Enable GitHub Pages (one-time)

1. Open the repo on GitHub: https://github.com/deanschiltz/dev-portfolio
2. Go to **Settings → Pages**
3. Under **Build and deployment → Source**, choose **GitHub Actions**
4. Push to `main` (or re-run the **Deploy GitHub Pages** workflow under the **Actions** tab)

After the workflow finishes, the site is live at:

**https://deanschiltz.github.io/dev-portfolio/**

CI workflow: `.github/workflows/ci.yml`  
Deploy workflow: `.github/workflows/deploy-pages.yml`

### Custom domain (optional, later)

In **Settings → Pages → Custom domain**, enter your domain and follow GitHub’s DNS instructions. When the site is served from the domain root (no `/dev-portfolio/` path), set `base: '/'` in `vite.config.ts` and update `siteUrl` plus the SEO URLs listed above.

## License

Copyright © 2026 Dean Schiltz. All rights reserved.

No part of this repository may be copied, modified, or distributed without prior written permission.
