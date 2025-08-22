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
  FaHome,
  FaPhone,
  FaProjectDiagram,
} from "react-icons/fa";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className={cn(
          "fixed top-6 inset-x-0 z-[5000] flex items-center justify-center px-6 py-4 border border-white/20 rounded-xl bg-black/80 backdrop-blur-md shadow-lg max-w-fit mx-auto",
          className
        )}
      >
        {/* Mobile quick-access buttons */}
        <div className="absolute left-4 flex gap-5 sm:hidden">
          <Link href="/" aria-label="Home">
            <FaHome
              size={20}
              className="text-neutral-400 hover:text-white transition-colors"
            />
          </Link>
          <Link href="#projects" aria-label="Projects">
            <FaProjectDiagram
              size={20}
              className="text-neutral-400 hover:text-white transition-colors"
            />
          </Link>
          <Link href="#contact" aria-label="Contact">
            <FaPhone
              size={20}
              className="text-neutral-400 hover:text-white transition-colors"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="flex gap-6 sm:gap-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="relative flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
            >
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden">{item.icon}</span>
              {/* Hover underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
