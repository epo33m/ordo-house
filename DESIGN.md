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
| RHYTHM | 2 | Consistent grid with selective asymmetry for editorial character. Sections may break pattern when content earns it, not by default. |
| MOTION | 1 | Motion supports usability only. The brief states effects must not distract from content, so no scroll choreography, parallax, or reveals. |

### One deliberate peak

The hero is **ENERGY 3 inside an ENERGY 2 system**: a hero-scale headline at
weight 750 and 0.95 leading, with a struck word as the typographic device.
Nothing else on the site is allowed to reach that intensity. That contrast is
the point. Every other section stays at ENERGY 2 or below, and the peak is
recorded here so it reads as a decision rather than as output drifting past its
own dial.

The peak is expressed through type and space only. No colour, glow, gradient,
or animation is added to achieve it, which keeps it inside R-01 and R-19.

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

The hero headline is set as five short lines at hero scale, tight leading, and
weight 750. Line 3 strikes the article `a` with a bar in the accent colour:
unstruck it reads *"systems for a the Digital Products"*, struck it reads
*"systems for the Digital Products"*.

Two rules govern the bar:

- **It is a meaningful graphic, so it meets 3:1.** WCAG 1.4.11 exempts purely
  decorative graphics, but this bar signals a deletion, which is information.
  It uses `--color-text-accent`: 5.35:1 on Canvas and 5.91:1 on Canvas Light.
  The brand hue `#8C7853` was rejected at 3.87:1 as too thin a margin.
- **The struck letter is hidden from assistive technology.** A screen reader
  gets the intended sentence, not the grammatical slip the device depends on.
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

---

## 10. Open items

- Semantic colours for success, warning, error, and info states are undefined.
  Define only when a page needs them, not in advance.
- Breakpoints are provisional until real pages prove them.
- Add component variants only when real page requirements demand them.
