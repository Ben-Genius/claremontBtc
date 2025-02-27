"use client";
import { LucideLinkedin } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full bg-white py-6 border-t border-gray-300"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold">Contact</h3>
          <motion.p
            whileHover={{ x: 5 }}
            className="text-gray-700 cursor-pointer"
          >
            adashti39@cmc.edu
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <motion.p
            whileHover={{ x: 5 }}
            className="text-gray-700 hover:text-[#761515] transition-colors cursor-pointer"
          >
            Engage
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold">Social Connections</h3>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#761515] text-white rounded-full p-2 hover:bg-[#8a2020] transition-colors"
          >
            <LucideLinkedin size={20} />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
