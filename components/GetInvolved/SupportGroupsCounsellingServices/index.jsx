"use client";
import React from 'react';
import SaveALife from '../../Buttons/SaveALife';
import HeroImageGridSlider from './HeroImageGridSlider';

const SupportGroupsCounsellingServices = () => {


  return (



    <>

    <div 
        id="SupportGroupsCounsellingServices"
        className=" w-full  lg:my-[7.15rem] mx-auto flex flex-col gap-6 lg:gap-10 items-center"
    >
      

      <div
        className='flex flex-col-reverse lg:flex-row justify-between w-full'
      >

        <div
          className=' lg:w-1/2 my-auto'
        >

            <div
                className=' grid gap-y-[1.7rem]'
            >

            <div className=" grid gap-3 py-3 px-2 w-fit m-auto text-[1.2rem] lg:text-[2.3rem]">
                <h1 className="font-bold my-auto h-fit ml-7">
                Support Groups & Counselling Services
                </h1>

            </div>

            <div
                className=' px-3 grid gap-y-[1.7rem] w-[80%] mx-auto'
            >
                
                <div>

        
                <p 
                className="about" 
                >
                
                    We will facilitate regular support group meetings for parents, caregivers, and families affected by CHD, providing a safe and supportive environment to share experiences, challenges, and coping strategies.
                
                </p>

                </div>

                <div>
                
                <p 
                className="about" 
                >

                In addition, families will have access to trained mental health professionals specializing in chronic illness and caregiver stress.
                </p>

                </div>


                <div>
                
                <p 
                className="about" 
                >

                These services are designed to address emotional well-being, reduce isolation, and strengthen resilience throughout the treatment and recovery journey.
                </p>

                </div>


                <div>
                
                <p 
                className="about" 
                >
                    <b>
                    we like you to be part of our support groups and couselling services, sponsor a group, or learn how you can support this mission, click <span className='text-[red]'>"complete the form"</span> below. Our team will reach out to you to explore how we can make a meaningful impact together.
                    </b>
                </p>

                </div>

            </div>

               
            <div
                className='ml-5'
            >
                
                <SaveALife
                text={"Complete the form"}
                />

            </div>
            
            </div>

        </div>
        
        <div
          className=' lg:w-1/2'
        >

     


          <div
            className=' grid lg:gap-7 lg:py-[2rem] px-2 w-[90%]  text-[0.8rem] lg:text-[1rem] text-justify m-auto '
          >
        
          
            <HeroImageGridSlider/>
           
          </div>
  

        </div>

      </div>

    </div>


        
    </>



  );
}

export default SupportGroupsCounsellingServices


