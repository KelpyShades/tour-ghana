import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
  cacheDir: path.resolve(
    process.env.USERPROFILE || "C:/Users/Ryo",
    ".gemini/vite_cache/sediyy"
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
