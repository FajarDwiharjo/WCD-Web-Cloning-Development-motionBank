import React from 'react';
import { TrendingUp, Users, Building, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: '1.2M+',
      label: 'Nasabah Aktif',
      description: 'Dipercaya oleh jutaan nasabah di seluruh Indonesia'
    },
    {
      icon: <Building className="h-8 w-8" />,
      number: '150+',
      label: 'Cabang & ATM',
      description: 'Jaringan layanan yang tersebar luas'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: '25+',
      label: 'Tahun Pengalaman',
      description: 'Melayani kebutuhan perbankan dengan pengalaman panjang'
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: '50+',
      label: 'Penghargaan',
      description: 'Diakui sebagai bank terdepan dalam inovasi digital'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dipercaya Jutaan Nasabah
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Dengan komitmen memberikan pelayanan terbaik, kami terus berinovasi untuk masa depan perbankan digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <h4 className="text-xl font-semibold text-blue-100 mb-2">
                {stat.label}
              </h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bergabung dengan MotionBank Sekarang
            </h3>
            <p className="text-blue-100 mb-6">
              Nikmati kemudahan perbankan digital dengan fitur-fitur canggih dan keamanan terjamin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors">
                Buka Rekening Sekarang
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Download Aplikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;