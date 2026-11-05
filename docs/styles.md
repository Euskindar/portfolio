# Styles

## File split

- `src/index.css` — `@font-face` autoalojados, tokens, reset/base, foco, selección, `prefers-reduced-motion`.
- `src/App.css` — barra, rail, hero, paneles, secciones y responsive.
- `main.jsx` importa `index.css`; `App.jsx` importa `App.css`.

CSS plano con custom properties: sin framework, preprocesador, CSS Modules, Tailwind ni CSS-in-JS. Cualquier librería de estilos debe justificarse en `DESIGN.md` antes de entrar.

## Tokens

Definidos en `:root` dentro de `src/index.css`. Los componentes no repiten literales.

| Grupo | Tokens |
| --- | --- |
| Superficie | `--paper #f7f6f2`, `--paper-sunk #f2f0ea`, `--surface #fff` |
| Tinta | `--ink #111`, `--ink-dim #4c4f49`, `--ink-soft #5a5d57`, `--ink-faint #6b6e67` |
| Reglas | `--rule #d7d5cd`, `--rule-soft #e2e0d8` |
| Rol estructura | `--blue #2457d6` |
| Rol evidencia | `--green #2e7d5b` |
| Rol atención | `--orange #d94f2b`, `--orange-ink #b03c1d` |
| Diff | `--add-bg`, `--add-ink`, `--del-bg`, `--del-ink` |
| Tipografía | `--font-display`, `--font-mono`, `--text-xs/sm/base/lede/h2/h1` |
| Métrica | `--bar-h 3.5rem`, `--rail-w 21.375rem`, `--pad-x`, `--measure 40rem` |

El naranja puro `--orange` solo se usa en nodos, badges y filetes (elementos no textuales). Para texto sobre papel, `--orange-ink`.

## Tipografía

Autoalojada en `public/fonts/`, servida desde el propio host. Sin peticiones a Google Fonts en runtime.

- **Archivo** variable 400–800, subsets `latin` y `latin-ext`. Preload de `archivo-400-800-latin.woff2` en `index.html`.
- **Azeret Mono** 400 y 500, mismos subsets.

Cada `@font-face` declara `unicode-range`, así el navegador solo descarga el subset que necesita. `font-display: swap`.

Párrafos con `text-wrap: pretty`; titulares con `text-wrap: balance`. El detector de UI marca viudas y texto funcional por debajo de 11px: `--text-xs` (0.6875rem) es el suelo.

## Clases

Convención BEM abreviada (`bloque__elemento--variante`).

- Barra: `.bar`, `.bar__crumbs`, `.bar__owner`, `.bar__repo`, `.bar__slash`, `.bar__count`, `.bar__file`, `.bar__spacer`, `.lang`, `.lang__btn`.
- Chips/tags: `.chip`, `.chip--main`, `.chip--type`, `.tag`.
- Rail: `.rail`, `.rail__title`, `.rail__hint`, `.rail__list`, `.rail__lane`, `.rail__lane-fill`, `.commit`, `.commit__dot--{blue|green|orange|gray}`, `.commit__hash`, `.commit__msg`, `.commit__sub`.
- Hero: `.hero`, `.hero__path`, `.hero__path-file`, `.hero__title`, `.hero__lede`, `.hero__panels`, `.actions`.
- Botones: `.btn`, `.btn--solid`, `.btn--contact`, `.btn--muted`, `.btn__note`.
- Paneles y diff: `.panel`, `.panel__head`, `.diff`, `.diff__line--{add|del}`, `.branches`, `.tags`.
- Secciones: `.section`, `.section--release`, `.sec-head`, `.sec-head__meta`, `.sec-head__title`, `.sec-head__intro`.
- Estados: `.pending`, `.pending__badge`, `.pending__title`, `.pending__note`, `.pending__action`.
- Casos: `.cases`, `.case`, `.case__head`, `.case__branch`, `.case__title`, `.case__fields`, `.case__row`, `.case__links`.
- Stack y método: `.stack`, `.stack__group`, `.stack__label`, `.stack__items`, `.stack__note`, `.method`, `.method__step`, `.method__n`, `.method__label`, `.method__text`.
- Contacto: `.contact__lede`, `.contact__actions`, `.contact__list`, `.contact__row`, `.contact__pending`, `.link`, `.foot`, `.foot__top`.

## Breakpoints

| Ancho | Cambios |
| --- | --- |
| ≤ 1180px | Stack de 4 a 2 columnas |
| ≤ 960px | El rail lateral pasa a tira horizontal sticky; hero y contacto a una columna |
| ≤ 640px | Se ocultan metadatos secundarios de la barra; acciones a ancho completo; filas `dl` a una columna |

El layout no debe generar scroll horizontal. Comprobado hasta 492px de ancho CSS (límite del Edge headless disponible).

## Accesibilidad y movimiento

- Foco visible global: `outline: 2px solid var(--blue)` con offset 3px. Nunca se elimina.
- `prefers-reduced-motion`: desactiva `scroll-behavior` y reduce animaciones/transiciones a 0.001ms.
- El estado activo del rail usa `aria-current`, no solo color.
- Todo texto de apoyo está por encima de 4.5:1 sobre su superficie.

## Gotchas

- No hay modo oscuro por decisión de dirección: el papel es la identidad. No añadir `prefers-color-scheme`.
- Las cadenas visibles son bilingües ES/EN y viven en `src/content.js`; los comentarios de código, en español.
- El detector de Impeccable no evalúa reglas de elemento con `detect src/`; usar `detect --cdp <puerto>` contra el dev server (ver `docs/testing.md`).
- Si cambian tokens, tipografía, breakpoints o clases, actualizar este archivo y `DESIGN.md` en el mismo cambio.
