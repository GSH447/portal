"use client";
import React from "react";
import { motion } from "framer-motion";
import DonationCard from "../../Donation/DonationCard";
import LoveSymbol from "../../Curves/love";
const CTA = () => {


  return (
    <>

      <section className="rounded-[32px] gradient-bg mx-2 my-5">


        <div className=" container w-fit mx-auto rounded-[32px]  flex flex-col-reverse lg:flex-row nine20 lg:p-[3rem] p-[1rem] gap-2 custom-bg">


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
                className=" grid gap-2"
              >

                <div
                  className=""
                >
                  <h1 
                      className="relative text-4xl lg:text-6xl text-[#4966AA] "
                      style={{fontFamily: 'AvenirBold'}}
                  >
                    Saving the <i>lives</i> of children born with heart conditions <i>everywhere</i>
                  </h1>
                </div>
                
                <div
                  className=""
                >
                  
                  <h3 className="text-[#2A157C ] text-[1.1rem] lg:text-[1.5rem] font-extrabold">
                    Your donations directly fund life-saving heart surgeries, strengthen pediatric cardiac care, and give Nigerian children born with heart conditions a chance to live full, healthy lives.
                  </h3>

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

export default CTA;
