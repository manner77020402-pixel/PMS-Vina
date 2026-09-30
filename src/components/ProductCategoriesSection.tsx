import React, { useState } from 'react';
import {
  Package,
  Zap,
  Wrench,
  ShieldAlert,
  Sparkles,
  Printer,
  Boxes,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  X,
  Eye,
  Info,
} from 'lucide-react';
import { Language, ProductCategory } from '../types';
import { PRODUCT_CATEGORIES, UI_TEXT } from '../translations';

interface ProductCategoriesSectionProps {
  currentLang: Language;
  onSelectCategoryForRfq: (categoryId: string) => void;
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  currentLang,
  onSelectCategoryForRfq,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhotoCategory, setSelectedPhotoCategory] = useState<ProductCategory | null>(null);
  const t = UI_TEXT[currentLang].products;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package':
        return <Package className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Printer':
        return <Printer className="w-5 h-5" />;
      case 'Boxes':
      default:
        return <Boxes className="w-5 h-5" />;
    }
  };

  const filteredCategories =
    activeFilter === 'all'
      ? PRODUCT_CATEGORIES
      : PRODUCT_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section id="products" className="py-20 sm:py-28 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              {t.badge}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              {t.subheading}
            </p>
          </div>

          {/* Quick Filter Pill Tabs */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {currentLang === 'en'
                ? 'All (7)'
                : currentLang === 'vi'
                ? 'Tất cả (7)'
                : currentLang === 'zh'
                ? '全品类 (7)'
                : '전체 (7)'}
            </button>
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.title[currentLang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* 7 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const badge = cat.badge[currentLang];
            const title = cat.title[currentLang];
            const desc = cat.description[currentLang];
            const items = cat.items[currentLang];

            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                      {badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
                      {getCategoryIcon(cat.icon)}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-2.5 group-hover:text-blue-700 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                    {desc}
                  </p>

                  {/* Category Photo Feature */}
                  {cat.image && (
                    <div
                      onClick={() => setSelectedPhotoCategory(cat)}
                      className={`mb-4 rounded-xl overflow-hidden border border-slate-200 cursor-pointer relative group/photo ${
                        cat.id === 'office' ? 'bg-white shadow-inner' : 'bg-slate-50'
                      }`}
                    >
                      <img
                        src={cat.image}
                        alt={title}
                        className={`w-full ${
                          cat.id === 'office'
                            ? 'h-64 object-contain p-1.5'
                            : 'h-48 object-cover object-center'
                        } group-hover/photo:scale-105 transition-transform duration-300`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end justify-between p-3 opacity-90 group-hover/photo:opacity-100 transition-opacity">
                        <div className="flex items-center gap-1.5 text-white text-[11px] font-bold">
                          <Eye className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span className="truncate">
                            {currentLang === 'ko'
                              ? `${title} 실제 취급 자재 사진`
                              : currentLang === 'vi'
                              ? `Hình ảnh thực tế ${title}`
                              : currentLang === 'zh'
                              ? `${title} 实物展示`
                              : `Actual Photos: ${title}`}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPhotoCategory(cat);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white/95 hover:bg-white text-slate-900 text-[11px] font-extrabold shadow-sm flex items-center gap-1 shrink-0 transition-all hover:scale-105"
                        >
                          <Maximize2 className="w-3 h-3 text-blue-600" />
                          <span>
                            {currentLang === 'ko'
                              ? '사진 확대'
                              : currentLang === 'vi'
                              ? 'Xem ảnh'
                              : currentLang === 'zh'
                              ? '放大查看'
                              : 'Enlarge'}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Representative Items Checklist */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {t.representativeItems}
                      </span>
                      {cat.subItemDetails && (
                        <button
                          type="button"
                          onClick={() => setSelectedPhotoCategory(cat)}
                          className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          <Info className="w-3 h-3" />
                          <span>
                            {currentLang === 'ko'
                              ? '품목별 사진 보기'
                              : currentLang === 'vi'
                              ? 'Xem chi tiết ảnh'
                              : currentLang === 'zh'
                              ? '查看单品照片'
                              : 'View Photos'}
                          </span>
                        </button>
                      )}
                    </div>
                    <ul className="space-y-1.5">
                      {items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RFQ Direct Action */}
                <div className="pt-6 mt-4">
                  <button
                    onClick={() => onSelectCategoryForRfq(cat.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 text-blue-700 font-bold text-xs border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-center gap-1.5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
                  >
                    <span>{t.requestBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Packaging Materials Photo & 6 Sub-items Lightbox Modal */}
      {selectedPhotoCategory && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPhotoCategory(null)}
        >
          <div
            className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  {getCategoryIcon(selectedPhotoCategory.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-black">
                    {selectedPhotoCategory.title[currentLang]} -{' '}
                    {currentLang === 'ko'
                      ? '실제 공급 자재 사진'
                      : currentLang === 'vi'
                      ? 'Hình ảnh thực tế vật tư'
                      : currentLang === 'zh'
                      ? '实物物料照片'
                      : 'Actual Material Photos'}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {currentLang === 'ko'
                      ? `베트남 내 고객사 납품용 고품질 ${selectedPhotoCategory.title[currentLang]} 6대 핵심 품목`
                      : currentLang === 'vi'
                      ? `6 nhóm vật tư ${selectedPhotoCategory.title[currentLang]} chất lượng cao cung ứng cho nhà máy tại Việt Nam`
                      : currentLang === 'zh'
                      ? `面向在越制造企业稳定交付的高品质 ${selectedPhotoCategory.title[currentLang]} 6 大核心品类`
                      : `6 core ${selectedPhotoCategory.title[currentLang]} items supplied to enterprise facilities across Vietnam`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPhotoCategory(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Main Full Photo */}
              {selectedPhotoCategory.image && (
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900/5 p-2 flex justify-center items-center">
                  <img
                    src={selectedPhotoCategory.image}
                    alt={selectedPhotoCategory.title[currentLang]}
                    className="w-auto h-auto object-contain max-h-[500px] mx-auto rounded-lg shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* 6 Sub-items Grid */}
              {selectedPhotoCategory.subItemDetails && (
                <div>
                  <div className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>
                      {currentLang === 'ko'
                        ? '취급 6대 주요 품목군 상세 안내'
                        : currentLang === 'vi'
                        ? 'Chi tiết 6 nhóm mặt hàng đóng gói chính'
                        : currentLang === 'zh'
                        ? '6 大核心品类详细说明'
                        : '6 Core Packaging Item Specifications'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {selectedPhotoCategory.subItemDetails.map((subItem) => (
                      <div
                        key={subItem.id}
                        className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          {subItem.image && (
                            <div className="h-32 rounded-lg overflow-hidden border border-slate-200 mb-2.5 bg-white flex items-center justify-center p-1">
                              <img
                                src={subItem.image}
                                alt={subItem.name[currentLang]}
                                className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
                          <div className="font-extrabold text-xs sm:text-sm text-slate-900 mb-1">
                            {subItem.name[currentLang]}
                          </div>
                          <div className="text-[11px] text-slate-600 leading-relaxed mb-3">
                            {subItem.desc[currentLang]}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPhotoCategory(null);
                            onSelectCategoryForRfq(selectedPhotoCategory.id);
                          }}
                          className="w-full py-1.5 px-2.5 rounded-lg bg-white hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-[11px] border border-blue-200 hover:border-blue-600 transition-colors flex items-center justify-center gap-1"
                        >
                          <span>
                            {currentLang === 'ko'
                              ? '이 품목 견적요청'
                              : currentLang === 'vi'
                              ? 'Báo giá mặt hàng này'
                              : currentLang === 'zh'
                              ? '申请本品报价'
                              : 'Request Quote'}
                          </span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                {currentLang === 'ko'
                  ? '※ 원하시는 규격, 두께, 색상, 로고 인쇄 등 맞춤 제작 공급이 가능합니다.'
                  : currentLang === 'vi'
                  ? '※ Nhận gia công theo kích thước, độ dày, màu sắc và in ấn logo theo yêu cầu.'
                  : currentLang === 'zh'
                  ? '※ 支持按客户所需规格、厚度、颜色及企业Logo印刷定制加工。'
                  : '※ Custom specifications, thicknesses, colors, and logo printing available upon request.'}
              </div>
              <button
                onClick={() => {
                  const catId = selectedPhotoCategory.id;
                  setSelectedPhotoCategory(null);
                  onSelectCategoryForRfq(catId);
                }}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{t.requestBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

