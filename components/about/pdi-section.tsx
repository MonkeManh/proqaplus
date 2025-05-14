import { Info, CheckCircle, AlertTriangle } from "lucide-react"

export default function PDISection() {
  return (
    <section className="py-16 flex justify-center bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Post-Dispatch Instructions (PDIs)</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Critical guidance provided to callers while emergency responders are en route
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex items-start gap-4 mb-6">
              <Info className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">What are PDIs?</h3>
                <p className="text-muted-foreground">
                  Post-Dispatch Instructions are standardized, protocol-driven instructions provided to 911 callers
                  after emergency services have been dispatched. They guide callers through critical first steps while
                  waiting for responders to arrive, potentially saving lives and improving outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Benefits of PDIs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Provide immediate life-saving instructions before responders arrive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Reduce panic and help callers remain focused during emergencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Standardize care instructions across all emergency calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Improve survival rates for critical emergencies like cardiac arrest</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Common PDI Examples</h3>

            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-md">
                <h4 className="font-medium text-red-600 mb-2">Medical Emergencies</h4>
                <p className="text-sm text-muted-foreground">
                  "Place the patient on their back on a hard surface. Place the heel of your hand on the center of their
                  chest and push hard and fast at a rate of 100-120 compressions per minute."
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-md">
                <h4 className="font-medium text-blue-600 mb-2">Police Incidents</h4>
                <p className="text-sm text-muted-foreground">
                  "Stay on the line with me. Lock your doors and windows if safe to do so. Move to an interior room away
                  from doors and windows. Do not confront the intruder."
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-md">
                <h4 className="font-medium text-amber-600 mb-2">Fire Emergencies</h4>
                <p className="text-sm text-muted-foreground">
                  "Evacuate the building immediately. Do not stop to gather possessions. Stay low to avoid smoke. Close
                  doors behind you if possible. Meet responders at the designated meeting point."
                </p>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <p className="text-sm font-medium">
                  PDIs are tailored to the specific emergency and updated based on the latest medical and safety
                  research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
