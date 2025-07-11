import React from 'react';
import { Smartphone, Shield, Zap, CreditCard, TrendingUp, Users } from 'lucide-react';

const MobileApp: React.FC = () => {
  const appFeatures = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Mobile Banking',
      description: 'Akses semua layanan perbankan dalam genggaman'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Investasi Digital',
      description: 'Mulai investasi dengan modal minimal Rp200 ribu'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Keamanan Terjamin',
      description: 'Dilindungi teknologi enkripsi tingkat bank'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Transaksi Cepat',
      description: 'Proses transaksi real-time 24/7'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Service',
      description: 'Dukungan pelanggan siap membantu kapan saja'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'User Friendly',
      description: 'Interface yang mudah dipahami dan digunakan'
    }
  ];

  const downloadStats = [
    { number: '1M+', label: 'Downloads' },
    { number: '500K+', label: 'Active Users' },
    { number: '4.5★', label: 'Rating' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Download <span className="text-blue-600">MotionBank</span> App
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aplikasi mobile banking terdepan dengan fitur lengkap untuk semua kebutuhan keuangan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">MotionBank</h3>
                    <p className="text-sm text-gray-600">Digital Banking by MNC Bank</p>
                  </div>
                </div>
                
                {/* Mock App Interface */}
                <div className="space-y-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600">Transfer</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600">Pembayaran</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600">Investasi</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600">Promo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <div className="mr-3">
                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-black text-xs font-bold">A</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-xs">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <div className="mr-3">
                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-black text-xs font-bold">P</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-xs">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t">
              {downloadStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;