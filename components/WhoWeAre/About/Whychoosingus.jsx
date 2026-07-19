"use client";
import Link from "next/link";
import Image from "next/image";
import { whychoosingus } from "../../SiteMaps/data";
import { motion } from "framer-motion";

const Whychoosingus = () => {



  return (
    <div
      className='flex lg:px-[8%] bg-primary py-14 px-5 w-full mt-16 '
      id='whychoosingus'
    >
      <div className="lg:flex grid mx-auto w-full justify-between nine20">

        <div className="lg:w-[330px] my-auto lg:grid flex gap-2">
          <h1 className='lg:text-[40px] text-[24px] lg:text-left text-white font-bold tracking-wide'>
            Why
          </h1>
          <h1 className='lg:text-[40px] text-[24px] lg:text-left text-white font-bold tracking-wide'>
            Choose Us?
          </h1>
        </div>

        <div className="lg:flex gap-5">


          {/* {whychoosingus.map((item, index) => (

            <div key={index} className="lg:w-2/2 lg:w-[284px] lg:h-[327px] py-[10px] px-[20px] rounded-[1.5rem] bg-[#F5F5F5]">

            <div className="lg:h-[300px] grid">

              <div className="flex my-3">
                <p className="lg:text-[24px] text-[16px]" style={{fontFamily:"AvenirBold"}}>{item.title}</p>
              </div>

              <div className="flex lg:h-[150px] lg:overflow-y-auto">
                <p className="lg:text-[16px] text-[14px] leading-6">{item.description}</p>
              </div>

              <div className="flex justify-between cursor-pointer mt-5 w-[98px] hover:text-black">

                <div className=" flex">
                  <Link href={item.url} className="text-primary text-[14px] font-bold my-auto">More info</Link>
                </div>

                <div className=" flex">
                  <Image
                    src={'/assets/icons/arrow-right.svg'}
                    width={20}
                    height={20}
                    alt="arrow-right"
                    className="my-auto hover:bg-black"
                  />
                </div>

              </div>

            </div>

            </div>

          ))} */}



{whychoosingus.map((item, index) => (
  <div key={index} className="lg:w-1/2 lg:w-[284px] lg:h-[350px] py-[10px] px-[20px] rounded-lg bg-[#F5F5F5] mx-auto mb-2 sm:w-full">

    <div className="lg:h-[300px] grid">

      <div className="flex my-3">
        <p className="lg:text-[24px] text-[16px]" style={{fontFamily:"AvenirBold"}}>{item.title}</p>
      </div>

      <div className="flex lg:h-[180px] lg:overflow-y-auto custom-scroll-container">
        <p className="lg:text-[16px] text-[14px] leading-6">{item.description}</p>
      </div>

      <div className="flex  cursor-pointer mt-5 w-[98px] hover:text-black">

        <div className="flex p-2  hover:bg-black hover:rounded-[0.5rem] ">
          <Link href={item.url} className="text-primary text-[14px] font-bold my-auto flex justify-between cursor-pointer">
          <p  className="flex">More info</p>
        <div className="flex">
          <Image
            src={'/assets/icons/arrow-right.svg'}
            width={20}
            height={20}
            alt="arrow-right"
            className="my-auto"
          />
        </div>
          
          </Link>
        </div>


      </div>

    </div>

  </div>
))}

        </div>
        
      </div>



    </div>
  );
};

export default Whychoosingus;











