"use client";

import * as React from "react";
import { useCallback, useMemo } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Option {
  value: string;
  label: string;
  className?: string;
}

export interface ComboboxProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: Option[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  strictSearch?: boolean;
  autoFocus?: boolean;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(({
  options,
  value,
  onValueChange,
  placeholder = "Select option",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  strictSearch = false,
  autoFocus = false,
  className,
  open: controlledOpen,
  onOpenChange,
  disabled = false,
  ...props
}, ref) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const hasInitiallyMounted = React.useRef(false);

  React.useEffect(() => {
    if (autoFocus && !hasInitiallyMounted.current) {
      setOpen(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
      hasInitiallyMounted.current = true;
    }
  }, [autoFocus, setOpen]);

  // Memoize selected option lookup
  const selectedOption = useMemo(() => 
    options.find(opt => opt.value === value),
    [options, value]
  );

  // Memoize filter function
  const filterFn = useCallback((value: string, search: string) => {
    if (strictSearch) {
      return value.includes(search) ? 1 : 0;
    }
    return value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
  }, [strictSearch]);

  // Memoize option selection handler
  const handleSelect = useCallback((optionValue: string) => {
    onValueChange(optionValue);
    setOpen(false);
  }, [onValueChange, setOpen]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          disabled={disabled}
          {...props}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
        style={{ maxHeight: "calc(var(--vh, 1vh) * 50)" }} // Limit max height to 50vh
      >
        <Command className={cn(`w-full`, className)} filter={filterFn}>
          <CommandInput 
            ref={inputRef}
            placeholder={searchPlaceholder} 
            className="w-full" 
          />
          <CommandList 
            className="w-full max-h-[300px] overflow-y-auto scroll-smooth"
          >
            <CommandEmpty className="text-muted-foreground rounded-sm px-2 py-1.5">{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={`${option.value} ${option.label}`}
                  onSelect={() => handleSelect(option.value)}
                  className={cn("cursor-pointer", option.className)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

Combobox.displayName = "Combobox";
