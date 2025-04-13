import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/shadcn/form";
  
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/shadcn/select";
  
  import { useController, useFormContext } from "react-hook-form";
  
  interface SelectOption {
    value: string | number;
    label: string;
  }
  
  interface SelectDefaultProps {
    control: any;
    name: string;
    label?: string;
    options: SelectOption[];
    placeholder?: string;
    className?: string;
  }
  
  export default function AdSelect({
    control,
    name,
    label,
    options,
    placeholder = "Select an option",
    className,
  }: SelectDefaultProps) {
    const {
      field: { value, onChange },
    } = useController({
      name,
      control,
    });
  
    const {
      formState: { errors },
    } = useFormContext();
    const errorMessage = errors[name]?.message as string;
  
    return (
      <FormItem>
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl>
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger className={className}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value.toString()}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage>{errorMessage}</FormMessage>
      </FormItem>
    );
  }