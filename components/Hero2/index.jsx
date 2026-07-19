"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/* ─────────────────────────────────────────────
   SLIDE DATA — per-slide visual control
───────────────────────────────────────────── */
const slides = [
  {
    title: "Excellence in Care, Our Shared Path",
    description:
      "Our identity is reflected through our three wings—each inspired by timeless virtues that define our approach to healing and service: Pistis (Faith), Elpis (Hope), and Agape (Love).",
    buttonText: "Read More",
    buttonUrl: "/who-we-are/about-us",
    bgImage: "/assets/images/hero/gsh-2.png",
    zoom: true,
    overlayStrength: "strong", 
    objectPosition: "center center", // 100% pushes the image completely flush to the bottom edge
  },
  // {
  //   title: "Excellence in Care, Our Shared Path",
  //   description:
  //     "Our identity is reflected through our three wings—each inspired by timeless virtues that define our approach to healing and service: Pistis (Faith), Elpis (Hope), and Agape (Love).",
  //   buttonText: "Read More",
  //   buttonUrl: "/who-we-are/about-us",
  //   bgImage: "/assets/images/hero/gsh-2.png",
  //   zoom: false,
  //   overlayStrength: "strong", 
  //   objectPosition: "center 100%", // 100% pushes the image completely flush to the bottom edge
  // },
  // {
  //   title: "Excellence in Care, Our Shared Path",
  //   description:
  //     "Our identity is reflected through our three wings—each inspired by timeless virtues that define our approach to healing and service: Pistis (Faith), Elpis (Hope), and Agape (Love).",
  //   buttonText: "Read More",
  //   buttonUrl: "/who-we-are/about-us",
  //   bgImage: "/assets/images/hero/gsh.jpg",
  //   zoom: false,
  //   overlayStrength: "strong",
  //   objectFit: "contain",       // ✅ Show full building — no crop
  //   objectPosition: "contain 70%", // ✅ Push building toward bottom of frame
  // },
  // {
  //   title: "Multispecialty Healthcare Facility",
  //   description:
  //     "Health is wealth, and access to proper, affordable, and timely healthcare is a fundamental aspiration of every society.",
  //   buttonText: "Contact Us",
  //   buttonUrl: "/patient-support/contact-us",
  //   bgImage: "/assets/images/hero/doctor.jpg",
  //   zoom: true,
  //   overlayStrength: "strong",
  //   objectPosition: "center center",
  // },
  {
    title: "Multispecialty Healthcare Facility",
    // title: "Professionalism, Compassion, and Clinical Excellence.",
    description:
      "Our commitment to quality, safety, and dignity of care is guided by our enduring promise.",
    buttonText: "Find a Doctor",
    buttonUrl: "/services/surgery",
    bgImage: "/assets/images/hero/room.jpg",
    zoom: true,
    overlayStrength: "strong",
    objectPosition: "center center",
  },
];

/* ─────────────────────────────────────────────
   OVERLAY STRENGTH MAP
───────────────────────────────────────────── */
const overlayMap = {
  light:  "from-[#111029]/70 via-[#1e1b4b]/10 to-transparent",
  strong: "from-[#111029] via-[#1e1b4b]/25 lg:via-[#1e1b4b]/5 to-transparent",
};

/* ─────────────────────────────────────────────
   STATISTICS PANEL
───────────────────────────────────────────── */
const statsData = [
  { value: 20, suffix: "+", label: "Specialties" },
  { value: 40, suffix: "+", label: "Caregivers" },
  { value: 3,  suffix: "+", label: "Surgeries"  },
];

function HeroStatistics() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="border-2 absolute bottom-6 right-4 lg:bottom-10 lg:right-[3.1rem] flex flex-row items-center bg-black/50 lg:p-6 p-1 rounded-md backdrop-blur-sm border border-white/10 z-30 w-fit"
    >
      {statsData.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="px-1 flex-1 text-center lg:py-0 lg:border-none border-b border-white/20 last:border-b-0">
            <p
              className="text-white lg:text-5xl text-2xl font-extrabold leading-tight"
              style={{ fontFamily: "AvenirBold" }}
            >
              {inView ? (
                <CountUp start={0} end={stat.value} duration={2.5} />
              ) : (
                0
              )}
              <span>{stat.suffix}</span>
            </p>
            <p className="text-white/80 text-sm mt-1 whitespace-normal leading-tight mx-auto max-w-[150px]">
              {stat.label}
            </p>
          </div>

          {index < statsData.length - 1 && (
            <div className="lg:h-16 lg:w-px h-px w-full bg-white/20 lg:mx-8 lg:my-0 my-3" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // CHANGED: Swapped 'h-screen' for the controlled cinematic bounding rule from ServicePageLayout
  return (
    <div className="relative w-full h-[50vh] min-h-[550px] max-h-[650px] bg-[#111029]">

      {/* ── SWIPER ──────────────────────────────── */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {/* ── SLIDES ────────────────────────────── */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full overflow-hidden">

            {/* BACKGROUND IMAGE + OVERLAYS */}
            <motion.div
              key={activeIndex === index ? `bg-active-${index}` : `bg-idle-${index}`}
              initial={{ scale: slide.zoom ? 1.12 : 1 }}
              animate={{ scale: 1 }}
              transition={
                slide.zoom
                  ? { duration: 6, ease: "easeOut" }
                  : { duration: 0 }
              }
              className="absolute inset-0 z-0"
            >
              <Image
                src={slide.bgImage}
                alt={slide.title}
                fill
                style={{ 
                  objectFit: slide.objectFit || "cover", 
                  objectPosition: slide.objectPosition || "center" 
                }}
                priority={index === 0}
              />
              {/* Medical grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-60" />
              {/* Per-slide cinematic vignette */}
              <div className={`absolute inset-0 bg-gradient-to-r ${overlayMap[slide.overlayStrength]}`} />
            </motion.div>

            {/* TEXT CONTENT */}
            {/* CHANGED: Removed the arbitrary h-[32vh] on the title wrapper to keep vertical padding proportional */}
            <div className=" relative z-20 mx-auto h-full  px-5 xl:px-6 flex items-center pb-20 lg:pb-0">
              <motion.div
                key={activeIndex === index ? `text-active-${index}` : `text-idle-${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className=" max-w-2xl grid gap-4"
              >
                {/* Title */}
                <div>
                  <p
                    className="text-white text-3xl lg:text-5xl font-bold leading-tight"
                    style={{ fontFamily: "AvenirBold" }}
                  >
                    {slide.title}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-white/80 text-sm lg:text-base border-l-4 border-[#2A157c] pl-4 lg:pl-6">
                    {slide.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-2">
                  <Link
                    href={slide.buttonUrl}
                    className="inline-flex items-center gap-3 px-8 py-2.5 lg:py-3.5 rounded-full font-extrabold bg-white hover:bg-[#2A157c] hover:text-white transition-all shadow-xl text-sm"
                  >
                    {slide.buttonText}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>

          </SwiperSlide>
        ))}

        {/* ── CUSTOM NAV + PAGINATION ───────────── */}
        {/* CHANGED: Adjusted bottom placement from absolute 18vh to a concrete bottom class since height decreased */}
        <div className="absolute bottom-6 left-8 z-40 flex items-center gap-4">
          <div className="flex gap-2">
            <button className="prev-btn p-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="next-btn p-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="custom-pagination flex gap-2" />
        </div>

      </Swiper>

      {/* ── STATISTICS OVERLAY ────────────────── */}
      <HeroStatistics />

    </div>
  );
}



// export default function HeroSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="relative w-full h-screen bg-[#111029]">

//       {/* ── SWIPER ──────────────────────────────── */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectFade]}
//         effect="fade"
//         loop={true}
//         speed={1000}
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         pagination={{ clickable: true, el: ".custom-pagination" }}
//         navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="h-full w-full"
//       >
//         {/* ── SLIDES ────────────────────────────── */}
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="relative h-full overflow-hidden">

//             {/* BACKGROUND IMAGE + OVERLAYS */}
//             <motion.div
//               key={activeIndex === index ? `bg-active-${index}` : `bg-idle-${index}`}
//               initial={{ scale: slide.zoom ? 1.12 : 1 }}
//               animate={{ scale: 1 }}
//               transition={
//                 slide.zoom
//                   ? { duration: 6, ease: "easeOut" }
//                   : { duration: 0 }
//               }
//               className="absolute inset-0 z-0"
//             >
//               <Image
//                 src={slide.bgImage}
//                 alt={slide.title}
//                 fill
//                 style={{ 
//                   objectFit: slide.objectFit || "cover", 
//                   objectPosition: slide.objectPosition || "center" 
//                 }}
//                 priority={index === 0}
//               />

//               {/* <Image
//                 src={slide.bgImage}
//                 alt={slide.title}
//                 fill
//                 style={{ objectFit: "cover", objectPosition: slide.objectPosition }}
//                 priority={index === 0}
//               /> */}
//               {/* Medical grid texture */}
//               <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-60" />
//               {/* Per-slide cinematic vignette */}
//               <div className={`absolute inset-0 bg-gradient-to-r ${overlayMap[slide.overlayStrength]}`} />
//             </motion.div>

//             {/* TEXT CONTENT */}
//             <div className="relative z-20 mx-auto h-full grid items-center px-4 pb-32 lg:pb-0">
//               <motion.div
//                 key={activeIndex === index ? `text-active-${index}` : `text-idle-${index}`}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="max-w-2xl grid gap-6"
//               >
//                 {/* Title */}
//                 <div className="h-[32vh] flex items-center">
//                   <p
//                     className="text-white text-3xl lg:text-6xl font-bold leading-tight grid gap-y-4"
//                     style={{ fontFamily: "AvenirBold" }}
//                   >
//                     {slide.title}
//                   </p>
//                 </div>

//                 {/* Description */}
//                 <div className="-mt-2">
//                   <p className="text-white/80 text-sm lg:text-xl border-l-4 border-[#2A157c] lg:pl-6">
//                     {slide.description}
//                   </p>
//                 </div>

//                 {/* CTA Button */}
//                 <div>
//                   <Link
//                     href={slide.buttonUrl}
//                     className="inline-flex items-center gap-3 px-8 py-2 lg:py-4 rounded-full font-extrabold bg-white hover:bg-[#2A157c] hover:text-white transition-all shadow-xl"
//                   >
//                     {slide.buttonText}
//                     <ArrowRight size={20} />
//                   </Link>
//                 </div>
//               </motion.div>
//             </div>

//           </SwiperSlide>
//         ))}

//         {/* ── CUSTOM NAV + PAGINATION ─────────────
//             Must live inside <Swiper> to access
//             Swiper's DOM context for custom els
//         ─────────────────────────────────────── */}
//         <div className="absolute bottom-[18vh] lg:bottom-6 left-4 z-40 flex items-center gap-4">
//           <div className="flex gap-2">
//             <button className="prev-btn p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all">
//               <ChevronLeft size={24} />
//             </button>
//             <button className="next-btn p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all">
//               <ChevronRight size={24} />
//             </button>
//           </div>
//           {/* Pagination dots injected here by Swiper */}
//           <div className="custom-pagination flex gap-2" />
//         </div>

//       </Swiper>

//       {/* ── STATISTICS OVERLAY ──────────────────
//           Outside Swiper so it persists across
//           all slides without re-rendering
//       ─────────────────────────────────────── */}
//       <HeroStatistics />

//     </div>
//   );
// }
