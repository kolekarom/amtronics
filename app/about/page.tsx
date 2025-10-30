import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Timeline from "@/components/Timeline"
import Certificates from "@/components/Certificates"
import BackToTopButton from "@/components/BackToTopButton"
import { Users, Target, Lightbulb, Award } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in quality, precision, and customer service",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We view our clients as partners, committed to their long-term success",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously invest in technology and processes to stay ahead",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "You can count on us to deliver on time, every time, with consistent quality",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted/10">
      <Header />

      {/* Hero */}
      <section className="neutral-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">About Amtronics</h1>
          <p className="text-lg text-text-light max-w-2xl">25 years of excellence in electronic manufacturing</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-6">Our Story</h2>
              <p className="text-lg text-text-light mb-4 leading-relaxed">
                Founded in 1999, Amtronics Power System started with a simple vision: to provide world-class electronic
                manufacturing services to businesses of all sizes. What began as a small operation has grown into a
                trusted partner for hundreds of companies across multiple industries.
              </p>
              <p className="text-lg text-text-light mb-4 leading-relaxed">
                Over the past 25 years, we've invested heavily in technology, talent, and processes to ensure we deliver
                the highest quality products and services. Our commitment to excellence has earned us numerous
                certifications and the trust of leading brands worldwide.
              </p>
              <p className="text-lg text-text-light leading-relaxed">
                Today, we continue to innovate and expand our capabilities to meet the evolving needs of the electronics
                industry. Our state-of-the-art facility and experienced team are ready to bring your vision to life.
              </p>
            </div>
            <div className="bg-neutral-gray rounded-xl p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary-blue mb-2">25+</div>
                  <div className="text-neutral-dark font-semibold">Years in Business</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-orange mb-2">500+</div>
                  <div className="text-neutral-dark font-semibold">Active Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-blue mb-2">10M+</div>
                  <div className="text-neutral-dark font-semibold">PCBs Assembled</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-orange mb-2">99.8%</div>
                  <div className="text-neutral-dark font-semibold">Quality Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-neutral-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-neutral-dark mb-4">Our Mission</h3>
              <p className="text-lg text-text-light leading-relaxed">
                To deliver reliable, high-quality electronic manufacturing solutions that empower our clients to
                innovate and succeed in their markets. We are committed to providing exceptional service, competitive
                pricing, and continuous improvement.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-neutral-dark mb-4">Our Vision</h3>
              <p className="text-lg text-text-light leading-relaxed">
                To be India's most reliable and innovative electronics manufacturing partner, recognized globally for
                our commitment to quality, precision, and customer success. We aspire to be the preferred choice for
                companies seeking trustworthy EMS solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">Our Core Values</h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">These principles guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-neutral-gray rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Certificates */}
      <Certificates />

      <Footer />
      <BackToTopButton />
    </div>
  )
}
