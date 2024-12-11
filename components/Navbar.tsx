"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedLink } from "./ui/AnimatedLink";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#f2f2f228] relative text-brand-light p-5 flex justify-between items-center max-w-7xl mx-auto my-3 backdrop-blur-[100px] bg-opacity-20 rounded-full z-[999]"
    >
      {/* Logo Section */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <span className="text-2xl font-bold leading-none text-brand-yellow">
          Logo
        </span>
      </motion.div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        {["Buy Crypto", "Discover", "Trade", "Grow"].map((item, index) => (
          <motion.li
            key={index}
            className="relative group flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          >
            <AnimatedLink
              href="#"
              className="hover:text-brand-yellow tracking-wider transition-colors duration-200"
            >
              {item}
            </AnimatedLink>
            {/* Underline Animation */}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 h-[2px] bg-brand-yellow"
            />
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-[99999]">
        <button
          className="text-brand-yellow text-3xl "
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute h-fit flex flex-col justify-center top-20 left-0 w-full bg-[#171717] backdrop-blur-lg p-6 rounded-3xl overflow-auto  md:hidden"
        >
          <ul className="space-y-4">
            {["Buy Crypto", "Discover", "Trade", "Grow"].map((item, index) => (
              <li key={index} className="text-center">
                <AnimatedLink
                  href="#"
                  className="text-white text-lg tracking-wide hover:text-brand-yellow transition-colors duration-200"
                >
                  {item}
                </AnimatedLink>
              </li>
            ))}
          </ul>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.9 }}
            className="block mx-auto md:hidden relative group my-5"
          >
            <a
              href="#"
              className="relative px-6 py-3 text-brand-dark rounded-full bg-brand-yellow overflow-hidden border border-transparent group-hover:border-brand-yellow group-hover:shadow-[0_0_15px_#F2613F] transition-all duration-300"
            >
              Get Started
              {/* Glowing Border Effect */}
              <motion.div className="absolute inset-0 rounded-full border-[2px] border-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Button */}
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.9 }}
        className="hidden md:block relative group"
      >
        <a
          href="#"
          className="relative px-6 py-3 text-brand-dark rounded-full bg-brand-yellow overflow-hidden border border-transparent group-hover:border-brand-yellow group-hover:shadow-[0_0_15px_#F2613F] transition-all duration-300"
        >
          Get Started
          {/* Glowing Border Effect */}
          <motion.div className="absolute inset-0 rounded-full border-[2px] border-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
