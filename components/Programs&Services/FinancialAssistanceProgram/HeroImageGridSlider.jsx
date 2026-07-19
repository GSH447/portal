"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowBigDown, ArrowBigRight } from "lucide-react";



// const images = {


//   col1: [
//     "/assets/images/programs-services/FinancialAssistanceProgram.png",
//     // "/assets/images/programs-services/003.svg",
//     // "/assets/images/programs-services/015.svg",
//   ],

//   // col2: [
//   //   "/assets/images/programs-services/care-03.png",
//   //   "/assets/images/programs-services/vmo.png",
//   //   "/assets/images/programs-services/014.svg",
//   // ],

//   //   col3: [
//   //   "/assets/images/programs-services/013.svg",
//   //   "/assets/images/programs-services/vmo.png",
//   //   "/assets/images/programs-services/009.svg",
//   // ],

//   // col4: [
//   //   "/assets/images/programs-services/011.svg",
//   //   "/assets/images/programs-services/010.svg",
//   //   "/assets/images/programs-services/012.svg",
//   // ],

// };



// const VerticalColumn = ({
//   items,
//   reverse = false,

// }) => (
//   <div className={`hero-grid-column-track ${reverse ? "reverse" : ""}`}>
//     {items.concat(items).map((src, i) => (
//       <Image
//         key={i}
//         src={src}
//         alt="Healthcare visual"
//         width={300}
//         height={400}
//         className="hero-grid-image"
//         priority
//       />
//     ))}
//   </div>
// );

const HeroImageGridSlider = () => {

  
  const [open, setOpen] = useState(false);

  return (


    <>
    
    <div>


      <div
        className=" "
      >

          <Image
            width={1000}
            height={1000}
            src={"/assets/images/programs-services/FinancialAssistanceProgram.png"}
            className=" w-full"
          />
      </div>

      <div
        className=" bg-primary rounded-b-lg shadow-lg"
      >

      <div className="bg-primary lg:rounded-b-lg shadow-lg">
            
            <button
              onClick={() => setOpen(!open)}
              className="w-full text-left text-xl font-extrabold px-10 py-5 focus:outline-none"
            >
              <div
                className="flex justify-between"
              >

                  
                <div
                  className="text-white"
                >
                  <h3>CHD Financial Assistance Program</h3>
                </div>
                
                <div
                  className="bg-white rounded-full p-2"
                >
                  <p className="text-primary">{open ? <ArrowBigDown/> : <ArrowBigRight/>}</p>
                </div>
                
              </div>

            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white text-sm px-10 py-2">
                We fund life-saving cardiac disease conditions research that helps diagnose
                cardiac disease earlier and provide better, more personalised treatments.
                We support clinicians, scientists, and researchers at Gracespring Hospitals
                and Health Foundation, as well as state-of-the-art equipment and technology.
              </p>
            </div>

          </div>
        {/* <div>
          <h3
        className=" text-white text-xl font-extrabold px-10 py-5"
          >
            CHD Financial Assistance Program
          </h3>
        </div>
        
        <div>
          <p
            className=" text-white text-sm px-10 py-2"
          >
            We fund life-saving cardiac disease conditions research that will help us diagnose cardiac disease earlier and provide better, more personalised treatments. We fund clinicians, scientists and researchers at The Gracespring Hospitals and Health Foundation as well as state-of-the-art equipment and technology needed for this research.
          </p>
        </div> */}

      </div>

    </div>

    </>
    // <section className="hero-grid-wrapper">
    //   {/* Edge fades */}
    //   <div className="hero-grid-fade-top" />
    //   <div className="hero-grid-fade-bottom" />

    //   <div className="hero-grid-track">
    //     <VerticalColumn items={images.col1} />
    //     {/* <VerticalColumn items={images.col2} reverse />
    //     <VerticalColumn items={images.col3} />
    //     <VerticalColumn items={images.col4} reverse /> */}
    //   </div>
    // </section>
  );
};

export default HeroImageGridSlider;


// "use client";

// import Image from "next/image";




// const images = {


//   col1: [
//     "/assets/images/programs-services/001.svg",
//     "/assets/images/programs-services/003.svg",
//     "/assets/images/programs-services/015.svg",
//   ],

//   col2: [
//     "/assets/images/programs-services/care-03.png",
//     "/assets/images/programs-services/vmo.png",
//     "/assets/images/programs-services/014.svg",
//   ],

//     col3: [
//     "/assets/images/programs-services/013.svg",
//     "/assets/images/programs-services/vmo.png",
//     "/assets/images/programs-services/009.svg",
//   ],

//   col4: [
//     "/assets/images/programs-services/011.svg",
//     "/assets/images/programs-services/010.svg",
//     "/assets/images/programs-services/012.svg",
//   ],

// };



// const VerticalColumn = ({
//   items,
//   reverse = false,

// }) => (
//   <div className={`hero-grid-column-track ${reverse ? "reverse" : ""}`}>
//     {items.concat(items).map((src, i) => (
//       <Image
//         key={i}
//         src={src}
//         alt="Healthcare visual"
//         width={300}
//         height={400}
//         className="hero-grid-image"
//         priority
//       />
//     ))}
//   </div>
// );

// const HeroImageGridSlider = () => {
//   return (
//     <section className="hero-grid-wrapper">
//       {/* Edge fades */}
//       <div className="hero-grid-fade-top" />
//       <div className="hero-grid-fade-bottom" />

//       <div className="hero-grid-track">
//         <VerticalColumn items={images.col1} />
//         <VerticalColumn items={images.col2} reverse />
//         <VerticalColumn items={images.col3} />
//         <VerticalColumn items={images.col4} reverse />
//       </div>
//     </section>
//   );
// };

// export default HeroImageGridSlider;








// "use client";

// import Image from "next/image";


// const images = {
//   col1: ["/assets/images/programs-services/001.svg", "/assets/images/programs-services/002.svg"],
//   col2: [
//     "/assets/images/programs-services/001.svg",
//     "/assets/images/programs-services/002.svg",
//     "/assets/images/programs-services/003.svg",
//   ],
//   col3: [
//     "/assets/images/programs-services/001.svg",
//     "/assets/images/programs-services/002.svg",
//     "/assets/images/programs-services/003.svg",
//   ],
//   col4: ["/assets/images/programs-services/001.svg", "/assets/images/programs-services/002.svg"],
// };

// const GridBlock = () => (
//   <div className="hero-grid-block">
//     {/* Column 1 */}
//     <div className="hero-grid-column">
//       {images.col1.map((src, i) => (
//         <Image
//           key={i}
//           src={src}
//           alt="Healthcare visual"
//           width={300}
//           height={400}
//           className="hero-grid-image"
//           priority
//         />
//       ))}
//     </div>

//     {/* Column 2 */}
//     <div className="hero-grid-column">
//       {images.col2.map((src, i) => (
//         <Image
//           key={i}
//           src={src}
//           alt="Healthcare visual"
//           width={300}
//           height={400}
//           className="hero-grid-image"
//           priority
//         />
//       ))}
//     </div>

//     {/* Column 3 (offset for rhythm) */}
//     <div className="hero-grid-column offset">
//       {images.col3.map((src, i) => (
//         <Image
//           key={i}
//           src={src}
//           alt="Healthcare visual"
//           width={300}
//           height={400}
//           className="hero-grid-image"
//           priority
//         />
//       ))}
//     </div>

//     {/* Column 4 */}
//     <div className="hero-grid-column">
//       {images.col4.map((src, i) => (
//         <Image
//           key={i}
//           src={src}
//           alt="Healthcare visual"
//           width={300}
//           height={400}
//           className="hero-grid-image"
//           priority
//         />
//       ))}
//     </div>
//   </div>
// );

// const HeroImageGridSlider = () => {
//   return (
//     <section className="border-2 border-[green] hero-grid-wrapper">
//       {/* Edge fades */}
//       <div className=" hero-grid-fade-left" />
//       <div className="border-2 border-[pink] hero-grid-fade-right" />

//       {/* Sliding content */}
//       <div className="border-2 border-[blue] hero-grid-track">
//         <GridBlock />
//         <GridBlock /> {/* duplicate for seamless loop */}
//       </div>
//     </section>
//   );
// };

// export default HeroImageGridSlider;
