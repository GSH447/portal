

"use client";
import React from 'react';

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
          <div className=' grid gap-3 py-3 px-2 w-fit lg:m-auto text-[1.2rem] lg:text-[2.3rem] '>
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
            One in two of us will likely receive a diagnosis in our lifetime. Cardiac disease touches every family, every generation, and every community, which means we need breakthroughs in cardiac disease research more than ever before.
          </p>
          
          </div>
        </div>

      </div>

    </div>


        
    </>



  );
}

export default About


