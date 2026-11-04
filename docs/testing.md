# Testing and verification

## Current state

There is no automated test suite, test runner, or `test` script. `package.json` exposes `dev`, `build`, `lint`, `preview`, `postinstall`, and `security:audit`.

## Standard checks

Run these from the repository root:

```bash
npm install       # installs dependencies; postinstall runs npm audit
npm run lint      # ESLint 9, JS/JSX only, ignores dist
npm run build     # production build; catches import and bundling errors
```

For a focused lint run: `npx eslint src/App.jsx`.

Do not claim that tests pass: there are none.

## Manual smoke test

Run `npm run dev` and verify:

- The default Vite + React page renders without console errors.
- The layout is usable at 320px width and on a normal desktop viewport.
- Toggle the OS light/dark mode and check that text remains readable.
- Keyboard navigation reaches every interactive element with a visible focus ring.

## UI review gate

Before committing visible UI changes, run `/design-review` and include the P0–P3 findings in the change summary. The deterministic detector runs with:

```bash
sh ~/.agents/skills/impeccable/scripts/impeccable detect src/
```

Scan the running dev server URL as well when a browser is reachable; otherwise state that element-level rules did not run.

## When automated tests are added

1. Add the runner and a `test` script to `package.json`, updating the lockfile with `npm install`.
2. Establish a test location convention (colocated or `src/__tests__/`) and document it here.
3. Replace the "no automated tests" statement above with the exact command for the full suite and for one test file.
4. Update `AGENTS.md` if the required verification order changes.
