"use client";

import React from "react";
import org from "../assets/organize.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2Icon, LucideIcon } from "lucide-react";
import { STRINGS } from "../constant/strings";
import OverviewCard from "../component/ui/overviewCard";

interface OverviewCard {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  className?: string;
}
const Organization = () => {
  return (
    <div className="my-28 relative overflow-hidden">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e5b6b650] to-[#76151520] backdrop-blur-sm rounded-2xl z-0"></div>

      {/* Content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-6 md:p-10"
      >
        {/* Organization image with enhanced styling */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <Image
              src={org}
              alt="organization"
              className="h-[40rem] w-full object-cover object-center transform hover:scale-90 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-white text-2xl font-bold tracking-wide">
                  {STRINGS.card2Title}
                </h3>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Organization description with glassmorphism card */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full md:w-1/2"
        >
          <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
            <OverviewCard
              className="!bg-transparent !w-full !h-auto"
              icon={Building2Icon}
              title={STRINGS.card2Title}
              description={STRINGS.card2Description}
              buttonText={STRINGS.card2buttonText}
              link="/team"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#761515]/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#761515]/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Organization;
