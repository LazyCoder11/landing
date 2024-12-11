"use client";

import React from "react";
import {
  motion,
  type AnimationProps,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 2, // Adjust speed of animation
    ease: "linear",
  },
} as AnimationProps;

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          "relative overflow-hidden rounded-full px-10 py-3 font-medium text-white border border-brand-yellow uppercase tracking-wide transition-shadow duration-300 ease-in-out hover:shadow-sm",
          "bg-gradient-to-r from-[#171717]/50 via-[#F2613F]/15 to-[#171717]/50",
          "hover:shadow-[0_0px_20px_rgba(242,97,63,0.5)]",
          className
        )}
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: "var(--x, 100%) center",
        }}
      >
        <span className="relative capitalize z-10">{children}</span>

        {/* Shiny Effect */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            border: "1px solid linear-gradient(90deg, rgba(23, 23, 255, 0.1) 0%, rgba(23, 23, 23, 0.3) 50%, rgba(23, 23, 23, 0.1) 100%)",
            background:
              "linear-gradient(90deg, rgba(23, 23, 23, 0.1) 0%, rgba(23, 23, 23, 0.3) 50%, rgba(23, 23, 23, 0.1) 100%)",
            transform: "translateX(var(--x, 100%))",
            maskImage:
              "linear-gradient(90deg, transparent, black 100%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 50%, transparent)",
            backgroundSize: "200% 100%",
          }}
        ></motion.div>
      </motion.button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
