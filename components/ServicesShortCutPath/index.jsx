"use client";
import Services_short_cut from "./Services_short_cut";
import ServiceShortCutDesktop from "./ServiceDesktopView";
import { services_short_cut } from "../SiteMaps/data";
import { motion } from "framer-motion";


const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: 'blur(8px)',
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.04,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const AnimatedText = ({
  text,
  className = '',
}) => {
  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function ServicesShortCutPage() {
  return (
    <div className="relative w-full min-h-screen pt-20">
      
      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full  pb-10">
        
        <div className="flex flex-col items-center w-full">


      {/* ─── ANIMATED BACKGROUND BLOBS ──────────────────────────────── */}
      {/* Soft Blue/Slate Glow */}
      <motion.div 
        className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft Mint/Emerald Glow */}
      <motion.div 
        className="absolute -bottom-20 right-1/4 w-[600px] h-[600px] bg-emerald-50/60 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1, // Offset to prevent synchronized movement
        }}
      />
      {/* ────────────────────────────────────────────────────────────── */}

      {/* CONTENT INNER CONTAINER */}
      <div className="flex flex-col items-center w-full gap-8 mb-12 max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="mt-2">
          {/* MAIN TITLE */}
          <AnimatedText
            text="Specialist Medical Care"
            className="justify-center text-3xl lg:text-6xl font-bold text-center text-slate-800"
          />
        </div>

        {/* TAGS */}
        <div className="gap-6 flex flex-wrap justify-center text-sm lg:text-base max-w-3xl mx-auto tracking-wider text-slate-500">
          <AnimatedText text="ADULTS" className="font-bold border-b-2 border-transparent hover:border-emerald-500 transition-colors cursor-default pb-1" />
          <AnimatedText text="CHILDREN" className="font-bold border-b-2 border-transparent hover:border-emerald-500 transition-colors cursor-default pb-1" />
          <AnimatedText text="FAMILY" className="font-bold border-b-2 border-transparent hover:border-emerald-500 transition-colors cursor-default pb-1" />
        </div>

        {/* Description */}
        <motion.p
          className="text-sm lg:text-lg text-center font-medium lg:mt-4 max-w-3xl text-slate-600 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our specialist care services are designed to provide expert medical
          attention and personalized treatment plans for patients with complex
          health conditions. Our team of highly skilled specialists is dedicated
          to delivering comprehensive care, utilizing the latest medical
          advancements and technologies to ensure the best possible outcomes for
          our patients.
        </motion.p>
      </div>

      {/* Bottom Border Accent matching Gracespring Branding */}
      <div className="flex w-full absolute bottom-0 left-0 right-0 z-20">
        <div className="h-2.5 bg-[#5CB338] w-full"></div>
        <div className="h-2.5 bg-[#6F92E7] w-full"></div>
        <div className="h-2.5 bg-[#4a912d] w-full"></div>
      </div>

         {/* Mobile View Structure */}
        <div className="block lg:hidden w-full">
          <Services_short_cut services_short_cut={services_short_cut} />
        </div>

        {/* Desktop View Carousel Structure */}
        <div className="hidden lg:block w-full">
          <ServiceShortCutDesktop servicesData={services_short_cut} />
        </div>
        
          {/* 2. Product Services Grid Component (Center) */}
          {/* <div className="block lg:hidden w-full flex justify-center">
            <Services_short_cut services_short_cut={services_short_cut} />
          </div> */}


        </div>

      </div>

      {/* Bottom Border */}
      <div className="flex">
        <div className="border-[10px] border-[#5CB338] w-full"></div>
        <div className="border-[10px] border-[#6F92E7] w-full"></div>
        <div className="border-[10px] border-[#4a912d] w-full"></div>
      </div>

    </div>
  );
}