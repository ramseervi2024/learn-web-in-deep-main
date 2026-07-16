import React from 'react';

const ActionButton = ({ label, variant = 'primary', icon: Icon, onClick, href }) => {
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10',
    outline: 'bg-transparent border border-white/20 text-white hover:border-blue-400 hover:text-blue-300',
  };

  const className = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold transition ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {Icon && <Icon size={18} />}
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {Icon && <Icon size={18} />}
      {label}
    </button>
  );
};

export default ActionButton;
