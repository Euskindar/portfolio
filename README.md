# Portfolio

A small, client-only portfolio built with React and Vite. It renders a set of X/Twitter-style follow cards with a local follow toggle.

## Stack

- React 18
- Vite 6 with `@vitejs/plugin-react-swc`
- Plain JavaScript/JSX (no TypeScript)
- ESLint 9

## Getting started

```bash
npm install
npm run dev
```

The dev server prints the local URL.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run lint` | Run ESLint over JS/JSX |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |

There is no test suite yet; see [`docs/testing.md`](docs/testing.md).

## Layout

```text
.
├── AGENTS.md
├── docs/
├── public/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── TwitterCardComponent.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Documentation

- [Architecture](docs/architecture.md)
- [Testing](docs/testing.md)
- [Styles](docs/styles.md)
- [Build and deploy](docs/deploy.md)

## Notes

- Avatars are loaded at runtime from `https://unavatar.io/<userName>`.
- Follow state is local to each card; there is no backend or persistence.
- The follow button is intentionally animated and styled in `src/App.css`.
