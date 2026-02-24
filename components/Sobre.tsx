import React from 'react';
import { ShieldCheck, Zap, PenTool, MapPin } from 'lucide-react';

const Sobre: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white fade-up overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 py-16 mb-16 border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-brand-black mb-4">
            Sobre a <span className="text-brand-red">Super Toldos</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Atuando há mais de 15 anos no Vale do Paraíba e Litoral Norte (SP), nos consolidamos como referência em soluções de proteção e estética.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="font-display text-3xl font-bold text-brand-black">
              Experiência Comprovada e Tecnologia Única
            </h2>
            <div className="h-1 w-20 bg-brand-red rounded"></div>
            
            <p className="text-gray-600 leading-relaxed">
              Nosso compromisso é oferecer o melhor atendimento, produtos da mais alta qualidade com preços justos e facilidade no pagamento. Atendemos clientes residenciais, comerciais e industriais em <strong>Taubaté e toda a região</strong>, garantindo durabilidade e excelência em cada projeto.
            </p>
            
            <div className="bg-brand-red/5 border-l-4 border-brand-red p-4 my-4">
              <h4 className="font-bold text-brand-black flex items-center gap-2 mb-1">
                <Zap size={18} className="text-brand-red" /> 
                Tecnologia Exclusiva em Taubaté
              </h4>
              <p className="text-sm text-gray-700">
                Somos a única empresa em Taubaté a utilizar o sistema de <strong>solda eletrônica</strong> para as emendas de lonas em PVC, assegurando maior resistência e um acabamento visualmente superior.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
               Trabalhamos com os melhores materiais do mercado, como Policarbonato, Lona Vinílica (PVC), Alumínio e Galvanizado, garantindo que seu investimento dure por muitos anos.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2 px-4 lg:px-0">
             {/* Image Composition */}
             <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1621503460593-014c27a20c9a?q=80&w=2670&auto=format&fit=crop" 
                 alt="Solda Eletrônica e Acabamento" 
                 className="w-full h-full object-cover"
               />
             </div>
             {/* Decorative elements - adjusted for mobile safety */}
             <div className="hidden md:block absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-brand-black -z-0 rounded-lg"></div>
             <div className="hidden md:block absolute -top-6 -left-6 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-red mb-6">
                    <PenTool size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-black mb-3">Soluções Sob Medida</h3>
                <p className="text-gray-600 text-sm">
                    Da visita técnica à instalação, criamos projetos 100% personalizados que unem proteção, durabilidade e design alinhados à sua necessidade.
                </p>
            </div>
            
            <div className="p-8 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-red mb-6">
                    <ShieldCheck size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-black mb-3">Qualidade e Garantia</h3>
                <p className="text-gray-600 text-sm">
                    Todos os nossos produtos e serviços possuem garantia de fabricação e instalação. Utilizamos materiais de alta resistência.
                </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-red mb-6">
                    <MapPin size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-black mb-3">Atendimento Regional</h3>
                <p className="text-gray-600 text-sm">
                    Forte presença em Taubaté, Vale do Paraíba e Litoral Norte. Conhecemos as necessidades específicas do clima da nossa região.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;