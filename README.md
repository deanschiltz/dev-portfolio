# Dean Schiltz — Developer Portfolio

Personal, single-page developer portfolio. Recruiters get a fast scan of who I am, what I build, and how to reach me. The site is a static React app with no backend.

**Live site:** not deployed yet — after Cloudflare Pages is connected, put the `*.pages.dev` (or custom domain) URL here and in `src/data/profile.ts` (`siteUrl`).

## Tech stack

| Piece                       | Why it is here                                           |
| --------------------------- | -------------------------------------------------------- |
| React + TypeScript (strict) | UI components and type-safe content                      |
| Vite                        | Dev server and static production build                   |
| Tailwind CSS v4             | Layout, spacing, and theme tokens                        |
| Motion (`motion/react`)     | Scroll/entrance animation, with `prefers-reduced-motion` |
| ESLint + Prettier           | Lint and format                                          |
| Vitest                      | Small unit tests (class-name helper)                     |
| GitHub Actions              | Typecheck, lint, test, and build on every PR             |
| Cloudflare Pages            | Free static hosting, HTTPS, and PR preview URLs          |

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
public/          Resume PDF, OG image, robots.txt, sitemap.xml, Cloudflare _headers
```

- Add a project: append an object in `src/data/projects.ts`.
- Replace the headshot: drop `headshot.jpg` (studio/black backdrop) or a **transparent PNG** at `src/assets/images/headshot.png`, update the import in `src/data/profile.ts`, and set `headshotAlt`. A PNG from [remove.bg](https://www.remove.bg/) gives the clean floating cutout look; a black-backdrop JPEG uses the built-in studio panel in the Hero.
- Replace the resume: put the PDF at `public/resume.pdf`.
- Change the public URL: update `siteUrl` in `src/data/profile.ts`, then the same value in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

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

Run that against `npm run preview` after a production build. A local headless check on this repo scored **Performance 98 / Accessibility 100 / SEO 100 / Best Practices 100**. Re-run after content or image changes.

## Deployment path

```text
Local development (Vite)
        ↓
Git commit + pull request
        ↓
GitHub Actions CI (typecheck, lint, test, build)
        ↓
Cloudflare Pages preview URL on the PR
        ↓
Merge to main (required checks green)
        ↓
Cloudflare Pages production deploy
        ↓
Live site (HTTPS)
```

GitHub Actions is the **quality gate**. It does not publish the site. Cloudflare Pages builds `dist` and serves it.

CI workflow: `.github/workflows/ci.yml`

1. Checkout
2. Setup Node from `.nvmrc`
3. `npm ci`
4. `npm run typecheck`
5. `npm run lint`
6. `npm test`
7. `npm run build`

Protect `main` so this workflow must pass before merge.

## Cloudflare Pages setup

1. Push this repo to GitHub (`deanschiltz/dev-portfolio` or your fork).
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository.
4. Production branch: `main`
5. Build command: `npm run build`
6. Output directory: `dist`
7. Node version: `22` (match `.nvmrc`)
8. Save and deploy.

Pull requests get a unique `*.pages.dev` preview URL. Cloudflare sends `X-Robots-Tag: noindex` on previews so they do not compete with production in search.

Optional: project **Metrics → Enable** Cloudflare Web Analytics (privacy-first, no cookie banner).

### Custom domain (later)

Add the domain on the same Pages project, point DNS at Cloudflare, then update `siteUrl` in `src/data/profile.ts` plus the canonical / Open Graph / sitemap / robots URLs. No app rewrite.

## Backup host: GitHub Pages

If Cloudflare is unavailable, publish with GitHub Pages and `actions/deploy-pages`.

If the site is served from `https://USERNAME.github.io/dev-portfolio/` (a project site, not a custom domain), set Vite `base` to `/dev-portfolio/` in `vite.config.ts`. A user site (`USERNAME.github.io`) or a custom domain can keep `base: '/'`.

## License

Copyright © 2026 Dean Schiltz. All rights reserved.

No part of this repository may be copied, modified, or distributed without prior written permission.
