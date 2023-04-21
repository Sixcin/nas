import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import viteCompression from "vite-plugin-compression";
import legacy from "@vitejs/plugin-legacy";
import path, { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
      defaultSFCLang: "json5",
    }),
    legacy(),
    viteCompression({
      threshold: 1024,
      filter: /\.(js|mjs|json|css|html|ttf)$/i,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
