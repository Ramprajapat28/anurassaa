"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-[#fefaef] min-h-screen w-full overflow-hidden" data-name="Hero Section">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center" data-name="bg">
        <Image
          src="hero/bg.svg"
          alt="" 
          width={0}
          height={0}
          
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Left Leaf - Animated entrance at corner */}
      <motion.div 
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute left-[-10px] top-12  sm:top-20  md:top-14 lg:top-20 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] z-20">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          data-name="leaf-left">
          <Image
            alt="" 
              width={0}
          height={0}
            className="w-full h-auto" 
            src="hero/Leaf_02.svg" 
          />
        </motion.div>
      </motion.div>

      {/* Top Right Leaf - Animated entrance at corner (opposite direction) */}
      <motion.div 
        initial={{ opacity: 0, x: 100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute right-[-1%] top-12 sm:top-20  md:top-14 lg:top-20 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] z-20">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          
          data-name="leaf-right">
          <Image
            alt="" 
              width={0}
          height={0}
            className="w-full h-auto" 
            src="hero/Leaf_01.svg" 
          />
        </motion.div>
      </motion.div>

      {/* Hero Text */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-[40%]   lg:top-[25%] left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] max-w-[1442px] z-30 flex justify-center items-center"
      >
        <h1 className="font-['Athene_Voyage',_serif] text-[#27891f] text-center uppercase leading-tight w-full">
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-0">
            Protein That Does
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            More.
          </p>
        </h1>
      </motion.div>

      {/* Bottom Left Large Leaf - Responsive left position */}
      <motion.div 
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        className="
          absolute
          bottom-[-4%]
          lg:bottom-[-6%]

          left-[8%]    /* mobile */
          sm:left-[12%]
          md:left-[-4%]
          lg:left-[7%]
          xl:left-[10%]
          2xl:left-[16%]
          w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[300px]
          z-0
        "
        data-name="leaf2-left"
      >
        <motion.div
          // animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <Image
            alt="" 
              width={0}
          height={0}
            className="w-full h-auto" 
            src="hero/leaf1.svg" 
          />
        </motion.div>
      </motion.div>

      {/* Bottom Right Large Leaf - Responsive right position */}
      <motion.div 
        initial={{ opacity: 0, x: -100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        className="
          absolute
          bottom-[-2%]
          right-[8%]    /* mobile */
          sm:right-[12%]
          md:right-[-4%]
          lg:right-[7%]
          xl:right-[10%]
          2xl:right-[16%]
          w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[300px]
          z-0
        "
        data-name="leaf2-right"
      >
        <motion.div
          // animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Image
            alt=""
              width={0}
          height={0} 
            className="w-full h-auto" 
            src="hero/leaf2.svg" 
          />
        </motion.div>
      </motion.div>

      {/* Hero bowl image - Touches bottom */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto bg-cover  md:w-[85%] lg:w-[65%] xl:w-[50%] rounded-t-[50%] max-w-[1200px] z-10"
        data-name="hero-image">
      
        <div className="relative w-full h-full bg-bottom bottom-0  bg-cover  aspect-[3.12/1] ">
          <Image
            alt="Bowl of Bhaji" 
            // className="w-full h-full object-contain object-bottom"
            className="w-full h-full  bg-cover  bottom-0 object-contain  "
           width={0}
          height={0}
            src="hero/bhaji2.svg" 
            // src="hero/image.jpg"
          />
          
          {/* Know More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2
                       border-[2px] md:border-[3px] border-[#faf6c6] rounded-full
                       px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20
                       py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6
                       font-['Kumbh_Sans',_sans-serif] font-semibold text-[#faf6c6]
                       text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                       whitespace-nowrap
                       hover:bg-[#faf6c6] hover:text-[#27891f] transition-colors duration-300">
            Know More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}