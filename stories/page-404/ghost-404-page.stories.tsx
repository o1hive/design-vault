import type { Meta, StoryObj } from "@storybook/react-vite"
import { Ghost404Page } from "../../components/blocks/ghost-404-page"

const meta: Meta<typeof Ghost404Page> = {
  title: "Blocks/page-404/ghost-404-page",
  component: Ghost404Page,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof Ghost404Page>

export const Default: Story = {}
