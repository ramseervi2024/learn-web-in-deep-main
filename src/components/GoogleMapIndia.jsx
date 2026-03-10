import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GoogleMapIndia = ({ setSelectedState, selectedState }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  // State coordinates and boundaries (approximate)
  const statesData = [
    {
      name: 'Jammu & Kashmir',
      capital: 'Srinagar/Jammu',
      highlights: ['Paradise on Earth', 'Snow Mountains', 'Dal Lake', 'Gulmarg'],
      color: '#f97316',
      population: '12.5 million',
      area: '222,236 km²',
      bounds: {
        north: 37.0,
        south: 32.0,
        east: 80.0,
        west: 73.0
      },
      center: { lat: 34.0, lng: 76.0 }
    },
    {
      name: 'Punjab',
      capital: 'Chandigarh',
      highlights: ['Golden Temple', 'Green Fields', 'Vibrant Culture', 'Bhangra'],
      color: '#3b82f6',
      population: '30.1 million',
      area: '50,362 km²',
      bounds: {
        north: 32.5,
        south: 29.0,
        east: 76.5,
        west: 73.5
      },
      center: { lat: 31.0, lng: 75.0 }
    },
    {
      name: 'Rajasthan',
      capital: 'Jaipur',
      highlights: ['Thar Desert', 'Fortresses', 'Royal Palaces', 'Camel Safaris'],
      color: '#f97316',
      population: '81.0 million',
      area: '342,239 km²',
      bounds: {
        north: 30.0,
        south: 23.0,
        east: 78.0,
        west: 69.0
      },
      center: { lat: 26.5, lng: 73.5 }
    },
    {
      name: 'Gujarat',
      capital: 'Gandhinagar',
      highlights: ['Business Hub', 'Coastline', 'Heritage Sites', 'Gir Lions'],
      color: '#22c55e',
      population: '64.1 million',
      area: '196,244 km²',
      bounds: {
        north: 24.5,
        south: 20.0,
        east: 74.5,
        west: 68.0
      },
      center: { lat: 22.5, lng: 71.0 }
    },
    {
      name: 'Uttar Pradesh',
      capital: 'Lucknow',
      highlights: ['Taj Mahal', 'Ganges', 'Rich Heritage', 'Kumbh Mela'],
      color: '#3b82f6',
      population: '240 million',
      area: '240,928 km²',
      bounds: {
        north: 29.5,
        south: 24.0,
        east: 83.0,
        west: 77.0
      },
      center: { lat: 26.5, lng: 80.5 }
    },
    {
      name: 'Madhya Pradesh',
      capital: 'Bhopal',
      highlights: ['Heart of India', 'Wildlife Sanctuaries', 'Historical Sites'],
      color: '#f97316',
      population: '85.4 million',
      area: '308,245 km²',
      bounds: {
        north: 26.5,
        south: 21.0,
        east: 83.0,
        west: 74.0
      },
      center: { lat: 23.5, lng: 78.5 }
    },
    {
      name: 'Maharashtra',
      capital: 'Mumbai',
      highlights: ['Bollywood', 'Financial Capital', 'Beaches', 'Caves'],
      color: '#22c55e',
      population: '123.1 million',
      area: '307,713 km²',
      bounds: {
        north: 22.0,
        south: 15.5,
        east: 81.0,
        west: 72.0
      },
      center: { lat: 19.0, lng: 76.5 }
    },
    {
      name: 'West Bengal',
      capital: 'Kolkata',
      highlights: ['Culture', 'Literature', 'Sweets', 'Durga Puja'],
      color: '#3b82f6',
      population: '99.6 million',
      area: '88,752 km²',
      bounds: {
        north: 27.0,
        south: 21.5,
        east: 89.5,
        west: 85.5
      },
      center: { lat: 24.0, lng: 87.5 }
    },
    {
      name: 'Karnataka',
      capital: 'Bengaluru',
      highlights: ['IT Hub', 'Palaces', 'Beaches', 'Coffee Plantations'],
      color: '#f97316',
      population: '68.4 million',
      area: '191,791 km²',
      bounds: {
        north: 18.5,
        south: 11.5,
        east: 78.5,
        west: 74.0
      },
      center: { lat: 15.0, lng: 76.5 }
    },
    {
      name: 'Tamil Nadu',
      capital: 'Chennai',
      highlights: ['Temples', 'Beaches', 'Classical Arts', 'Cuisine'],
      color: '#22c55e',
      population: '77.8 million',
      area: '130,058 km²',
      bounds: {
        north: 13.5,
        south: 8.0,
        east: 80.5,
        west: 76.0
      },
      center: { lat: 11.0, lng: 78.0 }
    },
    {
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      highlights: ['Backwaters', 'Beaches', 'Spice Gardens', 'Ayurveda'],
      color: '#3b82f6',
      population: '35.7 million',
      area: '38,863 km²',
      bounds: {
        north: 12.5,
        south: 8.0,
        east: 77.5,
        west: 74.5
      },
      center: { lat: 10.5, lng: 76.0 }
    },
    {
      name: 'Andhra Pradesh',
      capital: 'Amaravati',
      highlights: ['Coastal Line', 'Temples', 'Spicy Cuisine'],
      color: '#f97316',
      population: '53.9 million',
      area: '160,205 km²',
      bounds: {
        north: 19.0,
        south: 12.5,
        east: 82.5,
        west: 76.5
      },
      center: { lat: 16.0, lng: 79.5 }
    },
    {
      name: 'Telangana',
      capital: 'Hyderabad',
      highlights: ['IT Industry', 'Pearl City', 'Historic Monuments'],
      color: '#22c55e',
      population: '39.1 million',
      area: '112,077 km²',
      bounds: {
        north: 19.5,
        south: 15.5,
        east: 81.5,
        west: 77.0
      },
      center: { lat: 17.5, lng: 79.0 }
    },
    {
      name: 'Odisha',
      capital: 'Bhubaneswar',
      highlights: ['Ancient Temples', 'Beaches', 'Tribal Culture'],
      color: '#3b82f6',
      population: '46.7 million',
      area: '155,707 km²',
      bounds: {
        north: 22.5,
        south: 17.5,
        east: 87.5,
        west: 81.5
      },
      center: { lat: 20.0, lng: 84.5 }
    },
    {
      name: 'Bihar',
      capital: 'Patna',
      highlights: ['Ancient History', 'Buddhist Sites', 'River Ganges'],
      color: '#f97316',
      population: '128.3 million',
      area: '94,163 km²',
      bounds: {
        north: 27.5,
        south: 24.0,
        east: 88.0,
        west: 83.0
      },
      center: { lat: 25.5, lng: 85.5 }
    },
    {
      name: 'Goa',
      capital: 'Panaji',
      highlights: ['Beaches', 'Nightlife', 'Portuguese Heritage'],
      color: '#22c55e',
      population: '1.5 million',
      area: '3,702 km²',
      bounds: {
        north: 15.8,
        south: 15.3,
        east: 74.2,
        west: 73.7
      },
      center: { lat: 15.5, lng: 73.9 }
    }
  ];

  useEffect(() => {
    // Initialize Google Maps
    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.0, lng: 78.0 }, // Center of India
        zoom: 5,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
              { color: '#fbbf24' },
              { weight: 2 },
              { visibility: 'on' }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [
              { color: '#f97316' },
              { weight: 0.1 },
              { visibility: 'on' }
            ]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              { color: '#1e293b' },
              { visibility: 'on' }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              { color: '#0f172a' },
              { visibility: 'on' }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              { visibility: 'off' }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [
              { visibility: 'off' }
            ]
          }
        ],
        restriction: {
          latLngBounds: {
            north: 40,
            south: 5,
            east: 100,
            west: 65
          },
          strictBounds: true
        }
      });

      setMap(mapInstance);

      // Add state polygons
      statesData.forEach((state) => {
        const bounds = new window.google.maps.LatLngBounds(
          new window.google.maps.LatLng(state.bounds.south, state.bounds.west),
          new window.google.maps.LatLng(state.bounds.north, state.bounds.east)
        );

        // Create a simple rectangular polygon for each state
        const polygon = new window.google.maps.Polygon({
          paths: [
            new window.google.maps.LatLng(state.bounds.north, state.bounds.west),
            new window.google.maps.LatLng(state.bounds.north, state.bounds.east),
            new window.google.maps.LatLng(state.bounds.south, state.bounds.east),
            new window.google.maps.LatLng(state.bounds.south, state.bounds.west)
          ],
          strokeColor: state.color,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: state.color,
          fillOpacity: 0.3,
          map: mapInstance,
          stateData: state
        });

        // Add hover effect
        polygon.addListener('mouseover', () => {
          polygon.setOptions({
            fillOpacity: 0.6,
            strokeWeight: 3,
            strokeOpacity: 1
          });
        });

        polygon.addListener('mouseout', () => {
          polygon.setOptions({
            fillOpacity: 0.3,
            strokeWeight: 2,
            strokeOpacity: 0.8
          });
        });

        // Add click event
        polygon.addListener('click', () => {
          setSelectedState(state);
        });
      });

      // Add animated border around India
      const indiaBounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(5, 65),
        new window.google.maps.LatLng(40, 100)
      );

      const borderCoordinates = [
        { lat: 37, lng: 73 },
        { lat: 35, lng: 76 },
        { lat: 32, lng: 79 },
        { lat: 29, lng: 80 },
        { lat: 26, lng: 78 },
        { lat: 24, lng: 77 },
        { lat: 22, lng: 75 },
        { lat: 20, lng: 73 },
        { lat: 18, lng: 72 },
        { lat: 15, lng: 74 },
        { lat: 13, lng: 75 },
        { lat: 11, lng: 77 },
        { lat: 10, lng: 79 },
        { lat: 8, lng: 80 },
        { lat: 10, lng: 82 },
        { lat: 12, lng: 84 },
        { lat: 15, lng: 86 },
        { lat: 18, lng: 88 },
        { lat: 21, lng: 90 },
        { lat: 24, lng: 89 },
        { lat: 26, lng: 87 },
        { lat: 28, lng: 85 },
        { lat: 30, lng: 82 },
        { lat: 32, lng: 79 },
        { lat: 35, lng: 76 },
        { lat: 37, lng: 73 }
      ];

      const borderPath = new window.google.maps.Polyline({
        path: borderCoordinates,
        geodesic: true,
        strokeColor: '#fbbf24',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        map: mapInstance
      });

      // Animate the border
      let dashOffset = 0;
      setInterval(() => {
        dashOffset = (dashOffset + 1) % 20;
        borderPath.setOptions({
          strokeOpacity: 0.5 + (Math.sin(dashOffset * 0.3) + 1) * 0.25
        });
      }, 100);
    };

    // Check if Google Maps is loaded
    if (window.google && window.google.maps) {
      setGoogleMapsLoaded(true);
      initMap();
    } else {
      // Wait for Google Maps to load
      window.initMap = () => {
        setGoogleMapsLoaded(true);
        initMap();
      };
    }
  }, [setSelectedState]);

  return (
    <div className="relative w-full h-full">
      <div 
        ref={mapRef} 
        className="w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        style={{ minHeight: '600px' }}
      />
      
      {!googleMapsLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading Google Maps...</p>
            <p className="text-gray-300 text-sm mt-2">Please add your Google Maps API key</p>
          </div>
        </div>
      )}

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

export default GoogleMapIndia;
