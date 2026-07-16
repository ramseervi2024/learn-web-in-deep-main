import React from 'react';

const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 leading-relaxed">{description}</p>
      )}
      <div className="mt-6 flex flex-wrap gap-3 justify-start">
        <span className="text-xs uppercase tracking-[0.25em] text-slate-500">React</span>
        <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Storybook</span>
        <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Tailwind</span>
      </div>
    </div>
  );
};

export default SectionTitle;
