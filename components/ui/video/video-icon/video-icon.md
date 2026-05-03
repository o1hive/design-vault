# VideoIcon

A circular auto-playing video thumbnail. Plays a muted looping MP4 on mount.

![Preview](preview.png)

## Installation

```bash
npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/video-icon.json
```

## Usage

```tsx
import { VideoIcon } from "@/components/ui/video/video-icon"

export function Example() {
  return <VideoIcon src="https://example.com/video.mp4" size={72} />
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | `string` | — | MP4 video source URL |
| size | `number` | `72` | Diameter in pixels (clamped between 48px and 10vw) |
| className | `string` | — | Additional CSS classes |
