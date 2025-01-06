import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link 
            to="/privacy" 
            className="text-blue-300 hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            className="text-blue-300 hover:text-blue-400 transition-colors"
          >
            Terms of Use
          </Link>
        </div>
        <div className="text-center mt-6 text-gray-400">
          © {new Date().getFullYear()} BlocsLand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}