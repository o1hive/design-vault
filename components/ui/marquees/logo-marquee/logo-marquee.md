# LogoMarquee

A horizontal scrolling logo cloud that displays brand logos in an infinite loop with a gradient fade mask on the edges.

![Preview](preview.png)

## Installation

```bash
npx shadcn add logo-marquee
```

## Usage

```tsx
import { LogoMarquee } from "@/components/ui/marquees/logo-marquee"

const logos = [
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
]

export function Example() {
  return <LogoMarquee logos={logos} />
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| logos | `{ src: string; alt: string; width?: number; height?: number }[]` | — | Array of logo objects to display |
| className | `string` | — | Additional CSS classes |
