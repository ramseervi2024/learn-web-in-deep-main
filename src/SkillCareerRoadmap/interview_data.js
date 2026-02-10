const interviewData = {
    "frontend": [
        {
            level: "Fresher / Trainee",
            experience: "0-1 Years",
            interview_focus: "Core Web Basics & Problem Solving",
            key_concepts: ["HTML5 Semantic Elements", "CSS Box Model & Flexbox", "JavaScript Data Types & Loops", "DOM Manipulation"],
            common_questions: [
                "What is the difference between let, const, and var?",
                "Explain the CSS Box Model.",
                "What is the extensive use of 'this' keyword?",
                "Difference between null and undefined?"
            ],
            tips: ["Build a portfolio with at least 3 distinct projects.", "Know your resume projects inside out.", "Practice basic algorithmic problems on LeetCode (Easy)."]
        },
        {
            level: "Junior Developer",
            experience: "1-3 Years",
            interview_focus: "React/Framework Knowledge & API Handling",
            key_concepts: ["React Hooks (useState, useEffect)", "Component Lifecycle", "PROPS vs STATE", "REST API usage (fetch/axios)", "Git workflow"],
            common_questions: [
                "Explain the Virtual DOM in React.",
                "What are Higher-Order Components?",
                "How do you handle state management in a small app?",
                "Explain Event Bubbling and Capturing."
            ],
            tips: ["Showcase ability to debug code.", "Understand how to consume APIs correctly.", "Be prepared to do a small live coding task (e.g., build a counter or todo list)."]
        },
        {
            level: "Mid-Level Developer",
            experience: "3-6 Years",
            interview_focus: "Performance, Architecture & Advanced React",
            key_concepts: ["Custom Hooks", "Context API vs Redux", "Performance Optimization (useMemo, useCallback)", "Next.js Basics (SSR vs CSR)", "Unit Testing (Jest)"],
            common_questions: [
                "How does React curation work?",
                "Explain the difference between useMemo and useCallback.",
                "How would you optimize a slow-rendering list?",
                "What is Prop Drilling and how to avoid it?"
            ],
            tips: ["Talk about trade-offs in your technical decisions.", "Demonstrate knowledge of browser rendering critical path.", "Have experience stories about refactoring legacy code."]
        },
        {
            level: "Senior Developer",
            experience: "6-10 Years",
            interview_focus: "System Design, Scalability & Mentorship",
            key_concepts: ["Frontend System Design", "Micro-frontends", "CI/CD for Frontend", "Web Security (XSS, CSRF)", "Accessibility (WCAG)"],
            common_questions: [
                "Design a news feed component like Facebook.",
                "How do you handle errors in a large scale application?",
                "Explain your strategy for migrating a legacy codebase.",
                "How do you ensure code quality in your team?"
            ],
            tips: ["Focus on system design interviews.", "Show leadership qualities.", "Discuss business impact of your technical choices."]
        },
        {
            level: "Tech Lead / Staff Engineer",
            experience: "10-15 Years",
            interview_focus: "Architecture, Team Strategy & Cross-functional Leadership",
            key_concepts: ["Large Scale Architecture patterns", "Monorepos", "Build Tools Deep Dive (Webpack/Vite)", "Cloud integration", "Hiring & Team Building"],
            common_questions: [
                "Design the architecture for a global e-commerce site.",
                "How do you handle technical debt at an organizational level?",
                "Describe a time you disagreed with product management and how you resolved it.",
                "How do you measure engineering productivity?"
            ],
            tips: ["Think beyond just code; think product and business.", "Prepare stories about conflict resolution and strategic planning.", "Understand the 'why' behind every technology choice."]
        },
        {
            level: "Principal Engineer",
            experience: "15-20 Years",
            interview_focus: "Organizational Technical Strategy & Innovation",
            key_concepts: ["Enterprise Architecture", "Technology Radar", "Build vs Buy decisions", "Organizational Culture", "Future Tech Evaluation"],
            common_questions: [
                "How would you define the frontend technology strategy for the next 3 years?",
                "How do you foster innovation in a large engineering org?",
                "Assess the risk of adopting a bleeding-edge technology."
            ],
            tips: ["Act as a consultant.", "Show vision and long-term thinking.", "Demonstrate ability to influence without authority."]
        },
        {
            level: "Distinguished Engineer / Fellow",
            experience: "20-30+ Years",
            interview_focus: "Industry Influence & Global Strategy",
            key_concepts: ["Industry Standards", "Global Engineering Operations", "Tech Visionary Leadership", "Mergers & Acquisitions Tech Due Diligence"],
            common_questions: [
                "How do you see the evolution of web technologies in the next decade?",
                "Describe your biggest engineering failure and what the organization learned from it."
            ],
            tips: ["You are being hired for your wisdom and network.", "Be humble but authoritative.", "Focus on legacy and impact."]
        }
    ],
    "backend": [
        {
            level: "Fresher / Trainee",
            experience: "0-1 Years",
            interview_focus: "Basics of Programming & SQL",
            key_concepts: ["OOP Principles", "Basic SQL Queries (SELECT, JOIN)", "Data Structures (Arrays, Strings)", "HTTP Methods"],
            common_questions: [
                "Explain OOP concepts with examples.",
                "Write a SQL query to find the second highest salary.",
                "What is the difference between GET and POST?",
                "Reverse a string without using built-in functions."
            ],
            tips: ["Master one programming language (Java/Python/Node).", "Brush up on SQL basics.", "Know how the internet works (DNS, HTTP)."]
        },
        {
            level: "Junior Developer",
            experience: "1-3 Years",
            interview_focus: "API Development & Database Interaction",
            key_concepts: ["RESTful API constraints", "CRUD operations", "Authentication (Basic, JWT)", "Error Handling", "Git"],
            common_questions: [
                "What is a REST API?",
                "Difference between SQL and NoSQL.",
                "How does JWT authentication work?",
                "Explain the concept of middleware."
            ],
            tips: ["Build a full CRUD API project.", "Understand HTTP status codes.", "Learn basic Linux commands."]
        },
        {
            level: "Mid-Level Developer",
            experience: "3-6 Years",
            interview_focus: "Database optimization, Caching & Architecture",
            key_concepts: ["Database Indexing", "Caching Strategies (Redis)", "Docker/Containerization", "Message Queues (RabbitMQ/Kafka)", "Solid Principles"],
            common_questions: [
                "How do you optimize a slow database query?",
                "When to use Redis?",
                "Explain ACID properties.",
                "Difference between vertical and horizontal scaling."
            ],
            tips: ["Learn about system scalability.", "Understand when to use async processing.", "Practice low-level system design."]
        },
        {
            level: "Senior Developer",
            experience: "6-10 Years",
            interview_focus: "Distributed Systems & Microservices",
            key_concepts: ["Microservices vs Monolith", "CAP Theorem", "Load Balancing", "Database Sharding", "CI/CD Pipelines"],
            common_questions: [
                "Design a URL shortener (System Design).",
                "How do you handle distributed transactions?",
                "Explain Database Normalization vs Denormalization.",
                "How to ensure API security?"
            ],
            tips: ["Master System Design interviews (Grokking the System Design Interview).", "Understand trade-offs in distributed systems.", "Be ready to critique architectures."]
        },
        {
            level: "Tech Lead / Staff Engineer",
            experience: "10-15 Years",
            interview_focus: "High Level Design & Technical Leadership",
            key_concepts: ["Event-Driven Architecture", "Cloud Native Patterns", "Observability (Tracing/Logging)", "Team Mentorship", "Cost Optimization"],
            common_questions: [
                "Design a chat application like WhatsApp.",
                "How do you handle API versioning strategies?",
                "Discuss a failure scenario you managed in production.",
                "How do you drive technical consensus?"
            ],
            tips: ["Focus on reliability and maintainability.", "Demonstrate ability to lead multiple teams.", "Understand cloud cost implications."]
        },
        {
            level: "Principal Engineer",
            experience: "15-20 Years",
            interview_focus: "Enterprise Strategy & Multi-Cloud",
            key_concepts: ["Multi-region Architectures", "Disaster Recovery", "Data Governance", "Enterprise Integration Patterns", "Tech Strategy"],
            common_questions: [
                "Design a global video streaming service like Netflix.",
                "How do you ensure data compliance (GDPR) across regions?",
                "Strategy for migrating from on-prem to cloud."
            ],
            tips: ["Think global scale.", "Focus on resilience and compliance.", "Showcase strategic thinking."]
        },
        {
            level: "Distinguished Engineer / CTO",
            experience: "20-30+ Years",
            interview_focus: "Executive Vision & Engineering Culture",
            key_concepts: ["Engineering Excellence", "Build vs Buy for Enterprise", "M&A Tech Integration", "Org Structure"],
            common_questions: [
                "How do you align engineering goals with business objectives?",
                "How do you cultivate a high-performance engineering culture?"
            ],
            tips: ["Speak the language of business.", "Focus on culture and people.", "Visionary leadership."]
        }
    ],
    "react-native": [
        {
            level: "Fresher / Trainee",
            experience: "0-1 Years",
            interview_focus: "Mobile & React Basics",
            key_concepts: ["Flexbox for Mobile", "React Native Core Components (View, Text, Image)", "State vs Props", "Expo Go"],
            common_questions: [
                "Difference between React Native and React.js?",
                "How does Flexbox work in React Native?",
                "What is props.children?",
                "How to handle user input?"
            ],
            tips: ["Build a simple calculator or todo app.", "Understand the difference between padding and margin."]
        },
        {
            level: "Junior Developer",
            experience: "1-3 Years",
            interview_focus: "Navigation & API Integration",
            key_concepts: ["React Navigation (Stack, Tab)", "FlatList vs ScrollView", "AsyncStorage", "Fetching Data", "Debugging"],
            common_questions: [
                "How do you pass data between screens?",
                "Why use FlatList over ScrollView?",
                "Lifecycle methods in React Native.",
                "How to debug a React Native app?"
            ],
            tips: ["Know how to handle lists efficiently.", "Practice navigation patterns.", "Understand basic device APIs."]
        },
        {
            level: "Mid-Level Developer",
            experience: "3-6 Years",
            interview_focus: "Performance & Native Modules",
            key_concepts: ["JS Bridge", "Performance Optimization", "State Management (Redux/Zustand)", "Animations (Reanimated)", "CodePush"],
            common_questions: [
                "How to optimize a slow FlatList?",
                "Explain the React Native Bridge.",
                "Difference between Redux and Context API.",
                "How to handle offline states?"
            ],
            tips: ["Demonstrate performance profiling skills.", "Understand how the bridge works.", "Show experience with animations."]
        },
        {
            level: "Senior Developer",
            experience: "6-10 Years",
            interview_focus: "Architecture & Native Code",
            key_concepts: ["Writing Native Modules (Swift/Kotlin)", "New Architecture (Fabric/TurboModules)", "CI/CD (Fastlane)", "Testing (Detox)", "Security"],
            common_questions: [
                "How to bridge a native iOS/Android SDK?",
                "Explain the New Architecture in React Native.",
                "How do you secure API keys in a mobile app?",
                "Strategy for OTA updates."
            ],
            tips: ["Have experience with native code.", "Understand build pipelines.", "Focus on app architecture."]
        },
        {
            level: "Tech Lead / Staff Engineer",
            experience: "10-15 Years",
            interview_focus: "Cross-platform Strategy & System Design",
            key_concepts: ["Brownfield vs Greenfield", "Mobile System Design", "Micro-frontends for Mobile", "Team Leadership"],
            common_questions: [
                "Design the mobile architecture for a super-app.",
                "React Native vs Flutter vs Native - Pros/Cons.",
                "How to manage a large mobile engineering team?"
            ],
            tips: ["Think about the entire mobile ecosystem.", "Strategic technology choices.", "Mentorship."]
        }
    ],
    // Add similar structures for 'devops', 'hr', 'data-science', 'product-manager', 'ui-ux' etc.
    // Populating a few more for completeness based on general knowledge
    "devops": [
        {
            level: "Fresher / Trainee",
            experience: "0-1 Years",
            interview_focus: "Linux & Scripting Basics",
            key_concepts: ["Linux Commands", "Shell Scripting", "Git", "Basic Networking"],
            common_questions: [
                "How to check running processes in Linux?",
                "What is SSH?",
                "Explain the boot process of Linux.",
                "Git merge vs rebase."
            ],
            tips: ["Be comfortable with the command line.", "Understand basic Git workflows."]
        },
        {
            level: "Junior Engineer",
            experience: "1-3 Years",
            interview_focus: "CI/CD & Containers",
            key_concepts: ["Docker", "Jenkins/GitHub Actions", "AWS Basics", "Web Servers"],
            common_questions: [
                "How to write a Dockerfile?",
                "Explain the CI/CD pipeline.",
                "What is a Reverse Proxy?",
                "How to launch an EC2 instance?"
            ],
            tips: ["Containerize a simple app.", "Build a basic pipeline."]
        }
    ]
};

export default interviewData;
