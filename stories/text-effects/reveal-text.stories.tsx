import type { Meta, StoryObj } from "@storybook/react-vite"
import { RevealText } from "../../components/ui/reveal-text"

const meta: Meta<typeof RevealText> = {
  title: "UI/text-effects/reveal-text",
  component: RevealText,
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof RevealText>

export const Default: Story = {}
