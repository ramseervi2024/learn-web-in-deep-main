import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RealisticIndiaMap = ({ setSelectedState, selectedState }) => {
  const [hoveredState, setHoveredState] = useState(null);

  // Comprehensive state data with all states and union territories
  const statesData = [
    {
      name: 'Jammu & Kashmir',
      capital: 'Srinagar/Jammu',
      highlights: ['Paradise on Earth', 'Snow Mountains', 'Dal Lake', 'Gulmarg'],
      color: '#f97316',
      population: '12.5 million',
      area: '222,236 km²',
      path: 'M 320 60 Q 380 50 450 55 L 520 65 Q 560 80 580 110 L 620 160 Q 630 180 620 200 L 580 240 Q 550 260 520 265 L 450 255 Q 400 245 350 230 L 320 180 Q 310 120 320 60 Z',
      center: { x: 470, y: 155 }
    },
    {
      name: 'Ladakh',
      capital: 'Leh',
      highlights: ['High Mountains', 'Buddhist Monasteries', 'Pangong Lake', 'Ladakh Festival'],
      color: '#ef4444',
      population: '0.3 million',
      area: '59,146 km²',
      path: 'M 220 60 Q 280 55 320 60 L 320 120 Q 310 140 280 150 L 240 145 Q 210 130 200 110 Q 195 85 220 60 Z',
      center: { x: 260, y: 105 }
    },
    {
      name: 'Himachal Pradesh',
      capital: 'Shimla',
      highlights: ['Hill Stations', 'Apple Orchards', 'Adventure Sports', 'Temples'],
      color: '#22c55e',
      population: '7.3 million',
      area: '55,673 km²',
      path: 'M 320 180 Q 360 175 400 180 L 420 220 Q 410 250 380 270 L 340 265 Q 310 250 300 220 L 305 195 Q 310 185 320 180 Z',
      center: { x: 360, y: 225 }
    },
    {
      name: 'Punjab',
      capital: 'Chandigarh',
      highlights: ['Golden Temple', 'Green Fields', 'Vibrant Culture', 'Bhangra'],
      color: '#3b82f6',
      population: '30.1 million',
      area: '50,362 km²',
      path: 'M 300 270 Q 340 265 380 270 L 400 320 Q 390 340 360 360 L 320 355 Q 290 345 280 320 L 285 295 Q 290 280 300 270 Z',
      center: { x: 340, y: 315 }
    },
    {
      name: 'Chandigarh',
      capital: 'Chandigarh',
      highlights: ['Planned City', 'Rock Garden', 'Rose Garden', 'Modern Architecture'],
      color: '#8b5cf6',
      population: '1.2 million',
      area: '114 km²',
      path: 'M 320 355 Q 335 350 350 355 L 350 370 Q 345 375 335 375 L 320 370 Q 315 365 320 355 Z',
      center: { x: 335, y: 362 }
    },
    {
      name: 'Uttarakhand',
      capital: 'Dehradun',
      highlights: ['Himalayas', 'Char Dham', 'Wildlife', 'Rivers'],
      color: '#10b981',
      population: '10.9 million',
      area: '53,483 km²',
      path: 'M 420 220 Q 450 215 480 220 L 490 280 Q 485 320 470 350 L 440 345 Q 415 330 400 300 L 405 250 Q 410 230 420 220 Z',
      center: { x: 445, y: 285 }
    },
    {
      name: 'Haryana',
      capital: 'Chandigarh',
      highlights: ['Agriculture', 'Industrial Hub', 'Heritage', 'Cuisine'],
      color: '#f59e0b',
      population: '28.1 million',
      area: '44,212 km²',
      path: 'M 360 360 Q 400 355 440 360 L 460 400 Q 450 420 420 430 L 380 425 Q 350 415 330 400 L 335 380 Q 345 365 360 360 Z',
      center: { x: 395, y: 392 }
    },
    {
      name: 'Delhi',
      capital: 'New Delhi',
      highlights: ['Capital City', 'Historical Monuments', 'Government', 'Culture'],
      color: '#ec4899',
      population: '32.9 million',
      area: '1,484 km²',
      path: 'M 420 430 Q 435 425 450 430 L 450 445 Q 445 450 435 450 L 420 445 Q 415 440 420 430 Z',
      center: { x: 435, y: 437 }
    },
    {
      name: 'Rajasthan',
      capital: 'Jaipur',
      highlights: ['Thar Desert', 'Fortresses', 'Royal Palaces', 'Camel Safaris'],
      color: '#f97316',
      population: '81.0 million',
      area: '342,239 km²',
      path: 'M 180 350 Q 280 340 380 340 L 400 400 Q 390 460 380 500 L 340 520 Q 280 510 240 500 L 160 460 Q 140 410 140 360 Q 160 355 180 350 Z',
      center: { x: 270, y: 430 }
    },
    {
      name: 'Uttar Pradesh',
      capital: 'Lucknow',
      highlights: ['Taj Mahal', 'Ganges', 'Rich Heritage', 'Kumbh Mela'],
      color: '#3b82f6',
      population: '240 million',
      area: '240,928 km²',
      path: 'M 460 400 Q 520 395 580 400 L 600 450 Q 590 500 580 540 L 540 560 Q 480 550 420 540 L 400 500 Q 410 450 460 400 Z',
      center: { x: 500, y: 480 }
    },
    {
      name: 'Gujarat',
      capital: 'Gandhinagar',
      highlights: ['Business Hub', 'Coastline', 'Heritage Sites', 'Gir Lions'],
      color: '#22c55e',
      population: '64.1 million',
      area: '196,244 km²',
      path: 'M 160 520 Q 240 510 320 520 L 340 600 Q 330 640 320 680 L 280 700 Q 220 690 180 680 L 140 640 Q 120 580 120 540 Q 140 525 160 520 Z',
      center: { x: 230, y: 610 }
    },
    {
      name: 'Madhya Pradesh',
      capital: 'Bhopal',
      highlights: ['Heart of India', 'Wildlife Sanctuaries', 'Historical Sites'],
      color: '#f97316',
      population: '85.4 million',
      area: '308,245 km²',
      path: 'M 340 520 Q 400 515 460 520 L 480 600 Q 470 650 460 700 L 420 720 Q 360 710 320 700 L 300 620 Q 310 570 340 520 Z',
      center: { x: 390, y: 620 }
    },
    {
      name: 'Maharashtra',
      capital: 'Mumbai',
      highlights: ['Bollywood', 'Financial Capital', 'Beaches', 'Caves'],
      color: '#22c55e',
      population: '123.1 million',
      area: '307,713 km²',
      path: 'M 280 700 Q 340 690 400 700 L 420 780 Q 410 840 400 880 L 360 900 Q 300 890 260 880 L 240 800 Q 250 750 280 700 Z',
      center: { x: 330, y: 795 }
    },
    {
      name: 'Goa',
      capital: 'Panaji',
      highlights: ['Beaches', 'Nightlife', 'Portuguese Heritage'],
      color: '#8b5cf6',
      population: '1.5 million',
      area: '3,702 km²',
      path: 'M 240 880 Q 260 875 280 880 L 280 900 Q 275 905 265 905 L 250 900 Q 245 895 240 880 Z',
      center: { x: 260, y: 890 }
    },
    {
      name: 'Karnataka',
      capital: 'Bengaluru',
      highlights: ['IT Hub', 'Palaces', 'Beaches', 'Coffee Plantations'],
      color: '#f97316',
      population: '68.4 million',
      area: '191,791 km²',
      path: 'M 260 900 Q 320 890 380 900 L 400 980 Q 390 1040 380 1080 L 340 1100 Q 280 1090 240 1080 L 220 1000 Q 230 950 260 900 Z',
      center: { x: 310, y: 1000 }
    },
    {
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      highlights: ['Backwaters', 'Beaches', 'Spice Gardens', 'Ayurveda'],
      color: '#3b82f6',
      population: '35.7 million',
      area: '38,863 km²',
      path: 'M 180 1000 Q 210 995 240 1000 L 240 1080 Q 230 1090 210 1090 L 190 1080 Q 175 1040 180 1000 Z',
      center: { x: 210, y: 1040 }
    },
    {
      name: 'Tamil Nadu',
      capital: 'Chennai',
      highlights: ['Temples', 'Beaches', 'Classical Arts', 'Cuisine'],
      color: '#22c55e',
      population: '77.8 million',
      area: '130,058 km²',
      path: 'M 380 1080 Q 420 1075 460 1080 L 480 1160 Q 470 1190 460 1200 L 420 1210 Q 380 1205 340 1200 L 320 1140 Q 330 1110 380 1080 Z',
      center: { x: 400, y: 1145 }
    },
    {
      name: 'Andhra Pradesh',
      capital: 'Amaravati',
      highlights: ['Coastal Line', 'Temples', 'Spicy Cuisine'],
      color: '#f97316',
      population: '53.9 million',
      area: '160,205 km²',
      path: 'M 420 780 Q 480 775 540 780 L 560 860 Q 550 900 540 940 L 500 960 Q 440 950 400 940 L 380 860 Q 390 820 420 780 Z',
      center: { x: 470, y: 870 }
    },
    {
      name: 'Telangana',
      capital: 'Hyderabad',
      highlights: ['IT Industry', 'Pearl City', 'Historic Monuments'],
      color: '#22c55e',
      population: '39.1 million',
      area: '112,077 km²',
      path: 'M 460 600 Q 500 595 540 600 L 560 680 Q 550 720 540 760 L 500 780 Q 460 770 420 760 L 400 680 Q 410 640 460 600 Z',
      center: { x: 480, y: 690 }
    },
    {
      name: 'Chhattisgarh',
      capital: 'Raipur',
      highlights: ['Forests', 'Tribal Culture', 'Minerals', 'Waterfalls'],
      color: '#3b82f6',
      population: '30.4 million',
      area: '135,192 km²',
      path: 'M 540 560 Q 580 555 620 560 L 640 640 Q 630 680 620 720 L 580 740 Q 540 730 500 720 L 480 640 Q 490 600 540 560 Z',
      center: { x: 560, y: 650 }
    },
    {
      name: 'Odisha',
      capital: 'Bhubaneswar',
      highlights: ['Ancient Temples', 'Beaches', 'Tribal Culture'],
      color: '#f97316',
      population: '46.7 million',
      area: '155,707 km²',
      path: 'M 620 540 Q 660 535 700 540 L 720 620 Q 710 660 700 700 L 660 720 Q 620 710 580 700 L 560 620 Q 570 580 620 540 Z',
      center: { x: 640, y: 630 }
    },
    {
      name: 'West Bengal',
      capital: 'Kolkata',
      highlights: ['Culture', 'Literature', 'Sweets', 'Durga Puja'],
      color: '#3b82f6',
      population: '99.6 million',
      area: '88,752 km²',
      path: 'M 700 450 Q 740 445 780 450 L 800 530 Q 790 570 780 610 L 740 630 Q 700 620 660 610 L 640 530 Q 650 490 700 450 Z',
      center: { x: 720, y: 540 }
    },
    {
      name: 'Jharkhand',
      capital: 'Ranchi',
      highlights: ['Forests', 'Minerals', 'Tribal Culture', 'Waterfalls'],
      color: '#22c55e',
      population: '38.0 million',
      area: '79,714 km²',
      path: 'M 620 400 Q 660 395 700 400 L 720 480 Q 710 520 700 560 L 660 580 Q 620 570 580 560 L 560 480 Q 570 440 620 400 Z',
      center: { x: 640, y: 490 }
    },
    {
      name: 'Bihar',
      capital: 'Patna',
      highlights: ['Ancient History', 'Buddhist Sites', 'River Ganges'],
      color: '#f97316',
      population: '128.3 million',
      area: '94,163 km²',
      path: 'M 580 340 Q 620 335 660 340 L 680 420 Q 670 460 660 500 L 620 520 Q 580 510 540 500 L 520 420 Q 530 380 580 340 Z',
      center: { x: 600, y: 430 }
    },
    {
      name: 'Sikkim',
      capital: 'Gangtok',
      highlights: ['Mountains', 'Monasteries', 'Flora', 'Tourism'],
      color: '#8b5cf6',
      population: '0.7 million',
      area: '7,096 km²',
      path: 'M 680 200 Q 700 195 720 200 L 720 250 Q 715 265 700 270 L 680 265 Q 675 250 680 200 Z',
      center: { x: 700, y: 232 }
    },
    {
      name: 'Assam',
      capital: 'Dispur',
      highlights: ['Tea Gardens', 'Brahmaputra', 'Wildlife', 'Culture'],
      color: '#3b82f6',
      population: '35.6 million',
      area: '78,438 km²',
      path: 'M 720 270 Q 780 265 840 270 L 860 350 Q 850 390 840 430 L 800 450 Q 740 440 680 430 L 660 350 Q 670 310 720 270 Z',
      center: { x: 770, y: 360 }
    },
    {
      name: 'Meghalaya',
      capital: 'Shillong',
      highlights: ['Living Root Bridges', 'Rain', 'Mountains', 'Culture'],
      color: '#22c55e',
      population: '4.0 million',
      area: '22,429 km²',
      path: 'M 840 270 Q 860 265 880 270 L 880 320 Q 875 335 860 340 L 840 335 Q 835 320 840 270 Z',
      center: { x: 860, y: 305 }
    },
    {
      name: 'Tripura',
      capital: 'Agartala',
      highlights: ['Palaces', 'Culture', 'Handicrafts', 'Tea'],
      color: '#f97316',
      population: '4.2 million',
      area: '10,486 km²',
      path: 'M 860 430 Q 880 425 900 430 L 900 480 Q 895 495 880 500 L 860 495 Q 855 480 860 430 Z',
      center: { x: 880, y: 465 }
    },
    {
      name: 'Mizoram',
      capital: 'Aizawl',
      highlights: ['Mountains', 'Culture', 'Bamboo', 'Scenic Beauty'],
      color: '#3b82f6',
      population: '1.3 million',
      area: '21,087 km²',
      path: 'M 840 350 Q 860 345 880 350 L 880 400 Q 875 415 860 420 L 840 415 Q 835 400 840 350 Z',
      center: { x: 860, y: 385 }
    },
    {
      name: 'Manipur',
      capital: 'Imphal',
      highlights: ['Loktak Lake', 'Dance', 'Handicrafts', 'Culture'],
      color: '#22c55e',
      population: '3.2 million',
      area: '22,327 km²',
      path: 'M 800 350 Q 820 345 840 350 L 840 400 Q 835 415 820 420 L 800 415 Q 795 400 800 350 Z',
      center: { x: 820, y: 385 }
    },
    {
      name: 'Nagaland',
      capital: 'Kohima',
      highlights: ['Tribal Culture', 'Hornbill Festival', 'Mountains', 'Crafts'],
      color: '#f97316',
      population: '2.3 million',
      area: '16,579 km²',
      path: 'M 760 270 Q 780 265 800 270 L 800 320 Q 795 335 780 340 L 760 335 Q 755 320 760 270 Z',
      center: { x: 780, y: 305 }
    },
    {
      name: 'Arunachal Pradesh',
      capital: 'Itanagar',
      highlights: ['Mountains', 'Monasteries', 'Tribes', 'Wildlife'],
      color: '#3b82f6',
      population: '1.7 million',
      area: '83,743 km²',
      path: 'M 720 200 Q 780 195 840 200 L 860 280 Q 850 320 840 360 L 800 380 Q 740 370 680 360 L 660 280 Q 670 240 720 200 Z',
      center: { x: 770, y: 290 }
    },
    // Union Territories
    {
      name: 'Lakshadweep',
      capital: 'Kavaratti',
      highlights: ['Coral Islands', 'Beaches', 'Water Sports', 'Marine Life'],
      color: '#8b5cf6',
      population: '70,000',
      area: '32 km²',
      path: 'M 120 1000 Q 130 995 140 1000 L 140 1010 Q 135 1015 130 1015 L 120 1010 Q 115 1005 120 1000 Z',
      center: { x: 130, y: 1005 }
    },
    {
      name: 'Andaman & Nicobar',
      capital: 'Port Blair',
      highlights: ['Islands', 'Beaches', 'Marine Life', 'Cellular Jail'],
      color: '#22c55e',
      population: '440,000',
      area: '8,249 km²',
      path: 'M 920 1100 Q 940 1095 960 1100 L 960 1150 Q 955 1155 945 1155 L 930 1150 Q 925 1145 920 1100 Z',
      center: { x: 940, y: 1125 }
    },
    {
      name: 'Puducherry',
      capital: 'Puducherry',
      highlights: ['French Quarter', 'Beaches', 'Aurobindo Ashram', 'Culture'],
      color: '#f97316',
      population: '1.5 million',
      area: '471 km²',
      path: 'M 460 1080 Q 470 1075 480 1080 L 480 1090 Q 475 1095 470 1095 L 460 1090 Q 455 1085 460 1080 Z',
      center: { x: 470, y: 1085 }
    },
    {
      name: 'Dadra & Nagar Haveli',
      capital: 'Silvassa',
      highlights: ['Forests', 'Tribal Culture', 'Industries', 'Scenic Beauty'],
      color: '#3b82f6',
      population: '0.6 million',
      area: '491 km²',
      path: 'M 260 880 Q 270 875 280 880 L 280 890 Q 275 895 270 895 L 260 890 Q 255 885 260 880 Z',
      center: { x: 270, y: 885 }
    },
    {
      name: 'Daman & Diu',
      capital: 'Daman',
      highlights: ['Beaches', 'Portuguese Heritage', 'Fortresses', 'Tourism'],
      color: '#22c55e',
      population: '0.3 million',
      area: '112 km²',
      path: 'M 180 880 Q 190 875 200 880 L 200 890 Q 195 895 190 895 L 180 890 Q 175 885 180 880 Z',
      center: { x: 190, y: 885 }
    },
    {
      name: 'Ladakh',
      capital: 'Leh',
      highlights: ['High Mountains', 'Buddhist Monasteries', 'Pangong Lake', 'Ladakh Festival'],
      color: '#ef4444',
      population: '0.3 million',
      area: '59,146 km²',
      path: 'M 220 60 Q 280 55 320 60 L 320 120 Q 310 140 280 150 L 240 145 Q 210 130 200 110 Q 195 85 220 60 Z',
      center: { x: 260, y: 105 }
    }
  ];

  // Major cities data
  const majorCities = [
    { name: 'New Delhi', x: 435, y: 437, state: 'Delhi' },
    { name: 'Mumbai', x: 280, y: 820, state: 'Maharashtra' },
    { name: 'Bengaluru', x: 340, y: 1020, state: 'Karnataka' },
    { name: 'Chennai', x: 440, y: 1180, state: 'Tamil Nadu' },
    { name: 'Kolkata', x: 740, y: 540, state: 'West Bengal' },
    { name: 'Hyderabad', x: 480, y: 720, state: 'Telangana' },
    { name: 'Pune', x: 300, y: 840, state: 'Maharashtra' },
    { name: 'Ahmedabad', x: 220, y: 620, state: 'Gujarat' },
    { name: 'Jaipur', x: 300, y: 400, state: 'Rajasthan' },
    { name: 'Lucknow', x: 520, y: 460, state: 'Uttar Pradesh' },
    { name: 'Guwahati', x: 820, y: 400, state: 'Assam' },
    { name: 'Chandigarh', x: 340, y: 370, state: 'Chandigarh' },
    { name: 'Bhopal', x: 390, y: 640, state: 'Madhya Pradesh' },
    { name: 'Thiruvananthapuram', x: 210, y: 1080, state: 'Kerala' },
    { name: 'Srinagar', x: 400, y: 120, state: 'Jammu & Kashmir' }
  ];

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 1000 1250"
        className="w-full h-full"
        style={{ minHeight: '600px' }}
      >
        {/* Define gradients and filters */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="terrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="turbulence"/>
            <feColorMatrix in="turbulence" type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 0.1 0.1 0.2 0.2 0.3 0.3 0.4"/>
            </feComponentTransfer>
            <feComposite operator="over" in2="SourceGraphic"/>
          </filter>

          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.9"/>
          </linearGradient>

          <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a2a" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#2d4a2b" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#3d5a3c" stopOpacity="0.3"/>
          </linearGradient>

          <linearGradient id="borderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24">
              <animate attributeName="stop-color" values="#fbbf24;#fb923c;#22c55e;#3b82f6;#fbbf24" dur="4s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="#f97316">
              <animate attributeName="stop-color" values="#f97316;#22c55e;#3b82f6;#fbbf24;#f97316" dur="4s" repeatCount="indefinite"/>
            </stop>
          </linearGradient>

          <pattern id="terrainTexture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#landGradient)" filter="url(#terrain)"/>
            <circle cx="20" cy="20" r="2" fill="#22c55e" opacity="0.2"/>
            <circle cx="80" cy="80" r="2" fill="#22c55e" opacity="0.2"/>
            <circle cx="60" cy="40" r="1" fill="#3b82f6" opacity="0.1"/>
            <circle cx="40" cy="60" r="1" fill="#3b82f6" opacity="0.1"/>
          </pattern>
        </defs>

        {/* Ocean/Sea background */}
        <rect width="1000" height="1250" fill="url(#oceanGradient)"/>
        
        {/* Land texture background */}
        <rect width="1000" height="1250" fill="url(#terrainTexture)" opacity="0.5"/>

        {/* Render states */}
        {statesData.map((state, index) => (
          <g key={state.name}>
            <motion.path
              d={state.path}
              fill={state.color}
              fillOpacity="0.6"
              stroke="url(#borderGlow)"
              strokeWidth="1.5"
              filter="url(#glow)"
              whileHover={{ 
                fillOpacity: 0.9,
                strokeWidth: 2.5,
                scale: 1.02,
                filter: 'url(#glow) brightness(1.2)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedState(state)}
              onMouseEnter={() => setHoveredState(state.name)}
              onMouseLeave={() => setHoveredState(null)}
              className="cursor-pointer transition-all duration-300"
              style={{ transformOrigin: `${state.center.x}px ${state.center.y}px` }}
            >
              <animate attributeName="stroke-width" values="1.5;2;1.5" dur={`${2 + index * 0.1}s`} repeatCount="indefinite"/>
            </motion.path>

            {/* State labels */}
            <text
              x={state.center.x}
              y={state.center.y}
              fill="white"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              opacity={hoveredState === state.name ? 1 : 0.7}
              className="pointer-events-none"
              style={{ textShadow: '0 0 3px rgba(0,0,0,0.8)' }}
            >
              {state.name.length > 8 ? state.name.substring(0, 8) + '..' : state.name}
            </text>
          </g>
        ))}

        {/* Major cities */}
        {majorCities.map((city, index) => (
          <g key={city.name}>
            <motion.circle
              cx={city.x}
              cy={city.y}
              r="4"
              fill="#ffffff"
              stroke="#ef4444"
              strokeWidth="2"
              whileHover={{ r: 6 }}
              className="cursor-pointer"
            >
              <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite"/>
            </motion.circle>
            <text
              x={city.x}
              y={city.y - 8}
              fill="white"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
              style={{ textShadow: '0 0 2px rgba(0,0,0,0.8)' }}
            >
              {city.name}
            </text>
          </g>
        ))}

        {/* Animated border around India */}
        <motion.path
          d="M 220 60 Q 320 50 450 55 L 520 65 Q 580 80 620 160 L 660 280 Q 680 340 680 420 L 780 450 Q 860 480 900 560 L 880 640 Q 860 700 800 750 L 700 800 Q 600 850 500 900 L 400 950 Q 300 1000 200 1050 L 180 1100 Q 160 1050 140 1000 Q 120 900 120 800 Q 140 700 180 600 Q 200 500 220 400 Q 240 300 260 200 Q 280 120 320 80 Q 340 70 220 60 Z"
          fill="none"
          stroke="url(#borderGlow)"
          strokeWidth="3"
          filter="url(#glow)"
          opacity="0.8"
        >
          <animate attributeName="stroke-dasharray" values="0 4000;4000 0" dur="10s" repeatCount="indefinite"/>
          <animate attributeName="stroke-width" values="3;5;3" dur="3s" repeatCount="indefinite"/>
        </motion.path>

        {/* Floating particles for 3D effect */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={i}
            r={Math.random() * 2 + 1}
            fill="#fbbf24"
            opacity="0.6"
            animate={{
              cx: [Math.random() * 1000, Math.random() * 1000],
              cy: [Math.random() * 1250, Math.random() * 1250],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </svg>

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

export default RealisticIndiaMap;
