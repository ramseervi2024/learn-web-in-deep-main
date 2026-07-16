import React from 'react';
import SectionTitle from '../MyPortpolio/components/common/SectionTitle';
import InfoCard from '../MyPortpolio/components/common/InfoCard';
import ProjectCard from '../MyPortpolio/components/common/ProjectCard';

export default {
  title: 'MyPortfolio/Layouts',
};

export const AboutSection = () => (
  <div className="space-y-12 p-6 bg-slate-950 min-h-screen text-white">
    <SectionTitle
      eyebrow="About"
      title="Passionate About Building High-Performance Products"
      description="I specialize in creating scalable web and mobile applications with modern UX, clean architecture, and strong visual polish."
      align="left"
    />

    <div className="grid lg:grid-cols-2 gap-10">
      <div className="rounded-3xl border border-white/10 p-8 bg-slate-900/70 backdrop-blur">
        <p className="text-slate-300 leading-relaxed">
          My portfolio is built using React, Vite, Tailwind CSS, and Storybook for reusable component development. Each section is designed to be modular, so it can be reused across the product.
        </p>
      </div>
      <div className="grid gap-5">
        <InfoCard title="Experience" value="3+ Years" subtitle="Building polished interfaces" accent="blue" />
        <InfoCard title="Projects" value="6+ Apps" subtitle="Delivered end-to-end products" accent="emerald" />
      </div>
    </div>
  </div>
);

export const ProjectShowcase = () => (
  <div className="space-y-12 p-6 bg-slate-950 min-h-screen text-white">
    <SectionTitle
      eyebrow="Projects"
      title="Featured Work"
      description="Reusable project cards let you display the same project details consistently across your portfolio and Storybook." 
      align="left"
    />

    <div className="grid lg:grid-cols-2 gap-8">
      <ProjectCard
        title="Ondeen - Event Booking"
        type="Mobile App"
        category="Mobile"
        description="A cross-platform app for browsing and booking events with instant checkout."
        tech={['React Native', 'Firebase', 'Stripe']}
        link="#"
        github="#"
        accent="blue"
      />
      <ProjectCard
        title="Treat-it - Beauty Booking"
        type="Web App"
        category="Web"
        description="Salon booking and scheduling with a modern admin experience."
        tech={['React', 'Tailwind', 'Firebase']}
        link="#"
        github="#"
        accent="emerald"
      />
    </div>
  </div>
);
