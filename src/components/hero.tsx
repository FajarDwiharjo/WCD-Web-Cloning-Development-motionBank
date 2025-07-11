import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import slider1 from '../assets/slider1.png'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.png'
import slider4 from '../assets/slider4.png'
import slider5 from '../assets/slider5.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: slider1,
      title: "PLN IconPlus Rp20rb",
      subtitle: "Dapatkan cashback untuk setiap transaksi PLN",
      cta: "Selengkapnya"
    },
    {
      id: 2,
      image: slider2,
      title: "TMC Bunga Fantastis",
      subtitle: "Investasi dengan bunga yang menguntungkan",
      cta: "Mulai Investasi"
    },
    {
      id: 3,
      image: slider3,
      title: "Waspada Phishing",
      subtitle: "Jaga keamanan data dan transaksi Anda",
      cta: "Pelajari Lebih Lanjut"
    },
    {
      id: 4,
      image: slider4,
      title: "GERNAS APUPPT",
      subtitle: "Bergabunglah dengan program pemerintah",
      cta: "Daftar Sekarang"
    },
    {
      id: 5,
      image: slider5,
      title: "Deposito 5.75%",
      subtitle: "Bunga deposito terbaik untuk masa depan",
      cta: "Buka Deposito"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[600px] bg-gradient-to-r from-motion-blue to-motion-darkblue overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center">
        <div className="max-w-2xl text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            MOTIONBANK
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8 animate-slide-up">
            Mo Apa Aja Bisa
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-xl md:text-2xl mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              {slides[currentSlide].subtitle}
            </p>
            <button className="btn-secondary text-lg px-8 py-4">
              {slides[currentSlide].cta}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-motion-orange scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero