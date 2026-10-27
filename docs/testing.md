# Testing and verification

## Current state

There is no automated test suite, test runner, or `test` script. `package.json` exposes only `dev`, `build`, `lint`, and `preview`.

## Standard checks

Run these from the repository root:

```bash
npm ci            # reproducible install from package-lock.json
npm run lint      # ESLint 9, JS/JSX only, ignores dist
npm run build     # production build; catches import and bundling errors
```

`npm run lint` and `npm run build` both passed when this document was written. For a focused lint run:

```bash
npx eslint src/App.jsx
npx eslint src/TwitterCardComponent.jsx
```

Do not claim that tests pass: there are none.

## Manual smoke test

Run `npm run dev` (or build and use `npm run preview`), then verify:

- Four cards render: midudev, pheralb, elonmusk, vxnder.
- Avatars load from `https://unavatar.io/<handle>`; this requires network access.
- Each "Seguir" button toggles to "No seguir" and back on click.
- The follow button hover animation runs.
- The layout is centered and usable at 320px width and on a normal desktop viewport.
- Toggle the OS light/dark mode. Card text is currently hardcoded white, so light mode may have contrast problems; see `docs/styles.md`.

## When automated tests are added

No test dependencies are installed. If you add Vitest/React Testing Library or another runner:

1. Add the runner and a `test` script to `package.json`, updating the lockfile with `npm install`.
2. Establish a test location convention (colocated or `src/__tests__/`) and document it here.
3. Replace the "no automated tests" statement above with the exact command for the full suite and for one test file.
4. Update `AGENTS.md` if the required verification order changes.

Keep this file current whenever scripts, test dependencies, or smoke-test steps change.
