"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Content() {
  return (
    <div className="bg-gradient-to-b
      from-[#2F4230] from-0%
      via-[#2F4230] via-20%
      via-[#374C37] via-35%
      via-[#485F45] via-45%
      via-[#607B58] via-55%
      via-[#86A676] via-65%
      via-[#B2D99A] via-75%
      to-[#C8E2B2] to-100%
      bg-[length:100%_100%]
      bg-no-repeat">

      <div className="text-center mb-14">
        <h1 className="text-4xl py-12 font-[var(--font-cabinet)] md:text-5xl font-serif tracking-wide text-[#f5f5f5]">
          Why Anurassa?
        </h1>
      </div>

      {/* First Section */}
      <div className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-36 items-center">
            {/* Image sliding from left */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative w-full">
                <Image
                  src={"/content/Rectangle.svg"}
                  height={0}
                  width={0}
                  alt="Fermented protein"
                  className="w-full h-[220px] xs:h-[250px] group-hover:scale-110 sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#0a260a]/60 to-transparent" />
              </div>
            </motion.div>

            {/* Text sliding from right */}
            <motion.div
              className="text-white mt-4 md:mt-0"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl xs:text-4xl md:text-center sm:text-5xl lg:text-6xl underline decoration-[1px] underline-offset-4 font-athene font-medium text-[#FEFAEF] mb-2 sm:mb-3 lg:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                FERMENTED
              </motion.h2>
              <motion.p
                className="text-xl xs:text-xl md:text-center sm:text-3xl font-cabinet font-bold mb-4 sm:mb-6 lg:mb-3 text-[#bbe1a3]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                NOT FORTIFIED.
              </motion.p>
              <motion.div
                className="flex justify-center items-center mb-4 sm:mb-5 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <Image
                    src={"/content/balls.svg"}
                    fill
                    alt="Stomach icon"
                    className="object-contain"
                  />
                </div>
              </motion.div>
              <motion.p
                className="text-base sm:text-xl md:text-2xl font-cabinet md:text-center text-[#FEFAEF] leading-relaxed mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Your gut knows the difference.
              </motion.p>
            </motion.div>
          </div>

          {/* Description fading in from bottom
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-white sm:text-lg lg:text-2xl leading-relaxed px-2 sm:px-4 lg:px-0">
              Anurassaa delivers probiotic strains like
              Lactobacillus directly from its fermentation process
              without any additives. These beneficial microbes
              help maintain a balanced gut environment and enhance
              nutrient absorption.
            </p>
          </motion.div> */}
        </div>
      </div>

      {/* Transition Section */}
      <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-b from-transparent via-[#86A676]/20 to-transparent"></div>

      {/* Second Section */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-36 items-center">
            {/* Text sliding from left - Order changes on mobile */}
            <motion.div
              className="text-white order-2 md:order-1 mt-4 md:mt-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h2
                className="
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    md:text-center
    font-athene font-medium
    text-[#174713]
    underline decoration-[1px] underline-offset-4
    mb-2 sm:mb-3 lg:mb-4
  "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                DIGESTION
              </motion.h2>

              <motion.p
                className="text-lg xs:text-xl sm:text-2xl md:text-center text-[#27891F] font-cabinet font-bold mb-4 sm:mb-6 lg:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                MADE EFFORTLESS,
              </motion.p>
              {/* Stomach Icon - Centered and Responsive */}
              <motion.div
                className="flex justify-center items-center mb-4 sm:mb-5 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <Image
                    src={"/content/stomach.svg"}
                    fill
                    alt="Stomach icon"
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <motion.p
                className="text-base md:text-center text-[#174713] sm:text-lg md:text-2xl font-cabinet leading-relaxed mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Your body knows it&apos;s smooth.
              </motion.p>
            </motion.div>

            {/* Image sliding from right */}
            <motion.div
              className="relative group order-1 md:order-2"
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative w-full">
                <Image
                  src={"/content/Rectangle1.svg"}
                  height={0}
                  width={0}
                  alt="Easy digestion"
                  className="w-full h-[220px] xs:h-[250px] group-hover:scale-110 sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#0a260a]/60 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Description fading in from bottom */}
          {/* <motion.div
            className="mt-8 sm:mt-12 lg:mt-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white sm:text-lg lg:text-2xl leading-relaxed px-2 sm:px-4 lg:px-0">
              Anurassaa&apos;s naturally fermented protein is gentle on
              your gut. With high solubility and nitrogen index,
              it mixes easily and is well-tolerated — unlike many
              whey or chemically extracted proteins that often
              cause bloating or discomfort.
            </p>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
