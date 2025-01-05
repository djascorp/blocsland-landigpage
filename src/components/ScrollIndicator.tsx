import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface ScrollIndicatorProps {
  onClick: () => void;
}

export function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <button 
      onClick={onClick}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80 hover:text-white transition-colors cursor-pointer"
      aria-label="Scroll to contact form"
    >
      <ChevronDownIcon size={32} />
    </button>
  );
}