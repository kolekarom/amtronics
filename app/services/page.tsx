import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTopButton from "@/components/BackToTopButton"
import { Cpu, Zap, Box, Package, TestTube, Wrench, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      id: "pcb-assembly",
      title: "PCB Assembly",
      icon: Cpu,
      color: "service-blue",
      shortDesc: "High-precision surface mount and through-hole assembly",
      fullDesc:
        "Our PCB assembly services combine cutting-edge technology with expert craftsmanship. We handle everything from simple single-layer boards to complex multi-layer assemblies with fine-pitch components and BGAs.",
      capabilities: [
        "Surface Mount Technology (SMT) Assembly",
        "Through-Hole (THT) Assembly",
        "Mixed Technology Assembly",
        "BGA and Fine Pitch Components",
        "Lead-free and RoHS Compliant",
        "High-speed Automated Assembly",
        "Automated Optical Inspection (AOI)",
        "X-ray Inspection for BGA",
      ],
      specs: {
        "Component Size": "0201 (0.6mm × 0.3mm) to large connectors",
        "PCB Size": "50mm × 50mm to 500mm × 600mm",
        "Layer Count": "Up to 32 layers",
        "Placement Accuracy": "±0.1mm",
        "Production Capacity": "5M+ components per day",
      },
    },
    {
      id: "prototyping",
      title: "Prototyping & Product Development",
      icon: Zap,
      color: "service-orange",
      shortDesc: "Rapid prototyping to accelerate your development cycle",
      fullDesc:
        "We understand the importance of speed in product development. Our rapid prototyping services help you validate designs, test concepts, and iterate quickly without compromising on quality.",
      capabilities: [
        "Quick-turn PCB Fabrication",
        "Rapid Assembly Services",
        "Design Review and Optimization",
        "Functional Testing",
        "Design for Manufacturability (DFM)",
        "Low-volume Production Runs",
        "Iterative Design Support",
        "Documentation and Reporting",
      ],
      specs: {
        "Turnaround Time": "24-48 hours for prototypes",
        "Minimum Order": "1 unit",
        "Design Support": "Full DFM analysis included",
        Testing: "Functional and electrical testing",
        Documentation: "Complete assembly reports",
      },
    },
    {
      id: "box-build",
      title: "Box Build & System Integration",
      icon: Box,
      color: "service-dark",
      shortDesc: "Complete electro-mechanical assembly and integration",
      fullDesc:
        "From PCB to final product, we provide comprehensive box build and system integration services. Our team handles mechanical assembly, cable harness integration, and complete system testing.",
      capabilities: [
        "Mechanical Assembly",
        "Cable Harness Assembly",
        "Enclosure Integration",
        "Connector Installation",
        "Label and Marking",
        "Final System Testing",
        "Packaging and Labeling",
        "Quality Verification",
      ],
      specs: {
        "Assembly Types": "All mechanical and electro-mechanical",
        "Harness Capability": "Custom cable harnesses up to 50+ wires",
        Testing: "Full functional system testing",
        Packaging: "Custom packaging solutions available",
        "Lead Time": "5-10 business days",
      },
    },
    {
      id: "component-sourcing",
      title: "Component Sourcing & Supply Chain",
      icon: Package,
      color: "service-blue",
      shortDesc: "Strategic procurement and supply chain management",
      fullDesc:
        "Optimize your supply chain with our comprehensive component sourcing services. We work with authorized distributors to ensure quality, availability, and cost efficiency.",
      capabilities: [
        "Authorized Component Distribution",
        "Cost Optimization Analysis",
        "Inventory Management",
        "Obsolescence Mitigation",
        "Lead Time Management",
        "Quality Assurance",
        "Supplier Relationship Management",
        "Supply Chain Visibility",
      ],
      specs: {
        Suppliers: "Authorized distributors worldwide",
        "Component Types": "All standard and specialty components",
        Quality: "Genuine components with certificates",
        "Lead Time": "Optimized for your schedule",
        Support: "24/7 availability",
      },
    },
    {
      id: "testing-qa",
      title: "Testing & Quality Assurance",
      icon: TestTube,
      color: "service-orange",
      shortDesc: "Comprehensive testing ensuring highest quality standards",
      fullDesc:
        "Quality is our priority. We employ rigorous testing protocols at every stage of manufacturing to ensure your products meet the highest standards and specifications.",
      capabilities: [
        "In-Circuit Testing (ICT)",
        "Functional Testing (FCT)",
        "X-ray Inspection",
        "Automated Optical Inspection (AOI)",
        "Environmental Testing",
        "Burn-in Testing",
        "Compliance Testing",
        "Documentation and Reporting",
      ],
      specs: {
        "Test Coverage": "100% of assemblies",
        Standards: "IPC-A-610 Class 3",
        "Defect Rate": "< 0.2% (99.8% quality)",
        "Testing Equipment": "Latest automated systems",
        Certifications: "ISO 9001:2015 certified",
      },
    },
    {
      id: "after-sales",
      title: "After-Sales Support",
      icon: Wrench,
      color: "service-dark",
      shortDesc: "Ongoing technical support and repair services",
      fullDesc:
        "Our relationship doesn't end at delivery. We provide comprehensive after-sales support including technical assistance, repairs, and warranty management.",
      capabilities: [
        "Technical Support",
        "Repair Services",
        "Warranty Management",
        "Spare Parts Supply",
        "Field Service",
        "Documentation Support",
        "Training and Consultation",
        "Performance Monitoring",
      ],
      specs: {
        "Support Hours": "24/7 availability",
        "Response Time": "< 4 hours",
        Warranty: "Customizable warranty options",
        "Spare Parts": "Quick availability",
        Documentation: "Complete technical documentation",
      },
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-neutral-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">Our Services</h1>
          <p className="text-lg text-text-light max-w-2xl">
            Comprehensive electronic manufacturing solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    {/* Content */}
                    <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">{service.title}</h2>
                      <p className="text-lg text-text-light mb-6 leading-relaxed">{service.fullDesc}</p>

                      <h3 className="text-xl font-bold text-neutral-dark mb-4">Key Capabilities</h3>
                      <ul className="space-y-3 mb-8">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-dark">{cap}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-lg font-medium transition-colors"
                      >
                        Request Quote
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>

                    {/* Specs */}
                    <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="bg-neutral-gray rounded-xl p-8">
                        <h3 className="text-xl font-bold text-neutral-dark mb-6">Specifications</h3>
                        <div className="space-y-4">
                          {Object.entries(service.specs).map(([key, value]) => (
                            <div key={key} className="pb-4 border-b border-border-light last:border-0">
                              <div className="text-sm font-semibold text-text-light mb-1">{key}</div>
                              <div className="text-neutral-dark font-medium">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {idx < services.length - 1 && <div className="mt-20 border-t border-border-light"></div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-white/90 mb-8">Contact our team to discuss your specific requirements</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent-orange hover:bg-accent-orange/90 text-white rounded-lg font-medium transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
