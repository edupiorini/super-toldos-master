import path from "path";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import {
  META_CATALOGO,
  PAGINAS_ESTATICAS,
  produtosAtivos,
  SITE_URL,
} from "./dados/produtos";

const escaparAttr = (valor: string): string =>
  valor
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

const aplicarMetaHtml = (
  html: string,
  titulo: string,
  descricao: string,
  url: string,
): string =>
  html
    .replace(/<title>[^<]*<\/title>/, `<title>${escaparAttr(titulo)}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${escaparAttr(descricao)}$2`,
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${escaparAttr(titulo)}$2`,
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${escaparAttr(descricao)}$2`,
    )
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${escaparAttr(url)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${escaparAttr(url)}$2`);

const escreverSitemap = (saida: string) => {
  const caminhos = [
    ...PAGINAS_ESTATICAS,
    ...produtosAtivos().map((produto) => `/produtos/${produto.slug}`),
  ];
  const urls = caminhos
    .map((caminho) => {
      const loc = `${SITE_URL}${caminho === "/" ? "/" : caminho}`;
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  writeFileSync(path.join(saida, "sitemap.xml"), xml);
};

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
        // vite preview, sem barra no final, não abre sozinho o index.html da pasta.
        name: "preview-indice-diretorio",
        configurePreviewServer(server) {
          const saida = path.resolve(server.config.root, server.config.build.outDir);
          server.middlewares.use((req, _res, next) => {
            const bruto = decodeURIComponent((req.url || "/").split("?")[0]);
            const limpo = bruto.replace(/\/+$/, "") || "/";
            if (limpo === "/") return next();
            const indice = path.resolve(saida, `.${limpo}`, "index.html");
            if (indice.startsWith(saida + path.sep) && existsSync(indice)) {
              req.url = `${limpo}/index.html`;
            }
            next();
          });
        },
      },
      {
        // GitHub Pages serve 404.html para caminhos sem arquivo.
        // Além disso, cada produto ativo ganha um HTML estático com título e meta próprios,
        // para o link direto funcionar e os buscadores lerem a página certa.
        name: "spa-paginas-estaticas",
        apply: "build",
        closeBundle() {
          const saida = path.resolve(outDir);
          const index = readFileSync(path.join(saida, "index.html"), "utf8");
          copyFileSync(path.join(saida, "index.html"), path.join(saida, "404.html"));

          const catalogo = aplicarMetaHtml(
            index,
            META_CATALOGO.title,
            META_CATALOGO.description,
            `${SITE_URL}/produtos`,
          );
          mkdirSync(path.join(saida, "produtos"), { recursive: true });
          writeFileSync(path.join(saida, "produtos", "index.html"), catalogo);

          for (const produto of produtosAtivos()) {
            const dir = path.join(saida, "produtos", produto.slug);
            mkdirSync(dir, { recursive: true });
            writeFileSync(
              path.join(dir, "index.html"),
              aplicarMetaHtml(
                index,
                produto.pageTitle,
                produto.metaDescription,
                `${SITE_URL}/produtos/${produto.slug}`,
              ),
            );
          }

          escreverSitemap(saida);
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
