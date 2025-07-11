import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ProductCards = () => {
  const products = [
    {
      id: 1,
      icon: 'icon1',
      title: 'Mo Investasi?',
      subtitle: 'Bisa',
      description: 'Dengan Rp200 ribu, kamu sudah bisa berinvestasi.',
      cta: 'Buka Deposito sekarang mulai dari Rp 200 Ribu',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      id: 2,
      icon: 'icon2',
      title: 'Mo Bayar ini itu?',
      subtitle: 'Bisa',
      description: 'Akses Beragam pilihan merchant/Pembayaran,',
      cta: 'bikin kamu lebih sat set bayar dan top up ini itu',
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      id: 3,
      icon: 'icon3',
      title: 'Mo Pinjaman?',
      subtitle: 'Bisa',
      description: 'Dapatkan solusi keuangan yang cepat dan',
      cta: 'tepat untuk kebutuhan kamu',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-600',
      iconBg: 'bg-green-100'
    },
    {
      id: 4,
      icon: 'icon4',
      title: 'Mo Cuan?',
      subtitle: 'Bisa',
      description: 'Dapatkan beragam info promo-promo menarik,',
      cta: 'yang bikin dompet kamu selalu aman',
      bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100'
    },
    {
      id: 5,
      icon: 'icon5',
      title: 'Mo Bebas Biaya?',
      subtitle: 'Bisa',
      description: 'Buka Tabungan Motion Cuan sekarang!',
      cta: 'Dan dapatkan benefit untuk bebas biaya dalam bertransaksi',
      bgColor: 'bg-gradient-to-br from-pink-500 to-pink-600',
      iconBg: 'bg-pink-100'
    },
    {
      id: 6,
      icon: 'icon6',
      title: 'Mo Buka Rekening Saham tanpa Ribet?',
      subtitle: 'Bisa',
      description: 'Download MotionBank, Layanan digital MNC Bank sekarang!',
      cta: 'Kamu sudah bisa langsung buka Rekening saham',
      bgColor: 'bg-gradient-to-br from-teal-500 to-teal-600',
      iconBg: 'bg-teal-100'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">MOTIONBANK</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Mo Apa Aja Bisa
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${product.bgColor} p-6 text-white`}>
                <div className={`${product.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <span className="text-gray-600 font-medium">{product.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                <h4 className="text-2xl font-extrabold mb-3">{product.subtitle}</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-700 text-sm mb-4">
                  {product.cta}
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors group">
                  Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;