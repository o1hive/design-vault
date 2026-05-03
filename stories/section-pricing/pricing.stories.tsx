import type { Meta, StoryObj } from "@storybook/react-vite"
import { PricingSection } from "../../components/blocks/pricing"

const samplePlans = [
  {
    name: "Starter",
    info: "For individuals getting started",
    price: { monthly: 19, yearly: 190 },
    features: [
      { text: "5 projects" },
      { text: "Basic analytics" },
      { text: "Email support", tooltip: "Response within 24 hours" },
    ],
    btn: { text: "Get Started", href: "#" },
  },
  {
    name: "Pro",
    info: "For growing teams",
    price: { monthly: 49, yearly: 490 },
    features: [
      { text: "Unlimited projects" },
      { text: "Advanced analytics" },
      { text: "Priority support", tooltip: "Response within 2 hours" },
      { text: "Custom domains" },
    ],
    btn: { text: "Start Trial", href: "#" },
    highlighted: true,
  },
  {
    name: "Enterprise",
    info: "For large organizations",
    price: { monthly: 99, yearly: 990 },
    features: [
      { text: "Everything in Pro" },
      { text: "SSO & SAML" },
      { text: "Dedicated support" },
      { text: "Custom integrations" },
    ],
    btn: { text: "Contact Sales", href: "#" },
  },
]

const meta: Meta<typeof PricingSection> = {
  title: "Blocks/section-pricing/pricing",
  component: PricingSection,
  parameters: { layout: "fullscreen" },
  args: {
    heading: "Simple, transparent pricing",
    description: "Choose the plan that fits your needs. All plans include a 14-day free trial.",
    plans: samplePlans,
  },
}

export default meta
type Story = StoryObj<typeof PricingSection>

export const Default: Story = {}
