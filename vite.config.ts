import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { vueDemoPlugin } from "./vitePlugins/vueDemo";
import { md } from "./vitePlugins/markdown";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), vueDemoPlugin, md()],
});
