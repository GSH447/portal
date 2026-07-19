"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";
// import Image from "next/image";

// ... inside your component map or layout:

const blobShapes = [
  "60% 40% 55% 45% / 55% 60% 40% 45%",
  "65% 35% 60% 40% / 60% 65% 35% 40%",
  "70% 30% 50% 50% / 40% 60% 40% 60%",
  "55% 45% 65% 35% / 50% 55% 45% 50%",
  "62% 38% 58% 42% / 48% 62% 38% 52%",
  "68% 32% 57% 43% / 55% 45% 55% 45%",
];

const Product_Services = ({ product_services = [] }) => {
  return (

    
    <div id="services-container">
      <div className="lg:grid lg:grid-cols-3 gap-10" id="services-card">
        {product_services.map((item, index) => {
          const shape = blobShapes[index % blobShapes.length];

          return (

            
            
            
            
              <Link
                href={item.url}
                key={item.id || index}
              >

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ backgroundColor: item.bg }} 
                  // 3D Card Hover: Lifts card up, generates a crisp deep shadow underneath
                  whileHover={{ 
                    y: -6,
                    boxShadow: "0px 8px 0px rgba(0, 0, 0, 0.15)"
                  }}
                  whileTap={{ 
                    y: 2,
                    boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.2)"
                  }}
                  className="hover:bg-[#FFC000] rounded-xl px-5 py-8 flex items-center justify-between h-[20vh] cursor-pointer transition-colors duration-200 erd-cta"
                >

                  {/* Left: Text Container */}
                  <div className="inline-block rounded-full w-[50%]">
                    <div>
                      <span className="text-[20px] text-black font-extrabold transition-colors duration-300">
                        {item.title || "Learn More"}
                      </span>
                    </div>
                  </div>

                  {/* Right: Icon Interactive Frame */}
                  <div className="inline-block px-1 py-1 transition-colors duration-300">

                    {/* The 3D Icon Button Container */}
                    <motion.div
                      className="h-[60px] w-[60px] overflow-hidden flex items-center justify-center relative"
                      style={{ 
                        borderRadius: shape,
                        // Default shadow gives the icon baseline 3D depth before hover
                        boxShadow: "0px 4px 0px rgba(255, 247, 247, 0.2)",
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                        boxShadow: "0px 9px 0px rgba(0, 0, 0, 0.25)",
                      }}
                      whileTap={{
                        y: 3,
                        boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.2)",
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
                        className="w-full h-full flex items-center justify-center"
                      >
                        <Image
                          src={item.image}
                          width={800}
                          height={800}
                          alt={item.alt || item.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </motion.div>
                    </motion.div>

                  </div>
                  
                </motion.div>

              </Link>


          );
        })}
      </div>
    </div>
  );
};

export default Product_Services;