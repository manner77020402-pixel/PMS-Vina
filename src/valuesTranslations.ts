import { Language } from './types';

export interface ValuesPillarPrice {
  id: string;
  letter: string;
  num: string;
  title: string;
  subtitle: string;
  badge: string;
  problemBoxTitle: string;
  problemItems: string[];
  problemResult: string[];
  solutionBoxTitle: string;
  promises: {
    highlight: string;
    desc: string;
    sub?: string;
  }[];
  stats: {
    val: string;
    label: string;
    detail: string;
  }[];
}

export interface ValuesPillarMoral {
  id: string;
  letter: string;
  num: string;
  title: string;
  subtitle: string;
  badge: string;
  problemBoxTitle: string;
  problemItems: string[];
  problemResult: string[];
  solutionBoxTitle: string;
  promises: {
    highlight: string;
    desc: string;
  }[];
  reportTitle: string;
  reportSubtitle: string;
  reportNote: string;
  currencyUnit: string;
  quarterTotal: string;
  tableHeaders: {
    category: string;
    m1: string;
    m2: string;
    m3: string;
    total: string;
    share: string;
  };
  monthlyRows: {
    category: string;
    m1: string;
    m2: string;
    m3: string;
    total: string;
    percent: number;
    color: string;
  }[];
  monthlyTotals: {
    category: string;
    m1: string;
    m2: string;
    m3: string;
    total: string;
  };
  top10Title: string;
  top10Subtitle: string;
  top10Headers: {
    rank: string;
    name: string;
    code: string;
    qty: string;
    amount: string;
    remark: string;
  };
  top10Items: {
    rank: number;
    name: string;
    code: string;
    qty: string;
    amount: string;
    remark: string;
  }[];
}

export interface ValuesPillarService {
  id: string;
  letter: string;
  num: string;
  title: string;
  subtitle: string;
  badge: string;
  problemBoxTitle: string;
  problemItems: string[];
  problemResult: string[];
  solutionBoxTitle: string;
  diagramTitle: string;
  beforeTitle: string;
  beforeDesc: string;
  afterTitle: string;
  afterDesc: string;
  promises: {
    highlight: string;
    desc: string;
    detail: string;
  }[];
  features: {
    title: string;
    desc: string;
    tag: string;
  }[];
}

export interface ValuesSectionText {
  sitemapBadge: string;
  heading: string;
  headingHighlight: string;
  lead: string;
  tabs: {
    all: string;
    price: string;
    moral: string;
    service: string;
  };
  summaryCardTitle: string;
  summaryCardDesc: string;
  viewAllToggle: string;
  viewDetailsBtn: string;
  price: ValuesPillarPrice;
  moral: ValuesPillarMoral;
  service: ValuesPillarService;
}

export const VALUES_TEXT: Record<Language, ValuesSectionText> = {
  ko: {
    sitemapBadge: '사이트맵 – 가치와 약속',
    heading: 'PMS의 핵심 가치와 고객을 향한 약속',
    headingHighlight: 'Price · Moral · Service',
    lead: '베트남 진출 제조 기업이 겪는 MRO 구매의 구조적 비효율을 해소하고, 구매 원가 절감(Price), 도덕적 투명 경영(Moral), 보이지 않는 비용과 시간 절감(Service)을 실현합니다.',
    tabs: {
      all: '전체 가치 체계',
      price: '① Price (구매 원가 절감)',
      moral: '② Moral (도덕적 회사 운영)',
      service: '③ Service (비용·시간 절감)',
    },
    summaryCardTitle: 'PMS가 약속하는 3대 기업 가치',
    summaryCardDesc: 'PMS는 단순 유통을 넘어 구매선 단일화와 100% 합법 영수증, 직영 순회 배송으로 기업의 보이지 않는 손실을 원천 차단합니다.',
    viewAllToggle: '3대 영역 한눈에 보기',
    viewDetailsBtn: '세부 분석 및 약속 보기',
    price: {
      id: 'price',
      letter: 'P',
      num: '①',
      title: 'Price _ 구매 원가 절감',
      subtitle: '대량 공동 구매 효과와 베트남·중국 직거래 소싱으로 최적 단가 실현',
      badge: '원가 경쟁력 혁신',
      problemBoxTitle: '현지 MRO 구매 현실',
      problemItems: ['다품종', '소량'],
      problemResult: ['경쟁력있는 업체 확보 어려움', '단가 조정 어려움'],
      solutionBoxTitle: 'PMS의 솔루션 & 약속',
      promises: [
        {
          highlight: '대량 구매로 단가 경쟁력 확보',
          desc: '→ 공동 구매 효과 (Scale Merit)',
          sub: '100여 개 고객사의 공통 소모성 자재 수요를 결집해 제조사 직거래 볼륨 디스카운트를 이끌어냅니다.',
        },
        {
          highlight: '베트남 및 중국 구매 전문 기업',
          desc: '→ 현재 약 3,000여개 아이템 보유, 70여개 우수 업체 발굴',
          sub: '국경을 넘는 다각적 직소싱 네트워크를 통해 중간 유통 거품을 제거합니다.',
        },
        {
          highlight: '단일 단가 적용',
          desc: '→ 모든 고객사에 동일한 단일 단가 서비스 운영',
          sub: '기업 규모나 거래량에 따른 차별 없이, 공정하고 투명한 통일 기준 단가를 적용합니다.',
        },
        {
          highlight: '지속적인 시장 조사를 통한 가격 경쟁력 제고 추진',
          desc: '→ 원자재 및 시장 시세 변동 실시간 반영',
          sub: '베트남 현지 로컬 시장 및 중국 공장 시세를 항시 모니터링하여 최저 수준의 가격을 유지합니다.',
        },
      ],
      stats: [
        { val: '3,000+', label: '보유 아이템군', detail: '전 공정 소모품 상시 라인업' },
        { val: '70+', label: '직소싱 발굴 업체', detail: '베트남·중국 우수 제조 파트너' },
        { val: '100%', label: '단일 단가제', detail: '차별 없는 투명 단가 기준' },
        { val: '15~25%', label: '평균 원가 절감', detail: '기존 분산 구매 대비 비용 절감' },
      ],
    },
    moral: {
      id: 'moral',
      letter: 'M',
      num: '②',
      title: 'Moral _ 도덕적 회사 운영',
      subtitle: '리베이트 없는 클린 거래, 100% 합법 영수증, 맞춤형 사용량 분석 보고서',
      badge: '투명·윤리 경영',
      problemBoxTitle: '현지 구매 관행 및 회계 리스크',
      problemItems: ['구두 발주 / 선입고 / 후처리', '영세업체 회계처리 (계산서 누락)', '베트남 독특한 구매 문화'],
      problemResult: ['불투명한 구매 환경', '회계 처리 문제 (세무 리스크)', '구매 원가 상승'],
      solutionBoxTitle: 'PMS의 솔루션 & 약속',
      promises: [
        {
          highlight: '리베이트 없는 투명한 거래 약속',
          desc: '불공정 거래 및 음성적 리베이트를 원천 차단하여 기업의 본원적 구매 경쟁력을 지켜드립니다.',
        },
        {
          highlight: '적법한 계산서 100% 발행',
          desc: '→ 기존처럼 무자료 구입으로 인한 외부 계산서 구입 불필요 (100% 공식 Red Invoice 직발행)',
        },
        {
          highlight: '고객사별 ‘월간 보고서’ 제공',
          desc: '→ 사용량, 금액 분석 모니터링 보고서 (고객 요청시 제공)',
        },
      ],
      reportTitle: '고객사별 구매 분석 모니터링 보고서 (실제 샘플)',
      reportSubtitle: '품목군별 지출 현황 및 사용량 추이를 한눈에 모니터링하여 데이터 기반 예산 통제를 지원합니다.',
      reportNote: '※ 고객사 요청 시 제공되는 월간/분기별 정기 분석 리포트 실제 데이터입니다.',
      currencyUnit: '단위: VND (베트남 동)',
      quarterTotal: '923,192,450 VND',
      tableHeaders: {
        category: '구 분',
        m1: '1월',
        m2: '2월',
        m3: '3월',
        total: '합 계',
        share: '비중 (%)',
      },
      monthlyRows: [
        {
          category: '일반 용품',
          m1: '68,795,000',
          m2: '255,290,050',
          m3: '248,635,400',
          total: '572,720,450',
          percent: 62,
          color: '#2563eb',
        },
        {
          category: '노동 안전 용품',
          m1: '187,000',
          m2: '62,680,000',
          m3: '75,720,500',
          total: '138,587,500',
          percent: 15,
          color: '#f97316',
        },
        {
          category: '전기 관련 소모품',
          m1: '2,510,000',
          m2: '23,380,000',
          m3: '54,874,500',
          total: '80,764,500',
          percent: 9,
          color: '#06b6d4',
        },
        {
          category: '사무용품',
          m1: '44,269,000',
          m2: '27,983,000',
          m3: '2,510,000',
          total: '74,762,000',
          percent: 8,
          color: '#eab308',
        },
        {
          category: '일반 공구 및 부품',
          m1: '2,405,000',
          m2: '9,910,000',
          m3: '44,043,000',
          total: '56,358,000',
          percent: 6,
          color: '#8b5cf6',
        },
      ],
      monthlyTotals: {
        category: '합 계',
        m1: '118,166,000',
        m2: '379,243,050',
        m3: '425,783,400',
        total: '923,192,450',
      },
      top10Title: '상위 10대 구매 아이템 순위 (Top 10)',
      top10Subtitle: '고객사에서 가장 많이 구매된 대표 소모성 자재 품목별 코드 및 총액 통계',
      top10Headers: {
        rank: 'No',
        name: '아이템명',
        code: 'PMS Code',
        qty: '수량',
        amount: '금액 (VND)',
        remark: '품목 설명 / 비고',
      },
      top10Items: [
        { rank: 1, name: 'Mang chit', code: 'G-050101', qty: '3,990', amount: '311,220,000', remark: '공업용 포장 랩 (스트레치 필름)' },
        { rank: 2, name: 'Gang tay cao su', code: 'S-010501', qty: '2,500', amount: '70,000,000', remark: '생산 작업용 산업 고무장갑' },
        { rank: 3, name: 'Giay ve sinh', code: 'G-030101', qty: '2,400', amount: '33,600,000', remark: '공장 화장실용 점보롤 화장지' },
        { rank: 4, name: 'Gang tay trang ngon', code: 'S-010701', qty: '4,360', amount: '30,520,000', remark: 'PU 코팅 정밀 장갑' },
        { rank: 5, name: 'Giay Clever UP A4', code: 'O-021103', qty: '650', amount: '29,250,000', remark: '사무용 고백색 복사용지' },
        { rank: 6, name: 'BD trang dan thung trang', code: 'G-120101', qty: '2,750', amount: '27,500,000', remark: '투명 박스테이프 (OPP 롤)' },
        { rank: 7, name: 'Gie lau mau', code: 'G-040101', qty: '1,900', amount: '24,700,000', remark: '기계 정비용 공업용 웨스(면걸레)' },
        { rank: 8, name: 'Keo 502', code: 'O-060301', qty: '4,700', amount: '20,210,000', remark: '초강력 502 순간접착제' },
        { rank: 9, name: 'Tui giay uong nuoc', code: 'G-020301', qty: '500', amount: '18,125,000', remark: '탕비실 위생 종이컵' },
        { rank: 10, name: 'WD-40', code: 'G-990301', qty: '200', amount: '17,000,000', remark: '다목적 방청 윤활 스프레이' },
      ],
    },
    service: {
      id: 'service',
      letter: 'S',
      num: '③',
      title: 'Service _ 구매 비용, 시간 절감 (보이지 않는 비용)',
      subtitle: '원스톱 단일화 서비스로 분산 관리의 인건비, 외근비, 보관료 등 숨은 손실 완벽 제거',
      badge: '시간·관리비용 제로화',
      problemBoxTitle: '분산 거래로 인한 보이지 않는 비용',
      problemItems: ['다수의 업체 관리', '일부 품목 계획 구매 어려움', '자재 보관/관리', '불량품 수리, 교체 등 어려움'],
      problemResult: [
        '인건비 등 관리 비용 초과 발생',
        '불필요한 외근 등으로 인건비, 교통비 등 낭비',
        '구매 기간 지연에 따른 기회비용 발생',
        '창고 보관에 따른 임대료, 인건비 등 발생',
      ],
      solutionBoxTitle: 'PMS의 솔루션 & 약속',
      diagramTitle: '“One Stop Service” 공급망 혁신 구조',
      beforeTitle: '기존: 다자간 분산 구매 (비효율의 악순환)',
      beforeDesc: '고객사가 수많은 업체(1, 2, 3...)와 개별 접촉하여 견적·단가·세금계산서·불량 교환을 각각 관리해야 하는 극심한 행정 로스 발생',
      afterTitle: 'PMS 솔루션: 단일 창구화 (원스톱 직결)',
      afterDesc: '고객사는 오직 PMS VINA 단 한 곳과 소통하며, 70여 개 제조망을 PMS가 일괄 관제하여 최적의 단가와 납기를 보장합니다.',
      promises: [
        {
          highlight: '“One Stop Service” 모든 기업 소모성 자재 구입 일괄 진행',
          desc: '→ 구매선의 단일화에 따른 관리 용이',
          detail: '도덕성 관리, 단가 관리, 납기 관리, 품질 관리, 대금 지급 관리 등 복잡했던 구매 프로세스가 단 하나의 채널로 일원화됩니다.',
        },
        {
          highlight: '1~2일 전 발주 납품 서비스 제공',
          desc: '→ 자재 선확보 운영 원칙',
          detail: '고객사 다빈도 품목을 PMS 자체 물류 창고에 사전 확보(Safety Stock)하여 긴급 납품 요청에도 24~48시간 내 즉각 대응합니다.',
        },
        {
          highlight: '불량품 교체 등 대부분 실시간 대응 가능',
          desc: '→ 배송 차량 매일 순회 배송',
          detail: '전용 배송 차량이 베트남 주요 산업단지를 매일 정기 순회하므로, 교환이나 긴급 추가 건 발생 시 즉각적인 맞교환이 가능합니다.',
        },
      ],
      features: [
        { title: '원스톱 채널 단일화', desc: '견적·발주·납품·세금계산서 정산을 PMS 1개사로 통합', tag: '구매선 일원화' },
        { title: '1~2일 전 자재 선확보', desc: '자체 창고에 안전재고 상시 보유로 결품 리스크 차단', tag: '선확보 원칙' },
        { title: '매일 순회 배송 운영', desc: '박닌·하노이·하이퐁 매일 순회 차량으로 불량품 실시간 맞교환', tag: '실시간 대응' },
      ],
    },
  },

  en: {
    sitemapBadge: 'Sitemap – Values & Promises',
    heading: 'Core Values & Customer Promises of PMS',
    headingHighlight: 'Price · Moral · Service',
    lead: 'Solving structural procurement inefficiencies for enterprises in Vietnam through direct cost savings (Price), transparent ethics (Moral), and eliminating hidden operational costs & lead times (Service).',
    tabs: {
      all: 'Integrated Framework',
      price: '① Price (Cost Reduction)',
      moral: '② Moral (Ethical Management)',
      service: '③ Service (Time & Cost Savings)',
    },
    summaryCardTitle: '3 Core Value Commitments of PMS',
    summaryCardDesc: 'Beyond conventional distribution, PMS permanently halts hidden operational drain via unified sourcing, 100% legal VAT red invoices, and daily patrol deliveries.',
    viewAllToggle: 'View All 3 Pillars',
    viewDetailsBtn: 'Explore Analysis & Promises',
    price: {
      id: 'price',
      letter: 'P',
      num: '①',
      title: 'Price _ Procurement Cost Reduction',
      subtitle: 'Maximizing price competitiveness via bulk consolidation and direct VN/China manufacturing sourcing',
      badge: 'Cost Innovation',
      problemBoxTitle: 'Local MRO Purchasing Reality',
      problemItems: ['High Variety', 'Small Quantities'],
      problemResult: ['Difficulty securing competitive vendors', 'Limited room for price negotiations'],
      solutionBoxTitle: 'PMS Solution & Promises',
      promises: [
        {
          highlight: 'Unit-Price Competitiveness via Bulk Procurement',
          desc: '→ Group Purchasing Scale Merit',
          sub: 'Consolidating consumable demand across 100+ manufacturing clients to command direct factory volume discounts.',
        },
        {
          highlight: 'Specialized Sourcing Across Vietnam & China',
          desc: '→ Currently maintaining ~3,000 SKUs across 70+ vetted manufacturers',
          sub: 'Cross-border direct relationships eliminate unnecessary intermediary distribution layers and fees.',
        },
        {
          highlight: 'Uniform Single-Price Policy',
          desc: '→ Standardized single-pricing across all corporate clients',
          sub: 'Fair and transparent pricing applied equally without discrimination based on corporate size or volume.',
        },
        {
          highlight: 'Continuous Market Research for Price Leadership',
          desc: '→ Real-time tracking of raw material and market pricing',
          sub: 'Continuously monitoring domestic VN market trends and China factory benchmarks to guarantee lowest sustainable prices.',
        },
      ],
      stats: [
        { val: '3,000+', label: 'Active SKUs', detail: 'Ready inventory across all plant processes' },
        { val: '70+', label: 'Vetted Factories', detail: 'Direct manufacturing partners in VN & China' },
        { val: '100%', label: 'Single Pricing', detail: 'Equal, transparent price standards' },
        { val: '15~25%', label: 'Avg Cost Savings', detail: 'Compared to fragmented vendor sourcing' },
      ],
    },
    moral: {
      id: 'moral',
      letter: 'M',
      num: '②',
      title: 'Moral _ Ethical & Transparent Corporate Management',
      subtitle: 'Zero-rebate policy, 100% genuine Red Invoices, and tailored quarterly spending analytics',
      badge: 'Ethical Governance',
      problemBoxTitle: 'Informal Local Practices & Audit Risks',
      problemItems: ['Verbal POs / Pre-delivery / Post-billing', 'Petty vendor accounting issues (missing VAT invoices)', 'Informal local purchasing customs'],
      problemResult: ['Opaque procurement environment', 'Tax & accounting compliance risks', 'Inflated total procurement cost'],
      solutionBoxTitle: 'PMS Solution & Promises',
      promises: [
        {
          highlight: '100% Zero-Rebate Clean Transaction Pledge',
          desc: 'Permanently preventing kickbacks and informal practices to safeguard corporate procurement integrity.',
        },
        {
          highlight: '100% Direct Issuance of Legal Red Invoices',
          desc: '→ Eliminating illegal external invoices from informal purchases (100% authentic official VAT invoices).',
        },
        {
          highlight: 'Customized Monthly Client Analytics Reports',
          desc: '→ Usage volume and expenditure analysis reports provided on demand for complete data visibility.',
        },
      ],
      reportTitle: 'Client Procurement Monitoring Report (Actual Sample)',
      reportSubtitle: 'Real-time category spending distributions and monthly consumption patterns enabling data-driven budget control.',
      reportNote: '※ Authentic sample data from regular quarterly monitoring reports provided to corporate clients.',
      currencyUnit: 'Unit: VND (Vietnamese Dong)',
      quarterTotal: '923,192,450 VND',
      tableHeaders: {
        category: 'Category',
        m1: 'Jan',
        m2: 'Feb',
        m3: 'Mar',
        total: 'Quarter Total',
        share: 'Share (%)',
      },
      monthlyRows: [
        { category: 'General Supplies', m1: '68,795,000', m2: '255,290,050', m3: '248,635,400', total: '572,720,450', percent: 62, color: '#2563eb' },
        { category: 'Labor Safety (PPE)', m1: '187,000', m2: '62,680,000', m3: '75,720,500', total: '138,587,500', percent: 15, color: '#f97316' },
        { category: 'Electrical Consumables', m1: '2,510,000', m2: '23,380,000', m3: '54,874,500', total: '80,764,500', percent: 9, color: '#06b6d4' },
        { category: 'Office Supplies', m1: '44,269,000', m2: '27,983,000', m3: '2,510,000', total: '74,762,000', percent: 8, color: '#eab308' },
        { category: 'Tools & Hardware', m1: '2,405,000', m2: '9,910,000', m3: '44,043,000', total: '56,358,000', percent: 6, color: '#8b5cf6' },
      ],
      monthlyTotals: {
        category: 'Total',
        m1: '118,166,000',
        m2: '379,243,050',
        m3: '425,783,400',
        total: '923,192,450',
      },
      top10Title: 'Top 10 Procured Items Ranking',
      top10Subtitle: 'Statistics and PMS item codes for the highest-volume consumables procured by enterprise clients',
      top10Headers: {
        rank: 'No',
        name: 'Item Description',
        code: 'PMS Code',
        qty: 'Qty',
        amount: 'Amount (VND)',
        remark: 'Specification / Usage',
      },
      top10Items: [
        { rank: 1, name: 'Mang chit', code: 'G-050101', qty: '3,990', amount: '311,220,000', remark: 'Industrial Pallet Stretch Film' },
        { rank: 2, name: 'Gang tay cao su', code: 'S-010501', qty: '2,500', amount: '70,000,000', remark: 'Industrial Protective Rubber Gloves' },
        { rank: 3, name: 'Giay ve sinh', code: 'G-030101', qty: '2,400', amount: '33,600,000', remark: 'Jumbo Roll Restroom Tissue' },
        { rank: 4, name: 'Gang tay trang ngon', code: 'S-010701', qty: '4,360', amount: '30,520,000', remark: 'PU Coated Precision Fingertip Gloves' },
        { rank: 5, name: 'Giay Clever UP A4', code: 'O-021103', qty: '650', amount: '29,250,000', remark: 'Premium A4 Copy Paper 70/80gsm' },
        { rank: 6, name: 'BD trang dan thung trang', code: 'G-120101', qty: '2,750', amount: '27,500,000', remark: 'Clear OPP Packaging Box Sealing Tape' },
        { rank: 7, name: 'Gie lau mau', code: 'G-040101', qty: '1,900', amount: '24,700,000', remark: 'Cotton Industrial Cleaning Rags (Wipes)' },
        { rank: 8, name: 'Keo 502', code: 'O-060301', qty: '4,700', amount: '20,210,000', remark: 'High-Bond 502 Cyanoacrylate Instant Glue' },
        { rank: 9, name: 'Tui giay uong nuoc', code: 'G-020301', qty: '500', amount: '18,125,000', remark: 'Hygienic Disposable Paper Drinking Cups' },
        { rank: 10, name: 'WD-40', code: 'G-990301', qty: '200', amount: '17,000,000', remark: 'Multi-Use Anti-Rust Lubricant Spray' },
      ],
    },
    service: {
      id: 'service',
      letter: 'S',
      num: '③',
      title: 'Service _ Invisible Cost & Time Savings',
      subtitle: 'One-stop consolidated service eliminating hidden overhead: admin labor, wasted trips, and storage burdens',
      badge: 'Zero Lead-Time & Overhead',
      problemBoxTitle: 'Invisible Costs from Fragmented Vendors',
      problemItems: ['Managing dozens of disparate vendors', 'Difficult planned purchasing for small items', 'Storage and inventory overhead', 'Sluggish RMA, repair, and replacement'],
      problemResult: [
        'Excessive administrative labor overhead',
        'Wasted labor and transportation on frequent outside trips',
        'Production downtime and opportunity loss from delivery delays',
        'Storage rent and warehouse handling labor expenses',
      ],
      solutionBoxTitle: 'PMS Solution & Promises',
      diagramTitle: '“One Stop Service” Supply Chain Architecture',
      beforeTitle: 'Before: Fragmented Vendor Dispersal (Administrative Chaos)',
      beforeDesc: 'Clients deal with dozens of individual vendors with varying quotes, delivery schedules, missing VAT receipts, and RMA disputes.',
      afterTitle: 'PMS Innovation: Unified Gateway (One-Stop Direct)',
      afterDesc: 'Clients interface exclusively with PMS VINA as a single contact window, while PMS oversees 70+ manufacturing nodes to ensure optimal terms.',
      promises: [
        {
          highlight: '“One Stop Service” Consolidating All Enterprise Consumables',
          desc: '→ Extreme ease of governance through single-sourcing',
          detail: 'Consolidating ethical governance, unit pricing, delivery schedules, quality verification, and payments into a single streamlined gateway.',
        },
        {
          highlight: '1–2 Day Advance Order Delivery System',
          desc: '→ Strategic Safety Stock Pre-Allocation Principle',
          detail: 'High-frequency client consumables are pre-stocked inside PMS warehouse, enabling rapid 24- to 48-hour order dispatch.',
        },
        {
          highlight: 'Real-Time Response for Replacements & Defects',
          desc: '→ Dedicated Daily Patrol Delivery Fleet',
          detail: 'Dedicated transport fleet patrols Bac Ninh, Hanoi, and Hai Phong industrial zones daily, ensuring immediate on-site RMA exchange.',
        },
      ],
      features: [
        { title: 'Single-Window Sourcing', desc: 'Consolidating RFQs, POs, deliveries, and VAT invoices into PMS', tag: 'Unified Gateway' },
        { title: 'Pre-Allocated Stocking', desc: 'Dedicated warehouse maintaining safety stock to eliminate stockouts', tag: 'Safety Stock' },
        { title: 'Daily Patrol Fleet', desc: 'Daily delivery vehicles enabling immediate same-day/next-day RMA', tag: 'Real-Time RMA' },
      ],
    },
  },

  vi: {
    sitemapBadge: 'Sơ Đồ Hệ Thống – Giá Trị & Cam Kết',
    heading: 'Giá Trị Cốt Lõi & Cam Kết Của PMS',
    headingHighlight: 'Price · Moral · Service',
    lead: 'Giải quyết triệt để sự thiếu hiệu quả trong thu mua MRO tại Việt Nam thông qua tối ưu giá thành (Price), vận hành đạo đức minh bạch (Moral) và cắt giảm chi phí ẩn & thời gian (Service).',
    tabs: {
      all: 'Toàn bộ hệ thống giá trị',
      price: '① Price (Tối ưu giá mua)',
      moral: '② Moral (Kinh doanh đạo đức)',
      service: '③ Service (Tiết kiệm thời gian & chi phí)',
    },
    summaryCardTitle: '3 Cam Kết Giá Trị Trọng Tâm Của PMS',
    summaryCardDesc: 'PMS không chỉ là nhà phân phối, mà là đối tác chiến lược giúp doanh nghiệp loại bỏ tổn thất ẩn nhờ nhất thể hóa đầu mối, hóa đơn đỏ 100% và giao hàng tuần tra hàng ngày.',
    viewAllToggle: 'Xem tổng thể 3 trụ cột',
    viewDetailsBtn: 'Xem chi tiết cam kết & phân tích',
    price: {
      id: 'price',
      letter: 'P',
      num: '①',
      title: 'Price _ Giảm Thiểu Giá Thành Thu Mua',
      subtitle: 'Hiệu quả mua sắm số lượng lớn và mạng lưới trực tiếp từ nhà máy tại Việt Nam & Trung Quốc',
      badge: 'Đột phá về giá',
      problemBoxTitle: 'Thực trạng thu mua MRO tại chỗ',
      problemItems: ['Đa dạng chủng loại', 'Số lượng nhỏ lẻ'],
      problemResult: ['Khó tiếp cận nhà cung cấp có giá tốt', 'Khó đàm phán, thương lượng đơn giá'],
      solutionBoxTitle: 'Giải pháp & Cam kết từ PMS',
      promises: [
        {
          highlight: 'Đảm bảo lợi thế đơn giá nhờ mua sắm số lượng lớn',
          desc: '→ Hiệu quả mua hàng tập trung quy mô lớn (Scale Merit)',
          sub: 'Tập hợp nhu cầu vật tư tiêu hao từ hơn 100 doanh nghiệp để nhận mức chiết khấu cao nhất từ nhà sản xuất.',
        },
        {
          highlight: 'Chuyên gia thu mua hàng đầu tại Việt Nam & Trung Quốc',
          desc: '→ Hiện duy trì hơn 3,000 mặt hàng, kết nối hơn 70 nhà máy uy tín',
          sub: 'Kênh nhập hàng trực tiếp xuyên biên giới giúp loại bỏ các tầng nấc trung gian thương mại.',
        },
        {
          highlight: 'Áp dụng chính sách đơn giá đồng nhất',
          desc: '→ Áp dụng cùng mức đơn giá chuẩn xác cho mọi khách hàng',
          sub: 'Minh bạch, công bằng, không phân biệt quy mô doanh nghiệp hay khối lượng đơn hàng.',
        },
        {
          highlight: 'Khảo sát thị trường liên tục để duy trì vị thế cạnh tranh',
          desc: '→ Cập nhật biến động giá nguyên vật liệu theo thời gian thực',
          sub: 'Thường xuyên theo dõi thị trường nội địa Việt Nam và các công xưởng Trung Quốc để đảm bảo mức giá cạnh tranh nhất.',
        },
      ],
      stats: [
        { val: '3,000+', label: 'Mặt hàng sẵn sàng', detail: 'Đáp ứng toàn bộ quy trình sản xuất' },
        { val: '70+', label: 'Nhà máy đối tác', detail: 'Hệ thống nhà xưởng tại VN & Trung Quốc' },
        { val: '100%', label: 'Đơn giá chuẩn', detail: 'Công khai, minh bạch tuyệt đối' },
        { val: '15~25%', label: 'Tiết kiệm trung bình', detail: 'So với mua lẻ từ nhiều nhà cung cấp' },
      ],
    },
    moral: {
      id: 'moral',
      letter: 'M',
      num: '②',
      title: 'Moral _ Vận Hành Doanh Nghiệp Đạo Đức & Minh Bạch',
      subtitle: 'Nói không với hoa hồng, xuất hóa đơn VAT 100%, cung cấp báo cáo phân tích chi tiêu định kỳ',
      badge: 'Quản trị minh bạch & đạo đức',
      problemBoxTitle: 'Tập quán địa phương & Rủi ro kiểm toán',
      problemItems: ['Đặt hàng miệng / Giao trước xử lý chứng từ sau', 'Nhà cung cấp nhỏ lẻ thiếu hóa đơn hợp lệ', 'Tập quán mua hàng không chính thức'],
      problemResult: ['Môi trường mua hàng thiếu minh bạch', 'Rủi ro kế toán & thanh tra thuế', 'Chi phí mua hàng thực tế bị đội lên'],
      solutionBoxTitle: 'Giải pháp & Cam kết từ PMS',
      promises: [
        {
          highlight: 'Cam kết giao dịch minh bạch 100% không hoa hồng (Rebate)',
          desc: 'Triệt tiêu tiêu cực và các khoản chi phí ngầm, bảo vệ sự trong sạch trong chuỗi cung ứng của khách hàng.',
        },
        {
          highlight: 'Xuất hóa đơn GTGT (Hóa đơn đỏ) hợp pháp 100%',
          desc: '→ Xóa bỏ hoàn toàn việc phải mua hóa đơn bên ngoài do mua hàng trôi nổi không chứng từ.',
        },
        {
          highlight: 'Cung cấp ‘Báo cáo Tháng’ theo yêu cầu',
          desc: '→ Báo cáo giám sát, phân tích lượng tiêu thụ và chi phí để phục vụ quản lý ngân sách chính xác.',
        },
      ],
      reportTitle: 'Báo Cáo Phân Tích Thu Mua Doanh Nghiệp (Dữ liệu thực tế)',
      reportSubtitle: 'Giám sát chi tiết phân bổ ngân sách theo ngành hàng và xu hướng tiêu dùng qua từng tháng.',
      reportNote: '※ Dữ liệu mẫu thực tế trích xuất từ báo cáo giám sát định kỳ cung cấp cho các khách hàng doanh nghiệp.',
      currencyUnit: 'Đơn vị: VND (Đồng Việt Nam)',
      quarterTotal: '923,192,450 VND',
      tableHeaders: {
        category: 'Phân loại vật tư',
        m1: 'Tháng 1',
        m2: 'Tháng 2',
        m3: 'Tháng 3',
        total: 'Tổng Quý',
        share: 'Tỷ trọng (%)',
      },
      monthlyRows: [
        { category: 'Vật tư tiêu hao chung', m1: '68,795,000', m2: '255,290,050', m3: '248,635,400', total: '572,720,450', percent: 62, color: '#2563eb' },
        { category: 'Bảo hộ lao động (PPE)', m1: '187,000', m2: '62,680,000', m3: '75,720,500', total: '138,587,500', percent: 15, color: '#f97316' },
        { category: 'Vật tư tiêu hao điện', m1: '2,510,000', m2: '23,380,000', m3: '54,874,500', total: '80,764,500', percent: 9, color: '#06b6d4' },
        { category: 'Văn phòng phẩm', m1: '44,269,000', m2: '27,983,000', m3: '2,510,000', total: '74,762,000', percent: 8, color: '#eab308' },
        { category: 'Dụng cụ & Phụ tùng', m1: '2,405,000', m2: '9,910,000', m3: '44,043,000', total: '56,358,000', percent: 6, color: '#8b5cf6' },
      ],
      monthlyTotals: {
        category: 'Tổng Cộng',
        m1: '118,166,000',
        m2: '379,243,050',
        m3: '425,783,400',
        total: '923,192,450',
      },
      top10Title: 'Xếp Hạng 10 Mặt Hàng Tiêu Biểu Được Thu Mua Nhiều Nhất',
      top10Subtitle: 'Mã vật tư PMS và số lượng thống kê các mặt hàng chủ lực phục vụ dây chuyền nhà máy',
      top10Headers: {
        rank: 'STT',
        name: 'Tên vật tư',
        code: 'Mã PMS',
        qty: 'Số lượng',
        amount: 'Thành tiền (VND)',
        remark: 'Quy cách / Ứng dụng',
      },
      top10Items: [
        { rank: 1, name: 'Mang chit', code: 'G-050101', qty: '3,990', amount: '311,220,000', remark: 'Màng PE quấn pallet công nghiệp' },
        { rank: 2, name: 'Gang tay cao su', code: 'S-010501', qty: '2,500', amount: '70,000,000', remark: 'Găng tay cao su công nghiệp bảo hộ' },
        { rank: 3, name: 'Giay ve sinh', code: 'G-030101', qty: '2,400', amount: '33,600,000', remark: 'Giấy vệ sinh cuộn lớn nhà xưởng' },
        { rank: 4, name: 'Gang tay trang ngon', code: 'S-010701', qty: '4,360', amount: '30,520,000', remark: 'Găng tay phủ ngón PU phòng sạch' },
        { rank: 5, name: 'Giay Clever UP A4', code: 'O-021103', qty: '650', amount: '29,250,000', remark: 'Giấy in văn phòng Clever UP A4' },
        { rank: 6, name: 'BD trang dan thung trang', code: 'G-120101', qty: '2,750', amount: '27,500,000', remark: 'Băng dính OPP dán thùng trong suốt' },
        { rank: 7, name: 'Gie lau mau', code: 'G-040101', qty: '1,900', amount: '24,700,000', remark: 'Giẻ lau máy cotton công nghiệp' },
        { rank: 8, name: 'Keo 502', code: 'O-060301', qty: '4,700', amount: '20,210,000', remark: 'Keo dán dính nhanh 502' },
        { rank: 9, name: 'Tui giay uong nuoc', code: 'G-020301', qty: '500', amount: '18,125,000', remark: 'Cốc giấy dùng 1 lần phòng pantry' },
        { rank: 10, name: 'WD-40', code: 'G-990301', qty: '200', amount: '17,000,000', remark: 'Dầu xịt chống rỉ bôi trơn đa năng WD-40' },
      ],
    },
    service: {
      id: 'service',
      letter: 'S',
      num: '③',
      title: 'Service _ Tiết Kiệm Chi Phí & Thời Gian Ẩn',
      subtitle: 'Dịch vụ One-Stop trọn gói xóa bỏ chi phí quản lý nhân sự, công tác phí và gánh nặng kho bãi',
      badge: 'Loại bỏ chi phí ẩn',
      problemBoxTitle: 'Chi phí ẩn do quản lý phân tán',
      problemItems: ['Quản lý quá nhiều nhà cung cấp lẻ', 'Khó lên kế hoạch mua sắm đồng bộ', 'Gánh nặng lưu trữ & quản lý kho', 'Đổi trả, sửa chữa hàng lỗi chậm trễ'],
      problemResult: [
        'Vượt định mức chi phí quản lý nhân sự',
        'Lãng phí nhân công và chi phí đi lại ra ngoài xưởng',
        'Tổn thất cơ hội sản xuất do giao hàng chậm trễ',
        'Phát sinh chi phí thuê kho và nhân công quản lý kho',
      ],
      solutionBoxTitle: 'Giải pháp & Cam kết từ PMS',
      diagramTitle: 'Mô Hình Đổi Mới Chuỗi Cung Ứng “One Stop Service”',
      beforeTitle: 'Trước đây: Thu mua phân tán đa điểm (Rối loạn & tổn thất)',
      beforeDesc: 'Khách hàng phải trực tiếp liên hệ với hàng chục nhà cung cấp (1, 2, 3...) dẫn đến phát sinh chi phí liên lạc, chênh lệch báo giá và đối chiếu hóa đơn phức tạp.',
      afterTitle: 'Giải pháp PMS: Quy tụ một đầu mối duy nhất (One Stop)',
      afterDesc: 'Khách hàng chỉ làm việc trực tiếp với PMS VINA, trong khi PMS đại diện quản lý toàn diện hơn 70 nhà máy sản xuất để đảm bảo giá và tiến độ giao hàng tốt nhất.',
      promises: [
        {
          highlight: '“One Stop Service” Mua sắm trọn gói mọi vật tư tiêu hao',
          desc: '→ Thuận tiện quản trị nhờ quy về một đầu mối duy nhất',
          detail: 'Quản lý đạo đức, đơn giá, tiến độ giao hàng, chất lượng sản phẩm và thanh toán tập trung vào một kênh độc nhất.',
        },
        {
          highlight: 'Cung cấp dịch vụ giao hàng sau 1–2 ngày đặt hàng',
          desc: '→ Nguyên tắc chủ động dự trữ hàng an toàn tại kho (Safety Stock)',
          detail: 'Các mặt hàng sử dụng thường xuyên được lưu trữ sẵn tại kho của PMS, đáp ứng ngay lập tức trong 24~48 giờ.',
        },
        {
          highlight: 'Xử lý đổi trả hàng lỗi theo thời gian thực',
          desc: '→ Xe giao hàng tuần tra hàng ngày',
          detail: 'Đội xe chuyên dụng chạy tuyến cố định qua các KCN trọng điểm Bắc Ninh, Hà Nội, Hải Phòng mỗi ngày để hỗ trợ đổi trả ngay lập tức.',
        },
      ],
      features: [
        { title: 'Nhất thể hóa đầu mối', desc: 'Báo giá, đặt hàng, giao hàng và đối chiếu hóa đơn VAT trọn gói qua PMS', tag: 'Một Đầu Mối' },
        { title: 'Dự trữ hàng an toàn', desc: 'Kho hàng luôn có sẵn hàng dự phòng, triệt tiêu rủi ro gián đoạn sản xuất', tag: 'Chủ Động Tồn Kho' },
        { title: 'Xe tuần tra hàng ngày', desc: 'Giao hàng và đổi trả hàng lỗi linh hoạt trong ngày tại các khu công nghiệp', tag: 'Phản Hồi Tức Thì' },
      ],
    },
  },

  zh: {
    sitemapBadge: '网站地图 – 价值与承诺',
    heading: 'PMS 核心价值与对客户的承诺',
    headingHighlight: 'Price · Moral · Service',
    lead: '针对在越制造型企业面临的MRO分散采购痛点，通过降低采购直接成本(Price)、坚持阳光道德经营(Moral)、消除隐性管理成本与工时浪费(Service)，打造高价值工业品供应链。',
    tabs: {
      all: '三大核心价值体系',
      price: '① Price (降低采购成本)',
      moral: '② Moral (阳光道德经营)',
      service: '③ Service (削减隐性工时成本)',
    },
    summaryCardTitle: 'PMS 践行的三大核心企业承诺',
    summaryCardDesc: '超越传统商品买卖，通过供应商渠道集约单一化、100%正规发票合规保障以及每日园区巡回专车，彻底根除企业的隐性运营消耗。',
    viewAllToggle: '一览三大核心板块',
    viewDetailsBtn: '查看深度分析与承诺',
    price: {
      id: 'price',
      letter: 'P',
      num: '①',
      title: 'Price _ 降低直接采购成本',
      subtitle: '释放规模共同集采效应，直连越南与中国源头工厂确立价格竞争壁垒',
      badge: '成本革新',
      problemBoxTitle: '当地采购现状痛点',
      problemItems: ['多品类', '小批量零散'],
      problemResult: ['难以锁定具备竞争力的源头工厂', '单价谈判空间极小'],
      solutionBoxTitle: 'PMS 解决方案与承诺',
      promises: [
        {
          highlight: '规模集采确立单价竞争优势',
          desc: '→ 释放共同采购规模效应 (Scale Merit)',
          sub: '集合100余家入驻制造企业的共通耗材需求，直达源头品牌厂家获取最优势阶梯批量折扣。',
        },
        {
          highlight: '深耕越南与中国的资深直采服务商',
          desc: '→ 现货储备超3,000种品类，严选对接70余家具备实力的源头厂商',
          sub: '跨境一手货源直发，彻底挤压剔除当地多层中间商加价水分。',
        },
        {
          highlight: '推行公开统一的单一标准单价制',
          desc: '→ 面向所有客户执行透明公正的单一价格标准',
          sub: '绝不因企业规模或当期采购量看客报价，确保长久阳光互信。',
        },
        {
          highlight: '动态市场调研保持领先价格竞争力',
          desc: '→ 实时追踪原材料及国际行情异动',
          sub: '全天候比对越南本土五金市场与中国制造基地出厂价，确保客户始终享有最实惠采购价。',
        },
      ],
      stats: [
        { val: '3,000+', label: '常备物料品类', detail: '全产线运转耗材一应俱全' },
        { val: '70+', label: '直采源头工厂', detail: '覆盖越中两国优质制造配套' },
        { val: '100%', label: '公开单价制', detail: '公开透明无隐匿差价' },
        { val: '15~25%', label: '平均综合节支', detail: '相比原有分散采购显著降低' },
      ],
    },
    moral: {
      id: 'moral',
      letter: 'M',
      num: '②',
      title: 'Moral _ 坚持道德与阳光经营',
      subtitle: '零回扣阳光交易承诺、100%正规增值税发票、专属月度/季度采购明细分析报告',
      badge: '合规与商业道德',
      problemBoxTitle: '非合规交易陋习与财税风险',
      problemItems: ['口头下单 / 先送货后补账', '小微作坊无正规发票 (漏税违规)', '当地非阳光采购潜规则'],
      problemResult: ['采购环境黑箱化', '财税做账合规隐患 (税务审计风险)', '综合采购成本居高不下'],
      solutionBoxTitle: 'PMS 解决方案与承诺',
      promises: [
        {
          highlight: '庄重承诺绝无回扣（Rebate-Free）的阳光交易',
          desc: '坚决抵制不正当利益输送，守护企业供应链采购的廉洁合规与纯粹本色。',
        },
        {
          highlight: '100%开具正规合法增值税发票 (Red Invoice)',
          desc: '→ 彻底杜绝因无票采购而在外部买票报销的违法风险，确保每笔进项完全合规。',
        },
        {
          highlight: '为客户专属定制“月度分析报告”',
          desc: '→ 详尽分析物料使用量、品类金额占比，为客户企业预算决策提供坚实数据支撑。',
        },
      ],
      reportTitle: '企业客户采购监控报告 (真实运营样本)',
      reportSubtitle: '各品类消耗走势与月度开支分布一目了然，助力企业实现精准预算管控。',
      reportNote: '※ 样本数据截取自定期向合作企业提供的季度耗材分析监控实录。',
      currencyUnit: '单位: VND (越南盾)',
      quarterTotal: '923,192,450 VND',
      tableHeaders: {
        category: '品类细分',
        m1: '1月份',
        m2: '2月份',
        m3: '3月份',
        total: '季度合计',
        share: '占比 (%)',
      },
      monthlyRows: [
        { category: '通用生活/厂务耗材', m1: '68,795,000', m2: '255,290,050', m3: '248,635,400', total: '572,720,450', percent: 62, color: '#2563eb' },
        { category: '劳保安全防护 (PPE)', m1: '187,000', m2: '62,680,000', m3: '75,720,500', total: '138,587,500', percent: 15, color: '#f97316' },
        { category: '电气工程耗材', m1: '2,510,000', m2: '23,380,000', m3: '54,874,500', total: '80,764,500', percent: 9, color: '#06b6d4' },
        { category: '办公文教用品', m1: '44,269,000', m2: '27,983,000', m3: '2,510,000', total: '74,762,000', percent: 8, color: '#eab308' },
        { category: '五金工具与机械配件', m1: '2,405,000', m2: '9,910,000', m3: '44,043,000', total: '56,358,000', percent: 6, color: '#8b5cf6' },
      ],
      monthlyTotals: {
        category: '总 计',
        m1: '118,166,000',
        m2: '379,243,050',
        m3: '425,783,400',
        total: '923,192,450',
      },
      top10Title: '采购金额前十大主力商品榜单 (Top 10)',
      top10Subtitle: '合作制造基地采购频次最高、用量最稳定的核心消耗品统计名录',
      top10Headers: {
        rank: '排名',
        name: '商品名称',
        code: 'PMS物料编码',
        qty: '采购数量',
        amount: '采购总额 (VND)',
        remark: '规格与用途说明',
      },
      top10Items: [
        { rank: 1, name: 'Mang chit', code: 'G-050101', qty: '3,990', amount: '311,220,000', remark: '工业卡板拉伸缠绕膜' },
        { rank: 2, name: 'Gang tay cao su', code: 'S-010501', qty: '2,500', amount: '70,000,000', remark: '工业防护耐磨乳胶手套' },
        { rank: 3, name: 'Giay ve sinh', code: 'G-030101', qty: '2,400', amount: '33,600,000', remark: '车间大卷筒公共卫生纸' },
        { rank: 4, name: 'Gang tay trang ngon', code: 'S-010701', qty: '4,360', amount: '30,520,000', remark: 'PU涂指精密防静电手套' },
        { rank: 5, name: 'Giay Clever UP A4', code: 'O-021103', qty: '650', amount: '29,250,000', remark: 'Clever UP高白度A4复印纸' },
        { rank: 6, name: 'BD trang dan thung trang', code: 'G-120101', qty: '2,750', amount: '27,500,000', remark: '加厚高粘透明OPP封箱胶带' },
        { rank: 7, name: 'Gie lau mau', code: 'G-040101', qty: '1,900', amount: '24,700,000', remark: '车间设备擦拭工业纯棉碎布碎布块' },
        { rank: 8, name: 'Keo 502', code: 'O-060301', qty: '4,700', amount: '20,210,000', remark: '强力特快干502瞬间胶水' },
        { rank: 9, name: 'Tui giay uong nuoc', code: 'G-020301', qty: '500', amount: '18,125,000', remark: '茶水间环保一次性饮水纸杯' },
        { rank: 10, name: 'WD-40', code: 'G-990301', qty: '200', amount: '17,000,000', remark: '多功能金属防锈润滑喷剂' },
      ],
    },
    service: {
      id: 'service',
      letter: 'S',
      num: '③',
      title: 'Service _ 削减隐性采购管理成本与工时',
      subtitle: '一站式集约化采购彻底消除分散供应商对接带来的人工、频繁外出及仓储浪费',
      badge: '隐性管理成本归零',
      problemBoxTitle: '多方分散交易引发的巨大隐形成本',
      problemItems: ['疲于对接管理数十家分散小供应商', '零星物料难以做计划性采购', '自备仓库物料保管积压风险', '残次品退换货维修周期冗长'],
      problemResult: [
        '采购人员管理人工成本严重超标',
        '频繁外出采购导致人工及交通差旅严重浪费',
        '采购物料交付延误引发产线停线机会损失',
        '仓库租金及物料管理折旧成本持续攀升',
      ],
      solutionBoxTitle: 'PMS 解决方案与承诺',
      diagramTitle: '“One Stop Service” 供应链集约模式重塑',
      beforeTitle: '原传统模式: 多方分散对接 (沟通极度冗繁与损耗)',
      beforeDesc: '企业必须同时面对数十家外部供应商(1, 2, 3...)，陷入繁杂的询价、比价、催单、核票及售后拉锯中。',
      afterTitle: 'PMS 创新模式: 一站式枢纽对接 (统一管控)',
      afterDesc: '企业客户只需对接 PMS VINA 一个专职窗口，由 PMS 全程统筹管理后方70余家制造供应网络，交期与单价全面保障。',
      promises: [
        {
          highlight: '“One Stop Service” 全品类工业耗材一站式打包承揽',
          desc: '→ 采购渠道高度单一化集中管理',
          detail: '将原本分散的商业廉洁管理、单价管理、交付交期把控、生产品质监控及统一财务付款高度收拢于一个专业窗口。',
        },
        {
          highlight: '提前1~2天极速下单派送服务',
          desc: '→ 核心常备物料前置安全库存机制',
          detail: '将客户常用高频耗材预先备货于 PMS 自有仓储中，紧急采购需求24~48小时内极速配送到厂。',
        },
        {
          highlight: '不良品实时响应快速退换',
          desc: '→ 专属配送车队每日园区巡回派送',
          detail: '专业物流车队每日穿梭于北宁、河内、海防各大核心工业区，发生异常时现场专员直接快速换货。',
        },
      ],
      features: [
        { title: '采购渠道单一化', desc: '询价、下单、送货、对账发票全流程对接 PMS 单一窗口', tag: '一站集采' },
        { title: '物料前置安全库存', desc: '自有仓储提前常备，零断供风险保障', tag: '前置常备' },
        { title: '每日专车巡回直达', desc: '北宁/海防核心工业区每日专车直达，不良品即刻换货', tag: '即时响应' },
      ],
    },
  },
};
