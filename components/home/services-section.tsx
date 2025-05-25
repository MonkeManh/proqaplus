import { Shield, Flame, Heart, Database, MessageSquare, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServiceSections() {
  return (
    <section className="flex justify-center bg-gradient-to-b from-background to-muted/30 py-40">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">Specialized Service Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ProQA Plus provides tailored solutions for each emergency service, ensuring optimal response coordination
            and information management across all disciplines.
          </p>
        </div>

        <div className="space-y-24">
          {/* Police Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Law Enforcement</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Advanced tools for comprehensive incident documentation, suspect tracking, and tactical response
                coordination.
              </p>
              <div className="grid gap-4">
                <Card className="border-blue-200 dark:border-blue-800 gap-0">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-blue-600" />
                      Comprehensive Suspect Description System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Detailed suspect description input with standardized fields for physical characteristics,
                      clothing, behavior patterns, and vehicle information. Includes photo lineup integration and
                      automatic BOLO (Be On the Lookout) generation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 dark:border-blue-800 gap-0">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-blue-600" />
                      Tactical Response Coordination
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Real-time coordination for high-risk incidents including SWAT deployment, perimeter establishment,
                      and multi-agency response protocols. Integrated with officer safety databases and threat
                      assessment tools.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-200">Key Features</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Automated warrant checks and criminal history integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Real-time officer location tracking and backup coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Integrated body camera and evidence management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Multi-language support for diverse communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fire Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-8 rounded-2xl order-2 lg:order-1">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-red-800 dark:text-red-200">CIDS Integration</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Automatic building layout and hazard information retrieval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pre-incident guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Hydrant locations and water supply mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Chemical inventory and HAZMAT response protocols</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20">
                  <Flame className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-3xl font-bold text-red-600 dark:text-red-400">Fire & Rescue</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Comprehensive fire response management with integrated building intelligence and resource coordination
                for optimal firefighting effectiveness.
              </p>
              <div className="grid gap-4">
                <Card className="border-red-200 dark:border-red-800 gap-0">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-red-600" />
                      CIDS (Critical Information Dispatch System)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Automatic integration with building databases for dwelling fires. Provides instant access to floor
                      plans, occupancy information, hazardous materials, and tactical considerations before units arrive
                      on scene.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-red-200 dark:border-red-800 gap-0">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      Resource Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Dynamic resource allocation based on incident type, building characteristics, and available
                      apparatus. Includes mutual aid coordination and specialized team deployment protocols.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* EMS Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                  <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">Emergency Medical Services</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Life-saving medical protocols with comprehensive caller guidance and pre-hospital care coordination for
                optimal patient outcomes.
              </p>
              <div className="grid gap-4">
                <Card className="border-green-200 dark:border-green-800 gap-0">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                      Post-Dispatch Instructions (PDIs)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Standardized, protocol-driven instructions provided to callers after units are dispatched.
                      Includes CPR guidance, bleeding control, airway management, and other life-saving interventions
                      while responders are en route.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200 dark:border-green-800 gap-0">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-green-600" />
                      Pre-Arrival Instructions (PAIs)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Critical care instructions delivered before emergency responders arrive. Covers scene safety,
                      patient positioning, medication administration guidance, and preparation for incoming EMS teams to
                      ensure seamless care transition.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-green-800 dark:text-green-200">Medical Excellence</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Evidence-based medical protocols with real-time updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Integrated poison control and medical direction consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Automatic hospital notification and bed availability tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Multi-language medical interpretation services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
