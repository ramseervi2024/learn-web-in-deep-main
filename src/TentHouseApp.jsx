import { useState, useEffect, useRef } from "react";

const COLORS = {
  primary: "#8B2E0D",
  primaryLight: "#B5451A",
  primaryDark: "#5C1D07",
  gold: "#D4A853",
  goldLight: "#ECC978",
  cream: "#FDF6EC",
  dark: "#1A0F08",
  darkCard: "#2A1A0E",
  text: "#3D2010",
  muted: "#8A6A50",
  white: "#FFFFFF",
  overlay: "rgba(26,15,8,0.65)",
};

const services = [
  { id: 1, icon: "⛺", label: "Tents", color: "#B5451A" },
  { id: 2, icon: "💐", label: "Decorators", color: "#C17A2B" },
  { id: 3, icon: "✨", label: "Lighting", color: "#D4A853" },
  { id: 4, icon: "🎵", label: "DJ", color: "#8B2E0D" },
  { id: 5, icon: "🍽️", label: "Catering", color: "#6B4423" },
  { id: 6, icon: "📸", label: "Photography", color: "#9B3E1D" },
];

const featuredVendors = [
  {
    id: 1,
    name: "Royal Marquee Events",
    category: "Tent & Décor",
    rating: 4.9,
    reviews: 218,
    price: "₹45,000",
    tag: "Top Rated",
    gradient: "linear-gradient(135deg, #8B2E0D 0%, #5C1D07 100%)",
    emoji: "👑",
    badge: "🏆",
  },
  {
    id: 2,
    name: "Golden Blooms Studio",
    category: "Floral & Decoration",
    rating: 4.8,
    reviews: 174,
    price: "₹28,000",
    tag: "Popular",
    gradient: "linear-gradient(135deg, #C17A2B 0%, #8B5010 100%)",
    emoji: "🌸",
    badge: "⭐",
  },
  {
    id: 3,
    name: "Starlight Productions",
    category: "Lighting & DJ",
    rating: 4.7,
    reviews: 132,
    price: "₹35,000",
    tag: "New",
    gradient: "linear-gradient(135deg, #1A3A5C 0%, #0D1F33 100%)",
    emoji: "🌟",
    badge: "🎵",
  },
  {
    id: 4,
    name: "Spice Garden Catering",
    category: "Food & Catering",
    rating: 4.9,
    reviews: 305,
    price: "₹850/plate",
    tag: "Best Value",
    gradient: "linear-gradient(135deg, #3D6B2C 0%, #234018 100%)",
    emoji: "🍛",
    badge: "🌿",
  },
];

const testimonials = [
  {
    name: "Priya & Arjun",
    event: "Wedding · Mumbai",
    text: "TentHouse made our dream wedding possible. Everything from the canopy to catering was perfectly coordinated!",
    avatar: "👰",
    stars: 5,
  },
  {
    name: "Rajesh Kumar",
    event: "Corporate Event · Pune",
    text: "Booked a full setup for 500 guests in under 2 hours. The vendors were professional and on time.",
    avatar: "👔",
    stars: 5,
  },
  {
    name: "Meena Sharma",
    event: "Birthday Party · Delhi",
    text: "The decoration team was incredible. My daughter's birthday looked like a fairy tale!",
    avatar: "🎂",
    stars: 5,
  },
];

const upcomingEvents = [
  { date: "Mar 15", month: "2026", event: "Mehendi Ceremony", venue: "Home Garden", status: "confirmed" },
  { date: "Mar 22", month: "2026", event: "Wedding Reception", venue: "Crystal Hall", status: "pending" },
];

function StarRating({ count }) {
  return (
    <span style={{ color: COLORS.gold, fontSize: 13, letterSpacing: 1 }}>
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

function ServicePill({ icon, label, color, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "12px 16px",
        borderRadius: 16,
        border: active ? `2px solid ${COLORS.gold}` : "2px solid transparent",
        background: active
          ? `linear-gradient(135deg, ${color}22, ${color}11)`
          : "rgba(255,255,255,0.07)",
        cursor: "pointer",
        transition: "all 0.25s ease",
        minWidth: 72,
        transform: active ? "translateY(-2px)" : "none",
        boxShadow: active ? `0 8px 20px ${color}33` : "none",
      }}
    >
      <span style={{ fontSize: 26 }}>{icon}</span>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: active ? COLORS.gold : COLORS.muted,
          fontFamily: "'Nunito', sans-serif",
          letterSpacing: 0.3,
        }}
      >
        {label}
      </span>
    </button>
  );
}

function VendorCard({ vendor, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: COLORS.darkCard,
        boxShadow: hovered
          ? "0 20px 50px rgba(139,46,13,0.35)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "none",
        cursor: "pointer",
        animation: `fadeSlideUp 0.5s ease ${index * 0.1}s both`,
        flex: "0 0 auto",
        width: 220,
      }}
    >
      <div
        style={{
          height: 120,
          background: vendor.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 44,
          position: "relative",
        }}
      >
        {vendor.emoji}
        <span
          style={{
            position: "absolute",
            top: 10,
            right: 12,
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
            borderRadius: 20,
            padding: "3px 10px",
            fontSize: 11,
            fontWeight: 700,
            color: COLORS.gold,
            fontFamily: "'Nunito', sans-serif",
            border: `1px solid ${COLORS.gold}44`,
          }}
        >
          {vendor.tag}
        </span>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 15,
                fontWeight: 700,
                color: COLORS.cream,
                marginBottom: 2,
              }}
            >
              {vendor.badge} {vendor.name}
            </div>
            <div
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 11,
                color: COLORS.muted,
                marginBottom: 8,
              }}
            >
              {vendor.category}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <StarRating count={Math.round(vendor.rating)} />
            <div
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 11,
                color: COLORS.muted,
                marginTop: 1,
              }}
            >
              {vendor.rating} ({vendor.reviews})
            </div>
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 14,
              fontWeight: 700,
              color: COLORS.gold,
            }}
          >
            {vendor.price}
          </div>
        </div>
        <button
          style={{
            marginTop: 12,
            width: "100%",
            padding: "9px 0",
            borderRadius: 10,
            background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
            border: "none",
            color: COLORS.cream,
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            cursor: "pointer",
            letterSpacing: 0.5,
          }}
        >
          Book Now →
        </button>
      </div>
    </div>
  );
}

function TestimonialCard({ t, active }) {
  return (
    <div
      style={{
        background: active
          ? `linear-gradient(135deg, ${COLORS.primaryDark}cc, ${COLORS.darkCard})`
          : COLORS.darkCard,
        borderRadius: 20,
        padding: "24px 20px",
        border: active
          ? `1px solid ${COLORS.gold}55`
          : "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.4s ease",
        transform: active ? "scale(1.02)" : "scale(0.97)",
        opacity: active ? 1 : 0.6,
        minWidth: 260,
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 10 }}>{t.avatar}</div>
      <StarRating count={t.stars} />
      <p
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 13,
          color: COLORS.cream,
          lineHeight: 1.6,
          margin: "10px 0",
          fontStyle: "italic",
        }}
      >
        "{t.text}"
      </p>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 14,
          fontWeight: 700,
          color: COLORS.gold,
        }}
      >
        {t.name}
      </div>
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 11,
          color: COLORS.muted,
        }}
      >
        {t.event}
      </div>
    </div>
  );
}

export default function TentHouseApp() {
  const [activeService, setActiveService] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePage, setActivePage] = useState("home");
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0D0805",
        fontFamily: "'Nunito', sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px 0 60px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Nunito:wght@400;600;700;800&display=swap');
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        ::-webkit-scrollbar { width: 0; }
      `}</style>

      {/* Phone Frame */}
      <div
        style={{
          width: 390,
          minHeight: 844,
          background: COLORS.dark,
          borderRadius: 48,
          overflow: "hidden",
          boxShadow:
            "0 0 0 10px #1a0f08, 0 0 0 12px #2a1a0e, 0 50px 120px rgba(0,0,0,0.8), 0 20px 40px rgba(139,46,13,0.2)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Status Bar */}
        <div
          style={{
            background: COLORS.primaryDark,
            padding: "14px 28px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: COLORS.cream, fontSize: 13, fontWeight: 700 }}>9:41</span>
          <div
            style={{
              width: 120,
              height: 28,
              background: "#0D0805",
              borderRadius: 20,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 8,
            }}
          />
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ color: COLORS.cream, fontSize: 13 }}>●●●●</span>
            <span style={{ color: COLORS.cream, fontSize: 13 }}>🔋</span>
          </div>
        </div>

        {/* Header */}
        <div
          style={{
            background: `linear-gradient(180deg, ${COLORS.primaryDark} 0%, ${COLORS.dark} 100%)`,
            padding: "12px 20px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
              animation: "fadeSlideUp 0.4s ease both",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 26,
                  fontWeight: 900,
                  color: COLORS.cream,
                  letterSpacing: -0.5,
                  lineHeight: 1.1,
                }}
              >
                Tent<span style={{ color: COLORS.gold }}>House</span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: COLORS.gold,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginTop: 1,
                }}
              >
                ✦ Event Booking Platform
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  cursor: "pointer",
                  border: "1px solid rgba(212,168,83,0.3)",
                }}
              >
                🔔
              </div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.primaryLight})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                👤
              </div>
            </div>
          </div>

          {/* Location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 16,
              animation: "fadeSlideUp 0.5s ease 0.05s both",
            }}
          >
            <span style={{ fontSize: 14 }}>📍</span>
            <span style={{ color: COLORS.muted, fontSize: 12, fontWeight: 600 }}>
              Mumbai, Maharashtra
            </span>
            <span style={{ color: COLORS.gold, fontSize: 12, marginLeft: 4, cursor: "pointer" }}>
              Change ›
            </span>
          </div>

          {/* Hero Banner */}
          <div
            style={{
              borderRadius: 20,
              background: `linear-gradient(135deg, ${COLORS.primary}cc 0%, ${COLORS.primaryDark} 60%, #1A0F08 100%)`,
              padding: "20px",
              marginBottom: 16,
              border: `1px solid ${COLORS.gold}33`,
              position: "relative",
              overflow: "hidden",
              animation: "fadeSlideUp 0.5s ease 0.1s both",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: -10,
                top: -10,
                fontSize: 80,
                opacity: 0.15,
                animation: "float 4s ease-in-out infinite",
              }}
            >
              ⛺
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 900,
                color: COLORS.cream,
                lineHeight: 1.25,
                marginBottom: 6,
                maxWidth: "70%",
              }}
            >
              Your Dream Event Starts Here
            </div>
            <div
              style={{
                fontSize: 12,
                color: COLORS.gold,
                fontWeight: 600,
                marginBottom: 14,
                maxWidth: "72%",
                lineHeight: 1.5,
              }}
            >
              Book tents, decorators, lighting, DJ & catering for weddings and events.
            </div>
            <button
              style={{
                background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.goldLight})`,
                border: "none",
                borderRadius: 10,
                padding: "9px 20px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: 13,
                color: COLORS.dark,
                cursor: "pointer",
                letterSpacing: 0.3,
              }}
            >
              Explore Vendors →
            </button>
            <div
              style={{
                position: "absolute",
                bottom: 14,
                right: 16,
                display: "flex",
                gap: 6,
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: i === 0 ? 18 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === 0 ? COLORS.gold : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Search */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: searchFocused
                ? "rgba(255,255,255,0.12)"
                : "rgba(255,255,255,0.07)",
              borderRadius: 14,
              padding: "12px 16px",
              border: searchFocused
                ? `1px solid ${COLORS.gold}88`
                : "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease",
              animation: "fadeSlideUp 0.5s ease 0.15s both",
            }}
            onClick={() => setSearchFocused(!searchFocused)}
          >
            <span style={{ fontSize: 16 }}>🔍</span>
            <span
              style={{
                color: searchFocused ? COLORS.cream : COLORS.muted,
                fontSize: 13,
                fontWeight: 600,
                flex: 1,
              }}
            >
              Search tents, decor, catering...
            </span>
            <div
              style={{
                background: COLORS.primary,
                borderRadius: 8,
                padding: "5px 10px",
                fontSize: 11,
                color: COLORS.gold,
                fontWeight: 700,
              }}
            >
              FILTER
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            overflowY: "auto",
            background: COLORS.dark,
            paddingBottom: 80,
          }}
        >
          {/* Services */}
          <div style={{ padding: "20px 0 8px" }}>
            <div
              style={{
                padding: "0 20px",
                marginBottom: 14,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: COLORS.cream,
                }}
              >
                Our Services
              </div>
              <span style={{ color: COLORS.gold, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                View All →
              </span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                padding: "4px 20px",
                overflowX: "auto",
              }}
            >
              {services.map((s) => (
                <ServicePill
                  key={s.id}
                  {...s}
                  active={activeService === s.id}
                  onClick={() => setActiveService(s.id)}
                />
              ))}
            </div>
          </div>

          {/* Stats Strip */}
          <div
            style={{
              margin: "16px 20px",
              borderRadius: 16,
              background: `linear-gradient(90deg, ${COLORS.primaryDark}, ${COLORS.darkCard})`,
              border: `1px solid ${COLORS.gold}22`,
              display: "flex",
              overflow: "hidden",
            }}
          >
            {[
              { num: "2,400+", label: "Vendors" },
              { num: "18,000+", label: "Events" },
              { num: "4.9★", label: "Avg Rating" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  padding: "14px 10px",
                  textAlign: "center",
                  borderRight:
                    i < 2 ? `1px solid ${COLORS.gold}22` : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 900,
                    color: COLORS.gold,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.muted,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                    marginTop: 2,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Vendors */}
          <div style={{ padding: "8px 0" }}>
            <div
              style={{
                padding: "0 20px",
                marginBottom: 14,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: COLORS.cream,
                }}
              >
                Featured Vendors
              </div>
              <span style={{ color: COLORS.gold, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                See All →
              </span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 14,
                padding: "4px 20px 8px",
                overflowX: "auto",
              }}
            >
              {featuredVendors.map((v, i) => (
                <VendorCard key={v.id} vendor={v} index={i} />
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div style={{ padding: "16px 20px 8px" }}>
            <div
              style={{
                marginBottom: 14,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: COLORS.cream,
                }}
              >
                My Upcoming Events
              </div>
              <span style={{ color: COLORS.gold, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                + Add Event
              </span>
            </div>
            {upcomingEvents.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: COLORS.darkCard,
                  borderRadius: 14,
                  padding: "14px 16px",
                  marginBottom: 10,
                  border: `1px solid ${e.status === "confirmed" ? COLORS.gold + "44" : "rgba(255,255,255,0.06)"}`,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    background: e.status === "confirmed"
                      ? `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`
                      : "rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    padding: "10px 12px",
                    textAlign: "center",
                    minWidth: 52,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 20,
                      fontWeight: 900,
                      color: COLORS.gold,
                      lineHeight: 1,
                    }}
                  >
                    {e.date}
                  </div>
                  <div style={{ fontSize: 10, color: COLORS.muted, marginTop: 2 }}>
                    {e.month}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: COLORS.cream,
                      marginBottom: 2,
                    }}
                  >
                    {e.event}
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.muted }}>
                    📍 {e.venue}
                  </div>
                </div>
                <div
                  style={{
                    padding: "5px 10px",
                    borderRadius: 8,
                    background:
                      e.status === "confirmed"
                        ? `${COLORS.gold}22`
                        : "rgba(255,255,255,0.07)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: e.status === "confirmed" ? COLORS.gold : COLORS.muted,
                    textTransform: "capitalize",
                  }}
                >
                  {e.status === "confirmed" ? "✓ " : "⏳ "}{e.status}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div style={{ padding: "8px 0 20px" }}>
            <div
              style={{
                padding: "0 20px",
                marginBottom: 14,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: COLORS.cream,
                }}
              >
                Happy Customers
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    style={{
                      width: activeTestimonial === i ? 16 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: activeTestimonial === i ? COLORS.gold : COLORS.muted,
                      transition: "all 0.3s",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                padding: "4px 20px",
                overflowX: "auto",
              }}
            >
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} t={t} active={activeTestimonial === i} />
              ))}
            </div>
          </div>

          {/* Promo Banner */}
          <div
            style={{
              margin: "0 20px 20px",
              borderRadius: 20,
              background: `linear-gradient(135deg, ${COLORS.gold}22, ${COLORS.primary}44)`,
              border: `1px solid ${COLORS.gold}44`,
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: 40,
                animation: "float 3s ease-in-out infinite",
              }}
            >
              🎁
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: COLORS.cream,
                  marginBottom: 4,
                }}
              >
                First Event? Save 20%!
              </div>
              <div style={{ fontSize: 12, color: COLORS.muted, lineHeight: 1.4 }}>
                Use code{" "}
                <span
                  style={{
                    color: COLORS.gold,
                    fontWeight: 700,
                    background: `${COLORS.gold}22`,
                    padding: "1px 6px",
                    borderRadius: 4,
                  }}
                >
                  FIRST20
                </span>{" "}
                at checkout
              </div>
            </div>
            <span style={{ color: COLORS.gold, fontSize: 20 }}>›</span>
          </div>
        </div>

        {/* Bottom Nav */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: `linear-gradient(0deg, ${COLORS.primaryDark} 0%, ${COLORS.dark}ee 100%)`,
            backdropFilter: "blur(20px)",
            borderTop: `1px solid ${COLORS.gold}22`,
            padding: "10px 0 20px",
            display: "flex",
            justifyContent: "space-around",
            zIndex: 10,
          }}
        >
          {[
            { icon: "🏠", label: "Home", page: "home" },
            { icon: "🔍", label: "Explore", page: "explore" },
            { icon: "📋", label: "Bookings", page: "bookings" },
            { icon: "💬", label: "Messages", page: "messages" },
            { icon: "👤", label: "Profile", page: "profile" },
          ].map((item) => (
            <button
              key={item.page}
              onClick={() => setActivePage(item.page)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: 12,
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: activePage === item.page ? 22 : 20, transition: "all 0.2s" }}>
                {item.icon}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: activePage === item.page ? COLORS.gold : COLORS.muted,
                  transition: "all 0.2s",
                  letterSpacing: 0.3,
                }}
              >
                {item.label}
              </span>
              {activePage === item.page && (
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: COLORS.gold,
                    marginTop: -2,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}