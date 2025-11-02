"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTopButton from "@/components/BackToTopButton"

export default function ManufacturingInfrastructure() {
  const machines = [
    {
      src: '/images/eps.avif',
      title: 'EPS',
      description: 'Efficient power source ensuring stable voltage output for production systems.'
    },
    {
      src: '/images/Gemini_Generated_Image_1hcoz61hcoz61hco.png',
      title: 'Manual axial component forming and cutting m/c',
      description: 'Forms and cuts axial components precisely.'
    },
    {
      src: '/images/Gemini_Generated_Image_8kiwvz8kiwvz8kiw.png',
      title: 'Reflow 2',
      description: 'Automated reflow soldering for surface mount components.'
    },
    {
      src: '/images/Gemini_Generated_Image_13h0g713h0g713h0.png',
      title: 'Kayo 6000 CPH',
      description: 'High-precision component placement system ensuring accurate assembly.'
    },
    {
      src: '/images/Gemini_Generated_Image_31oagt31oagt31oa.png',
      title: 'Wave Soldering Machine',
      description: 'Automated wave soldering for through-hole components.'
    },
    {
      src: '/images/Gemini_Generated_Image_i22x4i22x4i22x4i.png',
      title: 'Hotplate 390°C',
      description: 'Heats components to precise temperatures for soldering.'
    },
    {
      src: '/images/Gemini_Generated_Image_qjq6llqjq6llqjq6.png',
      title: 'VD 960',
      description: 'High-precision vision inspection system ensuring flawless component placement.'
    },
    {
      src: '/images/Gemini_Generated_Image_qo7enoqo7enoqo7e.png',
      title: 'DC Power Supply',
      description: 'High-efficiency power solutions for industrial applications with advanced thermal management.'
    },
    {
      src: '/images/Gemini_Generated_Image_w40k06w40k06w40k.png',
      title: 'Kayo A4L',
      description: 'High-speed SMT pick-and-place machine for precise component mounting'
    },
    {
      src: '/images/Gemini_Generated_Image_wkps7uwkps7uwkps.png',
      title: 'MI Conveyor (Single Line)',
      description: 'Single-line conveyor for smooth and efficient material flow.'
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Manufacturing Infrastructure
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              State-of-the-art facilities powering our advanced manufacturing capabilities
            </motion.p>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((item, index) => (
              <motion.div 
                key={index} 
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="aspect-w-16 aspect-h-10 w-full overflow-hidden">
                  <img
  src={item.src}
  alt={item.title}
  className={`w-full h-64 transition-transform duration-700 rounded-lg bg-gray-100 ${
    index === 0 || index === 1
      ? "scale-[0.95] object-contain"
      : "scale-[1] object-contain"
  }`}
  style={{ objectFit: "contain", padding: "10px" }}
/>

                </div>
                <div className="p-5 text-center border-t border-gray-100 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our manufacturing expertise can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
