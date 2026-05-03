import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { KindredNav } from "../../components/ui/navbars/kindred-nav"
import { Button } from "../../components/shadcn-components/button"

const meta: Meta<typeof ComponentPreview> = {
  title: "UI/navbars/kindred-nav",
  component: ComponentPreview,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ComponentPreview>

export const Default: Story = {
  args: {
    componentName: "kindred-nav",
    component: (
      <KindredNav
        logo={<span className="text-lg font-bold text-foreground">Kindred</span>}
        menuItems={[
          { label: "Product", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "Docs", href: "#" },
          { label: "Blog", href: "#" },
        ]}
        actions={
          <>
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm">Get started</Button>
          </>
        }
      />
    ),
    installCommand: "npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/kindred-nav.json",
    usageCode: `import { KindredNav } from "@/components/ui/navbars/kindred-nav"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <KindredNav
      logo={<span className="text-lg font-bold">Kindred</span>}
      menuItems={[
        { label: "Product", href: "#" },
        { label: "Pricing", href: "#" },
      ]}
      actions={
        <>
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Get started</Button>
        </>
      }
    />
  )
}`,
  },
}
