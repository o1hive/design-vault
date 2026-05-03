import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { GlowyWavesHero } from "../../components/blocks/glowy-waves-hero-shadcnui"

const meta: Meta<typeof ComponentPreview> = {
  title: "Blocks/heros/glowy-waves-hero-shadcnui",
  component: ComponentPreview,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ComponentPreview>

export const Default: Story = {
  args: {
    componentName: "glowy-waves-hero-shadcnui",
    component: <GlowyWavesHero />,
    installCommand: "npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/glowy-waves-hero-shadcnui.json",
    usageCode: `import { GlowyWavesHero } from "@/components/blocks/glowy-waves-hero-shadcnui"

export function Page() {
  return <GlowyWavesHero />
}`,
  },
}
