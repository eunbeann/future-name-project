"use client";

import { useEffect, useState } from "react";
import BlackPc1 from "./pages/BlackPc1";
import BlackPc2 from "./pages/BlackPc2";
import SkyPc1 from "./pages/SkyPc1";
import SkyPc2 from "./pages/SkyPc2";

export default function LoadingPage() {
  const components = [SkyPc1, BlackPc1, SkyPc2, BlackPc2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < components.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, components.length]);

  const CurrentComponent = components[currentIndex];

  return <CurrentComponent />;
}
