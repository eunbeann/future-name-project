"use client";

import { DESIGN_HEIGHT, DESIGN_WIDTH, useScale } from "@/hooks/useScale";

interface ScaledContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScaledContainer({
  children,
  className = "",
}: ScaledContainerProps) {
  const { scale, offsetX, offsetY, isReady } = useScale();

// Don't render until ready
  if (!isReady) {
    return <div className="w-screen h-screen bg-[#0a1628]" />;
  }

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0a1628]">
      <div
        className={`relative ${className}`}
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          marginLeft: `${offsetX}px`,
          marginTop: `${offsetY}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

