import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig, loadEnv } from "vite";

installGlobals();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      remix({
        ignoredRouteFiles: ["**/.*"],
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    define: {
      'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL),
      'process.env.SUPABASE_ANON_KEY': JSON.stringify(env.SUPABASE_ANON_KEY),
      'process.env.SESSION_SECRET': JSON.stringify(env.SESSION_SECRET),
    },
  };
});