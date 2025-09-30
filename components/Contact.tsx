"use client"

import React from "react";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        message: '',
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    // Prevent hydration mismatch by not rendering form until mounted
    if (!mounted) {
        return (
            <div id="contact" className="bg-[#E5903D] py-16 sm:py-20 lg:py-24 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-10">
                            <h1 className="relative text-[45px] sm:text-7xl lg:text-8xl xl:text-[122.65px] font-['Kumbh_Sans'] font-bold text-[#FAE951] leading-none">
                                SIMPLIFY.
                                <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#FAE951]"></span>
                            </h1>
                            <div className="flex flex-col text-center md:text-left">
                                <span className="text-[22px] sm:text-3xl lg:text-4xl xl:text-5xl text-[#FAF6C6] font-['Kumbh_Sans'] font-semibold leading-tight">
                                    YOUR <span className="underline decoration-2">DAILY</span>
                                </span>
                                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAF6C6] font-bold">
                                    NUTRITION
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto items-start">
                        <div className="relative group w-full max-w-sm mx-auto md:max-w-none md:mx-0">
                            <div className="rounded-2xl overflow-hidden w-full">
                                <img
                                    src={"/contact/unsplash.svg"}
                                    alt="Protein powder being mixed"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="bg-[#f5f5f5]/95 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl h-full">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5903D] mb-10 text-center tracking-wide">
                                CONTACT US
                            </h2>
                            <div className="h-64 flex items-center justify-center">
                                <p className="text-gray-500">Loading...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="contact" className="bg-[#E5903D] py-16 sm:py-20 lg:py-24 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                {/* Header - Centered at top */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-10">
                        {/* SIMPLIFY with underline */}
                        <h1 className="relative text-[45px] sm:text-7xl lg:text-8xl xl:text-[122.65px] font-['Kumbh_Sans'] font-bold text-[#FAE951] leading-none">
                            SIMPLIFY.
                            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#FAE951]"></span>
                        </h1>

                        {/* RIGHT SIDE (YOUR DAILY above, NUTRITION below) */}
                        <div className="flex flex-col text-center md:text-left">
                            <span className="text-[22px] sm:text-3xl lg:text-4xl xl:text-5xl text-[#FAF6C6] font-['Kumbh_Sans'] font-semibold leading-tight">
                                YOUR <span className="underline decoration-2">DAILY</span>
                            </span>
                            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAF6C6] font-bold">
                                NUTRITION
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto items-stretch">
                    {/* Left Image Panel */}
                    <motion.div
                        className="relative group w-full lg:w-1/2 flex-shrink-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="rounded-2xl overflow-hidden w-full h-full">
                            <img
                                src={"/contact/unsplash.svg"}
                                alt="Protein powder being mixed"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </motion.div>

                    {/* Right Contact Form Panel */}
                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[#f5f6f5]/95 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col h-full">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5903D] mb-10 text-center tracking-wide">
                                CONTACT US
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-8" suppressHydrationWarning>
                                {/* Full Name Input */}
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b-2 border-[#E5903D] px-0 py-3 text-gray-700 placeholder-gray-600 focus:outline-none focus:border-[#E5903D] transition-colors text-base sm:text-lg"
                                        required
                                        autoComplete="name"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b-2 border-[#E5903D] px-0 py-3 text-gray-700 placeholder-gray-600 focus:outline-none focus:border-[#E5903D] transition-colors text-base sm:text-lg"
                                        required
                                        autoComplete="email"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        value={formData.mobile}
                                        onChange={(e) => {
                                            const numericValue = e.target.value.replace(/\D/g, ""); // remove non-numbers
                                            setFormData((prev) => ({ ...prev, mobile: numericValue }));
                                        }}
                                        className="w-full bg-transparent border-b-2 border-[#E5903D] px-0 py-3 text-gray-700 placeholder-gray-600 focus:outline-none focus:border-[#E5903D] transition-colors text-base sm:text-lg"
                                        required
                                        autoComplete="tel"
                                        maxLength={10} // optional: limit to 10 digits
                                    />
                                </div>



                                {/* Message Input */}
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b-2 border-[#E5903D] px-0 py-3 text-gray-700 placeholder-gray-600 focus:outline-none focus:border-[#E5903D] transition-colors resize-none text-base sm:text-lg"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <motion.button
                                        type="submit"
                                        className="bg-[#f8f887] text-[#0a260a] font-semibold px-10 py-3 rounded-full text-base sm:text-lg hover:bg-[#f8f887]/90 transition-all shadow-md border-2 border-[#0a260a]"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        Contact Us
                                    </motion.button>
                                </div>
                            </form>

                            {/* Contact Info - Two Columns at Bottom */}
                            <div className="mt-10 pt-8 border-t border-[#E5903D]/30">
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-[#E5903D] mb-2 text-sm sm:text-base">Contact</h4>
                                        <p className="text-gray-700 text-sm sm:text-base">hi@green.com</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#E5903D] mb-2 text-sm sm:text-base">Based in</h4>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            Los Angeles,<br />California
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
