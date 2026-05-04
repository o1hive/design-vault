import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { GlowyWavesHero } from "../../components/blocks/glowy-waves-hero-shadcnui"

const meta: Meta<typeof GlowyWavesHero> = {
  title: "Blocks/heros/glowy-waves-hero-shadcnui",
  component: GlowyWavesHero,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof GlowyWavesHero>

export const Default: Story = {
  render: () => (
    <ComponentPreview
      componentName="glowy-waves-hero-shadcnui"
      component={<GlowyWavesHero />}
      installCommand="npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/glowy-waves-hero-shadcnui.json"
      usageCode={`import { GlowyWavesHero } from "@/components/blocks/glowy-waves-hero-shadcnui"

export function Page() {
  return <GlowyWavesHero />
}`}
    />
  ),
}
