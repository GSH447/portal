"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DonationCard from "../../../Donation/DonationCard";
import LoveSymbol from "../../../Curves/love";
import Link from 'next/link';

const WaysToDonateSubsHero = ({
  bgImages,
  WDTitle,
  WDTitle1,
  WDTitle2,
  WDctalink,
  WDcatText
}) => {
    

  return (

    <>
    
    
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex items-center justify-center !min-h-[10rem]"
      >

      <motion.div className="absolute inset-0">
        <Image
          src={bgImages || "/assets/images/make-a-donation/donate-in-memory.png"}
          alt="Donation background"
          fill
          className="object-cover object-top mt-[9%]"
          priority
          // style={{ objectPosition: "top" }}
        />
      </motion.div>

        {/* ================= OVERLAY (Opacity Control) ================= */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      </section>

      <section className="rounded-[32px] gradient-bg mx-2 -mt-[28.5rem] lg:-mt-[9rem]">


        <div className=" container w-fit mx-auto rounded-[32px]  flex flex-col lg:flex-row nine20 lg:p-[3rem] p-[1rem] gap-2 custom-bg">


          <LoveSymbol
            size="love-xxl"
            position="love-center"
          />
          {/* <div className="right-circle" ></div> */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            // className=" animate_left lg:w-1/2 h-fit subscribeCTA"
            className=" animate_left lg:w-1/2 h-fit subscribeCTA mx-auto"
          >

              <div
                className="grid gap-10"
              >

                <div
                  className=""
                >
                  <h1 
                      className="relative text-4xl lg:text-6xl text-white lg:text-[#4966AA] "
                      style={{fontFamily: 'AvenirBold'}}
                  >
                    {WDTitle || "Save a Life"}
                  </h1>
                </div>
                
                <div
                  className=""
                >
                  
                  <p className="text-white lg:text-[#2A157C] text-[1.1rem] lg:text-[1.2rem] font-extrabold">
                    {WDTitle1 || "Donating for your loved one life, and supports people with cardiac at The Gracespring Health Foundation."}
                  </p>

                  <br/>
                  <br/>

                  
                  <p className="text-white lg:text-[#2A157C] text-[1.1rem] lg:text-[1.2rem] font-extrabold">
                    {WDTitle2 || "If you’re planning a funeral or memorial for a loved one, we can support you to collect donations in their memory, or set up a tribute page for your loved one."}
                  </p>

                </div>
                
                <div
                  className="flex"
                >
             
                  <Link
                  // href="#save_a_life_now"
                  href={WDctalink}
                  className="inline-block bg-primary px-5 lg:px-7 py-4 lg:py-3 rounded-full text-md text-white font-extrabold transition-colors duration-300 hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary w-fit"
                  >
                  <h1>
                    {WDcatText || "Get Started"}
                  </h1>
                  </Link>

                </div>

              </div>
           

          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className=" animate_right lg:w-1/2 m-auto subscribeCTA"
          >
            <div className="relative m-auto lg:w-[70%] w-full">


              <DonationCard />

            </div>

          </motion.div>

        </div>

      </section>

    </>
  );
};

export default WaysToDonateSubsHero;
