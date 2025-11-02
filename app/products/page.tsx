import { Metadata } from 'next';
import { ArrowRight, Zap, Cpu, Box, Package, TestTube, Wrench } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

export const metadata: Metadata = {
  title: 'Our Products - Amtronics Power Systems',
  description: 'Explore our range of advanced electronic manufacturing solutions designed for precision and performance.',
};

const products = [
  {
    id: 'power-supplies',
    name: 'Industrial Power Supplies',
    description: 'High-efficiency power solutions for industrial applications with advanced thermal management.',
    icon: <Cpu className="w-6 h-6" />,
    image: '/images/power-supply.jpg',
    features: [
      'Wide input voltage range',
      'High efficiency up to 95%',
      'Active power factor correction',
      'Over voltage/current protection'
    ]
  },
  {
    id: 'control-panels',
    name: 'Control Panels',
    description: 'Custom control panels with intuitive interfaces for seamless industrial automation.',
    icon: <Box className="w-6 h-6" />,
    image: '/images/control-panel.jpg',
    features: [
      'Custom HMI interfaces',
      'PLC integration',
      'Rugged industrial design',
      'IP65/66 rated enclosures'
    ]
  },
  {
    id: 'sensor-modules',
    name: 'IoT Sensor Modules',
    description: 'Wireless sensor modules for real-time monitoring and data collection.',
    icon: <Zap className="w-6 h-6" />,
    image: '/images/iot-sensor.jpg',
    features: [
      'LoRaWAN/WiFi/Bluetooth',
      'Long battery life',
      'Cloud connectivity',
      'Multiple sensor types'
    ]
  },
  {
    id: 'motor-drives',
    name: 'Motor Drives',
    description: 'Precision motor control systems for industrial automation and robotics.',
    icon: <Zap className="w-6 h-6" />,
    image: '/images/motor-drive.jpg',
    features: [
      'Servo and stepper control',
      'EtherCAT/Modbus support',
      'Regenerative braking',
      'Compact form factor'
    ]
  },
  {
    id: 'hmi-panels',
    name: 'HMI Panels',
    description: 'High-performance human-machine interfaces with intuitive touch controls.',
    icon: <Package className="w-6 h-6" />,
    image: '/images/hmi-panel.jpg',
    features: [
      'Capacitive touch screens',
      'Wide temperature range',
      'Multiple communication protocols',
      'Customizable interfaces'
    ]
  },
  {
    id: 'custom-solutions',
    name: 'Custom Solutions',
    description: 'Tailored electronic solutions designed to meet your specific requirements.',
    icon: <Wrench className="w-6 h-6" />,
    image: '/images/custom-solution.jpg',
    features: [
      'Custom PCB design',
      'Prototype to production',
      'Firmware development',
      'Testing and certification'
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-card">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-900/40 to-background/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
              Our Products
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Advanced <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Electronic Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of high-quality electronic products designed for industrial and commercial applications.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 lg:py-24 bg-background/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center text-white mb-4">
                      {product.icon}
                    </div>
                    
                    <div className="h-48 mb-4 overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center">
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                        <span className="text-sm">{product.name} Image</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="mt-4 space-y-2">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <svg className="h-4 w-4 text-green-400 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">Looking for something specific?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Our team can develop custom solutions tailored to your exact requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Contact Sales
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
