import { NavigationItem, Service, ContactInfo, SocialMedia } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { 
    title: 'Products', 
    href: '/products',
    children: [
      { title: 'Tabungan', href: '/products/tabungan' },
      { title: 'Deposito', href: '/products/deposito' },
      { title: 'Kredit', href: '/products/kredit' },
      { title: 'Investasi', href: '/products/investasi' }
    ]
  },
  { title: 'Promo', href: '/promo' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
  { title: 'Career', href: '/career' }
];

export const MAIN_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Mo Investasi? Bisa',
    description: 'Dengan Rp200 ribu, kamu sudah bisa berinvestasi. Buka Deposito sekarang mulai dari Rp 200 Ribu',
    icon: 'Icon_1.png',
    link: '/products/deposito'
  },
  {
    id: '2',
    title: 'Mo Bayar ini itu? Bisa',
    description: 'Akses Beragam pilihan merchant/Pembayaran, bikin kamu lebih sat set bayar dan top up ini itu',
    icon: 'Icon_2.png',
    link: '/products/payment'
  },
  {
    id: '3',
    title: 'Mo Pinjaman? Bisa',
    description: 'Dapatkan solusi keuangan yang cepat dan tepat untuk kebutuhan kamu',
    icon: 'Icon_3.png',
    link: '/products/kredit'
  },
  {
    id: '4',
    title: 'Mo Cuan? Bisa',
    description: 'Dapatkan beragam info promo-promo menarik, yang bikin dompet kamu selalu aman',
    icon: 'Icon_5.png',
    link: '/promo'
  },
  {
    id: '5',
    title: 'Mo Bebas Biaya? Bisa',
    description: 'Buka Tabungan Motion Cuan sekarang! Dan dapatkan benefit untuk bebas biaya dalam bertransaksi',
    icon: 'Icon_6.png',
    link: '/products/tabungan'
  },
  {
    id: '6',
    title: 'Mo Buka Rekening Saham tanpa Ribet? Bisa',
    description: 'Download MotionBank, Layanan digital MNC Bank sekarang! Kamu sudah bisa langsung buka Rekening saham',
    icon: 'Icon_4.png',
    link: '/products/investasi'
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: '1500188',
  email: 'cs@motionbanking.id',
  whatsapp: '08888888888',
  address: 'MNC Tower, 16th Floor, Jl. Kebon Sirih No.17-19, Jakarta 10340'
};

export const SOCIAL_MEDIA: SocialMedia[] = [
  { platform: 'Facebook', url: 'https://facebook.com/motionbankid', icon: 'facebook' },
  { platform: 'Instagram', url: 'https://instagram.com/motionbankid', icon: 'instagram' },
  { platform: 'Twitter', url: 'https://twitter.com/motionbankid', icon: 'twitter' },
  { platform: 'YouTube', url: 'https://youtube.com/motionbankid', icon: 'youtube' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/motionbank', icon: 'linkedin' }
];

export const COMPANY_INFO = {
  name: 'MotionBank',
  fullName: 'PT Bank MNC Internasional Tbk',
  tagline: 'Mo Apa Aja Bisa',
  description: 'MotionBank adalah layanan digital banking dari MNC Bank yang memberikan kemudahan akses berbagai produk dan layanan perbankan',
  established: '2019',
  headquarters: 'Jakarta, Indonesia'
};

export const QUICK_LINKS = [
  { title: 'Download App', href: '/download' },
  { title: 'Internet Banking', href: '/internet-banking' },
  { title: 'ATM Locator', href: '/atm-locator' },
  { title: 'Exchange Rate', href: '/exchange-rate' },
  { title: 'Help Center', href: '/help' },
  { title: 'Terms & Conditions', href: '/terms' },
  { title: 'Privacy Policy', href: '/privacy' }
];

export const PRODUCT_CATEGORIES = [
  { id: 'tabungan', name: 'Tabungan', icon: 'piggy-bank' },
  { id: 'deposito', name: 'Deposito', icon: 'trending-up' },
  { id: 'kredit', name: 'Kredit', icon: 'credit-card' },
  { id: 'investasi', name: 'Investasi', icon: 'bar-chart' }
];

export const COLORS = {
  primary: '#0052CC',
  secondary: '#FF6B35',
  accent: '#00B4D8',
  success: '#28A745',
  warning: '#FFC107',
  error: '#DC3545',
  dark: '#1F2937',
  light: '#F8F9FA'
};

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px'
};
