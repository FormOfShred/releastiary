import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "../../context/ThemeProvider/ThemeContext";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button variant="outline" onClick={
      () => {
        if(theme === "dark") setTheme("light");
        else setTheme("dark");
      }
    }
    >
      <Sun className="hidden dark:flex" />
      <Moon className="dark:hidden" />
    </Button>
  )
}