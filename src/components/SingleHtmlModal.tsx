import React, { useState } from 'react';
import { X, Copy, Check, Download, CodeXml, ExternalLink } from 'lucide-react';
import { generateStandaloneHtml } from '../standaloneHtml';
import { Language } from '../types';
import { UI_TEXT } from '../translations';
import { PmsEmblem } from './PmsLogo';

interface SingleHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const SingleHtmlModal: React.FC<SingleHtmlModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [copied, setCopied] = useState(false);
  const t = UI_TEXT[currentLang];

  if (!isOpen) return null;

  const htmlCode = generateStandaloneHtml();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback for iframe restrictions
      const textarea = document.createElement('textarea');
      textarea.value = htmlCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pms-vina-mro.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6">
      <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <PmsEmblem size={32} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>{t.singleHtmlModalTitle}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-blue-900/60 border border-blue-700 text-cyan-300 rounded-md">
                  Standalone Single File
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {t.singleHtmlModalDesc}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Code Preview Area */}
        <div className="flex-1 overflow-hidden p-4 bg-slate-950 flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs text-slate-400">
            <span className="font-mono">pms-vina-mro.html (Tailwind CSS CDN + JS Embedded)</span>
            <span>{Math.round(htmlCode.length / 1024)} KB</span>
          </div>
          <pre className="flex-1 overflow-auto p-4 rounded-xl bg-slate-900 text-[12px] font-mono text-slate-300 leading-relaxed border border-slate-800 selection:bg-blue-600">
            <code>{htmlCode}</code>
          </pre>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            <span>이 파일 하나만 저장하여 더블클릭하면 모든 브라우저에서 100% 정상 작동합니다.</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t.copied : t.copyCode}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-500 flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>{t.downloadHtml}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
