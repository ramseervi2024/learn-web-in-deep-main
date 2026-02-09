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
            },
            {
                id: "project-manager",
                title: "Technical Project Manager (TPM)",
                description: "Managing project timelines, resources, and successful delivery of technical initiatives.",
                levels: [
                    {
                        level: "Project Coordinator",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Junior Project Coordinator",
                        goal: "Assist PMs with scheduling, meeting notes, and tracking tasks.",
                        skills: ["JIRA Basics", "Gantt Charts", "Communication", "Excel / Google Sheets", "Meeting Facilitation"],
                        best_websites: [
                            { name: "Project Management Institute (PMI)", url: "https://www.pmi.org" }
                        ]
                    },
                    {
                        level: "Project Manager",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Project Manager / Scrum Master",
                        goal: "Lead agile sprints, remove blockers, and ensure on-time delivery.",
                        skills: ["Agile/Scrum", "Risk Management", "Stakeholder Communication", "Resource Allocation", "Confluence"],
                        best_websites: [
                            { name: "Scrum.org", url: "https://www.scrum.org" }
                        ]
                    },
                    {
                        level: "Senior TPM",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹40L",
                        role: "Senior Technical Program Manager",
                        goal: "Manage complex cross-functional programs and technical dependencies.",
                        skills: ["Program Management", "Systems Thinking", "Budget Management", "Vendor Management", "Technical Architecture Basics"],
                        best_websites: []
                    },
                    {
                        level: "Principal / Director",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹80L",
                        role: "Director of Program Management",
                        goal: "Oversee multiple programs and align execution with business strategy.",
                        skills: ["Portfolio Management", "Strategic Planning", "Change Management", "Organizational Leadership", "Process Optimization"],
                        best_websites: []
                    },
                    {
                        level: "VP / Head of PMO",
                        experience: "15-25+ Years",
                        salary_india: "₹80L - ₹2Cr+",
                        role: "VP of Technical Operations / PMO",
                        goal: "Build the organization's delivery capability and operational excellence.",
                        skills: ["Operational Strategy", "Executive Reporting", "Global Delivery Models", "M&A Integration", "Culture of Execution"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "technical-writer",
                title: "Technical Writer / Content Strategist",
                description: "Creating clear, concise, and helpful documentation for users and developers.",
                levels: [
                    {
                        level: "Junior Writer",
                        experience: "0-2 Years",
                        salary_india: "₹3L - ₹7L",
                        role: "Junior Technical Writer",
                        goal: "Write basic guides, release notes, and edit content.",
                        skills: ["Technical Writing Basics", "Markdown", "Grammar & Style Guides", "Git Basics", "Screen Capture Tools"],
                        best_websites: [
                            { name: "Write the Docs", url: "https://www.writethedocs.org" }
                        ]
                    },
                    {
                        level: "Technical Writer",
                        experience: "2-5 Years",
                        salary_india: "₹7L - ₹15L",
                        role: "Technical Writer",
                        goal: "Create comprehensive API docs, user manuals, and knowledge bases.",
                        skills: ["API Documentation (Swagger/OpenAPI)", "Information Architecture", "Content Management Systems (CMS)", "DITA / XML", "User Research for Docs"],
                        best_websites: [
                            { name: "Google Tech Writing", url: "https://developers.google.com/tech-writing" }
                        ]
                    },
                    {
                        level: "Senior Writer",
                        experience: "5-10 Years",
                        salary_india: "₹15L - ₹30L",
                        role: "Senior Content Strategist",
                        goal: "Define documentation strategy and manage content lifecycles.",
                        skills: ["Content Strategy", "Docs-as-Code", "Localization (L10n) Mgmt", "Onboarding Experience", "Mentoring Junior Writers"],
                        best_websites: []
                    },
                    {
                        level: "Lead / Manager",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹60L",
                        role: "Documentation Manager",
                        goal: "Lead a team of writers and integrate docs into product development.",
                        skills: ["Team Management", "Toolchain Architecture", "Knowledge Management (KM)", "Cross-Functional Leadership", "Budgeting for Content"],
                        best_websites: []
                    },
                    {
                        level: "Head of Docs / Knowledge",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.5Cr+",
                        role: "Director of Information Experience",
                        goal: "Transform documentation into a competitive advantage and strategic asset.",
                        skills: ["Learning & Development Strategy", "Enterprise Knowledge Strategy", "Customer Experience (CX) Alignment", "AI for Documentation", "Global Content Operations"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "tech-sales",
                title: "Tech Sales / Business Development",
                description: "Driving revenue growth by selling technical products and solutions.",
                levels: [
                    {
                        level: "SDR / BDR",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L (+Commissions)",
                        role: "Sales Development Rep",
                        goal: "Generate leads, cold call/email, and qualify prospects.",
                        skills: ["Cold Calling", "Email Outreach", "CRM Basics (Salesforce)", "Communication", "Resilience"],
                        best_websites: [
                            { name: "Sales Hacker", url: "https://www.saleshacker.com" }
                        ]
                    },
                    {
                        level: "Account Executive (SMB)",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹20L (+Commissions)",
                        role: "Account Executive",
                        goal: "Close deals with small-to-medium businesses and manage pipeline.",
                        skills: ["Consultative Selling", "Negotiation", "Demo Skills", "Pipeline Management", "Objection Handling"],
                        best_websites: [
                            { name: "Gong.io Blog", url: "https://www.gong.io/blog" }
                        ]
                    },
                    {
                        level: "Enterprise AE",
                        experience: "5-10 Years",
                        salary_india: "₹20L - ₹50L (+Commissions)",
                        role: "Enterprise Account Executive",
                        goal: "Manage complex sales cycles with large enterprises.",
                        skills: ["Enterprise Sales Methodology (MEDDIC)", "Executive Relationships", "Complex Negotiation", "Territory Planning", "Partner Selling"],
                        best_websites: []
                    },
                    {
                        level: "Sales Director",
                        experience: "10-15 Years",
                        salary_india: "₹50L - ₹1.2Cr (+Commissions)",
                        role: "Director of Sales",
                        goal: "Lead a sales team to hit quarterly and annual revenue targets.",
                        skills: ["Sales Leadership", "Forecast Accuracy", "Hiring & Coaching", "Comp Plan Design", "Sales Operations"],
                        best_websites: []
                    },
                    {
                        level: "VP Sales / CRO",
                        experience: "15-25+ Years",
                        salary_india: "₹1.2Cr - ₹5Cr+",
                        role: "Chief Revenue Officer (CRO)",
                        goal: "Drive overall revenue strategy, aligning marketing, sales, and success.",
                        skills: ["Revenue Strategy", "Board Advisory", "Global Market Expansion", "Go-to-Market Architecture", "M&A Revenue Integration"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "customer-success",
                title: "Customer Success Manager (CSM)",
                description: "Ensuring customer satisfaction, retention, and growth for tech products.",
                levels: [
                    {
                        level: "Associate CSM",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Customer Success Associate",
                        goal: "Onboard new customers and answer product queries.",
                        skills: ["Customer Empathy", "Product Knowledge", "Communication", "Tech Troubleshooting Basics", "Ticket Management"],
                        best_websites: [
                            { name: "Gainsight Blog", url: "https://www.gainsight.com/blog" }
                        ]
                    },
                    {
                        level: "CSM",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Customer Success Manager",
                        goal: "Drive adoption, prevent churn, and identify upsell opportunities.",
                        skills: ["Account Management", "Health Score Analysis", "Quarterly Business Reviews (QBR)", "Churn Prevention", "Cross-Selling"],
                        best_websites: [
                            { name: "Totango Blog", url: "https://www.totango.com/blog" }
                        ]
                    },
                    {
                        level: "Senior CSM",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior CSM / Strategic CSM",
                        goal: "Manage high-value accounts and drive strategic value.",
                        skills: ["Strategic Advisory", "Executive Trust Building", "Renewal Negotiation", "Product Feedback Loop", "Customer Advocacy"],
                        best_websites: []
                    },
                    {
                        level: "Director of CS",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹70L",
                        role: "Director of Customer Success",
                        goal: "Scale the CS team and define retention strategies.",
                        skills: ["CS Operations", "Net Revenue Retention (NRR) Strategy", "Team Scaling", "Customer Journey Mapping", "Crisis Management"],
                        best_websites: []
                    },
                    {
                        level: "VP / CCO",
                        experience: "15-25+ Years",
                        salary_india: "₹70L - ₹2Cr+",
                        role: "Chief Customer Officer (CCO)",
                        goal: "Champion the customer voice at the executive level.",
                        skills: ["Customer-Centric Culture", "Global Support Strategy", "Executive Strategy", "Loyalty Program Design", "Service Design"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "embedded-iot",
                title: "Embedded Systems / IoT Engineer",
                description: "Developing software for hardware, firmware, and connected devices.",
                levels: [
                    {
                        level: "Junior Engineer",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Embedded Software Trainee",
                        goal: "Write basic C/C++ code for microcontrollers.",
                        skills: ["C/C++", "Microcontrollers (Arduino/STM32)", "Electronics Basics", "RTOS Concepts", "Debugging Hardware"],
                        best_websites: [
                            { name: "Embedded.com", url: "https://www.embedded.com" }
                        ]
                    },
                    {
                        level: "Embedded Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Firmware Engineer",
                        goal: "Develop drivers, handle interrupts, and interface with sensors.",
                        skills: ["ARM Architecture", "Device Drivers (I2C/SPI/UART)", "FreeRTOS / Zephyr", "PCB Design Basics", "Low Power Optimization"],
                        best_websites: [
                            { name: "Adafruit Learning System", url: "https://learn.adafruit.com" }
                        ]
                    },
                    {
                        level: "Senior Engineer",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹40L",
                        role: "Senior Embedded Engineer",
                        goal: "Architect detailed firmware systems and ensure safety/reliability.",
                        skills: ["Linux Kernel Development (Yocto)", "Safety Critical Systems (MISRA C)", "IoT Protocols (MQTT/CoAP)", "OTA Update Architecture", "Security (TrustZone)"],
                        best_websites: []
                    },
                    {
                        level: "Principal Engineer",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹80L",
                        role: "Principal IoT Architect",
                        goal: "Design end-to-end IoT solutions from device to cloud.",
                        skills: ["Edge Computing", "Hardware/Software Co-Design", "Wireless Protocols (BLE/Zigbee/LoRa)", "System on Chip (SoC) Architecture", "Manufacturing Support"],
                        best_websites: []
                    },
                    {
                        level: "Chief Engineer / CTO",
                        experience: "15-25+ Years",
                        salary_india: "₹80L - ₹2Cr+",
                        role: "CTO of Hardware / IoT",
                        goal: "Lead hardware innovation and product strategy.",
                        skills: ["Hardware Strategy", "Supply Chain Mgmt (Chipsets)", "Global Compliance (FCC/CE)", "R&D Leadership", "Patent Portfolio Mgmt"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "salesforce",
                title: "Salesforce / CRM Developer",
                description: "Building business applications using the Salesforce platform and Apex.",
                levels: [
                    {
                        level: "Junior Developer",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Salesforce Administrator / Junior Dev",
                        goal: "Configure Salesforce orgs and write basic Apex triggers.",
                        skills: ["Salesforce Admin (ADM 201)", "Apex Basics", "Visualforce / Lightning Basics", "SOQL / SOSL", "Process Builder"],
                        best_websites: [
                            { name: "Salesforce Trailhead", url: "https://trailhead.salesforce.com" }
                        ]
                    },
                    {
                        level: "Salesforce Developer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Salesforce Developer",
                        goal: "Build custom Lightning Web Components (LWC) and complex integrations.",
                        skills: ["Lightning Web Components (LWC)", "Apex Design Patterns", "Salesforce APIs (REST/SOAP)", "CI/CD for Salesforce (SFDX)", "Platform Developer I Cert"],
                        best_websites: [
                            { name: "Salesforce Ben", url: "https://www.salesforceben.com" }
                        ]
                    },
                    {
                        level: "Senior Developer",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior Salesforce Consultant",
                        goal: "Architect scalable Salesforce solutions and manage deployments.",
                        skills: ["System Architecture", "Integration Patterns", "Data Migration Strategy", "Platform Developer II Cert", "Service/Sales Cloud Consultant"],
                        best_websites: []
                    },
                    {
                        level: "Technical Architect",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹70L",
                        role: "Technical Architect (CTA Journey)",
                        goal: "Design enterprise-grade multi-cloud CRM architectures.",
                        skills: ["Identity & Access Mgmt", "Large Data Volumes (LDV)", "Governance Limits Mastery", "Multi-Org Strategy", "CTA Preparation"],
                        best_websites: []
                    },
                    {
                        level: "Principal Architect",
                        experience: "15-25+ Years",
                        salary_india: "₹70L - ₹2Cr+",
                        role: "Principal Enterprise Architect",
                        goal: "Lead digital transformation strategy across the enterprise ecosystem.",
                        skills: ["Enterprise Integration Strategy", "C-Level Advisory", "Global Rollout Strategy", "Platform Governance", "Innovation Roadmap"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "dba",
                title: "Database Administrator (DBA)",
                description: "Managing, securing, and optimizing database performance.",
                levels: [
                    {
                        level: "Junior DBA",
                        experience: "0-2 Years",
                        salary_india: "₹3L - ₹7L",
                        role: "Junior DBA",
                        goal: "Monitor database health and perform backups.",
                        skills: ["SQL Fundamentals", "Backup & Recovery Basics", "Linux Shell", "Database Installation", "Basic Security"],
                        best_websites: [
                            { name: "Oracle Base", url: "https://oracle-base.com" },
                            { name: "SQL Server Central", url: "https://www.sqlservercentral.com" }
                        ]
                    },
                    {
                        level: "DBA",
                        experience: "2-5 Years",
                        salary_india: "₹7L - ₹15L",
                        role: "Database Administrator",
                        goal: "Optimize queries, manage users, and handle failovers.",
                        skills: ["Performance Tuning (Indexing)", "High Availability (clustering)", "Replication Setup", "Patch Management", "Scripting (Bash/Powershell)"],
                        best_websites: [
                            { name: "Percona Blog", url: "https://www.percona.com/blog" }
                        ]
                    },
                    {
                        level: "Senior DBA",
                        experience: "5-10 Years",
                        salary_india: "₹15L - ₹30L",
                        role: "Senior Database Engineer",
                        goal: "Design database schemas for high performance and scale.",
                        skills: ["Schema Design", "Cloud Databases (RDS/CloudSQL)", "NoSQL Administration", "Capacity Planning", "Disaster Recovery Testing"],
                        best_websites: []
                    },
                    {
                        level: "Principal DBA",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹60L",
                        role: "Principal Database Architect",
                        goal: "Architect multi-region data layers and polyglot persistence.",
                        skills: ["Sharding Strategy", "NewSQL", "Database Reliability Engineering", "Compliance (GDPR/SOX)", "Cost Optimization"],
                        best_websites: []
                    },
                    {
                        level: "Head of Data Ops",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.5Cr+",
                        role: "Head of Data Infrastructure",
                        goal: "Lead the data platform strategy for the entire organization.",
                        skills: ["Data Strategy", "Vendor Management", "Global Data Compliance", "Team Leadership", "Infrastructure Future-Proofing"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "network-engineer",
                title: "Network Engineer",
                description: "Designing, implementing, and managing computer networks.",
                levels: [
                    {
                        level: "Junior Engineer",
                        experience: "0-2 Years",
                        salary_india: "₹3L - ₹6L",
                        role: "Network Associate / NOC Engineer",
                        goal: "Monitor network traffic and troubleshoot connectivity issues.",
                        skills: ["CCNA Basics", "IP Addressing (Subnetting)", "OSI Model", "Routing & Switching Basics", "Cabling Standards"],
                        best_websites: [
                            { name: "Cisco Learning Network", url: "https://learningnetwork.cisco.com" }
                        ]
                    },
                    {
                        level: "Network Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "Network Engineer",
                        goal: "Configure routers/switches and manage VLANs.",
                        skills: ["Routing Protocols (OSPF/EIGRP)", "VLAN/Trunking", "Firewall Basics (ASA/Palo Alto)", "VPN Configuration", "Wireshark Analysis"],
                        best_websites: [
                            { name: "Network Lessons", url: "https://networklessons.com" }
                        ]
                    },
                    {
                        level: "Senior Engineer",
                        experience: "5-10 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Senior Network Engineer",
                        goal: "Design complex networks and implement BGP.",
                        skills: ["BGP", "MPLS", "SD-WAN", "Network Automation (Python/Ansible)", "Load Balancing (F5/Citrix)"],
                        best_websites: []
                    },
                    {
                        level: "Network Architect",
                        experience: "10-15 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Principal Network Architect",
                        goal: "Architect data center and cloud connectivity solutions.",
                        skills: ["Data Center Architecture (Spine-Leaf)", "Hybrid Cloud Networking (Direct Connect)", "Zero Trust Networking", "Network Security Architecture", "CCIE Level Knowledge"],
                        best_websites: []
                    },
                    {
                        level: "Head of Networking",
                        experience: "15-25+ Years",
                        salary_india: "₹50L - ₹1.2Cr+",
                        role: "Head of Network Infrastructure",
                        goal: "Oversee global network strategy and operations.",
                        skills: ["Global WAN Strategy", "Vendor Negotiation (ISPs/Hardware)", "Strategic Planning", "Operational Excellence", "Next-Gen Networking (6G/Quantum)"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "business-analyst",
                title: "Business Analyst (BA)",
                description: "Bridging the gap between IT and the business using data analytics.",
                levels: [
                    {
                        level: "Junior BA",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Junior Business Analyst",
                        goal: "Gather requirements and document processes.",
                        skills: ["Documentation", "Communication", "SQL Basics", "Excel (Advanced)", "Process Mapping (Flowcharts)"],
                        best_websites: [
                            { name: "IIBA", url: "https://www.iiba.org" }
                        ]
                    },
                    {
                        level: "Business Analyst",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹16L",
                        role: "Business Analyst",
                        goal: "Analyze business needs and propose technical solutions.",
                        skills: ["Requirements Elicitation", "UML Modeling", "User Acceptance Testing (UAT)", "Data Visualization (Tableau/PowerBI)", "Agile Methodologies"],
                        best_websites: [
                            { name: "Modern Analyst", url: "https://www.modernanalyst.com" }
                        ]
                    },
                    {
                        level: "Senior BA",
                        experience: "5-10 Years",
                        salary_india: "₹16L - ₹30L",
                        role: "Senior Business Analyst",
                        goal: "Lead requirements gathering for major initiatives.",
                        skills: ["Gap Analysis", "Business Process Re-engineering (BPR)", "Stakeholder Management", "ROI Analysis", "System Integration knowledge"],
                        best_websites: []
                    },
                    {
                        level: "Lead BA / Product Owner",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹50L",
                        role: "Lead Business Analyst",
                        goal: "Manage a team of BAs and own product backlogs.",
                        skills: ["Product Ownership", "Strategic Analysis", "Change Management", "Team Leadership", "Domain Expertise (Finance/Healthcare/etc)"],
                        best_websites: []
                    },
                    {
                        level: "Director of Business Systems",
                        experience: "15-25+ Years",
                        salary_india: "₹50L - ₹1.2Cr+",
                        role: "Director of Business Analysis / Systems",
                        goal: "Align IT systems with long-term business strategy.",
                        skills: ["Enterprise Architecture Alignment", "Business Transformation", "Executive Strategy", "Global Process Standardization", "Innovation Mgmt"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "dev-rel",
                title: "Developer Relations (DevRel)",
                description: "Building relationships with the developer community and advocating for their needs.",
                levels: [
                    {
                        level: "Junior Dev Advocate",
                        experience: "0-2 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "Community Manager",
                        goal: "Engage with the community and manage social media channels.",
                        skills: ["Technical Writing/Blogging", "Social Media Management", "Event Coordination", "Basic Coding Skills", "Empathy"],
                        best_websites: [
                            { name: "DevRelWeekly", url: "https://devrelweekly.com" }
                        ]
                    },
                    {
                        level: "Developer Advocate",
                        experience: "2-5 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Developer Advocate",
                        goal: "Create code samples, speak at conferences, and gather feedback.",
                        skills: ["Public Speaking", "Content Creation (Video/Blog)", "Demo Building", "Community Growth Strategy", "SDK/API Feedback"],
                        best_websites: [
                            { name: "Dev.to", url: "https://dev.to" }
                        ]
                    },
                    {
                        level: "Senior Advocate",
                        experience: "5-10 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Senior Developer Evangelist",
                        goal: "Drive strategic adoption of the platform.",
                        skills: ["Strategic Partnerships", "Program Management (Ambassador Programs)", "Metrics & Analytics", "Product Strategy Influence", "Mentoring"],
                        best_websites: []
                    },
                    {
                        level: "Head of DevRel",
                        experience: "10-15 Years",
                        salary_india: "₹50L - ₹90L",
                        role: "Director of Developer Relations",
                        goal: "Lead the DevRel team and align with marketing/engineering goals.",
                        skills: ["Team Leadership", "Budget Management", "Developer Experience (DX) Strategy", "Cross-Functional Alignment", "Executive Reporting"],
                        best_websites: []
                    },
                    {
                        level: "VP of Community / DX",
                        experience: "15-25+ Years",
                        salary_india: "₹90L - ₹2Cr+",
                        role: "VP of Developer Experience",
                        goal: "Champion the developer ecosystem at the executive level.",
                        skills: ["Ecosystem Strategy", "Global Community Vision", "Brand Evangelism", "M&A Community Integration", "Thought Leadership"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "mle",
                title: "Machine Learning Engineer (MLE)",
                description: "Design, build, and deploy scalable machine learning systems in production.",
                levels: [
                    {
                        level: "Junior MLE",
                        experience: "0-2 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "Junior ML Engineer",
                        goal: "Implement basic ML models and data pipelines.",
                        skills: ["Python (Pandas/NumPy)", "Scikit-Learn", "Git/Version Control", "SQL for Data", "Basic REST APIs"],
                        best_websites: [
                            { name: "Fast.ai", url: "https://www.fast.ai" }
                        ]
                    },
                    {
                        level: "ML Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Machine Learning Engineer",
                        goal: "Deploy models to production and optimize inference.",
                        skills: ["TensorFlow / PyTorch", "Docker & Kubernetes", "Model Serving (TF Serving/TorchServe)", "Feature Engineering", "Cloud AI Services (AWS SageMaker)"],
                        best_websites: [
                            { name: "Hugging Face", url: "https://huggingface.co" }
                        ]
                    },
                    {
                        level: "Senior MLE",
                        experience: "5-10 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Senior ML Engineer",
                        goal: "Design MLOps pipelines and scalable training infrastructure.",
                        skills: ["MLOps (Kubeflow/MLflow)", "Distributed Training", "System Design for ML", "A/B Testing Strategies", "Model Monitoring"],
                        best_websites: []
                    },
                    {
                        level: "Staff MLE",
                        experience: "10-15 Years",
                        salary_india: "₹50L - ₹90L",
                        role: "Staff Machine Learning Architect",
                        goal: "Set technical direction for AI initiatives across teams.",
                        skills: ["AI Ethics & Bias", "AutoML Architecture", "Research to Production", "Cost Optimization for AI", "Mentoring"],
                        best_websites: []
                    },
                    {
                        level: "Principal / Head of AI",
                        experience: "15-25+ Years",
                        salary_india: "₹90L - ₹2.5Cr+",
                        role: "Head of AI / Chief Data Scientist",
                        goal: "Lead the organization's AI strategy and innovation.",
                        skills: ["AI Strategy", "Generative AI Vision", "Cross-Functional Leadership", "Intellectual Property (AI Patents)", "Executive Stakeholder Management"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "ios",
                title: "iOS Developer (Swift/SwiftUI)",
                description: "Building native mobile applications for the Apple ecosystem.",
                levels: [
                    {
                        level: "Junior iOS Dev",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Junior iOS Developer",
                        goal: "Build simple UI and manage local data.",
                        skills: ["Swift Basics", "SwiftUI / UIKit Basics", "Xcode", "CocoaPods / SPM", "Git"],
                        best_websites: [
                            { name: "Hacking with Swift", url: "https://www.hackingwithswift.com" }
                        ]
                    },
                    {
                        level: "iOS Developer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "iOS Developer",
                        goal: "Create complex UIs and manage networking/state.",
                        skills: ["Advanced Swift", "Combine / Async Await", "Core Data / SwiftData", "Unit Testing", "App Store Guidelines"],
                        best_websites: [
                            { name: "Swift by Sundell", url: "https://www.swiftbysundell.com" }
                        ]
                    },
                    {
                        level: "Senior iOS Dev",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior iOS Engineer",
                        goal: "Architect modular apps and optimize performance.",
                        skills: ["Modular Architecture (Clean/VIPER)", "CI/CD (Fastlane)", "Instruments (Profiling)", "Metal (Graphics)", "App Security"],
                        best_websites: []
                    },
                    {
                        level: "Lead iOS Dev",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹65L",
                        role: "Lead Mobile Engineer",
                        goal: "Lead mobile teams and define mobile strategy.",
                        skills: ["Mobile System Design", "Team Leadership", "Cross-Platform Strategy", "Accessibility Expert", "Code Review Standards"],
                        best_websites: []
                    },
                    {
                        level: "Principal Mobile Eng",
                        experience: "15-25+ Years",
                        salary_india: "₹65L - ₹1.5Cr+",
                        role: "Principal Mobile Architect",
                        goal: "Oversee mobile engineering across the organization.",
                        skills: ["Mobile Center of Excellence", "Vendor Management", "Enterprise Mobile Strategy", "Innovation (AR/VR/VisionOS)", "Global App Rollout"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "android",
                title: "Android Developer (Kotlin)",
                description: "Building native mobile applications for the Android ecosystem.",
                levels: [
                    {
                        level: "Junior Android Dev",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Junior Android Developer",
                        goal: "Build basic screens and handle user input.",
                        skills: ["Kotlin Basics", "Android Studio", "XML Layouts / Jetpack Compose Basics", "Activity Lifecycle", "Git"],
                        best_websites: [
                            { name: "Android Developers", url: "https://developer.android.com/courses" }
                        ]
                    },
                    {
                        level: "Android Developer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Android Developer",
                        goal: "Implement complex navigation and background processing.",
                        skills: ["Jetpack Compose", "Coroutines & Flow", "Room Database", "Retrofit", "Dependency Injection (Hilt/Koin)"],
                        best_websites: [
                            { name: "Kotlin Lang", url: "https://kotlinlang.org/docs/home.html" }
                        ]
                    },
                    {
                        level: "Senior Android Dev",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior Android Engineer",
                        goal: "Architect robust apps and optimize for fragmentation.",
                        skills: ["Clean Architecture", "Performance Tuning (Systrace)", "Gradle Build Optimization", "Security Best Practices", "Testing (Espresso/JUnit)"],
                        best_websites: []
                    },
                    {
                        level: "Lead Android Dev",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹65L",
                        role: "Lead Android Engineer",
                        goal: "Mentor team and standardize development practices.",
                        skills: ["Modularization", "CI/CD Pipelines", "AOSP Customization", "Team Management", "Architecture Components Audit"],
                        best_websites: []
                    },
                    {
                        level: "Principal Mobile Eng",
                        experience: "15-25+ Years",
                        salary_india: "₹65L - ₹1.5Cr+",
                        role: "Head of Mobile Engineering",
                        goal: "Define long-term mobile technology roadmap.",
                        skills: ["Strategic Tech Decisions", "Cross-Functional Leadership", "Global Dev Standards", "Wear OS / Auto / TV Strategy", "Executive Reporting"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "sysadmin",
                title: "System Administrator (SysAdmin)",
                description: "Managing and maintaining computer systems, servers, and networks.",
                levels: [
                    {
                        level: "Junior SysAdmin",
                        experience: "0-2 Years",
                        salary_india: "₹3L - ₹6L",
                        role: "IT Support / Junior SysAdmin",
                        goal: "Handle user accounts and basic server troubleshooting.",
                        skills: ["Linux/Windows Basics", "User Management (AD/LDAP)", "Hardware Troubleshooting", "Backup Monitoring", "Helpdesk Ticketing"],
                        best_websites: [
                            { name: "Reddit r/sysadmin", url: "https://www.reddit.com/r/sysadmin/" }
                        ]
                    },
                    {
                        level: "SysAdmin",
                        experience: "2-5 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "System Administrator",
                        goal: "Manage server fleet, patching, and monitoring.",
                        skills: ["Linux Administration (RHEL/Ubuntu)", "Windows Server", "Virtualization (VMware/Hyper-V)", "Scripting (Bash/PowerShell)", "Monitoring Tools (Nagios/Zabbix)"],
                        best_websites: [
                            { name: "Server Fault", url: "https://serverfault.com" }
                        ]
                    },
                    {
                        level: "Senior SysAdmin",
                        experience: "5-10 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Senior Systems Engineer",
                        goal: "Automate infrastructure and manage high availability.",
                        skills: ["Configuration Mgmt (Ansible/Puppet)", "Containerization Basics", "Storage (SAN/NAS)", "Security Hardening", "Disaster Recovery Planning"],
                        best_websites: []
                    },
                    {
                        level: "Infrastructure Architect",
                        experience: "10-15 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Infrastructure Lead",
                        goal: "Design hybrid infrastructure solutions.",
                        skills: ["Hybrid Cloud Architecture", "Capacity Planning", "Identity & Access Mgmt (IAM)", "Compliance (ISO 27001)", "Vendor Management"],
                        best_websites: []
                    },
                    {
                        level: "Head of IT Infra",
                        experience: "15-25+ Years",
                        salary_india: "₹50L - ₹1.2Cr+",
                        role: "Director of IT Infrastructure",
                        goal: "Oversee global IT operations and strategy.",
                        skills: ["IT Strategy", "Budget Management (CAPEX/OPEX)", "Global IT Governance", "Cybersecurity Strategy", "Digital Transformation"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "erp-consultant",
                title: "ERP / SAP Consultant",
                description: "Implement and customize Enterprise Resource Planning systems.",
                levels: [
                    {
                        level: "Junior Consultant",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Associate Consultant",
                        goal: "Learn ERP modules and support implementations.",
                        skills: ["ERP Basics (SAP/Oracle)", "Business Process Understanding", "SQL Basics", "Documentation", "Module Training (FICO/MM/SD)"],
                        best_websites: [
                            { name: "SAP Community", url: "https://community.sap.com" }
                        ]
                    },
                    {
                        level: "Consultant",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹15L",
                        role: "Functional Consultant",
                        goal: "Configure modules and conduct user training.",
                        skills: ["Module Configuration", "Gap Analysis", "Integration Testing", "Data Migration", "Client Communication"],
                        best_websites: [
                            { name: "ERP FM", url: "https://erpfm.com" }
                        ]
                    },
                    {
                        level: "Senior Consultant",
                        experience: "5-10 Years",
                        salary_india: "₹15L - ₹30L",
                        role: "Senior Functional Consultant",
                        goal: "Lead module implementation and solution design.",
                        skills: ["Solution Architecture", "Process Re-engineering", "Project Management Basics", "Cross-Module Integration", "ABAP Debugging Basics"],
                        best_websites: []
                    },
                    {
                        level: "Solution Architect",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹60L",
                        role: "ERP Solution Architect",
                        goal: "Design end-to-end enterprise solutions.",
                        skills: ["Enterprise Architecture", "Cloud ERP Strategy (S/4HANA)", "Complex Integrations", "Stakeholder Management", "Presales Support"],
                        best_websites: []
                    },
                    {
                        level: "Practice Head",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.5Cr+",
                        role: "Partner / Practice Director",
                        goal: "Lead the ERP practice and drive business growth.",
                        skills: ["Practice Management", "Client Relationship Mgmt", "Global Delivery Strategy", "P&L Management", "Strategic Alliances"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "full-stack",
                title: "Full Stack Developer (MERN/MEAN/Java)",
                description: "Mastering both frontend and backend technologies to build complete web applications.",
                levels: [
                    {
                        level: "Junior Full Stack",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Junior Developer",
                        goal: "Build simple CRUD apps and understand client-server architecture.",
                        skills: ["HTML/CSS/JS", "React/Angular Basics", "Node.js/Express Basics", "MongoDB/SQL Basics", "Git"],
                        best_websites: [
                            { name: "The Odin Project", url: "https://www.theodinproject.com" }
                        ]
                    },
                    {
                        level: "Full Stack Developer",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Full Stack Developer",
                        goal: "Develop scalable features and integrate third-party APIs.",
                        skills: ["MERN/MEAN Stack Mastery", "Auth (JWT/OAuth)", "State Management (Redux)", "CI/CD Basics", "Docker"],
                        best_websites: [
                            { name: "Full Stack Open", url: "https://fullstackopen.com/en/" }
                        ]
                    },
                    {
                        level: "Senior Full Stack",
                        experience: "5-10 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "Senior Developer",
                        goal: "Architect Microservices and optimize performance.",
                        skills: ["System Design", "Microservices", "Cloud Deployment (AWS/Azure)", "Testing (Jest/Cypress)", "Mentorship"],
                        best_websites: []
                    },
                    {
                        level: "Lead / Principal",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹75L",
                        role: "Tech Lead / Architect",
                        goal: "Define technical standards and lead multiple squads.",
                        skills: ["Architecture Drivers", "Scalability", "Team Leadership", "Legacy Modernization", "Polyglot Persistence"],
                        best_websites: []
                    },
                    {
                        level: "CTO / VP Eng",
                        experience: "15-25+ Years",
                        salary_india: "₹75L - ₹2.5Cr+",
                        role: "Chief Technology Officer (CTO)",
                        goal: "Set the technological vision and strategy for the company.",
                        skills: ["Technology Strategy", "Budgeting", "Executive Management", "Investor Relations", "Innovation Culture"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "data-analyst",
                title: "Data Analyst (SQL/Tableau)",
                description: "Interpreting data and turning it into information which can offer ways to improve a business.",
                levels: [
                    {
                        level: "Junior Analyst",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Data Analyst Trainee",
                        goal: "Collect and clean data for analysis.",
                        skills: ["Excel (Advanced)", "SQL Basics", "Data Cleaning", "Tableau/PowerBI Basics", "Statistics Basics"],
                        best_websites: [
                            { name: "Kaggle", url: "https://www.kaggle.com" }
                        ]
                    },
                    {
                        level: "Data Analyst",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹15L",
                        role: "Data Analyst",
                        goal: "Create dashboards and reports to drive business decisions.",
                        skills: ["Advanced SQL", "Python for Analysis (Pandas)", "Data Visualization Mastery", "A/B Testing Analysis", "ETL Concepts"],
                        best_websites: [
                            { name: "Towards Data Science", url: "https://towardsdatascience.com" }
                        ]
                    },
                    {
                        level: "Senior Analyst",
                        experience: "5-10 Years",
                        salary_india: "₹15L - ₹30L",
                        role: "Senior Data Analyst",
                        goal: "Provide strategic insights and automate reporting pipelines.",
                        skills: ["Predictive Analytics", "Data Warehouse concepts", "Stakeholder Management", "Advanced Statistics", "Automation (Airflow)"],
                        best_websites: []
                    },
                    {
                        level: "Analytics Manager",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹60L",
                        role: "Analytics Manager",
                        goal: "Lead a team of analysts and define data metrics.",
                        skills: ["Team Leadership", "Data Strategy", "KPI Definition", "Cross-Department Collaboration", "Data Governance"],
                        best_websites: []
                    },
                    {
                        level: "Head of Analytics",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.5Cr+",
                        role: "Director of Analytics",
                        goal: "Drive data-driven culture across the organization.",
                        skills: ["Enterprise Data Strategy", "Executive Reporting", "Big Data Strategy", "Business Transformation", "Global Analytics Ops"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "solutions-engineer",
                title: "Solutions Engineer / Pre-Sales",
                description: "Combining technical knowledge with sales skills to provide advice and support.",
                levels: [
                    {
                        level: "Junior Solutions Eng",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Associate Solutions Engineer",
                        goal: "Assist in demos and answer technical queries.",
                        skills: ["Product Knowledge", "Presentation Skills", "Basic Coding/Scripting", "Customer Service", "Technical Writing"],
                        best_websites: [
                            { name: "PreSales Collective", url: "https://www.presalescollective.com" }
                        ]
                    },
                    {
                        level: "Solutions Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Solutions Engineer",
                        goal: "Lead technical demos and Proof of Concepts (POCs).",
                        skills: ["Custom Demos", "POC Execution", "Handling Objections", "Integration Knowledge", "Industry Expertise"],
                        best_websites: []
                    },
                    {
                        level: "Senior SE",
                        experience: "5-10 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "Senior Solutions Consultant",
                        goal: "Manage complex deals and shape customer solutions.",
                        skills: ["Solution Architecture", "Enterprise Sales Support", "RFP/RFI Management", "Strategic Consulting", "Mentoring"],
                        best_websites: []
                    },
                    {
                        level: "Manager SE",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹80L",
                        role: "Manager, Solutions Engineering",
                        goal: "Lead a regional SE team and align with sales goals.",
                        skills: ["Team Management", "Resource Allocation", "Hiring & Training", "Sales Strategy Collaboration", "Performance Metrics"],
                        best_websites: []
                    },
                    {
                        level: "VP Solutions Eng",
                        experience: "15-25+ Years",
                        salary_india: "₹80L - ₹2Cr+",
                        role: "VP of Pre-Sales / Solution Engineering",
                        goal: "Define global technical sales strategy.",
                        skills: ["Global Strategy", "Executive Alignment", "Org Structure Design", "Field Enablement", "Thought Leadership"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "scrum-master",
                title: "Scrum Master / Agile Coach",
                description: "Facilitating agile events and coaching teams to deliver value.",
                levels: [
                    {
                        level: "Junior Scrum Master",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Scrum Master Trainee",
                        goal: "Facilitate daily standups and basic ceremonies.",
                        skills: ["Scrum Basics (PSM I)", "Facilitation", "JIRA/Confluence", "Servant Leadership", "Conflict Resolution Basics"],
                        best_websites: [
                            { name: "Scrum Guides", url: "https://scrumguides.org" }
                        ]
                    },
                    {
                        level: "Scrum Master",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹18L",
                        role: "Scrum Master",
                        goal: "Remove impediments and improve team velocity.",
                        skills: ["Advanced Facilitation", "Kanban", "Metrics (Burn-down/Velocity)", "Coaching Basics", "Retrospectives Deep Dive"],
                        best_websites: [
                            { name: "Mountain Goat Software", url: "https://www.mountaingoatsoftware.com" }
                        ]
                    },
                    {
                        level: "Agile Coach",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior Agile Coach",
                        goal: "Coach multiple teams and stakeholders on agile mindset.",
                        skills: ["Agile Scaling (SAFe/LeSS)", "Organizational Change Mgmt", "Executive Coaching", "Value Stream Mapping", "Conflict Mediation"],
                        best_websites: []
                    },
                    {
                        level: "Enterprise Coach",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹60L",
                        role: "Enterprise Agile Coach",
                        goal: "Lead agile transformation at the department/org level.",
                        skills: ["Transformation Strategy", "Culture Hacking", "Portfolio Management", "Learning Organizations", "Systems Thinking"],
                        best_websites: []
                    },
                    {
                        level: "Head of Agility",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.5Cr+",
                        role: "VP of Agile Transformation",
                        goal: "Embed agility into the DNA of the enterprise.",
                        skills: ["Business Agility", "Strategic Alignment", "Global Change Programs", "Board Advisory", "Innovation Mgmt"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "graphic-designer",
                title: "Graphic Designer / Branding Specialist",
                description: "Creating visual concepts to communicate ideas that inspire, inform, and captivate.",
                levels: [
                    {
                        level: "Junior Designer",
                        experience: "0-2 Years",
                        salary_india: "₹3L - ₹6L",
                        role: "Junior Graphic Designer",
                        goal: "Create social media posts, banners, and basic layouts.",
                        skills: ["Adobe Photoshop", "Adobe Illustrator", "Typography Basics", "Color Theory", "Layout Design"],
                        best_websites: [
                            { name: "Behance", url: "https://www.behance.net" }
                        ]
                    },
                    {
                        level: "Graphic Designer",
                        experience: "2-5 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "Graphic Designer",
                        goal: "Develop brand identities and marketing collateral.",
                        skills: ["Branding Identity", "Print Design", "Advanced Illustration", "Photo Editing", "Portfolio Building"],
                        best_websites: [
                            { name: "Dribbble", url: "https://dribbble.com" }
                        ]
                    },
                    {
                        level: "Senior Designer",
                        experience: "5-10 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Senior Visual Designer",
                        goal: "Lead design projects and mentor juniors.",
                        skills: ["Art Direction", "Motion Graphics Basics", "Packaging Design", "Design Thinking", "Client Communication"],
                        best_websites: []
                    },
                    {
                        level: "Art Director",
                        experience: "10-15 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Art Director",
                        goal: "Oversee the visual style and imagery for campaigns/products.",
                        skills: ["Creative Direction", "Campaign Strategy", "Team Management", "Shoot Direction", "Brand Stewardship"],
                        best_websites: []
                    },
                    {
                        level: "Creative Director",
                        experience: "15-25+ Years",
                        salary_india: "₹50L - ₹1.2Cr+",
                        role: "Chief Creative Officer (CCO)",
                        goal: "Define the creative vision for the agency or brand.",
                        skills: ["Creative Strategy", "Global Brand Vision", "Executive Leadership", "Award Winning Work", "Innovation"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "xr-developer",
                title: "AR/VR / XR Developer",
                description: "Creating immersive experiences using Augmented, Virtual, and Mixed Reality.",
                levels: [
                    {
                        level: "Junior XR Dev",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Junior Unity Developer",
                        goal: "Build simple 3D interactions and scenes.",
                        skills: ["Unity / C# Basics", "3D Modeling Basics (Blender)", "VR SDKs (Oculus/SteamVR)", "Git", "Math for 3D"],
                        best_websites: [
                            { name: "Unity Learn XR", url: "https://learn.unity.com/course/create-with-vr" }
                        ]
                    },
                    {
                        level: "XR Developer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "VR/AR Developer",
                        goal: "Develop complex interactions and optimize performance.",
                        skills: ["Unreal Engine / C++", "AR Foundation / ARKit / ARCore", "Shader Graph", "Performance Optimization", "Multiplayer XR"],
                        best_websites: [
                            { name: "Road to VR", url: "https://www.roadtovr.com" }
                        ]
                    },
                    {
                        level: "Senior XR Dev",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior XR Engineer",
                        goal: "Architect immersive systems and graphics pipelines.",
                        skills: ["Computer Vision Basics", "WebXR", "Spatial Computing", "Haptics Integration", "Advanced Physics"],
                        best_websites: []
                    },
                    {
                        level: "Lead XR Engineer",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹60L",
                        role: "Lead Interactive Engineer",
                        goal: "Lead XR projects and explore new hardware capabilities.",
                        skills: ["Hardware Integration", "Team Leadership", "R&D Prototyping", "UX for XR", "Project Estimation"],
                        best_websites: []
                    },
                    {
                        level: "Principal / Head of XR",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.5Cr+",
                        role: "Director of Immersive Tech",
                        goal: "Drive the adoption of spatial computing in the organization.",
                        skills: ["Metaverse Strategy", "Strategic Partnerships", "Lab Management", "Future Tech Vision", "Executive Reporting"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "robotics-engineer",
                title: "Robotics Engineer",
                description: "Designing and building robots and automated systems.",
                levels: [
                    {
                        level: "Junior Robotics Eng",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Robotics Trainee",
                        goal: "Work on basic control loops and sensor integration.",
                        skills: ["C++ / Python", "ROS (Robot Operating System)", "Microcontrollers", "Sensors & Actuators", "Kinematics Basics"],
                        best_websites: [
                            { name: "ROS.org", url: "https://www.ros.org" }
                        ]
                    },
                    {
                        level: "Robotics Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Robotics Software Engineer",
                        goal: "Implement navigation, path planning, and perception.",
                        skills: ["SLAM (Simultaneous Localization and Mapping)", "Computer Vision (OpenCV)", "Motion Planning", "Simulation (Gazebo)", "PCB Design Basics"],
                        best_websites: [
                            { name: "The Construct", url: "https://www.theconstructsim.com" }
                        ]
                    },
                    {
                        level: "Senior Robotics Eng",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior Robotics Engineer",
                        goal: "Design complex robotic systems and autonomous behaviors.",
                        skills: ["Machine Learning for Robotics", "Control Theory (PID/MPC)", "Embedded Linux", "Safety Standards (ISO)", "System Architecture"],
                        best_websites: []
                    },
                    {
                        level: "Lead Robotics Eng",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹65L",
                        role: "Principal Robotics Architect",
                        goal: "Lead comprehensive R&D projects.",
                        skills: ["Swarm Robotics", "Human-Robot Interaction", "Systems Engineering", "Team Leadership", "Grant Writing / Funding"],
                        best_websites: []
                    },
                    {
                        level: "Head of Robotics",
                        experience: "15-25+ Years",
                        salary_india: "₹65L - ₹2Cr+",
                        role: "Chief Robotics Officer",
                        goal: "Direct the future of automation and robotics technology.",
                        skills: ["Automation Strategy", "R&D Strategy", "Manufacturing Ops", "Ethics in AI/Robotics", "Global Industry Leadership"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "penetration-tester",
                title: "Penetration Tester / Ethical Hacker",
                description: "Simulating cyberattacks to identify vulnerabilities and secure systems.",
                levels: [
                    {
                        level: "Junior Pentester",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Junior Security Analyst",
                        goal: "Perform basic vulnerability scans and report findings.",
                        skills: ["Networking Basics", "Linux (Kali)", "Scripting (Python/Bash)", "OWASP Top 10", "Tools (Nmap/Burp Suite)"],
                        best_websites: [
                            { name: "Hack The Box", url: "https://www.hackthebox.com" }
                        ]
                    },
                    {
                        level: "Penetration Tester",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Ethical Hacker",
                        goal: "Conduct web app and network penetration tests.",
                        skills: ["Web App Security", "Privilege Escalation", "Metasploit", "Wireless Security", "Report Writing"],
                        best_websites: [
                            { name: "PortSwigger Academy", url: "https://portswigger.net/web-security" }
                        ]
                    },
                    {
                        level: "Senior Pentester",
                        experience: "5-10 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "Senior Security Consultant",
                        goal: "Lead complex red team engagements and advanced exploitation.",
                        skills: ["Red Teaming", "Exploit Development", "Reverse Engineering", "Active Directory Attacks", "Mobile Security"],
                        best_websites: []
                    },
                    {
                        level: "Lead Pentester",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹70L",
                        role: "Principal Security Researcher",
                        goal: "Manage security assessments and research new vulnerabilities.",
                        skills: ["Team Leadership", "Client Management", "Security Architecture Review", "Zero Day Research", "Cloud Security Assessment"],
                        best_websites: []
                    },
                    {
                        level: "Head of Offensive Security",
                        experience: "15-25+ Years",
                        salary_india: "₹70L - ₹2Cr+",
                        role: "CISO / Head of Security Ops",
                        goal: "Oversee the entire offensive security strategy.",
                        skills: ["Security Strategy", "Risk Management", "Compliance (PCI-DSS/ISO)", "Executive Crisis Management", "Global Security Ops"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "ai-prompt-engineer",
                title: "AI / Prompt Engineer",
                description: "Optimizing AI models and designing prompts to get the best results from LLMs.",
                levels: [
                    {
                        level: "Junior Prompt Eng",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "AI Data Specialist",
                        goal: "Create datasets and test basic prompts.",
                        skills: ["Prompting Basics (Zero-shot/Few-shot)", "Python Basics", "JSON/YAML", "Spreadsheets", "Critical Thinking"],
                        best_websites: [
                            { name: "Learn Prompting", url: "https://learnprompting.org" }
                        ]
                    },
                    {
                        level: "AI Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹22L",
                        role: "AI Application Developer",
                        goal: "Build applications using LLM APIs (OpenAI/Anthropic).",
                        skills: ["LangChain / LlamaIndex", "Vector Databases (Pinecone)", "RAG (Retrieval Augmented Generation)", "API Integration", "Fine-tuning Basics"],
                        best_websites: [
                            { name: "DeepLearning.AI", url: "https://www.deeplearning.ai" }
                        ]
                    },
                    {
                        level: "Senior AI Eng",
                        experience: "5-10 Years",
                        salary_india: "₹22L - ₹45L",
                        role: "Senior AI Engineer",
                        goal: "Architect complex AI agents and optimize costs/latency.",
                        skills: ["Advanced RAG", "Agentic Workflows", "Model Evaluation", "Cost Optimization", "Local LLMs (Llama/Mistral)"],
                        best_websites: []
                    },
                    {
                        level: "Lead AI Architect",
                        experience: "10-15 Years",
                        salary_india: "₹45L - ₹80L",
                        role: "Lead Generative AI Architect",
                        goal: "Design enterprise-grade GenAI platforms.",
                        skills: ["Enterprise AI Architecture", "Safety & Alignment", "Scalability", "Team Leadership", "Model Distillation"],
                        best_websites: []
                    },
                    {
                        level: "Head of GenAI",
                        experience: "15-25+ Years",
                        salary_india: "₹80L - ₹2Cr+",
                        role: "VP of AI Innovation",
                        goal: "Lead the Generative AI transformation for the business.",
                        skills: ["AI Transformation Strategy", "Ethics & Governance", "Strategic Partnerships", "Future of Work Vision", "Executive Leadership"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "hardware-engineer",
                title: "Hardware Engineer (Electronics)",
                description: "Designing, developing, and testing electronic circuits and systems.",
                levels: [
                    {
                        level: "Junior Hardware Eng",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Electronics Trainee",
                        goal: "Assist in schematic capture and component selection.",
                        skills: ["Circuit Theory", "PCB Layout Basics (KiCad/Eagle)", "Soldering", "Multimeters/Oscilloscopes", "Component Knowledge"],
                        best_websites: [
                            { name: "EEWeb", url: "https://www.eeweb.com" }
                        ]
                    },
                    {
                        level: "Hardware Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹16L",
                        role: "Hardware Design Engineer",
                        goal: "Design multilayer PCBs and perform board bring-up.",
                        skills: ["Altium Designer", "Signal Integrity Basics", "Microcontroller Interfacing", "EMC/EMI Basics", "Simulation (SPICE)"],
                        best_websites: [
                            { name: "All About Circuits", url: "https://www.allaboutcircuits.com" }
                        ]
                    },
                    {
                        level: "Senior Hardware Eng",
                        experience: "5-10 Years",
                        salary_india: "₹16L - ₹35L",
                        role: "Senior Electronics Engineer",
                        goal: "Design high-speed digital or complex analog circuits.",
                        skills: ["High Speed Design (DDR/PCIe)", "FPGA Basics (Verilog/VHDL)", "Power Supply Design", "Design for Manufacturing (DFM)", "Compliance Testing"],
                        best_websites: []
                    },
                    {
                        level: "Lead Hardware Eng",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹65L",
                        role: "Principal Hardware Architect",
                        goal: "Architect complex hardware systems and lead teams.",
                        skills: ["System Architecture", "Thermal Management", "Cost Reduction", "Vendor Management", "Reliability Engineering"],
                        best_websites: []
                    },
                    {
                        level: "VP Hardware",
                        experience: "15-25+ Years",
                        salary_india: "₹65L - ₹2Cr+",
                        role: "VP of Engineering (Hardware)",
                        goal: "Lead hardware product development from concept to mass production.",
                        skills: ["Product Lifecycle Mgmt", "Global Supply Chain", "R&D Strategy", "Executive Leadership", "Quality Assurance Strategy"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "sre",
                title: "Site Reliability Engineer (SRE)",
                description: "Ensuring that software systems are scalable, reliable, and efficient.",
                levels: [
                    {
                        level: "Junior SRE",
                        experience: "0-2 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "Junior Systems Engineer",
                        goal: "Monitor systems and handle basic incidents.",
                        skills: ["Linux Basics", "Scripting (Python/Bash)", "Monitoring (Prometheus/Grafana)", "Git", "Cloud Basics"],
                        best_websites: [
                            { name: "Google SRE Book", url: "https://sre.google/books/" }
                        ]
                    },
                    {
                        level: "SRE",
                        experience: "2-5 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Site Reliability Engineer",
                        goal: "Automate operations and improve system reliability.",
                        skills: ["Terraform / Ansible", "Kubernetes", "CI/CD Pipelines", "Incident Management", "SLOs/SLIs"],
                        best_websites: [
                            { name: "SRE Weekly", url: "https://sreweekly.com" }
                        ]
                    },
                    {
                        level: "Senior SRE",
                        experience: "5-10 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Senior SRE",
                        goal: "Design scalable infrastructure and lead post-mortems.",
                        skills: ["System Architecture", "Capacity Planning", "Chaos Engineering", "Observability Strategy", "Database Scaling"],
                        best_websites: []
                    },
                    {
                        level: "Staff SRE",
                        experience: "10-15 Years",
                        salary_india: "₹50L - ₹85L",
                        role: "Staff Reliability Architect",
                        goal: "Set reliability standards across the engineering organization.",
                        skills: ["Multi-Cloud Strategy", "Cost Optimization (FinOps)", "Organizational Reliability", "Mentoring", "Tooling Architecture"],
                        best_websites: []
                    },
                    {
                        level: "Head of SRE",
                        experience: "15-25+ Years",
                        salary_india: "₹85L - ₹2Cr+",
                        role: "Director of Reliability Engineering",
                        goal: "Ensure 99.999% availability for critical business services.",
                        skills: ["Infrastructure Strategy", "Crisis Management", "Global Team Management", "Vendor Negotiation", "C-Suite Reporting"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "computer-vision",
                title: "Computer Vision Engineer",
                description: "Teaching computers to interpret and understand the visual world.",
                levels: [
                    {
                        level: "Junior CV Eng",
                        experience: "0-2 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "Junior Vision Engineer",
                        goal: "Implement basic image processing algorithms.",
                        skills: ["Python", "OpenCV Basics", "Image Processing Fundamentals", "Linear Algebra", "Git"],
                        best_websites: [
                            { name: "PyImageSearch", url: "https://pyimagesearch.com" }
                        ]
                    },
                    {
                        level: "CV Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Computer Vision Engineer",
                        goal: "Build object detection and classification models.",
                        skills: ["Deep Learning (CNNs)", "TensorFlow/PyTorch", "YOLO/detectron2", "Video Analytics", "Data Augmentation"],
                        best_websites: [
                            { name: "Papers with Code", url: "https://paperswithcode.com/area/computer-vision" }
                        ]
                    },
                    {
                        level: "Senior CV Eng",
                        experience: "5-10 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Senior Vision Scientist",
                        goal: "Optimize models for edge devices and real-time processing.",
                        skills: ["Edge AI (TensorRT/TFLite)", "3D Computer Vision", "GANs / Diffusion Models", "Model Quantization", "Sensor Fusion"],
                        best_websites: []
                    },
                    {
                        level: "Staff CV Architect",
                        experience: "10-15 Years",
                        salary_india: "₹50L - ₹90L",
                        role: "Principal vision Architect",
                        goal: "Lead CV research and production deployment.",
                        skills: ["Visual SLAM", "Autonomous Systems", "Research Publication", "Patent Strategy", "System Design"],
                        best_websites: []
                    },
                    {
                        level: "Head of Vision AI",
                        experience: "15-25+ Years",
                        salary_india: "₹90L - ₹2.5Cr+",
                        role: "VP of Vision Technology",
                        goal: "Define the vision AI roadmap for products.",
                        skills: ["AI Ethics", "Strategic Innovation", "Cross-Domain Application", "Executive Leadership", "Global Deployment"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "nlp-specialist",
                title: "NLP Specialist",
                description: "Building systems that can understand, interpret, and generate human language.",
                levels: [
                    {
                        level: "Junior NLP Eng",
                        experience: "0-2 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "Junior NLP Engineer",
                        goal: "Perform text preprocessing and basic analysis.",
                        skills: ["Python (NLTK/Spacy)", "Regex", "Text Cleaning", "Linguistics Basics", "Git"],
                        best_websites: [
                            { name: "Hugging Face Course", url: "https://huggingface.co/course" }
                        ]
                    },
                    {
                        level: "NLP Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "NLP Engineer",
                        goal: "Build chatbots and sentiment analysis models.",
                        skills: ["Transformers (BERT/GPT)", "Named Entity Recognition (NER)", "Topic Modeling", "Word Embeddings", "API Development"],
                        best_websites: [
                            { name: "NLP Progress", url: "http://nlpprogress.com" }
                        ]
                    },
                    {
                        level: "Senior NLP Eng",
                        experience: "5-10 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Senior NLP Scientist",
                        goal: "Fine-tune LLMs and optimize for specific domains.",
                        skills: ["Large Language Models (LLMs)", "Fine-tuning (PEFT/LoRA)", "Multilingual NLP", "Speech Processing", "Model Evaluation"],
                        best_websites: []
                    },
                    {
                        level: "Staff NLP Architect",
                        experience: "10-15 Years",
                        salary_india: "₹50L - ₹90L",
                        role: "Lead NLP Architect",
                        goal: "Architect conversational AI platforms.",
                        skills: ["Conversational Design", "Knowledge Graph Integration", "Cognitive Architecture", "Team Leadership", "Scalable Inference"],
                        best_websites: []
                    },
                    {
                        level: "Head of Language AI",
                        experience: "15-25+ Years",
                        salary_india: "₹90L - ₹2.5Cr+",
                        role: "VP of Language Technology",
                        goal: "Drive language AI strategy and product integration.",
                        skills: ["Global Language Strategy", "Generative AI Vision", "Ethical AI", "Executive Mgmt", "Innovation Roadmap"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "firmware-engineer",
                title: "Firmware Engineer",
                description: "Developing low-level software that controls hardware.",
                levels: [
                    {
                        level: "Junior Firmware Eng",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Embedded Software Trainee",
                        goal: "Write basic drivers for microcontrollers.",
                        skills: ["C/C++", "Microcontrollers (Arduino/STM32)", "RTOS Basics", "I2C/SPI/UART", "Git"],
                        best_websites: [
                            { name: "Embedded.com", url: "https://www.embedded.com" }
                        ]
                    },
                    {
                        level: "Firmware Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Firmware Engineer",
                        goal: "Develop robust embedded applications and drivers.",
                        skills: ["Real-Time Operating Systems (FreeRTOS)", "ARM Cortex Architecture", "Debugging (JTAG/SWD)", "Memory Management", "IoT Protocols (MQTT/BLE)"],
                        best_websites: [
                            { name: "Memfault Blog", url: "https://interrupt.memfault.com/blog/" }
                        ]
                    },
                    {
                        level: "Senior Firmware Eng",
                        experience: "5-10 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "Senior Embedded Engineer",
                        goal: "Architect complex firmware systems and ensure security.",
                        skills: ["Secure Boot", "OTA Updates", "Low Power Optimization", "Linux Kernel Drivers", "Code Quality Standards (MISRA)"],
                        best_websites: []
                    },
                    {
                        level: "Lead Firmware Eng",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹70L",
                        role: "Principal Firmware Architect",
                        goal: "Define hardware-software abstraction layers.",
                        skills: ["System Architecture", "Hardware Abstraction Layer (HAL)", "Cross-Platform Strategy", "Team Leadership", "Compliance (Safety/Security)"],
                        best_websites: []
                    },
                    {
                        level: "Director of Embedded",
                        experience: "15-25+ Years",
                        salary_india: "₹70L - ₹1.8Cr+",
                        role: "Director of Embedded Systems",
                        goal: "Oversee all embedded software development.",
                        skills: ["Platform Strategy", "Hardware-Software Co-design", "Vendor Management", "Product Roadmap", "Operational Excellence"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "big-data-engineer",
                title: "Big Data Engineer",
                description: "Designing and maintaining systems for processing and analyzing massive datasets.",
                levels: [
                    {
                        level: "Junior Data Eng",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Junior Data Engineer",
                        goal: "Build basic ETL pipelines.",
                        skills: ["Python", "SQL", "ETL Basics", "Linux Shell", "Cloud Storage (S3/GCS)"],
                        best_websites: [
                            { name: "Data Engineering Wiki", url: "https://dataengineering.wiki" }
                        ]
                    },
                    {
                        level: "Big Data Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹22L",
                        role: "Big Data Engineer",
                        goal: "Manage distributed data processing frameworks.",
                        skills: ["Apache Spark", "Hadoop Ecosystem", "NoSQL (Cassandra/HBase)", "Workflow Orchestration (Airflow)", "Data Modeling"],
                        best_websites: [
                            { name: "Databricks Blog", url: "https://www.databricks.com/blog" }
                        ]
                    },
                    {
                        level: "Senior Data Eng",
                        experience: "5-10 Years",
                        salary_india: "₹22L - ₹45L",
                        role: "Senior Data Engineer",
                        goal: "Architect scalable data lakes and streaming systems.",
                        skills: ["Streaming (Kafka/Flink)", "Data Warehousing (Snowflake/Redshift)", "Data Governance", "Performance Tuning", "Cloud Architecture"],
                        best_websites: []
                    },
                    {
                        level: "Staff Data Architect",
                        experience: "10-15 Years",
                        salary_india: "₹45L - ₹80L",
                        role: "Principal Data Architect",
                        goal: "Design enterprise data mesh and platform strategy.",
                        skills: ["Data Mesh / Fabric", "Cost Governance", "Cross-Functional Architecture", "Team Leadership", "Security & Compliance"],
                        best_websites: []
                    },
                    {
                        level: "Head of Data Eng",
                        experience: "15-25+ Years",
                        salary_india: "₹80L - ₹2Cr+",
                        role: "VP of Data Engineering",
                        goal: "Lead the data infrastructure organization.",
                        skills: ["Data Strategy", "Executive Stakeholder Mgmt", "Global Data Ops", "Infrastructure Scalability", "Innovation"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "user-researcher",
                title: "User Researcher",
                description: "Understanding user behaviors, needs, and motivations through observation techniques and feedback.",
                levels: [
                    {
                        level: "Junior Researcher",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Associate UX Researcher",
                        goal: "Assist in user testing and data collection.",
                        skills: ["Interview Basics", "Survey Design", "Usability Testing", "Note Taking", "Empathy"],
                        best_websites: [
                            { name: "Nielsen Norman Group", url: "https://www.nngroup.com" }
                        ]
                    },
                    {
                        level: "User Researcher",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹16L",
                        role: "UX Researcher",
                        goal: "Plan and conduct independent research studies.",
                        skills: ["Qualitative Analysis", "Quantitative Methods", "Persona Creation", "Journey Mapping", "Stakeholder Presentation"],
                        best_websites: [
                            { name: "UX Planet", url: "https://uxplanet.org" }
                        ]
                    },
                    {
                        level: "Senior Researcher",
                        experience: "5-10 Years",
                        salary_india: "₹16L - ₹30L",
                        role: "Senior UX Researcher",
                        goal: "Drive product strategy with research insights.",
                        skills: ["Research Ops", "Strategic Research", "Mixed Methods", "Mentorship", "Cross-Functional Impact"],
                        best_websites: []
                    },
                    {
                        level: "Lead Researcher",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹50L",
                        role: "Research Manager",
                        goal: "Manage a team of researchers and define research standards.",
                        skills: ["Team Leadership", "Research Strategy", "Budget Management", "Recruitment Ops", "Executive Communication"],
                        best_websites: []
                    },
                    {
                        level: "Head of Research",
                        experience: "15-25+ Years",
                        salary_india: "₹50L - ₹1.2Cr+",
                        role: "VP of User Research / Insights",
                        goal: "Embed user-centricity into the company culture.",
                        skills: ["Customer Insights Strategy", "Global Research Ops", "Organizational Influence", "Innovation", "Thought Leadership"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "accessibility-specialist",
                title: "Accessibility (A11y) Specialist",
                description: "Ensuring digital products are usable by people with disabilities.",
                levels: [
                    {
                        level: "Junior A11y Tester",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Accessibility Tester",
                        goal: "Test websites for basic accessibility compliance.",
                        skills: ["WCAG Basics", "Screen Reader Usage (NVDA/VoiceOver)", "Keyboard Navigation", "HTML Semantics", "Reporting Issues"],
                        best_websites: [
                            { name: "W3C WAI", url: "https://www.w3.org/WAI/" }
                        ]
                    },
                    {
                        level: "A11y Specialist",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Accessibility Engineer",
                        goal: "Remediate code and guide developers on best practices.",
                        skills: ["ARIA Specs", "Automated Testing Tools (Axe)", "A11y Auditing", "VPAT Authoring", "Frontend Development"],
                        best_websites: [
                            { name: "A11y Project", url: "https://www.a11yproject.com" }
                        ]
                    },
                    {
                        level: "Senior A11y Spec",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior Accessibility Consultant",
                        goal: "Integrate accessibility into the design system and SDLC.",
                        skills: ["Design System Integration", "A11y Training", "Legal Standards (ADA/Section 508)", "Mobile A11y", "Advocacy"],
                        best_websites: []
                    },
                    {
                        level: "Lead A11y Architect",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹60L",
                        role: "Digital Accessibility Lead",
                        goal: "Establish organizational accessibility policy.",
                        skills: ["Strategic Planning", "Cross-Functional Leadership", "Procurement Policies", "Risk Management", "Inclusive Design Strategy"],
                        best_websites: []
                    },
                    {
                        level: "Head of Inclusion",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.2Cr+",
                        role: "Head of Inclusive Design",
                        goal: "Champion inclusivity as a core brand value.",
                        skills: ["Global Inclusion Strategy", "Executive Leadership", "Brand Reputation", "Product Innovation", "Policy Influence"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "release-manager",
                title: "Release Manager",
                description: "Managing the software delivery lifecycle and release processes.",
                levels: [
                    {
                        level: "Junior Release Coord",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Release Coordinator",
                        goal: "Coordinate release schedules and track artifacts.",
                        skills: ["JIRA/Confluence", "Version Control Concepts", "Communication", "Spreadsheets", "Process Following"],
                        best_websites: [
                            { name: "Atlassian Guide", url: "https://www.atlassian.com/agile/devops" }
                        ]
                    },
                    {
                        level: "Release Manager",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Release Manager",
                        goal: "Manage the deployment process and mitigate release risks.",
                        skills: ["Release Planning", "CI/CD Knowledge", "Risk Assessment", "Change Management (CAB)", "Stakeholder Communication"],
                        best_websites: [
                            { name: "DevOps Institute", url: "https://www.devopsinstitute.com" }
                        ]
                    },
                    {
                        level: "Senior Release Mgr",
                        experience: "5-10 Years",
                        salary_india: "₹20L - ₹35L",
                        role: "Senior Release Engineer",
                        goal: "Automate release gates and optimize delivery pipelines.",
                        skills: ["Release Automation", "Metrics (DORA)", "Environment Management", "Compliance Auditing", "Scripting"],
                        best_websites: []
                    },
                    {
                        level: "Lead Release Mgr",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹60L",
                        role: "Head of Release Management",
                        goal: "Standardize release processes across the enterprise.",
                        skills: ["Strategy Definition", "Toolchain Architecture", "Team Leadership", "Crisis Mgmt", "Vendor Mgmt"],
                        best_websites: []
                    },
                    {
                        level: "Director of Delivery",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.5Cr+",
                        role: "Director of Platform Delivery",
                        goal: "Oversee the entire delivery ecosystem.",
                        skills: ["Operational Excellence", "Business Alignment", "Global Delivery Strategy", "Executive Reporting", "Transformation"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "it-auditor",
                title: "IT Auditor",
                description: "Ensuring IT systems are secure, compliant, and aligned with business goals.",
                levels: [
                    {
                        level: "Junior IT Auditor",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "IT Audit Associate",
                        goal: "Assist in audit fieldwork and testing controls.",
                        skills: ["Auditing Basics", "IT Controls (ITGC)", "Communication", "Documentation", "Excel"],
                        best_websites: [
                            { name: "ISACA", url: "https://www.isaca.org" }
                        ]
                    },
                    {
                        level: "IT Auditor",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹16L",
                        role: "IT Auditor",
                        goal: "Lead audit engagements and verify compliance.",
                        skills: ["CISA Certification", "Risk Management", "Frameworks (COBIT/NIST)", "Data Analysis", "Report Writing"],
                        best_websites: [
                            { name: "Internal Auditor", url: "https://www.theiia.org" }
                        ]
                    },
                    {
                        level: "Senior IT Auditor",
                        experience: "5-10 Years",
                        salary_india: "₹16L - ₹30L",
                        role: "Senior IT Audit Lead",
                        goal: "Plan annual audit plans and manage stakeholder relationships.",
                        skills: ["Audit Planning", "Cybersecurity Audit", "Cloud Compliance", "Team Supervision", "Process Improvement"],
                        best_websites: []
                    },
                    {
                        level: "Audit Manager",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹55L",
                        role: "IT Audit Manager",
                        goal: "Oversee the IT audit function and report to the board.",
                        skills: ["Audit Strategy", "Regulatory Compliance (SOX/GDPR)", "Resource Management", "Executive Presence", "Risk Advisory"],
                        best_websites: []
                    },
                    {
                        level: "Chief Audit Exec",
                        experience: "15-25+ Years",
                        salary_india: "₹55L - ₹1.5Cr+",
                        role: "Chief Audit Executive (CAE)",
                        goal: "Provide independent assurance to the audit committee.",
                        skills: ["Governance Strategy", "Board Relations", "Enterprise Risk Mgmt", "Strategic Vision", "Global Compliance"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "growth-engineer",
                title: "Growth Engineer",
                description: "Using engineering, data, and design to drive user acquisition and retention.",
                levels: [
                    {
                        level: "Junior Growth Eng",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Growth Engineer Trainee",
                        goal: "Implement tracking pixels and A/B test variants.",
                        skills: ["Frontend Basics", "Analytics Tools (Google Analytics/Mixpanel)", "A/B Testing Basics", "SQL Basics", "Git"],
                        best_websites: [
                            { name: "Reforge", url: "https://www.reforge.com" }
                        ]
                    },
                    {
                        level: "Growth Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Growth Engineer",
                        goal: "Build viral loops and optimize conversion funnels.",
                        skills: ["Experimentation Frameworks", "Marketing Tech Stack", "Data Analysis", "Full Stack Dev", "SEO Technicals"],
                        best_websites: [
                            { name: "GrowthHackers", url: "https://growthhackers.com" }
                        ]
                    },
                    {
                        level: "Senior Growth Eng",
                        experience: "5-10 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "Senior Growth Engineer",
                        goal: "Lead growth experiments and technical strategy.",
                        skills: ["System Design for Scale", "Advanced Analytics", "Product Strategy", "Email/Push Automation", "Mentoring"],
                        best_websites: []
                    },
                    {
                        level: "Lead Growth Eng",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹70L",
                        role: "Head of Growth Engineering",
                        goal: "Align engineering efforts with business growth goals.",
                        skills: ["Team Leadership", "Growth Strategy", "Cross-Functional Collaboration", "Budgeting", "Build vs Buy"],
                        best_websites: []
                    },
                    {
                        level: "VP of Growth",
                        experience: "15-25+ Years",
                        salary_india: "₹70L - ₹2Cr+",
                        role: "VP of Growth",
                        goal: "Drive overall company revenue and user growth.",
                        skills: ["Executive Strategy", "P&L Ownership", "Global Market Expansion", "Mergers & Acquisitions", "Brand Strategy"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "technical-artist",
                title: "Technical Artist",
                description: "Bridging the gap between code and art, optimizing assets for performance.",
                levels: [
                    {
                        level: "Junior Tech Artist",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Junior Technical Artist",
                        goal: "Assist artists with asset pipelines and basic scripting.",
                        skills: ["3D Software (Maya/Blender)", "Scripting (Python/Mel)", "Game Engines (Unity/Unreal)", "Version Control", "Shaders Basics"],
                        best_websites: [
                            { name: "Real-Time VFX", url: "https://realtimevfx.com" }
                        ]
                    },
                    {
                        level: "Technical Artist",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹18L",
                        role: "Technical Artist",
                        goal: "Create tools for artists and optimize game performance.",
                        skills: ["Procedural Generation (Houdini)", "Render Pipelines", "Shader Graph / HLSL", "Rigging/Animation", "Performance Profiling"],
                        best_websites: [
                            { name: "80 Level", url: "https://80.lv" }
                        ]
                    },
                    {
                        level: "Senior Tech Artist",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior Technical Artist",
                        goal: "Establish art asset workflows and solve complex graphical issues.",
                        skills: ["Pipeline Architecture", "Advanced Shaders", "Physics Simulation", "Tool Development", "Cross-Discipline Communication"],
                        best_websites: []
                    },
                    {
                        level: "Lead Tech Artist",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹60L",
                        role: "Lead Technical Artist",
                        goal: "Lead the technical art team and define visual fidelity standards.",
                        skills: ["Team Leadership", "R&D", "Engine Architecture", "Mentorship", "Project Planning"],
                        best_websites: []
                    },
                    {
                        level: "Art Director (Tech)",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.5Cr+",
                        role: "Technical Art Director",
                        goal: "Oversee the visual technology strategy for the studio.",
                        skills: ["Visual Tech Strategy", "Global Studio Pipeline", "Next-Gen Graphics", "Executive Leadership", "Innovation"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "bioinformatics-scientist",
                title: "Bioinformatics Scientist",
                description: "Developing methods and software tools for understanding biological data.",
                levels: [
                    {
                        level: "Junior Bioinformatician",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Bioinformatics Analyst",
                        goal: "Process biological data using established pipelines.",
                        skills: ["Python/R", "Genomics Basics", "Linux Shell", "Sequence Analysis", "Database Querying"],
                        best_websites: [
                            { name: "Rosalind", url: "http://rosalind.info/problems/locations/" }
                        ]
                    },
                    {
                        level: "Bioinformatics Scientist",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Bioinformatics Scientist",
                        goal: "Develop algorithms and pipelines for genomic data.",
                        skills: ["Next-Generation Sequencing (NGS)", "Machine Learning for Bio", "Bioconductor", "Cloud Computing (AWS for Genomics)", "Algorithm Design"],
                        best_websites: [
                            { name: "Biostars", url: "https://www.biostars.org" }
                        ]
                    },
                    {
                        level: "Senior Scientist",
                        experience: "5-10 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "Senior Computational Biologist",
                        goal: "Lead research projects and publish findings.",
                        skills: ["Statistical Modeling", "Drug Discovery pipeline", "Clinical Data", "Research Publication", "Grant Writing"],
                        best_websites: []
                    },
                    {
                        level: "Principal Scientist",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹70L",
                        role: "Principal Scientist",
                        goal: "Direct scientific strategy and manage research teams.",
                        skills: ["Research Leadership", "Pharmaceutical Strategy", "Regulatory Knowledge (FDA)", "Team Management", "Innovation"],
                        best_websites: []
                    },
                    {
                        level: "Director of Informatics",
                        experience: "15-25+ Years",
                        salary_india: "₹70L - ₹2Cr+",
                        role: "Head of Bioinformatics",
                        goal: "Oversee the computational biology department.",
                        skills: ["Scientific Strategy", "Global Collaboration", "Budget Management", "Executive Leadership", "Technology Transfer"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "quantum-computing-researcher",
                title: "Quantum Computing Researcher",
                description: "Developing quantum algorithms and hardware for the next generation of computing.",
                levels: [
                    {
                        level: "Junior Researcher",
                        experience: "0-2 Years",
                        salary_india: "₹6L - ₹12L",
                        role: "Quantum Research Intern",
                        goal: "Assist in quantum algorithm simulation and coding.",
                        skills: ["Quantum Mechanics Basics", "Python (Qiskit/Cirq)", "Linear Algebra", "Scientific Computing", "Git"],
                        best_websites: [
                            { name: "IBM Quantum Learning", url: "https://learning.quantum.ibm.com/" }
                        ]
                    },
                    {
                        level: "Quantum Researcher",
                        experience: "2-5 Years",
                        salary_india: "₹12L - ₹25L",
                        role: "Quantum Algorithm Engineer",
                        goal: "Design and test quantum algorithms.",
                        skills: ["Quantum Algorithms (Shor/Grover)", "Error Correction", "Optimization Problems", "Pulse Control", "Research Methodology"],
                        best_websites: [
                            { name: "Quantum Country", url: "https://quantum.country" }
                        ]
                    },
                    {
                        level: "Senior Researcher",
                        experience: "5-10 Years",
                        salary_india: "₹25L - ₹50L",
                        role: "Senior Research Scientist",
                        goal: "Publish cutting-edge research and optimize quantum circuits.",
                        skills: ["Quantum Hardware Architectures", "Advanced Math", "Patent Filing", "Conference Speaking", "Team Mentoring"],
                        best_websites: []
                    },
                    {
                        level: "Principal Investigator",
                        experience: "10-15 Years",
                        salary_india: "₹50L - ₹90L",
                        role: "Principal Quantum Scientist",
                        goal: "Lead a quantum research group or lab.",
                        skills: ["Research Strategy", "Grant Acquisition", "Academic/Industry Partnerships", "Scientific Leadership", "Peer Review"],
                        best_websites: []
                    },
                    {
                        level: "Head of Quantum",
                        experience: "15-25+ Years",
                        salary_india: "₹90L - ₹2.5Cr+",
                        role: "Chief Quantum Officer",
                        goal: "Commercialize quantum technologies and define long-term vision.",
                        skills: ["Tech Commercialization", "Ecosystem Building", "National Policy Influence", "Executive Strategy", "Global Innovation"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "product-marketing-manager",
                title: "Product Marketing Manager (PMM)",
                description: "Bringing products to market and driving adoption.",
                levels: [
                    {
                        level: "Associate PMM",
                        experience: "0-2 Years",
                        salary_india: "₹5L - ₹10L",
                        role: "Associate PMM",
                        goal: "Assist in product launches and create sales enablement content.",
                        skills: ["Market Research", "Copywriting", "Presentation Skills", "Competitive Analysis", "Social Media"],
                        best_websites: [
                            { name: "Product Marketing Alliance", url: "https://www.productmarketingalliance.com" }
                        ]
                    },
                    {
                        level: "PMM",
                        experience: "2-5 Years",
                        salary_india: "₹10L - ₹20L",
                        role: "Product Marketing Manager",
                        goal: "Own the go-to-market (GTM) strategy for a feature or product line.",
                        skills: ["GTM Strategy", "User Personas", "Messaging & Positioning", "Sales Training", "Analytics"],
                        best_websites: [
                            { name: "Sharebird", url: "https://sharebird.com" }
                        ]
                    },
                    {
                        level: "Senior PMM",
                        experience: "5-10 Years",
                        salary_india: "₹20L - ₹40L",
                        role: "Senior PMM",
                        goal: "Drive product adoption and influence product roadmap.",
                        skills: ["Strategic Narratives", "Analyst Relations", "Pricing Strategy", "Cross-Functional Leadership", "Customer Advocacy"],
                        best_websites: []
                    },
                    {
                        level: "Director of PMM",
                        experience: "10-15 Years",
                        salary_india: "₹40L - ₹75L",
                        role: "Director of Product Marketing",
                        goal: "Lead the PMM team and align with sales/product executives.",
                        skills: ["Portfolio Strategy", "Team Management", "Brand Architecture", "Budget Management", "Executive Alignment"],
                        best_websites: []
                    },
                    {
                        level: "VP of Product Marketing",
                        experience: "15-25+ Years",
                        salary_india: "₹75L - ₹2Cr+",
                        role: "VP of Marketing",
                        goal: "Define the global marketing vision for the company's portfolio.",
                        skills: ["Company Positioning", "Category Creation", "Global Market Strategy", "M&A Integration", "Thought Leadership"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "instructional-designer",
                title: "Instructional Designer (EdTech)",
                description: "Designing engaging learning experiences and educational content.",
                levels: [
                    {
                        level: "Junior ID",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Learning Experience Designer",
                        goal: "Create basic e-learning modules and storyboards.",
                        skills: ["Learning Theories (ADDIE)", "Storyboarding", "LMS Basics", "Articulate Storyline/Rise", "Visual Design Basics"],
                        best_websites: [
                            { name: "The eLearning Coach", url: "https://theelearningcoach.com" }
                        ]
                    },
                    {
                        level: "Instructional Designer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹15L",
                        role: "Instructional Designer",
                        goal: "Design curriculum and interactive learning content.",
                        skills: ["Curriculum Design", "Gamification", "UX for Learning", "Multimedia Production", "Assessment Design"],
                        best_websites: [
                            { name: "Instructional Design Central", url: "https://www.instructionaldesigncentral.com" }
                        ]
                    },
                    {
                        level: "Senior ID",
                        experience: "5-10 Years",
                        salary_india: "₹15L - ₹25L",
                        role: "Senior Learning Architect",
                        goal: "Architect comprehensive training programs and evaluate impact.",
                        skills: ["ROI Measurement", "Adaptive Learning", "Mentoring", "Project Management", "Accessibility in Learning"],
                        best_websites: []
                    },
                    {
                        level: "Lead Learning Consultant",
                        experience: "10-15 Years",
                        salary_india: "₹25L - ₹45L",
                        role: "Learning Strategy Lead",
                        goal: "Consult with business leaders on learning needs.",
                        skills: ["Performance Consulting", "Strategy Formulation", "Stakeholder Management", "Vendor Management", "Change Management"],
                        best_websites: []
                    },
                    {
                        level: "Chief Learning Officer",
                        experience: "15-25+ Years",
                        salary_india: "₹45L - ₹1.2Cr+",
                        role: "CLO / Head of L&D",
                        goal: "Foster a culture of continuous learning across the organization.",
                        skills: ["Enterprise Learning Strategy", "Talent Development", "Organizational Culture", "Executive Leadership", "Future of Work"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "localization-manager",
                title: "Localization (L10n) Manager",
                description: "Adapting products and content for different languages and cultures.",
                levels: [
                    {
                        level: "L10n Coordinator",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Localization Coordinator",
                        goal: "Coordinate translation projects and manage vendors.",
                        skills: ["Project Management Basics", "Translation Memory Tools (CAT)", "Communication", "Spreadsheets", "QA Basics"],
                        best_websites: [
                            { name: "GALA", url: "https://www.gala-global.org" }
                        ]
                    },
                    {
                        level: "L10n Manager",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹16L",
                        role: "Localization Manager",
                        goal: "Manage end-to-end localization workflows for products.",
                        skills: ["Workflow Automation", "Internationalization (i18n) Check", "Vendor Management", "Budgeting", "Quality Assurance"],
                        best_websites: [
                            { name: "MultiLingual", url: "https://multilingual.com" }
                        ]
                    },
                    {
                        level: "Senior L10n Mgr",
                        experience: "5-10 Years",
                        salary_india: "₹16L - ₹30L",
                        role: "Senior Localization Program Manager",
                        goal: "Optimize localization strategy and technology stack.",
                        skills: ["TMS Implementation", "Machine Translation (MTPE)", "Data Driven Loc", "Stakeholder Management", "UX Writing"],
                        best_websites: []
                    },
                    {
                        level: "Director of Loc",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹60L",
                        role: "Director of Globalization",
                        goal: "Align localization strategy with global expansion goals.",
                        skills: ["Global Strategy", "Team Building", "Process Re-engineering", "Executive Reporting", "Cross-Cultural Leadership"],
                        best_websites: []
                    },
                    {
                        level: "VP of Globalization",
                        experience: "15-25+ Years",
                        salary_india: "₹60L - ₹1.5Cr+",
                        role: "VP of International Product",
                        goal: "Drive international growth and product market fit.",
                        skills: ["International Market Strategy", "P&L Management", "Global Operations", "Regulatory Compliance", "Executive Strategy"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "digital-forensics",
                title: "Digital Forensics Analyst",
                description: "Investigating cybercrimes and recovering digital evidence.",
                levels: [
                    {
                        level: "Junior Forensics Analyst",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Associate Forensic Examiner",
                        goal: "Assist in evidence collection and preservation.",
                        skills: ["Chain of Custody", "Disk Imaging", "File Systems (NTFS/FAT)", "Hex Editors", "Documentation"],
                        best_websites: [
                            { name: "Forensic Focus", url: "https://www.forensicfocus.com" }
                        ]
                    },
                    {
                        level: "Forensics Analyst",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹16L",
                        role: "Digital Forensic Investigator",
                        goal: "Conduct independent investigations on computers/mobiles.",
                        skills: ["Memory Forensics", "Mobile Forensics", "Network Forensics", "Tools (EnCase/FTK/Autopsy)", "Legal Procedures"],
                        best_websites: [
                            { name: "SANS Institute", url: "https://www.sans.org" }
                        ]
                    },
                    {
                        level: "Senior Forensics Analyst",
                        experience: "5-10 Years",
                        salary_india: "₹16L - ₹30L",
                        role: "Senior Forensic Consultant",
                        goal: "Lead complex incident response cases and testify in court.",
                        skills: ["Malware Analysis", "Expert Witness Testimony", "Incident Response (DFIR)", "Scripting", "Team Training"],
                        best_websites: []
                    },
                    {
                        level: "Lead Forensics",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹55L",
                        role: "Principal Investigator",
                        goal: "Manage the forensics lab and oversee major investigations.",
                        skills: ["Lab Management", "Case Management", "Quality Assurance (ISO 17025)", "Crypto Tracing", "Executive Briefing"],
                        best_websites: []
                    },
                    {
                        level: "Head of Forensics",
                        experience: "15-25+ Years",
                        salary_india: "₹55L - ₹1.5Cr+",
                        role: "Director of Cyber Investigations",
                        goal: "Strategize on cyber defense and investigation capabilities.",
                        skills: ["Investigation Strategy", "Legal/Law Enforcement Liaison", "Global Response Ops", "Risk Management", "Thought Leadership"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "gis-developer",
                title: "GIS Developer (Mapping)",
                description: "Developing applications that use geographic and spatial data.",
                levels: [
                    {
                        level: "Junior GIS Dev",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "GIS Technician / Junior Dev",
                        goal: "Create maps and basic scripts for data processing.",
                        skills: ["ArcGIS / QGIS Basics", "Python (ArcPy/PyQGIS)", "SQL Basics", "Cartography", "Data Entry"],
                        best_websites: [
                            { name: "GIS Lounge", url: "https://www.gislounge.com" }
                        ]
                    },
                    {
                        level: "GIS Developer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹15L",
                        role: "GIS Developer",
                        goal: "Build web mapping applications and geoprocessing tools.",
                        skills: ["Web Mapping (Leaflet/OpenLayers)", "Spatial Databases (PostGIS)", "GeoJSON/TopoJSON", "JavaScript", "Rest APIs"],
                        best_websites: [
                            { name: "OpenStreetMap Wiki", url: "https://wiki.openstreetmap.org" }
                        ]
                    },
                    {
                        level: "Senior GIS Dev",
                        experience: "5-10 Years",
                        salary_india: "₹15L - ₹30L",
                        role: "Senior Geospatial Engineer",
                        goal: "Architect large-scale spatial data infrastructures.",
                        skills: ["Server Administration (GeoServer)", "Cloud GIS", "Spatial Analysis Algorithms", "System Architecture", "React/Angular GIS"],
                        best_websites: []
                    },
                    {
                        level: "Lead GIS Architect",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹50L",
                        role: "Principal GIS Architect",
                        goal: "Lead geospatial strategy and complex integration projects.",
                        skills: ["Enterprise GIS", "Remote Sensing Integration", "Team Leadership", "Project Management", "Data Standards"],
                        best_websites: []
                    },
                    {
                        level: "Head of Geospatial",
                        experience: "15-25+ Years",
                        salary_india: "₹50L - ₹1.2Cr+",
                        role: "Director of Geospatial Tech",
                        goal: "Drive location intelligence strategy across the organization.",
                        skills: ["Location Intelligence Strategy", "Smart Cities Vision", "Executive Leadership", "Business Development", "Innovation"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "mainframe-developer",
                title: "Mainframe Developer (Legacy)",
                description: "Maintaining and modernizing critical legacy systems used by large enterprises.",
                levels: [
                    {
                        level: "Junior Mainframe Dev",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹8L",
                        role: "Mainframe Trainee",
                        goal: "Learn COBOL and basic JCL.",
                        skills: ["COBOL Basics", "JCL (Job Control Language)", "TSO/ISPF", "Mainframe Concepts", "Debugging Basics"],
                        best_websites: [
                            { name: "IBM Mainframe Guide", url: "https://www.ibm.com/it-infrastructure/z/education" }
                        ]
                    },
                    {
                        level: "Mainframe Developer",
                        experience: "2-5 Years",
                        salary_india: "₹8L - ₹16L",
                        role: "Mainframe Programmer",
                        goal: "Write and maintain batch processing jobs and transactions.",
                        skills: ["CICS Transaction Processing", "DB2 / VSAM", "Assembler Basics", "Change Management", "Testing Tools"],
                        best_websites: [
                            { name: "Planet Mainframe", url: "https://planetmainframe.com" }
                        ]
                    },
                    {
                        level: "Senior Mainframe Dev",
                        experience: "5-10 Years",
                        salary_india: "₹16L - ₹30L",
                        role: "Senior Systems Programmer",
                        goal: "Optimize system performance and handle complex logic.",
                        skills: ["Performance Tuning", "System Programming", "Modernization Tools", "Mentoring", "Disaster Recovery"],
                        best_websites: []
                    },
                    {
                        level: "Mainframe Architect",
                        experience: "10-15 Years",
                        salary_india: "₹30L - ₹50L",
                        role: "Lead Mainframe Architect",
                        goal: "Plan modernization strategies and hybrid cloud integration.",
                        skills: ["Legacy Modernization (API wrapping)", "Hybrid Cloud", "System Architecture", "Integration Patterns", "Capacity Planning"],
                        best_websites: []
                    },
                    {
                        level: "VP of Legacy Systems",
                        experience: "15-25+ Years",
                        salary_india: "₹50L - ₹1.2Cr+",
                        role: "Director of Core Banking / Systems",
                        goal: "Ensure stability of core systems while driving digital transformation.",
                        skills: ["Core Systems Strategy", "Digital Transformation", "Risk Management", "Vendor Management", "Executive Leadership"],
                        best_websites: []
                    }
                ]
            },
            {
                id: "iam-specialist",
                title: "Identity & Access Management (IAM) Specialist",
                description: "Managing user identities and controlling access to enterprise resources.",
                levels: [
                    {
                        level: "Junior IAM Analyst",
                        experience: "0-2 Years",
                        salary_india: "₹4L - ₹9L",
                        role: "IAM Support Analyst",
                        goal: "Handle password resets and basic access requests.",
                        skills: ["Active Directory Basics", "SSO Concepts", "Troubleshooting", "Access Auditing", "Ticket Management"],
                        best_websites: [
                            { name: "Identity Management Institute", url: "https://www.identitymanagementinstitute.org" }
                        ]
                    },
                    {
                        level: "IAM Engineer",
                        experience: "2-5 Years",
                        salary_india: "₹9L - ₹18L",
                        role: "Identity Engineer",
                        goal: "Implement and maintain IAM solutions (Okta/SailPoint).",
                        skills: ["MFA/SSO Implementation", "OAuth/SAML/OIDC", "Directory Services (LDAP/AD)", "PowerShell/Scripting", "RBAC Policy Design"],
                        best_websites: [
                            { name: "Ping Identity Blog", url: "https://www.pingidentity.com/en/company/blog.html" }
                        ]
                    },
                    {
                        level: "Senior IAM Eng",
                        experience: "5-10 Years",
                        salary_india: "₹18L - ₹35L",
                        role: "Senior IAM Consultant",
                        goal: "Architect complex identity governance and administration (IGA) solutions.",
                        skills: ["IGA Architecture", "PAM (Privileged Access Mgmt)", "Zero Trust Architecture", "Cloud IAM (AWS/Azure)", "Automation"],
                        best_websites: []
                    },
                    {
                        level: "Lead IAM Architect",
                        experience: "10-15 Years",
                        salary_india: "₹35L - ₹65L",
                        role: "Principal Identity Architect",
                        goal: "Define the enterprise identity strategy.",
                        skills: ["Identity Strategy", "Compliance (SOX/GDPR/HIPAA)", "Vendor Evaluation", "Team Leadership", "Cross-Domain Security"],
                        best_websites: []
                    },
                    {
                        level: "Director of IAM",
                        experience: "15-25+ Years",
                        salary_india: "₹65L - ₹1.8Cr+",
                        role: "Director of Identity & Access Management",
                        goal: "Oversee the global IAM program and security posture.",
                        skills: ["Enterprise Security Strategy", "Global Program Management", "Board Reporting", "Risk Governance", "Digital Identity Innovation"],
                        best_websites: []
                    }
                ]
            }
        ]
    }
};

export default roadmapData;
