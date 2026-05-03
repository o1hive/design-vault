import type { Meta, StoryObj } from "@storybook/react-vite"
import { TestimonialV2 } from "../../components/blocks/testimonial-v2"

const meta: Meta<typeof TestimonialV2> = {
  title: "Blocks/section-testimonials/testimonial-v2",
  component: TestimonialV2,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof TestimonialV2>

export const Default: Story = {}
