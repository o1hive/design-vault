import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentPreview } from "../../components/ui/util/component-preview"
import { InfiniteSlider } from "../../components/ui/util/infinite-slider"

const meta: Meta<typeof InfiniteSlider> = {
  title: "UI/util/infinite-slider",
  component: InfiniteSlider,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof InfiniteSlider>

export const Default: Story = {
  render: (args) => (
    <ComponentPreview
      componentName="infinite-slider"
      component={
        <InfiniteSlider {...args}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-medium"
            >
              Item {i + 1}
            </div>
          ))}
        </InfiniteSlider>
      }
      installCommand="npx shadcn@latest add https://raw.githubusercontent.com/o1hive/design-vault/main/registry/infinite-slider.json"
      usageCode={`import { InfiniteSlider } from "@/components/ui/util/infinite-slider"

export function Example() {
  return (
    <InfiniteSlider>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </InfiniteSlider>
  )
}`}
    />
  ),
}
