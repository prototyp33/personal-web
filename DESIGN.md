---
name: Adrian Javier Iraegui
description: Warm blush bento of public facts, with one deep cobalt contact card.
colors:
  canvas: "#f6f0ec"
  card: "#f8e0db"
  card-deep: "#f0cdc6"
  ink: "#161311"
  muted: "#5c3330"
  accent: "#163a82"
  accent-ink: "#f7f2ee"
  accent-press: "#12336f"
  line: "#e4c4bc"
  bloom: "#b85a54"
typography:
  display:
    fontFamily: "Urbanist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 3.8vw, 3.15rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.034em"
  headline:
    fontFamily: "Urbanist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 2.8vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Urbanist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Urbanist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Urbanist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  card: "1.75rem"
  preview: "1.15rem"
  link: "1rem"
spacing:
  edge: "1rem"
  compact: "0.75rem"
  bento: "0.9rem"
components:
  topbar:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.05rem 1.4rem"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.accent}"
  statement:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.card}"
    padding: "1.5rem 1.6rem 1.7rem"
  portrait:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
  bio:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "3.4rem 1.45rem 1.5rem"
  projects:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.15rem 1.2rem 0.45rem"
  preview:
    backgroundColor: "{colors.card-deep}"
    rounded: "{rounded.preview}"
  project-link:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.link}"
  project-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.link}"
    padding: "0.95rem 0.15rem"
  contact:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.card}"
    padding: "1.2rem 1.25rem 1.3rem"
  contact-hover:
    backgroundColor: "{colors.accent-press}"
    textColor: "{colors.accent-ink}"
  socials:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0.95rem 1.15rem"
  social-link:
    textColor: "{colors.ink}"
  social-link-hover:
    textColor: "{colors.accent}"
  skip-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    padding: "0.55rem 0.9rem"
---

# Design System: Adrian Javier Iraegui

## Overview

**Creative North Star: "The Brief-Pinned Bento"**

The home is one warm desk of public facts. A near-white canvas holds blush tiles that share one corner. Urbanist carries every line, from the tight statement to the wide-tracked bar. Depth is a tonal stack: warm paper, blush tile, a deeper blush well in the first project, and a single cobalt card for contact.

The statement is the largest type. Its roman lines are weight 700 and its italic line is weight 500. A line-drawn bloom sits in that card, and a smaller bloom sits in the bio. The portrait is an authored abstract plate until a photograph is set. Project titles turn cobalt on hover. The contact card is the only tile that is cobalt at rest, and it darkens on hover.

A full-width bar sits over a three-column bento on the desktop. At a maximum width of 860px those regions stack in one column. Focus is a cobalt ring, and the ring turns cream on the cobalt card. The corner mark nudges and scrolling is smooth only when reduced motion is not requested.

**Key Characteristics:**

- Warm paper canvas, blush tiles, one cobalt action
- Urbanist for display and body; italic only inside the statement
- One tile radius of 1.75rem and a flat tonal stack
- Three columns on the desktop, one column from 860px down
- Cobalt focus ring; cream when the ring sits on the contact card

## Colors

The field is warm and low-chroma. Cobalt is the only action hue. Bloom is a line color, not a tile fill.

### Primary

- **Deep Cobalt** (#163a82): the contact tile, text selection, the focus ring, hovered ink links, and the scrollbar thumb.
- **Pressed Cobalt** (#12336f): the contact tile on hover. The stylesheet writes this as a literal on the hover rule.

### Secondary

- **Bloom** (#b85a54): the stroked flower in the statement and the bio. The same hue appears in the authored plates. It does not fill a tile.

### Neutral

- **Warm Paper** (#f6f0ec): the page canvas and the scrollbar track.
- **Blush** (#f8e0db): the bar, statement, portrait, project rail, bio, and social strip at rest.
- **Blush Well** (#f0cdc6): the ground of the featured project's preview.
- **Warm Ink** (#161311): text on blush.
- **Muted Rose** (#5c3330): project descriptions, the place line, and the pending social note.
- **Cream** (#f7f2ee): text on cobalt, selected text, and the focus ring on the contact tile.
- **Blush Hairline** (#e4c4bc): the 1px rule between project rows.

**The One Cobalt Rule.** Cobalt is the contact surface, the text selection, the focus ring, and the hover of ink links. It does not fill a second tile.

**The Blush Field Rule.** Every resting tile uses the same blush. The deeper blush is only the project preview well.

## Typography

**Display Font:** Urbanist (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Urbanist (with ui-sans-serif, system-ui, sans-serif)

**Character:** One geometric sans, loaded with `next/font` as weights 400, 500, 600, and 700, roman and italic, on `--font-urbanist`. Display is large and tight. Labels are small, uppercase, and widely tracked. Italic is a weight-500 line inside the statement, not a second family.

### Hierarchy

- **Display** (700, clamp(2.15rem, 3.8vw, 3.15rem), line-height 1.02, tracking -0.034em): the statement, capped at 16ch. Roman lines stay at 700. Italic lines drop to 500 and italic. From 860px down the size is clamp(2rem, 9vw, 2.55rem).
- **Headline** (700, clamp(1.9rem, 2.8vw, 2.4rem), line-height 0.95, tracking -0.035em): the contact title. The line above it is 0.95rem, weight 500, line-height 1.3, sentence case, capped at 12ch.
- **Title** (600, 1.35rem, line-height 1.15, tracking -0.03em): the featured project name. Later rows use 1.2rem at the same weight and tracking.
- **Body** (400, 1.02rem, line-height 1.55): the root size. Bio copy is 0.98rem at the same line-height, capped at 38ch. Project descriptions are 0.92rem, line-height 1.45, in muted rose; row descriptions clamp to two lines.
- **Label** (600, 0.74rem, tracking 0.14em, uppercase): the nav. The name in the bar is 0.78rem at the same weight and tracking. Social labels are 0.72rem at 0.13em. The pending note is 0.62rem at 0.08em.

**The Single Face Rule.** Urbanist is display and body. Statement lines that are italic are weight 500; statement lines that are roman are weight 700. The system-ui stack is the fallback, not a second face.

**The Tracked Label Rule.** The bar, the nav, and the social strip are uppercase, weight 600, and widely tracked. Projects and About do not take a second visible heading inside their tiles.

## Layout

The shell is `min(70rem, calc(100% - 2rem))`, centered, with 1.15rem above and 2rem below. Each side inset is 1rem. From 860px the side inset is 0.75rem and the top margin is 0.75rem.

The bar is a flex row, space-between, with 0.9rem under it. From 860px the name stacks over the nav, and the three links spread across the full width.

The bento is three columns, `minmax(0, 1.32fr) minmax(0, 0.9fr) minmax(0, 1.05fr)`, gap 0.9rem. Statement and portrait sit over bio and contact. The project rail spans both rows. The social strip occupies column three across both rows and aligns to the end of that cell. Statement and portrait share a 17.5rem minimum height. The contact tile's minimum is 11.5rem.

At max-width 860px the bento is one column, gap 0.75rem, in this order: statement, portrait, projects, bio, contact, socials. The bar stays above the grid. The portrait frame becomes 4/5. The statement minimum becomes 16rem. The contact minimum becomes 11rem. The rail drops the height it reserved for the social strip. The statement bloom shrinks from 5.4rem to 3.6rem. Document scroll-padding is 1rem.

**The One Stack Rule.** At max-width 860px the page becomes one column in this order: bar, headline, portrait, projects, bio, contact, socials.

## Elevation & Depth

The system is flat. No element sets a box-shadow. The canvas is the ground, blush tiles sit on it, the preview well steps one tone deeper, and the cobalt card is the surface that changes hue. Project rows separate with a 1px hairline. Focus is a 2px solid outline, 3px outside the edge: cobalt on blush, cream on the contact tile. The skip link uses a higher z-index only while it is focused.

**The Tonal Stack Rule.** There is no shadow vocabulary. Depth is the canvas, the blush tile, and the preview well. The cobalt card is the surface that changes hue.

## Shapes

The bar and every bento tile share a 1.75rem corner. Inside the project rail, the preview well is 1.15rem and the project link's own radius is 1rem. The skip link is a pill because it is a floating focus target, not a tile. The bloom is an eight-petal line drawing, stroke 1.25, in the bloom hue: 5.4rem in the statement, 3.6rem from 860px down, and 1.35rem in the bio.

**The Shared Corner Rule.** The bar and every bento tile use 1.75rem. The preview well at 1.15rem and the project link at 1rem stay inside the rail.

## Components

### Buttons

There is no filled button component. The contact tile is the primary action: cobalt ground, cream type, padding 1.2rem 1.25rem 1.3rem, minimum height 11.5rem (11rem from 860px). Hover replaces the ground with pressed cobalt. Focus draws the cream ring. The skip link is cobalt with cream type, padding 0.55rem 0.9rem, 0.85rem at weight 600. It stays off-screen until focused, then sits 0.75rem from the top of the viewport.

### Cards / Containers

- **Corner Style:** 1.75rem on every tile.
- **Background:** blush, except the contact tile.
- **Shadow Strategy:** none. See Elevation & Depth.
- **Border:** none on the tiles. A 1px blush hairline separates project rows.
- **Internal Padding:** statement 1.5rem 1.6rem 1.7rem, content aligned to the end; bio 3.4rem 1.45rem 1.5rem so the small bloom can occupy the top left; projects 1.15rem 1.2rem 0.45rem; socials 0.95rem 1.15rem; bar 1.05rem 1.4rem.

### Navigation

The bar carries the name and three in-page links: Projects, About, Contact. Links are uppercase, weight 600, tracking 0.14em, with no underline. Hover turns the link cobalt. From 860px the bar becomes a column and the links justify across the width. Smooth scrolling applies only when reduced motion is not requested.

### Project rail

The featured project shows the title, the description, and a 16/10 preview on the blush well. Later projects are rows: hairline on top, padding 0.95rem 0.15rem, title at 1.2rem, description clamped to two lines. The title turns cobalt on hover. Visited and resting titles stay ink.

### Social strip

Labels sit on one baseline, space-between, uppercase, 0.72rem, weight 600, tracking 0.13em. Hover turns a real link cobalt. An entry without a URL remains text and adds a muted Pending note at 0.62rem. It does not look like a button.

### Portrait and bloom

The portrait is an abstract plate in the tile, covered by a photograph when one is set. On the stacked layout the frame is 4/5. The bloom is decorative and hidden from assistive tech. Plate drawings reuse the theme hues.

**The Quiet Hover Rule.** Ink links turn cobalt. The contact tile darkens to pressed cobalt. No other hover color is defined.

## Do's and Don'ts

### Do:

- **Do** keep every resting tile on the blush, on the warm paper canvas, at a 1.75rem corner.
- **Do** reserve cobalt for the contact tile, text selection, focus, and ink-link hover.
- **Do** set italic statement lines in Urbanist italic at weight 500 and roman statement lines at weight 700.
- **Do** stack the page from 860px down as bar, headline, portrait, projects, bio, contact, socials.
- **Do** draw focus as a 2px ring, 3px outside the edge: cobalt on blush, cream on the contact tile.
- **Do** gate the corner nudge and smooth scrolling behind a no-preference motion query.

### Don't:

- **Don't** add a drop shadow, a second resting tile color, or a salmon accent.
- **Don't** add another type family, and don't treat the system-ui fallback as the display face.
- **Don't** put a visible heading inside the project rail or the bio tile.
- **Don't** give a social item without a URL a fake href or a button fill.
- **Don't** move the social strip out of the third column above the 860px stack.
