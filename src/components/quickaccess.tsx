import React from 'react';
import { 
  CreditCard, 
  DollarSign, 
  PiggyBank, 
  Smartphone, 
  Users, 
  Calculator,
  FileText,
  MapPin
} from 'lucide-react';

const QuickAccess = () => {
  const quickLinks = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Buka Rekening',
      description: 'Buka rekening online dalam hitungan menit',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Kredit',
      description: 'Solusi kredit untuk berbagai kebutuhan',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: 'Deposito',
      description: 'Investasi aman dengan bunga menguntungkan',
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Banking',
      description: 'Akses layanan perbankan 24/7',
      bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Customer Service',
      description: 'Hubungi kami untuk bantuan',
      bgColor: 'bg-gradient-to-br from-pink-500 to-pink-600'
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: 'Kalkulator',
      description: 'Hitung cicilan dan bunga',
      bgColor: 'bg-gradient-to-br from-teal-500 to-teal-600'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Syarat & Ketentuan',
      description: 'Baca syarat dan ketentuan produk',
      bgColor: 'bg-gradient-to-br from-indigo-500 to-indigo-600'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Lokasi Cabang',
      description: 'Temukan cabang terdekat',
      bgColor: 'bg-gradient-to-br from-red-500 to-red-600'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Akses Cepat
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Layanan perbankan yang Anda butuhkan, tersedia dalam satu klik
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className={`${link.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;