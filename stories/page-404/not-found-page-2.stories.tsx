import type { Meta, StoryObj } from "@storybook/react-vite"
import { NotFoundPage } from "../../components/blocks/not-found-page-2"

const meta: Meta<typeof NotFoundPage> = {
  title: "Blocks/page-404/not-found-page-2",
  component: NotFoundPage,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof NotFoundPage>

export const Default: Story = {}
