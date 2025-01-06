import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a 
            href="/privacy.html" 
            className="text-blue-300 hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms.html" 
            className="text-blue-300 hover:text-blue-400 transition-colors"
          >
            Terms of Use
          </a>
        </div>
        <div className="text-center mt-6 text-gray-400">
          © {new Date().getFullYear()} BlocsLand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}