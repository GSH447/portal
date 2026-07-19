

"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { links } from "../SiteMaps";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovering, setHovering] = useState(null);
  const subRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY >= 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleMouseEnter(index) {
    if (links[index].subLinks) {
      setHovering(index);
    } else {
      setHovering(null);
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 flex items-center justify-between py-2 min-h-16 h-auto",
        pathname === "/"
          ? isScrolled
            ? "bg-[#2A157c] shadow-md px-4 sm:px-6 xl:px-12 2xl:px-16"
            : "bg-transparent px-4 sm:px-6 xl:px-12 2xl:px-16"
          : "bg-[#2A157c] shadow-md px-4 sm:px-6 xl:px-12 2xl:px-16"
      )}
    >
      {/* BRANDING / LOGO CONTAINER */}
      <div className="flex-shrink-0 z-50">
        <Link href="/">
          <Image
            src="/assets/logo/siteLogo-nobg.png"
            width={180}
            height={60}
            alt="Gracespring Hospitals"
            className="w-32 sm:w-40 xl:w-48 h-auto object-contain"
            priority
          />
        </Link>
      </div>

      {/* DESKTOP & TELEVISION MAIN INNER WRAPPER */}
      <div className="hidden xl:flex flex-1 items-center justify-between ml-8 max-w-[1600px] 3xl:max-w-[2200px]">
        
        {/* DESKTOP NAVIGATION LINKS */}
        <nav
          className="  flex items-center gap-1 2xl:gap-3 position-relative"
          onMouseLeave={() => {
            if (!subRef.current) setHovering(null);
          }}
        >
          {links.map((link, index) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <Link
                href={link.href || "#"}
                className={cn(
                  "flex items-center gap-x-1 transition-all px-3 py-2 rounded-md text-sm 2xl:text-base font-medium whitespace-nowrap text-white/90 hover:text-white hover:bg-white/10",
                  pathname === link.href && "font-bold text-white bg-white/5",
                  hovering === index && "bg-white/10"
                )}
              >
                {link.label}
                {link.subLinks && (
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      hovering === index && "rotate-180"
                    )}
                  />
                )}
              </Link>
            </div>
          ))}

          {/* DESKTOP MEGA DROPDOWN MENU */}
          <div
            ref={subRef}
            className={cn(
              " absolute top-[7rem] left-1/2 -translate-x-1/2 p-6 w-[90vw] max-w-[1400px] bg-[#EDEDF7] shadow-2xl rounded-xl z-50 transition-all duration-200 grid grid-cols-4 gap-8",
              hovering !== null
                ? "opacity-100 pointer-events-auto scale-100"
                : "opacity-0 pointer-events-none scale-95"
            )}
            onMouseLeave={() => setHovering(null)}
          >
            {hovering !== null && links[hovering].navImage && (
              <div className="flex flex-col h-full">
                <div className="relative group overflow-hidden rounded-lg w-full aspect-[4/3]">
                  <Image
                    src={links[hovering].navImage}
                    alt={links[hovering].label}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {links[hovering].caption && (
                  <p className="mt-2 text-xs font-medium text-gray-500 text-left">
                    {links[hovering].caption}
                  </p>
                )}
              </div>
            )}

            {/* Sub-Links Loops */}
            {hovering !== null &&
              links[hovering].subLinks?.map((subLink, idx) => (
                <div key={idx} className="flex flex-col space-y-3">
                  {subLink.header && (
                    <>
                      <Link
                        className="text-sm font-bold tracking-tight text-[#2A157C] hover:text-[#5CB338] transition-colors"
                        href={subLink.href || "#"}
                      >
                        {subLink.header}
                      </Link>

                      {subLink.navImage?.[0]?.src && (
                        <div className="relative w-full h-24 rounded-md overflow-hidden bg-gray-100">
                          <Image
                            src={subLink.navImage[0].src}
                            alt={subLink.header}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      {subLink.subMenu && (
                        <nav className="flex flex-col space-y-1.5">
                          {subLink.subMenu.map((menuItem) => (
                            <Link
                              key={menuItem.label}
                              href={menuItem.href}
                              className="text-xs text-gray-600 hover:text-[#5CB338] transition-colors font-medium"
                            >
                              {menuItem.label}
                            </Link>
                          ))}
                        </nav>
                      )}
                    </>
                  )}
                </div>
              ))}
          </div>
        </nav>

        {/* TOP LEVEL ACTION BUTTONS CONTAINER (Desktop & Ultra-wide Screen layout) */}
        <div className=" flex flex-row items-center gap-2 2xl:gap-4 pl-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#5CB338] hover:bg-[#4a912d] text-white font-bold text-xs 2xl:text-sm py-2 px-4 2xl:px-5 rounded-full shadow-md transition-colors whitespace-nowrap"
          >
            <Link href="/book-an-appointment">Book an Appointment</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#6F92E7] hover:bg-[#5a7bc9] text-white font-bold text-xs 2xl:text-sm py-2 px-4 2xl:px-5 rounded-full shadow-md transition-colors whitespace-nowrap"
          >
            <Link href="/patient-portal">Patient Portal</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white hover:bg-gray-100 text-[#5CB338] font-extrabold text-xs 2xl:text-sm py-2 px-4 2xl:px-5 rounded-full shadow-md transition-colors whitespace-nowrap"
          >
            <Link href="https://gracespringhealthfoundation.com/">Gracespring Health Foundation</Link>
          </motion.button>
        </div>
      </div>

      {/* MOBILE & TABLET / MEDIUM LAPTOP TRIGGER BOX */}
      <div className="flex xl:hidden items-center gap-x-4">
        <MobileNav />
      </div>
    </header>
  );
}
