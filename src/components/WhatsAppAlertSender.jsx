import React, { useState } from 'react';
import { Send, Plus, Trash2, MessageCircle, AlertCircle, CheckCircle, Upload, Download } from 'lucide-react';

export default function WhatsAppAlertSender() {
  const [senderNumber, setSenderNumber] = useState('');
  const [receivers, setReceivers] = useState([{ id: 1, number: '', name: '' }]);
  const [message, setMessage] = useState('');
  const [batchSize, setBatchSize] = useState(5);
  const [delay, setDelay] = useState(2);
  const [sending, setSending] = useState(false);
  const [sentCount, setSentCount] = useState(0);

  const addReceiver = () => {
    setReceivers([...receivers, { id: Date.now(), number: '', name: '' }]);
  };

  const removeReceiver = (id) => {
    setReceivers(receivers.filter(r => r.id !== id));
  };

  const updateReceiver = (id, field, value) => {
    setReceivers(receivers.map(r => 
      r.id === id ? { ...r, [field]: value } : r
    ));
  };

  const formatPhoneNumber = (number) => {
    let cleaned = number.replace(/\D/g, '');
    
    if (cleaned.startsWith('0')) {
      cleaned = '91' + cleaned.substring(1);
    }
    
    if (cleaned.length === 10) {
      cleaned = '91' + cleaned;
    }
    
    return cleaned;
  };

  const addMultipleReceivers = () => {
    const count = parseInt(prompt('How many students do you want to add?', '10'));
    if (count && count > 0) {
      const newReceivers = Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        number: '',
        name: `Student ${receivers.length + i + 1}`
      }));
      setReceivers([...receivers, ...newReceivers]);
    }
  };

  const importFromText = () => {
    const text = prompt('Paste phone numbers (one per line, with optional name):\nFormat: 9876543210 or 9876543210,Student Name');
    if (text) {
      const lines = text.trim().split('\n');
      const newReceivers = lines.map((line, i) => {
        const parts = line.trim().split(',');
        return {
          id: Date.now() + i,
          number: parts[0].trim(),
          name: parts[1] ? parts[1].trim() : `Student ${receivers.length + i + 1}`
        };
      });
      setReceivers([...receivers, ...newReceivers]);
    }
  };

  const sendAlertsBatch = async () => {
    if (!message.trim()) {
      alert('Please enter a message');
      return;
    }

    const validReceivers = receivers.filter(r => r.number.trim());
    
    if (validReceivers.length === 0) {
      alert('Please add at least one receiver number');
      return;
    }

    // Confirm action
    const confirm = window.confirm(
      `Ready to send to ${validReceivers.length} students?\n\n` +
      `Batch size: ${batchSize} at a time\n` +
      `Delay: ${delay} seconds between batches\n\n` +
      `Click OK to start opening WhatsApp chats.`
    );

    if (!confirm) return;

    setSending(true);
    setSentCount(0);
    
    const encodedMessage = encodeURIComponent(message);
    
    // Send in batches
    for (let i = 0; i < validReceivers.length; i += batchSize) {
      const batch = validReceivers.slice(i, i + batchSize);
      
      // Open all in current batch
      batch.forEach((receiver, index) => {
        setTimeout(() => {
          const formattedNumber = formatPhoneNumber(receiver.number);
          const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
          window.open(whatsappUrl, `whatsapp_${i + index}`);
          setSentCount(prev => prev + 1);
        }, index * 300); // Small delay between each window in batch (300ms)
      });
      
      // Wait before next batch
      if (i + batchSize < validReceivers.length) {
        await new Promise(resolve => setTimeout(resolve, delay * 1000));
      }
    }
    
    setSending(false);
    alert(`✅ Opened WhatsApp for all ${validReceivers.length} students!\n\nNow press Enter in each WhatsApp chat to send.`);
  };

  const validReceivers = receivers.filter(r => r.number.trim());

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <MessageCircle className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-800">WhatsApp Class Alert System</h1>
          </div>
          <p className="text-gray-600 ml-11">Send messages to all your students at once</p>
          
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-green-800">
              <strong>Fast Batch Sending:</strong> This will open multiple WhatsApp chats at once! 
              Just press Enter in each chat to send. Perfect for informing 10+ students quickly.
            </div>
          </div>
        </div>

        {/* Message Composition */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📝 Class Announcement</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Teacher/Sender Number (Optional)
            </label>
            <input
              type="text"
              value={senderNumber}
              onChange={(e) => setSenderNumber(e.target.value)}
              placeholder="e.g., +91 9876543210"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message to Students *
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Example: Class reminder - Tomorrow's class at 10 AM. Please bring your notebooks."
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
            />
            <p className="text-sm text-gray-500 mt-1">
              {message.length} characters
            </p>
          </div>
        </div>

        {/* Batch Settings */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">⚙️ Sending Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Batch Size (windows to open at once)
              </label>
              <select
                value={batchSize}
                onChange={(e) => setBatchSize(parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              >
                <option value="3">3 at a time (Slow & Safe)</option>
                <option value="5">5 at a time (Recommended)</option>
                <option value="8">8 at a time (Fast)</option>
                <option value="10">10 at a time (Very Fast)</option>
                <option value="15">15 at a time (Maximum)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delay Between Batches (seconds)
              </label>
              <select
                value={delay}
                onChange={(e) => setDelay(parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              >
                <option value="1">1 second (Very Fast)</option>
                <option value="2">2 seconds (Recommended)</option>
                <option value="3">3 seconds (Safe)</option>
                <option value="5">5 seconds (Very Safe)</option>
              </select>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              💡 <strong>Tip:</strong> For {validReceivers.length} students, this will open {Math.ceil(validReceivers.length / batchSize)} batch(es) 
              over approximately {Math.ceil(validReceivers.length / batchSize) * delay} seconds.
            </p>
          </div>
        </div>

        {/* Students List */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">👥 Students List ({validReceivers.length})</h2>
            <div className="flex gap-2">
              <button
                onClick={importFromText}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Upload className="w-4 h-4" />
                Paste Numbers
              </button>
              <button
                onClick={addMultipleReceivers}
                className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Multiple
              </button>
              <button
                onClick={addReceiver}
                className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add One
              </button>
            </div>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {receivers.map((receiver, index) => (
              <div key={receiver.id} className="flex gap-3 items-start bg-gray-50 p-3 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={receiver.name}
                    onChange={(e) => updateReceiver(receiver.id, 'name', e.target.value)}
                    placeholder="Student name"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="text"
                    value={receiver.number}
                    onChange={(e) => updateReceiver(receiver.id, 'number', e.target.value)}
                    placeholder="Phone: 9876543210"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
                {receivers.length > 1 && (
                  <button
                    onClick={() => removeReceiver(receiver.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Send Button */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <button
            onClick={sendAlertsBatch}
            disabled={sending}
            className="w-full flex items-center justify-center gap-3 px-6 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xl font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            {sending ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                Opening WhatsApp... ({sentCount}/{validReceivers.length})
              </>
            ) : (
              <>
                <Send className="w-6 h-6" />
                Send to All {validReceivers.length} Students
              </>
            )}
          </button>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">
              ✅ Valid students: {validReceivers.length} | ⚠️ Missing numbers: {receivers.length - validReceivers.length}
            </p>
            <p className="text-xs text-gray-500">
              Allow pop-ups when prompted by your browser
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}