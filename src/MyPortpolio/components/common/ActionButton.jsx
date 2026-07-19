import React from 'react';

const ActionButton = ({ label, variant = 'primary', icon: Icon, onClick, href, target }) => {
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-white/10',
    outline: 'bg-transparent border border-slate-300 text-slate-800 hover:border-blue-500 hover:text-blue-600 dark:border-white/20 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-300',
  };

  const className = `inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold transition ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {Icon && <Icon size={16} />}
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {Icon && <Icon size={16} />}
      {label}
    </button>
  );
};

export default ActionButton;
