import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:80,
    host: true,
    hmr:
      process.env.CODESANDBOX_SSE || process.env.GITPOD_WORKSPACE_ID
        ? 443
        : undefined,
  },
  plugins: [
   
  ]
});
