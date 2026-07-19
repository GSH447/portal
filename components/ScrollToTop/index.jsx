import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) { // reduced for testing
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="fixed bottom-[1rem] right-0 z-50 flex cursor-pointer items-center justify-center bg-primary text-white shadow-md transition duration-300 hover:bg-opacity-80 p-2 text-sm"
        >

          Back to the top
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 10.707a1 1 0 010-1.414L9 3.586a1 1 0 011.414 0l5.707 5.707a1 1 0 11-1.414 1.414L10 6.414 4.707 10.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </>
  );
}








// import { useEffect, useState } from "react";

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Top: 0 takes us all the way back to the top of the page
//   // Behavior: smooth keeps it smooth!
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     // Button is displayed after scrolling for 500 pixels
//     const toggleVisibility = () => {
//       if (window.scrollY > 700) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <div className="fixed bottom-18 right-1 z-[99] border-2 border-[red] h-[90vh]">
//       {isVisible && (
//         <div
//           onClick={scrollToTop}
//           aria-label="scroll to top"
//           className="hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80"
//         >
//           <span className="mt-[6px] h-5 w-5 rotate-45 border-l border-t border-black font-[900]"></span>
//         </div>
//       )}
//     </div>
//   );
// }
