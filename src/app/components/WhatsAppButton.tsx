import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "5584991949451"; // Formato: código país + DDD + número
  const message =
    "Olá! Gostaria de mais informações sobre eventos do Seu Jerimum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-[#25D366]/50 transition-all hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}