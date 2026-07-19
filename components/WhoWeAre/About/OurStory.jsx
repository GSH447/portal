"use client";

import React from "react";
import Image from "next/image";
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


export default function OurStory() {
  return (
    <section className=" py-20 lg:py-28 bg-white" id="story">
      <div className=" container mx-auto px-6 lg:px-1">
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
               
                <AnimatedText
                  text=" Our Core Philosophy"
                />
              </h4>


              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                <AnimatedText
                  text="“Excellence in Care, Our Shared Path”"
                />
                {/* “Excellence in Care, Our Shared Path” */}
              </h2>

   

              
            </div>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
              Health is wealth, and access to proper, affordable, and timely healthcare is a fundamental aspiration of every society. At Gracespring Hospitals Limited, excellence isn’t just a static baseline metrics; it is a shared journey that we commit to with every patient encounter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <h5 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-600"></span> Clinical Standards
                </h5>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Engineered to meet contemporary global healthcare standards, driving optimized patient metrics and outcomes.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <h5 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Active Inclusion
                </h5>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Patients are active participants in clinical pathway tracking and shared decision-making processes.
                </p>
              </div>
            </div>

            <p className="text-slate-500 text-sm italic border-l-2 border-indigo-600 pl-4 bg-slate-50 py-3 rounded-r-lg">
              “Excellence in care means more than treatment — it means walking beside you. Together, we share the path to healing, hope, and a healthier tomorrow.”
            </p>
          </div>

          {/* Right Image Layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/about/surgeon.jpg"
                alt="Gracespring Care Infrastructure"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-indigo-900 p-6 rounded-xl text-white max-w-[240px] shadow-xl hidden md:block">
              <p className="text-2xl font-black text-emerald-400">100%</p>
              <p className="text-xs uppercase text-slate-300 tracking-wider font-semibold mt-1">Patient Centered Ecosystem</p>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}