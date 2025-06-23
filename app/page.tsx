import Hero from "@/components/home/hero"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import CardRow from "@/components/home/card-row"
import HowItWorks from "@/components/home/how-it-works"
import ServiceSections from "@/components/home/services-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="mb-auto">
        <Navbar />
      </div>

      <Hero />

      <CardRow />

      <HowItWorks />

      <ServiceSections />

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}
