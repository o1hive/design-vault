import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { LogoMarquee } from "../../components/ui/marquees/logo-marquee"

const sampleLogos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk Logo" },
]

const meta: Meta<typeof LogoMarquee> = {
  title: "UI/marquees/logo-marquee",
  component: LogoMarquee,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof LogoMarquee>

export const Default: Story = {
  args: {
    logos: sampleLogos,
  },
  render: (args) => (
    <ComponentPreview
      componentName="logo-marquee"
      component={<LogoMarquee {...args} />}
      installCommand="npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/logo-marquee.json"
      usageCode={`import { LogoMarquee } from "@/components/ui/marquees/logo-marquee"

export function Example() {
  return (
    <LogoMarquee logos={[
      { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
      { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
      { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
    ]} />
  )
}`}
    />
  ),
}
