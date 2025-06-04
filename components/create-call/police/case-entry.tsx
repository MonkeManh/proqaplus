"use client";

import { getPoliceComplaintOptions } from "@/data/protocols/policeProtocols";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ICallData } from "@/models/interfaces/ICallData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IPoliceData } from "@/models/interfaces/complaints/police/IPoliceData";
import { Input } from "@/components/ui/input";

interface CaseEntryProps {
  onContinue: (
    complaintName: string,
    data: IPoliceData,
    skipQuestions?: boolean
  ) => void;
  handleBack: () => void;
}

const formSchema = z.object({
  callerName: z.string().optional(),
  chiefComplaint: z.string({
    required_error: "Please select a chief complaint",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CaseEntry({ onContinue, handleBack }: CaseEntryProps) {
  const [storedData, setStoredData] = useState<ICallData | null>(null);
  const callerName = useRef<HTMLInputElement>(null);
  const chiefComplaint = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const complaintOptions = getPoliceComplaintOptions();

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

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "chiefComplaint") {
        setTimeout(() => {
          nextRef.current?.focus();
        }, 100);
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = (data: FormValues) => {
    const callData = {
      callerName: data.callerName || "",
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
                  name="callerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Caller Name</FormLabel>
                      <FormDescription className="mb-1">
                        The name of the person calling
                      </FormDescription>
                      <FormControl>
                        <Input
                            placeholder="Enter caller name"
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            ref={callerName}
                        />
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
                            callerName: form.getValues().callerName || "",
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
