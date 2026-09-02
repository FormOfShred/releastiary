import { useEffect, useState } from "react"
import { ThemeProviderContext } from "./ThemeContext"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const updateTheme = () => {
      root.classList.remove("light", "dark")

      if (theme === "system") {
        root.classList.add(mediaQuery.matches ? "dark" : "light")
      } else {
        root.classList.add(theme)
      }
    }

    updateTheme()

    mediaQuery.addEventListener("change", updateTheme)

    return () => {
      mediaQuery.removeEventListener("change", updateTheme)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
};