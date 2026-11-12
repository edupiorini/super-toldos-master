import { Produto } from "../tipos";

export const SITE_URL = "https://www.supertoldos.com.br";

export const META_PADRAO = {
  title: "Toldos e Coberturas em Taubaté | Super Toldos",
  description:
    "Super Toldos em Taubaté-SP: fabricação e instalação de toldos e coberturas no Vale do Paraíba e Litoral Norte. Orçamento grátis no WhatsApp.",
};

export const META_CATALOGO = {
  title: "Catálogo de Produtos | Super Toldos",
  description:
    "Linha completa de toldos e coberturas em Taubaté, Vale do Paraíba e Litoral Norte. Veja a galeria e peça orçamento grátis no WhatsApp.",
};

export const PAGINAS_ESTATICAS = ["/", "/sobre", "/produtos", "/contato"] as const;

/** Dados do catálogo, sem caminhos de foto. A pasta é lida automaticamente. */
export type ItemCatalogo = Omit<Produto, "image" | "gallery"> & {
  pasta: string;
  capa?: string;
};

export const CATALOGO: ItemCatalogo[] = [
  {
    id: "cortina",
    slug: "toldo-cortina",
    pasta: "cortina",
    capa: "COM VISOR/Cortina retrátil COM VISOR (2).webp",
    ativo: true,
    pageTitle: "Toldo Cortina em Taubaté | Super Toldos",
    metaDescription: "Toldo cortina retrátil vertical para varandas e áreas gourmet, com proteção contra sol e chuva. Fabricação e instalação em Taubaté, Vale do Paraíba e Litoral Norte. Orçamento grátis no WhatsApp.",
    rotuloInteresse: "Toldo Cortina (Retrátil)",
    title: "Toldo Cortina",
    shortDescription: "Retrátil vertical. Ideal para varandas e áreas gourmet.",
    description:
      "O Toldo Cortina é a solução perfeita para quem busca proteção contra sol e chuva sem perder a visão externa. Com acionamento vertical, ele funciona como uma parede móvel, ideal para fechar varandas, áreas de churrasqueira e corredores. Fabricado com lona de alta resistência e solda eletrônica.",
    features: [
      "Proteção contra sol e chuva",
      "Acionamento manual ou motorizado",
      "Visor transparente opcional",
      "Lona PVC com Solda Eletrônica",
    ],
  },
  {
    id: "garagem",
    slug: "cobertura-de-garagem",
    pasta: "garagem",
    ativo: true,
    pageTitle: "Coberturas para Garagem em Taubaté | Super Toldos",
    metaDescription: "Coberturas para garagem em policarbonato, lona ou telha galvanizada. Fabricação e instalação em Taubaté, Vale do Paraíba e Litoral Norte. Orçamento grátis no WhatsApp.",
    rotuloInteresse: "Cobertura Garagem (Policarbonato/Lona)",
    title: "Coberturas para Garagem",
    shortDescription:
      "Proteção para veículos em policarbonato, lona ou galvanizado.",
    description:
      "Proteja seu veículo do sol e granizo com nossas coberturas especializadas. Estruturas robustas projetadas para durar, disponíveis em Policarbonato (para luminosidade), Telha Galvanizada (máxima durabilidade) ou Lona Tensionada.",
    features: [
      "Alta resistência a granizo",
      "Proteção UV para veículos",
      "Estrutura reforçada",
      "Opção termoacústica",
    ],
  },
  {
    id: "automatico",
    slug: "toldo-automatico",
    pasta: "automatico",
    ativo: true,
    pageTitle: "Toldo Automático em Taubaté | Super Toldos",
    metaDescription: "Toldos automáticos com acionamento por controle remoto ou interruptor e sensor de vento opcional. Fabricação e instalação em Taubaté, Vale do Paraíba e Litoral Norte. Orçamento grátis no WhatsApp.",
    rotuloInteresse: "Toldo Automático",
    title: "Toldo Automático",
    shortDescription: "Conforto e tecnologia com ou sem controle remoto.",
    description:
      "O máximo em conforto. Nossos toldos automáticos podem ser acionados por controle remoto ou interruptor. Compatível com sensores de vento e sol para recolhimento automático em caso de tempestade.",
    features: [
      "Acionamento fácil",
      "Sensor de vento opcional",
      "Motorização silenciosa",
      "Maior vida útil da lona",
    ],
  },
  {
    id: "fixo",
    slug: "toldos-fixos",
    pasta: "fixo",
    ativo: true,
    pageTitle: "Toldos Fixos em Taubaté | Super Toldos",
    metaDescription: "Toldos fixos em lona ou policarbonato para janelas, portas e vitrines. Fabricação e instalação em Taubaté, Vale do Paraíba e Litoral Norte. Orçamento grátis no WhatsApp.",
    rotuloInteresse: "Toldos Fixos",
    title: "Toldos Fixos",
    shortDescription:
      "Proteção permanente para janelas, portas e vitrines, em lona ou policarbonato.",
    description:
      "O toldo fixo é indicado para quem precisa de proteção permanente contra sol e chuva em janelas, portas e vitrines. Fabricamos sob medida em lona ou policarbonato, para uso residencial e comercial.",
    features: [
      "Proteção permanente",
      "Lona ou policarbonato",
      "Ideal para residências e comércios",
      "Personalizável com logo",
    ],
  },
  {
    id: "passarela",
    slug: "coberturas-para-passarelas",
    pasta: "passarela",
    ativo: true,
    pageTitle: "Coberturas para Passarelas em Taubaté | Super Toldos",
    metaDescription: "Coberturas fixas para passarelas, corredores e acessos, em policarbonato ou lona. Fabricação e instalação em Taubaté, Vale do Paraíba e Litoral Norte. Orçamento grátis no WhatsApp.",
    rotuloInteresse: "Coberturas para Passarelas",
    title: "Coberturas para Passarelas",
    shortDescription: "Proteção fixa para corredores e acessos externos.",
    description:
      "Coberturas fixas ideais para proteger passarelas, corredores e acessos. Disponíveis em policarbonato ou lona, com estrutura metálica robusta. Perfeitas para condomínios, empresas e áreas comerciais.",
    features: [
      "Estrutura metálica reforçada",
      "Proteção permanente",
      "Policarbonato ou lona",
      "Ideal para condomínios e empresas",
    ],
  },
  {
    id: "termoforro",
    slug: "cobertura-com-termo-forro",
    pasta: "termoforro",
    ativo: true,
    pageTitle: "Cobertura com Termo Forro em Taubaté | Super Toldos",
    metaDescription: "Cobertura com termo forro para isolamento térmico e redução de ruídos. Fabricação e instalação em Taubaté, Vale do Paraíba e Litoral Norte. Orçamento grátis no WhatsApp.",
    rotuloInteresse: "Cobertura com Termo Forro",
    title: "Cobertura com Termo Forro",
    shortDescription: "Isolamento térmico e acústico para conforto total.",
    description:
      "Sistema de cobertura com isolamento termo acústico. Ideal para áreas que precisam de conforto térmico e redução de ruídos. Perfeito para áreas de convivência e coberturas residenciais.",
    features: [
      "Isolamento térmico",
      "Redução acústica",
      "Acabamento premium",
      "Conforto ambiental",
    ],
  },

  {
    id: "capotas",
    slug: "capotas-retrateis",
    pasta: "capotas",
    ativo: true,
    pageTitle: "Capotas Retráteis em Taubaté | Super Toldos",
    metaDescription: "Capotas retráteis que abrem e fecham, nos modelos reta ou curva. Fabricação e instalação em Taubaté, Vale do Paraíba e Litoral Norte. Orçamento grátis no WhatsApp.",
    rotuloInteresse: "Capotas Retráteis",
    title: "Capotas Retráteis",
    shortDescription: "Capotas que abrem e fecham, para janelas, portas e fachadas.",
    description:
      "A capota retrátil protege janelas, portas e fachadas e pode ser aberta ou recolhida conforme a necessidade. Disponível nos modelos reta ou curva, sob medida para residências e comércios.",
    features: [
      "Abre e fecha",
      "Modelo reto ou curvo",
      "Proteção para janelas, portas e fachadas",
      "Sob medida",
    ],
  },
];


/** Capa: arquivo informado, senão main.webp, senão a primeira foto da pasta. */
export const caminhoCapa = (
  pasta: string,
  capa: string | undefined,
  fotos: string[],
): string => {
  if (capa) {
    const informada = `/assets/produtos/${pasta}/${capa}`;
    if (fotos.includes(informada)) return informada;
  }
  const principal = `/assets/produtos/${pasta}/main.webp`;
  if (fotos.includes(principal)) return principal;
  return fotos[0] ?? "";
};

export const itensAtivos = (): ItemCatalogo[] => CATALOGO.filter((p) => p.ativo);
