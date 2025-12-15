import React, { useState } from 'react';
import { FileDown, Eye, Plus, Trash2, Edit2, ArrowLeft, ExternalLink } from 'lucide-react';

const BlogCreator = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2025",
      author: "Sarah Johnson",
      date: "2025-12-10",
      category: "Technology",
      template: "modern",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      description: "Exploring the latest breakthroughs in AI technology and what they mean for our future.",
      content: `Artificial Intelligence has reached unprecedented heights in 2025. With advanced language models, autonomous systems, and revolutionary breakthroughs in machine learning, we're witnessing a transformation that will reshape every aspect of our lives.

The integration of AI into daily operations has become seamless. From healthcare diagnostics to climate modeling, AI systems are now capable of processing vast amounts of data with remarkable accuracy. This year has seen the emergence of AI assistants that truly understand context and can engage in meaningful, nuanced conversations.

One of the most significant developments has been in the field of multimodal AI. These systems can now process text, images, audio, and video simultaneously, creating a more holistic understanding of information. This has led to breakthroughs in fields ranging from education to creative arts.

However, with great power comes great responsibility. The ethical implications of AI development have become a central focus of discussion. Questions about privacy, bias, and the future of work are being addressed by governments, corporations, and civil society organizations worldwide.

As we look to the future, the potential for AI to solve complex global challenges—from disease eradication to sustainable energy solutions—has never been greater. The key lies in ensuring that these technologies are developed and deployed responsibly, with human welfare at the forefront.`
    },
    {
      id: 2,
      title: "Mastering Remote Work: A Complete Guide",
      author: "Michael Chen",
      date: "2025-12-08",
      category: "Business",
      template: "classic",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&h=400&fit=crop",
      description: "Proven strategies and tips for thriving in a remote work environment.",
      content: `Remote work has evolved from a temporary solution to a permanent fixture in the modern workplace. As someone who has navigated this landscape for years, I've learned that success in remote work requires intentionality, discipline, and the right strategies.

The foundation of effective remote work lies in creating a dedicated workspace. This doesn't necessarily mean a separate room, but rather a designated area that signals to your brain that it's time to work. Invest in ergonomic furniture and good lighting—your body will thank you.

Communication is the lifeblood of remote teams. Over-communication is often better than under-communication. Use video calls for complex discussions, async messaging for quick updates, and document everything. Tools like Slack, Zoom, and project management platforms become your virtual office.

Time management takes on new dimensions when working remotely. Without the structure of a traditional office, it's easy to either overwork or underwork. Set clear boundaries: define your working hours, take regular breaks, and most importantly, know when to log off.

Building relationships remotely requires extra effort. Schedule virtual coffee chats, participate in team activities, and don't underestimate the power of casual conversations. These connections are crucial for collaboration and job satisfaction.

The future of work is flexible, and those who master remote work now will have a significant advantage in the evolving job market.`
    },
    {
      id: 3,
      title: "Sustainable Living: Small Changes, Big Impact",
      author: "Emma Rodriguez",
      date: "2025-12-05",
      category: "Lifestyle",
      template: "minimal",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
      description: "Practical tips for adopting a more sustainable lifestyle without overwhelming yourself.",
      content: `Sustainability isn't about perfection—it's about making better choices when we can. After years of trying to live more sustainably, I've learned that small, consistent changes create lasting impact.

Start with your kitchen. Food waste is a massive contributor to environmental problems. Plan your meals, use what you have, and compost organic waste. Buying local and seasonal produce not only reduces your carbon footprint but often tastes better and supports local farmers.

Reduce single-use plastics gradually. Swap plastic bags for reusable ones, get a quality water bottle, and use beeswax wraps instead of plastic wrap. These simple swaps become second nature quickly.

Energy consumption is another area where small changes add up. LED bulbs, unplugging devices, and using natural light whenever possible can significantly reduce your energy footprint. Consider a smart thermostat to optimize heating and cooling.

Fashion is often overlooked in sustainability discussions. Fast fashion has enormous environmental costs. Buy quality items that last, shop secondhand, and repair clothes instead of replacing them. Your wardrobe will be more unique and meaningful.

Transportation choices matter. Walk or bike for short trips, use public transportation when possible, and consider carpooling. If you drive, maintain your vehicle properly for better fuel efficiency.

Remember, sustainable living is a journey, not a destination. Every positive choice matters, and collective action creates real change.`
    },
    {
      id: 4,
      title: "The Art of Mindful Meditation",
      author: "David Park",
      date: "2025-12-03",
      category: "Health",
      template: "magazine",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
      description: "Discover how meditation can transform your mental health and daily life.",
      content: `In our hyperconnected world, finding moments of peace has become both more challenging and more essential. Meditation offers a sanctuary—a practice that has transformed millions of lives, including my own.

Meditation isn't about emptying your mind or achieving some mystical state. It's about being present, observing your thoughts without judgment, and cultivating awareness. This simple practice has profound effects on mental health, stress reduction, and overall well-being.

Begin with just five minutes a day. Find a quiet space, sit comfortably, and focus on your breath. When your mind wanders—and it will—gently bring your attention back. This isn't failure; it's the practice itself.

The benefits extend far beyond the meditation session. Regular practitioners report improved focus, better emotional regulation, reduced anxiety, and enhanced creativity. Scientific research backs these claims, showing measurable changes in brain structure and function.

There are many meditation styles: mindfulness, loving-kindness, body scan, transcendental meditation. Experiment to find what resonates with you. Apps like Headspace and Calm offer guided sessions for beginners.

Consistency matters more than duration. Five minutes daily beats an hour once a week. Build the habit gradually, and you'll find yourself naturally wanting to meditate longer.

The journey of meditation is deeply personal. Some days will feel easier than others, and that's perfectly normal. The goal isn't perfection—it's practice. With time, you'll discover a more centered, peaceful version of yourself.`
    }
  ]);

  const [currentBlog, setCurrentBlog] = useState({
    title: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    content: '',
    category: 'Technology',
    template: 'modern',
    image: '',
    description: ''
  });

  const [view, setView] = useState('list'); // 'list', 'create', 'edit', 'detail'
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);

  const templates = {
    modern: {
      name: 'Modern',
      preview: (blog) => (
        <div className="max-w-4xl mx-auto bg-white">
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-t-lg" />
          )}
          <div className="p-8">
            <div className="border-l-4 border-blue-500 pl-6 mb-8">
              <span className="text-blue-500 text-sm font-semibold uppercase tracking-wide">{blog.category}</span>
              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{blog.title}</h1>
              {blog.description && (
                <p className="text-xl text-gray-600 mb-4">{blog.description}</p>
              )}
              <div className="flex items-center text-gray-600 text-sm space-x-4">
                <span>By {blog.author}</span>
                <span>•</span>
                <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    classic: {
      name: 'Classic',
      preview: (blog) => (
        <div className="max-w-4xl mx-auto bg-white">
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover" />
          )}
          <div className="p-8">
            <div className="text-center mb-8 border-b-2 border-gray-300 pb-6">
              <h1 className="text-5xl font-serif text-gray-900 mb-4">{blog.title}</h1>
              {blog.description && (
                <p className="text-lg text-gray-600 italic mb-4">{blog.description}</p>
              )}
              <p className="text-gray-600 italic">by {blog.author}</p>
              <p className="text-gray-500 text-sm mt-2">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <span className="inline-block mt-4 px-4 py-1 bg-gray-200 text-gray-700 text-xs uppercase tracking-wider rounded-full">{blog.category}</span>
            </div>
            <div className="font-serif text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    minimal: {
      name: 'Minimal',
      preview: (blog) => (
        <div className="max-w-3xl mx-auto bg-white">
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover mb-8" />
          )}
          <div className="p-8">
            <div className="mb-12">
              <h1 className="text-4xl font-light text-gray-900 mb-3">{blog.title}</h1>
              {blog.description && (
                <p className="text-lg text-gray-600 mb-4">{blog.description}</p>
              )}
              <div className="flex items-center text-gray-500 text-xs uppercase tracking-widest space-x-3">
                <span>{blog.author}</span>
                <span>—</span>
                <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <span>—</span>
                <span>{blog.category}</span>
              </div>
            </div>
            <div className="text-gray-700 leading-loose whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    magazine: {
      name: 'Magazine',
      preview: (blog) => (
        <div className="max-w-6xl mx-auto bg-white">
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-[500px] object-cover mb-8" />
          )}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <span className="text-red-600 font-bold text-xs uppercase tracking-widest">{blog.category}</span>
                <h1 className="text-5xl font-black text-gray-900 mt-2 mb-4 leading-tight">{blog.title}</h1>
                {blog.description && (
                  <p className="text-xl text-gray-700 mb-4">{blog.description}</p>
                )}
              </div>
              <div className="border-l-2 border-gray-300 pl-6 flex flex-col justify-center">
                <p className="text-gray-600 font-semibold mb-1">{blog.author}</p>
                <p className="text-gray-500 text-sm">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
            <div className="columns-1 md:columns-2 gap-8 text-gray-700 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    sports: {
      name: 'Sports Arena',
      preview: (blog) => (
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-green-900 to-green-700 text-white">
          {blog.image && (
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-[450px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent"></div>
            </div>
          )}
          <div className="p-8">
            <div className="border-l-4 border-yellow-400 pl-6 mb-8">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">{blog.category} • BREAKING</span>
              <h1 className="text-6xl font-black mt-2 mb-4 leading-tight uppercase">{blog.title}</h1>
              {blog.description && (
                <p className="text-2xl text-green-100 mb-4 font-bold">{blog.description}</p>
              )}
              <div className="flex items-center text-green-200 text-sm space-x-4 font-semibold">
                <span>BY {blog.author.toUpperCase()}</span>
                <span>|</span>
                <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).toUpperCase()}</span>
              </div>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-lg text-lg leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    war: {
      name: 'War Chronicle',
      preview: (blog) => (
        <div className="max-w-4xl mx-auto bg-stone-900 text-stone-100">
          {blog.image && (
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover grayscale opacity-70" />
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black to-transparent">
                <span className="text-red-600 text-xs font-bold uppercase tracking-widest border border-red-600 px-3 py-1">CONFLICT REPORT</span>
              </div>
            </div>
          )}
          <div className="p-8">
            <div className="border-b border-stone-700 pb-6 mb-6">
              <span className="text-red-500 text-sm font-bold uppercase tracking-wide">{blog.category}</span>
              <h1 className="text-4xl font-bold mt-2 mb-4 text-stone-50 leading-tight">{blog.title}</h1>
              {blog.description && (
                <p className="text-lg text-stone-300 mb-4 font-medium">{blog.description}</p>
              )}
              <div className="flex items-center text-stone-400 text-xs uppercase tracking-wider space-x-3">
                <span>Filed by {blog.author}</span>
                <span>•</span>
                <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            <div className="font-mono text-base text-stone-200 leading-loose whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    love: {
      name: 'Romance',
      preview: (blog) => (
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-pink-50 to-rose-100">
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-t-3xl" />
          )}
          <div className="p-8">
            <div className="text-center mb-8">
              <span className="text-rose-500 text-sm font-semibold">❤ {blog.category} ❤</span>
              <h1 className="text-5xl font-serif text-rose-900 mt-4 mb-4 italic">{blog.title}</h1>
              {blog.description && (
                <p className="text-xl text-rose-700 mb-4 italic">"{blog.description}"</p>
              )}
              <p className="text-rose-600 text-sm">Written with love by {blog.author}</p>
              <p className="text-rose-400 text-xs mt-2">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="bg-white bg-opacity-70 rounded-2xl p-8 font-serif text-lg text-rose-900 leading-relaxed whitespace-pre-wrap shadow-lg">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    stock: {
      name: 'Financial Times',
      preview: (blog) => (
        <div className="max-w-5xl mx-auto bg-amber-50">
          <div className="bg-gradient-to-r from-amber-900 to-yellow-800 text-white p-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span>DOW +0.3% | NASDAQ +0.8% | S&P500 +0.5%</span>
              <span>{new Date(blog.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}</span>
            </div>
          </div>
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover" />
          )}
          <div className="p-8">
            <div className="border-l-4 border-amber-600 pl-6 mb-8">
              <span className="text-amber-700 text-xs font-bold uppercase tracking-widest">{blog.category} | MARKET ANALYSIS</span>
              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4 font-serif">{blog.title}</h1>
              {blog.description && (
                <p className="text-xl text-gray-700 mb-4 font-semibold">{blog.description}</p>
              )}
              <div className="flex items-center text-gray-600 text-sm space-x-4">
                <span className="font-semibold">{blog.author}</span>
                <span>•</span>
                <span>Senior Market Analyst</span>
              </div>
            </div>
            <div className="bg-white border border-amber-200 p-6 rounded-lg text-gray-800 leading-relaxed whitespace-pre-wrap font-serif">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    tech: {
      name: 'Tech Crunch',
      preview: (blog) => (
        <div className="max-w-5xl mx-auto bg-black text-green-400">
          {blog.image && (
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
            </div>
          )}
          <div className="p-8">
            <div className="border border-green-500 p-6 mb-8 bg-black bg-opacity-80">
              <span className="text-green-400 text-xs font-mono uppercase tracking-widest">&gt; {blog.category} //</span>
              <h1 className="text-5xl font-bold text-green-400 mt-2 mb-4 font-mono">{blog.title}</h1>
              {blog.description && (
                <p className="text-xl text-green-300 mb-4 font-mono">// {blog.description}</p>
              )}
              <div className="flex items-center text-green-500 text-sm font-mono space-x-4">
                <span>$ author: {blog.author}</span>
                <span>|</span>
                <span>$ date: {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
            <div className="font-mono text-base text-green-300 leading-loose whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    fashion: {
      name: 'Vogue Style',
      preview: (blog) => (
        <div className="max-w-4xl mx-auto bg-white">
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-[600px] object-cover" />
          )}
          <div className="p-12">
            <div className="text-center mb-12 border-t-2 border-b-2 border-black py-6">
              <span className="text-xs font-light uppercase tracking-[0.3em]">{blog.category}</span>
              <h1 className="text-6xl font-light text-gray-900 mt-4 mb-4 tracking-tight" style={{fontFamily: 'Didot, serif'}}>{blog.title}</h1>
              {blog.description && (
                <p className="text-lg text-gray-600 italic mb-6 font-light">{blog.description}</p>
              )}
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500">
                <span>{blog.author}</span> • <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
            </div>
            <div className="text-gray-800 leading-loose whitespace-pre-wrap text-lg font-light" style={{fontFamily: 'Garamond, serif'}}>
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    food: {
      name: 'Culinary Digest',
      preview: (blog) => (
        <div className="max-w-4xl mx-auto bg-orange-50">
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-[400px] object-cover rounded-t-2xl" />
          )}
          <div className="p-8">
            <div className="text-center mb-8 bg-white rounded-xl p-6 shadow-lg">
              <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">🍴 {blog.category} 🍴</span>
              <h1 className="text-5xl font-bold text-orange-900 mt-3 mb-4">{blog.title}</h1>
              {blog.description && (
                <p className="text-xl text-orange-700 mb-4">{blog.description}</p>
              )}
              <div className="flex justify-center items-center text-orange-600 text-sm space-x-4">
                <span>Chef {blog.author}</span>
                <span>•</span>
                <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    travel: {
      name: 'Wanderlust',
      preview: (blog) => (
        <div className="max-w-5xl mx-auto bg-sky-50">
          {blog.image && (
            <div className="relative h-[500px]">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8">
                <span className="text-sky-300 text-sm font-semibold uppercase tracking-wide">✈ {blog.category}</span>
                <h1 className="text-5xl font-bold text-white mt-2 mb-3">{blog.title}</h1>
                {blog.description && (
                  <p className="text-xl text-sky-100 mb-3">{blog.description}</p>
                )}
                <div className="flex items-center text-sky-200 text-sm space-x-4">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          )}
          <div className="p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    gaming: {
      name: 'Game Over',
      preview: (blog) => (
        <div className="max-w-5xl mx-auto bg-purple-950 text-purple-100">
          {blog.image && (
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover" />
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 font-bold text-sm uppercase tracking-wide">
                🎮 {blog.category}
              </div>
            </div>
          )}
          <div className="p-8">
            <div className="bg-purple-900 border-4 border-purple-600 p-6 mb-8">
              <h1 className="text-5xl font-black text-purple-100 mb-4 uppercase" style={{textShadow: '3px 3px 0px #7c3aed'}}>{blog.title}</h1>
              {blog.description && (
                <p className="text-xl text-purple-200 mb-4">{blog.description}</p>
              )}
              <div className="flex items-center text-purple-300 text-sm space-x-4 font-bold">
                <span>PLAYER: {blog.author}</span>
                <span>|</span>
                <span>DATE: {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
            <div className="bg-purple-900 bg-opacity-50 p-8 rounded-lg text-purple-50 leading-relaxed whitespace-pre-wrap text-lg border-2 border-purple-700">
              {blog.content}
            </div>
          </div>
        </div>
      )
    },
    science: {
      name: 'Scientific Journal',
      preview: (blog) => (
        <div className="max-w-4xl mx-auto bg-slate-50">
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover border-b-4 border-cyan-600" />
          )}
          <div className="p-8">
            <div className="mb-8 pb-6 border-b-2 border-slate-300">
              <span className="text-cyan-700 text-xs font-semibold uppercase tracking-widest">{blog.category} • PEER REVIEWED</span>
              <h1 className="text-4xl font-bold text-slate-900 mt-3 mb-4">{blog.title}</h1>
              {blog.description && (
                <p className="text-lg text-slate-700 mb-4 italic">{blog.description}</p>
              )}
              <div className="flex items-center text-slate-600 text-sm space-x-4">
                <span className="font-semibold">{blog.author}, PhD</span>
                <span>•</span>
                <span>Published: {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-lg text-slate-800 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </div>
      )
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingBlog) {
      setEditingBlog(prev => ({ ...prev, [name]: value }));
    } else {
      setCurrentBlog(prev => ({ ...prev, [name]: value }));
    }
  };

  const addBlog = () => {
    const blog = editingBlog || currentBlog;
    if (blog.title && blog.author && blog.content) {
      if (editingBlog) {
        setBlogs(prev => prev.map(b => b.id === editingBlog.id ? editingBlog : b));
        setEditingBlog(null);
      } else {
        setBlogs(prev => [...prev, { ...currentBlog, id: Date.now() }]);
      }
      setCurrentBlog({
        title: '',
        author: '',
        date: new Date().toISOString().split('T')[0],
        content: '',
        category: 'Technology',
        template: 'modern',
        image: '',
        description: ''
      });
      setView('list');
    }
  };

  const deleteBlog = (id) => {
    setBlogs(prev => prev.filter(blog => blog.id !== id));
  };

  const startEdit = (blog) => {
    setEditingBlog({ ...blog });
    setView('edit');
  };

  const viewDetail = (blog) => {
    setSelectedBlog(blog);
    setView('detail');
  };

  const downloadHTML = (blog) => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${blog.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; }
    </style>
</head>
<body class="bg-gray-50 py-8">
    ${document.getElementById('export-preview').innerHTML}
</body>
</html>`;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${blog.title.replace(/\s+/g, '-').toLowerCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = (blog) => {
    const printWindow = window.open('', '_blank');
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${blog.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; }
        @media print {
            body { margin: 0; padding: 20px; }
        }
    </style>
</head>
<body>
    ${document.getElementById('export-preview').innerHTML}
    <script>
        window.onload = function() {
            window.print();
            window.onafterprint = function() {
                window.close();
            };
        };
    </script>
</body>
</html>`;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  // Blog List View
  if (view === 'list') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">My Blog Dashboard</h1>
            <button
              onClick={() => setView('create')}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Blog
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(blog => (
              <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => viewDetail(blog)}
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {blog.category}
                  </span>
                  <h2 
                    className="text-xl font-bold text-gray-900 mt-2 mb-2 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => viewDetail(blog)}
                  >
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.description}</p>
                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <span>{blog.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => viewDetail(blog)}
                      className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center justify-center"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>
                    <button
                      onClick={() => startEdit(blog)}
                      className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-gray-700 transition-colors text-sm flex items-center justify-center"
                    >
                      <Edit2 className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="bg-red-600 text-white py-2 px-3 rounded-md hover:bg-red-700 transition-colors text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Detail View (Full Page)
  if (view === 'detail' && selectedBlog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <button
              onClick={() => {
                setView('list');
                setSelectedBlog(null);
              }}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => startEdit(selectedBlog)}
                className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm flex items-center"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit
              </button>
              <button
                onClick={() => downloadHTML(selectedBlog)}
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm flex items-center"
              >
                <FileDown className="w-4 h-4 mr-2" />
                HTML
              </button>
              <button
                onClick={() => downloadPDF(selectedBlog)}
                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors text-sm flex items-center"
              >
                <FileDown className="w-4 h-4 mr-2" />
                PDF
              </button>
            </div>
          </div>
        </div>
        
        <div className="py-8">
          {templates[selectedBlog.template].preview(selectedBlog)}
        </div>

        {/* Hidden export preview */}
        <div id="export-preview" className="hidden">
          {templates[selectedBlog.template].preview(selectedBlog)}
        </div>
      </div>
    );
  }

  // Create/Edit Form
  const formBlog = editingBlog || currentBlog;
  const isEditing = !!editingBlog;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {isEditing ? 'Edit Blog' : 'Create New Blog'}
          </h1>
          <button
            onClick={() => {
              setView('list');
              setEditingBlog(null);
            }}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formBlog.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formBlog.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formBlog.description}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description or summary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
                <input
                  type="text"
                  name="author"
                  value={formBlog.author}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter author name"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formBlog.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    value={formBlog.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Technology</option>
                    <option>Business</option>
                    <option>Lifestyle</option>
                    <option>Health</option>
                    <option>Travel</option>
                    <option>Food</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Template</label>
                <select
                  name="template"
                  value={formBlog.template}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Object.entries(templates).map(([key, value]) => (
                    <option key={key} value={key}>{value.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
                <textarea
                  name="content"
                  value={formBlog.content}
                  onChange={handleInputChange}
                  rows="12"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your blog content here..."
                />
              </div>
              
              <button
                onClick={addBlog}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
              >
                {isEditing ? 'Update Blog' : 'Create Blog'}
              </button>
            </div>
          </div>
          
          {/* Live Preview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2" />
              Live Preview
            </h2>
            <div className="border-2 border-gray-200 rounded-lg overflow-auto max-h-[800px] bg-gray-50">
              {formBlog.title ? (
                templates[formBlog.template].preview(formBlog)
              ) : (
                <div className="p-8 text-center text-gray-400">
                  Start typing to see preview...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCreator;