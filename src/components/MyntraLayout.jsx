import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, User, Menu, X, Star, ChevronRight, Gift, Truck, RotateCcw } from 'lucide-react';

export default function MyntraLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Studio'];
  
  const banners = [
    { id: 1, title: 'FLAT 50-80% OFF', subtitle: 'Top Brands Season Sale', bg: 'from-purple-600 to-pink-600' },
    { id: 2, title: 'MIN 40% OFF', subtitle: 'Casual Wear Collection', bg: 'from-blue-600 to-cyan-600' },
    { id: 3, title: 'BUY 2 GET 1 FREE', subtitle: 'On All Fashion Items', bg: 'from-orange-600 to-red-600' },
  ];

  const brands = [
    { name: 'Nike', discount: '40-70% OFF', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop' },
    { name: 'Adidas', discount: '50-80% OFF', image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200&h=200&fit=crop' },
    { name: 'Puma', discount: '40-60% OFF', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&h=200&fit=crop' },
    { name: 'H&M', discount: '30-50% OFF', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop' },
    { name: 'Zara', discount: '20-40% OFF', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&h=200&fit=crop' },
    { name: 'Levis', discount: '40-70% OFF', image: 'https://images.unsplash.com/photo-1582552938357-32b906d41f94?w=200&h=200&fit=crop' },
  ];

  const products = [
    { id: 1, name: 'Casual Slim Fit Shirt', brand: 'Roadster', price: 899, originalPrice: 1999, discount: 55, rating: 4.3, reviews: 2345, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop', category: 'Men' },
    { id: 2, name: 'Floral Maxi Dress', brand: 'H&M', price: 1499, originalPrice: 2999, discount: 50, rating: 4.5, reviews: 3421, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop', category: 'Women' },
    { id: 3, name: 'Slim Fit Denim Jeans', brand: 'Levis', price: 2199, originalPrice: 3999, discount: 45, rating: 4.2, reviews: 5632, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop', category: 'Men' },
    { id: 4, name: 'Casual Summer Top', brand: 'Mango', price: 799, originalPrice: 1599, discount: 50, rating: 4.4, reviews: 1876, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop', category: 'Women' },
    { id: 5, name: 'Printed Kids T-Shirt', brand: 'UCB Kids', price: 599, originalPrice: 1199, discount: 50, rating: 4.1, reviews: 987, image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop', category: 'Kids' },
    { id: 6, name: 'Running Sports Shoes', brand: 'Nike', price: 3499, originalPrice: 5999, discount: 42, rating: 4.6, reviews: 8234, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop', category: 'Men' },
    { id: 7, name: 'Designer Handbag', brand: 'Lavie', price: 1299, originalPrice: 2599, discount: 50, rating: 4.3, reviews: 2109, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', category: 'Women' },
    { id: 8, name: 'Ethnic Anarkali Kurta', brand: 'Libas', price: 1899, originalPrice: 3999, discount: 53, rating: 4.5, reviews: 3567, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop', category: 'Women' },
    { id: 9, name: 'Formal Blazer', brand: 'Raymond', price: 3999, originalPrice: 7999, discount: 50, rating: 4.4, reviews: 1543, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop', category: 'Men' },
    { id: 10, name: 'Party Wear Heels', brand: 'Inc.5', price: 1799, originalPrice: 3599, discount: 50, rating: 4.2, reviews: 2876, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop', category: 'Women' },
    { id: 11, name: 'Graphic Print Hoodie', brand: 'Nike', price: 2499, originalPrice: 4999, discount: 50, rating: 4.5, reviews: 4321, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop', category: 'Men' },
    { id: 12, name: 'Leather Jacket', brand: 'Zara', price: 4999, originalPrice: 9999, discount: 50, rating: 4.7, reviews: 1234, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop', category: 'Women' },
    { id: 13, name: 'Cotton Shorts', brand: 'Puma', price: 899, originalPrice: 1799, discount: 50, rating: 4.1, reviews: 3456, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop', category: 'Men' },
    { id: 14, name: 'Floral Palazzo Pants', brand: 'W', price: 1099, originalPrice: 2199, discount: 50, rating: 4.3, reviews: 2345, image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=500&fit=crop', category: 'Women' },
    { id: 15, name: 'Kids Denim Jacket', brand: 'US Polo Kids', price: 1499, originalPrice: 2999, discount: 50, rating: 4.4, reviews: 876, image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=500&fit=crop', category: 'Kids' },
    { id: 16, name: 'Sneakers', brand: 'Adidas', price: 2999, originalPrice: 5999, discount: 50, rating: 4.5, reviews: 6543, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=500&fit=crop', category: 'Men' },
    { id: 17, name: 'Cotton Bedsheet Set', brand: 'Home Centre', price: 1299, originalPrice: 2599, discount: 50, rating: 4.2, reviews: 1987, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=500&fit=crop', category: 'Home & Living' },
    { id: 18, name: 'Face Serum Set', brand: 'Minimalist', price: 799, originalPrice: 1599, discount: 50, rating: 4.6, reviews: 4567, image: 'https://images.unsplash.com/photo-1556229010-aa9e9f4524a5?w=400&h=500&fit=crop', category: 'Beauty' },
    { id: 19, name: 'Yoga Mat', brand: 'Strauss', price: 599, originalPrice: 1199, discount: 50, rating: 4.3, reviews: 3210, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=500&fit=crop', category: 'Home & Living' },
    { id: 20, name: 'Lipstick Set', brand: 'Maybelline', price: 999, originalPrice: 1999, discount: 50, rating: 4.4, reviews: 5432, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop', category: 'Beauty' },
    { id: 21, name: 'Formal Trousers', brand: 'Peter England', price: 1299, originalPrice: 2599, discount: 50, rating: 4.2, reviews: 2876, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop', category: 'Men' },
    { id: 22, name: 'Saree with Blouse', brand: 'Soch', price: 2499, originalPrice: 4999, discount: 50, rating: 4.6, reviews: 1876, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop', category: 'Women' },
    { id: 23, name: 'Kids Frock', brand: 'Nauti Nati', price: 799, originalPrice: 1599, discount: 50, rating: 4.3, reviews: 654, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop', category: 'Kids' },
    { id: 24, name: 'Wall Clock', brand: 'Random', price: 499, originalPrice: 999, discount: 50, rating: 4.1, reviews: 987, image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=500&fit=crop', category: 'Home & Living' },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-gray-100 text-center py-2 text-xs md:text-sm">
        <p className="text-gray-700">
          <Gift className="inline w-4 h-4 mr-1" />
          Download App & Get <span className="font-bold text-pink-600">₹300 OFF</span> on First Order
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="border-b">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <h1 className="text-2xl md:text-3xl font-bold text-pink-600 cursor-pointer">Myntra</h1>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex gap-8">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-sm font-bold uppercase hover:text-pink-600 transition pb-1 ${
                      selectedCategory === cat ? 'text-pink-600 border-b-4 border-pink-600' : 'text-gray-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-6">
              <button className="hidden md:flex flex-col items-center hover:text-pink-600 transition group">
                <User className="w-5 h-5" />
                <span className="text-xs mt-1 font-semibold">Profile</span>
              </button>
              <button className="hidden md:flex flex-col items-center hover:text-pink-600 transition group">
                <Heart className="w-5 h-5" />
                <span className="text-xs mt-1 font-semibold">Wishlist</span>
              </button>
              <button className="flex flex-col items-center hover:text-pink-600 transition relative group">
                <ShoppingBag className="w-5 h-5" />
                <span className="text-xs mt-1 font-semibold">Bag</span>
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">5</span>
              </button>
              <button 
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 py-3 border-b bg-gray-50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for products"
              className="w-full pl-10 pr-4 py-2 bg-white border rounded focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b bg-white shadow-lg">
            <nav className="px-4 py-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-3 font-bold uppercase hover:bg-pink-50 rounded transition ${
                    selectedCategory === cat ? 'text-pink-600 bg-pink-50' : 'text-gray-700'
                  }`}
                >
                  {cat}
                  <ChevronRight className="inline w-4 h-4 float-right mt-1" />
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Banners */}
      <div className="bg-gray-50 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {banners.map(banner => (
              <div key={banner.id} className={`bg-gradient-to-r ${banner.bg} text-white rounded-lg p-6 md:p-8 cursor-pointer hover:scale-105 transition-transform`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{banner.title}</h3>
                <p className="text-sm md:text-base opacity-90">{banner.subtitle}</p>
                <button className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="border-y bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <Truck className="w-5 h-5 md:w-6 md:h-6 text-pink-600" />
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-gray-600 hidden md:block">On orders above ₹999</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <RotateCcw className="w-5 h-5 md:w-6 md:h-6 text-pink-600" />
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold">Easy Returns</p>
                <p className="text-xs text-gray-600 hidden md:block">14 days return policy</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <Gift className="w-5 h-5 md:w-6 md:h-6 text-pink-600" />
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold">Special Offers</p>
                <p className="text-xs text-gray-600 hidden md:block">On first purchase</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop by Brands */}
      <div className="bg-gradient-to-b from-pink-50 to-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">MEDALS WORTHY BRANDS TO BAG</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {brands.map(brand => (
              <div key={brand.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-2 md:p-3 text-center">
                  <h3 className="font-bold text-sm md:text-base">{brand.name}</h3>
                  <p className="text-xs text-green-600 font-semibold">{brand.discount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            <span className="text-sm md:text-base text-gray-500 font-normal ml-2">({filteredProducts.length} items)</span>
          </h2>
          <select className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
            <option>Discount</option>
          </select>
        </div>

        {/* Category Pills - Mobile */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition shadow-sm ${
                selectedCategory === cat 
                  ? 'bg-pink-600 text-white' 
                  : 'bg-white text-gray-700 border hover:border-pink-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
          {filteredProducts.map(product => (
            <div key={product.id} className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow border border-transparent hover:border-gray-200">
              <div className="relative overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 md:p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-pink-50 hover:scale-110">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-gray-700 hover:text-pink-600" />
                </button>
                <div className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 rounded text-xs font-bold">
                  {product.discount}% OFF
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-2 py-2 md:px-3 md:py-3">
                  <div className="flex items-center gap-1 text-white">
                    <span className="text-xs md:text-sm font-bold">{product.rating}</span>
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-white" />
                    <span className="text-xs">| {(product.reviews / 1000).toFixed(1)}k</span>
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-3">
                <h3 className="font-bold text-sm md:text-base text-gray-800">{product.brand}</h3>
                <p className="text-xs md:text-sm text-gray-600 truncate mb-2">{product.name}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-sm md:text-base text-gray-900">₹{product.price}</span>
                  <span className="text-xs md:text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                </div>
                <p className="text-xs text-orange-600 font-semibold mt-1">({product.discount}% OFF)</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button className="bg-white border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-all">
            Load More Products
          </button>
        </div>
      </main>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p className="mb-6 text-sm md:text-base opacity-90">Get exclusive offers and updates straight to your inbox</p>
          <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
            <div>
              <h4 className="font-bold text-white mb-4 text-sm md:text-base uppercase">Online Shopping</h4>
              <ul className="space-y-2.5 text-xs md:text-sm">
                <li className="hover:text-white cursor-pointer transition">Men</li>
                <li className="hover:text-white cursor-pointer transition">Women</li>
                <li className="hover:text-white cursor-pointer transition">Kids</li>
                <li className="hover:text-white cursor-pointer transition">Home & Living</li>
                <li className="hover:text-white cursor-pointer transition">Beauty</li>
                <li className="hover:text-white cursor-pointer transition">Gift Cards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm md:text-base uppercase">Customer Policies</h4>
              <ul className="space-y-2.5 text-xs md:text-sm">
                <li className="hover:text-white cursor-pointer transition">Contact Us</li>
                <li className="hover:text-white cursor-pointer transition">FAQ</li>
                <li className="hover:text-white cursor-pointer transition">T&C</li>
                <li className="hover:text-white cursor-pointer transition">Terms Of Use</li>
                <li className="hover:text-white cursor-pointer transition">Track Orders</li>
                <li className="hover:text-white cursor-pointer transition">Shipping</li>
                <li className="hover:text-white cursor-pointer transition">Cancellation</li>
                <li className="hover:text-white cursor-pointer transition">Returns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm md:text-base uppercase">Useful Links</h4>
              <ul className="space-y-2.5 text-xs md:text-sm">
                <li className="hover:text-white cursor-pointer transition">Blog</li>
                <li className="hover:text-white cursor-pointer transition">Careers</li>
                <li className="hover:text-white cursor-pointer transition">Site Map</li>
                <li className="hover:text-white cursor-pointer transition">Corporate Info</li>
                <li className="hover:text-white cursor-pointer transition">Whitehat</li>
                <li className="hover:text-white cursor-pointer transition">Cleartrip</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">EXPERIENCE APP</h4>
              <p className="text-xs md:text-sm mb-3">Download our app for exclusive offers</p>
              <div className="flex gap-2">
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">Google Play</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">App Store</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs md:text-sm">
            <p>© 2024 www.myntra.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}