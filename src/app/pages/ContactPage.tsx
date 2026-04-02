import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em produção, aqui enviaria os dados para um servidor
    console.log("Form submitted:", formData);
    alert(
      "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const whatsappNumber = "5584991949451";
  const whatsappMessage =
    "Olá! Gostaria de mais informações sobre eventos do Seu Jerimum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Entre em{" "}
              <span className="text-[#ff6b35]">Contato</span>
            </h1>
            <p className="text-xl text-gray-300">
              Estamos aqui para ajudar. Fale conosco!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-black text-white mb-8">
                Nossos Contatos
              </h2>

              {/* WhatsApp destacado */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-8 bg-gradient-to-r from-[#25D366] to-[#20BA5A] rounded-xl p-6 hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <MessageCircle
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">
                      Fale conosco agora
                    </p>
                    <p className="text-xl font-bold text-white">
                      WhatsApp
                    </p>
                    <p className="text-white/90">
                      (84) 99194-9451
                    </p>
                  </div>
                </div>
              </a>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-[#1a1a1a] border border-[#ff6b35]/20 rounded-lg p-6">
                  <MapPin
                    className="text-[#ff6b35] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Endereço
                    </h3>
                    <p className="text-gray-400">
                      R. José Ferreira Sobrinho, 100 - Parque
                      das Colinas
                      <br />
                      Natal/RN - CEP 59066-010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#1a1a1a] border border-[#ff6b35]/20 rounded-lg p-6">
                  <Phone
                    className="text-[#ff6b35] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Telefone
                    </h3>
                    <p className="text-gray-400">
                      (84) 99194-9451
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#1a1a1a] border border-[#ff6b35]/20 rounded-lg p-6">
                  <Mail
                    className="text-[#ff6b35] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      E-mail
                    </h3>
                    <p className="text-gray-400">
                      seujerimum@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Siga-nos
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/seujerimum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] p-4 rounded-full hover:scale-110 transition-transform"
                    aria-label="Instagram"
                  >
                    <Instagram
                      size={24}
                      className="text-white"
                    />
                  </a>
                  <a
                    href="https://facebook.com/seujerimum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] p-4 rounded-full hover:scale-110 transition-transform"
                    aria-label="Facebook"
                  >
                    <Facebook
                      size={24}
                      className="text-white"
                    />
                  </a>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="mt-8 bg-[#1a1a1a] border border-[#ff6b35]/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-gray-400">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 10h às 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa (Placeholder) */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-8 text-center">
              Nossa Localização
            </h2>
            <div className="rounded-lg overflow-hidden border border-[#ff6b35]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.0877671704934!2d-35.22318992540077!3d-5.843253657584967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2559b5f83dc49%3A0x29dc29ab17bd3872!2sSeu%20Jerimum!5e0!3m2!1spt-BR!2sbr!4v1775141715511!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}