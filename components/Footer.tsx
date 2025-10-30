import Link from "next/link"
import { Cpu, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 service-blue rounded flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Amtronics</div>
                <div className="text-xs text-white/60 font-mono">Power System</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Professional PCB assembly and EMS manufacturing since 1999.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/services#pcb-assembly" className="hover:text-white transition-colors">
                  PCB Assembly
                </Link>
              </li>
              <li>
                <Link href="/services#prototyping" className="hover:text-white transition-colors">
                  Prototyping
                </Link>
              </li>
              <li>
                <Link href="/services#box-build" className="hover:text-white transition-colors">
                  Box Build
                </Link>
              </li>
              <li>
                <Link href="/services#component-sourcing" className="hover:text-white transition-colors">
                  Component Sourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-orange" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-orange" />
                <a href="mailto:info@amtronics.com" className="hover:text-white transition-colors">
                  info@amtronics.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-orange flex-shrink-0 mt-0.5" />
                <span>123 Manufacturing Drive, Industrial Park, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">© 2025 Amtronics Power System. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
