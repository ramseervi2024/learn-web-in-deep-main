import React, { useState, useRef, useEffect } from 'react';
import { Layers, Image, Move, Square, Circle, Type, Eraser, Paintbrush, Crop, RotateCw, Undo, Redo, Download, Upload, Eye, EyeOff, Trash2, Copy, ZoomIn, ZoomOut } from 'lucide-react';

const PhotoEditor = () => {
  const canvasRef = useRef(null);
  const [layers, setLayers] = useState([
    { id: 1, name: 'Background', visible: true, opacity: 100, blendMode: 'normal', canvas: null }
  ]);
  const [activeLayerId, setActiveLayerId] = useState(1);
  const [tool, setTool] = useState('brush');
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#000000');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [selection, setSelection] = useState(null);
  const [cropMode, setCropMode] = useState(false);
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 800;
      canvas.height = 600;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      saveToHistory();
    }
  }, []);

  const saveToHistory = () => {
    const canvas = canvasRef.current;
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(canvas.toDataURL());
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      loadFromHistory(historyIndex - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      loadFromHistory(historyIndex + 1);
    }
  };

  const loadFromHistory = (index) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = history[index];
  };

  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    const pos = getMousePos(e);
    lastPos.current = pos;

    if (tool === 'selection') {
      setSelection({ startX: pos.x, startY: pos.y, endX: pos.x, endY: pos.y });
    }
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getMousePos(e);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (tool === 'brush') {
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.globalCompositeOperation = 'source-over';
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    } else if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = brushSize;
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
    } else if (tool === 'selection') {
      setSelection(prev => ({ ...prev, endX: pos.x, endY: pos.y }));
    }

    lastPos.current = pos;
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveToHistory();
    }
  };

  const applyFilter = (filterType) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    switch (filterType) {
      case 'grayscale':
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = avg;
        }
        break;
      case 'invert':
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
        break;
      case 'sepia':
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2];
          data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
          data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
          data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
        }
        break;
      case 'blur':
        // Simple box blur
        const blur = [];
        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            let r = 0, g = 0, b = 0, count = 0;
            for (let dy = -1; dy <= 1; dy++) {
              for (let dx = -1; dx <= 1; dx++) {
                const nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < canvas.width && ny >= 0 && ny < canvas.height) {
                  const idx = (ny * canvas.width + nx) * 4;
                  r += data[idx];
                  g += data[idx + 1];
                  b += data[idx + 2];
                  count++;
                }
              }
            }
            const idx = (y * canvas.width + x) * 4;
            blur[idx] = r / count;
            blur[idx + 1] = g / count;
            blur[idx + 2] = b / count;
            blur[idx + 3] = data[idx + 3];
          }
        }
        for (let i = 0; i < data.length; i++) {
          data[i] = blur[i];
        }
        break;
    }

    ctx.putImageData(imageData, 0, 0);
    saveToHistory();
  };

  const applyColorCorrection = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Brightness
      data[i] += brightness;
      data[i + 1] += brightness;
      data[i + 2] += brightness;

      // Contrast
      const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
      data[i] = factor * (data[i] - 128) + 128;
      data[i + 1] = factor * (data[i + 1] - 128) + 128;
      data[i + 2] = factor * (data[i + 2] - 128) + 128;

      // Saturation
      const gray = 0.2989 * data[i] + 0.5870 * data[i + 1] + 0.1140 * data[i + 2];
      const satFactor = saturation / 100 + 1;
      data[i] = gray + (data[i] - gray) * satFactor;
      data[i + 1] = gray + (data[i + 1] - gray) * satFactor;
      data[i + 2] = gray + (data[i + 2] - gray) * satFactor;

      // Clamp values
      data[i] = Math.max(0, Math.min(255, data[i]));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1]));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2]));
    }

    ctx.putImageData(imageData, 0, 0);
    saveToHistory();
  };

  const loadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          saveToHistory();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const exportImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const addLayer = () => {
    const newLayer = {
      id: Date.now(),
      name: `Layer ${layers.length + 1}`,
      visible: true,
      opacity: 100,
      blendMode: 'normal',
      canvas: null
    };
    setLayers([...layers, newLayer]);
  };

  const toggleLayerVisibility = (id) => {
    setLayers(layers.map(l => l.id === id ? { ...l, visible: !l.visible } : l));
  };

  const deleteLayer = (id) => {
    if (layers.length > 1) {
      setLayers(layers.filter(l => l.id !== id));
      if (activeLayerId === id) {
        setActiveLayerId(layers[0].id);
      }
    }
  };

  const duplicateLayer = (id) => {
    const layer = layers.find(l => l.id === id);
    if (layer) {
      const newLayer = {
        ...layer,
        id: Date.now(),
        name: `${layer.name} copy`
      };
      setLayers([...layers, newLayer]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Left Toolbar */}
      <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-2">
        <button onClick={() => setTool('move')} className={`p-2 rounded ${tool === 'move' ? 'bg-blue-600' : 'hover:bg-gray-700'}`} title="Move">
          <Move size={20} />
        </button>
        <button onClick={() => setTool('selection')} className={`p-2 rounded ${tool === 'selection' ? 'bg-blue-600' : 'hover:bg-gray-700'}`} title="Selection">
          <Square size={20} />
        </button>
        <button onClick={() => setTool('brush')} className={`p-2 rounded ${tool === 'brush' ? 'bg-blue-600' : 'hover:bg-gray-700'}`} title="Brush">
          <Paintbrush size={20} />
        </button>
        <button onClick={() => setTool('eraser')} className={`p-2 rounded ${tool === 'eraser' ? 'bg-blue-600' : 'hover:bg-gray-700'}`} title="Eraser">
          <Eraser size={20} />
        </button>
        <button onClick={() => setCropMode(!cropMode)} className={`p-2 rounded ${cropMode ? 'bg-blue-600' : 'hover:bg-gray-700'}`} title="Crop">
          <Crop size={20} />
        </button>
        <button onClick={() => setTool('text')} className={`p-2 rounded ${tool === 'text' ? 'bg-blue-600' : 'hover:bg-gray-700'}`} title="Text">
          <Type size={20} />
        </button>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Menu Bar */}
        <div className="h-14 bg-gray-800 border-b border-gray-700 flex items-center px-4 space-x-4">
          <label className="cursor-pointer px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded flex items-center space-x-2">
            <Upload size={16} />
            <span>Open</span>
            <input type="file" className="hidden" accept="image/*" onChange={loadImage} />
          </label>
          <button onClick={exportImage} className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded flex items-center space-x-2">
            <Download size={16} />
            <span>Export</span>
          </button>
          <div className="h-6 w-px bg-gray-600"></div>
          <button onClick={undo} disabled={historyIndex <= 0} className="p-1 hover:bg-gray-700 rounded disabled:opacity-50" title="Undo">
            <Undo size={20} />
          </button>
          <button onClick={redo} disabled={historyIndex >= history.length - 1} className="p-1 hover:bg-gray-700 rounded disabled:opacity-50" title="Redo">
            <Redo size={20} />
          </button>
          <div className="h-6 w-px bg-gray-600"></div>
          <div className="flex items-center space-x-2">
            <button onClick={() => setZoom(Math.max(25, zoom - 25))} className="p-1 hover:bg-gray-700 rounded">
              <ZoomOut size={20} />
            </button>
            <span className="text-sm w-12 text-center">{zoom}%</span>
            <button onClick={() => setZoom(Math.min(400, zoom + 25))} className="p-1 hover:bg-gray-700 rounded">
              <ZoomIn size={20} />
            </button>
          </div>
        </div>

        {/* Canvas Container */}
        <div className="flex-1 bg-gray-700 overflow-auto flex items-center justify-center p-8">
          <div className="relative" style={{ transform: `scale(${zoom / 100})` }}>
            <canvas
              ref={canvasRef}
              className="border border-gray-600 bg-white shadow-2xl"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
            />
            {selection && (
              <div
                className="absolute border-2 border-blue-500 border-dashed pointer-events-none"
                style={{
                  left: Math.min(selection.startX, selection.endX),
                  top: Math.min(selection.startY, selection.endY),
                  width: Math.abs(selection.endX - selection.startX),
                  height: Math.abs(selection.endY - selection.startY)
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-gray-800 border-l border-gray-700 overflow-y-auto">
        {/* Tool Properties */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-sm font-semibold mb-3">Tool Properties</h3>
          {(tool === 'brush' || tool === 'eraser') && (
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400">Size: {brushSize}px</label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              {tool === 'brush' && (
                <div>
                  <label className="text-xs text-gray-400">Color</label>
                  <input
                    type="color"
                    value={brushColor}
                    onChange={(e) => setBrushColor(e.target.value)}
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-sm font-semibold mb-3">Filters</h3>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => applyFilter('grayscale')} className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs">
              Grayscale
            </button>
            <button onClick={() => applyFilter('invert')} className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs">
              Invert
            </button>
            <button onClick={() => applyFilter('sepia')} className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs">
              Sepia
            </button>
            <button onClick={() => applyFilter('blur')} className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs">
              Blur
            </button>
          </div>
        </div>

        {/* Color Correction */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-sm font-semibold mb-3">Color Correction</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-400">Brightness: {brightness}</label>
              <input
                type="range"
                min="-100"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400">Contrast: {contrast}</label>
              <input
                type="range"
                min="-100"
                max="100"
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400">Saturation: {saturation}</label>
              <input
                type="range"
                min="-100"
                max="100"
                value={saturation}
                onChange={(e) => setSaturation(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <button
              onClick={applyColorCorrection}
              className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Layers Panel */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Layers</h3>
            <button onClick={addLayer} className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs">
              + Add
            </button>
          </div>
          <div className="space-y-2">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className={`p-2 rounded flex items-center space-x-2 ${
                  activeLayerId === layer.id ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => setActiveLayerId(layer.id)}
              >
                <button onClick={(e) => { e.stopPropagation(); toggleLayerVisibility(layer.id); }}>
                  {layer.visible ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
                <span className="flex-1 text-sm truncate">{layer.name}</span>
                <button onClick={(e) => { e.stopPropagation(); duplicateLayer(layer.id); }} className="p-1 hover:bg-gray-800 rounded">
                  <Copy size={14} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); deleteLayer(layer.id); }} className="p-1 hover:bg-red-600 rounded" disabled={layers.length === 1}>
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoEditor;