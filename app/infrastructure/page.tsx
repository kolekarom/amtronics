"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTopButton from "@/components/BackToTopButton"

export default function ManufacturingInfrastructure() {
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
            {[
              {
                src: '/images/eps.avif',
                title: 'SMT Assembly Line',
                description: 'High-precision surface mount technology for efficient PCB assembly.'
              },
              {
                src: '/images/Gemini_Generated_Image_1hcoz61hcoz61hco.png',
                title: 'Automated Testing',
                description: 'Advanced testing equipment ensuring product reliability.'
              },
              {
                src: '/images/Gemini_Generated_Image_8kiwvz8kiwvz8kiw.png',
                title: 'Wave Soldering',
                description: 'Automated wave soldering for through-hole components.'
              },
              {
                src: '/images/Gemini_Generated_Image_13h0g713h0g713h0.png',
                title: 'Quality Control',
                description: 'Stringent quality control at every production stage.'
              },
              {
                src: '/images/Gemini_Generated_Image_31oagt31oagt31oa.png',
                title: 'Component Storage',
                description: 'Organized storage for all electronic components.'
              },
              {
                src: '/images/Gemini_Generated_Image_i22x4i22x4i22x4i.png',
                title: 'Assembly Area',
                description: 'Clean and efficient assembly workstations.'
              },
              {
                src: '/images/Gemini_Generated_Image_qjq6llqjq6llqjq6.png',
                title: 'Packaging',
                description: 'Secure packaging for safe product delivery.'
              },
              {
                src: '/images/Gemini_Generated_Image_qo7enoqo7enoqo7e.png',
                title: 'R&D Innovation',
                description: 'Research and development for continuous improvement.'
              },
              {
                src: '/images/Gemini_Generated_Image_w40k06w40k06w40k.png',
                title: 'Warehouse',
                description: 'Spacious storage for inventory management.'
              },
              {
                src: '/images/Gemini_Generated_Image_wkps7uwkps7uwkps.png',
                title: 'Logistics',
                description: 'Efficient logistics for timely deliveries.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {/* Image with enhanced zoom */}
                <div className="aspect-w-16 aspect-h-10 w-full overflow-hidden">
                  <motion.img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ 
                      scale: 1.2,
                      transition: { 
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1] 
                      }
                    }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
                
                {/* Hover effect indicator */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-xl transition-all duration-500 pointer-events-none" />
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
