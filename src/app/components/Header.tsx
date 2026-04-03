import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoSeuJerimum from "../../imports/logoseuJerimum.png";
import logoIngresseria from "../../imports/logo-removebg-preview.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#ff6b35]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoSeuJerimum}
              alt="Seu Jerimum"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-[#ff6b35] hover:text-[#ff8555] transition-colors">
              Início
            </Link>
            <Link to="/produza-seu-evento" className="text-[#ff6b35] hover:text-[#ff8555] transition-colors">
              Produza seu Evento
            </Link>
            <Link to="/contato" className="text-[#ff6b35] hover:text-[#ff8555] transition-colors">
              Contato
            </Link>
            <Button
              className="bg-white hover:bg-gray-100 px-4 py-2 h-auto border border-gray-200"
              asChild
            >
              <a href="https://www.ingresseria.com.br" target="_blank" rel="noopener noreferrer">
                <img src={logoIngresseria} alt="Ingresseria" className="h-10 w-auto" />
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#25D366]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-[#ff6b35] hover:text-[#ff8555] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/produza-seu-evento"
              className="block text-[#ff6b35] hover:text-[#ff8555] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Produza seu Evento
            </Link>
            <Link
              to="/contato"
              className="block text-[#ff6b35] hover:text-[#ff8555] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <Button
              className="w-full bg-white hover:bg-gray-100 px-4 py-2 h-auto border border-gray-200"
              asChild
            >
              <a href="https://www.ingresseria.com.br" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <img src={logoIngresseria} alt="Ingresseria" className="h-10 w-auto mx-auto" />
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}