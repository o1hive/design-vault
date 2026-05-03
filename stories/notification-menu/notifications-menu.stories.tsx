import type { Meta, StoryObj } from "@storybook/react-vite"
import { NotificationsMenu } from "../../components/blocks/notifications-menu"

const meta: Meta<typeof NotificationsMenu> = {
  title: "Blocks/notification-menu/notifications-menu",
  component: NotificationsMenu,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof NotificationsMenu>

export const Default: Story = {}
