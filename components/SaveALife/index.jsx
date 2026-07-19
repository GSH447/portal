"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";



const SaveALife = ({ save_a_life = [] }) => {
  return (
    <div id="services-container " className=" lg:py-10 lg:px-10">

        <h2
            className="text-[1.4rem] lg:text-[2.3rem] font-bold text-black mb-2 text-left lg:w-[60%] pt-[2.5rem] px-[2.5rem]"
        >
            Help us to save the lives of more people affected by Cardiac disease. 
        </h2>

      <div className=" lg:grid lg:grid-cols-3 gap-5 lg:py-5" id="services-card">
        {save_a_life.map((item, index) => {

          return (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="services-box w-full p-6 flex flex-col justify-between"

            >
              {/* Image */}
              <div className="flex justify-center mb-5">
                <div
                  className="w-[100%] h-64 overflow-hidden"
                >
                  <Image
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover object-top rounded-lg"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-left flex-1">
                <h3 className="lg:text-[22px] text-[18px] font-bold text-primary mb-2">
                  {item.title}
                </h3>

                <p className="text-[15px] text-primary mb-5">
                  {item.description}
                </p>
              </div>

              {/* CTA */}
              <div className="text-left">
                <Link
                  href={item.url}
                  className="inline-block border-2 border-primary hover:bg-primary px-5 py-2 rounded-full text-[15px] text-primary hover:text-white font-extrabold transition-colors duration-300"
                >
                  {item.btnText || "Learn More"}
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SaveALife;