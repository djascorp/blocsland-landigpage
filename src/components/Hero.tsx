import React from 'react';
import { ScrollIndicator } from './ScrollIndicator';
import blocslandBg from '../assets/img/blocsland.jpeg';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${blocslandBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/90 to-blue-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-['Orbitron'] text-6xl md:text-8xl font-black text-white mb-4 tracking-wider drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
          BlocsLand
        </h1>
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 tracking-wide">
            A World Made of Blocs
          </h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            We provide the blocs, you create your world.
            Unleash your imagination and build something extraordinary.
          </p>
        </div>
        <button
          onClick={onContactClick}
          className="group relative px-8 py-4 font-['Orbitron'] text-lg font-bold overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/50"
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
          <span className="relative">Contact Us</span>
        </button>
      </div>

      <ScrollIndicator onClick={onContactClick} />
    </div>
  );
}