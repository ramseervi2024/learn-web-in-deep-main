import React, { useState } from 'react';
import { Search, MapPin, Star, Phone, MessageCircle, Filter, Menu, User, Briefcase, Calendar, TrendingUp, Settings, Shield, FileText, DollarSign, Clock, CheckCircle } from 'lucide-react';

const LabourConnectPlatform = () => {
  const [activeTab, setActiveTab] = useState('product');
  const [userType, setUserType] = useState('labourer');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [language, setLanguage] = useState('en');

  // Sample data
  const skills = [
    { id: 'construction', name: 'Construction Worker', icon: '🏗️', count: 1250 },
    { id: 'electrician', name: 'Electrician', icon: '⚡', count: 890 },
    { id: 'plumber', name: 'Plumber', icon: '🔧', count: 720 },
    { id: 'painter', name: 'Painter', icon: '🎨', count: 650 },
    { id: 'carpenter', name: 'Carpenter', icon: '🪚', count: 580 },
    { id: 'driver', name: 'Driver', icon: '🚗', count: 920 },
    { id: 'helper', name: 'Helper', icon: '🤝', count: 1100 },
    { id: 'cleaner', name: 'Cleaner', icon: '🧹', count: 800 }
  ];

  const labourers = [
    { id: 1, name: 'Rajesh Kumar', skill: 'Electrician', experience: '8 years', rate: '₹800/day', location: 'Malleswaram, Bengaluru', rating: 4.8, jobs: 156, available: true, photo: '👨‍🔧', languages: ['Hindi', 'Kannada'] },
    { id: 2, name: 'Suresh Patil', skill: 'Plumber', experience: '5 years', rate: '₹650/day', location: 'Jayanagar, Bengaluru', rating: 4.6, jobs: 98, available: true, photo: '👨‍🔧', languages: ['Hindi', 'Kannada', 'English'] },
    { id: 3, name: 'Mahesh Singh', skill: 'Painter', experience: '10 years', rate: '₹750/day', location: 'Indiranagar, Bengaluru', rating: 4.9, jobs: 203, available: false, photo: '👨‍🎨', languages: ['Hindi'] },
    { id: 4, name: 'Ramesh Yadav', skill: 'Construction Worker', experience: '12 years', rate: '₹900/day', location: 'Whitefield, Bengaluru', rating: 4.7, jobs: 267, available: true, photo: '👷‍♂️', languages: ['Hindi', 'English'] }
  ];

  const jobs = [
    { id: 1, title: 'Electrical Wiring for New Home', employer: 'Sharma Builders', location: 'Koramangala', budget: '₹15,000-20,000', duration: '3-4 days', posted: '2 hours ago', applicants: 12 },
    { id: 2, title: 'Bathroom Renovation - Plumbing Work', employer: 'Mr. Anil Kumar', location: 'HSR Layout', budget: '₹8,000-12,000', duration: '2 days', posted: '5 hours ago', applicants: 8 },
    { id: 3, title: 'House Painting - 2BHK', employer: 'Sunita Properties', location: 'BTM Layout', budget: '₹25,000-30,000', duration: '5-7 days', posted: '1 day ago', applicants: 15 }
  ];

  const translations = {
    en: {
      findWork: 'Find Work',
      findLabourers: 'Find Labourers',
      searchPlaceholder: 'Search by skill, location...',
      available: 'Available',
      notAvailable: 'Not Available',
      hireNow: 'Hire Now',
      viewProfile: 'View Profile',
      experience: 'Experience',
      completedJobs: 'Completed Jobs',
      rating: 'Rating',
      languages: 'Languages'
    },
    hi: {
      findWork: 'काम खोजें',
      findLabourers: 'मजदूर खोजें',
      searchPlaceholder: 'कौशल, स्थान से खोजें...',
      available: 'उपलब्ध',
      notAvailable: 'उपलब्ध नहीं',
      hireNow: 'अभी हायर करें',
      viewProfile: 'प्रोफ़ाइल देखें',
      experience: 'अनुभव',
      completedJobs: 'पूर्ण कार्य',
      rating: 'रेटिंग',
      languages: 'भाषाएँ'
    }
  };

  const t = translations[language];

  const ProductRoadmap = () => (
    <div className="space-y-8 p-6 bg-white rounded-lg">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Roadmap</h2>
        <p className="text-gray-600 mb-6">Labour Connect - Connecting Daily Wage Workers with Opportunities</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold text-blue-600 mb-3">MVP Phase (0-3 months)</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> OTP-based mobile registration</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Basic profile creation (skills, location, rate)</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Job posting by employers</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Search & filter (skill, location, price)</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Direct contact (phone reveal)</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Basic ratings & reviews</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Hindi + English support</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Admin verification dashboard</li>
          </ul>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-xl font-bold text-purple-600 mb-3">Phase 2 (3-6 months)</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><Clock className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> In-app chat & calling</li>
            <li className="flex items-start"><Clock className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> Work history tracking</li>
            <li className="flex items-start"><Clock className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> Earnings dashboard</li>
            <li className="flex items-start"><Clock className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> Advanced filters (availability, ratings)</li>
            <li className="flex items-start"><Clock className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> Regional language support (Kannada, Tamil, Telugu, Marathi)</li>
            <li className="flex items-start"><Clock className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> ID verification (Aadhaar integration)</li>
            <li className="flex items-start"><Clock className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> Dispute resolution system</li>
            <li className="flex items-start"><Clock className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /> Push notifications</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-bold text-green-600 mb-3">Phase 3 (6-12 months)</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><TrendingUp className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> Payment integration (UPI, wallets)</li>
            <li className="flex items-start"><TrendingUp className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> Attendance tracking</li>
            <li className="flex items-start"><TrendingUp className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> Skill verification & badges</li>
            <li className="flex items-start"><TrendingUp className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> Premium listings</li>
            <li className="flex items-start"><TrendingUp className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> Insurance partnerships</li>
            <li className="flex items-start"><TrendingUp className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> Micro-loans integration</li>
            <li className="flex items-start"><TrendingUp className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> Video profiles</li>
            <li className="flex items-start"><TrendingUp className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> AI-powered job matching</li>
          </ul>
        </div>

        <div className="border-l-4 border-indigo-500 pl-4">
          <h3 className="text-xl font-bold text-indigo-600 mb-3">Future Vision (12+ months)</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" /> Skill training programs</li>
            <li className="flex items-start"><Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" /> Government scheme integration</li>
            <li className="flex items-start"><Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" /> Health benefits marketplace</li>
            <li className="flex items-start"><Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" /> Equipment rental marketplace</li>
            <li className="flex items-start"><Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" /> Team formation for projects</li>
            <li className="flex items-start"><Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" /> Voice-based interface</li>
            <li className="flex items-start"><Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" /> Contractor certification</li>
            <li className="flex items-start"><Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" /> Pan-India expansion</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const UserPersonas = () => (
    <div className="space-y-6 p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">User Personas & User Flows</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <div className="text-4xl mb-3">👷‍♂️</div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Rajesh (Daily Labourer)</h3>
          <p className="text-sm text-gray-700 mb-3">Age: 32, Electrician, 8 years experience</p>
          <div className="space-y-2 text-sm">
            <p><strong>Goals:</strong> Find steady work, increase daily rate, build reputation</p>
            <p><strong>Pain Points:</strong> Irregular work, low bargaining power, contractor exploitation</p>
            <p><strong>Tech Literacy:</strong> Basic smartphone user, prefers Hindi</p>
            <p><strong>Needs:</strong> Simple interface, voice support, quick job alerts</p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <div className="text-4xl mb-3">🏠</div>
          <h3 className="text-xl font-bold text-green-900 mb-2">Priya (Homeowner)</h3>
          <p className="text-sm text-gray-700 mb-3">Age: 38, Working Professional</p>
          <div className="space-y-2 text-sm">
            <p><strong>Goals:</strong> Find reliable workers quickly, transparent pricing, verified profiles</p>
            <p><strong>Pain Points:</strong> Trust issues, no-shows, quality concerns, price haggling</p>
            <p><strong>Tech Literacy:</strong> High, comfortable with apps</p>
            <p><strong>Needs:</strong> Ratings/reviews, instant contact, work history visibility</p>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
          <div className="text-4xl mb-3">🏗️</div>
          <h3 className="text-xl font-bold text-purple-900 mb-2">Sunil (Contractor)</h3>
          <p className="text-sm text-gray-700 mb-3">Age: 45, Construction Contractor</p>
          <div className="space-y-2 text-sm">
            <p><strong>Goals:</strong> Hire teams quickly, manage multiple workers, track attendance</p>
            <p><strong>Pain Points:</strong> Worker unavailability, coordination issues, payment disputes</p>
            <p><strong>Tech Literacy:</strong> Medium, uses WhatsApp regularly</p>
            <p><strong>Needs:</strong> Bulk hiring, team management, payment tracking</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Key User Flows</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-blue-700 mb-3">Labourer Onboarding Flow</h4>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">1</span><span>Enter mobile number → Receive OTP</span></li>
              <li className="flex items-start"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">2</span><span>Select language preference</span></li>
              <li className="flex items-start"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">3</span><span>Choose skills (multi-select)</span></li>
              <li className="flex items-start"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">4</span><span>Set location & daily rate</span></li>
              <li className="flex items-start"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">5</span><span>Add experience & photo</span></li>
              <li className="flex items-start"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">6</span><span>Profile submitted for verification</span></li>
              <li className="flex items-start"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">7</span><span>Browse jobs or wait for requests</span></li>
            </ol>
          </div>

          <div>
            <h4 className="font-bold text-lg text-green-700 mb-3">Employer Hiring Flow</h4>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">1</span><span>Login via OTP</span></li>
              <li className="flex items-start"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">2</span><span>Search by skill + location filters</span></li>
              <li className="flex items-start"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">3</span><span>View profiles (ratings, experience, photos)</span></li>
              <li className="flex items-start"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">4</span><span>Click "Hire Now" → Phone number revealed</span></li>
              <li className="flex items-start"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">5</span><span>Direct call/message to coordinate</span></li>
              <li className="flex items-start"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">6</span><span>Mark work as completed</span></li>
              <li className="flex items-start"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">7</span><span>Rate & review the labourer</span></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );

  const TechStack = () => (
    <div className="space-y-6 p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack & Architecture</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">F</span>
            Frontend
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>React.js</strong> - Component-based UI</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Next.js 14</strong> - SSR, SEO, performance</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Tailwind CSS</strong> - Rapid styling</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>PWA</strong> - Offline support, installable</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>i18next</strong> - Multilingual support</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>React Query</strong> - Data fetching & caching</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
            <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">B</span>
            Backend
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Node.js + Express</strong> - API server</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>PostgreSQL</strong> - Primary database</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Redis</strong> - Caching & sessions</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Firebase Auth</strong> - OTP authentication</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Twilio</strong> - SMS & calling</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Cloudinary</strong> - Image storage</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
            <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">I</span>
            Infrastructure
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Vercel/Railway</strong> - Hosting (low cost)</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>AWS S3</strong> - File storage</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>CloudFlare CDN</strong> - Fast delivery</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Elasticsearch</strong> - Search engine</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>GitHub Actions</strong> - CI/CD</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Sentry</strong> - Error tracking</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
            <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">M</span>
            Mobile & Other
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>React Native</strong> - iOS/Android apps</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Socket.io</strong> - Real-time chat</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>FCM</strong> - Push notifications</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Google Maps API</strong> - Location</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Razorpay</strong> - Payments</li>
            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" /><strong>Analytics</strong> - Mixpanel/GA4</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg mt-6">
        <h3 className="text-xl font-bold text-yellow-900 mb-3">💰 Cost-Efficient Tech Choices for India</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">Free Tier / Low Cost Options:</p>
            <ul className="space-y-1">
              <li>• Vercel (Free hosting for 10k visitors/month)</li>
              <li>• Supabase (Free PostgreSQL + Auth)</li>
              <li>• Firebase Auth (Free 10k verifications/month)</li>
              <li>• Cloudflare CDN (Free tier)</li>
              <li>• Render.com (Free web services)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Optimization for Low Bandwidth:</p>
            <ul className="space-y-1">
              <li>• Image compression (WebP format, lazy loading)</li>
              <li>• Code splitting & tree shaking</li>
              <li>• Aggressive caching strategies</li>
              <li>• Minimal JS bundle size</li>
              <li>• Service worker for offline mode</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const DatabaseSchema = () => (
    <div className="space-y-6 p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Database Schema & API Design</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Core Tables</h3>
        <div className="space-y-4 font-mono text-sm">
          <div className="bg-white p-4 rounded border">
            <h4 className="font-bold text-blue-700 mb-2">users</h4>
            <pre className="text-xs overflow-x-auto">
{`id (UUID, PK)
phone_number (VARCHAR, UNIQUE)
user_type (ENUM: labourer, employer, contractor)
full_name (VARCHAR)
email (VARCHAR, nullable)
profile_photo_url (TEXT)
language_preference (VARCHAR)
location_lat (DECIMAL)
location_lng (DECIMAL)
location_address (TEXT)
is_verified (BOOLEAN)
is_active (BOOLEAN)
created_at (TIMESTAMP)
last_active_at (TIMESTAMP)`}
            </pre>
          </div>

          <div className="bg-white p-4 rounded border">
            <h4 className="font-bold text-green-700 mb-2">labourer_profiles</h4>
            <pre className="text-xs overflow-x-auto">
{`id (UUID, PK)
user_id (UUID, FK → users)
skills (ARRAY[VARCHAR]) -- electrician, plumber, etc.
experience_years (INTEGER)
daily_rate_min (INTEGER)
daily_rate_max (INTEGER)
availability_status (ENUM: available, busy, unavailable)
bio (TEXT)
languages_spoken (ARRAY[VARCHAR])
aadhaar_verified (BOOLEAN)
total_jobs_completed (INTEGER)
average_rating (DECIMAL)
total_reviews (INTEGER)
total_earnings (INTEGER)
badge_level (ENUM: bronze, silver, gold, platinum)`}
            </pre>
          </div>

          <div className="bg-white p-4 rounded border">
            <h4 className="font-bold text-purple-700 mb-2">employer_profiles</h4>
            <pre className="text-xs overflow-x-auto">
{`id (UUID, PK)
user_id (UUID, FK → users)
company_name (VARCHAR, nullable)
company_type (ENUM: individual, contractor, company)
gstin (VARCHAR, nullable)
total_jobs_posted (INTEGER)
total_hires (INTEGER)
average_rating (DECIMAL)`}
            </pre>
          </div>

          <div className="bg-white p-4 rounded border">
            <h4 className="font-bold text-orange-700 mb-2">job_postings</h4>
            <pre className="text-xs overflow-x-auto">
{`id (UUID, PK)
employer_id (UUID, FK → users)
title (VARCHAR)
description (TEXT)
required_skills (ARRAY[VARCHAR])
location_lat (DECIMAL)
location_lng (DECIMAL)
location_address (TEXT)
budget_min (INTEGER)
budget_max (INTEGER)
duration_days (INTEGER)
start_date (DATE)
job_type (ENUM: daily, weekly, monthly, project)
status (ENUM: open, in_progress, completed, cancelled)
created_at (TIMESTAMP)
expires_at (TIMESTAMP)`}
            </pre>
          </div>

          <div className="bg-white p-4 rounded border">
            <h4 className="font-bold text-red-700 mb-2">work_requests</h4>
            <pre className="text-xs overflow-x-auto">
{`id (UUID, PK)
job_id (UUID, FK → job_postings, nullable)
employer_id (UUID, FK → users)
labourer_id (UUID, FK → users)
request_type (ENUM: direct_hire, job_application)
status (ENUM: pending, accepted, rejected, completed, cancelled)
work_start_date (DATE)
work_end_date (DATE)
agreed_rate (INTEGER)
notes (TEXT)
created_at (TIMESTAMP)
updated_at (TIMESTAMP)`}
            </pre>
          </div>

          <div className="bg-white p-4 rounded border">
            <h4 className="font-bold text-indigo-700 mb-2">reviews</h4>
            <pre className="text-xs overflow-x-auto">
{`id (UUID, PK)
work_request_id (UUID, FK → work_requests)
reviewer_id (UUID, FK → users)
reviewee_id (UUID, FK → users)
rating (INTEGER, 1-5)
review_text (TEXT)
review_type (ENUM: quality, punctuality, behavior, payment)
created_at (TIMESTAMP)
is_verified_work (BOOLEAN)`}
            </pre>
          </div>

          <div className="bg-white p-4 rounded border">
            <h4 className="font-bold text-pink-700 mb-2">messages</h4>
            <pre className="text-xs overflow-x-auto">
{`id (UUID, PK)
sender_id (UUID, FK → users)
receiver_id (UUID, FK → users)
message_text (TEXT)
message_type (ENUM: text, image, voice)
media_url (TEXT, nullable)
is_read (BOOLEAN)
created_at (TIMESTAMP)`}
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 mt-6">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Key API Endpoints</h3>
        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded">
            <strong className="text-green-700">POST</strong> /api/auth/send-otp
            <p className="text-gray-600 text-xs mt-1">Send OTP to mobile number</p>
          </div>
          <div className="bg-white p-3 rounded">
            <strong className="text-green-700">POST</strong> /api/auth/verify-otp
            <p className="text-gray-600 text-xs mt-1">Verify OTP and create session</p>
          </div>
          <div className="bg-white p-3 rounded">
            <strong className="text-blue-700">GET</strong> /api/labourers?skill=electrician&location=bangalore&radius=10
            <p className="text-gray-600 text-xs mt-1">Search labourers with filters</p>
          </div>
          <div className="bg-white p-3 rounded">
            <strong className="text-blue-700">GET</strong> /api/labourers/:id
            <p className="text-gray-600 text-xs mt-1">Get detailed labourer profile</p>
          </div>
          <div className="bg-white p-3 rounded">
            <strong className="text-green-700">POST</strong> /api/work-requests
            <p className="text-gray-600 text-xs mt-1">Create hire request</p>
          </div>
          <div className="bg-white p-3 rounded">
            <strong className="text-orange-700">PUT</strong> /api/work-requests/:id/status
            <p className="text-gray-600 text-xs mt-1">Update request status</p>
          </div>
          <div className="bg-white p-3 rounded">
            <strong className="text-green-700">POST</strong> /api/reviews
            <p className="text-gray-600 text-xs mt-1">Submit rating and review</p>
          </div>
          <div className="bg-white p-3 rounded">
            <strong className="text-blue-700">GET</strong> /api/jobs?status=open&skill=plumber
            <p className="text-gray-600 text-xs mt-1">Browse open job postings</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Monetization = () => (
    <div className="space-y-6 p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Monetization Strategy</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-300">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
            <DollarSign className="w-6 h-6 mr-2" />
            Revenue Streams
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">1</span>
              <div>
                <strong>Commission on Hires (Primary)</strong>
                <p className="text-sm text-gray-700">5-8% from employers on successful hires. First 3 hires free for employers.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">2</span>
              <div>
                <strong>Premium Labourer Subscriptions</strong>
                <p className="text-sm text-gray-700">₹199/month or ₹1999/year for profile boosting, priority listing, verified badge.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">3</span>
              <div>
                <strong>Featured Job Postings</strong>
                <p className="text-sm text-gray-700">₹99-499 per featured job post for employers to reach more candidates faster.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">4</span>
              <div>
                <strong>Background Verification Services</strong>
                <p className="text-sm text-gray-700">₹299-599 for comprehensive Aadhaar + police verification. Partnership with verification agencies.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">5</span>
              <div>
                <strong>Skill Training & Certification</strong>
                <p className="text-sm text-gray-700">Partner with training institutes. Earn commission on course enrollments (₹500-2000 per course).</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">6</span>
              <div>
                <strong>Insurance & Financial Products</strong>
                <p className="text-sm text-gray-700">Affiliate partnerships for health insurance, accident coverage, micro-loans.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">7</span>
              <div>
                <strong>Advertisement (Later Stage)</strong>
                <p className="text-sm text-gray-700">Tools, equipment, safety gear ads targeted to labourers and contractors.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Pricing Philosophy</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Free for labourers to use platform</strong> - Core search and profile features always free</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Low commission rates</strong> - Competitive with traditional middlemen (10-15%)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Value-based pricing</strong> - Premium features provide clear ROI</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>No hidden fees</strong> - Transparent pricing builds trust</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Unit Economics (Target)</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between p-2 bg-white rounded">
                <span>Avg. daily wage</span>
                <strong>₹700</strong>
              </div>
              <div className="flex justify-between p-2 bg-white rounded">
                <span>Platform commission (6%)</span>
                <strong>₹42</strong>
              </div>
              <div className="flex justify-between p-2 bg-white rounded">
                <span>Transactions per user/month</span>
                <strong>15</strong>
              </div>
              <div className="flex justify-between p-2 bg-white rounded border-2 border-purple-400">
                <span className="font-bold">Revenue per active user/month</span>
                <strong className="text-purple-700">₹630</strong>
              </div>
              <div className="flex justify-between p-2 bg-white rounded">
                <span>CAC (Customer Acquisition Cost)</span>
                <strong>₹150</strong>
              </div>
              <div className="flex justify-between p-2 bg-white rounded border-2 border-green-400">
                <span className="font-bold">LTV:CAC Ratio (target)</span>
                <strong className="text-green-700">8:1</strong>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">Growth Strategy</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>City-by-city rollout starting with Bangalore, then Delhi, Mumbai, Pune</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Referral program: ₹100 bonus for both referrer and referee</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Partnerships with construction companies and contractor associations</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Grassroots marketing at construction sites and labour camps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const UIPrototype = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-2">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-white">Labour Connect</h1>
            </div>
            <div className="flex items-center space-x-3">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white text-gray-700 px-3 py-1 rounded text-sm"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm">
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-b">
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setUserType('labourer')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                userType === 'labourer'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border'
              }`}
            >
              👷‍♂️ {t.findWork}
            </button>
            <button
              onClick={() => setUserType('employer')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                userType === 'employer'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 border'
              }`}
            >
              🏠 {t.findLabourers}
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
            <button className="flex items-center space-x-1 bg-white px-3 py-2 rounded-lg border text-sm whitespace-nowrap">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </button>
            <button className="flex items-center space-x-1 bg-white px-3 py-2 rounded-lg border text-sm whitespace-nowrap">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <button className="flex items-center space-x-1 bg-white px-3 py-2 rounded-lg border text-sm whitespace-nowrap">
              <DollarSign className="w-4 h-4" />
              <span>Price</span>
            </button>
            <button className="flex items-center space-x-1 bg-white px-3 py-2 rounded-lg border text-sm whitespace-nowrap">
              <Calendar className="w-4 h-4" />
              <span>Availability</span>
            </button>
          </div>
        </div>

        {userType === 'employer' ? (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Popular Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map(skill => (
                <button
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill.id)}
                  className={`p-4 rounded-lg border-2 transition ${
                    selectedSkill === skill.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="text-sm font-semibold text-gray-900">{skill.name}</div>
                  <div className="text-xs text-gray-500">{skill.count} available</div>
                </button>
              ))}
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-6">Available Labourers</h2>
            <div className="space-y-3">
              {labourers.map(labourer => (
                <div key={labourer.id} className="bg-white rounded-lg border-2 border-gray-200 p-4 hover:border-blue-300 transition">
                  <div className="flex items-start space-x-3">
                    <div className="text-4xl">{labourer.photo}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{labourer.name}</h3>
                          <p className="text-sm text-blue-600 font-semibold">{labourer.skill}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          labourer.available
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {labourer.available ? t.available : t.notAvailable}
                        </span>
                      </div>
                      
                      <div className="mt-2 space-y-1 text-sm">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          {labourer.location}
                        </div>
                        <div className="flex items-center space-x-4 text-gray-700">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {labourer.experience}
                          </span>
                          <span className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                            {labourer.jobs} {t.completedJobs}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                            <span className="font-semibold text-sm">{labourer.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {t.languages}: {labourer.languages.join(', ')}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">{labourer.rate}</span>
                        <div className="flex space-x-2">
                          <button className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition text-sm">
                            <Phone className="w-4 h-4" />
                            <span>Call</span>
                          </button>
                          <button className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold">
                            <MessageCircle className="w-4 h-4" />
                            <span>{t.hireNow}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Available Jobs</h2>
            <div className="space-y-3">
              {jobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg border-2 border-gray-200 p-4 hover:border-green-300 transition">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.employer}</p>
                    </div>
                    <span className="text-xs text-gray-500">{job.posted}</span>
                  </div>
                  
                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.budget}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{job.applicants} applicants</span>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="flex border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab('product')}
              className={`px-6 py-4 font-semibold transition whitespace-nowrap ${
                activeTab === 'product'
                  ? 'border-b-4 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              📋 Product Roadmap
            </button>
            <button
              onClick={() => setActiveTab('personas')}
              className={`px-6 py-4 font-semibold transition whitespace-nowrap ${
                activeTab === 'personas'
                  ? 'border-b-4 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              👥 User Personas
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-4 font-semibold transition whitespace-nowrap ${
                activeTab === 'tech'
                  ? 'border-b-4 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              💻 Tech Stack
            </button>
            <button
              onClick={() => setActiveTab('database')}
              className={`px-6 py-4 font-semibold transition whitespace-nowrap ${
                activeTab === 'database'
                  ? 'border-b-4 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              🗄️ Database & APIs
            </button>
            <button
              onClick={() => setActiveTab('monetization')}
              className={`px-6 py-4 font-semibold transition whitespace-nowrap ${
                activeTab === 'monetization'
                  ? 'border-b-4 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              💰 Monetization
            </button>
            <button
              onClick={() => setActiveTab('prototype')}
              className={`px-6 py-4 font-semibold transition whitespace-nowrap ${
                activeTab === 'prototype'
                  ? 'border-b-4 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              📱 UI Prototype
            </button>
          </div>

          <div className="p-2">
            {activeTab === 'product' && <ProductRoadmap />}
            {activeTab === 'personas' && <UserPersonas />}
            {activeTab === 'tech' && <TechStack />}
            {activeTab === 'database' && <DatabaseSchema />}
            {activeTab === 'monetization' && <Monetization />}
            {activeTab === 'prototype' && <UIPrototype />}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Labour Connect Platform</h2>
          <p className="text-gray-600 mb-4">A comprehensive platform connecting daily wage workers with employment opportunities across India.</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">👷 For Labourers</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Find work opportunities</li>
                <li>• Set your own rates</li>
                <li>• Build reputation with reviews</li>
                <li>• Get paid faster</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">🏠 For Employers</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Find verified workers quickly</li>
                <li>• Transparent pricing</li>
                <li>• Rating & review system</li>
                <li>• Easy communication</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-2">🏗️ For Contractors</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Bulk hiring</li>
                <li>• Team management</li>
                <li>• Attendance tracking</li>
                <li>• Payment management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabourConnectPlatform;