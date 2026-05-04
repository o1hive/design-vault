import { useState, useCallback } from "react"

interface ComponentPreviewProps {
  component: React.ReactNode
  installCommand: string
  usageCode: string
  componentName: string
}

type Tab = "preview" | "install" | "usage"

const tabs: { id: Tab; label: string }[] = [
  { id: "preview", label: "Preview" },
  { id: "install", label: "Install" },
  { id: "usage", label: "Usage" },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase transition-all duration-200 border cursor-pointer bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700 hover:text-white"
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          Copied
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          Copy
        </>
      )}
    </button>
  )
}

export function ComponentPreview({
  component,
  installCommand,
  usageCode,
  componentName,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<Tab>("preview")

  return (
    <div className="w-full min-h-screen flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 px-5 pt-5 pb-0 mb-5">
        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
          {componentName}
        </span>
        <div className="h-4 w-px bg-border" />
        <div className="flex gap-0.5 p-0.5 rounded-lg bg-muted">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-3.5 py-1.5 text-[12px] font-medium rounded-md transition-colors duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {activeTab === "preview" && (
          <div id="o1-story-component" className="rounded-xl p-10">
            {component}
          </div>
        )}

        {activeTab === "install" && (
          <div className="relative">
            <CopyButton text={installCommand} />
            <pre className="rounded-xl p-5 pr-24 text-[13px] leading-relaxed overflow-x-auto font-mono bg-zinc-950 text-zinc-200 border border-border">
              <code>
                <span className="text-zinc-500">$ </span>
                {installCommand}
              </code>
            </pre>
          </div>
        )}

        {activeTab === "usage" && (
          <div className="relative">
            <CopyButton text={usageCode} />
            <pre className="rounded-xl p-5 pr-24 text-[13px] leading-relaxed overflow-x-auto font-mono bg-zinc-950 text-zinc-200 border border-border">
              <code>{usageCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
