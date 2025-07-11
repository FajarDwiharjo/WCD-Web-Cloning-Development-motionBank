import React from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'img1',
      title: 'Mo Investasi? Bisa',
      description: 'Dengan Rp200 ribu, kamu sudah bisa berinvestasi. Buka Deposito sekarang mulai dari Rp 200 Ribu',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'img2',
      title: 'Mo Bayar ini itu? Bisa',
      description: 'Akses Beragam pilihan merchant/Pembayaran, bikin kamu lebih sat set bayar dan top up ini itu',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: 'img3',
      title: 'Mo Pinjaman? Bisa',
      description: 'Dapatkan solusi keuangan yang cepat dan tepat untuk kebutuhan kamu',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: 'img4',
      title: 'Mo Cuan? Bisa',
      description: 'Dapatkan beragam info promo-promo menarik, yang bikin dompet kamu selalu aman',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'img5',
      title: 'Mo Bebas Biaya? Bisa',
      description: 'Buka Tabungan Motion Cuan sekarang! Dan dapatkan benefit untuk bebas biaya dalam bertransaksi',
      color: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: 'img6',
      title: 'Mo Buka Rekening Saham tanpa Ribet? Bisa',
      description: 'Download MotionBank, Layanan digital MNC Bank sekarang! Kamu sudah bisa langsung buka Rekening saham',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mo Apa Aja Bisa
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Layanan Digital Banking yang Memudahkan Hidup Kamu
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Download Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nikmati berbagai layanan digital banking yang lengkap dan mudah diakses kapan saja
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`p-8 ${service.color} border-0 hover:shadow-lg transition-shadow`}>
                <div className="text-center">
                  <div className={`w-16 h-16 ${service.iconColor} mx-auto mb-6 flex items-center justify-center`}>
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Digital Banking?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Download aplikasi MotionBank sekarang dan rasakan kemudahan bertransaksi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Download iOS
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Download Android
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;