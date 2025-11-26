import React from 'react';
import SectionCard from '../components/SectionCard';
import { SHOPPING_LIST } from '../constants';
import { ShoppingBag, Star } from 'lucide-react';

const GearView: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-serif text-white mb-6">Lista de Compras (Budget Friendly)</h2>
      <p className="text-brand-muted mb-8">
        No necesitas gastar miles de dólares. La elegancia está en la iluminación y la actitud. 
        Aquí tienes lo esencial para empezar con menos de $100.
      </p>

      <div className="grid gap-8">
        {SHOPPING_LIST.map((section, index) => (
          <SectionCard key={index} title={section.category}>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-lg border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg text-brand-text">{item.name}</h4>
                      <span className="text-brand-gold font-mono text-sm bg-brand-gold/10 px-2 py-1 rounded">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2 items-start text-sm text-brand-muted bg-brand-dark/50 p-3 rounded">
                    <Star size={14} className="mt-0.5 text-brand-gold shrink-0" />
                    <p>{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        ))}

        <SectionCard title="El Kit 'Hazlo tú misma'" subtitle="Trucos caseros">
          <ul className="space-y-3 list-disc list-inside text-brand-text/80">
            <li><strong>Difusor de luz:</strong> Coloca una camiseta blanca fina sobre una lámpara de escritorio para suavizar la luz (cuidado con el calor).</li>
            <li><strong>Trípode improvisado:</strong> Usa una pila de libros o una taza resistente para sostener el teléfono.</li>
            <li><strong>Filtro 'Dreamy':</strong> Limpia la lente de tu cámara y luego pasa muy suavemente un dedo con un poco de vaselina o grasa natural de la piel por los bordes (no el centro) para un efecto difuminado romántico.</li>
          </ul>
        </SectionCard>
      </div>
    </div>
  );
};

export default GearView;