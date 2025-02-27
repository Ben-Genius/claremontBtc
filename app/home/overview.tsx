"use client";
import React from "react";
import OverviewCard from "../component/ui/overviewCard";
import { STRINGS } from "../constant/strings";
import { Building2Icon, GraduationCap, UsersIcon } from "lucide-react";
import { motion } from "framer-motion";

const Overview = () => {
  const overviewList = [
    {
      icon: UsersIcon,
      title: STRINGS.card1Title,
      description: STRINGS.card1Description,
      buttonText: STRINGS.card1buttonText,
    },
    {
      icon: Building2Icon,
      title: STRINGS.card2Title,
      description: STRINGS.card2Description,
      buttonText: STRINGS.card2buttonText,
    },
    {
      icon: GraduationCap,
      title: STRINGS.card3Title,
      description: STRINGS.card3Description,
      buttonText: STRINGS.card3buttonText,
    },
  ];

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {overviewList.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <OverviewCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Overview;
