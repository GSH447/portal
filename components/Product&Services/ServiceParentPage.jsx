"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import styles safely
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sourcing your universal array structure cleanly
import { links } from "../SiteMaps";

const blobShapes = [
  "60% 40% 55% 45% / 55% 60% 40% 45%",
  "65% 35% 60% 40% / 60% 65% 35% 40%",
  "70% 30% 50% 50% / 40% 60% 40% 60%",
  "55% 45% 65% 35% / 50% 55% 45% 50%",
  "62% 38% 58% 42% / 48% 62% 38% 52%",
  "68% 32% 57% 43% / 55% 45% 55% 45%"
];

// Fallback card background tint matrix to rotate automatically
const defaultCardBackgrounds = ["#F4F7FE", "#FFF9F5", "#F5FDF9", "#FBF7FF"];

export default function ServiceParentPage({ targetHref }) {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Locate matching subLinks dynamically inside your unified navigation tree
  let activeCategory = null;
  let activeParentLabel = "";
  let activeCaption = "";

  for (const group of links) {
    const match = group.subLinks?.find((sub) => sub.href === targetHref);
    if (match) {
      activeCategory = match;
      activeParentLabel = group.label;
      activeCaption = group.caption !== "#" ? group.caption : "#healthcare #excellence";
      break;
    }
  }

  // Graceful visual boundary check if route key typo occurs
  if (!activeCategory) {
    return (
      <div className="p-20 text-center font-mono text-sm text-red-500 bg-gray-50 border rounded-xl m-10">
        Configuration Segment for "{targetHref}" not found inside links data file.
      </div>
    );
  }

  const itemsToRender = activeCategory.subMenu || [];
  const totalSlides = Math.ceil(itemsToRender.length / 3);
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === totalSlides - 1;

  // Chunk array dynamically into rows of 3
  const chunkedSubMenu = [];
  for (let i = 0; i < itemsToRender.length; i += 3) {
    chunkedSubMenu.push(itemsToRender.slice(i, i + 3));
  }

  return (
    <div className="w-full bg-[#FDF2EB]/20 min-h-screen">
      
      {/* 1. HERO INFRASTRUCTURE WITH SMART CAPTION FALLBACKS */}
      <section className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center bg-[#1e1b4b] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/about/gsh.png" // Shared primary fallback asset
            alt={activeCategory.header}
            fill
            priority
            className="object-cover object-center opacity-30 transition-transform duration-1000 scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111029] via-[#1e1b4b]/90 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-emerald-400 font-bold tracking-widest text-xs uppercase mb-4 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20"
            >
              {activeParentLabel} Division
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
            >
              {activeCategory.header}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-sm md:text-base text-slate-400 font-mono tracking-normal max-w-2xl"
            >
              {activeCaption}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Brand Tri-Color Accent Line */}
      <div className="flex w-full h-[8px]">
        <div className="bg-[#5CB338] w-full" />
        <div className="bg-[#6F92E7] w-full" />
        <div className="bg-[#4a912d] w-full" />
      </div>

      {/* 2. THREE-IN-A-ROW MULTI-SLIDESHOW MATRIX */}
      <section className="py-16 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 w-full">
          <div>
            <h2 className="text-3xl font-black text-[#1e1b4b] tracking-tight">
              Explore Available Units
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Comprehensive medical portfolios deployed across our custom framework wings.
            </p>
          </div>

          {/* Navigation Controls */}
          {totalSlides > 1 && (
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isFirstSlide}
                className={`shadow-md border border-gray-200 bg-white w-10 h-10 p-2 flex items-center justify-center rounded-full transition-all ${
                  isFirstSlide ? "opacity-30 cursor-not-allowed" : "hover:border-[#2A157c] active:scale-95"
                }`}
              >
                <Image src="/assets/icons/back.png" width={16} height={16} alt="Prev" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isLastSlide}
                className={`shadow-md border border-gray-200 bg-white w-10 h-10 p-2 flex items-center justify-center rounded-full transition-all ${
                  isLastSlide ? "opacity-30 cursor-not-allowed" : "hover:border-[#2A157c] active:scale-95"
                }`}
              >
                <Image src="/assets/icons/next.png" width={16} height={16} alt="Next" />
              </button>
            </div>
          )}
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={totalSlides > 1 ? { delay: 6500, disableOnInteraction: true } : false}
          modules={[Navigation, Autoplay, Pagination]}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          pagination={{ clickable: true, el: paginationRef.current }}
        >
          {chunkedSubMenu.map((slideChunk, slideIndex) => (
            <SwiperSlide key={slideIndex} className="pb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {slideChunk.map((item, index) => {
                  const globalIdx = slideIndex * 3 + index;
                  const shape = blobShapes[globalIdx % blobShapes.length];
                  const fallbackBg = defaultCardBackgrounds[globalIdx % defaultCardBackgrounds.length];

                  return (
                    <motion.div
                      key={item.href + index}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="w-full p-6 rounded-2xl flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                      style={{ backgroundColor: fallbackBg }}
                    >
                      {/* Image Module Container */}
                      <div className="flex justify-center mb-6">
                        <div
                          className="w-56 h-48 overflow-hidden flex items-center justify-center bg-white/70 shadow-inner rounded-xl"
                          style={{ borderRadius: shape }}
                        >
                          <span className="text-2xl font-black text-[#2A157c]/20 select-none">
                            GSH
                          </span>
                        </div>
                      </div>

                      {/* Content Core Module */}
                      <div className="text-left flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-extrabold text-[#1e1b4b] mb-3 leading-snug">
                            {item.label}
                          </h3>
                        </div>

                        <div className="text-left mt-4">
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 bg-white hover:bg-[#FFC000] border border-gray-100 px-5 py-2 rounded-full text-[11px] text-black font-black uppercase tracking-wider transition-all duration-200 active:translate-y-0.5 shadow-sm"
                          >
                            Explore Unit <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {totalSlides > 1 && (
          <div className="flex justify-center mt-2">
            <div ref={paginationRef} className="swiper-pagination !static flex gap-1.5" />
          </div>
        )}
      </section>
    </div>
  );
}