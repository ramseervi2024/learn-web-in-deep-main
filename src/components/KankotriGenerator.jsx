import React, { useState } from 'react';
import { Download, Palette } from 'lucide-react';

const KankotriGenerator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [selectedColor, setSelectedColor] = useState('red');
  const [formData, setFormData] = useState({
    groomName: 'अखिल',
    groomFatherName: 'श्री राम कुमार जैन',
    groomMotherName: 'श्रीमती सुशीला जैन',
    groomAddress: 'जोधपुर',
    brideName: 'प्रियंका',
    brideFatherName: 'श्री महेश कुमार शाह',
    brideMotherName: 'श्रीमती रेखा शाह',
    brideAddress: 'अहमदाबाद',
    
    tilakDate: 'रविवार, दिनांक 24 जनवरी 2025',
    tilakVenue: 'श्री नारायण धर्मकांटा, आनंद, तेल',
    
    manglikDate: 'सोमवार, दिनांक 25 जनवरी 2025',
    
    mehndiDate: 'बुधवार, दिनांक 26 जनवरी 2025',
    mehndiTime: 'शाम 7:00 बजे',
    
    weddingDate: 'गुरुवार, दिनांक 27 जनवरी 2025',
    muhurat: 'रात्रि 11:30 बजे',
    
    receptionDate: 'गुरुवार, दिनांक 27 जनवरी 2025',
    receptionVenue: 'व्यासनगर स्टेडियम के सामने, झांसी',
    receptionTime: 'रात्रि 8:00 बजे'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const colors = {
    red: {
      name: 'लाल सोना',
      bgColor: 'from-red-50 via-orange-50 to-yellow-50',
      borderColor: 'border-red-600',
      accentColor: 'text-red-700',
      headerBg: 'from-red-700 to-orange-600',
      cardBg: 'bg-red-50'
    },
    maroon: {
      name: 'मैरून',
      bgColor: 'from-rose-50 via-red-50 to-orange-50',
      borderColor: 'border-rose-700',
      accentColor: 'text-rose-800',
      headerBg: 'from-rose-700 to-red-700',
      cardBg: 'bg-rose-50'
    },
    green: {
      name: 'हरा',
      bgColor: 'from-green-50 via-emerald-50 to-teal-50',
      borderColor: 'border-green-700',
      accentColor: 'text-green-800',
      headerBg: 'from-green-700 to-emerald-700',
      cardBg: 'bg-green-50'
    },
    pink: {
      name: 'गुलाबी',
      bgColor: 'from-pink-50 via-rose-50 to-red-50',
      borderColor: 'border-pink-600',
      accentColor: 'text-pink-700',
      headerBg: 'from-pink-600 to-rose-600',
      cardBg: 'bg-pink-50'
    },
    purple: {
      name: 'बैंगनी',
      bgColor: 'from-purple-50 via-violet-50 to-pink-50',
      borderColor: 'border-purple-600',
      accentColor: 'text-purple-700',
      headerBg: 'from-purple-600 to-violet-600',
      cardBg: 'bg-purple-50'
    },
    blue: {
      name: 'नीला',
      bgColor: 'from-blue-50 via-cyan-50 to-teal-50',
      borderColor: 'border-blue-600',
      accentColor: 'text-blue-700',
      headerBg: 'from-blue-600 to-cyan-600',
      cardBg: 'bg-blue-50'
    }
  };

  const templates = [
    { id: 1, name: 'पारंपरिक शैली', nameEn: 'Traditional Style' },
    { id: 2, name: 'आधुनिक शैली', nameEn: 'Modern Style' },
    { id: 3, name: 'रॉयल शैली', nameEn: 'Royal Style' },
    { id: 4, name: 'सिंपल शैली', nameEn: 'Simple Style' }
  ];

  const currentColor = colors[selectedColor];

  const downloadAsHTML = () => {
    const kankotriElement = document.getElementById('kankotri-preview');
    const htmlContent = `
<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>विवाह निमंत्रण - ${formData.groomName} & ${formData.brideName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Hind:wght@400;600;700&display=swap');
        body { font-family: 'Hind', sans-serif; }
    </style>
</head>
<body class="bg-gradient-to-br ${currentColor.bgColor} p-8">
    ${kankotriElement.innerHTML}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kankotri-${formData.groomName}-${formData.brideName}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderTemplate1 = () => (
    <div className={`${currentColor.cardBg} rounded-xl shadow-2xl overflow-hidden border-4 ${currentColor.borderColor}`}>
      <div className={`bg-gradient-to-r ${currentColor.headerBg} text-white text-center py-4 border-b-4 ${currentColor.borderColor}`}>
        <div className="text-3xl mb-2">🕉 ॥ श्री गणेशाय नमः ॥ 🕉</div>
        <div className="flex justify-center items-center gap-8">
          <div className="text-4xl">🪔</div>
          <div className="text-5xl">🙏</div>
          <div className="text-4xl">🪔</div>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <div className="text-center mb-6">
          <div className={`text-2xl font-bold ${currentColor.accentColor} border-2 ${currentColor.borderColor} inline-block px-6 py-2 rounded-full`}>
            🕉 ॥ मांगलिक कार्यक्रम ॥ 🕉
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className={`border-2 ${currentColor.borderColor} rounded-lg p-4 text-center`}>
            <div className="text-3xl mb-2">🤵</div>
            <div className={`text-sm font-semibold ${currentColor.accentColor} mb-2`}>वर</div>
            <div className="font-bold text-xl mb-2">{formData.groomName}</div>
            <div className="text-sm space-y-1">
              <div>सुपुत्र - {formData.groomFatherName}</div>
              <div>सुश्री - {formData.groomMotherName}</div>
              <div className={`${currentColor.accentColor} font-semibold mt-2`}>{formData.groomAddress}</div>
            </div>
          </div>
          <div className={`border-2 ${currentColor.borderColor} rounded-lg p-4 text-center`}>
            <div className="text-3xl mb-2">👰‍♀️</div>
            <div className={`text-sm font-semibold ${currentColor.accentColor} mb-2`}>वधू</div>
            <div className="font-bold text-xl mb-2">{formData.brideName}</div>
            <div className="text-sm space-y-1">
              <div>सुपुत्री - {formData.brideFatherName}</div>
              <div>सुश्री - {formData.brideMotherName}</div>
              <div className={`${currentColor.accentColor} font-semibold mt-2`}>{formData.brideAddress}</div>
            </div>
          </div>
        </div>
        <div className={`border-2 ${currentColor.borderColor} rounded-lg p-4 mb-4`}>
          <div className={`text-center font-bold text-lg ${currentColor.accentColor} mb-4`}>कार्यक्रम विवरण</div>
          <div className="space-y-3 text-sm">
            <div className={`flex items-start gap-3 border-l-4 ${currentColor.borderColor} pl-3`}>
              <div className="text-2xl">💍</div>
              <div><div className="font-bold">तिलक/सगाई</div><div>{formData.tilakDate}</div><div className="text-xs">{formData.tilakVenue}</div></div>
            </div>
            <div className={`flex items-start gap-3 border-l-4 ${currentColor.borderColor} pl-3`}>
              <div className="text-2xl">🌺</div>
              <div><div className="font-bold">मांगलिक</div><div>{formData.manglikDate}</div></div>
            </div>
            <div className={`flex items-start gap-3 border-l-4 ${currentColor.borderColor} pl-3`}>
              <div className="text-2xl">🎨</div>
              <div><div className="font-bold">मेहंदी समारोह</div><div>{formData.mehndiDate}</div></div>
            </div>
            <div className={`flex items-start gap-3 border-l-4 ${currentColor.borderColor} pl-3 bg-gradient-to-r ${currentColor.headerBg} text-white p-2 rounded`}>
              <div className="text-2xl">💐</div>
              <div><div className="font-bold text-lg">लग्न मुहूर्त</div><div>{formData.weddingDate}</div><div className="font-semibold">{formData.muhurat}</div></div>
            </div>
            <div className={`flex items-start gap-3 border-l-4 ${currentColor.borderColor} pl-3`}>
              <div className="text-2xl">🎊</div>
              <div><div className="font-bold">रिसेप्शन</div><div>{formData.receptionVenue}</div><div>{formData.receptionTime}</div></div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs border-t-2 pt-4">
          <div className="mb-2">आपका आगमन हमारे परिवार के लिए मंगलकारी होगा</div>
          <div className={`${currentColor.accentColor} font-semibold`}>✦ जय श्री कृष्णा ✦</div>
        </div>
      </div>
      <div className={`bg-gradient-to-r ${currentColor.headerBg} h-4`}></div>
    </div>
  );

  const renderTemplate2 = () => (
    <div className={`${currentColor.cardBg} rounded-xl shadow-2xl overflow-hidden`}>
      <div className={`bg-gradient-to-br ${currentColor.headerBg} text-white text-center py-8 relative`}>
        <div className="absolute top-4 left-4 text-4xl">🪔</div>
        <div className="absolute top-4 right-4 text-4xl">🪔</div>
        <div className="text-4xl mb-3">॥ श्री गणेशाय नमः ॥</div>
        <div className="text-6xl">💑</div>
        <div className="mt-4 text-3xl font-bold">{formData.groomName} & {formData.brideName}</div>
        <div className="mt-2 text-sm opacity-90">का विवाह समारोह</div>
      </div>
      <div className="p-8">
        <div className="text-center mb-6">
          <div className={`text-sm ${currentColor.accentColor} mb-2`}>कृपया अपनी उपस्थिति से समारोह को शुभ बनाएं</div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className={`${currentColor.accentColor} font-bold mb-2`}>वर पक्ष</div>
            <div className="text-sm">{formData.groomFatherName}</div>
            <div className="text-sm">{formData.groomMotherName}</div>
            <div className={`text-xs ${currentColor.accentColor} mt-1`}>{formData.groomAddress}</div>
          </div>
          <div className="text-center">
            <div className={`${currentColor.accentColor} font-bold mb-2`}>वधू पक्ष</div>
            <div className="text-sm">{formData.brideFatherName}</div>
            <div className="text-sm">{formData.brideMotherName}</div>
            <div className={`text-xs ${currentColor.accentColor} mt-1`}>{formData.brideAddress}</div>
          </div>
        </div>
        <div className={`bg-gradient-to-r ${currentColor.headerBg} text-white rounded-lg p-4 mb-4`}>
          <div className="text-center font-bold text-lg mb-2">💐 विवाह मुहूर्त 💐</div>
          <div className="text-center">{formData.weddingDate}</div>
          <div className="text-center font-semibold">{formData.muhurat}</div>
        </div>
        <div className="space-y-2 text-sm">
          <div className={`p-2 border-l-4 ${currentColor.borderColor} pl-3`}>💍 तिलक: {formData.tilakDate}</div>
          <div className={`p-2 border-l-4 ${currentColor.borderColor} pl-3`}>🌺 मांगलिक: {formData.manglikDate}</div>
          <div className={`p-2 border-l-4 ${currentColor.borderColor} pl-3`}>🎨 मेहंदी: {formData.mehndiDate}</div>
          <div className={`p-2 border-l-4 ${currentColor.borderColor} pl-3`}>🎊 रिसेप्शन: {formData.receptionVenue}</div>
        </div>
        <div className={`text-center mt-6 ${currentColor.accentColor} font-bold`}>✦ जय श्री कृष्णा ✦</div>
      </div>
    </div>
  );

  const renderTemplate3 = () => (
    <div className={`bg-white rounded-xl shadow-2xl overflow-hidden border-8 ${currentColor.borderColor} relative`}>
      <div className={`absolute inset-0 border-4 ${currentColor.borderColor} opacity-20 m-4 rounded-lg pointer-events-none`}></div>
      <div className="relative p-10">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🕉</div>
          <div className={`text-3xl font-bold ${currentColor.accentColor}`}>विवाह निमंत्रण</div>
          <div className="text-sm mt-2 text-gray-600">हम हृदय से आपको आमंत्रित करते हैं</div>
        </div>
        <div className={`bg-gradient-to-r ${currentColor.headerBg} text-white rounded-lg p-6 mb-6 text-center`}>
          <div className="text-4xl font-bold mb-2">{formData.groomName}</div>
          <div className="text-2xl my-3">💕</div>
          <div className="text-4xl font-bold">{formData.brideName}</div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="text-center">
            <div className={`${currentColor.accentColor} font-bold text-lg mb-2 border-b-2 ${currentColor.borderColor} pb-2`}>वर पक्ष</div>
            <div className="text-sm space-y-1">
              <div>{formData.groomFatherName}</div>
              <div>{formData.groomMotherName}</div>
              <div className={`${currentColor.accentColor} text-xs mt-2`}>{formData.groomAddress}</div>
            </div>
          </div>
          <div className="text-center">
            <div className={`${currentColor.accentColor} font-bold text-lg mb-2 border-b-2 ${currentColor.borderColor} pb-2`}>वधू पक्ष</div>
            <div className="text-sm space-y-1">
              <div>{formData.brideFatherName}</div>
              <div>{formData.brideMotherName}</div>
              <div className={`${currentColor.accentColor} text-xs mt-2`}>{formData.brideAddress}</div>
            </div>
          </div>
        </div>
        <div className={`border-4 ${currentColor.borderColor} rounded-lg p-6 mb-6`}>
          <div className={`text-center text-2xl font-bold ${currentColor.accentColor} mb-4`}>💐 शुभ मुहूर्त 💐</div>
          <div className="text-center text-lg mb-2">{formData.weddingDate}</div>
          <div className="text-center font-bold text-xl">{formData.muhurat}</div>
          <div className="text-center text-sm mt-3 text-gray-600">{formData.receptionVenue}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className={`p-3 border ${currentColor.borderColor} rounded text-center`}>
            <div className="font-bold mb-1">तिलक</div>
            <div>{formData.tilakDate}</div>
          </div>
          <div className={`p-3 border ${currentColor.borderColor} rounded text-center`}>
            <div className="font-bold mb-1">मेहंदी</div>
            <div>{formData.mehndiDate}</div>
          </div>
        </div>
        <div className={`text-center mt-8 ${currentColor.accentColor} font-bold text-lg`}>
          ॐ श्री गणेशाय नमः
        </div>
      </div>
    </div>
  );

  const renderTemplate4 = () => (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className={`border-t-8 border-b-8 ${currentColor.borderColor} py-8 px-6`}>
        <div className="text-center">
          <div className="text-4xl mb-3">🙏</div>
          <div className={`text-2xl font-bold ${currentColor.accentColor} mb-4`}>विवाह निमंत्रण</div>
          <div className="text-sm text-gray-600 mb-6">आपकी उपस्थिति से हमें गौरवान्वित करें</div>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{formData.groomName}</div>
              <div className="text-xs text-gray-500">पुत्र</div>
              <div className="text-sm mt-1">{formData.groomFatherName}</div>
            </div>
            <div className={`text-3xl ${currentColor.accentColor}`}>💑</div>
            <div className="text-center">
              <div className="text-2xl font-bold">{formData.brideName}</div>
              <div className="text-xs text-gray-500">पुत्री</div>
              <div className="text-sm mt-1">{formData.brideFatherName}</div>
            </div>
          </div>
          <div className={`bg-gradient-to-r ${currentColor.headerBg} text-white rounded-full py-3 px-6 inline-block mb-6`}>
            <div className="font-bold">{formData.weddingDate}</div>
            <div className="text-sm">{formData.muhurat}</div>
          </div>
          <div className="text-sm space-y-2 mb-6">
            <div>📍 {formData.receptionVenue}</div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className={`p-2 ${currentColor.cardBg} rounded`}>
              <div className={`font-bold ${currentColor.accentColor}`}>तिलक</div>
              <div className="text-xs">{formData.tilakDate.split(',')[1]}</div>
            </div>
            <div className={`p-2 ${currentColor.cardBg} rounded`}>
              <div className={`font-bold ${currentColor.accentColor}`}>मेहंदी</div>
              <div className="text-xs">{formData.mehndiDate.split(',')[1]}</div>
            </div>
            <div className={`p-2 ${currentColor.cardBg} rounded`}>
              <div className={`font-bold ${currentColor.accentColor}`}>रिसेप्शन</div>
              <div className="text-xs">{formData.receptionTime}</div>
            </div>
          </div>
          <div className={`mt-6 ${currentColor.accentColor} font-bold`}>॥ श्री गणेशाय नमः ॥</div>
        </div>
      </div>
    </div>
  );

  const renderTemplate = () => {
    switch(selectedTemplate) {
      case 1: return renderTemplate1();
      case 2: return renderTemplate2();
      case 3: return renderTemplate3();
      case 4: return renderTemplate4();
      default: return renderTemplate1();
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentColor.bgColor} p-4 md:p-8`}>
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-2">कांकोतरी जनरेटर</h1>
          <p className="text-gray-600">सुंदर हिंदी विवाह निमंत्रण बनाएं</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6 max-h-[800px] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Palette className="w-6 h-6 text-orange-600" />
              अपना कांकोतरी कस्टमाइज़ करें
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">टेम्पलेट चुनें</label>
              <div className="grid grid-cols-2 gap-3">
                {templates.map(template => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedTemplate === template.id
                        ? 'border-orange-600 bg-orange-50 scale-105'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="font-medium text-sm">{template.name}</div>
                    <div className="text-xs text-gray-500">{template.nameEn}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">रंग चुनें</label>
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(colors).map(([key, color]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedColor(key)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedColor === key
                        ? 'border-orange-600 scale-105'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className={`h-12 rounded bg-gradient-to-r ${color.headerBg} mb-2`}></div>
                    <div className="text-xs font-medium">{color.name}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-bold text-lg text-gray-800 mb-3">वर पक्ष (Groom's Side)</h3>
              <div className="space-y-3">
                <input type="text" name="groomName" value={formData.groomName} onChange={handleInputChange} placeholder="वर का नाम" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <input type="text" name="groomFatherName" value={formData.groomFatherName} onChange={handleInputChange} placeholder="पिता का नाम" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <input type="text" name="groomMotherName" value={formData.groomMotherName} onChange={handleInputChange} placeholder="माता का नाम" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <input type="text" name="groomAddress" value={formData.groomAddress} onChange={handleInputChange} placeholder="पता" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-bold text-lg text-gray-800 mb-3">वधू पक्ष (Bride's Side)</h3>
              <div className="space-y-3">
                <input type="text" name="brideName" value={formData.brideName} onChange={handleInputChange} placeholder="वधू का नाम" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <input type="text" name="brideFatherName" value={formData.brideFatherName} onChange={handleInputChange} placeholder="पिता का नाम" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <input type="text" name="brideMotherName" value={formData.brideMotherName} onChange={handleInputChange} placeholder="माता का नाम" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <input type="text" name="brideAddress" value={formData.brideAddress} onChange={handleInputChange} placeholder="पता" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-bold text-lg text-gray-800 mb-3">कार्यक्रम विवरण</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block font-medium mb-1">तिलक/सगाई</label>
                  <input type="text" name="tilakDate" value={formData.tilakDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg mb-2" />
                  <input type="text" name="tilakVenue" value={formData.tilakVenue} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block font-medium mb-1">मांगलिक</label>
                  <input type="text" name="manglikDate" value={formData.manglikDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block font-medium mb-1">मेहंदी</label>
                  <input type="text" name="mehndiDate" value={formData.mehndiDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block font-medium mb-1">विवाह (लग्न)</label>
                  <input type="text" name="weddingDate" value={formData.weddingDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg mb-2" />
                  <input type="text" name="muhurat" value={formData.muhurat} onChange={handleInputChange} placeholder="मुहूर्त समय" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block font-medium mb-1">रिसेप्शन</label>
                  <input type="text" name="receptionVenue" value={formData.receptionVenue} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg mb-2" />
                  <input type="text" name="receptionTime" value={formData.receptionTime} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-xl p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">प्रीव्यू</h2>
              <div id="kankotri-preview">
                {renderTemplate()}
              </div>
            </div>

            <button
              onClick={downloadAsHTML}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              HTML डाउनलोड करें
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KankotriGenerator;