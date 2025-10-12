"use client"

import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${!mobileMenuOpen ? 'rounded-b-3xl' : ''}`}
    >
      <div className={`absolute inset-0 ${!mobileMenuOpen ? 'rounded-b-3xl' : ''}`}>
        <Image
          src={"/hero/hero1.svg"} 
          height={0}
          width={0}
          alt="hero background" 
          className={`w-full opacity-40 h-full object-cover ${!mobileMenuOpen ? 'rounded-b-3xl' : ''}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-[#FEFAEF] via-transparent to-[#FEFAEF]/80 ${!mobileMenuOpen ? 'rounded-b-3xl' : ''} border-b md:border-b-3 border-[#27891F]`} />
      </div>

      <div className={`relative flex ${!mobileMenuOpen ? 'rounded-b-3xl' : ''} border-b border-[#27891F] items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-full mx-auto`}>
        
        {/* Desktop Navigation Links - Left */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 flex-1 justify-start">
          <AnimatePresence>
            {scrolled && (
              <motion.a
                href="#about"
                className="text-[#27891F] transition-colors cursor-pointer text-lg lg:text-2xl xl:text-3xl"
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
            className="text-[#27891F] text-center text-[32px] md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight cursor-pointer"
          >
            Anurassaa
          </div>
        </div>

        {/* Desktop Navigation Links - Right */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 flex-1 justify-end">
          <AnimatePresence>
            {scrolled && (
              <motion.a
                href="#contact"
                className="text-[#27891F] transition-colors cursor-pointer text-lg lg:text-2xl xl:text-3xl"
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
              className="md:hidden w-10 absolute right-4 text-[#27891F] p-2"
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
            className="md:hidden absolute top-full z-50 left-0 right-0 bg-[#FEFAEF]/80 rounded-b-xl backdrop-blur-xl border-t border-[#27891F]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col rounded-b-xl border-b border-[#27891F] space-y-4 py-6">
              <motion.a
                href="#about"
                className="text-[#27891F] transition-colors border-b border-[#27891F] pb-4 cursor-pointer px-6 text-lg"
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.a>
              <motion.a
                href="#contact"
                className="text-[#27891F] rounded-b-2xl border-[#27891F] transition-colors cursor-pointer px-6 text-lg"
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