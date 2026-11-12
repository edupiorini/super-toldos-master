import React from 'react';
import { clientes } from '../dados/clientes';

const Clientes: React.FC = () => {
  return (
    <section id="clientes" className="py-16 md:py-20 bg-white" aria-labelledby="clientes-titulo">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="clientes-titulo" className="font-display font-bold text-3xl md:text-4xl text-brand-black mb-4">
            Nossos clientes
          </h2>
          <div className="h-1 w-16 bg-brand-red rounded mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empresas e instituições que confiam na Super Toldos
          </p>
        </div>

        <ul role="list" className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 md:gap-y-10">
          {clientes.map((cliente) => (
            <li
              key={cliente.slug}
              className={
                cliente.vertical
                  ? 'flex items-center justify-center px-2 min-w-0 min-h-14 sm:min-h-16 lg:min-h-20'
                  : 'flex items-center justify-center px-2 min-w-0 min-h-10 sm:min-h-12 lg:min-h-14'
              }
            >
              <img
                src={`/assets/clientes/${cliente.arquivo}`}
                alt={cliente.nome}
                width={cliente.largura}
                height={cliente.altura}
                loading="lazy"
                decoding="async"
                className={
                  cliente.vertical
                    ? 'h-14 sm:h-16 lg:h-20 w-auto max-w-[min(8.5rem,100%)] lg:max-w-[min(10rem,100%)] object-contain'
                    : 'h-10 sm:h-12 lg:h-14 w-auto max-w-[min(8.5rem,100%)] lg:max-w-[min(10rem,100%)] object-contain'
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clientes;
