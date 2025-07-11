import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      image: 'img1',
      title: 'PLN IconPlus Rp20rb',
      description: 'Dapatkan bonus PLN IconPlus senilai Rp20.000 untuk pembayaran listrik Anda',
      buttonText: 'Ambil Promo',
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      id: 2,
      image: 'img2',
      title: 'TMC Bunga Fantastis',
      description: 'Nikmati bunga tabungan yang fantastis dengan TMC MotionBank',
      buttonText: 'Selengkapnya',
      bgColor: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      id: 3,
      image: 'img3',
      title: 'Deposito 5,75%',
      description: 'Investasi cerdas dengan bunga deposito hingga 5,75% per tahun',
      buttonText: 'Buka Deposito',
      bgColor: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      id: 4,
      image: 'img4',
      title: 'Kredit Multiguna',
      description: 'Wujudkan impian Anda dengan kredit multiguna MotionBank',
      buttonText: 'Ajukan Sekarang',
      bgColor: 'bg-gradient-to-r from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Promo Terbaru
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Jangan lewatkan berbagai penawaran menarik dari MotionBank
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`${promo.bgColor} h-48 flex items-center justify-center`}>
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 font-medium">{promo.image}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {promo.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {promo.description}
                </p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  {promo.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;