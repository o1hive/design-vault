import type { Meta, StoryObj } from "@storybook/react-vite"
import { GlowyWavesHero } from "../../components/blocks/glowy-waves-hero-shadcnui"

const meta: Meta<typeof GlowyWavesHero> = {
  title: "Blocks/heros/glowy-waves-hero-shadcnui",
  component: GlowyWavesHero,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof GlowyWavesHero>

export const Default: Story = {}
