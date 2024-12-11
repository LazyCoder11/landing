import ShinyButton from "@/components/ui/Rainbow";
import { RetroGrid } from "@/components/ui/RetroGrid";
import React from "react";

const CTA = () => {
  return (
    <div className="flex flex-col items-center h-[55vh] justify-center bg-brand-dark mx-40 text-white py-12 px-6 md:px-12 rounded-3xl shadow-lg relative">
      <RetroGrid />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-transparent via-black/50 to-black/80 pointer-events-none -z-10" />
      <div className="text-center relative z-10 flex flex-col items-center">
        <div className="mb-4 px-6 py-2 bg-brand-yellow w-fit text-black font-bold text-sm rounded-full flex items-center gap-2">
          <span className="size-3 bg-brand-dark rounded-full"></span>
          <span>Join Now</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Subscribe to <span className="text-brand-yellow">Our Newsletter</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6">
          Join our newsletter community for exclusive updates, industry
          insights, special offers, and valuable tips.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full">
            <span className="text-brand-yellow mr-2">&#10003;</span> Exclusive
            Content Access
          </div>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full">
            <span className="text-brand-yellow mr-2">&#10003;</span> Timely
            Updates Delivery
          </div>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full">
            <span className="text-brand-yellow mr-2">&#10003;</span> Special
            Offers Alerts
          </div>
        </div>
        <form className="flex flex-col md:flex-row items-center w-full max-w-lg mx-auto gap-4">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="flex-grow px-4 py-3 text-black bg-transparent border border-brand-yellow rounded-full focus:outline-none focus:shadow-[0_0px_20px_rgba(242,97,63,0.5)]"
          />
          <ShinyButton>Subscribe Now</ShinyButton>
        </form>
      </div>
    </div>
  );
};

export default CTA;
