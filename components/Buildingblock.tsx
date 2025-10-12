"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AnimationState {
  bgColor: string;
  videoUrl: string;
}

const animationStates: AnimationState[] = [
  {
    bgColor: "#2F4230",
    videoUrl: "/buildingblock/video.mp4"
  }
];

export default function AnimatedTextBars() {
  const [currentState, setCurrentState] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % animationStates.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const state = animationStates[currentState];

  return (
    <div className="relative w-full bg-[#2F4230] h-[60vh] md:min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div 
        className="relative w-full max-w-7xl aspect-video sm:aspect-video h-[200px] md:h-[400px] lg:h-[500px] md:aspect-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
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
        whileHover={{ scale: isMounted ? 1.02 : 1 }}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`video-${currentState}`}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              webkit-playsinline="true"
            >
              <source src={state.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}