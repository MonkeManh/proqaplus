import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/hero"
import Services from "@/components/about/services"
import ResponseLevels from "@/components/about/response-levels"
import PDISection from "@/components/about/pdi-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="mb-auto">
        <Navbar />
      </div>

      <AboutHero />

      <Services />

      <ResponseLevels />

      <PDISection />

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}
