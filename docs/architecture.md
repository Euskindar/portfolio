# Architecture

## Overview

Client-only single-page React app built with Vite. The repository is currently a fresh Vite + React scaffold: no router, backend, API layer, global state library, or persistence. New structure should be introduced deliberately and documented here in the same change.

## Runtime flow

1. `index.html` loads `/src/main.jsx` into `#root`.
2. `main.jsx` imports the global stylesheet and mounts `<App />` inside `<StrictMode>`.
3. `App.jsx` renders the page shell. It is the place to compose sections until a real structure exists.

## File map

| Path | Responsibility |
| --- | --- |
| `index.html` | Vite HTML entry; `#root` and `/src/main.jsx` |
| `src/main.jsx` | React root, `StrictMode`, global CSS import |
| `src/App.jsx` | Page shell and section composition |
| `src/App.css` | Component-level styles |
| `src/index.css` | Global theme, tokens, base element styles |
| `vite.config.js` | Vite configuration with the React SWC plugin |
| `eslint.config.js` | ESLint 9 flat config for JS/JSX |

## Boundaries and extension notes

- No routing yet. Adding routes requires a router and a static-host fallback; update `docs/deploy.md` at the same time.
- No data layer. Introduce one only when a real data source exists, and document its contract here.
- Design decisions belong in `DESIGN.md`; product truth belongs in `PRODUCT.md`.
- Update this file when entrypoints, component contracts, data flow, or major dependencies change.
