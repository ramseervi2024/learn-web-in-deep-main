import React, { useState } from 'react';
import { Home, Search, PlusSquare, Heart, User, MessageCircle, Bookmark, MoreHorizontal, Send, Settings, Grid, Film, Tag, X } from 'lucide-react';

export default function InstagramApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [liked, setLiked] = useState({});
  const [following, setFollowing] = useState({});
  const [showCreateModal, setShowCreateModal] = useState(false);

  const stories = [
    { id: 1, username: 'Your Story', image: 'https://i.pravatar.cc/150?img=1', isYours: true },
    { id: 2, username: 'john_doe', image: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, username: 'jane_smith', image: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, username: 'mike_wilson', image: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, username: 'sarah_jones', image: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, username: 'david_brown', image: 'https://i.pravatar.cc/150?img=6' },
  ];

  const posts = [
    {
      id: 1,
      username: 'travel_explorer',
      userImage: 'https://i.pravatar.cc/150?img=7',
      postImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: 1234,
      caption: 'Beautiful mountain views 🏔️',
      time: '2 hours ago'
    },
    {
      id: 2,
      username: 'food_lover',
      userImage: 'https://i.pravatar.cc/150?img=8',
      postImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop',
      likes: 856,
      caption: 'Delicious homemade pasta 🍝',
      time: '5 hours ago'
    },
    {
      id: 3,
      username: 'fitness_guru',
      userImage: 'https://i.pravatar.cc/150?img=9',
      postImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop',
      likes: 2341,
      caption: 'Morning workout motivation 💪',
      time: '8 hours ago'
    }
  ];

  const suggestions = [
    { id: 1, username: 'alex_photo', image: 'https://i.pravatar.cc/150?img=10', subtitle: 'Followed by john_doe' },
    { id: 2, username: 'art_daily', image: 'https://i.pravatar.cc/150?img=11', subtitle: 'Followed by jane_smith' },
    { id: 3, username: 'tech_news', image: 'https://i.pravatar.cc/150?img=12', subtitle: 'Followed by mike_wilson' },
  ];

  const notifications = [
    { id: 1, user: 'john_doe', image: 'https://i.pravatar.cc/150?img=2', action: 'liked your photo', time: '2h', postImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop' },
    { id: 2, user: 'jane_smith', image: 'https://i.pravatar.cc/150?img=3', action: 'started following you', time: '5h' },
    { id: 3, user: 'mike_wilson', image: 'https://i.pravatar.cc/150?img=4', action: 'commented: "Amazing shot!"', time: '1d', postImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop' },
  ];

  const myPosts = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop',
  ];

  const toggleLike = (postId) => {
    setLiked(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleFollow = (userId) => {
    setFollowing(prev => ({ ...prev, [userId]: !prev[userId] }));
  };

  // Header Component
  const Header = () => (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setCurrentPage('home')}>Instagram</h1>
        
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setCurrentPage('search')}
          />
        </div>

        <div className="flex items-center gap-5">
          <Home 
            className={`w-6 h-6 cursor-pointer ${currentPage === 'home' ? 'text-black' : 'text-gray-600'}`}
            onClick={() => setCurrentPage('home')}
          />
          <MessageCircle 
            className={`w-6 h-6 cursor-pointer ${currentPage === 'messages' ? 'text-black' : 'text-gray-600'}`}
            onClick={() => setCurrentPage('messages')}
          />
          <PlusSquare 
            className="w-6 h-6 cursor-pointer text-gray-600"
            onClick={() => setShowCreateModal(true)}
          />
          <Heart 
            className={`w-6 h-6 cursor-pointer ${currentPage === 'notifications' ? 'text-black' : 'text-gray-600'}`}
            onClick={() => setCurrentPage('notifications')}
          />
          <User 
            className={`w-6 h-6 cursor-pointer ${currentPage === 'profile' ? 'text-black' : 'text-gray-600'}`}
            onClick={() => setCurrentPage('profile')}
          />
        </div>
      </div>
    </header>
  );

  // Home Page
  const HomePage = () => (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Stories */}
      <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6 overflow-x-auto">
        <div className="flex gap-4">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center gap-1 cursor-pointer flex-shrink-0">
              <div className={`w-16 h-16 rounded-full p-0.5 ${story.isYours ? 'bg-gray-300' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'}`}>
                <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                  <img src={story.image} alt={story.username} className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-xs text-gray-900 max-w-[64px] truncate">{story.username}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white border border-gray-300 rounded-lg mb-6">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src={post.userImage} alt={post.username} className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold text-sm">{post.username}</span>
            </div>
            <MoreHorizontal className="w-6 h-6 cursor-pointer" />
          </div>

          <div className="w-full aspect-square">
            <img src={post.postImage} alt="Post" className="w-full h-full object-cover" />
          </div>

          <div className="p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <Heart
                  className={`w-6 h-6 cursor-pointer transition-colors ${liked[post.id] ? 'fill-red-500 text-red-500' : 'hover:text-gray-600'}`}
                  onClick={() => toggleLike(post.id)}
                />
                <MessageCircle className="w-6 h-6 cursor-pointer hover:text-gray-600" />
                <Send className="w-6 h-6 cursor-pointer hover:text-gray-600" />
              </div>
              <Bookmark className="w-6 h-6 cursor-pointer hover:text-gray-600" />
            </div>

            <div className="font-semibold text-sm mb-2">
              {liked[post.id] ? post.likes + 1 : post.likes} likes
            </div>

            <div className="text-sm mb-1">
              <span className="font-semibold mr-2">{post.username}</span>
              {post.caption}
            </div>

            <div className="text-xs text-gray-500">{post.time}</div>
          </div>
        </div>
      ))}
    </div>
  );

  // Search/Explore Page
  const SearchPage = () => (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-1">
        {[...Array(21)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 cursor-pointer hover:opacity-75 transition-opacity">
            <img 
              src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?w=400&h=400&fit=crop`}
              alt={`Explore ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );

  // Notifications Page
  const NotificationsPage = () => (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white border border-gray-300 rounded-lg">
        <div className="p-4 border-b border-gray-300">
          <h2 className="font-semibold text-lg">Notifications</h2>
        </div>
        
        {notifications.map((notif) => (
          <div key={notif.id} className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <img src={notif.image} alt={notif.user} className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-sm">
                  <span className="font-semibold">{notif.user}</span> {notif.action}
                </p>
                <p className="text-xs text-gray-500">{notif.time}</p>
              </div>
            </div>
            {notif.postImage && (
              <img src={notif.postImage} alt="Post" className="w-12 h-12 object-cover" />
            )}
            {notif.action.includes('following') && (
              <button className="bg-blue-500 text-white px-6 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-600">
                Follow
              </button>
            )}
          </div>
        ))}

        <div className="p-4">
          <h3 className="font-semibold mb-3">Suggestions For You</h3>
          {suggestions.map((user) => (
            <div key={user.id} className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img src={user.image} alt={user.username} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">{user.username}</p>
                  <p className="text-xs text-gray-500">{user.subtitle}</p>
                </div>
              </div>
              <button 
                className={`px-6 py-1.5 rounded-lg text-sm font-semibold ${
                  following[user.id] 
                    ? 'bg-gray-200 text-black hover:bg-gray-300' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                onClick={() => toggleFollow(user.id)}
              >
                {following[user.id] ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Messages Page
  const MessagesPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white border border-gray-300 rounded-lg h-[600px] flex">
        <div className="w-1/3 border-r border-gray-300">
          <div className="p-4 border-b border-gray-300">
            <h2 className="font-semibold text-lg">Messages</h2>
          </div>
          <div className="overflow-y-auto">
            {stories.slice(1, 6).map((user) => (
              <div key={user.id} className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer">
                <img src={user.image} alt={user.username} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-sm">{user.username}</p>
                  <p className="text-xs text-gray-500">Active now</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
          <MessageCircle className="w-24 h-24 text-gray-300 mb-4" />
          <h3 className="text-xl font-light mb-2">Your Messages</h3>
          <p className="text-gray-500 text-sm">Send private photos and messages to a friend or group.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 font-semibold hover:bg-blue-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );

  // Profile Page
  const ProfilePage = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-start gap-8 mb-8">
        <img 
          src="https://i.pravatar.cc/150?img=1" 
          alt="Profile" 
          className="w-32 h-32 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl">your_username</h2>
            <button className="bg-gray-200 px-6 py-1.5 rounded-lg font-semibold hover:bg-gray-300">
              Edit profile
            </button>
            <Settings className="w-6 h-6 cursor-pointer" />
          </div>
          
          <div className="flex gap-8 mb-4">
            <div><span className="font-semibold">{myPosts.length}</span> posts</div>
            <div><span className="font-semibold">1,234</span> followers</div>
            <div><span className="font-semibold">567</span> following</div>
          </div>

          <div>
            <p className="font-semibold">Your Name</p>
            <p className="text-sm">Photography enthusiast 📸</p>
            <p className="text-sm">Travel lover 🌍</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="flex justify-center gap-16 mb-6">
          <div className="flex items-center gap-2 py-4 border-t border-black cursor-pointer">
            <Grid className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase">Posts</span>
          </div>
          <div className="flex items-center gap-2 py-4 text-gray-400 cursor-pointer">
            <Film className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase">Reels</span>
          </div>
          <div className="flex items-center gap-2 py-4 text-gray-400 cursor-pointer">
            <Tag className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase">Tagged</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {myPosts.map((img, i) => (
            <div key={i} className="aspect-square bg-gray-200 cursor-pointer hover:opacity-75 transition-opacity">
              <img src={img} alt={`Post ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Create Post Modal
  const CreateModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <h3 className="font-semibold text-center flex-1">Create new post</h3>
          <X className="w-6 h-6 cursor-pointer" onClick={() => setShowCreateModal(false)} />
        </div>
        <div className="p-20 text-center">
          <PlusSquare className="w-20 h-20 mx-auto mb-4 text-gray-400" />
          <p className="text-xl mb-2">Drag photos and videos here</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 mt-4">
            Select from computer
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'search' && <SearchPage />}
      {currentPage === 'notifications' && <NotificationsPage />}
      {currentPage === 'messages' && <MessagesPage />}
      {currentPage === 'profile' && <ProfilePage />}

      {showCreateModal && <CreateModal />}
    </div>
  );
}