import type { Meta, StoryObj } from "@storybook/react-vite"
import { RideBookingForm } from "../../components/blocks/ride-booking-form"

const meta: Meta<typeof RideBookingForm> = {
  title: "Blocks/forms/ride-booking-form",
  component: RideBookingForm,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof RideBookingForm>

export const Default: Story = {}
