import type { Meta, StoryObj } from "@storybook/react-vite"
import { ShinyButton } from "../../components/ui/buttons/shiny-button"

const meta: Meta<typeof ShinyButton> = {
  title: "UI/buttons/shiny-button",
  component: ShinyButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Animated gradient button with a rotating conic border and inner shimmer effects.

## Installation

\`\`\`bash
npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/shiny-button.json
\`\`\`

## Usage

\`\`\`tsx
import { ShinyButton } from "@/components/ui/buttons/shiny-button"

export function Example() {
  return <ShinyButton onClick={() => console.log("clicked")}>Get unlimited access</ShinyButton>
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
    children: "Get unlimited access",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ShinyButton>

export const Default: Story = {}
