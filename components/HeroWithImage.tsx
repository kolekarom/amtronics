"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroWithImage() {
  return (
    <section className="relative bg-neutral-gray py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-pcb-assembly-manufacturing-facility-with-bl.jpg"
          alt="PCB Assembly Facility"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-gray via-neutral-gray/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-primary-blue text-white rounded-full text-sm font-medium animate-pulse">
            Trusted EMS Partner Since 1999
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-dark mb-6 leading-tight">
            Professional PCB Assembly & EMS Manufacturing
          </h1>
          <p className="text-lg lg:text-xl text-text-light mb-8 leading-relaxed">
            From prototype to production, we deliver high-quality electronic manufacturing services with precision,
            reliability, and speed. Your trusted partner for complete turnkey solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="px-8 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:scale-105"
            >
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border-2 border-neutral-dark text-neutral-dark hover:bg-neutral-dark hover:text-white rounded-lg font-medium transition-all hover:shadow-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
