// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import path from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    srcDirectory: "src/components",
    // Redirect TanStack Start's bundled server entry to src/components/server.ts.
    // nitro/vite builds from this
    server: { entry: "server" },
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
