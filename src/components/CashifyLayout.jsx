import React, { useState } from 'react';
import { Menu, X, Smartphone, DollarSign, TrendingUp, Shield, CheckCircle, Star, ChevronRight } from 'lucide-react';

export default function CashifyLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const devices = [
    { name: 'iPhone 15 Pro', price: '₹45,000', image: '📱' },
    { name: 'Samsung S24', price: '₹38,000', image: '📱' },
    { name: 'OnePlus 12', price: '₹32,000', image: '📱' },
    { name: 'Google Pixel 8', price: '₹35,000', image: '📱' },
  ];

  const features = [
    { icon: <DollarSign className="w-8 h-8" />, title: 'Best Prices', desc: 'Get the highest value for your old devices' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Instant Payment', desc: 'Receive money immediately after verification' },
    { icon: <Shield className="w-8 h-8" />, title: 'Safe & Secure', desc: 'Your data is completely wiped and secure' },
    { icon: <Smartphone className="w-8 h-8" />, title: 'Free Doorstep', desc: 'We come to you for pickup at no cost' },
  ];

  const steps = [
    { step: '1', title: 'Select Device', desc: 'Choose your device model and condition' },
    { step: '2', title: 'Get Quote', desc: 'Receive instant price estimation' },
    { step: '3', title: 'Schedule Pickup', desc: 'Choose convenient time for pickup' },
    { step: '4', title: 'Get Paid', desc: 'Receive payment instantly on verification' },
  ];

  const testimonials = [
    { name: 'Rahul Sharma', rating: 5, text: 'Best price for my old iPhone! Quick and hassle-free process.' },
    { name: 'Priya Singh', rating: 5, text: 'Doorstep pickup was super convenient. Highly recommended!' },
    { name: 'Amit Patel', rating: 5, text: 'Got instant payment. Very professional service.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Cashify</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition">Sell Phone</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition">Buy Phone</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition">How It Works</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition">About</a>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-green-600 transition">Sell Phone</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition">Buy Phone</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition">How It Works</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition">About</a>
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Sell Your Old Phone, Get <span className="text-green-600">Instant Cash</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get the best prices for your old smartphones with free doorstep pickup and instant payment. Safe, secure, and hassle-free!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition flex items-center justify-center">
                  Sell Now <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition">
                  Check Price
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900">5L+</div>
                  <div className="text-sm text-gray-600">Devices Sold</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.8★</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24hr</div>
                  <div className="text-sm text-gray-600">Quick Service</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop" alt="Smartphones" className="rounded-2xl shadow-2xl" />
              </div>
              <div className="absolute top-10 -left-6 w-32 h-32 bg-green-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-10 -right-6 w-40 h-40 bg-emerald-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Devices */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Devices to Sell</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {devices.map((device, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition cursor-pointer">
                <div className="text-5xl mb-4 text-center">{device.image}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">{device.name}</h3>
                <p className="text-green-600 font-bold text-xl text-center">Up to {device.price}</p>
                <button className="w-full mt-4 bg-green-50 text-green-600 py-2 rounded-lg hover:bg-green-100 transition text-sm font-medium">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Cashify?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {idx < 3 && <ChevronRight className="w-6 h-6 text-gray-300 mx-auto mt-4 hidden md:block rotate-90 md:rotate-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{test.text}"</p>
                <p className="font-semibold text-gray-900">{test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Sell Your Device?</h2>
          <p className="text-xl text-white/90 mb-8">Get instant quotes and doorstep pickup today!</p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Cashify</span>
              </div>
              <p className="text-gray-400">Your trusted partner for buying and selling smartphones.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sell Phone</a></li>
                <li><a href="#" className="hover:text-white transition">Buy Phone</a></li>
                <li><a href="#" className="hover:text-white transition">Price List</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cashify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}