import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import posthtml from "posthtml";
import include from "posthtml-include";
import { viteStaticCopy } from "vite-plugin-static-copy";
// Функция для использования posthtml-include
const posthtmlPlugin = () => {
  return {
    name: "vite-plugin-posthtml-include",
    transformIndexHtml: async (html) => {
      const result = await posthtml([include({ root: "./src" })]).process(html);
      return result.html;
    },
  };
};

export default defineConfig({
  root: "src",
  build: {
    outDir: "dist", // Каталог сборки будет создан на уровень выше src
  },
  server: {
    open: true, // Автоматически открывать браузер при запуске сервера
  },
  plugins: [
    createHtmlPlugin(),
    posthtmlPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: "images",
          dest: ".",
        },
      ],
    }),
  ],
});
