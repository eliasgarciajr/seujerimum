// Imports de componentes e bibliotecas
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { EventCard } from "../components/EventCard";
import { InstagramFeed } from "../components/InstagramFeed";
import { Calendar, Users, Music, Sparkles } from "lucide-react";
import { Instagram } from "lucide-react";

// Imports de imagens
import feijucaImage from "../../imports/FEIJUCA.png";
import forroGrid from "../../imports/evento-36-imagem.png";
import heroImage from "../../imports/20251011_195404.jpg";
import insta1 from "../../imports/13_quadrilha-1.png";
import insta2 from "../../imports/22_quadrilha-1.png";
import insta3 from "../../imports/feuijuca.jpeg";
import insta4 from "../../imports/FORRO_02-1.jpeg";
import aboutImage from "../../imports/20251011_195415.jpg";

// Mock data para eventos
const events = [
  {
    id: "forro-do-seu-jerimum",
    title: "Forró do Seu Jerimum",
    date: "15 de Abril, 2026",
    image: forroGrid,
    description: "A melhor noite de forró da cidade",
  },
  {
    id: "feijuca",
    title: "Feijuca do Seu Jerimum",
    date: "25 de Abril, 2026",
    image: feijucaImage,
    description: "Samba, feijoada e muita alegria",
  },
];

export function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Festival"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#ff6b35]">SEU JERIMUM</span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-4xl text-white mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Viva a experiência dos melhores eventos de Natal
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          
        </motion.div>
      </section>

      {/* Eventos em Destaque */}
      <section
        id="eventos"
        className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Eventos em{" "}
              <span className="text-[#ff6b35]">Destaque</span>
            </h2>
            <p className="text-xl text-gray-400">
              Garanta seu ingresso agora!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Institucional */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Sobre o{" "}
                <span className="text-[#ff6b35]">
                  Seu Jerimum
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                O Seu Jerimum é mais do que uma produtora de
                eventos. Somos a celebração da cultura
                nordestina, a energia da nossa gente e a paixão
                por criar experiências inesquecíveis.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Localizados no coração de Natal/RN, produzimos
                os melhores eventos da região, unindo tradição,
                música e diversão em um espaço único e
                acolhedor.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#ff6b35]/20 p-3 rounded-lg">
                    <Users
                      className="text-[#ff6b35]"
                      size={24}
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">
                      10k+
                    </p>
                    <p className="text-gray-400">
                      Pessoas impactadas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#ff6b35]/20 p-3 rounded-lg">
                    <Music
                      className="text-[#ff6b35]"
                      size={24}
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">
                      30+
                    </p>
                    <p className="text-gray-400">
                      Eventos realizados
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#ff6b35]/20 p-3 rounded-lg">
                    <Calendar
                      className="text-[#ff6b35]"
                      size={24}
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">
                      2 anos
                    </p>
                    <p className="text-gray-400">
                      De experiência
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#ff6b35]/20 p-3 rounded-lg">
                    <Sparkles
                      className="text-[#ff6b35]"
                      size={24}
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">
                      100%
                    </p>
                    <p className="text-gray-400">
                      Energia nordestina
                    </p>
                  </div>
                </div>
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
                src={aboutImage}
                alt="Natal - RN"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Redes Sociais */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Siga no{" "}
              <span className="text-[#ff6b35]">Instagram</span>
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              Confira os melhores momentos dos nossos eventos
            </p>
            <a
              href="https://instagram.com/seujerimum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#ff6b35] hover:text-[#ff5522] transition-colors text-lg"
            >
              <Instagram size={24} />
              @seujerimum
            </a>
          </motion.div>

          <InstagramFeed
            username="seujerimum"
            instagramUrl="https://instagram.com/seujerimum"
            limit={4}
            customImages={[insta1, insta2, insta3, insta4]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] hover:opacity-90 text-white px-8"
              asChild
            >
              <a
                href="https://instagram.com/seujerimum"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais no Instagram
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Quer realizar seu evento conosco?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transforme sua ideia em realidade com a melhor
              estrutura e produção de Natal
            </p>
            <Button
              size="lg"
              className="bg-[#ff6b35] hover:bg-[#ff5522] text-white text-xl px-12 py-6 h-auto shadow-2xl shadow-[#ff6b35]/40"
              asChild
            >
              <a href="/produza-seu-evento">
                Produza seu Evento
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}