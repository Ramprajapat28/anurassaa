"use client";
import { motion, AnimatePresence } from "framer-motion";


export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center  overflow-hidden bg-[#E5903D]">
      {/* Background Image */}
      <div className="absolute inset-0  ">
        <img 
          src={"/hero/hero1.svg"} 
          alt="hero background" 
          className="w-full opacity-40 right-[-10%] h-full object-cover "
        />
        <div className="absolute  inset-0 bg-gradient-to-r from-[#E5903D] via-transparent to-[#E5903D]/80" />
      </div>

      {/* Content */}
      <div className="relative z-70 left-0 px-8 pl-16 max-w-4xl">
        <motion.h1
          className="text-6xl md:text-8xl text-left font-black text-[#FAF6C6] mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          PROTEIN <br></br> THAT DOES MORE.
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-4xl text-left text-[#FAF6C6] font-medium "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.8 }}
        >
          FOR YOUR BODY AND THE PLANET
        </motion.p>
      </div>
    </div>
  );
}