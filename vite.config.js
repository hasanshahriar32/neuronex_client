import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    base: "/",
    build: {
        outDir: "dist",
    },

    // server: {
    //   port: 3000,
    //   proxy: {
    //     "/api": {
    //       target: "http://localhost:8080",
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ""),
    //     },
    //   },
    // },
});
