"use client";
import Image from "next/image";
import Link from "next/link";

const Vmo = () => {


  return (
    <div className="py-10 lg:w-fit lg:m-auto relative grid gap-y-[5rem]">


        <div
          className=" grid lg:flex"
        >

          
          <div
            className=" lg:w-1/2"
          >


            <div 
            className="grid gap-y-[1.4rem] lg:gap-y-[3rem] p-5 lg:px-[3rem]"
            >

            
            <div className="">
                <h1
                className="text-primary text-[1.8rem] lg:text-[2.3rem] font-extrabold leading-[2.2rem] lg:leading-[3rem]"
                >
                  Our vision, values and our commitment to you
                </h1>
            </div>
            
            <div className=" grid gap-4">
                <p
                className="text-primary font-bold leading-[1.5rem] "
                >
                We're a charity driven by our values of respect, kindness, ambition, versatility and purposefulness. Our values shape everything we do. We believe that by building genuine, lasting relationships with our supporters, together we'll fund more cancer research breakthroughs that will save lives everywhere.  
                </p>

                
                <p
                className="text-primary font-bold leading-[1.5rem]"
                >
                Every day you and others like you make a huge difference by supporting our work. When you support us, we make a promise to you.   
                </p>
            </div>

            <div
                className=""
            >
             <Link
                href="/what-we-do"
                className="inline-block bg-primary  px-5 lg:px-7 py-4 lg:py-3 rounded-full text-md text-white font-extrabold transition-colors duration-300 hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary"
              >
                What we do
              </Link>
            </div>

            </div>


          </div>
          
          <div
            className="lg:w-1/2"
          >
            <div
              className=""
            >
              <Image
                src={"/assets/images/donation/011.svg"}
                alt="about"
                className="lg:rounded-lg object-contain transition-opacity duration-500"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>

        </div>


        <div
          className=" grid lg:flex"
        >

          
          <div
            className="lg:w-1/2"
          >


            <div 
            className="grid gap-y-[1.4rem] lg:gap-y-[3rem] p-5 lg:px-[3rem]"
            >

            
            <div className="">
                <h1
                className="text-primary text-xl lg:text-[2.7rem] font-extrabold leading-[1.5rem] lg:leading-[4rem]"
                >
                
                    By donating to us, you're supporting the specialists making breakthroughs in cardiac treatment and care
                </h1>
            </div>

            </div>


          </div>
          
          <div
            className="lg:w-1/2"
          >


            <div 
            className="grid gap-y-[1.4rem] lg:gap-y-[2rem] p-5 lg:px-[3rem]"
            >

            
            <div className="">
                
                <p
                className="text-primary font-bold leading-[1.5rem]"
                >We work closely with The Gracespring Hospitals to ensure that donations are directed to where they are needed most. 
                </p>
            </div>
            
            <div className=" grid gap-4">
                <p
                className="text-primary font-bold leading-[1.5rem] "
                >
               Founded as an hospital to study and treat cardiac disease, The Gracespring Health Foundation continues to make breakthroughs happen. Together with its health research partner the Gracespring Hospitals, Nigeria (NG), The Gracespring Health Foundation is one of the leading comprehensive cardiac centres in the world. 
                </p>

            </div>


            <div className="">
                
                <p
                className="text-primary font-bold leading-[1.5rem]"
                >Every donation takes us a step closer to another life-saving breakthrough. 
                </p>
            </div>

            <div
                className=""
            >
             <Link
                href="/how-your-support-makes-a-difference"
                className="inline-block bg-primary  px-5 lg:px-7 py-4 lg:py-3 rounded-full text-md text-white font-extrabold transition-colors duration-300 hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary"
              >
                How your support makes a difference
              </Link>
            </div>

            </div>


          </div>
          
        </div>


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
                src={"/assets/images/donation/012.svg"}
                alt="about"
                className="lg:rounded-lg object-contain transition-opacity duration-500"
                width={1000}
                height={1000}
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
                src={"/assets/images/donation/010.svg"}
                alt="about"
                className="lg:rounded-lg object-contain transition-opacity duration-500"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>

        </div>

    </div>
  );
};

export default Vmo;

