---
name: capture-story-screenshot
description: Capture a clean preview screenshot of a Storybook story component. Use this skill when ingesting Design Vault components, when the user asks to capture or update a component preview screenshot, or whenever a story screenshot is needed for documentation.
---

# Capture Story Screenshot

Capture a clean, cropped screenshot of a Storybook story — no chrome, no sidebar, just the component.

## Input

| Parameter | Example | Description |
|-----------|---------|-------------|
| Story title | `UI/buttons/star-button` | The Storybook story title |
| Output path | `components/ui/buttons/star-button/preview.png` | Where to save the screenshot |

## Steps

### 1. Derive the iframe URL

Convert the story title to a Storybook iframe URL. Storybook's iframe renders the story in isolation — no sidebar, no toolbar, just the component.

```
Title:  UI/buttons/star-button
URL:    http://localhost:6006/iframe.html?id=ui-buttons-star-button--default
```

Rule: lowercase the title, replace `/` with `-`, append `--default`. Use `&viewMode=story` if the URL doesn't already include it.

Why the iframe URL instead of `/?path=/story/...`: the full Storybook page includes sidebar, toolbar, and other chrome. The iframe renders only the story, so the screenshot is already clean before we even crop.

### 2. Ensure Storybook is running

```bash
lsof -ti:6006
```

If not running, start it and wait for it to be ready:

```bash
npm run dev &
until curl -s -o /dev/null -w "%{http_code}" http://localhost:6006 | grep -q "200"; do sleep 0.5; done
```

### 3. Open the iframe in Playwright

```bash
npx playwright-cli open "http://localhost:6006/iframe.html?id=<url-id>--default"
```

### 4. Wait for rendering to settle

Give fonts, animations, and layout time to finish:

```bash
npx playwright-cli run-code "async page => { await page.waitForTimeout(3000); }"
```

### 5. Screenshot the component element with padding

Always leave 10px of breathing room around the component. Use `run-code` to get the element's bounding box, expand it by 10px on each side, and screenshot that clip region:

```bash
npx playwright-cli run-code "async page => { const el = page.locator('#o1-story-component'); const box = await el.boundingBox(); if (!box) throw new Error('Element not found'); const pad = 10; await page.screenshot({ path: '<absolute-output-path>', clip: { x: Math.max(0, box.x - pad), y: Math.max(0, box.y - pad), width: box.width + pad * 2, height: box.height + pad * 2 } }); }"
```

Always use the absolute path for `<absolute-output-path>` — `run-code` executes in Playwright's working directory, not the project root.

This captures only the rendered component (`#o1-story-component`) plus a 10px margin on all sides — tight enough to avoid excess whitespace, loose enough that the component doesn't feel clipped.

If `#o1-story-component` isn't found, fall back to `#storybook-root`:

```bash
npx playwright-cli screenshot --filename=<output-path>
```

### 6. Close the browser

```bash
npx playwright-cli close
```

## URL Derivation Reference

| Story title | Iframe URL |
|-------------|------------|
| `UI/buttons/star-button` | `http://localhost:6006/iframe.html?id=ui-buttons-star-button--default` |
| `Blocks/heros/hero-section` | `http://localhost:6006/iframe.html?id=blocks-heros-hero-section--default` |
| `Shadcn/card/card` | `http://localhost:6006/iframe.html?id=shadcn-card-card--default` |
