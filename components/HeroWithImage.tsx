"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/Container"

export default function HeroWithImage() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-pcb-assembly-manufacturing-facility-with-bl.jpg"
          alt="PCB Assembly Facility"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center mb-6 px-4 py-2 bg-[#1E3A8A] text-[#F8FAFC] rounded-full text-sm font-medium">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
            </span>
            Trusted EMS Partner Since 2017
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-[#F8FAFC] mb-6 leading-tight">
            Professional PCB Assembly & EMS Manufacturing
          </h1>
          
          <p className="text-lg lg:text-xl text-[#CBD5E1] mb-8 leading-relaxed">
            From prototype to production, we deliver high-quality electronic manufacturing services with precision,
            reliability, and speed. Your trusted partner for complete turnkey solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              variant="primary"
              className="group hover:shadow-lg hover:scale-105 transition-all"
            >
              <Link href="/quote">
                <span className="flex items-center">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="hover:shadow-lg transition-all"
            >
              <Link href="/services">
                <span>View Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
