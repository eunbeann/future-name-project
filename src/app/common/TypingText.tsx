"use client";

import { memo, useEffect, useRef, useState } from "react";

interface TypingTextProps {
  text: string;
  onComplete?: () => void;
}

const TypingText = ({ text, onComplete }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setDisplayedText("");
    let index = 0;

    const addNextChar = () => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        timeoutRef.current = window.setTimeout(addNextChar, 100);
      } else if (onComplete) {
        onComplete();
      }
    };

    timeoutRef.current = window.setTimeout(addNextChar, 100);

    return () => {
      if (timeoutRef.current !== undefined) {
        console.log("Clearing timeout:", timeoutRef.current);
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, onComplete]);

  return (
    <span className="whitespace-pre-wrap">
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default memo(TypingText);
