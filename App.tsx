import React, { useState } from 'react';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import { Instagram, Facebook, MessageCircle, FileText, Ruler, HardHat, CheckCircle } from 'lucide-react';

const Rodape: React.FC<{ aoNavegar: (pagina: string) => void }> = ({ aoNavegar }) => {
  return (
    <footer className="bg-brand-black text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display text-2xl font-bold text-white block mb-4">
              SUPER<span className="text-brand-red">TOLDOS</span>
            </span>
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              Há mais de 15 anos oferecendo o melhor em coberturas e toldos.
              Qualidade garantida e instalação especializada em Taubaté, Vale do Paraíba e Litoral Norte.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/super.toldostaubate/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Produtos</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => aoNavegar('produtos')} className="hover:text-brand-red transition-colors text-left">Toldo Cortina</button></li>
              <li><button onClick={() => aoNavegar('produtos')} className="hover:text-brand-red transition-colors text-left">Cobertura de Garagem</button></li>
              <li><button onClick={() => aoNavegar('produtos')} className="hover:text-brand-red transition-colors text-left">Toldo Automático</button></li>
              <li><button onClick={() => aoNavegar('produtos')} className="hover:text-brand-red transition-colors text-left">Toldos Fixos e Capotas</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => aoNavegar('sobre')} className="hover:text-brand-red transition-colors text-left">Nossa História</button></li>
              <li><button onClick={() => aoNavegar('sobre')} className="hover:text-brand-red transition-colors text-left">Solda Eletrônica</button></li>
              <li><button onClick={() => aoNavegar('contato')} className="hover:text-brand-red transition-colors text-left">Solicitar Visita</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Super Toldos. Estrada municipal Itapecerica, 1460 - Taubaté/SP.</p>
        </div>
      </div>
    </footer>
  );
};

const BotaoWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5512981538545"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] transition-transform hover:scale-110 flex items-center gap-2 group"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
        Orçamento no Zap
      </span>
    </a>
  );
};

const SecaoProcesso: React.FC = () => {
  const etapas = [
    { icon: FileText, titulo: 'Orçamento Fácil', desc: 'Solicite online ou via WhatsApp.' },
    { icon: Ruler, titulo: 'Visita Técnica', desc: 'Gratuita para medidas e análise.' },
    { icon: HardHat, titulo: 'Projeto & Fabricação', desc: 'Sob medida com materiais premium.' },
    { icon: CheckCircle, titulo: 'Instalação', desc: 'Garantia e acabamento perfeito.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-black mb-4">
            Como Funciona
          </h2>
          <div className="h-1 w-16 bg-brand-red rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {etapas.map((etapa, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-brand-red mb-6 border-2 border-transparent group-hover:border-brand-red transition-colors">
                <etapa.icon size={28} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{etapa.titulo}</h3>
              <p className="text-gray-600 text-sm">{etapa.desc}</p>
              {idx !== etapas.length - 1 && (
                <div className="hidden lg:block absolute transform translate-x-32 translate-y-8 w-24 border-t-2 border-dashed border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type Pagina = 'inicio' | 'sobre' | 'produtos' | 'contato';

const App: React.FC = () => {
  const [paginaAtual, setPaginaAtual] = useState<Pagina>('inicio');

  const navegarPara = (pagina: string) => {
    setPaginaAtual(pagina as Pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'inicio':
        return (
          <>
            <Inicio aoNavegar={navegarPara} />
            <SecaoProcesso />
            <Produtos />
            <Contato />
          </>
        );
      case 'sobre':
        return <Sobre />;
      case 'produtos':
        return (
          <div className="pt-24 min-h-screen">
            <div className="bg-gray-50 py-16 border-b border-gray-100">
              <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
                <h1 className="font-display font-extrabold text-4xl md:text-5xl text-brand-black mb-4">
                  Catálogo de <span className="text-brand-red">Produtos</span>
                </h1>
              </div>
            </div>
            <Produtos />
            <div className="bg-brand-black py-20 mt-12 text-center text-white">
              <h2 className="text-3xl font-display font-bold mb-6">Não encontrou o que procura?</h2>
              <p className="mb-8 text-gray-300">Fazemos projetos sob medida para sua necessidade.</p>
              <button onClick={() => navegarPara('contato')} className="bg-brand-red px-8 py-3 rounded font-bold uppercase hover:bg-white hover:text-brand-red transition-colors">
                Fale com um consultor
              </button>
            </div>
          </div>
        );
      case 'contato':
        return (
          <div className="pt-24 min-h-screen">
            <Contato />
          </div>
        );
      default:
        return <Inicio aoNavegar={navegarPara} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Menu paginaAtual={paginaAtual} aoNavegar={navegarPara} />
      <main className="flex-grow">
        {renderizarPagina()}
      </main>
      <Rodape aoNavegar={navegarPara} />
      <BotaoWhatsApp />
    </div>
  );
};

export default App;