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

    if (!mounted) {
        return (
            <div id="contact" className="bg-[#0a260a] py-12 min-h-screen flex items-center justify-center">
                <p className="text-white">Loading...</p>
            </div>
        );
    }

    return (
        <div id="contact" className="bg-[#0a260a] py-16 sm:py-20 lg:py-24 min-h-screen flex items-center">
            <div className="md:max-w-6xl lg:max-w-7xl xl:max-w-[1408px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
                {/* Header - Centered at top */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start tracking-[0.5rem] gap-4 md:gap-10">
                        {/* SIMPLIFY with underline */}
                        <h1 className="relative text-left text-[45px] sm:text-6xl lg:text-8xl xl:text-[122.65px] font-['Kumbh_Sans'] font-bold text-[#FAE951] leading-none">
                            SIMPLIFY.
                            <span className="absolute left-0 -bottom-2 w-full h-[3px]   bg-gradient-to-r from-[#E5903D] to-[#FFCE73]"></span>
                        </h1>

                        {/* RIGHT SIDE (YOUR DAILY above, NUTRITION below) */}
                        <div className="flex flex-col text-center md:text-left">
                            <span className="text-[22px] sm:text-3xl lg:text-4xl xl:text-5xl text-[#FAF6C6] font-['Kumbh_Sans'] font-semibold leading-tight">
                                YOUR <span className=" decoration-2">DAILY</span>
                            </span>
                            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAF6C6] font-bold">
                                NUTRITION
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className=" grid md:grid-cols-2 lg:grid-cols-8 gap-6 md:gap-12  xl:gap-24 items-stretch">
                    
                    {/* Left Image Panel */}
                    <motion.div
                        className="md:col-span-1 lg:col-span-3"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="rounded-2xl overflow-hidden h-full md:h-2/3 lg:h-full lg:min-h-[500px]">
                            <img
                                src="/contact/unsplash.svg"
                                alt="Protein powder being mixed"
                                className="w-full  h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right Contact Section */}
                    <motion.div
                        className="md:col-span-1 lg:col-span-5 lg:ml-16 "
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full flex flex-col">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 lg:mb-10 text-center lg:text-left ">
                                CONTACT US
                                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-[#E5903D] to-[#FFCE73]"></span>
                                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-[#E5903D] to-[#FFCE73]"></span>
                            </h2>
                            
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 xl:gap-16 flex-1">
                                {/* Form Section */}
                                <div className="flex-1">
                                    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                                        {/* Full Name Input */}
                                        <div>
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder="Full Name"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent border-b-2 border-[#E5903D] px-0 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FAE951] transition-colors text-base sm:text-lg lg:text-xl"
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
                                                className="w-full bg-transparent border-b-2 border-[#E5903D] px-0 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FAE951] transition-colors text-base sm:text-lg lg:text-xl"
                                                required
                                                autoComplete="email"
                                            />
                                        </div>

                                        {/* Mobile Input */}
                                        <div>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                placeholder="Mobile Number"
                                                value={formData.mobile}
                                                onChange={(e) => {
                                                    const numericValue = e.target.value.replace(/\D/g, "");
                                                    setFormData((prev) => ({ ...prev, mobile: numericValue }));
                                                }}
                                                className="w-full bg-transparent border-b-2 border-[#E5903D] px-0 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FAE951] transition-colors text-base sm:text-lg lg:text-xl"
                                                required
                                                autoComplete="tel"
                                                maxLength={10}
                                            />
                                        </div>

                                        {/* Message Input */}
                                        <div>
                                            <textarea
                                                name="message"
                                                placeholder="Message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={3}
                                                className="w-full bg-transparent border-b-2 border-[#E5903D] px-0 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FAE951] transition-colors resize-none text-base sm:text-lg lg:text-xl"
                                                required
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-4">
                                            <motion.button
                                                type="submit"
                                                className="bg-[#FAE951] text-[#0a260a] font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl hover:bg-[#FAE951]/90 transition-all shadow-xl"
                                                whileHover={{ scale: 1.07 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Contact Us
                                            </motion.button>
                                        </div>
                                    </form>
                                </div>

                                {/* Contact Info - Right Side */}
                                <div className="lg:w-48 xl:w-56 flex-shrink-0">
                                    <div className="space-y-6 sm:space-y-8">
                                        <div>
                                            <h4 className="font-bold text-[#E5903D] mb-2 text-sm sm:text-lg lg:text-3xl">Contact</h4>
                                            <p className="text-white text-sm sm:text-base">hi@green.com</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#E5903D] mb-2 text-sm sm:text-lg lg:text-3xl">Based in</h4>
                                            <p className="text-white text-sm sm:text-base">
                                                Los Angeles,<br />California
                                            </p>
                                        </div>
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