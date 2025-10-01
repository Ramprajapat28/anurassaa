"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center  overflow-hidden bg-[#E5903D]">
      {/* Background Image */}
      <div className="absolute inset-0  ">
        <Image 
          src={"/hero/hero1.svg"}
        height={0}
                 width={0}
          alt="hero background" 
          className="w-full opacity-40  h-full object-cover "
        />
        <div className="absolute  inset-0 bg-gradient-to-r from-[#E5903D] via-transparent to-[#E5903D]/80" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#E5903D]/70 to-transparent" />
      </div>

      {/* Content */}
 <div className="relative  left-0 px-8 pl-6 md:pl-16 max-w-4xl">
        <motion.h1
          className="text-[52px]  md:text-6xl lg:text-8xl text-left font-black text-[#FAF6C6] mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          
        >
          PROTEIN <br></br> THAT <br></br>DOES MORE.
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-4xl text-left text-[#FAF6C6] tracking-wide font-medium "
          initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.8 }}
        >
          FOR YOUR BODY AND THE PLANET
        </motion.p>
      </div>     
    </div>
  );
}