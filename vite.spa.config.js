import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.resolve(dirname, "resources/public"),
  server: {
    port: 3001,
    historyApiFallback: true,
    hmr: { overlay: false },
  },
  build: {
    sourcemap: false,
  },
  optimizeDeps: {
    exclude: ["*"],
  },
});