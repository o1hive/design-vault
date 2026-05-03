import { useState, useCallback } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Menu, X } from "lucide-react"

interface MenuItem {
  label: string
  onClick: () => void
}

interface RoundedNavProps {
  logo: React.ReactNode
  menuItems: MenuItem[]
  actionLabel: string
  onActionClick?: () => void
  isSticky?: boolean
  className?: string
}

const navVariants: Variants = {
  hidden: {
    y: -80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
}

const bgVariants: Variants = {
  hidden: {
    width: 68,
    height: 68,
    left: "50%",
    top: "50%",
    x: "-50%",
    y: "-50%",
    borderRadius: "50%",
  },
  visible: {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    x: 0,
    y: 0,
    borderRadius: "9999px",
    transition: {
      delay: 0.55,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const logoVariants: Variants = {
  hidden: {
    left: "50%",
    top: "50%",
    x: "-50%",
    y: "-50%",
    opacity: 0,
  },
  visible: {
    left: "1.25rem",
    top: "50%",
    x: 0,
    y: "-50%",
    opacity: 1,
    transition: {
      opacity: { duration: 0.2, delay: 0.08 },
      left: { delay: 0.55, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      x: { delay: 0.55, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      y: { delay: 0.55, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
}

const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9 + i * 0.08,
      duration: 0.35,
      ease: "easeOut",
    },
  }),
}

const buttonVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export function RoundedNav({
  logo,
  menuItems,
  actionLabel,
  onActionClick,
  isSticky = false,
  className = "",
}: RoundedNavProps) {
  const [complete, setComplete] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), [])
  const actionDelay = 0.9 + menuItems.length * 0.08 + 0.2

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      onAnimationComplete={() => setComplete(true)}
      className={`${
        isSticky ? "sticky top-4" : "relative"
      } z-50 mx-auto flex h-14 max-w-3xl items-center px-5 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Background pill — always absolute */}
      <motion.div
        variants={bgVariants}
        className="absolute bg-background border border-border/60"
      />

      {/* Animated logo — absolute, slides from center to left. Removed after complete */}
      {!complete && (
        <motion.div variants={logoVariants} className="absolute z-10">
          {logo}
        </motion.div>
      )}

      {/* Flex logo placeholder — holds space so layout never shifts */}
      <div
        className={
          complete ? "relative z-10 flex-shrink-0" : "invisible relative z-10 flex-shrink-0"
        }
      >
        {logo}
      </div>

      {/* Desktop menu — hidden on mobile */}
      <ul className="relative z-10 hidden flex-1 items-center justify-center gap-6 md:flex">
        {menuItems.map((item, i) => (
          <motion.li key={item.label} custom={i} variants={menuItemVariants}>
            <button
              onClick={item.onClick}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground cursor-pointer"
            >
              {item.label}
            </button>
          </motion.li>
        ))}
      </ul>

      {/* Desktop action button — hidden on mobile */}
      <motion.button
        onClick={onActionClick}
        custom={actionDelay}
        variants={buttonVariants}
        className="relative z-10 hidden flex-shrink-0 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex cursor-pointer"
      >
        {actionLabel}
      </motion.button>

      {/* Mobile hamburger — zooms in after expansion */}
      <motion.button
        onClick={toggleMobile}
        custom={0.85}
        variants={buttonVariants}
        className="relative z-10 ml-auto inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden cursor-pointer"
        aria-expanded={mobileOpen}
        aria-label="Toggle navigation menu"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </motion.button>

      {/* Mobile drawer — expands below the pill */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 z-40 mt-2 overflow-hidden rounded-2xl border border-border/60 bg-background md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pt-4 pb-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      item.onClick()
                      setMobileOpen(false)
                    }}
                    className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 border-t border-border/40 px-4 py-4">
              <button
                onClick={() => {
                  onActionClick?.()
                  setMobileOpen(false)
                }}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 cursor-pointer"
              >
                {actionLabel}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
