export type Language = 'ko' | 'en' | 'vi' | 'zh';

export interface ProductCategory {
  id: string;
  categoryKey: string;
  icon: string;
  badge: Record<Language, string>;
  title: Record<Language, string>;
  description: Record<Language, string>;
  items: Record<Language, string[]>;
  image?: string;
  subItemDetails?: Array<{
    id: string;
    image: string;
    name: Record<Language, string>;
    desc: Record<Language, string>;
  }>;
}

export interface RFQSubmission {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  category: string;
  itemSpec: string;
  quantity: string;
  targetDate: string;
  notes: string;
  fileName?: string;
  createdAt: string;
}

export interface QAItem {
  id: string;
  title: string;
  category: string;
  author: string;
  company: string;
  email?: string;
  phone?: string;
  date: string;
  isPrivate: boolean;
  status: 'answered' | 'pending';
  content: string;
  answer?: string;
  answerDate?: string;
}
