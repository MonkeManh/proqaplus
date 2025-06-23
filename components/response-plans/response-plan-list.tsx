import ResponsePlanCard from "./response-plan-card"
import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan"

interface ResponsePlanListProps {
  title: string
  plans: IResponsePlan[]
  expandedPlan: number | null
  setExpandedPlan: (planId: number | null) => void
  serviceType: "EMS" | "Fire" | "Police"
}

export default function ResponsePlanList({
  title,
  plans,
  expandedPlan,
  setExpandedPlan,
  serviceType,
}: ResponsePlanListProps) {
  // Group plans by main incident type (first part before |)
  const groupedPlans = plans.reduce(
    (acc, plan) => {
      const mainType = plan.incidentType.split("|")[0]
      if (!acc[mainType]) {
        acc[mainType] = []
      }
      acc[mainType].push(plan)
      return acc
    },
    {} as Record<string, IResponsePlan[]>,
  )

  // Sort incident types alphabetically
  const sortedIncidentTypes = Object.keys(groupedPlans).sort()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">
          {plans.length} plan{plans.length !== 1 ? "s" : ""}
        </p>
      </div>

      {plans.length > 0 ? (
        sortedIncidentTypes.map((incidentType) => (
          <div key={incidentType} className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">{incidentType}</h3>
            {groupedPlans[incidentType].map((plan) => (
              <ResponsePlanCard
                key={plan.id}
                plan={plan}
                isExpanded={expandedPlan === plan.id}
                setExpandedPlan={setExpandedPlan}
                serviceType={serviceType}
              />
            ))}
          </div>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No response plans found matching your search.</p>
        </div>
      )}
    </div>
  )
}
