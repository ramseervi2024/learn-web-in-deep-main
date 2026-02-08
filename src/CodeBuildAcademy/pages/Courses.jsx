import { Layers, Database, Globe, BarChart, CheckCircle2, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';

const CourseCard = ({ title, icon: Icon, topics, color, tag }) => (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 hover:shadow-2xl hover:shadow-blue-50 transition-all border-l-8 group" style={{ borderLeftColor: color }}>
        <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl" style={{ backgroundColor: `${color}15`, color: color }}>
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{title}</h3>
            </div>
            {tag && <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">{tag}</span>}
        </div>
        <ul className="space-y-4">
            {topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-gray-300 shrink-0 mt-1" />
                    <span className="font-bold text-sm leading-tight">{topic}</span>
                </li>
            ))}
        </ul>
        <button className="w-full mt-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest bg-gray-50 text-gray-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            Enroll in Module
        </button>
    </div>
);

export default function Courses() {
    const courses = [
        {
            title: "Mobile App Development",
            icon: Layers,
            color: "#2563eb",
            tag: "High Demand",
            topics: [
                "UI with React Native & Tailwind",
                "API integration & Real-time data",
                "Redux & Zustand State Management",
                "Build APK & IPA (Production ready)",
                "Play Store & App Store publishing",
                "Handling App Rejections & Policy"
            ]
        },
        {
            title: "Backend + Cloud",
            icon: Database,
            color: "#059669",
            tag: "DevOps ready",
            topics: [
                "Node.js & Express Architecture",
                "MongoDB Schema Optimization",
                "AWS EC2 Deployment (Live Servers)",
                "SSL, Domain & DNS configuration",
                "CI/CD with GitHub Actions",
                "API Security & Rate Limiting"
            ]
        },
        {
            title: "Website Development",
            icon: Globe,
            color: "#d97706",
            topics: [
                "HTML, CSS, JS (Advanced)",
                "React + Next.js Frameworks",
                "Tailwind CSS Layout Mastery",
                "SEO & Core Web Vitals",
                "Hosting on Vercel & Netlify",
                "Headless CMS Integration"
            ]
        },
        {
            title: "AI + Coding Lab",
            icon: BrainCircuit,
            color: "#7c3aed",
            tag: "Future Skills",
            topics: [
                "ChatGPT for Advanced Coding",
                "GitHub Copilot Mastery",
                "Cursor AI Workflow",
                "v0.dev / Bolt.new Rapid Prototyping",
                "AI-assisted debugging",
                "Prompt Engineering for Devs"
            ]
        },
        {
            title: "Freelancing & Scaling",
            icon: BarChart,
            color: "#db2777",
            topics: [
                "How to get Global Clients",
                "Project Quoting & Estimates",
                "Client Communication & Sales",
                "Mastering Upwork & Fiverr",
                "Managing Deadlines & Teams",
                "Scaling from Dev to Agency"
            ]
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 space-y-6">
                    <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter">Deep Course Structure</h1>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Industry-grade curriculum designed by a senior developer. Practical knowledge jo actually kaam aati hai.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {courses.map((course, idx) => (
                        <CourseCard key={idx} {...course} />
                    ))}
                </div>

                <div className="mt-20 bg-blue-600 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(37,99,235,0.4)]">
                    <div className="relative z-10 space-y-8">
                        <div className="flex justify-center flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm flex items-center gap-2 font-bold"><ShieldCheck className="w-3 h-3" /> Industry Certified</span>
                            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm flex items-center gap-2 font-bold"><Zap className="w-3 h-3" /> Live Project Work</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready to Build Your Career?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="tel:+919876543210" className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl">
                                Free Counseling
                            </a>
                            <Link to="/admission" className="inline-flex items-center gap-3 bg-blue-700 text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition-all">
                                Enroll Online
                            </Link>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 bg-blue-500 w-96 h-96 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 bg-blue-400 w-96 h-96 rounded-full opacity-20 blur-3xl"></div>
                </div>
            </div>
        </div>
    );
}
