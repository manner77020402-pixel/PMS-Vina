import { Language } from './types';

export interface RfqFaqItem {
  id: number;
  category: 'sourcing' | 'price' | 'moral' | 'quality' | 'accounting';
  question: Record<Language, string>;
  answer: Record<Language, string>;
  keyHighlight?: Record<Language, string>;
}

export const RFQ_FAQ_ITEMS: RfqFaqItem[] = [
  {
    id: 1,
    category: 'sourcing',
    question: {
      ko: '이제 베트남에 처음 회사를 세우는데, 이 많은 소모품들을 어디서 다 사지?',
      en: 'We are setting up our factory in Vietnam for the first time. Where can we source all these countless consumables?',
      vi: 'Chúng tôi mới thành lập công ty tại Việt Nam, làm sao để tìm mua được hàng ngàn loại vật tư tiêu hao này?',
      zh: '我们刚在越南新建工厂，这么多品类的日常耗材该去哪里集中采购？',
    },
    answer: {
      ko: '➔ PMS에 맡기세요. 기업에서 사용하는 모든 소모품을 취급하고 있습니다. (현재 약 3천종)',
      en: '➔ Leave it to PMS. We supply all consumable supplies used in enterprise facilities (currently over 3,000 SKUs).',
      vi: '➔ Hãy để PMS lo. Chúng tôi cung ứng toàn diện tất cả vật tư tiêu hao cho doanh nghiệp (hiện có hơn 3.000 mặt hàng).',
      zh: '➔ 交给 PMS 即可。我们涵盖企业生产经营所需的全系列消耗性资材（目前拥有约 3,000 余种品类）。',
    },
    keyHighlight: {
      ko: '원스톱 3,000여종 일괄 공급',
      en: 'One-stop supply of 3,000+ SKUs',
      vi: 'Cung ứng một đầu mối hơn 3.000 mã hàng',
      zh: '一站式供应 3,000 余种耗材',
    },
  },
  {
    id: 2,
    category: 'price',
    question: {
      ko: '도대체 이 물건은 시장가가 얼마지? 우리가 제대로 구매하고 있는거 맞나?',
      en: 'What is the actual market price of this item? Are we really procuring at a fair price?',
      vi: 'Rốt cuộc giá thị trường của mặt hàng này là bao nhiêu? Liệu công ty chúng tôi có đang mua đúng giá không?',
      zh: '这件物料的市场行情价到底是多少？我们的采购价格究竟合理吗？',
    },
    answer: {
      ko: '➔ PMS가 보장합니다. 베트남 최저라고는 말씀못드립니다. 하지만 \'최저 수준\'이라고는 자신있게 말씀드릴 수 있습니다. 또한 유사품을 납품해야할 경우가 있으면 유사품이라고 반드시 말씀드리고 그에 맞는 가격으로 납품합니다.',
      en: '➔ PMS guarantees this. We do not claim to be the absolute cheapest in Vietnam, but we confidently guarantee "lowest tier market pricing". Furthermore, if an equivalent/substitute product must be supplied, we transparently disclose it in advance and invoice at the appropriately adjusted fair price.',
      vi: '➔ PMS cam kết điều này. Chúng tôi không dám nhận là rẻ nhất Việt Nam, nhưng tự tin khẳng định ở "mức giá tốt nhất thị trường". Hơn nữa, nếu phải cung cấp hàng tương đương/thay thế, chúng tôi luôn thông báo rõ ràng trước và tính đúng giá tương xứng.',
      zh: '➔ PMS 向您保证。我们不敢吹嘘是全越南绝对最低价，但有十足信心承诺属于“市场最低基准区间”。若因特殊情况需供应替代品，必定事前如实相告，并按对等公允价格核算供应。',
    },
    keyHighlight: {
      ko: '최저 수준 가격 보장 & 유사품 사전 고지제',
      en: 'Lowest-tier price guarantee & full substitute transparency',
      vi: 'Cam kết mức giá tốt nhất & minh bạch hàng thay thế',
      zh: '承诺市场低位价 & 替代品预先明示',
    },
  },
  {
    id: 3,
    category: 'moral',
    question: {
      ko: '우리 현지 구매 담당도 리베이트를 받고 있나? 베트남에선 다들 받는다고 하니 받고 있겠지?? 얼마나 받고 있나? 설마 월급보다 많지는 않겠지?',
      en: 'Is our local purchasing staff taking kickbacks? Everyone says it\'s common practice in Vietnam, so are they receiving them? How much? Surely not more than their salary?',
      vi: 'Nhân viên thu mua bản địa của chúng tôi có nhận hoa hồng (rebate) ngầm không? Nghe nói ở Việt Nam ai cũng nhận, có thật vậy không? Có khi nào nhiều hơn cả lương?',
      zh: '我们本地的采购人员是否在私拿回扣？听说越南普遍存在这种潜规则，真的在拿吗？拿了多少？总不至于比工资还高吧？',
    },
    answer: {
      ko: '➔ 안심하세요! 윤리경영 약속드립니다. 더군다나 PMS는 이윤 구조상 현지 직원에게 리베이트를 지급하면 이윤이 남지 않습니다. 원천적으로 불가능합니다.',
      en: '➔ Rest assured! We adhere strictly to ethical, transparent management. Furthermore, PMS operates on lean margins where paying any kickbacks to local staff would eliminate all company profits. It is fundamentally impossible.',
      vi: '➔ Quý khách hoàn toàn có thể yên tâm! PMS cam kết quản trị đạo đức kinh doanh minh bạch. Hơn nữa, cơ cấu biên lợi nhuận của PMS không cho phép chi trả hoa hồng ngầm, vì nếu trả thì chúng tôi hoàn toàn không còn lợi nhuận. Về mặt nguyên tắc là bất khả thi.',
      zh: '➔ 请彻底放心！PMS 郑重承诺透明廉洁经营。况且以 PMS 的精细化薄利定价机制，若向本地人员支付回扣则公司全无利润，根本无从支付，从源头上彻底杜绝。',
    },
    keyHighlight: {
      ko: '리베이트 원천 차단 & 클린 윤리 경영',
      en: 'Zero kickbacks & 100% ethical trade',
      vi: 'Nói không với hoa hồng ngầm & kinh doanh minh bạch',
      zh: '零回扣机制 & 阳光廉洁经营',
    },
  },
  {
    id: 4,
    category: 'quality',
    question: {
      ko: '납품 수량은 납품서대로 제대로 되고 있나? 직원하고 업체하고 담합하기 제일 쉬운 부분이라던데..',
      en: 'Are delivered quantities strictly matching delivery slips? We heard quantity collusion between vendor and local staff is the easiest area for fraud...',
      vi: 'Số lượng giao hàng có đúng chuẩn theo phiếu giao không? Nghe nói đây là khâu dễ thông đồng gian lận nhất giữa nhà cung cấp và nhân viên nội bộ...',
      zh: '实际交付数量是否严格与送货单相符？听说供应商与内部员工串通虚报交货数量是最容易发生舞弊的环节...',
    },
    answer: {
      ko: '➔ 매월 혹은 분기별로 사장인 제가 직접 청구 금액/단가 기준으로 납품 세부내역 분석보고서를 작성하여 보내드립니다. 단순 실수를 제외하고 걱정하시는 내부 직원과 담합하여 고의로 조직적인 납품 수량을 속이는 행위는 있을수가 없습니다.',
      en: '➔ Every month or quarter, our CEO personally reviews and prepares detailed delivery analysis reports by billed amount and unit prices, directly submitted to your management. Aside from rare clerical oversights, any intentional collusion or deliberate quantity discrepancies are strictly impossible in our operations.',
      vi: '➔ Hàng tháng hoặc định kỳ hàng quý, chính Tổng giám đốc của chúng tôi sẽ trực tiếp lập và gửi báo cáo phân tích chi tiết giao nhận theo đơn giá/số tiền thực tế. Ngoại trừ sai sót ngẫu nhiên không đáng kể, hành vi cố ý thông đồng gian lận số lượng giao hàng là hoàn toàn không thể xảy ra tại PMS.',
      zh: '➔ 每月或每季度，均由我（公司总经理）亲自依照实际请款金额与单价编制明细核查报告呈送贵司管理层。除了极少数无心笔误外，绝不可能存在与内部员工勾结蓄意克扣偷漏交货数量的行为。',
    },
    keyHighlight: {
      ko: '대표이사 직인 납품 세부내역 분석보고서 제공',
      en: 'CEO-signed detailed delivery audit reports',
      vi: 'Báo cáo đối soát chi tiết do Giám đốc trực tiếp lập',
      zh: '总经理亲自核发收发货明细分析报告',
    },
  },
  {
    id: 5,
    category: 'quality',
    question: {
      ko: '중량은 규격하고 맞나? 두께는 규격하고 맞나? 길이는 규격하고 맞나? 초기에만 맞게 들어오고 중간에 조금씩 줄어드는거 아닌가? 매번 전수검사를 할 수도 없고..',
      en: 'Do the weight, thickness, and length match specs? Isn\'t it common that products meet specifications at first, but stealthily shrink over time? We can\'t inspect every single piece...',
      vi: 'Trọng lượng, độ dày, chiều dài có đúng quy cách không? Có khi nào ban đầu giao đúng, sau này lại cắt bớt dần không? Chúng tôi đâu thể kiểm tra từng món mỗi lần giao...',
      zh: '货物重量、厚度、长度是否完全符合规格？会不会刚开始送货达标，日后慢慢缺斤少两、偷工减料？我们总不可能每次都全检...',
    },
    answer: {
      ko: '➔ PMS가 보장합니다. PMS는 현재 100여개 고객에 납품을 하고 있습니다. 만일 규격에 문제가 생기면 한고객은 모르고 지나갈 수 있을지 몰라도 나머지 99개 고객중 어디에선가 반드시 문제가 생깁니다. 저희한테는 절대로 있을수 없는 일입니다.',
      en: '➔ PMS guarantees standard compliance. PMS currently supplies over 100 enterprise corporate clients. Even if one client did not notice a specification discrepancy, it would immediately be detected by one of the remaining 99 factories. Sub-spec deviation is strictly unacceptable in our company.',
      vi: '➔ PMS cam kết tuyệt đối. Hiện PMS cung ứng cho hơn 100 nhà máy khách hàng. Nếu quy cách có vấn đề, dù một khách hàng không để ý thì chắc chắn sẽ bị phát hiện tại 99 khách hàng còn lại. Tại PMS, tuyệt đối không bao giờ có chuyện gian lận quy cách.',
      zh: '➔ PMS 郑重保障。PMS 目前同时向 100 多家大型企业供货。倘若规格出现丝毫缩水，即使某一家客户未能察觉，其他 99 家客户也必定会立刻发现。在我们公司绝无偷减规格之可能。',
    },
    keyHighlight: {
      ko: '100여 개 고객사 교차검증 체계로 규격 변동 불가능',
      en: 'Cross-verified across 100+ factories: zero specification deviation',
      vi: 'Hệ thống đối soát chéo qua 100+ khách hàng: chuẩn xác quy cách',
      zh: '100+ 家企业交叉校验网络：彻底杜绝规格缩水',
    },
  },
  {
    id: 6,
    category: 'quality',
    question: {
      ko: '재고 조사는 얼마만에 한번씩 해야되지? 물품이 무단 반출되는건 없나? 경비는 믿을만 한건가?',
      en: 'How often should we conduct inventory audits? Are materials leaking out without authorization? Can factory security be trusted?',
      vi: 'Bao lâu nên kiểm kê kho một lần? Hàng hóa có bị tuồn ra ngoài trái phép không? Nhân viên bảo vệ có đáng tin cậy không?',
      zh: '仓库盘点应该多久做一次？物料会不会被私自携出厂外？门卫保安靠得住吗？',
    },
    answer: {
      ko: '➔ 간혹 저희가 납품한 물품중 무단 반출된 물품을 저희한테 되팔려는 시도가 있는게 사실입니다. PMS의 명예를 걸고 절대 용납되지 않는일이며, 저희가 보내드리는 납품 분석 보고서와 해당 물품의 입출고, 재고 현황을 대조해보시면 확인가능 하십니다.',
      en: '➔ To be frank, there have occasionally been external attempts to resell unauthorized factory materials back to us. On the honor of PMS, we strictly refuse and never tolerate such actions. By cross-checking the delivery analysis reports we provide against your actual inbound/outbound inventory records, discrepancies can be pinpointed immediately.',
      vi: '➔ Thú thật, đôi khi có những đối tượng cố tình tuồn hàng ra ngoài rồi tìm cách bán lại cho chính PMS. Bằng danh dự của mình, PMS tuyệt đối không bao giờ tiếp tay cho hành vi này. Quý khách chỉ cần đối chiếu báo cáo phân tích xuất nhập khẩu của chúng tôi với sổ sách kho thực tế là sẽ nắm rõ ngay.',
      zh: '➔ 坦白地说，确实曾有个别人员企图将私自运出厂外的物料倒卖回给 PMS。PMS 以企业信誉担保，绝不容忍此等行径！只要将我们定期提供的交付分析报告与贵司内部出入库台账进行比对，即可一目了然。',
    },
    keyHighlight: {
      ko: '역매입 시도 즉시 차단 & 입출고 대조 보고서 지원',
      en: 'Zero tolerance for stolen buy-backs & clear inventory reconciliation',
      vi: 'Từ chối tuyệt đối hàng tuồn & hỗ trợ đối chiếu xuất nhập kho',
      zh: '坚决拒收流出赃物 & 详实进销存台账对账支持',
    },
  },
  {
    id: 7,
    category: 'accounting',
    question: {
      ko: '매월 외부 계산서를 사야되는 금액이 왜 이리 많지? 정말로 우리가 무자료로 구매한 물품이 이리 많은건가? 계산서 수수료는 이게 맞나?',
      en: 'Why are we spending so much money buying external invoices every month? Did we really buy so many items off-the-books? Are these invoice fee rates reasonable?',
      vi: 'Tại sao mỗi tháng công ty phải bỏ ra nhiều tiền để mua hóa đơn ngoài thế này? Liệu chúng tôi có thực sự mua nhiều hàng không có hóa đơn đến vậy không? Phí hóa đơn này có hợp lý không?',
      zh: '为什么每月还要花大笔额外费用去外部买票？我们真的有那么多无发票私下采购的物资吗？这种买票手续费到底正不正常？',
    },
    answer: {
      ko: '➔ PMS는 100% 계산서 발급하여 드립니다. 이러한 문제는 원천적으로 생기지 않습니다.',
      en: '➔ PMS issues 100% legitimate VAT (Red) invoices directly for all supplied items. This risk is eradicated at the root.',
      vi: '➔ PMS xuất hóa đơn VAT (Hóa đơn đỏ) hợp pháp 100% cho từng đơn hàng. Vấn đề mua hóa đơn ngoài sẽ được giải quyết triệt để từ gốc.',
      zh: '➔ PMS 100% 直开发票（正规增值税发票）。选择 PMS，此类合规隐患将彻底不复存在。',
    },
    keyHighlight: {
      ko: '100% 정식 세금계산서 직발행 (외부 영수증 매입 불필요)',
      en: '100% Official VAT Red Invoices issued directly',
      vi: 'Xuất hóa đơn VAT đỏ 100% hợp pháp',
      zh: '100% 直开正规增值税发票',
    },
  },
  {
    id: 8,
    category: 'accounting',
    question: {
      ko: '우리 회사는 EPE기업 인데 소모품 공급하는 작은 로컬 업체중에는 통관 못하는 회사가 왜이리 많지?',
      en: 'Our company is an EPE (Export Processing Enterprise). Why do so many small local consumable suppliers fail to process customs clearance?',
      vi: 'Công ty chúng tôi là doanh nghiệp EPE (chế xuất), tại sao rất nhiều nhà cung cấp nhỏ địa phương lại không thể làm thủ tục hải quan thông quan?',
      zh: '我们属于 EPE（出口加工型企业），为什么供应耗材的许多本地小商户根本不具备报关通关能力？',
    },
    answer: {
      ko: '➔ PMS는 이미 여러 EPE 회사와 거래하고 있습니다. 걱정하지 마세요.. ^^',
      en: '➔ PMS already trades seamlessly with multiple multinational EPE enterprises across Vietnam. Please don\'t worry! ^^',
      vi: '➔ PMS hiện đang là đối tác cung ứng thường xuyên của rất nhiều doanh nghiệp chế xuất EPE tại Việt Nam. Quý khách hoàn toàn an tâm nhé! ^^',
      zh: '➔ PMS 目前已常态化为多家大型 EPE 企业合规供货，通关流程极为熟稔，请完全放心！^^',
    },
    keyHighlight: {
      ko: '베트남 다수 EPE(수출가공기업) 정식 통관 거래 실적',
      en: 'Fully certified for EPE customs clearance & export-processing compliance',
      vi: 'Đầy đủ năng lực làm thủ tục hải quan xuất nhập cho doanh nghiệp EPE',
      zh: '具备成熟的 EPE 保税与海关通关实务经验',
    },
  },
  {
    id: 9,
    category: 'accounting',
    question: {
      ko: '아... 비싼 원부자재면 사람을 열명을 쓰더라도 다 챙겨볼텐데.. 그것도 아니고.. 금액도 합계로 보면 적지 않은데.. 종류만 몇백 몇천가지니 일일히 다 사람써서 확인할수도 없구... ㅠ.ㅠ',
      en: 'Ah... If it were expensive production raw materials, we\'d deploy ten staff to oversee them... But for consumables, the total sum is huge yet there are hundreds or thousands of miscellaneous SKUs, making it impossible to audit manually with staff... T_T',
      vi: 'Haizz... Nếu là nguyên vật liệu chính đắt tiền thì thuê thêm 10 người cũng đáng... Đằng này là vật tư tiêu hao, tổng tiền thì không hề nhỏ mà lại có tới hàng trăm, hàng ngàn loại lặt vặt, làm sao kiểm soát xuể... T_T',
      zh: '哎... 如果是昂贵的主要原辅料，派十个人全天盯防也划算... 偏偏耗材总额不小、品类却多达几百上千种，根本没办法专门招人逐一盯防核验... 唉 T_T',
    },
    answer: {
      ko: '➔ 저희가 대신 세밀하게 관리해드립니다. 위에 말씀드린 이러한 모든 약속들을 지키려면 저희는 무조건 세부적으로 관리할 수 밖에 없습니다. PMS는 한국의 ERP 시스템을 사용하여 100% 전산으로 관리하고 있습니다. 안심하세요.',
      en: '➔ We meticulously manage this for you. In order to honor all the promises stated above, detailed data control is our non-negotiable operational standard. PMS operates with Korean advanced ERP enterprise software, managing 100% of SKUs digitally. Rest assured.',
      vi: '➔ Hãy để PMS quản lý chi tiết thay cho quý khách. Để thực hiện trọn vẹn mọi cam kết trên, chúng tôi bắt buộc phải quản trị ở mức độ cực kỳ chi tiết. PMS ứng dụng hệ thống phần mềm ERP tiêu chuẩn Hàn Quốc và số hóa 100% quy trình. Quý khách hoàn toàn yên tâm.',
      zh: '➔ 请让我们替您进行精细化数字化管控。要切实履行上述所有承诺，PMS 必须严格执行细致入微的管控标准。PMS 引进韩国先进 ERP 系统，对每项出入库实行 100% 全面信息化电算管理。请您彻底省心！',
    },
    keyHighlight: {
      ko: '한국형 ERP 시스템 탑재 100% 전산화 정밀 관리',
      en: '100% Korean enterprise ERP computerized tracking',
      vi: 'Quản trị số hóa 100% bằng hệ thống ERP chuyên nghiệp Hàn Quốc',
      zh: '依托韩国企业级 ERP 系统实行 100% 数字化精细管控',
    },
  },
];

export const RFQ_EMPATHY_MESSAGE: Record<
  Language,
  {
    title: string;
    body1: string;
    body2: string;
    slogan: string;
  }
> = {
  ko: {
    title: '로컬 직원도 어차피 같이 일하는 한 식구입니다.',
    body1: '간혹 질나쁜 직원도 있지만 대부분 선량하고 충직한 직원들 입니다.',
    body2: '베트남에서 생활하면 어느 정도 극복해야되는 문제이긴 하지만, 같이 업무를 하면서 항상 의심의 눈초리로 직원을 바라보는것은 참 불행한 일인것 같습니다.',
    slogan: 'PMS가 도와드리겠습니다!',
  },
  en: {
    title: 'Local employees are part of our collective corporate family.',
    body1: 'While problematic individuals occasionally exist, the vast majority are honest, diligent, and loyal teammates.',
    body2: 'While adapting to local procurement cultures is an inevitable challenge in Vietnam, having to constantly look at your own staff with suspicion during daily work is truly unfortunate.',
    slogan: 'PMS will take this burden off your shoulders!',
  },
  vi: {
    title: 'Nhân viên bản địa dù sao cũng là những người anh em cùng một mái nhà.',
    body1: 'Dù đôi khi có những cá nhân chưa tốt, nhưng đại đa số đều là những người lao động hiền lành, trung thực và tận tụy.',
    body2: 'Dù môi trường kinh doanh tại Việt Nam có những thách thức cần vượt qua, nhưng việc ngày nào đi làm cũng phải nhìn đồng nghiệp với ánh mắt nghi kỵ thực sự là một điều đáng tiếc.',
    slogan: 'PMS sẽ đồng hành và san sẻ nỗi lo này cùng quý khách!',
  },
  zh: {
    title: '本地员工始终是与我们并肩奋斗的一家人。',
    body1: '虽偶有害群之马，但绝大多数本地员工都是勤勉善良、忠诚尽职的好伙伴。',
    body2: '在越南展业生活固然要克服种种现实磨合，但若在日常工作中始终用怀疑戒备的眼光去审视身边的员工，无疑是令人痛心的。',
    slogan: 'PMS 愿为您筑牢防线，化解忧虑！',
  },
};
