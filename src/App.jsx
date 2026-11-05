import { useEffect, useRef, useState } from 'react'
import { content, links, sections } from './content'
import { RepoBar } from './components/RepoBar'
import { CommitRail } from './components/CommitRail'
import { PendingPanel, ProjectCase, SectionHead } from './components/Sections'
import './App.css'

const LANG_KEY = 'portfolio:lang'
const COMMIT_TYPE = Object.fromEntries(sections.map((section) => [section.id, section.type]))
const COMMIT_HASH = Object.fromEntries(sections.map((section) => [section.id, section.hash]))
const CONTENT_KEY = {
  proyectos: 'projects',
  experiencia: 'experience',
  stack: 'stack',
  'sobre-mi': 'about',
  contacto: 'contact',
}

function readStoredLang() {
  // `?lang=en` permite compartir la versión inglesa sin depender del almacenamiento
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'en' || fromUrl === 'es') return fromUrl

  try {
    return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

export default function App() {
  const [lang, setLang] = useState(readStoredLang)
  const [activeId, setActiveId] = useState(sections[0].id)
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef(null)

  const t = content[lang]
  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === activeId),
  )
  const progress = ((activeIndex + 1) / sections.length) * 100

  useEffect(() => {
    document.documentElement.lang = lang
    document.title =
      lang === 'es'
        ? 'Perfil híbrido — software y hardware'
        : 'Hybrid profile — software and hardware'
    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {
      /* almacenamiento no disponible: la preferencia dura la sesión */
    }
  }, [lang])

  useEffect(() => {
    const nodes = sections.map((section) => document.getElementById(section.id)).filter(Boolean)
    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5, 0.9] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  const changeLanguage = (next) => setLang(next)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
    } catch {
      const field = document.createElement('textarea')
      field.value = links.email
      field.setAttribute('readonly', '')
      field.style.position = 'absolute'
      field.style.left = '-9999px'
      document.body.appendChild(field)
      field.select()
      document.execCommand('copy')
      document.body.removeChild(field)
    }
    setCopied(true)
    clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopied(false), 2200)
  }

  const head = (id, titleId, intro) => ({
    kicker: t[CONTENT_KEY[id]].kicker,
    hash: COMMIT_HASH[id],
    type: COMMIT_TYPE[id],
    titleId,
    title: t[CONTENT_KEY[id]].title,
    intro,
  })

  return (
    <div className="app">
      <RepoBar
        t={t}
        lang={lang}
        onLanguageChange={changeLanguage}
        commitCount={sections.length}
      />

      <div className="shell">
        <CommitRail t={t} sections={sections} activeId={activeId} progress={progress} />

        <main className="doc">
          <section id="perfil" className="hero" aria-labelledby="perfil-title">
            <p className="hero__path">
              <span>{t.hero.path}</span>
              <span className="hero__path-sep" aria-hidden="true">
                /
              </span>
              <span className="hero__path-file">{t.repo.file}</span>
            </p>
            <h1 className="hero__title" id="perfil-title">
              {t.hero.title[0]}
              <br />
              {t.hero.title[1]}
            </h1>
            <p className="hero__lede">{t.hero.lede}</p>

            <div className="actions">
              <a className="btn btn--contact" href={`mailto:${links.email}`}>
                {t.hero.primary} <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--solid" href="#proyectos">
                {t.hero.secondary}
              </a>
              {links.cv ? (
                <a className="btn" href={links.cv} download>
                  {t.hero.tertiary}
                </a>
              ) : (
                <span className="btn btn--muted" aria-disabled="true">
                  {t.hero.tertiary}
                  <em className="btn__note">{t.hero.cvUnavailable}</em>
                </span>
              )}
            </div>
            <p className="actions__hint">{t.hero.primaryHint}</p>

            <div className="hero__panels">
              <div className="panel">
                <div className="panel__head">
                  <span>
                    {t.diff.title} / {sections[0].hash}
                  </span>
                  <span aria-hidden="true">+04 −01</span>
                </div>
                <div className="diff">
                  {t.diff.added.map((line) => (
                    <p className="diff__line diff__line--add" key={line}>
                      {line}
                    </p>
                  ))}
                  {t.diff.removed.map((line) => (
                    <p className="diff__line diff__line--del" key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="panel">
                <div className="panel__head">
                  <span>{t.branches.title}</span>
                  <span>{t.branches.count}</span>
                </div>
                <div className="branches">
                  <div className="branches__empty">
                    <p className="branches__title">{t.branches.pending}</p>
                    <p className="branches__note">{t.branches.pendingNote}</p>
                  </div>
                  <ul className="tags">
                    {t.branches.tags.map((tag) => (
                      <li className="tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="proyectos" className="section" aria-labelledby="proyectos-title">
            <SectionHead {...head('proyectos', 'proyectos-title', t.projects.intro)} />
            {t.projects.items.length ? (
              <div className="cases">
                {t.projects.items.map((project) => (
                  <ProjectCase project={project} t={t} key={project.slug} />
                ))}
              </div>
            ) : (
              <PendingPanel
                badge={t.pendingBadge}
                title={t.projects.empty}
                note={t.projects.emptyNote}
                action={{ href: links.github, label: t.projects.emptyAction }}
              />
            )}
          </section>

          <section id="experiencia" className="section" aria-labelledby="experiencia-title">
            <SectionHead {...head('experiencia', 'experiencia-title')} />
            <PendingPanel
              badge={t.pendingBadge}
              title={t.experience.empty}
              note={t.experience.emptyNote}
            />
          </section>

          <section id="stack" className="section" aria-labelledby="stack-title">
            <SectionHead {...head('stack', 'stack-title')} />
            <div className="stack">
              {t.stack.groups.map((group) => (
                <div className="stack__group" key={group.id}>
                  <h3 className="stack__label">{group.label}</h3>
                  <ul className="stack__items">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="stack__note">{t.stack.note}</p>
          </section>

          <section id="sobre-mi" className="section" aria-labelledby="sobre-mi-title">
            <SectionHead {...head('sobre-mi', 'sobre-mi-title')} />
            <ol className="method">
              {t.about.steps.map((step) => (
                <li className="method__step" key={step.n}>
                  <span className="method__n">{step.n}</span>
                  <div>
                    <h3 className="method__label">{step.label}</h3>
                    <p className="method__text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="contacto" className="section section--release" aria-labelledby="contacto-title">
            <SectionHead {...head('contacto', 'contacto-title')} />
            <p className="contact__lede">{t.contact.lede}</p>

            <div className="contact__actions">
              <a className="btn btn--contact" href={`mailto:${links.email}`}>
                {t.contact.primary} <span aria-hidden="true">→</span>
              </a>
              <button type="button" className="btn" onClick={copyEmail}>
                {copied ? t.contact.copied : t.contact.copy}
                <span className="visually-hidden"> {links.email}</span>
              </button>
              <span role="status" aria-live="polite" className="visually-hidden">
                {copied ? t.contact.copied : ''}
              </span>
            </div>

            <dl className="contact__list">
              <div className="contact__row">
                <dt>Email</dt>
                <dd>
                  <a className="link" href={`mailto:${links.email}`}>
                    {links.email}
                  </a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>{t.contact.github}</dt>
                <dd>
                  <a className="link" href={links.github} target="_blank" rel="noreferrer">
                    Euskindar <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>{t.contact.linkedin}</dt>
                <dd>
                  {links.linkedin ? (
                    <a className="link" href={links.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="contact__pending">{t.contact.linkedinPending}</span>
                  )}
                </dd>
              </div>
              <div className="contact__row">
                <dt>{t.contact.cv}</dt>
                <dd>
                  {links.cv ? (
                    <a className="link" href={links.cv} download>
                      PDF
                    </a>
                  ) : (
                    <span className="contact__pending">
                      {t.contact.cvPending}
                      <em className="contact__pending-note">{t.contact.cvPendingNote}</em>
                    </span>
                  )}
                </dd>
              </div>
            </dl>

            <footer className="foot">
              <p>{t.contact.footer}</p>
              <a className="foot__top" href="#perfil">
                {t.contact.backTop} <span aria-hidden="true">↑</span>
              </a>
            </footer>
          </section>
        </main>
      </div>
    </div>
  )
}
