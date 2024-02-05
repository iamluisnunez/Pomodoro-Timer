// Inside my-react-vite-app/vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/my-react-vite-app/", // Set the correct base path
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      "@babel/runtime/helpers/extends",
      "@babel/runtime/helpers/inheritsLoose",
    ],
  },
});
