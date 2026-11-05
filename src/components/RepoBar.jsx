export function RepoBar({ t, lang, onLanguageChange, commitCount }) {
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

      <div className="lang" role="group" aria-label={t.langGroupLabel}>
        {['es', 'en'].map((code) => (
          <button
            key={code}
            type="button"
            className="lang__btn"
            aria-pressed={lang === code}
            onClick={() => onLanguageChange(code)}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      <span className="bar__file">{t.repo.file}</span>
    </header>
  )
}
