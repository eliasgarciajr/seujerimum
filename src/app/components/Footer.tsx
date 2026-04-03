import { Link } from "react-router";
import {
  Instagram,
  Facebook,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import logoSeuJerimum from "../../imports/logoseuJerimum.png";

export function Footer() {
  return (
    <footer className="bg-white text-[#ff6b35] py-12 border-t border-[#ff6b35]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img
              src={logoSeuJerimum}
              alt="Seu Jerimum"
              className="h-12 w-auto mb-4"
            />
            <p className="text-[#ff6b35] mb-4">
              A melhor experiência em eventos de Natal/RN.
              Cultura, música e energia nordestina.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#ff6b35]">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#ff6b35] hover:text-[#ff8555] transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/produza-seu-evento"
                  className="text-[#ff6b35] hover:text-[#ff8555] transition-colors"
                >
                  Produza seu Evento
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-[#ff6b35] hover:text-[#ff8555] transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="www.ingresseria.com.br"
                  className="text-[#ff6b35] hover:text-[#ff8555] transition-colors"
                >
                  Ingresseria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#ff6b35]">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#ff6b35]">
                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0 text-[#25D366]"
                />
                <span>
                  R. José Ferreira Sobrinho, 100 - Parque das
                  Colinas, Natal - RN, 59066-010
                </span>
              </li>
              <li className="flex items-start gap-2 text-[#ff6b35]">
                <Phone
                  size={20}
                  className="mt-1 flex-shrink-0 text-[#25D366]"
                />
                <span>(84) 99194-9451</span>
              </li>
              <li className="flex items-start gap-2 text-[#ff6b35]">
                <Mail
                  size={20}
                  className="mt-1 flex-shrink-0 text-[#25D366]"
                />
                <span>seujerimum@gmail.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/seujerimum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#1ea952] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/seujerimum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#1ea952] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ff6b35]/20 mt-8 pt-8 text-center text-[#ff6b35] text-sm">
          <p>
            © {new Date().getFullYear()} Seu Jerimum. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}