import React, { useState } from 'react';
import { Heart, Download, Calendar, MapPin, Clock, FileText, Image } from 'lucide-react';

const WeddingInvitationGenerator = () => {
  const [formData, setFormData] = useState({
    brideName: 'Sarah',
    groomName: 'Michael',
    date: '2024-06-15',
    time: '4:00 PM',
    venue: 'The Grand Ballroom',
    address: '123 Celebration Avenue, City',
    rsvpContact: '+1 (555) 123-4567'
  });

  const [selectedTemplate, setSelectedTemplate] = useState(1);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    },
      {
        id: 5,
        name: 'Ocean Breeze',
        component: () => (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-4 border-blue-300">
            <div className="text-center space-y-6">
              <div className="text-blue-400 text-5xl mb-4">⚓</div>
              <h1 className="text-4xl font-serif text-blue-800">You're Invited</h1>
              <div className="bg-white bg-opacity-70 rounded-lg p-8 space-y-4">
                <p className="text-sm text-blue-600 uppercase tracking-widest">To Celebrate The Wedding Of</p>
                <p className="text-4xl font-light text-blue-900">{formData.brideName}</p>
                <p className="text-2xl text-blue-500">&</p>
                <p className="text-4xl font-light text-blue-900">{formData.groomName}</p>
                <div className="py-6 space-y-2">
                  <p className="text-lg text-gray-700">{formatDate(formData.date)}</p>
                  <p className="text-lg text-gray-600">{formData.time}</p>
                  <div className="pt-4">
                    <p className="text-xl font-semibold text-blue-800">{formData.venue}</p>
                    <p className="text-sm text-gray-600">{formData.address}</p>
                  </div>
                </div>
              </div>
              <div className="text-blue-400 text-4xl">🌊</div>
              <p className="text-sm text-blue-700">RSVP: {formData.rsvpContact}</p>
            </div>
          </div>
        )
      },
      {
        id: 6,
        name: 'Garden Party',
        component: () => (
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-8 border-green-300">
            <div className="text-center space-y-6 relative">
              <div className="absolute top-0 left-0 text-5xl">🌿</div>
              <div className="absolute top-0 right-0 text-5xl">🌿</div>
              <div className="text-green-600 text-3xl">🌸 🌼 🌸</div>
              <h1 className="text-5xl font-serif text-green-800" style={{ fontFamily: 'cursive' }}>
                {formData.brideName} & {formData.groomName}
              </h1>
              <p className="text-xl text-green-700 italic">Are tying the knot!</p>
              <div className="bg-white bg-opacity-80 rounded-xl p-8 space-y-4 shadow-inner">
                <div className="text-green-600 text-2xl">✿</div>
                <p className="text-2xl text-gray-800">{formatDate(formData.date)}</p>
                <p className="text-lg text-gray-700">{formData.time}</p>
                <div className="border-t-2 border-b-2 border-green-200 py-4 my-4">
                  <p className="text-xl font-semibold text-green-800">{formData.venue}</p>
                  <p className="text-sm text-gray-600">{formData.address}</p>
                </div>
                <div className="text-green-600 text-2xl">✿</div>
              </div>
              <p className="text-sm text-green-700 pt-4">Please RSVP to {formData.rsvpContact}</p>
              <div className="text-green-600 text-3xl">🌸 🌼 🌸</div>
            </div>
          </div>
        )
      },
      {
        id: 7,
        name: 'Royal Purple',
        component: () => (
          <div className="bg-gradient-to-br from-purple-900 to-violet-800 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-4 border-yellow-400">
            <div className="text-center space-y-6">
              <div className="text-yellow-400 text-4xl">♔</div>
              <h1 className="text-4xl font-serif text-yellow-300 uppercase tracking-widest">Royal Wedding</h1>
              <div className="border-4 border-yellow-400 p-8 bg-purple-800 bg-opacity-50">
                <p className="text-yellow-200 text-sm uppercase tracking-widest mb-4">Join Us In Celebrating</p>
                <p className="text-5xl font-serif text-white mb-2">{formData.brideName}</p>
                <p className="text-3xl text-yellow-400">&</p>
                <p className="text-5xl font-serif text-white mt-2">{formData.groomName}</p>
              </div>
              <div className="space-y-4 text-yellow-100">
                <p className="text-xl">{formatDate(formData.date)}</p>
                <p className="text-lg">{formData.time}</p>
                <div className="w-32 h-px bg-yellow-400 mx-auto my-4"></div>
                <p className="text-xl text-yellow-300 font-semibold">{formData.venue}</p>
                <p className="text-sm text-yellow-200">{formData.address}</p>
              </div>
              <div className="text-yellow-400 text-4xl">♔</div>
              <p className="text-xs text-yellow-200 uppercase tracking-wider">RSVP: {formData.rsvpContact}</p>
            </div>
          </div>
        )
      },
      {
        id: 8,
        name: 'Rustic Charm',
        component: () => (
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-8 border-amber-600" style={{ borderStyle: 'double' }}>
            <div className="text-center space-y-6 bg-white bg-opacity-60 p-8 rounded">
              <div className="text-amber-800 text-4xl">🌾</div>
              <p className="text-sm text-amber-700 uppercase tracking-widest">Together With Their Families</p>
              <h1 className="text-6xl text-amber-900" style={{ fontFamily: 'cursive' }}>
                {formData.brideName.split(' ')[0]}
              </h1>
              <p className="text-3xl text-amber-700">&</p>
              <h1 className="text-6xl text-amber-900" style={{ fontFamily: 'cursive' }}>
                {formData.groomName.split(' ')[0]}
              </h1>
              <p className="text-lg text-amber-800 italic">Invite you to their wedding celebration</p>
              <div className="bg-amber-50 p-6 rounded-lg space-y-3 my-6">
                <p className="text-xl text-amber-900">{formatDate(formData.date)}</p>
                <p className="text-lg text-amber-800">{formData.time}</p>
                <div className="flex items-center justify-center gap-2 text-amber-700">
                  <span>🌻</span>
                  <span className="w-12 h-px bg-amber-500"></span>
                  <span>🌻</span>
                </div>
                <p className="text-xl font-semibold text-amber-900">{formData.venue}</p>
                <p className="text-sm text-amber-700">{formData.address}</p>
              </div>
              <div className="text-amber-800 text-4xl">🌾</div>
              <p className="text-sm text-amber-700">Kindly RSVP: {formData.rsvpContact}</p>
            </div>
          </div>
        )
      },
      {
        id: 9,
        name: 'Starry Night',
        component: () => (
          <div className="bg-gradient-to-br from-indigo-950 to-purple-950 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-2 border-yellow-300">
            <div className="text-center space-y-6 relative">
              <div className="absolute inset-0 text-yellow-200 text-xs opacity-50">
                {'★ '.repeat(50)}
              </div>
              <div className="relative z-10">
                <div className="text-yellow-300 text-5xl mb-4">✨</div>
                <h1 className="text-3xl text-yellow-200 uppercase tracking-widest mb-6">Under The Stars</h1>
                <div className="bg-indigo-900 bg-opacity-70 rounded-xl p-8 space-y-4 border border-yellow-400">
                  <p className="text-5xl text-white font-light">{formData.brideName}</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-16 h-px bg-yellow-400"></span>
                    <Heart className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    <span className="w-16 h-px bg-yellow-400"></span>
                  </div>
                  <p className="text-5xl text-white font-light">{formData.groomName}</p>
                </div>
                <p className="text-xl text-yellow-200 italic mt-6">Are getting married!</p>
                <div className="space-y-3 text-yellow-100 mt-6">
                  <p className="text-lg">{formatDate(formData.date)}</p>
                  <p className="text-lg">{formData.time}</p>
                  <div className="text-yellow-300 text-2xl my-4">✦ ✧ ✦</div>
                  <p className="text-xl text-yellow-300 font-semibold">{formData.venue}</p>
                  <p className="text-sm text-yellow-200">{formData.address}</p>
                </div>
                <div className="text-yellow-300 text-5xl mt-6">✨</div>
                <p className="text-xs text-yellow-200 mt-4">RSVP: {formData.rsvpContact}</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 10,
        name: 'Boho Chic',
        component: () => (
          <div className="bg-gradient-to-br from-stone-100 to-amber-50 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto">
            <div className="text-center space-y-6 border-4 border-stone-300 p-10 rounded-lg bg-white bg-opacity-70">
              <div className="flex justify-center gap-4 text-stone-600 text-3xl">
                <span>🍂</span><span>🌿</span><span>🍂</span>
              </div>
              <p className="text-sm text-stone-600 uppercase tracking-widest">Join us for a</p>
              <h1 className="text-4xl font-serif text-stone-800">Bohemian Celebration</h1>
              <div className="py-6 space-y-3">
                <p className="text-4xl text-stone-700" style={{ fontFamily: 'cursive' }}>
                  {formData.brideName} & {formData.groomName}
                </p>
                <p className="text-lg text-stone-600 italic">Are tying the knot</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <span className="w-16 h-px bg-stone-400"></span>
                <span className="text-stone-500 text-xl">❋</span>
                <span className="w-16 h-px bg-stone-400"></span>
              </div>
              <div className="space-y-2 pt-4">
                <p className="text-xl text-stone-700">{formatDate(formData.date)}</p>
                <p className="text-lg text-stone-600">{formData.time}</p>
                <div className="pt-4">
                  <p className="text-xl font-semibold text-stone-800">{formData.venue}</p>
                  <p className="text-sm text-stone-600">{formData.address}</p>
                </div>
              </div>
              <div className="flex justify-center gap-4 text-stone-600 text-3xl pt-4">
                <span>🍂</span><span>🌿</span><span>🍂</span>
              </div>
              <p className="text-sm text-stone-600 pt-4">RSVP: {formData.rsvpContact}</p>
            </div>
          </div>
        )
      },
      {
        id: 11,
        name: 'Cherry Blossom',
        component: () => (
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto">
            <div className="text-center space-y-6 bg-white bg-opacity-80 p-10 rounded-2xl">
              <div className="text-pink-400 text-5xl">🌸</div>
              <h1 className="text-3xl text-pink-700 uppercase tracking-widest">Wedding Invitation</h1>
              <div className="space-y-4 py-6">
                <p className="text-5xl text-pink-800" style={{ fontFamily: 'cursive' }}>{formData.brideName}</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-pink-300 text-2xl">🌸</span>
                  <span className="text-pink-600 text-3xl">&</span>
                  <span className="text-pink-300 text-2xl">🌸</span>
                </div>
                <p className="text-5xl text-pink-800" style={{ fontFamily: 'cursive' }}>{formData.groomName}</p>
              </div>
              <p className="text-lg text-pink-700 italic">Request the pleasure of your company</p>
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 space-y-3 my-6">
                <p className="text-xl text-gray-800">{formatDate(formData.date)}</p>
                <p className="text-lg text-gray-700">{formData.time}</p>
                <div className="flex justify-center gap-3 py-3">
                  <span className="text-pink-400 text-xl">✿</span>
                  <span className="text-pink-400 text-xl">✿</span>
                  <span className="text-pink-400 text-xl">✿</span>
                </div>
                <p className="text-xl font-semibold text-pink-800">{formData.venue}</p>
                <p className="text-sm text-gray-700">{formData.address}</p>
              </div>
              <div className="text-pink-400 text-5xl">🌸</div>
              <p className="text-sm text-pink-700">Kindly respond by {formData.rsvpContact}</p>
            </div>
          </div>
        )
      },
      {
        id: 12,
        name: 'Art Deco',
        component: () => (
          <div className="bg-gradient-to-br from-gray-900 to-slate-800 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-4 border-gold">
            <div className="text-center space-y-6 border-2 border-amber-400 p-10">
              <div className="text-amber-400 text-4xl">◆</div>
              <h1 className="text-4xl font-serif text-amber-400 uppercase tracking-widest">Wedding</h1>
              <div className="flex justify-center gap-4">
                <span className="w-16 h-px bg-amber-400 mt-3"></span>
                <span className="text-amber-400 text-2xl">❖</span>
                <span className="w-16 h-px bg-amber-400 mt-3"></span>
              </div>
              <div className="space-y-4 py-8">
                <p className="text-4xl text-white font-light uppercase tracking-wide">{formData.brideName}</p>
                <p className="text-2xl text-amber-400">and</p>
                <p className="text-4xl text-white font-light uppercase tracking-wide">{formData.groomName}</p>
              </div>
              <div className="flex justify-center gap-4">
                <span className="w-16 h-px bg-amber-400 mt-3"></span>
                <span className="text-amber-400 text-2xl">❖</span>
                <span className="w-16 h-px bg-amber-400 mt-3"></span>
              </div>
              <div className="bg-slate-800 bg-opacity-50 p-6 space-y-3 my-6">
                <p className="text-xl text-amber-200">{formatDate(formData.date)}</p>
                <p className="text-lg text-gray-300">{formData.time}</p>
                <div className="py-3">
                  <div className="text-amber-400 text-xl">◇</div>
                </div>
                <p className="text-xl text-amber-400 font-semibold">{formData.venue}</p>
                <p className="text-sm text-gray-400">{formData.address}</p>
              </div>
              <div className="text-amber-400 text-4xl">◆</div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">RSVP {formData.rsvpContact}</p>
            </div>
          </div>
        )
      },
      {
        id: 13,
        name: 'Tropical Paradise',
        component: () => (
          <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-4 border-teal-400">
            <div className="text-center space-y-6 bg-white bg-opacity-70 rounded-xl p-10">
              <div className="flex justify-center gap-3 text-5xl">
                <span>🌴</span><span>🌺</span><span>🌴</span>
              </div>
              <h1 className="text-4xl text-teal-800 font-bold">Paradise Awaits</h1>
              <p className="text-lg text-teal-700 italic">Join us for a tropical celebration</p>
              <div className="py-6 space-y-4">
                <p className="text-5xl text-teal-900" style={{ fontFamily: 'cursive' }}>{formData.brideName}</p>
                <div className="flex justify-center items-center gap-3">
                  <span className="text-teal-500 text-3xl">🌺</span>
                  <span className="text-teal-700 text-2xl">&</span>
                  <span className="text-teal-500 text-3xl">🌺</span>
                </div>
                <p className="text-5xl text-teal-900" style={{ fontFamily: 'cursive' }}>{formData.groomName}</p>
              </div>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 space-y-3">
                <p className="text-sm text-teal-700 uppercase tracking-wide">Are getting married on</p>
                <p className="text-2xl text-teal-900">{formatDate(formData.date)}</p>
                <p className="text-lg text-teal-800">{formData.time}</p>
                <div className="flex justify-center gap-2 py-3 text-teal-500 text-2xl">
                  <span>🥥</span><span>🍹</span><span>🥥</span>
                </div>
                <p className="text-xl font-semibold text-teal-900">{formData.venue}</p>
                <p className="text-sm text-teal-700">{formData.address}</p>
              </div>
              <div className="flex justify-center gap-3 text-5xl pt-4">
                <span>🌴</span><span>🌺</span><span>🌴</span>
              </div>
              <p className="text-sm text-teal-700">RSVP: {formData.rsvpContact}</p>
            </div>
          </div>
        )
      },
      {
        id: 14,
        name: 'Lavender Dreams',
        component: () => (
          <div className="bg-gradient-to-br from-violet-100 to-purple-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-8 border-violet-300" style={{ borderStyle: 'double' }}>
            <div className="text-center space-y-6">
              <div className="text-violet-500 text-4xl">✤</div>
              <h1 className="text-5xl font-serif text-violet-800">We're Getting Married!</h1>
              <div className="border-t-2 border-b-2 border-violet-300 py-8 my-6">
                <p className="text-4xl text-violet-900 mb-4" style={{ fontFamily: 'cursive' }}>
                  {formData.brideName}
                </p>
                <div className="flex items-center justify-center gap-4 my-4">
                  <span className="w-20 h-px bg-violet-400"></span>
                  <Heart className="w-8 h-8 text-violet-500 fill-violet-500" />
                  <span className="w-20 h-px bg-violet-400"></span>
                </div>
                <p className="text-4xl text-violet-900" style={{ fontFamily: 'cursive' }}>
                  {formData.groomName}
                </p>
              </div>
              <div className="bg-white bg-opacity-60 rounded-xl p-8 space-y-4">
                <p className="text-sm text-violet-700 uppercase tracking-widest">Please join us on</p>
                <p className="text-2xl text-violet-900">{formatDate(formData.date)}</p>
                <p className="text-lg text-violet-800">{formData.time}</p>
                <div className="flex justify-center gap-2 text-violet-400 text-xl py-3">
                  <span>✤</span><span>✤</span><span>✤</span>
                </div>
                <p className="text-xl font-semibold text-violet-900">{formData.venue}</p>
                <p className="text-sm text-violet-700">{formData.address}</p>
              </div>
              <div className="text-violet-500 text-4xl">✤</div>
              <p className="text-sm text-violet-700">Please RSVP to {formData.rsvpContact}</p>
            </div>
          </div>
        )
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const downloadAsHTML = () => {
    const template = templates.find(t => t.id === selectedTemplate);
    const invitationElement = document.getElementById('invitation-preview');

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wedding Invitation - ${formData.brideName} & ${formData.groomName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { 
            margin: 0; 
            padding: 20px; 
            background: linear-gradient(to bottom right, #eff6ff, #faf5ff);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>
    ${invitationElement.innerHTML}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wedding-invitation-${formData.brideName}-${formData.groomName}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadAsPDF = () => {
    const template = templates.find(t => t.id === selectedTemplate);
    const invitationElement = document.getElementById('invitation-preview');

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Wedding Invitation - ${formData.brideName} & ${formData.groomName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @media print {
            body { margin: 0; padding: 20px; }
            @page { size: A4; margin: 0; }
        }
        body {
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
    </style>
</head>
<body>
    ${invitationElement.innerHTML}
    <script>
        window.onload = function() {
            setTimeout(function() {
                window.print();
                window.close();
            }, 500);
        };
    </script>
</body>
</html>
    `);
    printWindow.document.close();
  };

  const templates = [
    {
      id: 1,
      name: 'Classic Elegance',
      component: () => (
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-4 border-rose-200">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Heart className="w-16 h-16 text-rose-400 fill-rose-400" />
            </div>
            <h1 className="text-5xl font-serif text-rose-800">Wedding Invitation</h1>
            <div className="border-t-2 border-b-2 border-rose-300 py-8 my-8">
              <p className="text-3xl font-serif text-gray-700 mb-4">
                {formData.brideName} & {formData.groomName}
              </p>
              <p className="text-lg text-gray-600 italic">Together with their families</p>
              <p className="text-lg text-gray-600 mt-2">invite you to celebrate their marriage</p>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-rose-500" />
                <p className="text-lg">{formatDate(formData.date)}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-rose-500" />
                <p className="text-lg">{formData.time}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-rose-500" />
                <div className="text-center">
                  <p className="text-lg font-semibold">{formData.venue}</p>
                  <p className="text-sm">{formData.address}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-rose-200">
              <p className="text-sm text-gray-600">RSVP by calling {formData.rsvpContact}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      name: 'Modern Minimalist',
      component: () => (
        <div className="bg-white p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border border-gray-200">
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <p className="text-sm tracking-widest text-gray-500 uppercase">Save The Date</p>
              <h1 className="text-6xl font-light text-gray-800">
                {formData.brideName.split(' ')[0]} & {formData.groomName.split(' ')[0]}
              </h1>
              <div className="w-24 h-px bg-gray-300 mx-auto"></div>
            </div>

            <div className="space-y-6 py-8">
              <div className="text-gray-700">
                <p className="text-2xl font-light mb-2">{formatDate(formData.date)}</p>
                <p className="text-lg text-gray-500">{formData.time}</p>
              </div>

              <div className="w-px h-12 bg-gray-300 mx-auto"></div>

              <div className="text-gray-700">
                <p className="text-xl font-medium mb-1">{formData.venue}</p>
                <p className="text-sm text-gray-500">{formData.address}</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-xs tracking-wider text-gray-500 uppercase">Please RSVP</p>
              <p className="text-sm text-gray-600 mt-1">{formData.rsvpContact}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      name: 'Romantic Floral',
      component: () => (
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-4 border-pink-200">
          <div className="text-center space-y-6 relative">
            <div className="absolute top-0 left-0 text-6xl text-pink-200">❀</div>
            <div className="absolute top-0 right-0 text-6xl text-pink-200">❀</div>
            <div className="absolute bottom-0 left-0 text-6xl text-pink-200">❀</div>
            <div className="absolute bottom-0 right-0 text-6xl text-pink-200">❀</div>

            <div className="relative z-10">
              <p className="text-sm text-purple-600 uppercase tracking-widest mb-4">Join Us</p>
              <h1 className="text-5xl font-script text-purple-800 mb-2" style={{ fontFamily: 'cursive' }}>
                {formData.brideName}
              </h1>
              <p className="text-2xl text-pink-500">&</p>
              <h1 className="text-5xl font-script text-purple-800 mt-2" style={{ fontFamily: 'cursive' }}>
                {formData.groomName}
              </h1>
            </div>

            <div className="flex justify-center gap-4 my-6">
              <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
              <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
            </div>

            <div className="bg-white bg-opacity-60 rounded-lg p-6 space-y-3">
              <p className="text-lg text-purple-700 italic">Are getting married!</p>
              <p className="text-xl font-semibold text-gray-800">{formatDate(formData.date)}</p>
              <p className="text-lg text-gray-700">{formData.time}</p>
              <div className="pt-4 border-t border-pink-200 mt-4">
                <p className="text-lg font-semibold text-gray-800">{formData.venue}</p>
                <p className="text-sm text-gray-600">{formData.address}</p>
              </div>
            </div>

            <div className="text-sm text-purple-600 pt-4">
              <p>Kindly RSVP to {formData.rsvpContact}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      name: 'Vintage Gold',
      component: () => (
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-8 border-double border-amber-400">
          <div className="text-center space-y-6 border-4 border-amber-300 p-8">
            <div className="text-amber-600 text-4xl">✦</div>
            <h1 className="text-4xl font-serif text-amber-900 uppercase tracking-wide">
              Wedding Celebration
            </h1>
            <div className="text-amber-600 text-2xl">❖</div>

            <div className="space-y-4 py-6">
              <p className="text-5xl font-serif text-amber-800">
                {formData.brideName}
              </p>
              <p className="text-3xl text-amber-600">&</p>
              <p className="text-5xl font-serif text-amber-800">
                {formData.groomName}
              </p>
            </div>

            <div className="text-amber-600 text-2xl">❖</div>

            <div className="bg-amber-100 bg-opacity-50 p-6 rounded space-y-3">
              <p className="text-sm text-amber-900 uppercase tracking-widest">Request the honor of your presence</p>
              <p className="text-2xl font-serif text-amber-800">{formatDate(formData.date)}</p>
              <p className="text-lg text-amber-700">{formData.time}</p>
              <div className="w-16 h-px bg-amber-400 mx-auto my-4"></div>
              <p className="text-xl font-serif text-amber-800">{formData.venue}</p>
              <p className="text-sm text-amber-700">{formData.address}</p>
            </div>

            <div className="text-amber-600 text-4xl">✦</div>
            <p className="text-xs text-amber-700 uppercase tracking-widest">RSVP: {formData.rsvpContact}</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      name: 'Ocean Breeze',
      component: () => (
        <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-4 border-blue-300">
          <div className="text-center space-y-6">
            <div className="text-blue-400 text-5xl mb-4">⚓</div>
            <h1 className="text-4xl font-serif text-blue-800">You're Invited</h1>
            <div className="bg-white bg-opacity-70 rounded-lg p-8 space-y-4">
              <p className="text-sm text-blue-600 uppercase tracking-widest">To Celebrate The Wedding Of</p>
              <p className="text-4xl font-light text-blue-900">{formData.brideName}</p>
              <p className="text-2xl text-blue-500">&</p>
              <p className="text-4xl font-light text-blue-900">{formData.groomName}</p>
              <div className="py-6 space-y-2">
                <p className="text-lg text-gray-700">{formatDate(formData.date)}</p>
                <p className="text-lg text-gray-600">{formData.time}</p>
                <div className="pt-4">
                  <p className="text-xl font-semibold text-blue-800">{formData.venue}</p>
                  <p className="text-sm text-gray-600">{formData.address}</p>
                </div>
              </div>
            </div>
            <div className="text-blue-400 text-4xl">🌊</div>
            <p className="text-sm text-blue-700">RSVP: {formData.rsvpContact}</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      name: 'Garden Party',
      component: () => (
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-8 border-green-300">
          <div className="text-center space-y-6 relative">
            <div className="absolute top-0 left-0 text-5xl">🌿</div>
            <div className="absolute top-0 right-0 text-5xl">🌿</div>
            <div className="text-green-600 text-3xl">🌸 🌼 🌸</div>
            <h1 className="text-5xl font-serif text-green-800" style={{ fontFamily: 'cursive' }}>
              {formData.brideName} & {formData.groomName}
            </h1>
            <p className="text-xl text-green-700 italic">Are tying the knot!</p>
            <div className="bg-white bg-opacity-80 rounded-xl p-8 space-y-4 shadow-inner">
              <div className="text-green-600 text-2xl">✿</div>
              <p className="text-2xl text-gray-800">{formatDate(formData.date)}</p>
              <p className="text-lg text-gray-700">{formData.time}</p>
              <div className="border-t-2 border-b-2 border-green-200 py-4 my-4">
                <p className="text-xl font-semibold text-green-800">{formData.venue}</p>
                <p className="text-sm text-gray-600">{formData.address}</p>
              </div>
              <div className="text-green-600 text-2xl">✿</div>
            </div>
            <p className="text-sm text-green-700 pt-4">Please RSVP to {formData.rsvpContact}</p>
            <div className="text-green-600 text-3xl">🌸 🌼 🌸</div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      name: 'Royal Purple',
      component: () => (
        <div className="bg-gradient-to-br from-purple-900 to-violet-800 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-4 border-yellow-400">
          <div className="text-center space-y-6">
            <div className="text-yellow-400 text-4xl">♔</div>
            <h1 className="text-4xl font-serif text-yellow-300 uppercase tracking-widest">Royal Wedding</h1>
            <div className="border-4 border-yellow-400 p-8 bg-purple-800 bg-opacity-50">
              <p className="text-yellow-200 text-sm uppercase tracking-widest mb-4">Join Us In Celebrating</p>
              <p className="text-5xl font-serif text-white mb-2">{formData.brideName}</p>
              <p className="text-3xl text-yellow-400">&</p>
              <p className="text-5xl font-serif text-white mt-2">{formData.groomName}</p>
            </div>
            <div className="space-y-4 text-yellow-100">
              <p className="text-xl">{formatDate(formData.date)}</p>
              <p className="text-lg">{formData.time}</p>
              <div className="w-32 h-px bg-yellow-400 mx-auto my-4"></div>
              <p className="text-xl text-yellow-300 font-semibold">{formData.venue}</p>
              <p className="text-sm text-yellow-200">{formData.address}</p>
            </div>
            <div className="text-yellow-400 text-4xl">♔</div>
            <p className="text-xs text-yellow-200 uppercase tracking-wider">RSVP: {formData.rsvpContact}</p>
          </div>
        </div>
      )
    },
    {
      id: 8,
      name: 'Rustic Charm',
      component: () => (
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-8 border-amber-600" style={{ borderStyle: 'double' }}>
          <div className="text-center space-y-6 bg-white bg-opacity-60 p-8 rounded">
            <div className="text-amber-800 text-4xl">🌾</div>
            <p className="text-sm text-amber-700 uppercase tracking-widest">Together With Their Families</p>
            <h1 className="text-6xl text-amber-900" style={{ fontFamily: 'cursive' }}>
              {formData.brideName.split(' ')[0]}
            </h1>
            <p className="text-3xl text-amber-700">&</p>
            <h1 className="text-6xl text-amber-900" style={{ fontFamily: 'cursive' }}>
              {formData.groomName.split(' ')[0]}
            </h1>
            <p className="text-lg text-amber-800 italic">Invite you to their wedding celebration</p>
            <div className="bg-amber-50 p-6 rounded-lg space-y-3 my-6">
              <p className="text-xl text-amber-900">{formatDate(formData.date)}</p>
              <p className="text-lg text-amber-800">{formData.time}</p>
              <div className="flex items-center justify-center gap-2 text-amber-700">
                <span>🌻</span>
                <span className="w-12 h-px bg-amber-500"></span>
                <span>🌻</span>
              </div>
              <p className="text-xl font-semibold text-amber-900">{formData.venue}</p>
              <p className="text-sm text-amber-700">{formData.address}</p>
            </div>
            <div className="text-amber-800 text-4xl">🌾</div>
            <p className="text-sm text-amber-700">Kindly RSVP: {formData.rsvpContact}</p>
          </div>
        </div>
      )
    },
    {
      id: 9,
      name: 'Starry Night',
      component: () => (
        <div className="bg-gradient-to-br from-indigo-950 to-purple-950 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto border-2 border-yellow-300">
          <div className="text-center space-y-6 relative">
            <div className="absolute inset-0 text-yellow-200 text-xs opacity-50">
              {'★ '.repeat(50)}
            </div>
            <div className="relative z-10">
              <div className="text-yellow-300 text-5xl mb-4">✨</div>
              <h1 className="text-3xl text-yellow-200 uppercase tracking-widest mb-6">Under The Stars</h1>
              <div className="bg-indigo-900 bg-opacity-70 rounded-xl p-8 space-y-4 border border-yellow-400">
                <p className="text-5xl text-white font-light">{formData.brideName}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="w-16 h-px bg-yellow-400"></span>
                  <Heart className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="w-16 h-px bg-yellow-400"></span>
                </div>
                <p className="text-5xl text-white font-light">{formData.groomName}</p>
              </div>
              <p className="text-xl text-yellow-200 italic mt-6">Are getting married!</p>
              <div className="space-y-3 text-yellow-100 mt-6">
                <p className="text-lg">{formatDate(formData.date)}</p>
                <p className="text-lg">{formData.time}</p>
                <div className="text-yellow-300 text-2xl my-4">✦ ✧ ✦</div>
                <p className="text-xl text-yellow-300 font-semibold">{formData.venue}</p>
                <p className="text-sm text-yellow-200">{formData.address}</p>
              </div>
              <div className="text-yellow-300 text-5xl mt-6">✨</div>
              <p className="text-xs text-yellow-200 mt-4">RSVP: {formData.rsvpContact}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      name: 'Boho Chic',
      component: () => (
        <div className="bg-gradient-to-br from-stone-100 to-amber-50 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto">
          <div className="text-center space-y-6 border-4 border-stone-300 p-10 rounded-lg bg-white bg-opacity-70">
            <div className="flex justify-center gap-4 text-stone-600 text-3xl">
              <span>🍂</span><span>🌿</span><span>🍂</span>
            </div>
            <p className="text-sm text-stone-600 uppercase tracking-widest">Join us for a</p>
            <h1 className="text-4xl font-serif text-stone-800">Bohemian Celebration</h1>
            <div className="py-6 space-y-3">
              <p className="text-4xl text-stone-700" style={{ fontFamily: 'cursive' }}>
                {formData.brideName} & {formData.groomName}
              </p>
              <p className="text-lg text-stone-600 italic">Are tying the knot</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="w-16 h-px bg-stone-400"></span>
              <span className="text-stone-500 text-xl">❋</span>
              <span className="w-16 h-px bg-stone-400"></span>
            </div>
            <div className="space-y-2 pt-4">
              <p className="text-xl text-stone-700">{formatDate(formData.date)}</p>
              <p className="text-lg text-stone-600">{formData.time}</p>
              <div className="pt-4">
                <p className="text-xl font-semibold text-stone-800">{formData.venue}</p>
                <p className="text-sm text-stone-600">{formData.address}</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 text-stone-600 text-3xl pt-4">
              <span>🍂</span><span>🌿</span><span>🍂</span>
            </div>
            <p className="text-sm text-stone-600 pt-4">RSVP: {formData.rsvpContact}</p>
          </div>
        </div>
      )
    },
    {
      id: 11,
      name: 'Cherry Blossom',
      component: () => (
        <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-12 rounded-lg shadow-2xl max-w-2xl mx-auto">
          <div className="text-center space-y-6 bg-white bg-opacity-80 p-10 rounded-2xl">
            <div className="text-pink-400 text-5xl">🌸</div>
            <h1 className="text-3xl text-pink-700 uppercase tracking-widest">Wedding Invitation</h1>
            <div className="space-y-4 py-6">
              <p className="text-5xl text-pink-800" style={{ fontFamily: 'cursive' }}>{formData.brideName}</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-pink-300 text-2xl">🌸</span>
                <span className="text-pink-600 text-3xl">&</span>
                <span className="text-pink-300 text-2xl">🌸</span>
              </div>
              <p className="text-5xl text-pink-800" style={{ fontFamily: 'cursive' }}>{formData.groomName}</p>
            </div>
            <p className="text-lg text-pink-700 italic">Request the pleasure of your company</p>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 space-y-3 my-6">
              <p className="text-xl text-gray-800">{formatDate(formData.date)}</p>
              <p className="text-lg text-gray-700">{formData.time}</p>
              <div className="flex justify-center gap-3 py-3">
                <span className="text-pink-400 text-xl">✿</span>
                <span className="text-pink-400 text-xl">✿</span>
                <span className="text-pink-400 text-xl">✿</span>
              </div>
              <p className="text-xl font-semibold text-pink-800">{formData.venue}</p>
              <p className="text-sm text-gray-700">{formData.address}</p>
            </div>
            <div className="text-pink-400 text-5xl">🌸</div>
            <p className="text-sm text-pink-700">Kindly respond by {formData.rsvpContact}</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Wedding Invitation Generator</h1>
          <p className="text-gray-600 text-lg">Create beautiful wedding invitations in minutes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Invitation Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bride's Name</label>
                <input
                  type="text"
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Groom's Name</label>
                <input
                  type="text"
                  name="groomName"
                  value={formData.groomName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Wedding Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">RSVP Contact</label>
                <input
                  type="text"
                  name="rsvpContact"
                  value={formData.rsvpContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Template</h3>
              <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                {templates.map(template => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedTemplate === template.id
                        ? 'bg-pink-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {template.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Preview</h2>
              <div className="overflow-auto" id="invitation-preview">
                {templates.find(t => t.id === selectedTemplate)?.component()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={downloadAsHTML}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Download HTML
              </button>

              <button
                onClick={downloadAsPDF}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitationGenerator;