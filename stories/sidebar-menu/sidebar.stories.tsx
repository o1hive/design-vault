import type { Meta, StoryObj } from "@storybook/react-vite"
import { Sidebar } from "../../components/blocks/sidebar"

const meta: Meta<typeof Sidebar> = {
  title: "Blocks/sidebar-menu/sidebar",
  component: Sidebar,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {}
