import { Headset, ClipboardList, Phone, CheckCircle, ArrowDown } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-40 flex justify-center bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">How ProQA Plus Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures fast, accurate emergency response coordination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-3/10 left-0 right-0 h-0.5 bg-muted z-0" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <div className="bg-card rounded-lg p-6 border shadow-sm w-full">
              <div className="text-center mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-2">
                  Step 1
                </span>
                <h3 className="text-xl font-semibold">Call Intake</h3>
              </div>
              <p className="text-muted-foreground text-center">
                Dispatcher receives emergency call and enters initial information into ProQA Plus
              </p>
            </div>
          </div>

          <div className="flex justify-center md:hidden">
            <ArrowDown className="text-muted-foreground" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <ClipboardList className="h-8 w-8 text-primary" />
            </div>
            <div className="bg-card rounded-lg p-6 border shadow-sm w-full">
              <div className="text-center mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-2">
                  Step 2
                </span>
                <h3 className="text-xl font-semibold">Protocol Selection</h3>
              </div>
              <p className="text-muted-foreground text-center">
                System guides dispatcher through appropriate protocols based on emergency type
              </p>
            </div>
          </div>

          <div className="flex justify-center md:hidden">
            <ArrowDown className="text-muted-foreground" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <Headset className="h-8 w-8 text-primary" />
            </div>
            <div className="bg-card rounded-lg p-6 border shadow-sm w-full">
              <div className="text-center mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-2">
                  Step 3
                </span>
                <h3 className="text-xl font-semibold">Guided Response</h3>
              </div>
              <p className="text-muted-foreground text-center">
                Dispatcher follows step-by-step instructions while coordinating emergency services
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-card rounded-lg p-4 border shadow-sm">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium">
              ProQA Plus reduces response times by up to 30% and improves outcome accuracy
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
