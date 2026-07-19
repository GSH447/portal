"use client";
import React from "react";
import LoveSymbol from "../../Curves/love";
import Image from "next/image";import { motion } from "framer-motion";
import DonationCard from "../../Donation/DonationCard";
import SubscribeForm from "../../Subscribe";

const SubscribeCTA = () => {


  return (
    <>

     <div
      id="save_a_life_now"
       className="relative w-full overflow-hidden bg-[#d77dbf] pt-[3rem] lg:pt-[10rem] px-5 lg:px-10 flex lg:flex-row flex-col-reverse justify-between lg:gap-[2em]"
     >
        <svg
          viewBox="0 0 1440 160"
          className="absolute top-0 left-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="
              M0,80
              C360,40 720,40 1080,80
              S1440,120 1440,80
              L1440,0
              L0,0
              Z
            "
          />
        </svg>

       <LoveSymbol
         size="love-lg"
         position="love-top-right"
       />
       
             <LoveSymbol
                size="love-xxl"
                position="love-bottom-right"
              />
         <div className="lg:w-2/3 flex flex-col justify-between h-full gap-[1em] lg:p-10 my-auto">
        
          {/* Content */}
          <div className="text-left pt-2">
            <Image
                src="/assets/icons/megaphone.png"
                width={1000}
                height={1000}
                alt="ok"
                className="w-[30%] lg:w-[20%] h-full object-cover"
            />
          </div>

          <SubscribeForm/>

         </div>
       <LoveSymbol
         size="love-sm"
         position="love-top-left"
         className="hidden lg:block"
       />
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
            className="animate_right lg:w-1/3 m-auto subscribeCTA"
          >
            <div className="bg-white py-10 lg:p-10 relative m-auto w-full rounded-lg">

              <h2
                  className="text-[1.3rem] lg:text-[2rem] px-6 lg:p-1 font-bold lg:font-extrabold"
              >

                  Donate now and help us save more lives

              </h2>

              <DonationCard />

            </div>

          </motion.div>

      </div>

    </>
  );
};

export default SubscribeCTA;