import type { Meta, StoryObj } from "@storybook/react-vite"
import { Cards } from "../../components/blocks/cards"

const meta: Meta<typeof Cards> = {
  title: "Blocks/section-testimonials/cards",
  component: Cards,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof Cards>

export const Default: Story = {}
