"use client"

import type React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTopButton from "@/components/BackToTopButton"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Copy,
  Navigation,
  AlertCircle,
  Share2,
  MessageCircle,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const companyInfo = {
    name: "Amtronics Power System",
    address:
      "S/N 78, Swaraj Colony, Shri Gajanan Maharaj Nagar, Near Shankar Mandir, Alandi Road, Dighi – 411015, Pune, Maharashtra, India",
    phone: "+91 8983417716", // Placeholder - update with actual number
    whatsapp: "+8983417716",
    email: "info@amtronicspower.com",
    gstin: "27CXWPK2076B1Z8",
    workingHours: "9:00 AM - 6:00 PM (Monday–Saturday)",
    mapUrl: "https://maps.google.com/?q=S/N+78+Swaraj+Colony+Dighi+Pune",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2606050625446!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07cebd0001d%3A0x1234567890!2sDighi+Pune!5e0!3m2!1sen!2sin!4v1234567890",
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(companyInfo.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: companyInfo.name,
          text: "Check out Amtronics Power System - Professional PCB Assembly & EMS Manufacturing",
          url: window.location.href,
        })
      } catch (err) {
        console.log("Share cancelled")
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">Contact Amtronics Power System</h1>
          <p className="text-lg text-sky-300 max-w-2xl">Powering Innovation Through Precision Manufacturing ⚡</p>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Details */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Address Block */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sky-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-50 mb-2">Address</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">{companyInfo.address}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <button
                        onClick={handleCopyAddress}
                        className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 hover:text-sky-200 rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        <Copy className="w-4 h-4" />
                        {copied ? "Copied!" : "Copy Address"}
                      </button>
                      <a
                        href={companyInfo.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 hover:text-sky-200 rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-sky-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-50 mb-2">Phone</h3>
                    {showPhone ? (
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-slate-300 hover:text-sky-300 transition-colors font-medium"
                      >
                        {companyInfo.phone}
                      </a>
                    ) : (
                      <button
                        onClick={() => setShowPhone(true)}
                        className="px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 hover:text-sky-200 rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        Show Number
                      </button>
                    )}
                    <p className="text-sm text-slate-400 mt-2">Available Monday to Saturday, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-50 mb-2">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 hover:text-green-200 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </a>
                    <p className="text-sm text-slate-400 mt-2">Quick response for urgent queries</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-50 mb-2">Email</h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-slate-300 hover:text-sky-300 transition-colors font-medium"
                    >
                      {companyInfo.email}
                    </a>
                    <p className="text-sm text-slate-400 mt-2">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-50 mb-2">Business Hours</h3>
                    <p className="text-slate-300 text-sm">{companyInfo.workingHours}</p>
                  </div>
                </div>

                {/* GSTIN */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-sm text-slate-400 mb-1">GSTIN Number</p>
                  <p className="font-mono font-bold text-sky-300">{companyInfo.gstin}</p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-all duration-200 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all duration-200 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all duration-200 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <button
                    onClick={handleShare}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-lg font-medium transition-all duration-200 text-sm"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-slate-400 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                      title="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                      title="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form & Map */}
            <div className="space-y-8">
              {/* Contact Form */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Send us a Message</h2>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-300">Message sent successfully!</p>
                      <p className="text-sm text-green-300/80">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-xl overflow-hidden shadow-2xl h-96 border border-slate-700">
                <iframe
                  src={companyInfo.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Open in Google Maps */}
              <a
                href={companyInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium text-center transition-all duration-200"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
