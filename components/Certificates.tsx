import { Shield } from "lucide-react"

export default function Certificates() {
  const certifications = [
    { name: "ISO 9001:2015", category: "Quality Management" },
    { name: "ISO 14001:2015", category: "Environmental Management" },
    { name: "RoHS Compliant", category: "Environmental Safety" },
  ]

  // Assign alternating colors (blue / orange)
  const colors = [
    { base: "from-blue-50/50", iconBg: "bg-blue-100", iconText: "text-blue-600", hover: "group-hover:bg-blue-600 group-hover:text-white" },
    { base: "from-orange-50/50", iconBg: "bg-orange-100", iconText: "text-orange-600", hover: "group-hover:bg-orange-600 group-hover:text-white" },
    { base: "from-blue-50/50", iconBg: "bg-blue-100", iconText: "text-blue-600", hover: "group-hover:bg-blue-600 group-hover:text-white" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-4">
            Certified Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our commitment to quality and sustainability is recognized by leading international certifications.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {certifications.map((cert, idx) => {
            const color = colors[idx % colors.length]
            return (
              <div
                key={idx}
                className={`relative group w-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100
                            transition-all duration-300 hover:-translate-y-2 p-8 text-center`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color.base} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full ${color.iconBg} ${color.iconText} mb-4 ${color.hover} transition-colors duration-300`}
                  >
                    <Shield className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-800">{cert.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{cert.category}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
