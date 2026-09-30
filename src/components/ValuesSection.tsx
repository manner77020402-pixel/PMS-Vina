import React, { useState } from 'react';
import {
  TrendingDown,
  ShieldCheck,
  Truck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  FileSpreadsheet,
  PieChart,
  ListOrdered,
  Layers,
  Clock,
  Sparkles,
  Building,
  RefreshCw,
  BarChart3,
  BadgePercent,
  Check,
} from 'lucide-react';
import { Language } from '../types';
import { VALUES_TEXT } from '../valuesTranslations';
import { PmsEmblem } from './PmsLogo';

interface ValuesSectionProps {
  currentLang: Language;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ currentLang }) => {
  const t = VALUES_TEXT[currentLang];
  const [activeTab, setActiveTab] = useState<'all' | 'price' | 'moral' | 'service'>('all');
  const [reportSubTab, setReportSubTab] = useState<'table' | 'chart' | 'top10'>('table');

  return (
    <section id="values" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#CB2987] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <PmsEmblem size={15} />
            <span>{t.sitemapBadge}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t.heading}
              </h2>
              <div className="text-xl sm:text-2xl font-black text-[#CB2987] mt-1 font-mono tracking-wide">
                {t.headingHighlight}
              </div>
              <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-3xl leading-relaxed">
                {t.lead}
              </p>
            </div>

            {/* Quick 3 Pillar Summary Pill */}
            <div className="flex items-center gap-2 self-start lg:self-auto bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-slate-400 px-2">PMS Framework</span>
              <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold font-mono">P: Price</span>
              <span className="px-2.5 py-1 rounded-lg bg-pink-50 text-pink-700 text-xs font-bold font-mono">M: Moral</span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold font-mono">S: Service</span>
            </div>
          </div>
        </div>

        {/* Pillar Switcher Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl border border-slate-300/80">
          <button
            id="tab-values-all"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{t.tabs.all}</span>
          </button>

          <button
            id="tab-values-price"
            onClick={() => setActiveTab('price')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeTab === 'price'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
            }`}
          >
            <TrendingDown className="w-4 h-4" />
            <span>{t.tabs.price}</span>
          </button>

          <button
            id="tab-values-moral"
            onClick={() => setActiveTab('moral')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeTab === 'moral'
                ? 'bg-[#CB2987] text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t.tabs.moral}</span>
          </button>

          <button
            id="tab-values-service"
            onClick={() => setActiveTab('service')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeTab === 'service'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>{t.tabs.service}</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 1: ① Price _ 구매 원가 절감 */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'price') && (
          <div id="pillar-price" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl font-mono shadow-md">
                  P
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                    <span>PILLAR 01</span>
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    <span>{t.price.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {t.price.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                {t.price.subtitle}
              </p>
            </div>

            {/* Problem Challenge vs PMS Promise Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left: Challenge in the Market */}
              <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#EBE7DF]/60 border border-[#DDD6C8] text-slate-900">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-4">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span>{t.price.problemBoxTitle}</span>
                  </div>

                  {/* Visual Box 1: Multi-Item Small Qty */}
                  <div className="p-4 rounded-xl bg-white/80 border border-[#D5CCBA] text-center space-y-1 mb-3 shadow-xs">
                    {t.price.problemItems.map((item, idx) => (
                      <div key={idx} className="text-sm font-extrabold text-slate-800">
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex justify-center my-2 text-slate-400">
                    <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                  </div>

                  {/* Result Box */}
                  <div className="p-4 rounded-xl bg-slate-800 text-white text-center space-y-1.5 shadow-sm">
                    {t.price.problemResult.map((res, idx) => (
                      <div key={idx} className="text-xs sm:text-sm font-bold text-slate-100">
                        {res}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D5CCBA] text-[11px] text-slate-600 leading-relaxed">
                  개별 기업의 소량 구매로는 원자재값 상승 대응 및 최적 공급선 확보에 한계가 존재합니다.
                </div>
              </div>

              {/* Right: PMS Solution Box (Slide 1 PMS Box) */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border-2 border-slate-900 bg-white relative shadow-md flex flex-col justify-between">
                {/* Official PMS Emblem Top Border Tag */}
                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-white border border-slate-900 rounded-full flex items-center gap-1.5 shadow-xs">
                  <PmsEmblem size={14} />
                  <span className="font-mono font-black text-xs text-slate-900">PMS</span>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {t.price.solutionBoxTitle}
                  </div>

                  <div className="space-y-3">
                    {t.price.promises.map((p, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/40 hover:border-blue-200 transition-colors"
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="font-mono text-xs font-bold text-blue-600 mt-0.5">-</span>
                          <div>
                            <span className="font-bold text-slate-900 text-sm">
                              {p.highlight}{' '}
                            </span>
                            <span className="font-semibold text-blue-700 text-sm">
                              {p.desc}
                            </span>
                            {p.sub && (
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                {p.sub}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-100">
                  {t.price.stats.map((s, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 text-center">
                      <div className="text-lg font-black text-blue-700 font-mono">{s.val}</div>
                      <div className="text-xs font-bold text-slate-800">{s.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{s.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILLAR 2: ② Moral _ 도덕적 회사 운영 */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'moral') && (
          <div id="pillar-moral" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#CB2987] text-white flex items-center justify-center font-black text-xl font-mono shadow-md">
                  M
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#CB2987] uppercase tracking-wider mb-0.5">
                    <span>PILLAR 02</span>
                    <span className="w-1 h-1 rounded-full bg-pink-400" />
                    <span>{t.moral.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {t.moral.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                {t.moral.subtitle}
              </p>
            </div>

            {/* Problem Challenge vs PMS Promise Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left: Challenge */}
              <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#EBE7DF]/60 border border-[#DDD6C8] text-slate-900">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-900 uppercase tracking-wider mb-4">
                    <AlertTriangle className="w-4 h-4 text-rose-700" />
                    <span>{t.moral.problemBoxTitle}</span>
                  </div>

                  {/* Visual Box 1: Verbal POs / Informal customs */}
                  <div className="p-4 rounded-xl bg-white/80 border border-[#D5CCBA] space-y-1.5 mb-3 shadow-xs text-center">
                    {t.moral.problemItems.map((item, idx) => (
                      <div key={idx} className="text-xs sm:text-sm font-extrabold text-slate-800">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center my-2 text-slate-400">
                    <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                  </div>

                  {/* Dark Result Box */}
                  <div className="p-4 rounded-xl bg-slate-800 text-white text-center space-y-1.5 shadow-sm">
                    {t.moral.problemResult.map((res, idx) => (
                      <div key={idx} className="text-xs sm:text-sm font-bold text-slate-100">
                        {res}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D5CCBA] text-[11px] text-slate-600 leading-relaxed">
                  무자료 매입 및 불투명한 영수증 관행은 기업에 막대한 세무 감사 벌과금과 신뢰 손실을 초래합니다.
                </div>
              </div>

              {/* Right: PMS Solution Box */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border-2 border-slate-900 bg-white relative shadow-md flex flex-col justify-between">
                {/* Official PMS Emblem Top Border Tag */}
                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-white border border-slate-900 rounded-full flex items-center gap-1.5 shadow-xs">
                  <PmsEmblem size={14} />
                  <span className="font-mono font-black text-xs text-slate-900">PMS</span>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {t.moral.solutionBoxTitle}
                  </div>

                  <div className="space-y-3">
                    {t.moral.promises.map((p, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-pink-50/40 border border-pink-100 hover:bg-pink-50 transition-colors"
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#CB2987] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900 text-sm sm:text-base">
                              {p.highlight}
                            </span>
                            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                              {p.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transparency Commitment Banner */}
                <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div className="text-xs sm:text-sm">
                      <span className="font-bold text-emerald-300">100% 정식 세금계산서 직발행 보장:</span>{' '}
                      <span className="text-slate-300">베트남 공식 인가 법인(MST: 2301413244) 기반 투명 회계</span>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono font-bold text-cyan-300">
                    Red Invoice 100%
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-Interactive: Real Quarterly Report Viewer (From Slide 2) */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CB2987] uppercase tracking-wider mb-1">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>{t.moral.reportTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {t.moral.reportSubtitle}
                  </p>
                </div>

                {/* Sub-Tabs: Table / Chart / Top 10 */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
                  <button
                    onClick={() => setReportSubTab('table')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                      reportSubTab === 'table'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" />
                    <span>월별 실적표</span>
                  </button>

                  <button
                    onClick={() => setReportSubTab('chart')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                      reportSubTab === 'chart'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <PieChart className="w-3.5 h-3.5 text-pink-600" />
                    <span>비중 분석 차트</span>
                  </button>

                  <button
                    onClick={() => setReportSubTab('top10')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                      reportSubTab === 'top10'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <ListOrdered className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Top 10 품목</span>
                  </button>
                </div>
              </div>

              {/* Sub-Tab 1: Monthly Table */}
              {reportSubTab === 'table' && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="p-4 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-bold text-slate-800">1분기(1~3월) 카테고리별 구매 금액 명세</span>
                    <span className="font-mono text-slate-500 font-semibold">{t.moral.currencyUnit}</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm text-left border-collapse">
                      <thead>
                        <tr className="bg-white text-slate-700 font-bold border-b border-slate-200">
                          <th className="py-3 px-4">{t.moral.tableHeaders.category}</th>
                          <th className="py-3 px-4 text-right">{t.moral.tableHeaders.m1}</th>
                          <th className="py-3 px-4 text-right">{t.moral.tableHeaders.m2}</th>
                          <th className="py-3 px-4 text-right">{t.moral.tableHeaders.m3}</th>
                          <th className="py-3 px-4 text-right">{t.moral.tableHeaders.total}</th>
                          <th className="py-3 px-4 text-center">{t.moral.tableHeaders.share}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/80 bg-white">
                        {t.moral.monthlyRows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                              <span
                                className="w-2.5 h-2.5 rounded-full shrink-0"
                                style={{ backgroundColor: row.color }}
                              />
                              <span>{row.category}</span>
                            </td>
                            <td className="py-3 px-4 text-right font-mono text-slate-700">{row.m1}</td>
                            <td className="py-3 px-4 text-right font-mono text-slate-700">{row.m2}</td>
                            <td className="py-3 px-4 text-right font-mono text-slate-700">{row.m3}</td>
                            <td className="py-3 px-4 text-right font-mono font-bold text-slate-900">{row.total}</td>
                            <td className="py-3 px-4 text-center">
                              <span
                                className="inline-block px-2 py-0.5 rounded-full text-xs font-bold font-mono text-white"
                                style={{ backgroundColor: row.color }}
                              >
                                {row.percent}%
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-slate-900 text-white font-extrabold border-t-2 border-slate-900">
                          <td className="py-3.5 px-4 font-black">{t.moral.monthlyTotals.category}</td>
                          <td className="py-3.5 px-4 text-right font-mono">{t.moral.monthlyTotals.m1}</td>
                          <td className="py-3.5 px-4 text-right font-mono">{t.moral.monthlyTotals.m2}</td>
                          <td className="py-3.5 px-4 text-right font-mono">{t.moral.monthlyTotals.m3}</td>
                          <td className="py-3.5 px-4 text-right font-mono text-amber-300 font-black text-base">
                            {t.moral.monthlyTotals.total}
                          </td>
                          <td className="py-3.5 px-4 text-center font-mono text-xs text-slate-300">100%</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="p-3.5 bg-slate-100/60 border-t border-slate-200 text-slate-500 text-[11px] flex items-center justify-between">
                    <span>{t.moral.reportNote}</span>
                    <span className="font-bold text-slate-700">합계: 923,192,450 VND</span>
                  </div>
                </div>
              )}

              {/* Sub-Tab 2: Chart Breakdown */}
              {reportSubTab === 'chart' && (
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Visual Breakdown Bars */}
                    <div className="md:col-span-7 space-y-4">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        5대 카테고리별 구매 비중 (Category Share)
                      </div>

                      {t.moral.monthlyRows.map((row, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: row.color }} />
                              <span className="font-bold text-slate-900">{row.category}</span>
                            </span>
                            <span className="font-mono font-bold text-slate-900">
                              {row.total} VND ({row.percent}%)
                            </span>
                          </div>
                          {/* Progress bar */}
                          <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{ width: `${row.percent}%`, backgroundColor: row.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Summary Donut Stats Card */}
                    <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-sm text-center flex flex-col justify-center">
                      <div className="text-xs uppercase tracking-widest text-pink-400 font-bold mb-2">
                        1분기 총 집행 실적
                      </div>
                      <div className="text-2xl sm:text-3xl font-black font-mono text-white mb-2">
                        923,192,450 <span className="text-xs text-slate-400 font-sans">VND</span>
                      </div>
                      <div className="text-xs text-slate-300 mb-6">
                        월평균 약 3억 7백만 VND 지출 모니터링
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-700/80 text-center">
                        <div className="p-2 rounded-xl bg-white/5">
                          <div className="text-[10px] text-slate-400 font-medium">1월</div>
                          <div className="text-xs font-mono font-bold text-slate-200">1.18억</div>
                        </div>
                        <div className="p-2 rounded-xl bg-white/5">
                          <div className="text-[10px] text-slate-400 font-medium">2월</div>
                          <div className="text-xs font-mono font-bold text-slate-200">3.79억</div>
                        </div>
                        <div className="p-2 rounded-xl bg-white/5">
                          <div className="text-[10px] text-slate-400 font-medium">3월</div>
                          <div className="text-xs font-mono font-bold text-amber-300">4.25억</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-Tab 3: Top 10 Items Table */}
              {reportSubTab === 'top10' && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="p-4 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{t.moral.top10Title}</span>
                      <p className="text-slate-500 mt-0.5">{t.moral.top10Subtitle}</p>
                    </div>
                    <span className="font-mono text-slate-500 font-semibold">{t.moral.currencyUnit}</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm text-left border-collapse">
                      <thead>
                        <tr className="bg-white text-slate-700 font-bold border-b border-slate-200">
                          <th className="py-2.5 px-3.5 text-center w-12">{t.moral.top10Headers.rank}</th>
                          <th className="py-2.5 px-3.5">{t.moral.top10Headers.name}</th>
                          <th className="py-2.5 px-3.5 font-mono">{t.moral.top10Headers.code}</th>
                          <th className="py-2.5 px-3.5 text-right">{t.moral.top10Headers.qty}</th>
                          <th className="py-2.5 px-3.5 text-right">{t.moral.top10Headers.amount}</th>
                          <th className="py-2.5 px-3.5 text-slate-500">{t.moral.top10Headers.remark}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/80 bg-white">
                        {t.moral.top10Items.map((item) => (
                          <tr key={item.rank} className="hover:bg-slate-50 transition-colors">
                            <td className="py-2.5 px-3.5 text-center font-mono font-bold text-slate-500">
                              <span
                                className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                                  item.rank <= 3
                                    ? 'bg-amber-100 text-amber-900 font-black'
                                    : 'bg-slate-100 text-slate-600'
                                }`}
                              >
                                {item.rank}
                              </span>
                            </td>
                            <td className="py-2.5 px-3.5 font-bold text-slate-900">{item.name}</td>
                            <td className="py-2.5 px-3.5 font-mono text-xs text-blue-600 font-semibold">
                              {item.code}
                            </td>
                            <td className="py-2.5 px-3.5 text-right font-mono text-slate-700">{item.qty}</td>
                            <td className="py-2.5 px-3.5 text-right font-mono font-bold text-slate-900">
                              {item.amount}
                            </td>
                            <td className="py-2.5 px-3.5 text-xs text-slate-600">{item.remark}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILLAR 3: ③ Service _ 구매 비용, 시간 절감 (보이지 않는 비용) */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'service') && (
          <div id="pillar-service" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl font-mono shadow-md">
                  S
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-0.5">
                    <span>PILLAR 03</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span>{t.service.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {t.service.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                {t.service.subtitle}
              </p>
            </div>

            {/* Problem Challenge vs PMS Promise Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left: Challenge */}
              <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#EBE7DF]/60 border border-[#DDD6C8] text-slate-900">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-4">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span>{t.service.problemBoxTitle}</span>
                  </div>

                  {/* 4 Inefficiencies */}
                  <div className="p-4 rounded-xl bg-white/80 border border-[#D5CCBA] space-y-1.5 mb-3 shadow-xs text-center">
                    {t.service.problemItems.map((item, idx) => (
                      <div key={idx} className="text-xs sm:text-sm font-extrabold text-slate-800">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center my-2 text-slate-400">
                    <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                  </div>

                  {/* Result Box */}
                  <div className="p-4 rounded-xl bg-slate-800 text-white text-center space-y-1.5 shadow-sm">
                    {t.service.problemResult.map((res, idx) => (
                      <div key={idx} className="text-xs sm:text-sm font-bold text-slate-100">
                        {res}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D5CCBA] text-[11px] text-slate-600 leading-relaxed">
                  개별 품목 단가보다 더 큰 손실은 분산 공급업체 관리로 인한 인건비와 외근비, 배송 지연에 따른 기회비용입니다.
                </div>
              </div>

              {/* Right: PMS Solution Box with One-Stop Service Flow */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border-2 border-slate-900 bg-white relative shadow-md flex flex-col justify-between space-y-6">
                {/* Official PMS Emblem Top Border Tag */}
                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-white border border-slate-900 rounded-full flex items-center gap-1.5 shadow-xs">
                  <PmsEmblem size={14} />
                  <span className="font-mono font-black text-xs text-slate-900">PMS</span>
                </div>

                {/* ARCHITECTURE DIAGRAM (From Slide 3) */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    {t.service.diagramTitle}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Before: Dispersed */}
                    <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200">
                      <div className="text-xs font-bold text-rose-800 mb-2 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span>기존: 다자간 분산 관리 (비효율)</span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono py-2 px-3 bg-white rounded-lg border border-rose-100 shadow-xs">
                        <div className="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">
                          고객사
                        </div>
                        <div className="text-rose-500 flex flex-col items-center">
                          <span className="text-[10px]">⇄ 분산 접촉 ⇄</span>
                          <span className="text-[9px] text-slate-400">행정 과부하</span>
                        </div>
                        <div className="space-y-0.5 text-right text-[11px] text-slate-600">
                          <div>업체 1</div>
                          <div>업체 2</div>
                          <div>업체 3...</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-rose-700 mt-2 leading-tight">
                        업체별 제각각 견적, 상이한 배송일, 계산서 누락, 불량품 처리 난항
                      </p>
                    </div>

                    {/* After: PMS One-Stop */}
                    <div className="p-4 rounded-xl bg-emerald-50/60 border-2 border-emerald-500">
                      <div className="text-xs font-bold text-emerald-800 mb-2 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>“One Stop Service”</span>
                        </span>
                        <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-mono font-bold">
                          단일 창구
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono py-2 px-3 bg-white rounded-lg border border-emerald-200 shadow-xs">
                        <div className="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">
                          고객사
                        </div>
                        <div className="text-emerald-600 font-bold flex flex-col items-center">
                          <span className="text-[10px]">⇄ 직결 ⇄</span>
                          <PmsEmblem size={16} />
                          <span className="text-[9px] text-[#CB2987] font-bold">PMS VINA</span>
                        </div>
                        <div className="space-y-0.5 text-right text-[11px] text-slate-600">
                          <div>업체 1</div>
                          <div>업체 2</div>
                          <div>업체 3...</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-emerald-800 mt-2 leading-tight font-medium">
                        PMS 단일 전담 창구로 구매선 일원화, 모든 품목 통합 공급 및 정산
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 Core Promises from Slide 3 */}
                <div className="space-y-3 pt-2">
                  {t.service.promises.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="font-mono text-xs font-bold text-emerald-600 mt-0.5">-</span>
                        <div>
                          <span className="font-bold text-slate-900 text-sm">
                            {p.highlight}{' '}
                          </span>
                          <span className="font-semibold text-emerald-700 text-sm">
                            {p.desc}
                          </span>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {p.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3 Feature Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                  {t.service.features.map((f, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                        {f.tag}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mb-1">{f.title}</div>
                      <div className="text-[11px] text-slate-500 leading-tight">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
