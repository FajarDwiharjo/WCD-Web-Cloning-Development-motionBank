import React from 'react';

const MotionFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: 'icon1', // Investment icon
      title: 'Mo Investasi? Bisa',
      description: 'Dengan Rp200 ribu, kamu sudah bisa berinvestasi.',
      cta: 'Buka Deposito sekarang mulai dari Rp 200 Ribu',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: 'icon2', // Payment icon
      title: 'Mo Bayar ini itu? Bisa',
      description: 'Akses Beragam pilihan merchant/Pembayaran,',
      cta: 'bikin kamu lebih sat set bayar dan top up ini itu',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: 'icon3', // Loan icon
      title: 'Mo Pinjaman? Bisa',
      description: 'Dapatkan solusi keuangan yang cepat dan',
      cta: 'tepat untuk kebutuhan kamu',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      id: 4,
      icon: 'icon4', // Stock icon
      title: 'Mo Buka Rekening Saham tanpa Ribet? Bisa',
      description: 'Download MotionBank, Layanan digital MNC Bank sekarang! Kamu sudah bisa langsung',
      cta: 'buka Rekening saham',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600'
    },
    {
      id: 5,
      icon: 'icon5', // Promo icon
      title: 'Mo Cuan? Bisa',
      description: 'Dapatkan beragam info promo-promo menarik,',
      cta: 'yang bikin dompet kamu selalu aman',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600'
    },
    {
      id: 6,
      icon: 'icon6', // Free fee icon
      title: 'Mo Bebas Biaya? Bisa',
      description: 'Buka Tabungan Motion Cuan sekarang!',
      cta: 'Dan dapatkan benefit untuk bebas biaya dalam bertransaksi',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">MOTIONBANK</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            Mo Apa Aja Bisa
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`${feature.color} p-6 text-center`}>
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">Icon</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-blue-600 font-semibold text-sm">
                  {feature.cta}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Siap untuk Memulai Perjalanan Finansial Anda?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Download MotionBank sekarang dan nikmati berbagai kemudahan layanan perbankan digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Download App
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Buka Rekening
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionFeatures;