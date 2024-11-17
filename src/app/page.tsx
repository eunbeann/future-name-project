"use client";
import { useState } from "react";
import WhitePc from "./loading/pages/WhitePc";

export default function LoadingPage() {
  const [steps, setSteps] = useState(0);

  const handleSteps = () => {
    setSteps(steps + 1);
  };

  return (
    <div>
      <WhitePc />
    </div>
  );
}
