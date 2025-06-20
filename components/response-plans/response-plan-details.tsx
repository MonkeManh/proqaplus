"use client"

import { IResponsePlan } from "@/models/interfaces/plans/fire-ems/IResponsePlan"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"
import {
  Ambulance,
  Truck,
  ShieldAlert,
  AlertTriangle,
  LifeBuoy,
  BirdIcon as Helicopter,
  Car,
  Dog,
  Users,
  Siren,
  Wrench,
  PawPrint,
  Anchor,
  Star,
  Search,
} from "lucide-react"

interface ResponsePlanDetailsProps {
  plan: IResponsePlan
  serviceType: "EMS" | "Fire" | "Police"
}

export default function ResponsePlanDetails({ plan, serviceType }: ResponsePlanDetailsProps) {
  const getUnitIcon = (unitType: string) => {
    if (unitType.includes("Transport")) {
      return <Ambulance className="h-4 w-4 text-green-600" />
    } else if (unitType.includes("Engine") || unitType.includes("Truck")) {
      return <Truck className="h-4 w-4 text-red-600" />
    } else if (unitType.includes("Police") || unitType.includes("Patrol")) {
      return <ShieldAlert className="h-4 w-4 text-blue-600" />
    } else if (unitType.includes("Supervisor")) {
      return <ShieldAlert className="h-4 w-4 text-yellow-600" />
    } else if (unitType.includes("Watch Commander")) {
      return <Star className="h-4 w-4 text-yellow-600" />
    } else if(unitType.includes("Wildlife")) {
      return <PawPrint className="h-4 w-4 text-green-600" />
    } else if (unitType.includes("Hazmat")) {
      return <AlertTriangle className="h-4 w-4 text-green-600" />
    } else if (unitType.includes("Rescue") || unitType.includes("Dive")) {
      return <LifeBuoy className="h-4 w-4 text-purple-600" />
    } else if (unitType.includes("Helicopter") || unitType.includes("Air")) {
      return <Helicopter className="h-4 w-4 text-cyan-600" />
    } else if (unitType.includes("Traffic") || unitType.includes("Command") || unitType.includes("Safety") || unitType.includes("Battalion") || unitType.includes("Chief") || unitType.includes("EMS Officer")) {
      return <Car className="h-4 w-4 text-indigo-600" />
    } else if (unitType.includes("K9")) {
      return <Dog className="h-4 w-4 text-amber-600" />
    } else if (unitType.includes("Tactical")) {
      return <Users className="h-4 w-4 text-slate-600" />
    } else if (unitType.includes("Dozer") || unitType.includes("Tender") || unitType.includes("Water")) {
      return <Wrench className="h-4 w-4 text-zinc-600" />
    } else if(unitType.includes("Port") || unitType.includes("Marine Unit")) {
      return <Anchor className="h-4 w-4 text-teal-600" />
    } else if(unitType.includes("Crash")) {
      return <Siren className="h-4 w-4 text-red-600" />
    } else if(unitType.includes("Investigator")) {
      return <Search className="h-4 w-4 text-red-600" />
    }
    return null
  }

  // Parse incident type parts
  const incidentParts = plan.incidentType.split("|")
  const subTypes = incidentParts.slice(1)

  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
      {plan.text && (
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold mb-2">Response Verbal</h3>
          <p className="text-muted-foreground">{plan.text}</p>
        </motion.div>
      )}

      <motion.div variants={item}>
        <h3 className="text-lg font-semibold mb-2">Incident Details</h3>
        <div className="bg-muted/50 p-4 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Incident Type</p>
              <p className="text-sm text-muted-foreground">{plan.incidentType}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Response Code</p>
              <p className="text-sm text-muted-foreground">{plan.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Sub-Types</p>
              <p className="text-sm text-muted-foreground">{subTypes.join(", ") || "None"}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Service Type</p>
              <p className="text-sm text-muted-foreground">{serviceType}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <h3 className="text-lg font-semibold mb-2">Required Units</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Unit Type</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plan.units.map((unit, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getUnitIcon(unit.type)}
                    {unit.type}
                  </div>
                </TableCell>
                <TableCell>{unit.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      <motion.div variants={item}>
        <div className="bg-muted/50 p-4 rounded-md">
          <h3 className="text-sm font-semibold mb-2">Response Summary</h3>
          <p className="text-sm text-muted-foreground">
            Total Units: {plan.units.reduce((acc, unit) => acc + unit.quantity, 0)}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
