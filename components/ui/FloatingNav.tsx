"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  FaBars,
  FaHome,
  FaPhone,
  FaProjectDiagram,
  FaRProject,
} from "react-icons/fa"; // Import a mobile menu icon

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit w-full fixed top-10 inset-x-0 mx-auto border rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4 border-white/[0.2] bg-black-100 max-sm:px-24 max-sm:py-7",
          className
        )}
      >
        {/* Mobile menu icon */}
        <div className="hidden max-sm:flex absolute items-center gap-12 justify-between">
          <Link href="/" passHref>
            <button className="sm:hidden text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300">
              <FaHome size={20} />
            </button>
          </Link>
          <Link href="#contact" passHref>
            <button className="sm:hidden text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300">
              <FaPhone size={20} />
            </button>
          </Link>
          <Link href="#projects" passHref>
            <button className="sm:hidden text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300">
              <FaProjectDiagram size={20} />
            </button>
          </Link>
        </div>

        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            <span className="block sm:hidden">{navItem.icon}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
