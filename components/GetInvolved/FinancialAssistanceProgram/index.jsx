"use client";
import React from 'react';
import SaveALife from '../../Buttons/SaveALife';
import HeroImageGridSlider from './HeroImageGridSlider';

const FinancialAssistanceProgram = () => {


  return (



    <>

    <div 
        id="FinancialAssistanceProgram"
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
                Financial Assistance Program
                </h1>

            </div>

            <div
                className=' px-3 grid gap-y-[1.7rem] w-[80%] mx-auto'
            >
                
                <div>

        
                <p 
                className="about" 
                >
                
                    We established a grant system to provide support to families facing medical bills, diagnostic tests, medications, surgical procedures, travel expenses, and accommodation costs related to treatment of children with Congenital Heart Disease (CHD) who are burdened by the high cost of care.
                
                </p>

                </div>

                <div>
                
                <p 
                className="about" 
                >

                By easing these financial barriers, the program ensures that no child is denied life-saving care due to economic hardship.
                </p>

                </div>


                <div>
                
                <p 
                className="about" 
                >

                Our goal is to reduce the emotional and financial strain on families, allowing them to focus fully on their child’s recovery while promoting equitable access to quality cardiac care for all.
                </p>

                </div>


                <div>
                
                <p 
                className="about" 
                >
                    <b>
                    we like you to partner with us, volunteer, sponsor a cogential heart disease treatment, or learn how you can support this mission, click <span className='text-[red]'>"support Congenital heart disease treatment"</span> below. Our team will reach out to you to explore how we can make a meaningful impact together.
                    </b>
                </p>

                </div>

            </div>

               
            <div
                className='ml-5'
            >
                
                <SaveALife
                text={"Support Congenital heart disease treatment"}
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

export default FinancialAssistanceProgram


