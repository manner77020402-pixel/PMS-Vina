import { PACKAGING_MATERIALS_IMAGE } from './packagingMaterialsBase64';
import { ELECTRICAL_SUPPLIES_IMAGE } from './electricalSuppliesBase64';
import { TOOLS_SUPPLIES_IMAGE } from './toolsSuppliesBase64';
import { SAFETY_SUPPLIES_IMAGE } from './safetySuppliesBase64';
import { CLEANROOM_SUPPLIES_IMAGE } from './cleanroomSuppliesBase64';
import { OFFICE_SUPPLIES_IMAGE } from './officeSuppliesBase64';
import { GENERAL_SUPPLIES_IMAGE } from './generalSuppliesBase64';

export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="ko" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cpath fill='%23CB2987' fill-rule='evenodd' clip-rule='evenodd' d='M 153.6 50.3 A 75 75 0 1 0 164.9 86.1 L 138.8 77.2 L 153.6 50.3 Z M 90 57 A 33 33 0 1 0 90 123 A 33 33 0 1 0 90 57 Z'/%3E%3C/svg%3E" />
  <title>PMS Vina | MRO Total Industrial Solutions</title>
  <meta name="description" content="다국어(KO, EN, VI, ZH) 산업재 및 MRO 자재 전문 공급 기업 PMS Vina 공식 웹사이트" />
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', 'Noto Sans KR', sans-serif;
    }
    .lang-active {
      background-color: #1e3a8a !important;
      color: #ffffff !important;
      border-color: #1e3a8a !important;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">

  <!-- TOP MULTILINGUAL BAR -->
  <header class="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Official PMS Logo -->
        <a href="#hero" class="flex items-center gap-3 group">
          <svg viewBox="0 0 180 180" class="w-10 h-10 shrink-0 transition-transform group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PMS Official Symbol">
            <path fill="#CB2987" fill-rule="evenodd" clip-rule="evenodd" d="M 153.6 50.3 A 75 75 0 1 0 164.9 86.1 L 138.8 77.2 L 153.6 50.3 Z M 90 57 A 33 33 0 1 0 90 123 A 33 33 0 1 0 90 57 Z" />
          </svg>
          <div class="flex flex-col">
            <span class="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5 leading-none">
              PMS <span class="text-cyan-400">VINA</span>
            </span>
            <span class="text-[10px] tracking-wider text-slate-400 uppercase font-semibold mt-1">MRO Total Industrial Supply</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold">
          <a href="#about" class="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors" data-i18n="nav.about">회사소개</a>
          <a href="#values" class="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors" data-i18n="nav.values">가치와 약속</a>
          <a href="#products" class="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors" data-i18n="nav.products">취급품목</a>
          <a href="#strengths" class="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors" data-i18n="nav.strengths">PMS의 장점</a>
          <a href="#rfq" class="px-3 py-2 rounded-lg text-cyan-300 hover:text-white hover:bg-blue-900/60 transition-colors" data-i18n="nav.rfq">RFQ 견적요청</a>
          <a href="#qa" class="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors" data-i18n="nav.board">문의게시판</a>
        </nav>

        <!-- Language Selector Buttons -->
        <div class="flex items-center gap-1 sm:gap-2">
          <div class="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700/80 shadow-inner" id="lang-btn-group">
            <button onclick="setLanguage('ko')" class="lang-btn lang-active px-2.5 py-1 text-xs font-bold rounded-lg transition-all text-slate-300 hover:text-white" data-lang="ko">
              <span class="mr-1">🇰🇷</span> KO
            </button>
            <button onclick="setLanguage('en')" class="lang-btn px-2.5 py-1 text-xs font-bold rounded-lg transition-all text-slate-300 hover:text-white" data-lang="en">
              <span class="mr-1">🇺🇸</span> EN
            </button>
            <button onclick="setLanguage('vi')" class="lang-btn px-2.5 py-1 text-xs font-bold rounded-lg transition-all text-slate-300 hover:text-white" data-lang="vi">
              <span class="mr-1">🇻🇳</span> VI
            </button>
            <button onclick="setLanguage('zh')" class="lang-btn px-2.5 py-1 text-xs font-bold rounded-lg transition-all text-slate-300 hover:text-white" data-lang="zh">
              <span class="mr-1">🇨🇳</span> ZH
            </button>
          </div>
          
          <a href="#rfq" class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-sm transition-all" data-i18n="hero.btnRfq">
            견적요청
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="hero" class="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-16 pb-24 sm:pt-20 sm:pb-32">
    <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#38bdf8 1px, transparent 1px); background-size: 24px 24px;"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-semibold mb-6">
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span data-i18n="hero.pill">베트남 진출 글로벌 기업을 위한 스마트 MRO</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none text-white mb-6">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300" data-i18n="hero.titleHighlight">원스톱 MRO 산업재 공급,</span><br/>
          <span class="text-white" data-i18n="hero.titleEnd">PMS Vina가 함께합니다</span>
        </h1>

        <p class="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 leading-relaxed font-normal" data-i18n="hero.subtitle">
          포장, 전기, 공구, 안전, 클린룸, 사무, 일반 소모품까지 — 현지 조달 시간과 구매 원가를 획기적으로 절감하는 토털 비즈니스 파트너
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="#rfq" class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all gap-2">
            <i data-lucide="file-spreadsheet" class="w-4 h-4"></i>
            <span data-i18n="hero.btnRfq">즉시 RFQ 견적요청</span>
          </a>
          <a href="#products" class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all gap-2">
            <i data-lucide="layers" class="w-4 h-4"></i>
            <span data-i18n="hero.btnProducts">취급품목 카테고리 보기</span>
          </a>
        </div>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 sm:mt-20 pt-10 border-t border-slate-800/80">
        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
          <div class="text-2xl sm:text-3xl font-black text-cyan-400" data-i18n="hero.stat1Val">15,000+</div>
          <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium" data-i18n="hero.stat1Label">공급 가능 MRO 품목군</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
          <div class="text-2xl sm:text-3xl font-black text-blue-400" data-i18n="hero.stat2Val">99.4%</div>
          <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium" data-i18n="hero.stat2Label">정시 납기 준수율</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
          <div class="text-2xl sm:text-3xl font-black text-indigo-400" data-i18n="hero.stat3Val">350+</div>
          <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium" data-i18n="hero.stat3Label">베트남 입주 고객사</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
          <div class="text-2xl sm:text-3xl font-black text-emerald-400" data-i18n="hero.stat4Val">24h</div>
          <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium" data-i18n="hero.stat4Label">신속 견적 및 당일 발송 체계</div>
        </div>
      </div>
    </div>
  </section>

  <!-- COMPANY ABOUT SECTION -->
  <section id="about" class="py-20 sm:py-28 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4" data-i18n="about.badge">
          About PMS Vina
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" data-i18n="about.heading">
          신뢰와 전문성으로 완성하는 산업재 공급 인프라
        </h2>
        <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed" data-i18n="about.lead">
          PMS Vina는 베트남 주요 산업단지에 진출한 제조 및 글로벌 엔터프라이즈를 위한 MRO(유지·보수·운영) 자재 전문 유통 기업입니다.
        </p>
      </div>

      <!-- CEO Message & Overview Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- CEO Greeting Card -->
        <div class="lg:col-span-7 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl"></div>
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-cyan-300">
                <i data-lucide="quote" class="w-5 h-5"></i>
              </div>
              <span class="text-xs font-bold uppercase tracking-widest text-cyan-400" data-i18n="about.ceoTitle">CEO 인사말</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold leading-snug text-white mb-6" data-i18n="about.ceoGreeting">
              "광대한 구매 네트워크와 투명한 시스템, 베트남 내 한국 기업을 위한 MRO 일류 파트너"
            </h3>
            <p class="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line" data-i18n="about.ceoMessage">현재 베트남의 구매 환경은 베트남 전체의 빠른 경제 성장에 발맞추지 못하고 많이 낙후되어 있습니다.

공급 인프라가 성숙되지 못하여 공급 가능 물품의 다양성이 현저히 떨어지고, 부도덕한 구매 관행 및 시장의 불투명성으로 대부분의 기업들이 불필요한 비용을 지출하고 있습니다.

PMS는 베트남 내 한국 회사들에게 소모품, 부자재 등의 납품 전문 및 중국 직접 구매 전문 회사입니다.

광대한 베트남 및 중국의 구매 네트워크를 통해 필요한 모든 제품을 경쟁력 있는 가격으로 공급하고, 로컬 업체와는 차별화된 시스템으로 보다 깨끗하고 도덕성을 갖춘 회사입니다.

PMS는 베트남 내 MRO에 대한 전문성, 중국 직접 구매에 대한 노하우를 바탕으로 고객과의 끊임없는 커뮤니케이션, 지속적인 시장조사를 통해서 베트남의 한국 회사 전문 MRO 일류 회사로 성장, 발전하기 위하여 최선을 다할 것입니다.

회사 설립 이래 지금까지 무한한 믿음으로 PMS를 지켜봐 주신 고객들에게 감사드리며, 믿음에 실망시켜드리지 않기 위해 모든 직원들이 정직과 신뢰의 자세로 열정을 다해 임할 것을 약속드립니다.</p>
          </div>
          <div class="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
            <span class="font-bold text-sm text-cyan-300" data-i18n="about.ceoSignature">PMS Vina 임직원 일동 & 대표이사 배상</span>
            <span class="text-xs text-slate-400">PMS VINA CO., LTD.</span>
          </div>
        </div>

        <!-- 4 Corporate Values -->
        <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
              <i data-lucide="shield-check" class="w-5 h-5"></i>
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-2" id="val-t-0">절대적 신뢰 (Trust)</h4>
            <p class="text-sm text-slate-600 leading-relaxed" id="val-d-0">
              공인 규격 인증 정품 자재만을 공급하며, 투명한 단가 정책과 계약 준수를 제1원칙으로 삼습니다.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
              <i data-lucide="zap" class="w-5 h-5"></i>
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-2" id="val-t-1">기민한 속도 (Speed)</h4>
            <p class="text-sm text-slate-600 leading-relaxed" id="val-d-1">
              하노이/박닌/하이퐁/호치민 인접 직영 물류 거점을 통해 24시간 내 긴급 대응 및 정시 직배송을 실현합니다.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
              <i data-lucide="trending-down" class="w-5 h-5"></i>
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-2" id="val-t-2">원가 혁신 (Cost Saving)</h4>
            <p class="text-sm text-slate-600 leading-relaxed" id="val-d-2">
              글로벌 제조사 직거래 및 통합 대량 구매를 통해 고객사의 MRO 구매 예산을 평균 15~25% 절감합니다.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
              <i data-lucide="handshake" class="w-5 h-5"></i>
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-2" id="val-t-3">파트너십 (Co-Prosperity)</h4>
            <p class="text-sm text-slate-600 leading-relaxed" id="val-d-3">
              단순 납품을 넘어 고객사 설비 현장에 특화된 자재 표준화 컨설팅과 정기 재고 관리(VMI)를 함께 수행합니다.
            </p>
          </div>
        </div>
      </div>

      <!-- COMPANY OVERVIEW & PROFILE SECTION -->
      <div id="company-profile" class="mt-16 pt-12 border-t border-slate-200">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-600"></i>
              Company Profile
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
              회사개요 (Company Overview)
            </h3>
            <p class="text-sm sm:text-base text-slate-600 mt-2">
              2015년 설립 이래 베트남 내 한국 및 글로벌 제조기업의 든든한 MRO 구매 파트너로 성장해 왔습니다.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
              베트남 정식 인가 법인 (MST: 2301413244)
            </span>
          </div>
        </div>

        <!-- Metric Badges -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div class="flex items-center gap-2 text-blue-600 mb-1">
              <i data-lucide="calendar" class="w-4 h-4"></i>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">설립일</span>
            </div>
            <div class="text-xl sm:text-2xl font-black text-slate-900 font-mono">2015년</div>
            <div class="text-xs text-slate-500 mt-0.5">10년 연속 안정 공급</div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div class="flex items-center gap-2 text-indigo-600 mb-1">
              <i data-lucide="maximize-2" class="w-4 h-4"></i>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">사업장 면적</span>
            </div>
            <div class="text-xl sm:text-2xl font-black text-slate-900 font-mono">500㎡</div>
            <div class="text-xs text-slate-500 mt-0.5">자체 물류 및 창고 인프라</div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div class="flex items-center gap-2 text-emerald-600 mb-1">
              <i data-lucide="file-text" class="w-4 h-4"></i>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">세무등록번호</span>
            </div>
            <div class="text-lg sm:text-xl font-black text-slate-900 font-mono tracking-tight">2301413244</div>
            <div class="text-xs text-slate-500 mt-0.5">베트남 정규 세무 인가</div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div class="flex items-center gap-2 text-amber-600 mb-1">
              <i data-lucide="users" class="w-4 h-4"></i>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">주요 고객사</span>
            </div>
            <div class="text-xl sm:text-2xl font-black text-slate-900 font-mono">100+</div>
            <div class="text-xs text-slate-500 mt-0.5">글로벌 및 한국 제조사</div>
          </div>
        </div>

        <!-- Specification Table & Contact Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div class="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div class="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-sm text-slate-800">기본 정보 명세표</span>
              <span class="text-xs text-slate-500 font-mono">PMS VINA TRADING CO., LTD</span>
            </div>

            <div class="divide-y divide-slate-100 text-sm">
              <div class="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                <div class="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                  <i data-lucide="building-2" class="w-4 h-4 text-blue-600 shrink-0"></i>
                  <span>회 사 명</span>
                </div>
                <div class="sm:col-span-8 text-slate-900 font-bold mt-1 sm:mt-0 font-mono text-base">
                  PMS VINA TRADING CO., LTD
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                <div class="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                  <i data-lucide="user-check" class="w-4 h-4 text-blue-600 shrink-0"></i>
                  <span>대 표 자</span>
                </div>
                <div class="sm:col-span-8 text-slate-900 font-semibold mt-1 sm:mt-0">
                  이 경 규
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                <div class="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                  <i data-lucide="calendar" class="w-4 h-4 text-blue-600 shrink-0"></i>
                  <span>설 립 일</span>
                </div>
                <div class="sm:col-span-8 text-slate-900 font-medium mt-1 sm:mt-0">
                  2015년
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                <div class="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                  <i data-lucide="briefcase" class="w-4 h-4 text-blue-600 shrink-0"></i>
                  <span>사업 분야</span>
                </div>
                <div class="sm:col-span-8 text-slate-900 font-medium mt-1 sm:mt-0">
                  MRO (기업 소모 자재 구매 대행) 및 중국 직접 구매 전문
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                <div class="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                  <i data-lucide="maximize-2" class="w-4 h-4 text-blue-600 shrink-0"></i>
                  <span>사업장 면적</span>
                </div>
                <div class="sm:col-span-8 text-slate-900 font-medium mt-1 sm:mt-0">
                  500㎡ (자체 보관 창고 및 물류 센터)
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-center">
                <div class="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2">
                  <i data-lucide="file-text" class="w-4 h-4 text-blue-600 shrink-0"></i>
                  <span>영업 및 세무 등록 번호</span>
                </div>
                <div class="sm:col-span-8 font-mono font-bold text-blue-700 mt-1 sm:mt-0">
                  2301413244
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 hover:bg-slate-50/70 transition-colors items-start">
                <div class="sm:col-span-4 font-bold text-slate-700 flex items-center gap-2 pt-0.5">
                  <i data-lucide="map-pin" class="w-4 h-4 text-rose-500 shrink-0"></i>
                  <span>위 치</span>
                </div>
                <div class="sm:col-span-8 text-slate-900 font-medium mt-1 sm:mt-0 leading-relaxed">
                  Khu phố Giang Liễu, phường Phương Liễu, tỉnh Bắc Ninh, Việt Nam
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Quick Card -->
          <div class="lg:col-span-4 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div class="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
                <i data-lucide="phone" class="w-4 h-4"></i>
                <span>연 락 처</span>
              </div>
              <h4 class="text-xl font-bold text-white mb-4">
                고객사 전용 직통 핫라인
              </h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                한국어, 베트남어, 중국어 전담 인력이 상주하여 신속한 견적 발급 및 주문 상담을 지원합니다.
              </p>

              <div class="space-y-3 font-mono text-sm">
                <a href="tel:0372267700" class="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors">
                  <span class="w-7 h-7 rounded-lg bg-blue-500/30 flex items-center justify-center text-cyan-300 shrink-0 font-sans text-xs font-bold">KO</span>
                  <div>
                    <div class="text-[11px] font-sans text-slate-300">한국어 전담 상담</div>
                    <div class="font-bold text-white tracking-wide">0372267700</div>
                  </div>
                </a>

                <a href="tel:0967220322" class="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors">
                  <span class="w-7 h-7 rounded-lg bg-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0 font-sans text-xs font-bold">VN</span>
                  <div>
                    <div class="text-[11px] font-sans text-slate-300">Tiếng Việt / 中文</div>
                    <div class="font-bold text-white tracking-wide">0967220322</div>
                  </div>
                </a>

                <a href="mailto:PMS@PMSVINA.COM" class="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors">
                  <span class="w-7 h-7 rounded-lg bg-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0 font-sans text-xs font-bold">@</span>
                  <div class="overflow-hidden">
                    <div class="text-[11px] font-sans text-slate-300">공식 견적 및 수발주 이메일</div>
                    <div class="font-bold text-cyan-300 truncate">PMS@PMSVINA.COM</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
              <div class="flex flex-wrap items-center gap-2">
                <span>상담 가능: 월~토 08:00 - 18:00</span>
                <span class="text-slate-500 hidden sm:inline">|</span>
                <span class="text-cyan-300 font-mono font-medium">담당자 전화: (한국어)0372267700 / (베트남어, 중국어)0967220322</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 현장 인프라 및 직영 물류센터 갤러리 (Facility Gallery) -->
        <div id="facility-gallery" class="pt-8 pb-4">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                <i data-lucide="camera" class="w-3.5 h-3.5 text-blue-600"></i>
                현장 인프라 & 직영 물류센터
              </div>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
                자체 물류 인프라와 신속 직배송 현장
              </h3>
              <p class="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
                체계적인 랙 보관과 출하 검수, 전용 배송 차량을 갖춘 PMS Vina의 실제 사업장 및 창고 현장입니다.
              </p>
            </div>

            <div class="flex items-center gap-2 shrink-0">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                <i data-lucide="warehouse" class="w-3.5 h-3.5 text-blue-600"></i>
                실제 직영 사업장 및 물류 차량
              </span>
            </div>
          </div>

          <!-- 6 Photo Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div class="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src="/images/facility/pms_entrance.jpg" alt="사옥 및 창고 입구" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20">사옥 및 창고 입구</span>
                </div>
              </div>
              <div class="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div class="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">Facility Photo 01</div>
                  <h4 class="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">PMS Vina 사옥 및 창고 출입구</h4>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">베트남 박닌성 방류에 위치한 PMS Vina 사옥 및 창고 입구 전경입니다.</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span class="font-mono text-[11px] text-slate-400">PMS Vina Bac Ninh</span>
                </div>
              </div>
            </div>

            <div class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div class="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src="/images/facility/pms_center.jpg" alt="창고 보관 통로" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20">창고 보관 통로</span>
                </div>
              </div>
              <div class="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div class="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">Facility Photo 02</div>
                  <h4 class="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">창고 보관 및 운반 통로</h4>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">물품 이동과 보관을 위한 창고 내부 통로 전경입니다.</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span class="font-mono text-[11px] text-slate-400">PMS Vina Bac Ninh</span>
                </div>
              </div>
            </div>

            <div class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div class="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src="/images/facility/pms_warehouse_racks.jpg" alt="물품 보관 랙" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20">물품 보관 랙</span>
                </div>
              </div>
              <div class="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div class="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">Facility Photo 03</div>
                  <h4 class="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">품목별 보관 선반</h4>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">전기 자재, 공구 및 부자재를 품목별로 정리해 둔 보관 랙입니다.</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span class="font-mono text-[11px] text-slate-400">PMS Vina Bac Ninh</span>
                </div>
              </div>
            </div>

            <div class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div class="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src="/images/facility/pms_inventory.jpg" alt="포장재 및 소모품" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20">포장재 및 소모품</span>
                </div>
              </div>
              <div class="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div class="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">Facility Photo 04</div>
                  <h4 class="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">포장재 및 소모 자재 보관</h4>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">스트레치 필름, 에어캡, 포장재 및 생수 등을 적재해 둔 구역입니다.</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span class="font-mono text-[11px] text-slate-400">PMS Vina Bac Ninh</span>
                </div>
              </div>
            </div>

            <div class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div class="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src="/images/facility/pms_inspection.jpg" alt="검수 및 포장대" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20">검수 및 포장대</span>
                </div>
              </div>
              <div class="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div class="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">Facility Photo 05</div>
                  <h4 class="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">검수 및 포장 작업대</h4>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">출하 전 수량과 상태를 확인하고 포장하는 작업 공간입니다.</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span class="font-mono text-[11px] text-slate-400">PMS Vina Bac Ninh</span>
                </div>
              </div>
            </div>

            <div class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div class="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src="/images/facility/pms_delivery_truck.jpg" alt="배송 차량" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20">배송 차량</span>
                </div>
              </div>
              <div class="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div class="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">Facility Photo 06</div>
                  <h4 class="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">2톤 직배송 화물차</h4>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">주문받은 물품을 공장으로 직접 배송하는 2톤 화물 차량입니다.</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span class="font-mono text-[11px] text-slate-400">PMS Vina Bac Ninh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 주요 고객사 네트워크 -->
        <div class="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                <i data-lucide="users" class="w-3.5 h-3.5"></i>
                <span>주요 고객사 (Key Clients)</span>
              </div>
              <h4 class="text-xl sm:text-2xl font-black text-slate-900">
                주요 고객사 및 파트너십 네트워크
              </h4>
            </div>
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-sm self-start sm:self-auto">
              100여개 제조 협력사
            </span>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed max-w-4xl">
            반도체, 정밀기계, 자동차 전장 등 베트남 북부 주요 산업단지에 입주한 유수의 글로벌 및 한국 대표 제조 기업들이 PMS Vina의 적시 납품 체계를 신뢰하고 있습니다.
          </p>

          <div class="flex flex-wrap gap-2.5">
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">태신 프린팅</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">CNC Vina</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">Jinyang MTS</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">이화 다이아 몬드</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">더스코비나</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">하나 마이크론</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">EM-tech</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">유라테크</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">DSGlobal</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">명신</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">웰스토리</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">한솔전자</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">명보</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">동화 ES</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">주광정밀</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">HKT</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">영인비나</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">신화</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">UIL</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">신흥정밀</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">HJC</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">드림테크</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">제일테크</span>
            <span class="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800">우진 QPD</span>
            <span class="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-sm">+ 100여개사</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PMS CORE VALUES & PROMISES (Price · Moral · Service) -->
  <section id="values" class="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <!-- Section Header -->
      <div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#CB2987] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <span>사이트맵 – 가치와 약속</span>
        </div>
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              PMS의 핵심 가치와 고객을 향한 약속
            </h2>
            <div class="text-xl sm:text-2xl font-black text-[#CB2987] mt-1 font-mono tracking-wide">
              Price · Moral · Service
            </div>
            <p class="text-base sm:text-lg text-slate-600 mt-3 max-w-3xl leading-relaxed">
              베트남 진출 제조 기업이 겪는 MRO 구매의 구조적 비효율을 해소하고, 구매 원가 절감(Price), 도덕적 투명 경영(Moral), 보이지 않는 비용과 시간 절감(Service)을 실현합니다.
            </p>
          </div>
          <div class="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
            <span class="text-xs font-bold text-slate-400 px-2">PMS 3대 축</span>
            <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold font-mono">P: Price</span>
            <span class="px-2.5 py-1 rounded-lg bg-pink-50 text-pink-700 text-xs font-bold font-mono">M: Moral</span>
            <span class="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold font-mono">S: Service</span>
          </div>
        </div>
      </div>

      <!-- Pillar 1: ① Price _ 구매 원가 절감 -->
      <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl font-mono shadow-md">
              P
            </div>
            <div>
              <div class="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">PILLAR 01 · 원가 경쟁력 혁신</div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">① Price _ 구매 원가 절감</h3>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-slate-500 max-w-md">
            대량 공동 구매 효과와 베트남·중국 직거래 소싱으로 최적 단가 실현
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div class="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#EBE7DF]/60 border border-[#DDD6C8] text-slate-900">
            <div>
              <div class="text-xs font-bold text-amber-900 uppercase tracking-wider mb-4">현지 MRO 구매 현실</div>
              <div class="p-4 rounded-xl bg-white/80 border border-[#D5CCBA] text-center space-y-1 mb-3">
                <div class="text-sm font-extrabold text-slate-800">다품종</div>
                <div class="text-sm font-extrabold text-slate-800">소량</div>
              </div>
              <div class="text-center my-2 text-slate-400 font-bold">➔</div>
              <div class="p-4 rounded-xl bg-slate-800 text-white text-center space-y-1.5 shadow-sm">
                <div class="text-xs sm:text-sm font-bold text-slate-100">경쟁력있는 업체 확보 어려움</div>
                <div class="text-xs sm:text-sm font-bold text-slate-100">단가 조정 어려움</div>
              </div>
            </div>
            <div class="mt-6 pt-4 border-t border-[#D5CCBA] text-[11px] text-slate-600">
              개별 기업의 소량 구매로는 원자재값 상승 대응 및 최적 공급선 확보에 한계가 존재합니다.
            </div>
          </div>

          <div class="lg:col-span-8 p-6 sm:p-8 rounded-2xl border-2 border-slate-900 bg-white shadow-md flex flex-col justify-between">
            <div class="space-y-4">
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">PMS 솔루션 & 약속</div>
              <div class="space-y-3">
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 text-sm">대량 구매로 단가 경쟁력 확보</span>
                  <span class="font-semibold text-blue-700 text-sm"> ➔ 공동 구매 효과</span>
                  <p class="text-xs text-slate-500 mt-1">100여 개 고객사의 공통 소모성 자재 수요를 결집해 제조사 직거래 볼륨 디스카운트를 이끌어냅니다.</p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 text-sm">베트남 및 중국 구매 전문 기업</span>
                  <span class="font-semibold text-blue-700 text-sm"> ➔ 현재 약 3,000여개 아이템 보유, 70여개 우수 업체 발굴</span>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 text-sm">단일 단가 적용</span>
                  <span class="font-semibold text-blue-700 text-sm"> ➔ 모든 고객사에 동일한 단일 단가 서비스 운영</span>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 text-sm">지속적인 시장 조사를 통한 가격 경쟁력 제고 추진</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-100">
              <div class="p-3 rounded-xl bg-slate-50 text-center">
                <div class="text-lg font-black text-blue-700 font-mono">3,000+</div>
                <div class="text-xs font-bold text-slate-800">보유 아이템군</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 text-center">
                <div class="text-lg font-black text-blue-700 font-mono">70+</div>
                <div class="text-xs font-bold text-slate-800">직소싱 협력사</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 text-center">
                <div class="text-lg font-black text-blue-700 font-mono">100%</div>
                <div class="text-xs font-bold text-slate-800">단일 단가제</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 text-center">
                <div class="text-lg font-black text-blue-700 font-mono">15~25%</div>
                <div class="text-xs font-bold text-slate-800">평균 원가 절감</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pillar 2: ② Moral _ 도덕적 회사 운영 -->
      <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-[#CB2987] text-white flex items-center justify-center font-black text-xl font-mono shadow-md">
              M
            </div>
            <div>
              <div class="text-xs font-bold text-[#CB2987] uppercase tracking-wider mb-0.5">PILLAR 02 · 투명 윤리 경영</div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">② Moral _ 도덕적 회사 운영</h3>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-slate-500 max-w-md">
            리베이트 없는 클린 거래, 100% 합법 영수증, 맞춤형 사용량 분석 보고서
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div class="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#EBE7DF]/60 border border-[#DDD6C8] text-slate-900">
            <div>
              <div class="text-xs font-bold text-rose-900 uppercase tracking-wider mb-4">현지 구매 관행 및 회계 리스크</div>
              <div class="p-4 rounded-xl bg-white/80 border border-[#D5CCBA] space-y-1.5 mb-3 text-center">
                <div class="text-xs font-extrabold text-slate-800">구두 발주 / 선입고 / 후처리</div>
                <div class="text-xs font-extrabold text-slate-800">영세업체 회계처리 (계산서 누락)</div>
                <div class="text-xs font-extrabold text-slate-800">베트남 독특한 구매 문화</div>
              </div>
              <div class="text-center my-2 text-slate-400 font-bold">➔</div>
              <div class="p-4 rounded-xl bg-slate-800 text-white text-center space-y-1.5 shadow-sm">
                <div class="text-xs sm:text-sm font-bold text-slate-100">불투명한 구매 환경</div>
                <div class="text-xs sm:text-sm font-bold text-slate-100">회계 처리 문제 (세무 리스크)</div>
                <div class="text-xs sm:text-sm font-bold text-slate-100">구매 원가 상승</div>
              </div>
            </div>
            <div class="mt-6 pt-4 border-t border-[#D5CCBA] text-[11px] text-slate-600">
              무자료 매입 및 불투명한 영수증 관행은 기업에 막대한 세무 감사 벌과금과 신뢰 손실을 초래합니다.
            </div>
          </div>

          <div class="lg:col-span-8 p-6 sm:p-8 rounded-2xl border-2 border-slate-900 bg-white shadow-md flex flex-col justify-between">
            <div class="space-y-4">
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">PMS 솔루션 & 약속</div>
              <div class="space-y-3">
                <div class="p-4 rounded-xl bg-pink-50/50 border border-pink-100">
                  <div class="font-bold text-slate-900 text-sm">리베이트 없는 투명한 거래 약속</div>
                  <p class="text-xs text-slate-600 mt-1">불공정 거래 및 음성적 리베이트를 원천 차단하여 기업의 본원적 구매 경쟁력을 지켜드립니다.</p>
                </div>
                <div class="p-4 rounded-xl bg-pink-50/50 border border-pink-100">
                  <div class="font-bold text-slate-900 text-sm">적법한 계산서 100% 발행</div>
                  <p class="text-xs text-slate-600 mt-1">➔ 기존처럼 무자료 구입으로 인한 외부 계산서 구입 불필요 (100% 공식 Red Invoice 직발행)</p>
                </div>
                <div class="p-4 rounded-xl bg-pink-50/50 border border-pink-100">
                  <div class="font-bold text-slate-900 text-sm">고객사별 ‘월간 보고서’ 제공</div>
                  <p class="text-xs text-slate-600 mt-1">➔ 사용량, 금액 분석 모니터링 보고서 (고객 요청시 제공)</p>
                </div>
              </div>
            </div>
            <div class="mt-6 p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
              <div class="text-xs">
                <span class="font-bold text-emerald-300">100% 정식 세금계산서 직발행 보장:</span> MST 2301413244
              </div>
              <span class="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono font-bold text-cyan-300">Red Invoice 100%</span>
            </div>
          </div>
        </div>

        <!-- 1분기 구매 실적표 샘플 (단위: VND) -->
        <div class="pt-6 border-t border-slate-200">
          <div class="flex items-center justify-between mb-4">
            <div>
              <div class="text-xs font-bold text-[#CB2987] uppercase tracking-wider">고객사별 구매 분석 모니터링 보고서 (실제 샘플)</div>
              <p class="text-xs text-slate-500">1분기(1~3월) 5대 카테고리별 구매 금액 명세 및 상위 10대 구매 아이템</p>
            </div>
            <span class="text-xs font-mono font-bold text-slate-500">단위: VND (베트남 동)</span>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-2xl overflow-x-auto shadow-xs mb-6">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="bg-white text-slate-700 font-bold border-b border-slate-200">
                  <th class="py-2.5 px-4">구 분</th>
                  <th class="py-2.5 px-4 text-right">1월</th>
                  <th class="py-2.5 px-4 text-right">2월</th>
                  <th class="py-2.5 px-4 text-right">3월</th>
                  <th class="py-2.5 px-4 text-right">합 계</th>
                  <th class="py-2.5 px-4 text-center">비중 (%)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 bg-white">
                <tr>
                  <td class="py-2.5 px-4 font-bold text-slate-900">일반 용품</td>
                  <td class="py-2.5 px-4 text-right font-mono">68,795,000</td>
                  <td class="py-2.5 px-4 text-right font-mono">255,290,050</td>
                  <td class="py-2.5 px-4 text-right font-mono">248,635,400</td>
                  <td class="py-2.5 px-4 text-right font-mono font-bold">572,720,450</td>
                  <td class="py-2.5 px-4 text-center"><span class="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold font-mono">62%</span></td>
                </tr>
                <tr>
                  <td class="py-2.5 px-4 font-bold text-slate-900">노동 안전 용품</td>
                  <td class="py-2.5 px-4 text-right font-mono">187,000</td>
                  <td class="py-2.5 px-4 text-right font-mono">62,680,000</td>
                  <td class="py-2.5 px-4 text-right font-mono">75,720,500</td>
                  <td class="py-2.5 px-4 text-right font-mono font-bold">138,587,500</td>
                  <td class="py-2.5 px-4 text-center"><span class="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[11px] font-bold font-mono">15%</span></td>
                </tr>
                <tr>
                  <td class="py-2.5 px-4 font-bold text-slate-900">전기 관련 소모품</td>
                  <td class="py-2.5 px-4 text-right font-mono">2,510,000</td>
                  <td class="py-2.5 px-4 text-right font-mono">23,380,000</td>
                  <td class="py-2.5 px-4 text-right font-mono">54,874,500</td>
                  <td class="py-2.5 px-4 text-right font-mono font-bold">80,764,500</td>
                  <td class="py-2.5 px-4 text-center"><span class="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[11px] font-bold font-mono">9%</span></td>
                </tr>
                <tr>
                  <td class="py-2.5 px-4 font-bold text-slate-900">사무용품</td>
                  <td class="py-2.5 px-4 text-right font-mono">44,269,000</td>
                  <td class="py-2.5 px-4 text-right font-mono">27,983,000</td>
                  <td class="py-2.5 px-4 text-right font-mono">2,510,000</td>
                  <td class="py-2.5 px-4 text-right font-mono font-bold">74,762,000</td>
                  <td class="py-2.5 px-4 text-center"><span class="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-[11px] font-bold font-mono">8%</span></td>
                </tr>
                <tr>
                  <td class="py-2.5 px-4 font-bold text-slate-900">일반 공구 및 부품</td>
                  <td class="py-2.5 px-4 text-right font-mono">2,405,000</td>
                  <td class="py-2.5 px-4 text-right font-mono">9,910,000</td>
                  <td class="py-2.5 px-4 text-right font-mono">44,043,000</td>
                  <td class="py-2.5 px-4 text-right font-mono font-bold">56,358,000</td>
                  <td class="py-2.5 px-4 text-center"><span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[11px] font-bold font-mono">6%</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="bg-slate-900 text-white font-extrabold">
                  <td class="py-3 px-4 font-black">합 계</td>
                  <td class="py-3 px-4 text-right font-mono">118,166,000</td>
                  <td class="py-3 px-4 text-right font-mono">379,243,050</td>
                  <td class="py-3 px-4 text-right font-mono">425,783,400</td>
                  <td class="py-3 px-4 text-right font-mono text-amber-300 text-sm">923,192,450</td>
                  <td class="py-3 px-4 text-center font-mono">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <!-- Top 10 Items Table -->
          <div class="bg-white border border-slate-200 rounded-2xl overflow-x-auto shadow-xs p-4">
            <div class="text-xs font-bold text-slate-900 mb-3">상위 10대 구매 아이템 (Top 10)</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">1. Mang chit</div>
                <div class="text-slate-500 font-mono text-[11px]">G-050101 (3,990개)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">311,220,000 VND</div>
                <div class="text-[10px] text-slate-400">공업용 랩</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">2. Gang tay cao su</div>
                <div class="text-slate-500 font-mono text-[11px]">S-010501 (2,500개)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">70,000,000 VND</div>
                <div class="text-[10px] text-slate-400">고무장갑</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">3. Giay ve sinh</div>
                <div class="text-slate-500 font-mono text-[11px]">G-030101 (2,400개)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">33,600,000 VND</div>
                <div class="text-[10px] text-slate-400">점보롤 화장지</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">4. Gang tay trang ngon</div>
                <div class="text-slate-500 font-mono text-[11px]">S-010701 (4,360개)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">30,520,000 VND</div>
                <div class="text-[10px] text-slate-400">코팅장갑</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">5. Giay Clever UP A4</div>
                <div class="text-slate-500 font-mono text-[11px]">O-021103 (650권)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">29,250,000 VND</div>
                <div class="text-[10px] text-slate-400">복사용지</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">6. BD trang dan thung</div>
                <div class="text-slate-500 font-mono text-[11px]">G-120101 (2,750개)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">27,500,000 VND</div>
                <div class="text-[10px] text-slate-400">박스테이프</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">7. Gie lau mau</div>
                <div class="text-slate-500 font-mono text-[11px]">G-040101 (1,900kg)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">24,700,000 VND</div>
                <div class="text-[10px] text-slate-400">웨스/걸레</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">8. Keo 502</div>
                <div class="text-slate-500 font-mono text-[11px]">O-060301 (4,700개)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">20,210,000 VND</div>
                <div class="text-[10px] text-slate-400">순간접착제</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">9. Tui giay uong nuoc</div>
                <div class="text-slate-500 font-mono text-[11px]">G-020301 (500줄)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">18,125,000 VND</div>
                <div class="text-[10px] text-slate-400">종이컵</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900">10. WD-40</div>
                <div class="text-slate-500 font-mono text-[11px]">G-990301 (200캔)</div>
                <div class="font-mono font-bold text-blue-700 mt-1">17,000,000 VND</div>
                <div class="text-[10px] text-slate-400">방청윤활제</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pillar 3: ③ Service _ 구매 비용, 시간 절감 (보이지 않는 비용) -->
      <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl font-mono shadow-md">
              S
            </div>
            <div>
              <div class="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-0.5">PILLAR 03 · 시간·관리비용 제로화</div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">③ Service _ 구매 비용, 시간 절감 (보이지 않는 비용)</h3>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-slate-500 max-w-md">
            원스톱 단일화 서비스로 분산 관리의 인건비, 외근비, 보관료 등 숨은 손실 완벽 제거
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div class="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#EBE7DF]/60 border border-[#DDD6C8] text-slate-900">
            <div>
              <div class="text-xs font-bold text-amber-900 uppercase tracking-wider mb-4">분산 거래로 인한 보이지 않는 비용</div>
              <div class="p-4 rounded-xl bg-white/80 border border-[#D5CCBA] space-y-1 mb-3 text-center">
                <div class="text-xs font-extrabold text-slate-800">다수의 업체 관리</div>
                <div class="text-xs font-extrabold text-slate-800">일부 품목 계획 구매 어려움</div>
                <div class="text-xs font-extrabold text-slate-800">자재 보관/관리</div>
                <div class="text-xs font-extrabold text-slate-800">불량품 수리, 교체 등 어려움</div>
              </div>
              <div class="text-center my-2 text-slate-400 font-bold">➔</div>
              <div class="p-4 rounded-xl bg-slate-800 text-white text-center space-y-1.5 shadow-sm">
                <div class="text-xs font-bold text-slate-100">인건비 등 관리 비용 초과 발생</div>
                <div class="text-xs font-bold text-slate-100">불필요한 외근 등으로 인건비, 교통비 등 낭비</div>
                <div class="text-xs font-bold text-slate-100">구매 기간 지연에 따른 기회비용 발생</div>
                <div class="text-xs font-bold text-slate-100">창고 보관에 따른 임대료, 인건비 등 발생</div>
              </div>
            </div>
            <div class="mt-6 pt-4 border-t border-[#D5CCBA] text-[11px] text-slate-600">
              단가보다 더 큰 손실은 분산 공급업체 관리로 인한 인건비와 외근비, 배송 지연에 따른 기회비용입니다.
            </div>
          </div>

          <div class="lg:col-span-8 p-6 sm:p-8 rounded-2xl border-2 border-slate-900 bg-white shadow-md flex flex-col justify-between space-y-6">
            <!-- ARCHITECTURE DIAGRAM -->
            <div>
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">“One Stop Service” 공급망 혁신 구조</div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-rose-50/50 border border-rose-200">
                  <div class="text-xs font-bold text-rose-800 mb-2">기존: 다자간 분산 관리 (비효율)</div>
                  <div class="flex items-center justify-between text-xs font-mono py-2 px-3 bg-white rounded-lg border border-rose-100">
                    <div class="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">고객사</div>
                    <div class="text-rose-500 text-[10px]">⇄ 분산 접촉 ⇄</div>
                    <div class="text-right text-[11px] text-slate-600">
                      <div>업체 1</div>
                      <div>업체 2</div>
                      <div>업체 3...</div>
                    </div>
                  </div>
                  <p class="text-[11px] text-rose-700 mt-2">업체별 제각각 견적, 상이한 배송일, 계산서 누락, 불량품 처리 난항</p>
                </div>
                <div class="p-4 rounded-xl bg-emerald-50/60 border-2 border-emerald-500">
                  <div class="text-xs font-bold text-emerald-800 mb-2 flex items-center justify-between">
                    <span>“One Stop Service”</span>
                    <span class="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-mono font-bold">단일 창구</span>
                  </div>
                  <div class="flex items-center justify-between text-xs font-mono py-2 px-3 bg-white rounded-lg border border-emerald-200">
                    <div class="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">고객사</div>
                    <div class="text-emerald-600 font-bold text-[10px]">⇄ 직결 ➔ <span class="text-[#CB2987]">PMS VINA</span> ➔ ⇄</div>
                    <div class="text-right text-[11px] text-slate-600">
                      <div>업체 1</div>
                      <div>업체 2</div>
                      <div>업체 3...</div>
                    </div>
                  </div>
                  <p class="text-[11px] text-emerald-800 mt-2 font-medium">PMS 단일 전담 창구로 구매선 일원화, 모든 품목 통합 공급 및 정산</p>
                </div>
              </div>
            </div>

            <!-- 3 Core Promises from Slide 3 -->
            <div class="space-y-3">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 text-sm">“One Stop Service” 모든 기업 소모성 자재 구입 일괄 진행</span>
                <span class="font-semibold text-emerald-700 text-sm"> ➔ 구매선의 단일화에 따른 관리 용이</span>
                <p class="text-xs text-slate-500 mt-1">도덕성 관리, 단가 관리, 납기 관리, 품질 관리, 대금 지급 관리 등</p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 text-sm">1~2일 전 발주 납품 서비스 제공</span>
                <span class="font-semibold text-emerald-700 text-sm"> ➔ 자재 선확보 운영 원칙</span>
                <p class="text-xs text-slate-500 mt-1">자체 창고에 안전재고 상시 보유로 긴급 발주에도 신속 납품</p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 text-sm">불량품 교체 등 대부분 실시간 대응 가능</span>
                <span class="font-semibold text-emerald-700 text-sm"> ➔ 배송 차량 매일 순회 배송</span>
                <p class="text-xs text-slate-500 mt-1">하노이·박닌·하이퐁 주요 산업단지 매일 순회 차량으로 즉시 맞교환</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div class="text-[10px] font-bold uppercase text-emerald-700">구매선 일원화</div>
                <div class="text-xs font-bold text-slate-900">단일 채널 통합</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div class="text-[10px] font-bold uppercase text-emerald-700">선확보 원칙</div>
                <div class="text-xs font-bold text-slate-900">1~2일 전 발주 대응</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div class="text-[10px] font-bold uppercase text-emerald-700">실시간 대응</div>
                <div class="text-xs font-bold text-slate-900">매일 순회 배송 차량</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 7 PRODUCT CATEGORIES SECTION -->
  <section id="products" class="py-20 sm:py-28 bg-slate-100/70 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4" data-i18n="products.badge">
          Product Portfolio
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" data-i18n="products.heading">
          7대 산업 핵심 MRO 취급 카테고리
        </h2>
        <p class="text-base sm:text-lg text-slate-600 mt-3" data-i18n="products.subheading">
          생산 현장의 기초 소모재부터 하이테크 클린룸 라인까지, 15,000개 이상의 엄선된 산업재 라인업을 제공합니다.
        </p>
      </div>

      <!-- Categories Grid (7 Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="products-grid">
        <!-- Rendered dynamically by script -->
      </div>
    </div>
  </section>

  <!-- CORE STRENGTHS / ADVANTAGES SECTION -->
  <section id="strengths" class="py-20 sm:py-28 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <!-- Section Header -->
      <div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4" data-i18n="strengths.badge">
          <i data-lucide="boxes" class="w-3.5 h-3.5"></i>
          Why PMS Vina
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight" data-i18n="strengths.heading">
          베트남진출 한국 기업에 특화된 MRO 사업
        </h2>

        <!-- 13 Years Trust & Market Leadership Highlight Banner -->
        <div class="mt-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-blue-800/40 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-start sm:items-center gap-3.5">
            <div class="w-11 h-11 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center shrink-0 text-cyan-300 shadow-inner">
              <i data-lucide="shield-check" class="w-6 h-6"></i>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 text-[11px] font-bold uppercase tracking-wider">
                  13 Years Trust & Market Leadership
                </span>
              </div>
              <p class="text-sm sm:text-base font-extrabold text-white leading-snug tracking-tight" data-i18n="strengths.trust13Years">
                "하노이 북부의 기업 소모품을 13년동안 든든하고 믿음직하게 책임지고 있습니다.    13년 동안 시장을 선도한 이유가 분명히 있습니다."
              </p>
            </div>
          </div>
          <div class="shrink-0 self-start sm:self-auto">
            <span class="px-3.5 py-1.5 rounded-xl bg-white/10 text-cyan-300 border border-white/10 text-xs font-mono font-bold whitespace-nowrap">
              Since 2013 · 13 Years
            </span>
          </div>
        </div>

        <p class="text-base sm:text-lg text-slate-600 mt-5 max-w-4xl leading-relaxed" data-i18n="strengths.lead">
          베트남 현지 기업들의 복잡하고 비효율적인 소모품 구매 문제를 해결하고, 한국 기업의 신뢰성과 전문성을 바탕으로 다양한 소모품을 한 곳에서 합리적인 가격으로 구매·관리할 수 있는 통합구매 서비스를 제공하기 위해 설립되었습니다. 이를 통해 정확한 납품과 체계적인 단가·거래 이력 관리, 신속하고 책임감 있는 서비스를 제공하여 고객사가 소모품 구매에 대한 부담 없이 본업에 집중할 수 있도록 하는 것을 목표로 합니다.
        </p>
      </div>

      <!-- SECTION 1: MRO Purchasing Reality & Problem Analysis -->
      <div class="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <i data-lucide="building" class="w-3.5 h-3.5"></i>
              <span>Market Status & Challenges</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900" data-i18n="strengths.marketTitle">
              베트남내 투자 기업들의 MRO 물품 구매 진행 관련 현황
            </h3>
          </div>
          <span class="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600 self-start md:self-auto">
            현지 구매 환경 분석
          </span>
        </div>

        <!-- Current Comparison: Raw Materials vs. MRO Consumables -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div class="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span>원부자재 (Raw & Direct Materials)</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed" data-i18n="strengths.marketPt1">
              대부분의 기업들이 원부자재는 한국, 중국 등 제3국에서 직수입하고 있고, 단가나 사용 수량등에 대해 상당히 높은 수준의 관리를 지속적으로 진행하고 있습니다.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-xs">
            <div class="flex items-center gap-2 text-amber-950 font-bold text-sm mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span>MRO 소모성 자재 (Consumables)</span>
            </div>
            <p class="text-xs sm:text-sm text-amber-900/90 leading-relaxed" data-i18n="strengths.marketPt2">
              상대적으로 나머지 MRO 관련 소모품류의 구매는 원부자재의 관리보다는 가격, 업체, 사용 수량등에 대한 관리 수준이 높지 않음.
            </p>
          </div>
        </div>

        <!-- 4 Causes of Inefficiency -->
        <div class="mt-8">
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i>
            <span data-i18n="strengths.causeHeading">소모품 구매 관리 효율 저하의 주 원인</span>
          </h4>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div class="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-mono font-black text-xs flex items-center justify-center mb-3">
                  1
                </div>
                <div class="font-bold text-sm text-slate-900 mb-1.5" data-i18n="strengths.c1Title">
                  관리 비용 효율 저하
                </div>
                <p class="text-xs text-slate-600 leading-relaxed" data-i18n="strengths.c1Desc">
                  수천종류의 제품과 낮은 단가에 따라 관리 비용 효율 저하
                </p>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div class="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-mono font-black text-xs flex items-center justify-center mb-3">
                  2
                </div>
                <div class="font-bold text-sm text-slate-900 mb-1.5" data-i18n="strengths.c2Title">
                  시장의 불투명성
                </div>
                <p class="text-xs text-slate-600 leading-relaxed" data-i18n="strengths.c2Desc">
                  현지 로컬 시장 정보 부재 및 가격 불투명
                </p>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div class="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-mono font-black text-xs flex items-center justify-center mb-3">
                  3
                </div>
                <div class="font-bold text-sm text-slate-900 mb-1.5" data-i18n="strengths.c3Title">
                  언어의 장벽
                </div>
                <p class="text-xs text-slate-600 leading-relaxed" data-i18n="strengths.c3Desc">
                  현지 거래처와의 소통 한계 및 기술 규격 확인 어려움
                </p>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div class="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 font-mono font-black text-xs flex items-center justify-center mb-3">
                  4
                </div>
                <div class="font-bold text-sm text-slate-900 mb-1.5" data-i18n="strengths.c4Title">
                  주재원 인력 부족
                </div>
                <p class="text-xs text-slate-600 leading-relaxed" data-i18n="strengths.c4Desc">
                  소모품 구매 전담을 위한 한국인 관리 인력 부족
                </p>
              </div>
            </div>
          </div>

          <!-- Cause Summary Callout -->
          <div class="mt-5 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-center gap-3">
            <span class="shrink-0 w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
              ▶
            </span>
            <p class="text-xs sm:text-sm font-semibold leading-relaxed" data-i18n="strengths.causeSummary">
              현지의 특수한 구매 문화가 보이지 않는 구매 원가 상승의 요인으로 작용함.
            </p>
          </div>
        </div>

        <!-- Strategic Rationale: What is MRO & Outsourcing Insight -->
        <div class="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-md">
          <div class="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <i data-lucide="help-circle" class="w-4 h-4"></i>
            <span data-i18n="strengths.mroDefTitle">※ MRO란?</span>
          </div>
          <p class="text-sm sm:text-base text-slate-200 leading-relaxed mb-3" data-i18n="strengths.mroDefDesc">
            기업의 유지(Maintenance), 보수(Repair), 운영(Operation)과 관련되는 생산 직접 소요 원부자재를 제외한 소모성 자재의 구매를 대행하는 유통 물류를 말합니다.
          </p>
          <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm text-cyan-200 font-medium leading-relaxed" data-i18n="strengths.mroDefNote">
            💡 여러 구매 분야중 대표적인 저효율 분야로 개선의 여지는 많지만 투자 대비 효과가 낮아 Outsourcing이 알맞은 분야입니다.
          </div>
        </div>
      </div>

      <!-- SECTION 2: PMS Core Competitiveness (4 Pillars) -->
      <div>
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <i data-lucide="package-search" class="w-3.5 h-3.5"></i>
              <span>PMS Core Competitiveness</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900" data-i18n="strengths.compTitle">
              PMS의 경쟁력
            </h3>
          </div>
          <p class="text-xs sm:text-sm text-slate-500">
            구매 원가 절감 · 전 품목 통합 공급 · 공장 직배송
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <!-- Pillar 1 -->
          <div class="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center shadow-md">
                  <i data-lucide="globe-2" class="w-6 h-6"></i>
                </div>
                <span class="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                  PILLAR 01
                </span>
              </div>

              <div class="flex items-baseline gap-2 mb-1.5">
                <span class="font-mono font-bold text-blue-600 text-base">①</span>
                <h4 class="text-lg sm:text-xl font-extrabold text-slate-900" data-i18n="strengths.p1Title">
                  물품 소싱 경쟁력
                </h4>
              </div>

              <p class="text-sm font-semibold text-blue-700 mb-5 pb-3 border-b border-slate-200" data-i18n="strengths.p1Slogan">
                "원하는 모든 물품을 구입할 수 있습니다."
              </p>

              <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li class="flex items-start gap-2.5 leading-relaxed">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span data-i18n="strengths.p1Pt1">80여개 베트남내 납품처 관리를 통해서 고객의 다양한 구매 필요 물품 구매 대응 가능</span>
                </li>
                <li class="flex items-start gap-2.5 leading-relaxed">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span data-i18n="strengths.p1Pt2">중국 직구매를 통해서 베트남내 구매하기 어려운 물품 한국대비 경쟁력있는 가격으로 소싱 가능</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Pillar 2 -->
          <div class="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center shadow-md">
                  <i data-lucide="trending-down" class="w-6 h-6"></i>
                </div>
                <span class="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                  PILLAR 02
                </span>
              </div>

              <div class="flex items-baseline gap-2 mb-1.5">
                <span class="font-mono font-bold text-blue-600 text-base">②</span>
                <h4 class="text-lg sm:text-xl font-extrabold text-slate-900" data-i18n="strengths.p2Title">
                  가격 경쟁력
                </h4>
              </div>

              <p class="text-sm font-semibold text-blue-700 mb-5 pb-3 border-b border-slate-200" data-i18n="strengths.p2Slogan">
                "베트남 최저 수준의 가격으로 구입할 수 있습니다."
              </p>

              <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li class="flex items-start gap-2.5 leading-relaxed">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span data-i18n="strengths.p2Pt1">대량 구매를 통한 단가 경쟁력 확보</span>
                </li>
                <li class="flex items-start gap-2.5 leading-relaxed">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span data-i18n="strengths.p2Pt2">지속적인 시장조사를 통해 가격 최저 수준 유지</span>
                </li>
                <li class="flex items-start gap-2.5 leading-relaxed">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span data-i18n="strengths.p2Pt3">일부 품목 중국 직접 구입을 통해 단가 경쟁력 확보</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md">
                  <i data-lucide="truck" class="w-6 h-6"></i>
                </div>
                <span class="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                  PILLAR 03
                </span>
              </div>

              <div class="flex items-baseline gap-2 mb-1.5">
                <span class="font-mono font-bold text-blue-600 text-base">③</span>
                <h4 class="text-lg sm:text-xl font-extrabold text-slate-900" data-i18n="strengths.p3Title">
                  배송 경쟁력
                </h4>
              </div>

              <p class="text-sm font-semibold text-blue-700 mb-5 pb-3 border-b border-slate-200" data-i18n="strengths.p3Slogan">
                "배송비 따로 걱정하지 않으셔도 됩니다."
              </p>

              <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li class="flex items-start gap-2.5 leading-relaxed">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span data-i18n="strengths.p3Pt1">’17년 10월 기준 100여개의 고객 서비스</span>
                </li>
                <li class="flex items-start gap-2.5 leading-relaxed">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span data-i18n="strengths.p3Pt2">1~3일전 발주 무료 배송 원칙 준수</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Pillar 4 -->
          <div class="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-md">
                  <i data-lucide="shield-check" class="w-6 h-6"></i>
                </div>
                <span class="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                  PILLAR 04
                </span>
              </div>

              <div class="flex items-baseline gap-2 mb-1.5">
                <span class="font-mono font-bold text-blue-600 text-base">④</span>
                <h4 class="text-lg sm:text-xl font-extrabold text-slate-900" data-i18n="strengths.p4Title">
                  관리 로스 절감
                </h4>
              </div>

              <p class="text-sm font-semibold text-blue-700 mb-5 pb-3 border-b border-slate-200" data-i18n="strengths.p4Slogan">
                "하나의 공급업체만 관리하시면 됩니다."
              </p>

              <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li class="flex items-start gap-2.5 leading-relaxed">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span data-i18n="strengths.p4Pt1">약 3천여가지에 이르는 일반 소모성 물품, 사무용품, 전기관련 소모품, 공구 부품, 클린룸 용품, 노동 안전용품 등 기업에서 사용하는 모든 소모성 물품을 일괄 취급.</span>
                </li>
              </ul>
            </div>

            <div class="mt-6 p-4 rounded-2xl bg-blue-900 text-white text-xs sm:text-sm leading-relaxed shadow-sm">
              <div class="font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                <i data-lucide="shield-check" class="w-4 h-4"></i>
                <span>One-Vendor Solution</span>
              </div>
              <p class="text-slate-200 font-normal" data-i18n="strengths.p4Highlight">
                PMS 하나의 회사와 거래하면 OK. 다수의 공급업체 운영에 따른 도덕성 관리, 단가 관리, 납기 관리, 품질 관리, 대금 지급 관리, 외부 계산서 구입등등 수많은 구매 관리 차원의 로스를 없앨 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RFQ (QUOTATION REQUEST) SECTION -->
  <section id="rfq" class="py-20 sm:py-28 bg-slate-900 text-white relative">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4" data-i18n="rfq.badge">
          Request For Quotation
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight" data-i18n="rfq.heading">
          온라인 Q&A
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-2" data-i18n="rfq.subheading">
          필요하신 자재 사양과 수량을 남겨주시면 4시간 이내에 최적 단가와 납기를 회신해 드립니다.
        </p>
      </div>

      <!-- PRE-RFQ FAQ (9 Real-world Questions & Answers) -->
      <div class="bg-slate-800/95 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl mb-12 space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-700/80">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <i data-lucide="help-circle" class="w-3.5 h-3.5 text-cyan-400"></i>
              <span>사이트맵 – 팝업 / RFQ 사전 체크</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              베트남 MRO 구매 현실 9가지 고민과 PMS의 솔직한 답변
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 mt-1">
              베트남 진출 제조 기업 주재원과 구매팀이 가장 많이 묻고 고민하는 9가지 현실적 질문에 명쾌히 답해 드립니다.
            </p>
          </div>
          <button type="button" onclick="openRfqFaqModal()" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg transition-all flex items-center gap-1.5 shrink-0">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            <span>사이트맵 팝업 전체보기</span>
          </button>
        </div>

        <!-- 9 Questions Accordion Details -->
        <div class="space-y-3">
          <!-- Q1 -->
          <details class="group bg-slate-900/60 border border-slate-700/70 rounded-2xl p-4 sm:p-5" open>
            <summary class="flex items-start justify-between cursor-pointer list-none text-left">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5">Q1</span>
                <div>
                  <span class="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300">이제 베트남에 처음 회사를 세우는데, 이 많은 소모품들을 어디서 다 사지?</span>
                  <div class="mt-1"><span class="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 text-[11px] font-semibold">원스톱 3,000여종 일괄 공급</span></div>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"></i>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-emerald-400 font-bold">➔ PMS에 맡기세요.</span> 기업에서 사용하는 모든 소모품을 취급하고 있습니다. (현재 약 3천종)
            </div>
          </details>

          <!-- Q2 -->
          <details class="group bg-slate-900/60 border border-slate-700/70 rounded-2xl p-4 sm:p-5" open>
            <summary class="flex items-start justify-between cursor-pointer list-none text-left">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5">Q2</span>
                <div>
                  <span class="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300">도대체 이 물건은 시장가가 얼마지? 우리가 제대로 구매하고 있는거 맞나?</span>
                  <div class="mt-1"><span class="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 text-[11px] font-semibold">최저 수준 가격 보장 & 유사품 사전 고지제</span></div>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"></i>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-emerald-400 font-bold">➔ PMS가 보장합니다.</span> 베트남 최저라고는 말씀못드립니다. 하지만 '최저 수준'이라고는 자신있게 말씀드릴 수 있습니다. 또한 유사품을 납품해야할 경우가 있으면 유사품이라고 반드시 말씀드리고 그에 맞는 가격으로 납품합니다.
            </div>
          </details>

          <!-- Q3 -->
          <details class="group bg-slate-900/60 border border-slate-700/70 rounded-2xl p-4 sm:p-5" open>
            <summary class="flex items-start justify-between cursor-pointer list-none text-left">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5">Q3</span>
                <div>
                  <span class="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300">우리 현지 구매 담당도 리베이트를 받고 있나? 베트남에선 다들 받는다고 하니 받고 있겠지?? 얼마나 받고 있나? 설마 월급보다 많지는 않겠지?</span>
                  <div class="mt-1"><span class="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 text-[11px] font-semibold">리베이트 원천 차단 & 클린 윤리 경영</span></div>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"></i>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-emerald-400 font-bold">➔ 안심하세요! 윤리경영 약속드립니다.</span> 더군다나 PMS는 이윤 구조상 현지 직원에게 리베이트를 지급하면 이윤이 남지 않습니다. 원천적으로 불가능합니다.
            </div>
          </details>

          <!-- Q4 -->
          <details class="group bg-slate-900/60 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
            <summary class="flex items-start justify-between cursor-pointer list-none text-left">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5">Q4</span>
                <div>
                  <span class="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300">납품 수량은 납품서대로 제대로 되고 있나? 직원하고 업체하고 담합하기 제일 쉬운 부분이라던데..</span>
                  <div class="mt-1"><span class="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 text-[11px] font-semibold">대표이사 직인 납품 세부내역 분석보고서 제공</span></div>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"></i>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-emerald-400 font-bold">➔ 매월 혹은 분기별로 사장인 제가 직접</span> 청구 금액/단가 기준으로 납품 세부내역 분석보고서를 작성하여 보내드립니다. 단순 실수를 제외하고 걱정하시는 내부 직원과 담합하여 고의로 조직적인 납품 수량을 속이는 행위는 있을수가 없습니다.
            </div>
          </details>

          <!-- Q5 -->
          <details class="group bg-slate-900/60 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
            <summary class="flex items-start justify-between cursor-pointer list-none text-left">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5">Q5</span>
                <div>
                  <span class="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300">중량은 규격하고 맞나? 두께는 규격하고 맞나? 길이는 규격하고 맞나? 초기에만 맞게 들어오고 중간에 조금씩 줄어드는거 아닌가? 매번 전수검사를 할 수도 없고..</span>
                  <div class="mt-1"><span class="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 text-[11px] font-semibold">100여 개 고객사 교차검증 체계로 규격 변동 불가능</span></div>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"></i>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-emerald-400 font-bold">➔ PMS가 보장합니다.</span> PMS는 현재 100여개 고객에 납품을 하고 있습니다. 만일 규격에 문제가 생기면 한고객은 모르고 지나갈 수 있을지 몰라도 나머지 99개 고객중 어디에선가 반드시 문제가 생깁니다. 저희한테는 절대로 있을수 없는 일입니다.
            </div>
          </details>

          <!-- Q6 -->
          <details class="group bg-slate-900/60 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
            <summary class="flex items-start justify-between cursor-pointer list-none text-left">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5">Q6</span>
                <div>
                  <span class="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300">재고 조사는 얼마만에 한번씩 해야되지? 물품이 무단 반출되는건 없나? 경비는 믿을만 한건가?</span>
                  <div class="mt-1"><span class="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 text-[11px] font-semibold">역매입 시도 즉시 차단 & 입출고 대조 보고서 지원</span></div>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"></i>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-emerald-400 font-bold">➔ 간혹 저희가 납품한 물품중 무단 반출된 물품을 저희한테 되팔려는 시도가 있는게 사실입니다.</span> PMS의 명예를 걸고 절대 용납되지 않는일이며, 저희가 보내드리는 납품 분석 보고서와 해당 물품의 입출고, 재고 현황을 대조해보시면 확인가능 하십니다.
            </div>
          </details>

          <!-- Q7 -->
          <details class="group bg-slate-900/60 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
            <summary class="flex items-start justify-between cursor-pointer list-none text-left">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5">Q7</span>
                <div>
                  <span class="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300">매월 외부 계산서를 사야되는 금액이 왜 이리 많지? 정말로 우리가 무자료로 구매한 물품이 이리 많은건가? 계산서 수수료는 이게 맞나?</span>
                  <div class="mt-1"><span class="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 text-[11px] font-semibold">100% 정식 세금계산서 직발행</span></div>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"></i>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-emerald-400 font-bold">➔ PMS는 100% 계산서 발급하여 드립니다.</span> 이러한 문제는 원천적으로 생기지 않습니다.
            </div>
          </details>

          <!-- Q8 -->
          <details class="group bg-slate-900/60 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
            <summary class="flex items-start justify-between cursor-pointer list-none text-left">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5">Q8</span>
                <div>
                  <span class="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300">우리 회사는 EPE기업 인데 소모품 공급하는 작은 로컬 업체중에는 통관 못하는 회사가 왜이리 많지?</span>
                  <div class="mt-1"><span class="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 text-[11px] font-semibold">EPE(수출가공기업) 정식 통관 거래 실적 완비</span></div>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"></i>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-emerald-400 font-bold">➔ PMS는 이미 여러 EPE 회사와 거래하고 있습니다.</span> 걱정하지 마세요.. ^^
            </div>
          </details>

          <!-- Q9 -->
          <details class="group bg-slate-900/60 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
            <summary class="flex items-start justify-between cursor-pointer list-none text-left">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shrink-0 mt-0.5">Q9</span>
                <div>
                  <span class="font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300">아... 비싼 원부자재면 사람을 열명을 쓰더라도 다 챙겨볼텐데.. 그것도 아니고.. 금액도 합계로 보면 적지 않은데.. 종류만 몇백 몇천가지니 일일히 다 사람써서 확인할수도 없구... ㅠ.ㅠ</span>
                  <div class="mt-1"><span class="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-cyan-300 text-[11px] font-semibold">한국형 ERP 시스템 탑재 100% 전산화 정밀 관리</span></div>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"></i>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span class="text-emerald-400 font-bold">➔ 저희가 대신 세밀하게 관리해드립니다.</span> 위에 말씀드린 이러한 모든 약속들을 지키려면 저희는 무조건 세부적으로 관리할 수 밖에 없습니다. PMS는 한국의 ERP 시스템을 사용하여 100% 전산으로 관리하고 있습니다. 안심하세요.
            </div>
          </details>
        </div>

        <!-- Empathy Callout Box in Red (from Slide 2) -->
        <div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-950/60 via-rose-950/50 to-slate-900 border-2 border-red-500/40 text-red-100 shadow-lg space-y-3 mt-6">
          <div class="flex items-center gap-2 text-red-300 font-extrabold text-sm sm:text-base">
            <i data-lucide="heart-handshake" class="w-5 h-5 text-rose-400 shrink-0"></i>
            <span>로컬 직원도 어차피 같이 일하는 한 식구입니다.</span>
          </div>
          <p class="text-xs sm:text-sm text-red-200/90 leading-relaxed">
            간혹 질나쁜 직원도 있지만 대부분 선량하고 충직한 직원들 입니다.
          </p>
          <p class="text-xs sm:text-sm text-red-200/90 leading-relaxed font-medium">
            베트남에서 생활하면 어느 정도 극복해야되는 문제이긴 하지만, 같이 업무를 하면서 항상 의심의 눈초리로 직원을 바라보는것은 참 불행한 일인것 같습니다.
          </p>
          <div class="pt-2 flex items-center justify-between flex-wrap gap-3">
            <span class="inline-flex items-center px-4 py-2 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm shadow-md">
              PMS가 도와드리겠습니다!
            </span>
            <a href="#rfq-form-container" class="text-xs font-bold text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
              온라인 견적서 작성 폼 바로가기 ↓
            </a>
          </div>
        </div>
      </div>

      <div id="rfq-form-container" class="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl scroll-mt-24">
        <form id="rfq-form" onsubmit="handleRfqSubmit(event)" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <!-- Company Name -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.company">회사명 / 법인명 *</label>
              <input type="text" id="rfq-company" required class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm" placeholder="예: (주)한국전자 베트남 법인" />
            </div>

            <!-- Contact Name -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.name">담당자명 / 직책 *</label>
              <input type="text" id="rfq-name" required class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm" placeholder="예: 홍길동 부장" />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.email">이메일 주소 *</label>
              <input type="email" id="rfq-email" required class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm" placeholder="name@company.com" />
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.phone">연락처 (전화/Zalo/WeChat) *</label>
              <input type="text" id="rfq-phone" required class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm" placeholder="+84-123-456-789" />
            </div>

            <!-- Category -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.category">문의 품목 카테고리 *</label>
              <select id="rfq-category" required class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-blue-500 text-sm">
                <option value="" data-i18n="rfq.categorySelect">카테고리를 선택해 주세요</option>
                <option value="packaging">1. 포장자재 (Packaging Materials)</option>
                <option value="electrical">2. 전기용품 (Electrical Supplies)</option>
                <option value="tools">3. 공구부품 (Tools & Hardware)</option>
                <option value="safety">4. 안전용품 (Safety & PPE)</option>
                <option value="cleanroom">5. 클린룸 용품 (Cleanroom Supplies)</option>
                <option value="office">6. 사무용품 (Office Supplies)</option>
                <option value="general">7. 일반용품 (General Maintenance)</option>
              </select>
            </div>

            <!-- Quantity -->
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.quantity">요청 수량 및 단위 *</label>
              <input type="text" id="rfq-quantity" required class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm" placeholder="예: 500 EA, 50 Box, 10 Roll 등" />
            </div>
          </div>

          <!-- Product Specs -->
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.itemSpec">제품명 및 규격 (Part Number/사양) *</label>
            <input type="text" id="rfq-item" required class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm" placeholder="예: OPP 테이프 50mm x 100m 투명 100박스, 안전모 백색 200개" />
          </div>

          <!-- Target Date & Notes -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.date">납품 희망일자</label>
              <input type="date" id="rfq-date" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-blue-500 text-sm" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.attachFile">사양서 파일명 (선택)</label>
              <input type="text" id="rfq-file" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm" placeholder="예: Drawing_Spec_v1.pdf" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2" data-i18n="rfq.notes">세부 요구사항 및 메모</label>
            <textarea id="rfq-notes" rows="3" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm" placeholder="원산지 요건, 포장 형태, 배송지(공장 위치) 등을 입력하세요."></textarea>
          </div>

          <!-- Email Dispatch Notice -->
          <div class="flex items-center justify-center gap-2 text-xs text-cyan-300 bg-slate-800/90 py-2.5 px-4 rounded-xl border border-cyan-500/30 max-w-md mx-auto mb-2">
            <i data-lucide="mail" class="w-4 h-4 text-cyan-400 shrink-0"></i>
            <span>제출 시 Formspree 및 담당자(<strong>kklee@pmsvina.com</strong>)에게 견적요청서가 자동 수집·발송됩니다.</span>
          </div>

          <div class="pt-2 text-center">
            <button type="submit" id="rfq-submit-btn" class="w-full sm:w-auto px-10 py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-600/30 transition-all">
              <span data-i18n="rfq.submitBtn">견적 요청서 제출하기</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Q&A BOARD SECTION -->
  <section id="qa" class="py-20 sm:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4" data-i18n="qa.badge">
            Customer Q&A Board
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" data-i18n="qa.heading">
            고객 문의 및 기술 상담 게시판
          </h2>
          <p class="text-base text-slate-600 mt-2" data-i18n="qa.subheading">
            제품 규격, 납기, 대량 구매 계약, 시험 성적서 발급 등 궁금하신 사항을 남겨주시면 신속히 답변해 드립니다.
          </p>
        </div>

        <button onclick="openNewQaModal()" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all self-start md:self-auto">
          <i data-lucide="plus-circle" class="w-4 h-4"></i>
          <span data-i18n="qa.btnNew">새 문의 등록하기</span>
        </button>
      </div>

      <!-- Q&A Table Container -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-50/80 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <th class="py-4 px-6 text-center w-16" data-i18n="qa.tableHeader.num">번호</th>
                <th class="py-4 px-4 w-28" data-i18n="qa.tableHeader.category">구분</th>
                <th class="py-4 px-6" data-i18n="qa.tableHeader.title">제목</th>
                <th class="py-4 px-6 w-48" data-i18n="qa.tableHeader.author">작성자 / 기업</th>
                <th class="py-4 px-6 text-center w-32" data-i18n="qa.tableHeader.date">등록일</th>
                <th class="py-4 px-6 text-center w-28" data-i18n="qa.tableHeader.status">답변상태</th>
              </tr>
            </thead>
            <tbody id="qa-table-body" class="divide-y divide-slate-100 text-sm">
              <!-- Rendered via JS -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="contact" class="bg-slate-950 text-slate-400 border-t border-slate-800/80 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
        <div class="lg:col-span-5">
          <div class="flex items-center gap-3 mb-4">
            <svg viewBox="0 0 180 180" class="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PMS Official Symbol">
              <path fill="#CB2987" fill-rule="evenodd" clip-rule="evenodd" d="M 153.6 50.3 A 75 75 0 1 0 164.9 86.1 L 138.8 77.2 L 153.6 50.3 Z M 90 57 A 33 33 0 1 0 90 123 A 33 33 0 1 0 90 57 Z" />
            </svg>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold text-white tracking-tight leading-none">
                PMS <span class="text-cyan-400">VINA</span>
              </span>
              <span class="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-1">MRO Total Solution</span>
            </div>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed mb-6" data-i18n="footer.companyDesc">
            베트남 하이테크 제조업 및 산업 인프라를 지원하는 프리미엄 MRO 자재 유통 및 공급망 통합 솔루션 전문 기업
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>MST: <strong class="text-white font-mono">2301413244</strong></span>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-4 text-sm">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200" data-i18n="footer.contactInfo">본사 및 연락처</h4>
          <div class="space-y-2">
            <p class="flex items-start gap-2">
              <i data-lucide="map-pin" class="w-4 h-4 text-cyan-400 mt-1 shrink-0"></i>
              <span data-i18n="footer.hanoiOffice">소재지: Khu phố Giang Liễu, phường Phương Liễu, tỉnh Bắc Ninh, Việt Nam</span>
            </p>
            <p class="flex items-start gap-2">
              <i data-lucide="globe" class="w-4 h-4 text-blue-400 mt-1 shrink-0"></i>
              <span data-i18n="footer.koreaOffice">설립일: 2015년 | 대표자: 이경규</span>
            </p>
            <p class="flex items-center gap-2">
              <i data-lucide="phone" class="w-4 h-4 text-emerald-400 shrink-0"></i>
              <span><strong class="text-slate-300">전화</strong>: (한국어) 0372267700 / (베트남어, 중국어) 0967220322</span>
            </p>
            <p class="flex items-center gap-2">
              <i data-lucide="mail" class="w-4 h-4 text-indigo-400 shrink-0"></i>
              <span><strong class="text-slate-300">공식 이메일</strong>: <a href="mailto:PMS@PMSVINA.COM" class="text-cyan-400 hover:underline">PMS@PMSVINA.COM</a></span>
            </p>
            <p class="flex items-center gap-2">
              <i data-lucide="clock" class="w-4 h-4 text-amber-400 shrink-0"></i>
              <span><strong class="text-slate-300" data-i18n="footer.workHours">업무 시간</strong>: <span data-i18n="footer.workHoursVal">월~금 08:00 - 18:00 (토 08:00 - 12:00)</span></span>
            </p>
          </div>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p data-i18n="footer.copyright">© 2026 PMS Vina Co., Ltd. All Rights Reserved.</p>
        <div class="flex gap-4">
          <a href="#hero" class="hover:text-slate-300">Top</a>
          <a href="#about" class="hover:text-slate-300">About</a>
          <a href="#products" class="hover:text-slate-300">Products</a>
          <a href="#rfq" class="hover:text-slate-300">RFQ</a>
          <a href="#qa" class="hover:text-slate-300">Q&A</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- SUCCESS MODAL (RFQ) -->
  <div id="rfq-modal" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-center">
      <div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
        <i data-lucide="check-circle" class="w-7 h-7"></i>
      </div>
      <h3 class="text-xl font-extrabold text-slate-900 mb-1" data-i18n="rfq.modalTitle">견적 요청이 성공적으로 접수되었습니다</h3>
      <p class="text-xs sm:text-sm text-slate-600 mb-4" data-i18n="rfq.modalDesc">
        PMS Vina의 담당 기술영업 엔지니어가 입력하신 연락처와 이메일로 4시간 이내에 공식 견적서 및 샘플 일정을 안내드립니다.
      </p>

      <!-- Email Notification Card -->
      <div class="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-left text-xs mb-4">
        <div class="flex items-center gap-1.5 font-bold text-cyan-950 mb-1">
          <i data-lucide="mail" class="w-4 h-4 text-cyan-700 shrink-0"></i>
          <span>데이터 수집 및 담당자 알림 전송 완료</span>
        </div>
        <p class="text-slate-600 text-[11px] leading-relaxed">
          작성하신 견적 요청서가 Formspree 데이터 수집 시스템 및 담당자(<strong>kklee@pmsvina.com</strong>) 수신함으로 자동 전달되었습니다.
        </p>
      </div>

      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4 text-left text-xs space-y-1.5">
        <div class="flex justify-between">
          <span class="text-slate-500" data-i18n="rfq.rfqNumber">견적 접수 번호:</span>
          <span class="font-mono font-bold text-blue-700" id="modal-rfq-no">RFQ-202609-0824</span>
        </div>
      </div>

      <div class="space-y-2 mb-3">
        <a id="modal-rfq-mailto" href="mailto:kklee@pmsvina.com" class="w-full py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
          <i data-lucide="mail" class="w-3.5 h-3.5 text-blue-600"></i>
          <span>kklee@pmsvina.com 메일 클라이언트로 확인/열기</span>
        </a>
      </div>

      <button onclick="closeRfqModal()" class="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm shadow transition-all" data-i18n="rfq.confirmBtn">
        확인
      </button>
    </div>
  </div>

  <!-- RFQ SITEMAP FAQ FULL MODAL (9 Questions & Answers Popup) -->
  <div id="rfq-faq-modal" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 hidden flex items-center justify-center p-3 sm:p-4">
    <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-900">
      <!-- Modal Header -->
      <div class="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border-b border-slate-800 flex items-start justify-between gap-4 shrink-0">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 text-[11px] font-bold uppercase tracking-wider">
              사이트맵 – 팝업 / RFQ 사전 체크
            </span>
          </div>
          <h2 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            베트남 진출 기업의 9가지 현실적 고민과 PMS의 솔직한 답변
          </h2>
        </div>
        <button onclick="closeRfqFaqModal()" class="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors shrink-0">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 sm:p-8 overflow-y-auto space-y-6">
        <!-- 9 Items -->
        <div class="space-y-4 text-xs sm:text-sm">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 font-bold text-blue-700 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">Q1</span>
              <span>이제 베트남에 처음 회사를 세우는데, 이 많은 소모품들을 어디서 다 사지?</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
              <strong class="text-emerald-600">➔ PMS에 맡기세요.</strong> 기업에서 사용하는 모든 소모품을 취급하고 있습니다. (현재 약 3천종)
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 font-bold text-blue-700 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">Q2</span>
              <span>도대체 이 물건은 시장가가 얼마지? 우리가 제대로 구매하고 있는거 맞나?</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
              <strong class="text-emerald-600">➔ PMS가 보장합니다.</strong> 베트남 최저라고는 말씀못드립니다. 하지만 '최저 수준'이라고는 자신있게 말씀드릴 수 있습니다. 또한 유사품을 납품해야할 경우가 있으면 유사품이라고 반드시 말씀드리고 그에 맞는 가격으로 납품합니다.
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 font-bold text-blue-700 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">Q3</span>
              <span>우리 현지 구매 담당도 리베이트를 받고 있나? 베트남에선 다들 받는다고 하니 받고 있겠지?? 얼마나 받고 있나? 설마 월급보다 많지는 않겠지?</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
              <strong class="text-emerald-600">➔ 안심하세요! 윤리경영 약속드립니다.</strong> 더군다나 PMS는 이윤 구조상 현지 직원에게 리베이트를 지급하면 이윤이 남지 않습니다. 원천적으로 불가능합니다.
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 font-bold text-blue-700 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">Q4</span>
              <span>납품 수량은 납품서대로 제대로 되고 있나? 직원하고 업체하고 담합하기 제일 쉬운 부분이라던데..</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
              <strong class="text-emerald-600">➔ 매월 혹은 분기별로 사장인 제가 직접</strong> 청구 금액/단가 기준으로 납품 세부내역 분석보고서를 작성하여 보내드립니다. 단순 실수를 제외하고 걱정하시는 내부 직원과 담합하여 고의로 조직적인 납품 수량을 속이는 행위는 있을수가 없습니다.
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 font-bold text-blue-700 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">Q5</span>
              <span>중량은 규격하고 맞나? 두께는 규격하고 맞나? 길이는 규격하고 맞나? 초기에만 맞게 들어오고 중간에 조금씩 줄어드는거 아닌가? 매번 전수검사를 할 수도 없고..</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
              <strong class="text-emerald-600">➔ PMS가 보장합니다.</strong> PMS는 현재 100여개 고객에 납품을 하고 있습니다. 만일 규격에 문제가 생기면 한고객은 모르고 지나갈 수 있을지 몰라도 나머지 99개 고객중 어디에선가 반드시 문제가 생깁니다. 저희한테는 절대로 있을수 없는 일입니다.
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 font-bold text-blue-700 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">Q6</span>
              <span>재고 조사는 얼마만에 한번씩 해야되지? 물품이 무단 반출되는건 없나? 경비는 믿을만 한건가?</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
              <strong class="text-emerald-600">➔ 간혹 저희가 납품한 물품중 무단 반출된 물품을 저희한테 되팔려는 시도가 있는게 사실입니다.</strong> PMS의 명예를 걸고 절대 용납되지 않는일이며, 저희가 보내드리는 납품 분석 보고서와 해당 물품의 입출고, 재고 현황을 대조해보시면 확인가능 하십니다.
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 font-bold text-blue-700 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">Q7</span>
              <span>매월 외부 계산서를 사야되는 금액이 왜 이리 많지? 정말로 우리가 무자료로 구매한 물품이 이리 많은건가? 계산서 수수료는 이게 맞나?</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
              <strong class="text-emerald-600">➔ PMS는 100% 계산서 발급하여 드립니다.</strong> 이러한 문제는 원천적으로 생기지 않습니다.
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 font-bold text-blue-700 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">Q8</span>
              <span>우리 회사는 EPE기업 인데 소모품 공급하는 작은 로컬 업체중에는 통관 못하는 회사가 왜이리 많지?</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
              <strong class="text-emerald-600">➔ PMS는 이미 여러 EPE 회사와 거래하고 있습니다.</strong> 걱정하지 마세요.. ^^
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 font-bold text-blue-700 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">Q9</span>
              <span>아... 비싼 원부자재면 사람을 열명을 쓰더라도 다 챙겨볼텐데.. 그것도 아니고.. 금액도 합계로 보면 적지 않은데.. 종류만 몇백 몇천가지니 일일히 다 사람써서 확인할수도 없구... ㅠ.ㅠ</span>
            </div>
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
              <strong class="text-emerald-600">➔ 저희가 대신 세밀하게 관리해드립니다.</strong> 위에 말씀드린 이러한 모든 약속들을 지키려면 저희는 무조건 세부적으로 관리할 수 밖에 없습니다. PMS는 한국의 ERP 시스템을 사용하여 100% 전산으로 관리하고 있습니다. 안심하세요.
            </div>
          </div>
        </div>

        <!-- Empathy Box in Red -->
        <div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 border-2 border-red-300 text-red-900 shadow-sm space-y-3">
          <div class="flex items-center gap-2 text-red-700 font-extrabold text-sm sm:text-base">
            <i data-lucide="heart-handshake" class="w-5 h-5 text-red-600 shrink-0"></i>
            <span>로컬 직원도 어차피 같이 일하는 한 식구입니다.</span>
          </div>
          <p class="text-xs sm:text-sm text-red-800 leading-relaxed">
            간혹 질나쁜 직원도 있지만 대부분 선량하고 충직한 직원들 입니다.
          </p>
          <p class="text-xs sm:text-sm text-red-800 leading-relaxed font-medium">
            베트남에서 생활하면 어느 정도 극복해야되는 문제이긴 하지만, 같이 업무를 하면서 항상 의심의 눈초리로 직원을 바라보는것은 참 불행한 일인것 같습니다.
          </p>
          <div class="pt-2">
            <span class="inline-flex items-center px-4 py-2 rounded-xl bg-red-600 text-white font-extrabold text-sm shadow-sm">
              PMS가 도와드리겠습니다!
            </span>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
        <span class="text-xs text-slate-500 font-medium">PMS VINA · 베트남 MRO 통합 구매 솔루션</span>
        <div class="flex items-center gap-3">
          <button onclick="closeRfqFaqModal()" class="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors">
            닫기
          </button>
          <button onclick="closeRfqFaqModal(); document.getElementById('rfq-form-container').scrollIntoView({behavior:'smooth'});" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow transition-colors">
            견적 요청 작성하기
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- VIEW QA DETAIL MODAL -->
  <div id="qa-detail-modal" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-100 text-blue-800" id="qa-detail-category">카테고리</span>
          <span class="font-mono text-xs text-slate-400" id="qa-detail-id">QA-2026-000</span>
          <span id="qa-detail-status" class="px-2.5 py-0.5 text-xs font-bold rounded-full border">상태</span>
        </div>
        <button onclick="closeQaDetailModal()" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-3" id="qa-detail-title">문의 제목</h3>
      <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-6 pb-3 border-b border-slate-100">
        <span>작성자: <strong class="text-slate-700" id="qa-detail-author">담당자</strong></span>
        <span>등록일: <strong class="text-slate-700" id="qa-detail-date">2026-09-12</strong></span>
      </div>

      <div class="mb-5">
        <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">문의 내용</div>
        <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed whitespace-pre-line" id="qa-detail-content">
          문의 본문
        </div>
      </div>

      <!-- Pending Notification Box (Shown when awaiting answer) -->
      <div id="qa-detail-pending-box" class="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-900 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <i data-lucide="clock" class="w-4 h-4 text-amber-600 shrink-0"></i>
          <span>현재 관리자 답변을 준비 중입니다. 신속히 확인 후 답변드리겠습니다.</span>
        </div>
        <button onclick="showAdminReplyForm()" class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm whitespace-nowrap">
          <i data-lucide="send" class="w-3.5 h-3.5"></i>
          <span>관리자 답변 작성</span>
        </button>
      </div>

      <!-- Official Answer Display Box -->
      <div id="qa-detail-answer-box" class="p-5 rounded-2xl bg-blue-50/90 border border-blue-200 text-sm text-slate-800 mb-5 hidden">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-blue-200/60">
          <div class="flex items-center gap-2 font-bold text-blue-900">
            <i data-lucide="shield-check" class="w-4 h-4 text-blue-600"></i>
            <span data-i18n="qa.replyBadge">PMS Vina 공식 답변</span>
            <span class="text-xs font-normal text-blue-600" id="qa-detail-answer-date">2026-09-13</span>
          </div>
          <button onclick="showAdminReplyForm()" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-800 text-xs font-bold transition-colors">
            <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
            <span>답변 수정</span>
          </button>
        </div>
        <p class="text-sm text-slate-700 leading-relaxed whitespace-pre-line" id="qa-detail-answer">
          답변 내용
        </p>
      </div>

      <!-- Admin Reply Form (Hidden by default) -->
      <div id="qa-admin-form-container" class="p-5 rounded-2xl bg-slate-50 border border-blue-300 shadow-inner mb-5 hidden space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <i data-lucide="shield-check" class="w-4 h-4 text-blue-600"></i>
            <span>관리자 답변 관리</span>
          </div>
          <span class="text-[11px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
            Admin Support
          </span>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">답변 담당 부서/직책</label>
          <input type="text" id="qa-admin-respondent" class="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:border-blue-600" value="PMS Vina 기술영업총괄팀" />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">공식 답변 내용 *</label>
          <textarea id="qa-admin-reply-text" rows="4" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-blue-600" placeholder="고객님의 문의에 대한 공식 답변 내용을 작성해 주세요."></textarea>
        </div>
        <div class="flex items-center justify-end gap-2 pt-2">
          <button type="button" onclick="hideAdminReplyForm()" class="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold">
            취소
          </button>
          <button type="button" onclick="saveAdminReply()" class="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow">
            <i data-lucide="send" class="w-3.5 h-3.5"></i>
            <span>답변 등록 완료</span>
          </button>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-between pt-2 border-t border-slate-100">
        <button onclick="deleteCurrentQaItem()" class="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-red-600 hover:bg-red-50 text-xs font-bold transition-all">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          <span>문의 삭제</span>
        </button>
        <button onclick="closeQaDetailModal()" class="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-all">
          닫기
        </button>
      </div>
    </div>
  </div>

  <!-- NEW QA WRITE MODAL -->
  <div id="qa-write-modal" class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl">
      <div class="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
        <h3 class="text-lg font-bold text-slate-900" data-i18n="qa.writeModal.title">새 문의글 작성</h3>
        <button onclick="closeNewQaModal()" class="text-slate-400 hover:text-slate-600">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <form onsubmit="handleNewQaSubmit(event)" class="space-y-4 text-sm">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1" data-i18n="qa.writeModal.fieldTitle">문의 제목 *</label>
          <input type="text" id="new-qa-title" required class="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm" placeholder="문의 제목을 입력하세요" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1" data-i18n="qa.writeModal.fieldAuthor">작성자명 *</label>
            <input type="text" id="new-qa-author" required class="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm" placeholder="홍길동" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1" data-i18n="qa.writeModal.fieldCompany">회사명 *</label>
            <input type="text" id="new-qa-company" required class="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm" placeholder="(주)한국전자" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1" data-i18n="qa.writeModal.fieldCategory">관련 카테고리 *</label>
          <select id="new-qa-category" required class="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm">
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
          <label class="block text-xs font-bold text-slate-700 mb-1" data-i18n="qa.writeModal.fieldContent">문의 내용 *</label>
          <textarea id="new-qa-content" rows="4" required class="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-sm" placeholder="문의하실 내용을 입력해 주세요."></textarea>
        </div>
        <div class="flex items-center gap-2 pt-1">
          <input type="checkbox" id="new-qa-private" class="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
          <label for="new-qa-private" class="text-xs text-slate-600" data-i18n="qa.writeModal.isPrivate">비밀글로 등록 (담당자 및 본인만 열람)</label>
        </div>
        <div class="pt-3 flex justify-end gap-2">
          <button type="button" onclick="closeNewQaModal()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs" data-i18n="qa.writeModal.cancelBtn">취소</button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs" data-i18n="qa.writeModal.submitBtn">문의글 등록하기</button>
        </div>
      </form>
    </div>
  </div>

  <!-- MULTILINGUAL & INTERACTIVE JAVASCRIPT -->
  <script>
    const I18N = {
      ko: {
        'nav.about': '회사소개',
        'nav.values': '가치와 약속',
        'nav.products': '취급품목',
        'nav.strengths': 'PMS의 장점',
        'nav.rfq': 'RFQ 견적요청',
        'nav.board': '문의게시판',
        'hero.pill': '베트남 진출 글로벌 기업을 위한 스마트 MRO',
        'hero.titleHighlight': '원스톱 MRO 산업재 공급,',
        'hero.titleEnd': 'PMS Vina가 함께합니다',
        'hero.subtitle': '포장, 전기, 공구, 안전, 클린룸, 사무, 일반 소모품까지 — 현지 조달 시간과 구매 원가를 획기적으로 절감하는 토털 비즈니스 파트너',
        'hero.btnRfq': '즉시 RFQ 견적요청',
        'hero.btnProducts': '취급품목 카테고리 보기',
        'hero.stat1Val': '15,000+',
        'hero.stat1Label': '공급 가능 MRO 품목군',
        'hero.stat2Val': '99.4%',
        'hero.stat2Label': '정시 납기 준수율',
        'hero.stat3Val': '350+',
        'hero.stat3Label': '베트남 입주 고객사',
        'hero.stat4Val': '24h',
        'hero.stat4Label': '신속 견적 및 당일 발송 체계',
        'about.badge': 'About PMS Vina',
        'about.heading': '신뢰와 전문성으로 완성하는 산업재 공급 인프라',
        'about.lead': 'PMS Vina는 베트남 주요 산업단지에 진출한 제조 및 글로벌 엔터프라이즈를 위한 MRO(유지·보수·운영) 자재 전문 유통 기업입니다.',
        'about.ceoTitle': 'CEO 인사말',
        'about.ceoGreeting': '"광대한 구매 네트워크와 투명한 시스템, 베트남 내 한국 기업을 위한 MRO 일류 파트너"',
        'about.ceoMessage':
          '현재 베트남의 구매 환경은 베트남 전체의 빠른 경제 성장에 발맞추지 못하고 많이 낙후되어 있습니다.\n\n공급 인프라가 성숙되지 못하여 공급 가능 물품의 다양성이 현저히 떨어지고, 부도덕한 구매 관행 및 시장의 불투명성으로 대부분의 기업들이 불필요한 비용을 지출하고 있습니다.\n\nPMS는 베트남 내 한국 회사들에게 소모품, 부자재 등의 납품 전문 및 중국 직접 구매 전문 회사입니다.\n\n광대한 베트남 및 중국의 구매 네트워크를 통해 필요한 모든 제품을 경쟁력 있는 가격으로 공급하고, 로컬 업체와는 차별화된 시스템으로 보다 깨끗하고 도덕성을 갖춘 회사입니다.\n\nPMS는 베트남 내 MRO에 대한 전문성, 중국 직접 구매에 대한 노하우를 바탕으로 고객과의 끊임없는 커뮤니케이션, 지속적인 시장조사를 통해서 베트남의 한국 회사 전문 MRO 일류 회사로 성장, 발전하기 위하여 최선을 다할 것입니다.\n\n회사 설립 이래 지금까지 무한한 믿음으로 PMS를 지켜봐 주신 고객들에게 감사드리며, 믿음에 실망시켜드리지 않기 위해 모든 직원들이 정직과 신뢰의 자세로 열정을 다해 임할 것을 약속드립니다.',
        'about.ceoSignature': 'PMS Vina 임직원 일동 & 대표이사 배상',
        'products.badge': 'Product Portfolio',
        'products.heading': '7대 산업 핵심 MRO 취급 카테고리',
        'products.subheading': '생산 현장의 기초 소모재부터 하이테크 클린룸 라인까지, 15,000개 이상의 엄선된 산업재 라인업을 제공합니다.',
        'strengths.badge': 'Why PMS Vina',
        'strengths.heading': '베트남진출 한국 기업에 특화된 MRO 사업',
        'strengths.trust13Years': '하노이 북부의 기업 소모품을 13년동안 든든하고 믿음직하게 책임지고 있습니다.    13년 동안 시장을 선도한 이유가 분명히 있습니다.',
        'strengths.lead': '베트남 현지 기업들의 복잡하고 비효율적인 소모품 구매 문제를 해결하고, 한국 기업의 신뢰성과 전문성을 바탕으로 다양한 소모품을 한 곳에서 합리적인 가격으로 구매·관리할 수 있는 통합구매 서비스를 제공하기 위해 설립되었습니다. 이를 통해 정확한 납품과 체계적인 단가·거래 이력 관리, 신속하고 책임감 있는 서비스를 제공하여 고객사가 소모품 구매에 대한 부담 없이 본업에 집중할 수 있도록 하는 것을 목표로 합니다.',
        'strengths.marketTitle': '베트남내 투자 기업들의 MRO 물품 구매 진행 관련 현황',
        'strengths.marketPt1': '대부분의 기업들이 원부자재는 한국, 중국 등 제3국에서 직수입하고 있고, 단가나 사용 수량등에 대해 상당히 높은 수준의 관리를 지속적으로 진행하고 있습니다.',
        'strengths.marketPt2': '상대적으로 나머지 MRO 관련 소모품류의 구매는 원부자재의 관리보다는 가격, 업체, 사용 수량등에 대한 관리 수준이 높지 않음.',
        'strengths.causeHeading': '소모품 구매 관리 효율 저하의 주 원인',
        'strengths.c1Title': '관리 비용 효율 저하',
        'strengths.c1Desc': '수천종류의 제품과 낮은 단가에 따라 관리 비용 효율 저하',
        'strengths.c2Title': '시장의 불투명성',
        'strengths.c2Desc': '현지 로컬 시장 정보 부재 및 가격 불투명',
        'strengths.c3Title': '언어의 장벽',
        'strengths.c3Desc': '현지 거래처와의 소통 한계 및 기술 규격 확인 어려움',
        'strengths.c4Title': '주재원 인력 부족',
        'strengths.c4Desc': '소모품 구매 전담을 위한 한국인 관리 인력 부족',
        'strengths.causeSummary': '현지의 특수한 구매 문화가 보이지 않는 구매 원가 상승의 요인으로 작용함.',
        'strengths.mroDefTitle': '※ MRO란?',
        'strengths.mroDefDesc': '기업의 유지(Maintenance), 보수(Repair), 운영(Operation)과 관련되는 생산 직접 소요 원부자재를 제외한 소모성 자재의 구매를 대행하는 유통 물류를 말합니다.',
        'strengths.mroDefNote': '💡 여러 구매 분야중 대표적인 저효율 분야로 개선의 여지는 많지만 투자 대비 효과가 낮아 Outsourcing이 알맞은 분야입니다.',
        'strengths.compTitle': 'PMS의 경쟁력',
        'strengths.p1Title': '물품 소싱 경쟁력',
        'strengths.p1Slogan': '원하는 모든 물품을 구입할 수 있습니다.',
        'strengths.p1Pt1': '80여개 베트남내 납품처 관리를 통해서 고객의 다양한 구매 필요 물품 구매 대응 가능',
        'strengths.p1Pt2': '중국 직구매를 통해서 베트남내 구매하기 어려운 물품 한국대비 경쟁력있는 가격으로 소싱 가능',
        'strengths.p2Title': '가격 경쟁력',
        'strengths.p2Slogan': '베트남 최저 수준의 가격으로 구입할 수 있습니다.',
        'strengths.p2Pt1': '대량 구매를 통한 단가 경쟁력 확보',
        'strengths.p2Pt2': '지속적인 시장조사를 통해 가격 최저 수준 유지',
        'strengths.p2Pt3': '일부 품목 중국 직접 구입을 통해 단가 경쟁력 확보',
        'strengths.p3Title': '배송 경쟁력',
        'strengths.p3Slogan': '배송비 따로 걱정하지 않으셔도 됩니다.',
        'strengths.p3Pt1': '’17년 10월 기준 100여개의 고객 서비스',
        'strengths.p3Pt2': '1~3일전 발주 무료 배송 원칙 준수',
        'strengths.p4Title': '관리 로스 절감',
        'strengths.p4Slogan': '하나의 공급업체만 관리하시면 됩니다.',
        'strengths.p4Pt1': '약 3천여가지에 이르는 일반 소모성 물품, 사무용품, 전기관련 소모품, 공구 부품, 클린룸 용품, 노동 안전용품 등 기업에서 사용하는 모든 소모성 물품을 일괄 취급.',
        'strengths.p4Highlight': 'PMS 하나의 회사와 거래하면 OK. 다수의 공급업체 운영에 따른 도덕성 관리, 단가 관리, 납기 관리, 품질 관리, 대금 지급 관리, 외부 계산서 구입등등 수많은 구매 관리 차원의 로스를 없앨 수 있습니다.',
        'rfq.badge': 'Request For Quotation',
        'rfq.heading': '온라인 Q&A',
        'rfq.subheading': '필요하신 자재 사양과 수량을 남겨주시면 4시간 이내에 최적 단가와 납기를 회신해 드립니다.',
        'rfq.company': '회사명 / 법인명 *',
        'rfq.name': '담당자명 / 직책 *',
        'rfq.email': '이메일 주소 *',
        'rfq.phone': '연락처 (전화/Zalo/WeChat) *',
        'rfq.category': '문의 품목 카테고리 *',
        'rfq.categorySelect': '카테고리를 선택해 주세요',
        'rfq.quantity': '요청 수량 및 단위 *',
        'rfq.itemSpec': '제품명 및 규격 (Part Number/사양) *',
        'rfq.date': '납품 희망일자',
        'rfq.attachFile': '사양서 파일명 (선택)',
        'rfq.notes': '세부 요구사항 및 메모',
        'rfq.submitBtn': '견적 요청서 제출하기',
        'rfq.modalTitle': '견적 요청이 성공적으로 접수되었습니다',
        'rfq.modalDesc': 'PMS Vina의 담당 기술영업 엔지니어가 입력하신 연락처와 이메일로 4시간 이내에 공식 견적서 및 샘플 일정을 안내드립니다.',
        'rfq.rfqNumber': '견적 접수 번호:',
        'rfq.confirmBtn': '확인',
        'qa.badge': 'Customer Q&A Board',
        'qa.heading': '고객 문의 및 기술 상담 게시판',
        'qa.subheading': '제품 규격, 납기, 대량 구매 계약, 시험 성적서 발급 등 궁금하신 사항을 남겨주시면 신속히 답변해 드립니다.',
        'qa.btnNew': '새 문의 등록하기',
        'qa.tableHeader.num': '번호',
        'qa.tableHeader.category': '구분',
        'qa.tableHeader.title': '제목',
        'qa.tableHeader.author': '작성자 / 기업',
        'qa.tableHeader.date': '등록일',
        'qa.tableHeader.status': '답변상태',
        'qa.replyBadge': 'PMS Vina 공식 답변',
        'qa.writeModal.title': '새 문의글 작성',
        'qa.writeModal.fieldTitle': '문의 제목 *',
        'qa.writeModal.fieldAuthor': '작성자명 *',
        'qa.writeModal.fieldCompany': '회사명 *',
        'qa.writeModal.fieldCategory': '관련 카테고리 *',
        'qa.writeModal.fieldContent': '문의 내용 *',
        'qa.writeModal.isPrivate': '비밀글로 등록 (담당자 및 본인만 열람)',
        'qa.writeModal.cancelBtn': '취소',
        'qa.writeModal.submitBtn': '문의글 등록하기',
        'footer.companyDesc': '베트남 하이테크 제조업 및 산업 인프라를 지원하는 프리미엄 MRO 자재 유통 및 공급망 통합 솔루션 전문 기업',
        'footer.contactInfo': '본사 및 연락처',
        'footer.hanoiOffice': '베트남 본사: 베트남 박닌성 옌퐁 산업단지 B-12호 / 하이퐁 물류센터',
        'footer.koreaOffice': '한국 지사: 경기도 화성시 동탄첨단산업단지 MRO 물류센터',
        'footer.tel': '대표 전화',
        'footer.email': '공식 이메일',
        'footer.taxId': '사업자등록번호 (MST)',
        'footer.workHours': '업무 시간',
        'footer.workHoursVal': '월~금 08:00 - 18:00 (토 08:00 - 12:00)',
        'footer.copyright': '© 2026 PMS Vina Co., Ltd. All Rights Reserved.'
      },
      en: {
        'nav.about': 'About Us',
        'nav.values': 'Values & Promises',
        'nav.products': 'Products',
        'nav.strengths': 'Advantages',
        'nav.rfq': 'RFQ Quotation',
        'nav.board': 'Q&A Board',
        'hero.pill': 'Smart MRO Partner for Global Enterprises in Vietnam',
        'hero.titleHighlight': 'One-Stop MRO Industrial Supply,',
        'hero.titleEnd': 'Reliable with PMS Vina',
        'hero.subtitle': 'From packaging, electrical, tools, safety PPE to cleanroom and general supplies — significantly lowering lead time and procurement total cost of ownership.',
        'hero.btnRfq': 'Request RFQ Now',
        'hero.btnProducts': 'Explore Product Catalog',
        'hero.stat1Val': '15,000+',
        'hero.stat1Label': 'Available MRO SKUs',
        'hero.stat2Val': '99.4%',
        'hero.stat2Label': 'On-Time Delivery Rate',
        'hero.stat3Val': '350+',
        'hero.stat3Label': 'Enterprise Clients in VN',
        'hero.stat4Val': '24h',
        'hero.stat4Label': 'Rapid Quote & Dispatch',
        'about.badge': 'About PMS Vina',
        'about.heading': 'Industrial Material Infrastructure Built on Trust and Precision',
        'about.lead': 'PMS Vina is a specialized MRO distribution enterprise serving leading manufacturing and global tech facilities across Vietnam.',
        'about.ceoTitle': 'CEO Message',
        'about.ceoGreeting':
          '"Extensive Sourcing Networks and High Ethical Standards: The Premier MRO Partner for Korean Enterprises in Vietnam."',
        'about.ceoMessage':
          'Currently, Vietnam’s industrial procurement environment significantly lags behind the country’s rapid economic growth.\n\nImmature supply infrastructure severely restricts the diversity of available supplies, and unethical purchasing practices combined with market opacity force many enterprises to incur unnecessary operational expenses.\n\nPMS is a specialized supplier providing consumables and sub-materials to Korean enterprises in Vietnam, alongside direct purchasing expertise from China.\n\nThrough our extensive procurement networks across Vietnam and China, we supply all required products at highly competitive prices, offering a clean, highly ethical system differentiated from conventional local vendors.\n\nLeveraging our deep in-country MRO expertise and direct China procurement know-how, PMS is committed to continuous client communication and market research to grow as the premier MRO partner for Korean enterprises in Vietnam.\n\nWe extend our profound gratitude to our clients who have supported PMS with unwavering trust since our establishment. Every employee pledges to serve with honesty, trust, and passion to always honor and exceed your expectations.',
        'about.ceoSignature': 'Executive Leadership & Employees, PMS Vina',
        'products.badge': 'Product Portfolio',
        'products.heading': '7 Essential Industrial MRO Categories',
        'products.subheading': 'Supplying over 15,000 certified industrial SKUs from workshop consumables to cleanroom materials.',
        'strengths.badge': 'Why PMS Vina',
        'strengths.heading': 'MRO Business Tailored for Foreign & Korean Enterprises in Vietnam',
        'strengths.trust13Years': 'Reliably and dependably managing enterprise consumables across Northern Hanoi for 13 years. There is a definitive reason we have led the market for 13 years.',
        'strengths.lead': 'Established to solve the complicated, fragmented, and inefficient consumables purchasing challenges faced by enterprises in Vietnam. Rooted in Korean reliability and standards, we provide a unified procurement service for industrial supplies at fair market rates. We ensure punctual delivery, transparent unit pricing, and meticulous history records, empowering our clients to dedicate 100% of their focus to core manufacturing.',
        'strengths.marketTitle': 'Current MRO Procurement Realities Among FDI Enterprises in Vietnam',
        'strengths.marketPt1': 'Most enterprises directly import raw and core materials from Korea, China, or 3rd countries, maintaining stringent controls over unit prices and consumption volumes.',
        'strengths.marketPt2': 'Conversely, management over general MRO auxiliary consumables exhibits far lower rigor in terms of pricing, vendor evaluation, and volume control.',
        'strengths.causeHeading': 'Primary Causes of Low Consumables Procurement Efficiency',
        'strengths.c1Title': 'Negative Cost Efficiency',
        'strengths.c1Desc': 'High management overhead spent dealing with thousands of low-unit-value items.',
        'strengths.c2Title': 'Market Opacity',
        'strengths.c2Desc': 'Lack of verified local pricing transparency and authentic market benchmarks.',
        'strengths.c3Title': 'Language Barriers',
        'strengths.c3Desc': 'Communication friction and technical specification ambiguity with local vendors.',
        'strengths.c4Title': 'Expatriate Staffing Deficits',
        'strengths.c4Desc': 'Shortage of dedicated managerial personnel to oversee long-tail factory consumables.',
        'strengths.causeSummary': 'Special local procurement customs act as a hidden catalyst inflating overall manufacturing costs.',
        'strengths.mroDefTitle': '※ What is MRO?',
        'strengths.mroDefDesc': 'MRO represents the agency purchasing and distribution logistics of all consumable supplies required for Maintenance, Repair, and Operation (excluding direct raw materials).',
        'strengths.mroDefNote': '💡 While this segment holds massive optimization potential, internal company reinvestment yields very low ROI—making specialized Outsourcing the ideal strategic solution.',
        'strengths.compTitle': 'PMS Vina Core Competitiveness',
        'strengths.p1Title': 'Material Sourcing Edge',
        'strengths.p1Slogan': 'Sourcing any and every industrial supply required by your facility.',
        'strengths.p1Pt1': 'Overseeing a vetted network of 80+ Vietnamese vendors to swiftly satisfy diverse and urgent factory requests.',
        'strengths.p1Pt2': 'Direct China factory procurement channels to source hard-to-find specialty supplies at pricing far more competitive than Korea.',
        'strengths.p2Title': 'Price & Cost Advantage',
        'strengths.p2Slogan': 'Securing the most competitive wholesale price points across Vietnam.',
        'strengths.p2Pt1': 'Bulk purchasing leverage aggregating volume orders across hundreds of client plants.',
        'strengths.p2Pt2': 'Continuous, structured local and cross-border price index monitoring.',
        'strengths.p2Pt3': 'Direct source-factory purchasing from China eliminates intermediary trader margins.',
        'strengths.p3Title': 'Rapid Dispatch Delivery',
        'strengths.p3Slogan': 'Zero shipping fee burden with direct factory floor dispatch.',
        'strengths.p3Pt1': 'Regular daily delivery routes servicing over 100 enterprise manufacturing plants.',
        'strengths.p3Pt2': 'Strict free direct delivery principle for consolidated orders placed 1–3 days in advance.',
        'strengths.p4Title': 'Elimination of Management Waste',
        'strengths.p4Slogan': 'Streamline operations by managing only ONE unified partner.',
        'strengths.p4Pt1': 'Comprehensive coverage of over 3,000 SKUs: general consumables, office supplies, electrical, tools, cleanroom, and safety PPE.',
        'strengths.p4Highlight': 'Partnering with PMS Vina alone is all you need! Eradicate multiple-vendor administrative losses: ethical risks, price inflation, delayed deliveries, quality disputes, cumbersome reconciliation payments, and external invoice purchasing.',
        'rfq.badge': 'Request For Quotation',
        'rfq.heading': 'Online RFQ Form',
        'rfq.subheading': 'Submit required part specifications and quantities. Our engineering team will respond with competitive pricing within 4 hours.',
        'rfq.company': 'Company / Corporation Name *',
        'rfq.name': 'Contact Person / Title *',
        'rfq.email': 'Email Address *',
        'rfq.phone': 'Phone / Zalo / WeChat *',
        'rfq.category': 'Inquiry Category *',
        'rfq.categorySelect': 'Please select a product category',
        'rfq.quantity': 'Required Quantity & Unit *',
        'rfq.itemSpec': 'Product Name / Specifications / Part # *',
        'rfq.date': 'Target Delivery Date',
        'rfq.attachFile': 'Specification File (Optional)',
        'rfq.notes': 'Detailed Requirements / Notes',
        'rfq.submitBtn': 'Submit Request for Quote',
        'rfq.modalTitle': 'RFQ Received Successfully',
        'rfq.modalDesc': 'A PMS Vina technical sales specialist will review your specifications and send an official quotation via email within 4 hours.',
        'rfq.rfqNumber': 'Reference RFQ Number:',
        'rfq.confirmBtn': 'Confirm',
        'qa.badge': 'Customer Q&A Board',
        'qa.heading': 'Inquiries & Technical Consultation',
        'qa.subheading': 'Feel free to leave questions regarding part specifications, lead times, volume contracts, or test reports.',
        'qa.btnNew': 'Post New Inquiry',
        'qa.tableHeader.num': 'No.',
        'qa.tableHeader.category': 'Category',
        'qa.tableHeader.title': 'Subject',
        'qa.tableHeader.author': 'Author / Company',
        'qa.tableHeader.date': 'Date',
        'qa.tableHeader.status': 'Status',
        'qa.replyBadge': 'PMS Vina Official Response',
        'qa.writeModal.title': 'Post New Inquiry',
        'qa.writeModal.fieldTitle': 'Inquiry Title *',
        'qa.writeModal.fieldAuthor': 'Contact Name *',
        'qa.writeModal.fieldCompany': 'Company Name *',
        'qa.writeModal.fieldCategory': 'Related Category *',
        'qa.writeModal.fieldContent': 'Inquiry Details *',
        'qa.writeModal.isPrivate': 'Mark as Private (Restricted)',
        'qa.writeModal.cancelBtn': 'Cancel',
        'qa.writeModal.submitBtn': 'Submit Inquiry',
        'footer.companyDesc': 'Comprehensive MRO industrial supplies distribution and supply chain integration partner serving global manufacturers in Vietnam.',
        'footer.contactInfo': 'Offices & Contact',
        'footer.hanoiOffice': 'Vietnam HQ: Lot B-12, Yen Phong Industrial Park, Bac Ninh / Hai Phong Logistics Hub',
        'footer.koreaOffice': 'Korea Branch: Dongtan High-Tech Industrial Hub, Hwaseong, Gyeonggi-do',
        'footer.tel': 'Telephone',
        'footer.email': 'Official Email',
        'footer.taxId': 'Tax Code (MST)',
        'footer.workHours': 'Business Hours',
        'footer.workHoursVal': 'Mon-Fri 08:00 - 18:00 (Sat 08:00 - 12:00)',
        'footer.copyright': '© 2026 PMS Vina Co., Ltd. All Rights Reserved.'
      },
      vi: {
        'nav.about': 'Giới thiệu',
        'nav.values': 'Giá Trị & Cam Kết',
        'nav.products': 'Danh mục sản phẩm',
        'nav.strengths': 'Ưu Điểm PMS',
        'nav.rfq': 'Yêu cầu báo giá (RFQ)',
        'nav.board': 'Hỏi đáp & Tư vấn',
        'hero.pill': 'Giải pháp MRO thông minh cho doanh nghiệp FDI tại Việt Nam',
        'hero.titleHighlight': 'Cung ứng vật tư MRO công nghiệp toàn diện,',
        'hero.titleEnd': 'Đồng hành cùng PMS Vina',
        'hero.subtitle': 'Đóng gói, thiết bị điện, công cụ, bảo hộ, phòng sạch đến tiêu hao tổng hợp — Tối ưu chi phí và rút ngắn tối đa thời gian giao hàng.',
        'hero.btnRfq': 'Gửi yêu cầu báo giá ngay',
        'hero.btnProducts': 'Xem danh mục sản phẩm',
        'hero.stat1Val': '15,000+',
        'hero.stat1Label': 'Mặt hàng MRO sẵn sàng',
        'hero.stat2Val': '99.4%',
        'hero.stat2Label': 'Tỷ lệ giao hàng đúng hẹn',
        'hero.stat3Val': '350+',
        'hero.stat3Label': 'Khách hàng doanh nghiệp tại VN',
        'hero.stat4Val': '24h',
        'hero.stat4Label': 'Báo giá nhanh & Giao hỏa tốc',
        'about.badge': 'Về PMS Vina',
        'about.heading': 'Hạ tầng cung ứng vật tư công nghiệp dựa trên Uy tín & Chuyên nghiệp',
        'about.lead': 'PMS Vina là đơn vị phân phối vật tư MRO chuyên nghiệp dành cho các nhà máy sản xuất tại các khu công nghiệp trọng điểm Việt Nam.',
        'about.ceoTitle': 'Thông Điệp Từ Ban Giám Đốc',
        'about.ceoGreeting':
          '"Mạng lưới thu mua rộng lớn và hệ thống minh bạch: Đối tác MRO hàng đầu cho doanh nghiệp Hàn Quốc tại Việt Nam."',
        'about.ceoMessage':
          'Hiện nay, môi trường thu mua vật tư công nghiệp tại Việt Nam vẫn còn nhiều hạn chế và chưa bắt kịp tốc độ tăng trưởng kinh tế nhanh chóng của cả nước.\n\nHạ tầng cung ứng chưa hoàn thiện khiến danh mục hàng hóa cung ứng thiếu đa dạng, cùng với tập quán thu mua thiếu minh bạch khiến đa số doanh nghiệp phải chịu các khoản chi phí không đáng có.\n\nPMS là doanh nghiệp chuyên cung ứng vật tư tiêu hao, phụ liệu công nghiệp và chuyên sâu mua hàng trực tiếp từ Trung Quốc dành cho các công ty Hàn Quốc tại Việt Nam.\n\nThông qua mạng lưới cung ứng rộng khắp tại Việt Nam và Trung Quốc, chúng tôi cung cấp mọi sản phẩm cần thiết với giá thành cạnh tranh nhất, đồng thời vận hành một hệ thống minh bạch, chuyên nghiệp và đạo đức vượt trội so với các nhà cung cấp địa phương.\n\nDựa trên chuyên môn sâu về MRO tại Việt Nam và bí quyết thu mua trực tiếp từ Trung Quốc, PMS cam kết luôn lắng nghe, nghiên cứu thị trường để phát triển thành đối tác MRO số 1 cho các doanh nghiệp Hàn Quốc.\n\nChúng tôi xin chân thành cảm ơn Quý khách hàng đã luôn trao gửi trọn vẹn niềm tin cho PMS từ ngày đầu thành lập. Toàn thể cán bộ công nhân viên cam kết luôn hành động với tinh thần chính trực, uy tín và nhiệt huyết cao nhất để không phụ lòng tin yêu của Quý vị.',
        'about.ceoSignature': 'Ban Giám Đốc & Toàn thể CBNV PMS Vina',
        'products.badge': 'Danh mục mặt hàng',
        'products.heading': '7 Nhóm Vật Tư MRO Công Nghiệp Trọng Yếu',
        'products.subheading': 'Cung ứng hơn 15,000 mã hàng đạt tiêu chuẩn quốc tế từ xưởng sản xuất đến phòng sạch công nghệ cao.',
        'strengths.badge': 'Why PMS Vina',
        'strengths.heading': 'Dịch vụ MRO chuyên biệt cho các doanh nghiệp FDI và Hàn Quốc tại Việt Nam',
        'strengths.trust13Years': 'Vững vàng và đáng tin cậy chịu trách nhiệm cung ứng vật tư tiêu hao cho các doanh nghiệp tại miền Bắc Hà Nội suốt 13 năm qua. Chắc chắn có lý do để chúng tôi dẫn đầu thị trường trong suốt 13 năm.',
        'strengths.lead': 'Được thành lập nhằm giải quyết các bài toán mua sắm vật tư tiêu hao phức tạp, phân mảnh và kém hiệu quả của các nhà máy tại Việt Nam. Trên nền tảng uy tín và tính chuyên nghiệp chuẩn Hàn Quốc, chúng tôi cung cấp dịch vụ mua sắm tích hợp mọi vật tư tiêu hao tại một đầu mối duy nhất với giá thành hợp lý. Đảm bảo giao hàng chính xác, quản lý đơn giá và lịch sử giao dịch chặt chẽ, giúp Quý khách hàng gạt bỏ gánh nặng mua sắm để toàn tâm tập trung vào hoạt động sản xuất cốt lõi.',
        'strengths.marketTitle': 'Thực trạng thu mua vật tư MRO của các doanh nghiệp đầu tư tại Việt Nam',
        'strengths.marketPt1': 'Đa số doanh nghiệp nhập khẩu trực tiếp nguyên vật liệu chính từ Hàn Quốc, Trung Quốc hoặc nước thứ ba, đồng thời duy trì hệ thống quản trị chặt chẽ về đơn giá và định mức tiêu hao.',
        'strengths.marketPt2': 'Ngược lại, việc mua sắm các loại vật tư tiêu hao MRO phụ trợ thường chưa đạt được mức độ kiểm soát tương xứng về giá cả, đánh giá nhà cung cấp và lượng sử dụng thực tế.',
        'strengths.causeHeading': 'Nguyên nhân chính khiến hiệu quả quản lý vật tư tiêu hao sụt giảm',
        'strengths.c1Title': 'Chi phí quản lý cao hơn hiệu quả',
        'strengths.c1Desc': 'Hàng ngàn chủng loại lặt vặt với đơn giá thấp khiến chi phí quản trị và thời gian giao dịch vượt quá giá trị bản thân vật tư.',
        'strengths.c2Title': 'Thiếu tính minh bạch thị trường',
        'strengths.c2Desc': 'Thiếu dữ liệu giá thị trường chuẩn xác và khó đối chiếu tính minh bạch từ các nguồn địa phương.',
        'strengths.c3Title': 'Rào cản ngôn ngữ và kỹ thuật',
        'strengths.c3Desc': 'Khó khăn trong trao đổi chuyên sâu về thông số kỹ thuật, bản vẽ và đàm phán với các nhà cung cấp nhỏ lẻ.',
        'strengths.c4Title': 'Thiếu hụt nhân sự phái cử',
        'strengths.c4Desc': 'Hạn chế nhân lực quản lý người Hàn/chuyên gia nước ngoài để theo dõi chi tiết từng món hàng tiêu hao.',
        'strengths.causeSummary': 'Văn hóa mua hàng đặc thù tại địa phương vô hình trung trở thành tác nhân làm gia tăng chi phí sản xuất tổng thể.',
        'strengths.mroDefTitle': '※ MRO là gì?',
        'strengths.mroDefDesc': 'MRO là hoạt động đại diện mua sắm và logistics kho vận toàn bộ các vật tư tiêu hao phục vụ Bảo trì (Maintenance), Sửa chữa (Repair) và Vận hành (Operation), không bao gồm nguyên liệu sản xuất trực tiếp.',
        'strengths.mroDefNote': '💡 Dù tiềm ẩn dư địa cắt giảm chi phí rất lớn nhưng nếu doanh nghiệp tự tái đầu tư quản lý thì tỷ suất lợi nhuận thu về rất thấp; do đó Outsource (thuê ngoài) cho đơn vị chuyên môn là giải pháp tối ưu nhất.',
        'strengths.compTitle': 'Năng lực cạnh tranh cốt lõi của PMS Vina',
        'strengths.p1Title': 'Năng lực Tìm nguồn hàng (Sourcing)',
        'strengths.p1Slogan': 'Cung ứng mọi vật tư công nghiệp theo đúng yêu cầu.',
        'strengths.p1Pt1': 'Quản lý mạng lưới hơn 80 nhà cung ứng đạt chuẩn tại Việt Nam, đáp ứng linh hoạt mọi nhu cầu đột xuất và định kỳ.',
        'strengths.p1Pt2': 'Kênh mua hàng trực tiếp từ nhà máy Trung Quốc giúp tìm kiếm các vật tư khó tìm tại Việt Nam với mức giá vượt trội so với nhập từ Hàn Quốc.',
        'strengths.p2Title': 'Năng lực Cạnh tranh về Giá',
        'strengths.p2Slogan': 'Mức giá cạnh tranh hàng đầu thị trường Việt Nam.',
        'strengths.p2Pt1': 'Tổng hợp sản lượng mua số lượng lớn (Bulk Purchasing) mang lại ưu thế đàm phán giá bán buôn tốt nhất.',
        'strengths.p2Pt2': 'Khảo sát định kỳ liên tục biến động thị trường trong nước và quốc tế để duy trì giá sàn tốt nhất cho đối tác.',
        'strengths.p2Pt3': 'Nhập khẩu trực tiếp từ xưởng sản xuất gốc tại Trung Quốc, loại bỏ hoàn toàn các tầng phân phối trung gian.',
        'strengths.p3Title': 'Năng lực Giao vận hỏa tốc',
        'strengths.p3Slogan': 'Không lo chi phí vận chuyển, giao tận xưởng sản xuất.',
        'strengths.p3Pt1': 'Phục vụ thường xuyên cho hơn 100 nhà máy khách hàng FDI lớn tại miền Bắc.',
        'strengths.p3Pt2': 'Nguyên tắc miễn phí vận chuyển tận cổng nhà máy cho các đơn hàng đặt trước 1~3 ngày.',
        'strengths.p4Title': 'Triệt tiêu thất thoát & Lãng phí quản trị',
        'strengths.p4Slogan': 'Chỉ cần quản lý DUY NHẤT một nhà cung cấp uy tín.',
        'strengths.p4Pt1': 'Cung cấp trọn gói khoảng 3,000 danh mục: vật tư tiêu hao, văn phòng phẩm, thiết bị điện, dụng cụ cơ khí, vật tư phòng sạch, bảo hộ lao động.',
        'strengths.p4Highlight': 'Chỉ cần làm việc với một mình PMS Vina là ĐỦ! Loại bỏ triệt để các rủi ro đạo đức, mất kiểm soát đơn giá, trễ hạn giao hàng, tranh chấp chất lượng, thủ tục thanh toán đối soát phức tạp và mua hóa đơn ngoài.',
        'rfq.badge': 'Yêu cầu báo giá',
        'rfq.heading': 'Biểu mẫu gửi yêu cầu báo giá (RFQ)',
        'rfq.subheading': 'Vui lòng cung cấp quy cách và số lượng, đội ngũ kinh doanh sẽ phản hồi báo giá trong vòng 4 giờ.',
        'rfq.company': 'Tên công ty / Doanh nghiệp *',
        'rfq.name': 'Người phụ trách / Chức vụ *',
        'rfq.email': 'Địa chỉ Email *',
        'rfq.phone': 'Số điện thoại / Zalo / WeChat *',
        'rfq.category': 'Phân loại nhóm hàng *',
        'rfq.categorySelect': 'Vui lòng chọn danh mục vật tư',
        'rfq.quantity': 'Số lượng & Đơn vị tính *',
        'rfq.itemSpec': 'Tên sản phẩm & Quy cách (Model/Part Number) *',
        'rfq.date': 'Ngày mong muốn nhận hàng',
        'rfq.attachFile': 'Đính kèm bản vẽ (Nếu có)',
        'rfq.notes': 'Yêu cầu chi tiết & Ghi chú thêm',
        'rfq.submitBtn': 'Gửi yêu cầu báo giá ngay',
        'rfq.modalTitle': 'Yêu cầu báo giá đã được tiếp nhận',
        'rfq.modalDesc': 'Kỹ sư kinh doanh PMS Vina sẽ liên hệ và gửi bảng báo giá chính thức vào email quý khách trong vòng 4 giờ.',
        'rfq.rfqNumber': 'Mã số RFQ tham chiếu:',
        'rfq.confirmBtn': 'Xác nhận',
        'qa.badge': 'Hỏi đáp & Hỗ trợ kỹ thuật',
        'qa.heading': 'Bảng Hỏi Đáp & Tư Vấn Khách Hàng',
        'qa.subheading': 'Mọi thắc mắc về tiêu chuẩn kỹ thuật, tiến độ giao hàng hoặc giá sỉ sẽ được phản hồi nhanh chóng.',
        'qa.btnNew': 'Đăng câu hỏi mới',
        'qa.tableHeader.num': 'STT',
        'qa.tableHeader.category': 'Nhóm',
        'qa.tableHeader.title': 'Tiêu đề',
        'qa.tableHeader.author': 'Người gửi / Doanh nghiệp',
        'qa.tableHeader.date': 'Ngày gửi',
        'qa.tableHeader.status': 'Trạng thái',
        'qa.replyBadge': 'Phản hồi từ PMS Vina',
        'qa.writeModal.title': 'Tạo câu hỏi tư vấn mới',
        'qa.writeModal.fieldTitle': 'Tiêu đề câu hỏi *',
        'qa.writeModal.fieldAuthor': 'Họ tên người gửi *',
        'qa.writeModal.fieldCompany': 'Tên cơ quan / Doanh nghiệp *',
        'qa.writeModal.fieldCategory': 'Nhóm sản phẩm liên quan *',
        'qa.writeModal.fieldContent': 'Nội dung chi tiết *',
        'qa.writeModal.isPrivate': 'Đặt làm câu hỏi bí mật',
        'qa.writeModal.cancelBtn': 'Hủy bỏ',
        'qa.writeModal.submitBtn': 'Đăng câu hỏi',
        'footer.companyDesc': 'Nhà cung ứng và phân phối vật tư MRO công nghiệp toàn diện cho doanh nghiệp sản xuất tại Việt Nam.',
        'footer.contactInfo': 'Trụ sở & Thông tin liên lạc',
        'footer.hanoiOffice': 'Trụ sở Việt Nam: Lô B-12, KCN Yên Phong, Bắc Ninh / Kho vận Hải Phòng',
        'footer.koreaOffice': 'Văn phòng Hàn Quốc: Khu công nghệ cao Dongtan, Hwaseong, Gyeonggi-do',
        'footer.tel': 'Điện thoại hotline',
        'footer.email': 'Email chính thức',
        'footer.taxId': 'Mã số thuế (MST)',
        'footer.workHours': 'Giờ làm việc',
        'footer.workHoursVal': 'T2 - T6: 08:00 - 18:00 (T7: 08:00 - 12:00)',
        'footer.copyright': '© 2026 PMS Vina Co., Ltd. Bảo lưu mọi quyền.'
      },
      zh: {
        'nav.about': '公司介绍',
        'nav.values': '价值与承诺',
        'nav.products': '产品分类',
        'nav.strengths': 'PMS的核心优势',
        'nav.rfq': 'RFQ询价单',
        'nav.board': '咨询留言板',
        'hero.pill': '服务越南制造业与跨国企业的智慧MRO集采伙伴',
        'hero.titleHighlight': '一站式 MRO 工业品供应链，',
        'hero.titleEnd': 'PMS Vina 与您携手共赢',
        'hero.subtitle': '涵盖包装、电气、五金工具、安全劳保、洁净无尘室、办公及车间通用耗材 — 大幅缩减采购交期与企业综合采购成本。',
        'hero.btnRfq': '立即提交 RFQ 询价',
        'hero.btnProducts': '浏览七大产品品类',
        'hero.stat1Val': '15,000+',
        'hero.stat1Label': '现货在售工业品SKU',
        'hero.stat2Val': '99.4%',
        'hero.stat2Label': '准时交货履约率',
        'hero.stat3Val': '350+',
        'hero.stat3Label': '越南驻厂合作企业',
        'hero.stat4Val': '24h',
        'hero.stat4Label': '极速报价与当日发货',
        'about.badge': 'About PMS Vina',
        'about.heading': '以诚信与专业构筑坚实的工业品供应链基石',
        'about.lead': 'PMS Vina 专注于为入驻越南各大型工业园区的制造型企业及跨国科技厂区提供MRO工业品综合供应链服务。',
        'about.ceoTitle': '总经理致辞',
        'about.ceoGreeting':
          '"依托庞大直采网络与透明规范体系，打造在越韩资企业首选的一流MRO战略伙伴。"',
        'about.ceoMessage':
          '当前，越南工业品采购环境相对滞后，尚未能完全跟上越南整体经济高速发展的步伐。\n\n配套供应链基础设施的不成熟导致供应物资种类严重匮乏，加之不规范的采购陋习与市场信息不透明，致使绝大多数企业承担了许多不必要的额外支出。\n\nPMS 是一家专业为在越韩资企业提供各类消耗品、辅助生产资材，并具备中国一手直接采购实力的综合MRO服务商。\n\n依托遍布越南本土与中国的广阔采购网络，我们能够以极具竞争力的价格供给客户所需的全线产品，凭借与本地供应商截然不同的规范化运作体系，树立清廉、高道德水准的供应链标杆。\n\nPMS 将依托在越深耕 MRO 的专业积淀与中国直接采购丰富经验，通过与客户的密切沟通和持续的市场调研，全力以赴发展成为越南韩资企业信赖的一流 MRO 战略合作伙伴。\n\n衷心感谢自创立以来始终给予 PMS 坚定信任的广大客户。为了不辜负这份厚爱，全体员工将恪守诚实与信用的原则，满怀激情竭诚为您服务。',
        'about.ceoSignature': 'PMS Vina 全体同仁 & 总经理 谨启',
        'products.badge': 'Product Portfolio',
        'products.heading': '7大核心工业 MRO 经营品类',
        'products.subheading': '常备超15,000种国际标准工业品，满足全方位生产所需。',
        'strengths.badge': 'Why PMS Vina',
        'strengths.heading': '专为在越外资及韩资制造企业量身定制的 MRO 综合采购业务',
        'strengths.trust13Years': '13年来始终稳健可靠地承担越南河内北部企业的消耗品保供重任。持续领跑市场13年，源于无可替代的硬核实力。',
        'strengths.lead': '旨在解决在越制造企业复杂、低效的耗材采购难题。依托韩国企业的严谨信誉与专业服务标准，我们提供一站式工业耗材集采与供应链管理服务，确保准时交付、价格透明及完善的采购档案跟踪，助力客户剥离繁杂的采购事务，全身心聚焦核心制造业务。',
        'strengths.marketTitle': '在越外资制造企业 MRO 物料采购现状与痛点',
        'strengths.marketPt1': '大多数企业的主料及核心零配件均由韩国、中国或第三国直接进口，并对单价和消耗用量实施极其严密的高水平精细化管理。',
        'strengths.marketPt2': '相反，各类 MRO 辅助消耗品的采购，在价格、供应商考核、耗量管控等层面的规范化程度普遍较低。',
        'strengths.causeHeading': '消耗品采购管理效率低下的主要原因',
        'strengths.c1Title': '管理成本效益倒挂',
        'strengths.c1Desc': '数千种长尾品类且单价极低，投入的管理沟通与行政成本远超物料本身价值。',
        'strengths.c2Title': '本地市场缺乏透明度',
        'strengths.c2Desc': '缺乏经过验证的本地真实行情数据，零散渠道价格不透明。',
        'strengths.c3Title': '语言与技术沟通壁垒',
        'strengths.c3Desc': '与越南本地零散供应商在深入技术参数、规格确认及商务谈判中存在语言障碍。',
        'strengths.c4Title': '外派驻厂管理人员匮乏',
        'strengths.c4Desc': '韩籍/外籍专职管理资源有限，无法分派专人精细追踪长尾耗材采购。',
        'strengths.causeSummary': '当地特殊的非标采购环境，正成为无形中推高工厂采购综合成本的关键诱因。',
        'strengths.mroDefTitle': '※ 什么是 MRO？',
        'strengths.mroDefDesc': 'MRO 即工厂维护（Maintenance）、维修（Repair）与日常运行（Operation）所需的全部工业消耗性辅料（不含直接生产用原材料）的采购代理与仓储物流服务。',
        'strengths.mroDefNote': '💡 该领域虽具巨大的降本空间，但若企业自行投入重构，投资回报率极低，因此通过专业服务商实施外包（Outsourcing）是业界公认的最佳战略路径。',
        'strengths.compTitle': 'PMS Vina 核心竞争优势',
        'strengths.p1Title': '物料寻源竞争力',
        'strengths.p1Slogan': '满足工厂所需任意工业物料的快速集采。',
        'strengths.p1Pt1': '统筹管理越南本土逾80家合格供应商网络，敏捷响应各类突发与常规采购需求。',
        'strengths.p1Pt2': '打通中国源头工厂直采渠道，以远优于韩国本土的价格采购越南当地难以寻得的特种工业品。',
        'strengths.p2Title': '价格与成本竞争力',
        'strengths.p2Slogan': '享受全越南极具竞争力的规模化批发底价。',
        'strengths.p2Pt1': '依托千家规模订单聚合采购（Bulk Purchasing），建立强大的批量议价权。',
        'strengths.p2Pt2': '定期持续追踪本国及跨境行情，始终确保为客户维持极具竞争力的价格基准。',
        'strengths.p2Pt3': '重点品类直达中国源头制造厂直发，彻底剔除多层中间贸易加价。',
        'strengths.p3Title': '全境直达配送竞争力',
        'strengths.p3Slogan': '无需担忧物流运费，准时直达车间现场。',
        'strengths.p3Pt1': '常态化服务越南北部超100家大型外资客户，建立高频直达配送专线。',
        'strengths.p3Pt2': '严格执行提前 1~3 天统一下单享免费直达厂区卸货原则。',
        'strengths.p4Title': '全面消除管理损耗',
        'strengths.p4Slogan': '单一优质供应商统括管理，化繁为简。',
        'strengths.p4Pt1': '一站式涵盖常规消耗品、办公耗材、电气电工、工具五金、无尘洁净室用品、劳保防护等近 3,000 种全品类。',
        'strengths.p4Highlight': '仅需对接 PMS Vina 一家即可！彻底杜绝多供应商管理带来的道德风险、价格失控、交期延误、品质争议、繁琐对账付款以及外部发票购买等数不清的隐形管理损耗。',
        'rfq.badge': 'Request For Quotation',
        'rfq.heading': '在线 RFQ 快速询价单',
        'rfq.subheading': '请填写您所需的物料规格与预计数量，技术销售团队将在 4 小时内出具正式报价单。',
        'rfq.company': '企业 / 法人全称 *',
        'rfq.name': '联系人 / 部门职位 *',
        'rfq.email': '电子邮箱地址 *',
        'rfq.phone': '联系电话 / WeChat / Zalo *',
        'rfq.category': '询价物料所属分类 *',
        'rfq.categorySelect': '请选择物料品类',
        'rfq.quantity': '需求数量及计量单位 *',
        'rfq.itemSpec': '产品名称、规格型号及 Part Number *',
        'rfq.date': '期望交货日期',
        'rfq.attachFile': '上传图纸/规格书文件名',
        'rfq.notes': '详细需求与备注说明',
        'rfq.submitBtn': '提交 RFQ 询价单',
        'rfq.modalTitle': '您的询价单已成功提交',
        'rfq.modalDesc': 'PMS Vina 专属采购工程师已接收到您的询价需求，将在 4 个工作小时内向您发送正式盖章报价单。',
        'rfq.rfqNumber': '询价单跟踪编号:',
        'rfq.confirmBtn': '确认',
        'qa.badge': 'Customer Q&A Board',
        'qa.heading': '客户留言与技术咨询看板',
        'qa.subheading': '欢迎随时就产品规格、批量交期、检测报告或集采优惠向我们咨询。',
        'qa.btnNew': '发布新咨询',
        'qa.tableHeader.num': '序号',
        'qa.tableHeader.category': '类别',
        'qa.tableHeader.title': '咨询主题',
        'qa.tableHeader.author': '发帖人 / 企业',
        'qa.tableHeader.date': '发布日期',
        'qa.tableHeader.status': '答复状态',
        'qa.replyBadge': 'PMS Vina 官方答复',
        'qa.writeModal.title': '提交新咨询留言',
        'qa.writeModal.fieldTitle': '咨询标题 *',
        'qa.writeModal.fieldAuthor': '联系人姓名 *',
        'qa.writeModal.fieldCompany': '所属企业名称 *',
        'qa.writeModal.fieldCategory': '关联产品分类 *',
        'qa.writeModal.fieldContent': '详细咨询内容 *',
        'qa.writeModal.isPrivate': '设为私密留言',
        'qa.writeModal.cancelBtn': '取消',
        'qa.writeModal.submitBtn': '确认发布留言',
        'footer.companyDesc': '服务越南制造业及高新科技产业的优质工业MRO供应链整合伙伴。',
        'footer.contactInfo': '公司联络信息',
        'footer.hanoiOffice': '越南总部：越南北宁省安丰工业区 B-12 地块 / 海防现代物流中心',
        'footer.koreaOffice': '韩国办事处：韩国京畿道华城市东滩高新技术产业园区 MRO 枢纽',
        'footer.tel': '官方咨询电话',
        'footer.email': '商务联络邮箱',
        'footer.taxId': '企业税号 (MST)',
        'footer.workHours': '营业时间',
        'footer.workHoursVal': '周一至周五 08:00 - 18:00 (周六 08:00 - 12:00)',
        'footer.copyright': '© 2026 PMS Vina Co., Ltd. 版权所有。'
      }
    };

    const CATEGORIES = [
      {
        id: 'packaging',
        icon: 'package',
        image: PACKAGING_MATERIALS_IMAGE,
        badge: { ko: '카테고리 01', en: 'Category 01', vi: 'Danh mục 01', zh: '类别 01' },
        title: { ko: '포장자재', en: 'Packaging Materials', vi: 'Vật Liệu Đóng Gói', zh: '包装材料' },
        desc: {
          ko: '안전한 제품 보관 및 물류 이송을 위한 골판지 박스, 단프라, 플라스틱 박스, 포장랩, PE비닐/완충재 및 밴딩끈 종합 공급',
          en: 'Comprehensive industrial packaging supplies: corrugated boxes, Danpla boxes, plastic bins, stretch wrap, PE foam, and strapping bands.',
          vi: 'Cung ứng trọn gói vật tư đóng gói công nghiệp: thùng carton, thùng Danpla, sóng nhựa, màng PE quấn pallet, xốp EPE và dây đai.',
          zh: '全方位工业包装资材：瓦楞纸箱、Danpla中空板箱、工业塑料周转箱、拉伸缠绕膜、PE胶袋/珍珠棉发泡材及打包带。'
        },
        items: {
          ko: ['골판지 박스', '단프라 박스', '플라스틱 박스', '포장랩', 'PE비닐(봉투) / 발포지 / 토이론지', '밴딩끈 및 기타'],
          en: ['Corrugated Cardboard Boxes', 'Danpla Corrugated Plastic Boxes', 'Industrial Plastic Storage Crates', 'Industrial Stretch Film', 'PE Poly Bags / Foam Sheets / Toylon', 'PP Strapping Bands & Others'],
          vi: ['Thùng carton sóng', 'Thùng nhựa Danpla', 'Sóng / Khay nhựa công nghiệp', 'Màng PE quấn pallet', 'Túi nilon PE / Xốp EPE / Màng Toylon', 'Dây đai đóng thùng & Phụ kiện'],
          zh: ['瓦楞纸箱', '中空板周转箱 (Danpla箱)', '工业塑料周转箱 / 胶筐', '工业拉伸缠绕膜', 'PE胶袋 / 珍珠棉发泡片 / Toylon发泡材', '打包带及其他包装辅料']
        }
      },
      {
        id: 'electrical',
        icon: 'zap',
        image: ELECTRICAL_SUPPLIES_IMAGE,
        badge: { ko: '카테고리 02', en: 'Category 02', vi: 'Danh mục 02', zh: '类别 02' },
        title: { ko: '전기용품', en: 'Electrical Supplies', vi: 'Thiết Bị Điện & Tự Động Hóa', zh: '电气与工控用品' },
        desc: {
          ko: '전력 케이블, 배선 차단기, 조명, 단자, 배관 및 공업용 환기팬 등 공장 가동과 설비 보전을 위한 종합 전기 자재 공급',
          en: 'Comprehensive factory electrical supplies: power cables, circuit breakers, industrial LED lighting, terminals, conduits, and ventilation fans.',
          vi: 'Cung cấp trọn bộ vật tư điện công nghiệp: dây cáp điện, aptomat, đèn LED nhà xưởng, đầu cosse, ống luồn dây và quạt thông gió.',
          zh: '供应全系列工业电气资材：电力电缆、断路器、工业LED照明、接线端子、穿线管及工业通风设备。'
        },
        items: {
          ko: [
            '전력 케이블, 접지선 및 산업용 전선릴',
            '산업용 차단기 (MCCB, ELCB, MCB)',
            '스위치, 벽면 콘센트 및 다구 멀티탭',
            '공장용 고천장 LED 투광기 및 전구',
            '압착단자, 나일론 케이블타이 & 절연테이프',
            'PVC 전선 배관재, 환풍기 및 공업용 팬'
          ],
          en: [
            'Power Cables, Ground Wire & Cable Reels',
            'Circuit Breakers (MCCB, ELCB, MCB)',
            'Switches, Wall Outlets & Power Strips',
            'Industrial LED High-Bay Floodlights & Bulbs',
            'Crimp Terminals, Cable Ties & Insulation Tapes',
            'PVC Conduits, Exhaust Fans & Industrial Pedestal Fans'
          ],
          vi: [
            'Dây cáp điện công nghiệp & Rulo cuộn dây',
            'Cầu dao / Aptomat (MCCB, ELCB, MCB)',
            'Công tắc, ổ cắm âm tường & Ổ cắm kéo dài',
            'Đèn pha LED nhà xưởng & Bóng đèn tiết kiệm điện',
            'Đầu cosse, dây rút nhựa & Băng keo điện nano',
            'Ống luồn dây PVC, Quạt thông gió & Quạt công nghiệp'
          ],
          zh: [
            '工业电力电缆、接地线及移动式电缆盘',
            '工业断路器与漏电开关 (MCCB, ELCB, MCB)',
            '工业按钮开关、墙面插座及多孔插线板',
            '工厂用高棚LED投光灯及节能灯泡',
            '冷压接线端子、尼龙扎带及PVC绝缘胶带',
            'PVC穿线管材、工业换气扇及强力工业风扇'
          ]
        }
      },
      {
        id: 'tools',
        icon: 'wrench',
        image: TOOLS_SUPPLIES_IMAGE,
        badge: { ko: '카테고리 03', en: 'Category 03', vi: 'Danh mục 03', zh: '类别 03' },
        title: { ko: '공구부품', en: 'Tools & Hardware', vi: 'Dụng Cụ & Linh Kiện Cơ Khí', zh: '工具与五金零部件' },
        desc: {
          ko: '수공구·전동공구, 정밀 측정기, SKF 베어링, 볼트·너트, 공압 피팅, 타이밍 벨트, 절단석 및 방청 윤활제(WD-40/RP7) 등 공장 유지보수 MRO 종합 공급',
          en: 'Comprehensive maintenance MRO supplies: hand & power tools, calipers, SKF bearings, bolts, pneumatic fittings, timing belts, cutting wheels, and penetrating lubricants.',
          vi: 'Cung cấp đồng bộ thiết bị MRO: dụng cụ cơ khí, máy điện, vòng bi SKF, bu lông ốc vít, đầu nối khí nén, dây curoa, đá cắt và dầu bôi trơn rỉ sét (WD-40/RP7).',
          zh: '全系列厂房维护MRO物料：手动与电动工具、数显量具、SKF精密轴承、紧固件螺栓、气动接头、同步传动皮带、切割砂轮及防锈润滑剂。'
        },
        items: {
          ko: [
            '수공구 세트 & 전동공구 (소켓세트, 드릴, 그라인더, 인두기, 에어건)',
            '정밀 측정 및 검사기기 (디지털 캘리퍼스, 확대경 작업등, 온습도계)',
            'SKF 산업용 정밀 베어링 및 볼트·너트 (SUS 렌치볼트, 강력자석)',
            '공압 원터치 피팅 & 퀵 커플러 (에어 니플, 배관 체결 부품)',
            '산업용 타이밍 벨트, V벨트 & 초경 절단석/연마 그라인더 휠',
            '방청 윤활제(WD-40/RP7), 우레탄 폼, 금형 세정제 및 도색 붓'
          ],
          en: [
            'Hand & Power Tools (Socket Sets, Drills, Grinders, Soldering, Air Guns)',
            'Precision Measuring Tools (Digital Calipers, Lamp Magnifiers, Gauges)',
            'SKF Precision Industrial Bearings & Fasteners (SUS Bolts, Nuts, Magnets)',
            'Pneumatic One-Touch Fittings & Quick Couplers (Air Nipples, Connectors)',
            'Industrial Timing Belts, Transmission V-Belts & Abrasive Cutting Discs',
            'Lubricants (WD-40/RP7), Expanding PU Foam, Mold Cleaners & Paint Brushes'
          ],
          vi: [
            'Bộ dụng cụ cầm tay & máy cơ khí (khẩu tuýp, máy khoan, mài, mỏ hàn, súng xì khô)',
            'Dụng cụ đo lường chính xác (thước kẹp điện tử, kính lúp để bàn, đo nhiệt ẩm)',
            'Vòng bi công nghiệp SKF & Bu lông ốc vít (bu lông chìm inox, nam châm vĩnh cửu)',
            'Đầu nối nhanh khí nén & Cút nối One-touch (khớp nối hơi, co nối)',
            'Dây curoa răng truyền động, dây đai V & Đá cắt, đá mài kim loại',
            'Dung dịch chống rỉ (WD-40/RP7), bọt nở PU Apollo, chất tẩy khuôn & chổi sơn'
          ],
          zh: [
            '手动与电动工具组 (套筒扳手、手电钻、角磨机、电烙铁、吹气枪)',
            '精密测量与检测仪器 (数显游标卡尺、带光源放大镜台灯、温湿度计)',
            'SKF精密工业轴承及紧固件 (不锈钢内六角螺栓、螺母、强力磁铁)',
            '气动快插接头与快速接头 (一键式气管接头、气嘴、接头总成)',
            '工业同步齿形带、三角传动皮带及高速角磨机切割片/研磨砂轮',
            '防锈润滑剂(WD-40/RP7)、聚氨酯发泡胶、模具清洗剂及工业排刷'
          ]
        }
      },
      {
        id: 'safety',
        icon: 'shield-alert',
        image: SAFETY_SUPPLIES_IMAGE,
        badge: { ko: '카테고리 04', en: 'Category 04', vi: 'Danh mục 04', zh: '类别 04' },
        title: { ko: '안전용품', en: 'Safety & PPE', vi: 'Bảo Hộ Lao Động & An Toàn', zh: '安全防护与劳保用品' },
        desc: {
          ko: '내화학 니트릴 장갑, 면장갑, PU 코팅 장갑, 제전 줄장갑, 산업용 안전모, 용접 차광면, 보안경, 소음방지 귀마개, 방진 마스크 및 강철 안전화 등 현장 PPE 필수 보호구',
          en: 'Comprehensive industrial PPE: chemical nitrile gloves, cotton & PU gloves, ESD gloves, safety hard hats, welding shields, safety glasses, corded earplugs, dust respirators, and steel-toe shoes.',
          vi: 'Trang thiết bị bảo hộ lao động PPE: găng tay nitrile chống hóa chất, găng sợi, găng PU, găng ESD, mũ bảo hộ, mặt nạ hàn, kính bảo hộ, nút tai chống ồn, khẩu trang than hoạt tính và giày bảo hộ mũi thép.',
          zh: '全方位劳保安全防护装备(PPE)：防化丁腈手套、白棉手套、PU涂层手套、防静电条纹手套、工业安全帽、焊接面罩、防护眼镜、隔音耳塞、杯状防尘口罩及钢头劳保安全鞋。'
        },
        items: {
          ko: [
            '내화학 니트릴 고무장갑 & 정밀 검수용 백색 면장갑',
            'PU 손바닥 코팅 장갑 & 정전기 방지(ESD) 카본 줄장갑',
            '산업용 충격방지 안전모(턱끈 일체형) & 아크 용접 차광면',
            '폴리카보네이트 방진 보안경 & 스트링 소음 차단 귀마개',
            '컵형 방진 분진 마스크 (N95/KF94 규격 호흡보호구)',
            '강철 토캡 내유·미끄럼방지 천연가죽 안전화 (Safety Shoes)'
          ],
          en: [
            'Chemical Nitrile Gauntlet Gloves & White Cotton Inspection Gloves',
            'PU Palm-Coated Nylon Gloves & Anti-Static ESD Striped Gloves',
            'Industrial Safety Helmets with Chin Straps & Welding Shields',
            'Polycarbonate Safety Glasses & Corded Sound-Reducing Earplugs',
            'Cup-Shaped Particulate Dust Respirator Masks (N95/KF94 Spec)',
            'Steel-Toe Oil & Slip-Resistant Leather Safety Work Shoes'
          ],
          vi: [
            'Găng tay cao su nitrile chống hóa chất & găng tay sợi trắng',
            'Găng tay phủ PU lòng bàn tay & găng tay sọc chống tĩnh điện ESD',
            'Mũ bảo hộ lao động có quai cằm & mặt nạ hàn hồ quang',
            'Kính bảo hộ chống bụi, văng bắn & nút tai chống ồn có dây',
            'Khẩu trang lọc bụi hình cốc định hình (Tiêu chuẩn N95/KF94)',
            'Giày bảo hộ lao động da thật mũi thép chống đinh, chống trượt'
          ],
          zh: [
            '耐酸碱防化丁腈长手套及白棉精密检品手套',
            'PU掌浸胶尼龙手套及防静电导电碳纤维条纹手套',
            '工业级防砸抗冲击安全帽(带下颏带)及翻盖式电焊防护面罩',
            '防刮擦抗冲击聚碳酸酯护目镜及带绳慢回弹隔音耳塞',
            '杯状防颗粒物粉尘防毒口罩 (符合N95/KF94标准)',
            '钢包头防砸防刺穿耐油防滑真皮系带工业安全鞋'
          ]
        }
      },
      {
        id: 'cleanroom',
        icon: 'sparkles',
        image: CLEANROOM_SUPPLIES_IMAGE,
        badge: { ko: '카테고리 05', en: 'Category 05', vi: 'Danh mục 05', zh: '类别 05' },
        title: { ko: '클린룸 용품', en: 'Cleanroom Supplies', vi: 'Vật Tư Phòng Sạch & Chống Tĩnh Điện', zh: '无尘室与防静电用品' },
        desc: {
          ko: '방진복, 제전모, 무진 와이퍼, 스티키 매트/롤러, 라텍스 골무, 제전화 및 ESD 매트 등 반도체·전자 크린룸 필수 소모품 종합 공급',
          en: 'Comprehensive cleanroom supplies: ESD garments, cleanroom caps, wipers, sticky mats & rollers, latex finger cots, ESD shoes, and antistatic mats.',
          vi: 'Cung cấp trọn gói vật tư phòng sạch: quần áo chống tĩnh điện, mũ phòng sạch, khăn lau không bụi, thảm dính bụi, bao ngón tay và thảm ESD.',
          zh: '全方位无尘室与防静电用品：防静电洁净服、洁净帽、无尘擦拭布、粘尘地垫/滚轮、防静电指套、防静电鞋及ESD台垫。'
        },
        items: {
          ko: [
            '방진복(상하의/일체형), 방진가운 및 제전모/헤어넷',
            '점착식 스티키 매트(다층), DCR 패드 & 점착 롤러',
            '클린룸 무진 와이퍼(Class 100) 및 일회용 마스크',
            'ISO-5 무정전 라텍스/니트릴 골무 (Finger Cots)',
            '클린룸 제전화(슬립온/메쉬) 및 일회용 덧신 커버',
            'ESD 정전기 방지 2중 고무 매트 롤 (테이블/바닥용)'
          ],
          en: [
            'Cleanroom Suits (2-Piece/Coverall), Lab Coats & ESD Caps',
            'Peel-Off Sticky Entrance Mats, DCR Pads & Sticky Rollers',
            'Class 100 Lint-Free Cleanroom Wipers & 3-Ply Face Masks',
            'ISO-5 Class 100 Antistatic Latex/Nitrile Finger Cots',
            'ESD Cleanroom Safety Shoes & Disposable Shoe Covers',
            '2-Layer ESD Anti-Static Rubber Matting Rolls'
          ],
          vi: [
            'Quần áo phòng sạch (rời/liền thân), áo choàng & mũ trùm đầu',
            'Thảm dính bụi phòng sạch nhiều lớp, tấm DCR & con lăn dính bụi',
            'Khăn lau phòng sạch không bụi Class 100 & khẩu trang y tế',
            'Bao ngón tay cao su / nitrile chống tĩnh điện ISO-5',
            'Giày chống tĩnh điện ESD & bọc giày dùng một lần',
            'Cuộn thảm cao su chống tĩnh điện ESD 2 lớp'
          ],
          zh: [
            '防静电分体/连体洁净服、洁净大褂及防静电工帽/发网',
            '多层粘尘地垫、DCR除尘清洁垫及可撕式粘尘滚轮',
            'Class 100级超细纤维无尘擦拭布及三层一次性口罩',
            'ISO-5 (Class 100) 防静电乳胶/丁腈指套',
            '防静电无尘鞋(网孔/透气)及一次性无纺布鞋套',
            '双层复合防静电橡胶台垫/地垫卷材'
          ]
        }
      },
      {
        id: 'office',
        icon: 'printer',
        image: OFFICE_SUPPLIES_IMAGE,
        badge: { ko: '카테고리 06', en: 'Category 06', vi: 'Danh mục 06', zh: '类别 06' },
        title: { ko: '사무용품', en: 'Office Supplies', vi: 'Văn Phòng Phẩm & Thiết Bị', zh: '办公用品与设备' },
        desc: {
          ko: '더블A 복사용지(A4/A3), 바인더, 서류정리함, 보드마카, 네임펜, 커터칼, A4 카드케이스, 에너자이저 건전지, 펀치, 스테이플러 및 테이프 디스펜서',
          en: 'Complete office supplies: Double A A4/A3 paper, binders, desk document trays, whiteboard markers, fine permanent pens, card cases, Energizer batteries, staplers, and tape dispensers.',
          vi: 'Văn phòng phẩm tổng hợp: Giấy Double A A4/A3, bìa còng, khay tài liệu, bút dạ bảng, bút lông dầu, dao rọc giấy, pin Energizer, dập ghim và bàn cắt băng dính.',
          zh: '企业办公综合耗材：Double A A4/A3复印纸、文件夹、桌面文件架、白板笔、记号笔、美工刀、A4硬卡套、劲量电池、打孔机、订书机及胶带座。'
        },
        items: {
          ko: [
            'Double A 프리미엄 A4/A3 복사용지, 색상지 & 커팅매트',
            '레버 아치 바인더, 클리어화일 & 인덱스 간지 세트',
            '가죽 다이어리 바인더, 결재 클립보드 & 3단 서류 트레이',
            '보드마카(흑/적/청), 젤 롤러펜, 모나미 네임펜 & 대형 커터칼',
            'A4 투명 하드/소프트 카드케이스 & 에너자이저 AAA 건전지',
            '2공 펀치, 더블클립, 딱풀, 가위, 대형 스테이플러 & 테이프 디스펜서'
          ],
          en: [
            'Double A Premium A4/A3 Copy Paper, Color Paper & Cutting Mats',
            'Lever Arch File Binders, Presentation Clear Books & Index Dividers',
            'Leather Organizer Planners, Document Clipboards & 3-Tier Desk Trays',
            'Whiteboard Markers, Gel Pens, Fine Permanent Pens & Box Cutters',
            'Clear A4 Hard/Soft Card Cases & Energizer AAA Batteries',
            '2-Hole Punchers, Binder Clips, Glue, Scissors, Staplers & Tape Cutters'
          ],
          vi: [
            'Giấy in Double A cao cấp A4/A3, giấy màu & thớt cắt cao su',
            'Bìa còng bật lưu trữ, bìa lá nhiều ngăn & tập giấy phân trang',
            'Sổ còng da cao cấp, bìa kẹp trình ký có nắp & khay tài liệu 3 tầng',
            'Bút lông bảng WB-03, bút bi nước, bút dạ kính dầu & dao rọc giấy',
            'Bìa cứng/dẻo A4 trong suốt & vỉ pin tiểu Energizer AAA',
            'Dụng cụ đục lỗ giấy, kẹp bướm, keo dán, kéo, dập ghim & bàn cắt băng dính'
          ],
          zh: [
            'Double A高白度A4/A3复印纸、彩色复印纸及自愈合切割垫板',
            '强力双环拱形文件夹、高透资料册及彩色分类索引隔页纸',
            '商务皮革活页万用手册、带盖板夹及三层桌面立式塑料文件架',
            '白板笔(黑红蓝)、中性滚珠笔、细头油性记号笔及大号重型美工刀',
            'A4加厚透明硬质/软胶卡套及劲量Energizer AAA碱性干电池',
            '双孔省力打孔机、长尾夹、固体胶棒、剪刀、台式订书机及胶带切割器'
          ]
        }
      },
      {
        id: 'general',
        icon: 'boxes',
        image: GENERAL_SUPPLIES_IMAGE,
        badge: { ko: '카테고리 07', en: 'Category 07', vi: 'Danh mục 07', zh: '类别 07' },
        title: { ko: '일반용품', en: 'General Maintenance', vi: 'Vật Tư Tiêu Hao & Vệ Sinh', zh: '通用消耗品与厂务用品' },
        desc: {
          ko: 'G7 인스턴트 커피, 레드불, 라비에 생수, 종이컵 디스펜서, 핸드타올, 점보롤 화장지, 대걸레/빗자루 세트, 페달 휴지통, 박스테이프, 안전 구획 테이프 및 베트남 통신사 선불 충전카드',
          en: 'Factory pantry & facility consumables: G7 coffee, Red Bull, LaVie water, paper cups & dispensers, hand towels, jumbo toilet rolls, floor mops, trash cans, packing tape, floor hazard marking tape, and telecom top-up cards.',
          vi: 'Vật tư tiêu hao nhà ăn & vệ sinh nhà xưởng: Cà phê G7, nước tăng lực Red Bull, nước khoáng LaVie, cốc giấy, khăn giấy lau tay, giấy vệ sinh cuộn lớn, cây lau sàn, thùng rác đạp chân, băng dính dán thùng, băng keo cảnh báo sàn và thẻ cào điện thoại.',
          zh: '厂区茶水间与环境卫生物料：G7速溶咖啡、红牛饮料、LaVie天然矿泉水、纸杯分杯器、折叠擦手纸、大卷卫生纸、平拖把/扫把簸箕组、踏板垃圾桶、封箱胶带、车间警示地胶带及越南各大通信充值卡。'
        },
        items: {
          ko: [
            'G7 3in1 커피, 레드불 에너지 음료 & 라비에(LaVie) 천연 미네랄 생수',
            '친환경 종이컵 & 벽걸이형 원터치 자동 종이컵 디스펜서',
            'APC 접이식 핸드타올, 대형 점보롤 화장지(JRT) & 전용 투명 디스펜서',
            '극세사 광폭 평걸레 세트, 로비 빗자루·쓰레받기 & 페달형 밀폐 휴지통',
            '고점착 갈색 OPP 박스 테이프 (대용량 롤 포장용 점착 테이프)',
            '공장 바닥 안전 구획 테이프 (사선/단색 PVC 라인 테이프) & 통신사 선불카드'
          ],
          en: [
            'G7 3-in-1 Instant Coffee, Red Bull Energy Drink & LaVie Mineral Water',
            'Eco Paper Cups & Wall-Mounted Automatic Cup Dispensers',
            'Folded Paper Hand Towels, Jumbo Toilet Rolls & Wall Dispensers',
            'Microfiber Flat Floor Mop Sets, Long-Handle Brooms & Pedal Trash Cans',
            'Heavy-Duty Brown OPP Packaging Box Sealing Tapes',
            'Vinyl Hazard Warning Floor Tapes & Vietnam Telecom Top-Up Cards'
          ],
          vi: [
            'Cà phê G7 3in1 Trung Nguyên, nước tăng lực Red Bull & nước khoáng LaVie',
            'Cốc giấy dùng một lần & ống đựng cốc giấy gắn tường tự động',
            'Khăn giấy lau tay gấp nhiều lớp APC, giấy vệ sinh cuộn lớn & hộp đựng',
            'Bộ cây lau nhà bản rộng sợi microfiber, chổi hót rác cán dài & thùng rác đạp',
            'Băng dính dán thùng màu nâu OPP độ dính cao đóng gói hàng hóa',
            'Băng keo dán sàn cảnh báo phân luồng nhà xưởng & Thẻ cào Viettel, Vina, Mobi'
          ],
          zh: [
            '越南G7三合一速溶咖啡、红牛维生素饮料及LaVie瓶装/箱装天然矿泉水',
            '环保加厚一次性纸杯及壁挂式一键按压自动下杯器',
            'APC折叠式多层吸水擦手纸、大盘卷筒卫生纸及防尘防潮壁挂分配器',
            '超细纤维工业大平拖把、大堂长柄扫把簸箕组合及脚踏式防异味垃圾桶',
            '加厚高粘米黄/棕色OPP封箱胶带 (工业产线大卷装打包胶带)',
            '车间通道警示地胶带(黑黄/红白/绿/红斑马线)及越南电信话费充值卡'
          ]
        }
      }
    ];

    let currentLang = 'ko';

    const STORAGE_KEY = 'pms_vina_qa_items_v2';
    const LEGACY_MOCK_IDS = ['QA-2026-089', 'QA-2026-088', 'QA-2026-087', 'QA-2026-086', 'QA-2026-085'];

    let qaList = [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          qaList = parsed.filter(item => !LEGACY_MOCK_IDS.includes(item.id));
        }
      }
    } catch (e) {
      console.error('Failed to load QA items from localStorage', e);
      qaList = [];
    }

    function saveQaToStorage() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(qaList));
      } catch (e) {
        console.error('Failed to save QA items to localStorage', e);
      }
    }

    function setLanguage(lang) {
      currentLang = lang;
      
      // Update Button active classes
      document.querySelectorAll('#lang-btn-group .lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('lang-active');
        } else {
          btn.classList.remove('lang-active');
        }
      });

      // Update text nodes
      const dict = I18N[lang] || I18N['ko'];
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      renderCategories();
      renderQaTable();
      lucide.createIcons();
    }

    function renderCategories() {
      const container = document.getElementById('products-grid');
      if (!container) return;

      container.innerHTML = CATEGORIES.map((cat, idx) => {
        const badge = cat.badge[currentLang] || cat.badge.ko;
        const title = cat.title[currentLang] || cat.title.ko;
        const desc = cat.desc[currentLang] || cat.desc.ko;
        const items = cat.items[currentLang] || cat.items.ko;

        return \`
          <div class="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">\${badge}</span>
                <div class="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
                  <i data-lucide="\${cat.icon}" class="w-5 h-5"></i>
                </div>
              </div>
              <h3 class="text-xl font-black text-slate-900 mb-2.5 group-hover:text-blue-700 transition-colors">\${title}</h3>
              <p class="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">\${desc}</p>
              
              \${cat.image ? \`
                <div class="mb-4 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 relative">
                  <img src="\${cat.image}" alt="\${title}" class="w-full h-44 object-cover object-center" />
                  <div class="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                    <span class="text-[10px] font-bold text-white bg-blue-600/90 px-2 py-0.5 rounded shadow-xs">
                      \${currentLang === 'en' ? 'Actual Supply Photos (6 Items)' : currentLang === 'vi' ? 'Ảnh thực tế 6 nhóm vật tư' : currentLang === 'zh' ? '实物物料照片 (6大品类)' : '주요 포장자재 실제 사진 (6종)'}
                    </span>
                  </div>
                </div>
              \` : ''}

              <div class="pt-4 border-t border-slate-100">
                <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  \${currentLang === 'en' ? 'Key Items' : currentLang === 'vi' ? 'Mặt hàng tiêu biểu' : currentLang === 'zh' ? '代表物料' : '주요 대표 품목'}
                </div>
                <ul class="space-y-1.5">
                  \${items.map(item => \`
                    <li class="flex items-center text-xs sm:text-sm text-slate-700">
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0"></span>
                      \${item}
                    </li>
                  \`).join('')}
                </ul>
              </div>
            </div>

            <div class="pt-6 mt-4">
              <a href="#rfq" onclick="selectRfqCategory('\${cat.id}')" class="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 text-blue-700 font-bold text-xs border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-center gap-1.5">
                <span>\${currentLang === 'en' ? 'Request RFQ' : currentLang === 'vi' ? 'Báo giá nhóm này' : currentLang === 'zh' ? '对此品类询价' : '이 카테고리 견적 문의'}</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>
        \`;
      }).join('');
    }

    function selectRfqCategory(catId) {
      const select = document.getElementById('rfq-category');
      if (select) {
        select.value = catId;
      }
    }

    let currentDetailId = null;

    function renderQaTable() {
      const tbody = document.getElementById('qa-table-body');
      if (!tbody) return;

      if (qaList.length === 0) {
        const emptyMsg = currentLang === 'en' 
          ? 'No customer inquiries yet. Click [Post New Inquiry] above to submit the first question.'
          : currentLang === 'vi'
          ? 'Chưa có câu hỏi nào. Nhấn nút [Đăng câu hỏi mới] ở trên để gửi câu hỏi đầu tiên.'
          : currentLang === 'zh'
          ? '暂无咨询记录。点击上方 [发布新咨询] 按钮留下您的首条疑问。'
          : '등록된 고객 문의가 없습니다. 상단의 [새 문의 등록하기] 버튼을 눌러 첫 번째 질문을 남겨보세요.';

        tbody.innerHTML = \`
          <tr>
            <td colspan="6" class="py-16 text-center text-slate-400">
              <i data-lucide="message-square" class="w-8 h-8 mx-auto mb-2 opacity-40"></i>
              <p class="text-sm font-medium text-slate-500">\${emptyMsg}</p>
            </td>
          </tr>
        \`;
        return;
      }

      tbody.innerHTML = qaList.map((item, idx) => {
        const isAnswered = item.status === 'answered' && Boolean(item.answer);
        const statusText = isAnswered 
          ? (currentLang === 'en' ? 'Answered' : currentLang === 'vi' ? 'Đã trả lời' : currentLang === 'zh' ? '已答复' : '답변완료')
          : (currentLang === 'en' ? 'Pending' : currentLang === 'vi' ? 'Chờ phản hồi' : currentLang === 'zh' ? '待答复' : '답변대기');

        const statusClass = isAnswered
          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
          : 'bg-amber-50 text-amber-700 border-amber-200';

        return \`
          <tr class="hover:bg-slate-50/90 transition-colors cursor-pointer" onclick="openQaDetail('\${item.id}')">
            <td class="py-4 px-6 text-center text-xs font-mono text-slate-400">\${qaList.length - idx}</td>
            <td class="py-4 px-4">
              <span class="px-2 py-0.5 text-[11px] font-semibold rounded bg-slate-100 text-slate-700 border border-slate-200">\${item.category}</span>
            </td>
            <td class="py-4 px-6 font-semibold text-slate-900 flex items-center gap-2">
              \${item.isPrivate ? '<i data-lucide="lock" class="w-3.5 h-3.5 text-amber-500 shrink-0"></i>' : ''}
              <span>\${item.title}</span>
            </td>
            <td class="py-4 px-6 text-xs text-slate-600">\${item.author}</td>
            <td class="py-4 px-6 text-center text-xs font-mono text-slate-400">\${item.date}</td>
            <td class="py-4 px-6 text-center">
              <span class="px-2.5 py-1 text-xs font-bold rounded-full border \${statusClass}">\${statusText}</span>
            </td>
          </tr>
        \`;
      }).join('');
    }

    function handleRfqSubmit(e) {
      e.preventDefault();
      const rfqNumber = 'RFQ-' + new Date().getFullYear() + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + Math.floor(1000 + Math.random() * 9000);
      document.getElementById('modal-rfq-no').textContent = rfqNumber;

      const company = document.getElementById('rfq-company') ? document.getElementById('rfq-company').value : '';
      const name = document.getElementById('rfq-name') ? document.getElementById('rfq-name').value : '';
      const email = document.getElementById('rfq-email') ? document.getElementById('rfq-email').value : '';
      const phone = document.getElementById('rfq-phone') ? document.getElementById('rfq-phone').value : '';
      const category = document.getElementById('rfq-category') ? document.getElementById('rfq-category').value : '';
      const itemSpec = document.getElementById('rfq-item') ? document.getElementById('rfq-item').value : '';
      const quantity = document.getElementById('rfq-quantity') ? document.getElementById('rfq-quantity').value : '';
      const date = document.getElementById('rfq-date') ? document.getElementById('rfq-date').value : '';
      const notes = document.getElementById('rfq-notes') ? document.getElementById('rfq-notes').value : '';

      const subject = encodeURIComponent('[PMS VINA 견적요청서 접수] ' + (company || '고객') + ' - ' + rfqNumber);
      const body = encodeURIComponent('[PMS VINA 견적 요청서 접수 알림]\n\n■ 접수번호: ' + rfqNumber + '\n■ 회사명: ' + company + '\n■ 담당자: ' + name + '\n■ 이메일: ' + email + '\n■ 연락처: ' + phone + '\n■ 품목 카테고리: ' + category + '\n■ 규격/사양: ' + itemSpec + '\n■ 요청 수량: ' + quantity + '\n■ 희망 납기: ' + date + '\n■ 세부 메모: ' + notes + '\n\n* 담당자 수신처: kklee@pmsvina.com');
      const mailtoBtn = document.getElementById('modal-rfq-mailto');
      if (mailtoBtn) {
        mailtoBtn.href = 'mailto:kklee@pmsvina.com?subject=' + subject + '&body=' + body;
      }

      // Submit to Formspree endpoint (https://formspree.io/f/mgavrlvy)
      try {
        fetch('https://formspree.io/f/mgavrlvy', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            _subject: '[PMS VINA 견적요청서] ' + (company || '고객') + ' (' + name + ') - ' + rfqNumber,
            formType: '견적 요청서 (RFQ)',
            rfqNumber: rfqNumber,
            companyName: company,
            contactName: name,
            email: email,
            phone: phone,
            category: category,
            itemSpec: itemSpec,
            quantity: quantity,
            targetDate: date || '미정/협의',
            notes: notes || '없음',
            submittedAt: new Date().toISOString(),
            recipient: 'kklee@pmsvina.com'
          })
        }).catch(function(err) { console.warn('Formspree RFQ submit warning', err); });
      } catch (err) {}

      // Try server notification
      try {
        fetch('/api/notify-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'rfq',
            recipient: 'kklee@pmsvina.com',
            rfqData: {
              id: rfqNumber,
              companyName: company,
              contactName: name,
              email: email,
              phone: phone,
              category: category,
              itemSpec: itemSpec,
              quantity: quantity,
              targetDate: date,
              notes: notes,
              createdAt: new Date().toISOString()
            }
          })
        }).catch(function(err) { console.warn('RFQ notify fetch fallback', err); });
      } catch (err) {}

      document.getElementById('rfq-modal').classList.remove('hidden');
      document.getElementById('rfq-form').reset();
      lucide.createIcons();
    }

    function closeRfqModal() {
      document.getElementById('rfq-modal').classList.add('hidden');
    }

    function openRfqFaqModal() {
      document.getElementById('rfq-faq-modal').classList.remove('hidden');
      lucide.createIcons();
    }

    function closeRfqFaqModal() {
      document.getElementById('rfq-faq-modal').classList.add('hidden');
    }

    function openQaDetail(id) {
      const item = qaList.find(q => q.id === id);
      if (!item) return;

      currentDetailId = id;

      document.getElementById('qa-detail-id').textContent = item.id;
      document.getElementById('qa-detail-category').textContent = item.category;
      document.getElementById('qa-detail-title').textContent = item.title;
      document.getElementById('qa-detail-author').textContent = item.author;
      document.getElementById('qa-detail-date').textContent = item.date;
      document.getElementById('qa-detail-content').textContent = item.content;

      // Reset admin form
      hideAdminReplyForm();

      const answerBox = document.getElementById('qa-detail-answer-box');
      const pendingBox = document.getElementById('qa-detail-pending-box');
      const statusBadge = document.getElementById('qa-detail-status');

      const isAnswered = item.status === 'answered' && Boolean(item.answer);

      if (isAnswered) {
        answerBox.classList.remove('hidden');
        if (pendingBox) pendingBox.classList.add('hidden');
        document.getElementById('qa-detail-answer').textContent = item.answer;
        document.getElementById('qa-detail-answer-date').textContent = item.answerDate || '';
        statusBadge.textContent = currentLang === 'en' ? 'Answered' : currentLang === 'vi' ? 'Đã trả lời' : currentLang === 'zh' ? '已答复' : '답변완료';
        statusBadge.className = 'px-2.5 py-0.5 text-xs font-bold rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200';
      } else {
        answerBox.classList.add('hidden');
        if (pendingBox) pendingBox.classList.remove('hidden');
        statusBadge.textContent = currentLang === 'en' ? 'Pending' : currentLang === 'vi' ? 'Chờ phản hồi' : currentLang === 'zh' ? '待答复' : '답변대기';
        statusBadge.className = 'px-2.5 py-0.5 text-xs font-bold rounded-full border bg-amber-50 text-amber-700 border-amber-200';
      }

      document.getElementById('qa-detail-modal').classList.remove('hidden');
      lucide.createIcons();
    }

    function closeQaDetailModal() {
      document.getElementById('qa-detail-modal').classList.add('hidden');
      currentDetailId = null;
    }

    function showAdminReplyForm() {
      const item = qaList.find(q => q.id === currentDetailId);
      const form = document.getElementById('qa-admin-form-container');
      const answerBox = document.getElementById('qa-detail-answer-box');
      const pendingBox = document.getElementById('qa-detail-pending-box');

      if (form) form.classList.remove('hidden');
      if (answerBox) answerBox.classList.add('hidden');
      if (pendingBox) pendingBox.classList.add('hidden');

      const input = document.getElementById('qa-admin-reply-text');
      if (input && item) {
        input.value = item.answer || '';
        input.focus();
      }
      lucide.createIcons();
    }

    function hideAdminReplyForm() {
      const form = document.getElementById('qa-admin-form-container');
      if (form) form.classList.add('hidden');

      if (currentDetailId) {
        const item = qaList.find(q => q.id === currentDetailId);
        const answerBox = document.getElementById('qa-detail-answer-box');
        const pendingBox = document.getElementById('qa-detail-pending-box');
        if (item && item.answer) {
          if (answerBox) answerBox.classList.remove('hidden');
        } else {
          if (pendingBox) pendingBox.classList.remove('hidden');
        }
      }
    }

    function saveAdminReply() {
      if (!currentDetailId) return;
      const text = document.getElementById('qa-admin-reply-text').value.trim();
      if (!text) {
        alert(currentLang === 'en' ? 'Please enter the answer content.' : '답변 내용을 입력해 주세요.');
        return;
      }

      const item = qaList.find(q => q.id === currentDetailId);
      if (!item) return;

      const today = new Date().toISOString().split('T')[0];
      item.answer = text;
      item.answerDate = today;
      item.status = 'answered';

      saveQaToStorage();
      renderQaTable();
      openQaDetail(currentDetailId);

      alert(currentLang === 'en' ? 'Official response saved successfully!' : currentLang === 'vi' ? 'Đã lưu phản hồi thành công!' : currentLang === 'zh' ? '官方答复已成功保存！' : '관리자 공식 답변이 성공적으로 등록되었습니다.');
    }

    function deleteCurrentQaItem() {
      if (!currentDetailId) return;
      const confirmMsg = currentLang === 'en' ? 'Are you sure you want to delete this inquiry?' : '정말로 이 문의글을 삭제하시겠습니까?';
      if (!confirm(confirmMsg)) return;

      qaList = qaList.filter(q => q.id !== currentDetailId);
      saveQaToStorage();
      closeQaDetailModal();
      renderQaTable();
      lucide.createIcons();
    }

    function openNewQaModal() {
      document.getElementById('qa-write-modal').classList.remove('hidden');
    }

    function closeNewQaModal() {
      document.getElementById('qa-write-modal').classList.add('hidden');
    }

    function handleNewQaSubmit(e) {
      e.preventDefault();
      const title = document.getElementById('new-qa-title').value;
      const author = document.getElementById('new-qa-author').value;
      const company = document.getElementById('new-qa-company').value;
      const category = document.getElementById('new-qa-category').value;
      const content = document.getElementById('new-qa-content').value;
      const isPrivate = document.getElementById('new-qa-private').checked;

      const newId = 'QA-' + new Date().getFullYear() + '-' + String(qaList.length + 1).padStart(3, '0');
      const today = new Date().toISOString().split('T')[0];

      const newQa = {
        id: newId,
        category: category,
        title: (isPrivate ? '[비밀글] ' : '') + title,
        author: author + (company ? ' / ' + company : ''),
        date: today,
        status: 'pending',
        isPrivate: isPrivate,
        content: content,
        answer: null
      };

      qaList.unshift(newQa);

      // Submit to Formspree endpoint (https://formspree.io/f/mgavrlvy)
      try {
        fetch('https://formspree.io/f/mgavrlvy', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            _subject: '[PMS VINA 고객문의 등록] ' + newQa.title + ' - ' + (company || '미기재') + ' (' + author + ')',
            formType: '고객 문의게시판 (Q&A)',
            inquiryNumber: newId,
            title: newQa.title,
            author: author,
            companyName: company || '미기재',
            category: category,
            content: content,
            isPrivate: isPrivate ? '비밀글' : '공개글',
            date: today,
            recipient: 'kklee@pmsvina.com'
          })
        }).catch(function(err) { console.warn('Formspree QA submit warning', err); });
      } catch (err) {}

      // Try server notification to kklee@pmsvina.com
      try {
        fetch('/api/notify-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'qa',
            recipient: 'kklee@pmsvina.com',
            qaData: {
              id: newId,
              title: newQa.title,
              author: author,
              company: company,
              category: category,
              content: content,
              isPrivate: isPrivate,
              date: today
            }
          })
        }).catch(function(err) { console.warn('QA notify fetch fallback', err); });
      } catch (err) {}

      saveQaToStorage();
      closeNewQaModal();
      renderQaTable();
      lucide.createIcons();
      alert(currentLang === 'en' ? 'Your inquiry has been submitted to Formspree and kklee@pmsvina.com!' : currentLang === 'vi' ? 'Đã gửi câu hỏi lên Formspree và tới kklee@pmsvina.com thành công!' : currentLang === 'zh' ? '咨询已成功提交至 Formspree 并通知 kklee@pmsvina.com！' : '문의글이 성공적으로 등록되었습니다!\nFormspree 데이터 수집 및 담당자(kklee@pmsvina.com) 알림 전달이 완료되었습니다.');
    }

    function applyFacilityPhotoOverrides() {
      try {
        const overrides = JSON.parse(localStorage.getItem('pms_facility_photos_override') || '{}');
        document.querySelectorAll('img').forEach(img => {
          if (img.src.includes('pms_entrance.jpg') && overrides.entrance) img.src = overrides.entrance;
          if (img.src.includes('pms_center.jpg') && overrides.center) img.src = overrides.center;
          if (img.src.includes('pms_warehouse_racks.jpg') && overrides.racks) img.src = overrides.racks;
          if (img.src.includes('pms_inventory.jpg') && overrides.inventory) img.src = overrides.inventory;
          if (img.src.includes('pms_inspection.jpg') && overrides.inspection) img.src = overrides.inspection;
          if (img.src.includes('pms_delivery_truck.jpg') && overrides.delivery) img.src = overrides.delivery;
        });
      } catch (e) {}
    }

    // Init on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      applyFacilityPhotoOverrides();
      renderCategories();
      renderQaTable();
      lucide.createIcons();
    });
  </script>
</body>
</html>`;
}
