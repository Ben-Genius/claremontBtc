"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/btcLogo.png";
import { STRINGS } from "../constant/strings";
import { NavItem } from "../model/model";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.header {...fadeIn} className="bg-white w-full py-3 pr-8 shadow-sm">
      <div className="max-w-full mx-auto flex flex-wrap items-center justify-between">
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

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden w-full mt-4"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-200 pb-2"
                >
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "text-[#F96F6F]" : ""}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
