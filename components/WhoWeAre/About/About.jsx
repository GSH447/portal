"use client";
import React from 'react';
import SaveALife from '../../Buttons/SaveALife';

const About = () => {


  return (



    <>

    <div className=" w-full  lg:my-[3.15rem] mx-auto flex flex-col gap-6 lg:gap-10 items-center">
      

      <div
        className=' lg:flex justify-between w-full'
      >

        <div
          className=' lg:w-1/2'
        >
          {/* <div className=' grid gap-3 py-3 px-2 w-fit lg:m-auto text-[1.2rem] lg:text-[2.3rem] '>
            <h1 
              className='font-bold my-auto h-fit ml-7'>
              Today, in the Nigeria
            </h1>
            <h1 
              className='font-bold my-auto h-fit ml-7'>
              someone is diagnosed with
            </h1>
            <h1 
              className='font-bold my-auto h-fit ml-7'>
              cardiac <i className='text-primary'>disease every 90 seconds</i>
            </h1>

            <p>
              Ms. Coralie
            </p>

            <p>
              Cardiac arrest survivour
            </p>
          </div> */}

          <div className="grid gap-3 py-3 px-2 w-fit lg:m-auto text-[1.2rem] lg:text-[2.3rem]">
            <h1 className="font-bold my-auto h-fit ml-7">
              “Today in Nigeria,
            </h1>

            <h1 className="font-bold my-auto h-fit ml-7">
              someone is diagnosed with
            </h1>

            <h1 className="font-bold my-auto h-fit ml-7">
              cardiac disease <i className="text-primary">every 90 seconds</i>”
            </h1>

            <p className="text-base lg:text-lg text-gray-600 mt-4 ml-7">
              — Ms. Coralie
            </p>

            <p className="text-sm lg:text-base text-gray-500 ml-7">
              Cardiac arrest survivor
            </p>
          </div>

        </div>
        
        <div
          className=' lg:w-1/2'
        >
          <div
            className=' grid lg:gap-7 lg:py-[2rem] px-2 w-[90%]  text-[0.8rem] lg:text-[1rem] text-justify m-auto '
          >
            
            <p 
              className="about" 
            >
              <b>
                That’s more than 1,000 people, every day, hearing the devastating news they have cardiac disease
              </b>

            </p>
            
            <p 
              className="about" 
            >

              We believe that through funding life-saving research and supporting world-leading treatment and care at The Gracespring Hospitals, we can save the lives of people with cardiac disease everywhere.
            </p>
            
            <p 
              className="about" 
            >
              The current statistics on CHD in Nigeria expose a critical and urgent need: stronger healthcare infrastructure, better-informed clinicians and families, wider access to accurate diagnostics, and an urgent expansion of paediatric cardiac surgical capacity.
            </p>
            
            <p 
              className="about" 
            >
              These are not optional improvements—they are essential steps toward saving lives. By addressing these gaps with commitment and collective action, we can transform outcomes and secure a healthier future for every child born with a congenital heart defect in Nigeria.
            </p>
          
           
          </div>
          
          <div>
            
            <SaveALife
              link="#save_a_life_now"
              text={"Donate now and save a lives"}
            />

          </div>

        </div>

      </div>

    </div>


        
    </>



  );
}

export default About


