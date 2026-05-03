import type { Meta, StoryObj } from "@storybook/react-vite"
import { CopyCode } from "../../components/ui/copy-code-button"

const meta: Meta<typeof CopyCode> = {
  title: "UI/buttons/copy-code-button",
  component: CopyCode,
  parameters: { layout: "centered" },
  argTypes: {
    code: { control: "text" },
    duration: { control: { type: "number", min: 1000, max: 10000, step: 500 } },
    copiedText: { control: "text" },
  },
  args: {
    code: "o1hive",
    duration: 2000,
    copiedText: "Code Copied!",
  },
}

export default meta
type Story = StoryObj<typeof CopyCode>

export const Default: Story = {}
