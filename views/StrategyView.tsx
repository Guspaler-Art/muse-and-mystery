import React from 'react';
import SectionCard from '../components/SectionCard';
import { AlertTriangle, CheckCircle, Video, Camera } from 'lucide-react';

const StrategyView: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-3xl font-serif text-white mb-6">Estrategia de Contenido</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <SectionCard title="Lo que SÍ vendemos" subtitle="La Sugerencia">
          <ul className="space-y-3">
            {[
              "Lencería elegante y encaje de alta calidad",
              "Transparencias sutiles (siluetas)",
              "Primeros planos de piel (cuello, clavícula, piernas)",
              "Videos 'POV' (Punto de vista) como si fueras la pareja",
              "Ambientes de lujo: sábanas de satén, copas de vino, luz tenue"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Líneas Rojas" subtitle="Mantener la Clase">
          <ul className="space-y-3">
            {[
              "Nada explícito hardcore (penetración, fluidos, etc.)",
              "Evitar fondos desordenados (ropa sucia, camas sin hacer)",
              "Lenguaje vulgar o degradante",
              "Lencería de apariencia 'barata' o neón chillón",
              "Iluminación plana o de baño con luz fría"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 mt-1 shrink-0" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <SectionCard title="Formatos Ganadores">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="flex items-center gap-2 text-brand-gold font-bold mb-3">
              <Camera size={20} /> Fotografía
            </h4>
            <p className="text-sm text-brand-muted mb-2">Objetivo: Fantasía Estática</p>
            <ul className="list-disc list-inside space-y-2 text-brand-text/80">
              <li><strong>El Espejo:</strong> Cuerpo entero, cara tapada con el móvil o mirada seductora.</li>
              <li><strong>Desde Arriba:</strong> Tumbada en la cama, mirando hacia la cámara.</li>
              <li><strong>Detalles:</strong> Solo labios, solo manos desabrochando, solo pies en tacones.</li>
            </ul>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-brand-gold font-bold mb-3">
              <Video size={20} /> Clips Cortos (5-10s)
            </h4>
            <p className="text-sm text-brand-muted mb-2">Objetivo: Anticipación</p>
            <ul className="list-disc list-inside space-y-2 text-brand-text/80">
              <li><strong>Slow Motion:</strong> Poniéndote una bata o ajustando un tirante.</li>
              <li><strong>Eye Contact:</strong> 10 segundos mirando fijamente a la cámara y sonriendo al final.</li>
              <li><strong>Behind the Scenes:</strong> Preparándote para una "cita".</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Sesiones Temáticas">
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { t: "Elegancia Nocturna", d: "Vestido de gala, espalda descubierta, joyas." },
            { t: "Secret Lover", d: "Camisa de hombre, luz de mañana, café." },
            { t: "Spa Privado", d: "Toalla blanca, piel húmeda, aceites." },
            { t: "Bibliotecaria Sexy", d: "Gafas, libro, falda lápiz." }
          ].map((theme, i) => (
            <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-brand-gold/30 transition-colors">
              <h5 className="text-brand-gold font-serif font-bold mb-2">{theme.t}</h5>
              <p className="text-xs text-brand-muted">{theme.d}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default StrategyView;