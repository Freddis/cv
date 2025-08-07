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
      // <link rel="preconnect" href="https://fonts.googleapis.com">
      /* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link> */
      {
        rel:'preconnect',
        href: 'https://fonts.googleapis.com',
        crossOrigin: '',
      },
      {
        rel:'preconnect',
        href:'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      }
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
