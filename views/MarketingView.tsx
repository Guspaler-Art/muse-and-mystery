import React from 'react';
import SectionCard from '../components/SectionCard';
import { Smartphone, Instagram, EyeOff, Mic } from 'lucide-react';

const MarketingView: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-serif text-white mb-6">Marketing y Crecimiento</h2>

      <SectionCard title="El Embudo de Venta" subtitle="Cómo mover tráfico sin ser baneada">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-center">
          <div className="flex-1 p-4 bg-brand-dark-lighter rounded-lg w-full">
            <Instagram className="mx-auto text-pink-500 mb-2" size={32} />
            <h4 className="font-bold">TikTok / Reels</h4>
            <p className="text-xs text-brand-muted">Alcance Masivo. 0% Desnudez. 100% Personalidad y Estilo.</p>
          </div>
          <div className="text-2xl text-brand-gold">→</div>
          <div className="flex-1 p-4 bg-brand-dark-lighter rounded-lg w-full">
            <Smartphone className="mx-auto text-blue-400 mb-2" size={32} />
            <h4 className="font-bold">Instagram Stories</h4>
            <p className="text-xs text-brand-muted">Conexión diaria. Link en Bio (Linktree). Teasers suaves.</p>
          </div>
          <div className="text-2xl text-brand-gold">→</div>
          <div className="flex-1 p-4 bg-brand-gold/10 border border-brand-gold/30 rounded-lg w-full">
            <h4 className="font-bold text-brand-gold">Página Azul</h4>
            <p className="text-xs text-brand-text">Monetización. Contenido Exclusivo.</p>
          </div>
        </div>
      </SectionCard>

      <div className="grid md:grid-cols-2 gap-6">
        <SectionCard title="Estrategia TikTok/Reels" subtitle="Sin mostrar de más">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="mt-1"><EyeOff size={18} className="text-brand-gold" /></div>
              <div>
                <h5 className="font-bold">El "Casi" Slip</h5>
                <p className="text-sm text-brand-muted">Usa una bata. Finge que se va a abrir, pero cortas el video o te cubres riendo justo antes. Genera curiosidad.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1"><Mic size={18} className="text-brand-gold" /></div>
              <div>
                <h5 className="font-bold">Tendencias de Audio</h5>
                <p className="text-sm text-brand-muted">Usa audios virales de "mujeres de alto valor" o humor sobre citas. Tu nicho valora la inteligencia y el humor.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1"><Smartphone size={18} className="text-brand-gold" /></div>
              <div>
                <h5 className="font-bold">Slow Living</h5>
                <p className="text-sm text-brand-muted">Videos estéticos sirviendo vino, poniéndote perfume, caminando en tacones. Vende el estilo de vida, no solo el cuerpo.</p>
              </div>
            </li>
          </ul>
        </SectionCard>

        <SectionCard title="Copywriting Seductor" subtitle="Palabras que venden">
          <div className="space-y-4">
            <div className="p-3 bg-white/5 rounded border-l-2 border-brand-gold">
              <p className="text-sm italic">"Me dicen que a esta edad ya no debería usar esto... ¿tú qué opinas?"</p>
              <p className="text-xs text-brand-muted mt-1">Estrategia: Busca validación y comentarios.</p>
            </div>
            <div className="p-3 bg-white/5 rounded border-l-2 border-brand-gold">
              <p className="text-sm italic">"Lo que llevo debajo del abrigo se queda entre nosotros."</p>
              <p className="text-xs text-brand-muted mt-1">Estrategia: Crea complicidad y secreto.</p>
            </div>
            <div className="p-3 bg-white/5 rounded border-l-2 border-brand-gold">
              <p className="text-sm italic">"Link en bio para ver lo que Instagram no me deja subir."</p>
              <p className="text-xs text-brand-muted mt-1">Estrategia: Call to Action directo.</p>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default MarketingView;