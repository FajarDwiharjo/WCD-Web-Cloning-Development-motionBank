import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    produk: [
      { name: 'Tabungan Motion Cuan', href: '/services/tabungan' },
      { name: 'Deposito', href: '/services/deposito' },
      { name: 'Kredit', href: '/services/kredit' },
      { name: 'Kartu Kredit', href: '/services/kartu-kredit' },
      { name: 'Investasi', href: '/services/investasi' },
    ],
    layanan: [
      { name: 'Mobile Banking', href: '/services/mobile-banking' },
      { name: 'Internet Banking', href: '/services/internet-banking' },
      { name: 'Pembayaran', href: '/services/pembayaran' },
      { name: 'Top Up', href: '/services/top-up' },
      { name: 'Transfer', href: '/services/transfer' },
    ],
    bantuan: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Hubungi Kami', href: '/contact' },
      { name: 'Lokasi Cabang', href: '/locations' },
      { name: 'Syarat & Ketentuan', href: '/terms' },
      { name: 'Kebijakan Privasi', href: '/privacy' },
    ],
    tentang: [
      { name: 'Tentang MNC Bank', href: '/about' },
      { name: 'Karir', href: '/careers' },
      { name: 'Berita', href: '/news' },
      { name: 'Investor Relations', href: '/investor' },
      { name: 'Sustainability', href: '/sustainability' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/motionbankid' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/motionbankid' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/motionbankingid' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/motionbank' },
  ]

  return (
    <footer className="bg-motion-darkblue text-white">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="MotionBank" className="h-8 w-auto filter invert" />
              <span className="text-xl font-bold">MotionBank</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              MotionBank adalah layanan digital banking dari MNC Bank yang memberikan kemudahan 
              dan kenyamanan untuk semua kebutuhan finansial Anda. Mo Apa Aja Bisa!
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-motion-orange" />
                <span className="text-sm">1500-188</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-motion-orange" />
                <span className="text-sm">cs@motionbanking.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-motion-orange" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-motion-blue hover:bg-motion-orange rounded-lg transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Produk */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produk</h3>
            <ul className="space-y-2">
              {footerLinks.produk.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-motion-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-motion-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan & Tentang */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.bantuan.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-motion-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Tentang</h3>
            <ul className="space-y-2">
              {footerLinks.tentang.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-motion-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} PT Bank MNC Internasional Tbk. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-motion-orange text-sm transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-motion-orange text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/security" className="text-gray-400 hover:text-motion-orange text-sm transition-colors">
                Keamanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer