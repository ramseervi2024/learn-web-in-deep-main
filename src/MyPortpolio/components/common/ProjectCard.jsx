import React from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const iconMap = {
  Mobile: Smartphone,
  Web: Globe,
};

const ProjectCard = ({ title, type, category, description, tech, link, github, accent = 'blue' }) => {
  const Icon = iconMap[category] || Globe;
  
  const accentColors = {
    blue: {
      bg: 'from-blue-600/20 to-purple-600/20',
      border: 'border-blue-500/30',
      icon: 'text-blue-400',
      iconBg: 'bg-blue-500/20',
      hover: 'hover:border-blue-400/50'
    },
    emerald: {
      bg: 'from-emerald-600/20 to-teal-600/20',
      border: 'border-emerald-500/30',
      icon: 'text-emerald-400',
      iconBg: 'bg-emerald-500/20',
      hover: 'hover:border-emerald-400/50'
    }
  };

  const colors = accentColors[accent] || accentColors.blue;

  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link 
    ? { 
        href: link, 
        target: '_blank', 
        rel: 'noopener noreferrer', 
        className: `group relative overflow-hidden rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-xl shadow-2xl shadow-slate-950/40 ${colors.hover} transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/20 cursor-pointer block`
      }
    : { 
        className: `relative overflow-hidden rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-xl shadow-2xl shadow-slate-950/40`
      };

  return (
    <CardWrapper {...cardProps}>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative glow */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 ${colors.iconBg} rounded-full filter blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
      
      <div className="relative p-4 sm:p-6 md:p-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-white/80 backdrop-blur-sm">
            {type}
          </span>
          <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl ${colors.iconBg} ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={16} sm:size={20} />
          </div>
        </div>
        
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-blue-200 transition-colors">
          {title}
        </h3>
        
        <p className="text-xs sm:text-sm text-slate-300 mb-4 md:mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-6">
          {tech.map((item) => (
            <span 
              key={item} 
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-white/70 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-white/10">
          {link && (
            <span className="inline-flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">
              <ExternalLink size={14} sm:size={16} className="group-hover:translate-x-1 transition-transform" /> 
              View Live
            </span>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <Github size={14} sm:size={16} /> Source
            </a>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
