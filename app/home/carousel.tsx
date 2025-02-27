"use client";
import React from "react";
import ImageCarousel from "../component/ui/imageCarousel";
import { motion } from "framer-motion";

const CarouselSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-12 bg-[#f8e7e7]"
    >
      <div className="max-w-[82rem] mx-auto px-4">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-center font-semibold text-[#761515] mb-8"
        >
          Events & Activities
        </motion.h2>

        <ImageCarousel />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join us for weekly meetings, workshops, and special events
            throughout the semester. Our community brings together students
            interested in learning about Bitcoin and blockchain technology.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CarouselSection;
