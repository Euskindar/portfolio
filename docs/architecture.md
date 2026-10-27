# Architecture

## Overview

This repository is a client-only single-page React app built with Vite. There is no router, backend, API layer, global state library, or persistence. The page renders a fixed list of X/Twitter-style follow cards.

## Runtime flow

1. `index.html` loads `/src/main.jsx` into `#root`.
2. `main.jsx` imports the global stylesheet, then mounts `<App />` inside `<StrictMode>`.
3. `App.jsx` renders four `<TwitterFollowCard>` instances with hardcoded `userName` and `user` values.
4. Each card owns its `isFollowed` state and toggles its button label between "Seguir" and "No seguir".
5. Avatars are requested at runtime from `https://unavatar.io/<userName>`.

## File map

| Path | Responsibility |
| --- | --- |
| `index.html` | Vite HTML entry; `#root` and `/src/main.jsx` |
| `src/main.jsx` | React root, `StrictMode`, global CSS import |
| `src/App.jsx` | Page shell and hardcoded account list |
| `src/TwitterCardComponent.jsx` | `TwitterFollowCard` component and local follow state |
| `src/App.css` | Card and animated follow-button styles |
| `src/index.css` | Global theme, body layout, base element styles |
| `vite.config.js` | Vite configuration with the React SWC plugin |
| `eslint.config.js` | ESLint 9 flat config for JS/JSX |

## Component contract

`TwitterFollowCard({ userName, user })`:

- `userName` — handle used for `@handle` and the avatar URL.
- `user` — display name.
- Local state `isFollowed` starts as `false`; the button reads "No seguir" when true.
- `App.jsx` passes `isFollowed={false}`, but the component does not accept or use that prop. Treat it as dead until the contract is deliberately changed.

## Boundaries and extension notes

- No routing: there is a single view. Adding routes requires a router and a static-host fallback; update `docs/deploy.md` at the same time.
- No data layer: account data lives in `App.jsx`. Keep it there unless a real data source is introduced.
- `TwitterCardComponent.jsx` imports `prop-types`, but `package.json` does not declare it. It currently resolves because npm hoists it from `eslint-plugin-react`; declare it explicitly before changing the dependency layout.
- Update this file when entrypoints, component contracts, data flow, or major dependencies change.
