import React, { useState } from 'react';
import { ViewState } from './types';
import Sidebar from './components/Sidebar';
import BrandingView from './views/BrandingView';
import StrategyView from './views/StrategyView';
import ProfileView from './views/ProfileView';
import PricingView from './views/PricingView';
import MarketingView from './views/MarketingView';
import CalendarView from './views/CalendarView';
import GearView from './views/GearView';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('branding');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'branding': return <BrandingView />;
      case 'strategy': return <StrategyView />;
      case 'profile': return <ProfileView />;
      case 'pricing': return <PricingView />;
      case 'marketing': return <MarketingView />;
      case 'calendar': return <CalendarView />;
      case 'gear': return <GearView />;
      default: return <BrandingView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-brand-dark text-brand-text overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-20 bg-brand-dark-lighter border-b border-brand-gold/20 p-4 flex justify-between items-center">
        <span className="font-serif text-xl text-brand-gold">Musa Elegante</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-gold">
          <Menu />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-10 w-64 bg-brand-dark-lighter border-r border-brand-gold/10 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar 
          currentView={currentView} 
          onChangeView={(view) => {
            setCurrentView(view);
            setMobileMenuOpen(false);
          }} 
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen p-6 md:p-10 pt-20 md:pt-10 scrollbar-thin scrollbar-thumb-brand-gold/20 scrollbar-track-transparent">
        <div className="max-w-5xl mx-auto pb-20">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;