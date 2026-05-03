# Code QA

Run this audit on every component after install and story creation, before marking it done.

## 1. Lint check

The file must be clean — no syntax errors, no unresolved imports, no dangling JSX.

```bash
npx tsc --noEmit
```

Fix every error. The only exception is pre-existing framer-motion type strictness issues (`TS2322: Type … is not assignable to type 'Variants'` / `'Transition'`) — these don't block rendering and can be deferred.

## 2. Plain React

The component must work in a Vite + React setup. No framework-specific patterns allowed:

| Pattern | Fix |
|---|---|
| `"use client"` | Delete the line |
| `import Image from "next/image"` | Delete; `<Image` → `<img`, `</Image>` → `</img>` |
| `import Link from "next/link"` | Delete; `<Link` → `<a`, `</Link>` → `</a>` |
| `import { useTheme } from "next-themes"` | Replace with `import { useTheme } from "@/lib/use-theme"` |
| `import { usePathname } from "next/navigation"` | Replace with `import { usePathname } from "@/lib/use-pathname"` |
| `<style jsx>` blocks | Convert to plain `<slug>.css` file (NOT `.module.scss` — CSS Modules break `@property` and scoped `@keyframes`) |
| Heavy Next.js coupling (Server Components, `cookies()`, `headers()`, `generateMetadata`, route handlers) | Flag, do NOT install, report to user |

Run the framework audit:
```bash
grep -rn "next/\|next-themes\|use client\|style jsx" components/<path>
```

## 3. Exposed props

The component must accept props so consumers can control its behavior:

- **Hardcoded text** → extract as a prop with a sensible default (e.g., `label = "Let's Collaborate"`)
- **Hardcoded color** → replace with a theme token (see rule 4)
- **Interactive callback** → expose as an `on*` prop (e.g., `onClick`, `onSubmit`, `onChange`)
- **No empty interface** — the component should not be a sealed black box

## 4. Theme tokens only

No hardcoded hex values (`#xxx`), no Tailwind arbitrary colors (`bg-[#xxx]`, `text-[#xxx]`). Every color must use a semantic theme token.

```bash
grep -rn '#[0-9a-fA-F]\{3,6\}\|\[#[0-9a-fA-F]' components/<path>
```

Allowed references: see `.claude/docs/theme-tokens.md`.

## 5. Named export

The export name must match the component slug in PascalCase:

- slug `shiny-button` → `export function ShinyButton`
- slug `shape-landing-hero` → `export function ShapeLandingHero`

Never leave a shadcn-installed export as `Component`, `App`, `Example`, or any generic name. If the original export is a `default` with a generic name, add a properly-named named export via `export { OriginalName as ProperName }`.
