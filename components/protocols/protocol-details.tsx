"use client";

import { Ambulance, CarTaxiFront, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { QuestionsAccordion } from "./questions-accordion";
import { motion } from "framer-motion";

interface ProtocolDetailsProps {
  complaint: any;
  type: "EMS" | "Fire" | "Police";
}

export default function ProtocolDetails({
  complaint,
  type,
}: ProtocolDetailsProps) {

  // Update the getPriorityColor function to use grey for "o" priority
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "o":
      case "O":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      case "A":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "B":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "C":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "D":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "E":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Ω":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getServicePriorityText = (priority: number | boolean | undefined) => {
    if (priority === undefined) return "Depends on Situation";
    if (typeof priority === "boolean")
      return priority ? "Always Responds" : "Never Responds";

    switch (priority) {
      case 0:
        return "Echo Level";
      case 1:
        return "Delta Level";
      case 2:
        return "Charlie Priority";
      case 3:
        return "Bravo Priority";
      case 4:
        return "Alpha Priority";
      case 5:
        return "Omega Priority";
      default:
        return `Level ${priority}`;
    }
  };

  const getResponseLevelText = (code: string, service: string) => {
    // Extract the priority level from the code (e.g., "01D01" -> "D")
    const priorityLevel = code.charAt(2);

    switch (priorityLevel) {
      case "A":
        return "Alpha Response";
      case "B":
        return "Bravo Response";
      case "C":
        return "Charlie Response";
      case "D":
        return "Delta Response";
      case "E":
        return "Echo Response";
      case "O":
        return "Omega Response";
      default:
        return "Standard Response";
    }
  };

  // Extract unique suffixes from determinants if they exist
  const getUniqueSuffixes = () => {
    if (!complaint.availableDeterminants) return [];

    const allSubCodes = complaint.availableDeterminants.flatMap(
      (priority: any) =>
        priority.determinants.flatMap(
          (determinant: any) => determinant.subCodes || []
        )
    );

    // Remove duplicates
    return allSubCodes.filter(
      (subCode: any, index: number, self: any[]) =>
        index ===
        self.findIndex(
          (s) => s.code === subCode.code && s.text === subCode.text
        )
    );
  };

  const uniqueSuffixes = getUniqueSuffixes();

  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Overview Section */}
      <motion.div variants={item}>
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <div className="prose dark:prose-invert max-w-none">
          {complaint.description}
        </div>
      </motion.div>

      {/* Services Table */}
      <motion.div variants={item}>
        <h3 className="text-lg font-semibold mb-2">Service Priorities</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {complaint.services.map((service: any) => (
              <TableRow key={service.name}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {service.name === "EMS" && (
                      <Ambulance className="h-4 w-4 text-rose-600" />
                    )}
                    {service.name === "Fire" && (
                      <Flame className="h-4 w-4 text-red-500" />
                    )}
                    {service.name === "Police" && (
                      <CarTaxiFront className="h-4 w-4 text-blue-700" />
                    )}
                    {service.name}
                  </div>
                </TableCell>
                <TableCell>
                  {getServicePriorityText(service.priority)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      {/* Determinants Table */}
      {complaint.availableDeterminants && (
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold mb-2">Response Determinants</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Priority</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Response Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complaint.availableDeterminants.map((priority: any) =>
                priority.determinants.map((determinant: any) => (
                  <TableRow key={determinant.code}>
                    <TableCell>
                      <Badge
                        className={`${getPriorityColor(priority.priority)}`}
                      >
                        {priority.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>{determinant.code}</TableCell>
                    <TableCell>{determinant.text}</TableCell>
                    <TableCell>
                      {getResponseLevelText(determinant.code, type)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </motion.div>
      )}

      {/* Suffixes Table */}
      {uniqueSuffixes.length > 0 && (
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold mb-2">Suffixes</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Suffix</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {uniqueSuffixes.map((subCode: any) => (
                <TableRow key={subCode.code + subCode.text}>
                  <TableCell>
                    <Badge variant="outline">{subCode.code}</Badge>
                  </TableCell>
                  <TableCell>{subCode.text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      )}

      {/* Questions Accordion */}
      {complaint.questions && (
        <motion.div variants={item}>
          <QuestionsAccordion questions={complaint.questions} />
        </motion.div>
      )}
    </motion.div>
  );
}
