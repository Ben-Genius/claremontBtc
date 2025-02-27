"use client";
import React from "react";
import { STRINGS } from "../constant/strings";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Dummy Image URL (Replace later with actual images)
const dummyImage =
  "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";

// Type Definition for Leader Data
type Leader = {
  name: string;
  role: string;
  linkedin: string;
  image: string;
};

// President Data
const president: Leader = {
  name: "Arman Dashti",
  role: "President, Founder",
  linkedin: "https://linkedin.com/in/armandashti",
  image: dummyImage,
};

// Leadership Committee Members Data
const leadershipTeam: Leader[] = [
  {
    name: "Kekeli Bright",
    role: "Chief Executive Officer",
    linkedin: "https://linkedin.com/in/kekelibright",
    image: dummyImage,
  },
  {
    name: "Kekeli Bright",
    role: "Chief Executive Officer",
    linkedin: "https://linkedin.com/in/kekelibright",
    image: dummyImage,
  },
  {
    name: "Kekeli Bright",
    role: "Chief Executive Officer",
    linkedin: "https://linkedin.com/in/kekelibright",
    image: dummyImage,
  },
  {
    name: "Kekeli Bright",
    role: "Chief Executive Officer",
    linkedin: "https://linkedin.com/in/kekelibright",
    image: dummyImage,
  },
  {
    name: "Kekeli Bright",
    role: "Chief Executive Officer",
    linkedin: "https://linkedin.com/in/kekelibright",
    image: dummyImage,
  },
  {
    name: "Kekeli Bright",
    role: "Chief Executive Officer",
    linkedin: "https://linkedin.com/in/kekelibright",
    image: dummyImage,
  },
];

const Team = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <motion.div
      className="max-w-[87rem] mx-auto bg-[#F5E6E6] py-12 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl font-semibold text-[#761515] text-center mb-8"
        variants={titleVariants}
      >
        LEADERSHIP
      </motion.h1>

      {/* Description paragraphs with blue text for first paragraph */}
      <motion.div className="mb-12 max-w-5xl mx-auto" variants={textVariants}>
        <motion.p
          className="mb-6 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Claremont Bitcoin Club operates under the direction of a President
          who oversees the club's strategic vision, operations, and outreach.
          The President is responsible for setting meeting agendas, appointing
          chairs, and ensuring that CBC provides valuable educational
          opportunities for its members.
        </motion.p>
        <motion.p
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          While the President leads the club's initiatives, CBC functions as an
          open forum where all members are encouraged to participate in
          discussion and contribute ideas. The leadership works to create an
          environment where students can explore Bitcoin's economic, technical,
          and social implications through structured learning and collaboration.
        </motion.p>
      </motion.div>

      {/* President Card */}
      <motion.div className="mb-12 flex justify-center" variants={itemVariants}>
        <motion.div
          className="w-80 bg-[#761515] text-white rounded-lg shadow-lg overflow-hidden"
          variants={cardHoverVariants}
          whileHover="hover"
        >
          <motion.div
            className="w-full h-64 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={president.image}
              alt={president.name}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="p-6">
            <h3 className="text-lg font-medium">{president.name}</h3>
            <p className="text-sm">{president.role}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={president.linkedin}
                className="text-sm text-blue-700 font-medium flex items-center gap-1 mt-2"
              >
                <Linkedin size={16} />
                LinkedIn
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Description for Leadership Committee */}
      <motion.div className="mb-12 max-w-5xl mx-auto" variants={textVariants}>
        <motion.p
          className="text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          In addition to the core leadership, the Leadership Committee consists
          of dedicated members who collaborate on planning events, inviting
          guest speakers, and developing educational content. They also play a
          key role in mentoring new members, ensuring the club's mission to
          educate students on Bitcoin and its role in the global economy is
          upheld. This committee fosters a welcoming and engaging environment
          where members can learn, discuss, and explore Bitcoin's impact.
        </motion.p>
      </motion.div>

      {/* Leadership Team Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {leadershipTeam.map((leader, index) => (
          <motion.div
            key={index}
            className="bg-[#761515] text-white rounded-lg shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="w-full h-[16rem] relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="p-6">
              <h3 className="text-lg font-medium">{leader.name}</h3>
              <p className="text-sm">{leader.role}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={leader.linkedin}
                  className="text-sm text-blue-700 font-medium flex items-center gap-1 mt-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Team;
