import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// If deploying to a subpath (like GitHub Pages), set the base accordingly.
// Example: base: '/techtalksvirtually/'
// For Netlify/Vercel main domain, base can remain "/".
const base =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? "/techtalksvirtually/"
    : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
