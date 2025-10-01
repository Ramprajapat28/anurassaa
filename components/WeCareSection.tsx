"use client"

import React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
// import { Menu, X } from "lucide-react";

export default function WeCareSection() {
    const [showFinger, setShowFinger] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFinger((prev) => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-8 sm:py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* First row: Responsive layout - stacked on mobile, 3-col on larger screens */}
                {/* First row: Responsive layout - stacked on mobile, 3-col from tablet onwards */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12 items-center">
                    {/* First Image */}
                    <motion.div
                        className="relative group w-full max-w-sm mx-auto md:max-w-none md:mx-0 order-1 md:order-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="rounded-xl lg:rounded-2xl overflow-hidden md:aspect-[4/3] lg:aspect-auto relative">
                            <Image
                                src={"/weCare/Rectangle1.svg"}
                              height={0}
                 width={0}
                                alt="Completely Acid-Free"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <h3 className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white font-medium text-center text-xs sm:text-sm md:text-base">
                                Completely Acid-Free
                            </h3>
                        </div>
                    </motion.div>

                    {/* Main heading with animated "YOU" - centered on mobile */}
                    <motion.div
                        className="text-center px-2 sm:px-4 order-3 md:order-2 w-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#E5903D] md:text-white">
                            <div className="mb-1 sm:mb-2">We CARE</div>
                            <div className="mb-1 sm:mb-2">about</div>
                            <AnimatePresence mode="wait">
                                {showFinger ? (
                                    <motion.span
                                        key="finger"
                                        className="inline-block text-[#f8f887] text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                            rotate: -10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            rotate: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.5,
                                            rotate: 10,
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        🫵
                                    </motion.span>
                                ) : (
                                    <motion.div
                                        key="you"
                                        className="text-[#000000] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        YOU!
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Second Image */}
                    <motion.div
                        className="relative group w-full max-w-sm mx-auto md:max-w-none md:mx-0 order-2 md:order-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="rounded-xl lg:rounded-2xl overflow-hidden md:aspect-[4/3] lg:aspect-auto relative">
                            <Image
                                src={"/weCare/Rectangle2.svg"}
                                height={0}
                 width={0}
                                alt="High Protein Purity"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <h3 className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white font-medium text-center text-xs sm:text-sm md:text-base">
                                High Protein Purity
                            </h3>
                        </div>
                    </motion.div>
                </div>


                {/* Second row of images - responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 max-w-4xl mx-auto">
                    {[
                        {
                            Image: "/weCare/Rectangle4.svg",
                            title: "High Nitrogen Solubility Index",
                        },
                        {
                            Image: "/weCare/Rectangle3.svg",
                            title: "All essential Amino-acids",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index + 2}
                            className="relative group w-full max-w-sm mx-auto sm:max-w-none"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: (index + 2) * 0.1,
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="rounded-xl lg:rounded-2xl overflow-hidden aspect-[4/3] relative">
                                <Image
                                    src={item.Image}
                                     height={0}
                 width={0}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <h3 className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white font-medium text-center text-xs sm:text-sm md:text-base">
                                    {item.title}
                                </h3>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
