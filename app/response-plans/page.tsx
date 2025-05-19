"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ResponsePlanList from "@/components/response-plans/response-plan-list"
import { emsPlans } from "@/data/plans/emsPlans"
import { firePlans } from "@/data/plans/firePlans"
import { policePlans } from "@/data/plans/policePlans"

export default function ResponsePlansPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null)

  // Filter response plans based on search query
  const filterPlans = (plans: any[]) => {
    return plans.filter(
      (plan) =>
        plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.incidentType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.text?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.units.some((unit: any) => unit.type.toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }

  const filteredEMSPlans = filterPlans(emsPlans)
  const filteredFirePlans = filterPlans(firePlans)
  const filteredPolicePlans = filterPlans(policePlans)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Emergency Response Plans</h1>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search response plans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs defaultValue="ems" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="ems" className="flex-1">
              EMS Plans
            </TabsTrigger>
            <TabsTrigger value="fire" className="flex-1">
              Fire Plans
            </TabsTrigger>
            <TabsTrigger value="police" className="flex-1">
              Police Plans
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ems">
            <ResponsePlanList
              title="Emergency Medical Service Plans"
              plans={filteredEMSPlans}
              expandedPlan={expandedPlan}
              setExpandedPlan={setExpandedPlan}
              serviceType="EMS"
            />
          </TabsContent>

          <TabsContent value="fire">
            <ResponsePlanList
              title="Fire Service Plans"
              plans={filteredFirePlans}
              expandedPlan={expandedPlan}
              setExpandedPlan={setExpandedPlan}
              serviceType="Fire"
            />
          </TabsContent>

          <TabsContent value="police">
            <ResponsePlanList
              title="Law Enforcement Plans"
              plans={filteredPolicePlans}
              expandedPlan={expandedPlan}
              setExpandedPlan={setExpandedPlan}
              serviceType="Police"
            />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </main>
  )
}
