import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, Heart, Menu, X, User, Plus, MessageCircle, ChevronRight, Star } from 'lucide-react';

export default function OLXLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const categories = [
    'All Categories', 'Mobiles', 'Vehicles', 'Property for Sale', 'Property for Rent',
    'Electronics & Appliances', 'Bikes', 'Business, Industrial & Agriculture', 
    'Services', 'Jobs', 'Animals', 'Furniture & Home Decor', 'Fashion & Beauty', 
    'Books, Sports & Hobbies', 'Kids'
  ];

  const topLocations = [
    'Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'HSR Layout',
    'Marathahalli', 'BTM Layout', 'Jayanagar', 'Bellandur', 'JP Nagar'
  ];

  const products = [
    {
      id: 1,
      title: 'iPhone 13 Pro Max 256GB Pacific Blue',
      price: '₹65,000',
      location: 'Koramangala, Bengaluru',
      image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&h=300&fit=crop',
      featured: true,
      time: '2 hours ago'
    },
    {
      id: 2,
      title: 'Royal Enfield Classic 350 - 2022 Model',
      price: '₹1,45,000',
      location: 'Indiranagar, Bengaluru',
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=400&h=300&fit=crop',
      featured: false,
      time: '5 hours ago'
    },
    {
      id: 3,
      title: '2BHK Fully Furnished Apartment for Rent',
      price: '₹25,000/month',
      location: 'Whitefield, Bengaluru',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      featured: true,
      time: '1 day ago'
    },
    {
      id: 4,
      title: 'HP Pavilion i5 11th Gen 8GB RAM 512GB SSD',
      price: '₹28,000',
      location: 'Marathahalli, Bengaluru',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      featured: false,
      time: '3 hours ago'
    },
    {
      id: 5,
      title: 'Sony PlayStation 5 with 2 Controllers',
      price: '₹48,000',
      location: 'Electronic City, Bengaluru',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop',
      featured: false,
      time: '6 hours ago'
    },
    {
      id: 6,
      title: 'L-Shape Sofa Set 5 Seater Grey Color',
      price: '₹18,500',
      location: 'HSR Layout, Bengaluru',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      featured: true,
      time: '4 hours ago'
    },
    {
      id: 7,
      title: 'Samsung 55" 4K Smart TV Crystal UHD',
      price: '₹42,000',
      location: 'Jayanagar, Bengaluru',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
      featured: false,
      time: '1 day ago'
    },
    {
      id: 8,
      title: 'Firefox Mountain Bike 21 Speed Gears',
      price: '₹12,000',
      location: 'Bellandur, Bengaluru',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=300&fit=crop',
      featured: false,
      time: '8 hours ago'
    },
    {
      id: 9,
      title: 'Maruti Swift VXi 2019 - First Owner',
      price: '₹5,75,000',
      location: 'BTM Layout, Bengaluru',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop',
      featured: true,
      time: '2 days ago'
    },
    {
      id: 10,
      title: 'Canon EOS 1500D DSLR Camera with 18-55mm Lens',
      price: '₹28,500',
      location: 'Koramangala, Bengaluru',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop',
      featured: false,
      time: '5 hours ago'
    },
    {
      id: 11,
      title: 'Office Space for Rent 2000 sqft',
      price: '₹60,000/month',
      location: 'Whitefield, Bengaluru',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      featured: false,
      time: '1 day ago'
    },
    {
      id: 12,
      title: 'MacBook Air M1 8GB 256GB Space Grey',
      price: '₹68,000',
      location: 'Indiranagar, Bengaluru',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
      featured: true,
      time: '3 hours ago'
    },
    {
      id: 13,
      title: 'Samsung Galaxy S22 Ultra 12GB/256GB',
      price: '₹72,000',
      location: 'Electronic City, Bengaluru',
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
      featured: false,
      time: '7 hours ago'
    },
    {
      id: 14,
      title: 'Wooden Dining Table Set with 6 Chairs',
      price: '₹22,000',
      location: 'JP Nagar, Bengaluru',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop',
      featured: false,
      time: '2 days ago'
    },
    {
      id: 15,
      title: 'Honda Activa 6G 2023 Model Excellent Condition',
      price: '₹68,000',
      location: 'Marathahalli, Bengaluru',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
      featured: false,
      time: '4 hours ago'
    },
    {
      id: 16,
      title: 'LG Double Door Refrigerator 260L',
      price: '₹18,000',
      location: 'HSR Layout, Bengaluru',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
      featured: true,
      time: '1 day ago'
    },
    {
      id: 17,
      title: 'Gaming PC i7 16GB RAM RTX 3060',
      price: '₹85,000',
      location: 'Bellandur, Bengaluru',
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop',
      featured: false,
      time: '6 hours ago'
    },
    {
      id: 18,
      title: '3BHK Independent House for Sale',
      price: '₹1.2 Cr',
      location: 'Jayanagar, Bengaluru',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      featured: true,
      time: '3 days ago'
    },
    {
      id: 19,
      title: 'Boat Smartwatch with AMOLED Display',
      price: '₹2,499',
      location: 'Koramangala, Bengaluru',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop',
      featured: false,
      time: '5 hours ago'
    },
    {
      id: 20,
      title: 'Kids Bicycle Age 5-8 Years with Training Wheels',
      price: '₹4,500',
      location: 'BTM Layout, Bengaluru',
      image: 'https://images.unsplash.com/photo-1519658422992-0c8495f08389?w=400&h=300&fit=crop',
      featured: false,
      time: '1 day ago'
    },
    {
      id: 21,
      title: 'Nike Air Max Running Shoes Size 9',
      price: '₹3,800',
      location: 'Indiranagar, Bengaluru',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      featured: false,
      time: '2 hours ago'
    },
    {
      id: 22,
      title: 'Treadmill Automatic with LCD Display',
      price: '₹32,000',
      location: 'Whitefield, Bengaluru',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=300&fit=crop',
      featured: true,
      time: '1 day ago'
    },
    {
      id: 23,
      title: 'Labrador Puppy KCI Registered',
      price: '₹18,000',
      location: 'Electronic City, Bengaluru',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      featured: false,
      time: '3 hours ago'
    },
    {
      id: 24,
      title: 'Queen Size Bed with Storage and Mattress',
      price: '₹26,000',
      location: 'JP Nagar, Bengaluru',
      image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop',
      featured: false,
      time: '6 hours ago'
    }
  ];

  const bannerCategories = [
    { name: 'Mobiles', icon: '📱' },
    { name: 'Vehicles', icon: '🚗' },
    { name: 'Property', icon: '🏠' },
    { name: 'Electronics', icon: '💻' },
    { name: 'Bikes', icon: '🏍️' },
    { name: 'Jobs', icon: '💼' },
    { name: 'Furniture', icon: '🛋️' },
    { name: 'Fashion', icon: '👗' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Bengaluru, Karnataka</span>
              <span className="sm:hidden">Bengaluru</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-4 text-sm">
              <button className="hidden sm:flex items-center gap-1 hover:text-gray-300">
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button className="sm:hidden">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <button 
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <h1 className="text-2xl sm:text-3xl font-bold text-purple-600">OLX</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-2 bg-white border-2 border-gray-900 rounded px-3 py-2 min-w-[200px]">
                <Search className="w-5 h-5 text-gray-600" />
                <select 
                  className="outline-none bg-transparent text-sm flex-1"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>

              <div className="flex-1 flex items-center gap-2 bg-white border-2 border-gray-900 rounded px-3 py-2">
                <Search className="w-5 h-5 text-gray-600" />
                <input 
                  type="text"
                  placeholder="Find Cars, Mobile Phones and more..."
                  className="outline-none flex-1 text-sm"
                />
              </div>
            </div>

            {/* Sell Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 rounded font-semibold px-4 py-2 flex items-center gap-2 whitespace-nowrap">
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">SELL</span>
            </button>
          </div>
        </div>

        {/* Categories - Desktop */}
        <div className="hidden lg:block bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-6 py-3 overflow-x-auto">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className="text-sm hover:text-purple-600 whitespace-nowrap"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 top-[104px] overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className="block w-full text-left py-2 hover:bg-gray-100 px-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-6 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome to OLX</h2>
          <p className="text-sm sm:text-base mb-4">Buy, Sell, and Find anything in your area</p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {bannerCategories.map(cat => (
              <div key={cat.name} className="text-center cursor-pointer hover:scale-110 transition-transform">
                <div className="text-3xl mb-1">{cat.icon}</div>
                <div className="text-xs">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Filters */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Browse by Location</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {topLocations.map(location => (
              <button 
                key={location}
                className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap hover:border-purple-600 hover:text-purple-600"
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Filters Bar */}
        <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">
            All Categories
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">
            Price: Low to High
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">
            Date Posted
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">
            Condition
          </button>
        </div>

        {/* Featured Ads Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Featured Ads</h3>
            <button className="text-purple-600 text-sm flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {products.filter(p => p.featured).slice(0, 4).map(product => (
              <div 
                key={product.id}
                className="bg-white border-2 border-yellow-400 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-32 sm:h-40 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    FEATURED
                  </div>
                  <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-lg sm:text-xl font-bold mb-2">{product.price}</p>
                  <div className="flex items-start gap-1 text-gray-600 text-xs sm:text-sm mb-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{product.location}</span>
                  </div>
                  <p className="text-xs text-gray-500">{product.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fresh Recommendations */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Fresh recommendations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {products.map(product => (
              <div 
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-32 sm:h-40 object-cover"
                  />
                  {product.featured && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      FEATURED
                    </div>
                  )}
                  <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-lg sm:text-xl font-bold mb-2">{product.price}</p>
                  <div className="flex items-start gap-1 text-gray-600 text-xs sm:text-sm mb-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{product.location}</span>
                  </div>
                  <p className="text-xs text-gray-500">{product.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 border-2 border-gray-900 rounded font-semibold hover:bg-gray-100 transition-colors">
            Load More Ads
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">POPULAR LOCATIONS</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Kolkata</li>
                <li className="hover:text-white cursor-pointer">Mumbai</li>
                <li className="hover:text-white cursor-pointer">Chennai</li>
                <li className="hover:text-white cursor-pointer">Pune</li>
                <li className="hover:text-white cursor-pointer">Bengaluru</li>
                <li className="hover:text-white cursor-pointer">Hyderabad</li>
                <li className="hover:text-white cursor-pointer">Delhi</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">TRENDING SEARCHES</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Bikes</li>
                <li className="hover:text-white cursor-pointer">Cars</li>
                <li className="hover:text-white cursor-pointer">Flats for sale</li>
                <li className="hover:text-white cursor-pointer">Jobs</li>
                <li className="hover:text-white cursor-pointer">Mobile Phones</li>
                <li className="hover:text-white cursor-pointer">Laptops</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">ABOUT US</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">About OLX Group</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">OLX People</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">OLX</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Help</li>
                <li className="hover:text-white cursor-pointer">Sitemap</li>
                <li className="hover:text-white cursor-pointer">Legal & Privacy</li>
                <li className="hover:text-white cursor-pointer">Vulnerability Disclosure</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">FOLLOW US</h4>
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer"></div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-sm">DOWNLOAD OUR APP</h4>
                <div className="space-y-2">
                  <div className="bg-black px-3 py-2 rounded text-xs cursor-pointer hover:bg-gray-800">
                    <div className="font-bold">Get it on</div>
                    <div>Google Play</div>
                  </div>
                  <div className="bg-black px-3 py-2 rounded text-xs cursor-pointer hover:bg-gray-800">
                    <div className="font-bold">Download on the</div>
                    <div>App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <span>© 2024 OLX India. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="cursor-pointer hover:text-white">Help</span>
              <span className="cursor-pointer hover:text-white">Sitemap</span>
              <span className="cursor-pointer hover:text-white">Legal & Privacy information</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Button - Mobile */}
      <button className="lg:hidden fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}