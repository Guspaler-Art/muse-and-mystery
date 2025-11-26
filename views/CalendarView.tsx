import React, { useState } from 'react';
import { CALENDAR_DATA } from '../constants';
import { CalendarDay } from '../types';
import { X } from 'lucide-react';

const CalendarView: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);

  return (
    <div className="animate-fade-in relative">
      <h2 className="text-3xl font-serif text-white mb-6">Calendario de 30 Días</h2>
      <p className="text-brand-muted mb-6">
        Un plan equilibrado entre contenido gratuito (para atraer) y premium (para retener).
        Haz clic en un día para ver los detalles.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {CALENDAR_DATA.map((item) => (
          <button
            key={item.day}
            onClick={() => setSelectedDay(item)}
            className={`
              p-3 rounded-lg border text-left transition-all hover:scale-105 h-32 flex flex-col justify-between
              ${item.type === 'Premium' 
                ? 'bg-brand-gold/10 border-brand-gold/30 hover:bg-brand-gold/20' 
                : 'bg-white/5 border-white/10 hover:bg-white/10'}
            `}
          >
            <div className="flex justify-between w-full">
              <span className="font-bold text-lg font-serif">{item.day}</span>
              {item.type === 'Premium' && <span className="text-xs text-brand-gold">★</span>}
            </div>
            <span className="text-xs md:text-sm line-clamp-3 opacity-80 leading-tight">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedDay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-brand-dark-lighter border border-brand-gold/30 rounded-xl max-w-lg w-full p-6 shadow-2xl relative">
            <button 
              onClick={() => setSelectedDay(null)}
              className="absolute top-4 right-4 text-brand-muted hover:text-white"
            >
              <X size={24} />
            </button>
            
            <div className="mb-6">
              <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${selectedDay.type === 'Premium' ? 'bg-brand-gold text-brand-dark' : 'bg-brand-muted/20 text-brand-muted'}`}>
                Contenido {selectedDay.type}
              </span>
              <h3 className="text-3xl font-serif text-white mt-2">Día {selectedDay.day}: {selectedDay.title}</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-brand-gold text-sm font-bold uppercase mb-2">Instrucción Visual</h4>
                <p className="text-brand-text/90 leading-relaxed">{selectedDay.description}</p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg border-l-4 border-brand-rose">
                <h4 className="text-brand-rose text-sm font-bold uppercase mb-2">Copy Sugerido</h4>
                <p className="italic text-brand-text/80 font-serif text-lg">"{selectedDay.copy}"</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => setSelectedDay(null)}
                className="text-sm text-brand-muted hover:text-brand-gold underline"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;