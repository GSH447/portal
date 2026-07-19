"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";




const Benefactor01 = () => {

  return (
    <div
      className=" relative w-full overflow-hidden bg-primary"
    >

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto py-[12vh] px-5 lg:px-10 flex lg:flex-row flex-col-reverse justify-between lg:gap-[2em]"
      >
        
        {/* Left Content */}
        <div className=" lg:w-2/3 flex flex-col justify-between h-full gap-[1em] lg:p-10">
        
            {/* Content */}
            <div className="">
                <h3 className="text-[1.7rem] lg:text-[35px] font-bold text-white mb-2 text-left lg:w-[100%]">
                “As a patient who is currently benefitting from a clinical trial, it gives me so much hope for the future that we have this pioneering work going on.”
                </h3>

            </div>

            {/* Content */}
            <div className=" text-left">
                <p className="text-md font-bold text-white">
                Mandy
                </p>
                
                <p className=" text-sm text-white">
                Patient at The Gracespring Health Foundation
                </p>
            </div>

        </div>

        {/* Right Image Blob */}
        <div className=" lg:w-1/3 flex flex-col h-full">
        <div
            className="overflow-hidden flex justify-end items-start h-full"
        >
            <Image
            src="/assets/icons/bubble.png"
            width={1000}
            height={1000}
            alt="ok"
            className="w-[25%] lg:w-[40%] h-full object-cover"
            />
        </div>
        </div>

      </motion.div>


    </div>
  );
};

export default Benefactor01;