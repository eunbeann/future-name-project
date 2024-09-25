"use client";

import { memo, useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

const TypingText = ({ text, speed = 100, onComplete }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let index = 0;
    let timeoutId: NodeJS.Timeout | undefined;

    const addNextChar = () => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        timeoutId = setTimeout(addNextChar, speed);
      } else if (onComplete) {
        onComplete();
      }
    };

    timeoutId = setTimeout(addNextChar, speed);

    return () => {
      clearTimeout(timeoutId);
      // setDisplayedText(text) 제거
    };
  }, [text, speed, onComplete]);

  return (
    <span className="whitespace-pre-wrap">
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default memo(TypingText);
