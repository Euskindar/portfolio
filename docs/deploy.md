# Build and deploy

## Current state

- No CI workflow, deploy script, or hosting config is checked in.
- Git remote: `https://github.com/Euskindar/portfolio.git`, branch `main`.
- The app is client-only; no environment variables or backend services are required.
- `dist/` is gitignored. Do not commit build output.

## Build locally

Run from the repository root:

```bash
npm ci
npm run build
npm run preview   # serves dist/ locally; default http://localhost:4173
```

`npm run build` writes `dist/` with hashed assets.

## Static hosting

Upload the contents of `dist/` to any static host (GitHub Pages, Netlify, S3, nginx, etc.).

- Vite's default `base` is `/`. This only works when the site is served from the domain root.
- For a subpath (for example `https://<user>.github.io/portfolio/`), set `base: '/portfolio/'` in `vite.config.js` and rebuild.
- No SPA rewrite is needed today because there is no client-side router. If a router is added, configure the host's history fallback and update this file.
- No deploy automation exists. If you add GitHub Actions or another provider, document the workflow, trigger branch, build command, output directory, and required secrets here.

Keep this file current whenever build settings, hosting, or deployment automation change.
