import Detail from '@/pages/favourites/detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/newfavourite')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Detail/>;
}
