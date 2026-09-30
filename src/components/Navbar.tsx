import React, { useState } from 'react';
import { Globe, Menu, X, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { LANGUAGES, UI_TEXT } from '../translations';
import { PmsLogo } from './PmsLogo';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenHtmlModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TEXT[currentLang];

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#values', label: (t.nav as any).values || '가치와 약속' },
    { href: '#products', label: t.nav.products },
    { href: '#strengths', label: t.nav.strengths },
    { href: '#rfq', label: t.nav.rfq, highlight: true },
    { href: '#qa', label: t.nav.board },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Official PMS Brand Identity */}
          <a href="#hero" className="flex items-center group focus:outline-none" aria-label="PMS VINA Home">
            <PmsLogo
              size="md"
              variant="full"
              theme="dark"
              showSubtitle={true}
              subtitleText="MRO Total Industrial Supply"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  link.highlight
                    ? 'text-cyan-300 hover:text-white hover:bg-blue-900/50 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Multilingual Selector Bar */}
            <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 shadow-inner">
              {LANGUAGES.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    id={`lang-btn-${lang.code}`}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                    }`}
                    title={lang.label}
                  >
                    <span>{lang.flag}</span>
                    <span className="hidden sm:inline">{lang.nativeName}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 font-medium text-sm transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white shadow"
            >
              <span>{t.hero.btnRfq}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
