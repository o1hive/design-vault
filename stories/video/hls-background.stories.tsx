import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { HlsBackground } from "../../components/ui/video/hls-background"

const MUX_STREAM = "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8"

const meta: Meta<typeof ComponentPreview> = {
  title: "UI/video/hls-background",
  component: ComponentPreview,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ComponentPreview>

export const Default: Story = {
  args: {
    componentName: "hls-background",
    component: (
      <div className="relative h-[400px] w-full bg-black overflow-hidden">
        <HlsBackground src={MUX_STREAM} />
        <div className="relative z-10 flex h-full items-center justify-center">
          <p className="text-white text-lg font-medium">Content over HLS background</p>
        </div>
      </div>
    ),
    installCommand: "npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/hls-background.json",
    usageCode: `import { HlsBackground } from "@/components/ui/video/hls-background"

export function Example() {
  return (
    <div className="relative h-screen">
      <HlsBackground src="https://stream.mux.com/your-stream.m3u8" />
      <div className="relative z-10">Your content</div>
    </div>
  )
}`,
  },
}
