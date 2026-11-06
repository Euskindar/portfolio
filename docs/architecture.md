# Architecture

## Overview

Aplicación React de una sola página, cliente puro, construida con Vite 8. No hay router, backend, capa de datos, estado global ni persistencia más allá de la preferencia de idioma en `localStorage`.

La home es una superficie única: un perfil de repositorio con seis secciones ancladas. Toda la navegación es intra-página.

## Runtime flow

1. `index.html` carga `/src/main.jsx` en `#root`.
2. `main.jsx` importa `src/index.css` y monta `<App />` en `<StrictMode>`.
3. `App.jsx` resuelve el idioma (`?lang=` → `localStorage` → `es`), renderiza la barra, el rail y las seis secciones.
4. Un `IntersectionObserver` sigue la sección visible y actualiza `activeId`; el rail refleja progreso y estado activo con `aria-current`.
5. El cambio de idioma actualiza `content[lang]`, `document.documentElement.lang` y `document.title`, y guarda la preferencia.

## File map

| Path | Responsibility |
| --- | --- |
| `index.html` | Entrada HTML: `#root`, metadatos, favicon y preload de fuente |
| `src/main.jsx` | Raíz React, `StrictMode`, import del CSS global |
| `src/App.jsx` | Composición de la página, idioma, observador de sección activa, copia de email |
| `src/content.js` | Única fuente de contenido ES/EN, `links` (email, GitHub, LinkedIn, CV) y `sections` (id, hash, tipo, nodo) |
| `src/components/RepoBar.jsx` | Barra de repositorio y conmutador ES/EN |
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
