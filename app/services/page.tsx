import { Container, SectionTitle } from "@/components/ui/Container"
import { ServiceCard } from "@/components/ServiceCard"
import { Cpu, Zap, Box, Package, TestTube, Wrench } from "lucide-react"

const services = [
  {
    title: "PCB Assembly",
    description: "High-precision surface mount and through-hole assembly for all your electronic needs.",
    icon: Cpu,
    features: [
      "Surface Mount Technology (SMT) Assembly",
      "Through-Hole (THT) Assembly",
      "BGA and Fine Pitch Components",
      "Lead-free and RoHS Compliant",
      "Automated Optical Inspection"
    ]
  },
  {
    title: "Prototyping & Development",
    description: "Rapid prototyping to accelerate your product development cycle with precision and speed.",
    icon: Zap,
    features: [
      "Quick-turn PCB Fabrication",
      "Design Review and Optimization",
      "Functional Testing",
      "Design for Manufacturability",
      "Low-volume Production Runs"
    ]
  },
  {
    title: "Box Build & Integration",
    description: "Complete electro-mechanical assembly and system integration services.",
    icon: Box,
    features: [
      "Complete System Assembly",
      "Cable & Harness Assembly",
      "Enclosure Integration",
      "Testing & Quality Control",
      "Packaging & Shipping"
    ],
    variant: 'featured' as const
  },
  {
    title: "Component Sourcing",
    description: "Reliable component procurement and supply chain management.",
    icon: Package,
    features: [
      "Authorized Distributor Network",
      "Component Lifecycle Management",
      "Counterfeit Prevention",
      "Inventory Management",
      "Obsolescence Planning"
    ]
  },
  {
    title: "Testing & Validation",
    description: "Comprehensive testing services to ensure product reliability.",
    icon: TestTube,
    features: [
      "In-Circuit Testing (ICT)",
      "Functional Testing",
      "Environmental Testing",
      "Burn-in Testing",
      "Compliance Testing"
    ]
  },
  {
    title: "Repair & Refurbishment",
    description: "Expert repair and refurbishment services for electronic assemblies.",
    icon: Wrench,
    features: [
      "Component-level Repairs",
      "Board Rework",
      "Firmware Updates",
      "Cosmetic Refurbishment",
      "Warranty Services"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <Container className="relative pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electronic manufacturing solutions tailored to your specific requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 relative">
        <Container>
          <SectionTitle 
            title="What We Offer" 
            subtitle="From concept to production, we provide end-to-end electronic manufacturing services"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                variant={service.variant}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is ready to help you bring your electronic designs to life with our comprehensive manufacturing services.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
