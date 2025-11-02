'use client';

import { useEffect, useCallback, memo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle, Cpu, Zap, Box, Package, TestTube, Wrench } from 'lucide-react';
import Link from 'next/link';

type Service = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    id: 'pcb-assembly',
    title: 'PCB Assembly',
    icon: Cpu,
    color: 'bg-blue-600 hover:bg-blue-700',
    description: 'High-precision surface mount and through-hole assembly with state-of-the-art equipment.',
    features: ['SMT & THT Assembly', 'Multi-layer PCBs', 'BGA & Fine Pitch', 'Lead-free Options'],
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    icon: Zap,
    color: 'bg-orange-500 hover:bg-orange-600',
    description: 'Rapid prototyping services to accelerate your product development cycle.',
    features: ['Quick Turnaround', 'Low Volume Runs', 'Design Support', 'Iterative Testing'],
  },
  {
    id: 'box-build',
    title: 'Box Build',
    icon: Box,
    color: 'bg-slate-700 hover:bg-slate-800',
    description: 'Complete electro-mechanical assembly and system integration services.',
    features: ['Full Assembly', 'Cable Harness', 'Enclosure Integration', 'Final Testing'],
  },
  {
    id: 'component-sourcing',
    title: 'Component Sourcing',
    icon: Package,
    color: 'bg-blue-600 hover:bg-blue-700',
    description: 'Strategic procurement and supply chain management for optimal cost efficiency.',
    features: ['Authorized Distributors', 'Cost Optimization', 'Inventory Management', 'Obsolescence Mitigation'],
  },
  {
    id: 'testing-qa',
    title: 'Testing & QA',
    icon: TestTube,
    color: 'bg-orange-500 hover:bg-orange-600',
    description: 'Comprehensive testing protocols ensuring the highest quality standards.',
    features: ['ICT & FCT', 'X-Ray Inspection', 'Environmental Testing', 'ISO Certified'],
  },
  {
    id: 'after-sales-support',
    title: 'After-Sales Support',
    icon: Wrench,
    color: 'bg-slate-700 hover:bg-slate-800',
    description: 'Ongoing technical support and repair services for long-term partnerships.',
    features: ['Technical Support', 'Repair Services', 'Warranty Management', 'Documentation'],
  },
];

// Memoized ServiceCard to prevent unnecessary re-renders
const ServiceCard = memo(({ service }: { service: Service }) => {
  const { id, title, icon: Icon, color, description, features } = service;
  
  return (
    <div
      id={id}
      className={`${color} rounded-xl p-8 transition-all duration-300 transform hover:scale-105 h-full flex flex-col`}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-white/10 rounded-lg mr-4 flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-200 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link
          href={`/contact?service=${encodeURIComponent(title)}`}
          className="inline-flex items-center text-white font-medium group mt-2"
          aria-label={`Get a quote for ${title}`}
        >
          Get a Quote
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default function ServicesContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Memoize the scroll function to prevent recreation on each render
  const scrollToSection = useCallback((id: string) => {
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById(id);
    if (!element) return;
    
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  // Handle hash-based scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        // Small timeout to ensure the DOM is ready
        const timer = setTimeout(() => scrollToSection(id), 50);
        return () => clearTimeout(timer);
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange, false);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, [pathname, searchParams, scrollToSection]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <main className="flex-1">
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

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
