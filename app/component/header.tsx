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

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-50 p-2"
        >
          <motion.div
            initial={false}
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>

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

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
            >
              <ul className="flex flex-col py-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-100 last:border-none"
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
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
