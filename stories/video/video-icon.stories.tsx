import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { VideoIcon } from "../../components/ui/video/video-icon"

const meta: Meta<typeof VideoIcon> = {
  title: "UI/video/video-icon",
  component: VideoIcon,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof VideoIcon>

export const Default: Story = {
  args: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_090051_64ea5059-da6b-492b-a171-aa7ecc767dc3.mp4",
    size: 110,
  },
  render: (args) => (
    <ComponentPreview
      componentName="video-icon"
      component={
        <div className="flex items-center justify-center gap-4 p-8 bg-black">
          <VideoIcon {...args} />
          <VideoIcon src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_093237_ff0ddc63-c068-4e29-96da-fdd0e40af133.mp4" size={args.size} />
        </div>
      }
      installCommand="npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/video-icon.json"
      usageCode={`import { VideoIcon } from "@/components/ui/video/video-icon"

export function Example() {
  return (
    <VideoIcon
      src="https://example.com/video.mp4"
      size={72}
    />
  )
}`}
    />
  ),
}
