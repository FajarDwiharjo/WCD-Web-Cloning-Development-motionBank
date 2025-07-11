import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'Entrepreneur',
      location: 'Jakarta',
      rating: 5,
      text: 'MotionBank sangat membantu bisnis saya dengan fitur transfer yang cepat dan mudah. Customer service juga sangat responsif.',
      avatar: 'avatar1'
    },
    {
      id: 2,
      name: 'Sari Wijaya',
      role: 'Freelancer',
      location: 'Surabaya',
      rating: 5,
      text: 'Aplikasi yang user-friendly dan fitur investasi dengan modal kecil sangat membantu untuk mulai berinvestasi.',
      avatar: 'avatar2'
    },
    {
      id: 3,
      name: 'Ahmad Rahman',
      role: 'Karyawan',
      location: 'Bandung',
      rating: 5,
      text: 'Proses pembukaan rekening sangat mudah dan cepat. Fitur pembayaran tagihan juga sangat lengkap.',
      avatar: 'avatar3'
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      role: 'Ibu Rumah Tangga',
      location: 'Medan',
      rating: 5,
      text: 'Dengan MotionBank, saya bisa mengelola keuangan keluarga dengan mudah. Fitur tabungan Motion Cuan bebas biaya sangat menguntungkan.',
      avatar: 'avatar4'
    },
    {
      id: 5,
      name: 'Riko Pratama',
      role: 'Mahasiswa',
      location: 'Yogyakarta',
      rating: 5,
      text: 'Sebagai mahasiswa, aplikasi ini sangat membantu dengan fitur top up dan pembayaran yang praktis.',
      avatar: 'avatar5'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-blue-600">Nasabah</span> Tentang Kami?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ribuan nasabah telah mempercayai MotionBank untuk kebutuhan keuangan mereka
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 z-10">
                <Quote className="w-12 h-12 text-blue-600 opacity-20" />
              </div>

              {/* Testimonial Content */}
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center px-8 pb-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Berizin & Diawasi OJK</h3>
            <p className="text-sm text-gray-600">Terdaftar dan diawasi oleh Otoritas Jasa Keuangan</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">LPS</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Peserta Penjaminan LPS</h3>
            <p className="text-sm text-gray-600">Dana nasabah dijamin oleh Lembaga Penjamin Simpanan</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">★</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Rating Tinggi</h3>
            <p className="text-sm text-gray-600">Mendapat rating 4.5+ dari ribuan pengguna</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;