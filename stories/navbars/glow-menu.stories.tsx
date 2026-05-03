import type { Meta, StoryObj } from "@storybook/react-vite"
import { GlowMenu } from "../../components/blocks/glow-menu"
import { Home, Settings, User, Bell, Search } from "lucide-react"

const meta: Meta<typeof GlowMenu> = {
  title: "Blocks/navbars/glow-menu",
  component: GlowMenu,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      { label: "Home", icon: Home, href: "/", gradient: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)", iconColor: "text-blue-500" },
      { label: "Search", icon: Search, href: "/search", gradient: "radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)", iconColor: "text-green-500" },
      { label: "Notifications", icon: Bell, href: "/notifications", gradient: "radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)", iconColor: "text-red-500" },
      { label: "Profile", icon: User, href: "/profile", gradient: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)", iconColor: "text-purple-500" },
      { label: "Settings", icon: Settings, href: "/settings", gradient: "radial-gradient(circle, rgba(234,179,8,0.3) 0%, transparent 70%)", iconColor: "text-yellow-500" },
    ],
    activeItem: "Home",
  },
}

export default meta
type Story = StoryObj<typeof GlowMenu>

export const Default: Story = {}
