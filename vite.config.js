import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  // Add the "postbuild" script to copy _redirects after the build
  // is completed
  scripts: {
    postbuild: "cpy './_redirects' './dist'",
  },
});
