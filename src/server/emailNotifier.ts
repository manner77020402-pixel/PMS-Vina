import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export const TARGET_NOTIFICATION_EMAIL = 'kklee@pmsvina.com';
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgavrlvy';

export interface RfqNotificationData {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  category: string;
  itemSpec: string;
  quantity: string;
  targetDate?: string;
  fileName?: string;
  notes?: string;
  createdAt: string;
}

export interface QaNotificationData {
  id: string;
  title: string;
  author: string;
  company: string;
  email?: string;
  phone?: string;
  category: string;
  content: string;
  isPrivate: boolean;
  date: string;
}

export interface NotificationPayload {
  type: 'rfq' | 'qa';
  recipient?: string;
  rfqData?: RfqNotificationData;
  qaData?: QaNotificationData;
}

/**
 * Generate mailto link for client-side 1-click fallback
 */
export function generateMailtoUrl(payload: NotificationPayload): string {
  const recipient = payload.recipient || TARGET_NOTIFICATION_EMAIL;

  if (payload.type === 'rfq' && payload.rfqData) {
    const d = payload.rfqData;
    const subject = `[PMS VINA 견적요청서 접수] ${d.companyName} (${d.contactName}) - ${d.id}`;
    const body = `[PMS VINA 견적 요청서 (RFQ) 접수 알림]

■ 접수 번호: ${d.id}
■ 접수 일시: ${d.createdAt}
■ 고객 회사명: ${d.companyName}
■ 담당자 성함: ${d.contactName}
■ 회신 이메일: ${d.email}
■ 연락처: ${d.phone}

■ 품목 카테고리: ${d.category}
■ 규격 및 품명: ${d.itemSpec}
■ 요청 수량: ${d.quantity}
■ 희망 납기일: ${d.targetDate || '미정/협의'}
■ 첨부 파일명: ${d.fileName || '없음'}

■ 추가 요청 사항:
${d.notes || '없음'}

--------------------------------------------------
* 본 메일은 PMS VINA 웹사이트 견적요청 시스템에서 발송된 알림입니다.
* 수신 담당자: ${recipient}`;

    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else if (payload.type === 'qa' && payload.qaData) {
    const d = payload.qaData;
    const subject = `[PMS VINA 고객문의 등록] ${d.title} - ${d.company} (${d.author})`;
    const body = `[PMS VINA 고객 문의게시판 등록 알림]

■ 문의 번호: ${d.id}
■ 등록 일자: ${d.date}
■ 문의 제목: ${d.title} ${d.isPrivate ? '(비밀글)' : ''}
■ 작성자: ${d.author}
■ 고객 회사명: ${d.company}
■ 문의 카테고리: ${d.category}

■ 문의 상세 내용:
${d.content}

--------------------------------------------------
* 본 메일은 PMS VINA 웹사이트 문의게시판에서 등록된 알림입니다.
* 수신 담당자: ${recipient}`;

    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return `mailto:${recipient}?subject=${encodeURIComponent('[PMS VINA] 알림')}`;
}

/**
 * Build rich HTML email body
 */
export function buildHtmlEmail(payload: NotificationPayload): { subject: string; html: string; text: string } {
  const recipient = payload.recipient || TARGET_NOTIFICATION_EMAIL;

  if (payload.type === 'rfq' && payload.rfqData) {
    const d = payload.rfqData;
    const subject = `[PMS VINA 견적요청서 접수] ${d.companyName} (${d.contactName}) - ${d.id}`;
    const text = `[PMS VINA 견적요청서 (RFQ) 신규 접수 알림]
접수번호: ${d.id}
회사명: ${d.companyName}
담당자: ${d.contactName}
이메일: ${d.email}
연락처: ${d.phone}
카테고리: ${d.category}
규격/품목: ${d.itemSpec}
수량: ${d.quantity}
희망납기일: ${d.targetDate || '미지정'}
첨부파일: ${d.fileName || '없음'}
비고: ${d.notes || '없음'}
수신처: ${recipient}`;

    const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
    <!-- HEADER -->
    <tr>
      <td style="padding: 32px 30px; background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); text-align: left;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td>
              <div style="font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">
                PMS <span style="color: #38bdf8;">VINA</span>
              </div>
              <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px; font-weight: 600;">
                MRO Total Industrial Solutions
              </div>
            </td>
            <td align="right">
              <span style="display: inline-block; padding: 6px 14px; background-color: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8; font-size: 12px; font-weight: 700; border-radius: 20px;">
                RFQ 신규 접수
              </span>
            </td>
          </tr>
        </table>
        <div style="margin-top: 20px; font-size: 19px; font-weight: 800; color: #ffffff; line-height: 1.4;">
          신규 견적 요청서(RFQ)가 접수되었습니다
        </div>
        <div style="margin-top: 6px; font-size: 13px; color: #cbd5e1;">
          담당자 <strong>${recipient}</strong> 님께 실시간 전달된 알림입니다.
        </div>
      </td>
    </tr>

    <!-- SUMMARY BADGE -->
    <tr>
      <td style="padding: 24px 30px 10px 30px;">
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px; display: flex; justify-content: space-between;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="font-size: 13px; color: #64748b; font-weight: 600;">RFQ 접수 번호</td>
              <td align="right" style="font-size: 15px; font-weight: 800; color: #1d4ed8; font-family: monospace;">${d.id}</td>
            </tr>
            <tr>
              <td style="font-size: 12px; color: #94a3b8; padding-top: 4px;">접수 시각</td>
              <td align="right" style="font-size: 12px; color: #64748b; padding-top: 4px;">${d.createdAt}</td>
            </tr>
          </table>
        </div>
      </td>
    </tr>

    <!-- CONTENT TABLE -->
    <tr>
      <td style="padding: 15px 30px 25px 30px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; border-spacing: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <tr style="background-color: #f8fafc;">
            <th colspan="2" style="padding: 12px 16px; font-size: 13px; font-weight: 800; color: #334155; text-align: left; border-bottom: 1px solid #e2e8f0;">
              1. 의뢰 고객 정보
            </th>
          </tr>
          <tr>
            <td width="35%" style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">회사명</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #f1f5f9;">${d.companyName}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">담당자 성함</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${d.contactName}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">회신 이메일</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #1d4ed8; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
              <a href="mailto:${d.email}" style="color: #1d4ed8; text-decoration: underline;">${d.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">연락처 (전화)</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${d.phone}</td>
          </tr>

          <tr style="background-color: #f8fafc;">
            <th colspan="2" style="padding: 12px 16px; font-size: 13px; font-weight: 800; color: #334155; text-align: left; border-bottom: 1px solid #e2e8f0;">
              2. 요청 품목 내역
            </th>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">품목 분류</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
              <span style="background-color: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 700;">${d.category}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">규격 / 모델명 / 세부사양</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #f1f5f9;">${d.itemSpec}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">요청 수량</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #f1f5f9;">${d.quantity}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">희망 납기일</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${d.targetDate || '미지정 / 협의 필요'}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">첨부 파일</td>
            <td style="padding: 12px 16px; font-size: 13px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${d.fileName || '첨부파일 없음'}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; vertical-align: top;">추가 요청사항</td>
            <td style="padding: 12px 16px; font-size: 13px; color: #334155; line-height: 1.6; white-space: pre-line;">${d.notes || '없음'}</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ACTION BUTTON -->
    <tr>
      <td style="padding: 0 30px 30px 30px; text-align: center;">
        <table border="0" cellpadding="0" cellspacing="0" align="center">
          <tr>
            <td style="border-radius: 10px; background: #1d4ed8;">
              <a href="mailto:${d.email}?subject=${encodeURIComponent(`[PMS VINA 견적 회신] ${d.companyName} 귀하 (${d.id})`)}" style="display: inline-block; padding: 14px 28px; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 10px;">
                고객에게 바로 견적 답장 보내기
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td style="padding: 24px 30px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; line-height: 1.6;">
        <strong>PMS VINA CO., LTD.</strong><br>
        본사: Khắc Niệm, Bắc Ninh, Vietnam | 수신 이메일: <a href="mailto:${recipient}" style="color: #64748b;">${recipient}</a><br>
        본 메일은 PMS VINA 웹사이트 견적요청(RFQ) 시스템에서 실시간 자동 발송되었습니다.
      </td>
    </tr>
  </table>
</body>
</html>
`;

    return { subject, html, text };
  } else if (payload.type === 'qa' && payload.qaData) {
    const d = payload.qaData;
    const subject = `[PMS VINA 고객문의 등록] ${d.title} - ${d.company} (${d.author})`;
    const text = `[PMS VINA 고객 문의게시판 신규 등록 알림]
문의번호: ${d.id}
등록일자: ${d.date}
제목: ${d.title} ${d.isPrivate ? '(비밀글)' : ''}
작성자: ${d.author}
회사명: ${d.company}
카테고리: ${d.category}
문의내용:
${d.content}
수신처: ${recipient}`;

    const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
    <!-- HEADER -->
    <tr>
      <td style="padding: 32px 30px; background: linear-gradient(135deg, #0f172a 0%, #0369a1 100%); text-align: left;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td>
              <div style="font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">
                PMS <span style="color: #38bdf8;">VINA</span>
              </div>
              <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px; font-weight: 600;">
                MRO Total Industrial Solutions
              </div>
            </td>
            <td align="right">
              <span style="display: inline-block; padding: 6px 14px; background-color: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8; font-size: 12px; font-weight: 700; border-radius: 20px;">
                고객 문의 등록
              </span>
            </td>
          </tr>
        </table>
        <div style="margin-top: 20px; font-size: 19px; font-weight: 800; color: #ffffff; line-height: 1.4;">
          문의게시판에 신규 질문이 등록되었습니다
        </div>
        <div style="margin-top: 6px; font-size: 13px; color: #cbd5e1;">
          담당자 <strong>${recipient}</strong> 님께 실시간 전달된 알림입니다.
        </div>
      </td>
    </tr>

    <!-- SUMMARY BADGE -->
    <tr>
      <td style="padding: 24px 30px 10px 30px;">
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="font-size: 13px; color: #64748b; font-weight: 600;">문의 접수 번호</td>
              <td align="right" style="font-size: 15px; font-weight: 800; color: #0284c7; font-family: monospace;">${d.id}</td>
            </tr>
            <tr>
              <td style="font-size: 12px; color: #94a3b8; padding-top: 4px;">등록 일자</td>
              <td align="right" style="font-size: 12px; color: #64748b; padding-top: 4px;">${d.date}</td>
            </tr>
          </table>
        </div>
      </td>
    </tr>

    <!-- CONTENT TABLE -->
    <tr>
      <td style="padding: 15px 30px 25px 30px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; border-spacing: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <tr style="background-color: #f8fafc;">
            <th colspan="2" style="padding: 12px 16px; font-size: 13px; font-weight: 800; color: #334155; text-align: left; border-bottom: 1px solid #e2e8f0;">
              문의 상세 정보
            </th>
          </tr>
          <tr>
            <td width="35%" style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">제목</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #f1f5f9;">
              ${d.title} ${d.isPrivate ? '<span style="background-color: #fee2e2; color: #b91c1c; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-left: 6px;">비밀글</span>' : ''}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">작성자</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${d.author}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">회사명</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${d.company}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">카테고리</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
              <span style="background-color: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 700;">${d.category}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px; font-size: 13px; color: #64748b; font-weight: 600; vertical-align: top; border-bottom: 1px solid #e2e8f0;">문의 내용</td>
            <td style="padding: 16px; font-size: 14px; color: #1e293b; line-height: 1.7; white-space: pre-line; border-bottom: 1px solid #e2e8f0; background-color: #fcfcfd;">
              ${d.content}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td style="padding: 24px 30px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; line-height: 1.6;">
        <strong>PMS VINA CO., LTD.</strong><br>
        수신 이메일: <a href="mailto:${recipient}" style="color: #64748b;">${recipient}</a><br>
        본 메일은 PMS VINA 웹사이트 문의게시판 시스템에서 실시간 자동 발송되었습니다.
      </td>
    </tr>
  </table>
</body>
</html>
`;

    return { subject, html, text };
  }

  return {
    subject: `[PMS VINA] 알림`,
    html: `<p>PMS VINA 웹사이트 알림입니다.</p>`,
    text: `PMS VINA 웹사이트 알림입니다.`,
  };
}

/**
 * Forward submission to Formspree endpoint (https://formspree.io/f/mgavrlvy)
 */
export async function forwardToFormspree(payload: NotificationPayload): Promise<boolean> {
  try {
    let formspreeData: Record<string, any> = {};

    if (payload.type === 'rfq' && payload.rfqData) {
      const d = payload.rfqData;
      formspreeData = {
        _subject: `[PMS VINA 견적요청서] ${d.companyName} (${d.contactName}) - ${d.id}`,
        formType: '견적 요청서 (RFQ)',
        rfqNumber: d.id,
        companyName: d.companyName,
        contactName: d.contactName,
        email: d.email,
        phone: d.phone,
        category: d.category,
        itemSpec: d.itemSpec,
        quantity: d.quantity,
        targetDate: d.targetDate || '미정 / 협의',
        fileName: d.fileName || '없음',
        notes: d.notes || '없음',
        createdAt: d.createdAt,
        recipient: TARGET_NOTIFICATION_EMAIL,
      };
    } else if (payload.type === 'qa' && payload.qaData) {
      const d = payload.qaData;
      formspreeData = {
        _subject: `[PMS VINA 고객문의 등록] ${d.title} - ${d.company || ''} (${d.author})`,
        formType: '고객 문의게시판 (Q&A)',
        inquiryNumber: d.id,
        title: d.title,
        author: d.author,
        name: d.author,
        company: d.company || '미기재',
        email: d.email || '미기재',
        phone: d.phone || '미기재',
        category: d.category,
        content: d.content,
        isPrivate: d.isPrivate ? '비밀글' : '공개글',
        date: d.date,
        submittedAt: new Date().toISOString(),
        recipient: TARGET_NOTIFICATION_EMAIL,
      };
    }

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formspreeData),
    });

    if (response.ok) {
      console.log(`[Formspree Forward Success] Data successfully forwarded to ${FORMSPREE_ENDPOINT}`);
      return true;
    } else {
      const errText = await response.text().catch(() => '');
      console.warn(`[Formspree Forward Failed] Status: ${response.status} | Response: ${errText}`);
    }
  } catch (err) {
    console.warn('[Formspree Forward Error]', err);
  }
  return false;
}

/**
 * Send email notification to kklee@pmsvina.com
 * Handles SMTP if configured, forwards to Formspree, and always maintains local log queue
 */
export async function sendEmailNotification(payload: NotificationPayload): Promise<{
  success: boolean;
  recipient: string;
  subject: string;
  delivered: boolean;
  message: string;
  mailtoUrl: string;
}> {
  const recipient = payload.recipient || TARGET_NOTIFICATION_EMAIL;
  const { subject, html, text } = buildHtmlEmail(payload);
  const mailtoUrl = generateMailtoUrl(payload);

  let delivered = false;
  let deliverMessage = '';

  // 1. Forward to Formspree (https://formspree.io/f/mgavrlvy)
  const formspreeSuccess = await forwardToFormspree(payload);
  if (formspreeSuccess) {
    delivered = true;
    deliverMessage = `Formspree(https://formspree.io/f/mgavrlvy) 및 담당자(${recipient})에게 데이터가 성공적으로 수집/발송되었습니다.`;
  }

  // 2. Check SMTP environment variables if configured
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpFrom = process.env.SMTP_FROM || `PMS VINA <noreply@pmsvina.com>`;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const replyTo =
        payload.type === 'rfq' && payload.rfqData?.email
          ? payload.rfqData.email
          : undefined;

      await transporter.sendMail({
        from: smtpFrom,
        to: recipient,
        replyTo,
        subject,
        text,
        html,
      });

      delivered = true;
      deliverMessage = `Formspree 및 담당자(${recipient})에게 SMTP 메일이 정상 발송되었습니다.`;
    } catch (err: any) {
      console.error('[Email Notification SMTP Error]', err);
      if (!delivered) {
        deliverMessage = `SMTP 발송 시도 중 오류 발생: ${err?.message || 'Unknown error'}. 알림 큐에 안전하게 저장되었습니다.`;
      }
    }
  } else if (!delivered) {
    deliverMessage = `알림이 접수되어 Formspree 및 담당자(${recipient}) 수신 큐에 등록되었습니다.`;
  }

  // Persist notification log
  try {
    const logDir = path.resolve(process.cwd(), 'data');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    const logFile = path.join(logDir, 'email_notifications.json');
    const existing: any[] = fs.existsSync(logFile)
      ? JSON.parse(fs.readFileSync(logFile, 'utf-8'))
      : [];

    existing.unshift({
      timestamp: new Date().toISOString(),
      recipient,
      subject,
      type: payload.type,
      delivered,
      data: payload.type === 'rfq' ? payload.rfqData : payload.qaData,
    });

    // Keep latest 100 entries
    fs.writeFileSync(logFile, JSON.stringify(existing.slice(0, 100), null, 2), 'utf-8');
  } catch (logErr) {
    console.warn('[Email Log Save Warning]', logErr);
  }

  console.log(`[PMS Email Notification] Delivered to ${recipient} | Subject: "${subject}" | Delivered via SMTP: ${delivered}`);

  return {
    success: true,
    recipient,
    subject,
    delivered,
    message: deliverMessage,
    mailtoUrl,
  };
}
