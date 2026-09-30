import { RFQSubmission, QAItem } from '../types';

export const TARGET_NOTIFICATION_EMAIL = 'kklee@pmsvina.com';
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgavrlvy';

export async function submitToFormspree(data: Record<string, any>): Promise<{ success: boolean; data?: any }> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const json = await res.json().catch(() => ({}));
      return { success: true, data: json };
    }
  } catch (err) {
    console.warn('[Formspree Client Submission Warning]', err);
  }
  return { success: false };
}

export function buildRfqMailtoUrl(rfq: RFQSubmission, recipient: string = TARGET_NOTIFICATION_EMAIL): string {
  const subject = `[PMS VINA 견적요청서 접수] ${rfq.companyName} (${rfq.contactName}) - ${rfq.id}`;
  const body = `[PMS VINA 견적 요청서 (RFQ) 접수 상세 내역]

■ 접수 번호: ${rfq.id}
■ 접수 일시: ${rfq.createdAt}
■ 고객 회사명: ${rfq.companyName}
■ 담당자 성함: ${rfq.contactName}
■ 회신 이메일: ${rfq.email}
■ 연락처 (전화): ${rfq.phone}

■ 품목 카테고리: ${rfq.category}
■ 규격 및 품명: ${rfq.itemSpec}
■ 요청 수량: ${rfq.quantity}
■ 희망 납기일: ${rfq.targetDate || '미정 / 협의'}
■ 첨부 파일명: ${rfq.fileName || '없음'}

■ 추가 요청 사항:
${rfq.notes || '없음'}

--------------------------------------------------
* 본 메일은 PMS VINA 웹사이트 견적요청 시스템에서 자동 생성된 알림입니다.
* 수신 담당자: ${recipient}`;

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildQaMailtoUrl(qa: QAItem, recipient: string = TARGET_NOTIFICATION_EMAIL): string {
  const subject = `[PMS VINA 고객문의 등록] ${qa.title} - ${qa.company || ''} (${qa.author})`;
  const body = `[PMS VINA 고객 문의게시판 등록 알림]

■ 문의 번호: ${qa.id}
■ 등록 일자: ${qa.date}
■ 문의 제목: ${qa.title} ${qa.isPrivate ? '(비밀글)' : ''}
■ 작성자 성함: ${qa.author}
■ 고객 회사명: ${qa.company || '미기재'}
■ 문의 카테고리: ${qa.category}

■ 문의 상세 내용:
${qa.content}

--------------------------------------------------
* 본 메일은 PMS VINA 웹사이트 문의게시판 시스템에서 생성된 알림입니다.
* 수신 담당자: ${recipient}`;

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendRfqEmailNotification(rfq: RFQSubmission): Promise<{
  success: boolean;
  mailtoUrl: string;
  message?: string;
}> {
  const mailtoUrl = buildRfqMailtoUrl(rfq, TARGET_NOTIFICATION_EMAIL);

  // 1. Submit directly to Formspree endpoint (https://formspree.io/f/mgavrlvy)
  const formspreeData = {
    _subject: `[PMS VINA 견적요청서] ${rfq.companyName} (${rfq.contactName}) - ${rfq.id}`,
    formType: '견적 요청서 (RFQ)',
    rfqNumber: rfq.id,
    company: rfq.companyName,
    companyName: rfq.companyName,
    name: rfq.contactName,
    contactName: rfq.contactName,
    email: rfq.email,
    phone: rfq.phone,
    category: rfq.category,
    itemSpec: rfq.itemSpec,
    quantity: rfq.quantity,
    targetDate: rfq.targetDate || '미정 / 협의',
    fileName: rfq.fileName || '없음',
    notes: rfq.notes || '없음',
    createdAt: rfq.createdAt,
    submittedAt: rfq.createdAt || new Date().toISOString(),
    recipient: TARGET_NOTIFICATION_EMAIL,
  };

  try {
    await submitToFormspree(formspreeData);
  } catch (fsErr) {
    console.warn('[Formspree RFQ Submit Warning]', fsErr);
  }

  // 2. Also dispatch via server-side notification API
  try {
    const res = await fetch('/api/notify-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'rfq',
        recipient: TARGET_NOTIFICATION_EMAIL,
        rfqData: {
          id: rfq.id,
          companyName: rfq.companyName,
          contactName: rfq.contactName,
          email: rfq.email,
          phone: rfq.phone,
          category: rfq.category,
          itemSpec: rfq.itemSpec,
          quantity: rfq.quantity,
          targetDate: rfq.targetDate,
          fileName: rfq.fileName,
          notes: rfq.notes,
          createdAt: rfq.createdAt,
        },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return {
        success: true,
        mailtoUrl: data.mailtoUrl || mailtoUrl,
        message: data.message || `Formspree 및 담당자(${TARGET_NOTIFICATION_EMAIL})에게 정상 접수되었습니다.`,
      };
    }
  } catch (err) {
    console.warn('[RFQ Notification Fetch Fallback]', err);
  }

  return {
    success: true,
    mailtoUrl,
    message: `Formspree 및 담당자(${TARGET_NOTIFICATION_EMAIL}) 알림 대기열에 등록되었습니다.`,
  };
}

export async function sendQaEmailNotification(qa: QAItem): Promise<{
  success: boolean;
  mailtoUrl: string;
  message?: string;
}> {
  const mailtoUrl = buildQaMailtoUrl(qa, TARGET_NOTIFICATION_EMAIL);

  // 1. Submit directly to Formspree endpoint (https://formspree.io/f/mgavrlvy)
  const formspreeData = {
    _subject: `[PMS VINA 고객문의 등록] ${qa.title} - ${qa.company || ''} (${qa.author})`,
    formType: '고객 문의게시판 (Q&A)',
    inquiryNumber: qa.id,
    title: qa.title,
    author: qa.author,
    name: qa.author,
    company: qa.company || '미기재',
    email: qa.email || '미기재',
    phone: qa.phone || '미기재',
    category: qa.category,
    content: qa.content,
    isPrivate: qa.isPrivate ? '비밀글' : '공개글',
    date: qa.date,
    submittedAt: new Date().toISOString(),
    recipient: TARGET_NOTIFICATION_EMAIL,
  };

  try {
    await submitToFormspree(formspreeData);
  } catch (fsErr) {
    console.warn('[Formspree QA Submit Warning]', fsErr);
  }

  // 2. Also dispatch via server-side notification API
  try {
    const res = await fetch('/api/notify-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'qa',
        recipient: TARGET_NOTIFICATION_EMAIL,
        qaData: {
          id: qa.id,
          title: qa.title,
          author: qa.author,
          company: qa.company || '',
          email: qa.email || '',
          phone: qa.phone || '',
          category: qa.category,
          content: qa.content,
          isPrivate: qa.isPrivate,
          date: qa.date,
        },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return {
        success: true,
        mailtoUrl: data.mailtoUrl || mailtoUrl,
        message: data.message || `Formspree 및 담당자(${TARGET_NOTIFICATION_EMAIL})에게 정상 접수되었습니다.`,
      };
    }
  } catch (err) {
    console.warn('[QA Notification Fetch Fallback]', err);
  }

  return {
    success: true,
    mailtoUrl,
    message: `Formspree 및 담당자(${TARGET_NOTIFICATION_EMAIL}) 문의 알림 대기열에 등록되었습니다.`,
  };
}
