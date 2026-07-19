"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

import { programs_services } from "../../SiteMaps/data";

const ProgramsAndServicesSwiper = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    // <section className="border-2 border-[red] sticky top-[3.5rem] relative w-full px-4 sm:px-6 lg:px-12 my-10">

    <section className="relative w-full px-4 sm:px-6 lg:px-12 my-10 ">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >
        
       {/* SWIPER with PICTURE */}
       {/* <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4 sm:px-6 lg:px-12"
      >
        {programs_services.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="rounded-xl p-6 h-full shadow-md"
              style={{ backgroundColor: item.color }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 mb-4"
              />

              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}

      
       <div className="fixed left-0 right-0 bottom-0 z-50 flex justify-center gap-3 px-4 py-2">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={12}
          slidesPerView="auto"
          breakpoints={{
            0: { slidesPerView: 2.2, spaceBetween: 12 },
            480: { slidesPerView: 3.2, spaceBetween: 14 },
            768: { slidesPerView: 4.5, spaceBetween: 18 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
            1440: { slidesPerView: 8, spaceBetween: 24 },
          }}
          className="py-6"
        >
          {programs_services.map((item) => (
            <SwiperSlide
              key={item.id}
              className="!w-auto flex justify-center"
            >
              <Link href={item.link}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  // style={{ "--btn-bg": item.color }}
                  className="
                    flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    rounded-full
                    border
                    border-primary/30
                    text-white
                    text-sm
                    whitespace-nowrap
                    hover:text-primary
                    hover:border-primary
                    transition-all
                    duration-300
                    shadow-sm
                    bg-[var(--btn-bg)]
                    hover:bg-transparent
                    "
                  
                  style={{backgroundColor: item.color}}
                >
                  {item.name}
                  {/* <span
                    className="
                      absolute inset-0
                      bg-white
                      opacity-0
                      hover:opacity-100
                      transition-opacity duration-300
                    "
                  /> */}
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          aria-label="Previous"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeIndex === 0}
          className={`
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            z-20
            hidden
            md:flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            bg-white
            shadow-md
            border
            transition
            ${
              activeIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-primary hover:text-white"
            }
          `}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 4L6 10L12 16" />
          </svg>
        </button>

        <button
          aria-label="Next"
          onClick={() => swiperRef.current?.slideNext()}
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            z-20
            hidden
            md:flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            bg-white
            shadow-md
            border
            hover:bg-primary
            hover:text-white
            transition
          "
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 4L14 10L8 16" />
          </svg>
        </button>
      </div>

      </motion.div>
    </section>
  );
};

export default ProgramsAndServicesSwiper;
