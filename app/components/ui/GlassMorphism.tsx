import React from 'react';

interface GlassMorphismProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassMorphism({ children, className = '', hover = true }: GlassMorphismProps) {
  return (
    <div
      className={`glass ${hover ? 'glow-hover' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
