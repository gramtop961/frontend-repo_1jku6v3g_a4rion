import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

const FooterLink = ({ children }) => (
  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
    {children}
  </a>
);

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500" />
              <span className="text-lg font-semibold tracking-tight">Insight Press</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-gray-600">
              Thoughtful writing on technology, design, culture and the future of work.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <FooterLink>Home</FooterLink>
            <FooterLink>Blogs</FooterLink>
            <FooterLink>About</FooterLink>
            <FooterLink>Contact</FooterLink>
          </div>

          <div className="flex items-center gap-3">
            <a aria-label="Twitter" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
              <Twitter size={18} />
            </a>
            <a aria-label="GitHub" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} Insight Press. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
