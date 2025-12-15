import React, { useState, useRef, useEffect } from 'react';
import { Heart, Download, Play, Pause, Video, Image as ImageIcon, Edit2, Save, Trash2, Sparkles, Film } from 'lucide-react';

const WeddingCardGenerator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('romantic');
  const [formData, setFormData] = useState({
    brideName: '',
    groomName: '',
    weddingDate: '',
    venue: '',
    message: '',
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [savedCards, setSavedCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const templates = {
    romantic: {
      name: 'Romantic Bliss',
      colors: ['#667eea', '#764ba2'],
      fontFamily: 'serif',
      animation: 'hearts',
      particles: 15
    },
    elegant: {
      name: 'Elegant Gold',
      colors: ['#f6d365', '#fda085'],
      fontFamily: 'serif',
      animation: 'sparkle',
      particles: 20
    },
    modern: {
      name: 'Modern Minimal',
      colors: ['#a8edea', '#fed6e3'],
      fontFamily: 'sans-serif',
      animation: 'fade',
      particles: 10
    },
    vintage: {
      name: 'Vintage Romance',
      colors: ['#ffecd2', '#fcb69f'],
      fontFamily: 'cursive',
      animation: 'confetti',
      particles: 25
    },
    sunset: {
      name: 'Sunset Dreams',
      colors: ['#fa709a', '#fee140'],
      fontFamily: 'serif',
      animation: 'wave',
      particles: 12
    },
    garden: {
      name: 'Garden Party',
      colors: ['#a8ff78', '#78ffd6'],
      fontFamily: 'sans-serif',
      animation: 'flowers',
      particles: 18
    },
    royal: {
      name: 'Royal Purple',
      colors: ['#360033', '#0b8793'],
      fontFamily: 'serif',
      animation: 'stars',
      particles: 30
    },
    ocean: {
      name: 'Ocean Breeze',
      colors: ['#2E3192', '#1BFFFF'],
      fontFamily: 'sans-serif',
      animation: 'bubbles',
      particles: 22
    }
  };

  const dummyCards = [
    {
      id: 1,
      brideName: 'Emily',
      groomName: 'James',
      weddingDate: '2025-06-15',
      venue: 'Grand Beach Resort, Malibu',
      message: 'Join us as we celebrate our love and begin our journey together. Your presence will make our day even more special!',
      template: 'romantic'
    },
    {
      id: 2,
      brideName: 'Sophia',
      groomName: 'Michael',
      weddingDate: '2025-08-20',
      venue: 'The Royal Gardens, London',
      message: 'Together with our families, we invite you to share in our joy as we exchange vows.',
      template: 'elegant'
    },
    {
      id: 3,
      brideName: 'Priya',
      groomName: 'Raj',
      weddingDate: '2025-12-10',
      venue: 'Taj Palace, Mumbai',
      message: 'Two hearts, two souls, united as one. Please join us for our wedding celebration!',
      template: 'sunset'
    },
    {
      id: 4,
      brideName: 'Isabella',
      groomName: 'Lucas',
      weddingDate: '2025-09-05',
      venue: 'Vineyard Estate, Tuscany',
      message: 'Love brought us together, and now we want to celebrate with you. Join us for a day of love and laughter!',
      template: 'vintage'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentFrame(prev => (prev + 1) % 180);
      }, 33); // ~30fps
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    drawCard();
  }, [selectedTemplate, formData, currentFrame]);

  const drawCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const template = templates[selectedTemplate];
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, template.colors[0]);
    gradient.addColorStop(1, template.colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Animated background
    drawAnimation(ctx, template.animation, template.particles);
    
    // Decorative frame with animation
    const frameOffset = Math.sin(currentFrame * 0.03) * 2;
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(currentFrame * 0.05) * 0.1})`;
    ctx.lineWidth = 4;
    ctx.strokeRect(20 + frameOffset, 20 + frameOffset, canvas.width - 40 - frameOffset * 2, canvas.height - 40 - frameOffset * 2);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
    
    // Add corner decorations
    drawCornerDecorations(ctx);
    
    // Content with shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    
    // Animated title
    const titleScale = 1 + Math.sin(currentFrame * 0.04) * 0.05;
    ctx.save();
    ctx.translate(canvas.width / 2, 100);
    ctx.scale(titleScale, titleScale);
    ctx.font = `bold 52px ${template.fontFamily}`;
    ctx.fillText("You're Invited!", 0, 0);
    ctx.restore();
    
    ctx.shadowBlur = 5;
    
    // Names with glow effect
    if (formData.brideName || formData.groomName) {
      ctx.font = `italic 40px ${template.fontFamily}`;
      const names = `${formData.brideName} & ${formData.groomName}`;
      
      // Glow effect
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      ctx.shadowBlur = 20;
      ctx.fillText(names, canvas.width / 2, 180);
      ctx.shadowBlur = 5;
    }
    
    // Animated heart
    ctx.save();
    const heartScale = 1 + Math.sin(currentFrame * 0.06) * 0.15;
    ctx.translate(canvas.width / 2, 235);
    ctx.scale(heartScale, heartScale);
    ctx.font = '45px serif';
    ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + Math.sin(currentFrame * 0.08) * 0.2})`;
    ctx.fillText('♥', 0, 0);
    ctx.restore();
    
    ctx.fillStyle = 'white';
    
    // Date
    if (formData.weddingDate) {
      ctx.font = `26px ${template.fontFamily}`;
      const date = new Date(formData.weddingDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      ctx.fillText(date, canvas.width / 2, 290);
    }
    
    // Venue
    if (formData.venue) {
      ctx.font = `24px ${template.fontFamily}`;
      ctx.fillText(formData.venue, canvas.width / 2, 330);
    }
    
    // Message
    if (formData.message) {
      ctx.font = `20px ${template.fontFamily}`;
      const words = formData.message.split(' ');
      let line = '';
      let y = 390;
      
      words.forEach((word, i) => {
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > canvas.width - 120 && i > 0) {
          ctx.fillText(line, canvas.width / 2, y);
          line = word + ' ';
          y += 28;
        } else {
          line = testLine;
        }
      });
      ctx.fillText(line, canvas.width / 2, y);
    }
    
    ctx.shadowBlur = 0;
  };

  const drawCornerDecorations = (ctx) => {
    const corners = [
      { x: 40, y: 40 },
      { x: 760, y: 40 },
      { x: 40, y: 460 },
      { x: 760, y: 460 }
    ];
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    
    corners.forEach((corner, i) => {
      const offset = Math.sin(currentFrame * 0.05 + i) * 3;
      ctx.beginPath();
      ctx.moveTo(corner.x - 15 + offset, corner.y);
      ctx.lineTo(corner.x, corner.y);
      ctx.lineTo(corner.x, corner.y + (i < 2 ? 15 : -15) + offset);
      ctx.stroke();
    });
  };

  const drawAnimation = (ctx, type, count) => {
    const frame = currentFrame;
    
    switch(type) {
      case 'hearts':
        for (let i = 0; i < count; i++) {
          const x = (frame * 3 + i * 60) % 850;
          const y = 60 + Math.sin(frame * 0.04 + i) * 40 + i * 25;
          const size = 20 + Math.sin(frame * 0.06 + i) * 8;
          ctx.font = `${size}px serif`;
          ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + Math.sin(frame * 0.08 + i) * 0.15})`;
          ctx.fillText('♥', x, y % 500);
        }
        break;
        
      case 'sparkle':
        for (let i = 0; i < count; i++) {
          if (frame % 5 === i % 5) {
            const x = (Math.sin(i * 2.5) * 300 + 400) + Math.cos(frame * 0.05 + i) * 50;
            const y = (Math.cos(i * 2.5) * 200 + 250) + Math.sin(frame * 0.05 + i) * 50;
            const size = 2 + Math.random() * 3;
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
            
            // Star points
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x - size * 3, y);
            ctx.lineTo(x + size * 3, y);
            ctx.moveTo(x, y - size * 3);
            ctx.lineTo(x, y + size * 3);
            ctx.stroke();
          }
        }
        break;
        
      case 'confetti':
        for (let i = 0; i < count; i++) {
          const x = (frame * 4 + i * 35) % 850;
          const y = (frame * 3 + i * 40 + Math.sin(frame * 0.05 + i) * 30) % 550;
          const rotation = frame * 0.1 + i;
          const hue = (i * 360 / count) % 360;
          
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rotation);
          ctx.fillStyle = `hsla(${hue}, 70%, 60%, 0.7)`;
          ctx.fillRect(-4, -8, 8, 16);
          ctx.restore();
        }
        break;
        
      case 'flowers':
        for (let i = 0; i < count; i++) {
          const x = 80 + (i * 50) % 700;
          const y = 60 + Math.sin(frame * 0.04 + i) * 25 + (i % 3) * 140;
          const size = 25 + Math.sin(frame * 0.06 + i) * 8;
          const rotation = Math.sin(frame * 0.03 + i) * 0.3;
          
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rotation);
          ctx.font = `${size}px serif`;
          ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(frame * 0.07 + i) * 0.2})`;
          ctx.fillText('✿', 0, 0);
          ctx.restore();
        }
        break;
        
      case 'stars':
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2 + frame * 0.02;
          const radius = 150 + Math.sin(frame * 0.05 + i) * 50;
          const x = 400 + Math.cos(angle) * radius;
          const y = 250 + Math.sin(angle) * radius;
          const size = 15 + Math.sin(frame * 0.08 + i) * 5;
          
          ctx.font = `${size}px serif`;
          ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + Math.sin(frame * 0.1 + i) * 0.3})`;
          ctx.fillText('✦', x, y);
        }
        break;
        
      case 'bubbles':
        for (let i = 0; i < count; i++) {
          const x = (i * 40 + Math.sin(frame * 0.03 + i) * 100) % 800;
          const y = (500 - (frame * 2 + i * 25) % 550);
          const size = 8 + Math.sin(frame * 0.05 + i) * 4;
          
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(frame * 0.08 + i) * 0.2})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.stroke();
          
          ctx.fillStyle = `rgba(255, 255, 255, 0.1)`;
          ctx.fill();
        }
        break;
        
      case 'wave':
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 3;
        for (let wave = 0; wave < 3; wave++) {
          ctx.beginPath();
          for (let x = 0; x < 800; x += 5) {
            const y = 250 + Math.sin((x + frame * 3 + wave * 50) * 0.02) * 40 + wave * 60;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        break;
    }
  };

  const startRecording = async () => {
    const canvas = canvasRef.current;
    const stream = canvas.captureStream(30);
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp9',
      videoBitsPerSecond: 2500000
    });
    
    chunksRef.current = [];
    
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunksRef.current.push(e.data);
      }
    };
    
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'wedding-invitation.webm';
      a.click();
      URL.revokeObjectURL(url);
      setIsRecording(false);
    };
    
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setIsRecording(true);
    setIsPlaying(true);
    
    // Auto-stop after 6 seconds
    setTimeout(() => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    }, 6000);
  };

  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'wedding-invitation.png';
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  };

  const loadDummyCard = (card) => {
    setFormData({
      brideName: card.brideName,
      groomName: card.groomName,
      weddingDate: card.weddingDate,
      venue: card.venue,
      message: card.message
    });
    setSelectedTemplate(card.template);
    setEditingCard(card.id);
  };

  const saveCard = () => {
    const newCard = {
      id: Date.now(),
      ...formData,
      template: selectedTemplate
    };
    setSavedCards([...savedCards, newCard]);
    alert('Card saved successfully!');
  };

  const deleteCard = (id) => {
    setSavedCards(savedCards.filter(card => card.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Wedding Video & E-Card Generator
          </h1>
          <p className="text-gray-600">Create stunning animated invitations with video export</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Panel - Preview */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h2 className="text-xl font-semibold text-gray-800">Live Preview</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition flex items-center gap-2"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                  <button
                    onClick={handleDownloadImage}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition flex items-center gap-2"
                  >
                    <ImageIcon size={18} />
                    PNG
                  </button>
                  <button
                    onClick={startRecording}
                    disabled={isRecording}
                    className={`px-4 py-2 ${isRecording ? 'bg-red-500' : 'bg-pink-500 hover:bg-pink-600'} text-white rounded-lg transition flex items-center gap-2 disabled:opacity-70`}
                  >
                    {isRecording ? <Film size={18} className="animate-pulse" /> : <Video size={18} />}
                    {isRecording ? 'Recording...' : 'Video'}
                  </button>
                </div>
              </div>
              <canvas
                ref={canvasRef}
                width={800}
                height={500}
                className="w-full rounded-lg shadow-lg border-4 border-gray-100"
              />
              {isRecording && (
                <p className="text-sm text-red-600 mt-2 animate-pulse text-center">
                  Recording 6-second video... Please wait
                </p>
              )}
            </div>

            {/* Dummy Cards Section */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles size={24} className="text-yellow-500" />
                Sample Cards (Click to Edit)
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {dummyCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => loadDummyCard(card)}
                    className={`p-4 rounded-xl transition transform hover:scale-105 text-left ${
                      editingCard === card.id ? 'ring-4 ring-purple-500' : ''
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${templates[card.template].colors[0]}, ${templates[card.template].colors[1]})`
                    }}
                  >
                    <p className="text-white font-semibold text-sm mb-1">
                      {card.brideName} & {card.groomName}
                    </p>
                    <p className="text-white text-xs opacity-90">{templates[card.template].name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Saved Cards */}
            {savedCards.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Save size={24} className="text-green-500" />
                  Your Saved Cards
                </h2>
                <div className="space-y-2">
                  {savedCards.map((card) => (
                    <div key={card.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{card.brideName} & {card.groomName}</p>
                        <p className="text-sm text-gray-600">{templates[card.template].name}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => loadDummyCard(card)}
                          className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteCard(card.id)}
                          className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Controls */}
          <div className="space-y-4">
            {/* Template Selection */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles size={24} className="text-purple-500" />
                Choose Template
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(templates).map(([key, template]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTemplate(key)}
                    className={`p-4 rounded-xl transition transform hover:scale-105 ${
                      selectedTemplate === key
                        ? 'ring-4 ring-purple-500 shadow-lg'
                        : 'hover:shadow-md'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})`
                    }}
                  >
                    <span className="text-white font-semibold text-sm">{template.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Edit2 size={24} className="text-pink-500" />
                Card Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bride's Name
                  </label>
                  <input
                    type="text"
                    value={formData.brideName}
                    onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter bride's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Groom's Name
                  </label>
                  <input
                    type="text"
                    value={formData.groomName}
                    onChange={(e) => setFormData({ ...formData, groomName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter groom's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Venue
                  </label>
                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter venue name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Personal Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    rows="4"
                    placeholder="Add a special message..."
                  />
                </div>

                <button
                  onClick={saveCard}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
                >
                  <Save size={20} />
                  Save Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCardGenerator;