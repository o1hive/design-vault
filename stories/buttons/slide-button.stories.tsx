import type { Meta, StoryObj } from "@storybook/react-vite"
import SlideButton from "../../components/ui/slide-button"

const meta: Meta<typeof SlideButton> = {
  title: "UI/buttons/slide-button",
  component: SlideButton,
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof SlideButton>

export const Default: Story = {}
