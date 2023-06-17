import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // for github pages
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "_assets/[name].[ext]", // Optional: Organize assets in a separate directory
      },
    },
    outDir: "dist",
    assets: {
      // Copy the _redirects file to the dist directory
      // during the build process
      copy: [
        {
          from: "_redirects",
          to: "./",
        },
      ],
    },
  },
});
