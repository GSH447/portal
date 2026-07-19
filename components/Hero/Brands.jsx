"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { brands } from "../SiteMaps/data";

export default function Marq() {
  return (
    <>
      <Marquee
        direction='left'
        speed={60}
        delay={5}
        pauseOnHover={true}
        autoFill={true}
        className="flex h-full m-auto justify-center items-center"
      >
        {brands.map((marquee, i) => {
          return (
            <div
              key={(i + 1).toString()}
              className='image_wrapper w-[26px] h-full ml-10 justify-center items-center flex overflow-hidden'
            >
              <Image 
                src={marquee.img} 
                alt='brands' 
                width={100} 
                height={100} 
                className="h-[35px]"
            />
            </div>
          );
        })}
      </Marquee>
    </>
  );
}
