import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const PostmanSection = () => (
    <div className="space-y-10">
        <ContentSection title="1. Install Postman">
            <p>Download from <a href="https://www.postman.com/downloads/" className="text-blue-400 underline">postman.com</a></p>
        </ContentSection>

        <ContentSection title="2. Create a Collection">
            <ul className="list-disc pl-6 space-y-2">
                <li>Click <strong>New Collection</strong></li>
                <li>Name it "Backend API"</li>
                <li>Add requests: <code>GET /users</code>, <code>POST /login</code>, etc.</li>
            </ul>
        </ContentSection>

        <ContentSection title="3. Environment Variables">
            <p>Create different environments for Local, Staging, and Production:</p>
            <CodeBlock language="json" code={`// Local Environment
{
  "baseUrl": "http://localhost:5000",
  "token": ""
}

// Production Environment
{
  "baseUrl": "https://api.production.com",
  "token": ""
}`} />
            <p className="mt-4">Use variables in requests:</p>
            <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg">
                <code className="text-green-400">{'{{baseUrl}}'}/api/users</code>
            </div>
        </ContentSection>

        <ContentSection title="4. Token Automation">
            <p>After login, automatically save the token to environment:</p>
            <CodeBlock language="javascript" code={`// In Postman Tests tab (POST /login):
const response = pm.response.json();
pm.environment.set("token", response.accessToken);`} />
            <p className="mt-4">Use the token in headers:</p>
            <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg space-y-2">
                <p className="text-sm text-gray-400">Authorization:</p>
                <code className="text-blue-400">Bearer {'{{token}}'}</code>
            </div>
        </ContentSection>

        <ContentSection title="5. Export/Import Collections">
            <ul className="list-disc pl-6 space-y-2">
                <li>Right-click collection → <strong>Export</strong> → Save as JSON</li>
                <li>Share with your team or import in another Postman workspace</li>
            </ul>
        </ContentSection>
    </div>
);

export default PostmanSection;
