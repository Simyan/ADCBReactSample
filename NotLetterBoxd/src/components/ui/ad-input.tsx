import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/shadcn/form";
  import { Input } from "@/components/ui/shadcn/input";
import { useController, useFormContext } from "react-hook-form";
  
  interface InputDefaultProps {
    control: any;
    name: string;
    label?: string;
    placeholder: string;
    type?: string;
    description?: string;
    className?: string;
    inputClassname?: string;
  }
  
  export default function AdInput({
    control,
    name,
    label,
    placeholder,
    type = "text",
    // description,
    // className,
    // inputClassname,
  }: InputDefaultProps) {

    const {
        field: { ref, ...field },
      } = useController({
        name,
        control,
      });

  const { formState: { errors }} = useFormContext();
  const errorMessage = errors[name]?.message as string;

    return (

        <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
            <Input type={type} placeholder={placeholder} {...field} ref={ref} />
        </FormControl>
        <FormMessage >{errorMessage}</FormMessage>
        </FormItem>

    //   <FormField
    //     control={control}
    //     name={name}
    //     render={({ field }) => (
    //       <FormItem className={className}>
    //         {label && <FormLabel>{label}</FormLabel>}
    //         <FormControl>
    //           <Input
    //             className={inputClassname}
    //             type={type}
    //             placeholder={placeholder}
    //             {...field}
    //           />
    //         </FormControl>
    //         <FormMessage />
    //         {description && <FormDescription>{description}</FormDescription>}
    //       </FormItem>
    //     )}
    //   />
    );
  }