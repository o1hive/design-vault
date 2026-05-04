import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { StarButton } from "../../components/ui/buttons/star-button"

const meta: Meta<typeof StarButton> = {
  title: "UI/buttons/star-button",
  component: StarButton,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof StarButton>

export const Default: Story = {
  args: {
    children: "Button",
  },
  render: (args) => (
    <ComponentPreview
      componentName="star-button"
      component={<StarButton {...args} />}
      installCommand="npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/star-button.json"
      usageCode={`import { StarButton } from "@/components/ui/buttons/star-button"

export function Example() {
  return (
    <StarButton onClick={() => console.log("clicked")}>
      Button
    </StarButton>
  )
}`}
    />
  ),
}
