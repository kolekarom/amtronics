import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ClientLogos from "@/components/ClientLogos"
import Certificates from "@/components/Certificates"
import BackToTopButton from "@/components/BackToTopButton"
import HeroWithImage from "@/components/HeroWithImage"
import AnimatedStats from "@/components/AnimatedStats"
import ServiceCardWith3D from "@/components/ServiceCardWith3D"
import { ArrowRight, Zap, Shield, Clock, Users, Package, Cpu, Box, TestTube, Wrench } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const services = [
    {
      id: 1,
      title: "PCB Assembly",
      icon: Cpu,
      color: "service-blue",
      description: "High-precision surface mount and through-hole assembly with state-of-the-art equipment",
      features: ["SMT & THT Assembly", "Multi-layer PCBs", "BGA & Fine Pitch", "Lead-free Options"],
    },
    {
      id: 2,
      title: "Prototyping",
      icon: Zap,
      color: "service-orange",
      description: "Rapid prototyping services to accelerate your product development cycle",
      features: ["Quick Turnaround", "Low Volume Runs", "Design Support", "Iterative Testing"],
    },
    {
      id: 3,
      title: "Box Build",
      icon: Box,
      color: "service-dark",
      description: "Complete electro-mechanical assembly and system integration services",
      features: ["Full Assembly", "Cable Harness", "Enclosure Integration", "Final Testing"],
    },
    {
      id: 4,
      title: "Component Sourcing",
      icon: Package,
      color: "service-blue",
      description: "Strategic procurement and supply chain management for optimal cost efficiency",
      features: ["Authorized Distributors", "Cost Optimization", "Inventory Management", "Obsolescence Mitigation"],
    },
    {
      id: 5,
      title: "Testing & QA",
      icon: TestTube,
      color: "service-orange",
      description: "Comprehensive testing protocols ensuring the highest quality standards",
      features: ["ICT & FCT", "X-Ray Inspection", "Environmental Testing", "ISO Certified"],
    },
    {
      id: 6,
      title: "After-Sales Support",
      icon: Wrench,
      color: "service-dark",
      description: "Ongoing technical support and repair services for long-term partnerships",
      features: ["Technical Support", "Repair Services", "Warranty Management", "Documentation"],
    },
  ]

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Active Clients" },
    { number: "10M+", label: "PCBs Assembled" },
    { number: "99.8%", label: "Quality Rate" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <HeroWithImage />

      <AnimatedStats stats={stats} />

      {/* Client Logos */}
      <ClientLogos />

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-neutral-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent-orange text-white rounded-full text-sm font-medium">
              Our Services
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-dark mb-4">Comprehensive EMS Solutions</h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
              End-to-end electronic manufacturing services tailored to your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCardWith3D
                key={service.id}
                id={service.id}
                title={service.title}
                icon={service.icon}
                color={service.color}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-lg font-medium transition-colors"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary-blue text-white rounded-full text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-6">Industry-Leading Capabilities</h2>
              <p className="text-lg text-text-light mb-8 leading-relaxed">
                Our state-of-the-art facility and experienced team ensure your projects are completed with the highest
                standards of quality and efficiency.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-2">Quality Assurance</h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      ISO certified processes with rigorous testing at every stage
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-2">Fast Turnaround</h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      Quick prototyping and production to meet your deadlines
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-2">Expert Team</h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      Experienced engineers providing technical support throughout
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-gray rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-neutral-dark mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border-light">
                  <span className="text-sm font-medium text-text-light">PCB Size Range</span>
                  <span className="text-sm font-bold text-neutral-dark">50mm × 50mm to 500mm × 600mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border-light">
                  <span className="text-sm font-medium text-text-light">Component Pitch</span>
                  <span className="text-sm font-bold text-neutral-dark">Down to 0201 (0.6mm × 0.3mm)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border-light">
                  <span className="text-sm font-medium text-text-light">BGA Pitch</span>
                  <span className="text-sm font-bold text-neutral-dark">0.3mm and above</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border-light">
                  <span className="text-sm font-medium text-text-light">Layer Count</span>
                  <span className="text-sm font-bold text-neutral-dark">Up to 32 layers</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border-light">
                  <span className="text-sm font-medium text-text-light">Production Capacity</span>
                  <span className="text-sm font-bold text-neutral-dark">5M+ components/day</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm font-medium text-text-light">Lead Time</span>
                  <span className="text-sm font-bold text-neutral-dark">24-48 hours (prototype)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <Certificates />

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Get a free quote and discover how we can help bring your electronic products to life with precision and
            reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-3 bg-accent-orange hover:bg-accent-orange/90 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Request Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-blue rounded-lg font-medium transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
