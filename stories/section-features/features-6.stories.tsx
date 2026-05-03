import type { Meta, StoryObj } from "@storybook/react-vite"
import { Features6 } from "../../components/blocks/features-6"

const meta: Meta<typeof Features6> = {
  title: "Blocks/section-features/features-6",
  component: Features6,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof Features6>

export const Default: Story = {}
