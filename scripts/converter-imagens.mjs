// Converte as imagens referenciadas em components/Produtos.tsx para WebP (lado máx. 1600px, qualidade 80).
// Uso: node scripts/converter-imagens.mjs   (requer: npm i --no-save sharp)
// Os originais são movidos para assets/originais-produtos/ (fora de public/, logo não são publicados).
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const raiz = path.resolve(import.meta.dirname, "..");
const publico = path.join(raiz, "public");
const originais = path.join(raiz, "assets", "originais-produtos");
const fonte = path.join(raiz, "components", "Produtos.tsx");

const texto = fs.readFileSync(fonte, "utf8");
const refs = [...new Set([...texto.matchAll(/"(\/assets\/produtos\/[^"]+\.(?:jpe?g|png))"/gi)].map((m) => m[1]))];

// Alguns .jpg do repositório são na verdade BMP 24 bits (sharp não lê BMP): decodifica manualmente.
const abrir = (arquivo) => {
  const buf = fs.readFileSync(arquivo);
  if (buf.toString("latin1", 0, 2) !== "BM") return sharp(buf);
  const offset = buf.readUInt32LE(10);
  const largura = buf.readInt32LE(18);
  const altura = buf.readInt32LE(22);
  const bpp = buf.readUInt16LE(28);
  if (bpp !== 24) throw new Error(`BMP de ${bpp} bits não suportado`);
  const h = Math.abs(altura);
  const linha = Math.ceil((largura * 3) / 4) * 4;
  const rgb = Buffer.alloc(largura * h * 3);
  for (let y = 0; y < h; y++) {
    const origemY = altura > 0 ? h - 1 - y : y;
    for (let x = 0; x < largura; x++) {
      const i = offset + origemY * linha + x * 3;
      const o = (y * largura + x) * 3;
      rgb[o] = buf[i + 2];
      rgb[o + 1] = buf[i + 1];
      rgb[o + 2] = buf[i];
    }
  }
  return sharp(rgb, { raw: { width: largura, height: h, channels: 3 } });
};

let antes = 0;
let depois = 0;
for (const ref of refs) {
  const origem = path.join(publico, ref);
  const destino = origem.replace(/\.(jpe?g|png)$/i, ".webp");
  antes += fs.statSync(origem).size;
  try {
    await abrir(origem).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).webp({ quality: 80 }).toFile(destino);
  } catch (e) {
    console.error("FALHA:", ref, e.message);
    process.exitCode = 1;
    continue;
  }
  depois += fs.statSync(destino).size;
}
console.log(`${refs.length} imagens | antes ${(antes / 1048576).toFixed(1)} MB | depois ${(depois / 1048576).toFixed(1)} MB`);
