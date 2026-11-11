import galerias from "virtual:galerias";
import { Produto } from "../tipos";
import { CATALOGO, caminhoCapa } from "./catalogo";

export {
  SITE_URL,
  META_PADRAO,
  META_CATALOGO,
  PAGINAS_ESTATICAS,
} from "./catalogo";

export const PRODUTOS: Produto[] = CATALOGO.map(({ pasta, capa, ...resto }) => {
  const fotos = galerias[pasta] ?? [];
  return {
    ...resto,
    image: caminhoCapa(pasta, capa, fotos),
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
