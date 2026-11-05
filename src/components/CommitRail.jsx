export function CommitRail({ t, sections, activeId, progress }) {
  return (
    <nav className="rail" aria-label={t.railTitle}>
      <p className="rail__title">{t.railTitle}</p>
      <p className="rail__hint">{t.railHint}</p>

      <ol className="rail__list">
        <li className="rail__lane" aria-hidden="true">
          <span className="rail__lane-fill" style={{ height: `${progress}%` }} />
        </li>
        {sections.map((section, index) => {
          const entry = t.rail[index]
          const active = activeId === section.id
          const passed = sections.findIndex((s) => s.id === activeId) >= index

          return (
            <li key={section.id}>
              <a
                className="commit"
                href={`#${section.id}`}
                aria-current={active ? 'true' : undefined}
                data-passed={passed ? 'true' : 'false'}
              >
                <span className={`commit__dot commit__dot--${section.node}`} aria-hidden="true" />
                <span className="commit__body">
                  <span className="commit__hash">
                    {section.hash} · {section.type}
                  </span>
                  <span className="commit__msg">{entry.label}</span>
                  <span className="commit__sub">{entry.sub}</span>
                </span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
