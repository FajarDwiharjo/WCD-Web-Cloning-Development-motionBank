export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface PromoSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  ctaText: string;
}

export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

export interface BankProduct {
  id: string;
  name: string;
  type: 'tabungan' | 'deposito' | 'kredit' | 'investasi';
  description: string;
  features: string[];
  minAmount?: number;
  interestRate?: number;
  benefits: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: SocialMedia[];
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  publishedDate: string;
  category: string;
  image: string;
  author: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Award {
  id: string;
  title: string;
  year: number;
  description: string;
  image: string;
}

export interface Partnership {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
}
