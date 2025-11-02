export default function Timeline() {
  const milestones = [
    { year: "2017", title: "Founded", description: "Amtronics established as a PCB assembly startup" },
    { year: "2019", title: "ISO Certified", description: "Achieved ISO 9001:14001 certification" },
    { year: "2021", title: "Expansion", description: "Opened new manufacturing facility" },
    { year: "2022", title: "Advanced Tech", description: "Invested in automated assembly lines" },
    { year: "2023", title: "Industry Leader", description: "Recognized as top EMS provider in region" },
    { year: "2025", title: "Innovation Hub", description: "Launched advanced testing capabilities" },
  ]

  const gradientClasses = [
    "from-blue-700 via-blue-600 to-blue-500",
    "from-orange-600 via-orange-500 to-orange-400",
    "from-blue-800 via-blue-600 to-blue-500",
    "from-orange-700 via-orange-600 to-orange-500",
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            8 years of excellence in electronic manufacturing
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-700 via-blue-500 to-orange-400"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => {
              const gradient = gradientClasses[idx % gradientClasses.length]
              return (
                <div
                  key={idx}
                  className={`flex gap-8 items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:text-right">
                    <div
                      className={`bg-gradient-to-br ${gradient} text-white p-6 rounded-xl shadow-lg border border-white/30 hover:scale-[1.02] transition-all duration-300`}
                    >
                      <div className="text-sm font-semibold text-blue-100 mb-1 uppercase tracking-wide">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-blue-100/90">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex justify-center">
                    <div
                      className={`w-5 h-5 rounded-full border-4 border-white shadow-md ${
                        idx % 2 === 0 ? "bg-blue-600" : "bg-orange-500"
                      }`}
                    ></div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
