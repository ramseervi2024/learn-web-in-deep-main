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
            },
            {
                id: "data-science",
                title: "Data Scientist / AI Engineer",
                description: "Extracting insights from data, building AI models, and data-driven decision making.",
                levels: [
                    {
                        level: "Analyst / Trainee",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Data Analyst / Junior DS",
                        goal: "Clean data, visualize trends, and perform basic statistical analysis.",
                        skills: ["Python/R", "SQL (Advanced)", "Excel/Tableau/PowerBI", "Statistics Basics", "Data Wrangling (Pandas/NumPy)"],
                        best_websites: [
                            { name: "Kaggle", url: "https://www.kaggle.com" },
                            { name: "DataCamp", url: "https://www.datacamp.com" }
                        ]
                    },
                    {
                        level: "Junior AI/ML Engineer",
                        experience: "2-4 Years",
                        salary_india: "₹10L - ₹18L",
                        role: "Machine Learning Engineer",
                        goal: "Build and potentialize supervised/unsupervised learning models.",
                        skills: ["Scikit-Learn", "TensorFlow / PyTorch", "Feature Engineering", "Model Deployment (Flask/FastAPI)", "Git & Version Control"],
                        best_websites: [
                            { name: "Fast.ai", url: "https://www.fast.ai" }
                        ]
                    },
                    {
                        level: "Senior Data Scientist",
                        experience: "4-8 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior Data Scientist",
                        goal: "Design complex experiments, causal inference, and reliable ML pipelines.",
                        skills: ["NLP / Computer Vision", "MLOps (MLflow/Kubeflow)", "Big Data (Spark/Hadoop)", "Bayesian Statistics", "A/B Testing Strategy"],
                        best_websites: [
                            { name: "Towards Data Science", url: "https://towardsdatascience.com" }
                        ]
                    },
                    {
                        level: "Staff AI Engineer",
                        experience: "8-12 Years",
                        salary_india: "₹35L - ₹65L",
                        role: "Staff AI Researcher / Engineer",
                        goal: "Lead AI strategy, architecture large scale data systems, and research new algorithms.",
                        skills: ["Generative AI (LLMs/RAG)", "Distributed Training", "AI Ethics & Fairness", "System Design for AI", "Technical Leadership"],
                        best_websites: [
                            { name: "OpenAI Research", url: "https://openai.com/research" }
                        ]
                    },
                    {
                        level: "Principal Data Scientist",
                        experience: "12-18 Years",
                        salary_india: "₹65L - ₹1.2Cr+",
                        role: "Principal Data Scientist",
                        goal: "Drive data culture across the organization and solve high-impact business problems.",
                        skills: ["Data Strategy & Governance", "Cross-Domain Analytics", "Patent & Research Publication", "Mentoring Senior DS", "ROI Analysis of AI"],
                        best_websites: []
                    },
                    {
                        level: "Chief Data Officer (CDO)",
                        experience: "18-30+ Years",
                        salary_india: "₹1.5Cr - ₹4Cr+",
                        role: "Chief Data / AI Officer",
                        goal: "Executive leadership of data usage, privacy, and AI innovation.",
                        skills: ["Data Privacy Law (GDPR/CCPA) Strategy", "Enterprise AI Transformation", "Executive Communication", "Vendor Management", "Global Data Architectures"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "product-manager",
                title: "Product Manager (PM)",
                description: "Defining product vision, strategy, and roadmap to deliver customer value.",
                levels: [
                    {
                        level: "APM",
                        experience: "0-2 Years",
                        salary_india: "₹8L - ₹15L",
                        role: "Associate Product Manager",
                        goal: "Support PMs, gather requirements, and manage backlog.",
                        skills: ["Agile/Scrum Basics", "User Stories Writing", "JIRA/Asana", "Data Analysis Basics", "Communication"],
                        best_websites: [
                            { name: "Mind the Product", url: "https://www.mindtheproduct.com" }
                        ]
                    },
                    {
                        level: "Product Manager",
                        experience: "2-5 Years",
                        salary_india: "₹15L - ₹30L",
                        role: "Product Manager",
                        goal: "Own a feature or small product, define metrics, and collaborate with engineering/design.",
                        skills: ["Product Roadmap Planning", "Metric Definition (KPIs/OKRs)", "Competitor Analysis", "Stakeholder Management", "UX Principles"],
                        best_websites: [
                            { name: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com" }
                        ]
                    },
                    {
                        level: "Senior PM",
                        experience: "5-8 Years",
                        salary_india: "₹30L - ₹55L",
                        role: "Senior Product Manager",
                        goal: "Manage complex products, mentor junior PMs, and drive growth.",
                        skills: ["Product Strategy", "Go-to-Market (GTM) Strategy", "Data-Driven Decision Making", "A/B Testing Mastery", "Customer Discovery Interviews"],
                        best_websites: [
                            { name: "Reforge", url: "https://www.reforge.com" }
                        ]
                    },
                    {
                        level: "Group / Principal PM",
                        experience: "8-12 Years",
                        salary_india: "₹55L - ₹90L",
                        role: "Group Product Manager",
                        goal: "Lead a group of PMs, own a product line, and align with company goals.",
                        skills: ["Portfolio Management", "People Management", "Financial Modeling", "Strategic Partnerships", "Cross-Functional Leadership"],
                        best_websites: [
                            { name: "SVPG - Silicon Valley Product Group", url: "https://svpg.com" }
                        ]
                    },
                    {
                        level: "Director of Product",
                        experience: "12-18 Years",
                        salary_india: "₹90L - ₹1.5Cr+",
                        role: "Director of Product",
                        goal: "Set product vision for a division, scale product org operations.",
                        skills: ["Organizational Design", "M&A Product Integration", "Executive Alignment", "Market Expansion Strategy", "Product Culture Building"],
                        best_websites: []
                    },
                    {
                        level: "CPO",
                        experience: "18-30+ Years",
                        salary_india: "₹2Cr - ₹5Cr+",
                        role: "Chief Product Officer",
                        goal: "Define company-wide product vision and innovation strategy.",
                        skills: ["Board Member Relations", "Company Vision Setting", "Global Product Strategy", "Investor Relations", "Brand Architecture"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "ui-ux",
                title: "UI/UX Designer",
                description: "Designing user interfaces and experiences that are intuitive, accessible, and beautiful.",
                levels: [
                    {
                        level: "Junior Designer",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Product Designer I",
                        goal: "Create basic wireframes, mockups, and prototypes.",
                        skills: ["Figma / Sketch", "Wireframing", "Basic Color Theory", "Typography", "Prototyping"],
                        best_websites: [
                            { name: "Nielsen Norman Group", url: "https://www.nngroup.com" },
                            { name: "Dribbble", url: "https://dribbble.com" }
                        ]
                    },
                    {
                        level: "Product Designer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Product Designer II",
                        goal: "Design end-to-end user flows and maintain design systems.",
                        skills: ["User Research Basics", "Interaction Design", "Design Systems Maintenance", "Usability Testing", "Handshake with Devs"],
                        best_websites: [
                            { name: "Laws of UX", url: "https://lawsofux.com" }
                        ]
                    },
                    {
                        level: "Senior Designer",
                        experience: "5-9 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior Product Designer",
                        goal: "Lead design projects, mentor juniors, and ensure consistency.",
                        skills: ["Design Strategy", "Accessibility (WCAG) Mastery", "Data-Driven Design", "Stakeholder Presentation", "Information Architecture"],
                        best_websites: []
                    },
                    {
                        level: "Staff / Principal Designer",
                        experience: "9-15 Years",
                        salary_india: "₹35L - ₹70L",
                        role: "Principal Designer",
                        goal: "Define design language, solve complex system problems.",
                        skills: ["Design Ops", "Cross-Platform Consistency Strategy", "Service Design", "Team Leadership", "Brand Integration"],
                        best_websites: []
                    },
                    {
                        level: "Head of Design / VP",
                        experience: "15-25+ Years",
                        salary_india: "₹70L - ₹2Cr+",
                        role: "VP of Design / CDO",
                        goal: "Lead the design organization and champion design thinking.",
                        skills: ["Design Culture Leadership", "Executive Strategy", "Global Brand Vision", "Organizational Structuring", "Innovation Labs"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "cybersecurity",
                title: "Cybersecurity Analyst",
                description: "Protecting systems, networks, and data from cyber threats.",
                levels: [
                    {
                        level: "Analyst / Trainee",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Security Analyst",
                        goal: "Monitor logs for incidents and understand security basics.",
                        skills: ["Networking Basics (TCP/IP)", "Linux/Windows Security", "SIEM Tools (Splunk Basics)", "Vulnerability Scanning", "Scripting (Python/Bash)"],
                        best_websites: [
                            { name: "Cybrary", url: "https://www.cybrary.it" },
                            { name: "OWASP", url: "https://owasp.org" }
                        ]
                    },
                    {
                        level: "Security Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Security Engineer / Pentester",
                        goal: "Implement security controls and perform penetration testing.",
                        skills: ["Penetration Testing (Kali Linux)", "Firewall Configuration", "Incident Response (IR)", "Identity Management (IAM)", "Cloud Security Basics"],
                        best_websites: [
                            { name: "Hack The Box", url: "https://www.hackthebox.com" }
                        ]
                    },
                    {
                        level: "Senior Security",
                        experience: "5-9 Years",
                        salary_india: "₹18L - ₹40L",
                        role: "Senior Security Consultant",
                        goal: "Architect secure systems and lead incident handling.",
                        skills: ["Threat Hunting", "Forensics", "Compliance (ISO 27001/SOC2)", "Application Security (AppSec)", "Zero Trust Architecture"],
                        best_websites: []
                    },
                    {
                        level: "Principal Security",
                        experience: "9-15 Years",
                        salary_india: "₹40L - ₹80L",
                        role: "Principal Security Architect",
                        goal: "Design enterprise-wide security posture and policy.",
                        skills: ["Risk Management", "Security Governance", "Cryptography Implementation", "DevSecOps Strategy", "Cloud Security Architecture"],
                        best_websites: []
                    },
                    {
                        level: "CISO",
                        experience: "15-25+ Years",
                        salary_india: "₹80L - ₹2.5Cr+",
                        role: "Chief Information Security Officer",
                        goal: "Executive responsibility for organization's information security.",
                        skills: ["Board & Executive Advisory", "Global Risk Compliance", "Crisis Communication", "Budget Management", "Security Strategy for M&A"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "qa-automation",
                title: "QA / Automation Engineer",
                description: "Ensuring software quality through manual and automated testing.",
                levels: [
                    {
                        level: "Junior QA",
                        experience: "0-2 Years",
                        salary_india: "₹3L - ₹6L",
                        role: "QA Engineer",
                        goal: "Execute manual test cases and report bugs.",
                        skills: ["Manual Testing", "Bug Reporting (Jira)", "SDLC Basics", "SQL Basics", "Test Case Writing"],
                        best_websites: [
                            { name: "Ministry of Testing", url: "https://www.ministryoftesting.com" }
                        ]
                    },
                    {
                        level: "Automation Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹6L - ₹14L",
                        role: "SDET I (Software Development Engineer in Test)",
                        goal: "Write automated scripts to replace manual testing.",
                        skills: ["Selenium / Cypress / Playwright", "Java/Python/JS", "API Testing (Postman/RestAssured)", "CI Integration", "Basic Performance Testing"],
                        best_websites: [
                            { name: "TestAutomationUniversity", url: "https://testautomationuniversity.applitools.com" }
                        ]
                    },
                    {
                        level: "Senior SDET",
                        experience: "5-9 Years",
                        salary_india: "₹14L - ₹30L",
                        role: "Senior SDET",
                        goal: "Design automation frameworks and comprehensive test strategies.",
                        skills: ["Framework Design", "Performance Testing (JMeter/K6)", "Mobile Automation (Appium)", "Docker for Testing", "Security Testing Basics"],
                        best_websites: []
                    },
                    {
                        level: "QA Lead / Manager",
                        experience: "9-14 Years",
                        salary_india: "₹30L - ₹55L",
                        role: "QA Lead / Test Manager",
                        goal: "Manage QA teams, define quality metrics, and release criteria.",
                        skills: ["Test Strategy", "Team Management", "Release Management", "Quality Metrics Analysis", "Shift-Left Testing Strategy"],
                        best_websites: []
                    },
                    {
                        level: "Head of QA",
                        experience: "14-25+ Years",
                        salary_india: "₹55L - ₹1.5Cr+",
                        role: "Director of Quality Engineering",
                        goal: "Drive quality culture and engineering excellence across the org.",
                        skills: ["Quality Org Strategy", "Tooling Budget & Vendor Mgmt", "Process Optimization (Six Sigma)", "Cross-Functional Integration", "Executive Reporting"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "data-engineering",
                title: "Data Engineer",
                description: "Building resilient data pipelines, warehouses, and optimizing data flow for organizations.",
                levels: [
                    {
                        level: "Junior Data Engineer",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Junior Data Engineer",
                        goal: "Build simple ETL pipelines and understand data schemas.",
                        skills: ["SQL (Advanced)", "Python", "ETL Basics", "Hadoop/Hive Basics", "Git"],
                        best_websites: [
                            { name: "Data Engineering Wiki", url: "https://dataengineering.wiki" }
                        ]
                    },
                    {
                        level: "Data Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Data Engineer",
                        goal: "Design scalable data models and optimize query performance.",
                        skills: ["Spark / Flink", "Airflow / Prefect", "Data Warehousing (Snowflake/BigQuery)", "NoSQL (Cassandra/MongoDB)", "Cloud Data Services"],
                        best_websites: [
                            { name: "Start Data Engineering", url: "https://www.startdataengineering.com" }
                        ]
                    },
                    {
                        level: "Senior Data Engineer",
                        experience: "5-9 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "Senior Data Engineer",
                        goal: "Architect large-scale data platforms and ensure data quality.",
                        skills: ["Data Lakehouse Architecture", "Stream Processing (Kafka)", "dbt (Data Build Tool)", "Cost Optimization", "Data Governance"],
                        best_websites: []
                    },
                    {
                        level: "Staff Data Engineer",
                        experience: "9-15 Years",
                        salary_india: "₹40L - ₹75L",
                        role: "Staff Data Architect",
                        goal: "Define data infrastructure strategy for the entire organization.",
                        skills: ["Mesh Architecture", "Cross-Team Data Strategy", "Infrastructure as Code for Data", "Mentoring", "Vendor Evaluation"],
                        best_websites: []
                    },
                    {
                        level: "Principal / Head of Data Eng",
                        experience: "15-25+ Years",
                        salary_india: "₹75L - ₹2Cr+",
                        role: "Principal Data Architect / VP",
                        goal: "Lead the data engineering division and align with business goals.",
                        skills: ["Enterprise Data Strategy", "Global Compliance", "Executive Leadership", "M&A Data Integration", "Innovation in Data Ops"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "cloud-architect",
                title: "Cloud Solutions Architect",
                description: "Designing secure, scalable, and cost-effective cloud infrastructure solutions.",
                levels: [
                    {
                        level: "Junior Cloud Eng",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Cloud Support Associate",
                        goal: "Understand cloud services and assist in migrations.",
                        skills: ["AWS/Azure Fundamentals", "Linux Administration", "Networking Basics", "Scripting (Python/Bash)", "Basic Terraform"],
                        best_websites: [
                            { name: "AWS Skill Builder", url: "https://explore.skillbuilder.aws" }
                        ]
                    },
                    {
                        level: "Cloud Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Cloud Engineer",
                        goal: "Deploy and manage cloud resources using IaC.",
                        skills: ["Terraform / CloudFormation", "Docker & Kubernetes Basics", "CI/CD for Cloud", "Serverless (Lambda/Functions)", "Cloud Monitoring"],
                        best_websites: [
                            { name: "A Cloud Guru", url: "https://acloudguru.com" }
                        ]
                    },
                    {
                        level: "Solutions Architect",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹40L",
                        role: "Solutions Architect",
                        goal: "Design end-to-end cloud solutions for clients/internal teams.",
                        skills: ["Well-Architected Framework", "Database Migration Strategy", "Hybrid Cloud Design", "Cost Management (FinOps)", "Security Architecture"],
                        best_websites: []
                    },
                    {
                        level: "Senior Architect",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹80L",
                        role: "Senior Cloud Architect",
                        goal: "Solve complex architectural challenges for enterprise scale.",
                        skills: ["Multi-Cloud Strategy", "Enterprise Integration Patterns", "Disaster Recovery @ Scale", "Compliance (HIPAA/FedRAMP)", "Executive Consulting"],
                        best_websites: []
                    },
                    {
                        level: "Chief Architect",
                        experience: "15-25+ Years",
                        salary_india: "₹80L - ₹2.5Cr+",
                        role: "Chief Architect / CTO",
                        goal: "Define the technological vision and cloud strategy for the organization.",
                        skills: ["Digital Transformation Strategy", "Vendor Negotiation", "Technology Radar Management", "Organizational Change Mgmt", "Global Architecture Governance"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "digital-marketing",
                title: "Digital Marketing Manager",
                description: "Driving brand awareness, lead generation, and customer acquisition through digital channels.",
                levels: [
                    {
                        level: "Marketing Executive",
                        experience: "0-2 Years",
                        salary_india: "₹3L - ₹6L",
                        role: "Digital Marketing Executive",
                        goal: "Manage social media and execute basic campaigns.",
                        skills: ["Social Media Mgmt", "Content Writing Basics", "SEO Basics", "Google Analytics Basics", "Canva Design"],
                        best_websites: [
                            { name: "HubSpot Academy", url: "https://academy.hubspot.com" }
                        ]
                    },
                    {
                        level: "Specialist",
                        experience: "2-5 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "SEO/SEM Specialist",
                        goal: "Optimize search rankings and manage paid ad campaigns.",
                        skills: ["Technical SEO", "Google Ads / Meta Ads", "Email Marketing Automation", "Conversion Rate Optimization (CRO)", "Copywriting"],
                        best_websites: [
                            { name: "Moz Blog", url: "https://moz.com/blog" }
                        ]
                    },
                    {
                        level: "Manager",
                        experience: "5-9 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Digital Marketing Manager",
                        goal: "Plan comprehensive strategies and manage budgets.",
                        skills: ["Marketing Strategy", "Budget Allocation", "Team Management", "CRM Management (HubSpot/Salesforce)", "Performance Analytics"],
                        best_websites: []
                    },
                    {
                        level: "Head of Marketing",
                        experience: "9-15 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Head of Digital / Growth",
                        goal: "Lead the marketing function and drive revenue growth.",
                        skills: ["Growth Hacking Strategy", "Brand Positioning", "Revenue Operations (RevOps)", "Cross-Channel Integration", "Public Relations (PR)"],
                        best_websites: []
                    },
                    {
                        level: "CMO",
                        experience: "15-25+ Years",
                        salary_india: "₹50L - ₹2Cr+",
                        role: "Chief Marketing Officer (CMO)",
                        goal: "Own the brand vision and customer acquisition strategy at board level.",
                        skills: ["Market Expansion Strategy", "Investor Relations", "Corporate Brand Identity", "Global Marketing Ops", "Executive Leadership"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "game-dev",
                title: "Game Developer",
                description: "Creating interactive 2D/3D games for mobile, PC, and consoles.",
                levels: [
                    {
                        level: "Junior Dev",
                        experience: "0-2 Years",
                        salary_india: "₹3L - ₹7L",
                        role: "Junior Game Programmer",
                        goal: "Implement game mechanics and UI.",
                        skills: ["Unity / C# Basics", "Unreal / C++ Basics", "3D Math (Vectors/Matrices)", "Git for Games", "Basic Physics"],
                        best_websites: [
                            { name: "Unity Learn", url: "https://learn.unity.com" }
                        ]
                    },
                    {
                        level: "Game Developer",
                        experience: "2-5 Years",
                        salary_india: "₹7L - ₹15L",
                        role: "Game Developer",
                        goal: "Build complex systems and optimize game performance.",
                        skills: ["Advanced C#/C++", "Shader Programming (HLSL/GLSL)", "Networked Multiplayer (Photon/Mirror)", "AI Behavior Trees", "Asset Pipelines"],
                        best_websites: [
                            { name: "Unreal Online Learning", url: "https://www.unrealengine.com/en-US/online-learning" }
                        ]
                    },
                    {
                        level: "Senior Dev",
                        experience: "5-10 Years",
                        salary_india: "₹15L - ₹35L",
                        role: "Senior Game Engineer",
                        goal: "Architect game systems and mentor junior devs.",
                        skills: ["Engine Architecture", "Graphics Programming (DirectX/Vulkan)", "Memory Optimization", "Console Development SDKs", "Tool Development"],
                        best_websites: []
                    },
                    {
                        level: "Lead / Tech Director",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹65L",
                        role: "Technical Director",
                        goal: "Lead the technical vision for AAA titles or studio projects.",
                        skills: ["Render Pipeline Architecture", "Technical Art Pipeline", "Project Estimation", "Team Leadership", "Cross-Platform Strategy"],
                        best_websites: []
                    },
                    {
                        level: "Principal / Studio Head",
                        experience: "15-25+ Years",
                        salary_india: "₹65L - ₹2Cr+",
                        role: "Studio Head / CTO",
                        goal: "Manage studio-wide technical direction and business strategy.",
                        skills: ["IP Development Strategy", "Publisher Relations", "Studio Operations", "Mergers & Acquisitions", "Industry Innovation Vision"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "blockchain",
                title: "Blockchain / Web3 Developer",
                description: "Building decentralized applications (dApps) and smart contracts.",
                levels: [
                    {
                        level: "Junior Dev",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹12L",
                        role: "Junior Smart Contract Dev",
                        goal: "Write and test basic smart contracts.",
                        skills: ["Solidity Basics", "JavaScript/TypeScript", "Ethereum Basics", "Web3.js / Ethers.js", "Remix IDE"],
                        best_websites: [
                            { name: "CryptoZombies", url: "https://cryptozombies.io" }
                        ]
                    },
                    {
                        level: "Web3 Developer",
                        experience: "2-5 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Web3 Engineer",
                        goal: "Build secure dApps and integrate wallets.",
                        skills: ["Hardhat / Foundry", "React.js for Web3", "IPFS / Arweave", "Gas Optimization", "Unit Testing Contracts"],
                        best_websites: [
                            { name: "Buildspace", url: "https://buildspace.so" }
                        ]
                    },
                    {
                        level: "Senior Web3 Dev",
                        experience: "5-9 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Senior Blockchain Engineer",
                        goal: "Architect complex DeFi protocols and ensure security.",
                        skills: ["DeFi Protocals (AMM/Lending)", "Layer 2 Scaling (Optimism/Arbitrum)", "Rust (Solana/Polkadot)", "Bridge Architecture", "Security Auditing Basics"],
                        best_websites: []
                    },
                    {
                        level: "Staff / Protocol Eng",
                        experience: "9-14 Years",
                        salary_india: "₹50L - ₹1Cr+",
                        role: "Protocol Architect",
                        goal: "Design core protocol logic and consensus mechanisms.",
                        skills: ["Zero Knowledge Proofs (ZK)", "Cryptography Deep Dive", "Economic Game Theory", "Virtual Machine Implementation (EVM)", "Governance Models"],
                        best_websites: []
                    },
                    {
                        level: "Principal / CTO",
                        experience: "14-25+ Years",
                        salary_india: "₹1Cr - ₹5Cr+",
                        role: "CTO / Founder of Web3 Protocol",
                        goal: "Lead the technical vision for major blockchain ecosystems.",
                        skills: ["Tokenomics Strategy", "Ecosystem Growth", "Regulatory Compliance Tech", "Global Community Leadership", "DAO Governance Architecture"],
                        best_websites: []
                    }
                ]
            }
        ]
    }
};

export default roadmapData;
