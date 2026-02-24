import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';

interface InicioProps {
  aoNavegar: (pagina: string) => void;
}

const Inicio: React.FC<InicioProps> = ({ aoNavegar }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-brand-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop"
          alt="Toldo Comercial Moderno"
          className="w-full h-full object-cover opacity-50 md:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/60 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 py-32 md:py-0">
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-red/90 text-white rounded mb-6 w-fit">
              <ShieldCheck size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Líder em Taubaté e Região</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-7xl text-white leading-tight tracking-tight mb-6">
              SUPER TOLDOS: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">EXCLUSIVIDADE</span> QUE SUA CASA MERECE.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed mb-8 max-w-xl">
              Há mais de 15 anos atuando no Vale do Paraíba e Litoral Norte. Soluções de proteção e estética com a melhor tecnologia do mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0">
              <button
                onClick={() => aoNavegar('contato')}
                className="px-8 py-4 bg-brand-red text-white font-bold text-center rounded hover:bg-brand-redHover transition-colors shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
              >
                Orçamento Gratuito <ChevronRight size={20} />
              </button>

              <button
                onClick={() => aoNavegar('produtos')}
                className="px-8 py-4 border-2 border-white/20 text-white font-bold text-center rounded hover:bg-white hover:text-brand-black transition-colors"
              >
                Ver Produtos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators - Relative on mobile to prevent overlap, Absolute on desktop */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/80 md:bg-black/40 backdrop-blur-sm md:absolute md:bottom-0 md:left-0">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-8 md:py-6">
          <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3 md:text-left md:gap-12">
            <div className="flex flex-col md:block items-center md:items-start">
              <p className="text-3xl font-display font-bold text-white">15+</p>
              <p className="text-xs text-gray-400 uppercase">Anos no Mercado</p>
            </div>
            <div className="flex flex-col md:block items-center md:items-start">
              <p className="text-3xl font-display font-bold text-white">Solda</p>
              <p className="text-xs text-gray-400 uppercase">Eletrônica Exclusiva</p>
            </div>
            <div className="flex flex-col md:block items-center md:items-start">
              <p className="text-3xl font-display font-bold text-white">100%</p>
              <p className="text-xs text-gray-400 uppercase">Garantia Instalação</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;