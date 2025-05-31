import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

export default defineConfig({
  plugins: [
    externalizeDeps({
      except: ['@tailwindcss/vite', /^@tailwindcss(?:\/.+)?$/],
    }),
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  base: '/OMDB_Movie_Search/', // Set the base path for the application
  build: {
    outDir: 'build', // Match CRA's default build output
  },
});
