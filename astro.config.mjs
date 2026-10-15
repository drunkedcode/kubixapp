// astro.config.mjs
import { defineConfig } from 'astro/config';
import path from 'node:path';

export default defineConfig({
  // ...tu config existente (integrations, etc.)
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});