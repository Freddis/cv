import {createRootRoute, createRoute} from '@tanstack/react-router';
import {RootLayout} from './components/layout/RootLayout';
import {Home} from './components/pages/Home/Home';
import {DefaultCatchBoundary} from './components/layout/DefaultCatchBoundary';
import {NotFound} from './components/layout/NotFound';
import appCss from 'src/styles/app.css?url';
import {Projects} from './components/pages/Projects/Projects';

export const rootRoute = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [
      {rel: 'stylesheet', href: appCss},
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {rel: 'manifest', href: '/site.webmanifest', color: '#fffff'},
      {rel: 'icon', href: '/favicon.ico'},
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  component: RootLayout,
});

export const homeRoute = createRoute({
  component: Home,
  path: '/',
  getParentRoute: () => rootRoute,
});

export const projectsRoute = createRoute({
  component: Projects,
  path: '/projects',
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  projectsRoute,
]);
