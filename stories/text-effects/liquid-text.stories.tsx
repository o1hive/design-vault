import type { Meta, StoryObj } from "@storybook/react-vite"
import { LiquidText } from "../../components/ui/liquid-text"

const meta: Meta<typeof LiquidText> = {
  title: "UI/text-effects/liquid-text",
  component: LiquidText,
  parameters: { layout: "centered" },
  args: {
    words: ["Hello", "World", "Design", "Build"],
  },
}

export default meta
type Story = StoryObj<typeof LiquidText>

export const Default: Story = {}
