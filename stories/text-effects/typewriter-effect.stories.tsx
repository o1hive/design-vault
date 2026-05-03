import type { Meta, StoryObj } from "@storybook/react-vite"
import { TypewriterEffect } from "../../components/ui/typewriter-effect"

const meta: Meta<typeof TypewriterEffect> = {
  title: "UI/text-effects/typewriter-effect",
  component: TypewriterEffect,
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof TypewriterEffect>

export const Default: Story = {}
