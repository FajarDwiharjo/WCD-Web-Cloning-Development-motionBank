import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Produk & Layanan', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Tabungan', href: '/services/tabungan' },
        { name: 'Deposito', href: '/services/deposito' },
        { name: 'Kredit', href: '/services/kredit' },
        { name: 'Kartu Kredit', href: '/services/kartu-kredit' },
        { name: 'Investasi', href: '/services/investasi' },
        { name: 'Pembayaran', href: '/services/pembayaran' },
      ]
    },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Hubungi Kami', href: '/contact' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="MotionBank" className="h-8 w-auto" />
            <span className="text-xl font-bold text-motion-blue">MotionBank</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href) 
                        ? 'text-motion-blue border-b-2 border-motion-blue' 
                        : 'text-gray-700 hover:text-motion-blue'
                    }`}>
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-motion-gray hover:text-motion-blue transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href) 
                        ? 'text-motion-blue border-b-2 border-motion-blue' 
                        : 'text-gray-700 hover:text-motion-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-motion-blue hover:text-motion-darkblue font-medium transition-colors">
              Masuk
            </button>
            <button className="btn-primary">
              Daftar Sekarang
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.href) 
                        ? 'text-motion-blue bg-motion-gray' 
                        : 'text-gray-700 hover:text-motion-blue hover:bg-motion-gray'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-motion-blue hover:bg-motion-gray transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <button className="w-full text-left px-3 py-2 text-base font-medium text-motion-blue hover:bg-motion-gray transition-colors">
                  Masuk
                </button>
                <button className="w-full btn-primary">
                  Daftar Sekarang
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header