import type { Meta, StoryObj } from "@storybook/react-vite"
import { SlidingTestimonial } from "../../components/blocks/sliding-testimonial"

const meta: Meta<typeof SlidingTestimonial> = {
  title: "Blocks/section-testimonials/sliding-testimonial",
  component: SlidingTestimonial,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof SlidingTestimonial>

export const Default: Story = {}
