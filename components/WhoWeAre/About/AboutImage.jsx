"use client";
import Image from "next/image";

const AboutImage = () => {


  return (
    <div className=" lg:w-fit lg:m-auto relative">

        <div
          className=" flex"
        >

          
          <div
            className=""
          >
            <div
              className=""
            >
              <Image
                src={"/assets/images/about/others/003.svg"}
                alt="about"
                className="rounded-lg object-contain transition-opacity duration-500"
                width={1000}
                height={500}
                priority
              />
            </div>

          </div>
          
          <div
            className=" my-auto"
          >
            <div
              className=" mt-10 lg:mt-[5rem]"
            >
              <Image
                src={"/assets/images/about/others/005.svg"}
                alt="about"
                className="rounded-lg object-contain transition-opacity duration-500"
                width={1000}
                height={500}
                priority
              />
            </div>
          </div>

        </div>

    </div>
  );
};

export default AboutImage;

