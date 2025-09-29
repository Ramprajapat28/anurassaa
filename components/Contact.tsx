"use client"

import React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Contact() {
    return (
        <div id="contact" className="bg-[#E5903D] py-8 sm:py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#f8f887]">
                            SIMPLIFY.
                        </h2>
                        <div className="flex flex-col">
                            <span className="text-lg sm:text-xl lg:text-2xl text-white font-medium leading-tight">
                                YOUR <span className="underline">DAILY</span>
                            </span>
                            <span className="text-lg sm:text-xl lg:text-2xl text-white font-medium">
                                NUTRITION
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Left Image Panel - Compact */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-2xl p-6 sm:p-8 aspect-square flex items-center justify-center">
                            <img
                                src={"/contact/image1.svg"}
                                alt="Protein powder in bowl"
                                className="w-full h-full object-contain max-w-[280px] max-h-[280px]"
                            />
                        </div>
                    </motion.div>

                    {/* Right Newsletter Panel - Compact */}
                    <motion.div
                        className="bg-[#b2d99a] rounded-2xl p-6 sm:p-8 relative overflow-hidden aspect-square"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Background "ANURASSA" text */}
                        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
                            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a260a]/15 whitespace-nowrap">
                                ANURASSA
                            </span>
                        </div>

                        <div className="relative z-10 h-full flex flex-col">
                            <h3 className="text-[#0a260a] text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                                SIGN UP FOR OUR NEWSLETTER
                            </h3>

                            <div className="flex gap-2 mb-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="flex-1 bg-white rounded-xl px-4 py-3 text-[#0a260a] placeholder-[#666] text-sm border border-[#0a260a]/20 focus:outline-none focus:border-[#0a260a]"
                                />
                                <button className="bg-[#0a260a] text-white px-4 py-3 rounded-xl hover:bg-[#0a260a]/80 transition-colors">
                                    →
                                </button>
                            </div>

                            <p className="text-[#0a260a] text-sm mb-4">
                                Need Some Help?{" "}
                                <span className="underline cursor-pointer font-medium">
                                    Get in Touch
                                </span>
                            </p>

                            {/* Bowl and leaves decoration - Bottom positioned */}
                            <div className="mt-auto relative">
                                {/* Background decorative leaves */}
                                <div className="absolute inset-0 opacity-30">
                                    <img
                                        src={"/contact/leaves.svg"}
                                        alt=""
                                        className="absolute bottom-0 left-4 w-12 h-12 opacity-60"
                                    />
                                    <img
                                        src={"/contact/Leaf_01.svg"}
                                        alt=""
                                        className="absolute top-0 right-0 w-8 h-8 rotate-45"
                                    />
                                    <img
                                        src={"/contact/leaves.svg"}
                                        alt=""
                                        className="absolute bottom-2 right-8 w-10 h-10 rotate-12 opacity-40"
                                    />
                                </div>
                                
                                {/* Main bowl with vegetables */}
                                <div className="flex justify-center">
                                    <img
                                        src={"/contact/Bowl.svg"}
                                        alt="Bowl with vegetables"
                                        className="w-20 sm:w-24 h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
