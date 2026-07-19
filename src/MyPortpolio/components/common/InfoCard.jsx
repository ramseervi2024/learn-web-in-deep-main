import React from 'react';

const InfoCard = ({ title, value, subtitle, accent = 'blue' }) => {
  const accentClasses = {
    blue: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300',
    emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
    purple: 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300',
  };

  return (
    <div className={`rounded-xl sm:rounded-2xl border p-3 sm:p-4 md:p-5 backdrop-blur ${accentClasses[accent] || accentClasses.blue}`}>
      <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] opacity-70">{title}</p>
      <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">{value}</h3>
      {subtitle && <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs md:text-sm opacity-80">{subtitle}</p>}
    </div>
  );
};

export default InfoCard;
