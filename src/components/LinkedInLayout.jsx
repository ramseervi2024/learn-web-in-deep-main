import React, { useState } from 'react';
import { Home, Users, Briefcase, MessageSquare, Bell, Search, Grid, ChevronDown } from 'lucide-react';

export default function LinkedInLayout() {
  const [activeTab, setActiveTab] = useState('home');

  const posts = [
    {
      id: 1,
      author: 'Sarah Johnson',
      role: 'Senior Product Manager at Tech Corp',
      time: '2h',
      content: 'Excited to announce that our team just launched a new feature that will help thousands of users streamline their workflow! 🚀',
      likes: 234,
      comments: 45,
      shares: 12
    },
    {
      id: 2,
      author: 'Michael Chen',
      role: 'Software Engineer at Innovation Labs',
      time: '5h',
      content: 'Just completed an amazing coding bootcamp. The journey of learning never stops in tech!',
      likes: 156,
      comments: 28,
      shares: 8
    },
    {
      id: 3,
      author: 'Emma Davis',
      role: 'Marketing Director at Digital Solutions',
      time: '1d',
      content: 'Had an incredible experience speaking at the Tech Marketing Summit today. Thank you to everyone who attended my session on digital transformation!',
      likes: 445,
      comments: 67,
      shares: 23
    },
    {
      id: 4,
      author: 'David Kumar',
      role: 'Data Scientist at AI Innovations',
      time: '2d',
      content: 'Machine learning models are only as good as the data they are trained on. Always remember: garbage in, garbage out. 📊',
      likes: 892,
      comments: 134,
      shares: 45
    },
    {
      id: 5,
      author: 'Lisa Anderson',
      role: 'UX Designer at Creative Studio',
      time: '3d',
      content: 'Design tip: Always put your users first. The best interfaces are invisible - they just work seamlessly.',
      likes: 567,
      comments: 89,
      shares: 34
    },
    {
      id: 6,
      author: 'James Wilson',
      role: 'CEO at StartupHub',
      time: '4d',
      content: 'Building a startup is like jumping off a cliff and assembling an airplane on the way down. Embrace the chaos!',
      likes: 1203,
      comments: 234,
      shares: 67
    },
    {
      id: 7,
      author: 'Rachel Green',
      role: 'HR Manager at Global Tech',
      time: '5d',
      content: 'We are hiring! Join our amazing team of innovators. Check out our open positions and apply today!',
      likes: 345,
      comments: 56,
      shares: 89
    },
    {
      id: 8,
      author: 'Tom Harris',
      role: 'Entrepreneur | Speaker | Mentor',
      time: '1w',
      content: 'Success is not final, failure is not fatal: it is the courage to continue that counts. Keep pushing forward!',
      likes: 2345,
      comments: 456,
      shares: 123
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <>
            {/* Create Post */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <button className="flex-1 text-left px-4 py-3 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50">
                  Start a post
                </button>
              </div>
              <div className="flex justify-around mt-3 pt-3 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded">
                  <span className="text-blue-500">📷</span>
                  <span className="text-sm font-semibold">Photo</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded">
                  <span className="text-green-500">🎥</span>
                  <span className="text-sm font-semibold">Video</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded">
                  <span className="text-orange-500">📅</span>
                  <span className="text-sm font-semibold">Event</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded">
                  <span className="text-red-500">📝</span>
                  <span className="text-sm font-semibold">Article</span>
                </button>
              </div>
            </div>

            <div className="border-t border-gray-300 mb-4"></div>

            {/* Posts */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg border border-gray-200 mb-4">
                <div className="p-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm hover:text-blue-600 cursor-pointer">{post.author}</h4>
                      <p className="text-xs text-gray-600">{post.role}</p>
                      <p className="text-xs text-gray-500">{post.time} • 🌐</p>
                    </div>
                    <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-full h-8">...</button>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">{post.content}</p>
                </div>
                <div className="px-4 pb-2">
                  <div className="flex items-center justify-between text-xs text-gray-600 pb-2">
                    <span className="hover:text-blue-600 cursor-pointer">👍👏🎉 {post.likes}</span>
                    <div className="flex gap-3">
                      <span className="hover:underline cursor-pointer">{post.comments} comments</span>
                      <span className="hover:underline cursor-pointer">{post.shares} reposts</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-2 py-1 flex justify-around text-sm text-gray-600">
                  <button className="flex items-center gap-2 hover:bg-gray-50 px-4 py-3 rounded flex-1 justify-center">
                    <span>👍</span>
                    <span className="font-semibold">Like</span>
                  </button>
                  <button className="flex items-center gap-2 hover:bg-gray-50 px-4 py-3 rounded flex-1 justify-center">
                    <span>💬</span>
                    <span className="font-semibold">Comment</span>
                  </button>
                  <button className="flex items-center gap-2 hover:bg-gray-50 px-4 py-3 rounded flex-1 justify-center">
                    <span>🔄</span>
                    <span className="font-semibold">Repost</span>
                  </button>
                  <button className="flex items-center gap-2 hover:bg-gray-50 px-4 py-3 rounded flex-1 justify-center">
                    <span>📤</span>
                    <span className="font-semibold">Send</span>
                  </button>
                </div>
              </div>
            ))}
          </>
        );
      
      case 'network':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6">My Network</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3"></div>
                  <h3 className="font-semibold text-center text-sm">Person Name</h3>
                  <p className="text-xs text-gray-600 text-center mt-1">Job Title at Company</p>
                  <p className="text-xs text-gray-500 text-center mt-1">50 mutual connections</p>
                  <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'jobs':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6">Recommended Jobs</h2>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="border-b border-gray-200 py-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-gray-300 rounded flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-600">Senior Software Engineer</h3>
                    <p className="text-sm text-gray-700">Tech Company Inc.</p>
                    <p className="text-sm text-gray-600 mt-1">San Francisco, CA (Remote)</p>
                    <p className="text-xs text-gray-500 mt-2">Posted 2 days ago • 50 applicants</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'messaging':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-6 h-96">
            <h2 className="text-xl font-semibold mb-6">Messages</h2>
            <div className="flex items-center justify-center h-64 text-gray-500">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p>Select a conversation to start messaging</p>
              </div>
            </div>
          </div>
        );
      
      case 'notifications':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6">Notifications</h2>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex gap-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm"><span className="font-semibold">John Doe</span> liked your post</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'work':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6">Work</h2>
            <div className="grid grid-cols-3 gap-4">
              {['Learning', 'Job Posting', 'Analytics', 'Advertise', 'Sales Navigator', 'Groups'].map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md cursor-pointer text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-3"></div>
                  <h3 className="font-semibold text-sm">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 fixed top-0 w-full z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center cursor-pointer">
                <span className="text-white font-bold">in</span>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-600" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 bg-blue-50 rounded w-72 text-sm focus:outline-none focus:bg-white border border-transparent focus:border-gray-300"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              {[
                { icon: Home, label: 'Home', id: 'home' },
                { icon: Users, label: 'My Network', id: 'network' },
                { icon: Briefcase, label: 'Jobs', id: 'jobs' },
                { icon: MessageSquare, label: 'Messaging', id: 'messaging' },
                { icon: Bell, label: 'Notifications', id: 'notifications' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center gap-1 px-3 py-1 transition-colors relative ${
                    activeTab === item.id ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs font-normal">{item.label}</span>
                  {activeTab === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                  )}
                </button>
              ))}
              <div className="h-8 w-px bg-gray-300"></div>
              <button
                onClick={() => setActiveTab('work')}
                className={`flex flex-col items-center gap-1 px-3 py-1 transition-colors relative ${
                  activeTab === 'work' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-6 h-6" />
                <div className="flex items-center">
                  <span className="text-xs font-normal">Work</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
                {activeTab === 'work' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                )}
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-1 text-gray-600 hover:text-gray-900">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="flex items-center">
                  <span className="text-xs font-normal">Me</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-2">
              <div className="h-16 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="px-4 pb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full -mt-8 border-4 border-white"></div>
                <h3 className="font-semibold mt-2 hover:underline cursor-pointer">Your Name</h3>
                <p className="text-sm text-gray-600 mt-1">Your professional headline</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Profile viewers</span>
                  <span className="text-blue-600 font-semibold">142</span>
                </div>
                <div className="flex justify-between text-xs mt-3">
                  <span className="text-gray-600">Post impressions</span>
                  <span className="text-blue-600 font-semibold">1,249</span>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <p className="text-xs text-gray-600 mb-2">Access exclusive tools & insights</p>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-600 rounded-sm"></div>
                  <span className="text-xs font-semibold">Try Premium for free</span>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <button className="text-xs font-semibold text-gray-700 flex items-center gap-2">
                  <span>🔖</span>
                  <span>My items</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-3 sticky top-20">
              <button className="text-xs text-blue-600 hover:underline font-semibold mb-3 block">Recent</button>
              {['JavaScript Developers', 'React Community', 'Tech Startups', 'Product Design', 'AI & Machine Learning'].map((group, idx) => (
                <button key={idx} className="block text-sm text-gray-700 hover:bg-gray-100 w-full text-left px-2 py-1.5 rounded">
                  # {group}
                </button>
              ))}
              <button className="text-xs text-blue-600 hover:underline font-semibold mb-3 mt-4 block">Groups</button>
              {['Web Developers Network', 'AI Enthusiasts', 'Startup Founders'].map((group, idx) => (
                <button key={idx} className="block text-sm text-gray-700 hover:bg-gray-100 w-full text-left px-2 py-1.5 rounded">
                  {group}
                </button>
              ))}
              <button className="text-xs text-blue-600 hover:underline font-semibold mt-4 block">Events</button>
              <button className="text-xs text-blue-600 hover:underline font-semibold mt-3 block">Followed Hashtags</button>
              <button className="text-center w-full text-sm text-gray-600 hover:bg-gray-100 py-2 mt-3 rounded font-semibold">
                Discover more
              </button>
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-span-6">
            {renderContent()}
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-sm">Add to your feed</h3>
                <button className="text-gray-500">ℹ️</button>
              </div>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm hover:text-blue-600 cursor-pointer">Company Name</h4>
                    <p className="text-xs text-gray-600">1.2M followers</p>
                    <button className="mt-2 px-4 py-1.5 border border-gray-600 rounded-full text-sm font-semibold hover:bg-gray-100 hover:border-gray-800 transition">
                      + Follow
                    </button>
                  </div>
                </div>
              ))}
              <button className="text-sm text-gray-600 hover:text-blue-600 font-semibold mt-2">
                View all recommendations →
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-20">
              <h3 className="font-semibold text-sm mb-4">LinkedIn News</h3>
              {[
                { title: 'Tech layoffs continue', time: '1d ago', readers: '1,234' },
                { title: 'AI trends for 2025', time: '2d ago', readers: '5,678' },
                { title: 'Remote work debate', time: '3d ago', readers: '3,456' },
                { title: 'Startup funding rises', time: '4d ago', readers: '2,890' },
                { title: 'Career development tips', time: '5d ago', readers: '4,123' }
              ].map((news, idx) => (
                <div key={idx} className="mb-3 pb-3 border-b border-gray-100 last:border-0">
                  <h4 className="text-sm font-semibold hover:text-blue-600 cursor-pointer">{news.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{news.time} • {news.readers} readers</p>
                </div>
              ))}
              <button className="text-sm text-gray-600 hover:text-blue-600 font-semibold mt-3">
                Show more →
              </button>
            </div>

            <div className="mt-4 text-center">
              <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600 mb-4">
                <a href="#" className="hover:text-blue-600">About</a>
                <a href="#" className="hover:text-blue-600">Accessibility</a>
                <a href="#" className="hover:text-blue-600">Help Center</a>
                <a href="#" className="hover:text-blue-600">Privacy</a>
                <a href="#" className="hover:text-blue-600">Terms</a>
                <a href="#" className="hover:text-blue-600">Ad Choices</a>
                <a href="#" className="hover:text-blue-600">Advertising</a>
                <a href="#" className="hover:text-blue-600">Services</a>
                <a href="#" className="hover:text-blue-600">More</a>
              </div>
              <div className="flex items-center justify-center gap-1 text-xs">
                <span className="text-blue-600 font-bold">in</span>
                <span className="text-gray-600">LinkedIn Corporation © 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}