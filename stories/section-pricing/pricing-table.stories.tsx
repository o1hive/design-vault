import type { Meta, StoryObj } from "@storybook/react-vite"
import { Pricing } from "../../components/blocks/pricing-table"

const sampleTiers = [
  {
    name: "Starter",
    description: "For individuals and small projects",
    price: 0,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    features: [
      { text: "5 projects" },
      { text: "Basic analytics" },
      { text: "Community support" },
    ],
  },
  {
    name: "Pro",
    description: "For growing teams and businesses",
    price: 29,
    billingPeriod: "per month",
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    isPrimary: true,
    features: [
      { text: "Unlimited projects" },
      { text: "Advanced analytics" },
      { text: "Priority support", hasInfo: true },
      { text: "Custom domains" },
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: 99,
    billingPeriod: "per month",
    buttonText: "Contact Sales",
    buttonVariant: "secondary" as const,
    features: [
      { text: "Everything in Pro" },
      { text: "SSO & SAML" },
      { text: "Dedicated support" },
      { text: "Custom integrations" },
    ],
  },
]

const meta: Meta<typeof Pricing> = {
  title: "Blocks/section-pricing/pricing-table",
  component: Pricing,
  parameters: { layout: "fullscreen" },
  args: {
    title: "Simple, transparent pricing",
    subtitle: "Choose the plan that fits your needs. All plans include a 14-day free trial.",
    tiers: sampleTiers,
  },
}

export default meta
type Story = StoryObj<typeof Pricing>

export const Default: Story = {}
