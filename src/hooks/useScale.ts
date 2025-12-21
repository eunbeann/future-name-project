"use client";

import { useEffect, useState } from "react";

// Design resolution
const DESIGN_WIDTH = 2560;
const DESIGN_HEIGHT = 1333;

interface ScaleInfo {
  scale: number;
  offsetX: number;
  offsetY: number;
  isReady: boolean;
}

export function useScale(): ScaleInfo {
  const [scaleInfo, setScaleInfo] = useState<ScaleInfo>({
    scale: 1,
    offsetX: 0,
    offsetY: 0,
    isReady: false,
  });

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / DESIGN_WIDTH;
      const scaleY = window.innerHeight / DESIGN_HEIGHT;
      // Math.min to maintain aspect ratio (allows margins)
      const scale = Math.min(scaleX, scaleY);

      const scaledWidth = DESIGN_WIDTH * scale;
      const scaledHeight = DESIGN_HEIGHT * scale;

      setScaleInfo({
        scale,
        // Center alignment (can be negative for clipping effect)
        offsetX: (window.innerWidth - scaledWidth) / 2,
        offsetY: (window.innerHeight - scaledHeight) / 2,
        isReady: true,
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scaleInfo;
}

export { DESIGN_WIDTH, DESIGN_HEIGHT };

