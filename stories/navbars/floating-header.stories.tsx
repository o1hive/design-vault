import type { Meta, StoryObj } from "@storybook/react-vite"
import { FloatingHeader } from "../../components/blocks/floating-header"

const meta: Meta<typeof FloatingHeader> = {
  title: "Blocks/navbars/floating-header",
  component: FloatingHeader,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof FloatingHeader>

export const Default: Story = {}
