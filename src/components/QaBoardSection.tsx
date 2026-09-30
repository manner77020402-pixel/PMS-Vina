import React, { useState, useEffect } from 'react';
import {
  PlusCircle,
  Lock,
  MessageSquare,
  Search,
  CheckCircle,
  CheckCircle2,
  Clock,
  X,
  ShieldCheck,
  Edit3,
  Trash2,
  Send,
  HelpCircle,
  AlertCircle,
  Mail,
} from 'lucide-react';
import { Language, QAItem } from '../types';
import { UI_TEXT, INITIAL_QA_ITEMS } from '../translations';
import {
  sendQaEmailNotification,
  buildQaMailtoUrl,
  TARGET_NOTIFICATION_EMAIL,
} from '../utils/emailClient';

interface QaBoardSectionProps {
  currentLang: Language;
}

const STORAGE_KEY = 'pms_vina_qa_items_v2';
const LEGACY_MOCK_IDS = ['QA-2026-089', 'QA-2026-088', 'QA-2026-087', 'QA-2026-086', 'QA-2026-085'];

export const QaBoardSection: React.FC<QaBoardSectionProps> = ({ currentLang }) => {
  const t = UI_TEXT[currentLang].qa;

  // Initialize from localStorage or empty array
  const [qaList, setQaList] = useState<QAItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Filter out legacy mock questions
          return parsed.filter((item: QAItem) => !LEGACY_MOCK_IDS.includes(item.id));
        }
      }
    } catch (e) {
      console.error('Failed to load QA items from localStorage', e);
    }
    return INITIAL_QA_ITEMS; // empty []
  });

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState<QAItem | null>(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  // Admin reply form inside detail modal
  const [isEditingAnswer, setIsEditingAnswer] = useState(false);
  const [answerContent, setAnswerContent] = useState('');
  const [respondentTitle, setRespondentTitle] = useState('');

  // New question form state
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newCategory, setNewCategory] = useState('포장자재');
  const [newContent, setNewContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  // Email notification state for Q&A submissions
  const [submittedQaItem, setSubmittedQaItem] = useState<QAItem | null>(null);
  const [qaEmailNotice, setQaEmailNotice] = useState<{ message: string; mailtoUrl: string } | null>(null);

  // Sync to localStorage
  const saveQaList = (newList: QAItem[]) => {
    setQaList(newList);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    } catch (e) {
      console.error('Failed to save QA items to localStorage', e);
    }
  };

  // When opening a selected item, initialize the answer state
  const handleOpenDetail = (item: QAItem) => {
    setSelectedItem(item);
    setIsEditingAnswer(false);
    setAnswerContent(item.answer || '');
    setRespondentTitle(t.adminRespondentDefault || 'PMS Vina 기술영업총괄팀');
  };

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newSeq = qaList.length + 1;
    const newId = `QA-${new Date().getFullYear()}-${String(newSeq).padStart(3, '0')}`;
    const today = new Date().toISOString().split('T')[0];

    const newItem: QAItem = {
      id: newId,
      title: isPrivate ? `[비밀글] ${newTitle}` : newTitle,
      category: newCategory,
      author: newAuthor,
      company: newCompany,
      email: newEmail.trim() || undefined,
      phone: newPhone.trim() || undefined,
      date: today,
      isPrivate,
      status: 'pending',
      content: newContent,
    };

    const updated = [newItem, ...qaList];
    saveQaList(updated);
    setIsWriteModalOpen(false);

    // Send email notification to kklee@pmsvina.com and Formspree
    try {
      const emailResult = await sendQaEmailNotification(newItem);
      setQaEmailNotice({
        message: emailResult.message || `Formspree 및 담당자(${TARGET_NOTIFICATION_EMAIL})에게 문의 알림이 전송되었습니다.`,
        mailtoUrl: emailResult.mailtoUrl || buildQaMailtoUrl(newItem, TARGET_NOTIFICATION_EMAIL),
      });
    } catch (err) {
      console.warn('QA email notification warning', err);
      setQaEmailNotice({
        message: `Formspree 및 담당자(${TARGET_NOTIFICATION_EMAIL}) 알림 대기열 등록 완료`,
        mailtoUrl: buildQaMailtoUrl(newItem, TARGET_NOTIFICATION_EMAIL),
      });
    }

    setSubmittedQaItem(newItem);

    // Reset form
    setNewTitle('');
    setNewAuthor('');
    setNewCompany('');
    setNewEmail('');
    setNewPhone('');
    setNewContent('');
    setIsPrivate(false);
  };

  const handleAdminAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedItem || !answerContent.trim()) return;

    const today = new Date().toISOString().split('T')[0];
    const updatedItem: QAItem = {
      ...selectedItem,
      answer: answerContent.trim(),
      answerDate: today,
      status: 'answered',
    };

    const updatedList = qaList.map((q) => (q.id === selectedItem.id ? updatedItem : q));
    saveQaList(updatedList);
    setSelectedItem(updatedItem);
    setIsEditingAnswer(false);
  };

  const handleDeleteItem = (id: string) => {
    if (window.confirm(t.deleteConfirm || '정말로 이 문의글을 삭제하시겠습니까?')) {
      const updatedList = qaList.filter((q) => q.id !== id);
      saveQaList(updatedList);
      if (selectedItem?.id === id) {
        setSelectedItem(null);
      }
    }
  };

  const filteredList = qaList.filter((item) => {
    if (!searchKeyword.trim()) return true;
    const kw = searchKeyword.toLowerCase();
    return (
      item.title.toLowerCase().includes(kw) ||
      item.category.toLowerCase().includes(kw) ||
      item.author.toLowerCase().includes(kw) ||
      item.company.toLowerCase().includes(kw) ||
      (item.content && item.content.toLowerCase().includes(kw))
    );
  });

  return (
    <section id="qa" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              {t.badge}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.heading}
            </h2>
            <p className="text-base text-slate-600 mt-2">
              {t.subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="검색어 입력 / Search..."
                className="pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 w-44 sm:w-56"
              />
            </div>

            {/* Post New Inquiry Button */}
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{t.btnNew}</span>
            </button>
          </div>
        </div>

        {/* Board Table or Empty State */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          {qaList.length === 0 ? (
            /* Clean Empty State when no real customer questions yet */
            <div className="py-20 px-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600 shadow-sm">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                {t.emptyState}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
                실제 고객님들의 제품 규격, 견적, 납기 문의를 등록하시면 PMS Vina 관리자가 신속하고 전문적인 공식 답변을 등록해 드립니다.
              </p>
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all"
              >
                <PlusCircle className="w-4 h-4" />
                <span>{t.btnNew}</span>
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-4 px-6 text-center w-16">
                      {t.tableHeader.num}
                    </th>
                    <th className="py-4 px-4 w-28">
                      {t.tableHeader.category}
                    </th>
                    <th className="py-4 px-6">
                      {t.tableHeader.title}
                    </th>
                    <th className="py-4 px-6 w-48">
                      {t.tableHeader.author}
                    </th>
                    <th className="py-4 px-6 text-center w-32">
                      {t.tableHeader.date}
                    </th>
                    <th className="py-4 px-6 text-center w-28">
                      {t.tableHeader.status}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredList.map((item, idx) => {
                    const isAnswered = item.status === 'answered' && Boolean(item.answer);
                    return (
                      <tr
                        key={item.id}
                        onClick={() => handleOpenDetail(item)}
                        className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                      >
                        <td className="py-4 px-6 text-center text-xs font-mono text-slate-400">
                          {filteredList.length - idx}
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-4 px-6 font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                          <div className="flex items-center gap-2">
                            {item.isPrivate && (
                              <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            )}
                            <span className="line-clamp-1">{item.title}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-xs text-slate-600">
                          <div className="truncate font-medium">{item.author}</div>
                          <div className="text-[11px] text-slate-400 truncate">
                            {item.company}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center text-xs font-mono text-slate-400 whitespace-nowrap">
                          {item.date}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full border whitespace-nowrap ${
                              isAnswered
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : 'bg-amber-50 text-amber-700 border-amber-200'
                            }`}
                          >
                            {isAnswered ? (
                              <CheckCircle className="w-3 h-3" />
                            ) : (
                              <Clock className="w-3 h-3" />
                            )}
                            <span>
                              {isAnswered ? t.statusAnswered : t.statusPending}
                            </span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredList.length === 0 && (
                <div className="py-16 text-center text-slate-400 text-sm">
                  <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>검색 조건과 일치하는 문의가 없습니다.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Inquiry Detail View & Admin Answer Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-100 text-blue-800">
                  {selectedItem.category}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {selectedItem.id}
                </span>
                {selectedItem.status === 'answered' && selectedItem.answer ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    {t.statusAnswered}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    <Clock className="w-3 h-3" />
                    {t.statusPending}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Privacy Warning banner if private */}
            {selectedItem.isPrivate && (
              <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2.5 text-xs text-amber-800">
                <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{t.privateNotice}</span>
              </div>
            )}

            {/* Title & Metadata */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              {selectedItem.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-5 pb-3 border-b border-slate-100">
              <span>
                작성자:{' '}
                <strong className="text-slate-700">
                  {selectedItem.author} {selectedItem.company ? `(${selectedItem.company})` : ''}
                </strong>
              </span>
              <span>
                등록일:{' '}
                <strong className="text-slate-700">{selectedItem.date}</strong>
              </span>
            </div>

            {/* Customer Question Content */}
            <div className="mb-6">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                문의 내용 (Customer Inquiry)
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                {selectedItem.content}
              </div>
            </div>

            {/* Admin Response Display (if answered and not editing) */}
            {selectedItem.answer && !isEditingAnswer && (
              <div className="p-5 rounded-2xl bg-blue-50/90 border border-blue-200 text-sm text-slate-800 mb-6">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-blue-200/60">
                  <div className="flex items-center gap-2 font-bold text-blue-900">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>{t.replyBadge}</span>
                    <span className="text-xs font-normal text-blue-600">
                      ({selectedItem.answerDate || selectedItem.date})
                    </span>
                  </div>
                  <button
                    onClick={() => setIsEditingAnswer(true)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-800 text-xs font-bold transition-all"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{t.adminAnswerEditBtn || '답변 수정'}</span>
                  </button>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {selectedItem.answer}
                </p>
              </div>
            )}

            {/* Pending State Prompt (if no answer and not editing) */}
            {!selectedItem.answer && !isEditingAnswer && (
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-900 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                  <p className="font-medium">
                    {t.pendingNotice}
                  </p>
                </div>
                <button
                  onClick={() => setIsEditingAnswer(true)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.adminAnswerBtn || '관리자 답변 작성'}</span>
                </button>
              </div>
            )}

            {/* Admin Response Editor Form */}
            {isEditingAnswer && (
              <form onSubmit={handleAdminAnswerSubmit} className="p-5 rounded-2xl bg-slate-50 border border-blue-300 shadow-inner mb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>{t.adminReplySection || '관리자 답변 관리'}</span>
                  </div>
                  <span className="text-[11px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    Admin Support
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.adminRespondentLabel || '답변 담당 부서/직책'}
                  </label>
                  <input
                    type="text"
                    value={respondentTitle}
                    onChange={(e) => setRespondentTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:border-blue-600"
                    placeholder="PMS Vina 기술영업총괄팀"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    공식 답변 내용 *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={answerContent}
                    onChange={(e) => setAnswerContent(e.target.value)}
                    placeholder={t.adminAnswerPlaceholder || '고객님의 문의에 대한 공식 답변 내용을 작성해 주세요.'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingAnswer(false)}
                    className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors"
                  >
                    {t.adminCancelBtn || '취소'}
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.adminSubmitBtn || '답변 등록 완료'}</span>
                  </button>
                </div>
              </form>
            )}

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleDeleteItem(selectedItem.id)}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-red-600 hover:bg-red-50 text-xs font-bold transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t.deleteBtn || '문의 삭제'}</span>
                </button>

                <a
                  href={buildQaMailtoUrl(selectedItem, TARGET_NOTIFICATION_EMAIL)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs border border-blue-200 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{TARGET_NOTIFICATION_EMAIL} 메일로 열기</span>
                </a>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Write New Inquiry Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <h3 className="text-lg font-bold text-slate-900">
                {t.writeModal.title}
              </h3>
              <button
                onClick={() => setIsWriteModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePostSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.writeModal.fieldTitle} *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm"
                  placeholder={t.writeModal.fieldTitlePlaceholder}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.writeModal.fieldAuthor} *
                  </label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.writeModal.fieldCompany} *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm"
                    placeholder="(주)한국전자"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    회신 이메일
                  </label>
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm"
                    placeholder="user@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    연락처 (전화번호)
                  </label>
                  <input
                    type="tel"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.writeModal.fieldCategory} *
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm"
                >
                  <option value="포장자재">포장자재</option>
                  <option value="전기용품">전기용품</option>
                  <option value="공구부품">공구부품</option>
                  <option value="안전용품">안전용품</option>
                  <option value="클린룸 용품">클린룸 용품</option>
                  <option value="사무용품">사무용품</option>
                  <option value="일반용품">일반용품</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.writeModal.fieldContent} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm"
                  placeholder={t.writeModal.fieldContentPlaceholder}
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-is-private"
                  checked={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="modal-is-private"
                  className="text-xs text-slate-600 cursor-pointer"
                >
                  {t.writeModal.isPrivate}
                </label>
              </div>

              {/* Automatic Email Notice */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-cyan-50 border border-cyan-200 text-xs text-cyan-900">
                <Mail className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>
                  문의 등록 시 Formspree 및 담당자(<strong>{TARGET_NOTIFICATION_EMAIL}</strong>)에게 문의 내역이 실시간 자동 수집·발송됩니다.
                </span>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                >
                  {t.writeModal.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow"
                >
                  {t.writeModal.submitBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Post Registration Confirmation Modal */}
      {submittedQaItem && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              문의글이 성공적으로 등록되었습니다
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              작성하신 고객 문의사항이 문의게시판에 정상 등록되었습니다.
            </p>

            {/* Email notification status */}
            <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-left text-xs mb-4">
              <div className="flex items-center gap-1.5 font-bold text-cyan-950 mb-1">
                <Mail className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>데이터 수집 및 담당자 알림 전송 완료</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                문의 내역이 Formspree 데이터 수집 시스템 및 담당자(<strong>{TARGET_NOTIFICATION_EMAIL}</strong>) 수신함으로 자동 전달되었습니다. 확인 후 신속하게 공식 답변을 등록해 드리겠습니다.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-4 text-left text-xs space-y-1.5">
              <div className="flex justify-between pb-1 border-b border-slate-200">
                <span className="text-slate-500">문의 번호:</span>
                <span className="font-mono font-bold text-blue-700">{submittedQaItem.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">제목:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[200px]">{submittedQaItem.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">작성자:</span>
                <span className="font-semibold text-slate-800">{submittedQaItem.author} {submittedQaItem.company ? `(${submittedQaItem.company})` : ''}</span>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={qaEmailNotice?.mailtoUrl || buildQaMailtoUrl(submittedQaItem, TARGET_NOTIFICATION_EMAIL)}
                className="w-full py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>{TARGET_NOTIFICATION_EMAIL} 메일 클라이언트로 확인/열기</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmittedQaItem(null)}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
