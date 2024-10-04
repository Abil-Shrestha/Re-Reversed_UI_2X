"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CodeIcon, GitBranchIcon, LaptopIcon, TerminalIcon } from "./icons";
import { LoopIcon } from "@/app/components/icons";

const easeInOutCubic = [0.645, 0.045, 0.355, 1];

export default function AnimatedLaptop() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 1000);
    return () => clearTimeout(timer);
  }, [key]);

  const handleReplay = () => {
    setIsAnimated(false);
    setKey(prevKey => prevKey + 1);
  };

  return (
    <div className="pt-44 relative md:w-[25rem] md:h-[15rem]">
      <button
        onClick={handleReplay}
        className="absolute top-0 right-0 p-[0.5] rounded-full transition-colors hover:scale-110"
        aria-label="Replay animation"
      >
        <LoopIcon />
      </button>
      <div className="relative">
        <div className="flex justify-center flex-col items-center relative">
          <motion.div
            key={`laptop-${key}`}
            initial={{
              transform: "rotateX(-90deg) translateX(-50%)",
              background: "#c4c3c3",
              width: "230px",
            }}
            animate={
              isAnimated
                ? {
                    transform: "rotateX(10deg) translateX(-50%)",
                    background: "#f3f3f3",
                    width: "190px",
                  }
                : {
                    transform: "rotateX(-90deg) translateX(-50%)",
                    background: "#c4c3c3",
                    width: "230px",
                  }
            }
            transition={
              isAnimated
                ? {
                    background: { duration: 0.5 },
                    duration: 1,
                    ease: easeInOutCubic,
                  }
                : {
                    background: { delay: 0.3 },
                    duration: 1,
                    ease: easeInOutCubic,
                  }
            }
            className="w-[190px] h-[132px] rounded-t-md border border-[#ededed] shadow-[#e2e0e0_0px_0px_0px_2px_inset] absolute left-1/2 origin-bottom -bottom-[1px] [transform-style:preserve-3d] [perspective:80px]"
          >
            <motion.div
              key={`laptop-shadow-${key}`}
              initial={{ rotateX: "90deg" }}
              animate={
                isAnimated ? { rotateX: "0deg", opacity: 0 } : { rotateX: "90deg" }
              }
              transition={
                isAnimated
                  ? { duration: 1 }
                  : { duration: 2, ease: "anticipate", delay: 0.4 }
              }
              className="absolute top-0.5 left-0 right-0 origin-top bg-gradient-to-b from-black/30 to-white/0 h-5 blur"
            />
          </motion.div>
          <div className="w-[228px] h-2 rounded-t-sm rounded-b-md relative shadow-[#f7f7f7_0px_1px_0px_0px_inset] bg-gradient-to-b from-[#e7e7e7] from-65% to-[#dcdcdc]">
            <div className="w-[22px] h-[3px] absolute top-0 left-1/2 -translate-x-1/2 bg-[#cdcdcd] rounded-b-full shadow-[inset_2px_0_1px_-2px_rgba(0,0,0,.5),inset_-2px_0_1px_-2px_rgba(0,0,0,.5),0_1px_0_hsla(0,0%,100%,.1)]" />
          </div>
        </div>
        <div className="absolute -top-20 w-full left-0 flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 z-10">
          {[
            <LaptopIcon key="laptop" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
            <CodeIcon key="code" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
            <TerminalIcon key="terminal" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
            <GitBranchIcon key="git" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
          ].map((icon, index) => (
            <motion.div
              key={`icon-${index}-${key}`}
              initial={{ filter: "blur(8px)", opacity: 0 }}
              animate={
                isAnimated
                  ? { filter: "blur(0px)", opacity: 1 }
                  : { filter: "blur(8px)", opacity: 0 }
              }
              transition={{
                delay: 0.25 * index + 0.25,
                duration: 1,
                ease: easeInOutCubic,
              }}
              className="rounded-[14px] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[58px] md:h-[58px] lg:w-[66px] lg:h-[66px] bg-white shadow-[0_0_0_1px_rgb(231_231_231),0_1px_2px_rgb(231_231_231_/_32%),0_3px_3px_rgb(231_231_231_/_24%),0_-2px_rgb(231_231_231_/_70%)_inset] flex items-center justify-center"
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}