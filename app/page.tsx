"use client"

import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import {MarqueeLogo} from "@/components/MarqueeLogo";
import { useEffect } from "react";
import Lenis from "lenis";
import Grid from "./components/Grid";
import Bento from "./components/Bento";
import FAQs from "./components/FAQs";
import CTA from "./components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
   useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeLogo />
      <Grid/>
      <Bento/>
      <FAQs/>
      <CTA/>
      <Footer/>
    </div>
  );
}
