import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const CicdSection = () => (
    <div className="space-y-10">
        <ContentSection title="1. Add Secrets to GitHub">
            <p>Go to your GitHub repo → <strong>Settings</strong> → <strong>Secrets and variables</strong> → <strong>Actions</strong></p>
            <p className="mt-2">Add these secrets:</p>
            <ul className="list-disc pl-6 space-y-1">
                <li><code>AWS_HOST</code>: Your EC2 public IP</li>
                <li><code>AWS_USER</code>: ubuntu</li>
                <li><code>AWS_SSH_KEY</code>: Contents of your .pem file</li>
            </ul>
        </ContentSection>

        <ContentSection title="2. Create GitHub Actions Workflow">
            <p>Create <code>.github/workflows/deploy.yml</code>:</p>
            <CodeBlock language="yaml" code={`name: Deploy to AWS EC2

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Deploy to EC2
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.AWS_HOST }}
          username: \${{ secrets.AWS_USER }}
          key: \${{ secrets.AWS_SSH_KEY }}
          script: |
            cd /home/ubuntu/your-repo
            git pull origin main
            npm install --production
            pm2 restart backend-api`} />
        </ContentSection>

        <ContentSection title="3. How It Works">
            <ul className="list-disc pl-6 space-y-2">
                <li>Every time you push to the <code>main</code> branch, GitHub Actions triggers</li>
                <li>It SSHs into your EC2 instance</li>
                <li>Pulls the latest code from GitHub</li>
                <li>Installs dependencies</li>
                <li>Restarts the PM2 process</li>
            </ul>
        </ContentSection>

        <div className="bg-purple-600/10 border border-purple-500/20 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-3">🚀 Continuous Deployment Achieved!</h4>
            <p>Your changes will automatically deploy to production on every commit.</p>
        </div>
    </div>
);

export default CicdSection;
