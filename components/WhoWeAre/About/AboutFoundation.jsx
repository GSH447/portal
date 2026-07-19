"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SaveALife from "../../Buttons/SaveALife";

const PRIMARY_BG = "#FDF2EB";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function AboutFoundation() {
  return (
    <section
      className="relative py-16 lg:py-24"
      style={{ backgroundColor: PRIMARY_BG }}
    >

    
        <div
            className=" grid gap-10 lg:grid-cols-2 p-10"
        >

            <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="  items-center p-10 grid gap-10 rounded-md shadow-md lg:shadow-xl"
            >

            
            {/* Content */}

            <div
                className=" w-fit m-auto"
            >

                <div className=" relative flex justify-center items-center">

                    {/* SVG Blob background flipped horizontally */}
                    <svg
                        width="180"
                        height="200"
                        viewBox="0 0 100 100"
                        className="absolute transform scale-x-[-1] transform rotate-[120deg] -ml-10 -mt-10" // rotate 90 degrees clockwise, flips horizontally
                    >
                        <path
                        d="M10,10 C50,0 80,20 70,50 C60,80 30,90 20,60 C10,30 20,10 30,10 Z"
                        fill="#FFE08A" // primary color
                        />
                    </svg>

                    {/* Icon on top */}
                    <Image
                        src="/assets/icons/shared-vision.png"
                        width={1000}
                        height={1000}
                        alt="chat icon"
                        className="relative z-10 w-[5rem] h-[4rem]"
                    />

                </div>
                
            </div>
            
            <div className=" flex flex-col justify-between gap-[1rem] m-auto">
            
                {/* Content */}

                <div
                    className=""
                >

                    <h2 className="text-[1.6rem] font-extrabold text-primary mb-2 text-center">
                        Our Vision
                    </h2>

                </div>

                <div
                    className=""
                >

                <div className=" text-center m-auto grid">
                

                    <p
                    className="inline-block text-sm text-primary font-semibold"
                    >
                        To guarantee timely and appropriate surgical intervention for all Nigerian children with surgically treatable congenital heart disease (CHD). 
                    </p>

                </div>
                </div>


            </div>


            </motion.div>



            <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="  items-center p-10 grid gap-10 rounded-md shadow-md lg:shadow-xl"
            >

            
            {/* Content */}

            <div
                className=" w-fit m-auto"
            >

                <div className=" relative flex justify-center items-center">

                    {/* SVG Blob background flipped horizontally */}
                    <svg
                        width="180"
                        height="200"
                        viewBox="0 0 100 100"
                        className="absolute transform scale-x-[-1] transform rotate-[120deg] -ml-10 -mt-10" // rotate 90 degrees clockwise, flips horizontally
                    >
                        <path
                        d="M10,10 C50,0 80,20 70,50 C60,80 30,90 20,60 C10,30 20,10 30,10 Z"
                        fill="#6B5B95" // primary color
                        />
                    </svg>

                    {/* Icon on top */}
                    <Image
                        src="/assets/icons/mission.png"
                        width={1000}
                        height={1000}
                        alt="chat icon"
                        className="relative z-10 w-[5rem] h-[4rem]"
                    />

                </div>
                
            </div>
            
            <div className=" flex flex-col justify-between gap-[1rem] m-auto">
            
                {/* Content */}

                <div
                    className=""
                >

                    <h2 className="text-[1.6rem] font-extrabold text-primary mb-2 text-center">
                        Our Mission
                    </h2>

                </div>

                <div
                    className=""
                >

                    <p className="text-md text-primary text-center font-bold">
                       To provide hope and access to care for financially disadvantaged patients living with congenital heart disease.
                    </p>

                </div>

            </div>


            </motion.div>







        </div>

        {/* ================= OBJECTIVES ================= */}
        <motion.div
            className="my-10"
            {...fadeUp}
        >
          <h2 className="text-3xl font-extrabold text-primary text-center mb-6">
            Our Objectives (PATH)
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            With our four core objectives, we create a clear PATH toward improving
            cardiac surgery care and outcomes in Nigeria.
          </p>
        </motion.div>

        <div
            className=" grid gap-10 lg:grid-cols-4 p-10"
        >
            


            <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            {...fadeUp}
            className="  items-center p-10 grid gap-10 rounded-md shadow-md lg:shadow-xl"
            >

            
            {/* Content */}

            <div
                className=" w-fit m-auto"
            >

                <div className=" relative flex justify-center items-center">

                    {/* SVG Blob background flipped horizontally */}
                    <svg
                        width="180"
                        height="200"
                        viewBox="0 0 100 100"
                        className="absolute transform scale-x-[-1] transform rotate-[120deg] -ml-10 -mt-10" // rotate 90 degrees clockwise, flips horizontally
                    >
                        <path
                        d="M10,10 C50,0 80,20 70,50 C60,80 30,90 20,60 C10,30 20,10 30,10 Z"
                        fill="#8adbe2" // primary color
                        />
                    </svg>

                    {/* Icon on top */}
                    <Image
                        src="/assets/icons/public-health.png"
                        width={1000}
                        height={1000}
                        alt="chat icon"
                        className="relative z-10 w-[5rem] h-[4rem]"
                    />

                </div>
                
            </div>
            
            <div className=" flex flex-col justify-between gap-[1rem] m-auto">
            
                {/* Content */}

                <div
                    className="w-fit mx-auto"
                >

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-primary">
                    P
                  </span>
                  <h3 className="text-lg font-bold text-primary">
                    Public Awareness
                  </h3>
                </div>

                </div>



            
            
                <p className="text-gray-700 leading-relaxed text-sm">
                  Increase public understanding of congenital heart disease, its symptoms, and available treatment options.
                </p>

                {/* CTA */}
                <div className=" text-center m-auto grid">
                    <SaveALife
                        link="#save_a_life_now"
                        text={"Join"}
                    />
                </div>
         


            </div>


            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            {...fadeUp}
            className="  items-center p-10 grid gap-10 rounded-md shadow-md lg:shadow-xl"
            >

            
            {/* Content */}

            <div
                className=" w-fit m-auto"
            >

                <div className=" relative flex justify-center items-center">

                    {/* SVG Blob background flipped horizontally */}
                    <svg
                        width="180"
                        height="200"
                        viewBox="0 0 100 100"
                        className="absolute transform scale-x-[-1] transform rotate-[120deg] -ml-10 -mt-10" // rotate 90 degrees clockwise, flips horizontally
                    >
                        <path
                        d="M10,10 C50,0 80,20 70,50 C60,80 30,90 20,60 C10,30 20,10 30,10 Z"
                        fill="#C7B299" // primary color
                        />
                    </svg>

                    {/* Icon on top */}
                    <Image
                        src="/assets/icons/assistance.png"
                        width={1000}
                        height={1000}
                        alt="chat icon"
                        className="relative z-10 w-[5rem] h-[4rem]"
                    />

                </div>
                
            </div>
            
            <div className=" flex flex-col justify-between gap-[1rem] m-auto">
            
                {/* Content */}

                <div
                    className="w-fit mx-auto"
                >

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-primary">
                    A
                  </span>
                  <h3 className="text-lg font-bold text-primary">
                    Assist Financially
                  </h3>
                </div>

                </div>



            
                <p className="text-gray-700 leading-relaxed text-sm">
                  Provide financial support to families facing significant costs related to CHD diagnosis and treatment, enabling early intervention.
                </p>
            

                {/* CTA */}
                <div className=" text-center m-auto grid">
                    <SaveALife
                        link="#save_a_life_now"
                        text={"Donate"}
                    />
                </div>
         


            </div>

            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            {...fadeUp}
            className="  items-center p-10 grid gap-10 rounded-md shadow-md lg:shadow-xl"
            >

            
            {/* Content */}

            <div
                className=" w-fit m-auto"
            >

                <div className=" relative flex justify-center items-center">

                    {/* SVG Blob background flipped horizontally */}
                    <svg
                        width="180"
                        height="200"
                        viewBox="0 0 100 100"
                        className="absolute transform scale-x-[-1] transform rotate-[120deg] -ml-10 -mt-10" // rotate 90 degrees clockwise, flips horizontally
                    >
                        <path
                        d="M10,10 C50,0 80,20 70,50 C60,80 30,90 20,60 C10,30 20,10 30,10 Z"
                        fill="#e77e69" // primary color
                        />
                    </svg>

                    {/* Icon on top */}
                    <Image
                        src="/assets/icons/technology.png"
                        width={1000}
                        height={1000}
                        alt="chat icon"
                        className="relative z-10 w-[5rem] h-[4rem]"
                    />

                </div>
                
            </div>
            
            <div className=" flex flex-col justify-between gap-[1rem] m-auto">
            
                {/* Content */}

                <div
                    className="w-fit mx-auto"
                >

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-primary">
                    T
                  </span>
                  <h3 className="text-lg font-bold text-primary">
                    Technology & Research
                  </h3>
                </div>

                </div>



            
                <p className="text-gray-700 leading-relaxed text-sm">
                  Promote evidence-based best practices, technological advancement, and fund research focused on improving CHD outcomes in Nigeria.
                </p>
            

                {/* CTA */}
                <div className=" text-center m-auto grid">
                    <SaveALife
                        link="#save_a_life_now"
                        text={"Research"}
                    />
                </div>
         


            </div>

            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            {...fadeUp}
            className="  items-center p-10 grid gap-10 rounded-md shadow-md lg:shadow-xl"
            >

            
            {/* Content */}

            <div
                className=" w-fit m-auto"
            >

                <div className=" relative flex justify-center items-center">

                    {/* SVG Blob background flipped horizontally */}
                    <svg
                        width="180"
                        height="200"
                        viewBox="0 0 100 100"
                        className="absolute transform scale-x-[-1] transform rotate-[120deg] -ml-10 -mt-10" // rotate 90 degrees clockwise, flips horizontally
                    >
                        <path
                        d="M10,10 C50,0 80,20 70,50 C60,80 30,90 20,60 C10,30 20,10 30,10 Z"
                        fill="#F4B183" // primary color
                        />
                    </svg>

                    {/* Icon on top */}
                    <Image
                        src="/assets/icons/assistance.png"
                        width={1000}
                        height={1000}
                        alt="Hope and Support icon"
                        className="relative z-10 w-[5rem] h-[4rem]"
                    />

                </div>
                
            </div>
            
            <div className=" flex flex-col justify-between gap-[1rem] m-auto">
            
                {/* Content */}

                <div
                    className="w-fit mx-auto"
                >

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-primary">
                    H
                  </span>
                  <h3 className="text-lg font-bold text-primary">
                    Hope & Support
                  </h3>
                </div>

                </div>



            
                <p className="text-gray-700 leading-relaxed text-sm">
                  Build a supportive community that connects families, offers counselling, and bridges service providers with the public.
                </p>

                {/* CTA */}
                <div className=" text-center m-auto grid">
                    <SaveALife
                        link="#save_a_life_now"
                        text={"Support"}
                    />
                </div>
         


            </div>


            </motion.div>


        </div>
        


      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">


        {/* ================= BENEFICIARIES ================= */}
        <motion.div {...fadeUp} className="bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-2xl font-extrabold text-primary mb-6 text-center">
            Our Beneficiaries
          </h2>

          <ul className="grid gap-4 md:grid-cols-2 text-gray-700 text-lg">
            <li>• Children and adults diagnosed with congenital heart disease</li>
            <li>• Families and caregivers of affected children</li>
            <li>
              • Healthcare professionals in cardiac surgery, paediatric and adult
              cardiology
            </li>
            <li>
              • Researchers focused on cardiovascular and congenital heart health
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
