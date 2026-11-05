export function SectionHead({ titleId, kicker, hash, type, title, intro }) {
  return (
    <header className="sec-head">
      <div className="sec-head__meta">
        <span className="sec-head__kicker">{kicker}</span>
        <span className="sec-head__hash">{hash}</span>
        <span className="chip chip--type">{type}</span>
      </div>
      <h2 className="sec-head__title" id={titleId}>
        {title}
      </h2>
      {intro ? <p className="sec-head__intro">{intro}</p> : null}
    </header>
  )
}

export function PendingPanel({ badge, title, note, action }) {
  return (
    <div className="pending">
      <span className="pending__badge">{badge}</span>
      <p className="pending__title">{title}</p>
      <p className="pending__note">{note}</p>
      {action ? (
        <a className="pending__action" href={action.href} target="_blank" rel="noreferrer">
          {action.label} <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </div>
  )
}

export function ProjectCase({ project, t }) {
  const fields = t.projects.fields
  const rows = [
    ['problem', project.problem],
    ['role', project.role],
    ['stack', project.stack],
    ['decision', project.decision],
    ['result', project.result],
  ]

  return (
    <article className="case">
      <div className="case__head">
        <span className="case__branch">case-{project.slug}</span>
        <h3 className="case__title">{project.name}</h3>
      </div>

      <dl className="case__fields">
        {rows.map(([key, value]) => (
          <div className="case__row" key={key}>
            <dt>{fields[key]}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      {project.links?.length ? (
        <ul className="case__links">
          {project.links.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
