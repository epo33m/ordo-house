# Graph Report - ordo-house  (2026-10-18)

## Corpus Check
- 13 files · ~5,987 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .mdc 1, .lock 1)

## Summary
- 146 nodes · 152 edges · 12 communities
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `49ab37a7`
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
- 6. Components

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `ORDO Design System` - 11 edges
3. `ThemeToggle()` - 7 edges
4. `scripts` - 6 edges
5. `2. Color` - 6 edges
6. `6. Components` - 6 edges
7. `graphify` - 5 edges
8. `3. Typography` - 4 edges
9. `next` - 3 edges
10. `ThemeSync()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `ThemeToggle()`  [EXTRACTED]
  src/app/page.tsx → src/components/theme-toggle.tsx
- `RootLayout()` --calls--> `ThemeSync()`  [EXTRACTED]
  src/app/layout.tsx → src/components/theme-toggle.tsx

## Import Cycles
- None detected.

## Communities (12 total, 0 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+13 more)

### Community 1 - "package.json"
Cohesion: 0.10
Nodes (20): eslintConfig, dependencies, next, react, react-dom, ignoreScripts, name, packageManager (+12 more)

### Community 2 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/turbopack, @types/node, @types/react, @types/react-dom (+1 more)

### Community 3 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, typecheck

### Community 4 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): antislop, Apple Human Interface Guidelines, Design system, graphify, Keeping antislop current, Stack, This is NOT the Next.js you know

### Community 5 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 6 - "layout.tsx"
Cohesion: 0.25
Nodes (6): nextConfig, next, metadata, RootLayout(), viewport, ThemeSync()

### Community 7 - "ORDO Design System"
Cohesion: 0.09
Nodes (21): 10. Open items, 1. Identity, 2. Color, 3. Typography, 4. Layout and spacing, 5. Shape, borders, effects, 7. Content, 8. Accessibility (+13 more)

### Community 8 - "graphify"
Cohesion: 0.22
Nodes (8): PATH, command, enabled, environment, type, mcp, graphify, $schema

### Community 9 - "antislop.js"
Cohesion: 0.15
Nodes (11): ALL_SKILLS, directive(), installed, location, setup(), SKILL_DIR, INDEX, location (+3 more)

### Community 10 - "theme-toggle.tsx"
Cohesion: 0.23
Nodes (11): react, CAPABILITIES, Home(), PRINCIPLES, getServerSnapshot(), getSnapshot(), persist(), subscribe() (+3 more)

### Community 12 - "6. Components"
Cohesion: 0.33
Nodes (6): 6. Components, Badges, Buttons, Cards, Inputs, Navigation

## Knowledge Gaps
- **7 isolated node(s):** `react-dom`, `@tailwindcss/turbopack`, `@types/node`, `@types/react`, `@types/react-dom` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 101 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `theme-toggle.tsx` to `package.json`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ThemeToggle()` (e.g. with `getServerSnapshot()` and `getSnapshot()`) actually correct?**
  _`ThemeToggle()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `@tailwindcss/turbopack`, `@types/node` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Why does `next` connect `layout.tsx` to `package.json`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._