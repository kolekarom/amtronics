"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTopButton from "@/components/BackToTopButton"
import { Smartphone, Zap, Cpu, Stethoscope, Wifi, Gauge } from "lucide-react"

export default function Industries() {
  const industries = [
    {
      icon: Smartphone,
      title: "Consumer Electronics",
      description:
        "From smartphones to smart home devices, we manufacture components for consumer products that millions use daily.",
      applications: ["Smartphones", "Tablets", "Smart Watches", "IoT Devices", "Wearables"],
    },
    {
      icon: Zap,
      title: "Power & Energy",
      description:
        "We support the renewable and traditional energy sectors with reliable manufacturing for power management systems.",
      applications: ["Solar Inverters", "Power Supplies", "Battery Management", "Grid Systems", "EV Chargers"],
    },
    {
      icon: Cpu,
      title: "Industrial Automation",
      description:
        "Manufacturing control systems and automation equipment that keep industries running efficiently.",
      applications: ["PLCs", "Motor Controllers", "Sensors", "Industrial IoT", "Robotics"],
    },
    {
      icon: Stethoscope,
      title: "Medical Devices",
      description:
        "Precision manufacturing for medical equipment where reliability and quality are non-negotiable.",
      applications: [
        "Diagnostic Equipment",
        "Monitoring Devices",
        "Surgical Tools",
        "Patient Monitors",
        "Lab Equipment",
      ],
    },
    {
      icon: Wifi,
      title: "Telecommunications",
      description:
        "Supporting the connectivity industry with high-quality components for networking and communication systems.",
      applications: ["Network Equipment", "Routers", "Modems", "5G Components", "Base Stations"],
    },
    {
      icon: Gauge,
      title: "Automotive",
      description:
        "Manufacturing components for the automotive industry with strict quality and reliability standards.",
      applications: ["ECUs", "Infotainment", "Safety Systems", "Battery Management", "Sensors"],
    },
  ]

  const colors = [
    "from-[#4A7FD1] to-[#5C8FE0]",
    "from-[#F4A261] to-[#E97E3D]",
    "from-[#5C8FE0] to-[#4A7FD1]",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1E3A8A]/40 to-gray-950 py-20 lg:py-28 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Industries{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A7FD1] to-[#F4A261]">
              We Serve
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by leading companies across diverse sectors worldwide.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((industry, idx) => {
              const Icon = industry.icon
              const gradient = colors[idx % colors.length]
              return (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-[#4A7FD1]/40 hover:shadow-lg hover:shadow-[#4A7FD1]/15 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mb-5 shadow-md shadow-black/20`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div>
                    <div className="text-sm font-semibold text-gray-200 mb-3">
                      Applications:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.applications.map((app, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-700/60 border border-gray-600 px-3 py-1 rounded-full text-gray-200 font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 lg:py-32 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4A7FD1] to-[#F4A261]">
              Why Industries Choose Amtronics
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Proven expertise and reliability across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Industry Expertise",
                text: "With 25+ years of experience serving diverse industries, we understand the unique requirements and standards of each sector.",
              },
              {
                title: "Quality Compliance",
                text: "We maintain certifications and compliance standards required by industries including medical, automotive, and aerospace.",
              },
              {
                title: "Scalability",
                text: "From prototype to high-volume production, our flexible manufacturing capabilities scale to meet your needs.",
              },
              {
                title: "Reliability",
                text: "We’ve built long-term partnerships with industry leaders who trust us to deliver consistent quality and on-time performance.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-[#F4A261]/40 hover:shadow-lg hover:shadow-[#F4A261]/15 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-100 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
