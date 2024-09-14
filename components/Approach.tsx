"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import MagicButton from "./ui/MagicButton";

const Approach = () => {
  return (
    <>
      <h1 className="heading">
        My <span className="text-gray-500">approach</span>
      </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-transparent w-full gap-4 mx-auto px-8">
        <Card
          title="Planning & Strategy"
          desc=" My approach ensures that every project is built on a foundation of clarity and purpose, leading to a smooth execution and successful outcomes."
          icon={<AceternityIcon order="Phase 1" img="/planning.jpg" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Analysis"
          desc="we'll dive deep into understanding user behavior, current design trends, and the performance needs of the product. This includes evaluating user feedback, testing site performance, and reviewing data to ensure each feature is aligned with the goals of the project. "
          icon={<AceternityIcon order="Phase 2" img="/analysis.jpg" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Implementation"
          desc="we'll bring the planned designs and strategies to life with clean, efficient code. We focus on building responsive, accessible, and high-performance interfaces that are both visually appealing and functional across all devices."
          icon={<AceternityIcon order="Phase 3" img="/implementation.jpg" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
};

const Card = ({
  desc,
  title,
  icon,
  children,
}: {
  desc: string;
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-gray-500 text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-gray-500 text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-gray-500 text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-gray-500 text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative h-full">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-2 font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {desc}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order, img }: { order: string; img: string }) => {
  return (
    // dont forget to remove borders
    <div className=" flex flex-col items-center justify-center gap-4 mt-8 absolute top-[20%]">
      <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <span className="relative z-20" key={order}>
          {order}
        </span>
      </button>
      <div key={img}>
        <img
          src={img}
          alt="approach"
          className="w-[500px] h-[30vh] object-contain"
        />
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
