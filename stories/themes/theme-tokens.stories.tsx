import type { Meta, StoryObj } from "@storybook/react-vite"

const tokens: Record<string, { name: string; css: string }[]> = {
  Background: [
    { name: "background", css: "bg-background" },
    { name: "foreground", css: "bg-foreground" },
    { name: "card", css: "bg-card" },
    { name: "card-foreground", css: "bg-card-foreground" },
    { name: "popover", css: "bg-popover" },
    { name: "popover-foreground", css: "bg-popover-foreground" },
  ],
  Primary: [
    { name: "primary", css: "bg-primary" },
    { name: "primary-foreground", css: "bg-primary-foreground" },
    { name: "secondary", css: "bg-secondary" },
    { name: "secondary-foreground", css: "bg-secondary-foreground" },
    { name: "accent", css: "bg-accent" },
    { name: "accent-foreground", css: "bg-accent-foreground" },
  ],
  Muted: [
    { name: "muted", css: "bg-muted" },
    { name: "muted-foreground", css: "bg-muted-foreground" },
    { name: "destructive", css: "bg-destructive" },
    { name: "destructive-foreground", css: "bg-destructive-foreground" },
    { name: "border", css: "bg-border" },
    { name: "input", css: "bg-input" },
  ],
  Sidebar: [
    { name: "sidebar", css: "bg-sidebar" },
    { name: "sidebar-foreground", css: "bg-sidebar-foreground" },
    { name: "sidebar-primary", css: "bg-sidebar-primary" },
    { name: "sidebar-primary-foreground", css: "bg-sidebar-primary-foreground" },
    { name: "sidebar-accent", css: "bg-sidebar-accent" },
    { name: "sidebar-accent-foreground", css: "bg-sidebar-accent-foreground" },
  ],
  Charts: [
    { name: "chart-1", css: "bg-chart-1" },
    { name: "chart-2", css: "bg-chart-2" },
    { name: "chart-3", css: "bg-chart-3" },
    { name: "chart-4", css: "bg-chart-4" },
    { name: "chart-5", css: "bg-chart-5" },
  ],
  Ring: [
    { name: "ring", css: "bg-ring" },
  ],
}

const groupKeys = Object.keys(tokens)

function ThemeTokens() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 py-16 sm:py-24">
        {/* Header */}
        <header className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/70 px-3 py-1.5 rounded-full">
              Design System
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
              Theme Tokens
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Every color in the component library maps to a semantic CSS variable.
              Light and dark mode values are derived from the active theme.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {[
              "bg-primary", "bg-secondary", "bg-accent",
              "bg-destructive", "bg-chart-2", "bg-chart-4",
            ].map((c, i) => (
              <div
                key={i}
                className={`w-8 h-1.5 rounded-full ${c}`}
                style={{ opacity: 1 - i * 0.1 }}
              />
            ))}
          </div>
        </header>

        {/* Token Groups */}
        <div className="grid grid-cols-2 gap-16 mt-20">
          {groupKeys.map((group, gi) => {
            const items = tokens[group]
            return (
              <section key={group} className="space-y-4">
                <div className="flex items-baseline gap-3 pb-3 border-b border-border/40">
                  <span className="text-xs font-mono text-muted-foreground/50 tabular-nums">
                    {(gi + 1).toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                    {group}
                  </h2>
                </div>
                <div className="space-y-1.5">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-3 py-1.5 px-2 -mx-2 rounded-md transition-colors duration-150 hover:bg-muted/40"
                    >
                      <div className={`w-5 h-5 shrink-0 rounded ring-1 ring-border/60 ${item.css}`} />
                      <code className="text-[13px] font-mono text-foreground/80 group-hover:text-foreground transition-colors">
                        --{item.name}
                      </code>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground/60">
            Reference: <code className="font-mono text-[11px]">.claude/docs/theme-tokens.md</code>
          </p>
        </footer>
      </div>
    </div>
  )
}

const meta: Meta<typeof ThemeTokens> = {
  title: "UI/themes/theme-tokens",
  component: ThemeTokens,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ThemeTokens>

export const Default: Story = {}
