# RoundedNav

A rounded pill-shaped navbar with a sequenced entrance animation. The logo drops in, the pill expands, menu items fade in one by one, and the action button zooms out last.

![Preview](preview.png)

## Installation

```bash
npx shadcn add rounded-nav
```

## Usage

```tsx
import { RoundedNav } from "@/components/ui/navbars/rounded-nav"

export function Example() {
  return (
    <RoundedNav
      logo={<span className="text-lg font-bold">Acme</span>}
      menuItems={[
        { label: "Product", onClick: () => {} },
        { label: "Pricing", onClick: () => {} },
        { label: "Docs", onClick: () => {} },
        { label: "Blog", onClick: () => {} },
      ]}
      actionLabel="Get started"
      onActionClick={() => console.log("clicked")}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| logo | `React.ReactNode` | — | Logo element or text |
| menuItems | `{ label: string; onClick: () => void }[]` | — | Navigation menu items |
| actionLabel | `string` | — | Label for the action button |
| onActionClick | `() => void` | — | Click handler for the action button |
| isSticky | `boolean` | `false` | Whether the nav sticks to the top on scroll |
| className | `string` | — | Additional CSS classes |
