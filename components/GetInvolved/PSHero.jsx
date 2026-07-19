"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ProgramsAndServicesSwiper from "./Swiper";

const blobShapes = [
  "74% 26% 63% 37% / 45% 36% 64% 55% ",
];




const PRIMARY_BG = "#FDF2EB";

const PSHero = () => {


  return (

    <>


      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto py-[2.5rem] lg:p-10 mt-[5rem]"
        style={{backgroundColor: PRIMARY_BG}}
      >
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" w-full mx-auto grid gap-[4.5rem] gap-8 items-center px-2 px-10 mt-[5rem]"
        >

          
        {/* Content */}

        <div>

            <div className="relative flex justify-center items-center">

                {/* SVG Blob background flipped horizontally */}
                <svg
                    width="200"
                    height="300"
                    viewBox="0 0 100 100"
                    className="absolute transform scale-x-[-1] transform rotate-[120deg] -ml-10 -mt-10" // rotate 90 degrees clockwise, flips horizontally
                >
                    <path
                    d="M10,10 C50,0 80,20 70,50 C60,80 30,90 20,60 C10,30 20,10 30,10 Z"
                    fill="#e28ad2" // primary color
                    />
                </svg>

                {/* Icon on top */}
                <Image
                    src="/assets/icons/healthcare-and-medical.png"
                    width={1000}
                    height={1000}
                    alt="chat icon"
                    className="relative z-10 w-[9rem] h-[8.7rem]"
                />

            </div>
            
        </div>
        
        <div className=" lg:w-1/2 flex flex-col justify-between gap-[2rem] m-auto">
        
            {/* Content */}

            <div
                className=" "
            >

                <h2 className="text-[2.5rem] font-extrabold text-primary mb-2 text-center">
                    Our Programs and Services
                </h2>

            </div>

            <div
                className=" "
            >

                <p className="text-lg text-primary text-center font-bold">
                    To fulfil our mission, the foundation has implemented a comprehensive suite of programs
                </p>

            </div>


        

            

        </div>


        </motion.div>

      </motion.div>

      <ProgramsAndServicesSwiper/>

    </>
  );
};

export default PSHero;