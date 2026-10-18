# Graph Report - ordo-house  (2026-10-18)

## Corpus Check
- 7 files · ~516 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 56 nodes · 50 edges · 9 communities (4 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3e5be5de`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- package.json
- devDependencies
- graphify.js
- AGENTS.md
- types
- lib
- graphify

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `graphify` - 4 edges
3. `scripts` - 3 edges
4. `plugin` - 2 edges
5. `mcp` - 2 edges
6. `engines` - 2 edges
7. `bun` - 2 edges
8. `@types/bun` - 2 edges
9. `typescript` - 2 edges
10. `types` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (9 total, 4 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, allowJs, jsx, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 1 - "package.json"
Cohesion: 0.18
Nodes (10): engines, bun, module, name, packageManager, private, scripts, start (+2 more)

### Community 2 - "devDependencies"
Cohesion: 0.29
Nodes (7): bun, devDependencies, bun, @types/bun, typescript, @types/bun, typescript

### Community 8 - "graphify"
Cohesion: 0.22
Nodes (8): enabled, type, url, mcp, graphify, plugin, $schema, .opencode/plugins/graphify.js

## Knowledge Gaps
- **36 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `type`, `url`, `enabled` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 41 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `compilerOptions` to `types`, `lib`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `type` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._