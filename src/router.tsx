import {createRouter as createTanStackRouter} from '@tanstack/react-router';
import {DefaultCatchBoundary} from './components/layout/DefaultCatchBoundary';
import {NotFound} from './components/layout/NotFound';
import {routeTree} from './routes/routes';

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
