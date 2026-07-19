"use client";
import React from 'react';
import SaveALife from '../../Buttons/SaveALife';
import HeroImageGridSlider from './HeroImageGridSlider';

const ResearchInitiatives = () => {


  return (



    <>

    <div 
        id="ResearchInitiatives"
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
                  Research Initiatives
                </h1>

            </div>

            <div
                className=' px-3 grid gap-y-[1.7rem] w-[80%] mx-auto'
            >
                
                <div>

        
                <p 
                className="about" 
                >
                
                  Our research initiatives are designed to advance knowledge, improve clinical outcomes, and drive innovation in the prevention, diagnosis, and treatment of Congenital Heart Disease (CHD). We will work closely with universities, teaching hospitals, and medical research institutions to support studies that address critical gaps in pediatric cardiac care, particularly in low-resource settings.
                
                </p>

                </div>

                <div>
                
                <p 
                className="about" 
                >

                These initiatives will focus on early detection, improved surgical techniques, post-operative care, and long-term quality of life for CHD patients.
                </p>

                </div>


                <div>
                
                <p 
                className="about" 
                >

                By supporting data-driven research, clinical trials, and capacity-building programs, we aim to translate scientific findings into practical, life-saving solutions. Our commitment to research ensures continuous improvement in care delivery, informs policy development, and contributes to sustainable, locally relevant healthcare advancements.
                </p>

                </div>


                <div>
                
                <p 
                className="about" 
                >
                    <b>

                      Join us in transforming lives through research and innovation. Whether you’d like to partner, volunteer, or sponsor a research initiative, click <span className='text-[red]'>"complete the form"</span> below. Our team will connect with you to explore how we can make a meaningful impact—together.

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

export default ResearchInitiatives


