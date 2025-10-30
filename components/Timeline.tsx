export default function Timeline() {
  const milestones = [
    { year: "1999", title: "Founded", description: "Amtronics established as a PCB assembly startup" },
    { year: "2005", title: "ISO Certified", description: "Achieved ISO 9001:2000 certification" },
    { year: "2010", title: "Expansion", description: "Opened new manufacturing facility" },
    { year: "2015", title: "Advanced Tech", description: "Invested in automated assembly lines" },
    { year: "2020", title: "Industry Leader", description: "Recognized as top EMS provider in region" },
    { year: "2024", title: "Innovation Hub", description: "Launched advanced testing capabilities" },
  ]

  return (
    <section className="py-20 bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">Our Journey</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            25 years of excellence in electronic manufacturing
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue to-accent-orange"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className="flex-1 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-sm font-bold text-primary-blue mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-2">{milestone.title}</h3>
                    <p className="text-text-light">{milestone.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-primary-blue rounded-full border-4 border-white"></div>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
