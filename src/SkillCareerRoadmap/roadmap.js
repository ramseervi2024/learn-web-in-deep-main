const roadmapData = {
    platform: {
        name: "Tech & Corporate Career Path (1-30 Years)",
        tagline: "A comprehensive guide from Novice to Industry Legend",
        domains: [
            {
                id: "frontend",
                title: "Frontend Developer",
                description: "Mastering the user interface, experience, and client-side architecture.",
                levels: [
                    {
                        level: "Fresher / Trainee",
                        experience: "0-1 Years",
                        salary_india: "₹3L - ₹6L",
                        role: "Frontend Trainee",
                        goal: "Understand the basics of the web and build simple static pages.",
                        skills: ["HTML5", "CSS3", "Basic JavaScript", "Git Basics", "Chrome DevTools", "VS Code"],
                        best_websites: [
                            { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
                            { name: "freeCodeCamp", url: "https://www.freecodecamp.org" }
                        ]
                    },
                    {
                        level: "Junior Developer",
                        experience: "1-3 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Junior Frontend Developer",
                        goal: "Build functional components and handle API integrations.",
                        skills: ["React.js / Vue.js", "Tailwind CSS", "ES6+ JavaScript", "REST API Integration", "Responsive Design", "Basic Debugging"],
                        best_websites: [
                            { name: "React Documentation", url: "https://react.dev" },
                            { name: "CSS-Tricks", url: "https://css-tricks.com" }
                        ]
                    },
                    {
                        level: "Mid-Level Developer",
                        experience: "3-6 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Frontend Engineer",
                        goal: "Write clean, reusable code and optimize performance.",
                        skills: ["Advanced React (Hooks, Context)", "Redux / Zustand", "TypeScript", "Next.js / SSR", "Unit Testing (Jest/RTL)", "Web Accessibility (a11y)"],
                        best_websites: [
                            { name: "Frontend Masters", url: "https://frontendmasters.com" },
                            { name: "TypeScript Docs", url: "https://www.typescriptlang.org" }
                        ]
                    },
                    {
                        level: "Senior Developer",
                        experience: "6-10 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "Senior Frontend Engineer",
                        goal: "Architect scalable UI systems, mentor juniors, and own specific features.",
                        skills: ["System Design (Frontend)", "Performance Optimization", "CI/CD Pipelines", "GraphQL", "Micro-frontends", "Design Systems"],
                        best_websites: [
                            { name: "web.dev", url: "https://web.dev" },
                            { name: "Patterns.dev", url: "https://www.patterns.dev" }
                        ]
                    },
                    {
                        level: "Tech Lead / Staff Engineer",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹70L+",
                        role: "Staff Frontend Engineer",
                        goal: "Lead technical strategy across teams, solve complex architectural problems.",
                        skills: ["Large Scale Architecture", "Cross-team Leadership", "Browser Internals", "Polyfills & Transpilation Deep Dive", "Cloud Edge Computing", "Security Best Practices"],
                        best_websites: [
                            { name: "High Scalability", url: "http://highscalability.com" },
                            { name: "Google Engineering Blog", url: "https://cloud.google.com/blog/h/developers" }
                        ]
                    },
                    {
                        level: "Principal Engineer",
                        experience: "15-20 Years",
                        salary_india: "₹70L - ₹1.2Cr+",
                        role: "Principal Frontend Architect",
                        goal: "Define company-wide frontend standards and drive innovation.",
                        skills: ["Organizational Technical Strategy", "Build Tooling Architecture (Webpack/Vite Internal Plugins)", "Legacy Modernization", "High-Level System Design", "WebAssembly (Wasm)"],
                        best_websites: [
                            { name: "InfoQ", url: "https://www.infoq.com" }
                        ]
                    },
                    {
                        level: "Distinguished Engineer / Fellow",
                        experience: "20-30+ Years",
                        salary_india: "₹1.5Cr - ₹3Cr+",
                        role: "Distinguished Engineer",
                        goal: "Influence industry standards, visionary leadership, and global impact.",
                        skills: ["Industry Standardization (W3C)", "Global Architecture Strategy", "Executive Stakeholder Management", "Visionary Tech Roadmapping", "Mentoring Directors & VPs"],
                        best_websites: [
                            { name: "W3C Standards", url: "https://www.w3.org" }
                        ]
                    }
                ]
            },
            {
                id: "backend",
                title: "Backend Developer",
                description: "Focuses on server-side logic, databases, cloud architecture, and scalability.",
                levels: [
                    {
                        level: "Fresher / Trainee",
                        experience: "0-1 Years",
                        salary_india: "₹3L - ₹6L",
                        role: "Backend Trainee",
                        goal: "Learn server basics, database queries, and simple API creation.",
                        skills: ["Basic Node.js / Python", "SQL Basics", "Git", "HTTP Protocol", "JSON", "VS Code"],
                        best_websites: [
                            { name: "W3Schools SQL", url: "https://www.w3schools.com/sql/" },
                            { name: "Node.js Schema", url: "https://nodejs.org/en/docs/" }
                        ]
                    },
                    {
                        level: "Junior Developer",
                        experience: "1-3 Years",
                        salary_india: "₹5L - ₹12L",
                        role: "Junior Backend Developer",
                        goal: "Build REST APIs, manage database CRUD, and handle authentication.",
                        skills: ["Express.js / Django", "MongoDB / PostgreSQL", "JWT Authentication", "Postman", "Linux Basic Commands", "Error Handling"],
                        best_websites: [
                            { name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
                            { name: "Express Docs", url: "https://expressjs.com" }
                        ]
                    },
                    {
                        level: "Mid-Level Developer",
                        experience: "3-6 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Backend Engineer",
                        goal: "Optimize queries, design schemas, and implement caching.",
                        skills: ["Redis (Caching)", "Docker", "Unit & Integration Testing", "Message Queues (RabbitMQ/Kafka)", "GraphQL", "AWS Basics (EC2, S3, RDS)"],
                        best_websites: [
                            { name: "Docker Docs", url: "https://docs.docker.com" },
                            { name: "Redis Crash Course", url: "https://redis.io/docs/getting-started/" }
                        ]
                    },
                    {
                        level: "Senior Developer",
                        experience: "6-10 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Senior Backend Engineer",
                        goal: "Design microservices, ensure high availability, and conduct code reviews.",
                        skills: ["Microservices Architecture", "Kubernetes", "System Design (HLD/LLD)", "Database Sharding/Partitioning", "gRPC", "CI/CD Pipelines"],
                        best_websites: [
                            { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
                            { name: "AWS Architecture", url: "https://aws.amazon.com/architecture/" }
                        ]
                    },
                    {
                        level: "Tech Lead / Staff Engineer",
                        experience: "10-15 Years",
                        salary_india: "₹50L - ₹80L+",
                        role: "Staff Backend Engineer",
                        goal: "Oversee backend strategy, solve critical scaling issues, and mentor teams.",
                        skills: ["Event-Driven Architecture", "Cloud Native patterns", "Security Architecture (OAuth2/OIDC)", "Cost Optimization", "Distributed Tracing", "Team Leadership"],
                        best_websites: [
                            { name: "Martin Fowler's Blog", url: "https://martinfowler.com" }
                        ]
                    },
                    {
                        level: "Principal Engineer",
                        experience: "15-20 Years",
                        salary_india: "₹80L - ₹1.5Cr+",
                        role: "Principal Backend Architect",
                        goal: "Architect multi-region systems and drive long-term technical vision.",
                        skills: ["Multi-Cloud Strategy", "Enterprise Architecture", "Big Data Pipelines", "Governance & Compliance", "Disaster Recovery Strategy"],
                        best_websites: [
                            { name: "Netflix Tech Blog", url: "https://netflixtechblog.com" }
                        ]
                    },
                    {
                        level: "Distinguished Engineer / CTO",
                        experience: "20-30+ Years",
                        salary_india: "₹2Cr - ₹5Cr+",
                        role: "Chief Technology Officer (CTO)",
                        goal: "Align technology with business goals, lead entire engineering divisions.",
                        skills: ["Executive Strategy", "M&A Technical Due Diligence", "Organizational Culture", "Global Engineering Operations", "Future Tech Trends (AI/Blockchain)"],
                        best_websites: [
                            { name: "Harvard Business Review", url: "https://hbr.org/topic/technology" }
                        ]
                    }
                ]
            },
            {
                id: "react-native",
                title: "React Native Developer",
                description: "Specializes in building cross-platform mobile applications using JavaScript/TypeScript.",
                levels: [
                    {
                        level: "Fresher / Trainee",
                        experience: "0-1 Years",
                        salary_india: "₹3L - ₹6L",
                        role: "Mobile App Trainee",
                        goal: "Understand mobile basics and build simple screens with Expo.",
                        skills: ["JavaScript (ES6)", "React Basics", "Expo", "Flexbox for Mobile", "React Navigation Basics"],
                        best_websites: [
                            { name: "React Native Docs", url: "https://reactnative.dev" },
                            { name: "Expo Docs", url: "https://docs.expo.dev" }
                        ]
                    },
                    {
                        level: "Junior Developer",
                        experience: "1-3 Years",
                        salary_india: "₹5L - ₹12L",
                        role: "Junior React Native Dev",
                        goal: "Build functional mobile apps, handle navigation, and basic state.",
                        skills: ["React Native CLI", "React Navigation (Deep Linking)", "Context API", "FlatList Optimization", "API Integration (Axios)", "Debugging (Flipper/Reactotron)"],
                        best_websites: [
                            { name: "React Navigation", url: "https://reactnavigation.org" },
                            { name: "Ignite Cookbooks", url: "https://infinitered.github.io/ignite-cookbook/" }
                        ]
                    },
                    {
                        level: "Mid-Level Developer",
                        experience: "3-6 Years",
                        salary_india: "₹12L - ₹24L",
                        role: "Mobile Engineer",
                        goal: "Optimize performance, handle offline storage, and complex animations.",
                        skills: ["Redux Toolkit / MobX", "Reanimated 2/3", "Offline Support (mmkv/SQLite)", "Push Notifications", "App Store/Play Store Deployment", "TypeScript for RN"],
                        best_websites: [
                            { name: "Software Mansion", url: "https://swmansion.com/blog" }
                        ]
                    },
                    {
                        level: "Senior Developer",
                        experience: "6-10 Years",
                        salary_india: "₹24L - ₹45L",
                        role: "Senior Mobile Engineer",
                        goal: "Bridge Native code gaps, optimize startup time, and architecture apps.",
                        skills: ["Native Modules (Swift/Kotlin basics)", "JSI / TurboModules", "CI/CD (Fastlane, EAS)", "Performance Profiling", "Writing Custom Packages", "Unit/E2E Testing (Detox/Maestro)"],
                        best_websites: [
                            { name: "Callstack Blog", url: "https://www.callstack.com/blog" }
                        ]
                    },
                    {
                        level: "Tech Lead / Staff Engineer",
                        experience: "10-15 Years",
                        salary_india: "₹45L - ₹75L+",
                        role: "Staff Mobile Engineer",
                        goal: "Make key architectural decisions for cross-platform strategy.",
                        skills: ["Brownfield Integration", "Micro-frontends for Mobile", "System Design for Mobile", "Video/WebRTC Streaming", "Hardware Integration (BLE/IoT)"],
                        best_websites: [
                            { name: "Shopify Mobile Engineering", url: "https://shopify.engineering/topics/mobile" }
                        ]
                    },
                    {
                        level: "Principal Engineer",
                        experience: "15-20 Years",
                        salary_india: "₹75L - ₹1.2Cr+",
                        role: "Principal Mobile Architect",
                        goal: "Define mobile center of excellence and long-term platform strategy.",
                        skills: ["Cross-Platform Strategy (RN vs Flutter vs Native)", "Enterprise Mobile Security", "App Portfolio Management", "Scalable Component Libraries (SDUI)", "New Architecture (Fabric) Migration"],
                        best_websites: []
                    },
                    {
                        level: "Distinguished Engineer",
                        experience: "20-30+ Years",
                        salary_india: "₹1.5Cr - ₹3Cr+",
                        role: "Head of Mobile / Distinguished Eng",
                        goal: "Innovate in the mobile space and drive organizational mobile-first vision.",
                        skills: ["Mobile Experience Vision", "AR/VR Integration Strategy", "Global Mobile Performance Strategy", "Industry Thought Leadership", "Mergers & Tech Audits"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "devops",
                title: "DevOps / SRE / Platform Engineer",
                description: "Focuses on infrastructure, automation, reliability, and developer productivity.",
                levels: [
                    {
                        level: "Fresher / Trainee",
                        experience: "0-1 Years",
                        salary_india: "₹4L - ₹7L",
                        role: "DevOps Trainee",
                        goal: "Learn operating systems, scripting, and version control.",
                        skills: ["Linux Fundamentals", "Bash Shell Scripting", "Git & GitHub", "Networking Basics (DNS, HTTP)", "YAML/JSON basics"],
                        best_websites: [
                            { name: "Linux Journey", url: "https://linuxjourney.com" },
                            { name: "DevOps Roadmap", url: "https://roadmap.sh/devops" }
                        ]
                    },
                    {
                        level: "Junior Engineer",
                        experience: "1-3 Years",
                        salary_india: "₹6L - ₹14L",
                        role: "Junior DevOps Engineer",
                        goal: "Automate build processes and manage basic cloud resources.",
                        skills: ["Docker & Containerization", "CI tools (Jenkins/GitHub Actions)", "AWS/Azure Basics", "Web Servers (Nginx/Apache)", "Python/Go for Scripting"],
                        best_websites: [
                            { name: "Docker Curriculum", url: "https://docker-curriculum.com" }
                        ]
                    },
                    {
                        level: "Mid-Level Engineer",
                        experience: "3-6 Years",
                        salary_india: "₹14L - ₹28L",
                        role: "DevOps Engineer / SRE",
                        goal: "Orchestrate containers and manage infrastructure as code.",
                        skills: ["Kubernetes (K8s) Admin", "Terraform / Ansible", "Prometheus & Grafana (Monitoring)", "ELK Stack (Logging)", "CDN & Caching Strategy"],
                        best_websites: [
                            { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/home/" },
                            { name: "HashiCorp Learn", url: "https://developer.hashicorp.com" }
                        ]
                    },
                    {
                        level: "Senior Engineer",
                        experience: "6-10 Years",
                        salary_india: "₹28L - ₹55L",
                        role: "Senior DevOps / SRE",
                        goal: "Design high-availability systems and robust security pipelines.",
                        skills: ["Service Mesh (Istio/Linkerd)", "Cloud Security (DevSecOps)", "Database Reliability Engineering", "Cost Optimization (FinOps)", "Helm / Kustomize"],
                        best_websites: [
                            { name: "Google SRE Book", url: "https://sre.google/books/" }
                        ]
                    },
                    {
                        level: "Staff Engineer",
                        experience: "10-15 Years",
                        salary_india: "₹55L - ₹90L+",
                        role: "Staff Platform Engineer",
                        goal: "Build internal developer platforms (IDP) and improve developer experience.",
                        skills: ["Platform Engineering (Backstage)", "Multi-Cloud Architecting", "Chaos Engineering", "Zero Trust Security", "Capacity Planning"],
                        best_websites: [
                            { name: "Platform Engineering", url: "https://platformengineering.org" }
                        ]
                    },
                    {
                        level: "Principal Engineer",
                        experience: "15-20 Years",
                        salary_india: "₹90L - ₹1.8Cr+",
                        role: "Principal Infrastructure Architect",
                        goal: "Define infrastructure strategy for global scale and resilience.",
                        skills: ["Global Traffic Management", "Disaster Recovery Strategy", "Compliance (SOC2/HIPAA/GDPR)", "Hybrid Cloud Strategy", "Green Computing / Sustainability"],
                        best_websites: [
                            { name: "CNCF Landscape", url: "https://landscape.cncf.io" }
                        ]
                    },
                    {
                        level: "Distinguished Engineer",
                        experience: "20-30+ Years",
                        salary_india: "₹2Cr - ₹5Cr+",
                        role: "Head of Infrastructure / Distinguished Eng",
                        goal: "Lead reliable and scalable technology operations at an organizational level.",
                        skills: ["Operational Excellence Strategy", "Vendor Negotiation & Strategy", "Technical Risk Management", "Organizational Change Management", "Tech Stack Modernization Vision"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "hr",
                title: "Human Resources (HR)",
                description: "Managing the employee lifecycle, recruitment, culture, and organizational strategy.",
                levels: [
                    {
                        level: "Fresher / Trainee",
                        experience: "0-2 Years",
                        salary_india: "₹3L - ₹6L",
                        role: "HR Executive / Recruiter",
                        goal: "Learn recruitment basics, payroll processing, and employee onboarding.",
                        skills: ["Communication Skills", "LinkedIn Sourcing", "MS Excel / Google Sheets", "Basic Labor Laws", "Employee Relations"],
                        best_websites: [
                            { name: "SHRM", url: "https://www.shrm.org" },
                            { name: "LinkedIn Talent Blog", url: "https://www.linkedin.com/business/talent/blog" }
                        ]
                    },
                    {
                        level: "Junior to Mid-Level",
                        experience: "2-5 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "HR Generalist / Talent Acquisition Lead",
                        goal: "Manage end-to-end recruitment and handle employee grievances.",
                        skills: ["Tech Hiring (Parsing Resumes)", "HRIS Tools (Workday/BambooHR)", "Performance Management", "Employer Branding", "Compliance & Audit"],
                        best_websites: [
                            { name: "People Matters", url: "https://www.peoplematters.in" }
                        ]
                    },
                    {
                        level: "Senior HR",
                        experience: "5-10 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Senior HR Business Partner (HRBP)",
                        goal: "Align HR strategies with business goals and drive culture.",
                        skills: ["Strategic Workforce Planning", "Diversity & Inclusion (D&I)", "Conflict Resolution", "Compensation & Benefits (C&B) Design", "Leadership Coaching"],
                        best_websites: [
                            { name: "Harvard Business Review - HR", url: "https://hbr.org/topic/human-resource-management" }
                        ]
                    },
                    {
                        level: "Leadership",
                        experience: "10-15 Years",
                        salary_india: "₹25L - ₹50L+",
                        role: "Director of HR / Talent",
                        goal: "Lead HR for large divisions or entire mid-sized organizations.",
                        skills: ["Organizational Design", "Change Management", "M&A Integration", "Executive Compensation Strategy", "Global Mobility"],
                        best_websites: []
                    },
                    {
                        level: "Executive (CHRO/CPO)",
                        experience: "15-30+ Years",
                        salary_india: "₹60L - ₹2Cr+",
                        role: "Chief Human Resources Officer (CHRO)",
                        goal: "Define the people vision for the entire company at an executive board level.",
                        skills: ["Board Room Strategy", "Corporate Governance", "Succession Planning", "Crisis Management", "Employee Value Proposition (EVP) Vision"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "tech-support",
                title: "Tech Support / IT Operations",
                description: "Ensuring smooth IT operations, hardware/software troubleshooting, and user assistance.",
                levels: [
                    {
                        level: "L1 Support / Helpdesk",
                        experience: "0-2 Years",
                        salary_india: "₹2.5L - ₹5L",
                        role: "IT Support Technician",
                        goal: "Resolve basic tickets, password resets, and hardware setup.",
                        skills: ["Windows/Mac OS Troubleshooting", "Active Directory Basics", "Office 365 Admin", "Ticketing Systems (Jira/ServiceNow)", "Networking Basics (LAN/WiFi)"],
                        best_websites: [
                            { name: "Microsoft Learn", url: "https://learn.microsoft.com" }
                        ]
                    },
                    {
                        level: "L2 Support / Admin",
                        experience: "2-5 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "System Administrator",
                        goal: "Handle complex escalations, server maintenance, and asset management.",
                        skills: ["Windows Server Administration", "Linux Admin Basics", "MDM (Intune/Jamf)", "Scripting (Powershell/Bash)", "Virtualization (VMware/Hyper-V)"],
                        best_websites: [
                            { name: "Spiceworks Community", url: "https://community.spiceworks.com" }
                        ]
                    },
                    {
                        level: "L3 Support / Lead",
                        experience: "5-10 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Senior System Engineer / IT Lead",
                        goal: "Manage IT infrastructure projects and lead support teams.",
                        skills: ["Network Security (Firewalls/VPN)", "Cloud Administration (Azure/AWS IAM)", "Disaster Recovery Planning", "Vendor Management", "ITIL Framework"],
                        best_websites: [
                            { name: "ITIL Docs", url: "https://www.axelos.com/best-practice-solutions/itil" }
                        ]
                    },
                    {
                        level: "IT Management",
                        experience: "10-15 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "IT Manager / Service Delivery Manager",
                        goal: "Oversee internal IT budget, strategy, and service delivery.",
                        skills: ["IT Budgets & Procurement", "SLA Management", "Compliance (ISO 27001)", "Team Leadership", "ERP Management"],
                        best_websites: []
                    },
                    {
                        level: "Executive (CIO / IT Director)",
                        experience: "15-30+ Years",
                        salary_india: "₹50L - ₹1.5Cr+",
                        role: "CIO / VP of Information Technology",
                        goal: "Drive digital transformation and secure enterprise technology assets.",
                        skills: ["Enterprise Digital Strategy", "Cybersecurity Governance", "Business Continuity Planning", "Executive Stakeholder Mgmt", "Global IT Operations"],
                        best_websites: [
                            { name: "Gartner IT Insights", url: "https://www.gartner.com/en/information-technology" }
                        ]
                    }
                ]
            }
        ]
    }
};

export default roadmapData;
