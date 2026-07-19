"use client";
import Image from "next/image";
import Link from "next/link";

const WhyWorkWithUs = () => {


  return (
    <div className="py-10 lg:w-fit lg:m-auto relative grid gap-y-[5rem]">


        <div
          className=" grid lg:flex"
        >

          
          <div
            className="lg:w-1/2"
          >
            <div
              className=""
            >
              <Image
                src={"/assets/images/about/vmo.svg"}
                alt="about"
                className="lg:rounded-lg object-contain transition-opacity duration-500"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>
          
          <div
            className=" lg:w-1/2"
          >


            <div 
            className="grid gap-y-[1.4rem] lg:gap-y-[3rem] p-5 lg:px-[3rem]"
            >

            
            <div className="">
                <h1
                className="text-primary text-xl lg:text-[2.3rem] font-extrabold leading-[1.5rem] lg:leading-[3rem]"
                >
                Why work with us?
                </h1>
            </div>
            
            <div className="lg:text-lg grid gap-4">
                <p
                className="text-primary font-semibold leading-[1.5rem] "
                >
                You can make a real difference to the lives of children with heart conditions by working with us. We are dedicated to providing free surgical care for these children in Nigeria, and your skills and expertise can help us achieve our mission.  
                </p>

                
                <p
                className="text-primary font-semibold leading-[1.5rem]"
                >
                Together we raise awareness, funds, and support to ensure these children receive the medical attention they need. By joining our team, you will be part of a passionate and dedicated group of individuals who are committed to making a positive impact in the lives of children and their families.   
                </p>
                
                <p
                className="text-primary font-semibold leading-[1.5rem]"
                >
                We're committed to creating a supportive and inclusive work environment where every team member can thrive and contribute to our mission.  
                </p>
            </div>

            <div
                className=" w-fit py-4 lg:py-3 flex gap-x-4"
            >
             <Link
                href="/who-we-are/about-us"
                className="inline-block bg-primary  px-5 lg:px-7 py-4 lg:py-3 rounded-full text-md text-white font-extrabold transition-colors duration-300 hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary"
              >
                What we do
              </Link>

              
             <Link
                href="/who-we-are/meet-the-team"
                className="inline-block bg-transparent  px-5 lg:px-7 py-4 lg:py-3 rounded-full text-md text-primary font-extrabold transition-colors duration-300 hover:bg-primary hover:text-white border-2 border-primary"
              >
                Meet the team
              </Link>
              
            </div>

            </div>


          </div>
          

        </div>




    </div>
  );
};

export default WhyWorkWithUs;

