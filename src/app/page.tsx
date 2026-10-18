import { ThemeToggle } from "@/components/theme-toggle";

/**
 * Every string on this page traces to DESIGN.md or to an owner instruction.
 * Nothing here is invented: no metrics, no clients, no testimonials, no
 * project names (R-17, R-18, R-36, R-38).
 */

const HERO_LINES = ["Create and", "Build what", "you need"] as const;

/** Identity adjectives, DESIGN.md section 1. */
const IDENTITY = ["Minimal", "Warm", "Precise", "Curious"] as const;

/** The three disciplines, DESIGN.md section 1. */
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

export default function Home() {
  return (
    <>
      <header className="border-b border-[var(--border-subtle)]">
        <div className="mx-auto flex w-[min(calc(100%_-_3rem),var(--container-max))] items-center justify-end py-5">
          <nav aria-label="Theme">
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero. One focal point, recorded as the ENERGY 3 peak in DESIGN.md. */}
        <section className="mx-auto flex w-[min(calc(100%_-_3rem),var(--container-max))] min-h-[78svh] items-center py-16 md:py-24">
          <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5 lg:col-span-6">
              {/* R-23: no logo asset exists, so this is the product name set in
                  the display face, not an invented mark. */}
              <span className="block font-display text-4xl font-bold uppercase leading-[0.9] tracking-tight md:text-5xl lg:text-6xl">
                ORDO
              </span>
              <span className="mt-4 block max-w-[24ch] text-caption uppercase tracking-[0.18em] text-text-accent">
                Strategy, design, technology
              </span>
            </div>

            <div className="md:col-span-7 lg:col-span-6">
              {/*
                No strikethrough here. The device depended on a removable word,
                and this headline has none: striking any single word breaks the
                sentence. Forcing it would be decoration, not meaning.
              */}
              <h1 className="text-hero font-[750] leading-[0.95] tracking-display">
                {HERO_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <div className="mt-12 flex flex-wrap items-center gap-4">
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
                  See how the work is structured
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*
          RHYTHM 2: an offset editorial list, not four identical chips. Equal
          chips would repeat one composition and imply the adjectives are
          interchangeable (R-14, R-05).
        */}
        <section
          aria-labelledby="identity-heading"
          className="border-t border-[var(--border-subtle)] scroll-mt-16"
        >
          <div className="mx-auto w-[min(calc(100%_-_3rem),var(--container-max))] py-20 md:py-28">
            <h2 id="identity-heading" className="text-h2 max-w-[22ch]">
              Four words the work is held to
            </h2>
            <ul className="mt-12 grid gap-y-8 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-4">
              {IDENTITY.map((word, index) => (
                <li key={word}>
                  <span className="text-caption tabular-nums text-text-accent">
                    0{index + 1}
                  </span>
                  <span className="mt-2 block font-display text-h3">{word}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className="scroll-mt-16"
        >
          <div className="mx-auto w-[min(calc(100%_-_3rem),var(--container-max))] py-20 md:py-28">
            <h2 id="capabilities-heading" className="text-h2 max-w-[20ch]">
              Three disciplines, one system
            </h2>
            <dl className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-12">
              {CAPABILITIES.map((item, index) => (
                <div
                  key={item.name}
                  className={
                    index === 0
                      ? "md:col-span-5 md:col-start-1"
                      : index === 1
                        ? "md:col-span-6 md:col-start-7"
                        : "md:col-span-5 md:col-start-3"
                  }
                >
                  <dt className="flex items-baseline gap-3">
                    <span className="text-caption tabular-nums text-text-accent">
                      0{index + 1}
                    </span>
                    <span className="font-display text-h3">{item.name}</span>
                  </dt>
                  <dd className="mt-4 max-w-[42ch] text-text-muted">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="principles"
          aria-labelledby="principles-heading"
          className="scroll-mt-16 bg-surface"
        >
          <div className="mx-auto w-[min(calc(100%_-_3rem),var(--container-max))] py-20 md:py-28">
            <h2 id="principles-heading" className="text-h2 max-w-[24ch]">
              How the work is judged
            </h2>
            <ol className="mt-14 max-w-[68ch]">
              {PRINCIPLES.map((item, index) => (
                <li
                  key={item.title}
                  className="border-t border-[var(--border-subtle)] py-7 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:gap-8">
                    <span className="text-caption tabular-nums text-text-accent md:w-8 md:shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.0625rem] font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[62ch] text-text-muted">{item.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/*
          Contact. A mailto is a real external action, which antislop counts as
          functional, so this is not a dead control (R-26). There is no form
          because there is no endpoint to submit to, and a form that posts
          nowhere is exactly the dead control that rule targets.
        */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-16 border-t border-[var(--border-subtle)]"
        >
          <div className="mx-auto w-[min(calc(100%_-_3rem),var(--container-max))] py-20 md:py-28">
            <h2 id="contact-heading" className="text-h2 max-w-[20ch]">
              Tell us what you are building
            </h2>
            <p className="mt-6 max-w-[52ch] text-body-lg text-text-muted">
              Send the problem rather than the brief. We would rather start from
              what is actually in the way.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-10 inline-flex h-11 items-center justify-center rounded-[var(--radius-button)] bg-accent px-6 text-[0.9375rem] font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              Email ORDO
            </a>
            <p className="mt-4 text-caption text-text-muted">
              Address to confirm: {CONTACT_EMAIL}
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border-subtle)]">
        <div className="mx-auto flex w-[min(calc(100%_-_3rem),var(--container-max))] flex-col gap-2 py-8 text-caption text-text-muted md:flex-row md:items-center md:justify-between">
          <span>ORDO</span>
          <span>Direction documented in DESIGN.md</span>
        </div>
      </footer>
    </>
  );
}
