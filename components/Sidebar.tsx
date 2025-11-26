import React from 'react';
import { ViewState } from '../types';
import { 
  Palette, 
  Lightbulb, 
  UserCircle, 
  DollarSign, 
  Share2, 
  CalendarDays, 
  ShoppingBag,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  const menuItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'branding', label: 'Identidad de Marca', icon: <Palette size={20} /> },
    { id: 'strategy', label: 'Estrategia Contenido', icon: <Lightbulb size={20} /> },
    { id: 'profile', label: 'Estructura Perfil', icon: <UserCircle size={20} /> },
    { id: 'pricing', label: 'Precios & Ofertas', icon: <DollarSign size={20} /> },
    { id: 'marketing', label: 'Marketing & Redes', icon: <Share2 size={20} /> },
    { id: 'calendar', label: 'Calendario 30 Días', icon: <CalendarDays size={20} /> },
    { id: 'gear', label: 'Lista de Compras', icon: <ShoppingBag size={20} /> },
  ];

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex items-center gap-2 mb-10 px-2">
        <Sparkles className="text-brand-gold" />
        <h1 className="text-2xl font-serif font-bold gold-gradient-text tracking-wide">
          Musa Elegante
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onChangeView(item.id)}
            className={`
              w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium
              ${currentView === item.id 
                ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20' 
                : 'text-brand-muted hover:text-brand-text hover:bg-white/5'}
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto px-4 py-4 border-t border-brand-gold/10 text-xs text-brand-muted text-center">
        Consultoría Digital v1.0
      </div>
    </div>
  );
};

export default Sidebar;