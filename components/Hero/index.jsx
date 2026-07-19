"use client";
import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import Marq from "./Brands";
import Image from "next/image";

const Hero = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const handleFastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const handleVolumeChange = (e) => {
    if (videoRef.current) {
      videoRef.current.volume = e.target.value;
    }
  };

  return (

    <>
    <div className="bg-white px-8 pb-[8%] flex flex-col lg:flex-row items-center justify-between m-auto mt-[6em]">

      <div className="mx-auto lg:flex gap-[80px]">

      {/* Left Section - Text */}
      <div className="lg:w-1/2 text-left ">

        {/* Headline */}
        <motion.h1
          className="lg:text-[81px] text-[30px] font-extrabold tracking-tight leading-tight mt-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease:"easeInOut" }}
          style={{fontFamily:"AvenirBold"}}
          // style={{fontFamily:"AvenirBold", letterSpacing:"0.05em",}}
        >
          We’re here to make  <br /> 
          your business <br /> 
          Productive & work
        </motion.h1>


        {/* Decorative Underline Full-Width Bold Curvy Underline with Primary Color */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          className="w-full h-16 mx-auto"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        >
          <path
            // d="M 0,25 Q 50,0 100,25"
            d="M -10,25 Q 50,-20 105,25" // Adjusted control point for more curvature
            fill="transparent"
            stroke="currentColor" // Use `text-primary` for color
            strokeWidth="8" // Much bolder stroke
            className="text-primary" // Apply Tailwind's text-primary for color
          />
        </motion.svg>


        {/* Description */}
        <motion.p
          className="text-gray-600 w-[100%] sm:w-[600px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease:"easeInOut" }}
        >
          In a world where private equity firms are often beholden to investors and limited by traditional funding models, we're breaking the mold. Heelheid Business Acquisition And Management Company is a bold new kind of private equity firm, one that's fully bootstrapped and laser-focused on acquiring, managing, and building tech startup businesses that are destined for greatness.
          
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          className="bg-primary hover:bg-black text-white font-semibold py-4 px-8 rounded-lg shadow-md mt-3 flex gap-3 lg:w-fit w-full justify-center mt-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease:"easeInOut" }}
        >

          <p>View Demo</p>

          <Image
            src={'/assets/icons/play.svg'}
            width={20}
            height={20}
            alt="View-Demo"
            className="my-auto bg-white rounded-[100%] p-1"
          />
        </motion.button>

        {/* Trusted Companies Section */}
        <div className="flex mt-8 text-center text-left w-[600px]">

          <div className="pr-3">
            <p className="text-[16px] text-left">Trusted by <br/> leading companies</p>
          </div>

          <div className="flex justify-center lg:justify-start lg:w-[400px]  marq">
            <Marq/>
          </div>

        </div>

      </div>

      {/* Right Section - Images and Icons */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4 mt-8 pl-[10%] lg:mt-0 hero-right-lg ">

        {/* Image 1 */}

          <motion.div
            className="relative w-fit h-fit lg:mx-auto "
            initial={{ opacity: 0, y: -50 }} // Start 50px above
            animate={{ opacity: 1, y: 0 }}  // Move to original position
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth slide-in effect
          >
          {/* Image */}
          <div className="relative">
            <Image
              src={"/assets/images/hero/hero-1.svg"}
              alt="Professional Woman"
              className="rounded-lg w-full h-full" // Match dimensions for styling
              width={300}
              height={300}
              priority
            />
            {/* Text Positioned Over the Image */}

          {/* Outer Transparent Box */}
          <div className="absolute flex items-center px-1 py-1 justify-center lg:w-[185px] w-[100px] lg:bottom-[2em] bottom-[1.45em] lg:-ml-6 -ml-2 transform -translate-x-1/2 bg-gradient-to-r from-white/50 via-white/70 to-white/50 rounded-lg shadow-lg">
          
            {/* Inner Solid Box */}
            <div className="relative lg:px-10 px-4 lg:py-3 bg-white rounded-lg shadow-lg">
            <a href="#" className="text-black lg:text-[16px] text-[10px]">Coaching</a>
            </div>
            
          </div>

          </div>
        </motion.div>


        {/* Image 2 */}
        <motion.div
          className="p-4 lg:-ml-10 -ml-5 mt-10 "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease:"easeInOut" }}
        >
          <Image 
            src={"/assets/images/hero/hero-lines.svg"} 
            alt="heelheidbusiness.com" 
            className="hero-lines rounded-lg bg-cover w-full h-full relative transform -translate-x-1/2 -mt-[2rem] " 
            width={100}
            height={100}
          />

          <div className="hero-lines-button flex items-center px-1 py-1 justify-center lg:w-[185px] w-[100px] bg-gradient-to-r from-white/50 via-white/70 to-white/50 rounded-lg shadow-lg lg:-mt-[2rem]">
          
          {/* Inner Solid Box */}
          {/* <div className="relative px-10 py-3 bg-white rounded-lg shadow-lg">
            <a href="#" className="text-black font-medium">Lorem Ipsum</a>
          </div> */}
          
            <div className="relative lg:px-10 px-4 lg:py-3 bg-white rounded-lg shadow-lg">
              <a href="#" className="text-black lg:text-[16px] text-[10px]">Early Startup</a>
            </div>
          </div>
          
        </motion.div>

        {/* Image 3 */}
        <motion.div
          className="p-4 lg:w-[324px] w-[186px] lg:-ml-[7em] -ml-[2em] -mt-[3em] "

          initial={{ opacity: 0, y: 50 }} // Start lower
          animate={{ opacity: 1, y: 0 }}  // Slide up
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
        >
          <Image
            src={"/assets/images/hero/hero-2.svg"}
            alt="Analytics Chart"
            className="rounded-lg  w-full h-full"
            width={100}
            height={100}
          />
          
          
          <div className="flex items-center px-1 py-1 justify-center lg:w-[185px] w-[100px] bg-gradient-to-r from-white/50 via-white/70 to-white/50 rounded-lg shadow-lg lg:-mt-[3rem] -mt-[2rem]">
          
          {/* Inner Solid Box */}
        <div className="relative lg:px-10 px-4 lg:py-3 bg-white rounded-lg shadow-lg">
            <a href="#" className="text-black lg:text-[16px] text-[10px]">Business</a>
          </div>
          
        </div>
        </motion.div>
        
        {/* Image 4 */}
        <motion.div
          className="p-4 lg:w-[236px] "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 , ease:"easeOut"}}
        >
          <Image
            src={"/assets/images/hero/hero-3.svg"}
            alt="Analytics Chart"
            className="rounded-lg -mt-[5rem] lg:-ml-[5rem] -ml-[2rem] lg:w-full lg:h-full w-auto h-auto"
            width={100}
            height={100}
          />
        </motion.div>

      </div>

      </div>
      
    </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden lg:w-[1099px] w-full relative">
            {/* Close Button */}
            <button
              className="absolute right-1 text-black text-4xl"
              // onClick={() => setIsOpen(false)}
              onClick={() => {
                setIsOpen(false);
                setIsPlaying(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              }}
            >
              &times;
            </button>
            
            {/* Video Embed */}
            <div className="relative w-[90%] h-[469px] mx-auto  my-10">
              {/* <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video link
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}

              {/* <video className="w-full h-full" controls>
                <source src="/assets/videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}


            {/* Custom Video Player */}
            <div className="relative w-full h-[500px] flex items-center justify-center bg-black">
              {/* <video className="w-full h-full object-cover rounded-lg" autoPlay muted controlsList="nodownload noremoteplayback nofullscreen"> */}

              <video ref={videoRef} className="w-full h-full object-cover rounded-lg" controlsList="nodownload noremoteplayback nofullscreen">
             

                <source src="/assets/videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Custom Play Button */}
              {/* <button 
                className="absolute play-button bg-white bg-opacity-75 p-4 rounded-full shadow-md hover:bg-opacity-100"
                onClick={togglePlayPause}
                >
                <Image 
                  src={isPlaying ? '/assets/icons/pause.svg' : '/assets/icons/play.svg'}
                  width={50} 
                  height={50} 
                  alt={isPlaying ? 'Pause Video' : 'Play Video'} 
                />

              </button> */}


              {/* Custom Controls */}
              <div className="absolute bottom-4 flex gap-4 bg-gray-900 bg-opacity-75 p-3 rounded-xl">
                <button className="text-white" onClick={handleRewind}>⏪</button>
                <button className="text-white" onClick={togglePlayPause}>
                  
                <Image 
                  src={isPlaying ? '/assets/icons/pause.svg' : '/assets/icons/play.svg'}
                  width={50} 
                  height={50} 
                  alt={isPlaying ? 'Pause Video' : 'Play Video'} 
                />

                </button>
                <button className="text-white" onClick={handleFastForward}>⏩</button>
                <input type="range" min="0" max="1" step="0.1" className="volume-slider" onChange={handleVolumeChange} />
              </div>

            </div>



            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Hero;
