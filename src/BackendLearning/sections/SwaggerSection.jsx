import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const SwaggerSection = () => (
    <div className="space-y-10">
        <ContentSection title="1. Install Swagger">
            <CodeBlock language="bash" code={`npm install swagger-jsdoc swagger-ui-express`} />
        </ContentSection>

        <ContentSection title="2. Swagger Configuration">
            <CodeBlock language="javascript" code={`const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend API Documentation',
      version: '1.0.0',
      description: 'Complete API reference for the backend system'
    },
    servers: [
      { url: 'http://localhost:5000', description: 'Development server' },
      { url: 'https://api.production.com', description: 'Production server' }
    ]
  },
  apis: ['./src/routes/*.js'] // Path to API routes
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// In app.js:
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));`} />
        </ContentSection>

        <ContentSection title="3. Document Endpoints (in routes)">
            <CodeBlock language="javascript" code={`/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/users', getUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */
router.post('/users', createUser);`} />
        </ContentSection>

        <ContentSection title="4. Access Swagger UI">
            <p>Start your server and navigate to:</p>
            <div className="p-4 bg-blue-600/10 border border-blue-500/30 rounded-lg">
                <code className="text-blue-400">http://localhost:5000/api-docs</code>
            </div>
            <p className="mt-4 text-gray-400">
                You'll see an interactive UI where you can test endpoints, view request/response schemas, and explore your entire API.
            </p>
        </ContentSection>
    </div>
);

export default SwaggerSection;
