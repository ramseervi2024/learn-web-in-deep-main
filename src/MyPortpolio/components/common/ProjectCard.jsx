import React from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const iconMap = {
  Mobile: Smartphone,
  Web: Globe,
};

const ProjectCard = ({ title, type, category, description, tech, link, github, accent = 'blue' }) => {
  const Icon = iconMap[category] || Globe;
  const accentBg = accent === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/25' : 'bg-blue-500/10 border-blue-500/25';

  return (
    <div className={`rounded-3xl border p-6 ${accentBg} backdrop-blur shadow-xl shadow-slate-950/20`}> 
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-[0.3em] text-blue-400">{type}</span>
        <div className="p-3 rounded-2xl bg-slate-900/70 text-blue-400">
          <Icon size={18} />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-sm text-slate-400 mb-5">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span key={item} className="text-[10px] uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full text-slate-300">{item}</span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {link && (
          <a href={link} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white">
            <ExternalLink size={16} /> View Live
          </a>
        )}
        {github && (
          <a href={github} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
            <Github size={16} /> Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
