import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    dts({
      include: ["src"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    }),
    cssInjectedByJsPlugin(),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@src": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@utils": resolve(__dirname, "./src/utils"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactKanbanKit",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "classnames",
        "@atlaskit/pragmatic-drag-and-drop",
        "@atlaskit/pragmatic-drag-and-drop-hitbox",
        "@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-autoscroll",
        "@atlaskit/pragmatic-drag-and-drop-auto-scroll",
        "virtua",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          classnames: "classNames",
          "@atlaskit/pragmatic-drag-and-drop": "pragmaticDragAndDrop",
          "@atlaskit/pragmatic-drag-and-drop-hitbox":
            "pragmaticDragAndDropHitbox",
          "@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-autoscroll":
            "pragmaticDragAndDropAutoscroll",
          "@atlaskit/pragmatic-drag-and-drop-auto-scroll":
            "pragmaticDragAndDropAutoScroll",
          virtua: "virtua",
        },
      },
    },
    sourcemap: true,
    minify: "terser",
  },
  server: {
    port: 3000,
  },
});
