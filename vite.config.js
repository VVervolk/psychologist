import { defineConfig } from "vite";
import { sync as globSync } from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    root: "src",
    build: {
      sourcemap: true,

      rollupOptions: {
        input: globSync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js",
        },
      },
      outDir: "../dist",
    },
    plugins: [
      injectHTML(),
      FullReload(["./src/**/**.html"]),
      ViteImageOptimizer({
        // Настройки оптимизации растровых изображений
        png: {
          quality: 80, // Качество сжатия PNG (0-100)
        },
        jpeg: {
          quality: 80, // Качество сжатия JPEG (0-100)
        },
        webp: {
          lossless: true, // Безвозвратное сжатие WebP
        },
        // Настройки оптимизации векторных изображений
        svg: {
          plugins: [
            {
              removeViewBox: false, // Не удалять атрибут viewBox
            },
          ],
        },
        // Настройки директорий
        dir: "images", // Каталог с исходными изображениями
        outDir: "dist/images", // Каталог для оптимизированных изображений
      }),
    ],
    optimizeDeps: {
      include: ["vite-plugin-html-inject", "vite-plugin-full-reload"],
    },
  };
});
