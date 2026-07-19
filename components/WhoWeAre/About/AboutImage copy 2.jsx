"use client";
import Image from "next/image";

const AboutImage = () => {


  return (
    <div className="lg:w-fit lg:m-auto relative">

        <div
          className=" flex"
        >

          <div
            className=" h-[80%] my-auto lg:p-2 p-1"
          >
            <div
              className="flex justify-end"
            >
              <Image
                src={"/assets/images/about/col1/1.svg"}
                alt="about"
                className="rounded-xl object-contain w-[80%] transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />
            </div>

            <div>

              <Image
                src={"/assets/images/about/col1/2.svg"}
                alt="about"
                className="rounded-xl object-contain w-full transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />

            </div>
            
          </div>

          <div
            className=" lg:p-2 p-1"
          >
            <div>
              <Image
                src={"/assets/images/about/col2/1.svg"}
                alt="about"
                className="rounded-xl object-contain w-full transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />
            </div>

            <div>

              <Image
                src={"/assets/images/about/col2/2.svg"}
                alt="about"
                className="rounded-xl object-contain w-full transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />

            </div>
            
            <div>

              <Image
                src={"/assets/images/about/col2/3.svg"}
                alt="about"
                className="rounded-xl object-contain w-full transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />

            </div>
            
          </div>
          
          <div
            className="lg:p-2 p-1 mt-4"
          >
            <div>
              <Image
                src={"/assets/images/about/col3/1.svg"}
                alt="about"
                className="rounded-xl object-contain lg:w-[100%] w-full  transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />
            </div>

            <div>

              <Image
                src={"/assets/images/about/col3/2.svg"}
                alt="about"
                className="rounded-xl object-contain lg:w-[100%] w-full  transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />

            </div>
            
            <div>

              <Image
                src={"/assets/images/about/col3/3.svg"}
                alt="about"
                className="rounded-xl object-contain lg:w-[100%] w-full  transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />

            </div>
            
          </div>
          
          <div
            className=" h-[80%] my-auto lg:p-2 p-1"
          >
            <div>
              <Image
                src={"/assets/images/about/col4/1.svg"}
                alt="about"
                className="rounded-xl object-contain w-full  transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />
            </div>

            <div
              className="flex justify-start"
            >

              <Image
                src={"/assets/images/about/col4/2.svg"}
                alt="about"
                className="rounded-xl object-contain w-[80%] transition-opacity duration-500 my-auto"
                width={100}
                height={100}
                priority
              />

            </div>
            
          </div>

        </div>

    </div>
  );
};

export default AboutImage;

