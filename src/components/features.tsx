import { TrendingUp, CreditCard, Banknote, Gift, Shield, DollarSign } from 'lucide-react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: icon1,
      title: "Mo Investasi? Bisa",
      description: "Dengan Rp200 ribu, kamu sudah bisa berinvestasi.",
      subtitle: "Buka Deposito sekarang mulai dari Rp 200 Ribu",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: icon2,
      title: "Mo Bayar ini itu? Bisa",
      description: "Akses Beragam pilihan merchant/Pembayaran,",
      subtitle: "bikin kamu lebih sat set bayar dan top up ini itu",
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      icon: icon3,
      title: "Mo Pinjaman? Bisa",
      description: "Dapatkan solusi keuangan yang cepat dan",
      subtitle: "tepat untuk kebutuhan kamu",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: icon4,
      title: "Mo Buka Rekening Saham tanpa Ribet? Bisa",
      description: "Download MotionBank, Layanan digital MNC Bank sekarang!",
      subtitle: "Kamu sudah bisa langsung buka Rekening saham",
      color: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 5,
      icon: icon5,
      title: "Mo Cuan? Bisa",
      description: "Dapatkan beragam info promo-promo menarik,",
      subtitle: "yang bikin dompet kamu selalu aman",
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 6,
      icon: icon6,
      title: "Mo Bebas Biaya? Bisa",
      description: "Buka Tabungan Motion Cuan sekarang!",
      subtitle: "Dan dapatkan benefit untuk bebas biaya dalam bertransaksi",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ]

  return (
    <section className="section-padding bg-motion-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mo Apa Aja <span className="text-gradient">Bisa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MotionBank memberikan kemudahan dan solusi finansial yang lengkap untuk semua kebutuhan Anda. 
            Dengan teknologi terdepan dan layanan terpercaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`card hover:scale-105 transition-transform duration-300 ${feature.color} border-l-4 border-motion-blue`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-20 h-20 mx-auto mb-4 rounded-full"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-motion-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{feature.id}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 text-center mb-2 leading-relaxed">
                {feature.description}
              </p>
              
              <p className="text-gray-600 text-center text-sm font-medium">
                {feature.subtitle}
              </p>

              <div className="mt-6 text-center">
                <button className="btn-primary text-sm">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-motion-blue to-motion-darkblue rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Mulai Perjalanan Finansial Anda?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pengguna yang sudah merasakan kemudahan MotionBank
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg px-8 py-4">
                Download Aplikasi
              </button>
              <button className="bg-white text-motion-blue hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300">
                Buka Rekening Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features