import Header from "@/components/Header"
import Footer from "@/components/Footer"
import NewsCard from "@/components/NewsCard"
import BackToTopButton from "@/components/BackToTopButton"

export default function News() {
  const newsItems = [
    {
      id: "1",
      title: "Amtronics Achieves ISO 14001:2015 Environmental Certification",
      excerpt:
        "We are proud to announce our achievement of ISO 14001:2015 certification, reinforcing our commitment to environmental sustainability.",
      date: "Dec 15, 2024",
      category: "Certification",
      image: "/iso-certification.jpg",
    },
    {
      id: "2",
      title: "New Advanced Testing Facility Launched",
      excerpt:
        "Our state-of-the-art testing facility now includes X-ray inspection and environmental testing capabilities for enhanced quality assurance.",
      date: "Dec 10, 2024",
      category: "Expansion",
      image: "/testing-facility.jpg",
    },
    {
      id: "3",
      title: "Partnership with Leading IoT Company Announced",
      excerpt: "Amtronics partners with a global IoT leader to manufacture next-generation smart device components.",
      date: "Dec 5, 2024",
      category: "Partnership",
      image: "/iot-partnership.jpg",
    },
    {
      id: "4",
      title: "Celebrating 25 Years of Manufacturing Excellence",
      excerpt:
        "Amtronics marks a quarter-century of delivering quality electronic manufacturing solutions to clients worldwide.",
      date: "Nov 28, 2024",
      category: "Milestone",
      image: "/anniversary-celebration.jpg",
    },
    {
      id: "5",
      title: "Expanded Production Capacity Increases Output by 40%",
      excerpt:
        "Investment in new assembly lines enables Amtronics to increase production capacity and serve more clients efficiently.",
      date: "Nov 20, 2024",
      category: "Expansion",
      image: "/production-expansion.jpg",
    },
    {
      id: "6",
      title: "Industry Recognition: Best EMS Provider Award",
      excerpt:
        "Amtronics receives industry recognition for excellence in electronic manufacturing services and customer satisfaction.",
      date: "Nov 15, 2024",
      category: "Award",
      image: "/award-recognition.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-neutral-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">News & Updates</h1>
          <p className="text-lg text-text-light max-w-2xl">Stay informed about the latest developments at Amtronics</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
