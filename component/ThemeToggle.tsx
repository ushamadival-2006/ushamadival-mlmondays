"use client"
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved) {
      setIsDark(saved === "dark");
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  function toggle() {
    const next = !(isDark ?? false);
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      aria-label="Toggle theme"
      className="ml-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={toggle}
    >
      {/* moon icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
    </button>
  );
}
