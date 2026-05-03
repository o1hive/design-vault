---
description: Design new components from a prompt — intelligently splits into separate components, assigns categories, and runs /ingest on all
---

# Design Component

Take a user prompt describing a UI or block and intelligently split it into separate, focused components. Propose the split for approval before writing any code. After approval, design all components and run `/ingest` on each.

## Step 1: Analyze the prompt

Read the user's request and identify distinct functional pieces. Ask:

1. What are the independent, reusable sub-components? (e.g. a nav bar, a marquee, a card, a button)
2. What is the top-level composition that ties them together? (e.g. a hero section, a landing page, a dashboard)
3. Can any sub-component stand alone and be useful elsewhere?

The top-level composition is a **block**. Each independent sub-component is **ui**.

## Step 2: Split into components

Break the prompt into separate components. Each component gets its own directory and is responsible for ONE thing.

## Step 3: Assign categories

For each component, determine the best category. Consult `wiki/categories.md` for existing categories. If no existing category fits, propose a new one — lowercase kebab-case plural noun.

## Step 4: Apply block vs UI rule

- **`registry:ui`** → single standalone component → `components/ui/[category]/[name]/`
- **`registry:block`** → composes 2+ other named components → `components/blocks/[category]/[name]/`

A component that only uses primitives (shadcn button, lucide icons, HTML elements) is still ui. It only becomes a block when it composes other named components from our registry.

## Step 5: Propose the plan for approval

**Stop here and present the split to the user.** Use this exact format:

```
## Proposed component split

| Component | Slug | Type | Category | Path |
|-----------|------|------|----------|------|
| ComponentA | slug-a | ui | buttons | components/ui/buttons/slug-a/ |
| ComponentB | slug-b | ui | navbars | components/ui/navbars/slug-b/ |
| HeroBlock | hero-block | block | heros | components/blocks/heros/hero-block/ |

**New categories:** video (circular video players, video backgrounds)

**Block composition:** HeroBlock composes ComponentA + ComponentB + shadcn Button

Any changes to this split before I start building?
```

Use `AskUserQuestion` to present the split. Let the user confirm, adjust categories, rename components, or change the split before any code is written.

## Step 6: Design each component

Once the user approves the split, build each component. Apply the `frontend-design` skill for styling. Requirements:
- Use Tailwind theme tokens where possible, no hardcoded hex
- Named export matching slug in PascalCase
- TypeScript interface for props
- Mobile-friendly responsive design
- `framer-motion` for animations (if already a project dependency)

Start with the leaf components (the independent ui pieces) and build up to the block that composes them.

## Step 7: Run /ingest

After all components are designed and saved, run `/ingest` on each one. Ingest the leaf/ui components first, then the block — since the block's story may import the ui components.

```
/ingest components/ui/[category]/[leaf-component-1]
/ingest components/ui/[category]/[leaf-component-2]
/ingest components/blocks/[category]/[block-component]
```

The ingest process will create stories, capture screenshots, write docs, update the registry, wiki, and logs for each component.
