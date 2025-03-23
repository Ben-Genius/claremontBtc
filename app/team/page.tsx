"use client";
import React from "react";
import { STRINGS } from "../constant/strings";
import Image, { StaticImageData } from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES } from "../assets";
// Dummy Image URL (Replace later with actual images)
const dummyImage =
  "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";

// Type Definition for Leader Data
type Leader = {
  name: string;
  role: string;
  linkedin: string;
  image: StaticImageData;
};

// President Data
const president = {
  name: "Arman Dashti",
  role: "President, Founder",
  linkedin: "https://www.linkedin.com/in/armandashti1/",
};

// Leadership Committee Members Data
const leadershipTeam: Leader[] = [
  {
    name: "Luke Rinaldi ’27 ",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/lukerinaldi/",
    image: IMAGES.luke,
  },
  {
    name: "Jessica Gold",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/jessica-gold-043782213/",
    image: IMAGES.jess,
  },
  {
    name: "Will Baxter",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/willhbaxter/",
    image: IMAGES.will,
  },
  {
    name: "Gabriel Goldstein",
    role: "Chief Executive Officer",
    linkedin: "https://linkedin.com/in/kekelibright",
    image: IMAGES.naa,
  },
  {
    name: "Emre Kocer",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/gabrielbgoldstein/",
    image: IMAGES.emre,
  },
  {
    name: "Averi O",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/averi-o-b46174354/",
    image: IMAGES.mckena,
  },
  {
    name: "Ali McEachern",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/ali-mceachern-65205b339/",
    image: IMAGES.ali,
  },
  {
    name: "Michael Grigorian",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/michael-grigorian/",
    image: IMAGES.michaw,
  },
  {
    name: "Nripesh Agarwal",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/nripeshagarwal/",
    image: IMAGES.nrips,
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
          className="w-[36rem] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 relative"
          variants={cardHoverVariants}
          whileHover="hover"
        >
          <motion.div
            className="w-full h-[33rem] relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={IMAGES.founder}
              alt={president.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <h2 className="text-3xl font-bold text-white">
                Arman Dashti '27
              </h2>
              <p className="text-xl text-white/90">President Founder</p>
              <p className="text-white/80 mt-2">
                Committed to leadership and innovation
              </p>
              <motion.div
                className="mt-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={president.linkedin}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
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
      {/* Leadership Team Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {leadershipTeam.map((leader, index) => (
          <motion.div
            key={index}
            className="bg-[#761515] text-white rounded-lg shadow-lg overflow-hidden relative h-[24rem]"
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/40 to-white/40">
                <h3 className="text-2xl font-semibold">{leader.name}</h3>
                {/* <p className="text-sm text-white">{leader.role}</p> */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2"
                >
                  <Link
                    href={leader.linkedin}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Team;
