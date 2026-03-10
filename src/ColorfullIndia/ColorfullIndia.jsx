import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Heart, Users, Calendar, Mountain, Palmtree, Waves, Train, Plane, Hotel, Camera, Music, Sparkles, ChevronRight, Menu, X, ArrowRight, Globe, Clock, Award, TrendingUp } from 'lucide-react';
import GoogleMapsIndia from '../components/GoogleMapsIndia';

const ColorfullIndia = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredState, setHoveredState] = useState(null);

  const states = [
    { id: 'rajasthan', name: 'Rajasthan', capital: 'Jaipur', color: '#FF6B6B', highlights: ['Deserts', 'Fortresses', 'Culture'] },
    { id: 'kerala', name: 'Kerala', capital: 'Thiruvananthapuram', color: '#4ECDC4', highlights: ['Backwaters', 'Beaches', 'Spice Gardens'] },
    { id: 'punjab', name: 'Punjab', capital: 'Chandigarh', color: '#FFD93D', highlights: ['Agriculture', 'Culture', 'Food'] },
    { id: 'gujarat', name: 'Gujarat', capital: 'Gandhinagar', color: '#6BCF7F', highlights: ['Business', 'Heritage', 'Coast'] },
    { id: 'tamil-nadu', name: 'Tamil Nadu', capital: 'Chennai', color: '#A8E6CF', highlights: ['Temples', 'Beaches', 'Culture'] },
    { id: 'maharashtra', name: 'Maharashtra', capital: 'Mumbai', color: '#FFB6C1', highlights: ['Bollywood', 'Business', 'Beaches'] },
    { id: 'west-bengal', name: 'West Bengal', capital: 'Kolkata', color: '#DDA0DD', highlights: ['Culture', 'Literature', 'Sweets'] },
    { id: 'uttar-pradesh', name: 'Uttar Pradesh', capital: 'Lucknow', color: '#F0E68C', highlights: ['Taj Mahal', 'Heritage', 'Ganges'] },
  ];

  const festivals = [
    { name: 'Diwali', month: 'Oct-Nov', color: 'from-orange-400 to-yellow-400', icon: '🪔' },
    { name: 'Holi', month: 'March', color: 'from-pink-400 to-purple-400', icon: '🎨' },
    { name: 'Durga Puja', month: 'Oct', color: 'from-red-400 to-orange-400', icon: '🔱' },
    { name: 'Ganesh Chaturthi', month: 'Aug-Sep', color: 'from-green-400 to-blue-400', icon: '🐘' },
    { name: 'Onam', month: 'Aug-Sep', color: 'from-yellow-400 to-green-400', icon: '🛶' },
    { name: 'Baisakhi', month: 'April', color: 'from-yellow-400 to-orange-400', icon: '🌾' },
  ];

  const attractions = [
    { name: 'Taj Mahal', location: 'Agra', icon: '🕌', description: 'Symbol of Eternal Love' },
    { name: 'Gateway of India', location: 'Mumbai', icon: '🏛️', description: 'Historic Monument' },
    { name: 'Backwaters', location: 'Kerala', icon: '🚤', description: 'Serene Waters' },
    { name: 'Red Fort', location: 'Delhi', icon: '🏰', description: 'Mughal Architecture' },
    { name: 'Golden Temple', location: 'Amritsar', icon: '⛩️', description: 'Spiritual Haven' },
    { name: 'Beaches of Goa', location: 'Goa', icon: '🏖️', description: 'Coastal Paradise' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'map', 'culture', 'states', 'festivals', 'attractions'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-green-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                ColorfulIndia
              </span>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'Map', 'Culture', 'States', 'Festivals', 'Attractions'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-transparent to-green-200/20" />
        
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-green-600 bg-clip-text text-transparent">
              Welcome to Incredible India
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Discover the land of diversity, where ancient traditions meet modern dreams,
            and every corner tells a story of culture, color, and celebration.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Explore Map</span>
              <MapPin className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Discover Culture</span>
              <Heart className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, label: '1.4B People', color: 'text-orange-600' },
              { icon: Globe, label: '28 States', color: 'text-green-600' },
              { icon: Music, label: '122 Languages', color: 'text-blue-600' },
              { icon: Calendar, label: '5000+ Years', color: 'text-purple-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-sm font-medium text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight className="w-8 h-8 text-gray-400 rotate-90" />
        </motion.div>
      </section>

      {/* Interactive Google Maps India */}
      <section id="map" className="py-20 px-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-green-400 bg-clip-text text-transparent">
              Explore Incredible India
            </h2>
            <p className="text-xl text-gray-300">Click on any state to discover its unique heritage</p>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative bg-gradient-to-br from-blue-950/50 to-purple-950/50 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/10">
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Google Maps India Component */}
              <GoogleMapsIndia setSelectedState={setSelectedState} selectedState={selectedState} />
            </div>

            {/* Map Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-medium shadow-lg"
                onClick={() => {
                  // Reset map view
                  window.location.reload();
                }}
              >
                Reset View
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-medium shadow-lg"
                onClick={() => {
                  // Zoom in
                  if (window.google && window.google.maps) {
                    const mapElement = document.querySelector('div[style*="position: relative"]');
                    if (mapElement) {
                      // This would need access to the map instance
                      console.log('Zoom in functionality');
                    }
                  }
                }}
              >
                Zoom In
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium shadow-lg"
                onClick={() => {
                  // Zoom out
                  if (window.google && window.google.maps) {
                    const mapElement = document.querySelector('div[style*="position: relative"]');
                    if (mapElement) {
                      // This would need access to the map instance
                      console.log('Zoom out functionality');
                    }
                  }
                }}
              >
                Zoom Out
              </motion.button>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">How to Use</h3>
              <div className="grid md:grid-cols-3 gap-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>Click on states to explore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-green-400" />
                  <span>Discover unique heritage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>Real geographical data</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section id="culture" className="py-20 px-4 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Rich Cultural Heritage
            </h2>
            <p className="text-xl text-gray-600">Experience the diversity of Indian traditions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Classical Dance',
                items: ['Bharatanatyam', 'Kathak', 'Odissi', 'Kathakali'],
                color: 'from-pink-400 to-red-400',
                icon: Music,
              },
              {
                title: 'Cuisine',
                items: ['Biryani', 'Dosas', 'Butter Chicken', 'Samosas'],
                color: 'from-orange-400 to-yellow-400',
                icon: Heart,
              },
              {
                title: 'Art Forms',
                items: ['Madhubani', 'Warli', 'Tanjore', 'Pattachitra'],
                color: 'from-blue-400 to-purple-400',
                icon: Camera,
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals */}
      <section id="festivals" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Vibrant Festivals
            </h2>
            <p className="text-xl text-gray-600">Celebrate the colors of Indian traditions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((festival, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`bg-gradient-to-br ${festival.color} p-6 rounded-2xl shadow-xl text-white`}
              >
                <div className="text-4xl mb-4">{festival.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{festival.name}</h3>
                <p className="opacity-90">{festival.month}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section id="attractions" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Must-Visit Attractions
            </h2>
            <p className="text-xl text-gray-600">Explore the iconic landmarks of India</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-6xl">
                  {attraction.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-2">{attraction.location}</p>
                  <p className="text-gray-500 text-sm">{attraction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-green-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">ColorfulIndia</h3>
            <p className="mb-6">Discover the incredible diversity and beauty of India</p>
            <div className="flex justify-center space-x-6">
              <motion.div whileHover={{ scale: 1.2 }} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </motion.div>
            </div>
            <p className="mt-8 text-sm opacity-75">© 2024 ColorfulIndia. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default ColorfullIndia;