import {tanstackStart} from '@tanstack/react-start/plugin/vite';
import {defineConfig} from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      spa: {enabled: false},
      tsr: {
        generatedRouteTree: 'src/ignore-this-garbage/routeTree.gen.ts',
        routesDirectory: 'src/ignore-this-garbage/routes',
      },
    }),
    viteReact(),
  ],
});
