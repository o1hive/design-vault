# LogoMarquee

A horizontal auto-scrolling logo strip with fade edges and grayscale-to-color hover.

![Preview](preview.png)

## Installation

```bash
npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/logo-marquee.json
```

## Usage

```tsx
import { LogoMarquee } from "@/components/ui/marquees/logo-marquee"

const logos = [
  { src: "/logos/vercel.svg", alt: "Vercel" },
  { src: "/logos/stripe.svg", alt: "Stripe" },
]

export function Example() {
  return <LogoMarquee logos={logos} />
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| logos | `{ src: string; alt: string }[]` | — | Array of logo images |
| speed | `number` | `30` | Scroll duration in seconds |
| className | `string` | — | Additional CSS classes |
