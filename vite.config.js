import { defineConfig } from "vite";
import { sync as globSync } from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

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
    plugins: [injectHTML(), FullReload(["./src/**/**.html"])],
    optimizeDeps: {
      include: ["vite-plugin-html-inject", "vite-plugin-full-reload"],
    },
  };
});
