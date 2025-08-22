"use client";

import { motion } from "framer-motion";
import { FaDownload, FaFileDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { MdJoinRight } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export function LandingPage() {
  const words = ["DEVELOPER", "CREATOR", "INNOVATOR"];

  return (
    <div className="h-[100vh] bg-transparent text-white relative overflow-hidden ">
      {/* Background Scrolling Words */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative overflow-hidden w-full">
          <div className="overflow-hidden relative w-[100vw]">
            <div className="scroll-track">
              {words.map((word, index) => (
                <span
                  key={`set1-${index}`}
                  className="text-[8rem] md:text-[20rem] font-bold mx-8 text-transparent"
                  style={{ WebkitTextStroke: "1px #252A30" }}
                >
                  {word}
                </span>
              ))}
              {words.map((word, index) => (
                <span
                  key={`set2-${index}`}
                  className="text-[8rem] md:text-[20rem] font-bold mx-8 text-transparent"
                  style={{ WebkitTextStroke: "1px #252A30" }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 px-4 md:px-16 pt-12 md:pt-20">
        <div className="space-y-8 md:space-y-16">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 items-start ">
            <motion.div
              className="flex flex-col items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-center md:tracking-tighter md:text-lg lg:text-[1rem] uppercase font-normal max-sm:mb-3">
                Hi, I&apos;m Dev Yoda
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-7xl sm:text-3xl font-black leading-tight text-white-50">
                I CREATE, BUILD,
                <br />
                DESIGN, DEVELOP,
                <br />
                AND DEPLOY
                <br />
                WEB EXPERIENCES
              </h1>
                <a href="#projects" className="z-10 max-sm:hidden">
            <MagicButton
              title="View my work"
              icon={<MdJoinRight />}
              position="right"
            />
          </a>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
   specialize in React, Next.js, and TypeScript, building fast, responsive, and accessible web apps with clean code and great user experiences.
</p>
                     <div className="mt-12">
                       <a href="#projects" className="z-10 lg:hidden md:hidden sm:block">
                                   <MagicButton
                                     title="View my work"
                                     icon={<MdJoinRight />}
                                     position="right"
                                   />
                                 </a>
                     </div>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-[500px] max-sm:w-[400px] h-[500px] scale-[2.5] md:w-96 md:h-96 relative opacity-70 max-sm:scale-[1.6] ">
              <img
                src="/LCPW-unscreen 1.gif"
                alt="Abstract Code Visualization"
                className="w-50px h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </main>



{/* Social Links */}
<motion.div
  className="hidden lg:flex fixed right-8 top-[30%] transform -translate-y-1/2 flex-col space-y-6 z-[999]"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <div className="relative z-[999]">
    {/* Download CV */}
    
    <div className="flex flex-col items-center gap-2">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-xs text-gray-400 transform rotate-90 origin-center text-center"
      >
       Download <br /> CV
      </motion.div>
      <motion.a
        href="/Resume.pdf.pdf" // replace with your actual CV path
        download
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
      >
        <FaFileDownload className="text-white text-lg" />
      </motion.a>
    </div>
    {/* GitHub */}
    <div className="flex flex-col items-center gap-2">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-xs text-gray-400 transform rotate-90 origin-center"
      >
        GitHub
      </motion.div>
      <motion.a
        href="https://github.com/Yomi-daniels"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <FaGithub className="text-white text-lg" />
      </motion.a>
    </div>
    {/* LinkedIn */}
    <div className="flex flex-col items-center gap-2">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="text-xs text-gray-400 transform rotate-90 origin-center"
      >
        LinkedIn
      </motion.div>
      <motion.a
        href="https://www.linkedin.com/in/dev-yoda-a359b2270/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <FaLinkedin className="text-white text-lg" />
      </motion.a>
    </div>
    
     {/* Twitter (X) */}
    <div className="flex flex-col items-center gap-2">
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="text-xs text-gray-400 transform rotate-90 origin-center items-center"
    >
      X
    </motion.div>
    <motion.a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <FaXTwitter className="text-white text-lg" />
    </motion.a>
    </div>
  </div>
</motion.div>


      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-track {
          display: flex;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
