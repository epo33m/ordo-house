import { ThemeToggle } from "@/components/theme-toggle";

/**
 * The three capabilities are the only product claims on this page, and they
 * come straight from DESIGN.md section 1 rather than from invention.
 */
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

export default function Home() {
  return (
    <>
      <header className="border-b border-[var(--border-subtle)]">
        <div className="mx-auto flex w-[min(calc(100%_-_3rem),var(--container-max))] items-center justify-between py-6">
          {/*
            R-23: no logo asset was supplied, so the product name is set in the
            display face as an honest placeholder rather than an invented mark.
          */}
          <span className="font-display text-lg font-bold tracking-tight">ORDO</span>
          <nav aria-label="Theme" className="flex items-center gap-3">
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero. One focal point: the headline. Nothing competes with it. */}
        <section className="mx-auto w-[min(calc(100%_-_3rem),var(--container-max))] py-24 md:py-36">
          <p className="text-caption uppercase tracking-[0.18em] text-text-accent">
            Strategy, design, technology
          </p>
          <h1 className="mt-6 max-w-[16ch] text-hero text-balance">
            Considered digital systems
          </h1>
          <p className="mt-8 max-w-[52ch] text-body-lg text-text-muted">
            ORDO turns ideas into digital products where the visual language, the
            interface, and the code behind them all come from one system rather
            than three separate opinions.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#capabilities"
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-button)] bg-accent px-6 text-[0.9375rem] font-medium text-on-accent transition-colors hover:opacity-90"
            >
              See how the work is structured
            </a>
            <a
              href="#principles"
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-button)] border border-[var(--border-strong)] px-6 text-[0.9375rem] font-medium transition-colors hover:bg-surface"
            >
              Read the operating principles
            </a>
          </div>
        </section>

        {/*
          RHYTHM 2: an offset editorial list rather than three identical cards.
          Equal-width cards would repeat the same composition three times and
          imply the three capabilities are interchangeable (R-14, R-05).
        */}
        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className="border-t border-[var(--border-subtle)] scroll-mt-16"
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
