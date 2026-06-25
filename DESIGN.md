---
name: Juan Berrios
description: A personal editorial site — calm, reading-first, hand-crafted.
colors:
  warm-stone-paper:
    value: "oklch(0.870 0.002 74)"
    role: Light body background. The warm-neutral paper that refuses the beige-default.
  quiet-ink:
    value: "oklch(0.141 0.005 286)"
    role: Dark body background / near-black ink for night reading.
  ink-body:
    value: "oklch(0.274 0.006 286)"
    role: Light-mode body text (zinc-800).
  ink-soft:
    value: "oklch(0.871 0.006 286)"
    role: Dark-mode body text (zinc-200).
  garden-lime:
    value: "oklch(0.839 0.179 122)"
    role: The single accent. Blockquote stripe, Message tint. Used on <=5% of any screen.
  garden-lime-deep:
    value: "oklch(0.768 0.188 122)"
    role: Lime hover / gradient stop (lime-500).
  garden-lime-dark:
    value: "oklch(0.466 0.145 122)"
    role: Dark-mode blockquote stripe (lime-800).
  header-stone:
    value: "oklch(0.823 0.003 74)"
    role: Light header pill base (stone-300 at 50% opacity in use).
  header-zinc:
    value: "oklch(0.210 0.006 286)"
    role: Dark header pill base (zinc-900 at 50% opacity in use).
  underline-faint:
    value: "oklch(0.705 0.009 286)"
    role: Resting link underline (zinc-400).
  underline-faint-dark:
    value: "oklch(0.552 0.016 286)"
    role: Resting link underline in dark mode (zinc-500).
  divider:
    value: "oklch(0.922 0.004 286)"
    role: Horizontal rules, borders (zinc-200).
  divider-dark:
    value: "oklch(0.370 0.013 286)"
    role: Dark-mode rules, borders (zinc-700).
typography:
  display:
    fontFamily: "Inter Tight, var(--font-interdisplay), system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: "135%"
    letterSpacing: "0.02em"
  sans:
    fontFamily: "Geist, var(--font-geist), system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.625"
    letterSpacing: "normal"
  body:
    fontFamily: "Newsreader, var(--font-newsreader), Georgia, serif"
    fontSize: "clamp(0.875rem, 0.25vw + 0.85rem, 1.125rem)"
    fontWeight: 400
    lineHeight: "1.75"
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, var(--font-geist), system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "normal"
rounded:
  none: "0"
  code: "4px"
  image: "6px"
  pre: "8px"
  default: "10px"
  header-pill: "24px"
spacing:
  lateral-mobile: "calc(var(--spacing) * 7)"
  lateral-md: "calc(var(--spacing) * 10)"
  prose-measure: "68ch"
  container-max: "var(--container-2xl)"
components:
  post-list-item:
    textColor: "{ink-body}"
    typography: "{sans}"
    padding: "0"
  post-list-item-hover:
    textColor: "{ink-body}"
    typography: "{sans}"
  in-prose-link:
    textColor: "{ink-body}"
    typography: "{body}"
  in-prose-link-hover:
    textColor: "{ink-body}"
  header-pill:
    backgroundColor: "{header-stone}"
    textColor: "{ink-body}"
    typography: "{label}"
    rounded: "{rounded.header-pill}"
    padding: "10px 20px"
  header-pill-dark:
    backgroundColor: "{header-zinc}"
    textColor: "{ink-soft}"
  blockquote:
    padding: "0 0 0 calc(var(--spacing) * 4)"
  message:
    backgroundColor: "{warm-stone-paper}"
    textColor: "{ink-body}"
    typography: "{body}"
    rounded: "{rounded.default}"
  featured-music:
    backgroundColor: "{warm-stone-paper}"
    textColor: "{ink-body}"
    rounded: "{rounded.default}"
---

# Design System: Juan Berrios

## 1. Overview

**Creative North Star: "The Editorial Sanctuary"**

This is a hand-bound literary journal on the web — calm, considered, editorial. The prose is the point; everything else gets out of its way. The system pairs a reading-first serif (Newsreader) with a tight grotesque display (Inter Tight) and a quiet geometric sans for navigation (Geist), so the eye always knows whether it's reading, orienting, or navigating. Whitespace is the primary material, not a leftover.

The site explicitly rejects SaaS landing-page tropes — no hero-metric stat blocks, no gradient accents, no saturated banner sections, no identical icon-card grids. It rejects brutalist / maximalist type — no oversized display that sacrifices readability for impact, no type experiments that turn the page into noise. And it refuses the warm beige / cream / sand default: the light surface is a warm stone neutral (#E7E5E4), clearly stone, not paper-pulp. Warmth is carried by the writing, the type pairing, and one small green accent — never by a tinted near-white body.

**Key Characteristics:**
- Reading-first: 68ch measure, 1.75 leading, serif body, contrast tuned for long sessions.
- One voice: a single lime accent on ≤5% of any screen. Its rarity is the point.
- Flat by default: no box-shadows on content; depth comes from opacity, tonal layering, and one ambient blur on the floating header.
- Underline, don't button-ify: links use a thin underline that deepens on hover; never colored backgrounds or pill buttons for in-prose links.
- Hand-crafted details: dashed-leader post lists, lime blockquote stripe, a floating blurred nav pill.

## 2. Colors: The Editorial Sanctuary Palette

A warm-stone paper, a quiet near-black ink, and one garden-lime accent that marks hand-picked details. That's the whole palette.

### Primary
- **Garden Lime** (oklch(0.839 0.179 122) / #A3E635): The single accent. Appears as the blockquote left stripe, the Message component's gradient tint, and the inline-message link underline. Never used for body text, never used for large fills. In dark mode the stripe deepens to **Garden Lime Dark** (oklch(0.466 0.145 122) / #3F6212, lime-800); the Message tint uses **Garden Lime Deep** (oklch(0.768 0.188 122) / #84CC16, lime-500) as the gradient stop.

### Neutral
- **Warm Stone Paper** (oklch(0.870 0.002 74) / #E7E5E4, stone-200): The light body background. A warm-neutral that reads as stone, not cream. Chosen specifically to refuse the beige-default.
- **Quiet Ink** (oklch(0.141 0.005 286) / #09090B, zinc-950): The dark body background at 90% opacity. A near-black with a faint blue undertone; not pure black, not warm.
- **Ink Body** (oklch(0.274 0.006 286) / #27272A, zinc-800): Light-mode body text. Pairs with Warm Stone Paper at ≥4.5:1.
- **Ink Soft** (oklch(0.871 0.006 286) / #E4E4E7, zinc-200): Dark-mode body text. Pairs with Quiet Ink.
- **Header Stone** (oklch(0.823 0.003 74) / #D6D3D1, stone-300) / **Header Zinc** (oklch(0.210 0.006 286) / #18181B, zinc-900): The floating header pill base, always at 50% opacity with backdrop-blur.
- **Underline Faint** (oklch(0.705 0.009 286) / #A1A1AA, zinc-400) → **Ink Body** on hover: resting link underline in light mode. In dark mode: **Underline Faint Dark** (zinc-500) → **Ink Soft**.
- **Divider** (oklch(0.922 0.004 286) / zinc-200) / **Divider Dark** (oklch(0.370 0.013 286) / zinc-700): Horizontal rules and section borders. The post `<hr>` is 25% width, centered, dashed or solid.

### Named Rules
**The One Voice Rule.** The Garden Lime accent appears on ≤5% of any screen — the blockquote stripe, the Message tint, and that's it. Its rarity is the point. If you reach for it anywhere else, stop.

**The No-Beige Rule.** The light body is Warm Stone Paper (stone-200), not cream, sand, paper, parchment, or any near-white warm-tinted neutral in the OKLCH L 0.84–0.97 / C < 0.06 / hue 40–100 band. Warmth lives in the type and the voice, not the background.

## 3. Typography

**Display Font:** Inter Tight (var(--font-interdisplay), fallback system-ui sans-serif)
**Sans / UI Font:** Geist (var(--font-geist), fallback system-ui sans-serif)
**Body Font:** Newsreader (var(--font-newsreader), fallback Georgia, serif)

**Character:** A three-family system on a contrast axis. Newsreader (a transitional serif) carries all reading — generous, warm, built for long measure. Inter Tight (a tight grotesque) carries page titles and post headings — it's the orientation layer, denser and more present than the body. Geist (a geometric sans) carries navigation, labels, dates, tags, and UI — it's the wayfinding layer, quiet and functional. The pairing is serif-for-reading + grotesque-for-titles + sans-for-navigation: editorial, not decorative.

### Hierarchy
- **Display** (Inter Tight, 600, clamp(1.875rem, 5vw, 3rem), 135% line-height, 0.02em tracking): Page titles (Bookmarks, Playlists, /this, posts index) and individual post titles. The largest type on the site; never larger than 3rem.
- **Post Heading H2** (Inter Tight, 600, 1.25rem → 1.375rem, 145% line-height, 0.02em tracking): Section headings inside posts.
- **Post Heading H3** (Inter Tight, 600, 1.125rem → 1.375rem, 150% line-height): Sub-section headings inside posts.
- **UI Heading** (Geist, 600, 1rem, 1.625 line-height): The non-post h1–h6 base; section labels like "Posts", "Sobre mi", year headers in the archive.
- **Body** (Newsreader, 400, clamp(0.875rem, 0.25vw + 0.85rem, 1.125rem), 1.75 line-height): All prose. Capped at 68ch via the `.post` container. This is the reading unit.
- **Label** (Geist, 400–600, 0.75rem–0.875rem, 1.5 line-height): Navigation items, dates, tags, "Siguiente" / "Anterior" labels, footer text. Resting state at opacity 0.5–0.8 (but see The Opacity-Honest Rule below).

### Named Rules
**The 68-Character Rule.** The `.post` container is `max-width: 68ch`. The post column is the reading unit, not the page width. Never widen it; never let prose flow full-bleed.

**The Underline Rule.** In-prose links use a thin underline (`text-decoration: underline; text-underline-offset: 0.2rem; text-decoration-thickness: 0.05em`) that deepens from Underline Faint to Ink Body on hover. Never use colored backgrounds, pill buttons, or gradient text for in-prose links. Page-navigation links ("Todos los posts", "Siguiente", "Anterior", "Créditos") follow the same treatment.

**The Opacity-Honest Rule.** Opacity is not a contrast strategy. Muted text (dates, tags, labels) still needs ≥4.5:1 against its background. If `opacity-40` or `opacity-50` fails the contrast check, darken the ink toward Ink Body / Ink Soft — don't lower opacity further. The current `opacity-40` on "Siguiente" / "Anterior" labels is a known contrast risk and should be lifted to `opacity-60` minimum or replaced with a darker ink color.

## 4. Elevation

Flat by default. There are no box-shadows on content, cards, buttons, or inputs. Depth is conveyed through opacity, tonal layering (stone-300 on stone-200, zinc-900 on zinc-950), and typographic hierarchy. The single allowed ambient lift is the floating header pill: `backdrop-blur-xs` plus a soft `bg-linear-to-tr` gradient on an `::after` pseudo at `blur-3xl`. That's the only place blur appears.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. No `box-shadow` on cards, buttons, inputs, or prose containers. The header's backdrop-blur is the one ambient exception; everything else uses tonal layering and opacity for depth. If you reach for a shadow, ask why the tonal layering isn't doing the job.

## 5. Components

### Post List Item (signature)
The dashed-leader row is the site's signature component — inherited from Manuel Moreale, evolved locally. A three-column grid: `[title] [dashed leader] [date]`, with tags on a second line in serif italic. The title is Geist sans at 0.875–1rem; the leader is a 1px dashed bottom-border that flexes to fill; the date is Geist at 0.75–0.875rem. Resting at `opacity-80`, hovering to `opacity-100`. The title is truncated with `max-w-[30ch] whitespace-nowrap` — a known overflow risk on narrow screens that should be revisited.
- **Shape:** no radius, no border, no background.
- **Hover:** opacity 0.8 → 1.0, `transition-all ease-out 200ms`.

### In-prose Link
- **Style:** `text-decoration: underline; text-underline-offset: 0.2rem; text-decoration-thickness: 0.05em`.
- **Resting:** underline color Underline Faint (zinc-400) in light mode, Underline Faint Dark (zinc-500) in dark.
- **Hover:** underline deepens to Ink Body (zinc-900) / Ink Soft (zinc-200), `transition-all ease-out 0.2s`.
- **Never:** background fill, pill shape, or gradient text.

### Header (floating nav pill)
A fixed pill at `bottom-4` on mobile / `top-12` on desktop, centered, with `header-lateral-spacing`. A rounded-3xl (24px) container with `bg-stone-300/50` (light) / `bg-zinc-900/50` (dark), `backdrop-blur-xs`, a 1px border at `neutral-400/20` / `zinc-200/10`, and a diffuse `bg-linear-to-tr` gradient on `::after` at `blur-3xl`. The menu toggles a `max-h` transition (ease-in-out, 300ms). The theme toggle sits inside.
- **Shape:** rounded-3xl (24px) — the one place large radius is allowed.
- **States:** menu items rest at `opacity-80`, hover to `opacity-100`.

### Blockquote
- **Style:** `border-left: solid 1px garden-lime` (lime-400) in light mode, `garden-lime-dark` (lime-800) in dark. `padding-left: calc(var(--spacing) * 4)`.
- **Never:** a border-left wider than 1px (see absolute bans — side-stripe borders). The stripe is exactly 1px.

### Message (callout)
A lime-tinted callout for personal notes (e.g. "Mejorando Linkeee"). A `::before` pseudo-element paints a `linear-gradient(135deg, rgba(190,242,100,0.16) 0%, rgba(190,242,100,0.02) 100%)` tint at full opacity in light mode; in dark mode the stops shift to `rgba(132,204,22,0.14)` / `rgba(132,204,22,0.02)`. The body uses Newsreader at 1.4 line-height; links inside use lime-500 underline.
- **Shape:** rounded default (10px).
- **Never:** a solid lime fill — only the 16%-opacity gradient tint.

### Featured Music (playlist card)
An album-art + links card for the playlists page. Square cover image, artist/release metadata, and Spotify / Apple Music links. Small variant (annual playlists) and default variant.
- **Shape:** rounded default (10px) on the image.
- **Links:** external, `target="_blank" rel="noopener noreferrer"`.

### Prose Container (.post)
The reading unit. `max-width: 68ch`, Newsreader, 1.75 leading on paragraphs. Headings switch to Inter Tight with 0.02em tracking. Lists use a hollow-bullet `◦` marker. Code blocks get a sticky language label via `pre::before { content: attr(data-language) }`. The footnotes section hides its h2 and dims to `opacity: 0.7`.

## 6. Do's and Don'ts

### Do:
- **Do** cap prose measure at 68ch (`.post { max-width: 68ch }`). The post column is the reading unit.
- **Do** use the three-family system as intended: Newsreader for reading, Inter Tight for titles, Geist for navigation/labels. Don't blur the roles.
- **Do** keep body text contrast ≥4.5:1. Ink Body (zinc-800) on Warm Stone Paper (stone-200) passes; dark-mode Ink Soft (zinc-200) on Quiet Ink (zinc-950) passes. When in doubt, darken the ink.
- **Do** use `text-wrap: balance` on h1–h3 and `text-wrap: pretty` on long prose to reduce orphans.
- **Do** honor `prefers-reduced-motion`: every transition needs a crossfade or instant fallback.
- **Do** keep the header's backdrop-blur as the single ambient lift. It earns its place by floating over scrolling content.

### Don't:
- **Don't** use the Garden Lime accent on more than 5% of any screen. Per The One Voice Rule, it's the blockquote stripe and the Message tint — nothing else.
- **Don't** use SaaS landing-page tropes: hero-metric stat blocks (big number + small label), gradient accents, saturated banner sections, identical icon-card grids. This is a personal blog, not a product launch.
- **Don't** use brutalist / maximalist type: oversized display that sacrifices readability for impact, type experiments that turn the page into noise. The writing is the point; the type serves it.
- **Don't** use a warm beige / cream / sand / paper / parchment body background. The No-Beige Rule: the light body is Warm Stone Paper (stone-200), and warmth lives in the type and voice, not the bg.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe. The blockquote stripe is exactly 1px; anything wider is the side-stripe anti-pattern.
- **Don't** use `background-clip: text` with a gradient (gradient text). Emphasis comes from weight or size, never a gradient fill.
- **Don't** use box-shadows on cards, buttons, or inputs. The Flat-By-Default Rule: tonal layering and opacity carry depth; the header blur is the only exception.
- **Don't** pair `border: 1px solid X` with a wide soft `box-shadow` (M ≥ 16px blur) on the same element. Pick one or none.
- **Don't** round cards / sections / inputs beyond 10px. The header pill at 24px is the one exception; everything else stays at 4–10px.
- **Don't** put a tiny uppercase tracked eyebrow above every section. One named kicker as a deliberate brand system is voice; an eyebrow on every section is AI grammar.
- **Don't** use `opacity-40` or `opacity-50` on body text as a contrast strategy. Per The Opacity-Honest Rule, if it fails 4.5:1, darken the ink instead.