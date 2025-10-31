"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Cpu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Detect background brightness to adjust navbar colors dynamically
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const bgColor = getComputedStyle(document.body).backgroundColor
      const rgb = bgColor.match(/\d+/g)?.map(Number)
      const brightness = rgb ? (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 : 255
      setIsDark(brightness < 128)
    })
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/industries", label: "Industries" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isDark
          ? "bg-gray-900/90 border-gray-800 text-gray-100"
          : "bg-white/95 border-gray-200 text-neutral-dark"
      } shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity">
            <div
              className={`w-10 h-10 rounded flex items-center justify-center ${
                isDark ? "bg-blue-600/70" : "bg-blue-500"
              }`}
            >
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <div
                className={`font-bold text-xl ${
                  isDark ? "text-gray-100" : "text-neutral-dark"
                }`}
              >
                Amtronics
              </div>
              <div
                className={`text-xs font-mono ${
                  isDark ? "text-gray-400" : "text-neutral-dark/60"
                }`}
              >
                Power System
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-gray-200 hover:text-blue-400"
                    : "text-neutral-dark hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/quote"
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isDark
                  ? "bg-orange-500 hover:bg-orange-400 text-white"
                  : "bg-orange-500 hover:bg-orange-400 text-white"
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isDark
                    ? "text-gray-200 hover:text-blue-400 hover:bg-gray-800"
                    : "text-neutral-dark hover:text-blue-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="block px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white rounded-lg font-medium transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
