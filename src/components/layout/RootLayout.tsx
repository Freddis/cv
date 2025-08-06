import {HeadContent, Link, Outlet, Scripts} from "@tanstack/react-router"
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools"
import {FC, StrictMode} from "react"
import {homeRoute, projectsRoute} from "../../routes"

export const RootLayout: FC = () => {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <StrictMode>
          <div className="flex flex-row min-h-screen ">
            <div className="flex flex-col gap-5 0 p-10 bg-neutral-200">
              <Link to={homeRoute.id}>Home</Link>
              <Link to={projectsRoute.id}>Projects</Link>
            </div>
            <div className="grow flex flex-row">
              <Outlet />
            </div>
            
          </div>
          <Scripts />
        </StrictMode>
        <TanStackRouterDevtools position="bottom-right" />
      </body>
    </html>
  )
}
