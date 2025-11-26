import React, { useState } from 'react';
import SectionCard from '../components/SectionCard';
import { DollarSign, Gift, Lock, Video } from 'lucide-react';

const PricingView: React.FC = () => {
  const [subPrice, setSubPrice] = useState(15);
  const [subGoal, setSubGoal] = useState(50);

  const earnings = subPrice * subGoal;
  const platformFee = earnings * 0.20; // Standard 20%
  const net = earnings - platformFee;

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-serif text-white mb-6">Estrategia de Precios</h2>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Calculator */}
        <div className="lg:col-span-2">
          <SectionCard title="Calculadora de Proyección">
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-brand-muted mb-2">Precio de Suscripción Mensual ($)</label>
                <input 
                  type="range" min="5" max="50" step="1" 
                  value={subPrice} onChange={(e) => setSubPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-brand-dark rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="text-right text-brand-gold font-bold text-xl mt-1">${subPrice}</div>
              </div>

              <div>
                <label className="block text-sm text-brand-muted mb-2">Objetivo de Suscriptores</label>
                <input 
                  type="range" min="10" max="1000" step="10" 
                  value={subGoal} onChange={(e) => setSubGoal(parseInt(e.target.value))}
                  className="w-full h-2 bg-brand-dark rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="text-right text-brand-gold font-bold text-xl mt-1">{subGoal} personas</div>
              </div>

              <div className="bg-brand-gold/10 p-4 rounded-lg border border-brand-gold/20 flex justify-between items-center mt-6">
                <span className="text-brand-text">Ingreso Neto Estimado:</span>
                <span className="text-3xl font-serif text-brand-gold font-bold">${net.toFixed(0)}</span>
              </div>
              <p className="text-xs text-brand-muted text-center">*Descontando el 20% estándar de plataforma.</p>
            </div>
          </SectionCard>
        </div>

        {/* Suggested Pricing */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-xl border border-brand-gold/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark text-xs font-bold px-2 py-1">RECOMENDADO</div>
            <h3 className="text-xl font-serif text-brand-gold mb-2">Modelo Premium</h3>
            <div className="text-4xl font-bold text-white mb-4">$15 - $20</div>
            <p className="text-sm text-brand-muted mb-4">
              Para un perfil "Boutique". Menos fans, pero de mayor calidad y poder adquisitivo. Menos gestión, trato más personal.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2"><CheckMark /> Sin anuncios molestos</li>
              <li className="flex gap-2"><CheckMark /> Chat incluido (limitado)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bundles & Customs */}
      <div className="grid md:grid-cols-2 gap-6">
        <SectionCard title="Bundles (Paquetes)" subtitle="Retención">
          <div className="space-y-4">
            <BundleItem discount="15%" months="3" price={subPrice * 3 * 0.85} />
            <BundleItem discount="25%" months="6" price={subPrice * 6 * 0.75} />
            <p className="text-sm text-brand-muted mt-4">
              Tip: Ofrece descuentos agresivos (25-30%) en el primer mes para captar, el contenido hará que se queden.
            </p>
          </div>
        </SectionCard>

        <SectionCard title="Menú de Extras" subtitle="Ingresos Adicionales">
          <div className="space-y-3">
            <MenuItem icon={<Lock size={16}/>} name="Sexting Session (15 min)" price="$40 - $60" />
            <MenuItem icon={<Gift size={16}/>} name="Dick Rating (Audio/Texto)" price="$15 - $25" />
            <MenuItem icon={<Video size={16}/>} name="Video Personalizado (1 min)" price="$50 - $100" />
            <p className="text-sm text-brand-muted mt-4 p-2 bg-red-900/20 rounded border border-red-900/30">
              Importante: En videos personalizados, NUNCA digas el nombre del cliente si quieres poder revender el video después como PPV (Pay Per View) genérico.
            </p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

const BundleItem = ({ discount, months, price }: { discount: string, months: string, price: number }) => (
  <div className="flex justify-between items-center p-3 bg-white/5 rounded hover:bg-white/10 transition-colors">
    <span className="font-bold text-brand-gold">{months} Meses</span>
    <div className="text-right">
      <span className="text-xs bg-brand-rose px-2 py-0.5 rounded text-white mr-2">-{discount}</span>
      <span className="font-mono">${price.toFixed(2)}</span>
    </div>
  </div>
);

const MenuItem = ({ icon, name, price }: { icon: React.ReactNode, name: string, price: string }) => (
  <div className="flex items-center justify-between p-3 border-b border-white/10">
    <div className="flex items-center gap-3">
      <span className="text-brand-gold">{icon}</span>
      <span>{name}</span>
    </div>
    <span className="font-mono text-brand-gold">{price}</span>
  </div>
);

const CheckMark = () => <span className="text-brand-gold">✓</span>;

export default PricingView;