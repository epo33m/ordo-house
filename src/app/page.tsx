import { ThemeToggle } from "@/components/theme-toggle";

/**
 * Every string on this page traces to DESIGN.md or to an owner instruction.
 * Nothing here is invented: no metrics, no clients, no testimonials, no
 * project names (R-17, R-18, R-36, R-38).
 *
 * Section compositions deliberately differ (R-05, RHYTHM 3). The alignment
 * pattern is: centre opens, left carries the middle, centre closes. Three
 * surfaces, so no two adjacent sections read the same way.
 */

const HERO_LINES = ["Create and", "Build what", "you need"] as const;

/** Identity adjectives, DESIGN.md section 1. */
const IDENTITY = ["Minimal", "Warm", "Precise", "Curious"] as const;

/** The three disciplines, DESIGN.md section 1. The trio is real; the heading
    no longer announces the count, which was the R-36 tell. */
const CAPABILITIES = [
  {
    name: "Strategy",
    body: "Positioning, scope, and the decisions a project should make before anything is built.",
  },
  {
    name: "Design",
    body: "Identity, interface, and editorial systems with a stated reason behind every visual choice.",
  },
  {
    name: "Technology",
    body: "Frontends that stay maintainable as the product grows, built on the system rather than around it.",
  },
];

/** Design principles, DESIGN.md section 1. */
const PRINCIPLES = [
  {
    title: "Purpose before decoration",
    body: "Every element earns its place. If the reason for a choice cannot be written in one line, the choice is not valid.",
  },
  {
    title: "Hierarchy from type and space",
    body: "Structure comes from typography and spacing. Borders and effects only come after that structure works.",
  },
  {
    title: "Accent, never substitute",
    body: "The brand colour highlights actions and information. It never carries meaning that contrast should carry.",
  },
  {
    title: "Motion with a job",
    body: "Interface state changes animate so they read as one object. Nothing moves to fill a screen.",
  },
];

// TODO(owner): replace with the real inbox before launch. Rendered visibly as
// a placeholder so it cannot ship looking final (R-23, R-26).
const CONTACT_EMAIL = "hello@ordo.example";

/**
 * Section padding. Mobile gets a real register rather than the desktop value:
 * 48px on a phone, 64px at tablet, 96px on desktop, matching the spacing
 * tokens in DESIGN.md rather than inventing new ones.
 */
const SECTION_PAD = "py-12 sm:py-16 lg:py-24";
const SECTION_W = "w-[min(calc(100%_-_3rem),var(--container-max))]";

export default function Home() {
  return (
    <>
      <header className="border-b border-[var(--border-subtle)]">
        <div className={`mx-auto flex ${SECTION_W} items-center justify-between py-4 sm:py-5`}>
          {/* R-23: no logo asset exists, so this is the product name set in the
              display face, not an invented mark. */}
          <span className="font-display text-lg font-bold tracking-tight">ORDO</span>
          <nav aria-label="Theme">
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* 1 of 5 compositions: centred, airy, on the page surface. */}
        <section
          aria-labelledby="hero-heading"
          className={`mx-auto flex ${SECTION_W} min-h-[60svh] flex-col items-center justify-center py-12 text-center sm:py-16 lg:min-h-[76svh] lg:py-24`}
        >
          {/*
            No eyebrow above the headline. It read "Strategy, design,
            technology" while the subhead immediately below said the same
            three words, so it added a line of reading and no fact (R-09).
          */}
          <h1 id="hero-heading" className="text-hero font-[750] leading-[0.95] tracking-display text-balance">
            {HERO_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-[54ch] text-body-lg text-text-muted text-pretty">
            ORDO combines strategy, design, and technology to turn ideas into
            considered digital systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-button)] bg-accent px-6 text-[0.9375rem] font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              Start a conversation
            </a>
            <a
              href="#capabilities"
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-button)] border border-[var(--border-strong)] px-6 text-[0.9375rem] font-medium transition-colors hover:bg-surface"
            >
              See what we bring
            </a>
          </div>

          {/*
            2 of 5: the identity words as a horizontal rule-separated strip,
            left-aligned, at display scale. They sit inside the hero rather
            than becoming a section of their own, which is why the page has
            three real sections instead of four lookalike ones (C-3).

            Three responsive states, not two: one column, then two when the
            words start wrapping badly, then four.
          */}
          <div className="mt-16 w-full border-t border-[var(--border-subtle)] pt-8 text-left sm:mt-20 sm:pt-10">
            <h2 className="text-caption uppercase tracking-[0.18em] text-text-accent">
              What we judge the work against
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
              {IDENTITY.map((word) => (
                <li
                  key={word}
                  className="border-t border-[var(--border-subtle)] pt-4 font-display text-h3"
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/*
          3 of 5: asymmetric staggered columns, left-aligned, big numerals.
          The stagger starts at lg rather than md because a 5/6/5 split with
          offsets is cramped in the 768 to 1024 band.
        */}
        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className={`mx-auto ${SECTION_W} ${SECTION_PAD} scroll-mt-16 border-t border-[var(--border-subtle)]`}
        >
          <h2 id="capabilities-heading" className="text-h2 max-w-[20ch]">
            What we bring to a project
          </h2>
          <dl className="mt-10 grid gap-x-8 gap-y-10 lg:mt-14 lg:grid-cols-12 lg:gap-y-0">
            {CAPABILITIES.map((item, index) => (
              <div
                key={item.name}
                className={
                  index === 0
                    ? "lg:col-span-5 lg:col-start-1"
                    : index === 1
                      ? "lg:col-span-6 lg:col-start-7"
                      : "lg:col-span-5 lg:col-start-3 lg:mt-16"
                }
              >
                <dt className="flex items-baseline gap-3">
                  <span className="text-caption tabular-nums text-text-accent">
                    0{index + 1}
                  </span>
                  <span className="font-display text-h3">{item.name}</span>
                </dt>
                <dd className="mt-3 max-w-[42ch] text-text-muted lg:mt-4">{item.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/*
          4 of 5: left-aligned inside a full-bleed inverted band. The band
          inverts per colour mode, so it reads as a hard edge in both
          (a Snow band on the light canvas would be a 1.04:1 edge).
        */}
        <section
          id="principles"
          aria-labelledby="principles-heading"
          className="scroll-mt-16 bg-band text-band-text"
        >
          <div className={`mx-auto ${SECTION_W} ${SECTION_PAD}`}>
            <h2 id="principles-heading" className="text-h2 max-w-[24ch] text-band-text">
              How the work is judged
            </h2>
            <ol className="mt-10 max-w-[68ch] lg:mt-14">
              {PRINCIPLES.map((item, index) => (
                <li
                  key={item.title}
                  className="border-t border-[var(--band-border)] py-6 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                    <span className="text-caption tabular-nums text-band-accent sm:w-8 sm:shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.0625rem] font-semibold text-band-text">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[62ch] text-band-muted">{item.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/*
          5 of 5: centred on the accent band, the closing moment. Highest
          contrast surface on the page, used once. Snow on Tobacco Strong is
          4.96:1, which is why the fill token is Tobacco Strong and never the
          brand hue (the brand hue fails at 4.12:1).
        */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-16 bg-accent text-on-accent"
        >
          <div className={`mx-auto ${SECTION_W} ${SECTION_PAD} flex flex-col items-center text-center`}>
            <h2 id="contact-heading" className="text-h2 max-w-[22ch]">
              Tell us what you are building
            </h2>
            <p className="mt-5 max-w-[52ch] text-body-lg text-pretty opacity-90">
              Send the problem rather than the brief. We would rather start from
              what is actually in the way.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-9 inline-flex h-11 items-center justify-center rounded-[var(--radius-button)] border border-on-accent px-6 text-[0.9375rem] font-medium transition-opacity hover:opacity-80"
            >
              Email ORDO
            </a>
            <p className="mt-4 text-caption opacity-75">Address to confirm: {CONTACT_EMAIL}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border-subtle)]">
        <div
          className={`mx-auto flex ${SECTION_W} flex-col gap-1 py-8 text-caption text-text-muted sm:flex-row sm:items-center sm:justify-between`}
        >
          <span>ORDO</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline-offset-4 hover:underline">
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </>
  );
}