"use client";
import { motion} from "framer-motion";
import Image from "next/image";

export default function Content() {
  return (
    <>
      {/* First Section */}
      <div className="bg-[#E5903D] pb-8 sm:pb-12 md:pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-36 items-center">
            {/* Image sliding from left */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
              whileHover={{ scale: 1.05 }}
              // viewport={{ once: true, amount: 0.3 }}
            >
              <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative w-full">
                <Image
                  src={"/content/rectangle.svg"}
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
              // viewport={{  amount: 0.3 }}
            >
              <motion.h2
                className="text-3xl xs:text-4xl md:text-center  sm:text-5xl lg:text-6xl font-black text-[#f8f887] mb-2 sm:mb-3 lg:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                // viewport={{ once: true }}
              >
                FERMENTED,
              </motion.h2>
              <motion.p
                className="text-lg xs:text-xl md:text-center  sm:text-2xl font-medium mb-4 sm:mb-6 lg:mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                // viewport={{ once: true }}
              >
                NOT FORTIFIED.
              </motion.p>
              <motion.p
                className="text-base sm:text-xl md:text-2xl font-thin  md:text-center leading-relaxed tracking-widest mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                // viewport={{ once: true }}
              >
                Your gut knows the difference.
              </motion.p>
            </motion.div>
          </div>

          {/* Description fading in from bottom */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            // viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-white sm:text-lg  lg:text-2xl leading-relaxed px-2 sm:px-4 lg:px-0">
              Anurassaa delivers probiotic strains like
              Lactobacillus directly from its fermentation process
              without any additives. These beneficial microbes
              help maintain a balanced gut environment and enhance
              nutrient absorption.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-[#E5903D] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-36 items-center">
            {/* Text sliding from left - Order changes on mobile */}
            <motion.div
              className="text-white order-2 md:order-1 mt-4 md:mt-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              // viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-3xl xs:text-4xl  md:text-center sm:text-5xl lg:text-6xl font-black text-[#f8f887] mb-2 sm:mb-3 lg:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                // viewport={{ once: true }}
              >
                DIGESTION
              </motion.h2>
              <motion.p
                className="text-lg xs:text-xl sm:text-2xl md:text-center font-bold mb-4 sm:mb-6 lg:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                // viewport={{ once: true }}
              >
                MADE EFFORTLESS,
              </motion.p>
              <motion.p
                className="text-base   md:text-center sm:text-lg md:text-2xl font-thin tracking-widest leading-relaxed mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                // viewport={{ once: true }}
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
              // viewport={{ once: true, amount: 0.3 }}
            >
              <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative w-full">
                <Image
                  src={"/content/rectangle1.svg"}
                   height={0}
                 width={0}
                  alt="Easy digestion"
                  className="w-full h-[220px] xs:h-[250px] group-hover:scale-110 sm:h-[300px] md:h-[350px] lg:h-[400px]  object-cover"
                />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#0a260a]/60 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Description fading in from bottom */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            
          >
            <p className="text-white  sm:text-lg lg:text-2xl leading-relaxed px-2 sm:px-4 lg:px-0">
              Anurassaa&apos;s naturally fermented protein is gentle on
              your gut. With high solubility and nitrogen index,
              it mixes easily and is well-tolerated — unlike many
              whey or chemically extracted proteins that often
              cause bloating or discomfort.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}