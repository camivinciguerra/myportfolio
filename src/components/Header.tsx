import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-900">Camila Vinciguerra</a>
        <button className="lg:hidden">
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
        <div className="hidden lg:flex gap-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}