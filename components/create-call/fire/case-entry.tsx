"use client";

import { getFireComplaintOptions } from "@/data/protocols/fireProtocols";
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
import { IFireData } from "@/models/interfaces/complaints/fire/IFireData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CIDSData } from "@/data/CIDS";
import { ICallData } from "@/models/interfaces/ICallData";
import { Location } from "@/models/interfaces/ICIDS";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CaseEntryProps {
  onContinue: (
    complaintName: string,
    data: IFireData,
    skipQuestions?: boolean
  ) => void;
  handleBack: () => void;
}

const formSchema = z.object({
  location: z.string().optional(),
  boxType: z
    .enum(["Phone Alarm", "Still Alarm", "Rescue", "High Rise"])
    .optional(),
  chiefComplaint: z.string({
    required_error: "Please seelect a chief complaint",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CaseEntry({ onContinue, handleBack }: CaseEntryProps) {
  const [storedData, setStoredData] = useState<ICallData | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useRef<HTMLButtonElement>(null);
  const boxType = useRef<HTMLButtonElement>(null);
  const chiefComplaint = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const complaintOptions = getFireComplaintOptions();

  const formattedComplaintOptions = complaintOptions.map((c) => ({
    value: `${c.protocol} - ${c.value}`,
    label: `${c.protocol} - ${c.value}`,
  }));

  useEffect(() => {
    const stored = localStorage.getItem("NEW_CALL");
    if (stored) {
      setStoredData(JSON.parse(stored) as ICallData);
    }
  }, []);

  const locationOptions = storedData
    ? CIDSData.filter(
        (location: Location) =>
          location.postal === storedData.postal ||
          location.postalRange.includes(storedData.postal)
      ).map((location: Location) => ({
        value: location.name,
        label: location.name,
      }))
    : [];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (!location.current) return;
    location.current.focus();
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const subscription = form.watch((vale, { name }) => {
      const state = form.getValues();
      const isValid = state.chiefComplaint ? true : false;
      setIsFormValid(isValid);
      if (name === "location") {
        setTimeout(() => {
          boxType.current?.focus();
        }, 100);
      } else if (name === "boxType") {
        setTimeout(() => {
          chiefComplaint.current?.focus();
        }, 100);
      } else if (name === "chiefComplaint") {
        setTimeout(() => {
          nextRef.current?.focus();
        }, 100);
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = (data: FormValues) => {
    const callData = {
      location: data.location,
      boxType: data.boxType,
      chiefComplaint: data.chiefComplaint,
    };

    const complaintParts = data.chiefComplaint.split(" - ");
    const complaint =
      complaintParts.length > 1 ? complaintParts[1] : data.chiefComplaint;

    onContinue(complaint, callData, false);
  };

  return (
    <Card className="max-w-5xl mx-auto h-fit w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Case Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormDescription className="mb-1">
                        Select a specific location that has CIDS information
                        available
                      </FormDescription>
                      <FormControl>
                        <Combobox
                          options={locationOptions}
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                          placeholder="Select chief complaint"
                          searchPlaceholder="Search complaints..."
                          autoFocus
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="boxType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alarm Type</FormLabel>
                      <FormDescription className="mb-1">
                        Select a specific call location (optional)
                      </FormDescription>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger ref={boxType}>
                              <SelectValue placeholder="Select Box Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Phone Alarm">
                              Phone Alarm Box
                            </SelectItem>
                            <SelectItem value="Rescue">Rescue Box</SelectItem>
                            <SelectItem value="High Rise">
                              High Rise Box
                            </SelectItem>
                            <SelectItem value="Still Alarm">
                              Still Alarm Box
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="chiefComplaint"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chief Complaint</FormLabel>
                      <FormDescription className="mb-1">
                        Select the primary complaint or reason for the call
                      </FormDescription>
                      <FormControl>
                        <Combobox
                          options={formattedComplaintOptions}
                          value={field.value}
                          onValueChange={field.onChange}
                          placeholder="Select chief complaint"
                          searchPlaceholder="Search complaints..."
                          ref={chiefComplaint}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex flex-row-reverse justify-between mb-12 mt-10">
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="destructive"
                    className="cursor-pointer"
                    onClick={() => {
                      const complaintValue = form.getValues().chiefComplaint;
                      if (complaintValue) {
                        const complaintParts = complaintValue.split(" - ");
                        const complaint =
                          complaintParts.length > 1
                            ? complaintParts[1]
                            : complaintValue;
                        onContinue(
                          complaint,
                          {
                            location: form.getValues().location,
                            boxType: form.getValues().boxType,
                            chiefComplaint: complaint,
                          },
                          true
                        );
                      }
                    }}
                  >
                    ProQA Override
                  </Button>
                  <Button
                    type="submit"
                    ref={nextRef}
                    variant="outline"
                    className="hover:bg-red-600 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Continue
                  </Button>
                </div>
                <Button onClick={handleBack} type="button" variant="outline">
                  Back
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
