import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const EcommerceSection = () => (
    <div className="space-y-10">
        <div className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400 mb-3">🚀 Advanced Project: E-Commerce Backend</h3>
            <p className="text-gray-300 mb-4">
                A production-grade e-commerce API with advanced features: caching, payment integration, logging, and complex role-based permissions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500">Stack</p>
                    <p className="font-bold text-green-400">Node + Express</p>
                </div>
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500">Database</p>
                    <p className="font-bold text-purple-400">PostgreSQL</p>
                </div>
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500">Cache</p>
                    <p className="font-bold text-red-400">Redis</p>
                </div>
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500">Payment</p>
                    <p className="font-bold text-blue-400">Stripe</p>
                </div>
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500">Level</p>
                    <p className="font-bold text-orange-400">Advanced</p>
                </div>
            </div>
        </div>

        <ContentSection title="Project Overview">
            <p>
                This advanced project demonstrates real-world e-commerce architecture with complex features like inventory management,
                order processing, payment integration, and performance optimization through caching.
            </p>
            <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <p className="font-bold text-white mb-2">Advanced Features:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Multi-role authentication (Customer, Vendor, Admin)</li>
                    <li>Product catalog with categories and inventory tracking</li>
                    <li>Shopping cart and order management</li>
                    <li>Payment processing with Stripe (dummy mode)</li>
                    <li>Redis caching for product listings</li>
                    <li>Winston logging with file rotation</li>
                    <li>Advanced RBAC (vendor can only manage their products)</li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection title="1. Database Schema (PostgreSQL + Sequelize)">
            <p className="mb-4"><strong>User Model:</strong></p>
            <CodeBlock language="javascript" code={`const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('customer', 'vendor', 'admin'),
    defaultValue: 'customer'
  }
}, { timestamps: true });

module.exports = User;`} />

            <p className="mb-4 mt-6"><strong>Product Model:</strong></p>
            <CodeBlock language="javascript" code={`const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: { min: 0 }
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: { min: 0 }
  },
  category: {
    type: DataTypes.STRING
  },
  vendorId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
}, { timestamps: true });

// Associations
Product.belongsTo(User, { foreignKey: 'vendorId', as: 'vendor' });
User.hasMany(Product, { foreignKey: 'vendorId', as: 'products' });

module.exports = Product;`} />

            <p className="mb-4 mt-6"><strong>Order Model:</strong></p>
            <CodeBlock language="javascript" code={`const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
    defaultValue: 'pending'
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'pending'
  },
  stripePaymentId: {
    type: DataTypes.STRING
  }
}, { timestamps: true });

const OrderItem = sequelize.define('OrderItem', {
  orderId: DataTypes.UUID,
  productId: DataTypes.UUID,
  quantity: DataTypes.INTEGER,
  price: DataTypes.DECIMAL(10, 2)
});

Order.belongsTo(User);
Order.hasMany(OrderItem);
OrderItem.belongsTo(Product);

module.exports = { Order, OrderItem };`} />
        </ContentSection>

        <ContentSection title="2. Redis Caching Strategy">
            <p className="mb-4">Cache product listings to reduce database queries:</p>
            <CodeBlock language="javascript" code={`const redis = require('redis');
const client = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});

client.connect();

// Middleware to check cache
exports.cacheProducts = async (req, res, next) => {
  const { category } = req.query;
  const cacheKey = \`products:\${category || 'all'}\`;
  
  try {
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log('✅ Cache hit');
      return res.json(JSON.parse(cachedData));
    }
    
    console.log('❌ Cache miss');
    next();  // Proceed to fetch from database
  } catch (error) {
    next();  // On error, skip cache
  }
};

// Controller to get products
exports.getProducts = async (req, res) => {
  const { category } = req.query;
  const cacheKey = \`products:\${category || 'all'}\`;
  
  const filter = category ? { category } : {};
  const products = await Product.findAll({ where: filter });
  
  // Store in cache for 5 minutes
  await client.setEx(cacheKey, 300, JSON.stringify(products));
  
  res.json(products);
};`} />
        </ContentSection>

        <ContentSection title="3. Advanced RBAC Middleware">
            <CodeBlock language="javascript" code={`// middlewares/rbac.js

// Vendors can only edit their own products
exports.checkProductOwnership = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // Admin can edit any product
    if (req.user.role === 'admin') {
      return next();
    }
    
    // Vendor can only edit their own products
    if (req.user.role === 'vendor' && product.vendorId === req.user.id) {
      return next();
    }
    
    return res.status(403).json({ message: 'Access denied' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Only admin can view all orders
exports.restrictToAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};`} />
        </ContentSection>

        <ContentSection title="4. Payment Integration (Stripe)">
            <CodeBlock language="javascript" code={`const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createPayment = async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findByPk(orderId);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.totalAmount * 100), // Convert to cents
      currency: 'usd',
      metadata: { orderId: order.id }
    });
    
    // Update order with payment ID
    await order.update({
      stripePaymentId: paymentIntent.id,
      paymentStatus: 'pending'
    });
    
    res.json({
      clientSecret: paymentIntent.client_secret,
      orderId: order.id
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Webhook to handle payment confirmation
exports.stripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  
  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      const orderId = paymentIntent.metadata.orderId;
      
      await Order.update(
        { paymentStatus: 'completed', status: 'processing' },
        { where: { id: orderId } }
      );
      
      logger.info(\`Payment completed for order \${orderId}\`);
    }
    
    res.json({ received: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};`} />
        </ContentSection>

        <ContentSection title="5. Logging with Winston">
            <CodeBlock language="javascript" code={`const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    // Console logging
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    
    // File logging with rotation
    new DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d'
    }),
    
    // Error-only logs
    new winston.transports.File({
      filename: 'logs/errors.log',
      level: 'error'
    })
  ]
});

// Usage in controllers
logger.info('User logged in', { userId: user.id });
logger.error('Payment failed', { orderId, error: error.message });

module.exports = logger;`} />
        </ContentSection>

        <ContentSection title="6. Order Processing Flow">
            <CodeBlock language="javascript" code={`exports.createOrder = async (req, res) => {
  const transaction = await sequelize.transaction();
  
  try {
    const { items } = req.body;  // [{ productId, quantity }]
    let totalAmount = 0;
    
    // Validate stock and calculate total
    for (const item of items) {
      const product = await Product.findByPk(item.productId, { transaction });
      
      if (!product) {
        throw new Error(\`Product \${item.productId} not found\`);
      }
      
      if (product.stock < item.quantity) {
        throw new Error(\`Insufficient stock for \${product.name}\`);
      }
      
      totalAmount += product.price * item.quantity;
      
      // Reduce stock
      await product.update(
        { stock: product.stock - item.quantity },
        { transaction }
      );
    }
    
    // Create order
    const order = await Order.create({
      userId: req.user.id,
      totalAmount,
      status: 'pending'
    }, { transaction });
    
    // Create order items
    for (const item of items) {
      const product = await Product.findByPk(item.productId);
      await OrderItem.create({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: product.price
      }, { transaction });
    }
    
    await transaction.commit();
    
    logger.info('Order created', { orderId: order.id });
    res.status(201).json(order);
  } catch (error) {
    await transaction.rollback();
    logger.error('Order creation failed', { error: error.message });
    res.status(400).json({ message: error.message });
  }
};`} />
        </ContentSection>

        <ContentSection title="7. API Endpoints">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                <p className="font-bold text-white mb-4">E-Commerce API Routes:</p>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm font-bold text-blue-400 mb-2">Products:</p>
                        <div className="space-y-2 text-xs font-mono ml-4">
                            <div><span className="text-green-400">GET</span> /api/products - Get all products (with cache)</div>
                            <div><span className="text-green-400">POST</span> /api/products - Create product (vendor/admin)</div>
                            <div><span className="text-yellow-400">PUT</span> /api/products/:id - Update product (owner/admin)</div>
                            <div><span className="text-red-400">DELETE</span> /api/products/:id - Delete product (owner/admin)</div>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-purple-400 mb-2">Orders:</p>
                        <div className="space-y-2 text-xs font-mono ml-4">
                            <div><span className="text-green-400">POST</span> /api/orders - Create order</div>
                            <div><span className="text-green-400">GET</span> /api/orders - Get user's orders</div>
                            <div><span className="text-green-400">GET</span> /api/orders/all - Get all orders (admin)</div>
                            <div><span className="text-yellow-400">PATCH</span> /api/orders/:id/status - Update status (admin)</div>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-orange-400 mb-2">Payments:</p>
                        <div className="space-y-2 text-xs font-mono ml-4">
                            <div><span className="text-green-400">POST</span> /api/payments/create - Create payment intent</div>
                            <div><span className="text-green-400">POST</span> /api/payments/webhook - Stripe webhook</div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentSection>

        <div className="bg-purple-600/10 border border-purple-500/20 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-3">🚀 Advanced Concepts Learned</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>PostgreSQL with Sequelize ORM and associations</li>
                <li>Redis caching for performance optimization</li>
                <li>Payment gateway integration (Stripe)</li>
                <li>Database transactions for atomic operations</li>
                <li>Advanced RBAC (resource-level permissions)</li>
                <li>Production-grade logging with Winston</li>
                <li>Webhook handling for async events</li>
                <li>Inventory management and stock tracking</li>
            </ul>
        </div>
    </div>
);

export default EcommerceSection;
