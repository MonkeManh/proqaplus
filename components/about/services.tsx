import { Shield, Flame, AmbulanceIcon as FirstAid } from "lucide-react"

export default function Services() {
  return (
    <section className="py-16 flex justify-center bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Emergency Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ProQA Plus provides specialized protocols for all major emergency service categories
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
            <div className="bg-blue-600 p-4 flex items-center justify-center">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">Police</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive protocols for law enforcement response, including:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-100 text-blue-600 rounded-full text-xs">
                    •
                  </span>
                  <span>Criminal incidents and public safety threats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-100 text-blue-600 rounded-full text-xs">
                    •
                  </span>
                  <span>Traffic incidents and vehicle accidents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-100 text-blue-600 rounded-full text-xs">
                    •
                  </span>
                  <span>Domestic disturbances and welfare checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-100 text-blue-600 rounded-full text-xs">
                    •
                  </span>
                  <span>Missing persons and AMBER alerts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
            <div className="bg-red-600 p-4 flex items-center justify-center">
              <Flame className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-red-600 mb-3">Fire</h3>
              <p className="text-muted-foreground mb-4">
                Detailed protocols for fire and hazardous materials response, including:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-red-100 text-red-600 rounded-full mr-2 text-xs">
                    •
                  </span>
                  <span>Structure, vehicle, and wildland fires</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-red-100 text-red-600 rounded-full mr-2 text-xs">
                    •
                  </span>
                  <span>Hazardous materials incidents and spills</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-red-100 text-red-600 rounded-full mr-2 text-xs">
                    •
                  </span>
                  <span>Carbon monoxide and gas leaks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-red-100 text-red-600 rounded-full mr-2 text-xs">
                    •
                  </span>
                  <span>Technical rescue and confined space incidents</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
            <div className="bg-green-600 p-4 flex items-center justify-center">
              <FirstAid className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-600 mb-3">EMS</h3>
              <p className="text-muted-foreground mb-4">Life-saving protocols for medical emergencies, including:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-100 text-green-600 rounded-full mr-2 text-xs">
                    •
                  </span>
                  <span>Cardiac and respiratory emergencies</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-100 text-green-600 rounded-full mr-2 text-xs">
                    •
                  </span>
                  <span>Trauma and injury management</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-100 text-green-600 rounded-full mr-2 text-xs">
                    •
                  </span>
                  <span>Stroke and neurological emergencies</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-100 text-green-600 rounded-full mr-2 text-xs">
                    •
                  </span>
                  <span>Childbirth and pediatric emergencies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
