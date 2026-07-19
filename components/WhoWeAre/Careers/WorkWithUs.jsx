
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const blobShapes = [
  "74% 26% 63% 37% / 45% 36% 64% 55% ",
];




// const PRIMARY_BG = "#4a635a";
const PRIMARY_BG = "#ffffff";

const WorkWithUs = () => {


  return (
    <div
      className=" relative w-full overflow-hidden  mx-auto flex flex-col gap-2 lg:gap-10 items-center"
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
          className=" rounded-xl w-full mx-auto flex flex-col lg:flex-row  lg:gap-8 items-center px-2 lg:px-10"
        >
          {/* Left Content */}
          <div className=" lg:w-1/2 flex flex-col justify-between h-full lg:gap-[1.2rem]">
            
            {/* Content */}

              <div >

                <h3 className="text-[1.7rem] lg:text-[3.5rem] font-bold text-primary mb-2 text-left w-[90%] lg:w-full leading-xl">
                  Working at The Gracespring Health Foundation
                </h3>
              </div>


          </div>

          {/* Right  Content */}
          <div className=" lg:w-1/2 flex flex-col justify-between h-full lg:gap-[1.2rem]">
          
          {/* Content */}

            <div
              className="grid gap-y-5"
            >

              <p className="text-md lg:text-xl text-primary text-left mb-5 lg:w-[80%]">
                Our team is made up of passionate individuals who are dedicated to making a difference in the lives of children with heart conditions. We believe in fostering a collaborative and supportive work environment where every team member can thrive and contribute to our mission.
              </p>


            </div>



            {/* CTA */}
            <div className=" text-left">
              <Link
                href="#roles"
                className="inline-block bg-primary hover:bg-primary px-5 lg:px-7 py-4 lg:py-3 rounded-full text-md text-white hover:text-white font-extrabold transition-colors duration-300"
              >
                Explore latest roles
              </Link>
            </div>


          </div>


        </motion.div>

      </motion.div>


    </div>
  );
};

export default WorkWithUs;