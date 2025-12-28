'use client';

import { useState, useEffect } from 'react';

export function useWeightAnimation(targetWeight: number, duration = 1000): number {
  const [displayWeight, setDisplayWeight] = useState(targetWeight);

  useEffect(() => {
    let startTime: number | null = null;
    const startWeight = displayWeight;
    const weightDiff = targetWeight - startWeight;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentWeight = startWeight + (weightDiff * easeOutQuart);

      setDisplayWeight(currentWeight);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetWeight, duration]);

  return displayWeight;
}
