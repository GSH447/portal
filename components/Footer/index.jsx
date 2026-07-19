import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "../SiteMaps";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <footer className="footer relative w-full px-5 text-white pt-16 pb-6 px-6">
      <div className=" mx-auto">
        {/* Main Footer Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & Mission */}
          <AnimatedDiv className=" space-y-6">
            <Link href="/">
            <Image 
                src={"/assets/logo/siteLogo.png"} 
                width={1000} 
                height={1000}
                alt="Gracespring Hospitals" 
                className="gshf-Logo footer-gsfh-Logo"
                priority
                id="logo"
            />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Where every second counts. And every life matters.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {FooterLinks.social.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5CB338] transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={social.iconPath}
                    width={16}
                    height={16}
                    alt="Social"
                    className="brightness-0 invert"
                  />
                </Link>
              ))}
            </div>
          </AnimatedDiv>

          {/* Column 2: Quick Links */}
          <Section title="Our Hospital" links={FooterLinks.company} />

          {/* Column 3: Specialties/Services */}
          <Section title="Services" links={FooterLinks.link1} />

          {/* Column 4: Contact & Location */}
          <AnimatedDiv>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              {FooterLinks.contact.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-white/70">
                   <Image 
                        src={item.iconPath || ""} 
                        width={16} 
                        height={16} 
                        alt="icon" 
                        className="mt-1 brightness-0 invert" 
                    />
                  <Link href={item.url} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedDiv>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p className="mx-auto py-10 lg:py-0">© {currentYear} Gracespring Hospitals. All Rights Reserved.</p>
          {/* <div className="flex gap-6">
            <Link href="/terms" className="hover:text-[#5CB338]">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-[#5CB338]">Privacy Policy</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

const Section = ({ title, links }) => (
  <AnimatedDiv>
    <h3 className="text-lg font-bold mb-6 text-white">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <Link 
            href={link.url} 
            className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </AnimatedDiv>
);

const AnimatedDiv = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Footer;


