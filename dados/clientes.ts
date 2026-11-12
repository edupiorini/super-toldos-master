export type Cliente = {
  slug: string;
  nome: string;
  arquivo: string;
  largura: number;
  altura: number;
  vertical?: boolean;
};

// Ordem confirmada pelo Eduardo. Preferimos SVG quando existe.
export const clientes: Cliente[] = [
  { slug: 'daido', nome: 'D.I.D. Daido', arquivo: 'daido.webp', largura: 506, altura: 160 },
  { slug: 'mubea', nome: 'Mubea do Brasil', arquivo: 'mubea.svg', largura: 284, altura: 71 },
  { slug: 'lg', nome: 'LG', arquivo: 'lg.svg', largura: 225, altura: 99 },
  { slug: 'hotel-fazenda-mazzaropi', nome: 'Hotel Fazenda Mazzaropi', arquivo: 'hotel-fazenda-mazzaropi.webp', largura: 531, altura: 160 },
  { slug: 'viapol', nome: 'Viapol', arquivo: 'viapol.webp', largura: 322, altura: 160 },
  { slug: 'cavex', nome: 'Comando de Aviação do Exército (CAvEx)', arquivo: 'cavex.webp', largura: 120, altura: 160, vertical: true },
  { slug: 'yakult', nome: 'Yakult', arquivo: 'yakult.svg', largura: 213, altura: 61 },
  { slug: 'pinese-vieira', nome: 'Pinese Vieira', arquivo: 'pinese-vieira.webp', largura: 496, altura: 160 },
  { slug: 'unitau', nome: 'Universidade de Taubaté (UNITAU)', arquivo: 'unitau.svg', largura: 235, altura: 298, vertical: true },
  { slug: 'anhanguera', nome: 'Anhanguera', arquivo: 'anhanguera.svg', largura: 170, altura: 60 },
];
