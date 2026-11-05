# Portfolio repository instructions

## Layout

- The app is a Vite 6 + React 18 project at the repository root, using the SWC plugin and plain JavaScript/JSX (no TypeScript). Entry: `src/main.jsx` → `App.jsx`.
- The home is already built: a single-surface «Commit Graph Ledger» (see `DESIGN.md` and `.impeccable/surfaces/src-app-jsx.md`). Extend it deliberately; do not reintroduce demo markup or restyle from scratch.
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

## Security Audit

La skill `security-audit` (Cloudflare) está instalada globalmente. Se integra en el flujo de desarrollo así:

### Auditorías automáticas

- `npm install` ejecuta `npm audit` como postinstall para detectar dependencias con vulnerabilidades conocidas.
- Si `npm audit` encuentra vulnerabilidades **alta/crítica**, se muestra un aviso en rojo y se propone un plan de mitigación antes de continuar.

### Auditorías manuales

- `npm run security:audit` — ejecuta una revisión enfocada en las clases de ataque relevantes para este proyecto web:
  - **SUPPLY-CHAIN-AND-RELEASE**: verifica integridad de dependencias y scripts de instalación.
  - **CLIENT-SIDE**: revisa XSS, inyección de scripts, CSP, sanitización de URLs externas.
  - **WEB-PROTOCOL-AND-AUTH**: revisa headers de seguridad, CORS, cookies seguras.
  - **AI-AND-LLM**: revisa si hay integración con APIs externas o LLMs.

### Auditorías periódicas

- **Cada vez que se actualicen dependencias** (`npm update` o `npm install`): se ejecuta `npm audit` automáticamente.
- **Mensual**: revisar manualmente con `npm run security:audit` y reportar los hallazgos en la respuesta.
- **Antes de cada release**: ejecutar auditoría completa y actualizar `docs/deploy.md` con el estado de seguridad.

### Reportes

- Los hallazgos se entregan en la respuesta con formato: clase de ataque, vulnerabilidad, prioridad y fix propuesto. Solo se crea un archivo de informe si el usuario lo pide.
- No se ejecuta auditoría completa (6 fases) sin aprobación explícita del usuario.

## Diseño de UI (Impeccable)

Este proyecto es un portfolio personal: modo de diseño **Experience** (la obra manda, la interfaz se retira). La skill `impeccable` está instalada globalmente y se activa sola en cualquier tarea de UI, anunciándose con `🧩 Skill: impeccable — <motivo>`.

- **Contexto obligatorio:** `PRODUCT.md` (público, objetivo, restricciones) y `DESIGN.md` (tokens, tipografía, componentes) viven en la raíz del repo y se versionan. Si no existen, proponer `/impeccable init` y, tras la primera versión visual, `/impeccable document`.
- **Flujo:** `shape` antes de una sección nueva · `critique` para evaluar · `bolder|quieter|typeset|layout|distill|animate|delight` para ajustes · `polish`/`harden`/`adapt` antes de cerrar · `extract` si un patrón se repite.
- **Antes de commit:** `/design-review` sobre el área tocada; incluir los hallazgos P0–P3 en el resumen del cambio. El detector se ejecuta con `sh ~/.agents/skills/impeccable/scripts/impeccable detect src/` (y la URL del dev server si está activo).
- **Defaults prohibidos:** Inter como tipografía por defecto, gradientes morado-azul, cards anidadas, icon-tile sobre cada heading, texto gris sobre fondo de color, bordes finos con sombra amplia. Si el brief los pide, se documenta la excepción en `DESIGN.md`.
- **Calidad mínima:** contraste AA, foco visible, navegación por teclado, `prefers-reduced-motion`, responsive real (no solo un breakpoint), estados vacío/error/carga.
- **Documentación:** cualquier decisión visual relevante se anota en `docs/styles.md` en el mismo cambio.
- **Telemetría:** `DO_NOT_TRACK=1` o `"telemetry": false` en `.impeccable/config.json`.

## Releases

Use the `git-release` skill (`.opencode/skills/git-release/SKILL.md`) to draft release notes, propose a version, and produce a `gh release create` command. It must not tag, push, or publish without explicit confirmation.

## App conventions and gotchas

- User-facing text is bilingual ES/EN; keep code comments in Spanish.
- `App.jsx` is the single page shell. There is no router, data layer, or backend; add one only when the portfolio needs it, and document the change in `docs/architecture.md`.
- Define visual decisions in `DESIGN.md` and expose them as CSS custom properties in `src/index.css`; do not scatter literal colors or font stacks.
- Do not reintroduce demo components, committed build output, or unrelated editor tasks.
