import { useState } from "react";
import {
  Code2, Briefcase, TrendingUp, Target, Zap, Globe, DollarSign,
  CheckCircle2, AlertTriangle, Calendar, ArrowRight, Star,
  Rocket, Shield, BookOpen, Users, Coffee, ChevronDown, ChevronUp,
  Layers, Terminal, Package, Award, Clock, BarChart2, Repeat,
  Play, Pause, SkipForward
} from "lucide-react";

const YEARS = [
  {
    age: 25,
    year: "Year 1",
    theme: "Level Up & Signal",
    color: "from-blue-600 to-cyan-500",
    accent: "blue",
    incomeTarget: "₹18–24L / $22–28k",
    incomeNote: "Current job + first freelance clients",
    skills: {
      technical: [
        "Master TypeScript deeply (generics, decorators, strict mode)",
        "Next.js 14+ (App Router, Server Components, SSR/SSG)",
        "PostgreSQL + Prisma ORM (schema design, migrations)",
        "Redis (caching, queues with BullMQ)",
        "Docker basics + CI/CD with GitHub Actions",
        "Stripe payment integration",
        "Tailwind CSS + Shadcn/UI component library",
      ],
      business: [
        "Copywriting basics (how to write for conversions)",
        "Cold outreach on LinkedIn & email",
        "How to price yourself (value-based, not hourly)",
        "Build a personal brand — start posting on Twitter/X & LinkedIn",
      ],
    },
    projects: [
      {
        name: "SaaS Boilerplate",
        desc: "Next.js + Auth + Stripe + DB — reuse forever",
        type: "foundation",
      },
      {
        name: "2 Client Projects",
        desc: "Real freelance work; add to portfolio with metrics",
        type: "freelance",
      },
      {
        name: "Open Source Contribution",
        desc: "Pick 1 popular repo, ship meaningful PRs",
        type: "brand",
      },
      {
        name: "Portfolio Website",
        desc: "Personal site with case studies, not just project links",
        type: "brand",
      },
    ],
    freelance: {
      platforms: ["Toptal (apply early, takes months)", "Contra", "Upwork (niche down)", "LinkedIn DMs"],
      rate: "$30–50/hr or ₹2,500–4,000/hr",
      strategy: "Position as a 'React Native + Full-Stack' specialist. Niche down to one industry (fintech, edtech, or healthtech). Aim for 1–2 long-term retainer clients.",
    },
    saas: "Don't build yet. Observe problems in your daily dev life and freelance work. Keep a running list of 20+ pain points. Validate with Reddit, Twitter, and competitor research.",
    daily: [
      "6:00–7:00 AM — Deep learning (course / docs / book)",
      "7:00–9:00 AM — Job work (focus blocks)",
      "7:00–9:00 PM — Freelance project or side project",
      "10 min/day — Post 1 insight on LinkedIn or Twitter",
    ],
    weekly: [
      "2 hrs — Work on portfolio/open source",
      "1 hr — Cold outreach to 10 potential clients",
      "1 hr — Review weekly progress vs goals",
    ],
    mistakes: [
      "Spending all free time on tutorials without shipping",
      "Underpricing freelance work out of insecurity",
      "Skipping personal branding (biggest compounding mistake)",
    ],
  },
  {
    age: 26,
    year: "Year 2",
    theme: "Freelance Serious & SaaS Research",
    color: "from-violet-600 to-purple-500",
    accent: "violet",
    incomeTarget: "₹28–36L / $33–42k",
    incomeNote: "Job + ₹8–12L freelance income",
    skills: {
      technical: [
        "Advanced system design (microservices, message queues, caching strategies)",
        "AWS / GCP core services (EC2, RDS, S3, Lambda, Cloud Run)",
        "React Native Reanimated & Skia (high-performance animations)",
        "GraphQL + tRPC (type-safe APIs)",
        "Testing: Vitest, Playwright, Detox for RN",
        "AI/LLM API integration (OpenAI, Claude, Gemini APIs)",
      ],
      business: [
        "Build a small audience (target 2k Twitter + 1k LinkedIn followers)",
        "Learn SEO basics (keyword research, on-page SEO)",
        "Simple bookkeeping and freelance finance management",
        "Proposal writing that closes deals",
      ],
    },
    projects: [
      {
        name: "SaaS MVP #1",
        desc: "Pick your best validated idea. Ship in 6–8 weeks. Target $100 MRR",
        type: "saas",
      },
      {
        name: "Developer Tool / npm Package",
        desc: "Solve a real pain point — great for brand authority",
        type: "brand",
      },
      {
        name: "3–4 Client Projects",
        desc: "Increase rate. Focus on outcomes, not hours",
        type: "freelance",
      },
    ],
    freelance: {
      platforms: ["Toptal (if accepted)", "Direct clients via LinkedIn", "Referrals from Year 1 clients"],
      rate: "$50–80/hr or ₹4,000–7,000/hr",
      strategy: "Move away from Upwork. Focus on direct outreach. Land 1 anchor client ($2k+/month retainer). Subcontract small work to build a mini-agency feel.",
    },
    saas: "Validate your top 3 ideas: (1) Post about the problem on Twitter/Reddit — does anyone engage? (2) Set up a landing page with email capture. (3) Do 20 user interviews. (4) Only build when someone says 'I'd pay for this.' Target: $100 MRR in first 3 months.",
    daily: [
      "6:00–7:00 AM — SaaS product work",
      "7:00–9:00 AM — Job work",
      "7:00–9:00 PM — Freelance OR SaaS marketing",
      "30 min — Content creation (batching on weekends)",
    ],
    weekly: [
      "4 hrs — SaaS MVP development",
      "2 hrs — Freelance client work or proposals",
      "1 hr — Talk to 2–3 potential SaaS customers",
    ],
    mistakes: [
      "Building a SaaS without validation (months wasted)",
      "Scaling freelance by working more hours instead of raising rates",
      "Ignoring SEO and content — it takes 12 months to kick in",
    ],
  },
  {
    age: 27,
    year: "Year 3",
    theme: "SaaS Traction & Rate Scaling",
    color: "from-emerald-600 to-teal-500",
    accent: "emerald",
    incomeTarget: "₹40–55L / $48–65k",
    incomeNote: "Job (maybe last year) + freelance + SaaS MRR",
    skills: {
      technical: [
        "Advanced LLM/AI product development (RAG, embeddings, vector DBs)",
        "Kubernetes basics + advanced Docker Compose",
        "Analytics: PostHog, Mixpanel integration and analysis",
        "Performance optimization (React profiling, lazy loading, DB indexing)",
        "B2B SaaS-specific: multi-tenancy, SSO, audit logs",
        "Webflow / Framer for landing pages (no-code speed)",
      ],
      business: [
        "Content marketing strategy (SEO-led growth)",
        "Email marketing (ConvertKit, drip sequences)",
        "B2B sales fundamentals (discovery calls, objection handling)",
        "Unit economics: CAC, LTV, churn, MRR expansion",
      ],
    },
    projects: [
      {
        name: "SaaS to $1k–3k MRR",
        desc: "Focus on retention and reducing churn. Add 1 key feature/month",
        type: "saas",
      },
      {
        name: "Launch on Product Hunt",
        desc: "Prepare 8 weeks in advance. Build a hunter network",
        type: "brand",
      },
      {
        name: "Freelance: 2–3 premium clients only",
        desc: "$100–150/hr. Say no to low-quality work",
        type: "freelance",
      },
    ],
    freelance: {
      platforms: ["100% referrals + direct LinkedIn", "Your own site (SEO now kicking in)"],
      rate: "$80–120/hr or ₹6,500–10,000/hr",
      strategy: "Specialize deeply — 'AI-powered React Native apps for fintech startups.' Productize 1 service (e.g., 'Full-stack MVP in 6 weeks — $8,000 fixed price').",
    },
    saas: "Shift from building to growing. Pick ONE acquisition channel and master it: (1) SEO content targeting bottom-of-funnel keywords, OR (2) Cold email to ICP companies, OR (3) Community presence (Indie Hackers, Reddit, niche Slack groups). Track weekly: new signups, activation rate, churn, MRR.",
    daily: [
      "6:00–7:30 AM — SaaS feature work / bug fixes",
      "Job work (start planning exit at end of year)",
      "7:00–8:30 PM — SaaS marketing or customer support",
      "Thu/Fri evening — Content batch for the week",
    ],
    weekly: [
      "5 hrs — SaaS growth activities",
      "3 hrs — Premium freelance deliverables",
      "1 hr — Review MRR dashboard and adjust strategy",
      "1 hr — Customer calls (users = gold)",
    ],
    mistakes: [
      "Adding features instead of fixing churn",
      "Freelancing too much when SaaS needs attention",
      "Not building an email list from day one",
    ],
  },
  {
    age: 28,
    year: "Year 4",
    theme: "Job Exit & Full Independence",
    color: "from-orange-500 to-amber-400",
    accent: "orange",
    incomeTarget: "₹55–80L / $65–95k",
    incomeNote: "Freelance ($4–5k/mo) + SaaS ($3–5k MRR) — no more job",
    skills: {
      technical: [
        "Hire and manage contractors (Upwork, Toptal, Fiverr for specialists)",
        "Advanced SaaS infrastructure (zero-downtime deploys, monitoring, Datadog)",
        "Growth engineering: A/B testing, conversion optimization",
        "API product development (if pivoting toward platform/API business)",
      ],
      business: [
        "Delegation and async team management",
        "Partnership and integration marketing (AppSumo, partner directories)",
        "Fundraising basics (if considering it — know your options)",
        "Tax optimization for freelancers and founders (consult a CA)",
        "Basic legal: contracts, IP, privacy policy, Terms of Service",
      ],
    },
    projects: [
      {
        name: "SaaS to $5–8k MRR",
        desc: "This is now your main job. Hire 1 part-time contractor to help",
        type: "saas",
      },
      {
        name: "Productized Service",
        desc: "Package expertise into repeatable $5k–10k engagements",
        type: "freelance",
      },
      {
        name: "AppSumo or LTD Launch",
        desc: "Validates product-market fit and generates cash for growth",
        type: "brand",
      },
    ],
    freelance: {
      platforms: ["100% inbound — your content and referrals work for you now"],
      rate: "$120–180/hr or fixed-price projects at $5k–15k",
      strategy: "Work max 10 hrs/week on freelance. Use the rest to grow SaaS. Position as a consultant/advisor, not a contractor. Retainer model with 3–4 clients max.",
    },
    saas: "Exit criteria from job: SaaS MRR × 12 + freelance annual income ≥ 80% of your job salary. Before quitting: 6-month personal expense runway in savings. After quitting: go full-time on SaaS. Talk to 5 customers/week. Iterate fast.",
    daily: [
      "8:00–10:00 AM — SaaS: product and customer emails",
      "10:00 AM–12:00 PM — Growth: content, SEO, outreach",
      "2:00–5:00 PM — Deep SaaS development work",
      "Freelance: 1–2 focused days per week only",
    ],
    weekly: [
      "5 hrs — SaaS feature development",
      "4 hrs — Marketing and growth experiments",
      "3 hrs — Customer conversations",
      "2 hrs — Freelance (max)",
    ],
    mistakes: [
      "Quitting too early (before financial runway secured)",
      "Expanding to second SaaS too soon — go deep, not wide",
      "Under-investing in customer success / support systems",
    ],
  },
  {
    age: 29,
    year: "Year 5",
    theme: "Scale & Build Wealth Systems",
    color: "from-rose-600 to-pink-500",
    accent: "rose",
    incomeTarget: "₹80–1.2Cr / $95–140k",
    incomeNote: "SaaS ($8–15k MRR) + consulting ($2–3k/mo) + investments",
    skills: {
      technical: [
        "Building and managing a remote team (2–5 people)",
        "SaaS metrics mastery (cohort analysis, revenue forecasting)",
        "Enterprise features: SSO, SAML, custom contracts",
        "Acquisition: evaluate and potentially acquire micro-SaaS products",
      ],
      business: [
        "M&A basics (buying and selling micro-SaaS)",
        "Angel investing fundamentals",
        "Public speaking and conference talks (authority building)",
        "Wealth allocation: index funds, real estate, startup equity",
        "Build systems so the business runs without you daily",
      ],
    },
    projects: [
      {
        name: "SaaS to $10–20k MRR",
        desc: "Move upmarket: target SMBs and small teams, not just individuals",
        type: "saas",
      },
      {
        name: "Acquire a Micro-SaaS",
        desc: "Buy an existing product on MicroAcquire/Acquire.com for $10–50k",
        type: "saas",
      },
      {
        name: "Create a Course / Community",
        desc: "Monetize your expertise. $1k–5k launch, recurring community revenue",
        type: "brand",
      },
    ],
    freelance: {
      platforms: ["Stop freelancing by mid-year — you've outgrown it"],
      rate: "Advisory retainers only: $2,000–5,000/month for strategic guidance",
      strategy: "Transition away from execution work. Only take advisory roles where you provide strategy, not code. Your time is now worth more in your own products.",
    },
    saas: "Hire a part-time growth person or VA. Systematize support with Intercom/Crisp. Create a proper onboarding flow (activation rate is your #1 metric now). Consider pricing tiers and annual plans to boost cash flow. Explore partnerships with complementary tools.",
    daily: [
      "8:00–9:00 AM — Review metrics + team async updates",
      "9:00 AM–12:00 PM — High-leverage work (product strategy, partnerships)",
      "2:00–4:00 PM — Content, writing, or advisory calls",
      "4:00–5:00 PM — Learning (books, papers, podcasts)",
    ],
    weekly: [
      "3 hrs — SaaS strategic decisions",
      "3 hrs — Team management and hiring",
      "2 hrs — Content (now for authority, not growth hacking)",
      "2 hrs — Wealth management and financial planning",
    ],
    mistakes: [
      "Hiring full-time too early (use contractors first)",
      "Neglecting personal finance while building business",
      "Burnout from not building systems — automate or delegate anything repetitive",
    ],
  },
  {
    age: 30,
    year: "Year 6",
    theme: "Financial Freedom Achieved",
    color: "from-yellow-500 to-gold-400",
    accent: "yellow",
    incomeTarget: "₹1–2Cr+ / $120–240k+",
    incomeNote: "SaaS + investments + passive income streams",
    skills: {
      technical: ["Delegate most technical decisions to your team", "Focus on product vision and architecture reviews"],
      business: [
        "Portfolio management (multiple income streams)",
        "Build to sell OR build to hold — make a conscious choice",
        "Executive coaching or mentoring younger developers",
        "Speaking, writing a book, or building a second business",
      ],
    },
    projects: [
      { name: "SaaS: $20k+ MRR", desc: "Self-sustaining with a small remote team", type: "saas" },
      { name: "Investment Portfolio", desc: "Meaningful corpus in index funds / real estate", type: "wealth" },
      { name: "Next Chapter", desc: "Second SaaS, acquisition, or start raising for Series A", type: "saas" },
    ],
    freelance: {
      platforms: ["No active freelancing"],
      rate: "N/A — your time is for building, not services",
      strategy: "Financial freedom is when your passive + semi-passive income covers 2× your lifestyle expenses. Congratulations. Now build what you actually want to.",
    },
    saas: "You've made it. Now decide: (1) Run & grow — systematize and take monthly distributions. (2) Sell — MicroAcquire at 3–5× ARR. (3) Raise — if you see a big market, raise a seed round. All three are valid paths to wealth.",
    daily: [
      "Your schedule is now yours to design",
      "Work on what energizes you",
      "Rest, reflect, invest in relationships",
    ],
    weekly: ["Review financial dashboards", "1–2 days on product/team", "Rest is yours"],
    mistakes: [
      "Not enjoying the journey — celebrate milestones",
      "Lifestyle creep that inflates your freedom number",
      "Stopping learning — the market keeps shifting",
    ],
  },
];

const TOOLS = [
  { cat: "Frontend", items: ["Next.js", "React Native", "Tailwind CSS", "Shadcn/UI", "Framer Motion"] },
  { cat: "Backend", items: ["Node.js", "Prisma", "tRPC", "PostgreSQL", "Redis", "BullMQ"] },
  { cat: "DevOps", items: ["Docker", "GitHub Actions", "Railway/Render (start)", "AWS/GCP (scale)"] },
  { cat: "SaaS Stack", items: ["Stripe", "Resend (email)", "Clerk/Auth.js", "PostHog", "Sentry"] },
  { cat: "AI/LLM", items: ["OpenAI API", "Anthropic Claude API", "LangChain", "Pinecone/pgvector"] },
  { cat: "Growth", items: ["ConvertKit", "Webflow", "Ahrefs/Semrush", "Lemlist (cold email)"] },
];

const VALIDATION_STEPS = [
  { step: 1, title: "Find the pain", desc: "Identify a problem you or others face repeatedly. Look on Reddit, Indie Hackers, Twitter complaints, App Store 1-star reviews." },
  { step: 2, title: "Competitor check", desc: "Search for existing solutions. Competitors = validation. No competitors = no market (usually). Analyze their weaknesses." },
  { step: 3, title: "Landing page test", desc: "Build a landing page in 2 days with a waitlist. Drive 200+ targeted visitors via Reddit/Twitter posts. If <5% sign up, rethink." },
  { step: 4, title: "20 user interviews", desc: "Talk to 20 people who have the problem. DON'T pitch. Ask: How do you currently solve this? What would you pay? What's the biggest frustration?" },
  { step: 5, title: "Pre-sell before building", desc: "Offer to build it for them at a discount. If even 3 people pay $50–$200 upfront for early access, you have signal. Only then build." },
];

const FIRST_CUSTOMERS = [
  { method: "Your network first", detail: "Message 50 LinkedIn/Twitter connections personally. 'I'm building X for people like you. Would you try it free and give feedback?'" },
  { method: "Niche communities", detail: "Find Reddit/Slack/Discord communities where your ICP hangs out. Provide value for 2–4 weeks first, then share your product." },
  { method: "Cold email", detail: "Find 100 companies on Apollo.io or LinkedIn who match your ICP. Personalized 5-line email. Offer free trial or demo call." },
  { method: "Content SEO", detail: "Write 3 detailed guides solving the exact problem your SaaS solves. Rank on Google. Conversion widget at the bottom." },
  { method: "ProductHunt launch", detail: "Schedule when you have 20+ beta users. Build a 'coming soon' page on PH 2 weeks before. Engage hunters and early supporters." },
];

const typeColors = {
  foundation: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  freelance: "bg-violet-500/20 text-violet-300 border-violet-500/40",
  brand: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  saas: "bg-orange-500/20 text-orange-300 border-orange-500/40",
  wealth: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
};

export default function DevRoadmap() {
  const [activeYear, setActiveYear] = useState(0);
  const [expandedSection, setExpandedSection] = useState("skills");
  const year = YEARS[activeYear];

  const toggle = (s) => setExpandedSection(expandedSection === s ? null : s);

  const Section = ({ id, icon: Icon, title, children }) => (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => toggle(id)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon size={18} className="text-white/60" />
          <span className="text-sm font-semibold tracking-wide text-white/90">{title}</span>
        </div>
        {expandedSection === id ? <ChevronUp size={16} className="text-white/40" /> : <ChevronDown size={16} className="text-white/40" />}
      </button>
      {expandedSection === id && <div className="p-5 bg-black/30">{children}</div>}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#080c14] text-white font-sans" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-violet-900/20 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-14">
          <div className="flex items-center gap-2 mb-4">
            <Rocket size={14} className="text-cyan-400" />
            <span className="text-xs tracking-[0.2em] uppercase text-cyan-400 font-semibold">Developer Freedom Roadmap</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            25 → 30:{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              From Dev to Free
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            A practical 5-year roadmap to go from employed developer → high-paid freelancer → SaaS founder → financially free. Built for a 25-year-old with React Native + Node.js skills.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: Target, label: "Goal: ₹40L+ Job" },
              { icon: Globe, label: "Remote + Freelance" },
              { icon: Package, label: "SaaS Product" },
              { icon: DollarSign, label: "Free by 30" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white/70">
                <Icon size={14} className="text-cyan-400" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Year Navigation */}
        <div className="flex overflow-x-auto gap-3 pb-3 mb-10 scrollbar-hide">
          {YEARS.map((y, i) => (
            <button
              key={i}
              onClick={() => { setActiveYear(i); setExpandedSection("skills"); }}
              className={`flex-shrink-0 px-5 py-3 rounded-xl text-sm font-semibold transition-all border ${
                activeYear === i
                  ? `bg-gradient-to-r ${y.color} border-transparent text-white shadow-lg`
                  : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white/80"
              }`}
            >
              <div className="text-xs opacity-70 mb-0.5">Age {y.age}</div>
              <div>{y.year}</div>
            </button>
          ))}
        </div>

        {/* Year Header */}
        <div className={`bg-gradient-to-r ${year.color} rounded-2xl p-6 mb-6 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]" />
          <div className="relative">
            <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-70 mb-2">
              Age {year.age} · {year.year}
            </div>
            <h2 className="text-2xl font-bold mb-4">{year.theme}</h2>
            <div className="flex flex-wrap gap-3">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl px-4 py-3">
                <div className="text-xs opacity-60 mb-1">Income Target</div>
                <div className="font-bold text-lg">{year.incomeTarget}</div>
                <div className="text-xs opacity-60 mt-0.5">{year.incomeNote}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <Section id="skills" icon={Code2} title="Skills to Learn This Year">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">Technical</h4>
              <ul className="space-y-2">
                {year.skills.technical.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle2 size={14} className="mt-0.5 text-cyan-500 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-3">Business</h4>
              <ul className="space-y-2">
                {year.skills.business.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle2 size={14} className="mt-0.5 text-violet-500 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" icon={Layers} title="Projects to Build">
          <div className="grid md:grid-cols-2 gap-3">
            {year.projects.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="font-semibold text-sm text-white">{p.name}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider border rounded-full px-2 py-0.5 flex-shrink-0 ${typeColors[p.type]}`}>
                    {p.type}
                  </span>
                </div>
                <p className="text-xs text-white/50">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Freelance Section */}
        <Section id="freelance" icon={DollarSign} title="Freelance Strategy">
          <div className="space-y-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">Target Rate</div>
              <div className="text-lg font-bold text-white">{year.freelance.rate}</div>
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Platforms</div>
              <div className="flex flex-wrap gap-2">
                {year.freelance.platforms.map((p, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-white/60">{p}</span>
                ))}
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{year.freelance.strategy}</p>
          </div>
        </Section>

        {/* SaaS Section */}
        <Section id="saas" icon={Rocket} title="SaaS Focus This Year">
          <p className="text-sm text-white/65 leading-relaxed">{year.saas}</p>
        </Section>

        {/* Daily/Weekly Plan */}
        <Section id="schedule" icon={Calendar} title="Daily & Weekly Schedule">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-orange-400 mb-3">Daily Blocks</h4>
              <ul className="space-y-2">
                {year.daily.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/65">
                    <Clock size={13} className="mt-0.5 text-orange-500 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-rose-400 mb-3">Weekly Focus</h4>
              <ul className="space-y-2">
                {year.weekly.map((w, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/65">
                    <Repeat size={13} className="mt-0.5 text-rose-500 flex-shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Mistakes Section */}
        <Section id="mistakes" icon={AlertTriangle} title="Mistakes to Avoid">
          <ul className="space-y-3">
            {year.mistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-sm text-white/70">
                <AlertTriangle size={14} className="mt-0.5 text-red-400 flex-shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </Section>

        {/* ---- Static Sections ---- */}

        {/* Tools */}
        <div className="mt-12 mb-3">
          <h2 className="text-xl font-bold mb-1">🛠 Tech Stack to Master</h2>
          <p className="text-sm text-white/40 mb-6">These tools will carry you from year 1 to ₹1Cr+. Learn them deeply.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {TOOLS.map((t) => (
              <div key={t.cat} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">{t.cat}</div>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span key={item} className="bg-white/10 text-white/70 text-xs rounded-lg px-2 py-1">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SaaS Validation */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-1">✅ How to Validate a SaaS Idea</h2>
          <p className="text-sm text-white/40 mb-6">Do these 5 steps IN ORDER before writing a single line of product code.</p>
          <div className="space-y-3">
            {VALIDATION_STEPS.map((v) => (
              <div key={v.step} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {v.step}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white mb-1">{v.title}</div>
                  <p className="text-xs text-white/55 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* First Customers */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-1">💸 How to Get First Paying Customers</h2>
          <p className="text-sm text-white/40 mb-6">Distribution beats product. Ship fast and sell faster.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {FIRST_CUSTOMERS.map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight size={14} className="text-violet-400" />
                  <span className="font-semibold text-sm text-white">{c.method}</span>
                </div>
                <p className="text-xs text-white/55 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Income Summary */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-1">📈 Income Trajectory</h2>
          <p className="text-sm text-white/40 mb-6">Realistic numbers — not fantasy, not low-balling.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {["Age", "Year", "Theme", "Target (INR)", "Target (USD)"].map((h) => (
                    <th key={h} className="text-left text-xs text-white/40 uppercase tracking-wider pb-3 pr-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {YEARS.map((y, i) => (
                  <tr
                    key={i}
                    onClick={() => { setActiveYear(i); setExpandedSection("skills"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <td className="py-3 pr-4 font-bold text-white">{y.age}</td>
                    <td className="py-3 pr-4 text-white/60">{y.year}</td>
                    <td className="py-3 pr-4 text-white/60">{y.theme}</td>
                    <td className="py-3 pr-4">
                      <span className={`bg-gradient-to-r ${y.color} bg-clip-text text-transparent font-bold`}>
                        {y.incomeTarget.split(" / ")[0]}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-white/50">{y.incomeTarget.split(" / ")[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-14 mb-8 bg-gradient-to-br from-blue-900/40 to-violet-900/40 border border-white/10 rounded-2xl p-8 text-center">
          <Star size={24} className="text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">The only rule: Ship. Every. Week.</h3>
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            This roadmap means nothing without consistent action. Your competitive advantage isn't talent — it's showing up when others don't. One year from now, you'll wish you had started today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Build in public", "Ship imperfect work", "Talk to customers", "Raise your rates", "Never stop learning"].map((t) => (
              <span key={t} className="bg-white/10 border border-white/10 rounded-full px-4 py-2 text-xs text-white/60">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}