"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Cpu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  // Detect brightness of background to adjust navbar text colors dynamically
  useEffect(() => {
    const updateTheme = () => {
      const bgColor = getComputedStyle(document.body).backgroundColor
      const rgb = bgColor.match(/\d+/g)?.map(Number)
      const brightness = rgb ? (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 : 255
      setIsDark(brightness < 128)
    }

    updateTheme()
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/industries", label: "We Serve" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 border-b shadow-sm ${
        isDark
          ? "bg-gray-950/80 border-gray-800 text-gray-100"
          : "bg-white/90 border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                isDark ? "bg-blue-600/80 group-hover:bg-blue-500" : "bg-blue-500 group-hover:bg-blue-600"
              }`}
            >
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <div
                className={`font-bold text-xl tracking-tight ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Amtronics
              </div>
              <div
                className={`text-xs font-mono ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Power System
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 ${
                    isDark
                      ? isActive
                        ? "text-orange-400"
                        : "text-gray-300 hover:text-blue-400"
                      : isActive
                        ? "text-blue-600"
                        : "text-gray-800 hover:text-blue-500"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
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

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isDark
                    ? isActive
                      ? "text-orange-400 bg-gray-800"
                      : "text-gray-200 hover:text-blue-400 hover:bg-gray-800"
                    : isActive
                      ? "text-blue-600 bg-gray-100"
                      : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/quote"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 mt-2 bg-orange-500 hover:bg-orange-400 text-white rounded-lg font-medium text-center transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
