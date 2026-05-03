import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { LogoMarquee } from "../../components/ui/marquees/logo-marquee"

const placeholderLogos = [
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg", alt: "Vercel" },
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg", alt: "Stripe" },
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linear.svg", alt: "Linear" },
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg", alt: "Figma" },
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg", alt: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/supabase.svg", alt: "Supabase" },
]

const meta: Meta<typeof ComponentPreview> = {
  title: "UI/marquees/logo-marquee",
  component: ComponentPreview,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ComponentPreview>

export const Default: Story = {
  args: {
    componentName: "logo-marquee",
    component: (
      <div className="w-full bg-background">
        <LogoMarquee logos={placeholderLogos} />
      </div>
    ),
    installCommand: "npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/logo-marquee.json",
    usageCode: `import { LogoMarquee } from "@/components/ui/marquees/logo-marquee"

const logos = [
  { src: "/logos/vercel.svg", alt: "Vercel" },
  { src: "/logos/stripe.svg", alt: "Stripe" },
]

export function Example() {
  return <LogoMarquee logos={logos} />
}`,
  },
}
