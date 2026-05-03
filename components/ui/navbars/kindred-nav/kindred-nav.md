# KindredNav

A glass-morphism top navigation bar with desktop menu and mobile slide-out drawer.

![Preview](preview.png)

## Installation

```bash
npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/kindred-nav.json
```

## Usage

```tsx
import { KindredNav } from "@/components/ui/navbars/kindred-nav"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <KindredNav
      logo={<span className="text-lg font-bold">Kindred</span>}
      menuItems={[
        { label: "Product", href: "#" },
        { label: "Pricing", href: "#" },
      ]}
      actions={
        <>
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Get started</Button>
        </>
      }
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| logo | `React.ReactNode` | — | Logo element |
| menuItems | `{ label: string; href: string }[]` | — | Navigation links |
| actions | `React.ReactNode` | — | CTA buttons on the right |
| className | `string` | — | Additional CSS classes |
