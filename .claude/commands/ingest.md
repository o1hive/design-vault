---
description: Ingest a component — create story, preview screenshot, [slug].md, registry entry, update wiki, QA, and log
---

# Design Vault Component Ingestion

Ingest a component into the Design Vault by creating its story, capturing a preview screenshot via storybook, writing documentation, and registering it. After ingestion, runs a health check on previously ingested components to detect file changes.

## Input

The user provides a component path. Examples:
- `/ingest components/ui/buttons/star-button`
- `/ingest components/blocks/sign-in-form`
- `/ingest components/shadcn-components/button`

## Step 0: Health check — detect stale components

Before ingesting the requested component, scan `wiki/logs.md` for any previously ingested components whose source files have changed since they were last logged.

For each logged component, compute the current SHA-256 hash of its tracked source files (take the first 8 chars, matching the log format) and compare against the logged hash. Skip `preview.png` and `[slug].md` — only check implementation files (`index.tsx`, `.css`, `.scss`).

```bash
shasum -a 256 [file-path] | cut -c1-8
```

If any component has changed, report it to the user:
```
⚠️ Changed since last ingest:
- [componentName] — [file] changed
```

Ask if they want to re-ingest those components now or continue with just the requested one.

## Step 1: Parse the component path

Extract from the path:
- **type**: `ui`, `blocks`, or `shadcn-components`
- **componentName**: the directory name (last segment), e.g. `star-button`
- **category**: For `ui/[category]/[name]`, the category is the parent directory (e.g. `buttons`). For `blocks/[name]`, infer the category from existing story patterns or from the component's purpose. For `shadcn-components/[name]`, use a matching category or create one.

Key mapping for blocks (from existing stories):
- Hero sections → `heros`
- Feature sections → `section-features`
- Pricing → `section-pricing`
- Testimonials/Cards → `section-testimonials`
- Forms/Sign-in → `forms`
- 404 pages → `page-404`
- Navigation/Menu → `navbars`
- Notifications → `notification-menu`
- Sidebar → `sidebar-menu`

If the category can't be confidently determined, stop and ask the user which story category to use.

## Step 2: Read and analyze the component

Read `[component-path]/index.tsx` and extract:
1. The exported component name (e.g. `StarButton`)
2. The props interface/type (if named)
3. Each prop: name, type, whether optional, default value
4. Component description from JSDoc (if present)

Also check for:
- `index.module.scss` or `.css` files
- Any existing `[slug].md` or `preview.png`
- The current `registry.json` entry for this component

## Step 3: Create the Storybook story

Create `stories/[category]/[componentName].stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite"
import { [ComponentName] } from "../../components/[type]/[subpath]/[componentName]"

const meta: Meta<typeof [ComponentName]> = {
  title: "[Group]/[category]/[componentName]",
  component: [ComponentName],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof [ComponentName]>

export const Default: Story = {}
```

Where `[Group]` is:
- `UI` for `components/ui/` components
- `Blocks` for `components/blocks/` components
- `Shadcn` for `components/shadcn-components/` components

**If the story file already exists**, skip creation and use the existing file.

## Step 4: Derive the Storybook URL

Convert the story title to a storybook URL path:
- Title: `UI/buttons/star-button` → URL id: `ui-buttons-star-button--default`
- Rule: lowercase the title, replace `/` with `-`, append `--default`

Storybook URL: `http://localhost:6006/?path=/story/[url-id]`

## Step 5: Capture the preview screenshot

Use the `capture-story-screenshot` skill to capture a clean, cropped screenshot of the component:

- **Story title**: `[Group]/[category]/[componentName]`
- **Output path**: `[component-path]/preview.png`

Invoke it via:
```
Skill("capture-story-screenshot", args="<story-title> <component-path>/preview.png")
```

The skill handles starting Storybook if needed, navigating to the iframe URL (no chrome), and screenshotting only the component element. The result is saved as `preview.png` in the component's directory.

## Step 6: Create [slug].md

Create `[component-path]/[slug].md` with these sections:

```markdown
# [ComponentName]

[One-line description of what the component does.]

![Preview](preview.png)

## Installation

```bash
npx shadcn add [componentName]
```

## Usage

```tsx
import { [ComponentName] } from "@/components/[type]/[subpath]/[componentName]"

export function Example() {
  return <[ComponentName]>[children or content]</[ComponentName]>
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| [propName] | `[type]` | `[default]` | [description] |
| className | `string` | — | Additional CSS classes |
```

Generate a minimal but complete usage example based on the component's actual implementation.

## Step 7: Update registry.json

`registry.json` is a shadcn registry object — an object with an `items` array, not a bare array:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "o1hive-design-vault",
  "homepage": "https://github.com/o1hive/design-vault",
  "items": [
    ...
  ]
}
```

### Adding a new component

Add a new entry to the `items` array in alphabetical order by `name`:

```json
{
  "name": "[componentName]",
  "type": "registry:[type]",
  "files": [
    {
      "path": "components/[type]/[subpath]/[componentName]/index.tsx",
      "type": "[type]"
    }
  ]
}
```

Use `registry:ui` for `components/ui/`, `registry:block` for `components/blocks/`. If the component has additional files (css, scss), add them to the files array.

**Never** convert the registry to a bare array — shadcn CLI expects a JSON object, not an array.

### Updating an existing entry

If the entry already exists in `items`, verify it's up to date (correct files listed). Update if needed.

## Step 8: Update the wiki

Maintain `wiki/[category].md` — one file per category. Each file lists every component in that category with a heading, docs link, and preview image.

### If `wiki/[category].md` does not exist

Create it:

```markdown
# [Category Display Name]

### [[componentName]](../components/[type]/[category]/[componentName]/[componentName].md)

![](../components/[type]/[category]/[componentName]/preview.png)
```

Where `[Category Display Name]` is the category name in title case (e.g. `Buttons`, `Heros`, `Forms`).

### If `wiki/[category].md` already exists

Append a new `###` heading block for the component at the end of the file. If a block for this component already exists, update its paths.

### Block format

Each component gets this block:

```markdown
### [[componentName]](../components/[type]/[category]/[componentName]/[componentName].md)

![](../components/[type]/[category]/[componentName]/preview.png)
```

The `###` heading links to the component's detail `[slug].md`. The preview image is on the next line. Paths are relative to `wiki/`.

## Step 9: Run QA

Run the code quality audit from `.claude/docs/code-qa.md` on the component:

1. **Lint**: `npx tsc --noEmit` — fix any new errors in this component (ignore pre-existing framer-motion type strictness errors in other files)
2. **Plain React**: `grep -rn "next/\|next-themes\|use client\|style jsx" [component-path]` — remove any Next.js patterns found
3. **Exposed props**: component must accept props (at minimum `children` for text content). No sealed black boxes.
4. **Theme tokens**: `grep -rn '#[0-9a-fA-F]\{3,6\}' [component-path]` — no hardcoded hex colors
5. **Named export**: export name must match the component slug in PascalCase

Fix any issues found before moving on. Re-run checks to confirm they're resolved.

## Step 10: Update the ingest log

Update `wiki/logs.md` with an entry for the just-ingested component. If an entry already exists for this component, update it.

```markdown
## [componentName]
- path: [component-path]
- category: [category]
- ingested: [today's date]
- files:
  - index.tsx `[sha256-first-8-chars]`
  - [other-files...]
```

Compute short hashes for every file in the component directory:

```bash
shasum -a 256 [component-path]/* | while read hash file; do echo "  - $(basename $file) \`$(echo $hash | cut -c1-8)\`"; done
```

Only track source files — skip `preview.png` and `[slug].md` since those are generated artifacts.

Keep the file sorted alphabetically by component name (within its `##` section).

## Step 11: Summary

Report back what was done:
- Story at `stories/[category]/[componentName].stories.tsx`
- Preview at `[component-path]/preview.png`
- Docs at `[component-path]/[slug].md`
- Registry updated
- Wiki updated at `wiki/[category].md`
- QA passed
- Logged in `wiki/logs.md`
