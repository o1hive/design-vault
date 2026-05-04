# InfiniteSlider

A flexible infinite scroll slider that animates content in a seamless loop. Supports horizontal and vertical directions, hover speed control, and reverse direction.

![Preview](preview.png)

## Installation

```bash
npx shadcn add infinite-slider
```

## Usage

```tsx
import { InfiniteSlider } from "@/components/ui/util/infinite-slider"

export function Example() {
  return (
    <InfiniteSlider>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </InfiniteSlider>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `React.ReactNode` | — | Content to animate in an infinite loop |
| gap | `number` | `16` | Gap between items in pixels |
| duration | `number` | `25` | Duration of one full scroll cycle in seconds |
| durationOnHover | `number` | — | Scroll duration on hover (slows down) |
| direction | `"horizontal" \| "vertical"` | `"horizontal"` | Scroll direction |
| reverse | `boolean` | `false` | Reverse the scroll direction |
| className | `string` | — | Additional CSS classes |
