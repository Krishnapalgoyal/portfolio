"use client";

import useThemeToggle from "@/hooks/useThemeToggle";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, toggleTheme } = useThemeToggle();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/ruby.png" alt="Ruby on Rails" width={32} height={32} />
          <span className="font-semibold">Krishnapal</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-600 dark:text-gray-400">
          <a href="#about" className="hover:text-black dark:hover:text-white">
            About
          </a>
          <a href="#experience" className="hover:text-black dark:hover:text-white">
            Experience
          </a>
          <a href="#projects" className="hover:text-black dark:hover:text-white">
            Projects
          </a>
          <a href="#skills" className="hover:text-black dark:hover:text-white">
            Skills
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white">
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="ml-4 text-lg hover:opacity-80 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}
