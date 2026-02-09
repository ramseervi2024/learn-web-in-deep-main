import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const SetupSection = () => (
    <div className="space-y-10">
        <ContentSection title="1. Install Node.js">
            <p>Download the <strong>LTS (Long Term Support)</strong> version from <a href="https://nodejs.org" className="text-blue-400 underline">nodejs.org</a>.</p>
            <CodeBlock language="bash" code={`# Verify installation\nnode --version  # v20.x.x\nnpm --version   # 10.x.x`} />
            <p className="text-sm italic text-gray-500">
                <strong>NPM vs Yarn:</strong> NPM comes bundled with Node. Yarn is an alternative with better caching and lockfile semantics.
                For beginners, stick with NPM.
            </p>
        </ContentSection>

        <ContentSection title="2. Initialize Express Project">
            <CodeBlock language="bash" code={`mkdir backend-project\ncd backend-project\nnpm init -y\nnpm install express dotenv cors morgan`} />
        </ContentSection>

        <ContentSection title="3. Professional Folder Structure">
            <p>A scalable backend follows this modular architecture:</p>
            <CodeBlock language="plaintext" code={`/backend-project\n  /src\n    /config          # Database connections, environment vars\n    /controllers     # Request handlers (business logic)\n    /routes          # API endpoint definitions\n    /models          # Database schemas (Mongoose/Sequelize)\n    /middlewares     # Auth, validation, error handling\n    /services        # Reusable business services\n    /utils           # Helper functions\n    app.js           # Express app initialization\n    server.js        # HTTP server entry point\n  .env               # Environment variables (NEVER commit)\n  .gitignore\n  package.json`} />
        </ContentSection>

        <ContentSection title="4. Deep Dive: Each Folder & File Explained">

            {/* /config */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-blue-400 mb-4">📁 /config</h4>
                <p className="mb-4"><strong>Purpose:</strong> Centralize all external service connections and configuration logic.</p>
                <p className="mb-4"><strong>Example: src/config/db.js (MongoDB)</strong></p>
                <CodeBlock language="javascript" code={`const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ DB Connection Failed:', error.message);
    process.exit(1); // Exit if DB fails
  }
};

module.exports = connectDB;`} />
                <p className="text-sm text-gray-400 mt-3">
                    <strong>Why separate?</strong> If you switch from MongoDB to PostgreSQL, you only change this ONE file, not scattered DB logic across controllers.
                </p>
            </div>

            {/* /models */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-green-400 mb-4">📁 /models</h4>
                <p className="mb-4"><strong>Purpose:</strong> Define the structure of your data (schema) and validation rules.</p>
                <p className="mb-4"><strong>Example: src/models/User.js (Mongoose)</strong></p>
                <CodeBlock language="javascript" code={`const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Invalid email']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false // Don't return password by default
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'manager'],
    default: 'user'
  }
}, { timestamps: true }); // Adds createdAt, updatedAt

module.exports = mongoose.model('User', userSchema);`} />
                <p className="text-sm text-gray-400 mt-3">
                    <strong>Key Concepts:</strong><br />
                    • <code>required</code>: Field must exist<br />
                    • <code>unique</code>: No duplicates (creates DB index)<br />
                    • <code>enum</code>: Only allows specific values<br />
                    • <code>timestamps</code>: Auto-manages createdAt/updatedAt<br />
                    • <code>select: false</code>: Excludes field from queries unless explicitly requested
                </p>
            </div>

            {/* /controllers */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-purple-400 mb-4">📁 /controllers</h4>
                <p className="mb-4"><strong>Purpose:</strong> Handle incoming HTTP requests, process data, call services/models, and send responses.</p>
                <p className="mb-4"><strong>Example: src/controllers/userController.js</strong></p>
                <CodeBlock language="javascript" code={`const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @desc    Get all users
// @route   GET /api/users
// @access  Admin only
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new user
// @route   POST /api/users
// @access  Public
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await User.create({ name, email, password: hashedPassword });
    
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};`} />
                <p className="text-sm text-gray-400 mt-3">
                    <strong>Best Practices:</strong><br />
                    • Always use try-catch for async/await<br />
                    • Return consistent response format (success, data, message)<br />
                    • Use proper HTTP status codes (200, 201, 400, 404, 500)<br />
                    • Controllers should NOT contain heavy business logic (use services instead)
                </p>
            </div>

            {/* /routes */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">📁 /routes</h4>
                <p className="mb-4"><strong>Purpose:</strong> Map HTTP methods (GET, POST, PUT, DELETE) to controller functions.</p>
                <p className="mb-4"><strong>Example: src/routes/userRoutes.js</strong></p>
                <CodeBlock language="javascript" code={`const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const { authenticate, authorize } = require('../middlewares/auth');

// Public routes
router.post('/', createUser);

// Protected routes (require authentication)
router.get('/', authenticate, authorize('admin'), getUsers);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, authorize('admin'), deleteUser);

module.exports = router;`} />
                <p className="mb-4 mt-4"><strong>How to use in app.js:</strong></p>
                <CodeBlock language="javascript" code={`const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Now available:
// POST   /api/users       (create user)
// GET    /api/users       (get all users - admin only)
// PUT    /api/users/:id   (update user)
// DELETE /api/users/:id   (delete user - admin only)`} />
                <p className="text-sm text-gray-400 mt-3">
                    <strong>Middleware Chaining:</strong> Middlewares execute left-to-right. <code>authenticate</code> runs first, then <code>authorize</code>, then the controller.
                </p>
            </div>

            {/* /middlewares */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-red-400 mb-4">📁 /middlewares</h4>
                <p className="mb-4"><strong>Purpose:</strong> Intercept requests BEFORE they reach controllers. Used for auth, validation, logging, error handling.</p>

                <p className="mb-2 font-bold">Example 1: Authentication Middleware</p>
                <CodeBlock language="javascript" code={`// src/middlewares/auth.js
const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  // Extract token from Authorization header
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer TOKEN"
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request object
    next(); // Pass control to next middleware/controller
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};`} />

                <p className="mb-2 font-bold mt-6">Example 2: Error Handling Middleware</p>
                <CodeBlock language="javascript" code={`// src/middlewares/errorHandler.js
exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

// Use in app.js (MUST be last middleware):
// app.use(errorHandler);`} />
                <p className="text-sm text-gray-400 mt-3">
                    <strong>next():</strong> This function passes control to the next middleware in the chain. Without it, the request hangs.
                </p>
            </div>

            {/* /services */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-cyan-400 mb-4">📁 /services< /h4>
                    <p className="mb-4"><strong>Purpose:</strong> Complex business logic that's reusable across multiple controllers.</p>
                    <p className="mb-4"><strong>Example: src/services/emailService.js</strong></p>
                    <CodeBlock language="javascript" code={`const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendWelcomeEmail = async (userEmail, userName) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Welcome!',
    html: \`<h1>Hi \${userName}!</h1><p>Thanks for signing up.</p>\`
  };
  
  await transporter.sendMail(mailOptions);
};

exports.sendPasswordResetEmail = async (userEmail, resetToken) => {
  // Logic here...
};`} />
                    <p className="mb-4 mt-4"><strong>Usage in Controller:</strong></p>
                    <CodeBlock language="javascript" code={`const { sendWelcomeEmail } = require('../services/emailService');

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  
  // Send email in background (don't await to avoid blocking)
  sendWelcomeEmail(user.email, user.name).catch(console.error);
  
  res.status(201).json({ success: true, data: user });
};`} />
                    <p className="text-sm text-gray-400 mt-3">
                        <strong>Why Services?</strong> If you need to send emails from registration, password reset, AND admin actions, you don't duplicate email logic. One service, multiple uses.
                    </p>
            </div>

            {/* /utils */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-orange-400 mb-4">📁 /utils</h4>
                <p className="mb-4"><strong>Purpose:</strong> Small helper functions that don't fit elsewhere.</p>
                <p className="mb-4"><strong>Example: src/utils/validator.js</strong></p>
                <CodeBlock language="javascript" code={`exports.isValidEmail = (email) => {
  const regex = /^\\S+@\\S+\\.\\S+$/;
  return regex.test(email);
};

exports.generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
};

exports.formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US');
};`} />
            </div>

            {/* app.js */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-pink-400 mb-4">📄 app.js</h4>
                <p className="mb-4"><strong>Purpose:</strong> Initialize Express app, configure middlewares, define routes. This file does NOT start the server (that's server.js).</p>
                <CodeBlock language="javascript" code={`const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet()); // Adds security headers
app.use(cors());   // Enable CORS

// Body parsing
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data

// Logging
app.use(morgan('dev')); // Log HTTP requests

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Error handling (MUST be last)
const { errorHandler } = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app; // Export for testing or server.js`} />
                <p className="text-sm text-gray-400 mt-3">
                    <strong>Why separate from server.js?</strong> Makes testing easier. You can import <code>app</code> in tests without starting the server.
                </p>
            </div>

            {/* server.js */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-indigo-400 mb-4">📄 server.js</h4>
                <p className="mb-4"><strong>Purpose:</strong> Entry point. Loads environment variables, connects to database, starts the HTTP server.</p>
                <CodeBlock language="javascript" code={`require('dotenv').config(); // Load .env file
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Start server
const server = app.listen(PORT, () => {
  console.log(\`✅ Server running on port \${PORT}\`);
  console.log(\`📍 Environment: \${process.env.NODE_ENV || 'development'}\`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});`} />
                <p className="text-sm text-gray-400 mt-3">
                    <strong>Graceful Shutdown:</strong> Handles termination signals (e.g., from PM2 or Docker) to close connections cleanly before exiting.
                </p>
            </div>

            {/* .env */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 mb-8">
                <h4 className="text-xl font-bold text-lime-400 mb-4">📄 .env</h4>
                <p className="mb-4"><strong>Purpose:</strong> Store sensitive configuration (API keys, passwords, secrets). <strong className="text-red-400">NEVER commit to Git!</strong></p>
                <CodeBlock language="bash" code={`NODE_ENV=development
PORT=5000

# Database
MONGO_URI=mongodb://localhost:27017/myapp

# JWT
JWT_SECRET=supersecretkey123
JWT_REFRESH_SECRET=anothersecret456
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d

# Email
EMAIL_USER=yourapp@gmail.com
EMAIL_PASS=yourpassword

# AWS (if using S3)
AWS_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`} />
                <p className="mb-4 mt-4"><strong>How to use in code:</strong></p>
                <CodeBlock language="javascript" code={`const dbUri = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;`} />
                <p className="text-sm text-gray-400 mt-3">
                    <strong>Security:</strong> Add <code>.env</code> to <code>.gitignore</code>. Create <code>.env.example</code> with dummy values for team reference.
                </p>
            </div>

        </ContentSection>

        <ContentSection title="5. Request Flow: Putting It All Together">
            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
                <p className="font-bold text-white mb-4">Example: POST /api/users (Create User)</p>
                <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">1.</span>
                        <p><strong>Client sends request</strong> → <code>POST /api/users</code> with JSON body</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">2.</span>
                        <p><strong>server.js</strong> → Express app receives the request</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">3.</span>
                        <p><strong>app.js</strong> → Global middlewares run (CORS, JSON parser, helmet)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">4.</span>
                        <p><strong>routes/userRoutes.js</strong> → Matches <code>POST /</code> route</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">5.</span>
                        <p><strong>middlewares/auth.js</strong> → (If protected) Verifies JWT token</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">6.</span>
                        <p><strong>controllers/userController.js</strong> → <code>createUser()</code> function executes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">7.</span>
                        <p><strong>models/User.js</strong> → Mongoose validates data and saves to MongoDB</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">8.</span>
                        <p><strong>services/emailService.js</strong> → Sends welcome email (async, non-blocking)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">9.</span>
                        <p><strong>Controller</strong> → Returns JSON response</p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="text-blue-400 font-bold">10.</span>
                        <p><strong>Client</strong> → Receives HTTP 201 response</p>
                    </div>
                </div>
            </div>
        </ContentSection>
    </div>
);

export default SetupSection;
