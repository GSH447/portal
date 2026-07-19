"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Accordion = ({ accordionId, question, answer, isOpen, toggleAccordion }) => {  
  return (
    <div
      className={`lg:w-[70%] flex m-auto w-full duration-300 flex-col py-6 px-6 my-2 justify-center items-start rounded-lg border border-[#f3d9c7] ${
        isOpen ? "h-auto bg-primary text-white" : "h-auto min-h-[100px] bg-white text-black"
      }`}
    >
      <div
        onClick={() => toggleAccordion(accordionId)}
        className="w-full cursor-pointer flex flex-row gap-4 justify-between items-center select-none"
      >
        <p className="text-[16px] md:text-[18px] w-full font-bold leading-snug">
          {question}
        </p>
        <div className="flex flex-shrink-0 distribution-end items-end integration-wrapper">
          {isOpen ? (
            <div className="bg-white w-[42px] h-[42px] rounded-full flex items-center justify-center transition-colors duration-200">
              <Image 
                src="/assets/icons/arrow-down-primary.svg" 
                alt="Collapse" 
                width={20}
                height={20}
                className="w-[18px] h-[18px]"
              />
            </div>
          ) : (
            <div className="bg-[#5CB338] w-[42px] h-[42px] rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#e0bba3]">
              <Image 
                src="/assets/icons/right-arrow-black.svg" 
                alt="Expand" 
                width={20}
                height={20}
                className="w-[18px] h-[18px]"
              />
            </div>
          )}
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden w-full dynamic-content-box"
          >
            <p className="text-[15px] md:text-[15.5px] leading-relaxed opacity-95 pr-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;


// "use client";
// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// const Accordion = ({accordionId, question, answer, isOpen, toggleAccordion,}) => {  
  
//   return (


//     <div
//       className={`lg:w-[70%] flex m-auto w-full duration-300 flex-col py-10 px-5 my-4 justify-center items-start rounded-lg ${
//         isOpen ? "h-auto bg-[#E86512] text-white" : "h-[132px] bg-white text-black"
//       }`}
//     >

//       <div
//         onClick={() => toggleAccordion(accordionId)}
//         className='w-full cursor-pointer flex flex-row gap-3 rounded-md justify-between items-center'
//       >
//         <p className={`text-[15px] md:text-[18.687px] w-full font-bold`}>
//           {question}
//         </p>
//         <div className='flex mr-auto justify-end items-end'>
//           {isOpen ? (

//             <div className="bg-white w-[50px] h-[50px] hover:bg-[black] rounded-full  flex items-center justify-center">
//             <Image 
//               src={"/assets/icons/arrow-down-primary.svg"} 
//               alt="Arrow-doown" 
//               width={30}
//               height={30}
//               className=" w-[20px] h-[20px]"
//             />
//             </div>

//           ) : (
            

//             <div className="bg-[#F9D8C3] w-[50px] h-[50px] hover:bg-[black] rounded-full  flex items-center justify-center">
//               <Image 
//                 src={"/assets/icons/right-arrow-black.svg"} 
//                 alt="Arrow-right" 
//                 width={30}
//                 height={30}
//                 className="w-[20px] h-[20px]"
//               />
//             </div>

//           )}
//         </div>
//       </div>
      
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ type: "tween", duration: 0.5 }}
//             className='flex mt-2 flex-col w-full rounded-md justify-center items-start'
//           >
//             <p className='text-[15.29px] px-2 w-[90%]'>{answer}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//     </div>
//   );
// };

// export default Accordion;
