"use client";
import React from "react";
import { motion } from "framer-motion";
import DonationCard from "../Donation/DonationCard";
import LoveSymbol from "../Curves/love";
const MakeADifference = ({
  title,
  description,
  bgColor,
  textColor,
  subTextColor
}) => {


  return (
    <>

     <div
       className=" relative w-full overflow-hidden  pb-[4rem] lg:py-[12vh] px-2 lg:px-10 flex lg:flex-row flex-col justify-between lg:gap-[2em]"
       style={{backgroundColor: bgColor}}
     >

      
      <LoveSymbol
         size="love-lg"
         position="love-top-left"
       />

         <div className="lg:w-2/3 flex flex-col justify-between h-full gap-[1em] p-10 my-auto">
        
     
          {/* Content */}
          <div className="">
              <h3 
                className="text-[1.6rem] lg:text-[4rem] font-bold mb-2 text-left lg:w-[100%]"
                style={{color: textColor || "black"}}
              >
              
              {title}
              </h3>

          </div>

          {/* Content */}
          <div className="text-left">
            <p 
              className="lg:text-[1.5rem]"
              style={{color: subTextColor || "black"}}
            >
            
            {description}
            </p>
          </div>


         </div>

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
            <div className="relative m-auto lg:w-[70%] w-full">


              <DonationCard />

            </div>

          </motion.div>

        </div>

    </>
  );
};

export default MakeADifference;