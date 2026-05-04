import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { ShinyButton } from "../../components/ui/buttons/shiny-button"

const meta: Meta<typeof ShinyButton> = {
  title: "UI/buttons/shiny-button",
  component: ShinyButton,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ShinyButton>

export const Default: Story = {
  args: {
    children: "Get unlimited access",
  },
  render: (args) => (
    <ComponentPreview
      componentName="shiny-button"
      component={<ShinyButton {...args} />}
      installCommand="npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/shiny-button.json"
      usageCode={`import { ShinyButton } from "@/components/ui/buttons/shiny-button"

export function Example() {
  return (
    <ShinyButton onClick={() => console.log("clicked")}>
      Get unlimited access
    </ShinyButton>
  )
}`}
    />
  ),
}
