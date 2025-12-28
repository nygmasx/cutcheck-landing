'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface FloatingShapeProps {
  animationPath: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FloatingShape({ animationPath, className = '', style = {} }: FloatingShapeProps) {
  const [animationData, setAnimationData] = useState(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldAnimate(!mediaQuery.matches);

    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation:', err));
  }, [animationPath]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setShouldAnimate(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  if (!animationData || !shouldAnimate) {
    return null;
  }

  return (
    <div className={`pointer-events-none ${className}`} style={style}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
}
