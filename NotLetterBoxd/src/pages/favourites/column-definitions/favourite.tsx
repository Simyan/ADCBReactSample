import { ColumnDef } from "@tanstack/react-table"

//Column definition - start
export type Favourite = {
    id: string
    name: string,
    type: "movie" | "series" | "book" | "video game",
    rating: number,
    genre: string,
}


export const columns: ColumnDef<Favourite>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "rating",
        header: "Rating",
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "genre",
        header: "Genre",
        cell: (info) => info.getValue(),
    },
]
//Column definition - end