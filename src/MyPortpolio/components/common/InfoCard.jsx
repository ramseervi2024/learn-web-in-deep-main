import React from 'react';

const InfoCard = ({ title, value, subtitle, accent = 'blue' }) => {
  const accentClasses = {
    blue: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    purple: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
  };

  return (
    <div className={`rounded-2xl border p-5 backdrop-blur ${accentClasses[accent] || accentClasses.blue}`}>
      <p className="text-sm uppercase tracking-[0.25em] opacity-70">{title}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{value}</h3>
      {subtitle && <p className="mt-2 text-sm opacity-80">{subtitle}</p>}
    </div>
  );
};

export default InfoCard;
