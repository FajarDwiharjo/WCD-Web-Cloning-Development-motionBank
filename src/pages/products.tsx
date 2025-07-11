import React, { useState } from 'react';
import { PiggyBank, TrendingUp, CreditCard, BarChart3, Filter } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { BankProduct } from '../types';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products: BankProduct[] = [
    {
      id: '1',
      name: 'Motion Cuan',
      type: 'tabungan',
      description: 'Tabungan dengan bunga tinggi dan bebas biaya administrasi',
      features: ['Bebas biaya admin', 'Bunga kompetitif', 'Akses mobile banking'],
      minAmount: 100000,
      interestRate: 3.5,
      benefits: ['Gratis transfer', 'Cashback merchant', 'Reward points']
    },
    {
      id: '2',
      name: 'Deposito Menguntungkan',
      type: 'deposito',
      description: 'Deposito dengan suku bunga menarik untuk investasi jangka panjang',
      features: ['Suku bunga tinggi', 'Jangka waktu fleksibel', 'Auto renewal'],
      minAmount: 1000000,
      interestRate: 5.75,
      benefits: ['Bunga dibayar bulanan', 'Dapat dijadikan jaminan', 'Asuransi jiwa']
    },
    {
      id: '3',
      name: 'Kredit Multiguna',
      type: 'kredit',
      description: 'Kredit untuk berbagai kebutuhan dengan proses cepat dan mudah',
      features: ['Proses cepat', 'Persyaratan mudah', 'Tenor fleksibel'],
      minAmount: 5000000,
      interestRate: 12.5,
      benefits: ['Tanpa biaya provisi', 'Agunan fleksibel', 'Pelunasan dipercepat']
    },
    {
      id: '4',
      name: 'Reksadana Online',
      type: 'investasi',
      description: 'Investasi reksadana dengan minimum investasi rendah',
      features: ['Investasi mulai Rp100rb', 'Berbagai pilihan produk', 'Monitoring real-time'],
      minAmount: 100000,
      benefits: ['Diversifikasi risiko', 'Dikelola profesional', 'Likuiditas tinggi']
    },
    {
      id: '5',
      name: 'Tabungan Pendidikan',
      type: 'tabungan',
      description: 'Tabungan khusus untuk persiapan dana pendidikan anak',
      features: ['Bunga progresif', 'Asuransi pendidikan', 'Setoran rutin'],
      minAmount: 500000,
      interestRate: 4.0,
      benefits: ['Perlindungan asuransi', 'Bebas biaya admin', 'Hadiah menarik']
    },
    {
      id: '6',
      name: 'KTA Express',
      type: 'kredit',
      description: 'Kredit tanpa agunan dengan proses persetujuan instan',
      features: ['Approval instant', 'Tanpa agunan', 'Limit hingga 200 juta'],
      minAmount: 2000000,
      interestRate: 18.0,
      benefits: ['Proses online', 'Pencairan cepat', 'Tenor hingga 5 tahun']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Filter },
    { id: 'tabungan', name: 'Tabungan', icon: PiggyBank },
    { id: 'deposito', name: 'Deposito', icon: TrendingUp },
    { id: 'kredit', name: 'Kredit', icon: CreditCard },
    { id: 'investasi', name: 'Investasi', icon: BarChart3 }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.type === selectedCategory);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products & Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive range of banking products designed to meet all your financial needs
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon size={20} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="h-full" hover>
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.type === 'tabungan' ? 'bg-green-100 text-green-800' :
                      product.type === 'deposito' ? 'bg-blue-100 text-blue-800' :
                      product.type === 'kredit' ? 'bg-orange-100 text-orange-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Minimum Amount:</span>
                      <span className="text-sm font-bold text-gray-900">
                        {formatCurrency(product.minAmount)}
                      </span>
                    </div>
                    {product.interestRate && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Interest Rate:</span>
                        <span className="text-sm font-bold text-green-600">
                          {product.interestRate}% p.a.
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="primary" size="sm" fullWidth>
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm" fullWidth>
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our financial advisors are ready to help you find the perfect banking solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contact Advisor
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;