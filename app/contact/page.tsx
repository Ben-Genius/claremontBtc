"use client";
import Image from "next/image";
import React from "react";
import { STRINGS } from "../constant/strings";
import m1 from "../assets/clare.png";
import m2 from "../assets/mckena.png";
import { motion } from "framer-motion";

  // Main container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Header animation - reveal from bottom
  const headerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        duration: 0.7,
      },
    },
  };

  // Text animation - subtle fade in
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Subheader animation - slide in from left
  const subheaderVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Email animation
  const emailVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      color: "#761515",
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  // Images animation - reveal with mask effect
  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.5 },
    },
  };

  // Image caption animation
  const captionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 0.2 },
    },
  };

  
const ContactSection: React.FC = () => {

  return (
    <motion.div
      className="bg-[#F5E6E6] p-6 md:p-8 max-w-[87rem] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-serif text-center text-red-800 mb-6"
          variants={headerVariants}
        >
          CONTACT US
        </motion.h1>

        <motion.div className="mb-8">
          <motion.p className="mb-4" variants={textVariants}>
            {STRINGS.contact1}
          </motion.p>

          <motion.p className="mb-4" variants={textVariants}>
            CBC also welcomes contact from potential speakers, industry
            professionals, and other interested parties. Those looking to engage
            with our students on educational initiatives, research
            opportunities, or professional insights are encouraged to get in
            touch!
          </motion.p>

          <motion.p className="mb-8" variants={textVariants}>
            We encourage (but do not expect or require) interested students to
            read through the educational content on our Resources page.
          </motion.p>
        </motion.div>

        <motion.div className="mb-8">
          <motion.h2
            className="text-2xl md:text-3xl font-serif text-red-800 mb-2"
            variants={subheaderVariants}
          >
            President
          </motion.h2>

          <motion.p
            className="mb-6"
            variants={emailVariants}
            whileHover="hover"
          >
            Arman Dashti (CMC'27) –{" "}
            <motion.span className="hover:underline cursor-pointer">
              adashti39@cmc.edu
            </motion.span>
          </motion.p>

          <motion.h2
            className="text-2xl md:text-3xl font-serif text-red-800 mb-4"
            variants={subheaderVariants}
          >
            Claremont Mckenna College
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            variants={containerVariants}
          >
            <motion.div
              className="relative h-52 md:h-64 overflow-hidden rounded-md"
              variants={imageContainerVariants}
              whileHover="hover"
            >
              <Image
                src={m1}
                alt="Claremont Mckenna College"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 ease-in-out"
              />
              <motion.div
                className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 text-white text-sm"
                variants={captionVariants}
              >
                Claremont Mckenna College
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-52 md:h-64 overflow-hidden rounded-md"
              variants={imageContainerVariants}
              whileHover="hover"
            >
              <Image
                src={m2}
                alt="Claremont Colleges"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 ease-in-out"
              />
              <motion.div
                className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 text-white text-sm"
                variants={captionVariants}
              >
                Claremont Colleges
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
