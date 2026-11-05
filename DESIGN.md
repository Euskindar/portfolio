---
name: Commit Graph Ledger
description: Un portfolio leído como repositorio: el grafo de commits es la navegación y cada afirmación es un diff con evidencia.
colors:
  paper: "#f7f6f2"
  paper-sunk: "#f2f0ea"
  surface: "#ffffff"
  ink: "#111111"
  ink-dim: "#4c4f49"
  ink-soft: "#5a5d57"
  ink-faint: "#6b6e67"
  rule: "#d7d5cd"
  rule-soft: "#e2e0d8"
  structure-blue: "#2457d6"
  merge-green: "#2e7d5b"
  attention-orange: "#d94f2b"
  attention-orange-ink: "#b03c1d"
  diff-add-bg: "#e5f1e8"
  diff-add-ink: "#1f5b3e"
  diff-del-bg: "#fbe7e2"
  diff-del-ink: "#8a2f1a"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 5.4vw, 4.625rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 2vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 0.95rem + 0.5vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Azeret Mono, ui-monospace, SF Mono, Cascadia Mono, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
  code:
    fontFamily: "Azeret Mono, ui-monospace, SF Mono, Cascadia Mono, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0.03em"
rounded:
  square: "0px"
  pill: "999px"
  node: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "clamp(2.5rem, 2rem + 2vw, 4rem)"
components:
  button-contact:
    backgroundColor: "{colors.merge-green}"
    textColor: "#ffffff"
    rounded: "{rounded.square}"
    padding: "14px 18px"
  button-contact-hover:
    backgroundColor: "#245f45"
    textColor: "#ffffff"
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "14px 18px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "14px 18px"
  button-muted:
    backgroundColor: "transparent"
    textColor: "{colors.ink-faint}"
    rounded: "{rounded.square}"
    padding: "14px 18px"
  chip-branch:
    backgroundColor: "{colors.structure-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "3px 8px"
  chip-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "3px 8px"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 14px"
  commit-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "8px 10px"
  pending-panel:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "24px"
---

## Overview

**Norte creativo:** *Commit Graph Ledger*. El portfolio no es una landing con hero y tres tarjetas, sino un repositorio leído en voz alta. La historia tiene seis commits —perfil, proyectos, experiencia, stack, método, contacto— y el visitante recorre el grafo hasta el merge final, que es el contacto.

**Público:** reclutadores y responsables técnicos con segundos de atención, en móvil o escritorio, comparando candidatos de perfil híbrido (software + hardware).

**Principio rector:** la interfaz se retira y la evidencia manda. Nada de testimonios, métricas o clientes inventados: lo que falta se marca en naranja como `pendiente` / `pending` y se explica por qué, en lugar de rellenarse.

**Voz:** precisa, seca, sin épica de marca. Las frases son declarativas y verificables; el humor, si aparece, es de contexto de taller.

## Colors

Tres roles semánticos, no decorativos. Un color aquí significa algo fijo en toda la superficie:

- **Structure blue `#2457d6`** — el carril del grafo, los enlaces, la rama `main`, las rutas de fichero. Es la estructura del repositorio.
- **Merge green `#2e7d5b`** — evidencia entregada: un nodo de commit cuyo contenido ya está publicado, las líneas `+` del diff y la acción primaria de contacto. Es el verde de «esto está fusionado». Un commit de tipo `fix` que sigue pendiente usa naranja: el color codifica el estado, no el tipo.
- **Attention orange `#d94f2b`** — el nodo de apertura y de release, y todo lo que falta. Para texto sobre papel se usa `attention-orange-ink #b03c1d`; el tono puro solo se emplea en nodos, badges y filetes de 1px, donde no hay que leerlo.

**Neutros:** papel tintado `#f7f6f2` como suelo, hundido `#f2f0ea` para el rail y los estados pendientes, blanco `#ffffff` solo dentro de paneles. Tinta `#111111`; tres niveles de apoyo: `ink-dim #4c4f49`, `ink-soft #5a5d57`, `ink-faint #6b6e67`, todos ≥ 4.5:1 sobre papel. Las reglas son `#d7d5cd` y `#e2e0d8`.

**Diff:** `#e5f1e8`/`#1f5b3e` para añadidos y `#fbe7e2`/`#8a2f1a` para eliminados. Tintes suaves, nunca saturados: se leen como tinta de revisión, no como alertas.

Sin modo oscuro: el papel es una decisión, no un tema.

## Typography

Dos voces autoalojadas en `public/fonts/` (SIL OFL), sin peticiones a terceros:

- **Archivo** (variable 400–800) es la voz de la prosa: titulares, cuerpo, microcopy. El hero va a 800 con tracking negativo fuerte; los H2 a 700 con −0.035em. La prosa de lectura va de 0.8125rem a 1.1875rem y ningún texto funcional baja de 11px.
- **Azeret Mono** (400/500) es la voz del sistema: hashes, metadatos, chips, cabeceras de panel, líneas de diff, botones y etiquetas. Siempre en versalitas o con tracking amplio (`0.14em` etiquetas, `0.03em` código).

Escala: `--text-h1` clamp 2.5→4.625rem, `--text-h2` clamp 1.75→2.75rem, `--text-lede` clamp 1.0625→1.1875rem, `--text-base` 1rem, `--text-xs` 0.6875rem (suelo absoluto: no hay texto funcional por debajo de 11px).

Párrafos con `text-wrap: pretty` y titulares con `text-wrap: balance` para evitar viudas en anchos estrechos.

## Layout

**Escritorio:** barra de repositorio sticky de 56px (`--bar-h`) y, debajo, una rejilla de dos columnas: rail de 342px (`--rail-w`) y documento fluido con `max-width: 82rem`. Rail y contenido comparten base tipográfica y una única línea de 1px los separa. El rail es sticky, con su propio scroll, y el carril azul se rellena según la sección activa.

**Breakpoints:**

- `1180px` — el stack pasa de 4 a 2 columnas.
- `960px` — desaparece la columna lateral: el grafo se convierte en una tira horizontal sticky con chips desplazables; los paneles del hero y la lista de contacto pasan a una columna.
- `640px` — se ocultan metadatos secundarios de la barra, las acciones se apilan a ancho completo y las filas de caso/contacto se vuelven de una columna.

**Ritmo:** padding lateral `clamp(1.25rem, 0.5rem + 2.5vw, 2.75rem)`, secciones a `clamp(2.5rem, 2rem + 2vw, 4rem)`, medida de lectura `40rem`. Ancho mínimo de body 20rem (320px).

**Navegación:** anclas nativas con `scroll-margin-top` igual a barra + 1.5rem; `scroll-behavior: smooth` salvo con `prefers-reduced-motion`.

## Elevation & Depth

Sistema plano por convicción. No hay sombras difusas: la profundidad se expresa con **estratos tonales y reglas de 1px**:

- Papel → hundido (rail, pendientes) → blanco (paneles). Cada salto es un cambio de tono, nunca una sombra.
- El único ornamento de profundidad es el halo del nodo activo: `0 0 0 3px` del color del sustrato más un anillo de 5px en azul translúcido.
- La barra y el rail se separan del documento por una línea, no por elevación. `z-index` solo para mantenerlos por encima del contenido.

## Shapes

Todo cuadrado. `border-radius: 0` en botones, paneles, casos, campos y estados pendientes; las esquinas rectas son parte del vocabulario de fichero y terminal.

Excepciones: los **pills** (`999px`) de chips, etiquetas y badges, y los **nodos** del grafo (círculo de 13px con halo). Los estados pendientes usan borde **discontinuo** para distinguirse de los paneles normales sin recurrir al color.

## Components

- **Repo bar** — owner / repo, chip `main` azul sólido, contador de commits, conmutador ES/EN pill y nombre de fichero atenuado. Mono 11px, sticky.
- **Commit rail** — título en versalitas, carril vertical de 2px, seis filas: nodo, hash corto + tipo, mensaje en negrita y sub-línea mono. La fila activa colorea el mensaje en azul y engorda el halo del nodo; las pasadas se atenúan. En móvil, chips horizontales con el nodo activo en azul sólido.
- **Hero** — ruta de repositorio (`profile / README.md`), titular de dos líneas, lede de una frase, tres acciones y dos paneles: diff del último commit y ramas/proyectos.
- **Buttons** — rectangulares, mono 12px, tracking 0.05em, padding 14×18px. Primario verde (contacto), sólido tinta (ver el trabajo), outline (CV), discontinuo y deshabilitado (`aria-disabled`) cuando la evidencia no existe todavía. En móvil ocupan el ancho y separan etiqueta y flecha.
- **Panel** — borde 1px, cabeza mono en versalitas con regla inferior, cuerpo blanco. El diff usa filas tintadas con prefijo `+` / `−`.
- **Pending panel** — borde discontinuo sobre papel hundido, badge naranja, título, nota explicativa y, si aplica, un enlace de escape (GitHub).
- **Case** (cuando exista) — cabecera con `case-<slug>`, título, tabla `dl` de problema / rol / stack / decisión / resultado y enlaces.
- **Chips y tags** — pill 1px, mono 11px; `main` en azul sólido, tipo en outline.
- **Contacto** — cabecera de release sobre filete verde de 3px, acciones de email y copiar, lista `dl` de canales y footer que cierra el historial.

## Do's and Don'ts

**Do**

- Usa el color por su rol semántico: azul = estructura, verde = evidencia/contacto, naranja = release/falta.
- Escribe `pendiente` / `pending` cuando no haya dato real, con una nota que explique qué falta y cómo conseguirlo.
- Mantén el mono solo para metadatos y el sistema; la prosa va siempre en Archivo.
- Conserva las esquinas rectas y las reglas de 1px: son la firma, no un descuido.
- Comprueba contraste AA en cada tono de texto nuevo y no bajes de 11px en texto funcional.
- Duplica cada cadena nueva en ES y EN con las mismas claves.

**Don't**

- No añadas sombras difusas, degradados ni radios suaves «para que respire».
- No inventes proyectos, clientes, fechas, testimonios ni porcentajes de mejora.
- No uses naranja puro para texto corrido (usa `attention-orange-ink`).
- No introduzcas un modo oscuro ni tipografías de terceros servidas desde CDN.
- No conviertas el grafo en decoración: si una sección nueva no es un commit, no pertenece al rail.
- No uses gris tenue sobre color saturado ni texto funcional por debajo de 11px.
