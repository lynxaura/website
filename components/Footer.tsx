import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-center md:text-left">
            <div>&copy; {new Date().getFullYear()} Lynxaura Intelligence. All rights reserved.</div>
            <div className="mt-1">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                沪ICP备2025130303号
              </a>
            </div>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
