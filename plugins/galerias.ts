import fs from "fs";
import path from "path";
import type { Plugin } from "vite";

export const ID_VIRTUAL_GALERIAS = "virtual:galerias";
const ID_RESOLVIDO = `\0${ID_VIRTUAL_GALERIAS}`;

const PASTA_PADRAO = path.resolve("public/assets/produtos");

export const ordenarNatural = (a: string, b: string): number =>
  a.localeCompare(b, "pt-BR", { numeric: true, sensitivity: "base" });

const listarWebp = (absPasta: string, pasta: string): string[] => {
  const arquivos: string[] = [];
  const visitar = (dir: string, rel: string) => {
    let entradas: fs.Dirent[];
    try {
      entradas = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const item of entradas) {
      if (item.name.startsWith(".")) continue;
      const abs = path.join(dir, item.name);
      const relItem = rel ? `${rel}/${item.name}` : item.name;
      if (item.isDirectory()) {
        visitar(abs, relItem);
      } else if (item.isFile() && item.name.toLowerCase().endsWith(".webp")) {
        arquivos.push(`/assets/produtos/${pasta}/${relItem}`);
      }
    }
  };
  visitar(absPasta, "");
  arquivos.sort(ordenarNatural);
  return arquivos;
};

export const lerGalerias = (
  raiz = PASTA_PADRAO,
): Record<string, string[]> => {
  const mapa: Record<string, string[]> = {};
  if (!fs.existsSync(raiz)) return mapa;
  for (const entrada of fs.readdirSync(raiz, { withFileTypes: true })) {
    if (!entrada.isDirectory() || entrada.name.startsWith(".")) continue;
    mapa[entrada.name] = listarWebp(path.join(raiz, entrada.name), entrada.name);
  }
  return mapa;
};

export const pluginGalerias = (raiz = PASTA_PADRAO): Plugin => ({
  name: "galerias",
  resolveId(id) {
    if (id === ID_VIRTUAL_GALERIAS) return ID_RESOLVIDO;
  },
  load(id) {
    if (id === ID_RESOLVIDO) {
      return `export default ${JSON.stringify(lerGalerias(raiz), null, 2)};\n`;
    }
  },
  configureServer(server) {
    const abs = path.resolve(raiz);
    server.watcher.add(abs);
    const invalidar = (arquivo: string) => {
      const normalizado = path.resolve(arquivo);
      if (normalizado !== abs && !normalizado.startsWith(abs + path.sep)) return;
      const mod = server.moduleGraph.getModuleById(ID_RESOLVIDO);
      if (mod) void server.reloadModule(mod);
    };
    server.watcher.on("add", invalidar);
    server.watcher.on("unlink", invalidar);
    server.watcher.on("addDir", invalidar);
    server.watcher.on("unlinkDir", invalidar);
  },
});
