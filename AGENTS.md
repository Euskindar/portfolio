# Portfolio repository instructions

## Layout

- The only app is `portfolio/` — Vite 6 + React 18 via SWC, plain JavaScript/JSX, no TypeScript. Entry: `portfolio/src/main.jsx` → `App.jsx`; the reusable card is `TwitterCardComponent.jsx`.
- `portfolio/README.md` is the stock Vite template and does not describe this app.
- `opencode_test/` is an empty scratch folder; don't scaffold a project there.
- No CI or deploy config is checked in.

## Commands (run inside `portfolio/`)

- `npm install` — installs dependencies; `node_modules/` and `dist/` are gitignored.
- `npm run dev` — Vite dev server.
- `npm run lint` — ESLint 9 flat config over JS/JSX, ignores `dist`.
- `npm run build` — production build into `dist/`.
- `npm run preview` — serve the production build.
- There is no test or typecheck script. For a focused check, run `npx eslint src/<file>` from `portfolio/`; lint and build are the only verification steps available.

## App conventions and gotchas

- Keep user-facing text and code comments in Spanish (e.g. "Seguir" / "No seguir"); this is a Spanish-language portfolio.
- `TwitterCardComponent.jsx` exports `TwitterFollowCard` despite the filename, and loads avatars from `https://unavatar.io/<userName>` at runtime, so avatars need network access.
- That component imports `prop-types`, but `package.json` does not declare it; it currently resolves from the hoisted `eslint-plugin-react` dev dependency. Add it explicitly if dependency resolution changes.
- `App.jsx` hardcodes the displayed accounts; there is no router, data layer, or backend. Keep changes within that simple structure unless asked otherwise.
