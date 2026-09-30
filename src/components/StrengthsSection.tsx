import React from 'react';
import {
  Layers,
  Truck,
  ShieldCheck,
  TrendingDown,
  Globe2,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  PackageSearch,
  Building,
  ArrowRight,
  Boxes,
} from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../translations';

interface StrengthsSectionProps {
  currentLang: Language;
}

export const StrengthsSection: React.FC<StrengthsSectionProps> = ({ currentLang }) => {
  const t = UI_TEXT[currentLang].strengths;

  const competenceIcons = [
    <Globe2 key="c1" className="w-6 h-6 text-blue-400" />,
    <TrendingDown key="c2" className="w-6 h-6 text-emerald-400" />,
    <Truck key="c3" className="w-6 h-6 text-amber-400" />,
    <ShieldCheck key="c4" className="w-6 h-6 text-cyan-400" />,
  ];

  return (
    <section id="strengths" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Boxes className="w-3.5 h-3.5" />
            {t.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.heading}
          </h2>

          {/* 13 Years Trust & Market Leadership Highlight Banner */}
          <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-blue-800/40 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center shrink-0 text-cyan-300 shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 text-[11px] font-bold uppercase tracking-wider">
                    13 Years Trust & Market Leadership
                  </span>
                </div>
                <p className="text-sm sm:text-base font-extrabold text-white leading-snug tracking-tight">
                  "{t.trust13Years}"
                </p>
              </div>
            </div>
            <div className="shrink-0 self-start sm:self-auto">
              <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-cyan-300 border border-white/10 text-xs font-mono font-bold whitespace-nowrap">
                Since 2013 · 13 Years
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-600 mt-5 max-w-4xl leading-relaxed">
            {t.lead}
          </p>
        </div>

        {/* SECTION 1: MRO Purchasing Reality & Problem Analysis */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                <Building className="w-3.5 h-3.5" />
                <span>Market Status & Challenges</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {t.marketTitle}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600 self-start md:self-auto">
              현지 구매 환경 분석
            </span>
          </div>

          {/* Current Comparison: Raw Materials vs. MRO Consumables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span>원부자재 (Raw & Direct Materials)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.marketPoints[0]}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-sm mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>MRO 소모성 자재 (Consumables)</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                {t.marketPoints[1]}
              </p>
            </div>
          </div>

          {/* 4 Causes of Inefficiency */}
          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>{t.causeHeading}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.causes.map((cause, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-mono font-black text-xs flex items-center justify-center mb-3">
                      {cause.num}
                    </div>
                    <div className="font-bold text-sm text-slate-900 mb-1.5">
                      {cause.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cause.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cause Summary Callout */}
            <div className="mt-5 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-center gap-3">
              <span className="shrink-0 w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                ▶
              </span>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                {t.causeSummary}
              </p>
            </div>
          </div>

          {/* Strategic Rationale: What is MRO & Outsourcing Insight */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-md">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>{t.mroDefTitle}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-3">
              {t.mroDefDesc}
            </p>
            <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm text-cyan-200 font-medium leading-relaxed">
              💡 {t.mroDefNote}
            </div>
          </div>
        </div>

        {/* SECTION 2: PMS Core Competitiveness (4 Pillars) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                <PackageSearch className="w-3.5 h-3.5" />
                <span>PMS Core Competitiveness</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.competenceTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              구매 원가 절감 · 전 품목 통합 공급 · 공장 직배송
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {t.competencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shadow-md">
                      {competenceIcons[idx]}
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="font-mono font-bold text-blue-600 text-base">{comp.num}</span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {comp.title}
                    </h4>
                  </div>

                  <p className="text-sm font-semibold text-blue-700 mb-5 pb-3 border-b border-slate-200">
                    "{comp.slogan}"
                  </p>

                  <ul className="space-y-2.5">
                    {comp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Highlight Box for Pillar 4 */}
                {comp.highlight && (
                  <div className="mt-6 p-4 rounded-2xl bg-blue-900 text-white text-xs sm:text-sm leading-relaxed shadow-sm">
                    <div className="font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>One-Vendor Solution</span>
                    </div>
                    <p className="text-slate-200 font-normal">
                      {comp.highlight}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
