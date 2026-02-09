import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const DeploymentSection = () => (
    <div className="space-y-10">
        <ContentSection title="Step 1: Create AWS Account">
            <p>Sign up at <a href="https://aws.amazon.com" className="text-blue-400 underline">aws.amazon.com</a> (free tier available)</p>
        </ContentSection>

        <ContentSection title="Step 2: Launch EC2 Instance">
            <ul className="list-disc pl-6 space-y-2">
                <li>Go to <strong>EC2 Dashboard</strong> → Launch Instance</li>
                <li>Choose <strong>Ubuntu Server 22.04 LTS</strong></li>
                <li>Instance type: <strong>t2.micro</strong> (free tier)</li>
                <li>Create a new key pair (.pem file) and download it</li>
                <li>Configure security group: Allow <strong>SSH (22)</strong>, <strong>HTTP (80)</strong>, <strong>HTTPS (443)</strong></li>
            </ul>
        </ContentSection>

        <ContentSection title="Step 3: Connect to EC2">
            <CodeBlock language="bash" code={`chmod 400 your-key.pem
ssh -i "your-key.pem" ubuntu@your-ec2-public-ip`} />
        </ContentSection>

        <ContentSection title="Step 4: Install Node.js on EC2">
            <CodeBlock language="bash" code={`# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (using NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node --version
npm --version`} />
        </ContentSection>

        <ContentSection title="Step 5: Clone Your Project">
            <CodeBlock language="bash" code={`# Install Git
sudo apt install git -y

# Clone repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies
npm install

# Create .env file
nano .env
# Add your environment variables (DB credentials, JWT_SECRET, etc.)`} />
        </ContentSection>

        <ContentSection title="Step 6: Install PM2 (Process Manager)">
            <CodeBlock language="bash" code={`sudo npm install -g pm2

# Start your app
pm2 start src/server.js --name "backend-api"

# Auto-restart on reboot
pm2 startup
pm2 save

# Monitor
pm2 status
pm2 logs`} />
        </ContentSection>

        <ContentSection title="Step 7: Setup Nginx (Reverse Proxy)">
            <CodeBlock language="bash" code={`# Install Nginx
sudo apt install nginx -y

# Create Nginx config
sudo nano /etc/nginx/sites-available/backend

# Add this configuration:
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable the site
sudo ln -s /etc/nginx/sites-available/backend /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx`} />
        </ContentSection>

        <ContentSection title="Step 8: Add SSL (HTTPS)">
            <CodeBlock language="bash" code={`# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Certbot will auto-configure Nginx for HTTPS
# Auto-renewal is configured by default`} />
        </ContentSection>

        <div className="bg-green-600/10 border border-green-500/20 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-3">✅ Deployment Complete!</h4>
            <p>Your API is now live at <code className="text-green-400">https://your-domain.com</code></p>
        </div>
    </div>
);

export default DeploymentSection;
