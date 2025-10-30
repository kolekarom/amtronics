"use client"

import { useState } from "react"
import Image from "next/image"

interface ServiceShowcaseProps {
  title: string
  description: string
  image: string
  features: string[]
}

export default function ServiceShowcase({ title, description, image, features }: ServiceShowcaseProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
      {/* Image with parallax effect */}
      <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-3xl font-bold text-neutral-dark mb-4">{title}</h3>
        <p className="text-lg text-text-light mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
              <span className="text-neutral-dark">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
