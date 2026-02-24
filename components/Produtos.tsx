import React, { useState } from 'react';
import { ArrowRight, Info, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Produto } from '../tipos';

const withBase = (src: string) =>
  src.startsWith('/assets/') ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;

// Configuração dos Produtos com caminhos locais
// O desenvolvedor deve colocar as imagens na pasta public/assets/produtos/[id]/
const PRODUTOS: Produto[] = [
  {
    id: 'cortina',
    title: 'Toldo Cortina',
    shortDescription: 'Retrátil vertical. Ideal para varandas e áreas gourmet.',
    description: 'O Toldo Cortina é a solução perfeita para quem busca proteção contra sol e chuva sem perder a visão externa. Com acionamento vertical, ele funciona como uma parede móvel, ideal para fechar varandas, áreas de churrasqueira e corredores. Fabricado com lona de alta resistência e solda eletrônica.',
    image: '/assets/produtos/cortina/COM VISOR/Cortina retrátil COM VISOR (2).jpg',
    gallery: [
      '/assets/produtos/cortina/1.jpg',
      '/assets/produtos/cortina/2.jpg',
      '/assets/produtos/cortina/3.jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (1).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (2).jpeg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (3).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (4).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (5).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (6).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (7).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (8).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (9).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (10).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (11).jpeg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (12).jpg',
      '/assets/produtos/cortina/COM BRAÇO DE AVANÇO/Cortina retrátil COM BRAÇO DE AVANÇO (13).jpg',
      '/assets/produtos/cortina/COM VISOR/Cortina retrátil COM VISOR (1).jpg',
      '/assets/produtos/cortina/COM VISOR/Cortina retrátil COM VISOR (2).jpg',
      '/assets/produtos/cortina/COM VISOR/Cortina retrátil COM VISOR (3).jpg',
      '/assets/produtos/cortina/COM VISOR/Cortina retrátil COM VISOR (4).jpg',
      '/assets/produtos/cortina/COM VISOR/Cortina retrátil COM VISOR (5).jpg',
      '/assets/produtos/cortina/COM VISOR/Cortina retrátil COM VISOR (6).jpg',
      '/assets/produtos/cortina/SEM VISOR/Cortina retrátil SEM VISOR (1).jpg',
      '/assets/produtos/cortina/SEM VISOR/Cortina retrátil SEM VISOR (2).jpg',
      '/assets/produtos/cortina/SEM VISOR/Cortina retrátil SEM VISOR (3).jpg',
      '/assets/produtos/cortina/SEM VISOR/Cortina retrátil SEM VISOR (4).jpg',
      '/assets/produtos/cortina/SEM VISOR/Cortina retrátil SEM VISOR (5).jpg',
      '/assets/produtos/cortina/SEM VISOR/Cortina retrátil SEM VISOR (6).jpeg',
      '/assets/produtos/cortina/SEM VISOR/Cortina retrátil SEM VISOR (7).jpeg'
    ],
    icon: Info,
    features: ['Proteção contra sol e chuva', 'Acionamento manual ou motorizado', 'Visor transparente opcional', 'Lona PVC com Solda Eletrônica'],
  },

  {
    id: 'garagem',
    title: 'Coberturas para Garagem',
    shortDescription: 'Proteção para veículos em policarbonato, lona ou galvanizado.',
    description: 'Proteja seu veículo do sol e granizo com nossas coberturas especializadas. Estruturas robustas projetadas para durar, disponíveis em Policarbonato (para luminosidade), Telha Galvanizada (máxima durabilidade) ou Lona Tencionada.',
    image: '/assets/produtos/garagem/main.jpg',
    gallery: [
      '/assets/produtos/garagem/1.jpg',
      '/assets/produtos/garagem/2.jpg',
      '/assets/produtos/garagem/3.jpg',
      '/assets/produtos/garagem/4.jpg',
      '/assets/produtos/garagem/Garagem em lona/LONA (1).jpg',
      '/assets/produtos/garagem/Garagem em lona/LONA (2).jpg',
      '/assets/produtos/garagem/Garagem em lona/LONA (3).jpg',
      '/assets/produtos/garagem/Garagem em lona/LONA (4).jpg',
      '/assets/produtos/garagem/Garagem em lona/LONA (5).jpg',
      '/assets/produtos/garagem/Garagem em lona/LONA (6).jpg',
      '/assets/produtos/garagem/Garagem em lona/LONA (7).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (1).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (2).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (3).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (4).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (5).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (6).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (7).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (8).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (9).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (10).jpg',
      '/assets/produtos/garagem/Garagem em policarbonato/POLICARBONATO (11).jpg',
      '/assets/produtos/garagem/Garagem em telha galvanizada/TELHA GALVANIZADA (1).jpg',
      '/assets/produtos/garagem/Garagem em telha galvanizada/TELHA GALVANIZADA (2).jpg',
      '/assets/produtos/garagem/Garagem em telha galvanizada/TELHA GALVANIZADA (3).jpg',
      '/assets/produtos/garagem/Garagem em telha galvanizada/TELHA GALVANIZADA (4).jpg'
    ],
    icon: Info,
    features: ['Alta resistência a granizo', 'Proteção UV para veículos', 'Estrutura reforçada', 'Opção termoacústica'],
  },
  {
    id: 'automatico',
    title: 'Toldo Automático',
    shortDescription: 'Conforto e tecnologia com ou sem controle remoto.',
    description: 'O máximo em conforto. Nossos toldos automáticos podem ser acionados por controle remoto ou interruptor. Compatível com sensores de vento e sol para recolhimento automático em caso de tempestade.',
    image: '/assets/produtos/automatico/main.jpg',
    gallery: [
      '/assets/produtos/automatico/1.jpg',
      '/assets/produtos/automatico/2.jpg',
      '/assets/produtos/automatico/toldo automático (1).jpeg',
      '/assets/produtos/automatico/toldo automático (2).jpeg',
      '/assets/produtos/automatico/toldo automático (3).jpg',
      '/assets/produtos/automatico/toldo automático (4).jpg',
      '/assets/produtos/automatico/toldo automático (5).png'
    ],
    icon: Info,
    features: ['Acionamento fácil', 'Sensor de vento opcional', 'Motorização silenciosa', 'Maior vida útil da lona'],
  },

  {
    id: 'fixo',
    title: 'Toldos Fixos e Capotas',
    shortDescription: 'Para passarelas, corredores, janelas e portas.',
    description: 'Ideal para proteção permanente de janelas, portas e vitrines comerciais. As capotas podem ser fixas ou móveis (abre e fecha), adicionando charme e proteção à fachada.',
    image: '/assets/produtos/fixo/main.jpg',
    gallery: [
      '/assets/produtos/fixo/1.jpg',
      '/assets/produtos/fixo/2.jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (1).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (2).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (3).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (4).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (5).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (6).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (7).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (8).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (9).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (10).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (11).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (12).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (13).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (14).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (15).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (16).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (17).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (18).jpg',
      '/assets/produtos/fixo/LONA/T. FX DE LONA (19).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (1).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (2).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (3).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (4).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (5).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (6).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (7).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (8).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (9).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (10).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (11).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (12).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (13).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (14).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (15).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (16).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (17).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (18).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (19).jpg',
      '/assets/produtos/fixo/POLICARBONATO/FIXO DE POLICARBONATO (20).jpg'
    ],
    icon: Info,
    features: ['Capota Reta ou Curva', 'Proteção permanente', 'Ideal para comércios', 'Personalizável com logo'],
  },
  {
    id: 'passarela',
    title: 'Coberturas para Passarelas',
    shortDescription: 'Proteção fixa para corredores e acessos externos.',
    description: 'Coberturas fixas ideais para proteger passarelas, corredores e acessos. Disponíveis em policarbonato ou lona, com estrutura metálica robusta. Perfeitas para condomínios, empresas e áreas comerciais.',
    image: '/assets/produtos/passarela/main.jpg',
    gallery: [
      '/assets/produtos/passarela/1.jpg',
      '/assets/produtos/passarela/2.jpg',
      '/assets/produtos/passarela/3.jpg',
      '/assets/produtos/passarela/PASSARELA (1).jpg',
      '/assets/produtos/passarela/PASSARELA (3).jpg',
      '/assets/produtos/passarela/PASSARELA (4).jpg',
      '/assets/produtos/passarela/PASSARELA (5).jpg',
      '/assets/produtos/passarela/PASSARELA (6).jpg',
      '/assets/produtos/passarela/PASSARELA (7).jpg',
      '/assets/produtos/passarela/PASSARELA (8).jpg',
      '/assets/produtos/passarela/PASSARELA (9).jpg',
      '/assets/produtos/passarela/PASSARELA (10).jpg',
      '/assets/produtos/passarela/PASSARELA (11).jpg',
      '/assets/produtos/passarela/PASSARELA (12).jpg',
      '/assets/produtos/passarela/PASSARELA (13).jpg',
      '/assets/produtos/passarela/PASSARELA (14).jpg',
      '/assets/produtos/passarela/PASSARELA (15).jpg',
      '/assets/produtos/passarela/PASSARELA (16).jpg',
      '/assets/produtos/passarela/PASSARELA (17).jpg',
      '/assets/produtos/passarela/PASSARELA (18).jpg'
    ],
    icon: Info,
    features: ['Estrutura metálica reforçada', 'Proteção permanente', 'Policarbonato ou lona', 'Ideal para condomínios e empresas'],
  },
  {
    id: 'termoforro',
    title: 'Cobertura com Termo Forro',
    shortDescription: 'Isolamento térmico e acústico para conforto total.',
    description: 'Sistema de cobertura com isolamento termo acústico. Ideal para áreas que precisam de conforto térmico e redução de ruídos. Perfeito para áreas de convivência e coberturas residenciais.',
    image: '/assets/produtos/termoforro/main.jpg',
    gallery: [
      '/assets/produtos/termoforro/1.jpg',
      '/assets/produtos/termoforro/2.jpg',
      '/assets/produtos/termoforro/3.jpg',
      '/assets/produtos/termoforro/COBERTURA TERMOFORRO (1).jpg',
      '/assets/produtos/termoforro/COBERTURA TERMOFORRO (2).jpeg',
      '/assets/produtos/termoforro/COBERTURA TERMOFORRO (3).jpeg',
      '/assets/produtos/termoforro/COBERTURA TERMOFORRO (4).jpeg',
      '/assets/produtos/termoforro/COBERTURA TERMOFORRO (5).jpeg'
    ],
    icon: Info,
    features: ['Isolamento térmico', 'Redução acústica', 'Acabamento premium', 'Conforto ambiental'],
  },
];

const Produtos: React.FC = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [imagemAtiva, setImagemAtiva] = useState<string>('');

  const lidarComCliqueProduto = (produto: Produto) => {
    setProdutoSelecionado(produto);
    setImagemAtiva(produto.image);
  };

  const trocarImagem = (img: string) => {
    setImagemAtiva(img);
  };

  const navegarImagem = (direcao: 'anterior' | 'proxima') => {
    if (!produtoSelecionado) return;

    // Array com todas as imagens (principal + galeria)
    const todasImagens = [produtoSelecionado.image, ...produtoSelecionado.gallery];
    const indiceAtual = todasImagens.indexOf(imagemAtiva);

    let novoIndice: number;
    if (direcao === 'anterior') {
      novoIndice = indiceAtual === 0 ? todasImagens.length - 1 : indiceAtual - 1;
    } else {
      novoIndice = indiceAtual === todasImagens.length - 1 ? 0 : indiceAtual + 1;
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
            Oferecemos uma linha completa de toldos e coberturas. Clique nos itens abaixo para ver a galeria de fotos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUTOS.map((produto) => (
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
                  onError={(e) => {
                    // Fallback se a imagem não existir
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/eee/999?text=Foto+Real+Aqui';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-20"></div>

                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <h3 className="font-display text-xl font-bold text-white mb-1">{produto.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-gray-600 mb-6 text-sm">{produto.shortDescription}</p>
                <div className="flex items-center text-brand-red font-bold text-sm uppercase tracking-wide group-hover:underline">
                  Ver Galeria e Detalhes <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes e Galeria */}
      {produtoSelecionado && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setProdutoSelecionado(null)}>
          <div
            className="bg-white w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row animate-[fadeUp_0.3s_ease-out] max-h-[90vh] md:max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Coluna da Galeria (Esquerda/Topo) */}
            <div className="w-full md:w-1/2 bg-black flex flex-col">
              {/* Imagem Principal Ativa */}
              <div className="flex-grow relative h-64 md:h-auto bg-gray-900 flex items-center justify-center overflow-hidden group/image">
                <img
                  src={withBase(imagemAtiva)}
                  alt={produtoSelecionado.title}
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/333/999?text=Foto+Principal'; }}
                  className="w-full h-full object-contain md:object-cover"
                />

                {/* Setas de Navegação - Visible on mobile, hover on desktop */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navegarImagem('anterior');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-brand-red text-white p-3 rounded-full transition-all opacity-40 md:opacity-0 md:group-hover/image:opacity-100 hover:!opacity-100 hover:scale-110 z-10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navegarImagem('proxima');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-brand-red text-white p-3 rounded-full transition-all opacity-40 md:opacity-0 md:group-hover/image:opacity-100 hover:!opacity-100 hover:scale-110 z-10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded text-sm font-medium z-10">
                  {[produtoSelecionado.image, ...produtoSelecionado.gallery].indexOf(imagemAtiva) + 1}/{[produtoSelecionado.image, ...produtoSelecionado.gallery].length}
                </div>
              </div>

              {/* Barra de Miniaturas - Larger touch targets on mobile */}
              <div className="p-4 flex gap-3 overflow-x-auto bg-brand-black/95 border-t border-gray-800 scrollbar-hide">
                {/* Miniatura da Principal */}
                <button
                  onClick={() => trocarImagem(produtoSelecionado.image)}
                  className={`flex-shrink-0 w-24 h-24 md:w-20 md:h-20 rounded border-2 overflow-hidden transition-all ${imagemAtiva === produtoSelecionado.image ? 'border-brand-red opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={withBase(produtoSelecionado.image)} className="w-full h-full object-cover" alt="Principal" />
                </button>

                {/* Miniaturas da Galeria */}
                {produtoSelecionado.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => trocarImagem(img)}
                    className={`flex-shrink-0 w-24 h-24 md:w-20 md:h-20 rounded border-2 overflow-hidden transition-all ${imagemAtiva === img ? 'border-brand-red opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img
                      src={withBase(img)}
                      className="w-full h-full object-cover"
                      alt={`Galeria ${idx + 1}`}
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/333/999?text=Foto'; }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Coluna de Informações (Direita/Baixo) */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display text-3xl font-bold text-brand-black">{produtoSelecionado.title}</h3>
                  <div className="h-1 w-20 bg-brand-red rounded mt-2"></div>
                </div>
                <button
                  onClick={() => setProdutoSelecionado(null)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
                >
                  <ArrowRight size={24} className="rotate-45" />
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
                  <h4 className="font-bold text-brand-black mb-4 text-sm uppercase tracking-wide">Características</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {produtoSelecionado.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-4 text-center uppercase tracking-wide">Gostou deste modelo?</p>
                  <a
                    href={`https://wa.me/5512999999999?text=Olá, gostaria de um orçamento para o produto: ${produtoSelecionado.title}`}
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
