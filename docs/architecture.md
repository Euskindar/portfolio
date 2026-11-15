# Architecture

## Overview

Aplicación React de una sola página, cliente puro, construida con Vite 8. No hay router, backend, capa de datos, estado global ni persistencia más allá de la preferencia de idioma en `localStorage`.

La home es una superficie única: un perfil de repositorio con seis secciones ancladas. Toda la navegación es intra-página.

## Runtime flow

1. `index.html` carga `/boot.js` (`defer`) y `/src/main.jsx` en `#root`.
2. `boot.js` pre-pinta el tema en `<html>` antes del primer render: `?theme=` → `localStorage 'portfolio:theme'` → `prefers-color-scheme`, y sincroniza los metas `theme-color` (sin CSS inyectado; los tokens viven en `src/index.css`).
3. `index.html` carga `src/index.css` y `src/App.css` por `<link>` (compatible con la CSP) y `main.jsx` monta `<App />` en `<StrictMode>`.
4. `App.jsx` resuelve el idioma (`?lang=` → `localStorage` → `es`) y el tema (lee `data-theme` de `<html>`), renderiza la barra, el rail y las seis secciones.
5. Un `IntersectionObserver` sigue la sección visible y actualiza `activeId`; el rail refleja progreso y estado activo con `aria-current` (el progreso se escribe como custom property vía CSSOM por la CSP).
6. El cambio de idioma actualiza `content[lang]`, `document.documentElement.lang` y `document.title`, y guarda la preferencia. El conmutador de tema llama a `EuskindarTheme.toggle()` (`src/theme.js`), que alterna `data-theme`, persiste en `localStorage` y sincroniza los metas.

## File map

| Path | Responsibility |
| --- | --- |
| `index.html` | Entrada HTML: CSP, `#root`, `<link>` a las dos hojas CSS, metadatos, dos metas `theme-color` con media, favicon y preload de fuente |
| `public/boot.js` | Pre-pintado del tema en `<html>` antes del primer render; compartición de estado con `src/theme.js` |
| `src/main.jsx` | Raíz React, `StrictMode`, import del CSS global |
| `src/App.jsx` | Composición de la página, idioma, tema (estado local), observador de sección activa, copia de email |
| `src/theme.js` | `EuskindarTheme`: alterna `data-theme`, persiste la preferencia y sincroniza los metas `theme-color` |
| `src/content.js` | Única fuente de contenido ES/EN, `links` (email, GitHub, LinkedIn, CV) y `sections` (id, hash, tipo, nodo) |
| `src/components/RepoBar.jsx` | Barra de repositorio, conmutador ES/EN y switch de tema (pill de dos caras con SVG) |
| `src/components/CommitRail.jsx` | Grafo/índice de commits con carril de progreso |
| `src/components/Sections.jsx` | `SectionHead`, `PendingPanel`, `ProjectCase` |
| `src/App.css` | Estilos de estructura y componentes |
| `src/index.css` | `@font-face`, tokens, base, accesibilidad y reduced-motion |
| `public/fonts/` | Archivo y Azeret Mono autoalojadas (woff2, subsets latin/latin-ext) |
| `public/favicon.svg` | Marca gráfica del grafo |
| `vite.config.js` | Configuración de Vite con el plugin React SWC |
| `eslint.config.js` | ESLint 9 flat config (JS/JSX; `react/prop-types` desactivado: no hay PropTypes ni TS) |

## Contrato de contenido

`src/content.js` es el punto único de edición de datos reales:

- `content.es` y `content.en` deben tener **las mismas claves**. Si se añade una cadena, se añade en ambos idiomas.
- `links` es independiente del idioma. Un enlace vacío (`''`) no se renderiza: LinkedIn y CV se muestran como pendientes hasta que existan.
- `sections` define el orden de lectura, el hash y el color de nodo de cada sección. El rail y el observador se derivan de ahí.
- `projects.items` y la lista de experiencia arrancan vacíos; la UI detecta el vacío y muestra `PendingPanel`. No rellenar con datos de ejemplo.
- Los textos se aplanan por objeto (`t.hero`, `t.projects`, …). `CONTENT_KEY` en `App.jsx` mapea id de sección → clave de contenido.

## Boundaries and extension notes

- Sin router. Añadir rutas exige un router y fallback de hosting estático; actualizar `docs/deploy.md` en el mismo cambio.
- Sin capa de datos. El contenido es estático por diseño; si algún día llega de una API, documentar el contrato aquí.
- Las decisiones visuales viven en `DESIGN.md`; la verdad de producto en `PRODUCT.md`; la superficie y su contrato de dirección en `.impeccable/surfaces/src-app-jsx.md`.
- Actualizar este archivo cuando cambien entrypoints, contratos de componente, flujo de datos o dependencias mayores.
