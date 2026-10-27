# Portfolio repository instructions

## Layout

- The app is a Vite 6 + React 18 project at the repository root, using the SWC plugin and plain JavaScript/JSX (no TypeScript). Entry: `src/main.jsx` → `App.jsx`; the reusable card is `src/TwitterCardComponent.jsx`.
- `opencode_test/` is an empty scratch folder; don't scaffold a project there.
- `docs/` contains the living architecture, testing, styles, and deploy notes.

## Safety and workflow

- Do not set up development servers or create builds unless asked to do so.
- Do not delete files or folders without confirmation.
- Do not install dependencies without asking.
- Do not perform irreversible actions without confirmation.
- Default to proposing actions, not executing them. When in doubt, stop and ask.

## Git and GitHub

`git` and the GitHub CLI (`gh`) are available and `gh` is authenticated. In this environment `gh` is not on the shell PATH; use `/c/Program Files/GitHub CLI/gh.exe` (Git Bash for Windows) or add it to PATH. Verify with `gh auth status`.

- Read-only inspection is allowed when it helps answer the request: `git status`, `git log`, `git diff`, `git show`, `gh pr list/view`, `gh release list/view`, `gh auth status`.
- Before any command that changes local or remote state — `git add`, `git commit`, `git push`, `git tag`, `git reset`, `git branch -d`, `gh release create`, `gh pr merge`, `gh repo edit`, or a write-method `gh api` call — show the exact command and wait for explicit approval. Approval applies to that command only; confirm later steps separately.
- Never run `gh auth token` or print credentials. Do not put tokens in files, commits, or chat.
- Never force-push, rewrite published history, delete remote branches or tags, or change repository visibility or settings without explicit confirmation naming the target.
- If `gh` is unauthenticated or a command fails, report the error and give the user the exact command to run. Do not invent output or retry destructive commands.

## Commands (run from the repository root)

- `npm install` — installs dependencies; use `npm ci` for a clean lockfile-exact install. `node_modules/` and `dist/` are gitignored.
- `npm run dev` — Vite dev server.
- `npm run lint` — ESLint 9 flat config over JS/JSX, ignores `dist`.
- `npm run build` — production build into `dist/`.
- `npm run preview` — serve the production build.
- There is no test or typecheck script. For a focused check, run `npx eslint src/<file>` from the repository root. Currently lint and build are the only verification steps; see `docs/testing.md` before claiming a change is verified.

## Documentation

Keep `docs/` current in the same change as the code it describes:

- `docs/architecture.md` — entrypoints, component contracts, and data flow.
- `docs/testing.md` — standard checks, manual smoke test, and test-runner status.
- `docs/styles.md` — CSS files, theme, class conventions, and visual gotchas.
- `docs/deploy.md` — build output and hosting constraints.

If a change affects one of these areas, update the matching file. Don't leave docs describing removed code or scripts that do not exist.

## Releases

Use the `git-release` skill (`.opencode/skills/git-release/SKILL.md`) to draft release notes, propose a version, and produce a `gh release create` command. It must not tag, push, or publish without explicit confirmation.

## App conventions and gotchas

- Keep user-facing text and code comments in Spanish (e.g. "Seguir" / "No seguir"); this is a Spanish-language portfolio.
- `TwitterCardComponent.jsx` exports `TwitterFollowCard` despite the filename, and loads avatars from `https://unavatar.io/<userName>` at runtime, so avatars need network access.
- That component imports `prop-types`, but `package.json` does not declare it; it currently resolves from the hoisted `eslint-plugin-react` dev dependency. Add it explicitly if dependency resolution changes.
- `App.jsx` hardcodes the displayed accounts; there is no router, data layer, or backend. Keep changes within that simple structure unless asked otherwise.
