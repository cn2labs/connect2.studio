import { useState, useEffect } from "react"

const useDarkmode = () => {
  const [theme, setTheme] = useState("dark")
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mode = localStorage.getItem("theme")
      if (mode === "light") {
        setTheme("light")
      }
    }
  }, [])
  return theme
}
export default useDarkmode
