"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const blobShapes = [
  "74% 26% 63% 37% / 45% 36% 64% 55% ",
];




const PRIMARY_BG = "#4a4a63";

const Aboutus = () => {


  return (
    <div
      className=" relative w-full overflow-hidden  mt-[2.9rem] py-[6rem] lg:py-[3.15rem] mx-auto flex flex-col gap-6 lg:gap-10 items-center"
      style={{ backgroundColor: PRIMARY_BG }}
    >



      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" relative z-10 mx-auto px-2 pt-[8rem] lg:pt-[11rem] lg:pb-[5rem]"
      >
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" rounded-xl w-full mx-auto flex flex-col lg:flex-row gap-[4.5rem] lg:gap-8 items-center px-2 lg:px-10"
        >
          {/* Left Content */}
          <div className=" lg:w-1/2 flex flex-col justify-between h-full lg:gap-[1.2rem] -mt-[7rem]">
            
            {/* Content */}

              <div >

                <h3 className="text-[1.7rem] lg:text-[2.5rem] font-bold text-white mb-2 text-left w-[90%] lg:w-full">
                  We’re The Gracespring Health Foundation
                </h3>
              </div>

              <div>

                <p className="text-md lg:text-xl text-white text-left mb-5 lg:w-[80%]">
                  We raise money for The Gracespring Health Foundation, Gracespring Hospitals and other Hospitals, to save the lives of people affected by cardiac conditions, everywhere.
                </p>
              </div>


           

            {/* CTA */}
            <div className=" text-left">
              <Link
                href="/what-we-do"
                className="inline-block bg-white hover:bg-primary px-5 lg:px-7 py-4 lg:py-3 rounded-full text-md text-primary hover:text-white font-extrabold transition-colors duration-300"
              >
                What we do
              </Link>
            </div>

          </div>

          {/* Right Image Blob */}
          <div className="lg:w-1/2 
          flex flex-col justify-between">
            
            {/* Content */}
            <div>

              <div
                className="border-[0.4rem] border-primary w-full overflow-hidden flex ml-[0.5rem] py-2 mx-auto"
                style={{ borderRadius: blobShapes }}
              >
                <Image
                  src="/assets/images/about/vmo.svg"
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

      </motion.div>


    </div>
  );
};

export default Aboutus;