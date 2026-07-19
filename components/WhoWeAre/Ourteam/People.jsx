"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const blobShapes = "74% 26% 63% 37% / 45% 36% 64% 55%";
const PRIMARY_BG = "#FDF2EB";

export default function People() {
  return (
    <div
      className="relative w-full overflow-hidden mx-auto flex flex-col gap-2 lg:gap-10 items-center bg-slate-50 py-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative Frame */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase block mb-1">Medical Leadership</span>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Our People
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed text-justify">
              <p>
                Gracespring Hospitals Limited is guided by a credentialed leadership team and experienced clinical directors committed to driving premium medical integration across Lagos State. 
              </p>
              <p className="text-sm text-slate-500">
                Together, our consultants, surgeons, and nursing officers manage clinical operations with strict adherence to evidence-based healthcare paths, ensuring safety, dignity, and advanced recovery timelines for all cohorts.
              </p>
            </div>
          </div>

          {/* Right Aesthetic Asset Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div
              className="border-[0.4rem] border-slate-200/60 w-full max-w-[450px] overflow-hidden flex bg-white shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              style={{ borderRadius: blobShapes }}
            >
              <Image
                src="/assets/images/donation/001.svg"
                width={600}
                height={600}
                alt="Gracespring Healthcare Professionals"
                className="w-full h-[22rem] lg:h-[28rem] object-cover"
                style={{ borderRadius: blobShapes, objectPosition: "50% 10%" }}
              />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}



// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const blobShapes = [
//   "74% 26% 63% 37% / 45% 36% 64% 55% ",
// ];




// // const PRIMARY_BG = "#4a635a";
// const PRIMARY_BG = "#FDF2EB";

// const People = () => {


//   return (
//     <div
//       className=" relative w-full overflow-hidden  mx-auto flex flex-col gap-2 lg:gap-10 items-center"
//       style={{ backgroundColor: PRIMARY_BG }}
//     >



//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className=" relative z-10 mx-auto px-2 pt-[8rem] lg:pt-[11rem] lg:pb-[5rem]"
//       >
        
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className=" rounded-xl w-full mx-auto flex flex-col lg:flex-row  lg:gap-8 items-center px-2 lg:px-10"
//         >
//           {/* Left Content */}
//           <div className=" lg:w-1/2 flex flex-col justify-between h-full lg:gap-[1.2rem]">
            
//             {/* Content */}

//               <div >

//                 <h3 className="text-[1.7rem] lg:text-[2.5rem] font-bold text-primary mb-2 text-left w-[90%] lg:w-full">
//                   Our People
//                 </h3>
//               </div>

//               <div
//                 className="grid gap-y-5"
//               >

//                 <p className="text-md lg:text-xl text-primary text-left mb-5 lg:w-[80%]">
//                   We are a registered charity, governed by an independent Board of Trustees and a Managing Director. 
//                 </p>

//                 <p className="text-md lg:text-xl text-primary text-left mb-5 lg:w-[80%]">
//                   Together, we raise over ₦500 million every year to support groundbreaking research into life-saving cardiac treatments at The Gracespring Health Foundation.
//                 </p>

//               </div>


//           </div>

//           {/* Right Image Blob */}
//           <div className="lg:w-1/2 flex flex-col justify-between">
            
//             {/* Content */}
//             <div>

//               <div
//                 className="border-[0.4rem] border-primary w-full overflow-hidden flex ml-[0.5rem] py-2 mx-auto"
//                 style={{ borderRadius: blobShapes }}
//               >
//                 <Image
//                   src="/assets/images/donation/001.svg"
//                   width={1000}
//                   height={1000}
//                   alt="about-us-at-gracespring-health-foundation"
//                   className="lg:w-full h-[17rem] lg:h-[27rem] object-cover object-top"
//                   style={{ borderRadius: blobShapes, objectPosition: "50% 10%" }}
//                 />
//               </div>

//             </div>

//           </div>

//         </motion.div>

//       </motion.div>


//     </div>
//   );
// };

// export default People;