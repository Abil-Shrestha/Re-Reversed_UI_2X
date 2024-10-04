"use client";
import {Box} from "@mui/material";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const spin = `
@keyframes spin {
  from {
    transform: translateZ(0) rotate(0turn)
  }
  to {
    transform: translateZ(0) rotate(1turn)
  }
}`;

const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const CircleIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="10" height="10" />
    <circle
      cx="5"
      cy="5"
      r="4.25"
      stroke="white"
      strokeOpacity="0.2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 0.75C7.34721 0.75 9.25 2.65279 9.25 5C9.25 7.34721 7.34721 9.25 5 9.25C3.82904 9.25 2.76868 8.77644 2 8.0104"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloudIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 12C0 14.7614 2.23858 17 5 17H15C17.7614 17 20 14.7614 20 12C20 9.23858 17.7614 7 15 7C15 4.23858 12.7614 2 10 2C7.23858 2 5 4.23858 5 7C2.23858 7 0 9.23858 0 12Z"
      fill="#716FFF"
    />
    <path
      d="M14.5 7V7.5H15C17.4853 7.5 19.5 9.51472 19.5 12C19.5 14.4853 17.4853 16.5 15 16.5H5C2.51472 16.5 0.5 14.4853 0.5 12C0.5 9.51472 2.51472 7.5 5 7.5H5.5V7C5.5 4.51472 7.51472 2.5 10 2.5C12.4853 2.5 14.5 4.51472 14.5 7Z"
      stroke="black"
      strokeOpacity="0.2"
    />
  </svg>
);

const AnimatedSVG = () => (
  <svg
    width="364"
    height="1"
    viewBox="0 0 364 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="paint0_linear_0_947"
        x1="182"
        y1="1.37415"
        x2="182"
        y2="161.205"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="hsl(141 43.7% 86%)" />
        <stop offset="1" stopColor="hsl(141 43.7% 86%)" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default function SyncingComponent({actionText = "Syncing"}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box sx={{py: "80px", px: "60px"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AnimatedSVG />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            width: "100%",
          }}
        >
          <motion.div
            initial={{y: 48, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1.25, ease: easeOutExpo, delay: 0.15}}
            style={{position: "relative"}}
          >
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                background: "#fff",
                zIndex: 2,
                boxShadow:
                  "rgba(29, 29, 32, 0.04) 0px 0px 0px 1px, rgba(99, 102, 241, 0.1) 0px 0px 0px 5px, 0 1px 3px 0 rgba(79,70,229,.25), 0 1px 2px -1px rgba(79,70,229,.25)",
              }}
            >
              <CloudIcon />
            </Box>
            {Array.from({length: 4}).map((_, index) => (
              <motion.div
                key={index}
                style={{x: "-50%", y: "-50%"}}
                initial={{opacity: 0, scale: 0}}
                animate={{scale: [0, 1], opacity: [0, 1, 0]}}
                transition={{
                  delay: 0.825 * index,
                  duration: 4.25,
                  ease: easeOutExpo,
                  times: [0, 0.25, 1],
                  repeat: Infinity,
                }}
                className="absolute border-2 border-[#e0e7ff] w-[160px] aspect-square top-1/2 left-1/2 rounded-full"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.5, ease: easeOutExpo}}
            className="mask-gradient padding-16-0 flex-1 relative"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 0,
                right: 0,
                height: "2px",
                background: "rgb(238 238 240)",
                borderRadius: 9999,
              }}
            />
            <motion.div
              initial={{x: "-100%"}}
              animate={{x: "100%", rotate: [0, 180, 180, 0]}}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                duration: 2,
                delay: 0.25,
                rotate: {
                  times: [0.49, 0.5, 0.99, 1],
                  duration: 4,
                  repeat: Infinity,
                },
              }}
              className="absolute inset-0"
            >
              <Box
                sx={{
                  mask: "linear-gradient(90deg,transparent,#000)",
                  paddingRight: "12px",
                  width: "33.3333%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgb(99 102 241)",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(99, 102, 241, 0.15) 0px 0px 8px 2px",
                    borderRadius: 999,
                    height: "2px",
                    position: "relative",
                  }}
                />
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    ml: "-4px",
                    background: "rgb(99 102 241)",
                    borderRadius: 9999,
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(99, 102, 241, 0.4) 0px 0px 8px 2px",
                  }}
                />
              </Box>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{y: 48, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1.25, ease: easeOutExpo, delay: 0.25}}
          >
            <Box
              sx={{
                boxShadow:
                  "rgba(29, 29, 32, 0.08) 0px 0px 0px 1px, 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
                color: "#1d1d20",
                fontWeight: 500,
                fontSize: 14,
                padding: "4px 12px",
                background: "#fff",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              {actionText}
              <motion.div
                animate={{rotate: 360}}
                transition={{duration: 2, repeat: Infinity, ease: "linear"}}
                style={{
                  padding: "3px",
                  background: "#1d1d20",
                  borderRadius: "999px",
                  display: "flex",
                }}
              >
                <CircleIcon />
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
