import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      app: resolve(__dirname, 'src/app'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  build: {
    outDir: 'resources/public/js',
    emptyOutDir: false,
    sourcemap: true,
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/app/main/index.ts'),
        worker: resolve(__dirname, 'src/app/worker/index.ts'),
      },
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
      },
    },
  },
});
