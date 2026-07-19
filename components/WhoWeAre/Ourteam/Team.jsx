"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronDown } from "lucide-react";
import { feedback, team } from "../../SiteMaps/data";
import { motion, AnimatePresence } from "framer-motion";


const white_BG = "#4966AA";

export default function PeopleCard() {

  const [activeIndex, setActiveIndex] = useState(null);

  const members = team.management;

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };



  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: white_BG }}
    >
      {/* 🔼 Top Curve */}
      <svg
        viewBox="0 0 1440 90"
        className="absolute top-0 left-0 w-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#FDF2EB"
          d="M0,0 C360,90 1080,90 1440,0 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Content */}
     <section className="py-2 lg:py-20 px-2 lg:px-6">


       <div className="max-w-8xl mx-auto">

        <div
          className="lg:my-10"
        >

          <h2 className="text-3xl lg:text-5xl font-extrabold p-10 text-left text-white">
            Our Leadership Team
          </h2>

        </div>

         <div className=" space-y-6">
           {members.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.id}
                className="backdrop-blur border-b-2 border-white  shadow-sm overflow-hidden"
              >
                {/* CLICKABLE HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left"
                >
                  <div className=" flex flex-col lg:flex-row gap-4 p-5 items-start lg:items-center">
                    <Image
                      src={item.image || "/assets/icons/avatar-placeholder.svg"}
                      width={1000}
                      height={1000}
                      alt={item.alt || item.title}
                      className="lg:w-[13rem] object-cover rounded-xl"
                      id="team_image"
                    />

                    <div className=" flex-1">
                      <h3 className="text-lg lg:text-[1.8rem] font-bold lg:font-extrabold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-lg text-white font-semibold lg:font-bold mt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="  flex items-center gap-2 lg:text-xl font-extrabold text-white hover:underline self-start lg:self-center">
                      {isOpen ? "Read less" : "Read more"}
                      <ChevronDown
                        size={30}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "70vh" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="border-t border-blue-100"
                    >
                      {/* SCROLL CONTAINER */}
                      <div className="h-full overflow-y-auto">
                        {/* STICKY HEADER (CONTEXT) */}
                        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-blue-100">
                          <div className="hidden items-center gap-4 p-4">
                            <Image
                              src={item.image || "/assets/icons/avatar-placeholder.svg"}
                              width={64}
                              height={64}
                              alt={item.alt || item.title}
                              className="h-16 w-16 object-cover rounded-lg"
                            />
                            <div>
                              <h4 className="font-semibold text-white">
                                {item.title}
                              </h4>
                              <p className="text-xs text-white">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* CONTENT BODY */}
                        <div className="p-6 grid lg:grid-cols-2 gap-10 text-white">
                          {/* About */}
                          <div>
                            <h5 className="font-semibold mb-3 text-white">
                              About
                            </h5>
                            <p className="leading-relaxed">{item.about}</p>
                          </div>

                          {/* Clinical Interests */}
                          <div>
                            <h5 className="font-semibold mb-3 text-white">
                              Clinical Interests
                            </h5>

                            <ul className="list-disc pl-5 space-y-2">
                              {Array.isArray(item.clinical_Interests) &&
                                item.clinical_Interests.map((interest, i) =>
                                  typeof interest === "string" ? (
                                    <li key={i}>{interest}</li>
                                  ) : (
                                    <li key={i}>
                                      <strong>{interest.title}</strong>
                                      <ul className="list-disc pl-5 mt-2 space-y-1">
                                        {interest.items.map((sub, j) => (
                                          <li key={j}>{sub}</li>
                                        ))}
                                      </ul>
                                    </li>
                                  )
                                )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

    </section>

    </div>
  );
};
