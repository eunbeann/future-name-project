"use client";

import { useEffect, useState } from "react";

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
    <span className="whitespace-pre-wrap">
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingText;
