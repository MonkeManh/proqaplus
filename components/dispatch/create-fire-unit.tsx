"use client";

import { fireUnits } from "@/data/units/fire-list";
import { IFireUnitData } from "@/models/interfaces/fire/IFireUnitData";
import { IFireUnitType } from "@/models/interfaces/fire/IFireUnitType";
import { IStation } from "@/models/interfaces/fire/IStation";
import { useEffect, useState } from "react";
import * as z from "zod";
import { fireUnitTypes } from "@/data/units/fireUnits";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

const unitTypes = [
  ...new Set(fireUnitTypes.map((unit: IFireUnitType) => unit.name)),
];

const formSchema = z.object({
  unitType: z.string().min(1, "Unit type is required"),
  selectedUnits: z.array(z.string()),
  crossStaffing: z.array(z.string()),
  status: z.enum(["In Service", "Out of Service", "On Call"]),
});

interface CreateFireUnitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (units: IFireUnitData[]) => void;
  existingUnits: IFireUnitData[];
}

export default function CreateFireUnitDialog({
  open,
  onOpenChange,
  onSave,
  existingUnits,
}: CreateFireUnitDialogProps) {
  const [availableUnits, setAvailableUnits] = useState<
    Array<{ name: string; station: string }>
  >([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unitType: "",
      selectedUnits: [],
      crossStaffing: [],
      status: "In Service",
    },
  });

  useEffect(() => {
    const storedUnits = localStorage.getItem("FIRE_UNITS");
    if (storedUnits) {
      setAvailableUnits(JSON.parse(storedUnits));
    }
  }, []);

  const watchUnitType = form.watch("unitType");
  useEffect(() => {
    if (watchUnitType) {
      let units: { name: string; station: string }[] = [];

      if (watchUnitType.includes("AMR")) {
        const amrStation = fireUnits.find(
          (station: IStation) => station.station === "American Medical Response"
        );
        if (amrStation) {
          units = amrStation.units
            .filter((unit) => unit.type === watchUnitType)
            .map((unit) => ({
              name: unit.label,
              station: "American Medical Response",
            }));
        }
      } else if (
        ["Chief", "Deputy", "Battalion", "Command"].includes(watchUnitType)
      ) {
        const supervisorStation = fireUnits.find(
          (station: IStation) => station.station === "Supervisors"
        );
        if (supervisorStation) {
          units = supervisorStation.units
            .filter((unit) => unit.type === watchUnitType)
            .map((unit) => ({
              name: unit.label,
              station: "Supervisors",
            }));
        }
      } else {
        units = fireUnits.flatMap((station: IStation) =>
          station.units
            .filter(
              (unit) =>
                unit.type === watchUnitType &&
                !existingUnits.some((existing) => existing.name === unit.label)
            )
            .map((unit) => ({
              name: unit.label,
              station: station.station,
            }))
        );
      }

      setAvailableUnits(units);
    }
  }, [watchUnitType, existingUnits]);

  const getInServiceUnitsForStation = (station: string) => {
    return existingUnits.filter(
      (unit: IFireUnitData) =>
        unit.station === station && unit.status === "In Service"
    );
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newUnits: IFireUnitData[] = values.selectedUnits.map(
      (unitName: string) => {
        const unitDetails = availableUnits.find(
          (unit: { name: string; station: string }) => unit.name === unitName
        );
        const unitStation = unitDetails?.station || "";

        const stationCrossStaffing = values.crossStaffing
          .filter((crossUnit: string) => {
            const crossUnitDetails = existingUnits.find(
              (unit: IFireUnitData) => unit.name === crossUnit
            );
            return crossUnitDetails?.station === unitStation;
          })
          .map((crossUnit) => {
            const unit = existingUnits.find((u) => u.name === crossUnit);
            return unit as IFireUnitData;
          });

        return {
          name: unitName,
          type: values.unitType,
          station: unitStation,
          stationID: fireUnits.find(
            (station: IStation) => station.station === unitStation
          )?.stationID,
          status: values.status,
          crossStaffing: stationCrossStaffing,
        };
      }
    );

    onSave(newUnits);
    onOpenChange(false);
    setAvailableUnits([]);
    form.reset({
      unitType: "",
      selectedUnits: [],
      crossStaffing: [],
      status: "In Service",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Fire Unit</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="unitType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apparatus Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {unitTypes.map((type: string) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {watchUnitType && (
              <FormField
                control={form.control}
                name="selectedUnits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Units</FormLabel>
                    <div className="grid grid-cols-2 gap-2 mt-2 border rounded-md p-3 max-h-80 overflow-y-auto">
                      {availableUnits.map(
                        (unit: { name: string; station: string }) => (
                          <FormItem
                            key={unit.name}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value.includes(unit.name)}
                                onCheckedChange={(checked) => {
                                  const newValue = checked
                                    ? [...field.value, unit.name]
                                    : field.value.filter(
                                        (value: string) => value !== unit.name
                                      );
                                  field.onChange(newValue);
                                }}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="font-normal">
                                {unit.name}
                              </FormLabel>
                              <p className="text-xs text-muted-foreground">
                                {unit.station}
                              </p>
                            </div>
                          </FormItem>
                        )
                      )}
                    </div>
                  </FormItem>
                )}
              />
            )}

            {/* Check for selected units and cross-staffing eligibility */}
            {form.watch("selectedUnits").length > 0 && 
             !availableUnits.some(unit => ['American Medical Response', 'Supervisor', 'Air'].includes(unit.station)) && (
              <FormField
                control={form.control}
                name="crossStaffing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cross Staffing</FormLabel>
                    <div className="space-y-4">
                      {form.watch("selectedUnits").map(selectedUnit => {
                        const unitStation = availableUnits.find(u => u.name === selectedUnit)?.station
                        const inServiceUnits = unitStation ? getInServiceUnitsForStation(unitStation) : []
                        
                        return inServiceUnits.length > 0 ? (
                          <div key={selectedUnit} className="border rounded-md p-3">
                            <p className="text-sm font-medium mb-2">{selectedUnit}</p>
                            <div className="grid grid-cols-2 gap-2">
                              {inServiceUnits.map(crossUnit => (
                                <FormItem key={crossUnit.name} className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value.includes(crossUnit.name)}
                                      onCheckedChange={(checked) => {
                                        const newValue = checked
                                          ? [...field.value, crossUnit.name]
                                          : field.value.filter((value) => value !== crossUnit.name)
                                        field.onChange(newValue)
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">{crossUnit.name}</FormLabel>
                                </FormItem>
                              ))}
                            </div>
                          </div>
                        ) : null
                      })}
                    </div>
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="In Service">In Service</SelectItem>
                      <SelectItem value="Out of Service">
                        Out of Service
                      </SelectItem>
                      <SelectItem value="On Call">On Call</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
