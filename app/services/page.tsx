"use client"

import { Suspense } from "react"
import Link from "next/link"
import * as Icons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTopButton from "@/components/BackToTopButton"
import { services } from "@/data/services"

function ServicesContent() {

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-900/40 to-gray-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
              Services
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive electronic manufacturing solutions tailored to your specific requirements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent =
                (Icons[service.iconName as keyof typeof Icons] as LucideIcon) || Icons.Package

              return (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  aria-label={`Learn more about ${service.title}`}
                  className="group block rounded-xl bg-gray-800 border border-gray-700 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 p-6"
                >
                  <div
                    className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 transition-colors duration-300`}
                    aria-hidden="true"
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center text-orange-400 text-sm font-medium group-hover:underline">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 py-20 lg:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Discuss Your <span className="text-white">Project?</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help bring your electronic products to life with precision and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white/40 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <Header />
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center py-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }
      >
        <ServicesContent />
      </Suspense>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
