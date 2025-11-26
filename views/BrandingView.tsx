import React, { useState } from 'react';
import SectionCard from '../components/SectionCard';
import { BRAND_PROFILES } from '../constants';
import { Check, RefreshCw } from 'lucide-react';

const BrandingView: React.FC = () => {
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);
  const profile = BRAND_PROFILES[selectedProfileIndex];

  const cycleProfile = () => {
    setSelectedProfileIndex((prev) => (prev + 1) % BRAND_PROFILES.length);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Identidad de Marca</h2>
          <p className="text-brand-muted">Define tu esencia antes de crear contenido.</p>
        </div>
        <button 
          onClick={cycleProfile}
          className="flex items-center gap-2 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/30 px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <RefreshCw size={16} />
          <span>Generar Opción</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <SectionCard title="Nombre Artístico & Tagline">
          <div className="text-center py-6">
            <h3 className="text-4xl font-serif gold-gradient-text mb-4">{profile.name}</h3>
            <p className="text-xl italic text-brand-text/80 font-serif">"{profile.tagline}"</p>
          </div>
        </SectionCard>

        <SectionCard title="Paleta de Colores">
          <div className="flex flex-col gap-4">
            {profile.colors.map((colorStr, idx) => {
              const hex = colorStr.split(' ')[0];
              return (
                <div key={idx} className="flex items-center gap-4 p-2 bg-white/5 rounded-lg">
                  <div 
                    className="w-12 h-12 rounded-full border border-white/10 shadow-lg"
                    style={{ backgroundColor: hex }}
                  ></div>
                  <span className="font-mono text-sm">{colorStr}</span>
                </div>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard title="Descripción del Personaje" className="md:col-span-2">
          <p className="text-lg leading-relaxed mb-6">{profile.description}</p>
          
          <div className="bg-brand-dark p-4 rounded-lg border border-brand-gold/10">
            <h4 className="text-brand-gold text-sm font-bold uppercase mb-3">Personalidad (Vibe Check)</h4>
            <div className="flex flex-wrap gap-2">
              {profile.vibe.map((v, i) => (
                <span key={i} className="px-3 py-1 bg-brand-rose/20 text-brand-rose rounded-full text-sm border border-brand-rose/20">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default BrandingView;