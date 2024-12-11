import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Iphone15Pro } from "@/components/ui/Iphone";

const Grid = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      className="relative m-5 md:m-10 rounded-3xl bg-black text-white py-16 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Gradient Animation */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-yellow animate-gradient-move"></div>
      </motion.div>

      <div className="px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-10">
          <motion.div
            className="flex flex-col space-y-5"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="w-full flex items-center gap-2">
              <span className="rounded-full bg-brand-yellow w-3 h-3 flex"></span>
              <span className="uppercase text-sm font-medium tracking-wide text-brand-yellow">
                Smart Tools
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold">
              One app. <br />
              <span className="text-brand-yellow">
                Unlimited possibilities.
              </span>
            </h2>
          </motion.div>
          <motion.div
            className="space-y-4 pr-0 lg:pr-20"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3 },
              },
            }}
          >
            <div>
              <h3 className="text-2xl tracking-wide font-semibold text-brand-yellow">
                Real-Time Market Data
              </h3>
              <p className="text-lg tracking-wide">
                Get instant updates on stock prices, trends, and market
                movements to make timely decisions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl tracking-wide font-semibold text-brand-yellow">
                Financial News Updates
              </h3>
              <p className="text-lg tracking-wide">
                Stay informed with the latest news and developments in the
                financial world.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { scale: 0.9, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.6 },
              },
            }}
          >
            <a
              href="#"
              className="relative px-6 py-3 text-brand-dark rounded-full bg-brand-yellow overflow-hidden border border-transparent hover:border-brand-yellow hover:shadow-[0_0_15px_#F2613F] transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Right Content (Phone Graphic) */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.3 },
            },
          }}
        >
          <div className="relative w-64 lg:w-96 hover:scale-105 hover:rotate-6 hover:shadow-[0_0px_50px_rgba(242,97,63,0.5)] rounded-full duration-200">
            <Iphone15Pro className="size-full" src="/videos/phone.mp4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Grid;

// Add the following styles in your global CSS file or Tailwind configuration:
/*

*/
