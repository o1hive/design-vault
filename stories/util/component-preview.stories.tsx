import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { StarButton } from "../../components/ui/buttons/star-button"
import { ShinyButton } from "../../components/ui/buttons/shiny-button"

const meta: Meta<typeof ComponentPreview> = {
  title: "UI/util/component-preview",
  component: ComponentPreview,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ComponentPreview>

export const Default: Story = {
  args: {
    componentName: "star-button",
    component: <StarButton onClick={() => {}}>Button</StarButton>,
    installCommand: "npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/star-button.json",
    usageCode: `import { StarButton } from "@/components/ui/buttons/star-button"

export function Example() {
  return (
    <StarButton onClick={() => console.log("clicked")}>
      Button
    </StarButton>
  )
}`,
  },
}

export const WithShinyButton: Story = {
  args: {
    componentName: "shiny-button",
    component: <ShinyButton>Get unlimited access</ShinyButton>,
    installCommand: "npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/shiny-button.json",
    usageCode: `import { ShinyButton } from "@/components/ui/buttons/shiny-button"

export function Example() {
  return (
    <ShinyButton onClick={() => console.log("clicked")}>
      Get unlimited access
    </ShinyButton>
  )
}`,
  },
}
