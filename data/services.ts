import { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  title: string
  iconName: string
  color: string
  description: string
  features: string[]
  image?: string
}

export const services: Service[] = [
  {
    id: "pcb-assembly",
    title: "PCB Assembly",
    iconName: "Cpu",
    color: "bg-blue-600 hover:bg-blue-700",
    description: "High-precision surface mount and through-hole assembly with state-of-the-art equipment.",
    features: [
      "SMT & THT Assembly",
      "Multi-layer PCBs",
      "BGA & Fine Pitch",
      "Lead-free Options"
    ]
  },
  {
    id: "prototyping",
    title: "Prototyping",
    iconName: "Zap",
    color: "bg-orange-500 hover:bg-orange-600",
    description: "Rapid prototyping services to accelerate your product development cycle.",
    features: [
      "Quick Turnaround",
      "Low Volume Runs",
      "Design Support",
      "Iterative Testing"
    ]
  },
  {
    id: "box-build",
    title: "Box Build",
    iconName: "Box",
    color: "bg-slate-700 hover:bg-slate-800",
    description: "Complete electro-mechanical assembly and system integration services.",
    features: [
      "Full Assembly",
      "Cable Harness",
      "Enclosure Integration",
      "Final Testing"
    ]
  },
  {
    id: "component-sourcing",
    title: "Component Sourcing",
    iconName: "Package",
    color: "bg-blue-600 hover:bg-blue-700",
    description: "Strategic procurement and supply chain management for optimal cost efficiency.",
    features: [
      "Authorized Distributors",
      "Cost Optimization",
      "Inventory Management",
      "Obsolescence Mitigation"
    ]
  },
  {
    id: "testing-qa",
    title: "Testing & QA",
    iconName: "TestTube",
    color: "bg-orange-500 hover:bg-orange-600",
    description: "Comprehensive testing protocols ensuring the highest quality standards.",
    features: [
      "ICT & FCT",
      "X-Ray Inspection",
      "Environmental Testing",
      "ISO Certified"
    ]
  },
  {
    id: "after-sales-support",
    title: "After-Sales Support",
    iconName: "Wrench",
    color: "bg-slate-700 hover:bg-slate-800",
    description: "Ongoing technical support and repair services for long-term partnerships.",
    features: [
      "Technical Support",
      "Repair Services",
      "Warranty Management",
      "Documentation"
    ]
  }
]
