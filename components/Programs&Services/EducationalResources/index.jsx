"use client";
import React from 'react';
import SaveALife from '../../Buttons/SaveALife';
import HeroImageGridSlider from './HeroImageGridSlider';

const EducationalResources = () => {


  return (



    <>

    <div 
        id="EducationalResources"
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
                Educational Resources
                </h1>

            </div>

            <div
                className=' px-3 grid gap-y-[1.7rem] w-[80%] mx-auto'
            >
                
                <div>

        
                <p 
                className="about" 
                >
                
                  We will develop accessible and reliable educational resources, including printed brochures, digital materials, and a dedicated website, to provide comprehensive information on CHD.
                
                </p>

                </div>

                <div>
                
                <p 
                className="about" 
                >

                These resources will cover different types of congenital heart conditions, treatment options, post-surgery care, and practical coping strategies for families. By empowering caregivers with accurate knowledge, we aim to improve decision-making, promote early intervention, and enhance overall quality of care.
                </p>

                </div>


               

                <div>
                
                <p 
                className="about" 
                >
                    <b>
                    we like you to partner with us, volunteer, sponsor an outreach event, or learn how you can support this mission, click <span className='text-[red]'>"complete the form"</span> below. Our team will reach out to you to explore how we can make a meaningful impact together.
                    </b>
                </p>

                </div>

            </div>

               
            <div
                className='ml-5'
            >
                
                <SaveALife
                  link={"/contact-us#contact-form"}
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

export default EducationalResources


