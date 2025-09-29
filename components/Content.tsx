"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Content() {
  return (<>
    <div className="bg-[#E5903D] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid w-full md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-0">
          {/* Image sliding from left */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden relative w-full">
              <img
                src={"/content/rectangle.svg"}
                alt="Fermented protein"
                className="w-full h-[400px] rounded-3xl object-cover"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#0a260a]/60 to-transparent" />
            </div>
          </motion.div>

          {/* Text sliding from right */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-black text-[#f8f887] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              FERMENTED,
            </motion.h2>
            <motion.p
              className="text-2xl font-medium mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              NOT FORTIFIED.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Your gut knows the difference.
            </motion.p>
          </motion.div>
        </div>

        {/* Description fading in from bottom */}
        <motion.div
          className="mt-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-white text-lg leading-relaxed">
            Anurassaa delivers probiotic strains like
            Lactobacillus directly from its fermentation process
            without any additives. These beneficial microbes
            help maintain a balanced gut environment and enhance
            nutrient absorption.
          </p>
        </motion.div>
      </div>
    </div>
    <div className="bg-[#E5903D] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid w-full md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-0">
          {/* Text sliding from left */}
          <motion.div
            className="text-white order-2 md:order-1"
            initial={{ opacity: 0, x: -140 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-black text-[#f8f887] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              DIGESTION
            </motion.h2>
            <motion.p
              className="text-2xl font-medium mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              MADE EFFORTLESS,
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Your body knows it's smooth.
            </motion.p>
          </motion.div>

          {/* Image sliding from right */}
          <motion.div
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-3xl overflow-hidden relative w-full">
              <img
                src={"/content/rectangle1.svg"}
                alt="Easy digestion"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#0a260a]/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Description fading in from bottom */}
        <motion.div
          className="mt-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white text-lg leading-relaxed">
            Anurassaa's naturally fermented protein is gentle on
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