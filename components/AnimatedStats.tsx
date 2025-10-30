"use client"

import { useEffect, useRef, useState } from "react"

interface StatProps {
  number: string
  label: string
}

function AnimatedStat({ number, label }: StatProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-4xl lg:text-5xl font-bold text-primary-blue mb-2 transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        {number}
      </div>
      <div className="text-sm text-text-light font-medium">{label}</div>
    </div>
  )
}

interface AnimatedStatsProps {
  stats: StatProps[]
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <section className="py-16 bg-white border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
