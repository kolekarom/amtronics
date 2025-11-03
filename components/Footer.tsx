"use client"

import { useState } from "react"
import Link from "next/link"
import { Cpu, Phone, Mail, MapPin, X } from "lucide-react"

export default function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showTermsOfService, setShowTermsOfService] = useState(false)
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
                <div className="text-xs text-[#CBD5E1] font-mono">Power Systems</div>
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
                <Link href="/about" className="hover:text-white transition-colors">
                  About
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
    SR NO 78, near MAHADEV MANDIR, Swaraj Colony, Shri Gajanan Maharaj Nagar, Dighi, Pune, Pimpri-Chinchwad, Maharashtra 411015
  </a>
</li>


            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#CBD5E1]"> 2025 Amtronics Power Systems. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-[#CBD5E1]">
            <button 
              onClick={() => setShowPrivacyPolicy(true)}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowTermsOfService(true)}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
      {showPrivacyPolicy && <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />}
      {showTermsOfService && <TermsOfService onClose={() => setShowTermsOfService(false)} />}
    </footer>
  )
}

const PrivacyPolicy = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
    <div className="bg-[#0F172A] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
      <div className="sticky top-0 bg-[#0F172A] p-4 border-b border-[rgba(255,255,255,0.1)] flex justify-between items-center">
        <h2 className="text-xl font-bold">Privacy Policy</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-6 space-y-6 text-sm text-[#CBD5E1] leading-relaxed">
        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">1. Introduction</h3>
          <p>At Amtronics Power Systems, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website, chatbot, and services.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">2. Information We Collect</h3>
          <p>We collect various types of information to provide and improve our services:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Personal Information:</span> Name, email, phone number (via forms, chatbot, or support emails).</li>
            <li><span className="font-medium">Technical Data:</span> IP address, browser type, device info, cookies.</li>
            <li><span className="font-medium">Usage Data:</span> Pages visited, duration on site, user interactions.</li>
            <li><span className="font-medium">Chatbot Interactions:</span> Messages or queries submitted via the AI Help Bot.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">3. How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Respond to support queries or provide services.</li>
            <li>Improve product quality, website performance, and user experience.</li>
            <li>Send service updates or offers (only with your consent).</li>
            <li>For internal analytics and security purposes.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">4. Data Protection</h3>
          <p>We use industry-standard encryption, secure servers, and restricted data access to protect your information from unauthorized access or misuse.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">5. Sharing of Information</h3>
          <p>We do not sell or rent personal data. Information may be shared only with trusted service providers or legal authorities when required by law.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">6. Cookies & Tracking</h3>
          <p>Our website uses cookies to enhance user experience and analyze traffic. You can choose to disable cookies through your browser settings.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">7. User Rights</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Access or correct your personal information.</li>
            <li>Request deletion of your data.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">8. Data Retention</h3>
          <p>We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">9. Third-Party Links</h3>
          <p>Our website may contain links to external websites. We are not responsible for their privacy practices or content.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">10. Updates to Policy</h3>
          <p>This Privacy Policy may be updated periodically. The latest version will always be available on our website.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">11. Contact Us</h3>
          <p>For questions about this Privacy Policy or your data rights, please contact us at <a href="mailto:privacy@amtronicspowersystems.com" className="text-[#38BDF8] hover:underline">privacy@amtronicspowersystems.com</a> or write to us at:</p>
          <p className="mt-2">
            Amtronics Power Systems,<br />
            S/N 78, Shri Gajanan Maharaj Nagar,<br />
            Dighi, Pune, Maharashtra, India
          </p>
        </section>
      </div>
    </div>
  </div>
)

const TermsOfService = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
    <div className="bg-[#0F172A] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
      <div className="sticky top-0 bg-[#0F172A] p-4 border-b border-[rgba(255,255,255,0.1)] flex justify-between items-center">
        <h2 className="text-xl font-bold">Terms of Service</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-6 space-y-6 text-sm text-[#CBD5E1] leading-relaxed">
        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">1. Introduction</h3>
          <p>Welcome to Amtronics Power Systems. By accessing or using our website, chatbot, or services, you agree to comply with and be bound by these Terms of Service. Please read them carefully before using our platform.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">2. Company Information</h3>
          <p>Amtronics Power Systems is an Indian electronics and power systems manufacturer located at S/N 78, Shri Gajanan Maharaj Nagar, Dighi, Pune, Maharashtra, India.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">3. Acceptance of Terms</h3>
          <p>By using our website or services, you confirm that you are at least 18 years old (or have parental consent) and agree to these Terms, along with our Privacy Policy.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">4. Use of Website & Chatbot</h3>
          <p>Specify what users can and cannot do:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>You may use this website and chatbot only for lawful purposes.</li>
            <li>Do not attempt to hack, scrape, or misuse any system or data.</li>
            <li>Avoid sending harmful, abusive, or misleading content through the chatbot.</li>
            <li>Information provided via chatbot is for general guidance — not guaranteed to be 100% accurate.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">5. Products & Services</h3>
          <p>All product descriptions, technical data, and specifications provided on this website are for informational purposes. Amtronics Power Systems reserves the right to modify product details or discontinue any product at any time without prior notice.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">6. Intellectual Property</h3>
          <p>All logos, trademarks, product names, text, images, and code are the intellectual property of Amtronics Power Systems. You may not reproduce, distribute, or use any content without written permission.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">7. Limitation of Liability</h3>
          <p>Amtronics Power Systems is not responsible for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website, chatbot, or products.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">8. Orders, Payments & Warranty</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Orders are subject to availability and confirmation.</li>
            <li>Prices may change without prior notice.</li>
            <li>All products include a 1-year standard warranty against manufacturing defects.</li>
            <li>Warranty claims must follow the process outlined on the official website or via support email.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">9. Third-Party Links</h3>
          <p>Our website may include links to third-party websites. We do not control or endorse their content or policies.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">10. Termination of Access</h3>
          <p>We reserve the right to restrict or terminate access to any user who violates these terms, without notice.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">11. Updates to Terms</h3>
          <p>These Terms of Service may be updated periodically. Continued use of the website after changes constitutes acceptance of the new terms.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">12. Governing Law</h3>
          <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-white">13. Contact Information</h3>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2">
            📧 <a href="mailto:legal@amtronicspowersystems.com" className="text-[#38BDF8] hover:underline">legal@amtronicspowersystems.com</a><br />
            📍 Amtronics Power Systems,<br />
            &nbsp;&nbsp;&nbsp;S/N 78, Shri Gajanan Maharaj Nagar,<br />
            &nbsp;&nbsp;&nbsp;Dighi, Pune, Maharashtra, India
          </p>
        </section>
      </div>
    </div>
  </div>
)
