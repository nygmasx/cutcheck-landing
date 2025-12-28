'use client';

import React from 'react';
import { FloatingShape } from './FloatingShape';

export function LottieBackground() {
  return (
    <>
      <FloatingShape
        animationPath="/lottie/geometric-circle.json"
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
        style={{ zIndex: 0 }}
      />
      <FloatingShape
        animationPath="/lottie/floating-lines.json"
        className="absolute top-1/4 left-0 w-[800px] h-[600px] opacity-20"
        style={{ zIndex: 0 }}
      />
      <FloatingShape
        animationPath="/lottie/abstract-shapes.json"
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] opacity-25"
        style={{ zIndex: 0 }}
      />
    </>
  );
}
