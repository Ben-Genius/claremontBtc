"use client";
import Image from "next/image";
import React from "react";
import drive from "../assets/drive.png";
import Link from "next/link";
import { motion } from "framer-motion";

const ResourcesSection: React.FC = () => {
  // Animation variants for different elements
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    },
  };

  const quoteVariants = {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const paragraphVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="bg-[#F5E6E6] p-6 md:p-8 max-w-[87rem] mx-auto"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <motion.div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-serif text-center text-red-800 mb-6"
          variants={titleVariants}
        >
          RESOURCES
        </motion.h1>

        <div className="mb-6">
          <motion.p
            className="text-center italic mb-4"
            variants={quoteVariants}
          >
            "An investment in knowledge pays the best interest." – Benjamin
            Franklin
          </motion.p>

          <motion.p className="mb-4" variants={paragraphVariants}>
            The Claremont Bitcoin Club's primary goal is to provide an
            unparalleled education about Bitcoin that goes beyond the classroom.
            For that reason, we have compiled a collection of resources designed
            to deepen your understanding of Bitcoin's origins, technical
            foundation, and role in the global economy.
          </motion.p>

          <motion.p className="mb-4" variants={paragraphVariants}>
            The Resources section includes curated educational materials,
            insightful articles, and recommended books and websites to help you
            expand your knowledge of Bitcoin. We credit [Insert Contributor Name
            or Club Members] for creating this website.
          </motion.p>
        </div>

        <motion.div variants={imageVariants} whileHover="hover">
          <Link href="https://drive.google.com/drive/folders/1234567890">
            <motion.div
              initial={{ filter: "brightness(1)" }}
              whileHover={{ filter: "brightness(1.05)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={drive}
                alt="Google Drive Logo"
                width={1000}
                className="mt-2 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      <br />
    </motion.div>
  );
};

export default ResourcesSection;
