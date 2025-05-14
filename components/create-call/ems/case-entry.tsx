"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox } from "@/components/ui/combobox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getEMSComplaintOptions } from "@/data/protocols/emsProtocols";
import { IEMSData } from "@/models/interfaces/complaints/ems/IEMSData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CaseEntryProps {
  onContinue: (
    complaintName: string,
    data: IEMSData,
    skipQuestions?: boolean
  ) => void;
}

const formSchema = z.object({
  patientProximity: z.enum(
    ["Yes", "No", "First Party", "Fourth Party (Referral)"],
    {
      required_error: "Please select an option",
    }
  ),
  patientCount: z.coerce
    .number()
    .min(1, "Must be at least 1")
    .max(99, "Must be less than 100"),
  patientAge: z.coerce.number().min(0, "Must be a positive number"),
  ageUnit: z.enum(["Years", "Months", "Days"], {
    required_error: "Please select an age unit",
  }),
  gender: z.enum(["Male", "Female", "Unknown"], {
    required_error: "Please select a gender",
  }),
  isConscious: z.enum(["Yes", "No", "Unknown"], {
    required_error: "Please select an option",
  }),
  isBreathing: z.enum(["Yes", "No", "INEFFECTIVE/AGONAL", "Unknown"], {
    required_error: "Please select an option",
  }),
  chiefComplaint: z.string({
    required_error: "Please select a complaint",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CaseEntry({ onContinue }: CaseEntryProps) {
  const [data, setData] = useState<FormValues>({
    patientProximity: "Yes",
    patientCount: 1,
    patientAge: 0,
    ageUnit: "Years",
    gender: "Unknown",
    isConscious: "Unknown",
    isBreathing: "Unknown",
    chiefComplaint: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const callerType = useRef<HTMLButtonElement>(null);
  const patientCountRef = useRef<HTMLInputElement>(null);
  const isConsciousRef = useRef<HTMLButtonElement>(null);
  const isBreathingRef = useRef<HTMLButtonElement>(null);
  const chiefComplaintRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!callerType.current) return;
    callerType.current.focus();
    callerType.current.click();
    setIsMounted(true);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientProximity: "Yes",
      patientCount: 1,
      patientAge: 0,
      ageUnit: "Years",
      gender: undefined,
      isConscious: undefined,
      isBreathing: undefined,
      chiefComplaint: "",
    },
  });

  const gender = form.watch("gender");

  const getGenderPronoun = (gender: string) => {
    switch (gender) {
      case "Male":
        return "he";
      case "Female":
        return "she";
      case "Unknown":
        return "they";
    }
  };

  const breathingStatus = form.watch("isBreathing");

  const sortedComplaintOptions = useMemo(() => {
    const allComplaints = getEMSComplaintOptions();

    if (breathingStatus === "No" || breathingStatus === "INEFFECTIVE/AGONAL") {
      const priorityComplaints = [9, 11, 12, 14, 15];

      const priority = allComplaints.filter((c) =>
        priorityComplaints.includes(c.protocol)
      );
      const others = allComplaints.filter(
        (c) => !priorityComplaints.includes(c.protocol)
      );

      priority.sort((a, b) => {
        const aIndex = priorityComplaints.indexOf(a.protocol);
        const bIndex = priorityComplaints.indexOf(b.protocol);
        return aIndex - bIndex;
      });

      const priorityOptions = priority.map((c) => ({
        value: `${c.protocol} - ${c.value}`,
        label: `${c.protocol} - ${c.label}`,
        className: "bg-red-500/20 hover:bg-red-500/40 transition-colors",
      }));

      const otherOptions = others.map((c) => ({
        value: `${c.protocol} - ${c.value}`,
        label: `${c.protocol} - ${c.value}`,
      }));

      return [...priorityOptions, ...otherOptions];
    }

    return allComplaints.map((c) => ({
      value: `${c.protocol} - ${c.value}`,
      label: `${c.protocol} - ${c.value}`,
    }));
  }, [breathingStatus]);

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      const state = form.getValues();
      const isValid = !!(
        state.patientProximity &&
        state.patientCount &&
        state.patientAge !== undefined &&
        state.ageUnit &&
        state.gender &&
        state.isConscious &&
        state.isBreathing &&
        state.chiefComplaint
      );
      setIsFormValid(isValid);

      if (name === "patientProximity" && value.patientProximity) {
        patientCountRef.current?.focus();
      }

      if (name === "gender" && value.gender) {
        setTimeout(() => {
          isConsciousRef.current?.click();
        }, 100);
      } else if (name === "isConscious" && value.isConscious) {
        setTimeout(() => {
          isBreathingRef.current?.click();
        }, 100);
      } else if (name === "isBreathing" && value.isBreathing) {
        chiefComplaintRef.current?.focus();
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = (data: FormValues) => {
    const patientData = {
      age: data.patientAge,
      ageUnit: data.ageUnit,
      gender: data.gender,
      count: data.patientCount,
      isConscious: data.isConscious,
      isBreathing: data.isBreathing,
    };

    setData(data);

    localStorage.setItem("PATIENT_DATA", JSON.stringify(patientData));

    const complaintParts = data.chiefComplaint.split(" - ");
    const complaint =
      complaintParts.length > 1 ? complaintParts[1] : data.chiefComplaint;

    onContinue(complaint, data, false);
  };

  return (
    <Card className="max-w-5xl mx-auto h-fit w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Case Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="patientProximity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you with the patient now?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger ref={callerType}>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                          <SelectItem value="First Party">
                            First Party
                          </SelectItem>
                          <SelectItem value="Fourth Party (Referral)">
                            Fourth Party (Referral)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="patientCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How many people are sick?</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          max={99}
                          {...field}
                          ref={patientCountRef}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber || 1)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="patientAge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How old is the patient?</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            {...field}
                            value={field.value || 0}
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber || 0)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ageUnit"
                    render={({ field }) => (
                      <FormItem tabIndex={-1}>
                        <FormLabel>&nbsp;</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Years">Years</SelectItem>
                            <SelectItem value="Months">Months</SelectItem>
                            <SelectItem value="Days">Days</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What is the patient's gender?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isConscious"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Is {isMounted && getGenderPronoun(gender)} awake
                        (conscious)?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger ref={isConsciousRef}>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                          <SelectItem value="Unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isBreathing"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Is {isMounted && getGenderPronoun(gender)} breathing?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger ref={isBreathingRef}>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="INEFFECTIVE/AGONAL">
                            INEFFECTIVE/AGONAL
                          </SelectItem>
                          <SelectItem value="No">No</SelectItem>
                          <SelectItem value="Unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {isMounted && (
                  <FormField
                    control={form.control}
                    name="chiefComplaint"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Chief Complaint</FormLabel>
                        <FormControl>
                          <Combobox
                            options={sortedComplaintOptions}
                            value={field.value}
                            onValueChange={field.onChange}
                            placeholder="Select chief complaint"
                            searchPlaceholder="Search complaints..."
                            ref={chiefComplaintRef}
                          />
                        </FormControl>
                        <FormDescription>
                          Select the primary complaint or reason for the call
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <div className="flex flex-row-reverse justify-start gap-2">
                {isMounted && (
                  <>
                    <Button
                      type="submit"
                      disabled={!isFormValid}
                      ref={nextRef}
                      className="cursor-pointer focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      Continue
                    </Button>
                    <Button
                      type="button"
                      variant="destructive"
                      // Give it hover of red
                      className="hover:bg-red-600 hover:border-red-500 font-bold cursor-pointer"
                      disabled={!form.getValues().chiefComplaint}
                      onClick={() => {
                        if (form.getValues().chiefComplaint) {
                          const values = form.getValues();
                          localStorage.setItem(
                            "EMS_DATA",
                            JSON.stringify(values)
                          );

                          const patientData = {
                            age: values.patientAge,
                            ageUnit: values.ageUnit,
                            gender: values.gender,
                            count: values.patientCount,
                            isConscious:
                              values.isConscious === "Yes"
                                ? true
                                : values.isConscious === "No"
                                ? false
                                : "Unknown",
                            isBreathing:
                              values.isBreathing === "Yes"
                                ? true
                                : values.isBreathing === "No" ||
                                  values.isBreathing === "INEFFECTIVE/AGONAL"
                                ? false
                                : "Unknown",
                          };
                          localStorage.setItem(
                            "DISPATCH_PATIENT_DATA",
                            JSON.stringify(patientData)
                          );

                          const complaintParts =
                            values.chiefComplaint.split(" - ");
                          const complaint =
                            complaintParts.length > 1
                              ? complaintParts[1]
                              : values.chiefComplaint;
                          onContinue(complaint, values, true);
                        }
                      }}
                    >
                      ProQA Override
                    </Button>
                  </>
                )}
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
