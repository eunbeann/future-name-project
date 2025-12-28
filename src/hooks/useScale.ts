"use client";

import { useEffect, useState } from "react";

// Design resolution
const DESIGN_WIDTH = 2560;
const DESIGN_HEIGHT = 1333;
const HEADER_HEIGHT = 36;

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
      const availableHeight = window.innerHeight - HEADER_HEIGHT;
      const scaleX = window.innerWidth / DESIGN_WIDTH;
      const scaleY = availableHeight / DESIGN_HEIGHT;
      // Use larger scale to always fill the screen (cover mode)
      const scale = Math.max(scaleX, scaleY);

      const scaledWidth = DESIGN_WIDTH * scale;
      const scaledHeight = DESIGN_HEIGHT * scale;

      setScaleInfo({
        scale,
        // Center content horizontally (negative when content wider than screen)
        offsetX: (window.innerWidth - scaledWidth) / 2,
        // Center content vertically
        offsetY: (availableHeight - scaledHeight) / 2,
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