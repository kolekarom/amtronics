"use client"

import { useEffect, useRef } from "react"

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    if (!scroll) return

    let scrollPosition = 0
    const scrollSpeed = 1

    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scroll.scrollWidth / 2) {
        scrollPosition = 0
      }
      scroll.scrollLeft = scrollPosition
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const logos = [
    "TechCorp",
    "InnovateLabs",
    "ElectroSys",
    "PowerTech",
    "CircuitPro",
    "DeviceWorks",
    "SmartElec",
    "FutureHW",
  ]

  return (
    <section className="py-12 bg-white border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-text-light mb-8">Trusted by Leading Brands</p>
        <div ref={scrollRef} className="flex gap-12 overflow-hidden" style={{ scrollBehavior: "smooth" }}>
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-12 px-6 flex items-center justify-center bg-neutral-gray rounded-lg font-semibold text-neutral-dark/60 whitespace-nowrap"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
