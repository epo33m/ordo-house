# ORDO Design System

> **Brand direction:** Hybrid minimalism with a warm, editorial character and a
> subtle technology edge.
>
> **Purpose:** The visual foundation for the ORDO website, blog, portfolio, and
> future brand touchpoints.
>
> **Source:** Adapted from ORDO Design System v1.0. Contrast values are measured,
> not assumed, and every value below states its reason (antislop R-31).

This file is **direction**. antislop is the **filter** applied on top of it.
Neither replaces the other.

---

## 1. Identity

ORDO combines strategy, design, and technology to turn ideas into considered
digital systems.

- **Minimal**: intentional, uncluttered, focused.
- **Warm**: earthy neutrals rather than cold, generic tech aesthetics.
- **Precise**: structured layouts, consistent spacing, clear hierarchy.
- **Curious**: room for experimentation in content, interaction, and storytelling.

### Dials

```
Dial: ENERGY 2 / RHYTHM 2 / MOTION 1
```

| Dial | Value | Why |
|---|---|---|
| ENERGY | 2 | Assured, not shouty. Says hello without performing. |
| RHYTHM | 3 | Sections visibly vary in composition, alignment, and surface. Raised from 2 on 2026-10-18: at RHYTHM 2 every section was a left-aligned heading plus a list at identical padding, which is the uniform-rhythm failure R-05 names. |
| MOTION | 1 | Motion supports usability only. The brief states effects must not distract from content, so no scroll choreography, parallax, or reveals. |

### One deliberate peak

The hero is **ENERGY 3 inside an ENERGY 2 system**: a hero-scale headline at
weight 750 and 0.95 leading. Nothing else on the site is allowed to reach that
intensity. That contrast is the point. Every other section stays at ENERGY 2 or
below, and the peak is recorded here so it reads as a decision rather than as
output drifting past its own dial.

The peak is expressed through type and space only. No colour, glow, gradient,
or animation is added to achieve it, which keeps it inside R-01 and R-19.

**Hero layout: centred, single column.** Owner direction, 2026-10-18. Eyebrow,
headline, one supporting sentence, two actions, all on the centre axis. This
replaced an earlier two-column arrangement with the wordmark on the left, which
was the more editorial choice and sat better with RHYTHM 2.

The reason for the change: one focal point becomes unambiguous, scanning order
is conventional rather than something to discover, and the hero reads identically
at every width instead of needing a breakpoint to decide where the brand sits.

Recorded honestly: a centred hero is the most common landing pattern on the web,
so it is closer to convention than to characterisation. What keeps it from being
slop is that it is stated rather than defaulted, the supporting sentence is a
real claim from section 1, and no section below it repeats the centred
composition. RHYTHM 2 is honoured by the sections, not by the hero.

**Reading as:** `<page kind>` for `<audience>`, in a warm editorial language,
dial ENERGY 2 / RHYTHM 2 / MOTION 1.

### Design principles

1. Every element has a clear purpose.
2. Typography and spacing establish hierarchy before decoration.
3. Tobacco Leaf is an accent, never a substitute for contrast.
4. Components stay consistent across pages and breakpoints.
5. Motion supports usability rather than distracting from content.

---

## 2. Color

### Tokens

| Token | Hex | Role | Reason |
|---|---|---|---|
| `--color-canvas` | `#1F1F1F` | Dark page background | Warm near-black. Softer than pure black under long reading. |
| `--color-charcoal` | `#2B2B2B` | Dark cards, raised surfaces | One step off canvas so surfaces read without shadows. |
| `--color-snow` | `#FFFAFA` | Text on dark, light surfaces | Slight warm tint avoids blue cast next to khaki. |
| `--color-canvas-light` | `#F4F1EC` | Light page background | Warm paper tone, not clinical white. |
| `--color-tobacco` | `#8C7853` | Brand hue: borders, large text, decorative | The brand colour. **Not** for small text or button fills, see below. |
| `--color-tobacco-strong` | `#7E6B4B` | Button fills, filled controls | Darkened from the brand hue so Snow text clears 4.5:1. Same hue family, so identity holds. |
| `--color-accent-text` | `#A8905F` | Small accent text on dark | Lifted from the brand hue so it clears 4.5:1 on both canvas and charcoal. |
| `--color-accent-text-light` | `#6B5A3C` | Small accent text on light | Darkened for light backgrounds. |

### Measured contrast

Every pair below was checked with the antislop contrast checker, not estimated.

| Pairing | Ratio | Normal text 4.5:1 | Large text 3:1 |
|---|---|---|---|
| Snow on Canvas | 15.94:1 | PASS | PASS |
| Snow on Charcoal | 13.69:1 | PASS | PASS |
| Snow on Tobacco Strong | 4.96:1 | PASS | PASS |
| Accent Text on Canvas | 5.35:1 | PASS | PASS |
| Accent Text on Charcoal | 4.60:1 | PASS | PASS |
| Charcoal on Snow | 13.69:1 | PASS | PASS |
| Charcoal on Canvas Light | 12.57:1 | PASS | PASS |
| Accent Text Light on Canvas Light | 5.91:1 | PASS | PASS |

### Known-failing pairs, do not use

| Pairing | Ratio | Why it fails |
|---|---|---|
| **Snow on Tobacco `#8C7853`** | 4.12:1 | Below 4.5:1. This is why buttons use Tobacco **Strong**. |
| **Tobacco `#8C7853` on Canvas** | 3.87:1 | Below 4.5:1. Use Accent Text for small text; Tobacco is fine for borders, rules, and large text only. |
| **Charcoal on Tobacco** | 3.32:1 | Below 4.5:1. Never put Charcoal text on a Tobacco fill. |

### Non-text contrast (WCAG 1.4.11, 3:1)

Borders that identify a control must reach 3:1. Decorative dividers are exempt.

| Token | Hex | On | Ratio |
|---|---|---|---|
| `--border-strong` (dark) | `#6B6B6B` | Canvas | 3.09:1 PASS |
| `--border-strong` (light) | `#8A857D` | Snow | 3.54:1 PASS |
| `--border-subtle` (dark) | `rgba(255,250,250,0.16)` | Canvas | decorative only |

### Usage balance

Starting point, not a rigid rule: 60% Canvas/Charcoal surfaces, 30% Snow for
text and negative space, 10% Tobacco family for actions and highlights.

- Never introduce a second accent without a specific product reason (R-29).
- For long-form articles prefer a light reading surface for comfort.

---

## 3. Typography

| Role | Typeface | Weight | Reason |
|---|---|---|---|
| Display | Plus Jakarta Sans | 700 | Owner direction, 2026-10-18. A geometric grotesque with enough character to carry a warm editorial brand without shouting, and wide enough at display size that the expanded feel survives. |
| Heading | Plus Jakarta Sans | 600 | Same face, quieter weight. |
| Body | Plus Jakarta Sans | 400 | Same face, tuned for reading at 16px. |
| Emphasis | Plus Jakarta Sans | 500 / 600 | Labels and metadata. |

### Direction override on record

antislop R-06 names Inter, Geist, and Space Grotesk as common AI-default picks,
and Plus Jakarta Sans sits in the same category of widely-used geometric sans.
The owner chose it anyway. This is a deliberate identity choice, not a default,
and the override is recorded here so it is never mistaken for an unexamined one
later.

Two consequences, accepted:

- **Display and body are the same face.** Hierarchy comes from weight, size,
  and spacing rather than a contrast of typefaces. `--font-display` is kept as a
  role token so a distinct display face can be introduced later without touching
  every component.
- **The typeface is now self-hosted.** This reverses the earlier decision to use
  a system stack with no webfont at all. The trade is worth it: a named system
  face resolved differently per platform, so Windows and Linux visitors saw
  Arial while macOS and iOS visitors saw Helvetica. One self-hosted file renders
  identically everywhere, and next/font generates metric-compatible fallback
  overrides so there is still no layout shift.

### Scale

| Style | Desktop | Mobile | Line height |
|---|---|---|---|
| Hero | 64 to 88px | 40 to 52px | 0.95 to 1.05 |
| H1 | 48 to 64px | 36 to 40px | 1.05 to 1.15 |
| H2 | 32 to 40px | 28 to 32px | 1.1 to 1.2 |
| H3 | 24 to 28px | 22 to 24px | 1.2 to 1.3 |
| Body large | 18px | 17 to 18px | 1.5 to 1.7 |
| Body | 16px | 16px | 1.5 to 1.7 |
| Caption | 12 to 14px | 12 to 14px | 1.4 to 1.5 |

Implemented as `clamp()` so type is fluid but never drops below the mobile
minimum.

### Rules

- Sentence case for headings. All caps only for short labels and metadata.
- Max two font weights per page.
- Comfortable reading width for long-form body copy.
- No webfont request: the face is referenced by name, so there is no download
  and no layout shift.

### Expanded is tracking, not width

Owner asked for Helvetica Expanded on 2026-10-18. It could not be delivered as
asked, and the substitution is recorded here rather than left to be discovered.

- Helvetica has no Expanded width. macOS and iOS ship Helvetica Neue with
  Light, Medium, Bold, Thin, and two Condensed cuts, but nothing wider.
- `font-stretch` was not used. It only applies to variable fonts or families
  that declare width variants, so on a static system face it does nothing at
  all while still passing lint and typecheck.
- A licensed Helvetica Expanded cannot be served on the web without a Linotype
  web licence, so it cannot be self-hosted either.
- The typeface changed to Plus Jakarta Sans afterwards, which is wide enough at
  display size that the expanded feel partly comes from the face itself rather
  than only from letterspacing.
- What ships for tracking is: `--tracking-display` 0.02em,
  `--tracking-heading` 0.012em, `--tracking-tight` 0.005em.

**What this is and is not.** Tracking changes texture, not proportion. A real
Expanded cut has wider glyphs; letterspaced Helvetica has the same glyphs set
further apart. It reads as an editorial, airy treatment, which is a legitimate
look, but it is not a wider cut of the same face and should not be described as
one. Past roughly 0.06em the effect stops reading as a width and starts reading
as a different typographic decision, so the values stay small.

If a genuine wide cut is wanted later, the honest route is a variable grotesque
with a real width axis, such as Archivo, accepting one webfont request. That was
offered and declined in favour of tracking.

---

## 4. Layout and spacing

| Breakpoint | Columns | Gutter |
|---|---|---|
| Mobile | 4 | 16px |
| Tablet | 8 | 20 to 24px |
| Desktop | 12 | 24px |

Container max 1440px. 8px base spacing scale: `space-1` 8, `-2` 16, `-3` 24,
`-4` 32, `-5` 48, `-6` 64, `-7` 96.

- Whitespace establishes hierarchy instead of added borders.
- Stack complex layouts on mobile rather than shrinking them.
- Use asymmetry selectively, always on the grid.

---

## 5. Shape, borders, effects

| Token | Value | Use |
|---|---|---|
| `--radius-small` | 8px | Small controls, tags |
| `--radius-button` | 12px | Buttons, inputs |
| `--radius-card` | 16px | Cards |
| `--radius-large` | 20px | Feature cards |
| `--radius-pill` | 999px | Pills and selected nav only |

Radius variation is a hierarchy tool. Do not make every element a pill (R-11).

- Prefer borders to heavy shadows.
- Reserve `--shadow-overlay` (`0 16px 48px rgba(0,0,0,0.24)`) for layered
  surfaces such as menus and overlays.
- No gradients as decoration. No glow. No glassmorphism. This system earns its
  character from type, spacing, and asymmetry instead (R-01, R-10, R-13).

---

## 6. Components

### Buttons

- **Primary**: Tobacco Strong fill, Snow text, radius 12px, min-height 44px,
  padding 12 to 16px vertical and 20 to 24px horizontal.
- **Secondary**: transparent fill, `--border-strong` border, current text colour.
- States: visible hover, focus, active, and disabled. Never colour alone.
- 44px minimum height on every breakpoint, matching Apple's 44x44pt guidance.

### Navigation

Concise, with a clear active state. On mobile a menu control with a real
expanded and collapsed state. Every nav item points to a page that exists
(R-24). No links to nowhere.

### Inputs

Real label, placeholder is never a substitute. Visible focus and error states.
Errors in plain language.

### Cards

Reusable patterns: project, article, service, feature. Cards share spacing,
type, border, and radius conventions. Variation is allowed only when it
communicates a real difference in content.

### Badges

Short labels for category, status, or metadata. Restrained. Do not turn every
piece of metadata into a badge (R-09).

---

## 7. Content

- **Hero**: eyebrow, one headline, one supporting sentence, one primary CTA,
  optional supporting element. Not a template with filler sections.

### Hero device

The hero headline is set at hero scale, tight leading, and weight 750:
**Ordo House** on a single line, owner wording from 2026-10-18. The mark sits
above it. The subhead is **Digital Agency**, also owner wording. The fuller
statement, "ORDO combines strategy, design, and technology to turn ideas into
considered digital systems", was the subhead until 2026-10-18 and remains the
substance the rest of the page expands on.

**The three gaps in the lockup are owner-set, not derived.** Mark to name,
24px rising to 32px at sm. Name to subhead, 16px rising to 20px at sm, down
from a flat 32px. Subhead to the CTA row, a flat 40px. The pattern is
deliberate: the two gaps inside the identity block bind it into one unit, and
the larger one is what separates that unit from the actions. Do not flatten
these to a single value, and do not restore the old 32px under the name, the
reason being that the subhead reads as part of the wordmark lockup rather
than as a separate paragraph.

**Hero height is one viewport, following Apple's tile model.** `apple/DESIGN.md`
records that each Apple tile occupies roughly one viewport. The hero is
`min-h-[calc(100svh-4.75rem)]`, rising to `calc(100svh-5.25rem)` at sm. The
subtraction is the header, which is a normal-flow sibling: a bare `100svh`
would push the lockup below the fold by exactly the header height. `svh`
rather than `vh` so a retracting mobile URL bar cannot cut the hero short.

**The lockup is centred in that height.** There was a period when the tile was
split into two groups, the lockup and an identity strip, with the strip pushed
to the tile's bottom edge. The strip has since been removed by owner
instruction, so the tile is one centred group again and the wrapper div and
flex plumbing went with it.

That detour is worth recording, because the first attempt at a viewport-tall
hero did not work and the reason was not the height. Centring everything in one
column, with a strip in the middle, gave a hero that measured 91% of the
viewport and still looked unchanged: 135 to 243px of dead space sat between
the strip and the bottom of the screen, and the eye read that band as
unfinished. Removing the strip fixed it for a different reason than expected,
since there is now nothing left to float in the space.

Measured, hero as a share of viewport: 91% at 1440x900, 92% at 1920x1080, 92%
at 768x1024, 91% at 390x844, and 89% at 375x667. That last one is the shortest
common phone and it is the case the strip used to break: with the strip present
the hero ran to 117% of the viewport and pushed content below the fold, because
min-height cannot shrink content. It now fits. Centring is exact: 244px above
the mark and 244px below the last CTA at 1440x900.

**There is no strikethrough.** An earlier revision used a struck article as a
device. It was dropped because that device depends on a word that can be
removed without breaking the sentence, and this headline has none. Striking
"and", "what", or "you" each produces a broken clause. Forcing a bar onto any
of them would be decoration standing in for meaning, which is the specific
failure this system is built to avoid (C-1, R-31).

The `.strike-accent` utility remains in `globals.css` unused, ready for a
headline where the device genuinely applies. If it is still unused when the
tokens are next reviewed, delete it rather than leaving it to look intentional.

**There is no eyebrow above the headline.** An earlier revision carried
"Strategy, design, technology" there while the subhead directly below said the
same three words. It added a line of reading and no fact, which is the R-09
tell in its plainest form. The subhead carries that content and it is enough.

### Copy decisions on record

One heading previously announced its own item count ("Three disciplines, one
system"). Counting is an R-36 tell: the number is the model's way of sounding
complete. The trio is real content, so it stayed; the heading stopped
announcing it.

- "What we bring to a project"

The second heading on this list, "What we judge the work against", is gone. The
identity strip it labelled was removed by owner instruction on 2026-10-18. Its
four words, Minimal / Warm / Precise / Curious, remain the stated identity in
section 1 and are still what the work is judged against; they are simply no
longer printed on the page.

The footer no longer reads "Direction documented in DESIGN.md". That was
internal tooling text sitting on a public page.

### Logo

The mark is a disc with an inner circle that pinches into a stem flaring to
the disc edge. Owner asset, supplied 2026-10-18 as a logo board.

Shipped as inline SVG in `src/components/logo.tsx`, from the owner vector
supplied 2026-10-18. Geometry is untouched from the source: disc `r=70.312`
at (90,90), inner circle `r=22.852` on the same centre, and a stem running
from that centre out to the disc edge.

Before the vector arrived, the mark was reconstructed from the supplied raster
board by measuring the silhouette at 140px and fitting it. That fit differed
from the source by 2.2% of pixels and got the stem's construction wrong: it
measured as a trapezoid pinching below the inner circle, where the real path
is a triangle whose apex sits on the disc centre. The two agree below the
inner circle, which is why the error was small. The reconstruction is gone.

Two changes to the supplied file, both deliberate:

- **The disc is `currentColor`, not `#FFFAFA`.** One component is then correct
  on canvas, on the inverted band, and on the accent band without a variant
  per theme.
- **The mask id is generated, not the literal `mask0_30_10`,** because the mark
  renders twice per page and a repeated id would collide. The supplied
  `clipPath` is dropped: it clips to the 180x180 viewBox, which the viewBox
  already does.

One thing still recorded rather than assumed:

- **The mark is used alone; the wordmark stays live text.** The board's
  wordmark reads ORDO in a squarish techno face that is not Plus Jakarta Sans,
  and the brand is now Ordo House, so using the board's wordmark would both
  contradict the name and clash with the site typeface. Send the real wordmark
  vector and it can replace the text.

The knockout is an SVG mask, not a second colour, so the cut is genuinely
transparent and one component works on canvas, inverted band, and accent band.
It inherits `currentColor`. Mask ids come from `useId` because the mark
appears twice per page.

| Surface | Ratio | 3:1 required for a graphic |
|---|---|---|
| Snow on Canvas | 15.94:1 | PASS |
| Snow on Tobacco Strong | 4.96:1 | PASS |
| Charcoal on Snow | 13.69:1 | PASS |
| Charcoal on Canvas Light | 12.57:1 | PASS |

This closes the R-23 open item carried since the design system was installed.

### Structural import from Apple

Owner instruction, 2026-10-18: take Apple's **layout, structure, and hierarchy**
only. Installed with `bunx getdesign add apple` into `apple/DESIGN.md`
(MIT, [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)).
That file is **reference, not direction**; see AGENTS.md.

| Adopted | Value | Was |
|---|---|---|
| Body size and line | 17px / 1.47 (25px line) | 16px / 1.65 |
| Section padding | 48 / 64 / **80px** | 48 / 64 / 96px |
| Text container | **980px** for prose | 1440px only |
| Breakpoints | 480 / 640 / 833 / **1068** / 1440 | 640 / 1024 |

**Tried and reverted:** Apple's hero-display curve of 28 / 34 / 40 / 56px with
weight 600 and leading 1.07. Adopted on 2026-10-18, put back the same day. At
56px the name read too small sitting under the mark in the hero lockup. The
hero is back to `clamp(2.5rem, 7vw, 5.5rem)` topping at 88px, weight 700,
leading 1, tracking 0.02em, which is what it was before the import. Everything
else Apple contributed was kept.

Apple's spacing is an 8px base, which this system already used. Its
whitespace rule, at least 64px of air above a headline and 48 to 64px below,
is satisfied by the 80px section. Its observation that tiles stack
edge-to-edge with no gap and "the colour change provides the break" is what
the band tokens already do.

**Two things deliberately not imported:**

- **Flat 80px section padding.** Apple's own responsive table tightens it to
  48px on a small phone, so the curve is taken rather than the number.
  `antislop-layoutmobile` bans desktop-scale padding held on mobile.
- **Apple's dense footer.** Its file notes the footer is the one place Apple
  breaks its whitespace rule, to expose the full information architecture at a
  glance. That cannot be done honestly here: there is no real IA to expose, and
  R-24 and R-26 forbid links to nowhere. Inventing a link column to fill it
  would be worse than the sparse footer.

**Refused outright:** Apple's palette (Action Blue `#0066cc`) and its type
(SF Pro). Adopting either would be a different brand, not a different layout.

**R-30 note.** Apple's *layout grammar* carried on ORDO's palette and typeface
is influence, not cloning. The test is whether the result still belongs to
ORDO: swap the logo and it must not read as apple.com. It does not, because the
palette, type, and mark are ORDO's. This is recorded so a later pass does not
drift from borrowing structure into copying identity.

**Hero tracking, deliberately unresolved.** Apple pairs its type with -0.28px
tracking. ORDO keeps a positive value because the expanded look was an owner
instruction, at 0.02em. That value was briefly halved to 0.01em while the hero
was on Apple's smaller 56px scale, and returned to 0.02em when the size came
back. The owner keeps positive over Apple's negative, so the expanded look
stands.

### Page structure

One page, three real sections. The order follows how a visitor decides: what
this is and what it values, what it does, how it is judged, how to reach it.

**Four distinct compositions**, which is what RHYTHM 3 requires:

| # | Block | Alignment | Surface |
|---|---|---|---|
| 1 | Hero | centred | page |
| 2 | Capabilities | left, staggered | page |
| 3 | Principles | left | inverted band |
| 4 | Contact | centred | accent band |

The alignment pattern is deliberate: centre opens, left carries the middle,
centre closes. Three surfaces, so no two adjacent blocks read the same way.

The identity words were a fifth composition, a left-aligned strip inside the
hero, and are gone by owner instruction 2026-10-18. Removing it took the
count from five to four and left the pattern intact: the hero and the contact
band are still the two centred blocks, and they are still the two ends.

### Inverted and accent bands

| Role | Dark mode | Light mode |
|---|---|---|
| `--band-surface` | Snow `#FFFAFA` | Charcoal `#2B2B2B` |
| `--band-text` | Charcoal `#2B2B2B` | Snow `#FFFAFA` |
| `--band-muted` | `#57534C` | `#C9C4BD` |
| `--band-accent` | `#6B5A3C` | `#A8905F` |

The band **inverts per mode**, which is the point. A Snow band on the light
canvas would be a 1.04:1 edge and effectively invisible; inverting gives a
15.94:1 edge in dark and 12.57:1 in light.

| Pairing | Ratio |
|---|---|
| Charcoal on Snow (dark band) | 13.69:1 |
| `#6B5A3C` on Snow (dark band accent) | 6.44:1 |
| Snow on Charcoal (light band) | 13.69:1 |
| `#A8905F` on Charcoal (light band accent) | 4.60:1 |

The contact band uses `--fill-accent`, which is Tobacco **Strong** `#7E6B4B`
in both modes: Snow on it is 4.96:1. The brand hue fails at 4.12:1, so it is
never used as a fill behind text.

**Deliberately absent:** work or portfolio, testimonials, client logos,
statistics, pricing, and FAQ. Each would require content that does not exist
yet, and inventing any of them is forbidden (R-17, R-18, R-28, R-36, R-38).
An empty section is better than a fabricated one. Each becomes buildable the
moment there is real material to put in it.

Contact is a `mailto:`, not a form. A form with no endpoint to submit to is
exactly the dead control R-26 targets, and antislop counts a real external
action as functional.

### Mobile register

Section padding is `py-12 sm:py-16 lg:py-24`, which maps onto the spacing
tokens above (48 / 64 / 96px) rather than inventing new values. The previous
`py-20 md:py-28` put 160px of dead space above and below every section on a
phone.

Responsive layouts use three states, not two: single column, two columns when
content starts wrapping badly, and the full grid only when it genuinely fits.
The capabilities stagger starts at `lg` rather than `md` because a 5/6/5 split
with offsets is cramped between 768 and 1024.
- **Services**: state the outcome, not only the name.
- **Work**: lead with the work. Never invent results or metrics (R-17, R-36).
- **Journal**: reading comfort first, consistent heading, list, quote, and code
  styles, comfortable line length.
- **Contact**: one clear next step, short accessible form, expectations set.

CTA copy must be specific to the action. "Get Started", "Learn More", and
"Explore" are banned (R-15). No buzzwords (R-16).

---

## 8. Accessibility

Required before shipping, per R-25, R-32, R-34, and Apple's HIG:

- All text meets WCAG AA. Values are measured above, not assumed.
- All interactive elements keyboard reachable and operable, dialogs closable
  with Escape.
- Visible focus indicator on every focused element. Never `outline: none`
  without a replacement.
- Form controls labelled, errors understandable.
- Heading levels follow a logical structure.
- Meaningful images have alt text.
- `prefers-reduced-motion` respected.
- Usable at narrow widths and browser zoom.
- Colour is never the only carrier of meaning.

### Lighting reference

Apple HIG `accessibility.md`, `dark-mode.md`, `buttons.md`, `color.md`. Treat
the live Apple pages as authoritative over this summary.

---

## 9. Implementation

Tokens live in `src/app/globals.css` as Tailwind v4 `@theme` variables.
Plus Jakarta Sans is self-hosted at build time by `next/font` in
`src/app/layout.tsx`, with a metric-matched fallback so there is no layout
shift. Both colour modes are implemented and verified; the toggle in
`src/components/theme-toggle.tsx` switches them.

Do not hardcode hex values in components. Read the token.

### Verification

`bun run test:e2e` drives a real Chromium against the running server and
asserts on observed state: every control clicked, the theme attribute read
after each click, the URL hash and viewport after each anchor, computed
contrast read from the browser, and element boxes measured at six widths.

Contrast is measured from **composited** colours, not from the token table.
That distinction caught a real failure the table could not: the contact band
used `opacity-90` and `opacity-75` on white, which composites to 4.38:1 and
3.58:1 against Tobacco Strong, both under the 4.5:1 floor. The token passes at
full strength, so a check reading the token alone would have passed them. The
opacity was removed; hierarchy on that band now comes from size.

Run it against a production build when the result matters, and make sure the
port is actually free first: a stale dev server answers on 2026 and the
production start silently fails with EADDRINUSE, so the suite runs against
the wrong build and reports 500s that look like page defects.

---

## 10. Open items

- Semantic colours for success, warning, error, and info states are undefined.
  Define only when a page needs them, not in advance.
- Breakpoints are provisional until real pages prove them.
- Add component variants only when real page requirements demand them.
- `hello@ordo.example` in `src/app/page.tsx` is a labelled placeholder. The
  real inbox is the owner's to supply; it must not be guessed.
