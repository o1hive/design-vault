---
description: Drop a component — removes component files, story, docs, wiki entry, registry entry, and log entry
---

# Drop Component

Remove a component and all its associated files from the Design Vault.

## Input

The user provides a component name or path. Examples:
- `/drop star-button`
- `/drop components/ui/buttons/shiny-button`
- `/drop kindred-hero`

## Steps

### 1. Resolve the component

If given just a name (e.g. `star-button`), look it up in `registry.json` to find its path. If given a full path, extract the name from it.

Confirm with the user before deleting.

### 2. Delete component directory

```bash
rm -rf [component-path]/
```

### 3. Delete story file

Find and remove the story:

```bash
find stories -name "[componentName].stories.tsx" -delete
```

### 4. Remove from `registry.json`

Remove the entry with matching `name` from the `items` array.

### 5. Delete built registry file

```bash
rm -f registry/[componentName].json
```

### 6. Run `shadcn build`

```bash
npx shadcn@latest build --output ./registry
```

### 7. Remove from wiki

If `wiki/[category].md` exists, remove the component's `###` block (heading + image line).

### 8. Remove from `wiki/categories.md`

If this was the last component in its category and the category was newly created for it, remove the category row. Skip if other components still use the category.

### 9. Remove from `wiki/logs.md`

Remove the `## [componentName]` section.

### 10. Summary

Report what was removed:
- Component directory
- Story file
- Registry entries (registry.json + built JSON)
- Wiki entry
- Log entry
