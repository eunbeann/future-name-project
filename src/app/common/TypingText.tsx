"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void; // onComplete 콜백 추가
}
const TypingText = ({ text, speed = 100, onComplete }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // 텍스트 초기화
    let index = 0;
    const addNextChar = () => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        setTimeout(addNextChar, speed);
      }
    };
    setTimeout(addNextChar, speed);

    return () => {
      index = text.length;
    };
  }, [text, speed, onComplete]);

  return (
    <>
      {displayedText}
      <span className="animate-blink">|</span>
    </>
  );
};

export default TypingText;
