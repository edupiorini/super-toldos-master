import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';

interface MenuProps {
  paginaAtual: string;
  aoNavegar: (pagina: string) => void;
}

const Menu: React.FC<MenuProps> = ({ paginaAtual, aoNavegar }) => {
  const [estaRolando, setEstaRolando] = useState(false);
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  useEffect(() => {
    const manipularRolagem = () => {
      setEstaRolando(window.scrollY > 20);
    };
    window.addEventListener('scroll', manipularRolagem);
    return () => window.removeEventListener('scroll', manipularRolagem);
  }, []);

  const linksNavegacao = [
    { nome: 'Início', id: 'inicio' },
    { nome: 'Empresa', id: 'sobre' },
    { nome: 'Produtos', id: 'produtos' },
  ];

  const lidarComClique = (idPagina: string) => {
    aoNavegar(idPagina);
    setMenuMobileAberto(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
          estaRolando || menuMobileAberto || paginaAtual !== 'inicio'
            ? 'bg-white shadow-md py-3 border-b border-gray-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button onClick={() => lidarComClique('inicio')} className="group relative z-50 flex items-center gap-1 text-left">
              <div className="flex flex-col leading-none">
                <span className={`font-display text-2xl font-extrabold uppercase tracking-tight transition-colors ${
                  estaRolando || menuMobileAberto || paginaAtual !== 'inicio' ? 'text-brand-black' : 'text-white'
                }`}>
                  Super
                </span>
                <span className="font-display text-xl font-bold uppercase tracking-wider text-brand-red">
                  Toldos
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {linksNavegacao.map((link) => (
                <button
                  key={link.id}
                  onClick={() => lidarComClique(link.id)}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 hover:text-brand-red ${
                    paginaAtual === link.id 
                      ? 'text-brand-red' 
                      : (estaRolando || paginaAtual !== 'inicio' ? 'text-gray-700' : 'text-white/90')
                  }`}
                >
                  {link.nome}
                </button>
              ))}
              <button
                onClick={() => lidarComClique('contato')}
                className="px-6 py-2.5 rounded bg-brand-red text-white text-sm font-bold uppercase tracking-wide transition-all hover:bg-brand-redHover shadow-lg hover:shadow-red-900/20"
              >
                Orçamento
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50 flex items-center gap-4">
              <button
                onClick={() => setMenuMobileAberto(!menuMobileAberto)}
                className={`p-2 transition-colors ${
                  estaRolando || menuMobileAberto || paginaAtual !== 'inicio' ? 'text-brand-black' : 'text-white'
                }`}
              >
                {menuMobileAberto ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${menuMobileAberto ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col pt-24 px-8 space-y-6">
          {linksNavegacao.map((link) => (
            <button
              key={link.id}
              onClick={() => lidarComClique(link.id)}
              className={`text-left font-display text-3xl font-bold border-b border-gray-100 pb-4 ${
                paginaAtual === link.id ? 'text-brand-red' : 'text-gray-800'
              }`}
            >
              {link.nome}
            </button>
          ))}
          <button
            onClick={() => lidarComClique('contato')}
            className="mt-8 py-4 bg-brand-red text-white text-center rounded text-lg font-bold uppercase tracking-wide shadow-xl w-full"
          >
            Falar com Vendas
          </button>
          
          <div className="mt-auto mb-10 text-gray-500">
             <p className="flex items-center gap-2 mb-2"><Phone size={18} /> (12) 98153-8545 </p>
             <p>Taubaté - SP</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;