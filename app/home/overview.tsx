"use client";
import React from "react";
import OverviewCard from "../component/ui/overviewCard";
import { STRINGS } from "../constant/strings";
import { Building2Icon, GraduationCap, UsersIcon } from "lucide-react";
import { motion } from "framer-motion";
import Organization from "./organization";

const Overview = () => {
  const overviewList = [
    {
      icon: UsersIcon,
      title: STRINGS.card1Title,
      description: STRINGS.card1Description,
      buttonText: STRINGS.card1buttonText,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfWrewl692Z8L019RFEOhdMB5hK_gv6SkSdpL4kLLxlBPfNpg/viewform",
    },
    {
      icon: GraduationCap,
      title: STRINGS.card3Title,
      description: STRINGS.card3Description,
      buttonText: STRINGS.card3buttonText,
      link: "/resources",
    },
  ];

  return (
    <div className="relative overflow-hidden py-6 sm:py-8 md:py-10">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e5b6b620] to-[#76151510] z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#761515]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-[5%] w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-[#e5b6b6]/10 rounded-full blur-3xl"></div>

      {/* Content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {overviewList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="backdrop-blur-sm bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-500"
            >
              <OverviewCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                className="!bg-gradient-to-br !from-[#761515] !to-[#8a2424] !shadow-lg hover:!shadow-xl transition-all duration-300"
                link={item.link}
              />
            </motion.div>
          ))}
        </div>

        <Organization />
      </motion.div>
    </div>
  );
};

export default Overview;
