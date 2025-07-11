import React from 'react';
import { AlertTriangle, Shield, Eye, Lock } from 'lucide-react';

const WarningSection = () => {
  return (
    <section className="py-16 px-4 bg-red-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-8 w-8 text-red-500 mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-red-700">
              WASPADA PENIPUAN (PHISHING)
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lindungi Diri Anda Dari Penipuan
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Jangan pernah memberikan informasi pribadi seperti PIN, password, atau OTP kepada siapapun
                  </p>
                </div>
                <div className="flex items-start">
                  <Eye className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Selalu verifikasi URL resmi MotionBank sebelum melakukan transaksi
                  </p>
                </div>
                <div className="flex items-start">
                  <Lock className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Pastikan selalu logout dari aplikasi setelah selesai bertransaksi
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-100 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-3">
                Jika Anda Mencurigai Adanya Penipuan:
              </h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Segera hubungi Call Center: 1500-188</li>
                <li>• WhatsApp: 0888-888-8888</li>
                <li>• Email: cs@motionbank.id</li>
                <li>• Laporkan ke pihak berwajib</li>
              </ul>
              
              <div className="mt-4 p-3 bg-red-200 rounded text-center">
                <p className="text-red-800 font-semibold text-sm">
                  MotionBank tidak pernah meminta data pribadi melalui email, SMS, atau telepon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarningSection;