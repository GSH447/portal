"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroVideo from "../Videos/index"
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

export default function Cta1() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* Top Border */}
      <div className="flex">
        <div className="border-[10px] border-[#5CB338] w-full"></div>
        <div className="border-[10px] border-[#6F92E7] w-full"></div>
        <div className="border-[10px] border-[#4a912d] w-full"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12 px-5 lg:px-20">

        {/* LEFT COLUMN - ABOUT US */}
        <div className="text-black space-y-6">

          <p className="uppercase tracking-widest text-sm text-[#2A157c] font-semibold ">
            ABOUT GRACESPRING HOSPITALS
          </p>

          {/* SECOND HEADING */}
          <div className="text-3xl lg:text-5xl font-bold leading-tight">

            <AnimatedText
              text="Excellence in Care,"
            />

            <AnimatedText
              text="Our Shared Path"
            />

          </div>

          <p className="-mt-5 uppercase tracking-widest text-sm text-white font-semibold  bg-[#5CB338] px-2 p-1">
           <i>24/7 GLOBAL STANDARD OF PRIVATE HEALTHCARE</i>
          </p>

          <p className="leading-8 text-[#2A157c]">
            A <b>private hospital on the Lekki-Epe corridor, Sangotedo </b>.
            delivering consultant-led patient-centred care aligned with global best clinical standards. 
             <Link href="/services/women-children" className=" ml-2 underline">Maternity</Link>, <Link href="/services/icu-emergency" className="ml-2 underline decoration-red-500 decoration-2">ICU</Link>, <Link href="/services/surgery">Surgery</Link>, <Link href="/services/dialysis">Dialysis and advanced Imaging</Link> all <Link href="https://www.gracespringhospitals.com">under one roof</Link>, also also easily 
            <b> accessed via the new Lagos Calabar Costal Road.</b>
          </p>

          {/* Three Wings */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
              <h3 className="font-semibold text-lg mb-2">
                Pistis
              </h3>
              <p className="text-sm text-black">
                Faith in care through trust, precision and clinical
                excellence.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
              <h3 className="font-semibold text-lg mb-2">
                Elpis
              </h3>
              <p className="text-sm text-black">
                Hope in healing through innovation and recovery.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
              <h3 className="font-semibold text-lg mb-2">
                Agape
              </h3>
              <p className="text-sm text-black">
                Love in service through compassion and dignity.
              </p>
            </div>

          </div> */}


        {/* Button Container */}
        <motion.button
          whileHover={{ y: -4, boxShadow: "0px 6px 0px #000" }}
          whileTap={{ y: 2, boxShadow: "0px 1px 0px #000" }}
          className="mt-4 px-8 py-3 bg-primary text-white font- uppercase tracking-wider rounded-xl border-2 border-white relative transition-all duration-150 shadow-[0px_4px_0px_#000]"
        >
          <Link
            href="/who-we-are/about-us"
          >
            Learn More
          </Link>
        </motion.button>
      

        </div>

        {/* RIGHT COLUMN - IMAGE */}
        <div className="relative w-full lg:h-[500px] overflow-hidden">

          <HeroVideo/>
          {/* <Image
            src="/assets/images/about/surgeon.jpg"
            alt="Gracespring Hospitals"
            fill
            className="object-cover"
          /> */}

        </div>

      </div>

      {/* Bottom Border */}
      <div className="flex">
        <div className="border-[10px] border-[#5CB338] w-full"></div>
        <div className="border-[10px] border-[#6F92E7] w-full"></div>
        <div className="border-[10px] border-[#4a912d] w-full"></div>
      </div>

    </div>
  );
}