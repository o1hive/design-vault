import type { Meta, StoryObj } from "@storybook/react-vite"
import { Features8 } from "../../components/blocks/features-8"

const meta: Meta<typeof Features8> = {
  title: "Blocks/section-features/features-8",
  component: Features8,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof Features8>

export const Default: Story = {}
