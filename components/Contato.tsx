import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram } from 'lucide-react';
import { PedidoOrcamento } from '../tipos';

const Contato: React.FC = () => {
  const [formulario, setFormulario] = useState<PedidoOrcamento>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Toldo Cortina (Retrátil)',
    message: ''
  });

  // Coloque o número do WhatsApp da empresa aqui (Apenas números, com DDD)
  const WHATSAPP_NUMBER = "5512999999999";

  const lidarComEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Formata a mensagem
    const mensagemFormatada = `
*NOVA SOLICITAÇÃO DE ORÇAMENTO (VIA SITE)*
-----------------------------------
👤 *Nome:* ${formulario.name}
📱 *Telefone:* ${formulario.phone}
📧 *Email:* ${formulario.email}
🛠 *Interesse:* ${formulario.serviceType}
-----------------------------------
💬 *Mensagem:* 
${formulario.message}
    `.trim();

    // 2. Cria o link do WhatsApp
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagemFormatada)}`;

    // 3. Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');

    // 4. Limpa o formulário (opcional)
    setFormulario({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Toldo Cortina (Retrátil)',
      message: ''
    });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="space-y-8">
            <div>
              <h2 className="font-display font-bold text-4xl text-brand-black mb-4">
                Fale Conosco
              </h2>
              <p className="text-gray-600 text-lg">
                Preencha o formulário ao lado e nós receberemos sua mensagem diretamente no WhatsApp para um atendimento mais rápido.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">Telefone / WhatsApp</h3>
                  <p className="text-gray-600">Priorizamos atendimento via WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-red">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">E-mail</h3>
                  <p className="text-gray-600">contato@supertoldos.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">Endereço Principal</h3>
                  <p className="text-gray-600 text-sm">Estrada municipal Itapecerica, 1460.<br />Bairro: Chácaras das Flores. Taubaté - SP.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-red">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">Instagram</h3>
                  <a href="https://www.instagram.com/super.toldostaubate/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">@super.toldostaubate</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="bg-brand-black p-8 md:p-10 rounded-2xl shadow-2xl text-white relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red rounded-bl-full opacity-20"></div>

              <form onSubmit={lidarComEnvio} className="space-y-6 relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle size={24} className="text-green-400" /> Solicitar Orçamento
                </h3>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">Nome</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all"
                    placeholder="Seu nome"
                    value={formulario.name}
                    onChange={(e) => setFormulario({ ...formulario, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">Telefone / Zap</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all"
                      placeholder="(12) 99999-9999"
                      value={formulario.phone}
                      onChange={(e) => setFormulario({ ...formulario, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all"
                      placeholder="seu@email.com"
                      value={formulario.email}
                      onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">Interesse</label>
                  <select
                    className="w-full bg-white/10 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all [&>option]:text-black"
                    value={formulario.serviceType}
                    onChange={(e) => setFormulario({ ...formulario, serviceType: e.target.value })}
                  >
                    <option>Toldo Cortina (Retrátil)</option>
                    <option>Toldo Automático</option>
                    <option>Cobertura Garagem (Policarbonato/Lona)</option>
                    <option>Toldos Fixos e Capotas</option>
                    <option>Coberturas para Passarelas</option>
                    <option>Cobertura com Termo Forro</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">Mensagem</label>
                  <textarea
                    rows={3}
                    className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all resize-none"
                    placeholder="Descreva o que você precisa..."
                    value={formulario.message}
                    onChange={(e) => setFormulario({ ...formulario, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-red text-white font-bold uppercase tracking-wide rounded hover:bg-white hover:text-brand-red transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Enviar para WhatsApp <Send size={18} />
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">
                  Ao clicar, você será redirecionado para o WhatsApp da empresa.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;