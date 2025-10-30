import { Shield } from "lucide-react"

export default function Certificates() {
  const certifications = [
    { name: "ISO 9001:2015", category: "Quality Management" },
    { name: "ISO 14001:2015", category: "Environmental" },
    { name: "IPC-A-610 Class 3", category: "Assembly Standard" },
    { name: "RoHS Compliant", category: "Environmental" },
    { name: "UL Certified", category: "Safety" },
    { name: "CE Marking", category: "Compliance" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">Certified Excellence</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Our commitment to quality is backed by industry-leading certifications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-neutral-gray rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 text-primary-blue mx-auto mb-3" />
              <div className="text-sm font-semibold text-neutral-dark mb-1">{cert.name}</div>
              <div className="text-xs text-text-light">{cert.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
