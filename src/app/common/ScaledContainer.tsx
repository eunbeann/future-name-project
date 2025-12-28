"use client";

import { DESIGN_HEIGHT, DESIGN_WIDTH, useScale } from "@/hooks/useScale";
import { useEffect, useState } from "react";

const MIN_WIDTH = 1024;

interface ScaledContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScaledContainer({
  children,
  className = "",
}: ScaledContainerProps) {
  const { scale, offsetX, offsetY, isReady } = useScale();
  const [viewportWidth, setViewportWidth] = useState<number>(MIN_WIDTH);
  const [isTooNarrow, setIsTooNarrow] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setIsTooNarrow(width < MIN_WIDTH);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Don't render until ready
  if (!isReady) {
    return <div className="w-screen h-screen bg-[#0a1628]" />;
  }

  // Retro BSOD-style warning for narrow screens
  if (isTooNarrow) {
    return (
      <div className="w-screen h-screen bg-[#000080] flex items-center justify-center p-8">
        <div className="text-center font-mono text-white max-w-[90vw]">
          <div className="text-6xl mb-8">⚠</div>
          
          <div className="bg-[#aaaaaa] text-[#000080] px-4 py-1 inline-block mb-6 font-bold">
            FUTURE NAMING CENTER
          </div>
          
          <div className="text-lg leading-relaxed space-y-4">
            <p>치명적인 디스플레이 오류가 발생했습니다.</p>
            <p>현재 화면 너비가 이 프로그램을 실행하기에 부족합니다.</p>
            
            <div className="my-8 text-left inline-block">
              <p>* 현재 너비: <span className="text-[#ffff00]">{viewportWidth}px</span></p>
              <p>* 최소 요구 너비: <span className="text-[#ffff00]">{MIN_WIDTH}px</span></p>
              <p>* 추가 필요: <span className="text-[#ff5555]">{MIN_WIDTH - viewportWidth}px</span></p>
            </div>
            
            <p className="mt-8">
              데스크톱 환경에서 접속하시거나,<br />
              기기를 가로 모드로 회전해 주세요.
            </p>
            
            <p className="mt-6 text-[#aaaaaa]">
              ERR_VIEWPORT_TOO_NARROW_0x{viewportWidth.toString(16).toUpperCase()}
            </p>
          </div>
          
          <div className="mt-12 animate-blink">
            화면 크기 조정 후 새로고침 해주세요...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-[36px] left-0 right-0 bottom-0 overflow-hidden bg-[#0a1628]">
      <div
        className={`relative ${className}`}
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

