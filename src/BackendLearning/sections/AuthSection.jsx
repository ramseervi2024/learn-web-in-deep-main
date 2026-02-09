import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const AuthSection = () => (
    <div className="space-y-10">
        <ContentSection title="1. Install Dependencies">
            <CodeBlock language="bash" code={`npm install jsonwebtoken bcryptjs`} />
        </ContentSection>

        <ContentSection title="2. User Registration">
            <CodeBlock language="javascript" code={`const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: role || 'user'
  });
  
  res.status(201).json({ message: 'User registered', userId: user.id });
};`} />
        </ContentSection>

        <ContentSection title="3. User Login (JWT Generation)">
            <CodeBlock language="javascript" code={`const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });
  
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
  
  // Generate Access Token (expires in 15min)
  const accessToken = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
  
  // Generate Refresh Token (expires in 7 days)
  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  res.json({ accessToken, refreshToken });
};`} />
        </ContentSection>

        <ContentSection title="4. Auth Middleware">
            <CodeBlock language="javascript" code={`const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};`} />
        </ContentSection>

        <ContentSection title="5. Role-Based Access Control (RBAC)">
            <CodeBlock language="javascript" code={`exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};

// Usage in routes:
// router.get('/admin-only', authenticate, authorize('admin'), getAdminData);`} />
        </ContentSection>

        <ContentSection title="6. Refresh Token">
            <CodeBlock language="javascript" code={`exports.refresh = (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: 'No refresh token' });
  
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    
    const newAccessToken = jwt.sign(
      { id: decoded.id, role: decoded.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ message: 'Invalid refresh token' });
  }
};`} />
        </ContentSection>

        <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-3">🔒 Security Best Practices</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Store tokens in <strong>HTTP-only cookies</strong> (not localStorage) to prevent XSS attacks</li>
                <li>Use <strong>bcrypt rounds = 10+</strong> for password hashing</li>
                <li>Implement <strong>token rotation</strong> for refresh tokens</li>
                <li>Set short expiry for access tokens (15 min) and longer for refresh tokens (7 days)</li>
            </ul>
        </div>
    </div>
);

export default AuthSection;
