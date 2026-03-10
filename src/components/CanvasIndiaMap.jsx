import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CanvasIndiaMap = ({ setSelectedState, selectedState }) => {
  const canvasRef = useRef(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  // Real geographical coordinates for India states (lat, lng)
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
      name: 'Ladakh',
      capital: 'Leh',
      highlights: ['High Mountains', 'Buddhist Monasteries', 'Pangong Lake'],
      color: '#ef4444',
      population: '0.3 million',
      area: '59,146 km²',
      bounds: {
        north: 35.5,
        south: 32.0,
        east: 78.0,
        west: 73.0
      },
      center: { lat: 34.0, lng: 77.0 }
    },
    {
      name: 'Himachal Pradesh',
      capital: 'Shimla',
      highlights: ['Hill Stations', 'Apple Orchards', 'Adventure Sports'],
      color: '#22c55e',
      population: '7.3 million',
      area: '55,673 km²',
      bounds: {
        north: 33.0,
        south: 30.0,
        east: 78.0,
        west: 75.0
      },
      center: { lat: 31.5, lng: 76.5 }
    },
    {
      name: 'Punjab',
      capital: 'Chandigarh',
      highlights: ['Golden Temple', 'Green Fields', 'Vibrant Culture'],
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
      name: 'Chandigarh',
      capital: 'Chandigarh',
      highlights: ['Planned City', 'Rock Garden', 'Rose Garden'],
      color: '#8b5cf6',
      population: '1.2 million',
      area: '114 km²',
      bounds: {
        north: 30.8,
        south: 30.6,
        east: 76.9,
        west: 76.7
      },
      center: { lat: 30.7, lng: 76.8 }
    },
    {
      name: 'Uttarakhand',
      capital: 'Dehradun',
      highlights: ['Himalayas', 'Char Dham', 'Wildlife'],
      color: '#10b981',
      population: '10.9 million',
      area: '53,483 km²',
      bounds: {
        north: 31.5,
        south: 28.5,
        east: 80.0,
        west: 77.0
      },
      center: { lat: 30.0, lng: 78.5 }
    },
    {
      name: 'Haryana',
      capital: 'Chandigarh',
      highlights: ['Agriculture', 'Industrial Hub', 'Heritage'],
      color: '#f59e0b',
      population: '28.1 million',
      area: '44,212 km²',
      bounds: {
        north: 30.5,
        south: 27.5,
        east: 77.5,
        west: 74.5
      },
      center: { lat: 29.0, lng: 76.0 }
    },
    {
      name: 'Delhi',
      capital: 'New Delhi',
      highlights: ['Capital City', 'Historical Monuments', 'Government'],
      color: '#ec4899',
      population: '32.9 million',
      area: '1,484 km²',
      bounds: {
        north: 28.9,
        south: 28.4,
        east: 77.4,
        west: 76.8
      },
      center: { lat: 28.6, lng: 77.1 }
    },
    {
      name: 'Rajasthan',
      capital: 'Jaipur',
      highlights: ['Thar Desert', 'Fortresses', 'Royal Palaces'],
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
      name: 'Uttar Pradesh',
      capital: 'Lucknow',
      highlights: ['Taj Mahal', 'Ganges', 'Rich Heritage'],
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
      name: 'Gujarat',
      capital: 'Gandhinagar',
      highlights: ['Business Hub', 'Coastline', 'Heritage Sites'],
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
      name: 'Madhya Pradesh',
      capital: 'Bhopal',
      highlights: ['Heart of India', 'Wildlife Sanctuaries'],
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
      highlights: ['Bollywood', 'Financial Capital', 'Beaches'],
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
      name: 'Goa',
      capital: 'Panaji',
      highlights: ['Beaches', 'Nightlife', 'Portuguese Heritage'],
      color: '#8b5cf6',
      population: '1.5 million',
      area: '3,702 km²',
      bounds: {
        north: 15.8,
        south: 15.3,
        east: 74.2,
        west: 73.7
      },
      center: { lat: 15.5, lng: 73.9 }
    },
    {
      name: 'Karnataka',
      capital: 'Bengaluru',
      highlights: ['IT Hub', 'Palaces', 'Coffee Plantations'],
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
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      highlights: ['Backwaters', 'Beaches', 'Spice Gardens'],
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
      name: 'Tamil Nadu',
      capital: 'Chennai',
      highlights: ['Temples', 'Beaches', 'Classical Arts'],
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
      name: 'Chhattisgarh',
      capital: 'Raipur',
      highlights: ['Forests', 'Tribal Culture', 'Minerals'],
      color: '#3b82f6',
      population: '30.4 million',
      area: '135,192 km²',
      bounds: {
        north: 23.5,
        south: 17.5,
        east: 84.5,
        west: 80.0
      },
      center: { lat: 21.0, lng: 82.0 }
    },
    {
      name: 'Odisha',
      capital: 'Bhubaneswar',
      highlights: ['Ancient Temples', 'Beaches', 'Tribal Culture'],
      color: '#f97316',
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
      name: 'Jharkhand',
      capital: 'Ranchi',
      highlights: ['Forests', 'Minerals', 'Tribal Culture'],
      color: '#22c55e',
      population: '38.0 million',
      area: '79,714 km²',
      bounds: {
        north: 25.5,
        south: 21.5,
        east: 87.5,
        west: 83.0
      },
      center: { lat: 23.5, lng: 85.0 }
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
      name: 'Sikkim',
      capital: 'Gangtok',
      highlights: ['Mountains', 'Monasteries', 'Flora'],
      color: '#8b5cf6',
      population: '0.7 million',
      area: '7,096 km²',
      bounds: {
        north: 28.0,
        south: 27.0,
        east: 89.0,
        west: 88.0
      },
      center: { lat: 27.5, lng: 88.5 }
    },
    {
      name: 'Assam',
      capital: 'Dispur',
      highlights: ['Tea Gardens', 'Brahmaputra', 'Wildlife'],
      color: '#3b82f6',
      population: '35.6 million',
      area: '78,438 km²',
      bounds: {
        north: 28.0,
        south: 24.5,
        east: 96.0,
        west: 89.0
      },
      center: { lat: 26.0, lng: 92.5 }
    },
    {
      name: 'Meghalaya',
      capital: 'Shillong',
      highlights: ['Living Root Bridges', 'Rain', 'Mountains'],
      color: '#22c55e',
      population: '4.0 million',
      area: '22,429 km²',
      bounds: {
        north: 26.0,
        south: 25.0,
        east: 92.5,
        west: 90.0
      },
      center: { lat: 25.5, lng: 91.0 }
    },
    {
      name: 'Tripura',
      capital: 'Agartala',
      highlights: ['Palaces', 'Culture', 'Handicrafts'],
      color: '#f97316',
      population: '4.2 million',
      area: '10,486 km²',
      bounds: {
        north: 24.5,
        south: 22.5,
        east: 92.5,
        west: 91.0
      },
      center: { lat: 23.5, lng: 91.5 }
    },
    {
      name: 'Mizoram',
      capital: 'Aizawl',
      highlights: ['Mountains', 'Culture', 'Bamboo'],
      color: '#3b82f6',
      population: '1.3 million',
      area: '21,087 km²',
      bounds: {
        north: 24.5,
        south: 21.5,
        east: 93.5,
        west: 92.0
      },
      center: { lat: 23.0, lng: 92.5 }
    },
    {
      name: 'Manipur',
      capital: 'Imphal',
      highlights: ['Loktak Lake', 'Dance', 'Handicrafts'],
      color: '#22c55e',
      population: '3.2 million',
      area: '22,327 km²',
      bounds: {
        north: 25.5,
        south: 23.5,
        east: 94.5,
        west: 93.0
      },
      center: { lat: 24.5, lng: 93.5 }
    },
    {
      name: 'Nagaland',
      capital: 'Kohima',
      highlights: ['Tribal Culture', 'Hornbill Festival'],
      color: '#f97316',
      population: '2.3 million',
      area: '16,579 km²',
      bounds: {
        north: 27.0,
        south: 25.0,
        east: 95.5,
        west: 93.5
      },
      center: { lat: 26.0, lng: 94.5 }
    },
    {
      name: 'Arunachal Pradesh',
      capital: 'Itanagar',
      highlights: ['Mountains', 'Monasteries', 'Tribes'],
      color: '#3b82f6',
      population: '1.7 million',
      area: '83,743 km²',
      bounds: {
        north: 29.5,
        south: 26.5,
        east: 97.5,
        west: 91.0
      },
      center: { lat: 28.0, lng: 94.0 }
    }
  ];

  // Major cities with real coordinates
  const majorCities = [
    { name: 'New Delhi', lat: 28.6, lng: 77.1 },
    { name: 'Mumbai', lat: 19.0, lng: 72.8 },
    { name: 'Bengaluru', lat: 12.9, lng: 77.5 },
    { name: 'Chennai', lat: 13.0, lng: 80.2 },
    { name: 'Kolkata', lat: 22.5, lng: 88.3 },
    { name: 'Hyderabad', lat: 17.3, lng: 78.4 },
    { name: 'Pune', lat: 18.5, lng: 73.8 },
    { name: 'Ahmedabad', lat: 23.0, lng: 72.5 },
    { name: 'Jaipur', lat: 26.9, lng: 75.7 },
    { name: 'Lucknow', lat: 26.8, lng: 80.9 },
    { name: 'Guwahati', lat: 26.1, lng: 91.7 },
    { name: 'Chandigarh', lat: 30.7, lng: 76.7 },
    { name: 'Bhopal', lat: 23.2, lng: 77.4 },
    { name: 'Thiruvananthapuram', lat: 8.5, lng: 76.9 },
    { name: 'Srinagar', lat: 34.0, lng: 74.8 }
  ];

  // Convert lat/lng to canvas coordinates (Web Mercator projection)
  const latLngToCanvas = useCallback((lat, lng, canvasWidth, canvasHeight) => {
    const x = (lng + 180) * (canvasWidth / 360);
    const latRad = lat * Math.PI / 180;
    const mercatorY = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
    const y = (canvasHeight / 2) - (canvasWidth * mercatorY / (2 * Math.PI));
    return { x, y };
  }, []);

  // Draw the map
  const drawMap = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Apply transformations
    ctx.save();
    ctx.translate(offset.x, offset.y);
    ctx.scale(scale, scale);

    // Draw ocean background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw land background
    ctx.fillStyle = '#1e3a2a';
    ctx.fillRect(0, 0, width, height);

    // Draw states
    statesData.forEach((state, index) => {
      const { bounds, color } = state;
      
      // Convert bounds to canvas coordinates
      const nw = latLngToCanvas(bounds.north, bounds.west, width, height);
      const ne = latLngToCanvas(bounds.north, bounds.east, width, height);
      const sw = latLngToCanvas(bounds.south, bounds.west, width, height);
      const se = latLngToCanvas(bounds.south, bounds.east, width, height);

      // Draw state rectangle
      ctx.fillStyle = color + '99'; // Add transparency
      ctx.strokeStyle = hoveredState === state.name ? '#ffffff' : color;
      ctx.lineWidth = hoveredState === state.name ? 3 : 2;

      // Draw rounded rectangle for state
      const radius = 5;
      ctx.beginPath();
      ctx.moveTo(nw.x + radius, nw.y);
      ctx.lineTo(ne.x - radius, ne.y);
      ctx.quadraticCurveTo(ne.x, ne.y, ne.x, ne.y + radius);
      ctx.lineTo(se.x, se.y - radius);
      ctx.quadraticCurveTo(se.x, se.y, se.x - radius, se.y);
      ctx.lineTo(sw.x + radius, sw.y);
      ctx.quadraticCurveTo(sw.x, sw.y, sw.x, sw.y - radius);
      ctx.lineTo(nw.x, nw.y + radius);
      ctx.quadraticCurveTo(nw.x, nw.y, nw.x + radius, nw.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw state name
      const center = latLngToCanvas(state.center.lat, state.center.lng, width, height);
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(state.name, center.x, center.y);
    });

    // Draw major cities
    majorCities.forEach(city => {
      const pos = latLngToCanvas(city.lat, city.lng, width, height);
      
      // Draw city marker
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Draw city name
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(city.name, pos.x, pos.y - 10);
    });

    // Draw India border
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    
    // Approximate India border coordinates
    const borderPoints = [
      { lat: 37, lng: 73 },
      { lat: 35, lng: 77 },
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

    ctx.beginPath();
    borderPoints.forEach((point, index) => {
      const pos = latLngToCanvas(point.lat, point.lng, width, height);
      if (index === 0) {
        ctx.moveTo(pos.x, pos.y);
      } else {
        ctx.lineTo(pos.x, pos.y);
      }
    });
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }, [latLngToCanvas, hoveredState, scale, offset]);

  // Handle mouse events
  const handleCanvasClick = useCallback((event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left - offset.x) / scale;
    const y = (event.clientY - rect.top - offset.y) / scale;

    // Check which state was clicked
    statesData.forEach(state => {
      const { bounds } = state;
      const nw = latLngToCanvas(bounds.north, bounds.west, canvas.width, canvas.height);
      const se = latLngToCanvas(bounds.south, bounds.east, canvas.width, canvas.height);

      if (x >= nw.x && x <= se.x && y >= nw.y && y <= se.y) {
        setSelectedState(state);
      }
    });
  }, [latLngToCanvas, offset, scale, setSelectedState]);

  const handleCanvasMouseMove = useCallback((event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left - offset.x) / scale;
    const y = (event.clientY - rect.top - offset.y) / scale;

    // Check which state is hovered
    let foundHoveredState = null;
    statesData.forEach(state => {
      const { bounds } = state;
      const nw = latLngToCanvas(bounds.north, bounds.west, canvas.width, canvas.height);
      const se = latLngToCanvas(bounds.south, bounds.east, canvas.width, canvas.height);

      if (x >= nw.x && x <= se.x && y >= nw.y && y <= se.y) {
        foundHoveredState = state.name;
      }
    });

    setHoveredState(foundHoveredState);
  }, [latLngToCanvas, offset, scale]);

  const handleMouseDown = useCallback((event) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX - offset.x, y: event.clientY - offset.y });
  }, [offset]);

  const handleMouseMove = useCallback((event) => {
    if (isDragging) {
      setOffset({
        x: event.clientX - dragStart.x,
        y: event.clientY - dragStart.y
      });
    } else {
      handleCanvasMouseMove(event);
    }
  }, [isDragging, dragStart, handleCanvasMouseMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((event) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? 0.9 : 1.1;
    setScale(prevScale => Math.max(0.5, Math.min(3, prevScale * delta)));
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      drawMap();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [drawMap]);

  // Set canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      drawMap();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [drawMap]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-move"
        style={{ minHeight: '600px' }}
        onClick={handleCanvasClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />

      {/* Controls */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 space-y-2">
        <button
          onClick={() => setScale(prevScale => Math.min(3, prevScale * 1.2))}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Zoom In
        </button>
        <button
          onClick={() => setScale(prevScale => Math.max(0.5, prevScale * 0.8))}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Zoom Out
        </button>
        <button
          onClick={() => { setScale(1); setOffset({ x: 0, y: 0 }); }}
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
        <p className="text-sm text-gray-700">
          🖱️ Click states for details | Drag to pan | Scroll to zoom
        </p>
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

export default CanvasIndiaMap;
