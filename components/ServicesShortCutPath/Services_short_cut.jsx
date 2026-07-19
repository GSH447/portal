"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const Services_short_cut = ({ services_short_cut = [] }) => {
  // State to manage list expansion
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Define initial visible cutoff limit
  const VISIBLE_LIMIT = 14;
  
  // Filter items based on expansion state
  const displayedItems = isExpanded 
    ? services_short_cut 
    : services_short_cut.slice(0, VISIBLE_LIMIT);

    return (
  <div className="w-full flex flex-col items-center gap-8">
    
    {/* 1. Grid Container */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
      <AnimatePresence>
        {displayedItems.map((item, index) => {
          return (
            <Link href={item.url} key={item.id || index} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ 
                  y: -6,
                  boxShadow: "0px 8px 0px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ 
                  y: 2,
                  boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.2)"
                }}
                className="lg:border-2 lg:border-primary rounded-xl h-48 flex flex-col items-center justify-between cursor-pointer transition-colors duration-200 erd-cta mb-10 bg-white group "
              >
                {/* Top: Icon Interactive Frame */}
                <div className=" px-1 py-1 transition-colors duration-300 w-fit mx-auto mt-1">
                  <motion.div
                    className="overflow-hidden flex items-center justify-center relative"
                    style={{ 
                      boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.1)",
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      boxShadow: "0px 9px 0px rgba(0, 0, 0, 0.15)",
                    }}
                    whileTap={{
                      y: 3,
                      boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className=" w-full h-full flex items-center justify-center"
                    >
                      <Image
                        src={item.image}
                        width={1000}
                        height={1000}
                        alt={item.alt || item.title || "service icon"}
                        className="w-full h-full object-cover object-top"
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom: Text Container */}
                <div className="flex flex-col items-center text-center w-full grow justify-end mt-2">
                  <span className="text-primary font-extrabold text-sm line-clamp-2 px-1 transition-colors duration-300">
                    {item.title || "Learn More"}
                  </span>
                  
                  {/* Subtle Context Link Callout */}
                  <span className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider transition-colors duration-200 group-hover:text-primary">
                    Learn & Read More →
                  </span>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </AnimatePresence>
    </div>

    {/* 2. Toggle Button Container */}
    {services_short_cut.length > VISIBLE_LIMIT && (
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ y: -4, boxShadow: "0px 6px 0px #000" }}
        whileTap={{ y: 2, boxShadow: "0px 1px 0px #000" }}
        className="mt-4 px-8 py-3 bg-primary text-white font-bold uppercase tracking-wider rounded-xl border-2 border-white relative transition-all duration-150 shadow-[0px_4px_0px_#000]"
      >
        {isExpanded ? "Read Less" : "Read and Learn More"}
      </motion.button>
    )}

  </div>
);
  // return (
  //   <div className="w-full flex flex-col items-center gap-8">
      
  //     {/* 1. Grid Container */}
  //     <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  //       <AnimatePresence>
  //         {displayedItems.map((item, index) => {

  //           return (
  //             <Link href={item.url} key={item.id || index} className="block">
  //               <motion.div
  //                 initial={{ opacity: 0, y: 30 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 exit={{ opacity: 0, scale: 0.95 }}
  //                 viewport={{ once: true }}
  //                 transition={{ duration: 0.4, ease: "easeOut" }}
  //                 whileHover={{ 
  //                   y: -6,
  //                   boxShadow: "0px 8px 0px rgba(0, 0, 0, 0.15)"
  //                 }}
  //                 whileTap={{ 
  //                   y: 2,
  //                   boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.2)"
  //                 }}
  //                 className="border-2 border-primary rounded-xl h-40 grid items-center justify-center cursor-pointer transition-colors duration-200 erd-cta p-3 bg-white"
  //               >
  //                 {/* Top: Icon Interactive Frame */}
  //                 <div className=" px-1 py-1 transition-colors duration-300 w-fit mx-auto">
  //                   <motion.div
  //                     className=" h-[60px] w-[60px] overflow-hidden flex items-center justify-center relative"
  //                     style={{ 
  //                       boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.1)",
  //                     }}
  //                     whileHover={{
  //                       y: -5,
  //                       scale: 1.05,
  //                       boxShadow: "0px 9px 0px rgba(0, 0, 0, 0.15)",
  //                     }}
  //                     whileTap={{
  //                       y: 3,
  //                       boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)",
  //                     }}
  //                     transition={{
  //                       type: "spring",
  //                       stiffness: 400,
  //                       damping: 15
  //                     }}
  //                   >
  //                     <motion.div
  //                       whileHover={{ scale: 1.15 }}
  //                       transition={{
  //                         duration: 0.4,
  //                         ease: [0.25, 0.46, 0.45, 0.94],
  //                       }}
  //                       className=" w-full h-full flex items-center justify-center"
  //                     >
  //                       <Image
  //                         src={item.image}
  //                         width={150}
  //                         height={150}
  //                         alt={item.alt || item.title || "service icon"}
  //                         className=" w-full h-full object-cover object-top"
  //                       />
  //                     </motion.div>
  //                   </motion.div>
  //                 </div>

  //                 {/* Bottom: Text Container */}
  //                 <div className=" rounded-full mt-2">
  //                   <div>
  //                     <span className=" flex justify-center text-center text-primary font-extrabold text-sm transition-colors duration-300">
  //                       {item.title || "Learn More"}
  //                     </span>
  //                   </div>
  //                 </div>
  //               </motion.div>
  //             </Link>
  //           );
  //         })}
  //       </AnimatePresence>
  //     </div>

  //     {/* 2. Toggle Button Container */}
  //     {services_short_cut.length > VISIBLE_LIMIT && (
  //       <motion.button
  //         onClick={() => setIsExpanded(!isExpanded)}
  //         whileHover={{ y: -4, boxShadow: "0px 6px 0px #000" }}
  //         whileTap={{ y: 2, boxShadow: "0px 1px 0px #000" }}
  //         className="mt-4 px-8 py-3 bg-primary text-white font- uppercase tracking-wider rounded-xl border-2 border-white relative transition-all duration-150 shadow-[0px_4px_0px_#000]"
  //       >
  //         {isExpanded ? "Read Less" : "Read More"}
  //       </motion.button>
  //     )}

  //   </div>
  // );
};

export default Services_short_cut;







