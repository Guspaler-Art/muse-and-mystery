import React from 'react';

interface SectionCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={`glass-panel rounded-xl p-6 md:p-8 mb-6 shadow-xl ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-serif text-brand-gold mb-1">{title}</h3>
        {subtitle && <p className="text-brand-muted text-sm uppercase tracking-wider">{subtitle}</p>}
      </div>
      <div className="text-brand-text/90 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;