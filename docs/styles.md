# Styles

## File split

- `src/index.css` — global theme, typography, body layout, links, base button styles, light-mode overrides.
- `src/App.css` — card and animated follow-button styles.
- `main.jsx` imports `index.css`; `App.jsx` imports `App.css`.

There is no CSS framework, preprocessor, CSS Modules, Tailwind, or CSS-in-JS.

## Theme and layout

- Dark-first palette: `:root` sets background `#242424`, text `rgba(255, 255, 255, 0.87)`, and `color-scheme: light dark`.
- `body` is a centered flex container with `min-width: 320px` and `min-height: 100vh`.
- `@media (prefers-color-scheme: light)` switches the page to a white background and `#213547` text, and adjusts link and button colors.
- There are no CSS variables or design tokens; colors are repeated literals.

## Component styles

- Card classes: `.tw-followCard`, `.tw-followCard-header`, `.tw-followCard-avatar`, `.tw-followCard-info`, `.tw-followCard-infoUser`.
- Button classes: `.btn-followAnimado`, `.text-container`, `.text`.
- Class naming is mixed (`.tw-followCard`, `.tw-asideButton`, `.btn-followAnimado`); follow the existing names when editing.
- The avatar is a 48px circle. The card is a flex row with `space-between`.
- The follow button is a pill with an expanding `:before` circle, `mix-blend-mode: difference`, and the `move-up-alternate` keyframes (both prefixed and standard versions).
- Global `button` rules in `index.css` are overridden by the more specific `.btn-followAnimado` rules.

## Gotchas

- `.tw-followCard` hardcodes `color: #ffffff`. In light mode the page background becomes white, so card text can disappear. Fix it with a light-mode override or a theme variable rather than removing the dark theme.
- Selectors include both descendant pseudo-elements (`.btn-followAnimado :before`) and the button's own pseudo-element (`.btn-followAnimado:before`); check which one you are targeting.
- User-facing strings and CSS comments are in Spanish; keep that convention.
- Update this file when adding a styling system, global tokens, responsive breakpoints, or new component classes.
