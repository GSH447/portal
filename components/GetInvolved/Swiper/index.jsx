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
    <section className="relative w-full px-4 sm:px-6 lg:px-12 my-10">
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
                  className="
                    flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    rounded-full
                    border
                    border-primary/30
                    bg-white
                    text-primary
                    font-semibold
                    text-sm
                    whitespace-nowrap
                    hover:bg-primary
                    hover:text-white
                    hover:border-primary
                    transition-all
                    duration-300
                    shadow-sm
                  "
                >
                  {item.name}
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
      </motion.div>
    </section>
  );
};

export default ProgramsAndServicesSwiper;

// "use client";
// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import { symptoms } from "../Constants";
// // import { diseases } from "../Constants";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import { programs_services } from "../../SiteMaps/data";

// const ProgramsAndServicesSwiper = () => {
//   const swiperRefDiseases = useRef(null);
//   const [currentDiseasesIndex, setCurrentDiseasesIndex] = useState(0);

//   const handleSymptomsSlideChange = (swiper) => {
//     setCurrentSymptomsIndex(swiper.realIndex);
//   };

//   const handleDiseasesSlideChange = (swiper) => {
//     setCurrentDiseasesIndex(swiper.realIndex);
//   };


//   return (
//     <div className="border-2 border-[green] grid gap-y-16 px-2 sm:px-4 md:px-8 relative z-10" >

//       {/* Diseases Section */}
//       <div>


//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 1, delay: 0.1, ease: "circIn" }}
//           viewport={{ once: true }}
//         //   className="border-2 border-[red] animate_top max-w-[900px] 2xl:max-w-[1000px] 3xl:max-w-[1500px] mx-auto relative z-10 s_d"
//           className="border-2 border-[red] animate_top w-[80%] relative z-10"
//         >
//           <Swiper
//             onSwiper={(swiper) => (swiperRefDiseases.current = swiper)}
//             onSlideChange={handleDiseasesSlideChange}
//             spaceBetween={10}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             breakpoints={{
//               0: { slidesPerView: 3, spaceBetween: 10 },
//               640: { slidesPerView: 4, spaceBetween: 15 },
//               768: { slidesPerView: 5, spaceBetween: 25 },
//               1768: { slidesPerView: 8, spaceBetween: 25 },
//             }}
//           >
//             {programs_services.map((disease) => (
//               <SwiperSlide key={disease?.id}>
//                 <Link
//                   href={disease.link}
//                 >
//                 <motion.div
//                   variants={{
//                     hidden: { opacity: 0, y: -10 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   initial="hidden"
//                   whileInView="visible"
//                   transition={{ duration: 0.5 }}
//                   viewport={{ once: true }}
//                   className="border-2 border-[red] rounded-lg flex flex-col justify-between items-center"
//                 >

//                 <div className="border-2 border-[red]  m-auto">
//                     <span
//                     className="inline-block bg-primary hover:bg-white rounded-full text-lg text-white hover:text-primary font-bold transition-colors duration-300 border-2 border-primary px-3 py-1"
//                     >
//                         {disease.name}
//                     </span>
//                 </div>
                    
//                 </motion.div>
//                 </Link>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Prev & Next Buttons */}
//           <button
//             onClick={() => swiperRefDiseases.current?.slidePrev()}
//             disabled={currentDiseasesIndex === 0}
//             className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all ${
//               currentDiseasesIndex === 0
//                 ? "opacity-0 cursor-not-allowed"
//                 : "opacity-100"
//             }`}
//           >
//             <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
//               <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" />
//             </svg>
//           </button>

//           <button
//             onClick={() => swiperRefDiseases.current?.slideNext()}
//             className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all ${
//               currentDiseasesIndex >= programs_services.length - 5
//                 ? "opacity-50 cursor-not-allowed"
//                 : "opacity-100"
//             }`}
//           >
//             <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
//               <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" />
//             </svg>
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProgramsAndServicesSwiper;