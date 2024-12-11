import React from "react";
import { AnimatedLink } from "./ui/AnimatedLink";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <>
    <MobileFooter/>
      <footer className="bg-black text-white py-12 mt-32 px-6 hidden md:block">
        <div className="md:px-40 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-brand-yellow transition"
            >
              {/* <i className="fab fa-facebook-f"></i> */}
              {/* <Facebook/> */}
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-yellow transition"
            >
              {/* <i className="fab fa-linkedin-in"></i> */}
              {/* <Linkedin/> */}
              <BsTwitterX />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-yellow transition"
            >
              {/* <i className="fab fa-discord"></i> */}
              <BsInstagram />
            </a>
          </div>

          {/* Logo and Description */}
          <div className="text-center">
            <h1 className="text-brand-yellow font-bold text-3xl">LOGO</h1>
            <p className="text-gray-400 text-lg mt-2">
              Stoxi is a crypto trading app designed to help you manage your
              investments.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end gap-8 text-base">
            <AnimatedLink
              href="#"
              className="text-white hover:text-brand-yellow transition"
            >
              Investing
            </AnimatedLink>
            <AnimatedLink
              href="#"
              className="text-white hover:text-brand-yellow transition"
            >
              How It Works
            </AnimatedLink>
            <AnimatedLink
              href="#"
              className="text-white hover:text-brand-yellow transition"
            >
              Pricing
            </AnimatedLink>
            <AnimatedLink
              href="#"
              className="text-white hover:text-brand-yellow transition"
            >
              Contact
            </AnimatedLink>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-base">
          ©Copyright 2024 <span className="text-brand-yellow">LOGO</span>. All
          Rights Reserved.
        </div>
        <div className="text-center text-sm text-gray-500">
          Designed & Developed by{" "}
          <a
            className="text-brand-yellow "
            href="http://pratikt.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pratik Trivedi
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
