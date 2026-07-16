import React from 'react';
import SectionTitle from '../MyPortpolio/components/common/SectionTitle';

export default {
  title: 'MyPortfolio/Notes',
};

export const ProjectOverview = () => (
  <div className="p-6 bg-slate-950 min-h-screen text-white">
    <SectionTitle
      eyebrow="Storybook Ready"
      title="Why this portfolio is client-ready"
      description="This project uses Storybook to design, test, and document reusable components before integrating them into the live portfolio. It helps maintain consistency across the app and speeds up feature delivery."
      align="left"
    />
    <div className="mt-8 bg-slate-900/80 border border-white/10 rounded-3xl p-6 space-y-4">
      <h3 className="text-xl font-semibold text-white">Key benefits</h3>
      <ul className="list-disc list-inside text-slate-400 space-y-2">
        <li>Reusable components for headings, cards, and buttons.</li>
        <li>Storybook stories that act as UI documentation.</li>
        <li>Strong visual polish with Tailwind and motion animations.</li>
        <li>Consistent experience across portfolio sections.</li>
      </ul>
    </div>
  </div>
);
