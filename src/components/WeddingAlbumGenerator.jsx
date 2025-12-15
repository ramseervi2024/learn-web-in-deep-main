import React, { useState } from 'react';
import { Camera, Heart, Download, Upload, X, Edit2, Save, RotateCw, Trash2, BookOpen, Layout } from 'lucide-react';

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

  const currentTemplate = templates.find(t => t.id === selectedTemplate);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotos(prev => [...prev, {
          id: Date.now() + Math.random(),
          url: e.target.result,
          caption: 'New Photo'
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (id) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id));
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
  };

  const generateHTMLContent = (layout) => {
    const formattedDate = new Date(weddingDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let layoutHTML = '';

    if (layout === 'book') {
      // Book Style - Two columns like a book
      layoutHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px;">
          ${photos.map((photo, index) => `
            <div style="break-inside: avoid; margin-bottom: 40px;">
              <img src="${photo.url}" alt="${photo.caption}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; border: 3px solid ${currentTemplate.border === 'border-rose-300' ? '#fda4af' : '#d1d5db'};">
              <p style="text-align: center; margin-top: 15px; font-size: 16px; color: #4b5563; font-style: italic;">${photo.caption}</p>
              <p style="text-align: center; margin-top: 5px; font-size: 14px; color: #9ca3af;">Page ${index + 1}</p>
            </div>
          `).join('')}
        </div>
      `;
    } else if (layout === 'magazine') {
      // Magazine Style - Mixed sizes
      layoutHTML = `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px;">
          ${photos.map((photo, index) => {
            const sizes = ['col-span-1', 'col-span-2', 'col-span-1'];
            const size = sizes[index % 3];
            const isLarge = size === 'col-span-2';
            return `
              <div style="grid-column: ${isLarge ? 'span 2' : 'span 1'}; break-inside: avoid;">
                <img src="${photo.url}" alt="${photo.caption}" style="width: 100%; height: ${isLarge ? '500px' : '350px'}; object-fit: cover; border-radius: 12px;">
                <p style="text-align: left; margin-top: 10px; font-size: 16px; color: #1f2937; font-weight: 600;">${photo.caption}</p>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (layout === 'polaroid') {
      // Polaroid Style
      layoutHTML = `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px;">
          ${photos.map(photo => `
            <div style="background: white; padding: 15px 15px 60px 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform: rotate(${Math.random() * 6 - 3}deg); break-inside: avoid;">
              <img src="${photo.url}" alt="${photo.caption}" style="width: 100%; height: 300px; object-fit: cover;">
              <p style="text-align: center; margin-top: 20px; font-family: 'Courier New', monospace; font-size: 14px; color: #374151;">${photo.caption}</p>
            </div>
          `).join('')}
        </div>
      `;
    } else if (layout === 'collage') {
      // Collage Style - Creative mixed layout
      layoutHTML = `
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 40px;">
          ${photos.map((photo, index) => {
            const patterns = [
              { cols: 2, rows: 2 }, // Large
              { cols: 1, rows: 1 }, // Small
              { cols: 2, rows: 1 }, // Wide
              { cols: 1, rows: 2 }, // Tall
            ];
            const pattern = patterns[index % 4];
            return `
              <div style="grid-column: span ${pattern.cols}; grid-row: span ${pattern.rows}; break-inside: avoid; position: relative;">
                <img src="${photo.url}" alt="${photo.caption}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 20px; color: white;">
                  <p style="font-size: 14px; margin: 0;">${photo.caption}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

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
                Reset
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
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className={`relative bg-white p-3 rounded-lg shadow-md border-2 ${currentTemplate.border} group`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-64 object-cover rounded"
                    />
                    
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
                ))}
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