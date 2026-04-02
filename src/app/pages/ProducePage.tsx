import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Users,
  Music,
  Sparkles,
  Building2,
  Mic2,
  TrendingUp,
  MapPin,
  Briefcase,
  PartyPopper,
  Cake,
  Trophy,
  MessageCircle,
  Check,
} from "lucide-react";
import estruturaImage from "../../imports/estrutura_01.jpeg";
import heroImage from "../../imports/20250920_195928.jpg";
import galeria1 from "../../imports/22_quadrilha.png";
import galeria2 from "../../imports/feijuca_03.jpeg";
import galeria3 from "../../imports/feuijuca_02.jpeg";
import galeria4 from "../../imports/FORRO_02.jpeg";

const oferecemos = [
  {
    icon: Building2,
    title: "Espaço para Eventos",
    description:
      "Local amplo e estratégico em Natal/RN com capacidade para até 1000 pessoas",
  },
  {
    icon: Music,
    title: "Produção Completa",
    description:
      "Cuidamos de todos os detalhes: conceito, lineup, comunicação e operação",
  },
  {
    icon: Mic2,
    title: "Estrutura Premium",
    description:
      "Palco profissional, sistema de som de alta qualidade e iluminação completa",
  },
  {
    icon: TrendingUp,
    title: "Apoio na Divulgação",
    description:
      "Nossa base consolidada e estratégias de marketing para alavancar seu evento",
  },
];

const tiposEventos = [
  {
    icon: Music,
    title: "Shows e Festivais",
    description:
      "Do forró ao eletrônico, qualquer estilo musical",
  },
  {
    icon: PartyPopper,
    title: "Festas Privadas",
    description: "Casamentos, formaturas e confraternizações",
  },
  {
    icon: Briefcase,
    title: "Eventos Corporativos",
    description: "Convenções, lançamentos e happy hours",
  },
  {
    icon: Cake,
    title: "Aniversários",
    description:
      "Festas de 15 anos, bodas e celebrações especiais",
  },
  {
    icon: Trophy,
    title: "Eventos Esportivos",
    description:
      "Torneios e competições com estrutura completa",
  },
  {
    icon: Sparkles,
    title: "Eventos Temáticos",
    description: "Festas juninas, carnaval e eventos culturais",
  },
];

const estrutura = [
  "Capacidade: até 1.000 pessoas",
  "Área coberta e ao ar livre",
  "Palco profissional 6x4m",
  "Iluminação cênica completa",
  "Bar e cozinha",
  "Banheiros amplos",
  "Estacionamento amplo",
  "Equipe de segurança treinada",
  "Acessibilidade completa",
];

const diferenciais = [
  {
    icon: Users,
    title: "Público Consolidado",
    description:
      "Mais de 17 mil seguidores engajados nas redes sociais",
  },
  {
    icon: Trophy,
    title: "Experiência Comprovada",
    description: "Mais de 30 eventos realizados com sucesso",
  },
  {
    icon: MapPin,
    title: "Localização Estratégica",
    description: "Fácil acesso em região nobre de Natal/RN",
  },
  {
    icon: Sparkles,
    title: "Marca Reconhecida",
    description: "Referência em eventos de qualidade na região",
  },
];

export function ProducePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de produzir um evento.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nTipo de Evento: ${formData.eventType}`;
    const whatsappUrl = `https://wa.me/5584991949451?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const whatsappUrl =
    "https://wa.me/5584991949451?text=Olá!%20Gostaria%20de%20produzir%20um%20evento%20no%20Seu%20Jerimum.";

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Produção de eventos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Produza seu Evento no{" "}
            <span className="text-[#ff6b35]">Seu Jerimum</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Estrutura, público e experiência para fazer seu
            evento acontecer
          </p>
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-xl px-12 py-6 h-auto shadow-2xl shadow-[#25D366]/40"
            asChild
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={24} className="mr-2" />
              Falar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </section>

      {/* O que oferecemos */}
      <section className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              O que{" "}
              <span className="text-[#ff6b35]">Oferecemos</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tudo que você precisa em um só lugar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {oferecemos.map((item, index) => (
              <motion.div
                key={index}
                className="bg-black border border-[#ff6b35]/20 rounded-xl p-8 hover:border-[#ff6b35] transition-all hover:shadow-lg hover:shadow-[#ff6b35]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="bg-[#ff6b35]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <item.icon
                    className="text-[#ff6b35]"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Eventos */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Tipos de{" "}
              <span className="text-[#ff6b35]">Eventos</span>
            </h2>
            <p className="text-xl text-gray-400">
              Realizamos eventos de todos os tipos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiposEventos.map((item, index) => (
              <motion.div
                key={index}
                className="bg-black border border-[#ff6b35]/20 rounded-xl p-6 hover:border-[#ff6b35] transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-[#ff6b35]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <item.icon
                    className="text-[#ff6b35]"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Estrutura */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Nossa{" "}
                <span className="text-[#ff6b35]">
                  Estrutura
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Infraestrutura completa e profissional para
                garantir o sucesso do seu evento
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {estrutura.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                  >
                    <Check
                      className="text-[#ff6b35] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={estruturaImage}
                alt="Estrutura do espaço"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prova Social - Galeria */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Eventos{" "}
              <span className="text-[#ff6b35]">Realizados</span>
            </h2>
            <p className="text-xl text-gray-400">
              Veja a qualidade dos nossos eventos
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[galeria1, galeria2, galeria3, galeria4].map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Evento ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Nossos{" "}
              <span className="text-[#ff6b35]">
                Diferenciais
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Por que escolher o Seu Jerimum?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="bg-[#ff6b35]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon
                    className="text-[#ff6b35]"
                    size={36}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final com Formulário */}
      <section className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Pronto para realizar seu evento?
            </h2>
            <p className="text-xl text-gray-300">
              Preencha o formulário ou fale direto no WhatsApp
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black border border-[#ff6b35]/20 rounded-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white mb-2"
                >
                  Nome completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                  className="bg-[#1a1a1a] border-[#ff6b35]/30 text-white placeholder:text-gray-500 focus:border-[#ff6b35] h-12 text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white mb-2"
                >
                  Telefone/WhatsApp
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(84) 99194-9451"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  required
                  className="bg-[#1a1a1a] border-[#ff6b35]/30 text-white placeholder:text-gray-500 focus:border-[#ff6b35] h-12 text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="eventType"
                  className="block text-white mb-2"
                >
                  Tipo de evento
                </label>
                <Input
                  id="eventType"
                  type="text"
                  placeholder="Ex: Show, Festa privada, Evento corporativo"
                  value={formData.eventType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      eventType: e.target.value,
                    })
                  }
                  required
                  className="bg-[#1a1a1a] border-[#ff6b35]/30 text-white placeholder:text-gray-500 focus:border-[#ff6b35] h-12 text-lg"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg py-6 h-auto"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Enviar via WhatsApp
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white text-lg py-6 h-auto"
                  asChild
                >
                  <a href="/contato">Outros Contatos</a>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}