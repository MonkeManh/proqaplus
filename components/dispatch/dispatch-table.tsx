"use client";

import { fireUnits } from "@/data/units/fire-list";
import { IStation } from "@/models/interfaces/fire/IStation";
import { IFireUnitData } from "@/models/interfaces/fire/IFireUnitData";
import { IFireUnitType } from "@/models/interfaces/fire/IFireUnitType";
import { IUnitStatus } from "@/models/interfaces/fire/IUnitStatus";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Edit, PlusCircle, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
// import CreateFireUnitDialog from "../dialog/create-fire-unit";
import { fireUnitTypes } from "@/data/units/fireUnits";
import { Badge } from "../ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Checkbox } from "../ui/checkbox";
import CreateFireUnitDialog from "./create-fire-unit";

export default function DispatchTable() {
  const [units, setUnits] = useState<IFireUnitData[]>([]);
  const [filteredUnits, setFilteredUnits] = useState<IFireUnitData[]>([]);
  const [assignmentFilter, setAssignmentFilter] = useState<string>("all");
  const [unitTypeFilter, setUnitTypeFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const loadUnits = () => {
    const storedUnits = localStorage.getItem("FIRE_UNITS");
    if (!storedUnits) return setUnits([]);

    const parsedUnits = JSON.parse(storedUnits) as IFireUnitData[];
    if (!Array.isArray(parsedUnits)) return setUnits([]);

    // Verify that each unit has a valid crossStaffing array
    const validatedUnits = parsedUnits.map((unit: IFireUnitData) => {
      const crossStaffing = Array.isArray(unit.crossStaffing)
        ? unit.crossStaffing
        : [];

      const validCrossStaffing = crossStaffing.filter((crossUnit) =>
        parsedUnits.some((u: IFireUnitData) => u.name === crossUnit.name)
      );

      return {
        ...unit,
        crossStaffing: validCrossStaffing,
      };
    });

    setUnits(validatedUnits);
  };

  useEffect(() => {
    loadUnits();

    const handleStorageChange = () => {
      loadUnits();
    };

    window.addEventListener("fire-units-updated", handleStorageChange);

    return () => {
      window.removeEventListener("fire-units-updated", handleStorageChange);
    };
  }, []);

  // Filter units based on assignment, type, and search query
  useEffect(() => {
    let result = [...units];

    if (assignmentFilter !== "all") {
      result = result.filter(
        (unit: IFireUnitData) => unit.station === assignmentFilter
      );
    }

    if (unitTypeFilter !== "all") {
      result = result.filter(
        (unit: IFireUnitData) => unit.type === unitTypeFilter
      );
    }

    if (searchQuery) {
      result = result.filter(
        (unit: IFireUnitData) =>
          unit.name.toLowerCase().includes(searchQuery) ||
          unit.station.toLowerCase().includes(searchQuery)
      );
    }

    setFilteredUnits(result);
  }, [units, assignmentFilter, unitTypeFilter, searchQuery]);

  // Handle saving a new or edited unit
  const handleSaveUnit = (newUnits: IFireUnitData[]) => {
    // Filter out new units that already exist
    const otherUnits = units.filter(
      (unit: IFireUnitData) =>
        !newUnits.some((newUnit: IFireUnitData) => newUnit.name === unit.name)
    );

    // Update crossStaffing for existing units
    const updatedOtherUnits = otherUnits.map((existingUnit: IFireUnitData) => {
      const crossStaffingNewUnits = newUnits.filter(
        (newUnit: IFireUnitData) =>
          newUnit.crossStaffing?.some((cs) => cs.name === existingUnit.name) &&
          newUnit.station === existingUnit.station
      );

      // If there are new units with crossStaffing for the same station
      if (crossStaffingNewUnits.length > 0) {
        // Create a new array of crossStaffing units for the existing unit
        const sameStationCrossStaff = crossStaffingNewUnits.map(
          (newUnit: IFireUnitData) => ({
            name: newUnit.name,
            type: newUnit.type,
            station: newUnit.station,
            status: newUnit.status,
          })
        );

        // Merge with existing crossStaffing, ensuring no duplicates
        return {
          ...existingUnit,
          crossStaffing: [
            ...new Set([
              ...(existingUnit.crossStaffing || []).filter(
                (cs: IFireUnitData) => {
                  const unit = [...otherUnits, ...newUnits].find(
                    (unit: IFireUnitData) => unit.name === cs.name
                  );
                  return unit?.station === existingUnit.station;
                }
              ),
              ...sameStationCrossStaff,
            ]),
          ],
        };
      }
      return existingUnit;
    });

    const allUnits = [...updatedOtherUnits, ...newUnits];
    setUnits(allUnits);
    localStorage.setItem("FIRE_UNITS", JSON.stringify(allUnits));
    window.dispatchEvent(new Event("fire-units-updated"));
  };

  // Handle deleting a unit
  const handleDeleteUnit = (unitName: string) => {
    // Find the unit to delete
    const unitToDelete = units.find(
      (unit: IFireUnitData) => unit.name === unitName
    );
    if (!unitToDelete) return;

    // Remove the unit from crossStaffing of other units
    let updatedUnits = units.map((unit: IFireUnitData) => {
      if (
        unit.crossStaffing?.some(
          (crossUnit) => crossUnit.name === unitToDelete.name
        )
      ) {
        return {
          ...unit,
          crossStaffing: unit.crossStaffing.filter(
            (crossUnit) => crossUnit.name !== unitToDelete.name
          ),
        };
      }
      return unit;
    });

    // Remove the unit
    updatedUnits = updatedUnits.filter(
      (unit: IFireUnitData) => unit.name !== unitToDelete.name
    );

    setUnits(updatedUnits);
    localStorage.setItem("FIRE_UNITS", JSON.stringify(updatedUnits));
    window.dispatchEvent(new Event("fire-units-updated"));
  };

  // Handle changing the status of a unit
  const handleStatusChange = (unitName: string, newStatus: IUnitStatus) => {
    // Find the unit to update
    const unitToUpdate = units.find(
      (unit: IFireUnitData) => unit.name === unitName
    );
    if (!unitToUpdate) return;

    // Update the status of the unit and its crossStaffed units
    const crossStaffedUnitNames = (unitToUpdate.crossStaffing || []).map(
      (u) => u.name
    );

    // Update the status of the unit and its crossStaffed units
    const updatedUnits = units.map((unit: IFireUnitData) => {
      if (unit.name === unitName || crossStaffedUnitNames.includes(unit.name)) {
        return { ...unit, status: newStatus };
      }

      return unit;
    });

    setUnits(updatedUnits);
    localStorage.setItem("FIRE_UNITS", JSON.stringify(updatedUnits));
    window.dispatchEvent(new Event("fire-units-updated"));
  };

  // Handle cross-staffing changes
  const handleCrossStaffingChange = (
    editedUnit: IFireUnitData,
    targetUnitName: string,
    isChecked: boolean
  ) => {
    // Find the edited unit and target unit
    const updatedUnits = units.map((unit: IFireUnitData) => {
      // If the unit is the edited unit, update its crossStaffing
      if (unit.name === editedUnit.name) {
        const targetUnit = units.find((u) => u.name === targetUnitName);
        if (!targetUnit) return unit;

        // If the target unit is already cross-staffed, remove it
        return {
          ...unit,
          crossStaffing: isChecked
            ? [
                ...(unit.crossStaffing || []),
                {
                  name: targetUnit.name,
                  type: targetUnit.type,
                  station: targetUnit.station,
                  status: targetUnit.status,
                },
              ]
            : (unit.crossStaffing || []).filter(
                (crossUnit: IFireUnitData) => crossUnit.name !== targetUnitName
              ),
        };
      }
      // If the unit is the target unit, update its crossStaffing
      if (unit.name === targetUnitName) {
        return {
          ...unit,
          crossStaffing: isChecked
            ? [
                ...(unit.crossStaffing || []),
                {
                  name: editedUnit.name,
                  type: editedUnit.type,
                  station: editedUnit.station,
                  status: editedUnit.status,
                },
              ]
            : (unit.crossStaffing || []).filter(
                (crossUnit: IFireUnitData) => crossUnit.name !== editedUnit.name
              ),
        };
      }
      return unit;
    });

    setUnits(updatedUnits);
    localStorage.setItem("FIRE_UNITS", JSON.stringify(updatedUnits));
    window.dispatchEvent(new Event("fire-units-updated"));
  };

  const getStatusColor = (status: IUnitStatus) => {
    switch (status) {
      case "In Service":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Out of Service":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "On Call":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Mobile Service":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const sortedFilteredUnits = () => {
    const stationOrder = fireUnits.map((station: IStation) => station.station);

    const groupedUnits = filteredUnits.reduce(
      (acc: Record<string, IFireUnitData[]>, unit: IFireUnitData) => {
        if (!acc[unit.station]) {
          acc[unit.station] = [];
        }
        acc[unit.station].push(unit);
        return acc;
      },
      {}
    );

    return stationOrder
      .filter((station: string) => groupedUnits[station]?.length > 0)
      .map((station: string) => ({
        station,
        units: groupedUnits[station],
      }));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <Select
            value={assignmentFilter}
            onValueChange={(value: string) => setAssignmentFilter(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Assignment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {fireUnits.map((station: IStation) => (
                <SelectItem key={station.station} value={station.station}>
                  {station.station}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={unitTypeFilter}
            onValueChange={(value: string) => setUnitTypeFilter(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Unit Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {fireUnitTypes.map((unitType: IFireUnitType, index: number) => (
                <SelectItem key={index} value={unitType.name}>
                  {unitType.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            placeholder="Search units..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-xs"
          />
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              setIsDialogOpen(true);
            }}
            className="whitespace-nowrap cursor-pointer"
          >
            <PlusCircle className="h-4 w-4" />
            Add Unit
          </Button>
        </div>
      </div>

      <div className="rounded-mb border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Unit</TableHead>
              <TableHead>Apparatus Type</TableHead>
              <TableHead>Assignment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Cross Staffing</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUnits.length > 0 ? (
              sortedFilteredUnits().map(({ station, units }) => (
                <React.Fragment key={station}>
                  <TableRow className="bg-muted/50">
                    <TableCell colSpan={7} className="font-medium">
                      {station}
                    </TableCell>
                  </TableRow>
                  {units.map((unit: IFireUnitData) => (
                    <TableRow key={unit.name}>
                      <TableCell>{unit.name}</TableCell>
                      <TableCell>{unit.type}</TableCell>
                      <TableCell>{unit.station}</TableCell>
                      <TableCell>
                        <Select
                          value={unit.status}
                          onValueChange={(value: IUnitStatus) =>
                            handleStatusChange(unit.name, value)
                          }
                        >
                          <SelectTrigger
                            className={`w-[140px] ${getStatusColor(
                              unit.status
                            )}`}
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="In Service">
                              In Service
                            </SelectItem>
                            <SelectItem value="Out of Service">
                              Out of Service
                            </SelectItem>
                            <SelectItem value="On Call">On Call</SelectItem>
                            <SelectItem value="Mobile Service">
                              Mobile Service
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        {(unit.crossStaffing ?? []).length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {unit.crossStaffing?.map((crossUnit) => (
                              <Badge key={crossUnit.name} variant="outline">
                                {crossUnit.name}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            None
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">
                                  Edit Cross-Staffing
                                </span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="space-y-4">
                                <h4 className="font-medium">
                                  Cross-staffing for {unit.name}
                                </h4>
                                <div className="space-y-2">
                                  {units
                                    .filter(
                                      (u) =>
                                        u.station === unit.station &&
                                        u.name !== unit.name
                                    )
                                    .map((stationUnit) => (
                                      <div
                                        key={stationUnit.name}
                                        className="flex items-center space-x-2"
                                      >
                                        <Checkbox
                                          id={`${unit.name}-${stationUnit.name}`}
                                          checked={(
                                            unit.crossStaffing ?? []
                                          ).some(
                                            (crossUnit: IFireUnitData) =>
                                              crossUnit.name ===
                                              stationUnit.name
                                          )}
                                          onCheckedChange={(checked) =>
                                            handleCrossStaffingChange(
                                              unit,
                                              stationUnit.name,
                                              checked as boolean
                                            )
                                          }
                                        />
                                        <label
                                          htmlFor={`${unit.name}-${stationUnit.name}`}
                                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                          {stationUnit.name}
                                        </label>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteUnit(unit.name)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No units found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <CreateFireUnitDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
        }}
        onSave={handleSaveUnit}
        existingUnits={units}
      />
    </div>
  );
}
