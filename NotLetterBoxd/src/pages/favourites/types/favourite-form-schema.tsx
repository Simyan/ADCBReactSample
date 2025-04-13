import { z } from 'zod';

export const favouriteFormSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100, "Name is too long"),
  category: z.enum(["movie", "series", "book", "videogame", ""]),
  rating: z.number().min(0, "Rating must be at least 0").max(10, "Rating must be at most 10"),
  genre: z.string(),
});


export type FavouriteFormSchema = z.infer<typeof favouriteFormSchema>;


export const defaultValues: FavouriteFormSchema = {
    name: "",
    category: "",
    rating: 0,
    genre: "",
};