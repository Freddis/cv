import {createRoute} from '@tanstack/react-router';
import {Home} from '../components/pages/Home/Home';
import {Projects} from '../components/pages/Projects/Projects';
import {rootRoute} from './rootRoute';
import {CvPage} from '../components/pages/Cv/CvPage';

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

export const cvRoute = createRoute({
  component: CvPage,
  path: '/cv',
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  projectsRoute,
  cvRoute,
]);
