import galerias from "virtual:galerias";
import { Produto } from "../tipos";
import { CATALOGO } from "./catalogo";

export {
  SITE_URL,
  META_PADRAO,
  META_CATALOGO,
  PAGINAS_ESTATICAS,
} from "./catalogo";

const capaDoProduto = (pasta: string, capa: string | undefined, fotos: string[]): string => {
  if (capa) {
    const informada = `/assets/produtos/${pasta}/${capa}`;
    if (fotos.includes(informada)) return informada;
  }
  const principal = `/assets/produtos/${pasta}/main.webp`;
  if (fotos.includes(principal)) return principal;
  return fotos[0] ?? "";
};

export const PRODUTOS: Produto[] = CATALOGO.map(({ pasta, capa, ...resto }) => {
  const fotos = galerias[pasta] ?? [];
  return {
    ...resto,
    image: capaDoProduto(pasta, capa, fotos),
    gallery: fotos,
  };
});

export const produtosAtivos = (): Produto[] => PRODUTOS.filter((p) => p.ativo);

export const produtoPorSlug = (slug: string): Produto | undefined =>
  produtosAtivos().find((p) => p.slug === slug);

export const caminhoProduto = (slug: string): string => `/produtos/${slug}`;

/** Capa primeiro, depois o restante da pasta, sem repetir a capa. */
export const fotosDoProduto = (produto: Produto): string[] => {
  const demais = produto.gallery.filter((foto) => foto !== produto.image);
  return produto.image ? [produto.image, ...demais] : demais;
};
