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
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IPoliceData } from "@/models/interfaces/complaints/police/IPoliceData";

interface CaseEntryProps {
  onContinue: (
    complaintName: string,
    data: IPoliceData,
    skipQuestions?: boolean
  ) => void;
  handleBack: () => void;
}

const formSchema = z.object({
  chiefComplaint: z.string({
    required_error: "Please select a chief complaint",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CaseEntry({ onContinue, handleBack }: CaseEntryProps) {
  const chiefComplaint = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const complaintOptions = getPoliceComplaintOptions();

  const formattedComplaintOptions = complaintOptions.map((c) => ({
    value: `${c.protocol} - ${c.value}`,
    label: `${c.protocol} - ${c.value}`,
  }));

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chiefComplaint: "",
    },
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
                          autoFocus
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
