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
  link="/"
}: OverviewCard) => {
  return (
    <motion.div
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-[#761515] w-[35rem] h-[22rem] rounded-lg p-4 mx-auto flex flex-col items-start justify-between ${className} ${
        className.includes("!bg-transparent") ? "px-0" : "px-10"
      } `}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-md"
      >
        <Icon className="text-[#761515]" />
      </motion.div>
      <h1
        className={`text-white text-xl font-medium tracking-wider uppercase mt-4 ${
          className.includes("!bg-transparent") ? "text-[#761515]" : ""
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-md font-normal tracking-wider mt-6 leading-relaxed ${
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
          } text-lg font-normal tracking-wider mt-10 py-2 px-4 rounded-xl w-full mb-3 shadow-lg`}
        >
          {buttonText}
        </motion.button>
      </Link>
    </motion.div>
  );
};
export default OverviewCard;
