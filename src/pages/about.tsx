import { Users, Target, Award, TrendingUp, Shield, Globe } from 'lucide-react'
import aboutHero from '../assets/about-hero.png'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'

const About = () => {
  const stats = [
    { icon: Users, number: '1M+', label: 'Nasabah Aktif' },
    { icon: Globe, number: '500+', label: 'Cabang & ATM' },
    { icon: Award, number: '25+', label: 'Penghargaan' },
    { icon: TrendingUp, number: '98%', label: 'Kepuasan Nasabah' },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Sistem keamanan berlapis dengan teknologi enkripsi terkini untuk melindungi data dan transaksi Anda.',
    },
    {
      icon: Target,
      title: 'Inovasi Berkelanjutan',
      description: 'Terus berinovasi menghadirkan layanan digital terdepan untuk kemudahan perbankan Anda.',
    },
    {
      icon: Users,
      title: 'Layanan Prima',
      description: 'Tim customer service yang siap membantu 24/7 untuk memberikan pelayanan terbaik.',
    },
  ]

  const team = [
    {
      name: 'Budi Santoso',
      position: 'CEO',
      image: team1,
      description: 'Memimpin dengan visi untuk menjadikan MotionBank sebagai platform digital banking terdepan.',
    },
    {
      name: 'Sari Dewi',
      position: 'CTO',
      description: 'Bertanggung jawab mengembangkan teknologi inovatif untuk pengalaman perbankan yang lebih baik.',
      image: team2,
    },
    {
      name: 'Ahmad Rahman',
      position: 'Head of Operations',
      description: 'Memastikan operasional bank berjalan lancar dan efisien untuk kepuasan nasabah.',
      image: team3,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tentang <span className="text-motion-orange">MotionBank</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                MotionBank adalah layanan digital banking dari MNC Bank yang hadir untuk memberikan 
                solusi keuangan terlengkap dan termudah bagi masyarakat Indonesia. Dengan motto 
                "Mo Apa Aja Bisa", kami berkomitmen menghadirkan inovasi perbankan digital terdepan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-secondary">
                  Bergabung Sekarang
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-motion-blue px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={aboutHero}
                alt="About MotionBank"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-motion-gray rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-motion-blue" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-motion-gray">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <div className="text-center mb-6">
                <div className="bg-motion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                Menjadi platform digital banking terdepan yang menghadirkan solusi keuangan 
                inovatif dan mudah diakses untuk semua lapisan masyarakat Indonesia, 
                mendorong inklusi keuangan yang berkelanjutan.
              </p>
            </div>
            
            <div className="card">
              <div className="text-center mb-6">
                <div className="bg-motion-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                Memberikan layanan perbankan digital yang aman, mudah, dan terjangkau 
                melalui teknologi terdepan, sambil membangun kepercayaan dan kepuasan 
                nasabah sebagai prioritas utama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nilai-Nilai <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami untuk memberikan yang terbaik bagi setiap nasabah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-motion-gray rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-motion-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-motion-gray">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tim <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dipimpin oleh para ahli berpengalaman yang berdedikasi untuk kemajuan perbankan digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-motion-blue font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="gradient-bg rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Bergabunglah dengan MotionBank
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Rasakan pengalaman perbankan digital yang berbeda dan nikmati kemudahan 
              dalam setiap transaksi finansial Anda
            </p>
            <button className="btn-secondary text-lg px-8 py-4">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About