import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Event } from "@/types";
import { format, parseISO } from "date-fns";

export function EventCard({ event, featured = false }: { event: Event; featured?: boolean }) {
  const start = parseISO(event.startDate);
  const end = event.endDate ? parseISO(event.endDate) : null;
  
  const dateDisplay = end 
    ? `${format(start, "MMM d")} - ${format(end, "MMM d, yyyy")}`
    : format(start, "MMMM d, yyyy");

  return (
    <div className={`bg-navy-light border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-xl flex flex-col h-full ${featured ? 'md:flex-row ring-1 ring-gold/20' : ''}`}>
      {featured && (
        <div className="md:w-2/5 relative min-h-[200px] bg-navy-dark p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5">
          <div className="absolute top-4 left-4">
            <span className="bg-gold text-navy-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Featured Event
            </span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-white mt-8 mb-2">
            {event.title}
          </h3>
          <div className="text-gold font-medium mb-4 flex items-center gap-2">
            <MapPin size={18} />
            {event.city}, {event.state}
          </div>
        </div>
      )}

      <div className={`p-6 md:p-8 flex flex-col flex-1 ${featured ? 'md:w-3/5' : ''}`}>
        {!featured && (
          <h3 className="font-serif text-2xl font-bold text-white mb-2 line-clamp-2">
            {event.title}
          </h3>
        )}
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 text-white/70">
            <Calendar className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <span>{dateDisplay}</span>
          </div>
          <div className="flex items-start gap-3 text-white/70">
            <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <span>{event.hours}</span>
          </div>
          <div className="flex items-start gap-3 text-white/70">
            <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-white/90">{event.venue}</p>
              <p className="text-sm">{event.address}</p>
            </div>
          </div>
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
          {event.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {event.categories.slice(0, 3).map((cat) => (
              <span key={cat} className="text-xs bg-navy-dark border border-white/10 text-white/70 px-2 py-1 rounded">
                {cat}
              </span>
            ))}
            {event.categories.length > 3 && (
              <span className="text-xs bg-navy-dark border border-white/10 text-white/70 px-2 py-1 rounded">
                +{event.categories.length - 3} more
              </span>
            )}
          </div>

          <Link href={`/contact?event=${event.id}`} className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-bold text-sm transition-colors group">
            Inquire About This Event <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
