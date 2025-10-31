import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Timeline from "@/components/Timeline"
import Certificates from "@/components/Certificates"
import BackToTopButton from "@/components/BackToTopButton"
import { Users, Target, Lightbulb, Award } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in quality, precision, and customer service.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We view our clients as partners, committed to their long-term success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously invest in technology and processes to stay ahead.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "You can count on us to deliver on time, every time, with consistent quality.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-neutral-dark">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900/10 to-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-400">
              Amtronics
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            25 years of excellence in electronic manufacturing and innovation.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Founded in 1999, Amtronics Power System began with a vision to deliver world-class electronic manufacturing
              services to businesses of all sizes. What started as a small operation has evolved into a trusted partner
              for hundreds of companies across industries.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Over 25 years, we’ve invested in cutting-edge technology, skilled professionals, and modern processes to
              ensure excellence. Our commitment to quality has earned us global trust and numerous certifications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we continue to innovate — adapting to the fast-paced evolution of the electronics industry with
              unmatched reliability and precision.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-1">25+</div>
                <div className="text-neutral-dark font-semibold">Years in Business</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-1">500+</div>
                <div className="text-neutral-dark font-semibold">Active Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-1">10M+</div>
                <div className="text-neutral-dark font-semibold">PCBs Assembled</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-1">99.8%</div>
                <div className="text-neutral-dark font-semibold">Quality Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 lg:p-12 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-neutral-dark mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To deliver reliable, high-quality electronic manufacturing solutions that empower our clients to innovate
              and succeed. We aim for continuous improvement, competitive pricing, and exceptional service.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 lg:p-12 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-neutral-dark mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be India's most trusted and innovative electronics manufacturing partner — recognized globally for
              precision, quality, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            These principles guide everything we do — from design to delivery.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              const colors = ["bg-blue-500", "bg-orange-500", "bg-blue-600", "bg-orange-400"]
              const color = colors[idx % colors.length]
              return (
                <div
                  key={idx}
                  className="bg-gray-100 rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Certificates */}
      <Certificates />

      <Footer />
      <BackToTopButton />
    </div>
  )
}
