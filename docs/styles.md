# Styles

## File split

- `src/index.css` — global theme, design tokens, typography, base element styles.
- `src/App.css` — component and section styles.
- `main.jsx` imports `index.css`; `App.jsx` imports `App.css`.

The scaffold uses plain CSS: no framework, preprocessor, CSS Modules, Tailwind, or CSS-in-JS. Introduce one only if the design system justifies it, and document the decision in `DESIGN.md`.

## Current theme

- `:root` sets `color-scheme: light dark`, a dark background, and light text.
- `@media (prefers-color-scheme: light)` provides a light variant.
- `body` is a centered flex container with `min-width: 320px` and `min-height: 100vh`.
- The default React logo spin animation respects no motion preference yet; add `prefers-reduced-motion` handling when building real UI.

## Direction

The visual system is defined in `DESIGN.md` (palette, type scale, spacing, radii, motion). `src/index.css` must expose those decisions as CSS custom properties instead of repeating literals.

## Gotchas

- The scaffold's dark-first colors are placeholders, not a brand.
- User-facing strings are bilingual ES/EN; code comments stay in Spanish.
- Update this file whenever tokens, typography, breakpoints, or component classes change.
