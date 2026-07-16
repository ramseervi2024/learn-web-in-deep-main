import React from 'react';
import SectionTitle from '../MyPortpolio/components/common/SectionTitle';
import InfoCard from '../MyPortpolio/components/common/InfoCard';

export default {
  title: 'MyPortfolio/Common Components',
  component: SectionTitle,
};

export const SectionTitleStory = {
  args: {
    eyebrow: 'About Me',
    title: 'I build modern web and mobile experiences',
    description: 'This reusable heading is designed for your portfolio sections and can be used in About, Skills, and Projects.',
    align: 'left',
  },
  render: (args) => <SectionTitle {...args} />,
};

export const InfoCardStory = {
  args: {
    title: 'Experience',
    value: '3+ Years',
    subtitle: 'Building scalable products for startups and teams.',
    accent: 'emerald',
  },
  render: (args) => <InfoCard {...args} />,
};
