import type { Meta, StoryObj } from "@storybook/react-vite"
import { AnimatedVideoPlaneHero } from "../../components/blocks/animated-video-plane-hero"

const meta: Meta<typeof AnimatedVideoPlaneHero> = {
  title: "Blocks/heros/animated-video-plane-hero",
  component: AnimatedVideoPlaneHero,
  parameters: { layout: "fullscreen" },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    ctaLabel: { control: "text" },
    videoUrl: { control: "text" },
  },
  args: {
    title: "SkyElite Private Jets",
    subtitle: "Experience luxury travel at 40,000 feet. Your private jet awaits.",
    ctaLabel: "Book Now",
  },
}

export default meta
type Story = StoryObj<typeof AnimatedVideoPlaneHero>

export const Default: Story = {}
