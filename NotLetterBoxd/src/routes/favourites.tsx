import List from '@/pages/favourites/list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/favourites')({
  component: RouteComponent,
})

function RouteComponent() {
  return <List/>;
}
