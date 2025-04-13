import { SubmitHandler, useFormContext } from "react-hook-form"
import AdInput from "@/components/ui/ad-input";
import { Button } from "@/components/ui/shadcn/button";
import { FavouriteFormSchema } from "../types/favourite-form-schema";


 



export function FavouriteForm(){
    const form = useFormContext<FavouriteFormSchema>();

    const onSubmit: SubmitHandler<FavouriteFormSchema> = (data) => {
		console.log(data);
	};

 return (
    <>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <AdInput
                control={form.control}
                name="name"
                placeholder="Enter name"
                label="Name"
                className="w-full"
            />

            <Button type="submit">Submit</Button>
    </form>
  </>
 )
}




                        

