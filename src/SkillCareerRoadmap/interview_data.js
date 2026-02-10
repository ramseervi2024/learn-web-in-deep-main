const interviewData = {
    "frontend": [
        {
            level: "Junior Frontend Dev",
            experience: "0-2 Years",
            interview_focus: "Web Fundamentals",
            key_concepts: ["HTML5", "CSS3", "ES6+", "DOM Manipulation"],
            common_questions: ["Explain Event Bubbling.", "Difference between Flexbox and Grid.", "What are Promises?", "Semantic HTML importance."],
            tips: ["Build portfolio projects.", "Understand responsive design.", "Practice basic JS algorithms."]
        },
        {
            level: "Senior Frontend Dev",
            experience: "3-8 Years",
            interview_focus: "Architecture & Performance",
            key_concepts: ["React/Vue/Angular Deep Dive", "State Management", "Web Performance", "Security (XSS/CSRF)"],
            common_questions: ["Optimize a slow-loading page.", "Explain Virtual DOM.", "Micro-frontend pros/cons.", "Designing a component library."],
            tips: ["Focus on scalability.", "Mentorship experiences.", "System design for frontend."]
        },
        {
            level: "Staff/Principal Frontend",
            experience: "8-15 Years",
            interview_focus: "Strategy & Cross-Team Impact",
            key_concepts: ["Frontend Infrastructure", "Build Tools (Webpack/Vite)", "CI/CD for Frontend", "Design Systems at Scale"],
            common_questions: ["Migrating a legacy monolith to modern stack.", "Setting frontend standards for 50+ devs.", "Evaluating new technologies.", "Improving Developer Experience (DX)."],
            tips: ["Demonstrate strategic thinking.", "Cross-functional collaboration.", "Technical leadership."]
        },
        {
            level: "Director/VP of Frontend",
            experience: "15-30+ Years",
            interview_focus: "Organizational Leadership",
            key_concepts: ["Tech Vision", "Team Building", "Budgeting", "Engineering Culture"],
            common_questions: ["Scaling engineering teams.", "Aligning tech with business goals.", "Managing technical debt at org level.", "Future of frontend technology."],
            tips: ["Business acumen.", "Executive presence.", "Global strategy."]
        }
    ],
    "backend": [
        {
            level: "Junior Backend Dev",
            experience: "0-2 Years",
            interview_focus: "API & DB Basics",
            key_concepts: ["REST API", "SQL Basics", "Git", "Basic Auth"],
            common_questions: ["GET vs POST.", "What is a Primary Key?", "Explain HTTP status codes.", "Introduction to Node/Python/Java."],
            tips: ["Build a CRUD app.", "Learn about databases.", "Understand API concepts."]
        },
        {
            level: "Senior Backend Dev",
            experience: "3-8 Years",
            interview_focus: "Scalability & Systems",
            key_concepts: ["Database Indexing", "Caching", "Microservices", "Concurrency"],
            common_questions: ["Design a URL shortener.", "SQL vs NoSQL trade-offs.", "Handling race conditions.", "Secure API design."],
            tips: ["Learn system design.", "Deep dive into databases.", "Understand distributed systems."]
        },
        {
            level: "Staff/Principal Backend",
            experience: "8-15 Years",
            interview_focus: "Architecture & Reliability",
            key_concepts: ["Event-Driven Arch", "Cloud Native", "Observability", "Hard Problems"],
            common_questions: ["Designing for 99.999% availability.", "Data consistency in distributed systems.", "Migration strategies.", "Cost optimization."],
            tips: ["Architectural patterns.", "Mentoring seniors.", "Technical strategy."]
        },
        {
            level: "CTO / VP of Engineering",
            experience: "15-30+ Years",
            interview_focus: "Executive Strategy",
            key_concepts: ["Tech Strategy", "M&A", "Governance", "Innovation"],
            common_questions: ["Build vs Buy decisions.", "Structuring engineering orgs.", "Cloud strategy for enterprise.", "Managing risk."],
            tips: ["Strategic vision.", "Leadership skills.", "Business alignment."]
        }
    ],
    "react-native": [
        {
            level: "Junior Mobile Dev",
            experience: "0-2 Years",
            interview_focus: "React Native Basics",
            key_concepts: ["JSX", "Components", "Navigation", "Flexbox"],
            common_questions: ["State vs Props.", "React Native vs Hybrid.", "Handling Inputs.", "Debugging Basics."],
            tips: ["Build simple apps.", "Learn about UI components.", "Understand the bridge."]
        },
        {
            level: "Senior Mobile Dev",
            experience: "3-8 Years",
            interview_focus: "Performance & Native",
            key_concepts: ["Native Modules", "Performance Profiling", "Animations", "App Store Guidelines"],
            common_questions: ["Optimizing FlatList.", "Redux/Context API.", "Bridging Native Code.", "CI/CD for Mobile."],
            tips: ["Publish an app.", "Learn native iOS/Android basics.", "Focus on UX."]
        },
        {
            level: "Principal Mobile Architect",
            experience: "8-15 Years",
            interview_focus: "Cross-Platform Strategy",
            key_concepts: ["Architecture Patterns (MVI)", "Shared Codebases", "Mobile DevOps", "Security"],
            common_questions: ["Migrating native to RN.", "Designing a Super App.", "Mobile Security best practices.", "Scaling mobile teams."],
            tips: ["Strategic tech choices.", "Influencing product.", "Deep technical expertise."]
        },
        {
            level: "Head of Mobile",
            experience: "15-30+ Years",
            interview_focus: "Mobile Strategy",
            key_concepts: ["Digital Transformation", "User Acquisition Tech", "Global App Strategy", "Innovation"],
            common_questions: ["Mobile-first strategy.", "Monetization models.", "Managing global mobile teams.", "Future of mobile tech."],
            tips: ["Market trends.", "Executive leadership.", "Product vision."]
        }
    ],
    "devops": [
        {
            level: "Junior DevOps",
            experience: "0-2 Years",
            interview_focus: "Scripting & Tools",
            key_concepts: ["Linux", "Bash/Python", "Git", "Docker Basics"],
            common_questions: ["Linux permissions.", "What is CI/CD?", "Basic Docker commands.", "SSH keys."],
            tips: ["Learn Linux deeply.", "Automate small tasks.", "Understand SDLC."]
        },
        {
            level: "Senior DevOps",
            experience: "3-8 Years",
            interview_focus: "Cloud & Automation",
            key_concepts: ["Kubernetes", "Terraform", "AWS/Azure", "Monitoring"],
            common_questions: ["K8s Architecture.", "Infrastructure as Code.", "Scalable Architectures.", "Incident Response."],
            tips: ["Get certified.", "Build pipelines.", "Master container orchestration."]
        },
        {
            level: "Principal Site Reliability Engineer",
            experience: "8-15 Years",
            interview_focus: "Reliability & Platform",
            key_concepts: ["SRE Principles", "Error Budgets", "Platform Engineering", "Multi-Cloud"],
            common_questions: ["Implementing SRE culture.", "Disaster Recovery planning.", "Internal Developer Platforms.", "Cost Management."],
            tips: ["Focus on culture.", "Metrics driven.", "Platform thinking."]
        },
        {
            level: "VP of Infrastructure",
            experience: "15-30+ Years",
            interview_focus: "Infra Strategy",
            key_concepts: ["Cloud Strategy", "Compliance", "Security Governance", "Vendor Mgmt"],
            common_questions: ["Cloud exit strategy.", "Enterprise security posture.", "Budgeting for scale.", "Leading global infra teams."],
            tips: ["Risk management.", "Strategic planning.", "Financial acumen."]
        }
    ],
    "hr": [
        {
            level: "HR Assistant",
            experience: "0-2 Years",
            interview_focus: "Admin & Support",
            key_concepts: ["Filing", "Scheduling", "Basic Policy", "Onboarding"],
            common_questions: ["Handling confidential info.", "Prioritizing tasks.", "Candidate communication.", "Documentation."],
            tips: ["Organization skills.", "Attention to detail.", "Soft skills."]
        },
        {
            level: "HR Manger",
            experience: "3-8 Years",
            interview_focus: "Generalist & BP",
            key_concepts: ["Employee Relations", "Recruiting Strategy", "Compliance", "Performance Mgmt"],
            common_questions: ["Handling conflicts.", "Designing benefits.", "Retention strategies.", "Compensation planning."],
            tips: ["Conflict resolution.", "Legal knowledge.", "Empathy."]
        },
        {
            level: "Director of People Ops",
            experience: "8-15 Years",
            interview_focus: "Strategy & Culture",
            key_concepts: ["Org Design", "Culture Building", "Talent Management", "Change Mgmt"],
            common_questions: ["Scaling culture.", "Diversity & Inclusion strategy.", "Leadership development.", "HR Tech stack."],
            tips: ["Strategic HR.", "Data-driven decisions.", "Culture champion."]
        },
        {
            level: "CHRO",
            experience: "15-30+ Years",
            interview_focus: "Executive People Strategy",
            key_concepts: ["Human Capital Strategy", "Board Advisory", "Global HR", "Workforce Planning"],
            common_questions: ["People strategy for growth.", "Executive compensation.", "Future of work.", "Crisis management."],
            tips: ["Business partner.", "Executive influence.", "Visionary."]
        }
    ],
    "tech-support": [
        {
            level: "L1 Support",
            experience: "0-2 Years",
            interview_focus: "Troubleshooting Basics",
            key_concepts: ["Ticket Systems", "OS Basics", "Network Basics", "Customer Service"],
            common_questions: ["Ping/Traceroute.", "Password resets.", "Handling angry users.", "Documentation."],
            tips: ["Patience.", "Communication.", "Basic technical skills."]
        },
        {
            level: "L2/L3 Support",
            experience: "3-8 Years",
            interview_focus: "Advanced Troubleshooting",
            key_concepts: ["Log Analysis", "Database Queries", "Server Admin", "Scripting"],
            common_questions: ["Analyzing server logs.", "SQL for support.", "RCA (Root Cause Analysis).", "Escalation processes."],
            tips: ["Analytical thinking.", "Deep product knowledge.", "Automation."]
        },
        {
            level: "Support Manager",
            experience: "8-15 Years",
            interview_focus: "Operations & Quality",
            key_concepts: ["SLA Management", "Team KPIs", "Process Improvement", "Customer Success"],
            common_questions: ["Improving response times.", "Managing shift rotas.", "Quality assurance.", "Handling outages."],
            tips: ["Metrics focused.", "Team leadership.", "Process oriented."]
        },
        {
            level: "VP of Global Support",
            experience: "15-30+ Years",
            interview_focus: "Support Strategy",
            key_concepts: ["Follow-the-sun model", "Support Engineering", "Customer Experience", "Cost Efficiency"],
            common_questions: ["Global support strategy.", "AI for support.", "Customer churn reduction.", "Strategic partnerships."],
            tips: ["Global operations.", "Customer advocacy.", "Strategic scale."]
        }
    ],
    "data-science": [
        {
            level: "Junior Data Scientist",
            experience: "0-2 Years",
            interview_focus: "Stats & Coding",
            key_concepts: ["Python/R", "Basic ML", "SQL", "Statistics"],
            common_questions: ["Linear vs Logistic Regression.", "P-values.", "Data cleaning.", "Basic plotting."],
            tips: ["Kaggle projects.", "Master libraries.", "Understand the math."]
        },
        {
            level: "Senior Data Scientist",
            experience: "3-8 Years",
            interview_focus: "Modeling & Deployment",
            key_concepts: ["Advanced ML", "Deep Learning", "Feature Engineering", "Model Deployment"],
            common_questions: ["Bias-variance tradeoff.", "Transformer architecture.", "A/B Testing design.", "Productionizing models."],
            tips: ["End-to-end projects.", "Business understanding.", "Communication."]
        },
        {
            level: "Principal Data Scientist",
            experience: "8-15 Years",
            interview_focus: "Research & Strategy",
            key_concepts: ["AI Ethics", "Novel Algorithms", "Data Strategy", "Mentorship"],
            common_questions: ["Designing AI systems.", "Data governance.", "Algorithm scalability.", "Reviewing research papers."],
            tips: ["Innovation.", "Thought leadership.", "Technical depth."]
        },
        {
            level: "Chief Data Scientist",
            experience: "15-30+ Years",
            interview_focus: "AI Vision",
            key_concepts: ["AI Transformation", "Intellectual Property", "Data Monetization", "Executive Strategy"],
            common_questions: ["AI strategy for the org.", "Generative AI impact.", "Building AI teams.", "Ethical AI governance."],
            tips: ["Visionary foundation.", "Business alignment.", "Industry trends."]
        }
    ],
    "product-manager": [
        {
            level: "Associate PM",
            experience: "0-2 Years",
            interview_focus: "Execution",
            key_concepts: ["User Stories", "Agile", "Wireframing", "Communication"],
            common_questions: ["Prioritization frameworks.", "Writing requirements.", "Handling bugs.", "Working with devs."],
            tips: ["Learn the tools.", "Understand the user.", "Be organized."]
        },
        {
            level: "Senior PM",
            experience: "3-8 Years",
            interview_focus: "Strategy & Discovery",
            key_concepts: ["Product Roadmap", "Market Research", "Data Analytics", "Stakeholder Mgmt"],
            common_questions: ["Defining product vision.", "Go-to-Market strategy.", "Metric analysis.", "Saying 'No'."],
            tips: ["Focus on outcomes.", "Data-driven.", "Leadership without authority."]
        },
        {
            level: "Group PM / Director",
            experience: "8-15 Years",
            interview_focus: "Portfolio & People",
            key_concepts: ["Product Portfolio", "Team Coaching", "Business Strategy", "Process Scaling"],
            common_questions: ["Managing multiple products.", "Hiring PMs.", "Aligning with Sales/Marketing.", "Product Ops."],
            tips: ["strategic view.", "People manager.", "Process architect."]
        },
        {
            level: "CPO",
            experience: "15-30+ Years",
            interview_focus: "Product Vision",
            key_concepts: ["Company Strategy", "Product Culture", "Innovation", "Board Relations"],
            common_questions: ["Long-term usage vision.", "Product-led growth.", "Organizational structure.", "Market disruption."],
            tips: ["Executive leadership.", "Visionary.", "Business growth."]
        }
    ],
    "ui-ux": [
        {
            level: "Junior Designer",
            experience: "0-2 Years",
            interview_focus: "Tools & Craft",
            key_concepts: ["Figma", "Design Principles", "Typography", "Color Theory"],
            common_questions: ["Walk through portfolio.", "Design process.", "Grid systems.", "Prototyping."],
            tips: ["Polish portfolio.", "Learn guidelines.", "Ask for feedback."]
        },
        {
            level: "Senior Designer",
            experience: "3-8 Years",
            interview_focus: "Process & Systems",
            key_concepts: ["Design Systems", "User Research", "Interaction Design", "Accessibility"],
            common_questions: ["Building design systems.", "Usability testing.", "Handing off to devs.", "Mobile-first design."],
            tips: ["System thinking.", "Advocate for user.", "Collaboration."]
        },
        {
            level: "Principal Designer",
            experience: "8-15 Years",
            interview_focus: "Strategy & Standards",
            key_concepts: ["Design Strategy", "Brand Direction", "Team Mentorship", "Design Ops"],
            common_questions: ["Design's role in business.", "Scaling design teams.", "Design critique culture.", "Handling stakeholders."],
            tips: ["Strategic impact.", "Mentorship.", "Design advocacy."]
        },
        {
            level: "VP of Design",
            experience: "15-30+ Years",
            interview_focus: "Design Leadership",
            key_concepts: ["Brand Vision", "Org Design", "Creative Direction", "Executive Strategy"],
            common_questions: ["Defining design language.", "Design ROI.", "Company-wide design culture.", "Future of design."],
            tips: ["Visionary.", "Executive presence.", "Business value."]
        }
    ],
    "cybersecurity": [
        {
            level: "Junior Analyst",
            experience: "0-2 Years",
            interview_focus: "Basics & Monitoring",
            key_concepts: ["Networking", "OWASP", "SIEM usage", "Phishing"],
            common_questions: ["CIA Triad.", "Port numbers.", "Malware types.", "Analysing logs."],
            tips: ["Learn basics.", "Certifications (Security+).", "Stay updated."]
        },
        {
            level: "Security Engineer",
            experience: "3-8 Years",
            interview_focus: "Engineering & Response",
            key_concepts: ["AppSec", "Forensics", "Cloud Security", "Pentesting basics"],
            common_questions: ["Securing pipelines.", "Incident response steps.", "Vulnerability management.", "Encryption types."],
            tips: ["Specialization.", "Scripting.", "Defense in depth."]
        },
        {
            level: "Principal Security Architect",
            experience: "8-15 Years",
            interview_focus: "Architecture & Risk",
            key_concepts: ["Zero Trust", "Enterprise Arch", "Threat Modeling", "Compliance"],
            common_questions: ["Designing secure systems.", "Risk assessment.", "Cloud security strategy.", "Identity management."],
            tips: ["Architectural view.", "Business risk.", "Advanced certs (CISSP)."]
        },
        {
            level: "CISO",
            experience: "15-30+ Years",
            interview_focus: "Security Strategy",
            key_concepts: ["Risk Governance", "Board Reporting", "Security Program", "Crisis Mgmt"],
            common_questions: ["Security budget.", "Aligning security with business.", "Handling breaches.", "Regulatory landscape."],
            tips: ["Executive communication.", "Risk management.", "Leadership."]
        }
    ],
    "qa-automation": [
        {
            level: "Junior QA",
            experience: "0-2 Years",
            interview_focus: "Testing Basics",
            key_concepts: ["Manual Testing", "Test Cases", "Bug Lifecycle", "Basic SQL"],
            common_questions: ["Severity vs Priority.", "Writing bugs.", "Regression testing.", "Agile QA."],
            tips: ["Attention to detail.", "Process understanding.", "Learn tools."]
        },
        {
            level: "Automation Engineer",
            experience: "3-8 Years",
            interview_focus: "Automation & Scripting",
            key_concepts: ["Selenium/Cypress", "Java/Python", "CI Integration", "API Testing"],
            common_questions: ["Page Object Model.", "Handling dynamic elements.", "Test frameworks.", "Rest Assured."],
            tips: ["Coding skills.", "Framework design.", "Pipelines."]
        },
        {
            level: "Principal SDET",
            experience: "8-15 Years",
            interview_focus: "Infrastructure & Strategy",
            key_concepts: ["Test Infrastructure", "Performance Testing", "Security Testing", "DevApps"],
            common_questions: ["Designing frameworks.", "Docker/K8s for QA.", "Scaling tests.", "Quality metrics."],
            tips: ["Architecture.", "Tooling strategy.", "Full stack QA."]
        },
        {
            level: "Head of QA",
            experience: "15-30+ Years",
            interview_focus: "Quality Strategy",
            key_concepts: ["Quality Culture", "Vendor Management", "Release Strategy", "Efficiency"],
            common_questions: ["Shift-left strategy.", "QA Budget.", "Outsourcing strategy.", "Measuring quality."],
            tips: ["Strategic quality.", "Process optimization.", "Leadership."]
        }
    ],
    "data-engineering": [
        {
            level: "Junior Data Eng",
            experience: "0-2 Years",
            interview_focus: "SQL & Python",
            key_concepts: ["SQL Advanced", "Python Scripting", "ETL Basics", "Data Warehousing"],
            common_questions: ["Joins.", "Writing ETL scripts.", "Star Schema.", "Data types."],
            tips: ["Strong SQL.", "Python projects.", "Database concepts."]
        },
        {
            level: "Senior Data Eng",
            experience: "3-8 Years",
            interview_focus: "Pipelines & Big Data",
            key_concepts: ["Spark", "Airflow", "Kafka", "Cloud Data Pools"],
            common_questions: ["Optimizing Spark jobs.", "Orchestration.", "Streaming vs Batch.", "Data Modeling."],
            tips: ["Big Data tools.", "Cloud platforms.", "Performance tuning."]
        },
        {
            level: "Principal Data Architect",
            experience: "8-15 Years",
            interview_focus: "Platform & Strategy",
            key_concepts: ["Data Mesh", "Data Governance", "Modern Data Stack", "FinOps"],
            common_questions: ["Architecting data lakes.", "Data quality at scale.", "Self-service platforms.", "Compliance (GDPR)."],
            tips: ["Architecture.", "Governance.", "Scalability."]
        },
        {
            level: "VP of Data",
            experience: "15-30+ Years",
            interview_focus: "Data Strategy",
            key_concepts: ["Data Monetization", "Enterprise Strategy", "Global Teams", "Data Culture"],
            common_questions: ["Data as an asset.", "Building data orgs.", "Infrastructure costs.", "Vision for data."],
            tips: ["Strategic value.", "Executive leadership.", "Business impact."]
        }
    ],
    "cloud-architect": [
        {
            level: "Cloud Engineer",
            experience: "0-3 Years",
            interview_focus: "Implementation",
            key_concepts: ["AWS/Azure Basics", "VPC", "EC2/VM", "Storage"],
            common_questions: ["Launching instances.", "S3 classes.", "Security groups.", "Load balancers."],
            tips: ["Certifications.", "Hands-on labs.", "Networking basics."]
        },
        {
            level: "Senior Cloud Architect",
            experience: "3-8 Years",
            interview_focus: "Design & Migration",
            key_concepts: ["Well-Architected Framework", "Serverless", "Migration Patterns", "Hybrid Cloud"],
            common_questions: ["Designing HA systems.", "Lift and Shift vs Refactor.", "Serverless pros/cons.", "Cost optimization."],
            tips: ["Design patterns.", "Migration experience.", "Deep service knowledge."]
        },
        {
            level: "Principal Architect",
            experience: "8-15 Years",
            interview_focus: "Enterprise Strategy",
            key_concepts: ["Multi-Cloud", "Governance", "Enterprise Security", "Cloud Center of Excellence"],
            common_questions: ["Multi-cloud strategy.", "Compliance automation.", "Landing zones.", "Cloud operating model."],
            tips: ["Strategic architecture.", "Governance.", "Enterprise scale."]
        },
        {
            level: "Chief Architect",
            experience: "15-30+ Years",
            interview_focus: "Tech Vision",
            key_concepts: ["Digital Transformation", "IT Strategy", "Innovation", "C-Suite Advisory"],
            common_questions: ["Cloud ROI.", "Legacy modernization.", "Vendor strategy.", "Future tech stack."],
            tips: ["Visionary.", "Business transform.", "Leadership."]
        }
    ],
    "digital-marketing": [
        {
            level: "Marketing Specialist",
            experience: "0-2 Years",
            interview_focus: "Execution & Tools",
            key_concepts: ["Social Media", "SEO Basics", "Content Writing", "Email Marketing"],
            common_questions: ["SEO factors.", "Social media calendar.", "Email open rates.", "Basic analytics."],
            tips: ["Learn tools.", "Portfolio.", "Writing skills."]
        },
        {
            level: "Marketing Manager",
            experience: "3-8 Years",
            interview_focus: "Strategy & Campaigns",
            key_concepts: ["Campaign Mgmt", "PPC/SEM", "Marketing Automation", "Analytics"],
            common_questions: ["Designing campaigns.", "Calculating ROAS.", "Lead generation.", "Managing budgets."],
            tips: ["Data analysis.", "Campaign strategy.", "ROI focus."]
        },
        {
            level: "Director of Marketing",
            experience: "8-15 Years",
            interview_focus: "Growth & Brand",
            key_concepts: ["Brand Strategy", "Growth Hacking", "Team Leadership", "Market Positioning"],
            common_questions: ["Brand vision.", "Growth strategies.", "Managing agencies.", "Marketing mix."],
            tips: ["Strategic brand.", "Growth mindset.", "Leadership."]
        },
        {
            level: "CMO",
            experience: "15-30+ Years",
            interview_focus: "Market Dominance",
            key_concepts: ["Company Growth", "Global Brand", "PR & Comms", "Market Expansion"],
            common_questions: ["Go-to-Market strategy.", "Brand equity.", "Revenue alignment.", "Crisis PR."],
            tips: ["Executive strategy.", "Revenue driver.", "Visionary."]
        }
    ],
    "game-dev": [
        {
            level: "Junior Game Dev",
            experience: "0-2 Years",
            interview_focus: "Engine & Logic",
            key_concepts: ["Unity/Unreal", "C#/C++", "Game Loop", "Physics"],
            common_questions: ["Collision detection.", " Prefabs.", "Update vs FixedUpdate.", "Vector math."],
            tips: ["Game jams.", "Portfolio.", "Code samples."]
        },
        {
            level: "Senior Game Dev",
            experience: "3-8 Years",
            interview_focus: "Systems & Optimization",
            key_concepts: ["Design Patterns", "Memory Mgmt", "Multiplayer", "Shaders"],
            common_questions: ["Object pooling.", "Networking latency.", "Optimizing draw calls.", "AI basics."],
            tips: ["Performance.", "Architecture.", "Shipping titles."]
        },
        {
            level: "Principal Gameplay Engineer",
            experience: "8-15 Years",
            interview_focus: "Tech Art & Core",
            key_concepts: ["Engine Architecture", "Rendering Pipelines", "Tool Development", "Physics Engines"],
            common_questions: ["Custom engine dev.", "Rendering optimization.", "Workflow tools.", "Tech direction."],
            tips: ["Deep tech.", "Engine internals.", "Leadership."]
        },
        {
            level: "Technical Director",
            experience: "15-30+ Years",
            interview_focus: "Studio Tech Vision",
            key_concepts: ["Studio Pipeline", "R&D", "Tech Strategy", "Production Mgmt"],
            common_questions: ["Choosing game tech.", "Scaling production.", "Future of gaming.", "Project risk."],
            tips: ["Studio leadership.", "Innovation.", "Production alignment."]
        }
    ],
    "blockchain": [
        {
            level: "Junior Blockchain Dev",
            experience: "0-2 Years",
            interview_focus: "Smart Contracts",
            key_concepts: ["Solidity", "Proposals", "Gas Optimization", "Web3.js"],
            common_questions: ["Proof of Work vs Stake.", "Reentrancy attack.", "ERC-20 vs ERC-721.", "Private vs Public keys."],
            tips: ["Build DApps.", "Understand EVM.", "Security focus."]
        },
        {
            level: "Senior Blockchain Eng",
            experience: "3-8 Years",
            interview_focus: "Protocol & Security",
            key_concepts: ["Layer 2 Solutions", "Zero Knowledge Proofs", "Consensus Algorithms", "Auditing"],
            common_questions: ["Optimistic vs ZK Rollups.", "Flash loans.", "Hard forks.", "Cross-chain bridges."],
            tips: ["Participate in audits.", "Protocol design.", "Cryptography depth."]
        },
        {
            level: "Principal Protocol Eng",
            experience: "8-15 Years",
            interview_focus: "Architecture & Econ",
            key_concepts: ["Tokenomics", "Distributed Systems", "Governance Models", "Network Theory"],
            common_questions: ["Designing consensus mechanisms.", "Economic attack vectors.", "Decentralized governance.", "Scaling blockchains."],
            tips: ["Economic modeling.", "Deep distributed systems.", "Whitepapers."]
        },
        {
            level: "CTO (Web3)",
            experience: "15-30+ Years",
            interview_focus: "Web3 Vision",
            key_concepts: ["Decentralization Strategy", "Regulatory Compliance", "Ecosystem Growth", "Future of Web3"],
            common_questions: ["Mass adoption strategy.", "Regulatory landscape.", "Web3 business models.", "Enterprise integration."],
            tips: ["Visionary.", "Regulatory awareness.", "Ecosystem building."]
        }
    ],
    "project-manager": [
        {
            level: "Project Coordinator",
            experience: "0-2 Years",
            interview_focus: "Task Management",
            key_concepts: ["Gantt Charts", "Meeting Minutes", "Timeline Tracking", "Communication"],
            common_questions: ["Tracking milestones.", "Handling delays.", "Organizing meetings.", "Status reporting."],
            tips: ["Organization.", "Tools (Jira/Asana).", "Communication."]
        },
        {
            level: "Project Manager",
            experience: "3-8 Years",
            interview_focus: "Delivery & Risk",
            key_concepts: ["Risk Management", "PMP/Prince2", "Budgeting", "Stakeholder Mgmt"],
            common_questions: ["Critical Path Method.", "Mitigating risks.", "Managing scope creep.", "Resource allocation."],
            tips: ["Certification.", "Risk focus.", "Leadership."]
        },
        {
            level: "Senior Program Manager",
            experience: "8-15 Years",
            interview_focus: "Strategy & Governance",
            key_concepts: ["Program Governance", "Change Management", "Strategic Alignment", "Vendor Mgmt"],
            common_questions: ["Managing complex programs.", "Benefit realization.", "Governance capability.", "Conflict resolution."],
            tips: ["Strategic view.", "Influence.", "Complex delivery."]
        },
        {
            level: "VP of Project Management",
            experience: "15-30+ Years",
            interview_focus: "PMO Strategy",
            key_concepts: ["PMO Setup", "Portfolio Strategy", "Organizational Agility", "Executive Rpt"],
            common_questions: ["Establishing a PMO.", "Portfolio ROI.", "Agile transformation.", "Resource optimization."],
            tips: ["Strategy.", "Governance.", "Value delivery."]
        }
    ],
    "technical-writer": [
        {
            level: "Junior Writer",
            experience: "0-2 Years",
            interview_focus: "Clarity & Grammar",
            key_concepts: ["Markdown", "Style Guides", "API Docs", "Grammar"],
            common_questions: ["Explain complex topic simply.", "Tools used.", "Writing samples.", "Audience analysis."],
            tips: ["Portfolio.", "Clarity.", "Learn code basics."]
        },
        {
            level: "Senior Tech Writer",
            experience: "3-8 Years",
            interview_focus: "Architecture & IA",
            key_concepts: ["Information Architecture", "Docs-as-Code", "Content Strategy", "User Experience"],
            common_questions: ["Structuring doc sites.", "Versioning docs.", "Working with engineers.", "Measuring doc quality."],
            tips: ["IA skills.", "Tooling (SSG).", "User focus."]
        },
        {
            level: "Principal Writer",
            experience: "8-15 Years",
            interview_focus: "Strategy & Ops",
            key_concepts: ["Content Ops", "Localization Strategy", "Knowledge Management", "Team Scale"],
            common_questions: ["Scaling content ops.", "Localization workflows.", "Unified content strategy.", "Mentorship."],
            tips: ["Operations.", "Global strategy.", "Leadership."]
        },
        {
            level: "Head of Documentation",
            experience: "15-30+ Years",
            interview_focus: "Knowledge Strategy",
            key_concepts: ["Customer Education", "Learning Experience", "Enterprise Knowledge", "Budget"],
            common_questions: ["Docs as marketing.", "Customer deflection ROI.", "Global strategy.", "Future of info dev."],
            tips: ["Business value.", "Customer success.", "Strategy."]
        }
    ],
    "tech-sales": [
        {
            level: "SDR",
            experience: "0-2 Years",
            interview_focus: "Prospecting",
            key_concepts: ["Cold Outreach", "Qualification (BANT)", "CRM", "Resilience"],
            common_questions: ["Handling rejection.", "Value prop pitch.", "Daily activity goals.", "Researching leads."],
            tips: ["Hustle.", "Coachability.", "Phone skills."]
        },
        {
            level: "Account Executive",
            experience: "3-8 Years",
            interview_focus: "Closing",
            key_concepts: ["Deal Cycle", "Negotiation", "Demo Skills", "Territory Plan"],
            common_questions: ["Closing tough deals.", "Forecasting accuracy.", "Managing pipeline.", "Competitive positioning."],
            tips: ["Process.", "Relationship building.", "Closing."]
        },
        {
            level: "Enterprise Sales Director",
            experience: "8-15 Years",
            interview_focus: "Strategy & Big Deals",
            key_concepts: ["Strategic Accounts", "Executive Relationships", "Complex Negotiations", "Team Mgmt"],
            common_questions: ["Seven-figure deals.", "C-level engagement.", "Sales methodology (MEDDIC).", "Hiring closers."],
            tips: ["Strategic selling.", "Leadership.", "Big picture."]
        },
        {
            level: "CRO",
            experience: "15-30+ Years",
            interview_focus: "Revenue Engine",
            key_concepts: ["Revenue Ops", "GTM Strategy", "Global Sales", "Board Reporting"],
            common_questions: ["Scaling revenue.", "Sales & Marketing alignment.", "Channel strategy.", "Predictable revenue."],
            tips: ["Revenue ownership.", "Data driven.", "Executive."]
        }
    ],
    "customer-success": [
        {
            level: "CSM",
            experience: "0-3 Years",
            interview_focus: "Retention",
            key_concepts: ["Onboarding", "Churn", "NPS", "Product Adoption"],
            common_questions: ["Handling angry customers.", "Improving adoption.", "QBR preparation.", "Upselling basics."],
            tips: ["Empathy.", "Organization.", "Product knowledge."]
        },
        {
            level: "Senior CSM",
            experience: "3-8 Years",
            interview_focus: "Growth & Value",
            key_concepts: ["Customer Journey", "Value Realization", "Expansion Revenue", "Advocacy"],
            common_questions: ["Saving at-risk accounts.", "Strategic account planning.", "Driving expansion.", "Executive alignment."],
            tips: ["Strategic advisor.", "Commercial awareness.", "Relationship."]
        },
        {
            level: "Director of CS",
            experience: "8-15 Years",
            interview_focus: "Scale & Ops",
            key_concepts: ["CS Ops", "Segmentation", "Digital CS", "Team Leadership"],
            common_questions: ["Scaling CS teams.", "Tech touch vs High touch.", "Compensation models.", "Churn analysis."],
            tips: ["Scaling.", "Operations.", "Metrics."]
        },
        {
            level: "CCO (Chief Customer Officer)",
            experience: "15-30+ Years",
            interview_focus: "Customer Centricity",
            key_concepts: ["Customer Experience (CX)", "Lifetime Value (LTV)", "Board Strategy", "Global Support"],
            common_questions: ["Voice of Customer strategy.", "Net Revenue Retention.", "Culture of service.", "LTV optimization."],
            tips: ["Executive strategy.", "Customer advocate.", "Business growth."]
        }
    ],
    "embedded-iot": [
        {
            level: "Embedded Engineer",
            experience: "0-3 Years",
            interview_focus: "Hardware Basics",
            key_concepts: ["C/C++", "Microcontrollers", "GPIO/I2C/SPI", "Debugging"],
            common_questions: ["Volatile keyword.", "Interrupts vs Polling.", "Bit manipulation.", "Reading datasheets."],
            tips: ["Projects.", "Low level coding.", "Electronics basics."]
        },
        {
            level: "Senior Firmware Eng",
            experience: "3-8 Years",
            interview_focus: "RTOS & Systems",
            key_concepts: ["RTOS", "Connectivity (BLE/WiFi)", "Power Mgmt", "OTA Updates"],
            common_questions: ["Priority inversion.", "Memory management.", "Low power design.", "Secure boot."],
            tips: ["RTOS.", "Connectivity.", "System design."]
        },
        {
            level: "Principal IoT Architect",
            experience: "8-15 Years",
            interview_focus: "IoT Ecosystem",
            key_concepts: ["Edge Computing", "IoT Security", "Cloud Integration", "Hardware Lifecycle"],
            common_questions: ["End-to-end IoT arch.", "Edge AI.", "Fleet management.", "Security at scale."],
            tips: ["Architecture.", "Full stack IoT.", "Security."]
        },
        {
            level: "VP of IoT / Engineering",
            experience: "15-30+ Years",
            interview_focus: "Product Strategy",
            key_concepts: ["Hardware Strategy", "Supply Chain", "Innovation", "Market Fit"],
            common_questions: ["Build vs Buy hardware.", "Managing hardware timelines.", "IoT business models.", "Future of connected devices."],
            tips: ["Product vision.", "Operations.", "Strategy."]
        }
    ],
    "salesforce": [
        {
            level: "Salesforce Admin",
            experience: "0-2 Years",
            interview_focus: "Config & Security",
            key_concepts: ["Profiles/Roles", "Flows", "Objects", "Reports"],
            common_questions: ["Workflow rules.", "Sharing model.", "Data loader.", "Sandbox types."],
            tips: ["Certifications.", "Trailhead.", "Process focus."]
        },
        {
            level: "Salesforce Developer",
            experience: "3-8 Years",
            interview_focus: "Apex & LWC",
            key_concepts: ["Apex", "LWC/Aura", "Triggers", "Integration"],
            common_questions: ["Trigger framework.", "Async Apex.", "Integration patterns.", "Governor limits."],
            tips: ["Coding best practices.", "Patterns.", "Performance."]
        },
        {
            level: "Technical Architect",
            experience: "8-15 Years",
            interview_focus: "Platform Arch",
            key_concepts: ["Large Data Volumes", "Identity Design", "Multi-Org", "DevOps"],
            common_questions: ["LDV strategies.", "SSO implementation.", "CI/CD for Salesforce.", "Integration architecture."],
            tips: ["CTA preparation.", "Enterprise scale.", "Architecture."]
        },
        {
            level: "Practice Head",
            experience: "15-30+ Years",
            interview_focus: "Practice Strategy",
            key_concepts: ["CoE Setup", "Digital Transformation", "Vendor Mgmt", "Strategy"],
            common_questions: ["Salesforce roadmap.", "Center of Excellence.", "ROI of Salesforce.", "Executive alignment."],
            tips: ["Strategy.", "Governance.", "Business value."]
        }
    ],
    "dba": [
        {
            level: "Junior DBA",
            experience: "0-2 Years",
            interview_focus: "Maintenance",
            key_concepts: ["Backups", "User Mgmt", "Basic SQL", "Installation"],
            common_questions: ["Recovery models.", "Granting permissions.", "Normalisation.", "Monitoring tools."],
            tips: ["Process.", "Safety.", "SQL skills."]
        },
        {
            level: "Senior DBA",
            experience: "3-8 Years",
            interview_focus: "Performance & HA",
            key_concepts: ["Indexing", "Replication", "Clustering", "Tuning"],
            common_questions: ["Query optimization.", "Active-Passive clustering.", "Troubleshooting deadlocks.", "Patching strategies."],
            tips: ["Deep internals.", "Performance.", "Reliability."]
        },
        {
            level: "Database Architect",
            experience: "8-15 Years",
            interview_focus: "Data Strategy",
            key_concepts: ["Polyglot Persistence", "Cloud DBs", "Migration", "Capacity Planning"],
            common_questions: ["SQL vs NoSQL selection.", "Cloud migration.", "Multi-region data.", "Data modeling."],
            tips: ["Architecture.", "Cloud.", "Strategy."]
        },
        {
            level: "Head of Data Ops",
            experience: "15-30+ Years",
            interview_focus: "Infra Strategy",
            key_concepts: ["Data Governance", "Cost Mgmt", "Compliance", "Vendor Strategy"],
            common_questions: ["Enterprise data strategy.", "Licensing costs.", "Compliance (SOX/GDPR).", "Future of database tech."],
            tips: ["Strategic data.", "Operations.", "Cost."]
        }
    ],
    "network-engineer": [
        {
            level: "Junior Network Eng",
            experience: "0-2 Years",
            interview_focus: "CCNA Basics",
            key_concepts: ["TCP/IP", "VLANs", "Subnetting", "Routing"],
            common_questions: ["OSI Model.", "Switch vs Router.", "Ping/Trace.", "IP Classes."],
            tips: ["CCNA.", "Labs.", "Basics."]
        },
        {
            level: "Senior Network Eng",
            experience: "3-8 Years",
            interview_focus: "Routing & Security",
            key_concepts: ["BGP/OSPF", "Firewalls", "VPNs", "SD-WAN"],
            common_questions: ["BGP attributes.", "IPSec VPN.", "Firewall rules.", "Load balancing."],
            tips: ["CCNP.", "Troubleshooting.", "Design."]
        },
        {
            level: "Network Architect",
            experience: "8-15 Years",
            interview_focus: "Design & Cloud",
            key_concepts: ["Cloud Networking", "Data Center Design", "Zero Trust", "Automation"],
            common_questions: ["Designing specific DC.", "AWS Direct Connect.", "Network automation (Ansible).", "Global WAN design."],
            tips: ["Architecture.", "Cloud.", "Automation."]
        },
        {
            level: "Head of Networks",
            experience: "15-30+ Years",
            interview_focus: "Connectivity Strategy",
            key_concepts: ["Global Connectivity", "Vendor Neg", "5G/Edge", "Strategic Roadmap"],
            common_questions: ["Future network strategy.", "Telco negotiations.", "Edge computing.", "Reliability at scale."],
            tips: ["Strategic planning.", "Global operational.", "Leadership."]
        }
    ],
    "business-analyst": [
        {
            level: "Junior BA",
            experience: "0-2 Years",
            interview_focus: "Requirements",
            key_concepts: ["Gathering Reqs", "Documentation", "Process Maps", "Excel"],
            common_questions: ["BRD vs FRD.", "UML basics.", "Interviewing stakeholders.", "User stories."],
            tips: ["Documentation.", "Communication.", "Process."]
        },
        {
            level: "Senior BA",
            experience: "3-8 Years",
            interview_focus: "Process Improvement",
            key_concepts: ["BPMN", "Data Analysis", "Gap Analysis", "Solution Design"],
            common_questions: ["Process re-engineering.", "Handling scope creep.", "Data modeling.", "Cost-benefit analysis."],
            tips: ["Analysis.", "Modeling.", "Solutioning."]
        },
        {
            level: "Principal BA / Product Owner",
            experience: "8-15 Years",
            interview_focus: "Strategy & Value",
            key_concepts: ["Product Strategy", "Value Stream", "Agile Leadership", "Change Mgmt"],
            common_questions: ["roadmap alignment.", "Prioritisation frameworks.", "Digital transformation.", "Stakeholder influence."],
            tips: ["Strategy.", "Leadership.", "Value."]
        },
        {
            level: "Director of Business Agility",
            experience: "15-30+ Years",
            interview_focus: "Org Transformation",
            key_concepts: ["Enterprise Agility", "Operating Models", "Innovation", "Culture"],
            common_questions: ["Scaling agile.", "Organizational design.", "Transformation strategy.", "Measuring agility."],
            tips: ["Transformation.", "Culture.", "Executive."]
        }
    ],
    "dev-rel": [
        {
            level: "Dev Advocate",
            experience: "0-3 Years",
            interview_focus: "Community & Content",
            key_concepts: ["Content Creation", "Public Speaking", "Social Media", "Coding"],
            common_questions: ["Building community.", "Writing tutorials.", "Handling feedback.", "Technical empathy."],
            tips: ["Public presence.", "Writing.", "Coding."]
        },
        {
            level: "Senior Dev Advocate",
            experience: "3-8 Years",
            interview_focus: "Strategy & DX",
            key_concepts: ["Dev Experience (DX)", "Program Mgmt", "Strategic Partnerships", "Metrics"],
            common_questions: ["Measuring DevRel.", "Improving DX.", "Advocacy strategy.", "Managing champions."],
            tips: ["Strategy.", "Metrics.", "Influence."]
        },
        {
            level: "Director of DevRel",
            experience: "8-15 Years",
            interview_focus: "Ecosystem Growth",
            key_concepts: ["Ecosystem Strategy", "Budgeting", "Team Scaling", "Product Feedback Loop"],
            common_questions: ["DevRel ROI.", "Scaling communities.", "Integrating with Product/Eng.", "Global strategy."],
            tips: ["Business value.", "Leadership.", "Ecosystem."]
        },
        {
            level: "VP of Community",
            experience: "15-30+ Years",
            interview_focus: "Brand & Movement",
            key_concepts: ["Brand Evangelism", "Movement Building", "Strategic Alliances", "Executive Vision"],
            common_questions: ["Community-led growth.", "Brand strategy.", "Industry influence.", "Executive alignment."],
            tips: ["Vision.", "Brand.", "Movement."]
        }
    ],
    "mle": [
        {
            level: "Junior MLE",
            experience: "0-2 Years",
            interview_focus: "Applied ML",
            key_concepts: ["Python", "Scikit-Learn", "API Deployment", "Data Cleaning"],
            common_questions: ["Train/Test split.", "Overfitting.", "Flask/FastAPI.", "Basic pipelines."],
            tips: ["Deploy models.", "Clean code.", "Basics."]
        },
        {
            level: "Senior MLE",
            experience: "3-8 Years",
            interview_focus: "MLOps & Scale",
            key_concepts: ["Model Monitoring", "Kubeflow/MLflow", "Distributed Training", "Feature Stores"],
            common_questions: ["Drift detection.", "Scaling inference.", "CI/CD for ML.", "GPU optimization."],
            tips: ["MLOps.", "Scale.", "Production."]
        },
        {
            level: "Principal MLE",
            experience: "8-15 Years",
            interview_focus: "System Arch",
            key_concepts: ["ML Systems", "Real-time Inference", "Edge ML", "Cost Opt"],
            common_questions: ["Architecting ML platforms.", "Online learning.", "Hardware accelerators.", "Reducing inference cost."],
            tips: ["Architecture.", "Systems.", "Efficiency."]
        },
        {
            level: "Head of AI Engineering",
            experience: "15-30+ Years",
            interview_focus: "AI Strategy",
            key_concepts: ["AI Governance", "Infrastructure Strategy", "Talent Acquisition", "Innovation"],
            common_questions: ["Buy vs Build AI platform.", "Ethical AI.", "Scaling AI teams.", "Future of ML infra."],
            tips: ["Strategy.", "Leadership.", "Governance."]
        }
    ],
    "ios": [
        {
            level: "Junior iOS Dev",
            experience: "0-2 Years",
            interview_focus: "Swift Basics",
            key_concepts: ["Swift", "UIKit/SwiftUI", "Auto Layout", "Xcode"],
            common_questions: ["Delegates.", "View Lifecycle.", "ARC.", "Storyboards vs Code."],
            tips: ["Build apps.", "Learn Swift.", "UI adherence."]
        },
        {
            level: "Senior iOS Dev",
            experience: "3-8 Years",
            interview_focus: "Architecture",
            key_concepts: ["MVVM-C", "Combine/Async", "Core Data", "Instruments"],
            common_questions: ["Memory leaks.", "Concurrency.", "Modularization.", "Testing."],
            tips: ["Architecture.", "Performance.", "Deep API knowledge."]
        },
        {
            level: "Principal iOS Eng",
            experience: "8-15 Years",
            interview_focus: "Platform Deep Dive",
            key_concepts: ["Compiler Optimization", "Clang/LLVM", "Design Systems", "CI/CD"],
            common_questions: ["App launch time.", "Binary size.", "Custom frameworks.", "Tooling."],
            tips: ["Systems.", "Tooling.", "Performance."]
        },
        {
            level: "iOS Chapter Lead",
            experience: "15-30+ Years",
            interview_focus: "Mobile Strategy",
            key_concepts: ["Mobile Center of Excellence", "Tech Radar", "Team Standards", "Innovation"],
            common_questions: ["Native vs Cross-platform strategy.", "App Store relationships.", "Mobile security.", "Future of iOS."],
            tips: ["Strategy.", "Standards.", "Leadership."]
        }
    ],
    "android": [
        {
            level: "Junior Android Dev",
            experience: "0-2 Years",
            interview_focus: "Kotlin Basics",
            key_concepts: ["Kotlin", "Activities/Fragments", "Layouts", "Android Studio"],
            common_questions: ["Lifecycle.", "Intents.", "RecyclerView.", "XML vs Compose."],
            tips: ["Build apps.", "Learn Kotlin.", "Material Design."]
        },
        {
            level: "Senior Android Dev",
            experience: "3-8 Years",
            interview_focus: "Jetpack & Arch",
            key_concepts: ["Jetpack Compose", "Coroutines", "Dagger/Hilt", "Room"],
            common_questions: ["Dependency Injection.", "Flow vs LiveData.", "Performance profiling.", "Clean Architecture."],
            tips: ["Modern Android.", "Architecture.", "Tooling."]
        },
        {
            level: "Principal Android Eng",
            experience: "8-15 Years",
            interview_focus: "Systems & Scale",
            key_concepts: ["AOSP", "Gradle Plugins", "Modularization", "Video/Audio"],
            common_questions: ["Build times.", "Deep Android internals.", "Custom views.", "Scaling large apps."],
            tips: ["Build systems.", "Internals.", "Scale."]
        },
        {
            level: "Head of Mobile",
            experience: "15-30+ Years",
            interview_focus: "Strategic Mobile",
            key_concepts: ["Device Fragmentation", "Global Reach", "Super Apps", "Platform Strategy"],
            common_questions: ["Emerging markets strategy.", "Feature parity.", "App ecosystem.", "Mobile DevOps."],
            tips: ["Strategy.", "Global scale.", "Leadership."]
        }
    ],
    "sysadmin": [
        {
            level: "Junior SysAdmin",
            experience: "0-2 Years",
            interview_focus: "Support & Basics",
            key_concepts: ["User Mgmt", "Windows/Linux Basics", "Patching", "Monitoring"],
            common_questions: ["Active Directory basics.", "Resetting passwords.", "Disk space issues.", "Backup checks."],
            tips: ["Proactive.", "Learning.", "Service."]
        },
        {
            level: "Senior SysAdmin",
            experience: "3-8 Years",
            interview_focus: "Automation & Infra",
            key_concepts: ["PowerShell/Bash", "Virtualization", "Config Mgmt", "Security"],
            common_questions: ["Automating tasks.", "Hyper-V/VMware.", "Security hardening.", "Disaster recovery."],
            tips: ["Automation.", "Virtualization.", "Security."]
        },
        {
            level: "Infrastructure Manager",
            experience: "8-15 Years",
            interview_focus: "Management & Projects",
            key_concepts: ["ITIL", "Project Mgmt", "Vendor Mgmt", "Capacity Planning"],
            common_questions: ["Managing upgrades.", "SLA management.", "Budgeting.", "Team leadership."],
            tips: ["Management.", "Process.", "Projects."]
        },
        {
            level: "Director of IT Ops",
            experience: "15-30+ Years",
            interview_focus: "IT Strategy",
            key_concepts: ["IT Strategy", "Digital Workplace", "Cyber Resilience", "Cost Optimization"],
            common_questions: ["IT Roadmap.", "Remote work strategy.", "Business continuity.", "Cloud transition."],
            tips: ["Strategy.", "Resilience.", "Leadership."]
        }
    ],
    "erp-consultant": [
        {
            level: "Functional Consultant",
            experience: "0-2 Years",
            interview_focus: "Module Basics",
            key_concepts: ["SAP/Oracle Modules", "Business Process", "Configuration", "UAT"],
            common_questions: ["Order to Cash cycle.", "Procure to Pay.", "Master Data.", "Gap Analysis."],
            tips: ["Module knowledge.", "Business process.", "Communication."]
        },
        {
            level: "Senior Consultant",
            experience: "3-8 Years",
            interview_focus: "Implementation",
            key_concepts: ["Blueprint Design", "Integration", "Data Migration", "Customization"],
            common_questions: ["Designing complex workflows.", "Integration with 3rd party.", "Data cleansing strategies.", "Managing scope."],
            tips: ["End-to-end implementation.", "Integration.", "Problem solving."]
        },
        {
            level: "Solution Architect",
            experience: "8-15 Years",
            interview_focus: "Architecture",
            key_concepts: ["Global Template", "Cloud ERP", "Security", "Performance"],
            common_questions: ["Multi-country rollout.", "Cloud vs On-prem.", "Compliance (GDPR/SOX).", "License optimization."],
            tips: ["Architecture.", "Global scale.", "Strategy."]
        },
        {
            level: "ERP Practice Head",
            experience: "15-30+ Years",
            interview_focus: "Practice Strategy",
            key_concepts: ["Digital Transformation", "Vendor Strategy", "P&L Management", "Innovation"],
            common_questions: ["Future of ERP.", "Vendor negotiations.", "Building a practice.", "ROI of transformation."],
            tips: ["Business leader.", "Strategic relations.", "Vision."]
        }
    ],
    "full-stack": [
        {
            level: "Junior Full Stack",
            experience: "0-2 Years",
            interview_focus: "MERN/MEAN Stack",
            key_concepts: ["React", "Node.js", "MongoDB", "Express"],
            common_questions: ["REST API design.", "React State.", "Database CRUD.", "Git workflow."],
            tips: ["Build a complete app.", "Understand HTTP.", "Clean code."]
        },
        {
            level: "Senior Full Stack",
            experience: "3-8 Years",
            interview_focus: "System Design",
            key_concepts: ["Microservices", "Caching (Redis)", "Docker", "CI/CD"],
            common_questions: ["Scaling an app.", "Authentication (JWT/OAuth).", "Database indexing.", "Performance tuning."],
            tips: ["System design.", "Scalability.", "Security."]
        },
        {
            level: "Principal Engineer",
            experience: "8-15 Years",
            interview_focus: "Architecture & Scale",
            key_concepts: ["Distributed Systems", "Cloud Native", "Observability", "Tech Strategy"],
            common_questions: ["Designing for high availability.", "Event-driven architecture.", "Managing tech debt.", "Mentoring strategies."],
            tips: ["Architecture.", "Leadership.", "Complex systems."]
        },
        {
            level: "VP of Engineering",
            experience: "15-30+ Years",
            interview_focus: "Org Strategy",
            key_concepts: ["Engineering Culture", "Hiring Strategy", "Product Alignment", "Budgeting"],
            common_questions: ["Scaling teams.", "Engineering excellence.", "Build vs Buy.", "Strategic roadmap."],
            tips: ["Executive leadership.", "Culture.", "Strategy."]
        }
    ],
    "data-analyst": [
        {
            level: "Junior Analyst",
            experience: "0-2 Years",
            interview_focus: "SQL & Excel",
            key_concepts: ["SQL Queries", "Excel/GSheets", "Visualization Basics", "Cleaning Data"],
            common_questions: ["VLOOKUP/XLOOKUP.", "Group By/Having.", "Chart selection.", "Handling nulls."],
            tips: ["SQL skills.", "Portfolio.", "Attention to detail."]
        },
        {
            level: "Senior Analyst",
            experience: "3-8 Years",
            interview_focus: "Insights & Tools",
            key_concepts: ["Tableau/PowerBI", "Python/R", "Statistical Analysis", "Storytelling"],
            common_questions: ["Dashboard design.", "A/B test analysis.", "Automating reports.", "Stakeholder presentation."],
            tips: ["Storytelling.", "Advanced tools.", "Business impact."]
        },
        {
            level: "Analytics Manager",
            experience: "8-15 Years",
            interview_focus: "Strategy & Team",
            key_concepts: ["Data Strategy", "Data Governance", "Team Mgmt", "Self-Service Analytics"],
            common_questions: ["Building analytics culture.", "Data quality framework.", "Prioritizing requests.", "Mentoring analysts."],
            tips: ["Leadership.", "Strategy.", "Democratization."]
        },
        {
            level: "Head of Analytics",
            experience: "15-30+ Years",
            interview_focus: "Data Vision",
            key_concepts: ["Enterprise Data", "Decision Science", "Executive Reporting", "Data Monetization"],
            common_questions: ["Data maturity model.", "ROI of analytics.", "Aligning with C-suite.", "Privacy strategy."],
            tips: ["Vision.", "Executive influence.", "Value creation."]
        }
    ],
    "solutions-engineer": [
        {
            level: "Solutions Consultant",
            experience: "0-3 Years",
            interview_focus: "Product & Demo",
            key_concepts: ["Demo Skills", "Technical Discovery", "RFP Response", "Presentation"],
            common_questions: ["Tailoring demos.", "Handling objections.", "Answering RFPs.", "Value selling."],
            tips: ["Presentation.", "Product depth.", "Listening."]
        },
        {
            level: "Senior SE",
            experience: "3-8 Years",
            interview_focus: "Solution Design",
            key_concepts: ["Proof of Concept (POC)", "Architecture Design", "Integration", "Sales Partnership"],
            common_questions: ["Managing POCs.", "Complex integrations.", "Architecture workshops.", "Champion building."],
            tips: ["Technical depth.", "Sales acumen.", "Solutioning."]
        },
        {
            level: "Principal SE",
            experience: "8-15 Years",
            interview_focus: "Strategic Accounts",
            key_concepts: ["Enterprise Architecture", "Industry Expertise", "Executive Alignment", "Methodology"],
            common_questions: ["Strategic transformations.", "C-level presentations.", "Designing SE processes.", "Mentorship."],
            tips: ["Strategic advisor.", "Industry expert.", "Leadership."]
        },
        {
            level: "VP of Pre-Sales",
            experience: "15-30+ Years",
            interview_focus: "Global Strategy",
            key_concepts: ["SE Org Structure", "Compensation Models", "Go-To-Market", "Scale"],
            common_questions: ["Scaling SE teams.", "SE/Sales alignment.", "Measuring SE impact.", "Global operations."],
            tips: ["Strategy.", "Operations.", "Executive."]
        }
    ],
    "scrum-master": [
        {
            level: "Scrum Master",
            experience: "0-3 Years",
            interview_focus: "Process",
            key_concepts: ["Scrum Events", "Kanban", "Jira", "Facilitation"],
            common_questions: ["Running standups.", "Handling blockers.", "Sprint planning.", "Retrospectives."],
            tips: ["Servant leader.", "Process knowledge.", "Certification."]
        },
        {
            level: "Agile Coach",
            experience: "3-8 Years",
            interview_focus: "Coaching",
            key_concepts: ["Team Dynamics", "Scaling Basics", "Conflict Resolution", "Metrics (Velocity)"],
            common_questions: ["Coaching POs.", "Handling resistance.", "Improving velocity.", "Scrum of Scrums."],
            tips: ["Coaching.", "Metrics.", "Culture."]
        },
        {
            level: "Enterprise Agile Coach",
            experience: "8-15 Years",
            interview_focus: "Transformation",
            key_concepts: ["SAFe/LeSS", "Org Change", "Leadership Coaching", "Value Streams"],
            common_questions: ["Scaling agile.", "Transformation roadmap.", "Executive coaching.", "Business agility."],
            tips: ["Frameworks.", "Transformation.", "Leadership."]
        },
        {
            level: "Head of Agile Delivery",
            experience: "15-30+ Years",
            interview_focus: "Delivery Strategy",
            key_concepts: ["Delivery Excellence", "Operating Model", "Efficiency", "Continuous Improvement"],
            common_questions: ["Outcome based delivery.", "Org design for flow.", "Measuring agility.", "Predictability."],
            tips: ["Strategy.", "Excellence.", "Outcomes."]
        }
    ],
    "graphic-designer": [
        {
            level: "Junior Designer",
            experience: "0-2 Years",
            interview_focus: "Tools & Layout",
            key_concepts: ["Adobe Suite", "Typography", "Color Theory", "Layout"],
            common_questions: ["Portfolio walkthrough.", "Design process.", "File formats.", "Preparing for print."],
            tips: ["Portfolio.", "Tool mastery.", "Creativity."]
        },
        {
            level: "Senior Designer",
            experience: "3-8 Years",
            interview_focus: "Concept & Brand",
            key_concepts: ["Branding", "Visual Identity", "Art Direction", "Marketing Design"],
            common_questions: ["Developing brand guidelines.", "Campaign concepts.", "Mentoring juniors.", "Managing feedback."],
            tips: ["Conceptual thinking.", "Brand.", "Presentation."]
        },
        {
            level: "Art Director",
            experience: "8-15 Years",
            interview_focus: "Creative Direction",
            key_concepts: ["Visual Strategy", "Team Mgmt", "Campaign Strategy", "Client Relations"],
            common_questions: ["Leading creative teams.", "Pitching concepts.", "Brand evolution.", "Maintaining quality."],
            tips: ["Direction.", "Leadership.", "Vision."]
        },
        {
            level: "Creative Director",
            experience: "15-30+ Years",
            interview_focus: "Creative Vision",
            key_concepts: ["Brand Vision", "Agency Mgmt", "Global Campaigns", "Innovation"],
            common_questions: ["Creative philosophy.", "Global brand strategy.", "Winning awards.", "Business impact of design."],
            tips: ["Visionary.", "Executive.", "Impact."]
        }
    ],
    "xr-developer": [
        {
            level: "XR Developer",
            experience: "0-3 Years",
            interview_focus: "Unity/Unreal",
            key_concepts: ["3D Math", "Physics", "Interaction SDKs", "Optimization"],
            common_questions: ["Draw calls.", "AR/VR differences.", "Locomotion helpers.", "User comfort."],
            tips: ["Portfolio.", "3D skills.", "Performance."]
        },
        {
            level: "Senior XR Eng",
            experience: "3-8 Years",
            interview_focus: "Performance & UX",
            key_concepts: ["Rendering Pipeline", "Spatial Audio", "Multiplayer XR", "Hardware Constraints"],
            common_questions: ["Optimizing for mobile VR.", "Custom shaders.", "Networked physics.", "Immersive UX."],
            tips: ["Optimization.", "UX focus.", "Hardware depth."]
        },
        {
            level: "Principal XR Architect",
            experience: "8-15 Years",
            interview_focus: "Systems & Future",
            key_concepts: ["Metaverse Arch", "Cloud Rendering", "Haptics", "Standards (OpenXR)"],
            common_questions: ["Streaming 3D assets.", " interoperability.", "Large scale interactions.", "Future of XR."],
            tips: ["Architecture.", "Innovation.", "Standards."]
        },
        {
            level: "Head of XR/Metaverse",
            experience: "15-30+ Years",
            interview_focus: "Strategic Vision",
            key_concepts: ["Spatial Computing Strategy", "Ecosystem", "R&D", "Use Cases"],
            common_questions: ["Enterprise XR adoption.", "Privacy in XR.", "Hardware roadmap.", "ROI of Metaverse."],
            tips: ["Vision.", "Strategy.", "Business case."]
        }
    ],
    "robotics-engineer": [
        {
            level: "Junior Robotics Eng",
            experience: "0-2 Years",
            interview_focus: "ROS & Controls",
            key_concepts: ["ROS", "Python/C++", "Kinematics", "Sensors"],
            common_questions: ["PID controller.", "Forward kinematics.", "Lidar basics.", "Debugging hardware."],
            tips: ["Projects.", "ROS basics.", "Math."]
        },
        {
            level: "Senior Robotics Eng",
            experience: "3-8 Years",
            interview_focus: "Perception & Plan",
            key_concepts: ["SLAM", "Path Planning", "Computer Vision", "Sensor Fusion"],
            common_questions: ["Kalman filters.", "A* algorithm.", "Object detection.", "Robot operating system 2."],
            tips: ["Algorithms.", "Fusion.", "Navigation."]
        },
        {
            level: "Principal Roboticist",
            experience: "8-15 Years",
            interview_focus: "System Arch",
            key_concepts: ["Autonomy Stack", "Fleet Mgmt", "Safety Systems", "Hardware-Software Co-design"],
            common_questions: ["Safety critical systems.", "Swarm robotics.", "Deploying fleets.", "Edge AI."],
            tips: ["Architecture.", "Safety.", "Autonomy."]
        },
        {
            level: "VP of Robotics",
            experience: "15-30+ Years",
            interview_focus: "Division Strategy",
            key_concepts: ["Robotics Strategy", "Commercialization", "Supply Chain", "Regulatory"],
            common_questions: ["Go-to-Market for robots.", "Manufacturing scale.", "AI in robotics.", "Ethical considerations."],
            tips: ["Strategy.", "Commercials.", "Scale."]
        }
    ],
    "penetration-tester": [
        {
            level: "Junior Pentester",
            experience: "0-2 Years",
            interview_focus: "Methodology",
            key_concepts: ["OWASP Top 10", "Nmap/Burp", "Networking", "Linux"],
            common_questions: ["SQLi explanation.", "XSS types.", "Enumeration steps.", "Report writing."],
            tips: ["CTFs.", "Certs (eJPT).", "Basics."]
        },
        {
            level: "Senior Pentester",
            experience: "3-8 Years",
            interview_focus: "Exploitation",
            key_concepts: ["Active Directory", "Buffer Overflow", "Cloud Pentesting", "Evasion"],
            common_questions: ["Golden Ticket attack.", "Bypassing WAF.", "Privilege escalation.", "Mobile pentesting."],
            tips: ["OSCP.", "Advanced exploits.", "Cloud."]
        },
        {
            level: "Red Team Lead",
            experience: "8-15 Years",
            interview_focus: "Adversary Sim",
            key_concepts: ["APT Simulation", "C2 Infrastructure", "Physical Security", "Social Engineering"],
            common_questions: ["Designing a campaign.", "Evading EDR.", "Assume breach.", "Managing red teams."],
            tips: ["Leadership.", "Strategy.", "Advanced ops."]
        },
        {
            level: "Head of Offensive Security",
            experience: "15-30+ Years",
            interview_focus: "Risk Strategy",
            key_concepts: ["Offsec Strategy", "Risk Reporting", "Defense Improvement", "Budget"],
            common_questions: ["Value of red teaming.", "Measuring risk reduction.", "Building blue team feedback loops.", "Legal bounds."],
            tips: ["Strategy.", "Risk.", "Business value."]
        }
    ],
    "ai-prompt-engineer": [
        {
            level: "Prompt Engineer",
            experience: "0-2 Years",
            interview_focus: "Prompting",
            key_concepts: ["Zero-shot", "Chain-of-thought", "LLM Params", "Context Window"],
            common_questions: ["Reducing hallucinations.", "Structuring prompts.", "Temperature settings.", "Use cases."],
            tips: ["Portfolio.", "Experimentation.", "Basics."]
        },
        {
            level: "Senior AI Eng",
            experience: "3-8 Years",
            interview_focus: "Integration",
            key_concepts: ["RAG", "LangChani", "Fine-tuning", "Evaluation"],
            common_questions: ["Building RAG pipelines.", "Evaluating outputs.", "Fine-tuning vs Prompting.", "Vector DBs."],
            tips: ["Coding.", "RAG.", "Architecture."]
        },
        {
            level: "Principal AI Architect",
            experience: "8-15 Years",
            interview_focus: "Enterprise AI",
            key_concepts: ["LLM Ops", "Model Selection", "Security/Privacy", "Cost Mgmt"],
            common_questions: ["Enterprise LLM architecture.", "Data privacy in AI.", "Optimizing token costs.", "Agentic workflows."],
            tips: ["Architecture.", "Security.", "Scale."]
        },
        {
            level: "Head of GenAI",
            experience: "15-30+ Years",
            interview_focus: "Transformation",
            key_concepts: ["AI Strategy", "Future of Work", "Ethics", "Innovation"],
            common_questions: ["GenAI roadmap.", "Impact on workforce.", "Competitive advantage.", "Build vs Buy LLM."],
            tips: ["Vision.", "Strategy.", "Ethics."]
        }
    ],
    "hardware-engineer": [
        {
            level: "Hardware Eng",
            experience: "0-2 Years",
            interview_focus: "Circuit Basics",
            key_concepts: ["PCB Layout", "Analog/Digital", "Components", "Soldering"],
            common_questions: ["Ohm's law application.", "Op-amp configurations.", "PCB layers.", "Debugging circuits."],
            tips: ["Projects.", "PCB basics.", "Lab skills."]
        },
        {
            level: "Senior Hardware Eng",
            experience: "3-8 Years",
            interview_focus: "Design & EMI",
            key_concepts: ["High Speed Design", "EMI/EMC", "Power Integrity", "FPGA"],
            common_questions: ["Impedance matching.", "Reducing noise.", "FPGA timing.", "Manufacturing (DFM)."],
            tips: ["Design.", "Signal integrity.", "DFM."]
        },
        {
            level: "Principal Hardware Arch",
            experience: "8-15 Years",
            interview_focus: "System Architecture",
            key_concepts: ["System on Chip (SoC)", "Thermal Mgmt", "Reliability", "Architecture"],
            common_questions: ["SoC architecture.", "Thermal design strategy.", "Component selection strategy.", "Failure analysis."],
            tips: ["Architecture.", "Systems.", "Reliability."]
        },
        {
            level: "VP of Hardware",
            experience: "15-30+ Years",
            interview_focus: "Product Delivery",
            key_concepts: ["Hardware Roadmap", "Supply Chain", "Global Mfg", "Innovation"],
            common_questions: ["Hardware lifecycle.", "Supplier strategy.", "Cost reduction.", "Product innovation."],
            tips: ["Strategy.", "Operations.", "Delivery."]
        }
    ],
    "sre": [
        {
            level: "Junior SRE",
            experience: "0-2 Years",
            interview_focus: "Linux & Coding",
            key_concepts: ["Linux Internals", "Python/Go", "Monitoring", "Troubleshooting"],
            common_questions: ["Boot process.", "Debugging high load.", "Writing a parser.", "Metric types."],
            tips: ["Coding.", "Linux.", "Basics."]
        },
        {
            level: "Senior SRE",
            experience: "3-8 Years",
            interview_focus: "System Design",
            key_concepts: ["Distributed Systems", "Chaos Engineering", "SLO/SLA", "Capacity Planning"],
            common_questions: ["Designing for failure.", "Defining SLOs.", "Incident management.", "Load balancing."],
            tips: ["Systems.", "Reliability.", "Design."]
        },
        {
            level: "Principal SRE",
            experience: "8-15 Years",
            interview_focus: "Platform",
            key_concepts: ["Platform Eng", "Multi-Region", "Database SRE", "Observability Strategy"],
            common_questions: ["Global traffic management.", "Database scalability.", "Observability stacks.", "Cultural transformation."],
            tips: ["Platform.", "Strategy.", "Culture."]
        },
        {
            level: "VP of Reliability",
            experience: "15-30+ Years",
            interview_focus: "Operational Strategy",
            key_concepts: ["Reliability Strategy", "Risk Mgmt", "Cloud Economics", "Org Structure"],
            common_questions: ["Cost of downtime.", "Reliability roadmap.", "Cloud spend efficiency.", "Scaling SRE teams."],
            tips: ["Strategy.", "Risk.", "Economics."]
        }
    ],
    "computer-vision": [
        {
            level: "CV Engineer",
            experience: "0-2 Years",
            interview_focus: "Image Basics",
            key_concepts: ["OpenCV", "CNNs", "Image Processing", "Python"],
            common_questions: ["Edge detection.", "Convolution operation.", "Object detection basics.", "Data augmentation."],
            tips: ["Projects.", "Math.", "Basics."]
        },
        {
            level: "Senior CV Eng",
            experience: "3-8 Years",
            interview_focus: "Deep Learning",
            key_concepts: ["Transformers (ViT)", "GANs", "3D Vision", "Optimization"],
            common_questions: ["Attention in Vision.", "Generative models.", "SLAM.", "Model compression."],
            tips: ["Papers.", "Optimization.", "Advanced DL."]
        },
        {
            level: "Principal CV Scientist",
            experience: "8-15 Years",
            interview_focus: "Research & Scale",
            key_concepts: ["Video Understanding", "Corner Cases", "Edge AI", "Synthetic Data"],
            common_questions: ["Video analysis arch.", "Handling rare events.", "Deploying on edge.", "Data strategy."],
            tips: ["Research.", "Edge.", "Strategy."]
        },
        {
            level: "Head of Perception",
            experience: "15-30+ Years",
            interview_focus: "Vision Strategy",
            key_concepts: ["Perception Stack", "Autonomous Systems", "AI Safety", "Productization"],
            common_questions: ["Perception for autonomy.", "Safety cases.", "Product roadmap.", "Future of CV."],
            tips: ["Strategy.", "Safety.", "Product."]
        }
    ],
    "nlp-specialist": [
        {
            level: "NLP Engineer",
            experience: "0-2 Years",
            interview_focus: "Text Basics",
            key_concepts: ["Tokenization", "RNN/LSTM", "Regex", "Embeddings"],
            common_questions: ["Bag of Words vs Embeddings.", "LSTM gates.", "Sentiment analysis.", "Preprocessing."],
            tips: ["Basics.", "Projects.", "Cleaning."]
        },
        {
            level: "Senior NLP Eng",
            experience: "3-8 Years",
            interview_focus: "Transformers",
            key_concepts: ["BERT/GPT", "Attention Mechanism", "NER/Translation", "HuggingFace"],
            common_questions: ["Self-attention.", "Fine-tuning BERT.", "Encoder vs Decoder.", "Handling long context."],
            tips: ["Transformers.", "Libraries.", "Architecture."]
        },
        {
            level: "Principal NLP Scientist",
            experience: "8-15 Years",
            interview_focus: "LLMs & Research",
            key_concepts: ["LLM Training", "RLHF", "Multimodal", "Efficiency"],
            common_questions: ["Training large models.", "Reward modeling.", "Multimodal fusion.", "Quantization."],
            tips: ["LLMs.", "Research.", "Training."]
        },
        {
            level: "Head of NLP",
            experience: "15-30+ Years",
            interview_focus: "Language AI",
            key_concepts: ["Conversational AI Strategy", "Global Languages", "Ethical AI", "Product Integration"],
            common_questions: ["NLP product strategy.", "Language expansion.", "Bias mitigation.", "Generative AI roadmap."],
            tips: ["Strategy.", "Product.", "Ethics."]
        }
    ],
    "firmware-engineer": [
        {
            level: "Firmware Eng",
            experience: "0-2 Years",
            interview_focus: "C & Micros",
            key_concepts: ["C Programming", "Microcontrollers", "Drivers", "Debugging"],
            common_questions: ["Pointers.", "Memory map.", "Writing a driver.", "Using a debugger."],
            tips: ["C skills.", "Hardware basics.", "Debugging."]
        },
        {
            level: "Senior Firmware Eng",
            experience: "3-8 Years",
            interview_focus: "RTOS & Arch",
            key_concepts: ["RTOS Design", "Bootloaders", "Power Mgmt", "Communication Stacks"],
            common_questions: ["Scheduler design.", "Secure boot.", "Sleep modes.", "BLE/WiFi stacks."],
            tips: ["RTOS.", "Architecture.", "Stacks."]
        },
        {
            level: "Principal Firmware Arch",
            experience: "8-15 Years",
            interview_focus: "System Level",
            key_concepts: ["System Security", "OTA Architecture", "Hardware Abstraction", "Testing frameworks"],
            common_questions: ["Security architecture.", "Robust OTA.", "HAL design.", "Automated testing."],
            tips: ["Architecture.", "Security.", "Reliability."]
        },
        {
            level: "Director of Embedded Sw",
            experience: "15-30+ Years",
            interview_focus: "Strategy & Quality",
            key_concepts: ["Software Quality", "Platform Strategy", "Supply Chain", "Processes"],
            common_questions: ["Quality at scale.", "Platform approach.", "Managing chip shortages.", "Agile in firmware."],
            tips: ["Strategy.", "Process.", "Quality."]
        }
    ],
    "big-data-engineer": [
        {
            level: "Junior Big Data Eng",
            experience: "0-2 Years",
            interview_focus: "Hadoop Ecosystem",
            key_concepts: ["HDFS", "MapReduce Concepts", "Hive/Pig", "SQL"],
            common_questions: ["HDFS architecture.", "External vs Internal tables.", "File formats (Parquet/Avro).", "Writing a Hive query."],
            tips: ["Basics.", "SQL.", "Hadoop."]
        },
        {
            level: "Senior Big Data Eng",
            experience: "3-8 Years",
            interview_focus: "Spark & Streaming",
            key_concepts: ["Apache Spark", "Kafka/Flink", "Performance Tuning", "NoSQL"],
            common_questions: ["Catalyst optimizer.", "Spark memory management.", "Exactly-once semantics.", "Cassandra data modeling."],
            tips: ["Spark internals.", "Streaming.", "Tuning."]
        },
        {
            level: "Principal Data Architect",
            experience: "8-15 Years",
            interview_focus: "Cloud Data Platforms",
            key_concepts: ["Snowflake/Databricks", "Data Mesh", "Governance", "Cost Optimization"],
            common_questions: ["Lakehouse architecture.", "Separation of storage/compute.", "Data lineage.", "Securing data lakes."],
            tips: ["Architecture.", "Cloud.", "Gov."]
        },
        {
            level: "VP of Data Engineering",
            experience: "15-30+ Years",
            interview_focus: "Data Strategy",
            key_concepts: ["Data Democratization", "Enterprise Data", "Compliance", "Team Structure"],
            common_questions: ["Data strategy for AI.", "Privacy regulations (GDPR).", "Building data culture.", "Vendor negotiation."],
            tips: ["Strategy.", "Culture.", "Value."]
        }
    ],
    "user-researcher": [
        {
            level: "UX Researcher",
            experience: "0-2 Years",
            interview_focus: "Methodology",
            key_concepts: ["Usability Testing", "Interviews", "Surveys", "Personas"],
            common_questions: ["Qualitative vs Quantitative.", "Designing a study.", "Bias in research.", "Analyzing results."],
            tips: ["Portfolio.", "Methods.", "Empathy."]
        },
        {
            level: "Senior Researcher",
            experience: "3-8 Years",
            interview_focus: "Strategy & Ops",
            key_concepts: ["Research Ops", "Mixed Methods", "Stakeholder Mgmt", "Journey Mapping"],
            common_questions: ["Democratizing research.", "Influence without authority.", "Measuring impact.", "Complex studies."],
            tips: ["Operations.", "Influence.", "Mixed methods."]
        },
        {
            level: "Principal Researcher",
            experience: "8-15 Years",
            interview_focus: "Org Impact",
            key_concepts: ["Human-Centered Strategy", "Service Design", "Mentorship", "Innovation"],
            common_questions: ["Strategic research.", "Service blueprints.", "Scaling research teams.", "Future trends."],
            tips: ["Strategy.", "Service design.", "Leadership."]
        },
        {
            level: "Head of Research",
            experience: "15-30+ Years",
            interview_focus: "Customer Insights",
            key_concepts: ["Insights Strategy", "Market Intelligence", "Executive Advisory", "Culture"],
            common_questions: ["Research ROI.", "Building a customer-centric culture.", "Integrating with Data Science.", "Global insights."],
            tips: ["Vision.", "Culture.", "ROI."]
        }
    ],
    "accessibility-specialist": [
        {
            level: "A11y Specialist",
            experience: "0-2 Years",
            interview_focus: "WCAG Basics",
            key_concepts: ["WCAG 2.1", "Screen Readers", "ARIA", "Keyboard Nav"],
            common_questions: ["POUR principles.", "Testing with NVDA/VoiceOver.", "Alt text best practices.", "Color contrast."],
            tips: ["Guidelines.", "Tools.", "Empathy."]
        },
        {
            level: "Senior A11y Eng",
            experience: "3-8 Years",
            interview_focus: "Remediation",
            key_concepts: ["Auditing", "Code Remediation", "Design Systems", "VPAT"],
            common_questions: ["Automated vs Manual testing.", "Fixing complex widgets.", "Writing a VPAT.", "Training devs."],
            tips: ["Audits.", "Code fixes.", "Training."]
        },
        {
            level: "Principal A11y Architect",
            experience: "8-15 Years",
            interview_focus: "Program Mgmt",
            key_concepts: ["Accessibility Program", "Legal Compliance", "Shift Left", "Tooling"],
            common_questions: ["Building an a11y champions program.", "Risk mitigation.", "Integrating into CI/CD.", "Procurement policies."],
            tips: ["Program.", "Legal.", "Culture."]
        },
        {
            level: "Head of Inclusive Design",
            experience: "15-30+ Years",
            interview_focus: "Inclusion Strategy",
            key_concepts: ["Inclusive Design", "Global Compliance", "Market Opportunity", "Ethics"],
            common_questions: ["Business case for accessibility.", "Global regulations.", "Inclusive innovation.", "Brand reputation."],
            tips: ["Strategy.", "Inclusion.", "Business."]
        }
    ],
    "release-manager": [
        {
            level: "Release Coordinator",
            experience: "0-2 Years",
            interview_focus: "Process",
            key_concepts: ["Release Calendar", "Versioning", "Changelogs", "Coordination"],
            common_questions: ["Semantic versioning.", "Coordinating deployments.", "Communication plans.", "Rollback basics."],
            tips: ["Process.", "Communication.", "Detail."]
        },
        {
            level: "Release Manager",
            experience: "3-8 Years",
            interview_focus: "Automation & Risk",
            key_concepts: ["CI/CD pipelines", "Risk Assessment", "Automated Gates", "Environment Mgmt"],
            common_questions: ["Blue/Green deployment.", "Canary releases.", "Managing release risk.", "Auditing releases."],
            tips: ["Pipelines.", "Risk.", "Automation."]
        },
        {
            level: "Principal Release Eng",
            experience: "8-15 Years",
            interview_focus: "Delivery Velocity",
            key_concepts: ["DORA Metrics", "Value Stream Mgmt", "Feature Flags", "Platform Eng"],
            common_questions: ["Improving lead time for changes.", "Release orchestration.", "Scaling release processes.", "Developer productivity."],
            tips: ["Metrics.", "Velocity.", "Scale."]
        },
        {
            level: "Head of Release Engineering",
            experience: "15-30+ Years",
            interview_focus: "Delivery Strategy",
            key_concepts: ["Continuous Delivery Strategy", "Governance", "Efficiency", "Tooling Strategy"],
            common_questions: ["Moving to daily releases.", "Release governance at scale.", "Cost of delivery.", "Strategic tooling."],
            tips: ["Strategy.", "Governance.", "Efficiency."]
        }
    ],
    "it-auditor": [
        {
            level: "Junior Auditor",
            experience: "0-2 Years",
            interview_focus: "Compliance Basics",
            key_concepts: ["ITGC", "Sampling", "Documentation", "Controls"],
            common_questions: ["Logical access controls.", "Change management audit.", "Evidence gathering.", "Reporting findings."],
            tips: ["Controls.", "Documentation.", "Basics."]
        },
        {
            level: "Senior IT Auditor",
            experience: "3-8 Years",
            interview_focus: "Frameworks",
            key_concepts: ["COBIT", "NIST", "Cloud Auditing", "Risk Based Audit"],
            common_questions: ["Auditing AWS/Azure.", "Risk assessment methodology.", "Handling disagreements.", "SOC2 preparation."],
            tips: ["Frameworks.", "Cloud.", "Risk."]
        },
        {
            level: "Audit Manager",
            experience: "8-15 Years",
            interview_focus: "Plan & Lead",
            key_concepts: ["Audit Planning", "Stakeholder Mgmt", "Data Analytics", "Quality Assurance"],
            common_questions: ["Developing annual audit plan.", "Continuous auditing.", "Managing teams.", "Executive reporting."],
            tips: ["Planning.", "Leadership.", "Analytics."]
        },
        {
            level: "Chief Audit Executive",
            experience: "15-30+ Years",
            interview_focus: "Assurance Strategy",
            key_concepts: ["Board Assurance", "Enterprise Risk", "Strategic Insight", "Culture"],
            common_questions: ["Aligning audit with strategy.", "Audit committee relationship.", "Emerging risks.", "Value-add audit."],
            tips: ["Executive.", "Strategy.", "Insight."]
        }
    ],
    "growth-engineer": [
        {
            level: "Growth Engineer",
            experience: "0-2 Years",
            interview_focus: "Experiments",
            key_concepts: ["A/B Testing", "Funnel Analysis", "Frontend/Fullstack", "Analytics"],
            common_questions: ["Designing an A/B test.", "Implement tracking.", "Landing page optimization.", "Viral loops."],
            tips: ["Experiments.", "Code.", "Data."]
        },
        {
            level: "Senior Growth Eng",
            experience: "3-8 Years",
            interview_focus: "Acquisition & Retention",
            key_concepts: ["Technical SEO", "Email Engineering", "Referral Systems", "MarTech"],
            common_questions: ["Building referral engines.", "SEO architecture.", "Email deliverability.", "Integrating MarTech stack."],
            tips: ["Acquisition.", "Retention.", "Architecture."]
        },
        {
            level: "Principal Growth Arch",
            experience: "8-15 Years",
            interview_focus: "Growth Platform",
            key_concepts: ["Experimentation Platform", "Data Pipelines", "Identity Resolution", "Scalability"],
            common_questions: ["Building internal A/B testing tools.", "Real-time personalization.", "Attribution modeling.", "Scale."],
            tips: ["Platform.", "Data.", "Strategy."]
        },
        {
            level: "VP of Growth",
            experience: "15-30+ Years",
            interview_focus: "Growth Strategy",
            key_concepts: ["Unit Economics", "North Star Metric", "Product-Led Growth", "Org Design"],
            common_questions: ["CAC vs LTV optimization.", "PLG strategy.", "Aligning Product/Marketing/Eng.", "Growth culture."],
            tips: ["Economics.", "Strategy.", "Leadership."]
        }
    ],
    "technical-artist": [
        {
            level: "Junior Tech Art",
            experience: "0-2 Years",
            interview_focus: "Pipeline Basics",
            key_concepts: ["Rigging", "Scripting (Python/MEL)", "Shaders", "Optimization"],
            common_questions: ["FK vs IK.", "Writing a simple tool.", "Texture optimization.", "PBR basics."],
            tips: ["Portfolio.", "Scripting.", "Art/Tech blend."]
        },
        {
            level: "Senior Tech Artist",
            experience: "3-8 Years",
            interview_focus: "Tools & Shaders",
            key_concepts: ["HLSL/GLSL", "Procedural Gen", "Performance Profiling", "Asset Pipelines"],
            common_questions: ["Optimizing draw calls.", "Complex shader creation.", "Houdini methodology.", "Automating exports."],
            tips: ["Shaders.", "Tools.", "Profiling."]
        },
        {
            level: "Principal Tech Artist",
            experience: "8-15 Years",
            interview_focus: "Engine & Workflow",
            key_concepts: ["Engine Extension", "Render Tech", "Workflow Architecture", "Mentorship"],
            common_questions: ["Extending editor functionality.", "Next-gen rendering.", "Pipeline architecture.", "Bridging Art/Code."],
            tips: ["Deep tech.", "Architecture.", "Leadership."]
        },
        {
            level: "Technical Art Director",
            experience: "15-30+ Years",
            interview_focus: "Visual Tech Strategy",
            key_concepts: ["Visual Bar", "R&D Strategy", "Standardization", "Studio Efficiency"],
            common_questions: ["Setting the visual technology bar.", "Investing in R&D.", "Cross-project sharing.", "Future of content creation."],
            tips: ["Vision.", "Strategy.", "Efficiency."]
        }
    ],
    "bioinformatics-scientist": [
        {
            level: "Bioinformatician",
            experience: "0-2 Years",
            interview_focus: "Genomics & Scripting",
            key_concepts: ["Python/R/Bash", "NGS Analysis", "Databases (NCBI)", "Statistics"],
            common_questions: ["File formats (FASTQ/BAM).", "Sequence alignment.", "Basic stats.", "Pipeline usage."],
            tips: ["Biology + Code.", "Pipelines.", "Data."]
        },
        {
            level: "Senior Scientist",
            experience: "3-8 Years",
            interview_focus: "Algorithm & Scale",
            key_concepts: ["Cloud Computing", "Algorithm Development", "Machine Learning", "Data Integration"],
            common_questions: ["Scaling pipelines on cloud.", "Developing novel algorithms.", "Multi-omics integration.", "Reproducibility."],
            tips: ["Algorithms.", "Cloud.", "Science."]
        },
        {
            level: "Principal Scientist",
            experience: "8-15 Years",
            interview_focus: "Discovery & Strategy",
            key_concepts: ["Drug Discovery", "Computational Biology", "Team Leadership", "Grant Writing"],
            common_questions: ["Target identification.", "AI in drug discovery.", "Strategic collaborations.", "Mentoring scientists."],
            tips: ["Discovery.", "Leadership.", "Innovation."]
        },
        {
            level: "Head of Computational Bio",
            experience: "15-30+ Years",
            interview_focus: "Research Strategy",
            key_concepts: ["R&D Strategy", "Pipeline Portfolio", "Partnerships", "Executive Mgmt"],
            common_questions: ["Computational strategy for therapeutics.", "Build vs Partner.", "Accelerating discovery.", "Org structure."],
            tips: ["Strategy.", "Impact.", "Executive."]
        }
    ],
    "quantum-computing-researcher": [
        {
            level: "Quantum Researcher",
            experience: "0-2 Years",
            interview_focus: "Qubits & Gates",
            key_concepts: ["Linear Algebra", "Qiskit/Cirq", "Quantum Gates", "Error Correction"],
            common_questions: ["Explain maintain superposition.", "Grover's algorithm.", "Quantum circuit construction.", "Noise models."],
            tips: ["Math.", "Physics.", "Coding."]
        },
        {
            level: "Senior Quantum Eng",
            experience: "3-8 Years",
            interview_focus: "Algorithms & Hardware",
            key_concepts: ["Quantum Algorithms", "Control Systems", "Calibration", "Hybrid Systems"],
            common_questions: ["VQE implementation.", "Pulse level control.", "Hardware constraints.", "Optimizing circuits."],
            tips: ["Algorithms.", "Hardware.", "Optimization."]
        },
        {
            level: "Principal Scientist",
            experience: "8-15 Years",
            interview_focus: "Advancement",
            key_concepts: ["Fault Tolerance", "QEC Codes", "Novel Qubits", "Strategic Research"],
            common_questions: ["Path to fault tolerance.", "Novel error correction codes.", "Hardware roadmap.", "Leading research projects."],
            tips: ["Deep science.", "Innovation.", "Leadership."]
        },
        {
            level: "Head of Quantum",
            experience: "15-30+ Years",
            interview_focus: "Quantum Strategy",
            key_concepts: ["Commercialization", "Ecosystem", "Govt Relations", "Vision"],
            common_questions: ["Quantum advantage timeline.", "Industry use cases.", "Strategic partnerships.", "Building a quantum lab."],
            tips: ["Vision.", "Commercials.", "Strategy."]
        }
    ],
    "product-marketing-manager": [
        {
            level: "PMM",
            experience: "0-2 Years",
            interview_focus: "Launches & Messaging",
            key_concepts: ["Positioning", "Sales Enablement", "Launch Plans", "Content"],
            common_questions: ["Writing a positioning statement.", "Launch checklist.", "Enablement assets.", "Competitor analysis."],
            tips: ["Writing.", "Planning.", "Collaboration."]
        },
        {
            level: "Senior PMM",
            experience: "3-8 Years",
            interview_focus: "Strategy & Market",
            key_concepts: ["Go-To-Market", "Persona Development", "Pricing", "Analyst Relations"],
            common_questions: ["Complex launch strategy.", "Pricing models.", "Briefing analysts.", "Market segmentation."],
            tips: ["GTM.", "Strategy.", "Pricing."]
        },
        {
            level: "Director of Product Marketing",
            experience: "8-15 Years",
            interview_focus: "category Creation",
            key_concepts: ["Category Design", "Team Scale", "Strategic Narrative", "Revenue Impact"],
            common_questions: ["Creating a new category.", "Scaling PMM teams.", "Aligning with Product/Sales.", "Measuring PMM impact."],
            tips: ["Category.", "Leadership.", "Revenue."]
        },
        {
            level: "VP of Marketing",
            experience: "15-30+ Years",
            interview_focus: "Brand & Growth",
            key_concepts: ["Company Narrative", "Brand Strategy", "Executive Team", "Market Share"],
            common_questions: ["Company storytelling.", "Global expansion.", "Marketing mix modeling.", "Leading marketing org."],
            tips: ["Narrative.", "Executive.", "Growth."]
        }
    ],
    "instructional-designer": [
        {
            level: "Instructional Designer",
            experience: "0-2 Years",
            interview_focus: "ADDIE & Tools",
            key_concepts: ["ADDIE Model", "Articulate/Captivate", "Storyboarding", "LMS"],
            common_questions: ["Learning objectives.", "Storyboarding process.", "Accessibility in learning.", "Evaluation (Kirkpatrick)."],
            tips: ["Process.", "Tools.", "Portfolio."]
        },
        {
            level: "Senior ID",
            experience: "3-8 Years",
            interview_focus: "Curriculum & UX",
            key_concepts: ["Learning Science", "Curriculum Design", "User Experience", "Gamification"],
            common_questions: ["Designing a curriculum.", "Adult learning theories.", "Measuring efficacy.", "Interactive learning."],
            tips: ["Theory.", "Design.", "Outcome."]
        },
        {
            level: "Principal Learning Architect",
            experience: "8-15 Years",
            interview_focus: "Organizational Learning",
            key_concepts: ["Learning Strategy", "Knowledge Mgmt", "Performance Consulting", "Tech Stack"],
            common_questions: ["Skill gap analysis.", "Learning culture.", "LXP implementation.", "Consulting with business."],
            tips: ["Strategy.", "Consulting.", "Architecture."]
        },
        {
            level: "CLO (Chief Learning Officer)",
            experience: "15-30+ Years",
            interview_focus: "Talent Development",
            key_concepts: ["Talent Strategy", "Workforce Future", "Leadership Dev", "Culture"],
            common_questions: ["Upskilling strategy.", "Future of work.", "Leadership pipeline.", "Learning ROI."],
            tips: ["Talent.", "Culture.", "Executive."]
        }
    ],
    "localization-manager": [
        {
            level: "Localization Specialist",
            experience: "0-2 Years",
            interview_focus: "Process & Translation",
            key_concepts: ["CAT Tools", "Translation Memory", "Glossaries", "QA"],
            common_questions: ["L10n vs i18n.", "Managing vendors.", "Quality assurance.", "glossary maintenance."],
            tips: ["Process.", "Tools.", "Language."]
        },
        {
            level: "Localization Manager",
            experience: "3-8 Years",
            interview_focus: "Program Mgmt",
            key_concepts: ["TMS Systems", "Automation", "Budgeting", "Simship"],
            common_questions: ["Selecting a TMS.", "Automating workouts.", "Managing localization budget.", "Simultaneous shipment."],
            tips: ["Automation.", "Budget.", "Scale."]
        },
        {
            level: "Director of Globalization",
            experience: "8-15 Years",
            interview_focus: "Global Strategy",
            key_concepts: ["Market Entry", "International Product", "Org Design", "Tech Strategy"],
            common_questions: ["Strategy for new market entry.", "Internationalization architecture.", "Building global teams.", "Vendor strategy."],
            tips: ["Strategy.", "Global.", "Tech."]
        },
        {
            level: "VP of International",
            experience: "15-30+ Years",
            interview_focus: "Global Growth",
            key_concepts: ["International P&L", "Regional Strategy", "Global Operations", "Expansion"],
            common_questions: ["Global P&L management.", "Regional autonomy vs Central.", "Cultural adaptation.", "Expansion roadmap."],
            tips: ["P&L.", "Operations.", "Growth."]
        }
    ],
    "digital-forensics": [
        {
            level: "Forensic Analyst",
            experience: "0-2 Years",
            interview_focus: "Collection & Analysis",
            key_concepts: ["Chain of Custody", "Disk Imaging", "File Systems", "Evidence Handling"],
            common_questions: ["Preserving evidence.", "FAT vs NTFS forensics.", "Hash values.", "Write blockers."],
            tips: ["Procedure.", "Tools (EnCase/FTK).", "Ethics."]
        },
        {
            level: "Senior Investigator",
            experience: "3-8 Years",
            interview_focus: "Complex Cases",
            key_concepts: ["Memory Forensics", "Network Forensics", "Mobile Forensics", "Malware Analysis"],
            common_questions: ["Volatile memory analysis.", "Packet capture analysis.", "Timeline reconstruction.", "Root cause."],
            tips: ["Advanced analysis.", "Reporting.", "Court prep."]
        },
        {
            level: "Principal Consultant",
            experience: "8-15 Years",
            interview_focus: "Expert Witness",
            key_concepts: ["Expert Testimony", "Legal Frameworks", "Large Scale Response", "Research"],
            common_questions: ["Testifying in court.", "eDiscovery strategy.", "Managing large incidents.", "Developing new methods."],
            tips: ["Expertise.", "Legal.", "Communication."]
        },
        {
            level: "Head of Forensics",
            experience: "15-30+ Years",
            interview_focus: "Practice Leadership",
            key_concepts: ["Practice Mgmt", "Lab Accreditation", "Global Response", "Strategy"],
            common_questions: ["Running a forensics lab.", "ISO 17025 accreditation.", "Global investigation strategy.", "Vendor management."],
            tips: ["Leadership.", "Standards.", "Strategy."]
        }
    ],
    "gis-developer": [
        {
            level: "GIS Analyst/Dev",
            experience: "0-2 Years",
            interview_focus: "Mapping & Data",
            key_concepts: ["ArcGIS/QGIS", "Python (ArcPy)", "Spatial SQL", "Cartography"],
            common_questions: ["Projections/Coordinate systems.", "Geocoding.", "Spatial join.", "Basic web maps."],
            tips: ["Tools.", "Data.", "Scripting."]
        },
        {
            level: "Senior GIS Dev",
            experience: "3-8 Years",
            interview_focus: "WebGIS & DB",
            key_concepts: ["PostGIS", "Leaflet/OpenLayers", "GeoServer", "Spatial Analysis"],
            common_questions: ["Optimizing spatial queries.", "Building custom web maps.", "Raster vs Vector analysis.", "ETL for spatial data."],
            tips: ["Database.", "Web.", "Analysis."]
        },
        {
            level: "GIS Architect",
            experience: "8-15 Years",
            interview_focus: "Enterprise GIS",
            key_concepts: ["SDI (Spatial Data Infra)", "Cloud GIS", "Integration", "Big Data Geo"],
            common_questions: ["Architecting SDI.", "Cloud native GIS.", "Integrating with ERP/CRM.", "Processing massive geo data."],
            tips: ["Architecture.", "Integration.", "Enterprise."]
        },
        {
            level: "Geospatial Director",
            experience: "15-30+ Years",
            interview_focus: "Location Strategy",
            key_concepts: ["Location Intelligence", "Digital Twin", "Strategic Roadmap", "Governance"],
            common_questions: ["Value of location intelligence.", "Digital Twin strategy.", "Data governance.", "Smart cities."],
            tips: ["Strategy.", "Intelligence.", "Vision."]
        }
    ],
    "mainframe-developer": [
        {
            level: "Mainframe Dev",
            experience: "0-2 Years",
            interview_focus: "COBOL & JCL",
            key_concepts: ["COBOL", "JCL", "DB2 Basics", "ISPF/TSO"],
            common_questions: ["Compiling COBOL.", "DD statements in JCL.", "VSAM files.", "Debugging."],
            tips: ["Legacy skills.", "Precision.", "Basics."]
        },
        {
            level: "Senior Mainframe Eng",
            experience: "3-8 Years",
            interview_focus: "CICS & DB2",
            key_concepts: ["CICS", "DB2 Optimization", "Assembler", "Performance"],
            common_questions: ["CICS transaction flow.", "Optimizing DB2 queries.", "Reading dumps.", "Batch processing."],
            tips: ["Performance.", "Internals.", "Reliability."]
        },
        {
            level: "Mainframe Architect",
            experience: "8-15 Years",
            interview_focus: "Modernization",
            key_concepts: ["Mainframe Modernization", "API Enablement", "Hybrid Cloud", "Integration"],
            common_questions: ["Exposing mainframe as API.", "Migration strategies (Rehost/Refactor).", "Integrating with cloud.", "Security."],
            tips: ["Modernization.", "Integration.", "Architecture."]
        },
        {
            level: "Director of Legacy Systems",
            experience: "15-30+ Years",
            interview_focus: "Transformation",
            key_concepts: ["Legacy Strategy", "Cost Optimization", "Risk Mgmt", "Talent Succession"],
            common_questions: ["Retiring legacy systems.", "Managing COBOL talent gap.", "MIPS optimization.", "Risk of aging infra."],
            tips: ["Strategy.", "Risk.", "Transformation."]
        }
    ],
    "iam-specialist": [
        {
            level: "IAM Analyst",
            experience: "0-2 Years",
            interview_focus: "Access Basics",
            key_concepts: ["Active Directory", "SSO Basics", "Provisioning", "MFA"],
            common_questions: ["Authentication vs Authorization.", "User lifecycle.", "Password policies.", "Ticket handling."],
            tips: ["Basics.", "Process.", "Tools."]
        },
        {
            level: "IAM Engineer",
            experience: "3-8 Years",
            interview_focus: "Implementation",
            key_concepts: ["OAuth/OIDC/SAML", "Identity Tools (Okta/SailPoint)", "PAM", "Directory Services"],
            common_questions: ["SAML flow.", "Implementing  OIDC.", "Privileged Access Management.", "Role Based Access Control (RBAC)."],
            tips: ["Protocols.", "Implementation.", "Security."]
        },
        {
            level: "Principal IAM Architect",
            experience: "8-15 Years",
            interview_focus: "Identity Strategy",
            key_concepts: ["Zero Trust Identity", "CIAM", "IGA (Governance)", "Cloud Identity"],
            common_questions: ["Architecting Zero Trust.", "Customer IAM strategy.", "Identity Governance.", "Cross-cloud identity."],
            tips: ["Architecture.", "Zero Trust.", "Governance."]
        },
        {
            level: "Head of Identity",
            experience: "15-30+ Years",
            interview_focus: "Security Posture",
            key_concepts: ["Identity Strategy", "Risk & Compliance", "Digital Trust", "Budget"],
            common_questions: ["Identity as the new perimeter.", "Regulatory compliance (GDPR/CCPA).", "Reducing friction vs Security.", "Strategic roadmap."],
            tips: ["Strategy.", "Trust.", "Leadership."]
        }
    ]
};

export default interviewData;
