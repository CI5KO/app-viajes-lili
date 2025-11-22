"use client";

import { useState, useEffect } from "react";
import { PiSun, PiMoon } from "react-icons/pi";
import { Switch } from "..";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  }

  return (
    <Switch
      IconOn={<PiSun className="w-6 h-6" />}
      IconOff={<PiMoon className="w-6 h-6" />}
      isOn={isDark}
      onToggle={toggleTheme}
    />
  );
}
