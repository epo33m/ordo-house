# Graph Report - ordo-house  (2026-10-18)

## Corpus Check
- 10 files · ~2,382 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .mdc 1, .lock 1)

## Summary
- 100 nodes · 96 edges · 10 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d87776d3`
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
- dependencies
- graphify
- antislop.js

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `scripts` - 6 edges
3. `graphify` - 5 edges
4. `next` - 4 edges
5. `mcp` - 2 edges
6. `environment` - 2 edges
7. `directive()` - 2 edges
8. `setup()` - 2 edges
9. `eslint` - 2 edges
10. `eslint-config-next` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 0 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+13 more)

### Community 1 - "package.json"
Cohesion: 0.11
Nodes (17): eslintConfig, ignoreScripts, name, packageManager, private, trustedDependencies, version, eslint (+9 more)

### Community 2 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/turbopack, @types/node, @types/react, @types/react-dom (+1 more)

### Community 3 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, typecheck

### Community 4 - "AGENTS.md"
Cohesion: 0.33
Nodes (5): antislop, graphify, Keeping antislop current, Stack, This is NOT the Next.js you know

### Community 5 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 6 - "layout.tsx"
Cohesion: 0.18
Nodes (5): nextConfig, next, geistMono, geistSans, metadata

### Community 7 - "dependencies"
Cohesion: 0.50
Nodes (4): dependencies, next, react, react-dom

### Community 8 - "graphify"
Cohesion: 0.22
Nodes (8): PATH, command, enabled, environment, type, mcp, graphify, $schema

### Community 9 - "antislop.js"
Cohesion: 0.22
Nodes (6): ALL_SKILLS, directive(), installed, location, setup(), SKILL_DIR

## Knowledge Gaps
- **8 isolated node(s):** `react`, `react-dom`, `@tailwindcss/turbopack`, `@types/node`, `@types/react` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 77 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `layout.tsx` to `package.json`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **What connects `react`, `react-dom`, `@tailwindcss/turbopack` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._