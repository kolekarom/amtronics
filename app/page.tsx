import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Certificates from "@/components/Certificates"
import BackToTopButton from "@/components/BackToTopButton"
import HeroWithImage from "@/components/HeroWithImage"
import AnimatedStats from "@/components/AnimatedStats"
import ServiceCardWith3D from "@/components/ServiceCardWith3D"
import { ArrowRight, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"
import { services } from "@/data/services"
import ProductCard from "@/components/ProductCard"

export default function Home() {

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Active Clients" },
    { number: "10M+", label: "PCBs Assembled" },
    { number: "99.8%", label: "Quality Rate" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Header />
      <main className="flex-1">
        <HeroWithImage />

        {/* Products Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                Our Products
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent/80">
                Advanced Electronic Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore our advanced electronic manufacturing solutions designed for precision and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 'power-supplies',
                  name: 'Industrial Power Supplies',
                  description: 'High-efficiency power solutions for industrial applications with advanced thermal management.',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M2 12h20" /><path d="M3 3l18 18" /><path d="M3 21 21 3" /></svg>,
                  image: '/images/power-supply.jpg'
                },
                {
                  id: 'control-panels',
                  name: 'Control Panels',
                  description: 'Custom control panels with intuitive interfaces for seamless industrial automation.',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="M2 10h20" /><path d="M9 15h1" /><path d="M14 15h1" /></svg>,
                  image: '/images/control-panel.jpg'
                },
                {
                  id: 'sensor-modules',
                  name: 'IoT Sensor Modules',
                  description: 'Wireless sensor modules for real-time monitoring and data collection.',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15c.55-2.7 1.95-4.74 4.26-6a8.7 8.7 0 0 1 11.48 0 8.7 8.7 0 0 1 0 13.5 2.81 2.81 0 0 0-.1.35" /><path d="M16.32 13.9a28.75 28.75 0 0 1 3.97 1.67 2.83 2.83 0 0 0 .38.1" /><path d="M3.78 15.5a28.8 28.8 0 0 1 0-7" /><path d="M7.76 10a16.5 16.5 0 0 1 8.48 0" /><path d="M12 12v.01" /></svg>,
                  image: '/images/iot-sensor.jpg'
                }
              ].map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  icon={product.icon}
                  image={product.image}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
              Our Services
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent/80">
              Comprehensive EMS Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              End-to-end electronic manufacturing services tailored to your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCardWith3D
                key={service.id}
                id={service.id}
                title={service.title}
                iconName={service.iconName}
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
      <section className="py-20 lg:py-32 bg-background/80 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-card/30 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                Why Choose Us
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Industry-Leading <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our state-of-the-art facility and experienced team ensure your projects are completed with the highest
                standards of quality and efficiency.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-primary" />,
                    title: "Quality Assurance",
                    description: "ISO certified processes with rigorous testing at every stage"
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-accent" />,
                    title: "Fast Turnaround",
                    description: "Quick prototyping and production to meet your deadlines"
                  },
                  {
                    icon: <Users className="w-6 h-6 text-primary" />,
                    title: "Expert Team",
                    description: "Experienced engineers providing technical support throughout"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/20 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {[
                  ["PCB Size Range", "50mm × 50mm to 500mm × 600mm"],
                  ["Component Pitch", "Down to 0201 (0.6mm × 0.3mm)"],
                  ["BGA Pitch", "0.3mm and above"],
                  ["Layer Count", "Up to 32 layers"],
                  ["Production Capacity", "5M+ components/day"],
                  ["Lead Time", "24-48 hours (prototype)"]
                ].map(([label, value], index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-border/20 last:border-0 group"
                  >
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {label}
                    </span>
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <Certificates />

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-accent">Project</span>?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Get a free quote and discover how we can help bring your electronic products to life with precision and
            reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-3 bg-accent hover:bg-accent/90 text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Request Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-lg font-medium transition-all backdrop-blur-sm"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
