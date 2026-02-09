import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const TaskManagerSection = () => (
    <div className="space-y-10">
        <div className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-blue-400 mb-3">🎯 Beginner Project: Task Management System</h3>
            <p className="text-gray-300 mb-4">
                A complete REST API for managing tasks with user authentication, CRUD operations, and role-based access control.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500">Stack</p>
                    <p className="font-bold text-green-400">Node + Express</p>
                </div>
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500">Database</p>
                    <p className="font-bold text-green-400">MongoDB</p>
                </div>
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500">Auth</p>
                    <p className="font-bold text-yellow-400">JWT</p>
                </div>
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500">Level</p>
                    <p className="font-bold text-blue-400">Beginner</p>
                </div>
            </div>
        </div>

        <ContentSection title="Project Overview">
            <p>
                This project teaches you how to build a production-ready REST API from scratch. You'll learn authentication,
                database modeling, CRUD operations, and basic security practices.
            </p>
            <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <p className="font-bold text-white mb-2">Features:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>User registration and login with JWT authentication</li>
                    <li>Create, read, update, delete tasks</li>
                    <li>Task filtering (by status, priority, due date)</li>
                    <li>Role-based access (user can only manage their own tasks)</li>
                    <li>Input validation and error handling</li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection title="1. Database Schema">
            <p className="mb-4"><strong>User Model (MongoDB/Mongoose):</strong></p>
            <CodeBlock language="javascript" code={`const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true 
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6,
    select: false  // Don't return password in queries
  },
  role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user' 
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);`} />

            <p className="mb-4 mt-6"><strong>Task Model:</strong></p>
            <CodeBlock language="javascript" code={`const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true 
  },
  description: { 
    type: String,
    trim: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'in-progress', 'completed'], 
    default: 'pending' 
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high'], 
    default: 'medium' 
  },
  dueDate: { 
    type: Date 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true  // Every task belongs to a user
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);`} />
        </ContentSection>

        <ContentSection title="2. Authentication Flow">
            <p className="mb-4"><strong>Registration:</strong></p>
            <CodeBlock language="javascript" code={`// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
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
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });
    
    res.status(201).json({
      message: 'User registered successfully',
      userId: user._id
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};`} />

            <p className="mb-4 mt-6"><strong>Login (Generate JWT):</strong></p>
            <CodeBlock language="javascript" code={`exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user (include password field)
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }
    
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};`} />
        </ContentSection>

        <ContentSection title="3. Task CRUD Operations">
            <CodeBlock language="javascript" code={`// controllers/taskController.js
const Task = require('../models/Task');

// CREATE Task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      user: req.user.id  // From auth middleware
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET All Tasks (for logged-in user)
exports.getTasks = async (req, res) => {
  try {
    const { status, priority } = req.query;
    
    const filter = { user: req.user.id };
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    
    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Single Task
exports.getTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id  // Ensure user owns this task
    });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE Task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};`} />
        </ContentSection>

        <ContentSection title="4. Routes Setup">
            <CodeBlock language="javascript" code={`// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;

// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth');
const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// All routes require authentication
router.use(authenticate);

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;`} />
        </ContentSection>

        <ContentSection title="5. API Endpoints">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                <p className="font-bold text-white mb-4">Available Endpoints:</p>
                <div className="space-y-3 text-sm font-mono">
                    <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-green-600 text-white rounded text-xs font-bold">POST</span>
                        <code>/api/auth/register</code>
                        <span className="text-gray-500">- Register new user</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-green-600 text-white rounded text-xs font-bold">POST</span>
                        <code>/api/auth/login</code>
                        <span className="text-gray-500">- Login and get JWT</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-green-600 text-white rounded text-xs font-bold">POST</span>
                        <code>/api/tasks</code>
                        <span className="text-gray-500">- Create task (auth required)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-bold">GET</span>
                        <code>/api/tasks</code>
                        <span className="text-gray-500">- Get all user tasks</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-bold">GET</span>
                        <code>/api/tasks/:id</code>
                        <span className="text-gray-500">- Get single task</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-yellow-600 text-white rounded text-xs font-bold">PUT</span>
                        <code>/api/tasks/:id</code>
                        <span className="text-gray-500">- Update task</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-red-600 text-white rounded text-xs font-bold">DELETE</span>
                        <code>/api/tasks/:id</code>
                        <span className="text-gray-500">- Delete task</span>
                    </div>
                </div>
            </div>
        </ContentSection>

        <ContentSection title="6. Testing with Postman">
            <p className="mb-3">Test the API flow:</p>
            <ol className="list-decimal pl-6 space-y-2">
                <li>
                    <strong>Register:</strong> POST <code>/api/auth/register</code>
                    <CodeBlock language="json" code={`{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}`} />
                </li>
                <li>
                    <strong>Login:</strong> POST <code>/api/auth/login</code> → Copy the token
                </li>
                <li>
                    <strong>Create Task:</strong> POST <code>/api/tasks</code> with Authorization header:<br />
                    <code className="text-blue-400">Bearer YOUR_TOKEN_HERE</code>
                </li>
                <li>
                    <strong>Get Tasks:</strong> GET <code>/api/tasks?status=pending&priority=high</code>
                </li>
            </ol>
        </ContentSection>

        <div className="bg-green-600/10 border border-green-500/20 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-3">✅ What You Learned</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Building RESTful APIs with Express</li>
                <li>MongoDB database design and relationships</li>
                <li>JWT authentication implementation</li>
                <li>Protecting routes with middleware</li>
                <li>User-specific data access control</li>
                <li>Query filtering and sorting</li>
            </ul>
        </div>
    </div>
);

export default TaskManagerSection;
