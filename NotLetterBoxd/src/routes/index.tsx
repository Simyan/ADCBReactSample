import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <h1 className="text-2xl font-bold mb-4">Try clicking on one of the navigation items</h1>
}
