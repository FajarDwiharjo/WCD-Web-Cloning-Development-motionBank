import React from 'react';
import { Gift, Clock, Users, TrendingUp } from 'lucide-react';

const PromoSection: React.FC = () => {
  const promos = [
    {
      id: 1,
      title: 'Tabungan Dahsyat Berhadiah',
      description: 'Menangkan hadiah mobil dan jutaan rupiah lainnya',
      badge: 'Hot',
      image: 'promo1',
      bgColor: 'bg-gradient-to-br from-red-500 to-red-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'Kuis Berhadiah MotionBank',
      description: 'Kesempatan menang jutaan rupiah setiap hari',
      badge: 'Daily',
      image: 'promo2',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-600',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'Kartu Kredit MNC Bank x Grab',
      description: 'Transaksi di Grab serba hemat dengan cashback menarik',
      badge: 'Cashback',
      image: 'promo3',
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
      textColor: 'text-white'
    },
    {
      id: 4,
      title: 'Deposito Bunga Fantastis',
      description: 'Bunga hingga 5.75% per tahun untuk deposito Anda',
      badge: '5.75%',
      image: 'promo4',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      textColor: 'text-white'
    }
  ];

  const features = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Promo Eksklusif',
      description: 'Dapatkan penawaran khusus untuk nasabah setia',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Update Berkala',
      description: 'Promo baru setiap bulan dengan hadiah menarik',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Referral Bonus',
      description: 'Ajak teman dan dapatkan bonus untuk setiap referral',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cashback Tinggi',
      description: 'Nikmati cashback hingga 10% untuk transaksi tertentu',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Promo <span className="text-blue-600">Terbaru</span> untuk Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan emas untuk mendapatkan hadiah menarik dan benefit eksklusif
          </p>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${promo.bgColor} p-8 h-full relative`}>
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {promo.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${promo.textColor}`}>
                      {promo.title}
                    </h3>
                    <p className={`text-lg mb-6 ${promo.textColor} opacity-90`}>
                      {promo.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-200">
                      Selengkapnya
                    </button>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">Promo</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bergabunglah dengan Jutaan Nasabah yang Sudah Merasakan Manfaatnya!
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Dapatkan akses eksklusif ke semua promo dan penawaran terbaik hanya untuk nasabah MotionBank
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg">
              Daftar Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg">
              Lihat Semua Promo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;