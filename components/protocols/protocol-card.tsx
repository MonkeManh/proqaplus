"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProtocolDetails from "./protocol-details"
import { motion, AnimatePresence } from "framer-motion"

interface ProtocolCardProps {
  complaint: any
  type: "EMS" | "Fire" | "Police"
  isExpanded: boolean
  setExpandedProtocol: (protocol: string | null) => void
}

export default function ProtocolCard({ complaint, type, isExpanded, setExpandedProtocol }: ProtocolCardProps) {
  const getTypeColor = () => {
    switch (type) {
      case "EMS":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "Fire":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      case "Police":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      default:
        return ""
    }
  }

  return (
    <Card className="mb-4 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <Badge variant="outline" className={`mr-2 ${getTypeColor()}`}>
                {complaint.protocol}
              </Badge>
              {complaint.name}
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpandedProtocol(isExpanded ? null : `${type}-${complaint.protocol}`)}
            aria-expanded={isExpanded}
            aria-controls={`protocol-details-${type}-${complaint.protocol}`}
          >
            <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronRight className="h-5 w-5" />
            </motion.div>
            <span className="sr-only">{isExpanded ? "Collapse" : "Expand"} protocol details</span>
          </Button>
        </div>
      </CardHeader>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <CardContent id={`protocol-details-${type}-${complaint.protocol}`}>
              <ProtocolDetails complaint={complaint} type={type} />
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
