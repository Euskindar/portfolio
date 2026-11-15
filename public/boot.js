// Pre-pintado del tema: fija data-theme en <html> antes del primer render para
// evitar parpadeo. Prioridad: ?theme= > localStorage > sistema.
// Sin CSS inyectado: los tokens viven en src/index.css (CSP: style-src 'self').
(() => {
  const THEMES = ['light', 'dark']
  const COLORS = { light: '#f7f6f2', dark: '#161712' }
  const KEY = 'portfolio:theme'

  function read(key) {
    try {
      return localStorage.getItem(key)
    } catch {
      return null // almacenamiento bloqueado: se usa el valor por defecto
    }
  }

  // Solo acepta valores de la lista; cualquier otra cosa cae al siguiente nivel.
  function pick(value, allowed, fallback) {
    return allowed.indexOf(value) === -1 ? fallback : value
  }

  const systemTheme =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  const theme =
    pick(new URLSearchParams(window.location.search).get('theme'), THEMES, null) ||
    pick(read(KEY), THEMES, null) ||
    systemTheme

  document.documentElement.dataset.theme = theme

  // Sin JS las dos metas con media resuelven solas; con JS se fijan al color real.
  for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
    meta.setAttribute('content', COLORS[theme])
  }

  // Estado compartido con src/theme.js: una sola fuente para clave y colores.
  window.EuskindarTheme = { key: KEY, colors: COLORS }

  // La URL no debe mostrar ?theme= tras aplicar el estado; ?lang= se conserva
  // (App.jsx lo usa como enlace compartible).
  try {
    const params = new URLSearchParams(window.location.search)
    if (params.has('theme')) {
      params.delete('theme')
      const query = params.toString()
      history.replaceState(
        null,
        '',
        window.location.pathname + (query ? `?${query}` : '') + window.location.hash,
      )
    }
  } catch {
    /* history API no disponible: el estado sigue aplicado en memoria */
  }
})()
