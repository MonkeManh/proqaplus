"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { postalData } from "@/data/postals";
import { streets } from "@/data/streets";
import { IPostal } from "@/models/interfaces/IPostal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const formSchema = z.object({
  postal: z.string().min(1, "Postal code is required"),
  street: z.string().min(1, "Street name is required"),
  buildingInfo: z.string().optional(),
  crossStreet1: z.string().min(1, "Cross street 1 is required"),
  crossStreet2: z.string().min(1, "Cross street 2 is required"),
  callerNumber: z.string().optional(),
  callerStatement: z.string().optional(),
  service: z.enum(["Police", "Fire", "EMS"], {
    required_error: "Service is required",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateCallForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [initialValues, setInitialValues] = useState<FormValues>({
    postal: "",
    street: "",
    buildingInfo: "",
    crossStreet1: "",
    crossStreet2: "",
    callerNumber: "",
    callerStatement: "",
    service: "Police",
  });
  const [selectedPostal, setSelectedPostal] = useState<IPostal | undefined>(
    undefined
  );
  const [selectedStreet, setSelectedStreet] = useState<string>("");
  const streetRef = useRef<HTMLButtonElement>(null);
  const buildingInfoRef = useRef<HTMLInputElement>(null);
  const crossStreet1Ref = useRef<HTMLButtonElement>(null);
  const crossStreet2Ref = useRef<HTMLButtonElement>(null);
  const callerNumberRef = useRef<HTMLInputElement>(null);
  const callerStatementRef = useRef<HTMLTextAreaElement>(null);
  const createCallRef = useRef<HTMLButtonElement>(null);
  const postalOptions = useMemo(
    () =>
      postalData.map((postal: IPostal) => ({
        value: postal.postal,
        label: postal.postal,
      })),
    []
  );
  const streetOptions = useMemo(
    () =>
      streets.map((street: string) => ({
        value: street,
        label: street,
      })),
    []
  );
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const validateForm = (data: Partial<FormValues>) => {
    return !!(
      data.postal &&
      data.street &&
      data.crossStreet1 &&
      data.crossStreet2 &&
      data.service
    );
  };

  const getPostal = (postal: string) => {
    return postalData.find((p) => p.postal === postal);
  };

  // Load initial values from local storage
  useEffect(() => {
    const saved = localStorage.getItem("NEW_CALL");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const values = {
          postal: parsed.postal || "",
          street: parsed.street || "",
          buildingInfo: parsed.buildingInfo || "",
          crossStreet1: parsed.crossStreet1 || "",
          crossStreet2: parsed.crossStreet2 || "",
          callerNumber: parsed.callerNumber || "",
          callerStatement: parsed.callerStatement || "",
          service: parsed.service || undefined,
        };
        setInitialValues(values);
        setSelectedPostal(getPostal(values.postal));
        setSelectedStreet(values.street);
        form.reset(values);
        setIsFormValid(validateForm(values));
      } catch (error) {
        console.error(
          "Error parsing initial values from local storage:",
          error
        );
      }
    }
  }, []);

  useEffect(() => {
    if (initialValues.postal) {
      const matchedPostal = getPostal(initialValues.postal);
      if (matchedPostal) {
        setSelectedPostal(matchedPostal);
      }
    }
  }, [initialValues.postal]);

  useEffect(() => {
    if (initialValues.street) {
      setSelectedStreet(initialValues.street);
    }
  }, [initialValues.street]);

  const handlePostalChange = (postal: string) => {
    const postalObj = getPostal(postal);
    setSelectedPostal(postalObj);
    form.setValue("postal", postal);

    // Clear Previous Values
    form.setValue("street", "");
    form.setValue("crossStreet1", "");
    form.setValue("crossStreet2", "");

    if (postalObj?.streets?.autoFill && postalObj?.streets?.mainStreet) {
      form.setValue("street", postalObj?.streets?.mainStreet);
      form.setValue(
        "crossStreet1",
        postalObj?.streets?.crossStreet1 || "Not Found"
      );
      form.setValue(
        "crossStreet2",
        postalObj?.streets?.crossStreet2 || "Not Found"
      );
      buildingInfoRef.current?.focus();
    }
  };

  // Handle street change
  useEffect(() => {
    if (!selectedPostal || !selectedStreet) return;

    const roads = selectedPostal.streets?.availableRoads;
    const roadData = roads?.[selectedStreet];

    if (roadData) {
      if (!form.getValues("crossStreet1")) {
        form.setValue("crossStreet1", roadData.crossStreet1 || "");
      }
      if (!form.getValues("crossStreet2")) {
        form.setValue("crossStreet2", roadData.crossStreet2 || "");
        buildingInfoRef.current?.focus();
      }
    }
  }, [selectedPostal, selectedStreet, form]);

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);

    const callData = {
      postal: values.postal,
      street: values.street,
      buildingInfo: values.buildingInfo,
      crossStreet1: values.crossStreet1,
      crossStreet2: values.crossStreet2,
      callerNumber: values.callerNumber,
      callerStatement: values.callerStatement,
      service: values.service,
    };

    localStorage.setItem("NEW_CALL", JSON.stringify(callData));

    if (callData.service === "Police") {
      router.push("/create-call/police");
    } else if (callData.service === "Fire") {
      router.push("/create-call/fire");
    } else {
      router.push("/create-call/ems");
    }

    setIsSubmitting(false);
  };

  const formatPhoneNumber = (value: string, onComplete?: () => void) => {
    const digits = value.replace(/\D/g, "");

    const truncatedDigits = digits.slice(0, 10);

    if (truncatedDigits.length === 10 && onComplete) {
      setTimeout(onComplete, 0);
    }

    if (truncatedDigits.length <= 3) {
      return truncatedDigits;
    } else if (truncatedDigits.length <= 6) {
      return `(${truncatedDigits.slice(0, 3)}) ${truncatedDigits.slice(3)}`;
    } else {
      return `(${truncatedDigits.slice(0, 3)}) ${truncatedDigits.slice(
        3,
        6
      )}-${truncatedDigits.slice(6, 10)}`;
    }
  };

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "postal") {
        const postalCode = value.postal;
        if (!postalCode) return;

        const postalObj = getPostal(postalCode);
        form.setValue("street", "");
        form.setValue("crossStreet1", "");
        form.setValue("crossStreet2", "");

        if (postalObj?.streets?.autoFill && postalObj?.streets?.mainStreet) {
          form.setValue("street", postalObj?.streets?.mainStreet);
          form.setValue(
            "crossStreet1",
            postalObj?.streets?.crossStreet1 || "Not Found"
          );
          form.setValue(
            "crossStreet2",
            postalObj?.streets?.crossStreet2 || "Not Found"
          );
          buildingInfoRef.current?.focus();
        } else {
          streetRef.current?.click();
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  useEffect(() => {
    const subscription = form.watch((data) => {
      setIsFormValid(validateForm(data));
    });

    return () => subscription.unsubscribe();
  }, [form]);

  useEffect(() => {
    const storedCallsign = localStorage.getItem("CALLSIGN");

    if (!storedCallsign) {
      router.replace("/start");
      return;
    }
  }, [router]);

  return (
    <Card className="max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Create New Call</CardTitle>
        <CardDescription>Enter the pre-case information</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="postal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <Combobox
                        options={postalOptions}
                        value={field.value ?? ""}
                        autoFocus={!initialValues.postal}
                        onValueChange={handlePostalChange}
                        placeholder="Select postal code"
                        searchPlaceholder="Search postal codes..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="street"
                render={({ field }) => {
                  const currentPostal = selectedPostal;
                  let availableOptions: { value: string; label: string }[] = [];

                  // Check if the postal code has auto-filled streets
                  if (
                    currentPostal?.streets?.autoFill &&
                    currentPostal.streets.mainStreet
                  ) {
                    availableOptions = [
                      {
                        value: currentPostal.streets.mainStreet,
                        label: currentPostal.streets.mainStreet,
                      },
                    ];
                  } else if (currentPostal?.streets?.availableRoads) {
                    // If available roads are present, use them
                    availableOptions = Object.keys(
                      currentPostal.streets.availableRoads
                    ).map((road) => ({
                      value: road,
                      label: road,
                    }));
                  } else {
                    // Fallback to default street options
                    availableOptions = streetOptions;
                  }

                  return (
                    <FormItem>
                      <FormLabel>Street</FormLabel>
                      <FormControl>
                        <Combobox
                          options={availableOptions}
                          value={field.value || ""}
                          onValueChange={(value) => {
                            setSelectedStreet(value);
                            field.onChange(value);
                            form.setValue("crossStreet1", "");
                            form.setValue("crossStreet2", "");
                          }}
                          placeholder="Select street"
                          searchPlaceholder="Search streets..."
                          disabled={Boolean(currentPostal?.streets?.autoFill)}
                          ref={streetRef}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="buildingInfo"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Building Info</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Apartment, suite, unit, etc."
                        {...field}
                        ref={buildingInfoRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="crossStreet1"
                render={({ field }) => {
                  const currentPostal = selectedPostal;
                  const currentStreet = selectedStreet;
                  let availableOptions: { value: string; label: string }[] = [];

                  if (
                    currentPostal?.streets?.autoFill &&
                    currentPostal.streets.crossStreet1
                  ) {
                    availableOptions = [
                      {
                        value: currentPostal.streets.crossStreet1,
                        label: currentPostal.streets.crossStreet1,
                      },
                    ];
                  } else if (
                    currentPostal?.streets?.availableRoads &&
                    currentStreet
                  ) {
                    const roadInfo =
                      currentPostal.streets.availableRoads[currentStreet];
                    if (roadInfo) {
                      availableOptions = [
                        {
                          value: roadInfo.crossStreet1,
                          label: roadInfo.crossStreet1,
                        },
                      ];
                    }
                  } else {
                    availableOptions = streetOptions;
                  }

                  const isDisabled = Boolean(
                    currentPostal?.streets?.autoFill ||
                      (currentPostal?.streets?.availableRoads && currentStreet)
                  );

                  return (
                    <FormItem>
                      <FormLabel>Cross Street 1</FormLabel>
                      <FormControl>
                        <Combobox
                          options={availableOptions}
                          value={field.value || ""}
                          onValueChange={field.onChange}
                          placeholder="Select street"
                          searchPlaceholder="Search streets..."
                          disabled={isDisabled}
                          ref={crossStreet1Ref}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="crossStreet2"
                render={({ field }) => {
                  const currentPostal = selectedPostal;
                  const currentStreet = selectedStreet;
                  let availableOptions: { value: string; label: string }[] = [];

                  if (
                    currentPostal?.streets?.autoFill &&
                    currentPostal.streets.crossStreet2
                  ) {
                    availableOptions = [
                      {
                        value: currentPostal.streets.crossStreet2,
                        label: currentPostal.streets.crossStreet2,
                      },
                    ];
                  } else if (
                    currentPostal?.streets?.availableRoads &&
                    currentStreet
                  ) {
                    const roadInfo =
                      currentPostal.streets.availableRoads[currentStreet];
                    if (roadInfo) {
                      availableOptions = [
                        {
                          value: roadInfo.crossStreet2,
                          label: roadInfo.crossStreet2,
                        },
                      ];
                    }
                  } else {
                    availableOptions = streetOptions;
                  }

                  const isDisabled = Boolean(
                    currentPostal?.streets?.autoFill ||
                      (currentPostal?.streets?.availableRoads && currentStreet)
                  );

                  return (
                    <FormItem>
                      <FormLabel>Cross Street 2</FormLabel>
                      <FormControl>
                        <Combobox
                          options={availableOptions}
                          value={field.value || ""}
                          onValueChange={field.onChange}
                          placeholder="Select street"
                          searchPlaceholder="Search streets..."
                          disabled={isDisabled}
                          ref={crossStreet2Ref}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="callerNumber"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Caller Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(XXX) XXX-XXXX"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(
                            e.target.value,
                            () => {
                              callerStatementRef.current?.focus();
                            }
                          );
                          field.onChange(formatted);
                        }}
                        inputMode="numeric"
                        ref={callerNumberRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="callerStatement"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Caller Statement</FormLabel>
                    <FormDescription>
                      A small description of what the caller is saying.
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        placeholder="Enter dispatch details..."
                        className="min-h-[120px]"
                        {...field}
                        ref={callerStatementRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Police">
                          Police Department
                        </SelectItem>
                        <SelectItem value="Fire">Fire Department</SelectItem>
                        <SelectItem value="EMS">
                          Emergency Medical Services
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row-reverse w-full justify-start items-center">
              <Button
                type="submit"
                variant="destructive"
                disabled={isSubmitting || !isFormValid}
                ref={createCallRef}
                className="focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
              >
                {isSubmitting ? "Creating..." : "Create Call"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/dispatch")}
                disabled={isSubmitting}
                className="mr-4"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
