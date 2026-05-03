import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface KindredNavProps {
  logo: React.ReactNode
  menuItems: { label: string; href: string }[]
  actions?: React.ReactNode
  className?: string
}

export function KindredNav({
  logo,
  menuItems,
  actions,
  className = "",
}: KindredNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggle = useCallback(() => setMobileOpen((v) => !v), [])

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">{logo}</div>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">{actions}</div>

        {/* Mobile hamburger */}
        <button
          onClick={toggle}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/40 bg-background/90 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {actions && (
              <div className="flex flex-col gap-2 border-t border-border/40 px-4 py-4">
                {actions}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
