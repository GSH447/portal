"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CorporateHero() {
  return (
    <>
    <section className=" relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-[#1e1b4b] overflow-hidden">
      {/* Background Image Asset with subtle overlay */}
      <div className=" absolute inset-0 z-0">
        <Image
          src="/assets/images/about/gsh.png"
          alt="Gracespring Hospitals Facility"
          fill
          priority
          className="object-cover object-center opacity-40 scaling-effect"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#111029] via-[#1e1b4b]/80 to-transparent" /> */}
        <div className="absolute inset-0" />
      </div>

      <div className=" container mx-auto px-6 lg:px-0 relative z-10 w-full text-left">
        <div className=" max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" inline-block text-emerald-400 font-semibold tracking-widest text-xs uppercase mb-3 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20"
          >
            Welcome to Clinical Excellence
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=" text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Gracespring Hospitals
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light"
          >
            A premier multispecialty healthcare facility in Sangotedo, Lekki. 
            Delivering advanced, evidence-based medical care across complex clinical portfolios.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#wings" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-900/20 text-sm">
              Explore Our Wings
            </a>
            <a href="#specialties" className="bg-white/10 hover:bg-white/15 text-white font-medium px-8 py-3.5 rounded-lg backdrop-blur-sm transition-all duration-300 border border-white/10 text-sm">
              Our Specialties
            </a>
          </motion.div>
        </div>
        
      </div>
      
      
    </section>
          {/* Bottom Border */}
      <div className="flex">
        <div className="border-[10px] border-[#5CB338] w-full"></div>
        <div className="border-[10px] border-[#6F92E7] w-full"></div>
        <div className="border-[10px] border-[#4a912d] w-full"></div>
      </div>

    </>
    
  );
}