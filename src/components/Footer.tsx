import React from 'react';
import {
  MapPin,
  Globe,
  Phone,
  Mail,
  Clock,
  ChevronUp,
} from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../translations';
import { PmsLogo } from './PmsLogo';

interface FooterProps {
  currentLang: Language;
  onOpenHtmlModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = UI_TEXT[currentLang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-800/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Company Brand Column */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <PmsLogo
                size="md"
                variant="full"
                theme="dark"
                showSubtitle={true}
                subtitleText="MRO Total Solution"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {t.companyDesc}
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  MST: <strong className="text-white font-mono">2301413244</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-7 space-y-4 text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.contactInfo}
            </h4>

            <div className="space-y-2.5">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>{t.hanoiOffice}</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>{t.koreaOffice}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong className="text-slate-300">{t.tel}</strong>
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  <strong className="text-slate-300">Email:</strong>{' '}
                  <a href="mailto:PMS@PMSVINA.COM" className="text-cyan-400 hover:underline">
                    PMS@PMSVINA.COM
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong className="text-slate-300">{t.workHours}:</strong>{' '}
                  {t.workHoursVal}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.copyright}</p>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">
              About
            </a>
            <a href="#products" className="hover:text-slate-300 transition-colors">
              Products
            </a>
            <a href="#rfq" className="hover:text-slate-300 transition-colors">
              RFQ
            </a>
            <a href="#qa" className="hover:text-slate-300 transition-colors">
              Q&A
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              title="맨 위로 이동"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
