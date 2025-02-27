"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/btcLogo.png";
import { STRINGS } from "../constant/strings";
import { NavItem } from "../model/model";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: STRINGS.about, href: "/" },
    { label: STRINGS.team, href: "/team" },
    { label: STRINGS.resources, href: "/resources" },
    { label: STRINGS.contact, href: "/contact" },
  ];

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  };

  const slideDown = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <motion.header
      {...fadeIn}
      className="bg-white w-full py-3 px-4 md:px-8 shadow-sm relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-12 h-12 md:w-16 md:h-16 relative"
          >
            <Image
              src={logo}
              alt="Bitcoin Club Logo"
              fill
              className="object-contain animate-spin-slow"
              priority
            />
          </motion.div>
          <div className="ml-3 md:ml-4">
            <motion.h1
              {...slideDown}
              className="text-[#761515] uppercase text-xl md:text-3xl lg:text-4xl font-medium"
            >
              {STRINGS.webName}
            </motion.h1>
            <motion.h3
              {...slideDown}
              className="font-normal uppercase text-base md:text-xl lg:text-[27px] md:pl-8 lg:pl-16"
            >
              {STRINGS.type}
            </motion.h3>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <motion.ul {...fadeIn} className="flex items-center gap-6 lg:gap-10">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`font-semibold tracking-tight capitalize text-sm lg:text-base ${
                    index !== navItems.length - 1
                      ? "border-r-2 border-black pr-4 lg:pr-7"
                      : ""
                  } ${
                    pathname === item.href
                      ? "text-[#F96F6F] font-bold"
                      : "hover:text-[#F96F6F]"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50"
            >
              <motion.ul
                className="flex flex-col py-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        },
                      },
                      closed: {
                        opacity: 0,
                        y: 20,
                        transition: { duration: 0.2 },
                      },
                    }}
                    className="border-b border-gray-100 last:border-none capitalize"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-6 py-3 ${
                        pathname === item.href
                          ? "text-[#F96F6F] font-bold"
                          : "hover:text-[#F96F6F]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
