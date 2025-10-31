"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/QuoteForm"
import BackToTopButton from "@/components/BackToTopButton"

export default function Quote() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1E3A8A]/40 to-gray-950 py-20 lg:py-28 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Request a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A7FD1] to-[#F4A261]">
              Quote
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your manufacturing project.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 border border-gray-700 shadow-lg shadow-[#4A7FD1]/10">
            <h2 className="text-2xl font-bold text-gray-100 mb-3">
              Tell Us About Your Project
            </h2>
            <p className="text-gray-400 mb-8">
              Fill out the form below with your project details. Our team will review your requirements and provide a
              detailed quote within 24 hours.
            </p>
            <QuoteForm />
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center hover:border-[#4A7FD1]/50 hover:shadow-lg hover:shadow-[#4A7FD1]/15 transition-all duration-300">
              <div className="text-3xl font-bold text-[#5C8FE0] mb-2">24h</div>
              <div className="text-gray-100 font-semibold">Quick Response</div>
              <p className="text-sm text-gray-400 mt-2">
                We respond to all quote requests within 24 hours.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">Free</div>
              <div className="text-gray-100 font-semibold">No Obligation</div>
              <p className="text-sm text-gray-400 mt-2">
                Get a detailed quote with no hidden charges.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center hover:border-[#4A7FD1]/50 hover:shadow-lg hover:shadow-[#4A7FD1]/15 transition-all duration-300">
              <div className="text-3xl font-bold text-[#5C8FE0] mb-2">Expert</div>
              <div className="text-gray-100 font-semibold">Professional Team</div>
              <p className="text-sm text-gray-400 mt-2">
                Our engineers review every quote personally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
