import type { Meta, StoryObj } from "@storybook/react-vite"
import { TextParticle } from "../../components/ui/text-particle"

const meta: Meta<typeof TextParticle> = {
  title: "UI/text-effects/text-particle",
  component: TextParticle,
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof TextParticle>

export const Default: Story = {}
