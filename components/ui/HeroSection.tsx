"use client";

import { buttonVariants } from "@/components/ui/button";
// import ShinyButton from "@/components/ui/shiny-button";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import DenisMutungaMutinda from "@/public/images/DenisMutinda.png";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // Dynamic padding for ArrowDown
  const [paddingBottom, setPaddingBottom] = useState(16); // Default padding

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("dynamic-padding");
      if (element) {
        const distanceFromBottom =
          window.innerHeight - element.getBoundingClientRect().bottom;

        // Apply different padding based on distance from bottom
        if (distanceFromBottom < 100) {
          setPaddingBottom(80);
        } else if (distanceFromBottom < 200) {
          setPaddingBottom(64);
        } else {
          setPaddingBottom(32);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="content">
      <div className="min-h-screen max-w-full overflow-hidden flex flex-col ">
        <section id="hero" className=" flex-none flex flex-col justify-center">
          {/* Text and Image */}
          <div className="textAndImage flex justify-center w-full">
            <div className="top-content bg-background text-foreground flex flex-col-reverse md:flex-row md:items-center pb-2 md:w-full">
              {/* Text on the left hand side */}
              <div className="left flex flex-col text-center space-y-4 md:space-y-10 md:relative md:pt-24 md:pl-16 px-3 md:w-1/2">
                <p className="text-4xl font-semibold pt-2">
                  Turning Your Ideas into Reality
                </p>
                <p className="text-3xl mt-2">
                  Bettering the world one line of{" "}
                  <span className="italic">&lt;Code/&gt;</span> at a time.
                </p>

                <p className="text-xl my-2">
                  Hey there 👋🏾, I am
                  <span className="text-2xl font-semibold"> Denis Mutinda</span>
                  . A full stack web and mobile app developer.
                </p>
                <p className="text-xl mb-5 ">
                  I give wings to your ideas and you decide where to fly!🚀
                </p>
                {/* Hire Me Button */}
                <div className="md:pt-10">
                  <Link
                    href={"/contact"}
                    className={`${buttonVariants({
                      variant: "default",
                      size: "lg",
                    })}`}
                  >
                    Hire Me <EnvelopeOpenIcon />
                    {/* <BorderBeam /> */}
                  </Link>
                </div>
              </div>
              {/* Circle Image */}
              <div className="right flex justify-center p-2 md:w-1/2">
                <Image
                  src={DenisMutungaMutinda}
                  alt={"Denis Mutunga Mutinda"}
                  className="cursor-pointer hover:shadow-outline rounded-full object-cover object-center h-96 w-96 md:relative"
                  width={384}
                  height={384}
                  quality={100}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Technologies VelocityScroll Slider */}
        <div className="flex-none border-2 border-foreground mt-10 p-4">
          <div className="text-foreground">
            <VelocityScroll
              text={`TypeScript 👨‍💻 Rust 👨‍💻 C & C++ 👨‍💻 Node.js 👨‍💻 Express.js 👨‍💻 Solidity 👨‍💻 Angular 👨‍💻 Tailwind CSS 👨‍💻 Next.js 👨‍💻 React-Native 👨‍💻 React 👨‍💻 Next UI 👨‍💻 Flutter 👨‍💻 Electron.js 👨‍💻 Python 👨‍💻 Vanilla JavaScript 👨‍💻 Php 👨‍💻 Python 👨‍💻`}
              default_velocity={0.3}
              className="font-display text-center text-3xl font-semibold tracking-[-0.02em] text-foreground drop-shadow-sm md:text-3xl md:leading-[3rem]"
            />
          </div>
        </div>
        {/* Scroll Down Arrow */}
        <div className="arrowDown justify-self-end lg:pt-5">
          <div
            id="dynamic-padding"
            style={{ paddingBottom: `${paddingBottom}px` }}
            className=" hiddenmd:relative md:flex md:justify-center md:items-center"
          >
            <span className="w-[3px] h-[23px] bg-foreground rounded-md m-[6px] animate-move transform rotate-[-45deg]"></span>
            <span className="w-[3px] h-[23px] bg-foreground rounded-md m-[6px] animate-move transform rotate-[45deg]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
