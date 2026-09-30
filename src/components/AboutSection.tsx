import React, { useState, useEffect } from 'react';
import {
  Quote,
  ShieldCheck,
  Zap,
  TrendingDown,
  Handshake,
  Building2,
  Calendar,
  UserCheck,
  Briefcase,
  Maximize2,
  FileText,
  MapPin,
  Phone,
  Mail,
  Users,
  CheckCircle2,
  Truck,
  Sparkles,
} from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../translations';
import { PmsEmblem, PmsLogo } from './PmsLogo';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = UI_TEXT[currentLang].about;
  const overview = t.overview;

  const [photoOverrides, setPhotoOverrides] = useState<Record<string, string>>({});

  // Load saved photo overrides from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pms_facility_photos');
      if (saved) {
        setPhotoOverrides(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load facility photos from localStorage', e);
    }
  }, []);

  const valueIcons = [
    <ShieldCheck key="trust" className="w-5 h-5" />,
    <Zap key="speed" className="w-5 h-5" />,
    <TrendingDown key="cost" className="w-5 h-5" />,
    <Handshake key="partner" className="w-5 h-5" />,
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            {t.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            {t.lead}
          </p>
        </div>

        {/* CEO Greeting + 4 Corporate Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* CEO Greeting Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-cyan-300">
                  <Quote className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  {t.ceoTitle}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold leading-snug text-white mb-6">
                {t.ceoGreeting}
              </h3>
              <div className="text-sm sm:text-base text-slate-300 font-normal space-y-4">
                {t.ceoMessage.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-8 border-t border-slate-800 flex items-center justify-between">
              <span className="font-bold text-sm text-cyan-300">{t.ceoSignature}</span>
              <div className="flex items-center gap-2">
                <PmsEmblem size={18} />
                <span className="text-xs text-slate-300 font-mono font-medium">PMS VINA TRADING CO., LTD</span>
              </div>
            </div>
          </div>

          {/* 4 Corporate Values */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {t.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                    {valueIcons[idx]}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  Core Commitment 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 회사개요 (Company Overview) Dedicated Section */}
        <div id="company-profile" className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                {t.overviewBadge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.overviewHeading}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                {t.overviewDesc}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                베트남 정식 인가 법인 (MST: 2301413244)
              </span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">설립일</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">2015년</div>
              <div className="text-xs text-slate-500 mt-0.5">10년 연속 안정 공급</div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-indigo-600 mb-1">
                <Maximize2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">사업장 면적</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">500㎡</div>
              <div className="text-xs text-slate-500 mt-0.5">자체 물류 및 창고 인프라</div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-emerald-600 mb-1">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">세무등록번호</span>
              </div>
              <div className="text-lg sm:text-xl font-black text-slate-900 font-mono tracking-tight">2301413244</div>
              <div className="text-xs text-slate-500 mt-0.5">베트남 정규 세무 인가</div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-amber-600 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">주요 고객사</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">100+</div>
              <div className="text-xs text-slate-500 mt-0.5">글로벌 및 한국 제조사</div>
            </div>
          </div>

          {/* Detailed Specification Table & Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* Overview Specification Table */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="font-bold text-sm text-slate-800">기본 정보 명세표</span>
                <span className="text-xs text-slate-500 font-mono">PMS VINA TRADING CO., LTD</span>
              </div>

              <div className="divide-y divide-slate-100 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                  <div className="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{overview.companyNameLabel}</span>
                  </div>
                  <div className="sm:col-span-8 text-slate-900 font-bold mt-1 sm:mt-0 font-mono text-base">
                    {overview.companyNameVal}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                  <div className="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{overview.ceoLabel}</span>
                  </div>
                  <div className="sm:col-span-8 text-slate-900 font-semibold mt-1 sm:mt-0">
                    {overview.ceoVal}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                  <div className="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{overview.establishedLabel}</span>
                  </div>
                  <div className="sm:col-span-8 text-slate-900 font-medium mt-1 sm:mt-0">
                    {overview.establishedVal}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                  <div className="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{overview.businessFieldLabel}</span>
                  </div>
                  <div className="sm:col-span-8 text-slate-900 font-medium mt-1 sm:mt-0">
                    {overview.businessFieldVal}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                  <div className="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{overview.areaLabel}</span>
                  </div>
                  <div className="sm:col-span-8 text-slate-900 font-medium mt-1 sm:mt-0">
                    {overview.areaVal}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                  <div className="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{overview.taxNumberLabel}</span>
                  </div>
                  <div className="sm:col-span-8 font-mono font-bold text-blue-700 mt-1 sm:mt-0">
                    {overview.taxNumberVal}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-start">
                  <div className="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2 pt-0.5">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{overview.locationLabel}</span>
                  </div>
                  <div className="sm:col-span-8 text-slate-900 font-medium mt-1 sm:mt-0 leading-relaxed">
                    {overview.locationVal}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Direct Contact Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Phone className="w-4 h-4" />
                  <span>{overview.contactLabel}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  고객사 전용 직통 핫라인
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  한국어, 베트남어, 중국어 전담 인력이 상주하여 신속한 견적 발급 및 주문 상담을 지원합니다.
                </p>

                <div className="space-y-3 font-mono text-sm">
                  <a
                    href="tel:0372267700"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-lg bg-blue-500/30 flex items-center justify-center text-cyan-300 shrink-0 font-sans text-xs font-bold">
                      KO
                    </span>
                    <div>
                      <div className="text-[11px] font-sans text-slate-300">한국어 전담 상담</div>
                      <div className="font-bold text-white tracking-wide">0372267700</div>
                    </div>
                  </a>

                  <a
                    href="tel:0967220322"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0 font-sans text-xs font-bold">
                      VN
                    </span>
                    <div>
                      <div className="text-[11px] font-sans text-slate-300">Tiếng Việt / 中文</div>
                      <div className="font-bold text-white tracking-wide">0967220322</div>
                    </div>
                  </a>

                  <a
                    href="mailto:PMS@PMSVINA.COM"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-lg bg-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0 font-sans text-xs font-bold">
                      @
                    </span>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-sans text-slate-300">공식 견적 및 수발주 이메일</div>
                      <div className="font-bold text-cyan-300 truncate">PMS@PMSVINA.COM</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span>상담 가능: 월~토 08:00 - 18:00</span>
                  <span className="text-slate-500 hidden sm:inline">|</span>
                  <span className="text-cyan-300 font-mono font-medium">담당자 전화: (한국어)0372267700 / (베트남어, 중국어)0967220322</span>
                </div>
              </div>
            </div>
          </div>

          {/* 현장 인프라 및 직영 물류센터 갤러리 (On-site Logistics & Warehouse Facility Gallery) */}
          <div id="facility-gallery" className="pt-10 pb-4">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                {t.facilityBadge || '현장 인프라 & 직영 물류센터'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.facilityHeading || '자체 물류 인프라와 신속 직배송 현장'}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
                {t.facilityDesc || '체계적인 랙 보관과 출하 검수, 전용 배송 차량을 갖춘 PMS Vina의 실제 사업장 및 창고 현장입니다.'}
              </p>
            </div>

            {/* 6 Photo Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(t.facilityPhotos || []).map((photo: any, pIdx: number) => {
                const displaySrc = photoOverrides[photo.id] || photo.image;

                return (
                  <div
                    key={photo.id || pIdx}
                    className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={displaySrc}
                        alt={photo.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Floating Tag */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20">
                          {photo.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>Facility Photo 0{pIdx + 1}</span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                          {photo.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {photo.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="font-mono text-[11px] text-slate-400">PMS Vina Bac Ninh</span>
                        <span className="text-[11px] text-slate-400 font-medium">{photo.tag}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 주요 고객사 (Key Clients 100+ Network) */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{overview.clientsLabel}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                  주요 고객사 및 파트너십 네트워크
                </h4>
              </div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-sm self-start sm:self-auto">
                {overview.clientsSuffix}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed max-w-4xl">
              반도체, 정밀기계, 자동차 전장 등 베트남 북부 주요 산업단지에 입주한 유수의 글로벌 및 한국 대표 제조 기업들이 PMS Vina의 적시 납품 체계를 신뢰하고 있습니다.
            </p>

            {/* Client Badges Grid */}
            <div className="flex flex-wrap gap-2.5">
              {overview.clientsList.map((client, cIdx) => (
                <div
                  key={cIdx}
                  className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-sm transition-all text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500/80" />
                  <span>{client}</span>
                </div>
              ))}
              <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5">
                <span>+ {overview.clientsSuffix}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
