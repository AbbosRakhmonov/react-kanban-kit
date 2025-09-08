// vite.config.ts
import { defineConfig } from "file:///D:/react-kanban-kit/node_modules/vite/dist/node/index.js";
import react from "file:///D:/react-kanban-kit/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///D:/react-kanban-kit/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "path";
import cssInjectedByJsPlugin from "file:///D:/react-kanban-kit/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
var __vite_injected_original_dirname = "D:\\react-kanban-kit";
var vite_config_default = defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic"
    }),
    dts({
      include: ["src"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx"]
    }),
    cssInjectedByJsPlugin()
  ],
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src"),
      "@src": resolve(__vite_injected_original_dirname, "./src"),
      "@components": resolve(__vite_injected_original_dirname, "./src/components"),
      "@utils": resolve(__vite_injected_original_dirname, "./src/utils")
    }
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "ReactKanbanKit",
      fileName: (format) => `index.${format}.js`
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
        "virtua"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          classnames: "classNames",
          "@atlaskit/pragmatic-drag-and-drop": "pragmaticDragAndDrop",
          "@atlaskit/pragmatic-drag-and-drop-hitbox": "pragmaticDragAndDropHitbox",
          "@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-autoscroll": "pragmaticDragAndDropAutoscroll",
          "@atlaskit/pragmatic-drag-and-drop-auto-scroll": "pragmaticDragAndDropAutoScroll",
          virtua: "virtua"
        }
      }
    },
    sourcemap: true,
    minify: "terser"
  },
  server: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxyZWFjdC1rYW5iYW4ta2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxyZWFjdC1rYW5iYW4ta2l0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9yZWFjdC1rYW5iYW4ta2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBqc3hSdW50aW1lOiBcImF1dG9tYXRpY1wiLFxuICAgIH0pLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbXCJzcmNcIl0sXG4gICAgICBleGNsdWRlOiBbXCJzcmMvKiovKi50ZXN0LnRzXCIsIFwic3JjLyoqLyoudGVzdC50c3hcIl0sXG4gICAgfSksXG4gICAgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKCksXG4gIF0sXG4gIGJhc2U6IFwiLi9cIixcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICBcIkBzcmNcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICBcIkBjb21wb25lbnRzXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2NvbXBvbmVudHNcIiksXG4gICAgICBcIkB1dGlsc1wiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy91dGlsc1wiKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwiUmVhY3RLYW5iYW5LaXRcIixcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgIFwicmVhY3RcIixcbiAgICAgICAgXCJyZWFjdC1kb21cIixcbiAgICAgICAgXCJyZWFjdC9qc3gtcnVudGltZVwiLFxuICAgICAgICBcImNsYXNzbmFtZXNcIixcbiAgICAgICAgXCJAYXRsYXNraXQvcHJhZ21hdGljLWRyYWctYW5kLWRyb3BcIixcbiAgICAgICAgXCJAYXRsYXNraXQvcHJhZ21hdGljLWRyYWctYW5kLWRyb3AtaGl0Ym94XCIsXG4gICAgICAgIFwiQGF0bGFza2l0L3ByYWdtYXRpYy1kcmFnLWFuZC1kcm9wLXJlYWN0LWJlYXV0aWZ1bC1kbmQtYXV0b3Njcm9sbFwiLFxuICAgICAgICBcIkBhdGxhc2tpdC9wcmFnbWF0aWMtZHJhZy1hbmQtZHJvcC1hdXRvLXNjcm9sbFwiLFxuICAgICAgICBcInZpcnR1YVwiLFxuICAgICAgXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgICAgXCJyZWFjdC9qc3gtcnVudGltZVwiOiBcImpzeFJ1bnRpbWVcIixcbiAgICAgICAgICBjbGFzc25hbWVzOiBcImNsYXNzTmFtZXNcIixcbiAgICAgICAgICBcIkBhdGxhc2tpdC9wcmFnbWF0aWMtZHJhZy1hbmQtZHJvcFwiOiBcInByYWdtYXRpY0RyYWdBbmREcm9wXCIsXG4gICAgICAgICAgXCJAYXRsYXNraXQvcHJhZ21hdGljLWRyYWctYW5kLWRyb3AtaGl0Ym94XCI6XG4gICAgICAgICAgICBcInByYWdtYXRpY0RyYWdBbmREcm9wSGl0Ym94XCIsXG4gICAgICAgICAgXCJAYXRsYXNraXQvcHJhZ21hdGljLWRyYWctYW5kLWRyb3AtcmVhY3QtYmVhdXRpZnVsLWRuZC1hdXRvc2Nyb2xsXCI6XG4gICAgICAgICAgICBcInByYWdtYXRpY0RyYWdBbmREcm9wQXV0b3Njcm9sbFwiLFxuICAgICAgICAgIFwiQGF0bGFza2l0L3ByYWdtYXRpYy1kcmFnLWFuZC1kcm9wLWF1dG8tc2Nyb2xsXCI6XG4gICAgICAgICAgICBcInByYWdtYXRpY0RyYWdBbmREcm9wQXV0b1Njcm9sbFwiLFxuICAgICAgICAgIHZpcnR1YTogXCJ2aXJ0dWFcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgbWluaWZ5OiBcInRlcnNlclwiLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStPLFNBQVMsb0JBQW9CO0FBQzVRLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sMkJBQTJCO0FBSmxDLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFlBQVk7QUFBQSxJQUNkLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxLQUFLO0FBQUEsTUFDZixTQUFTLENBQUMsb0JBQW9CLG1CQUFtQjtBQUFBLElBQ25ELENBQUM7QUFBQSxJQUNELHNCQUFzQjtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQy9CLFFBQVEsUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDbEMsZUFBZSxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQ3BELFVBQVUsUUFBUSxrQ0FBVyxhQUFhO0FBQUEsSUFDNUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLFNBQVMsTUFBTTtBQUFBLElBQ3ZDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IscUJBQXFCO0FBQUEsVUFDckIsWUFBWTtBQUFBLFVBQ1oscUNBQXFDO0FBQUEsVUFDckMsNENBQ0U7QUFBQSxVQUNGLG9FQUNFO0FBQUEsVUFDRixpREFDRTtBQUFBLFVBQ0YsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
