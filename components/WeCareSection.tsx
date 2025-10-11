"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function WeCareSection() {
    const [showCards, setShowCards] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    useEffect(() => {
        if (isInView) {
            setShowCards(false);
            const timer = setTimeout(() => {
                setShowCards(true);
            }, 2500);
            return () => clearTimeout(timer);
        } else {
            setShowCards(false);
        }
    }, [isInView]);

    return (
        <div ref={sectionRef} className="py-11 sm:py-12 md:py-27 lg:py-20 relative min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main heading - morphs smoothly */}
                <motion.div
                    className="text-center px-2 sm:px-4 relative"
                    style={{ 
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        perspective: 1000
                    }}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ 
                        y: isInView ? (showCards ? -50 : 100) : 100,
                        opacity: isInView ? 1 : 0
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    {/* Left Leaf - Appears only in initial state */}
                    <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-40 md:w-48 lg:w-56"
                        animate={{
                            opacity: showCards ? 0 : 1,
                            x: showCards ? -50 : 0
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >
                        <Image
                            src="/weCare/Leaf_01.svg"
                            alt="Leaf decoration"
                            width={368}
                            height={462}
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Right Leaf - Appears only in initial state */}
                    <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 sm:w-40 md:w-48 lg:w-56"
                        animate={{
                            opacity: showCards ? 0 : 1,
                            x: showCards ? 50 : 0
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >
                        <Image
                            src="/weCare/Leaf_01.svg"
                            alt="Leaf decoration"
                            width={368}
                            height={462}
                            className="w-full h-auto transform scale-x-[-1]"
                        />
                    </motion.div>

                    <motion.h1
                        className="font-[var(--font-cabinet)] text-9xl text-[#1B5E20]"
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center',
                            transform: 'translateZ(0)'
                        }}
                    >
                        {/* "We CARE" */}
                        <motion.div
                            style={{ overflow: 'hidden', transform: 'translateZ(0)' }}
                            animate={{
                                fontSize: showCards ? "2rem" : "3.5rem",
                                opacity: showCards ? 0 : 1,
                                height: showCards ? 0 : "auto",
                                marginBottom: showCards ? 0 : "0.5rem"
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            We CARE
                        </motion.div>

                        {/* "about" */}
                        <motion.div
                            style={{ overflow: 'hidden', transform: 'translateZ(0)' }}
                            animate={{
                                fontSize: showCards ? "2rem" : "3.5rem",
                                opacity: showCards ? 0 : 1,
                                height: showCards ? 0 : "auto",
                                marginBottom: showCards ? 0 : "0.5rem"
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            about
                        </motion.div>

                        {/* "YOU!" - smoothly glides to become full sentence */}
                        <motion.div
                            className="font-athene relative"
                            style={{ transform: 'translateZ(0)' }}
                            animate={{
                                fontSize: showCards ? "2rem" : "5rem",
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            {/* Continuous text that morphs smoothly */}
                            <motion.div
                                style={{ position: 'relative' }}
                                animate={{
                                    opacity: 1
                                }}
                            >
                                {/* "YOU!" that fades out */}
                                <motion.span
                                    style={{ 
                                        position: showCards ? 'absolute' : 'relative',
                                        left: showCards ? '50%' : 'auto',
                                        transform: showCards ? 'translateX(-50%)' : 'none'
                                    }}
                                    className="text-15xl font-semibold"
                                    animate={{
                                        opacity: showCards ? 0 : 1,
                                    }}
                                    transition={{ 
                                        duration: 0.6,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                >
                                    YOU!
                                </motion.span>
                                
                                {/* "We CARE about YOU!" that fades in at same position */}
                                <motion.span
                                    style={{ 
                                        position: showCards ? 'relative' : 'absolute',
                                        left: !showCards ? '50%' : 'auto',
                                        transform: !showCards ? 'translateX(-50%)' : 'none',
                                        whiteSpace: 'nowrap'
                                    }}
                                    className="text-3xl sm:text-4xl lg:text-5xl"
                                    animate={{
                                        opacity: showCards ? 1 : 0,
                                    }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.5,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                >
                                    We CARE about   
                                    <span className="font-semibold ml-1 sm:ml-2 md:ml-3 lg:ml-4">
                                        YOU!
                                    </span>
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.h1>
                </motion.div>

                {/* Cards appear smoothly */}
                <motion.div
                    className="mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showCards ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    {showCards && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                            {[
                                { src: "/weCare/Rectangle1.svg", title: "Completely\nAcid-Free" },
                                { src: "/weCare/Rectangle4.svg", title: "High Nitrogen\nSolubility Index" },
                                { src: "/weCare/Rectangle3.svg", title: "All essential\nAmino-acids" },
                                { src: "/weCare/Rectangle2.svg", title: "High Protein\nPurity" }
                            ].map((card, index) => (
                                <motion.div
                                    key={index}
                                    className="relative group w-full"
                                    style={{ 
                                        transform: 'translateZ(0)',
                                        backfaceVisibility: 'hidden'
                                    }}
                                    initial={{ 
                                        opacity: 0, 
                                        y: 60,
                                        scale: 0.9
                                    }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        scale: 1
                                    }}
                                    transition={{ 
                                        duration: 0.9,
                                        delay: 1 + (index * 0.2),
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    whileHover={{ 
                                        scale: 1.04,
                                        y: -6,
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                >
                                    <div className="rounded-xl lg:rounded-2xl overflow-hidden aspect-[3/4] relative shadow-lg">
                                        <Image
                                            src={card.src}
                                            height={600}
                                            width={450}
                                            alt={card.title}
                                            priority
                                            quality={90}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                            style={{ transform: 'translateZ(0)' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                                        <motion.h3 
                                            className="absolute bottom-3 sm:bottom-5 left-2 sm:left-4 right-2 sm:right-4 text-white font-semibold text-center text-xs sm:text-sm md:text-base"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ 
                                                delay: 1.3 + (index * 0.2),
                                                duration: 0.7,
                                                ease: "easeOut"
                                            }}
                                        >
                                            {card.title.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    {i < card.title.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </motion.h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
