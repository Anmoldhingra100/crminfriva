import path from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "node-server",
  },

  vite: {
    resolve: {
      alias: [
        {
          find: /^@\/lib(.*)$/,
          replacement: `${path.resolve(__dirname, "src/components/lib")}$1`,
        },
        {
          find: /^@\/hooks(.*)$/,
          replacement: `${path.resolve(__dirname, "src/components/lib/api")}$1`,
        },
      ],
    },
  },
});