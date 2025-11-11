"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="
  fixed left-6 top-1/2 -translate-y-1/2 z-50 
  flex flex-col items-center justify-center 
  w-8 h-[110px] rounded-full 
  bg-gray-300 dark:bg-[#2f3440] 
  shadow-lg transition-all duration-500 
  overflow-hidden  border-gray-500/40">


      {/* Light */}
      <button
        onClick={() => setTheme("light")}
        className={`
          w-full h-[60px] flex items-center justify-center 
          transition-all duration-300 font-semibold
          ${theme === "light" ? "bg-white text-black" : "text-gray-500"}
        `}
      >
        <span className="-rotate-90 text-[11px]">Light</span>
      </button>

      {/* Dark */}
      <button
        onClick={() => setTheme("dark")}
        className={`
          w-full h-[60px] flex items-center justify-center 
          transition-all duration-300 font-semibold
          ${theme === "dark" ? "bg-white text-black" : "text-gray-500"}
        `}
      >
        <span className="-rotate-90 text-[11px]">Dark</span>
      </button>

    </div>
  );
}
