import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { MdJoinRight } from "react-icons/md";
import styles from "@/components/page.module.css";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-5 left-[20%] h-[80vh] w-[50vw] transform rotate-180"
          fill="gray"
        />
        <Spotlight
          className="top-20 left-[90%] h-[80vh] w-[50vw] "
          fill="purple"
        />

        <Spotlight
          className="top-5 left-[50%] h-[80vh] w-[50vw]"
          fill="white"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.Js
          </h2>
          <TextGenerateEffect
            className=" text-center text-[40px] md:text-5xl lg:text-6xl sm:text-xl"
            words="Transforming Concepts into seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 md:text-lg lg:text-2xl">
            Hi, I&apos;m Dev Yoda, a Frontend Developer 🔥
          </p>
          <a href="#about">
            <MagicButton
              title="View my work"
              icon={<MdJoinRight />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
