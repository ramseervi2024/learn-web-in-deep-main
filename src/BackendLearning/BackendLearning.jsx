import React, { useState } from 'react';
import {
  Home,
  Settings,
  Database,
  Lock,
  FileCode,
  Send,
  Cloud,
  GitBranch,
  CheckSquare,
  ShoppingCart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './components/SectionHeader';
import {
  HomeSection,
  SetupSection,
  CrudSection,
  AuthSection,
  SwaggerSection,
  PostmanSection,
  DeploymentSection,
  CicdSection,
  TaskManagerSection,
  EcommerceSection
} from './sections';

export default function BackendLearning() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: {
      title: "Node.js Backend Mastery",
      subtitle: "From Zero to Production: Complete Guide for Beginner to Advanced Developers",
      icon: Home,
      Component: HomeSection
    },
    setup: {
      title: "Backend Project Setup",
      subtitle: "Professional folder structure and environment configuration",
      icon: Settings,
      Component: SetupSection
    },
    crud: {
      title: "CRUD Operations (All Databases)",
      subtitle: "Master MySQL, PostgreSQL, SQL Server, and MongoDB",
      icon: Database,
      Component: CrudSection
    },
    auth: {
      title: "Authentication & RBAC",
      subtitle: "JWT, Refresh Tokens, and Role-Based Access Control",
      icon: Lock,
      Component: AuthSection
    },
    swagger: {
      title: "API Documentation (Swagger)",
      subtitle: "Auto-generate interactive API documentation",
      icon: FileCode,
      Component: SwaggerSection
    },
    postman: {
      title: "Postman Workflow",
      subtitle: "Testing APIs with collections and environment variables",
      icon: Send,
      Component: PostmanSection
    },
    deployment: {
      title: "AWS Deployment",
      subtitle: "Deploy to production with EC2, PM2, Nginx, and SSL",
      icon: Cloud,
      Component: DeploymentSection
    },
    cicd: {
      title: "CI/CD Pipeline",
      subtitle: "Automate deployment with GitHub Actions",
      icon: GitBranch,
      Component: CicdSection
    },
    taskmanager: {
      title: "Project: Task Manager",
      subtitle: "Beginner-friendly REST API with JWT authentication",
      icon: CheckSquare,
      Component: TaskManagerSection
    },
    ecommerce: {
      title: "Project: E-Commerce",
      subtitle: "Advanced API with Redis, Stripe, and logging",
      icon: ShoppingCart,
      Component: EcommerceSection
    }
  };

  const currentSection = sections[activeSection];
  const CurrentComponent = currentSection.Component;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 h-screen w-72 bg-[#111] border-r border-gray-900 p-6 overflow-y-auto">
          <div className="mb-10">
            <h1 className="text-xl font-bold text-white mb-1">Backend Mastery</h1>
            <p className="text-xs text-gray-500 uppercase">Complete Guide A-J</p>
          </div>

          {/* Documentation Section */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 uppercase mb-3 px-2">Documentation (A-H)</p>
            <nav className="space-y-2">
              {['home', 'setup', 'crud', 'auth', 'swagger', 'postman', 'deployment', 'cicd'].map((key) => {
                const section = sections[key];
                const Icon = section.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeSection === key
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Backend Projects Section */}
          <div>
            <p className="text-xs text-gray-500 uppercase mb-3 px-2">Backend Projects (I-J)</p>
            <nav className="space-y-2">
              {['taskmanager', 'ecommerce'].map((key) => {
                const section = sections[key];
                const Icon = section.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeSection === key
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-72 p-12 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SectionHeader
                icon={currentSection.icon}
                title={currentSection.title}
                subtitle={currentSection.subtitle}
              />
              <CurrentComponent />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
