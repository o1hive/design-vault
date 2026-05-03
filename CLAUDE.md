# Design Vault

Design Vault is the central source of truth for the o1Hive design system. It connects documentation, components, and previews in a circular relationship.

## Architecture

```
wiki/[category].md  ←── category-level documentation
        │
        ▼
Design Vault (registry.json + storybook)
        │
        ▼
components/[type]/[category]/[component]/
        │
        ▼
[slug].md  ←── per-component documentation (embeds preview.png)
        │
        ▼
wiki/[category].md  (circular: [slug].md links back to wiki)
```

## Directory Structure

```
components/
├── ui/                    # Single standalone components
│   ├── buttons/           #   buttons category
│   │   └── star-button/
│   └── ...                #   text-effects, etc.
├── blocks/                # Composed components (heros, forms, pricing, etc.)
│   ├── sign-in-form/
│   └── ...
└── shadcn-components/     # Raw shadcn-ui primitives (button, card, input, etc.)
    ├── button/
    └── ...

stories/                   # Storybook stories, organized by category
├── buttons/
├── text-effects/
├── heros/
├── section-pricing/
├── forms/
└── ...

wiki/                      # Wiki layer — one [category].md per category
│                           #   Lists all components in that category:
│                           #   name, preview, and link to [slug].md
```

## Component Anatomy

A component is identified by its directory name (the slug). For a component at `components/ui/buttons/star-button/`, the component slug is `star-button`. All files inside the directory are named relative to this slug:

| File | Purpose |
|------|---------|
| `index.tsx` | Implementation |
| `index.module.scss` | Scoped styles (when needed) |
| `preview.png` | Visual preview screenshot |
| `[slug].md` | Documentation — includes the preview image, plus installation, usage, and props |

Example for `star-button/`:

```
star-button/
├── index.tsx
├── star-button.md    ← embeds preview.png inline
└── preview.png

The doc embeds the preview inline:
  ![](preview.png)
```

## Component Types

| Type | Directory | Description |
|------|-----------|-------------|
| **ui** | `components/ui/` | Single standalone components (e.g. a button, a text effect) |
| **blocks** | `components/blocks/` | Composed components built from multiple pieces (e.g. a hero section, a pricing table, a form) |
| **shadcn-components** | `components/shadcn-components/` | Raw shadcn-ui primitives — not modified, only documented |

## Storybook

- Storybook serves as the preview environment (`npm run dev` → port 6006)
- Stories live in `stories/[category]/[component-name].stories.tsx`
- Story titles follow the pattern: `UI/category/component-name` or `blocks/category/component-name`
- Each component must have at least a `Default` story export

## Wiki Layer

Each `wiki/[category].md` lists every component in that category. The name used is the component slug (its directory name).

Format:

```markdown
# [Category Name]

| Component | Preview | Docs |
|-----------|---------|------|
| [slug] | ![](../components/[type]/[category]/[slug]/preview.png) | [slug.md](../components/[type]/[category]/[slug]/[slug].md) |
```

The wiki entry links to the component's `[slug].md`, which links back — forming the circular documentation model.

## Documentation (circular)

1. Wiki `[category].md` provides category-level context
2. Design Vault (`registry.json`) indexes all components
3. Each component has `[slug].md` with preview image, installation, usage, and props
4. `[slug].md` links back to its wiki category page

## Registry

`registry.json` is the installable shadcn registry. Every new component must be registered here with:
- `name` — kebab-case slug matching the component directory name
- `type` — `registry:ui` for ui/, `registry:block` for blocks/
- `files` — array of `{ path, type }` objects

## Rules

- Every component must belong to a category
- Every component must have `index.tsx`, `preview.png`, and `[slug].md` (where slug = directory name)
- `[slug].md` must embed `preview.png` inline
- `preview.png` must be kept in sync with the current implementation
- Documentation must stay synced with implementation
- Category structure must remain consistent across components, stories, and registry
- New components must be registered in `registry.json`
- Story files must live in the correct `stories/[category]/` directory
- shadcn-components are raw primitives — do not modify their implementation, only document them

## Operations

Each operation is a slash command. The authoritative spec lives in its command file:

| Command | File | Description |
|---|---|---|
| `/ingest` | `.claude/commands/ingest.md` | Ingest a component: creates story, captures preview screenshot, writes `[slug].md`, updates `registry.json` |
