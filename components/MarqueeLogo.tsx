import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "/svg/logo1.svg",
    username: "1",
  },
  {
    img: "/svg/logo5.svg",
    username: "2",
  },
  {
    img: "/svg/logo2.webp",
    username: "3",
  },
  {
    img: "/svg/logo3.svg",
    username: "6",
  },
];

const firstRow = reviews;

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn("relative w-24 cursor-pointer my-auto overflow-hidden p-2")}
    >
      <div className="">
        <Image className="" width="100" height="100" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeLogo() {
  return (
    <div className="flex relative flex-col gap-5 items-center -mt-60 z-10 mb-20">
      <div className="">
        <h2 className="text-3xl tracking-wide">
          Already chose by the leaders
        </h2>
      </div>
      <div className="flex h-full w-full md:max-w-7xl mx-auto overflow-hidden backdrop-blur-2xl p-3">
        <Marquee className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
}
