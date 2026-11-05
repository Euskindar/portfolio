// Contenido bilingüe. ES y EN comparten claves exactas: si añades una, añádela en los dos.
// Nada inventado: lo que falta se marca con `pending: true` y se muestra como pendiente.

const github = 'https://github.com/Euskindar'
const email = 'julenjph@gmail.com'

export const content = {
  es: {
    langLabel: 'ES',
    otherLangLabel: 'EN',
    langGroupLabel: 'Idioma',
    repo: { owner: 'perfil', name: 'portfolio', branch: 'main', file: 'README.md' },
    commitsLabel: (n) => `${n} commits`,
    railTitle: 'Grafo de commits',
    railHint: 'Cada sección es un commit',
    rail: [
      { label: 'Perfil', sub: 'Software + hardware' },
      { label: 'Proyectos', sub: '0 casos catalogados' },
      { label: 'Experiencia', sub: 'Trayectoria' },
      { label: 'Stack', sub: 'Frontend / backend / QA / HW' },
      { label: 'Sobre mí', sub: 'Método de trabajo' },
      { label: 'Contacto', sub: 'Email / GitHub / CV' },
    ],
    hero: {
      path: 'perfil',
      title: ['Perfil híbrido,', 'evidencias versionadas.'],
      lede: 'Desarrollo de software general —frontend, backend, QA— y soporte técnico de hardware. Cada capacidad con su commit; cada proyecto, con su diff.',
      primary: 'Abrir merge request',
      primaryHint: 'Contacto directo',
      secondary: 'Ver el trabajo',
      tertiary: 'Descargar CV',
      cvUnavailable: 'pendiente',
    },
    diff: {
      title: 'Último commit',
      added: [
        'frontend: React, interfaces accesibles',
        'backend: APIs, datos, integraciones',
        'qa/devops: pruebas, CI, releases',
        'hardware: diagnóstico y reparación',
      ],
      removed: ['afirmaciones sin evidencia'],
    },
    branches: {
      title: 'Ramas / proyectos',
      count: '0 catalogados',
      pending: 'Catálogo pendiente',
      pendingNote: 'Rol, stack y resultado reales. Sin rellenar con ejemplos inventados.',
      tags: ['campo', 'bilingüe'],
    },
    projects: {
      items: [],
      kicker: 'COMMIT 02 / RAMAS',
      title: 'Proyectos',
      intro: 'Uno a tres casos, contados como diff: qué había, qué se decidió, qué se entregó.',
      empty: 'Todavía no hay casos catalogados',
      emptyNote:
        'Los proyectos existen, pero faltan nombre, rol, stack y resultado verificables. Hasta entonces esta rama queda vacía en lugar de rellenarse con ejemplos.',
      emptyAction: 'Ver código en GitHub',
      fields: { problem: 'Problema', role: 'Rol', stack: 'Stack', decision: 'Decisión', result: 'Resultado' },
    },
    experience: {
      kicker: 'COMMIT 03 / TRAYECTORIA',
      title: 'Experiencia',
      empty: 'Trayectoria pendiente de volcar',
      emptyNote: 'Se poblará desde el CV: empresa, rol, fechas y una línea de evidencia por puesto.',
    },
    stack: {
      kicker: 'COMMIT 04 / CAPACIDADES',
      title: 'Stack y capacidades',
      groups: [
        { id: 'frontend', label: 'Frontend', items: ['React', 'JavaScript', 'HTML y CSS', 'Accesibilidad'] },
        { id: 'backend', label: 'Backend', items: ['APIs', 'Datos', 'Integraciones'] },
        { id: 'qa', label: 'QA y DevOps', items: ['Pruebas', 'CI', 'Releases'] },
        { id: 'hardware', label: 'Hardware', items: ['Diagnóstico', 'Reparación', 'Soporte en campo'] },
      ],
      note: 'El detalle por tecnología se irá anclando a casos concretos, no a una lista suelta.',
    },
    about: {
      kicker: 'COMMIT 05 / NOTAS',
      title: 'Cómo trabajo',
      steps: [
        { n: '01', label: 'Diagnosticar', text: 'Síntoma, alcance y qué se puede verificar. Vale igual para una regresión que para un equipo que no arranca.' },
        { n: '02', label: 'Construir', text: 'La solución más pequeña que resuelve el problema, con el rol y el stack explícitos.' },
        { n: '03', label: 'Verificar', text: 'Pruebas, build y comprobación en el equipo real. Sin «debería funcionar».' },
        { n: '04', label: 'Entregar', text: 'Documentación, traspaso y contacto claro para lo que venga después.' },
      ],
    },
    contact: {
      kicker: 'COMMIT 06 / RELEASE',
      title: 'Hablemos',
      lede: 'Abierto a entrevistas y ofertas de desarrollo de software, soporte técnico o roles mixtos. Respondo en español o inglés.',
      primary: 'Escribir un correo',
      copy: 'Copiar dirección',
      copied: 'Copiada',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'CV en PDF',
      cvPending: 'Pendiente',
      cvPendingNote: 'Falta subir el PDF',
      linkedinPending: 'Perfil por enlazar',
      footer: 'Perfil híbrido de software y hardware. Contenido bilingüe, sin métricas inventadas.',
      backTop: 'Volver al inicio del historial',
    },
    pendingBadge: 'pendiente',
  },

  en: {
    langLabel: 'EN',
    otherLangLabel: 'ES',
    langGroupLabel: 'Language',
    repo: { owner: 'profile', name: 'portfolio', branch: 'main', file: 'README.md' },
    commitsLabel: (n) => `${n} commits`,
    railTitle: 'Commit graph',
    railHint: 'Every section is a commit',
    rail: [
      { label: 'Profile', sub: 'Software + hardware' },
      { label: 'Projects', sub: '0 cases catalogued' },
      { label: 'Experience', sub: 'Track record' },
      { label: 'Stack', sub: 'Frontend / backend / QA / HW' },
      { label: 'About', sub: 'Working method' },
      { label: 'Contact', sub: 'Email / GitHub / CV' },
    ],
    hero: {
      path: 'profile',
      title: ['Hybrid profile,', 'versioned evidence.'],
      lede: 'General software development —frontend, backend, QA— and hands-on hardware support. Every capability carries its commit; every project, its diff.',
      primary: 'Open merge request',
      primaryHint: 'Direct contact',
      secondary: 'View the work',
      tertiary: 'Download CV',
      cvUnavailable: 'pending',
    },
    diff: {
      title: 'Latest commit',
      added: [
        'frontend: React, accessible interfaces',
        'backend: APIs, data, integrations',
        'qa/devops: tests, CI, releases',
        'hardware: diagnostics and repair',
      ],
      removed: ['claims without evidence'],
    },
    branches: {
      title: 'Branches / projects',
      count: '0 catalogued',
      pending: 'Catalogue pending',
      pendingNote: 'Real role, stack and outcome. Not padded with invented examples.',
      tags: ['field-tested', 'bilingual'],
    },
    projects: {
      items: [],
      kicker: 'COMMIT 02 / BRANCHES',
      title: 'Projects',
      intro: 'One to three cases, told as a diff: what was there, what was decided, what shipped.',
      empty: 'No cases catalogued yet',
      emptyNote:
        'The projects exist, but their name, role, stack and verifiable outcome are still missing. Until then this branch stays empty instead of being filled with examples.',
      emptyAction: 'Browse the code on GitHub',
      fields: { problem: 'Problem', role: 'Role', stack: 'Stack', decision: 'Decision', result: 'Result' },
    },
    experience: {
      kicker: 'COMMIT 03 / TRACK RECORD',
      title: 'Experience',
      empty: 'Track record pending',
      emptyNote: 'Will be filled from the CV: company, role, dates and one line of evidence per position.',
    },
    stack: {
      kicker: 'COMMIT 04 / CAPABILITIES',
      title: 'Stack and capabilities',
      groups: [
        { id: 'frontend', label: 'Frontend', items: ['React', 'JavaScript', 'HTML and CSS', 'Accessibility'] },
        { id: 'backend', label: 'Backend', items: ['APIs', 'Data', 'Integrations'] },
        { id: 'qa', label: 'QA and DevOps', items: ['Testing', 'CI', 'Releases'] },
        { id: 'hardware', label: 'Hardware', items: ['Diagnostics', 'Repair', 'Field support'] },
      ],
      note: 'Per-technology detail will be anchored to real cases, not left as a floating list.',
    },
    about: {
      kicker: 'COMMIT 05 / NOTES',
      title: 'How I work',
      steps: [
        { n: '01', label: 'Diagnose', text: 'Symptom, scope and what can actually be verified. Works the same for a regression and for a machine that will not boot.' },
        { n: '02', label: 'Build', text: 'The smallest solution that solves the problem, with role and stack stated explicitly.' },
        { n: '03', label: 'Verify', text: 'Tests, build and a check on the real machine. No “it should work”.' },
        { n: '04', label: 'Hand off', text: 'Documentation, a clean handover and a clear contact for whatever comes next.' },
      ],
    },
    contact: {
      kicker: 'COMMIT 06 / RELEASE',
      title: "Let's talk",
      lede: 'Open to interviews and offers in software development, technical support or mixed roles. I reply in Spanish or English.',
      primary: 'Send an email',
      copy: 'Copy address',
      copied: 'Copied',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'CV (PDF)',
      cvPending: 'Pending',
      cvPendingNote: 'PDF not uploaded yet',
      linkedinPending: 'Profile not linked yet',
      footer: 'Hybrid software and hardware profile. Bilingual content, no invented metrics.',
      backTop: 'Back to the top of the history',
    },
    pendingBadge: 'pending',
  },
}

// Enlaces y disponibilidad de evidencia. Independiente del idioma.
export const links = {
  github,
  email,
  linkedin: '',
  cv: '',
}

// Nodos del grafo: orden de lectura y ancla de cada sección.
export const sections = [
  { id: 'perfil', hash: 'a1f9c2e', type: 'feat', node: 'orange' },
  { id: 'proyectos', hash: 'b7d41aa', type: 'feat', node: 'blue' },
  { id: 'experiencia', hash: 'c2e8f10', type: 'fix', node: 'orange' },
  { id: 'stack', hash: 'd9a03b4', type: 'chore', node: 'blue' },
  { id: 'sobre-mi', hash: 'e4c76d1', type: 'docs', node: 'gray' },
  { id: 'contacto', hash: 'f0b12c8', type: 'release', node: 'orange' },
]
