import { useParams } from "react-router";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Ticket,
  Users,
  UtensilsCrossed,
  Info,
  Instagram,
} from "lucide-react";
import logoForro from "figma:asset/71519efb38234f0252fbca7335ce606f6a9794f4.png";
import logoFeijuca from "figma:asset/58b84834ef8115b854613a80a4a211f533f784be.png";
import logoIngresseria from "../../imports/logo-removebg-preview.png";
import feijucaImage from "../../imports/FEIJUCA.png";
import forroImage from "../../imports/13_quadrilha-2.png";
import forro1 from "../../imports/_MG_8481_2.jpg";
import forro2 from "../../imports/_MG_8500_1.jpg";
import forro3 from "../../imports/3_de_coracao_interna.png";
import forro4 from "../../imports/7_vila_seu_jerimum.png";
import forro5 from "../../imports/13_quadrilha.png";
import feijuca1 from "../../imports/feijuca_03-1.jpeg";
import feijuca2 from "../../imports/feijuca_05.jpeg";
import feijuca3 from "../../imports/feuijuca_02-1.jpeg";
import feijuca4 from "../../imports/feuijuca-1.jpeg";

// Mock data - em produção viria de uma API ou banco de dados
const eventsData: Record<string, any> = {
  "forro-do-seu-jerimum": {
    title: "Forró do Seu Jerimum",
    logo: logoForro,
    instagramHandle: "@forrodoseujerimum",
    instagramUrl: "https://instagram.com/forrodoseujerimum",
    ticketUrl:
      "https://ingresseria.com.br/evento/forro-do-seu-jerimum",
    date: "15 de Abril, 2026",
    time: "20h às 00h",
    location: "Seu Jerimum",
    heroImage: forroImage,
    description:
      "Toda quinta-feira o Seu Jerimum vira palco de uma verdadeira imersão na cultura nordestina! 💛 Vai ter forró pé de serra, desafio de sanfonas, repente, quadrilha improvisada, além das apresentações de Lampião e Maria Bonita e muita gastronomia regional pra completar a experiência. Prepare o chapéu, chame a turma e venha viver o forró do jeito que o Nordeste gosta! 🔥🪗 📍 Toda quinta no Seu Jerimum",
    artists: [
      "Moacir do Repente",
      "Quadrilha Improvisada",
      "Trio sanfoneiro",
      "Desafios de sanfonas",
      "Poesia",
      "Gastronomial regional",
    ],
    experience: {
      food: "Comidas típicas nordestinas, bar completo com bebidas premium",
      duration: "5 horas de pura animação",
      vibe: "Forró, cultura e sabores do Nordeste.",
    },
    rules: ["Proibido entrada com bebidas e alimentos"],
    gallery: [forro1, forro2, forro3, forro4],
  },
  feijuca: {
    title: "Feijuca do Seu Jerimum",
    logo: logoFeijuca,
    instagramHandle: "@feijucadoseujerimum",
    instagramUrl: "https://instagram.com/feijucadoseujerimum",
    ticketUrl: "https://www.ingresseria.com.br",
    date: "25 de Abril, 2026",
    time: "12h às 20h",
    location: "Seu Jerimum",
    heroImage: feijucaImage,
    description:
      "Uma tarde de samba, axé, feijoada e energia lá em cima do jeito que a gente gosta!",
    artists: [
      "Sambaduzé Entre Elas",
      "Quarteto Linha",
      "Sergynho Pimenta",
      "DJ Bombadance",
    ],
    experience: {
      food: "Feijoada, peticos, cerveja gela, drinks e destilados em geral",
      duration: "8 horas de samba e pagode",
      vibe: "Chopp e caipirinha dobrado das 12h as 13:30h",
    },
    rules: [
      "Evento familiar - todas as idades",
      "Proibido entrada com bebidas e alimentos",
    ],
    gallery: [feijuca1, feijuca2, feijuca3, feijuca4],
  },
};

export function EventPage() {
  const { slug } = useParams();
  const event = slug ? eventsData[slug] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">
            Evento não encontrado
          </h1>
          <Button
            asChild
            className="bg-[#ff6b35] hover:bg-[#ff5522]"
          >
            <a href="/">Voltar para o início</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={event.heroImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-lg mb-6">
              <div className="flex items-center gap-2 text-white">
                <Calendar
                  className="text-[#ff6b35]"
                  size={24}
                />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="text-[#ff6b35]" size={24} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="text-[#ff6b35]" size={24} />
                <span>{event.location}</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 px-6 py-3 h-auto"
              asChild
            >
              <a
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logoIngresseria} alt="Ingresseria" className="h-12 w-auto" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {event.logo && (
              <div className="flex justify-center mb-8">
                <img
                  src={event.logo}
                  alt={event.title}
                  className="h-48 w-auto"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
            )}
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              {event.description}
            </p>
            {event.instagramHandle && (
              <a
                href={event.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#ff6b35] hover:text-[#ff5522] transition-colors text-lg"
              >
                <Instagram size={24} />
                {event.instagramHandle}
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Atrações */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Music className="text-[#ff6b35]" size={32} />
              <h2 className="text-4xl font-black text-white">
                Atrações
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {event.artists.map(
                (artist: string, index: number) => (
                  <motion.div
                    key={index}
                    className="bg-black/50 border border-[#ff6b35]/20 rounded-lg p-6 hover:border-[#ff6b35] transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <p className="text-xl font-semibold text-white">
                      {artist}
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiência */}
      <section className="py-16 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-white mb-8">
              A Experiência
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] border border-[#ff6b35]/20 rounded-lg p-6">
                <UtensilsCrossed
                  className="text-[#ff6b35] mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Gastronomia
                </h3>
                <p className="text-gray-400">
                  {event.experience.food}
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#ff6b35]/20 rounded-lg p-6">
                <Clock
                  className="text-[#ff6b35] mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Duração
                </h3>
                <p className="text-gray-400">
                  {event.experience.duration}
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#ff6b35]/20 rounded-lg p-6">
                <Users
                  className="text-[#ff6b35] mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Vibe
                </h3>
                <p className="text-gray-400">
                  {event.experience.vibe}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Informações e Regras */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Info className="text-[#ff6b35]" size={32} />
              <h2 className="text-4xl font-black text-white">
                Informações Importantes
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Localização
                </h3>
                <div className="flex items-start gap-2 text-gray-300 mb-2">
                  <MapPin
                    className="text-[#ff6b35] mt-1"
                    size={20}
                  />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-start gap-2 text-gray-300 mb-2">
                  <Clock
                    className="text-[#ff6b35] mt-1"
                    size={20}
                  />
                  <span>{event.time}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Regras do Evento
                </h3>
                <ul className="space-y-2">
                  {event.rules.map(
                    (rule: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-[#ff6b35] mt-1">
                          •
                        </span>
                        <span>{rule}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Mapa */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Como Chegar
              </h3>
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-white mb-8">
              Edições Anteriores
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {event.gallery.map(
                (image: string, index: number) => (
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
                      alt={`Galeria ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Garanta seu ingresso agora!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Vagas limitadas. Não perca essa experiência única.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 px-8 py-4 h-auto shadow-2xl"
                asChild
              >
                <a
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logoIngresseria} alt="Ingresseria" className="h-16 w-auto" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA WhatsApp Sticky Bottom (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black via-black to-transparent p-4">
        <Button
          className="w-full bg-white hover:bg-gray-100 py-4"
          size="lg"
          asChild
        >
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <img src={logoIngresseria} alt="Ingresseria" className="h-12 w-auto" />
          </a>
        </Button>
      </div>
    </div>
  );
}