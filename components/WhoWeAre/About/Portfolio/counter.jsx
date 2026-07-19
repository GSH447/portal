

"use client";
import React from 'react';

const Counter = () => {


  return (



    <div className='flex flex-col'>

        <div className='border border-[red]'>
            
            <div className='border border-[red] mb-[10em]'>

                <div className='border border-[red]  mx-auto w-fit'>
                    <p>Join other excellent business</p>
                </div>

                <div className='border border-[red] mx-auto pb-4 w-fit'>
                    <h1 className='text-[48px] font-extrabold' style={{fontFamily:"AvenirBold"}}>Our Business Portfolio</h1>
                </div>

                <div className='border border-[red] px-5'>
                    <p>Lorem ipsum dolor sit amet consectetur. Malesuada gravida potenti quis et nullam nunc tellus egestas phasellus. Gravida dictum quam tincidunt ut ullamcorper quam. Ligula interdum felis mi augue porta. Elit vitae eleifend duis a metus vitae habitant scelerisque.Lorem ipsum dolor sit amet consectetur. Malesuada gravida potenti quis et nullam </p>
                </div>

            </div>
            
            <div className='border border-[red] mb-10'>

                {/* <div className='absolute border-[5px] border-[green] w-[70%] h-[150px] rounded-full bg-[#FBE5D7] flex justify-evenly'> */}
                <div className='absolute -mt-[7em] left-1/2 -translate-x-1/2 w-[70%] h-[150px] rounded-full bg-[#FBE5D7] flex justify-evenly'>

                    <div className='border border-[blue] my-auto'>
                        <div className='border border-[blue] w-fit m-auto'>
                            <p className='text-[32px] font-extrabold' style={{fontFamily:"AvenirBold"}}>15+</p>
                        </div>

                        <div className='border border-[blue] w-[80%] m-auto'>
                            <p className='text-center'>Satisfied and Happy Businesses</p>
                        </div>
                    </div>
                    
                    <div className='border border-[blue] my-auto'>
                        <div className='border border-[blue] w-fit m-auto'>
                            <p className='text-[32px] font-extrabold' style={{fontFamily:"AvenirBold"}}>55+</p>
                        </div>

                        <div className='border border-[blue] w-[80%] m-auto'>
                            <p className='text-center'>Satisfied and Happy Businesses</p>
                        </div>
                    </div>
                    
                    <div className='border border-[blue] my-auto'>
                        <div className='border border-[blue] w-fit m-auto'>
                            <p className='text-[32px] font-extrabold' style={{fontFamily:"AvenirBold"}}>20+</p>
                        </div>

                        <div className='border border-[blue] w-[80%] m-auto'>
                            <p className='text-center'>Projects has been Delivered</p>
                        </div>
                    </div>


                </div>
                
                <div className='border border-[blue] w-full'>
                    <Image
                        src={"/assets/images/about/4.svg"}
                        alt='Portfolio'
                        width={1000}
                        height={1000}
                        className='h-[335px] border border-[red] w-full'
                    />
                </div>

            </div>

        </div>

        
    </div>



  );
}

export default Counter


