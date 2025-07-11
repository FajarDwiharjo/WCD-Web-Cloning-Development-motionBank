import { Calendar, ArrowRight, User } from 'lucide-react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Bertabur Hadiah, MNC Bank Kembali Serahkan Unit Mobil Kepada Nasabah Setianya",
      excerpt: "Setelah berhasil meningkatkan kepuasan nasabahnya melalui loyalty program Tabungan Dahsyat Berhadiah yang memberikan beragam hadiah istimewa hingga 2 unit mobil kepada nasabah, kini PT Bank MNC Internasional Tbk (IDX: BABP)",
      image: blog1,
      date: "February 24, 2025",
      author: "Tim MotionBank",
      category: "Berita"
    },
    {
      id: 2,
      title: "Cuma MNC Bank Yang Kasih Kamu Kesempatan Menang Jutaan Rupiah Setiap Hari!",
      excerpt: "PT Bank MNC Internasional Tbk (IDX: BABP) atau MNC Bank tak ada habisnya memberikan Kamu kesempatan memenangkan hadiah uang tunai jutaan rupiah setiap harinya. Melalui Kuis Berhadiah MotionBank, MNC Bank",
      image: blog2,
      date: "February 21, 2025",
      author: "Tim MotionBank",
      category: "Promo"
    },
    {
      id: 3,
      title: "Transaksi di Grab Serba Hemat dengan Kartu Kredit MNC Bank",
      excerpt: "Di tengah maraknya jenis transportasi dalam kota saat ini, penyedia tansportasi berbasis online merupakan salah satu pilihan praktis yang digunakan masyarakat untuk menunjang mobilitasnya dalam beraktivitas sehari-hari. Dengan didukung oleh",
      image: blog3,
      date: "February 20, 2025",
      author: "Tim MotionBank",
      category: "Tips"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan informasi terbaru seputar keuangan, promo menarik, dan tips finansial 
            yang berguna untuk kehidupan sehari-hari Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="card hover:shadow-xl transition-all duration-300 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-motion-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-motion-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <button className="text-motion-blue hover:text-motion-darkblue font-medium text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            Lihat Semua Artikel
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog