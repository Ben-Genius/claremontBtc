"use client";
import { LucideIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface OverviewCard {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  className?: string;
  link?: string;
}

const OverviewCard = ({
  title,
  description,
  icon: Icon,
  buttonText,
  className = "",
  link = "/",
}: OverviewCard) => {
  return (
    <motion.div
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-[#761515] w-full max-w-[35rem] h-auto min-h-[18rem] sm:min-h-[20rem] md:min-h-[23rem] rounded-lg p-4 mx-auto flex flex-col items-start justify-between ${className} ${
        className.includes("!bg-transparent") ? "px-0" : "px-4 sm:px-6 md:px-10"
      } `}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md"
      >
        <Icon className="text-[#761515] w-5 h-5 sm:w-6 sm:h-6" />
      </motion.div>
      <h1
        className={`text-white text-lg sm:text-xl font-medium tracking-wider uppercase mt-3 sm:mt-4 ${
          className.includes("!bg-transparent") ? "text-[#761515]" : ""
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-md sm:text-md font-normal tracking-wider mt-4 sm:mt-6 leading-relaxed ${
          className.includes("!bg-transparent")
            ? "text-[#761515]"
            : "text-white"
        }`}
      >
        {description}
      </p>
      <Link href={link} className="w-full">
        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(118, 21, 21, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`${
            className.includes("!bg-transparent")
              ? "bg-[#761515] text-white"
              : "bg-white text-[#761515]"
          } text-base text-lg font-normal tracking-wider mt-6 sm:mt-10 py-2 px-4 rounded-lg sm:rounded-xl w-full mb-2 sm:mb-3 shadow-lg`}
        >
          {buttonText}
        </motion.button>
      </Link>
    </motion.div>
  );
};
export default OverviewCard;
