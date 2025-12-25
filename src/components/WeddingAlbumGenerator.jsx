import React, { useState } from 'react';
import { 
  Camera, Heart, Download, Upload, X, Edit2, Save, RotateCw, 
  Trash2, BookOpen, Layout, ZoomIn, Move, Maximize2, Minus, Plus, 
  Crop, Square, Contrast, Sun, Droplets, Filter, Palette, 
  RotateCcw, FlipHorizontal, FlipVertical, Layers 
} from 'lucide-react';

const WeddingAlbumGenerator = () => {
  const dummyPhotos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', caption: 'The Happy Couple' },
    { id: 2, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop', caption: 'First Dance' },
    { id: 3, url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop', caption: 'The Venue' },
    { id: 4, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop', caption: 'Ceremony Moments' },
    { id: 5, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop', caption: 'Wedding Rings' },
    { id: 6, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop', caption: 'Bridal Portrait' },
    { id: 7, url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop', caption: 'Exchanging Vows' },
    { id: 8, url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop', caption: 'The Kiss' },
    { id: 9, url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=600&fit=crop', caption: 'Bouquet Toss' },
    { id: 10, url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop', caption: 'Reception' },
    { id: 11, url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop', caption: 'Cutting the Cake' },
    { id: 12, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', caption: 'Groom Portrait' },
    { id: 13, url: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&h=600&fit=crop', caption: 'Sunset Photos' },
    { id: 14, url: 'https://images.unsplash.com/photo-1525258350-c1ae2a7e9877?w=800&h=600&fit=crop', caption: 'With Friends' },
    { id: 15, url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2eb?w=800&h=600&fit=crop', caption: 'Family Time' },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState('classic');
  const [downloadLayout, setDownloadLayout] = useState('book');
  const [photos, setPhotos] = useState(dummyPhotos);
  const [coupleNames, setCoupleNames] = useState({ bride: 'Emily', groom: 'James' });
  const [weddingDate, setWeddingDate] = useState('2024-06-15');
  const [editingId, setEditingId] = useState(null);
  const [editCaption, setEditCaption] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [editingPhotoId, setEditingPhotoId] = useState(null);
  const [photoAdjustments, setPhotoAdjustments] = useState(() => {
    const initialAdjustments = {};
    dummyPhotos.forEach(photo => {
      initialAdjustments[photo.id] = { 
        scale: 1, 
        xOffset: 0, 
        yOffset: 0, 
        fit: 'contain',
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hue: 0,
        rotation: 0,
        flipHorizontal: false,
        flipVertical: false,
        filter: 'none'
      };
    });
    return initialAdjustments;
  });

  const templates = [
    {
      id: 'classic',
      name: 'Classic Elegance',
      color: 'from-rose-100 to-pink-100',
      accent: 'text-rose-600',
      border: 'border-rose-300',
      bgColor: '#fff1f2'
    },
    {
      id: 'modern',
      name: 'Modern Minimalist',
      color: 'from-slate-50 to-gray-100',
      accent: 'text-gray-800',
      border: 'border-gray-400',
      bgColor: '#f8fafc'
    },
    {
      id: 'romantic',
      name: 'Romantic Blush',
      color: 'from-pink-200 to-purple-200',
      accent: 'text-pink-700',
      border: 'border-pink-400',
      bgColor: '#fce7f3'
    },
    {
      id: 'vintage',
      name: 'Vintage Charm',
      color: 'from-amber-100 to-yellow-100',
      accent: 'text-amber-700',
      border: 'border-amber-400',
      bgColor: '#fef3c7'
    }
  ];

  const downloadLayouts = [
    { id: 'book', name: 'Book Style', icon: BookOpen, description: 'Two pages side by side' },
    { id: 'magazine', name: 'Magazine Layout', icon: Layout, description: 'Modern grid layout' },
    { id: 'polaroid', name: 'Polaroid Style', icon: Camera, description: 'Instant photo style' },
    { id: 'collage', name: 'Collage', icon: Layout, description: 'Creative mixed layout' }
  ];

  const filters = [
    { id: 'none', name: 'No Filter' },
    { id: 'vintage', name: 'Vintage', style: 'sepia(0.5) contrast(1.1)' },
    { id: 'blackwhite', name: 'Black & White', style: 'grayscale(100%)' },
    { id: 'warm', name: 'Warm', style: 'sepia(0.3) saturate(1.2)' },
    { id: 'cool', name: 'Cool', style: 'hue-rotate(180deg) contrast(1.1)' },
    { id: 'dramatic', name: 'Dramatic', style: 'contrast(1.3) brightness(0.9)' },
  ];

  const currentTemplate = templates.find(t => t.id === selectedTemplate);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newId = Date.now() + Math.random();
        setPhotoAdjustments(prev => ({
          ...prev,
          [newId]: { 
            scale: 1,
            xOffset: 0,
            yOffset: 0,
            fit: 'contain',
            brightness: 100,
            contrast: 100,
            saturation: 100,
            hue: 0,
            rotation: 0,
            flipHorizontal: false,
            flipVertical: false,
            filter: 'none'
          }
        }));
        setPhotos(prev => [...prev, {
          id: newId,
          url: e.target.result,
          caption: 'New Photo'
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (id) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id));
    setPhotoAdjustments(prev => {
      const newAdjustments = { ...prev };
      delete newAdjustments[id];
      return newAdjustments;
    });
  };

  const startEditing = (photo) => {
    setEditingId(photo.id);
    setEditCaption(photo.caption);
  };

  const saveCaption = (id) => {
    setPhotos(prev => prev.map(photo => 
      photo.id === id ? { ...photo, caption: editCaption } : photo
    ));
    setEditingId(null);
    setEditCaption('');
  };

  const resetToDefault = () => {
    setPhotos(dummyPhotos);
    setCoupleNames({ bride: 'Emily', groom: 'James' });
    setWeddingDate('2024-06-15');
    const initialAdjustments = {};
    dummyPhotos.forEach(photo => {
      initialAdjustments[photo.id] = { 
        scale: 1, 
        xOffset: 0, 
        yOffset: 0, 
        fit: 'contain',
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hue: 0,
        rotation: 0,
        flipHorizontal: false,
        flipVertical: false,
        filter: 'none'
      };
    });
    setPhotoAdjustments(initialAdjustments);
  };

  const openImageEditor = (photoId) => {
    setEditingPhotoId(photoId);
    if (!photoAdjustments[photoId]) {
      setPhotoAdjustments(prev => ({
        ...prev,
        [photoId]: { 
          scale: 1,
          xOffset: 0,
          yOffset: 0,
          fit: 'contain',
          brightness: 100,
          contrast: 100,
          saturation: 100,
          hue: 0,
          rotation: 0,
          flipHorizontal: false,
          flipVertical: false,
          filter: 'none'
        }
      }));
    }
  };

  const closeImageEditor = () => {
    setEditingPhotoId(null);
  };

  const updateAdjustment = (photoId, key, value) => {
    setPhotoAdjustments(prev => ({
      ...prev,
      [photoId]: {
        ...(prev[photoId] || {}),
        [key]: typeof value === 'boolean' ? value : parseFloat(value)
      }
    }));
  };

  const resetAdjustment = (photoId) => {
    setPhotoAdjustments(prev => ({
      ...prev,
      [photoId]: { 
        scale: 1,
        xOffset: 0,
        yOffset: 0,
        fit: 'contain',
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hue: 0,
        rotation: 0,
        flipHorizontal: false,
        flipVertical: false,
        filter: 'none'
      }
    }));
  };

  const getAdjustment = (photoId) => {
    return photoAdjustments[photoId] || { 
      scale: 1, 
      xOffset: 0, 
      yOffset: 0, 
      fit: 'contain',
      brightness: 100,
      contrast: 100,
      saturation: 100,
      hue: 0,
      rotation: 0,
      flipHorizontal: false,
      flipVertical: false,
      filter: 'none'
    };
  };

  const applyFilter = (photoId, filterId) => {
    updateAdjustment(photoId, 'filter', filterId);
  };

  const rotateImage = (photoId, degrees) => {
    const currentRotation = getAdjustment(photoId).rotation;
    updateAdjustment(photoId, 'rotation', currentRotation + degrees);
  };

  const getImageStyle = (photoId) => {
    const adj = getAdjustment(photoId);
    const selectedFilter = filters.find(f => f.id === adj.filter);
    
    return {
      objectFit: adj.fit,
      transform: `
        scale(${adj.scale})
        translate(${adj.xOffset}%, ${adj.yOffset}%)
        rotate(${adj.rotation}deg)
        scaleX(${adj.flipHorizontal ? -1 : 1})
        scaleY(${adj.flipVertical ? -1 : 1})
      `,
      transformOrigin: 'center center',
      filter: `
        brightness(${adj.brightness}%)
        contrast(${adj.contrast}%)
        saturate(${adj.saturation}%)
        hue-rotate(${adj.hue}deg)
        ${selectedFilter?.style || ''}
      `,
      transition: 'transform 0.3s ease, filter 0.3s ease'
    };
  };

  const generateHTMLContent = (layout) => {
    const formattedDate = new Date(weddingDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let layoutHTML = '';

    if (layout === 'book') {
      layoutHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px;">
          ${photos.map((photo, index) => {
            const adj = getAdjustment(photo.id);
            const selectedFilter = filters.find(f => f.id === adj.filter);
            return `
              <div style="break-inside: avoid; margin-bottom: 40px; overflow: hidden;">
                <div style="width: 100%; height: 400px; overflow: hidden; position: relative; border-radius: 8px; border: 3px solid ${currentTemplate.border === 'border-rose-300' ? '#fda4af' : '#d1d5db'};">
                  <img src="${photo.url}" alt="${photo.caption}" 
                    style="
                      width: 100%;
                      height: 100%;
                      object-fit: ${adj.fit};
                      transform: scale(${adj.scale}) translate(${adj.xOffset}%, ${adj.yOffset}%) rotate(${adj.rotation}deg) scaleX(${adj.flipHorizontal ? -1 : 1}) scaleY(${adj.flipVertical ? -1 : 1});
                      transform-origin: center center;
                      filter: brightness(${adj.brightness}%) contrast(${adj.contrast}%) saturate(${adj.saturation}%) hue-rotate(${adj.hue}deg) ${selectedFilter?.style || ''};
                    "
                  >
                </div>
                <p style="text-align: center; margin-top: 15px; font-size: 16px; color: #4b5563; font-style: italic;">${photo.caption}</p>
                <p style="text-align: center; margin-top: 5px; font-size: 14px; color: #9ca3af;">Page ${index + 1}</p>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Similar updates for other layouts...

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wedding Album - ${coupleNames.bride} & ${coupleNames.groom}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Georgia', serif;
            background: linear-gradient(to bottom right, ${currentTemplate.bgColor}, white);
            padding: 40px;
            min-height: 100vh;
          }
          .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            padding: 60px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            border-radius: 16px;
          }
          .cover {
            text-align: center;
            padding: 80px 40px;
            border-bottom: 3px solid #e5e7eb;
            margin-bottom: 40px;
          }
          .heart {
            font-size: 60px;
            color: #ec4899;
            margin-bottom: 20px;
          }
          .title {
            font-size: 48px;
            color: #be123c;
            margin-bottom: 20px;
            font-weight: bold;
          }
          .date {
            font-size: 24px;
            color: #6b7280;
            margin-bottom: 20px;
          }
          .divider {
            width: 100px;
            height: 4px;
            background: linear-gradient(to right, #ec4899, #a855f7);
            margin: 30px auto;
          }
          .quote {
            font-size: 20px;
            font-style: italic;
            color: #9ca3af;
            margin-top: 30px;
          }
          .footer {
            text-align: center;
            margin-top: 60px;
            padding-top: 40px;
            border-top: 2px solid #e5e7eb;
          }
          .footer-quote {
            font-size: 28px;
            font-style: italic;
            color: #be123c;
            margin-bottom: 20px;
          }
          .hearts {
            font-size: 20px;
            color: #ec4899;
          }
          @media print {
            body { padding: 0; background: white; }
            .container { box-shadow: none; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="cover">
            <div class="heart">♥</div>
            <h1 class="title">${coupleNames.bride} & ${coupleNames.groom}</h1>
            <p class="date">${formattedDate}</p>
            <div class="divider"></div>
            <p class="quote">Our Special Day</p>
          </div>
          
          ${layoutHTML}
          
          <div class="footer">
            <p class="footer-quote">"Forever begins today"</p>
            <div class="hearts">♥ ♥ ♥</div>
            <p style="margin-top: 20px; color: #6b7280; font-size: 16px;">${photos.length} Beautiful Memories</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };

  const handleDownload = (format) => {
    const htmlContent = generateHTMLContent(downloadLayout);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wedding-album-${coupleNames.bride}-${coupleNames.groom}-${downloadLayout}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setShowDownloadOptions(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Wedding Album Generator
              </h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={resetToDefault}
                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-all"
              >
                <RotateCw className="w-4 h-4" />
                Reset All
              </button>
              <button
                onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download HTML
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Download Options Modal */}
      {showDownloadOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Choose Download Layout</h2>
              <button
                onClick={() => setShowDownloadOptions(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {downloadLayouts.map(layout => {
                const Icon = layout.icon;
                return (
                  <button
                    key={layout.id}
                    onClick={() => setDownloadLayout(layout.id)}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      downloadLayout === layout.id
                        ? 'border-pink-500 bg-pink-50 shadow-md'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <Icon className={`w-8 h-8 mb-3 ${downloadLayout === layout.id ? 'text-pink-500' : 'text-gray-400'}`} />
                    <h3 className="font-semibold text-lg mb-1">{layout.name}</h3>
                    <p className="text-sm text-gray-600">{layout.description}</p>
                  </button>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleDownload('html')}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                Download HTML Page
              </button>
              <button
                onClick={() => {
                  handleDownload('html');
                  alert('The HTML file has been downloaded! Open it in your browser and use Print > Save as PDF to create a PDF version.');
                }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                Download & Convert to PDF
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Tip: Open the HTML file in your browser and use "Print to PDF" for a PDF version
            </p>
          </div>
        </div>
      )}

      {/* Image Editor Modal */}
      {editingPhotoId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full my-8">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Edit Photo</h2>
              <button
                onClick={closeImageEditor}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 p-6">
              {/* Preview Side - Full Width */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Preview</h3>
                <div className="bg-gray-100 rounded-xl p-4 h-[500px] flex items-center justify-center">
                  <div className="relative w-full h-full overflow-hidden rounded-lg border-4 border-white shadow-lg">
                    <img
                      src={photos.find(p => p.id === editingPhotoId)?.url}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full"
                      style={getImageStyle(editingPhotoId)}
                    />
                    {/* Center crosshair */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-white bg-opacity-50"></div>
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white bg-opacity-50"></div>
                      <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4 text-sm text-gray-600">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold">Zoom</div>
                    <div>{getAdjustment(editingPhotoId).scale.toFixed(1)}x</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold">Position</div>
                    <div>x:{getAdjustment(editingPhotoId).xOffset}, y:{getAdjustment(editingPhotoId).yOffset}</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold">Rotation</div>
                    <div>{getAdjustment(editingPhotoId).rotation}°</div>
                  </div>
                </div>
              </div>

              {/* Controls Side */}
              <div className="space-y-6">
                {/* Transform Controls */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Maximize2 className="w-4 h-4" />
                    Transform
                  </h3>
                  
                  {/* Zoom Control */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-medium text-gray-700">Zoom</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => updateAdjustment(editingPhotoId, 'scale', Math.max(0.5, getAdjustment(editingPhotoId).scale - 0.1))}
                          className="p-2 bg-white rounded-lg hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateAdjustment(editingPhotoId, 'scale', Math.min(3, getAdjustment(editingPhotoId).scale + 0.1))}
                          className="p-2 bg-white rounded-lg hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="3"
                      step="0.1"
                      value={getAdjustment(editingPhotoId).scale}
                      onChange={(e) => updateAdjustment(editingPhotoId, 'scale', e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-500"
                    />
                  </div>

                  {/* Position Controls */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Horizontal</label>
                      <input
                        type="range"
                        min="-50"
                        max="50"
                        step="1"
                        value={getAdjustment(editingPhotoId).xOffset}
                        onChange={(e) => updateAdjustment(editingPhotoId, 'xOffset', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Vertical</label>
                      <input
                        type="range"
                        min="-50"
                        max="50"
                        step="1"
                        value={getAdjustment(editingPhotoId).yOffset}
                        onChange={(e) => updateAdjustment(editingPhotoId, 'yOffset', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                      />
                    </div>
                  </div>

                  {/* Rotation & Flip */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rotation</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => rotateImage(editingPhotoId, -90)}
                          className="flex-1 py-2 bg-white border rounded-lg hover:bg-gray-50"
                        >
                          ↺ 90°
                        </button>
                        <button
                          onClick={() => rotateImage(editingPhotoId, 90)}
                          className="flex-1 py-2 bg-white border rounded-lg hover:bg-gray-50"
                        >
                          ↻ 90°
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Flip</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => updateAdjustment(editingPhotoId, 'flipHorizontal', !getAdjustment(editingPhotoId).flipHorizontal)}
                          className={`flex-1 py-2 border rounded-lg ${
                            getAdjustment(editingPhotoId).flipHorizontal
                              ? 'bg-blue-100 border-blue-500'
                              : 'bg-white hover:bg-gray-50'
                          }`}
                        >
                          <FlipHorizontal className="w-4 h-4 mx-auto" />
                        </button>
                        <button
                          onClick={() => updateAdjustment(editingPhotoId, 'flipVertical', !getAdjustment(editingPhotoId).flipVertical)}
                          className={`flex-1 py-2 border rounded-lg ${
                            getAdjustment(editingPhotoId).flipVertical
                              ? 'bg-blue-100 border-blue-500'
                              : 'bg-white hover:bg-gray-50'
                          }`}
                        >
                          <FlipVertical className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fit Mode */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Fit Mode
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateAdjustment(editingPhotoId, 'fit', 'contain')}
                      className={`flex-1 py-2 rounded-lg border transition-all ${
                        getAdjustment(editingPhotoId).fit === 'contain'
                          ? 'border-pink-500 bg-pink-50 text-pink-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <Square className="w-4 h-4 inline mr-2" />
                      Show Full
                    </button>
                    <button
                      onClick={() => updateAdjustment(editingPhotoId, 'fit', 'cover')}
                      className={`flex-1 py-2 rounded-lg border transition-all ${
                        getAdjustment(editingPhotoId).fit === 'cover'
                          ? 'border-pink-500 bg-pink-50 text-pink-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <Crop className="w-4 h-4 inline mr-2" />
                      Crop to Fit
                    </button>
                  </div>
                </div>

                {/* Color Adjustments */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Color Adjustments
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                          <Sun className="w-3 h-3" />
                          Brightness: {getAdjustment(editingPhotoId).brightness}%
                        </label>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="1"
                        value={getAdjustment(editingPhotoId).brightness}
                        onChange={(e) => updateAdjustment(editingPhotoId, 'brightness', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-500"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                          <Contrast className="w-3 h-3" />
                          Contrast: {getAdjustment(editingPhotoId).contrast}%
                        </label>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="1"
                        value={getAdjustment(editingPhotoId).contrast}
                        onChange={(e) => updateAdjustment(editingPhotoId, 'contrast', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                          <Droplets className="w-3 h-3" />
                          Saturation: {getAdjustment(editingPhotoId).saturation}%
                        </label>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="1"
                        value={getAdjustment(editingPhotoId).saturation}
                        onChange={(e) => updateAdjustment(editingPhotoId, 'saturation', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Filters */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {filters.map(filter => (
                      <button
                        key={filter.id}
                        onClick={() => applyFilter(editingPhotoId, filter.id)}
                        className={`py-2 rounded-lg border text-sm ${
                          getAdjustment(editingPhotoId).filter === filter.id
                            ? 'border-pink-500 bg-pink-50 text-pink-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {filter.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <button
                    onClick={() => resetAdjustment(editingPhotoId)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-all font-medium"
                  >
                    <RotateCw className="w-4 h-4" />
                    Reset All
                  </button>
                  <button
                    onClick={closeImageEditor}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Couple Information */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                Couple Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bride's Name
                  </label>
                  <input
                    type="text"
                    value={coupleNames.bride}
                    onChange={(e) => setCoupleNames({...coupleNames, bride: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter bride's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Groom's Name
                  </label>
                  <input
                    type="text"
                    value={coupleNames.groom}
                    onChange={(e) => setCoupleNames({...coupleNames, groom: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter groom's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Template Selection */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Choose Template</h2>
              <div className="space-y-3">
                {templates.map(template => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedTemplate === template.id
                        ? 'border-pink-500 bg-pink-50 shadow-md'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <div className={`h-16 rounded-lg bg-gradient-to-r ${template.color} mb-2`} />
                    <p className="font-medium">{template.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-pink-500" />
                Add More Photos
              </h2>
              <label className="block">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-pink-500 hover:bg-pink-50 transition-all">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">
                    Click to upload images
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG up to 10MB
                  </p>
                </div>
              </label>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Current: {photos.length} photos
              </p>
            </div>
          </div>

          {/* Right Side - Album Preview */}
          <div className="lg:col-span-2">
            <div id="wedding-album" className={`bg-gradient-to-br ${currentTemplate.color} rounded-2xl shadow-xl p-8 min-h-[800px]`}>
              {/* Album Cover */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="text-center space-y-4">
                  <Heart className={`w-16 h-16 mx-auto ${currentTemplate.accent} fill-current`} />
                  <div>
                    <h2 className={`text-4xl font-serif ${currentTemplate.accent} mb-2`}>
                      {coupleNames.bride} & {coupleNames.groom}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {new Date(weddingDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className={`w-24 h-1 mx-auto bg-gradient-to-r ${currentTemplate.color}`} />
                  <p className="text-gray-500 italic">Our Special Day</p>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 gap-4">
                {photos.map((photo) => {
                  const adj = getAdjustment(photo.id);
                  const hasAdjustments = 
                    adj.scale !== 1 || 
                    adj.xOffset !== 0 || 
                    adj.yOffset !== 0 || 
                    adj.fit !== 'contain' ||
                    adj.brightness !== 100 ||
                    adj.contrast !== 100 ||
                    adj.saturation !== 100 ||
                    adj.rotation !== 0 ||
                    adj.flipHorizontal ||
                    adj.flipVertical ||
                    adj.filter !== 'none';

                  return (
                    <div
                      key={photo.id}
                      className={`relative bg-white p-3 rounded-lg shadow-md border-2 ${currentTemplate.border} group`}
                    >
                      {/* Image with adjustments applied */}
                      <div className="relative w-full h-64 overflow-hidden rounded">
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-full"
                          style={getImageStyle(photo.id)}
                        />
                        
                        {/* Adjustment indicators */}
                        {hasAdjustments && (
                          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            <Maximize2 className="w-3 h-3" />
                            <span>Edited</span>
                            {adj.fit !== 'contain' && (
                              <Crop className="w-3 h-3 ml-1" />
                            )}
                          </div>
                        )}
                      </div>
                      
                      {/* Caption */}
                      <div className="mt-2">
                        {editingId === photo.id ? (
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={editCaption}
                              onChange={(e) => setEditCaption(e.target.value)}
                              className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                              autoFocus
                            />
                            <button
                              onClick={() => saveCaption(photo.id)}
                              className="bg-green-500 text-white p-1 rounded hover:bg-green-600"
                            >
                              <Save className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-700 text-center font-medium">
                            {photo.caption}
                          </p>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => openImageEditor(photo.id)}
                          className="bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600"
                          title="Edit image"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => startEditing(photo)}
                          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                          title="Edit caption"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removePhoto(photo.id)}
                          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                          title="Delete photo"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Album Footer */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-8 text-center">
                <p className={`text-2xl font-serif ${currentTemplate.accent} italic`}>
                  "Forever begins today"
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  {photos.length} Beautiful Memories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingAlbumGenerator;