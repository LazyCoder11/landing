"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
// import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col -mt-40">
      <ContainerScroll>
        <video
          src={`/videos/hero.mp4`}
          // alt="hero"
          loop
          autoPlay
          muted
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-fill h-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
