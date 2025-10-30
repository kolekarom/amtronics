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
      description: "Manufacturing control systems and automation equipment that keep industries running efficiently.",
      applications: ["PLCs", "Motor Controllers", "Sensors", "Industrial IoT", "Robotics"],
    },
    {
      icon: Stethoscope,
      title: "Medical Devices",
      description: "Precision manufacturing for medical equipment where reliability and quality are non-negotiable.",
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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-neutral-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">Industries We Serve</h1>
          <p className="text-lg text-text-light max-w-2xl">Trusted by leading companies across diverse sectors</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => {
              const Icon = industry.icon
              const colors = ["service-blue", "service-orange", "service-dark"]
              const color = colors[idx % 3]
              return (
                <div key={idx} className="bg-neutral-gray rounded-lg p-8 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">{industry.title}</h3>
                  <p className="text-text-light mb-6 leading-relaxed">{industry.description}</p>
                  <div>
                    <div className="text-sm font-semibold text-neutral-dark mb-3">Applications:</div>
                    <div className="flex flex-wrap gap-2">
                      {industry.applications.map((app, i) => (
                        <span key={i} className="text-xs bg-white px-3 py-1 rounded-full text-neutral-dark font-medium">
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

      {/* Why Partner */}
      <section className="py-20 lg:py-32 bg-neutral-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">Why Industries Choose Amtronics</h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">Proven expertise across multiple sectors</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-bold text-neutral-dark mb-4">Industry Expertise</h3>
              <p className="text-text-light leading-relaxed">
                With 25+ years of experience serving diverse industries, we understand the unique requirements and
                standards of each sector. Our team has deep knowledge of industry-specific regulations and best
                practices.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-bold text-neutral-dark mb-4">Quality Compliance</h3>
              <p className="text-text-light leading-relaxed">
                We maintain certifications and compliance standards required by various industries including medical,
                automotive, and aerospace. Our processes are designed to meet the strictest requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-bold text-neutral-dark mb-4">Scalability</h3>
              <p className="text-text-light leading-relaxed">
                From prototype to high-volume production, our flexible manufacturing capabilities can scale to meet your
                needs. We support growth at every stage of your product lifecycle.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-bold text-neutral-dark mb-4">Reliability</h3>
              <p className="text-text-light leading-relaxed">
                Our track record speaks for itself. We've built long-term partnerships with industry leaders who trust
                us to deliver consistent quality and on-time performance.
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
