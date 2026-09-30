import React from 'react';
import { FileSpreadsheet, Layers, ShieldCheck, Clock, Building2, PackageCheck } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../translations';
import { PmsEmblem } from './PmsLogo';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = UI_TEXT[currentLang].hero;

  const stats = [
    {
      val: t.stat1Val,
      label: t.stat1Label,
      icon: <PackageCheck className="w-4 h-4 text-cyan-400" />,
      color: 'text-cyan-400',
    },
    {
      val: t.stat2Val,
      label: t.stat2Label,
      icon: <Clock className="w-4 h-4 text-blue-400" />,
      color: 'text-blue-400',
    },
    {
      val: t.stat3Val,
      label: t.stat3Label,
      icon: <Building2 className="w-4 h-4 text-indigo-400" />,
      color: 'text-indigo-400',
    },
    {
      val: t.stat4Val,
      label: t.stat4Label,
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-14 pb-20 sm:pt-20 sm:pb-32">
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Status Badge with Official PMS Emblem */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-200 text-xs font-semibold mb-6 shadow-sm">
            <PmsEmblem size={18} />
            <span className="text-cyan-300 font-bold">PMS VINA</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">{t.pill}</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              {t.titleHighlight}
            </span>
            <br />
            <span className="text-white">{t.titleEnd}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 leading-relaxed font-normal">
            {t.subtitle}
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#rfq"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all gap-2 transform active:scale-95"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>{t.btnRfq}</span>
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all gap-2 transform active:scale-95"
            >
              <Layers className="w-4 h-4" />
              <span>{t.btnProducts}</span>
            </a>
          </div>
        </div>

        {/* High-Impact Stat Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 sm:mt-20 pt-10 border-t border-slate-800/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-800/40 border border-slate-800 backdrop-blur hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-semibold">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
              <div className={`text-2xl sm:text-4xl font-black ${stat.color} tracking-tight`}>
                {stat.val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
