import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { SlideButton } from "../../components/ui/buttons/slide-button"

const meta: Meta<typeof ComponentPreview> = {
  title: "UI/buttons/slide-button",
  component: ComponentPreview,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ComponentPreview>

export const Default: Story = {
  args: {
    componentName: "slide-button",
    component: <SlideButton />,
    installCommand: "npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/slide-button.json",
    usageCode: `import { SlideButton } from "@/components/ui/buttons/slide-button"

export function Example() {
  return <SlideButton />
}`,
  },
}
