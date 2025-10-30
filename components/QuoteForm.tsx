"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    quantity: "",
    description: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        quantity: "",
        description: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
          Thank you! We'll review your quote request and contact you within 24 hours.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="+1 (234) 567-890"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-dark mb-2">Company *</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
          placeholder="Your Company"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">Service Required *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="pcb-assembly">PCB Assembly</option>
            <option value="prototyping">Prototyping</option>
            <option value="box-build">Box Build</option>
            <option value="component-sourcing">Component Sourcing</option>
            <option value="testing">Testing & QA</option>
            <option value="support">After-Sales Support</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">Estimated Quantity</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="e.g., 1000 units"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-dark mb-2">Project Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
          placeholder="Tell us about your project, requirements, and timeline..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
      >
        Submit Quote Request
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  )
}
