import Header from "@/components/Header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/QuoteForm"
import BackToTopButton from "@/components/BackToTopButton"

export default function Quote() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-neutral-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">Request a Quote</h1>
          <p className="text-lg text-text-light max-w-2xl">
            Get a free, no-obligation quote for your manufacturing project
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-gray rounded-xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-neutral-dark mb-2">Tell Us About Your Project</h2>
            <p className="text-text-light mb-8">
              Fill out the form below with your project details. Our team will review your requirements and provide a
              detailed quote within 24 hours.
            </p>
            <QuoteForm />
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 border border-border-light text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">24h</div>
              <div className="text-neutral-dark font-semibold">Quick Response</div>
              <p className="text-sm text-text-light mt-2">We respond to all quote requests within 24 hours</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border-light text-center">
              <div className="text-3xl font-bold text-accent-orange mb-2">Free</div>
              <div className="text-neutral-dark font-semibold">No Obligation</div>
              <p className="text-sm text-text-light mt-2">Get a detailed quote with no hidden charges</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border-light text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">Expert</div>
              <div className="text-neutral-dark font-semibold">Professional Team</div>
              <p className="text-sm text-text-light mt-2">Our engineers review every quote personally</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
