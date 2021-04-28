import create from "zustand"

export const useDarkmode = create((set, get) => ({
  darkmode: true,
  toggleDarkmode: () => {
    set(state => ({ darkmode: !state.darkmode }))
    const isDark = get().darkmode
    if (!isDark) {
      document.body.classList.add("light-mode")
    } else {
      document.body.classList.remove("light-mode")
    }
  },
}))
