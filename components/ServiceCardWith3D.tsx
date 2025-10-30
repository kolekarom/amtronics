"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  description: string
  features: string[]
  image?: string
}

export default function ServiceCardWith3D({
  id,
  title,
  icon: Icon,
  color,
  description,
  features,
  image,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/services#${id}`}>
      <div
        className="relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>

        <div
          className={`relative z-10 transform transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
        >
          <div
            className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4 transform transition-transform duration-300 ${isHovered ? "rotate-12 scale-110" : ""}`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-neutral-dark mb-2">{title}</h3>
          <p className="text-text-light text-sm mb-4 leading-relaxed">{description}</p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-neutral-dark/80">
                <CheckCircle className="w-4 h-4 text-primary-blue flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-primary-blue font-medium text-sm group-hover:gap-3 transition-all">
            Learn More
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
          </div>
        </div>
      </div>
    </Link>
  )
}
