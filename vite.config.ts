import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

export default defineConfig({
  plugins: [
    externalizeDeps({
      except: ['@tailwindcss/vite', /^@tailwindcss(?:\/.+)?$/],
    }),
    react({
      jsxRuntime: 'classic',
    }),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  build: {
    outDir: 'build', // Match CRA's default build output
  },
});
