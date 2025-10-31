'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Smooth scroll to element with offset for fixed header
const scrollToSection = (id: string) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};

export default function ServicesContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => scrollToSection(id), 100);
    }
  }, [pathname, searchParams]);

  const services = [
    {
      id: "pcb-assembly",
      title: "PCB Assembly",
      iconName: "Cpu",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "High-precision surface mount and through-hole assembly with state-of-the-art equipment.",
      features: ["SMT & THT Assembly", "Multi-layer PCBs", "BGA & Fine Pitch", "Lead-free Options"],
    },
    {
      id: "prototyping",
      title: "Prototyping",
      iconName: "Zap",
      color: "bg-orange-500 hover:bg-orange-600",
      description: "Rapid prototyping services to accelerate your product development cycle.",
      features: ["Quick Turnaround", "Low Volume Runs", "Design Support", "Iterative Testing"],
    },
    {
      id: "box-build",
      title: "Box Build",
      iconName: "Box",
      color: "bg-slate-700 hover:bg-slate-800",
      description: "Complete electro-mechanical assembly and system integration services.",
      features: ["Full Assembly", "Cable Harness", "Enclosure Integration", "Final Testing"],
    },
    {
      id: "component-sourcing",
      title: "Component Sourcing",
      iconName: "Package",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Strategic procurement and supply chain management for optimal cost efficiency.",
      features: ["Authorized Distributors", "Cost Optimization", "Inventory Management", "Obsolescence Mitigation"],
    },
    {
      id: "testing-qa",
      title: "Testing & QA",
      iconName: "TestTube",
      color: "bg-orange-500 hover:bg-orange-600",
      description: "Comprehensive testing protocols ensuring the highest quality standards.",
      features: ["ICT & FCT", "X-Ray Inspection", "Environmental Testing", "ISO Certified"],
    },
    {
      id: "after-sales-support",
      title: "After-Sales Support",
      iconName: "Wrench",
      color: "bg-slate-700 hover:bg-slate-800",
      description: "Ongoing technical support and repair services for long-term partnerships.",
      features: ["Technical Support", "Repair Services", "Warranty Management", "Documentation"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-900/40 to-gray-950 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Electronics Manufacturing Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end solutions from prototyping to full-scale production with uncompromising quality and reliability.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = Icons[service.iconName as keyof typeof Icons] as LucideIcon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`${service.color} rounded-xl p-8 transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/10 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-200 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center text-white font-medium group"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
