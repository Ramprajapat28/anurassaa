"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative bg-[#fefaef] min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/bg.svg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Animated Top Left Leaf */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute left-[-10px] top-12 sm:top-20 md:top-14 lg:top-20 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] z-20"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/hero/Leaf_02.svg"
            alt=""
            width={100}
            height={160}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Animated Top Right Leaf */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute right-[-1%] top-12 sm:top-20 md:top-14 lg:top-20 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] z-20"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Image
            src="/hero/Leaf_01.svg"
            alt=""
            width={100}
            height={160}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Centered Card */}
      <div className="relative max-w-xl md:max-w-2xl mx-auto px-8 py-14 bg-[#fefaef] rounded-[36px] border-[2.5px] border-[#27891F] shadow-lg flex flex-col items-center z-30">
        {/* Decorative Leaves Inside Card, bottom left/right */}
        <Image
          src="/hero/CardLeafLeft.svg"
          alt=""
          width={65}
          height={70}
          className="absolute left-[-28px] bottom-[-28px] hidden lg:block"
        />
        <Image
          src="/hero/CardLeafRight.svg"
          alt=""
          width={65}
          height={70}
          className="absolute right-[-28px] bottom-[-28px] hidden lg:block"
        />
        {/* Title */}
        <h2 className="text-2xl font-serif text-[#27891F] underline underline-offset-8 mb-5 tracking-wide text-center">
          ABOUT US
        </h2>
        {/* About Text */}
        <p className="text-[#27891F] text-[1.15rem] font-medium text-center leading-relaxed">
          Anurassaa delivers probiotic strains like Lactobacillus directly from its fermentation process without any additives. These beneficial microbes help maintain a balanced gut environment and enhance nutrient absorption.
        </p>
      </div>

      {/* Optional: Add animated leaves at bottom corners if desired for extra decoration */}
      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        className="absolute bottom-[-4%] lg:bottom-[-6%] left-[8%] sm:left-[12%] md:left-[-4%] lg:left-[7%] xl:left-[10%] 2xl:left-[16%] w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[300px] z-0"
      >
        <Image
          src="/hero/leaf1.svg"
          alt=""
          width={180}
          height={180}
          className="w-full h-auto"
        />
      </motion.div>
      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        className="absolute bottom-[-2%] right-[8%] sm:right-[12%] md:right-[-4%] lg:right-[7%] xl:right-[10%] 2xl:right-[16%] w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[300px] z-0"
      >
        <Image
          src="/hero/leaf2.svg"
          alt=""
          width={180}
          height={180}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
