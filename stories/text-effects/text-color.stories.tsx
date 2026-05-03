import type { Meta, StoryObj } from "@storybook/react-vite"
import { TextColor } from "../../components/ui/text-color"

const meta: Meta<typeof TextColor> = {
  title: "UI/text-effects/text-color",
  component: TextColor,
  parameters: { layout: "centered" },
  args: {
    words: ["Develop.", "Preview.", "Ship."],
  },
}

export default meta
type Story = StoryObj<typeof TextColor>

export const Default: Story = {}
