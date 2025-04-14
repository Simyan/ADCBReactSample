import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
//import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute(
    {
        component: RootComponent
    }    
);

function RootComponent(){
    
    return(
        <>
            <div className='p-2 flex items-start gap-2 text-lg'>
                <Link to="/favourites" activeProps={{className: 'font-bold'}} activeOptions={{exact: true}}>My favourites</Link>
                <Link to="/newfavourite" activeProps={{className: 'font-bold'}} activeOptions={{exact: true}}>New Favourite</Link>
            </div>
            <hr/>
            <Outlet/>
        </>
    )
}