import type { Meta, StoryObj } from "@storybook/react-vite"
import { ShapeLandingHero } from "../../components/blocks/shape-landing-hero"

const meta: Meta<typeof ShapeLandingHero> = {
  title: "Blocks/heros/shape-landing-hero",
  component: ShapeLandingHero,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ShapeLandingHero>

export const Default: Story = {}
