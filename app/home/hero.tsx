"use client";
import Image from "next/image";
import React from "react";
import hero from "../assets/hero.png";
import { STRINGS } from "../constant/strings";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src={hero}
          alt="Claremont College campus"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-2 md:right-12 lg:right-[1rem] top-[40%] lg:top-[50%] transform -translate-y-1/2 
                  bg-[#CA7575] bg-opacity-70 rounded-lg p-6 md:p-8
                  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-white text-base md:text-lg lg:text-xl font-normal leading-relaxed"
        >
          {STRINGS.heroDescription}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
