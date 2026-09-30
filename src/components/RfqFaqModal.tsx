import React from 'react';
import { X, HelpCircle, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { RFQ_FAQ_ITEMS, RFQ_EMPATHY_MESSAGE } from '../rfqFaqData';
import { PmsLogo } from './PmsLogo';

interface RfqFaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onGoToRfqForm?: () => void;
}

export const RfqFaqModal: React.FC<RfqFaqModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onGoToRfqForm,
}) => {
  if (!isOpen) return null;

  const empathy = RFQ_EMPATHY_MESSAGE[currentLang];

  const titles: Record<Language, { modalTitle: string; subtitle: string; close: string; rfqBtn: string }> = {
    ko: {
      modalTitle: '베트남 진출 기업의 9가지 현실적 고민과 PMS의 솔직한 답변',
      subtitle: '사이트맵 – 팝업 (RFQ 견적 요청 전 꼭 읽어보세요)',
      close: '닫기',
      rfqBtn: '지금 바로 RFQ 견적 요청하기',
    },
    en: {
      modalTitle: '9 Practical Dilemmas of Manufacturing in Vietnam & Honest Answers from PMS',
      subtitle: 'Sitemap – FAQ Popup (Must-Read before Requesting RFQ)',
      close: 'Close',
      rfqBtn: 'Request RFQ Now',
    },
    vi: {
      modalTitle: '9 Nỗi Băn Khoăn Thực Tế Của Doanh Nghiệp FDI & Lời Giải Đáp Chân Thành Từ PMS',
      subtitle: 'Sitemap – Popup Hỏi Đáp Thực Tế (Khuyến nghị đọc trước khi gửi RFQ)',
      close: 'Đóng',
      rfqBtn: 'Gửi yêu cầu RFQ ngay',
    },
    zh: {
      modalTitle: '越南制造业企业在采购中的 9 大现实困惑与 PMS 的诚恳解答',
      subtitle: '网站地图 – 弹窗问答（提交 RFQ 询价前必读）',
      close: '关闭',
      rfqBtn: '立即提交 RFQ 询价',
    },
  };

  const t = titles[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border-b border-slate-800 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <PmsLogo size="sm" variant="official" theme="dark" />
              <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 text-[11px] font-bold tracking-wider uppercase">
                {t.subtitle}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              {t.modalTitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors shrink-0"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 divide-y divide-slate-100">
          {/* List of 9 Q&As */}
          <div className="space-y-6">
            {RFQ_FAQ_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 hover:bg-blue-50/40 border border-slate-200/90 transition-colors space-y-3"
              >
                {/* Question */}
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5 shadow-sm">
                    Q{idx + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-sm sm:text-base text-blue-700 leading-snug">
                      {item.question[currentLang]}
                    </h3>
                    {item.keyHighlight && (
                      <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">
                        {item.keyHighlight[currentLang]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Answer */}
                <div className="pl-10 text-slate-800 text-xs sm:text-sm leading-relaxed whitespace-pre-line bg-white/90 p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="font-medium text-slate-800">
                      {item.answer[currentLang]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empathy Box in Red as in Slide 2 */}
          <div className="pt-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 border-2 border-red-300 text-red-900 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-red-700 font-extrabold text-sm sm:text-base">
                <HeartHandshake className="w-5 h-5 text-red-600 shrink-0" />
                <span>{empathy.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                {empathy.body1}
              </p>
              <p className="text-xs sm:text-sm text-red-800 leading-relaxed font-medium">
                {empathy.body2}
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center px-4 py-2 rounded-xl bg-red-600 text-white font-extrabold text-sm sm:text-base shadow-sm">
                  {empathy.slogan}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 font-medium">
            PMS Vina · 100% Red Invoice · Anti-Kickback · ERP Powered
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors"
            >
              {t.close}
            </button>
            {onGoToRfqForm && (
              <button
                onClick={() => {
                  onClose();
                  onGoToRfqForm();
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>{t.rfqBtn}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
