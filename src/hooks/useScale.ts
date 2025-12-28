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
      // Scale based on height only (width may be clipped)
      const scale = window.innerHeight / DESIGN_HEIGHT;

      const scaledWidth = DESIGN_WIDTH * scale;
      const scaledHeight = DESIGN_HEIGHT * scale;

      setScaleInfo({
        scale,
        // Center horizontally (negative = clipped on sides)
        offsetX: (window.innerWidth - scaledWidth) / 2,
        offsetY: 0,
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

