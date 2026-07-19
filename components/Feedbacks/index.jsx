"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { feedback } from "../SiteMaps/data";
import { motion } from "framer-motion";
import Link from "next/link";

const blobShapes = [
  "74% 26% 63% 37% / 45% 36% 64% 55% ",
];




const PRIMARY_BG = "#4966AA";

const Feedback = () => {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = feedback.length;
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === totalSlides - 1;

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  useEffect(() => {
    if (swiperRef.current && paginationRef.current) {
      const swiper = swiperRef.current;

      swiper.params.pagination.el = paginationRef.current;

      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  }, []);


  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: PRIMARY_BG }}
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto py-[3rem] lg:py-[6rem]"
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 17500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay, Pagination]}
          onSlideChange={handleSlideChange}
          pagination={{
            clickable: true,
            el: paginationRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.pagination.el = paginationRef.current;
          }}
        >
          {feedback.map((feature, index) => {


            return (
              <SwiperSlide 
                className=" flex justify-center items-center gap-[2rem] lg:gap-[5rem] py-[2rem] lg:py-[5rem]"
                key={feature.id || index}
              >

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className=" rounded-xl w-full mx-auto bg-[#4966AA] flex flex-col lg:flex-row gap-8 items-center px-2 lg:px-10"
                >
                  {/* Left Content */}
                  <div className=" lg:w-1/2 flex flex-col justify-between h-full lg:gap-[5em]">
                   
                    {/* Content */}
                    <div className=" p-2">
                      <h3 className=" text-[1.7rem] lg:text-[2.5rem] font-bold text-white mb-2 text-left w-[70%] lg:w-full ">
                        {feature.title}
                      </h3>
      
                      <p className="text-md lg:text-xl text-white text-left mb-5 lg:w-[80%]">
                        {feature.description}
                      </p>
                    </div>
      
                    {/* CTA */}
                    <div className=" text-left">
                      <Link
                        href={feature.url}
                        className="inline-block bg-white hover:bg-primary px-5 lg:px-10 py-2 lg:py-5 rounded-full text-xl text-primary hover:text-white font-extrabold transition-colors duration-300"
                      >
                        {feature.btnText || "Learn More"}
                      </Link>
                    </div>

                  </div>

                  {/* Right Image Blob */}
                  <div className=" lg:w-1/2 
                  flex flex-col justify-between h-full lg:gap-[5em]">
                   
                    {/* Content */}
                    <div
                      className=""
                    >

                      <div
                        className="border-[0.4rem] border-primary w-full overflow-hidden flex ml-[0.5rem] py-2 mx-auto"
                        style={{ borderRadius: blobShapes }}
                      >
                        <Image
                          src="/assets/images/donation/001.svg"
                          width={1000}
                          height={1000}
                          alt="about-us-at-gracespring-health-foundation"
                          className="lg:w-full h-[17rem] lg:h-[27rem] object-cover object-top"
                          style={{ borderRadius: blobShapes, objectPosition: "50% 10%" }}
                        />
                      </div>

                    </div>
                   

                  </div>

                </motion.div>

                
              </SwiperSlide>
            );
          })}
      
          {/* CTA */}
          <div
            className=" flex justify-between px-10"
          >

            {/* Pagination Dots */}
            <div
              className=" my-auto"
            >
              <div
                ref={paginationRef}
                className=" swiper-pagination"
              />
            </div>

            <div className=" flex items-center justify-center h-full">

              <div className="flex items-center gap-4">
                
                {/* Prev Button */}
                <button
                  // onClick={() => swiperRef.current?.slidePrev()}
                  // disabled={currentIndex === 0}
                  // className={`shadow-lg border-2 border-primary w-10 h-10 p-2 flex items-center justify-center rounded-full transition ${
                  //   currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
                  // }`}

                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={isFirstSlide}
                  className={`shadow-lg border-2 border-primary w-10 h-10 p-2 flex items-center justify-center rounded-full transition ${
                    isFirstSlide ? "opacity-40 cursor-not-allowed" : ""
                  }`}

                >
                  <Image
                    src="/assets/icons/back.png"
                    width={500}
                    height={500}
                    alt="Back"
                  />
                </button>

                {/* Next Button */}
                <button
                  // onClick={() => swiperRef.current?.slideNext()}
                  // className="shadow-lg border-2 border-primary w-10 h-10 p-2 flex items-center justify-center rounded-full text-white"
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={isLastSlide}
                  className={`shadow-lg border-2 border-primary w-10 h-10 p-2 flex items-center justify-center rounded-full transition ${
                    isLastSlide ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  <Image
                    src="/assets/icons/next.png"
                    width={500}
                    height={500}
                    alt="Next"
                  />
                </button>

              </div>

            </div>




          </div>

        </Swiper>


      </motion.div>


    </div>
  );
};

export default Feedback;