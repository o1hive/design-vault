import type { Meta, StoryObj } from "@storybook/react-vite"
import { StarButton } from "../../components/ui/buttons/star-button"

const meta: Meta<typeof StarButton> = {
  title: "UI/buttons/star-button",
  component: StarButton,
  parameters: { layout: "centered" },
  args: {
    children: "Button",
  },
}

export default meta
type Story = StoryObj<typeof StarButton>

export const Default: Story = {}
