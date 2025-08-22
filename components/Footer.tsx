"use client";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import BorderMagic from "./ui/BorderMagic";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "+2349076412314";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div className="py-0 relative">
      <img
        src="/footer-grid.svg"
        alt="footer-grid"
        className="object-contain absolute z-10"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col text-center justify-center items-center h-screen">
          <h1 className="font-extrabold heading">
            Ready to take <span className="text-gray-500">your</span> digital{" "}
            {""} <br />
            presence to the next level?
          </h1>
          <p className="text-gray-500 mt-4">
            Reach out to me today and let's discuss how we can help you reach
            your goals
          </p>
          <div className="mt-5 relative z-10">
            <div
              className={`absolute -bottom-5 right-0 ${
                copied ? "block" : "block"
              }`}
            >
              {/* <img src="/confetti.gif" alt="confetti" /> */}
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>
            <BorderMagic
              title={copied ? `That's right` : "Contact me now"}
              // icon={<FaArrowRightLong />}
              icon={!copied ? <FaArrowRightLong /> : null}
              position="right"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pb-1 max-sm:flex-col gap-4 ">
          <p className="font-light text-sm ">Copyright ©2024 Dev Yoda</p>
          <div className=" flex items-center gap-4">
            <div className="border border-gray-500 rounded-md p-1">
              <FaInstagram />
            </div>
            <div className="border border-gray-500 rounded-md p-1">
              <FaXTwitter />
            </div>
            <div className="border border-gray-500 rounded-md p-1">
              <FaGithub />
            </div>
            <div className="border border-gray-500 rounded-md p-1">
              <FaWhatsapp />
            </div>
            <div className="border border-gray-500 rounded-md p-1">
              <CiLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
