<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## Stack

Next.js 16 (App Router, Turbopack) + React 19 + TypeScript 5 + Tailwind CSS 4 + ESLint 9. Source lives in `src/`, import alias `@/*` → `./src/*`.

Bun is the package manager and runtime — no npm, pnpm, yarn, or vite:
- `bun install`, `bun run <script>`, `bunx <pkg>`, `bun test`
- Next.js runs under the Bun runtime via `bun --bun next dev|build|start` (see `package.json` scripts).
- Do not add `node_modules/.bin` invocations that bypass the `--bun` flag.

<!-- antislop:start -->
## antislop

Installed **globally** at `~/.config/opencode/skills/`. Read these skill files directly before any UI, copy, people, mobile layout, or code comment work:

- Core filter, always on: `~/.config/opencode/skills/antislop/SKILL.md`
- UI / visual: `~/.config/opencode/skills/antislop-ui/SKILL.md`
- Copy & text: `~/.config/opencode/skills/antislop-copywriting/SKILL.md`
- People: `~/.config/opencode/skills/antislop-human/SKILL.md`
- Mobile / responsive: `~/.config/opencode/skills/antislop-layoutmobile/SKILL.md`
- Code comments: `~/.config/opencode/skills/antislop-code/SKILL.md`

Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source. Acknowledging the user's request without naming the source does not replace this notice.

Only an explicit choice of antislop during or after selects a session mode. A request to review, audit, or avoid file edits does not select a mode; read the global preference in that case. Another skill's mode does not select antislop's mode.

If the mode is unresolved, ask during/after and end the response; wait for the answer before any UI review, planning, or concept. For read-only tasks, put the active-mode notice only at the start of the final answer, never in progress messages. For editing tasks, announce before the first edit and omit it from the final answer.

Enforced per model call by `.opencode/plugins/antislop.js`. Set `ANTSLOP_EAGER=1` to also force-load the core rules into context (~15k tokens per prompt).
<!-- antislop:end -->

### Keeping antislop current

These skills are vendored from `miqdadbadjuber/anti-slop` (v3.2.21) into the global skills folder, not installed by `bunx antislop-ai`, so the installer cannot refresh them unattended.

- Refresh: `bunx antislop-ai` in an interactive terminal, choose *Everywhere*, *OpenCode*, then *Overwrite them*. Re-run this pointer block if you change where antislop lives.
- Verify the copy is still upstream: `~/.config/opencode/skills/antislop/VERSION`
- Remove: delete the six folders under `~/.config/opencode/skills/`, plus `.opencode/plugins/antislop.js` and this block.
- Do not install the same names into `.opencode/skills/` or `.agents/skills/` here: OpenCode reads both, and a duplicate name across locations has no defined winner.
