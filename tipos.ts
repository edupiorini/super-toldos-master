import { LucideIcon } from 'lucide-react';

export interface Produto {
  id: string;
  title: string;
  shortDescription: string;
  description: string; // Descrição fixa em vez de IA
  image: string; // Imagem principal
  gallery: string[]; // Lista de imagens da galeria
  icon: LucideIcon;
  features: string[];
}

export interface PedidoOrcamento {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export enum EstadoCarregamento {
  OCIOSO = 'IDLE',
  CARREGANDO = 'LOADING',
  SUCESSO = 'SUCCESS',
  ERRO = 'ERROR'
}