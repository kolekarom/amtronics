"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Cpu, Phone, MessageCircle } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  // Detect brightness of background to adjust navbar text colors dynamically
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const updateTheme = () => {
      const bgColor = getComputedStyle(document.body).backgroundColor;
      const rgb = bgColor.match(/\d+/g)?.map(Number);
      if (!rgb) return;
      
      const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      const newIsDark = brightness < 128;
      
      // Only update state if the value has changed
      if (newIsDark !== isDark) {
        setIsDark(newIsDark);
      }
    };

    // Initial update
    updateTheme();
    
    // Set up observer with debounce to prevent excessive updates
    let timeoutId: NodeJS.Timeout;
    const observer = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateTheme, 50);
    });
    
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ["class"],
      attributeOldValue: true
    });

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isDark]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/infrastructure", label: "Infrastructure" },
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 ${
                  isDark 
                    ? "bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-white/20" 
                    : "bg-white shadow-md border border-gray-100 group-hover:shadow-lg"
                }`}
              >
                <img 
                  src="/amtronics_logo.png" 
                  alt="Amtronics Logo" 
                  className={`w-7 h-7 object-contain transition-all duration-300 ${
                    isDark ? "brightness-0 invert" : ""
                  }`} 
                />
              </div>
              <div 
                className={`absolute -inset-1 bg-blue-500/20 rounded-xl -z-10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark ? "mix-blend-screen" : "mix-blend-multiply"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <div
                className={`font-bold text-2xl tracking-tight bg-gradient-to-r ${
                  isDark 
                    ? "text-white from-blue-400 to-blue-200" 
                    : "text-gray-900 from-blue-600 to-blue-400"
                } bg-clip-text text-transparent`}
              >
                Amtronics
              </div>
              <div
                className={`text-xs font-medium tracking-wider ${
                  isDark ? "text-blue-300/80" : "text-blue-600/80"
                }`}
              >
                POWER SYSTEMS
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
