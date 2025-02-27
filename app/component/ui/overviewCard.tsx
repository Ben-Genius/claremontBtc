"use client";
import { LucideIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface OverviewCard {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
}

const OverviewCard = ({
  title,
  description,
  icon: Icon,
  buttonText,
}: OverviewCard) => {
  return (
    <motion.div
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#761515] h-[380px] w-[280px] lg:w-[340px] rounded-lg p-4 mx-auto flex flex-col items-start justify-between"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
      >
        <Icon />
      </motion.div>
      <h1 className="text-white text-xl font-medium tracking-wider uppercase mt-4">
        {title}
      </h1>
      <p className="text-white text-md font-normal tracking-wider mt-6 leading-relaxed">
        {description}
      </p>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white text-[#761515] text-md font-normal tracking-wider mt-10 py-2 px-4 rounded-xl w-full mb-3"
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default OverviewCard;
