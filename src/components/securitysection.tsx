import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enkripsi End-to-End',
      description: 'Semua data dan transaksi Anda dilindungi dengan enkripsi tingkat militer',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Biometrik Authentication',
      description: 'Login dengan sidik jari dan face recognition untuk keamanan maksimal',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Monitoring 24/7',
      description: 'Sistem monitoring real-time untuk mendeteksi aktivitas mencurigakan',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Anti-Fraud System',
      description: 'Teknologi AI untuk mencegah dan mendeteksi fraud secara otomatis',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const certifications = [
    {
      title: 'ISO 27001',
      description: 'Standar keamanan informasi internasional',
      badge: 'Certified'
    },
    {
      title: 'PCI DSS',
      description: 'Sertifikasi keamanan untuk payment processing',
      badge: 'Compliant'
    },
    {
      title: 'OJK Licensed',
      description: 'Berizin dan diawasi oleh Otoritas Jasa Keuangan',
      badge: 'Licensed'
    },
    {
      title: 'LPS Member',
      description: 'Peserta penjaminan Lembaga Penjamin Simpanan',
      badge: 'Protected'
    }
  ];

  const tips = [
    {
      title: 'Jangan Bagikan PIN/Password',
      description: 'Petugas bank tidak akan pernah meminta PIN atau password Anda'
    },
    {
      title: 'Verifikasi URL Website',
      description: 'Pastikan mengakses situs resmi motionbank.id'
    },
    {
      title: 'Logout Setelah Selesai',
      description: 'Selalu logout dari aplikasi setelah selesai bertransaksi'
    },
    {
      title: 'Update Aplikasi Berkala',
      description: 'Gunakan selalu versi terbaru aplikasi MotionBank'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keamanan <span className="text-blue-600">Terdepan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menggunakan teknologi keamanan terkini untuk melindungi data dan transaksi Anda
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
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

        {/* Anti-Phishing Warning */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-16">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Waspada Penipuan (Phishing)
              </h3>
              <p className="text-red-700 mb-4">
                Hati-hati dengan email, SMS, atau website palsu yang mengatasnamakan MotionBank. 
                Selalu verifikasi keaslian komunikasi yang Anda terima.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Cek URL resmi: motionbank.id
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Hubungi: 1500-111
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Sertifikasi & Lisensi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {cert.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tips Keamanan untuk Nasabah
            </h3>
            <p className="text-gray-600">
              Ikuti panduan ini untuk menjaga keamanan akun MotionBank Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Jika Anda mengalami masalah keamanan atau menemukan aktivitas mencurigakan:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Laporkan Masalah
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Hubungi Customer Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;