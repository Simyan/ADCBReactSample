import { SubmitHandler, useFormContext } from "react-hook-form"
import AdInput from "@/components/ui/ad-input";
import { Button } from "@/components/ui/shadcn/button";
import { FavouriteFormSchema } from "../types/favourite-form-schema";
import AdSelect from "@/components/ui/ad-select";


 



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


            <AdSelect
                control={form.control}
                name="category"
                label="Category"
                className="w-full"
                options={[
                    { value: "movie", label: "Movie" },
                    { value: "book", label: "Book" },
                    { value: "videogame", label: "Video Game" },
                    { value: "series", label: "Series" },
                ]}
            />

            <AdInput
                control={form.control}
                name="genre"
                placeholder="Enter genre"
                label="Genre"
                className="w-full"
            />

            <AdInput
                control={form.control}
                name="rating"
                placeholder="Enter rating"
                label="Rating"
                className="w-full"
                type="number"
            />

            <Button type="submit">Submit</Button>
    </form>
  </>
 )
}




                        

