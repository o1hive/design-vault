import type { Meta, StoryObj } from "@storybook/react-vite"
import { SignInForm } from "../../components/blocks/sign-in-form"

const meta: Meta<typeof SignInForm> = {
  title: "Blocks/forms/sign-in-form",
  component: SignInForm,
  parameters: { layout: "fullscreen" },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SignInForm>

export const Default: Story = {}
