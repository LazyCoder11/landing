"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroScrollDemo } from "@/components/Macbook";
import ShinyButton from "@/components/ui/Rainbow";

const Hero = () => {
  // Improved animation variants
  const textVariant = {
    hidden: {
      y: 100,
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "easeOut",
        damping: 12,
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Reduced initial delay
        staggerChildren: 0.2 // Faster, more consistent stagger
      }
    }
  };

  const backgroundVariant = {
    initial: {
      scale: 0.7,
      opacity: 0.1
    },
    animate: {
      scale: 1,
      opacity: 0.2,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 50,
        duration: 1.5
      }
    }
  };

  return (
    <section className="relative bg-black z-10 text-white my-40 min-h-screen flex flex-col justify-center items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-background">
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[1000px] h-[700px] bg-brand-yellow rounded-full blur-3xl opacity-20"
          initial="initial"
          animate="animate"
          variants={backgroundVariant}
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center overflow-hidden text-center px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Badge */}
        <motion.div
          className="mb-4 px-6 py-2 bg-brand-yellow text-black font-bold text-sm rounded-full flex items-center gap-2"
          variants={textVariant}
        >
          <span className="size-3 bg-brand-dark rounded-full"></span>{" "}
          <span>Grow Faster</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold capitalize tracking-wide leading-snug overflow-hidden mb-3"
          variants={textVariant}
        >
          Faster, better, stronger
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-l from-brand-yellow to-brand-dark font-bold leading-tight tracking-wide overflow-hidden"
          variants={textVariant}
        >
          Than Your Average Crypto Exchange
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-4 tracking-wide max-w-3xl text-xl text-white"
          variants={textVariant}
        >
          Stoxi empowers your stock trading journey with real-time data,
          advanced analytics, and secure transactions, ensuring smarter
          investments and growth.
        </motion.p>

        {/* Download Buttons */}
        <motion.div
          className="mt-8 flex space-x-4"
          variants={textVariant}
        >
          <ShinyButton>Learn More</ShinyButton>
        </motion.div>

        {/* Mobile Mockup */}
        <motion.div
          className="relative -z-20"
          variants={textVariant}
        >
          <HeroScrollDemo />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;