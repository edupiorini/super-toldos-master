import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Info,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Produto } from "../tipos";
import { produtoPorSlug, produtosAtivos } from "../dados/produtos";

const withBase = (src: string) => {
  if (!src.startsWith("/assets/")) return src;
  const normalizedBase = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return encodeURI(`${normalizedBase}${src.slice(1)}`);
};

interface ProdutosProps {
  slugAberto?: string | null;
  aoAbrirProduto?: (slug: string) => void;
  aoFecharProduto?: () => void;
}

const Produtos: React.FC<ProdutosProps> = ({
  slugAberto = null,
  aoAbrirProduto,
  aoFecharProduto,
}) => {
  const produtoSelecionado = slugAberto
    ? (produtoPorSlug(slugAberto) ?? null)
    : null;
  const [imagemAtiva, setImagemAtiva] = useState<string>(
    () => (slugAberto ? (produtoPorSlug(slugAberto)?.image ?? "") : ""),
  );

  useEffect(() => {
    setImagemAtiva(produtoSelecionado?.image ?? "");
  }, [produtoSelecionado]);

  useEffect(() => {
    if (!produtoSelecionado) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") aoFecharProduto?.();
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [produtoSelecionado, aoFecharProduto]);

  const lidarComCliqueProduto = (produto: Produto) => {
    setImagemAtiva(produto.image);
    aoAbrirProduto?.(produto.slug);
  };

  const trocarImagem = (img: string) => {
    setImagemAtiva(img);
  };

  const navegarImagem = (direcao: "anterior" | "proxima") => {
    if (!produtoSelecionado) return;

    // Array com todas as imagens (principal + galeria)
    const todasImagens = [
      produtoSelecionado.image,
      ...produtoSelecionado.gallery,
    ];
    const indiceAtual = todasImagens.indexOf(imagemAtiva);

    let novoIndice: number;
    if (direcao === "anterior") {
      novoIndice =
        indiceAtual === 0 ? todasImagens.length - 1 : indiceAtual - 1;
    } else {
      novoIndice =
        indiceAtual === todasImagens.length - 1 ? 0 : indiceAtual + 1;
    }

    setImagemAtiva(todasImagens[novoIndice]);
  };

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center md:text-left mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-black mb-4">
            Nossos <span className="text-brand-red">Produtos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            Oferecemos uma linha completa de toldos e coberturas. Clique nos
            itens abaixo para ver a galeria de fotos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosAtivos().map((produto) => (
            <div
              key={produto.id}
              onClick={() => lidarComCliqueProduto(produto)}
              className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                {/* Fallback visual caso a imagem não carregue */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <ImageIcon size={48} />
                </div>
                <img
                  src={withBase(produto.image)}
                  alt={produto.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Esconde a imagem quebrada e deixa o ícone de fallback à mostra
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-20"></div>

                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {produto.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-gray-600 mb-6 text-sm">
                  {produto.shortDescription}
                </p>
                <div className="flex items-center text-brand-red font-bold text-sm uppercase tracking-wide group-hover:underline">
                  Ver Galeria e Detalhes{" "}
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes e Galeria */}
      {produtoSelecionado && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => aoFecharProduto?.()}
        >
          <div
            className="bg-white w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row animate-[fadeUp_0.3s_ease-out] max-h-[90vh] md:max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Coluna da Galeria (Esquerda/Topo) */}
            <div className="w-full md:w-1/2 bg-black flex flex-col">
              {/* Imagem Principal Ativa */}
              <div className="flex-grow relative h-64 md:h-auto bg-gray-900 flex items-center justify-center overflow-hidden group/image">
                <img
                  key={imagemAtiva}
                  src={withBase(imagemAtiva)}
                  alt={produtoSelecionado.title}
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                  className="w-full h-full object-contain md:object-cover"
                />

                {/* Setas de Navegação - Visible on mobile, hover on desktop */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navegarImagem("anterior");
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-brand-red text-white p-3 rounded-full transition-all opacity-40 md:opacity-0 md:group-hover/image:opacity-100 hover:!opacity-100 hover:scale-110 z-10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navegarImagem("proxima");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-brand-red text-white p-3 rounded-full transition-all opacity-40 md:opacity-0 md:group-hover/image:opacity-100 hover:!opacity-100 hover:scale-110 z-10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded text-sm font-medium z-10">
                  {[
                    produtoSelecionado.image,
                    ...produtoSelecionado.gallery,
                  ].indexOf(imagemAtiva) + 1}
                  /
                  {
                    [produtoSelecionado.image, ...produtoSelecionado.gallery]
                      .length
                  }
                </div>
              </div>

              {/* Barra de Miniaturas - Larger touch targets on mobile */}
              <div className="p-4 flex gap-3 overflow-x-auto bg-brand-black/95 border-t border-gray-800 scrollbar-hide">
                {/* Miniatura da Principal */}
                <button
                  onClick={() => trocarImagem(produtoSelecionado.image)}
                  className={`flex-shrink-0 w-24 h-24 md:w-20 md:h-20 rounded border-2 overflow-hidden transition-all ${imagemAtiva === produtoSelecionado.image ? "border-brand-red opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img
                    src={withBase(produtoSelecionado.image)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    alt="Principal"
                  />
                </button>

                {/* Miniaturas da Galeria */}
                {produtoSelecionado.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => trocarImagem(img)}
                    className={`flex-shrink-0 w-24 h-24 md:w-20 md:h-20 rounded border-2 overflow-hidden transition-all ${imagemAtiva === img ? "border-brand-red opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img
                      src={withBase(img)}
                      className="w-full h-full object-cover"
                      alt={`Galeria ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Coluna de Informações (Direita/Baixo) */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display text-3xl font-bold text-brand-black">
                    {produtoSelecionado.title}
                  </h3>
                  <div className="h-1 w-20 bg-brand-red rounded mt-2"></div>
                </div>
                <button
                  onClick={() => aoFecharProduto?.()}
                  aria-label="Fechar"
                  className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-brand-black uppercase mb-3">
                    <Info size={16} className="text-brand-red" />
                    Descrição Técnica
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {produtoSelecionado.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-black mb-4 text-sm uppercase tracking-wide">
                    Características
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {produtoSelecionado.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-4 text-center uppercase tracking-wide">
                    Gostou deste modelo?
                  </p>
                  <a
                    href={`https://wa.me/5512981538545?text=${encodeURIComponent(`Olá, gostaria de um orçamento para o produto: ${produtoSelecionado.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 bg-brand-red text-white font-bold uppercase rounded hover:bg-brand-redHover transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Solicitar Orçamento no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Produtos;
