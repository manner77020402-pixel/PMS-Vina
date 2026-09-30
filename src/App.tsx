import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ValuesSection } from './components/ValuesSection';
import { ProductCategoriesSection } from './components/ProductCategoriesSection';
import { StrengthsSection } from './components/StrengthsSection';
import { RfqSection } from './components/RfqSection';
import { QaBoardSection } from './components/QaBoardSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ko');
  const [selectedRfqCategory, setSelectedRfqCategory] = useState<string>('');

  const handleSelectCategoryForRfq = (categoryId: string) => {
    setSelectedRfqCategory(categoryId);
    const rfqElement = document.getElementById('rfq');
    if (rfqElement) {
      rfqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Multilingual Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      <main>
        {/* Hero Section with Live Stats & Fast Actions */}
        <HeroSection currentLang={currentLang} />

        {/* Company About, CEO Greeting & Corporate Values */}
        <AboutSection currentLang={currentLang} />

        {/* PMS Core Values & Promises (Price · Moral · Service) */}
        <ValuesSection currentLang={currentLang} />

        {/* 7 Key MRO Product Categories */}
        <ProductCategoriesSection
          currentLang={currentLang}
          onSelectCategoryForRfq={handleSelectCategoryForRfq}
        />

        {/* Core Strengths & Advantages */}
        <StrengthsSection currentLang={currentLang} />

        {/* Online RFQ Quotation Request Form */}
        <RfqSection
          currentLang={currentLang}
          selectedCategory={selectedRfqCategory}
          onResetCategory={() => setSelectedRfqCategory('')}
        />

        {/* Customer Q&A and Technical Board */}
        <QaBoardSection currentLang={currentLang} />
      </main>

      {/* Corporate Footer with Offices, Hotlines & Tax Info */}
      <Footer
        currentLang={currentLang}
      />
    </div>
  );
}
