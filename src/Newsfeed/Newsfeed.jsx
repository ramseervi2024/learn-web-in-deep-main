import { useState, useEffect, useCallback } from "react";
import {
  Search,
  RefreshCw,
  Clock,
  ExternalLink,
  Globe,
  TrendingUp,
  Flame,
  Newspaper,
  ChevronRight,
  AlertCircle,
  Wifi,
  WifiOff,
  BookOpen,
  Star,
  Filter,
} from "lucide-react";

const API_KEY = "YOUR_NEWSDATA_IO_API_KEY"; // 🔑 Replace with your NewsData.io API key
const BASE_URL = "https://newsdata.io/api/1/news";

const CATEGORIES = [
  { id: "top", label: "Top", icon: Flame },
  { id: "technology", label: "Tech", icon: TrendingUp },
  { id: "business", label: "Business", icon: Star },
  { id: "science", label: "Science", icon: Globe },
  { id: "health", label: "Health", icon: BookOpen },
  { id: "world", label: "World", icon: Newspaper },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
];

function timeAgo(dateStr) {
  if (!dateStr) return "Just now";
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function SkeletonCard({ featured = false }) {
  return (
    <div
      className={`animate-pulse rounded-2xl bg-zinc-900 overflow-hidden ${
        featured ? "col-span-2 row-span-2" : ""
      }`}
    >
      <div
        className={`bg-zinc-800 ${featured ? "h-72" : "h-40"} w-full`}
      />
      <div className="p-4 space-y-3">
        <div className="h-3 bg-zinc-800 rounded w-1/4" />
        <div className="h-5 bg-zinc-800 rounded w-full" />
        <div className="h-5 bg-zinc-800 rounded w-3/4" />
        <div className="h-3 bg-zinc-800 rounded w-1/3" />
      </div>
    </div>
  );
}

function ArticleCard({ article, featured = false, index = 0 }) {
  const [imgError, setImgError] = useState(false);

  const placeholderColors = [
    "from-violet-900 to-indigo-900",
    "from-rose-900 to-pink-900",
    "from-emerald-900 to-teal-900",
    "from-amber-900 to-orange-900",
    "from-sky-900 to-blue-900",
    "from-fuchsia-900 to-purple-900",
  ];
  const gradient = placeholderColors[index % placeholderColors.length];

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 ${
        featured ? "col-span-2 row-span-2" : ""
      }`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-72" : "h-44"}`}>
        {article.image_url && !imgError ? (
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
          >
            <Newspaper className="text-white/20" size={featured ? 64 : 40} />
          </div>
        )}
        {/* Category badge */}
        {article.category?.[0] && (
          <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10">
            {article.category[0]}
          </span>
        )}
        {/* Source */}
        <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-zinc-300 text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
          <Globe size={9} />
          {article.source_id || "News"}
        </span>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 p-4 ${featured ? "p-6" : ""}`}>
        <h3
          className={`font-bold text-white leading-snug group-hover:text-amber-400 transition-colors line-clamp-3 ${
            featured ? "text-xl mb-3" : "text-sm mb-2"
          }`}
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {article.title}
        </h3>

        {featured && article.description && (
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-4">
            {article.description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
            <Clock size={11} />
            <span>{timeAgo(article.pubDate)}</span>
          </div>
          <span className="flex items-center gap-1 text-amber-500/0 group-hover:text-amber-500 text-[11px] font-semibold transition-all duration-200 translate-x-2 group-hover:translate-x-0">
            Read <ExternalLink size={10} />
          </span>
        </div>
      </div>
    </a>
  );
}

function ListArticle({ article, index }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 py-3 border-b border-zinc-800 last:border-0 hover:bg-zinc-900/50 rounded-lg px-2 -mx-2 transition-all duration-200"
    >
      <span
        className="text-2xl font-black text-zinc-700 group-hover:text-amber-500 transition-colors shrink-0 w-7 text-right"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-zinc-300 group-hover:text-white line-clamp-2 leading-snug transition-colors">
          {article.title}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-zinc-600 text-[10px] flex items-center gap-1">
            <Clock size={9} /> {timeAgo(article.pubDate)}
          </span>
          {article.source_id && (
            <span className="text-zinc-600 text-[10px]">· {article.source_id}</span>
          )}
        </div>
      </div>
      <ChevronRight
        size={14}
        className="text-zinc-700 group-hover:text-amber-500 group-hover:translate-x-1 transition-all shrink-0 mt-1"
      />
    </a>
  );
}

export default function NewsFeed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [activeCategory, setActiveCategory] = useState("top");
  const [language, setLanguage] = useState("en");
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        apikey: API_KEY,
        language,
        ...(query ? { q: query } : { category: activeCategory }),
      });

      const res = await fetch(`${BASE_URL}?${params}`);
      const data = await res.json();

      if (data.status === "error") {
        throw new Error(data.results?.message || "API error");
      }

      setArticles(data.results || []);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message || "Failed to fetch news");
    } finally {
      setLoading(false);
    }
  }, [query, activeCategory, language]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputVal.trim());
  };

  const gridArticles = articles.slice(0, 7);
  const listArticles = articles.slice(7, 17);

  return (
    <div
      className="min-h-screen bg-zinc-950 text-white"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <Newspaper size={16} className="text-black" />
              </div>
              <div>
                <h1
                  className="text-xl font-black tracking-tight text-white"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  The Dispatch
                </h1>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest -mt-0.5">
                  Powered by NewsData.io
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Language */}
              <div className="flex items-center gap-1.5 bg-zinc-900 rounded-lg px-2.5 py-1.5 border border-zinc-800">
                <Filter size={12} className="text-zinc-500" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-zinc-300 text-xs outline-none cursor-pointer"
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code} className="bg-zinc-900">
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Last updated */}
              {lastUpdated && (
                <div className="hidden sm:flex items-center gap-1.5 text-zinc-500 text-[11px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              )}

              <button
                onClick={fetchNews}
                disabled={loading}
                className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 disabled:bg-zinc-800 text-black disabled:text-zinc-500 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
              >
                <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
                Refresh
              </button>
            </div>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="pb-3">
            <div className="relative">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
              />
              <input
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Search any topic — AI, climate, markets…"
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all"
              />
            </div>
          </form>

          {/* Categories */}
          {!query && (
            <div className="flex gap-1 pb-3 overflow-x-auto scrollbar-hide">
              {CATEGORIES.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === id
                      ? "bg-amber-500 text-black"
                      : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <Icon size={12} />
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Query label */}
        {query && (
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-zinc-500 text-sm">Showing results for</p>
              <h2 className="text-2xl font-black" style={{ fontFamily: "'Georgia', serif" }}>
                "{query}"
              </h2>
            </div>
            <button
              onClick={() => { setQuery(""); setInputVal(""); }}
              className="text-xs text-zinc-500 hover:text-white border border-zinc-700 hover:border-zinc-500 px-3 py-1.5 rounded-lg transition-colors"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center">
              <WifiOff size={28} className="text-red-400" />
            </div>
            <div className="text-center">
              <p className="text-white font-semibold mb-1">Failed to load news</p>
              <p className="text-zinc-500 text-sm max-w-md">{error}</p>
              <p className="text-zinc-600 text-xs mt-2">
                Make sure your API key is set in the component
              </p>
            </div>
            <button
              onClick={fetchNews}
              className="bg-amber-500 text-black text-sm font-bold px-5 py-2 rounded-xl hover:bg-amber-400 transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* Loading */}
        {loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
            <SkeletonCard featured />
            {[...Array(5)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Content */}
        {!loading && !error && articles.length > 0 && (
          <div className="flex gap-8">
            {/* Left: Grid */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-4">
                <Flame size={14} className="text-amber-500" />
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Latest Stories
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                {gridArticles.map((article, i) => (
                  <ArticleCard
                    key={article.article_id || i}
                    article={article}
                    featured={i === 0}
                    index={i}
                  />
                ))}
              </div>
            </div>

            {/* Right: List */}
            {listArticles.length > 0 && (
              <div className="w-80 shrink-0">
                <div className="sticky top-36">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={14} className="text-amber-500" />
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      More Stories
                    </span>
                  </div>
                  <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-4">
                    {listArticles.map((article, i) => (
                      <ListArticle
                        key={article.article_id || i}
                        article={article}
                        index={i}
                      />
                    ))}
                  </div>

                  {/* Footer info */}
                  <div className="mt-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={13} className="text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Replace <code className="text-amber-400 bg-zinc-800 px-1 rounded">YOUR_NEWSDATA_IO_API_KEY</code> with your key from{" "}
                        <a
                          href="https://newsdata.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400 hover:underline"
                        >
                          newsdata.io
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && articles.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <Search size={24} className="text-zinc-600" />
            </div>
            <div className="text-center">
              <p className="text-white font-semibold mb-1">No articles found</p>
              <p className="text-zinc-500 text-sm">Try a different search or category</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-12 py-6 text-center">
        <p className="text-zinc-700 text-xs">
          The Dispatch · Powered by{" "}
          <a
            href="https://newsdata.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-amber-500 transition-colors"
          >
            NewsData.io
          </a>
        </p>
      </footer>
    </div>
  );
}