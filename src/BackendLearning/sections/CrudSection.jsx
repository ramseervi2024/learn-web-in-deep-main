import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const CrudSection = () => (
    <div className="space-y-12">
        {/* MySQL */}
        <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-blue-400">MySQL CRUD</h3>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-bold">RELATIONAL</span>
            </div>
            <ContentSection title="Installation">
                <CodeBlock language="bash" code={`npm install mysql2`} />
            </ContentSection>
            <ContentSection title="Connection (src/config/mysql.js)">
                <CodeBlock language="javascript" code={`const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;`} />
            </ContentSection>
            <ContentSection title="CRUD Example">
                <CodeBlock language="javascript" code={`const pool = require('../config/mysql');

// CREATE
exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const [result] = await pool.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email]
  );
  res.json({ id: result.insertId, name, email });
};

// READ
exports.getUsers = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users');
  res.json(rows);
};

// UPDATE
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  await pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  res.json({ message: 'User updated' });
};

// DELETE
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM users WHERE id = ?', [id]);
  res.json({ message: 'User deleted' });
};`} />
            </ContentSection>
        </div>

        {/* PostgreSQL */}
        <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-purple-400">PostgreSQL CRUD</h3>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs font-bold">ADVANCED SQL</span>
            </div>
            <ContentSection title="Installation (Using Sequelize ORM)">
                <CodeBlock language="bash" code={`npm install sequelize pg pg-hstore`} />
            </ContentSection>
            <ContentSection title="Connection">
                <CodeBlock language="javascript" code={`const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    logging: false
  }
);

module.exports = sequelize;`} />
            </ContentSection>
            <ContentSection title="Model Definition">
                <CodeBlock language="javascript" code={`const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;`} />
            </ContentSection>
            <ContentSection title="CRUD">
                <CodeBlock language="javascript" code={`const User = require('../models/User');

// CREATE
exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

// READ
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// UPDATE
exports.updateUser = async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Updated' });
};

// DELETE
exports.deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
};`} />
            </ContentSection>
            <p className="text-sm text-gray-500 italic mt-4">
                <strong>PostgreSQL vs MySQL:</strong> Postgres supports advanced features like JSONB, full-text search, and better concurrency.
            </p>
        </div>

        {/* SQL Server */}
        <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-yellow-400">SQL Server (MSSQL)</h3>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-bold">ENTERPRISE</span>
            </div>
            <ContentSection title="Installation">
                <CodeBlock language="bash" code={`npm install mssql`} />
            </ContentSection>
            <ContentSection title="Connection">
                <CodeBlock language="javascript" code={`const sql = require('mssql');

const config = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  server: process.env.MSSQL_SERVER,
  database: process.env.MSSQL_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

const pool = new sql.ConnectionPool(config);
pool.connect();

module.exports = pool;`} />
            </ContentSection>
            <ContentSection title="CRUD Example">
                <CodeBlock language="javascript" code={`const pool = require('../config/mssql');

exports.getUsers = async (req, res) => {
  const result = await pool.request().query('SELECT * FROM users');
  res.json(result.recordset);
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  await pool.request()
    .input('name', sql.VarChar, name)
    .input('email', sql.VarChar, email)
    .query('INSERT INTO users (name, email) VALUES (@name, @email)');
  res.json({ message: 'User created' });
};`} />
            </ContentSection>
        </div>

        {/* MongoDB */}
        <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-green-400">MongoDB (NoSQL)</h3>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-bold">DOCUMENT DB</span>
            </div>
            <ContentSection title="Installation">
                <CodeBlock language="bash" code={`npm install mongoose`} />
            </ContentSection>
            <ContentSection title="Connection">
                <CodeBlock language="javascript" code={`const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => console.log('✅ MongoDB connected'));

module.exports = mongoose;`} />
            </ContentSection>
            <ContentSection title="Schema & Model">
                <CodeBlock language="javascript" code={`const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);`} />
            </ContentSection>
            <ContentSection title="CRUD">
                <CodeBlock language="javascript" code={`const User = require('../models/User');

// CREATE
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

// READ
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// UPDATE
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

// DELETE
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};`} />
            </ContentSection>
        </div>
    </div>
);

export default CrudSection;
