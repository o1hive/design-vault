import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonWitnIcon } from "../../components/ui/button-witn-icon"

const meta: Meta<typeof ButtonWitnIcon> = {
  title: "UI/buttons/button-witn-icon",
  component: ButtonWitnIcon,
  parameters: { layout: "centered" },
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
  },
  args: {
    label: "Let's Collaborate",
  },
}

export default meta
type Story = StoryObj<typeof ButtonWitnIcon>

export const Default: Story = {}
