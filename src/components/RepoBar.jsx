// Iconos dibujados al trazo del mundo, no glifos Unicode: sol y luna de 16x16.
function ThemeGlyph({ variant }) {
  if (variant === 'moon') {
    return (
      <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
        <path d="M13.2 9.8A5.8 5.8 0 1 1 6.2 2.8a4.6 4.6 0 0 0 7 7z" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 16 16"
      width="12"
      height="12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="8" cy="8" r="3.2" />
      <path d="M8 1.2v1.6M8 13.2v1.6M1.2 8h1.6M13.2 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1" />
    </svg>
  )
}

export function RepoBar({ t, lang, onLanguageChange, commitCount, theme, onThemeChange }) {
  const isDark = theme === 'dark'

  return (
    <header className="bar">
      <div className="bar__crumbs">
        <span className="bar__owner">{t.repo.owner}</span>
        <span className="bar__slash" aria-hidden="true">
          /
        </span>
        <strong className="bar__repo">{t.repo.name}</strong>
      </div>

      <span className="chip chip--main">{t.repo.branch}</span>
      <span className="bar__count">{t.commitsLabel(commitCount)}</span>

      <div className="bar__spacer" />

      {/* Conmutador de idioma: un solo botón de dos caras, todo el pill clicable */}
      <button
        type="button"
        className="switch switch--lang"
        data-lang={lang}
        aria-label={t.langToggleLabel(lang === 'en')}
        onClick={() => onLanguageChange(lang === 'en' ? 'es' : 'en')}
      >
        <span className="switch__face" data-face="es" aria-hidden="true">
          ES
        </span>
        <span className="switch__face" data-face="en" aria-hidden="true">
          EN
        </span>
        <span className="switch__thumb" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="switch switch--theme"
        role="switch"
        aria-checked={isDark}
        aria-label={t.themeToggleLabel(isDark)}
        onClick={onThemeChange}
      >
        <span className="switch__thumb" aria-hidden="true" />
        <span className="switch__face" data-face="light" aria-hidden="true">
          <ThemeGlyph variant="sun" />
        </span>
        <span className="switch__face" data-face="dark" aria-hidden="true">
          <ThemeGlyph variant="moon" />
        </span>
      </button>

      <span className="bar__file">{t.repo.file}</span>
    </header>
  )
}
