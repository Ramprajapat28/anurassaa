"use client"

import React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

export default function Navbar() {
  
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <motion.div 
      className="fixed top-0  absolute left-0 right-0 z-5  backdrop-blur-lg transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="flex items-center justify-around gap-100 px-8 py-4 max-w-7xl mx-auto">
        
       

        {/* Navigation Links - Appear on scroll */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              className="flex space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 100, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.a
                href="#about"
                className="text-white hover:text-[#f8f887] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.a>
              
            </motion.div>
          )}
        </AnimatePresence>
         <motion.div
          className="text-white text-6xl z-100 justify-center font-bold leading-tight tracking-wide cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Anurassaa
        </motion.div>
         <AnimatePresence>
          {scrolled && (
            <motion.div
              className="flex space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
             <motion.a
                href="#contact"
                className="text-white hover:text-[#f8f887] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );

}