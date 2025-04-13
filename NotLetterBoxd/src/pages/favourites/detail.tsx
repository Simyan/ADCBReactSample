import { FormProvider, useForm } from "react-hook-form";
import { FavouriteForm } from "./components/favourite-form";
import { FavouriteFormSchema, defaultValues, favouriteFormSchema } from "./types/favourite-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Detail(){
     const form = useForm<FavouriteFormSchema>({
            resolver: zodResolver(favouriteFormSchema),
            mode: 'all',
            defaultValues: defaultValues,
          })

          
    return(
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Add to Favourites</h1>
        <FormProvider {...form}>
            <FavouriteForm/>
        </FormProvider>
        </div>
    )
}