// Conmutador de tema: alterna claro/oscuro y sincroniza los metas theme-color.
// El estado inicial lo fija public/boot.js antes del primer pintado; aquí solo
// toca el documento en el evento del usuario. Los tokens viven en src/index.css.
const THEME_KEY = 'portfolio:theme'
const COLORS = { light: '#f7f6f2', dark: '#161712' }

export const EuskindarTheme = {
  key: THEME_KEY,
  colors: COLORS,

  // Aplica el tema en el documento y lo devuelve; App lo guarda en estado
  // para que el switch re-renderice. Devolver evita leer el DOM dos veces.
  toggle() {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next

    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {
      /* almacenamiento bloqueado: el cambio sigue aplicándose en la sesión */
    }

    // Las dos metas declaran media queries para el caso sin JS; aquí se fijan
    // ambas al color real para que el override manual también se refleje.
    for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
      meta.setAttribute('content', COLORS[next])
    }

    return next
  },
}
