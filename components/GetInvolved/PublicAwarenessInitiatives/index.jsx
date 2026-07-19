"use client";
import React from 'react';
import SaveALife from '../../Buttons/SaveALife';
import HeroImageGridSlider from './HeroImageGridSlider';

const PublicAwarenessInitiative = () => {


  return (



    <>

    <div 
        id="PublicAwarenessInitiatives"
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
                Public Awareness Initiatives
                </h1>

            </div>

            <div
                className=' px-3 grid gap-y-[1.7rem] w-[80%] mx-auto'
            >
                
                <div>

        
                <p 
                className="about" 
                >
                
                    We conduct outreach through events such as walks/runs, seminars, and social media campaigns to educate the public about Congenital Heart Disease (CHD).
                
                </p>

                </div>

                <div>
                
                <p 
                className="about" 
                >

                These efforts are designed to increase public understanding of Congenital Heart Disease (CHD), promote early detection, and encourage timely medical intervention.
                </p>

                </div>


                <div>
                
                <p 
                className="about" 
                >

                By bringing accurate information directly to people where they live, work, and interact online, we aim to break misinformation, reduce stigma, and inspire collective action toward saving children’s lives.
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

export default PublicAwarenessInitiative


