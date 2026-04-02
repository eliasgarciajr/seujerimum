import { Link } from "react-router";
import { Calendar, Ticket } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link to={`/evento/${event.id}`}>
      <motion.div
        className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#ff6b35]/20 transition-all duration-300"
        whileHover={{ y: -8 }}
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Overlay Badge */}
          <div className="absolute top-4 right-4 bg-[#ff6b35] text-white px-4 py-2 rounded-full text-sm font-semibold">
            Evento
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#ff6b35] transition-colors">
            {event.title}
          </h3>

          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <Calendar size={18} />
            <span>{event.date}</span>
          </div>

          <p className="text-gray-400 mb-6">
            {event.description}
          </p>

          <Button className="w-full bg-[#ff6b35] hover:bg-[#ff5522] text-white group-hover:shadow-lg group-hover:shadow-[#ff6b35]/30 transition-all">
            <Ticket size={18} className="mr-2" />
            Ver mais
          </Button>
        </div>
      </motion.div>
    </Link>
  );
}