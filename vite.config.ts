import path from "path";
import { copyFileSync } from "fs";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  let outDir = "dist";
  const env = loadEnv(mode, ".", "");
  return {
    base: "/",
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [
      react(),
      {
        // GitHub Pages serve 404.html para caminhos desconhecidos (/produtos, /contato...):
        // usa uma cópia do index.html para o app carregar e abrir a página certa.
        name: "spa-404-fallback",
        apply: "build",
        closeBundle() {
          const saida = path.resolve(outDir);
          copyFileSync(path.join(saida, "index.html"), path.join(saida, "404.html"));
        },
        configResolved(config) {
          outDir = config.build.outDir;
        },
      },
    ],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
