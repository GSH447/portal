"use client";
import React from 'react';
import SaveALife from '../../Buttons/SaveALife';
import HeroImageGridSlider from './HeroImageGridSlider';

const ResearchFunding = () => {


  return (



    <>

    <div 
        id="ResearchFunding"
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

              <div className="grid gap-3 py-3 px-2 w-fit m-auto text-[1.2rem] lg:text-[2.3rem]">
                  <h1 className="font-bold my-auto h-fit ml-7">
                      Research Funding
                  </h1>

              </div>

              <div
                  className=' px-3 grid gap-y-[1.7rem] w-[80%] mx-auto'
              >
                  
                  <div>

          
                  <p 
                  className="about" 
                  >
                  
                      We will actively collaborate with universities, teaching hospitals, and medical research institutions to fund and support research focused on innovative treatments, early diagnosis, and long-term management of Congenital Heart Disease (CHD).
                  
                  </p>

                  </div>

                  <div>
                  
                  <p 
                  className="about" 
                  >

                  By investing in evidence-based research and emerging medical technologies, we aim to improve treatment outcomes, reduce mortality rates, and contribute to global advancements in pediatric cardiac care.
                  </p>

                  </div>


                  <div>
                  
                  <p 
                  className="about" 
                  >

                  These collaborations will also promote knowledge sharing, capacity building, and the development of locally relevant solutions.
                  </p>

                  </div>


                  <div>
                  
                  <p 
                  className="about" 
                  >
                      <b>
                      we like you to partner with us, volunteer, sponsor a Congenital heart disease research, or learn how you can support this mission, click <span className='text-[red]'>"Sponsor a research"</span> below. Our team will reach out to you to explore how we can make a meaningful impact together.
                      </b>
                  </p>

                  </div>

              </div>

                
              <div
                  className='ml-5'
              >
                  
                  <SaveALife
                    link="/contact-us#contact-form"
                    text={"Complete the form"}
                  />

              </div>
            
            </div>

        </div>
        
        <div
          className=' lg:w-1/2'
        >

     


          <div
            className=' grid lg:gap-7 lg:py-[2rem] lg:px-2 lg:w-[90%]  text-[0.8rem] lg:text-[1rem] text-justify m-auto '
          >
        
          
            <HeroImageGridSlider/>
           
          </div>
  

        </div>

      </div>

    </div>


        
    </>



  );
}

export default ResearchFunding


