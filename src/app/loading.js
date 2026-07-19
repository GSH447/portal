"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    // Fixed inset full-screen overlay ensures perfect centering and eliminates shift bugs
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      
      <div className="relative flex items-center justify-center">
        
        {/* The Rolling Spinner Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.2,
            ease: "linear",
            repeat: Infinity,
          }}
          className="spinner-ring"
          style={{
            // Overriding or fallback styles to guarantee it can spin correctly
            borderTopColor: "#2A157c", 
          }}
        />

        {/* The Static Centered Logo Circle */}
        <div 
          className="absolute flex items-center justify-center rounded-full shadow-md select-none"
          style={{
            backgroundColor: "#2A157c",
            width: "56px",
            height: "56px",
          }}
        >
                          <Image
                            src="/assets/logo/siteLogo-nobg.png"
                            width={180}
                            height={60}
                            alt="Gracespring Hospitals"
                            className="w-32 sm:w-40 xl:w-48 h-auto object-contain"
                            priority
                          />
        </div>

      </div>

    </div>
  );
};

export default Loading;



// "use client";
// import { motion } from "framer-motion";

// const Loading = () => {
//   return (
//     // Clean, absolute full-screen backdrop to eliminate jumps or shifting
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      
//       {/* Instead of scaling the whole container to 0 (which snaps layout bounds),
//         we apply a smooth, continuous pulsation effect that runs gracefully.
//       */}
//       <motion.div
//         initial={{ opacity: 0.6, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ 
//           duration: 0.8, 
//           ease: "easeInOut", 
//           repeat: Infinity, 
//           repeatType: "reverse" 
//         }}
//         className="flex items-center justify-center"
//       >
//         <div className="loading-animation-container">
//           <div className="loading-content relative flex items-center justify-center">
//             <div className="spinner-ring"></div>
//             <div className="logo-g absolute font-extrabold text-primary">G</div>
//           </div>
//         </div>
//       </motion.div>

//     </div>
//   );
// };

// export default Loading;

// "use client";
// import { motion } from "framer-motion";

// const Loading = () => {
//   return (

//     <div className="h-screen flex gap-3 flex-col m-auto">

//       <div className="m-auto">


//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           exit={{ scale: 0 }}
//           transition={{ duration: 0.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
//           className="flex items-center justify-center h-screen"
//         >
//         <div className="loading-animation-container">
//           <div className="loading-content">
//             <div className="spinner-ring"></div>
//             <div className="logo-g">G</div>
//           </div>
//         </div>
//         </motion.div>

//       </div>

    
//     </div>

//   );
// }

// export default Loading;
