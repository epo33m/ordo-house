# Graph Report - ordo-house  (2026-10-18)

## Corpus Check
- 18 files · ~16,930 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .mdc 1, .lock 1)

## Summary
- 210 nodes · 217 edges · 18 communities (16 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1d11f471`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- package.json
- devDependencies
- scripts
- AGENTS.md
- README.md
- layout.tsx
- ORDO Design System
- graphify
- antislop.js
- theme-toggle.tsx
- click-through.spec.ts
- 7. Content
- apple/DESIGN.md
- Colors
- Components
- 6. Components

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `ORDO Design System` - 11 edges
3. `7. Content` - 8 edges
4. `scripts` - 7 edges
5. `ThemeToggle()` - 7 edges
6. `2. Color` - 6 edges
7. `6. Components` - 6 edges
8. `Colors` - 6 edges
9. `Components` - 6 edges
10. `graphify` - 5 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `ThemeSync()`  [EXTRACTED]
  src/app/layout.tsx → src/components/theme-toggle.tsx
- `Home()` --calls--> `Logo()`  [EXTRACTED]
  src/app/page.tsx → src/components/logo.tsx
- `Home()` --calls--> `ThemeToggle()`  [EXTRACTED]
  src/app/page.tsx → src/components/theme-toggle.tsx

## Import Cycles
- None detected.

## Communities (18 total, 2 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+13 more)

### Community 1 - "package.json"
Cohesion: 0.10
Nodes (20): eslintConfig, dependencies, next, react, react-dom, ignoreScripts, name, packageManager (+12 more)

### Community 2 - "devDependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, @playwright/test, tailwindcss, @tailwindcss/turbopack, @types/node, @types/react (+2 more)

### Community 3 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, start, test:e2e, typecheck

### Community 4 - "AGENTS.md"
Cohesion: 0.22
Nodes (8): antislop, `apple/DESIGN.md` is reference only, not direction, Apple Human Interface Guidelines, Design system, graphify, Keeping antislop current, Stack, This is NOT the Next.js you know

### Community 5 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 6 - "layout.tsx"
Cohesion: 0.22
Nodes (7): nextConfig, next, jakarta, metadata, RootLayout(), viewport, ThemeSync()

### Community 7 - "ORDO Design System"
Cohesion: 0.08
Nodes (23): 10. Open items, 1. Identity, 2. Color, 3. Typography, 4. Layout and spacing, 5. Shape, borders, effects, 8. Accessibility, 9. Implementation (+15 more)

### Community 8 - "graphify"
Cohesion: 0.22
Nodes (8): PATH, command, enabled, environment, type, mcp, graphify, $schema

### Community 9 - "antislop.js"
Cohesion: 0.15
Nodes (11): ALL_SKILLS, directive(), installed, location, setup(), SKILL_DIR, INDEX, location (+3 more)

### Community 10 - "theme-toggle.tsx"
Cohesion: 0.18
Nodes (14): react, CAPABILITIES, HERO_LINES, Home(), IDENTITY, PRINCIPLES, Logo(), getServerSnapshot() (+6 more)

### Community 13 - "7. Content"
Cohesion: 0.25
Nodes (8): 7. Content, Copy decisions on record, Hero device, Inverted and accent bands, Logo, Mobile register, Page structure, Structural import from Apple

### Community 14 - "apple/DESIGN.md"
Cohesion: 0.08
Nodes (25): Border Radius Scale, Breakpoints, Collapsing Strategy, Decorative Depth, Do, Do's and Don'ts, Don't, Elevation & Depth (+17 more)

### Community 15 - "Colors"
Cohesion: 0.33
Nodes (6): Brand & Accent, Brand Gradient, Colors, Hairlines & Borders, Surface, Text

### Community 16 - "Components"
Cohesion: 0.33
Nodes (6): Buttons, Cards & Containers, Components, Footer, Inputs & Forms, Top Navigation

### Community 17 - "6. Components"
Cohesion: 0.33
Nodes (6): 6. Components, Badges, Buttons, Cards, Inputs, Navigation

## Knowledge Gaps
- **7 isolated node(s):** `react-dom`, `@tailwindcss/turbopack`, `@types/node`, `@types/react`, `@types/react-dom` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 148 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `theme-toggle.tsx` to `package.json`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **What connects `react-dom`, `@tailwindcss/turbopack`, `@types/node` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Why does `ORDO Design System` connect `ORDO Design System` to `6. Components`, `7. Content`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Should `ORDO Design System` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._