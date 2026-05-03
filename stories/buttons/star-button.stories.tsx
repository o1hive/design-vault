import type { Meta, StoryObj } from "@storybook/react-vite"
import { StarButton } from "../../components/ui/buttons/star-button"

const meta: Meta<typeof StarButton> = {
  title: "UI/buttons/star-button",
  component: StarButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Animated button with floating star particles that scatter on hover.

## Installation

\`\`\`bash
npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/star-button.json
\`\`\`

## Usage

\`\`\`tsx
import { StarButton } from "@/components/ui/buttons/star-button"

export function Example() {
  return <StarButton onClick={() => console.log("clicked")}>Button</StarButton>
}
\`\`\`
`,
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Button label content",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    children: "Button",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof StarButton>

export const Default: Story = {}
