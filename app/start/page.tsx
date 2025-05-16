import Footer from "@/components/footer"
import StartForm from "@/components/dispatch-start/form"

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <StartForm />
      </div>
      <Footer />
    </div>
  )
}
