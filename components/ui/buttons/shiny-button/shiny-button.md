# ShinyButton

An animated gradient button with a rotating conic border and inner shimmer effects.

![Preview](preview.png)

## Installation

```bash
npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry.json -s shiny-button
```

## Usage

```tsx
import { ShinyButton } from "@/components/ui/buttons/shiny-button"

export function Example() {
  return <ShinyButton onClick={() => console.log("clicked")}>Get unlimited access</ShinyButton>
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `React.ReactNode` | — | Button label content |
| onClick | `() => void` | — | Click handler |
| className | `string` | `""` | Additional CSS classes |
