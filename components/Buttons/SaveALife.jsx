"use client";
import React from 'react';
import Link from 'next/link';

const SaveALife = ({
    text, 
    link
}) => {


  return (



    <>

        <div
            className="grid gap-2 p-2"
        >
            
            {/* <Link
            href="#save_a_life_now"
            className="inline-block bg-primary  px-5 lg:px-7 py-4 lg:py-3 rounded-sm text-sm text-white font-extrabold transition-colors duration-300 hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary"
            >
            <h5>We invite you, our healthcare providers, community leaders, and generous donors to stand with us in this life-saving mission. Together, we can give children living</h5>
            </Link> */}

            <Link
            // href="#save_a_life_now"
            href={link}
            className="inline-block bg-primary mx-[2rem] px-5 lg:px-7 py-4 lg:py-3 rounded-full text-md text-white font-extrabold transition-colors duration-300 hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary w-fit"
            >
            <h1>{text}</h1>
            </Link>
        </div>

        
    </>



  );
}

export default SaveALife





