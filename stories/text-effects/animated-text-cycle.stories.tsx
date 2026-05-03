import type { Meta, StoryObj } from "@storybook/react-vite"
import { AnimatedTextCycle } from "../../components/ui/animated-text-cycle"

const meta: Meta<typeof AnimatedTextCycle> = {
  title: "UI/text-effects/animated-text-cycle",
  component: AnimatedTextCycle,
  parameters: { layout: "centered" },
  args: {
    words: ["Design", "Build", "Ship"],
    interval: 3000,
  },
}

export default meta
type Story = StoryObj<typeof AnimatedTextCycle>

export const Default: Story = {}
