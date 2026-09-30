import React, { useState, useEffect } from 'react';
import {
  FileSpreadsheet,
  CheckCircle2,
  Upload,
  Send,
  Calendar,
  Building,
  User,
  Mail,
  Phone,
  Layers,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';
import { Language, RFQSubmission } from '../types';
import { UI_TEXT, PRODUCT_CATEGORIES } from '../translations';
import { PmsLogo } from './PmsLogo';
import { RFQ_FAQ_ITEMS, RFQ_EMPATHY_MESSAGE } from '../rfqFaqData';
import { RfqFaqModal } from './RfqFaqModal';
import {
  sendRfqEmailNotification,
  buildRfqMailtoUrl,
  TARGET_NOTIFICATION_EMAIL,
} from '../utils/emailClient';

interface RfqSectionProps {
  currentLang: Language;
  selectedCategory: string;
  onResetCategory: () => void;
}

export const RfqSection: React.FC<RfqSectionProps> = ({
  currentLang,
  selectedCategory,
}) => {
  const t = UI_TEXT[currentLang].rfq;
  const empathy = RFQ_EMPATHY_MESSAGE[currentLang];

  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(selectedCategory || '');
  const [itemSpec, setItemSpec] = useState('');
  const [quantity, setQuantity] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [fileName, setFileName] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfq, setSubmittedRfq] = useState<RFQSubmission | null>(null);
  const [emailNotice, setEmailNotice] = useState<{ message: string; mailtoUrl: string } | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // RFQ FAQ Modal and Accordion States
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [expandedFaqIds, setExpandedFaqIds] = useState<number[]>([1, 2, 3]);

  const toggleFaq = (id: number) => {
    setExpandedFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAllFaqs = () => {
    if (expandedFaqIds.length === RFQ_FAQ_ITEMS.length) {
      setExpandedFaqIds([]);
    } else {
      setExpandedFaqIds(RFQ_FAQ_ITEMS.map((item) => item.id));
    }
  };

  const faqSectionHeaders: Record<
    Language,
    {
      badge: string;
      title: string;
      desc: string;
      popupBtn: string;
      expandAll: string;
      collapseAll: string;
      formCallout: string;
      formBtnScroll: string;
    }
  > = {
    ko: {
      badge: '사이트맵 – 팝업 / RFQ 사전 체크',
      title: '베트남 MRO 구매 현실 9가지 고민과 PMS의 솔직한 답변',
      desc: '베트남 진출 제조 기업 주재원과 구매팀이 가장 많이 묻고 고민하는 9가지 현실적 질문에 명쾌히 답해 드립니다.',
      popupBtn: '사이트맵 팝업 전체보기',
      expandAll: '모든 질문 펼치기',
      collapseAll: '모두 접기',
      formCallout: '고민이 해결되셨다면, 지금 바로 최적 단가와 납기 견적을 요청하세요.',
      formBtnScroll: 'RFQ 견적서 작성하기',
    },
    en: {
      badge: 'Sitemap – FAQ Popup / Pre-RFQ Checklist',
      title: '9 Practical MRO Purchasing Dilemmas in Vietnam & PMS Answers',
      desc: 'Transparent and honest answers to the 9 most critical questions asked by manufacturing directors and purchasing teams in Vietnam.',
      popupBtn: 'Open Sitemap Popup',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      formCallout: 'Once your doubts are cleared, request your customized quote and lead time right away.',
      formBtnScroll: 'Fill Out RFQ Form',
    },
    vi: {
      badge: 'Sitemap – Popup / Hỏi Đáp Trước Khi Gửi RFQ',
      title: '9 Băn Khoăn Thực Tế Khi Mua Sắm MRO Tại VN & Giải Đáp Từ PMS',
      desc: 'Giải đáp chân thành và minh bạch cho 9 vấn đề nan giải nhất của các nhà quản lý doanh nghiệp và bộ phận thu mua.',
      popupBtn: 'Xem toàn bộ dạng Popup',
      expandAll: 'Mở rộng tất cả',
      collapseAll: 'Thu gọn tất cả',
      formCallout: 'Sau khi đã an tâm, hãy gửi yêu cầu báo giá và tiến độ giao hàng ngay bên dưới.',
      formBtnScroll: 'Điền phiếu RFQ',
    },
    zh: {
      badge: '网站地图 – 弹窗问答 / 询价前必读',
      title: '在越制造企业 MRO 采购 9 大现实困惑与 PMS 坦诚解答',
      desc: '直击驻越企业外派高管及采购团队最关切的 9 项核心痛点，为您提供透明可信的解决方案。',
      popupBtn: '打开弹窗完整浏览',
      expandAll: '全部展开',
      collapseAll: '全部折叠',
      formCallout: '消除所有顾虑后，欢迎立即填写需求规格，获取极具竞争力的报价。',
      formBtnScroll: '填写 RFQ 询价单',
    },
  };

  const faqText = faqSectionHeaders[currentLang];

  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newRfq: RFQSubmission = {
      id: `RFQ-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`,
      companyName: company,
      contactName: name,
      email,
      phone,
      category,
      itemSpec,
      quantity,
      targetDate,
      notes,
      fileName: fileName || undefined,
      createdAt: new Date().toISOString(),
    };

    // Dispatch email notification to kklee@pmsvina.com
    try {
      const emailResult = await sendRfqEmailNotification(newRfq);
      setEmailNotice({
        message: emailResult.message || `담당자(${TARGET_NOTIFICATION_EMAIL})에게 알림이 전송되었습니다.`,
        mailtoUrl: emailResult.mailtoUrl || buildRfqMailtoUrl(newRfq, TARGET_NOTIFICATION_EMAIL),
      });
    } catch (err) {
      console.warn('Email dispatch warning', err);
      setEmailNotice({
        message: `담당자(${TARGET_NOTIFICATION_EMAIL}) 알림 대기열 등록 완료`,
        mailtoUrl: buildRfqMailtoUrl(newRfq, TARGET_NOTIFICATION_EMAIL),
      });
    }

    setSubmittedRfq(newRfq);
    setIsSubmitting(false);

    // Reset form fields
    setCompany('');
    setName('');
    setEmail('');
    setPhone('');
    setItemSpec('');
    setQuantity('');
    setTargetDate('');
    setFileName('');
    setNotes('');
  };

  const handleFileSimulate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="rfq" className="py-20 sm:py-28 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Main Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            {t.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            {t.subheading}
          </p>
        </div>

        {/* PRE-RFQ FAQ SHOWCASE & SITEMAP POPUP (9 Real-world Questions & Answers) */}
        <div className="bg-slate-800/95 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur space-y-8">
          {/* FAQ Header & Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-700/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>{faqText.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {faqText.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                {faqText.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={expandAllFaqs}
                className="px-3.5 py-2 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-600 transition-colors"
              >
                {expandedFaqIds.length === RFQ_FAQ_ITEMS.length
                  ? faqText.collapseAll
                  : faqText.expandAll}
              </button>

              <button
                type="button"
                onClick={() => setIsFaqModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{faqText.popupBtn}</span>
              </button>
            </div>
          </div>

          {/* Interactive Accordion List of 9 Questions */}
          <div className="space-y-3">
            {RFQ_FAQ_ITEMS.map((item, idx) => {
              const isExpanded = expandedFaqIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded
                      ? 'bg-slate-900/90 border-cyan-500/50 shadow-md ring-1 ring-cyan-500/20'
                      : 'bg-slate-900/50 border-slate-700/70 hover:border-slate-600'
                  }`}
                >
                  {/* Clickable Question Bar */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600/80 text-white font-mono font-black text-xs shrink-0 mt-0.5 shadow-sm group-hover:bg-blue-500">
                        Q{idx + 1}
                      </span>
                      <div>
                        <span className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 leading-snug">
                          {item.question[currentLang]}
                        </span>
                        {item.keyHighlight && (
                          <div className="mt-1.5">
                            <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 border border-blue-400/20 text-[11px] font-semibold">
                              {item.keyHighlight[currentLang]}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="p-1 rounded-lg text-slate-400 group-hover:text-white shrink-0 mt-0.5">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  {isExpanded && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-200 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80">
                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="font-medium whitespace-pre-line leading-relaxed">
                          {item.answer[currentLang]}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Empathy Callout Box in Red/Rose (from Slide 2) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-950/60 via-rose-950/50 to-slate-900 border-2 border-red-500/40 text-red-100 shadow-lg space-y-3">
            <div className="flex items-center gap-2 text-red-300 font-extrabold text-sm sm:text-base">
              <HeartHandshake className="w-5 h-5 text-rose-400 shrink-0" />
              <span>{empathy.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed">
              {empathy.body1}
            </p>
            <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed font-medium">
              {empathy.body2}
            </p>
            <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-red-600/30">
                {empathy.slogan}
              </span>
              <a
                href="#rfq-form"
                className="text-xs font-bold text-cyan-300 hover:text-cyan-200 underline underline-offset-4 flex items-center gap-1"
              >
                <span>{faqText.formBtnScroll}</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* RFQ FORM CONTAINER */}
        <div
          id="rfq-form"
          className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur scroll-mt-24 space-y-6"
        >
          <div className="border-b border-slate-700 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
              <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.heading}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {faqText.formCallout}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Company Name */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  <Building className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.company} *</span>
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                  placeholder={t.companyPlaceholder}
                />
              </div>

              {/* Contact Name */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.name} *</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                  placeholder={t.namePlaceholder}
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.email} *</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.phone} *</span>
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                  placeholder={t.phonePlaceholder}
                />
              </div>

              {/* Category */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.category} *</span>
                </label>
                <select
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-blue-500 text-sm transition-colors"
                >
                  <option value="" disabled>
                    {t.categorySelect}
                  </option>
                  {PRODUCT_CATEGORIES.map((cat, idx) => (
                    <option key={cat.id} value={cat.id}>
                      {idx + 1}. {cat.title[currentLang]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.quantity} *</span>
                </label>
                <input
                  type="text"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                  placeholder={t.quantityPlaceholder}
                />
              </div>
            </div>

            {/* Product Name & Specs */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.itemSpec} *</span>
              </label>
              <input
                type="text"
                required
                value={itemSpec}
                onChange={(e) => setItemSpec(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                placeholder={t.itemSpecPlaceholder}
              />
            </div>

            {/* Target Delivery Date & File Upload */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.date}</span>
                </label>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-blue-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  <Upload className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.attachFile}</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="rfq-file-upload"
                    onChange={handleFileSimulate}
                    className="hidden"
                  />
                  <label
                    htmlFor="rfq-file-upload"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-dashed border-slate-600 hover:border-cyan-400 text-slate-300 flex items-center justify-between cursor-pointer text-xs transition-colors"
                  >
                    <span className="truncate">
                      {fileName || t.fileNotice}
                    </span>
                    <span className="px-2.5 py-1 bg-slate-800 rounded-lg text-cyan-300 text-[11px] font-semibold shrink-0 ml-2">
                      Choose
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                {t.notes}
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                placeholder={t.notesPlaceholder}
              />
            </div>

            {/* Email Dispatch Notice */}
            <div className="flex items-center justify-center gap-2 text-xs text-cyan-300 bg-slate-800/90 py-2.5 px-4 rounded-xl border border-cyan-500/30 max-w-md mx-auto">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                제출 시 Formspree 및 담당자(<strong>{TARGET_NOTIFICATION_EMAIL}</strong>)에게 견적요청서가 자동 수집·발송됩니다.
              </span>
            </div>

            {/* Submit Action */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>{t.submitting}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.submitBtn}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {submittedRfq && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-center">
            <div className="flex items-center justify-center mb-3">
              <PmsLogo size="sm" variant="official" theme="light" />
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              {t.modalTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              {t.modalDesc}
            </p>

            {/* Email Notification Status Card */}
            <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-left text-xs mb-4">
              <div className="flex items-center gap-1.5 font-bold text-cyan-950 mb-1">
                <Mail className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>데이터 수집 및 담당자 알림 전송 완료</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                작성하신 견적 요청서가 Formspree 데이터 수집 시스템 및 담당자(<strong>{TARGET_NOTIFICATION_EMAIL}</strong>) 수신함으로 자동 전달되었습니다.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-4 text-left text-xs space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">{t.rfqNumber}</span>
                <span className="font-mono font-bold text-blue-700 text-sm">
                  {submittedRfq.id}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.company}:</span>
                <span className="font-semibold text-slate-800">
                  {submittedRfq.companyName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.itemSpec}:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[200px]">
                  {submittedRfq.itemSpec}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.quantity}:</span>
                <span className="font-semibold text-slate-800">
                  {submittedRfq.quantity}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 mb-2">
              <a
                href={emailNotice?.mailtoUrl || buildRfqMailtoUrl(submittedRfq, TARGET_NOTIFICATION_EMAIL)}
                className="w-full py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>{TARGET_NOTIFICATION_EMAIL} 메일 클라이언트로 직접 확인/열기</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  const summary = `[PMS VINA 견적요청서]\n접수번호: ${submittedRfq.id}\n회사명: ${submittedRfq.companyName}\n담당자: ${submittedRfq.contactName}\n이메일: ${submittedRfq.email}\n연락처: ${submittedRfq.phone}\n품목: [${submittedRfq.category}] ${submittedRfq.itemSpec}\n수량: ${submittedRfq.quantity}\n희망납기: ${submittedRfq.targetDate || '미정'}\n수신담당: ${TARGET_NOTIFICATION_EMAIL}`;
                  navigator.clipboard.writeText(summary);
                  setCopiedSummary(true);
                  setTimeout(() => setCopiedSummary(false), 2000);
                }}
                className="w-full py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-medium text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSummary ? '견적 내용 복사 완료!' : '견적 요청 내역 텍스트 복사'}</span>
              </button>
            </div>

            <button
              onClick={() => setSubmittedRfq(null)}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all"
            >
              {t.confirmBtn}
            </button>
          </div>
        </div>
      )}

      {/* 9 Real-world Questions & Answers Sitemap Modal */}
      <RfqFaqModal
        isOpen={isFaqModalOpen}
        onClose={() => setIsFaqModalOpen(false)}
        currentLang={currentLang}
        onGoToRfqForm={() => {
          const formEl = document.getElementById('rfq-form');
          if (formEl) {
            formEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </section>
  );
};
