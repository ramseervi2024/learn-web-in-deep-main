import React from 'react';
import { Server, Cloud, ShieldCheck, Terminal, HardDrive, RefreshCcw, LayoutPanelLeft } from 'lucide-react';

export default function DevOpsLab() {
    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Production Environment</span>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter">Cloud & <br /><span className="text-blue-600 italic">DevOps Lab</span></h1>
                    <p className="text-2xl text-gray-500 font-bold tracking-tight italic">"From laptop to live server."</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                    <Server className="w-[40rem] h-[40rem]" strokeWidth={1} />
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight uppercase">Master the Infrastructure</h2>
                            <div className="space-y-8">
                                {[
                                    { icon: Cloud, title: 'AWS Cloud Mastery', desc: 'EC2, S3, RDS aur Lambda ke basics se professional setup tak.' },
                                    { icon: HardDrive, title: 'Nginx & Server Hosting', desc: 'Reverse proxy, SSL certificates aur load balancing.' },
                                    { icon: RefreshCcw, title: 'CI/CD Pipelines', desc: 'GitHub Actions aur Docker ka use karke automated deployments.' },
                                    { icon: ShieldCheck, title: 'Cloud Security', desc: 'Firewalls, IAM roles aur secure environment configuration.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="bg-gray-900 text-white p-4 rounded-[1.5rem] group-hover:bg-blue-600 transition-colors shrink-0">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-black text-gray-900 uppercase tracking-tight text-lg">{item.title}</h4>
                                            <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-[4rem] p-10 md:p-16 text-white self-center shadow-2xl overflow-hidden relative group">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
                            <div className="relative z-10 space-y-10">
                                <h3 className="text-2xl font-black uppercase tracking-widest text-blue-500 flex items-center gap-3">
                                    <Terminal className="w-6 h-6" /> Lab Curriculum
                                </h3>
                                <div className="space-y-4 font-mono text-sm">
                                    {[
                                        { s: 'Module 01', t: '$ ssh ubuntu@aws-server-ip' },
                                        { s: 'Module 02', t: '$ sudo apt install nginx pm2' },
                                        { s: 'Module 03', t: '$ certbot --nginx -d global.com' },
                                        { s: 'Module 04', t: '$ docker-compose up --build -d' }
                                    ].map((step, i) => (
                                        <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-blue-500/50 transition-all">
                                            <span className="text-blue-500 opacity-50">{step.s}</span>
                                            <span className="text-gray-300 font-bold">{step.t}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <div className="bg-blue-600/10 border-2 border-dashed border-blue-600/50 rounded-3xl p-8 text-center text-blue-400 italic font-bold">
                                        "Aapko real production environment mein projects host karna sikhaya jayega."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
