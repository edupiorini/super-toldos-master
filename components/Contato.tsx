import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Instagram,
  Clock,
  Star,
  Navigation,
} from "lucide-react";
import { PedidoOrcamento } from "../tipos";

const Contato: React.FC = () => {
  const [formulario, setFormulario] = useState<PedidoOrcamento>({
    name: "",
    email: "",
    phone: "",
    serviceType: "Toldo Cortina (Retrátil)",
    message: "",
  });

  // Coloque o número do WhatsApp da empresa aqui (Apenas números, com DDD)
  const WHATSAPP_NUMBER = "5512981538545";

  // Perfil da empresa no Google Maps (avaliações e rota)
  const GOOGLE_MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=Super+Toldos+Taubat%C3%A9";
  const GOOGLE_MAPS_ROTA =
    "https://www.google.com/maps/dir/?api=1&destination=Super+Toldos+Taubat%C3%A9";
  const GOOGLE_MAPS_EMBED =
    "https://www.google.com/maps?q=Super+Toldos,+Estr.+Mun.+Itapecirica,+1460,+Taubat%C3%A9+-+SP&output=embed";

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
    window.open(url, "_blank");

    // 4. Limpa o formulário (opcional)
    setFormulario({
      name: "",
      email: "",
      phone: "",
      serviceType: "Toldo Cortina (Retrátil)",
      message: "",
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
                <span className="lg:hidden">Preencha e enviaremos no WhatsApp.</span>
                <span className="hidden lg:inline">
                  Preencha o formulário ao lado e nós receberemos sua mensagem
                  diretamente no WhatsApp para um atendimento mais rápido.
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">
                    Telefone / WhatsApp
                  </h3>
                  <a
                    href="tel:+5512981538545"
                    className="text-brand-red font-bold hover:underline inline-block py-2"
                  >
                    (12) 98153-8545
                  </a>
                  <p className="text-gray-600 text-sm">
                    Priorizamos atendimento via WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-red">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">E-mail</h3>
                  <a
                    href="mailto:supertoldos2@gmail.com"
                    className="text-brand-red hover:underline inline-block py-2"
                  >
                    supertoldos2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">
                    Endereço Principal
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Estrada municipal Itapecerica, 1460.
                    <br />
                    Bairro: Chácaras das Flores. Taubaté - SP.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-red">
                  <Clock size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">
                    Horário de Atendimento
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Segunda a quinta: 8h às 17h30
                    <br />
                    Sexta: 8h às 16h30
                    <br />
                    Sábado e domingo: fechado
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-red">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">Instagram</h3>
                  <a
                    href="https://www.instagram.com/super.toldostaubate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline inline-block py-2"
                  >
                    @super.toldostaubate
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="bg-brand-black p-8 md:p-10 rounded-2xl shadow-2xl text-white relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red rounded-bl-full opacity-20"></div>

              <form
                onSubmit={lidarComEnvio}
                className="space-y-6 relative z-10"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle size={24} className="text-green-400" />{" "}
                  Solicitar Orçamento
                </h3>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">
                    Nome
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all"
                    placeholder="Seu nome"
                    value={formulario.name}
                    onChange={(e) =>
                      setFormulario({ ...formulario, name: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">
                      Telefone / Zap
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all"
                      placeholder="(12) 99999-9999"
                      value={formulario.phone}
                      onChange={(e) =>
                        setFormulario({ ...formulario, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all"
                      placeholder="seu@email.com"
                      value={formulario.email}
                      onChange={(e) =>
                        setFormulario({ ...formulario, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="campo-interesse"
                    className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1"
                  >
                    Interesse
                  </label>
                  <select
                    id="campo-interesse"
                    className="w-full bg-white/10 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all [&>option]:text-black"
                    value={formulario.serviceType}
                    onChange={(e) =>
                      setFormulario({
                        ...formulario,
                        serviceType: e.target.value,
                      })
                    }
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
                  <label className="block text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-white/10 border border-white/20 rounded p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all resize-none"
                    placeholder="Descreva o que você precisa..."
                    value={formulario.message}
                    onChange={(e) =>
                      setFormulario({ ...formulario, message: e.target.value })
                    }
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

        <div className="mt-16">
          <h2 className="font-display font-bold text-3xl text-brand-black mb-2">
            Onde Estamos
          </h2>
          <p className="text-gray-600 mb-6">
            Veja como chegar e o que nossos clientes dizem sobre a Super Toldos
            no Google.
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              title="Mapa da Super Toldos em Taubaté"
              src={GOOGLE_MAPS_EMBED}
              className="w-full h-72 md:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-6 py-3 bg-brand-red border-2 border-brand-red text-white font-bold rounded flex items-center justify-center gap-2 hover:bg-brand-black hover:border-brand-black transition-all"
            >
              <Star size={18} aria-hidden="true" /> Ver avaliações no Google
            </a>
            <a
              href={GOOGLE_MAPS_ROTA}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-6 py-3 border-2 border-brand-black text-brand-black font-bold rounded flex items-center justify-center gap-2 hover:bg-brand-black hover:text-white transition-all"
            >
              <Navigation size={18} aria-hidden="true" /> Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
