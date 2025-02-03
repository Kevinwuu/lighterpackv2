import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  plugins: [react(), tsconfigPaths()],
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx", // 为 .js 文件设置 JSX loader
        ".ts": "ts", // 为 .ts 文件设置 TS loader
        ".tsx": "tsx", // 为 .tsx 文件设置 TSX loader
      },
    },
  },
  // base: "/migrate-cra-to-vite/",
  base: "/",
});
