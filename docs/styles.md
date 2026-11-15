# Styles

## File split

- `src/index.css` — `@font-face` autoalojados, tokens, reset/base, foco, selección, `prefers-reduced-motion`.
- `src/App.css` — barra, rail, hero, paneles, secciones y responsive.
- Ambas hojas se cargan con `<link rel="stylesheet">` en `index.html` (la CSP `style-src 'self'` bloquea los `<style>` que Vite inyecta cuando el CSS se importa desde JS).

CSS plano con custom properties: sin framework, preprocesador, CSS Modules, Tailwind ni CSS-in-JS. Cualquier librería de estilos debe justificarse en `DESIGN.md` antes de entrar.

## Tokens

Definidos en `:root` dentro de `src/index.css`. Los componentes no repiten literales. El estrato oscuro duplica el bloque de tokens bajo `:root[data-theme='dark']` y bajo `@media (prefers-color-scheme: dark) :root:not([data-theme='light'])` (los dos deben mantenerse sincronizados).

| Grupo | Claro | Oscuro |
| --- | --- | --- |
| Superficie | `--paper #f7f6f2`, `--paper-sunk #f2f0ea`, `--surface #fff` | `#161712`, `#101109`, `#1b1c15` |
| Tinta | `--ink #111`, `--ink-dim #4c4f49`, `--ink-soft #5a5d57`, `--ink-faint #6b6e67` | `#f2f0ea`, `#c9c7bd`, `#a9a79d`, `#8b8980` |
| Reglas | `--rule #d7d5cd`, `--rule-soft #e2e0d8`, `--rule-strong #b9b7ae`, `--rule-dash #c3c1b8` | `#33342c`, `#26271f`, `#4a4b43`, `#3f4038` |
| Rol estructura | `--blue #2457d6` | `#6f9bff` |
| Rol evidencia | `--green #2e7d5b` | `#4fbb8b` |
| Rol atención | `--orange #d94f2b`, `--orange-ink #b03c1d` | `#ff7a52`, `#ff9a78` |
| Derivados | `--on-accent #fff`, `--green-strong #245f45`, `--blueprint #9a9d96` | `#0e0f0b`, `#6acb9f`, `#5c5e54` |
| Diff | `--add-bg/ink #e5f1e8/#1f5b3e`, `--del-bg/ink #fbe7e2/#8a2f1a` | `#1a2c22/#6acb9f`, `#2c1b14/#ff9a78` |
| Conmutador | `--switch-shift: 0` | `100%` |
| Tipografía | `--font-display`, `--font-mono`, `--text-xs/sm/base/lede/h2/h1` | (igual) |
| Métrica | `--bar-h 3.5rem`, `--rail-w 21.375rem`, `--pad-x`, `--measure 40rem` | (igual) |

El naranja puro `--orange` solo se usa en nodos, badges y filetes (elementos no textuales). Para texto sobre papel, `--orange-ink`. Las alfas de azul (carril sin rellenar y anillo del nodo activo) usan `color-mix(in srgb, var(--blue) N%, transparent)`, así heredan el acento de cada tema.

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

- El tema viaja en `data-theme` en `<html>`: `public/boot.js` lo pre-pinta (`?theme=` > `localStorage 'portfolio:theme'` > `prefers-color-scheme`) y `src/theme.js` alterna. No inyectar `<style>` ni usar el atributo `style=`: la CSP es `style-src 'self'` y los tokens viven solo en `src/index.css`. La manipulación de estilos vía CSSOM (`el.style.setProperty`) sí está permitida.
- El progreso del carril del rail (`--rail-progress`) se escribe con `useLayoutEffect` en `CommitRail.jsx`, no con React `style`.
- El conmutador de tema es una pill de dos caras (`.switch`, sol/luna SVG con `currentColor`); las caras activas se colorean con `--paper` sobre el pulgar `--ink`. Iconos siempre dibujados, nunca glifos Unicode.
- Las cadenas visibles son bilingües ES/EN y viven en `src/content.js`; los comentarios de código, en español.
- El detector de Impeccable no evalúa reglas de elemento con `detect src/`; usar `detect --cdp <puerto>` contra el dev server (ver `docs/testing.md`).
- Si cambian tokens, tipografía, breakpoints o clases, actualizar este archivo y `DESIGN.md` en el mismo cambio.
