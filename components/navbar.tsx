"use client"

import React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50  backdrop-blur-xl transition-all duration-300"
     
    >
      <div className="absolute inset-0">
        <img 
          src={"/hero/hero1.svg"} 
          alt="hero background" 
          className="w-full opacity-40 h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E5903D] via-transparent to-[#E5903D]/80" />
      </div>

      <div className="relative flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-full mx-auto">
        
        {/* Desktop Navigation Links - Left */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 flex-none min-w-[120px]">
          <AnimatePresence>
            {scrolled && (
              <motion.a
                href="#about"
                className="text-white hover:text-[#f8f887] transition-colors cursor-pointer text-lg lg:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        {/* Logo - Center */}
        <div className="flex-1 left-0 right-0 flex justify-center w-fit mx-auto">
          <div
            className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight cursor-pointer"
          >
            Anurassaa
          </div>
        </div>

        {/* Desktop Navigation Links - Right */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 flex-none min-w-[120px] justify-end">
          <AnimatePresence>
            {scrolled && (
              <motion.a
                href="#contact"
                className="text-white hover:text-[#f8f887] transition-colors cursor-pointer text-lg lg:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <AnimatePresence>
          {scrolled && (
            <motion.button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && scrolled && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-[#E5903D]/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              <motion.a
                href="#about"
                className="text-white hover:text-[#f8f887] transition-colors cursor-pointer text-lg"
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.a>
              <motion.a
                href="#contact"
                className="text-white hover:text-[#f8f887] transition-colors cursor-pointer text-lg"
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}