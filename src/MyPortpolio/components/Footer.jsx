import React from 'react';

const Footer = () => {
  const footerLinks = [
    { name: 'Portfolio', href: 'https://ramseervi2024.github.io/portfolio/' },
    { name: 'Copy Paste', href: 'https://ramseervi2024.github.io/copyaste-message.html' },
    { name: 'Email Sender', href: 'https://ramseervi2024.github.io/email-sender-extension.html' },
    { name: 'Job Finder', href: 'https://ramseervi2024.github.io/findimmediateJobfromsocialmedia.html' },
    { name: 'Job Tools', href: 'https://ramseervi2024.github.io/makebeautoolscangejobimmediately.html' },
  ];

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-white/5">
      <div className="px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="text-center text-slate-500 text-xs dark:text-slate-400">
            © 2026 Ramesh Seervi. Built with React & Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
