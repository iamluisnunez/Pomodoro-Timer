import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      "@babel/runtime/helpers/extends",
      "@babel/runtime/helpers/inheritsLoose",
    ],
  },
});
