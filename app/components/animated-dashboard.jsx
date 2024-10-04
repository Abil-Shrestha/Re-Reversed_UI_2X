"use client";

import {ArrowUpRight} from "@/app/components/icons";
import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef} from "react";
import {LinkedInIcon, NotionIcon, XIcon} from "./icons";

const AnimatedCard = ({index, icon: Icon, count, title}) => {
  const controls = useAnimation();
  const isActive = useRef(true);

  useEffect(() => {
    isActive.current = true;

    const animate = async () => {
      while (isActive.current) {
        for (let i = 0; i < count && isActive.current; i++) {
          const currentIndex = (index + i) % count;
          const nextIndex = (index + i + 1) % count;
          const currentY = 24 * currentIndex;
          const nextY = 24 * nextIndex;
          const currentZ = 20 * currentIndex;
          const nextZ = 20 * nextIndex;

          if (nextIndex === 0) {
            // Move the front card back
            await controls.start({
              y: [currentY, 24 * count],
              z: [currentZ, 20 * count],
              opacity: [1, 0],
              scale: [1, 0.95],
              zIndex: count,
              transition: {
                duration: 0.6,
                ease: [0.645, 0.045, 0.355, 1],
              },
            });

            // Reset position for the next cycle
            controls.set({
              y: 0,
              z: 0,
              opacity: 0,
              scale: 0.95,
              zIndex: 0,
            });

            // Bring the card back to view
            await controls.start({
              opacity: 1,
              scale: 1,
              transition: {duration: 0.4, ease: "easeOut"},
            });
          } else {
            // Move other cards forward
            await controls.start({
              y: [currentY, nextY],
              z: [currentZ, nextZ],
              zIndex: nextIndex + 1,
              transition: {
                duration: 0.6,
                ease: [0.645, 0.045, 0.355, 1],
              },
            });
          }

          // Pause between animations
          await new Promise((resolve) => setTimeout(resolve, 1500));
        }
      }
    };

    animate();

    return () => {
      isActive.current = false;
      controls.stop();
    };
  }, [controls, index, count]);

  return (
    <motion.div
      animate={controls}
      initial={{
        y: 24 * index,
        z: 20 * index,
        opacity: 1,
        scale: 1,
        zIndex: index + 1,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transformOrigin: "center bottom",
      }}
    >
      <div className="w-full relative rounded-md overflow-hidden border-t-4 border-amber-400 shadow-lg">
        <div className="p-6 bg-gray-800">
          <div className="flex justify-end mb-5">
            <Icon size={100} />
          </div>
          <div className="flex justify-between">
            <div className="h-2 w-1/4 bg-gray-600 rounded-full"></div>
            <div className="flex flex-col w-1/4 gap-1.5">
              <div className="h-2 w-full bg-gray-600 rounded-full"></div>
              <div className="h-2 w-1/2 bg-gray-700 rounded-full"></div>
              <div className="h-2 w-2/3 bg-gray-700 rounded-full"></div>
              <div className="h-2 w-11/12 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-900">
          <div className="text-sm font-medium mb-1.5 text-gray-300">
            {title}
          </div>
          <div className="py-3 border-b border-gray-800 flex">
            <div className="w-1/2">
              <div className="h-2 w-1/3 bg-gray-600 rounded-full"></div>
            </div>
            <div className="w-1/2">
              <div className="h-2 w-1/3 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="py-3 border-b border-gray-800 flex">
              <div className="w-1/2">
                <div className="h-2 w-1/3 bg-gray-700 rounded-full"></div>
              </div>
              <div className="w-1/2">
                <div className="h-2 w-1/3 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 bg-gray-900">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className={`flex py-3 ${
                i === 1 ? "" : "border-b border-gray-800"
              }`}
            >
              {[...Array(4)].map((_, j) => (
                <div key={j} className="w-1/4">
                  <div className="h-2 w-5/12 bg-gray-700 rounded-full"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const cardData = [
  {icon: XIcon, title: "X Stats"},
  {icon: LinkedInIcon, title: "LinkedIn Profile"},
  {icon: NotionIcon, title: "Notion Stats"},
];

export default function AnimatedCardStack() {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-4 rounded-md">
      <p className="pb-4 font-semibold text-xl"> Animated Card Stack</p>
      <div className="w-full max-w-md aspect-[3/4] relative h-[32rem]">
        {cardData.map((card, index) => (
          <AnimatedCard
            key={index}
            index={index}
            icon={card.icon}
            count={cardData.length}
            title={card.title}
          />
        ))}
      </div>
      <a
        href="https://github.com/Abil-Shrestha/Re-Reversed_UI_2X/blob/main/app/components/animated-dashboard.jsx"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center pt-4 items-center"
      >
        <span className="mr-1">Code</span>
        <ArrowUpRight />
      </a>
    </div>
  );
}
