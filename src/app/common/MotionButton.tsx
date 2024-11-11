"use client";

import { motion } from "framer-motion";
import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<typeof motion.button>;

export const TouchButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, variants, disabled, ...restProps }, ref) => {
    return (
      <motion.button
        ref={ref}
        initial="idle"
        whileTap={disabled ? "idle" : "touch"}
        variants={{ idle: { scale: 1 }, touch: { scale: 0.96 }, ...variants }}
        transition={{ duration: 0.1 }}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </motion.button>
    );
  }
);

TouchButton.displayName = "TouchButton";
