import type { Meta, StoryObj } from "@storybook/react-vite"
import { ShinyButton } from "../../components/ui/buttons/shiny-button"

const meta: Meta<typeof ShinyButton> = {
  title: "UI/buttons/shiny-button",
  component: ShinyButton,
  parameters: { layout: "centered" },
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Get unlimited access",
  },
}

export default meta
type Story = StoryObj<typeof ShinyButton>

export const Default: Story = {}
