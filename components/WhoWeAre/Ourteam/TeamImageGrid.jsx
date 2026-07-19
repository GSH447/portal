"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Award, Activity } from "lucide-react";
import { team } from "../../SiteMaps/data"; // References your real dataset map
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

export default function TeamImageGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  
  // Gracefully fall back to an empty array if dataset parameters are altered
  const members = team?.management || [];

  return (
    <section className="py-10 lg:py-20 text-white relative overflow-hidden">

    <div className="bg-[#5CB338] mx-auto px-6 lg:px-16 pt-6 pt-20">
        
        {/* Section Heading Context */}
        <div className="max-w-2xl py-16 space-y-3">
          <AnimatedText text="Expertise Behind Your Care" className="font-bold uppercase tracking-widest" />
          <AnimatedText text="The Management Team" className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1e1b4b]" />
          {/* <p className="text-slate-400 text-sm md:text-base">
            Our multi-specialty consultants bring together decades of combined experience across complex cardiac, vascular, and internal medical specialties.
          </p> */}
        </div>

      </div>

      {/* Structural Wave/Curve Top Divide */}
      <div className="absolute top-0 inset-x-0 h-12 bg-slate-50 clip-path-curve" style={{ borderRadius: '0 0 100% 100% / 0 0 100% 100%' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-6">
        

        {/* Responsive Flex/Grid Card Cluster */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {members.map((item, index) => (

            <div 
            key={item.id || index} 
            className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-slate-900/40 shadow-xl border-4 border-white ring-1 ring-slate-800/60 transition-all duration-300 ease-out hover:border-[#5CB338] hover:-translate-y-1 transform-gpu backface-hidden"
            >
            {/* The Unified Image Handling Box */}
            <div className="relative h-[360px] w-full overflow-hidden bg-slate-950 shrink-0">
                <Image
                src={item.image || "/assets/icons/avatar-placeholder.svg"}
                alt={item.alt || item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Smooth Gradient overlay to transition cleanly into the lower container */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>

            {/* Your Preferred Stacked Content Profile Card Area */}
            <div className="p-6 relative bg-primary backdrop-blur-md border-t border-slate-800/80 shadow-2xl transition-colors duration-300 hover:bg-[#4966AA] flex flex-col flex-grow justify-between">
                <div className="flex justify-between items-start gap-3 w-full">
                <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug break-words">
                    {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-300 group-hover:text-slate-100 mt-1.5 transition-colors duration-200 line-clamp-2 md:line-clamp-none">
                    {item.description}
                    </p>
                </div>
                
                <button
                    onClick={() => {
                    setSelectedMember(item);
                    setModalOpen(true);
                    }}
                    className="h-9 w-9 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg text-slate-950 transition-all duration-300 hover:bg-[#5CB338] hover:text-white hover:rotate-45 focus:outline-none focus:ring-2 focus:ring-[#5CB338]"
                    aria-label={`Read professional biography of ${item.title}`}
                >
                    <ArrowUpRight size={18} />
                </button>
                </div>
            </div>
            </div>

            // <div 
            // key={item.id || index} 
            // className="group relative flex flex-col h-[420px] w-full overflow-hidden rounded-2xl shadow-xl border-4 border-white ring-1 ring-slate-200/20 transition-all duration-300 ease-out hover:border-[#5CB338] hover:-translate-y-1.5 transform-gpu backface-hidden"
            // >
            // {/* The Unified Image Container */}
            // <div className="absolute inset-0 w-full h-full bg-slate-950">
            //     <Image
            //     src={item.image || "/assets/icons/avatar-placeholder.svg"}
            //     alt={item.alt || item.title}
            //     fill
            //     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            //     priority={index < 3}
            //     className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            //     />
                
            //     {/* Gradual darkness mask to blend background cleanly into the text container */}
            //     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
            // </div>

            // {/* Unified Profile Info Overlay (Anchored to Bottom) */}
            // <div className="mt-auto relative z-10 w-full p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-12 flex flex-col justify-end">
            //     <div className="flex justify-between items-end gap-3 w-full">
                
            //     {/* Bio Text Frame */}
            //     <div className="flex-grow min-w-0">
            //         <h3 className="text-lg font-bold text-white tracking-tight leading-snug break-words drop-shadow-md">
            //         {item.title}
            //         </h3>
            //         <p className="text-xs font-medium text-slate-300 group-hover:text-emerald-300 mt-1 transition-colors duration-300 line-clamp-2 drop-shadow-sm">
            //         {item.description}
            //         </p>
            //     </div>
                
            //     {/* Action Trigger Button */}
            //     <button
            //         onClick={() => {
            //         setSelectedMember(item);
            //         setModalOpen(true);
            //         }}
            //         className="h-10 w-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-xl text-slate-950 transition-all duration-300 hover:bg-[#5CB338] hover:text-white hover:rotate-45 focus:outline-none focus:ring-2 focus:ring-[#5CB338]"
            //         aria-label={`Read professional biography of ${item.title}`}
            //     >
            //         <ArrowUpRight size={20} />
            //     </button>

            //     </div>
            // </div>
            // </div>

            // <div 
            // key={item.id || index} 
            // className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-slate-900/40 shadow-xl border-4 border-white ring-1 ring-slate-800/60 transition-all duration-300 ease-out hover:border-[#5CB338] hover:-translate-y-1 transform-gpu backface-hidden"
            // >
            //     {/* Image Box */}
            //     <div className="relative h-[360px] w-full overflow-hidden bg-white shrink-0">
            //         <Image
            //         src={item.image || "/assets/icons/avatar-placeholder.svg"}
            //         alt={item.alt || item.title}
            //         fill
            //         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            //         priority={index < 3}
            //         className="object-contain object-top transition-transform duration-500 ease-out group-hover:scale-103"
            //         />
            //         {/* Smooth Gradient overlay */}
            //         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 pointer-events-none" />
            //     </div>

            //     {/* Content Profile Card Area */}
            //     <div className="p-6 relative bg-primary backdrop-blur-md border-t border-slate-800/80 shadow-2xl transition-colors duration-300 hover:bg-[#4966AA] flex flex-col flex-grow justify-between">
            //         <div className="flex justify-between items-start gap-3 w-full">
            //         <div className="flex-grow min-w-0"> {/* min-w-0 forces proper text clamping and layout container stability */}
            //             <h3 className="text-lg font-bold text-white tracking-tight leading-snug break-words">
            //             {item.title}
            //             </h3>
            //             <p className="text-xs font-medium text-slate-400 group-hover:text-slate-100 mt-1.5 transition-colors duration-200 line-clamp-2 md:line-clamp-none">
            //             {item.description}
            //             </p>
            //         </div>
                    
            //         <button
            //             onClick={() => {
            //             setSelectedMember(item);
            //             setModalOpen(true);
            //             }}
            //             className="h-9 w-9 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg text-slate-950 transition-all duration-300 hover:bg-[#5CB338] hover:text-white hover:rotate-45 focus:outline-none focus:ring-2 focus:ring-[#5CB338] focus:ring-offset-2 focus:ring-offset-primary"
            //             aria-label={`Read professional biography of ${item.title}`}
            //         >
            //             <ArrowUpRight size={18} className="transition-transform" />
            //         </button>
            //         </div>
            //     </div>
            // </div>

            // <div 
            //   key={item.id || index} 
            //   className="border-[10px] border-[white] group relative overflow-hidden bg-slate-900/40 border border-slate-800 shadow-xl transition-all duration-300 hover:border-[#5CB338] hover:-translate-y-1"
            // >
            //   {/* Image Box */}
            //   <div className="relative h-[360px] w-full overflow-hidden bg-slate-950">
            //     <Image
            //       src={item.image || "/assets/icons/avatar-placeholder.svg"}
            //       alt={item.alt || item.title}
            //       fill
            //       priority={index < 3}
            //       className="object-contain object-top transition-transform duration-500 group-hover:scale-105"
            //     />
            //     {/* Smooth Gradient overlay */}
            //     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            //   </div>

            //   {/* Floating Content Profile Card */}
            //   <div className="p-6 relative bg-primary backdrop-blur-md border border-slate-800/80 shadow-2xl transition-colors duration-300 hover:bg-[#4966AA]">
            //     <div className="flex justify-between items-start gap-2">
            //       <div>
            //         <h3 className="text-lg font-bold text-white tracking-tight leading-tight">{item.title}</h3>
            //         <p className="text-xs font-medium text-slate-400 group-hover:text-slate-100 mt-1 transition-colors">{item.description}</p>
            //       </div>
                  
            //       <button
            //         onClick={() => {
            //           setSelectedMember(item);
            //           setModalOpen(true);
            //         }}
            //         className="h-9 w-9 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg text-slate-950 transition-transform duration-300 hover:rotate-45"
            //         aria-label={`Read professional biography of ${item.title}`}
            //       >
            //         <ArrowUpRight size={18} />
            //       </button>
            //     </div>
            //   </div>
            // </div>
          ))}
        </motion.div>
      </div>

      {/* Corporate Bios Modal Module */}
      <AnimatePresence>
        {modalOpen && selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Overlay backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[85vh] relative z-10 flex flex-col md:flex-row text-slate-900"
            >
              {/* Close Button Trigger */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 z-30 h-8 w-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Left Column: Context Image (Hidden on small viewports) */}
              <div className="hidden md:block md:w-2/5 relative min-h-[400px] bg-slate-900">
                <Image
                  src={selectedMember.image || "/assets/icons/avatar-placeholder.svg"}
                  alt={selectedMember.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>

              {/* Right Column: Information Sheet */}
              <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto max-h-[85vh] space-y-6">
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{selectedMember.description}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mt-0.5">{selectedMember.title}</h3>
                </div>

                <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed text-justify border-t border-slate-100 pt-4">
                  <p className="whitespace-pre-wrap">{selectedMember.about}</p>
                </div>

                {/* Render Clinical Portfolio parameters explicitly if contained in data set */}
                {selectedMember.clinical_Interests && (
                  <div className="border-t border-slate-100 pt-4 space-y-3">
                    <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                      <Activity size={16} className="text-indigo-600" /> Clinical Focus & Interests
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedMember.clinical_Interests.map((interest, i) => (
                        <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{typeof interest === "string" ? interest : interest.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}