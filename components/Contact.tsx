"use client"

import React from "react";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
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
            <div id="contact" className="bg-[#2F4230] py-12 min-h-screen flex items-center justify-center">
                <p className="text-white">Loading...</p>
            </div>
        );
    }

    return (
        <div id="contact" className="bg-[#2F4230] min-h-screen lg:py-0 py-5 lg:py-16 flex items-center justify-center">
            <div className="max-w-[100%] xl:max-w-[95%] w-full">
                <motion.div
                    className="relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-[#2F4230] p-4 md:p-8">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 2xl:max-w-[80%] mx-auto items-stretch">

                            {/* Right Panel - Image & Text Section */}
                            <motion.div
                                className="flex flex-col gap-4"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {/* Header Text */}
                                <div className="text-center">
                                    <h3 className="text-[#FEFAEF] text-lg md:text-xl lg:text-2xl font-cabinet mb-1 tracking-wide">
                                        Your daily NUTRITION
                                    </h3>
                                    <h1 className="text-[#FAF6C6] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-athene tracking-wider leading-none">
                                        SIMPLIFIED
                                    </h1>
                                </div>

                                {/* Image */}
                                <motion.div
                                    className="rounded-2xl overflow-hidden w-full md:max-w-[18rem] lg:max-w-[20rem] xl:max-w-[23rem] mx-auto"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src="/contact/unsplash.svg"
                                        height={0}
                                        width={0}
                                        alt="Protein powder being mixed"
                                        className="w-full h-auto object-contain"
                                    />
                                </motion.div>
                            </motion.div>
                            {/* Left Panel - Form Section */}
                            <motion.div
                                className="bg-[#FAF6C6] rounded-2xl p-6 md:p-9 xl:p-10 flex flex-col justify-between"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                {/* Top Section - Form and Contact Info Side by Side */}
                                <div className="flex flex-col xl:flex-row gap-10 xl:gap-20 pt-5   ">
                                    {/* Form Inputs Section */}
                                    <div className="flex-1">
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Full Name Input */}
                                            <div>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    placeholder="Full Name"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-transparent border-b-2 border-[#3a5144] font-cabinet px-0 py-2 text-[#174713]/80 placeholder-[#174713]/50 focus:outline-none focus:border-[#2a4134] transition-colors sm:text-md md:text-lg lg:text-xl font-light"
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
                                                    className="w-full bg-transparent border-b-2 border-[#3a5144] font-cabinet px-0 py-2 text-[#174713]/80 placeholder-[#174713]/50 focus:outline-none focus:border-[#2a4134] transition-colors sm:text-md md:text-lg lg:text-xl font-light"
                                                    required
                                                    autoComplete="email"
                                                />
                                            </div>

                                            {/* Message Input */}
                                            <div>
                                                <textarea
                                                    name="message"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    rows={2}
                                                    className="w-full bg-transparent border-b-2 border-[#3a5144] font-cabinet px-0 py-2 text-[#174713]/80 placeholder-[#174713]/50 focus:outline-none focus:border-[#2a4134] transition-colors resize-none sm:text-md md:text-lg lg:text-xl font-light"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </div>

                                    {/* Contact & Based In Section - Right Column */}
                                    <div className="flex flex-row xl:flex-col gap-10">
                                        <div className="self-start">
                                            <h4 className="font-bold text-[#174713]/80 font-cabinet mb-1 sm:text-md md:text-lg lg:text-2xl">Contact</h4>
                                            <p className="text-[#174713]/70 font-athene sm:text-md md:text-lg lg:text-2xl">anurassa.com</p>
                                        </div>
                                        <div className="ml-auto self-end xl:ml-0 xl:self-auto">
                                            <h4 className="font-bold text-[#174713]/80 font-cabinet mb-1 sm:text-md md:text-lg lg:text-2xl">Based in</h4>
                                            <p className="text-[#174713]/70 font-athene sm:text-md md:text-lg lg:text-2xl">India</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Section - Logo and Icon */}
                                <div className="flex items-center-safe gap-5 justify-between">
                                    <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-[#3a5144] font-cabinet underline decoration-[2px] underline-offset-6">
                                        Anurassaa
                                    </h2>
                                    {/* Mortar & Pestle Icon */}
                                    {/* <div className="w-15 h-15 flex-shrink-0">
                                        <svg viewBox="0 0 512 512" className="w-full h-full fill-[#3a5144]">
                                            <path d="M504.3 11.1C493.3-1.6 474.5-3.7 461 6.2L252.3 160H397.3L502.6 54.6c11.8-11.8 12.6-30.8 1.6-43.5zM32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 82.5 43.4 147.7 123.9 176.2c-11.1 13.9-19.4 30.3-23.9 48.1C127.6 497.4 142.3 512 160 512H288c17.7 0 32.4-14.6 28-31.7c-4.5-17.8-12.8-34.1-23.9-48.1C372.6 403.7 416 338.5 416 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
                                        </svg>
                                    </div> */}

                                    <div className="w-20 h-20 md:w-30 md:h-30 xl:w-50 xl:h-50  flex-shrink-0">
                                        <Image
                                            src="/contact/bowl.svg"
                                            alt="Icon"
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
