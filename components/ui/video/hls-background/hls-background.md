# HlsBackground

A fullscreen HLS video background using hls.js. Falls back to native HLS on Safari.

![Preview](preview.png)

## Installation

```bash
npm install hls.js
npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/hls-background.json
```

## Usage

```tsx
import { HlsBackground } from "@/components/ui/video/hls-background"

export function Example() {
  return (
    <div className="relative h-screen">
      <HlsBackground src="https://stream.mux.com/your-stream.m3u8" />
      <div className="relative z-10">Your content</div>
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | `string` | — | HLS (.m3u8) stream URL |
| className | `string` | — | Additional CSS classes |
