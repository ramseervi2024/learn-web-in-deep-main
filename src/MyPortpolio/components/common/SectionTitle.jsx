import React from 'react';

const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 dark:text-blue-400 mb-2 sm:mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
      )}
      <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 justify-start">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-400 dark:text-slate-500">React</span>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-400 dark:text-slate-500">Storybook</span>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-400 dark:text-slate-500">Tailwind</span>
      </div>
    </div>
  );
};

export default SectionTitle;
