# Testing and verification

## Current state

Hay suite automatizada con **Vitest 5 + Testing Library** (jsdom): script `test` (`vitest`, watch) y `npx vitest run` (una pasada). `package.json` expone `dev`, `build`, `lint`, `preview`, `test`, `audit:a11y`, `gwd:audit`, `postinstall`, `security:audit` y `review`.

Los tests se ejecutan en CI (`.github/workflows/ci.yml`): `npm run lint` → `npx vitest run` → `npm run build` → `npm run security:audit`.

Las comprobaciones reales de esta superficie son: tests, lint, build, detector de UI contra el navegador y smoke test manual.

## Standard checks

Desde la raíz del repositorio:

```bash
npm test          # Vitest en watch (desarrollo)
npx vitest run    # una pasada, como en CI
npm run lint      # ESLint 9, JS/JSX, ignora dist
npm run build     # build de producción; detecta imports y bundling
```

Lint focalizado: `npx eslint src/App.jsx`.

## Smoke test manual

Con `npm run dev`, verificar:

- La home carga sin errores de consola y muestra la barra, el rail y las seis secciones.
- El rail marca la sección visible (`aria-current`) y el carril se rellena al hacer scroll.
- El conmutador ES/EN cambia todo el texto, `document.title` y `document.documentElement.lang`; la preferencia persiste al recargar.
- `?lang=en` abre la versión inglesa sin depender de `localStorage`.
- Hover de botones/enlaces y foco de teclado visibles en todos los interactivos.
- Copiar email funciona (con fallback si `navigator.clipboard` no está disponible) y el texto vuelve a «Copiar dirección» tras ~2 s.
- LinkedIn y CV se muestran como pendientes cuando `links` está vacío.
- Sin scroll horizontal de 360px a 1440px+.
- `prefers-reduced-motion` desactiva scroll suave y animaciones.

## UI review gate

Antes de commitear cambios visibles: `/design-review` y hallazgos P0–P3 en el resumen.

El detector por ficheros (`detect src/`) **no cubre reglas de elemento** (tamaño de texto, viudas, contraste medido). Para eso, escanear el dev server por CDP:

```bash
# Arrancar Edge headless con depuración remota
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
  --headless=new --disable-gpu --remote-debugging-port=9222 \
  --remote-allow-origins=* --window-size=1440,900 "http://127.0.0.1:5173/"

sh ~/.agents/skills/impeccable/scripts/impeccable detect --cdp 9222 --json
```

Repetir con `--window-size=492,900` en otro puerto (`9223`) para el pase estrecho. Edge headless no baja de ~492px de ancho CSS; para 390px usar un iframe temporal y borrarlo antes de commitear.

Criterio de cierre: 0 hallazgos primarios en ambos pases. Los avisos (advisory) no bloquean.

## Automated tests

Convención actual:

- Ubicación: `src/__tests__/`, ficheros `*.test.jsx`.
- Entorno: jsdom (`vitest.config.ts`) con `setupTests.js`, que stubbea `IntersectionObserver` (lo usan el rail y el observer de secciones).
- Se asertan textos reales renderizados por la UI; el test smoke actual (`App.test.jsx`) cubre que `App` renderiza (matchea `portfolio` en la RepoBar, `content.js` → `repo.name`).

Al añadir tests nuevos:

1. Reutilizar el entorno jsdom y los stubs de `setupTests.js`; no duplicar stubs por fichero.
2. Mantener `npx vitest run` en verde antes de commitear (CI lo ejecuta y bloquea el merge).
3. Actualizar esta guía y `docs/architecture.md` si cambia el orden de verificación obligatorio.
