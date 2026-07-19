"use client";
import React, { useState, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { feedback } from "../SiteMaps/data";
import { motion } from "framer-motion";

// Optimize StarRating component to prevent re-renders
const StarRating = React.memo(({ rating }) => {
  const starPositions = useMemo(
    () => ({
      1: [[0]],
      2: [[0, 1]],
      3: [[0], [1, 2]],
      4: [[0], [1, 2], [3]],
      5: [[0], [1, 2], [3, 4]],
    }),
    []
  );

  return (
    <div className="relative flex flex-col items-center w-[64px]">
      {starPositions[rating]?.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.map((colIndex) => (
            <span key={colIndex} className="m-1">
              <Image
                width={20}
                height={20}
                src="/assets/icons/star.svg"
                alt="star"
                loading="lazy"
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
});

const Feedback = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optimize slide change handler using useCallback, to memoize the slide change handler
  const handleSlideChange = useCallback((swiper) => {
    setCurrentIndex(swiper.realIndex);
  }, []);

  // Memoize feedback data for optimization
  const feedbackData = useMemo(() => feedback, []);

  return (
    <div className="mx-auto lg:pb-20 pb-10 relative">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1, ease: "circIn" }}
        viewport={{ once: true }}
        className="animate_top w-[100%] relative mx-auto"
      >

      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="animate_top lg:w-[1280px] w-full relative mx-auto"
      > */}

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={10}
          slidesPerView={2.5}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 10 },
            600: { slidesPerView: 1.1, spaceBetween: 10 },  // Small Mobile
            768: { slidesPerView: 2, spaceBetween: 10 },  // Tablets
            1024: { slidesPerView: 3.5, spaceBetween: 10 },  // Laptops
            1440: { slidesPerView: 3.9, spaceBetween: 10 },  // Large Desktops
            1600: { slidesPerView: 4.3, spaceBetween: 10 },  // Extra Large Desktops
            1900: { slidesPerView: 5.2, spaceBetween: 10 },  // Extra Large Desktops
            2300: { slidesPerView: 6.5, spaceBetween: 10 },  // Extra Large Desktops
          }}
          modules={[Navigation, Autoplay]}
          onSlideChange={handleSlideChange}
          // Added passive event listeners for performance
          touchStartPreventDefault={false}
          touchMoveStopPropagation={false}
          noSwiping={false}
        >

        {/* <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={15}
          slidesPerView={2.5}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 10 },
            768: { slidesPerView: 3.5, spaceBetween: 15 },
          }}
          modules={[Navigation, Autoplay]}
          onSlideChange={handleSlideChange}
          // Added passive event listeners for performance
          touchStartPreventDefault={false}
          touchMoveStopPropagation={false}
          noSwiping={false}
        > */}
          {feedbackData.map((feature, index) => (
            <SwiperSlide key={feature?.id}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`rounded-lg transition-all w-[380px] ${
                  index === 0 ? "h-[500px]" : "h-[480px]"
                } ${
                  index === 3.5 ? "opacity-50" : "opacity-100"
                } bg-white border p-6 flex flex-col justify-between mx-auto`}
              >
                <StarRating rating={feature.rating} />
                <p className="text-black text-left">{feature.comment}</p>
                {/* <div className="flex border-t border-gray-300 lg:mt-3 pt-5 gap-2">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] m-auto">
                    <Image
                      src={feature.image}
                      width={96}
                      height={36}
                      alt={feature.firstname}
                      priority={index === 0}
                      // loading="lazy"
                    />
                  </div>
                  <div className="my-auto">
                    <h3 className="lg:text-[18px] text-[11px] font-semibold text-black">
                      {feature.firstname} {feature.lastname}
                    </h3>
                    <h3 className="lg:text-[16px] text-[11px] text-black">
                      {feature.title}
                    </h3>
                  </div>
                </div> */}



                 <div className="flex border-t border-[grey] lg:mt-3">
                   <div className="flex pt-5 gap-2">
                     <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] m-auto">
                       <Image src={feature.image} width={96} height={36} alt="title" />
                     </div>
                     <div className="my-auto">
                       <h3 className="lg:text-[18px] text-[11px] font-semibold text-black text-center">
                         {feature.firstname} {feature.lastname}
                       </h3>
                       <h3 className="lg:text-[16px] text-[11px] text-black text-left">
                         {feature.title}
                       </h3>
                     </div>
                   </div>
                 </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={currentIndex === 0}
          className={`absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg bg-white w-10 h-10 flex items-center justify-center rounded-full ${
            currentIndex === 0 ? "opacity-0 cursor-not-allowed" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg bg-white w-10 h-10 flex items-center justify-center rounded-full ${
            currentIndex >= 0 ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Feedback;








// "use client";
// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { feedback } from "../SiteMaps/data";
// import { motion } from "framer-motion";

// const StarRating = ({ rating }) => {
//   const starPositions = {
//     1: [[0]],
//     2: [[0, 1]],
//     3: [[0], [1, 2]],
//     4: [[0], [1, 2], [3]],
//     5: [[0], [1, 2], [3, 4]]
//   };

//   return (
//     <div className="relative flex flex-col items-center w-[64px]">
//       {starPositions[rating]?.map((row, rowIndex) => (
//         <div key={rowIndex} className="flex justify-center">
//           {row.map((colIndex) => (
//             <span key={colIndex} className="m-1">
//               <Image width={20} height={20} src="/assets/icons/star.svg" alt="star" />
//             </span>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// const Feedback = () => {
//   const swiperRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

//   // Handle slide change
//   const handleSlideChange = (swiper) => {
//     setCurrentIndex(swiper.realIndex); // Get real index (not based on duplicate slides)
//   };

//   return (
//     <div className="mx-auto lg:py-20 py-10 relative">

//       <motion.div 
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: 50,
//           },

//           visible: {
//             opacity: 1,
//             y: 0,
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 1, delay: 0.1, ease:"circIn" }}
        
//         viewport={{ once: true }}
//         className="animate_top lg:w-[1280px] w-[100%] relative mx-auto"
//       >

//         {/* <Swiper
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           spaceBetween={10}
//           slidesPerView={2.5}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           breakpoints={{
//             0: { slidesPerView: 1.5 }, // Show 2.5 cards on mobile
//             768: { slidesPerView: 3.5 } // Show 3.5 cards on desktop
//           }}
//           modules={[Navigation, Autoplay]}
//           onSlideChange={handleSlideChange} // Add slide change handler
//         > */}

// <Swiper
//       onSwiper={(swiper) => (swiperRef.current = swiper)}
//       spaceBetween={10} // Ensures proper spacing
//       slidesPerView={2.5} // Default slides visible
//       autoplay={{ delay: 2500, disableOnInteraction: false }}
//       breakpoints={{
//         0: { slidesPerView: 1.1, spaceBetween: 10 }, // Mobile: 1.5 slides visible
//         768: { slidesPerView: 3.5, spaceBetween: 15 }, // Desktop: 3.5 slides visible
//       }}
//       modules={[Navigation, Autoplay]}
//       onSlideChange={handleSlideChange}
//     >
//           {feedback.map((feature, index) => (
//             <SwiperSlide key={feature?.id}>
//               <motion.div
//                 variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className={`rounded-lg transition-all w-[360px] ${index === 0 ? "h-[500px]" : "h-[480px]"} ${index === 3.5 ? "opacity-50" : "opacity-100"} bg-white border p-6 flex flex-col justify-between mx-auto `}                      
//               >
//                 <StarRating rating={feature.rating} />
//                 <p className="text-black text-left">{feature.comment}</p>
//                 <div className="flex border-t border-[grey] lg:mt-3">
//                   <div className="flex pt-5 gap-2">
//                     <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] m-auto">
//                       <Image src={feature.image} width={96} height={36} alt="title" />
//                     </div>
//                     <div className="my-auto">
//                       <h3 className="lg:text-[18px] text-[11px] font-semibold text-black text-center">
//                         {feature.firstname} {feature.lastname}
//                       </h3>
//                       <h3 className="lg:text-[16px] text-[11px] text-black text-left">
//                         {feature.title}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <button
//         onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
//         disabled={currentIndex === 0} // Disable if index is 0
//         className={`absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg bg-white w-10 h-10 flex items-center justify-center rounded-full ${
//           currentIndex === 0 ? "opacity-0 cursor-not-allowed" : ""
//         }`}

//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button

//         onClick={() => swiperRef.current && swiperRef.current.slideNext()}
//         className={`absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg bg-white w-10 h-10 flex items-center justify-center rounded-full  ${
//           currentIndex >= 2 ? "opacity-100" : "opacity-50 cursor-not-allowed"
//         }`}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//       </motion.div>
      
//     </div>
//   );
// };

// export default Feedback;




