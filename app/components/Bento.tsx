import React from "react";
// import { motion } from "framer-motion";

const Bento = () => {
  return (
    <section className="bg-black text-white py-16 min-h-[80vh] flex justify-center items-center">
      <div className="px-6 md:px-12 lg:px-60">
        {/* Section Header */}
        <div className="flex items-center flex-col text-center mb-10">
          <div className="mb-4 px-6 w-fit py-2 bg-brand-yellow text-black font-bold text-sm rounded-full flex items-center justify-center gap-2">
            <span className="size-3 bg-brand-dark rounded-full"></span>{" "}
            <span>Real-Time Insights</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Stoxi Brings a Powerful Suite of Features
          </h2>
          <h3 className="text-xl lg:text-3xl font-medium text-gray-400 mt-2">
            Designed to Empower Traders
          </h3>
        </div>

        {/* Bento Grid */}
        <div className="px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="md:min-h-64 justify-end bg-gradient-to-br from-brand-dark/10 to-brand-light/10 rounded-xl p-6 flex flex-col space-y-4 hover:shadow-[0_4px_30px_-3px_rgba(242,97,63,0.3)] border border-brand-yellow/20 duration-500 backdrop-blur-xl bg-opacity-10">
              <p className="text-lg font-medium">
                Empower Your Stoxi&apos;s Advanced
              </p>
              <p className="text-gray-400">
                Stoxi brings a powerful suite of features crafted to elevate
                your trading experience. With cutting-edge tools.
              </p>
            </div>

            {/* Card 2 */}
            <div className="md:min-h-64 justify-end bg-gradient-to-br from-brand-dark/10 to-brand-light/10 rounded-xl p-6 flex flex-col space-y-4 hover:shadow-[0_4px_30px_-3px_rgba(242,97,63,0.3)] border border-brand-yellow/20 duration-500 backdrop-blur-xl bg-opacity-10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-brand-yellow"></div>
                <h3 className="text-lg font-semibold">Empower</h3>
              </div>
              <p className="text-gray-400">
                Stoxi is designed to give you complete control over your
                finances with its suite of advanced tools and features.
              </p>
            </div>

            {/* Card 3 */}
            <div className="md:min-h-64 justify-end bg-gradient-to-br from-brand-dark/10 to-brand-light/10 rounded-xl p-6 flex flex-col space-y-4 hover:shadow-[0_4px_30px_-3px_rgba(242,97,63,0.3)] border border-brand-yellow/20 duration-500 backdrop-blur-xl bg-opacity-30">
              <h3 className="text-lg font-semibold">
                Your Stoxi Queries Answered
              </h3>
              <p className="text-gray-400">
                Have questions about how Stoxi works or need assistance with any
                features? Our comprehensive help center is here for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-6 md:space-x-6 md:space-y-0 space-y-6">
            {/* Card 4 - Gradient Animation */}
            <div className="w-full md:w-1/2 md:min-h-64 justify-end rounded-xl p-6 flex flex-col space-y-4 shadow-xl shadow-brand-yellow/15 hover:shadow-[0_4px_30px_-3px_rgba(255,255,255,0.3)] border border-brand-yellow/20 duration-500 backdrop-blur-xl bg-opacity-10 bg-gradient-to-tr from-brand-yellow/20 to-brand-dark/20">
              <div className="flex items-center justify-between space-x-3">
                <h3 className="text-lg font-semibold">
                  Transform Your Finances with Stoxi&apos;s
                </h3>
                <div className="w-6 h-6 rounded-full bg-brand-yellow"></div>
              </div>
              <p className="text-white">
                If you can&apos;t find the answer you&apos;re looking for, our
                support team is always ready to assist with any additional
                questions.If you can&apos;t find the answer you&apos;re looking
                for, our support team is always ready to assist with any
                additional questions.
              </p>
            </div>

            {/* Card 5 - Gradient Animation */}
            <div className="w-full md:w-1/2 md:min-h-64 justify-end rounded-xl p-6 flex flex-col space-y-4 shadow-xl shadow-brand-yellow/15 hover:shadow-[0_4px_30px_-3px_rgba(255,255,255,0.3)] border border-brand-yellow/20 duration-500 backdrop-blur-md bg-opacity-10 bg-gradient-to-tr from-brand-yellow/20 to-brand-dark/20">
              <h3 className="text-lg font-semibold">
                Discover Advanced Strategies with Stoxi
              </h3>
              <p className="text-white">
                Subscription section in the settings of the app. From there, you
                can manage or cancel your plan at any time. If you can&apos;t
                find the answer you&apos;re looking for, our support team is
                always ready to assist with any additional questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
