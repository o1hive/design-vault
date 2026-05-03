import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { RoundedNav } from "../../components/ui/navbars/rounded-nav"

const meta: Meta<typeof ComponentPreview> = {
  title: "UI/navbars/rounded-nav",
  component: ComponentPreview,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ComponentPreview>

export const Default: Story = {
  args: {
    componentName: "rounded-nav",
    component: (
      <RoundedNav
        logo={<span className="text-lg font-bold text-foreground">Acme</span>}
        menuItems={[
          { label: "Product", onClick: () => {} },
          { label: "Pricing", onClick: () => {} },
          { label: "Docs", onClick: () => {} },
          { label: "Blog", onClick: () => {} },
        ]}
        actionLabel="Get started"
      />
    ),
    installCommand: "npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/rounded-nav.json",
    usageCode: `import { RoundedNav } from "@/components/ui/navbars/rounded-nav"

export function Example() {
  return (
    <RoundedNav
      logo={<span className="text-lg font-bold">Acme</span>}
      menuItems={[
        { label: "Product", onClick: () => {} },
        { label: "Pricing", onClick: () => {} },
      ]}
      actionLabel="Get started"
    />
  )
}`,
  },
}
