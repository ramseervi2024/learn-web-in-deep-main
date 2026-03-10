import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IframeIndiaMap = ({ setSelectedState, selectedState }) => {
  // State data for information panels
  const statesData = [
    {
      name: 'Jammu & Kashmir',
      capital: 'Srinagar/Jammu',
      highlights: ['Paradise on Earth', 'Snow Mountains', 'Dal Lake', 'Gulmarg'],
      color: '#f97316',
      population: '12.5 million',
      area: '222,236 km²'
    },
    {
      name: 'Ladakh',
      capital: 'Leh',
      highlights: ['High Mountains', 'Buddhist Monasteries', 'Pangong Lake'],
      color: '#ef4444',
      population: '0.3 million',
      area: '59,146 km²'
    },
    {
      name: 'Himachal Pradesh',
      capital: 'Shimla',
      highlights: ['Hill Stations', 'Apple Orchards', 'Adventure Sports'],
      color: '#22c55e',
      population: '7.3 million',
      area: '55,673 km²'
    },
    {
      name: 'Punjab',
      capital: 'Chandigarh',
      highlights: ['Golden Temple', 'Green Fields', 'Vibrant Culture'],
      color: '#3b82f6',
      population: '30.1 million',
      area: '50,362 km²'
    },
    {
      name: 'Chandigarh',
      capital: 'Chandigarh',
      highlights: ['Planned City', 'Rock Garden', 'Rose Garden'],
      color: '#8b5cf6',
      population: '1.2 million',
      area: '114 km²'
    },
    {
      name: 'Uttarakhand',
      capital: 'Dehradun',
      highlights: ['Himalayas', 'Char Dham', 'Wildlife'],
      color: '#10b981',
      population: '10.9 million',
      area: '53,483 km²'
    },
    {
      name: 'Haryana',
      capital: 'Chandigarh',
      highlights: ['Agriculture', 'Industrial Hub', 'Heritage'],
      color: '#f59e0b',
      population: '28.1 million',
      area: '44,212 km²'
    },
    {
      name: 'Delhi',
      capital: 'New Delhi',
      highlights: ['Capital City', 'Historical Monuments', 'Government'],
      color: '#ec4899',
      population: '32.9 million',
      area: '1,484 km²'
    },
    {
      name: 'Rajasthan',
      capital: 'Jaipur',
      highlights: ['Thar Desert', 'Fortresses', 'Royal Palaces'],
      color: '#f97316',
      population: '81.0 million',
      area: '342,239 km²'
    },
    {
      name: 'Uttar Pradesh',
      capital: 'Lucknow',
      highlights: ['Taj Mahal', 'Ganges', 'Rich Heritage'],
      color: '#3b82f6',
      population: '240 million',
      area: '240,928 km²'
    },
    {
      name: 'Gujarat',
      capital: 'Gandhinagar',
      highlights: ['Business Hub', 'Coastline', 'Heritage Sites'],
      color: '#22c55e',
      population: '64.1 million',
      area: '196,244 km²'
    },
    {
      name: 'Madhya Pradesh',
      capital: 'Bhopal',
      highlights: ['Heart of India', 'Wildlife Sanctuaries'],
      color: '#f97316',
      population: '85.4 million',
      area: '308,245 km²'
    },
    {
      name: 'Maharashtra',
      capital: 'Mumbai',
      highlights: ['Bollywood', 'Financial Capital', 'Beaches'],
      color: '#22c55e',
      population: '123.1 million',
      area: '307,713 km²'
    },
    {
      name: 'Goa',
      capital: 'Panaji',
      highlights: ['Beaches', 'Nightlife', 'Portuguese Heritage'],
      color: '#8b5cf6',
      population: '1.5 million',
      area: '3,702 km²'
    },
    {
      name: 'Karnataka',
      capital: 'Bengaluru',
      highlights: ['IT Hub', 'Palaces', 'Coffee Plantations'],
      color: '#f97316',
      population: '68.4 million',
      area: '191,791 km²'
    },
    {
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      highlights: ['Backwaters', 'Beaches', 'Spice Gardens'],
      color: '#3b82f6',
      population: '35.7 million',
      area: '38,863 km²'
    },
    {
      name: 'Tamil Nadu',
      capital: 'Chennai',
      highlights: ['Temples', 'Beaches', 'Classical Arts'],
      color: '#22c55e',
      population: '77.8 million',
      area: '130,058 km²'
    },
    {
      name: 'Andhra Pradesh',
      capital: 'Amaravati',
      highlights: ['Coastal Line', 'Temples', 'Spicy Cuisine'],
      color: '#f97316',
      population: '53.9 million',
      area: '160,205 km²'
    },
    {
      name: 'Telangana',
      capital: 'Hyderabad',
      highlights: ['IT Industry', 'Pearl City', 'Historic Monuments'],
      color: '#22c55e',
      population: '39.1 million',
      area: '112,077 km²'
    },
    {
      name: 'Chhattisgarh',
      capital: 'Raipur',
      highlights: ['Forests', 'Tribal Culture', 'Minerals'],
      color: '#3b82f6',
      population: '30.4 million',
      area: '135,192 km²'
    },
    {
      name: 'Odisha',
      capital: 'Bhubaneswar',
      highlights: ['Ancient Temples', 'Beaches', 'Tribal Culture'],
      color: '#f97316',
      population: '46.7 million',
      area: '155,707 km²'
    },
    {
      name: 'West Bengal',
      capital: 'Kolkata',
      highlights: ['Culture', 'Literature', 'Sweets', 'Durga Puja'],
      color: '#3b82f6',
      population: '99.6 million',
      area: '88,752 km²'
    },
    {
      name: 'Jharkhand',
      capital: 'Ranchi',
      highlights: ['Forests', 'Minerals', 'Tribal Culture'],
      color: '#22c55e',
      population: '38.0 million',
      area: '79,714 km²'
    },
    {
      name: 'Bihar',
      capital: 'Patna',
      highlights: ['Ancient History', 'Buddhist Sites', 'River Ganges'],
      color: '#f97316',
      population: '128.3 million',
      area: '94,163 km²'
    },
    {
      name: 'Sikkim',
      capital: 'Gangtok',
      highlights: ['Mountains', 'Monasteries', 'Flora'],
      color: '#8b5cf6',
      population: '0.7 million',
      area: '7,096 km²'
    },
    {
      name: 'Assam',
      capital: 'Dispur',
      highlights: ['Tea Gardens', 'Brahmaputra', 'Wildlife'],
      color: '#3b82f6',
      population: '35.6 million',
      area: '78,438 km²'
    },
    {
      name: 'Meghalaya',
      capital: 'Shillong',
      highlights: ['Living Root Bridges', 'Rain', 'Mountains'],
      color: '#22c55e',
      population: '4.0 million',
      area: '22,429 km²'
    },
    {
      name: 'Tripura',
      capital: 'Agartala',
      highlights: ['Palaces', 'Culture', 'Handicrafts'],
      color: '#f97316',
      population: '4.2 million',
      area: '10,486 km²'
    },
    {
      name: 'Mizoram',
      capital: 'Aizawl',
      highlights: ['Mountains', 'Culture', 'Bamboo'],
      color: '#3b82f6',
      population: '1.3 million',
      area: '21,087 km²'
    },
    {
      name: 'Manipur',
      capital: 'Imphal',
      highlights: ['Loktak Lake', 'Dance', 'Handicrafts'],
      color: '#22c55e',
      population: '3.2 million',
      area: '22,327 km²'
    },
    {
      name: 'Nagaland',
      capital: 'Kohima',
      highlights: ['Tribal Culture', 'Hornbill Festival'],
      color: '#f97316',
      population: '2.3 million',
      area: '16,579 km²'
    },
    {
      name: 'Arunachal Pradesh',
      capital: 'Itanagar',
      highlights: ['Mountains', 'Monasteries', 'Tribes'],
      color: '#3b82f6',
      population: '1.7 million',
      area: '83,743 km²'
    }
  ];

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775983.285922735!2d68.0794055!3d20.1325038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0x64d07b32672c7e9a!2sIndia!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
          title="Map of India"
        />
        
        {/* Overlay for state selection */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 max-w-xs">
          <h3 className="font-semibold text-sm mb-2">Select a State:</h3>
          <div className="max-h-64 overflow-y-auto">
            {statesData.map((state) => (
              <button
                key={state.name}
                onClick={() => setSelectedState(state)}
                className="w-full text-left px-2 py-1 text-xs hover:bg-gray-100 rounded transition-colors flex items-center gap-2"
              >
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: state.color }}
                />
                {state.name}
              </button>
            ))}
          </div>
        </div>

        {/* Map Controls Info */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
          <p className="text-xs text-gray-700">
            🗺️ Interactive Google Maps | Scroll to zoom | Drag to pan
          </p>
        </div>
      </div>

      {/* State Information Panel */}
      <AnimatePresence>
        {selectedState && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 to-purple-900/95 rounded-3xl p-8 flex items-center justify-center backdrop-blur-md border border-white/20"
          >
            <motion.div 
              className="text-center max-w-md"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div 
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-2xl"
                style={{ 
                  backgroundColor: selectedState.color,
                  boxShadow: `0 0 40px ${selectedState.color}50`
                }}
              >
                {selectedState.name.charAt(0)}
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">{selectedState.name}</h3>
              <p className="text-xl text-gray-300 mb-2">Capital: {selectedState.capital}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-sm text-gray-400">Population</p>
                  <p className="text-lg font-semibold text-white">{selectedState.population}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-sm text-gray-400">Area</p>
                  <p className="text-lg font-semibold text-white">{selectedState.area}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {selectedState.highlights.map((highlight, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="px-4 py-2 rounded-full text-white text-sm font-medium"
                    style={{ backgroundColor: selectedState.color }}
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedState(null)}
                className="px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium text-white border border-white/30 hover:bg-white/30 transition-all"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IframeIndiaMap;
