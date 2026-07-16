import React from 'react';
import SectionTitle from '../MyPortpolio/components/common/SectionTitle';
import InfoCard from '../MyPortpolio/components/common/InfoCard';
import ActionButton from '../MyPortpolio/components/common/ActionButton';
import ProjectCard from '../MyPortpolio/components/common/ProjectCard';
import { Download, ChevronRight } from 'lucide-react';

export default {
  title: 'MyPortfolio/Design System',
  argTypes: {
    accent: {
      control: { type: 'select' },
      options: ['blue', 'emerald', 'purple'],
    },
  },
};

const Template = (Component, args) => <Component {...args} />;

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
    subtitle: 'Building polished interfaces with React and Storybook.',
    accent: 'emerald',
  },
  render: (args) => <InfoCard {...args} />,
};

export const ActionButtonPrimary = {
  args: {
    label: 'View Projects',
    variant: 'primary',
    icon: ChevronRight,
    href: '#projects',
  },
  render: (args) => <ActionButton {...args} />,
};

export const ActionButtonSecondary = {
  args: {
    label: 'Download Resume',
    variant: 'secondary',
    icon: Download,
    href: '#',
  },
  render: (args) => <ActionButton {...args} />,
};

export const ProjectCardStory = {
  args: {
    title: 'Ondeen - Event Booking',
    type: 'Mobile App',
    category: 'Mobile',
    description: 'A cross-platform app for browsing and booking events using Apple Pay/Google Pay.',
    tech: ['React Native', 'Firebase', 'Stripe'],
    link: '#',
    github: '#',
    accent: 'blue',
  },
  render: (args) => <ProjectCard {...args} />,
};
