import { useState, useEffect } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = document.documentElement
    const getTheme = () => root.classList.contains("dark") ? "dark" : "light"
    setTheme(getTheme())

    const observer = new MutationObserver(() => setTheme(getTheme()))
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return { theme }
}
