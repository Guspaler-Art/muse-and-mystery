import React, { useState } from 'react';
import SectionCard from '../components/SectionCard';
import { Copy } from 'lucide-react';

const ProfileView: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const bioText = "✨ 45 años | Elegancia y Placer.\n🍷 Amante del buen vino y la lencería fina.\n🗝️ Aquí comparto mi lado más íntimo y personal, lejos del ruido.\n\n👇 Únete a mi círculo exclusivo";

  const welcomeText = "Hola, cariño. Gracias por unirte a mi espacio privado.\n\nMe encanta que estés aquí. Este es el único lugar donde respondo personalmente.\n\nRevisa mi muro para ver mi colección de bienvenida o envíame un DM si tienes alguna fantasía en mente...\n\n¿Qué te gustaría ver primero? 💋";

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-serif text-white mb-6">Estructura del Perfil</h2>

      <div className="grid gap-6">
        <SectionCard title="Biografía Optimizada" subtitle="Clara, Seductora y Directa">
          <div className="bg-brand-dark-lighter p-4 rounded-lg border border-white/10 font-mono text-sm relative">
            <pre className="whitespace-pre-wrap">{bioText}</pre>
            <button 
              onClick={() => copyToClipboard(bioText, 'bio')}
              className="absolute top-2 right-2 text-brand-muted hover:text-brand-gold"
            >
              {copied === 'bio' ? <span className="text-green-500 text-xs">Copiado</span> : <Copy size={16} />}
            </button>
          </div>
          <p className="mt-4 text-sm text-brand-muted">
            *Nota: La edad es tu activo. "45 años" filtra a los niños y atrae a hombres que buscan madurez y realidad.*
          </p>
        </SectionCard>

        <SectionCard title="Mensaje de Bienvenida Automático" subtitle="Automatización de Ventas">
          <p className="mb-4 text-brand-text/80">Este mensaje se envía automáticamente cuando alguien se suscribe. Es tu primera oportunidad de venta.</p>
          <div className="bg-brand-dark-lighter p-4 rounded-lg border border-white/10 font-mono text-sm relative">
            <pre className="whitespace-pre-wrap">{welcomeText}</pre>
            <button 
              onClick={() => copyToClipboard(welcomeText, 'welcome')}
              className="absolute top-2 right-2 text-brand-muted hover:text-brand-gold"
            >
              {copied === 'welcome' ? <span className="text-green-500 text-xs">Copiado</span> : <Copy size={16} />}
            </button>
          </div>
        </SectionCard>

        <SectionCard title="Categorías de Contenido (Historias Destacadas)">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "👠 Outfits", desc: "Mis looks favoritos del día." },
              { title: "🍷 Lifestyle", desc: "Cenas, viajes, relax." },
              { title: "🎁 VIP Previews", desc: "Adelantos de lo que hay en mensajes privados." }
            ].map((cat, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-lg">
                  {cat.title.split(' ')[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{cat.title.substring(2)}</h4>
                  <p className="text-xs text-brand-muted">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default ProfileView;