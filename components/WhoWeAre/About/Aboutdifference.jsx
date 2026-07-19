"use client";
import Image from "next/image";

const Aboutdifference = () => {


  return (
    <div className="py-10 lg:w-fit lg:m-auto relative bg-[#FDF2EB] lg:pt-[3rem] lg:pb-[5rem]">


        <div 
          className=" grid gap-3 lg:gap-7 py-5 lg:py-10 "
        >

          
          <div className=" w-fit m-auto p-2">
            <h1
              className="text-primary text-center text-xl lg:text-[2.3rem] font-extrabold"
            >
              Together, we're making a difference
            </h1>
          </div>
          
          <div className=" lg:w-[50%] m-auto p-2">
            <p
              className="text-primary text-center font-bold"
            >
              Hundreds of passionate individuals make The Gracespring Health Foundation what it is today. Our work is only possible with your support. 
            </p>
          </div>

        </div>

        <div
          className=" grid gap-y-10 lg:flex p-3 lg:p-10"
        >

          <div className=" grid gap-y-[3rem]">
            
            <div className=" lg:w-[70%] m-auto">

              
              <div className="mb-2">
                <h1
                  className="text-primary text-center text-lg font-bold"
                >
                  Our supporters
                </h1>
              </div>
              
              <div className="">
                <p 
                  className="text-primary text-center"
                >
                  Our supporters make The Gracespring Health Foundation who we are. You're at the heart of everything we do and our work is possible thanks to you.   
                </p>
              </div>

            </div>

            
            <div className=" lg:w-[70%] m-auto">

              
              <div className="mb-2">
                <h1
                  className="text-primary text-center text-lg font-bold"
                >
                  Our volunteers
                </h1>
              </div>
              
              <div className="">
                <p
                  className="text-primary text-center"
                >
                  We rely on a network of hundreds of dedicated volunteers who support our fundraising.
                </p>
              </div>

            </div>

          </div>

          <div
            className=" hidden lg:flex"
          >

            <Image
              id="about_difference_image"
              src={"/assets/images/about/vmo.svg"}
              alt="about"
              className="lg:rounded-xl object-contain transition-opacity duration-500 my-auto"
              width={1000}
              height={1000}
              priority
            />


          </div>


          <div className=" grid gap-y-[3rem]">
            
            <div className=" lg:w-[70%] m-auto">

              
              <div className="mb-2">
                <h1
                  className="text-primary text-center text-lg font-bold"
                >
                  Our staff
                </h1>
              </div>
              
              <div className="">
                <p 
                  className="text-primary text-center"
                >
                  We're a team of dedicated staff, dedicated to raising over ₦500 million every year for The Gracespring Health Foundation.   
                </p>
              </div>

            </div>

            
            <div className=" lg:w-[70%] m-auto">

              
              <div className="mb-2">
                <h1
                  className="text-primary text-center text-lg font-bold"
                >
                  Our Trustees
                </h1>
              </div>
              
              <div className="">
                <p
                  className="text-primary text-center"
                >
                  We are governed by an independent Board of Trustees.
                </p>
              </div>

            </div>

          </div>

          <div
            className=" flex lg:hidden"
          >

            <Image
              id="about_difference_image"
              src={"/assets/images/about/vmo.svg"}
              alt="about"
              className="lg:rounded-xl object-contain transition-opacity duration-500 my-auto"
              width={1000}
              height={1000}
              priority
            />


          </div>

        </div>

    </div>
  );
};

export default Aboutdifference;

