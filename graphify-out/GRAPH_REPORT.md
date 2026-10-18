# Graph Report - ordo-house  (2026-10-18)

## Corpus Check
- 6 files · ~324 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .mdc 1, .lock 1)

## Summary
- 53 nodes · 47 edges · 8 communities (5 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `100872ce`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- package.json
- devDependencies
- scripts
- AGENTS.md
- README.md
- graphify

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `graphify` - 5 edges
3. `scripts` - 3 edges
4. `mcp` - 2 edges
5. `environment` - 2 edges
6. `engines` - 2 edges
7. `$schema` - 1 edges
8. `command` - 1 edges
9. `enabled` - 1 edges
10. `PATH` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (8 total, 3 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, allowJs, jsx, lib, module, moduleDetection, moduleResolution (+12 more)

### Community 1 - "package.json"
Cohesion: 0.18
Nodes (10): engines, bun, module, name, packageManager, private, type, bun (+2 more)

### Community 2 - "devDependencies"
Cohesion: 0.50
Nodes (4): devDependencies, bun, @types/bun, typescript

### Community 3 - "scripts"
Cohesion: 0.67
Nodes (3): scripts, start, typecheck

### Community 8 - "graphify"
Cohesion: 0.22
Nodes (8): PATH, command, enabled, environment, type, mcp, graphify, $schema

## Knowledge Gaps
- **3 isolated node(s):** `@types/bun`, `bun`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 44 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **What connects `@types/bun`, `bun`, `typescript` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._