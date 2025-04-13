import { Favourite, columns } from "./column-definitions/favourite"
import { DataTable } from "./components/favourite-datatable"

 function getData(): Favourite[] {
  // Fetch data from your API here.
  return [
    {
        id: "1",
        name: "Mickey 17",
        type: "movie",
        rating: 8.5,
        genre: "Sci-fi",
      },
      {
        id: "2",
        name: "Arrival",
        type: "movie",
        rating: 9.3,
        genre: "Sci-fi",
      },
      {
        id: "3",
        name: "The Dark Knight",
        type: "movie",
        rating: 9.2,
        genre: "Action",
      },
      {
        id: "4",
        name: "Babbel",
        type: "book",
        rating: 8.6,
        genre: "Alternative History",
      },
      {
        id: "5",
        name: "Sweet Bean Paste",
        type: "book",
        rating: 8.4,
        genre: "Literary Fiction",
      },
  ]
}

export default function List() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Your Favourites</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
