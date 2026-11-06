# Portfolio

Personal portfolio built with React 19 and Vite 8. The project is reset to a clean Vite scaffold; the visual work starts from scratch.

## Stack

- React 19 (`react`, `react-dom` 19.3.1)
- Vite 8 with `@vitejs/plugin-react-swc`
- Plain JavaScript/JSX (no TypeScript)
- ESLint 9 (flat config)

## Getting started

```bash
npm install
npm run dev
```

The dev server prints the local URL.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build into `dist/` |
| `npm run lint` | ESLint over JS/JSX |
| `npm run preview` | Serve the production build |
| `npm run security:audit` | Dependency audit plus a quick scan for external HTTP calls |

`npm install` runs `npm audit` as a `postinstall` hook.

## Design workflow

`PRODUCT.md` (product truth) and `DESIGN.md` (tokens, type, components) live at the repository root and are versioned. Before building a new surface, run `/impeccable init` and `/impeccable shape`; before committing UI changes, run `/design-review` plus `/code-review` and `/security-review`.

## Documentation

`docs/` contains the living notes on architecture, testing, styles, and deploy.
