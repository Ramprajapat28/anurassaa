"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "@/data/Svgdata";

interface AnimationState {
  text: string;
  bgColor: string;
  textColor: string;
  size: string;
  svgContent?: string;
  split?: {
    leftText: string;
    rightText: string;
    leftBg: string;
    rightBg: string;
    leftTextColor: string;
    rightTextColor: string;
    gap?: number;
  };
}

const animationStates: AnimationState[] = [
  {
    text: "BUILDING",
    bgColor: "#f8f887",
    textColor: "black",
    size: "clamp(3rem, 8vw, 10rem)",
    svgContent: "MUSCLE"
  },
  {
    text: "OR",
    bgColor: "#f8f887", 
    textColor: "black",
    size: "clamp(4rem, 10vw, 12.5rem)"
  },
  {
    text: "OR",
    bgColor: "black",
    textColor: "#f8f887",
    size: "clamp(5rem, 12vw, 15.625rem)"
  },
  {
    text: "BETTER",
    bgColor: "black",
    textColor: "#f8f887", 
    size: "clamp(3.5rem, 9vw, 10.9375rem)",
    svgContent: "DIGESTION"
  },
  {
    text: "",
    bgColor: "#f8f887",
    textColor: "black",
    size: "clamp(3rem, 10vw, 12.5rem)",
    split: {
      leftText: "WHY",
      rightText: "NOT",
      leftBg: "#f8f887",
      rightBg: "black",
      leftTextColor: "black",
      rightTextColor: "#f8f887",
      gap: -4
    }
  },
  {
    text: "",
    bgColor: "#f8f887", 
    textColor: "black",
    size: "clamp(5rem, 12vw, 15.625rem)",
    split: {
      leftText: "BO",
      rightText: "TH",
      leftBg: "black",
      rightBg: "#f8f887",
      leftTextColor: "#f8f887",
      rightTextColor: "black",
      gap: -4
    }
  }
];

export default function AnimatedTextBars() {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % animationStates.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const state = animationStates[currentState];

  return (
    <div className="relative w-full bg-[#E5903D] min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div 
        className="relative w-full max-w-7xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] overflow-hidden"
        style={{
          backgroundColor: state.bgColor
        }}
        animate={{
          backgroundColor: state.bgColor
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
         whileHover={{ scale: 1.05 }}
      >
        <AnimatePresence mode="wait">
          {state.split ? (
            <motion.div
              key={`split-${currentState}`}
              className="relative w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left side */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 rounded-l-[25px] sm:rounded-l-[35px] md:rounded-l-[50px] overflow-visible"
                style={{
                  backgroundColor: state.split.leftBg,
                  width: "50%",
                  zIndex: 2
                }}
                animate={{
                  backgroundColor: state.split.leftBg
                }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-4">
                  <motion.div
                    className="font-black leading-none text-center"
                    style={{
                      fontSize: state.size,
                      color: state.split.leftTextColor,
                      letterSpacing: 'clamp(0.2rem, 0.5vw, 0.875rem)',
                      fontFamily: "'Kumbh Sans', sans-serif",
                      marginRight: state.split.gap ? `${state.split.gap}px` : '0'
                    }}
                    animate={{
                      color: state.split.leftTextColor
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {state.split.leftText}
                  </motion.div>
                </div>
              </motion.div>

              {/* Right side */}
              <motion.div 
                className="absolute right-0 top-0 bottom-0 rounded-r-[25px] sm:rounded-r-[35px] md:rounded-r-[50px] overflow-visible"
                style={{
                  backgroundColor: state.split.rightBg,
                  width: "50%",
                  zIndex: 1
                }}
                animate={{
                  backgroundColor: state.split.rightBg
                }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 flex items-center justify-start pl-2 sm:pl-4">
                  <motion.div
                    className="font-black leading-none text-center"
                    style={{
                      fontSize: state.size,
                      color: state.split.rightTextColor,
                      letterSpacing: 'clamp(0.2rem, 0.5vw, 0.875rem)',
                      fontFamily: "'Kumbh Sans', sans-serif",
                      marginLeft: state.split.gap ? `${state.split.gap}px` : '0'
                    }}
                    animate={{
                      color: state.split.rightTextColor
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {state.split.rightText}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={`single-${currentState}`}
              className="relative w-full h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-2 sm:px-4">
                <motion.div
                  className="font-medium leading-none text-center"
                  style={{
                    fontSize: state.size,
                    color: state.textColor,
                    letterSpacing: 'clamp(0.2rem, 0.5vw, 0.765625rem)',
                    fontFamily: "'Kumbh Sans', sans-serif"
                  }}
                  animate={{
                    color: state.textColor
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {state.text}
                </motion.div>

                {/* SVG content for MUSCLE */}
                {state.svgContent === "MUSCLE" && (
                  <motion.div
                    className="mt-4 sm:mt-6 md:mt-8 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%]"
                    style={{ aspectRatio: "1403/228" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <svg className="w-full h-full" fill="none" viewBox="0 0 1403 228">
                      <g>
                        <path d={svgPaths.p1d06b600} fill="black" />
                        <path d={svgPaths.p25e1fb00} fill="black" />
                        <path d={svgPaths.p309afe80} fill="black" />
                        <path d={svgPaths.p38e94880} fill="black" />
                        <path d={svgPaths.p9b89b80} fill="black" />
                        <path d={svgPaths.p14059bf0} fill="black" />
                      </g>
                    </svg>
                  </motion.div>
                )}

                {/* SVG content for DIGESTION */}
                {state.svgContent === "DIGESTION" && (
                  <motion.div
                    className="mt-4 sm:mt-6 md:mt-8 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%]"
                    style={{ aspectRatio: "1512/191" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <svg className="w-full h-full" fill="none" viewBox="0 0 1512 191">
                      <g>
                        <path d={svgPaths.p2cc8b200} fill="#F8F887" />
                        <path d={svgPaths.p5461700} fill="#F8F887" />
                        <path d={svgPaths.p200fda00} fill="#F8F887" />
                        <path d={svgPaths.p3b4d2a00} fill="#F8F887" />
                        <path d={svgPaths.p3c008f0} fill="#F8F887" />
                        <path d={svgPaths.p4855e00} fill="#F8F887" />
                        <path d={svgPaths.p3c9c5e40} fill="#F8F887" />
                        <path d={svgPaths.p19301280} fill="#F8F887" />
                        <path d={svgPaths.p2431bc0} fill="#F8F887" />
                      </g>
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}