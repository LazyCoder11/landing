"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroScrollDemo } from "@/components/Macbook";
import ShinyButton from "@/components/ui/Rainbow";

const Hero = () => {
  // Variants for animations
  const textVariant = {
    hidden: { y: "100%", opacity: 0, filter: "blur(20px)" },
    visible: { y: "0%", opacity: 1, filter: "blur(0px)" },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // Stagger delay for children
        duration: 5, // Slower container animation
        ease: "backIn", // Smooth easing
      },
    },
  };

  return (
    <section className="relative bg-black z-10 text-white my-40 min-h-screen flex flex-col justify-center items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-background">
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[1000px] h-[700px] bg-brand-yellow rounded-full blur-3xl opacity-20"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
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
          className="text-5xl md:text-6xl font-bold capitalize tracking-wide leading-snug overflow-hidden"
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
          className="mt-4 tracking-wide max-w-3xl text-xl text-white "
          variants={textVariant}
        >
          Stoxi empowers your stock trading journey with real-time data,
          advanced analytics, and secure transactions, ensuring smarter
          investments and growth.
        </motion.p>

        {/* Download Buttons */}
        <motion.div className="mt-8 flex space-x-4" variants={textVariant}>
          <ShinyButton>Learn More</ShinyButton>
        </motion.div>

        {/* Mobile Mockup */}
        <motion.div className="relative -z-20">
          <HeroScrollDemo />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
