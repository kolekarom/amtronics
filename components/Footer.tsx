import Link from "next/link"
import { Cpu, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#F8FAFC] py-12 border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group hover:bg-white/90 transition-colors overflow-hidden">
                <img src="/amtronics_logo.png" alt="Amtronics Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <div className="font-bold text-lg">Amtronics</div>
                <div className="text-xs text-[#CBD5E1] font-mono">Power System</div>
              </div>
            </div>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Professional PCB assembly and EMS manufacturing since 2017.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <Link href="/services#pcb-assembly" className="hover:text-[#38BDF8] transition-colors">
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
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <Link href="/about" className="hover:text-[#38BDF8] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-white transition-colors">
                  Infrastructure
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
            <ul className="space-y-3 text-sm text-[#CBD5E1]">
              <li className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#1E3A8A] flex items-center justify-center group-hover:bg-[#1E40AF] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>
                <a href="tel:+91 8983417716" className="hover:text-[#38BDF8] transition-colors">
                  +91 8983417716
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#1E3A8A] flex items-center justify-center group-hover:bg-[#1E40AF] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>
                <a href="mailto:info@amtronics.com" className="hover:text-[#38BDF8] transition-colors">
                  info@amtronics.com
                </a>
              </li>
              <li className="flex items-start gap-2 group">
  <div className="w-8 h-8 rounded-full bg-[#1E3A8A] flex items-center justify-center group-hover:bg-[#1E40AF] transition-colors flex-shrink-0">
    <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
  </div>

  <a
    href="https://maps.app.goo.gl/KKfLrWbZAa2PgSjg7"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-white hover:text-[#38BDF8] transition-colors"
  >
    SR NO 78, near MAHADAV MANDIR, Swaraj Colony, Shri Gajanan Maharaj Nagar, Dighi, Pune, Pimpri-Chinchwad, Maharashtra 411015
  </a>
</li>


            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#CBD5E1]"> 2025 Amtronics Power System. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-[#CBD5E1]">
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
