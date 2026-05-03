import type { Meta, StoryObj } from "@storybook/react-vite"
import { PricingComponent } from "../../components/blocks/pricing-component"

const meta: Meta<typeof PricingComponent> = {
  title: "Blocks/section-pricing/pricing-component",
  component: PricingComponent,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof PricingComponent>

export const Default: Story = {}
