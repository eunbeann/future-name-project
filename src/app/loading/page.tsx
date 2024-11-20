"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import BlackPc1 from "./pages/BlackPc1";
import BlackPc2 from "./pages/BlackPc2";
import SkyPc1 from "./pages/SkyPc1";

export default function LoadingPage() {
  const components = [SkyPc1, BlackPc1, SkyPc1, BlackPc2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < components.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, components.length]);

  const CurrentComponent = components[currentIndex];

  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
