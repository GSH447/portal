"use client";
import React, { useEffect, useState } from "react";
import { links } from "../SiteMaps";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(null);

  function handleClick(index, e) {
    e.preventDefault();
    setOpenedMenu(openedMenu === index ? null : index);
  }

  useEffect(() => {
    setMenuOpen(false);
    setOpenedMenu(null);
  }, [pathname]);

  return (
    <>
      {/* Responsive Hamburger visible everywhere below Desktop monitor Breakpoint */}
      <div className="flex xl:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 text-white hover:opacity-80 transition-opacity focus:outline-none"
          aria-label="Open Navigation Menu"
        >
          <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>
      </div>

      {/* DRAWER FULL SCREEN OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-[#EDEDF7] flex flex-col transition-transform duration-500 ease-in-out xl:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* TOP ACCENTS */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-[#2A157C] shadow-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/assets/logo/siteLogo-nobg.png"
              width={140}
              height={45}
              alt="Gracespring Hospitals"
              className="h-12 sm:h-16 w-auto object-contain"
              priority
            />
          </Link>
          <button 
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>

        {/* ACCORDION LINKS INTERFACE */}
        <nav className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-3 sm:space-y-4">
          {links.map((link, index) => (
            <div key={link.label + index} className="border-b border-[#2A157C]/10 pb-3">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href || "#"}
                  className={cn(
                    "text-lg sm:text-xl font-bold text-[#2A157C] transition-colors",
                    pathname === link.href ? "text-[#5CB338]" : "hover:text-[#5CB338]"
                  )}
                  onClick={() => !link.subLinks && setMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.subLinks && (
                  <button 
                    onClick={(e) => handleClick(index, e)}
                    className="p-1.5 bg-[#2A157C]/5 rounded-full"
                  >
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform duration-200 text-[#2A157C]",
                        openedMenu === index ? "rotate-180" : ""
                      )}
                    />
                  </button>
                )}
              </div>

              <AnimatePresence>
                {openedMenu === index && link.subLinks && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-3 mt-2 space-y-3"
                  >
                    {link.subLinks.map((subLink, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        {subLink.header && (
                          <Link
                            href={subLink.href || "#"}
                            className="text-[#2A157C] font-bold text-sm sm:text-base hover:text-[#5CB338]"
                            onClick={() => setMenuOpen(false)}
                          >
                            {subLink.header}
                          </Link>
                        )}
                        {subLink.subMenu && (
                          <div className="flex flex-col gap-2 pl-3 border-l-2 border-[#5CB338] mt-1">
                            {subLink.subMenu.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="text-xs sm:text-sm text-gray-600 hover:text-[#2A157C] font-medium"
                                onClick={() => setMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* ACTION LINKS */}
          <div className="pt-6 flex flex-col gap-3 pb-8">
            <Link
              href="/book-an-appointment"
              className="w-full bg-[#5CB338] text-white text-center font-bold py-3 sm:py-4 rounded-xl shadow-sm text-sm sm:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Book an Appointment
            </Link>
            <Link
              href="/patient-portal" 
              className="w-full bg-[#6F92E7] text-white text-center font-bold py-3 sm:py-4 rounded-xl shadow-sm text-sm sm:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Patient Portal
            </Link>
            <Link
              href="https://gracespringhealthfoundation.com/"
              className="w-full bg-white border-2 border-[#2A157C] text-center text-[#2A157C] font-bold py-3 sm:py-4 rounded-xl text-sm sm:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Gracespring Health Foundation
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}




// "use client";
// import React, { useEffect, useState } from "react";
// import { links } from "../SiteMaps";
// import Image from "next/image";
// import { cn } from "../../lib/utils";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";

// export default function MobileNav() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openedMenu, setOpenedMenu] = useState(null);

//   function handleClick(index, e) {
//     e.preventDefault();
//     setOpenedMenu(openedMenu === index ? null : index);
//   }

//   useEffect(() => {
//     setMenuOpen(false);
//     setOpenedMenu(null);
//   }, [pathname]);

//   return (
//     <>
//       {/* MOBILE HAMBURGER TRIGGER - Fixed right for accessibility */}
//       <div className="flex lg:hidden">
//         <button
//           onClick={() => setMenuOpen(true)}
//           className="p-2 text-white hover:opacity-80 transition-opacity"
//         >
//           <Menu className="h-8 w-8" />
//         </button>
//       </div>

//       {/* FULL SCREEN MOBILE DRAWER */}
//       <div
//         className={cn(
//           "fixed inset-0 z-[100] bg-[#EDEDF7] flex flex-col transition-transform duration-500 ease-in-out lg:hidden",
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         )}
//       >
//         {/* DRAWER HEADER - Matches Desktop Navy */}
//         <div className="flex items-center justify-between p-5 bg-[#2A157C] shadow-lg">
//           <Link href="/" onClick={() => setMenuOpen(false)}>
//             <Image
//               src="/assets/logo/siteLogo-nobg.png"
//               width={160}
//               height={50}
//               alt="Gracespring Hospitals"
//               className="h-20 w-auto"
//               priority
//             />
//           </Link>
//           <button 
//             onClick={() => setMenuOpen(false)}
//             className="p-1 rounded-full bg-white/10 text-white"
//           >
//             <X className="w-8 h-8" />
//           </button>
//         </div>

//         {/* NAVIGATION CONTENT */}
//         <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-4">
//           {links.map((link, index) => (
//             <div key={link.label + index} className="border-b border-[#2A157C]/10 pb-4">
//               <div className="flex items-center justify-between">
//                 <Link
//                   href={link.href || "#"}
//                   className={cn(
//                     "text-xl font-bold text-[#2A157C] transition-colors",
//                     pathname === link.href ? "text-[#5CB338]" : "hover:text-[#5CB338]"
//                   )}
//                   onClick={() => !link.subLinks && setMenuOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//                 {link.subLinks && (
//                   <button 
//                     onClick={(e) => handleClick(index, e)}
//                     className="p-2 bg-[#2A157C]/5 rounded-full"
//                   >
//                     <ChevronDown
//                       className={cn(
//                         "w-6 h-6 transition-transform text-[#2A157C]",
//                         openedMenu === index ? "rotate-180" : ""
//                       )}
//                     />
//                   </button>
//                 )}
//               </div>

//               {/* ACCORDION SUB-MENUS */}
//               <AnimatePresence>
//                 {openedMenu === index && link.subLinks && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     className="overflow-hidden pl-4 mt-4 space-y-4"
//                   >
//                     {link.subLinks.map((subLink, idx) => (
//                       <div key={idx} className="flex flex-col gap-2">
//                         {subLink.header && (
//                           <Link
//                             href={subLink.href}
//                             className="text-[#2A157C] font-bold text-md hover:text-[#5CB338]"
//                             onClick={() => setMenuOpen(false)}
//                           >
//                             {subLink.header}
//                           </Link>
//                         )}
//                         {subLink.subMenu && (
//                           <div className="flex flex-col gap-3 pl-3 border-l-2 border-[#5CB338]">
//                             {subLink.subMenu.map((subItem) => (
//                               <Link
//                                 key={subItem.label}
//                                 href={subItem.href}
//                                 className="text-sm text-gray-600 hover:text-[#2A157C] font-medium"
//                                 onClick={() => setMenuOpen(false)}
//                               >
//                                 {subItem.label}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}

//           {/* ACTION BUTTONS - Desktop Style */}
//           <div className="pt-8 flex flex-col gap-4 pb-12">
//             <Link
//               href="/book-an-appointment"
//               className="w-full bg-[#5CB338] text-white font-bold py-4 rounded-xl flex items-center justify-center shadow-md active:scale-95 transition-transform"
//               onClick={() => setMenuOpen(false)}
//             >
//               Book an Appointment
//             </Link>
//             <Link
//               href="/patient-portal" 
//               className="w-full bg-[#6F92E7] text-white font-bold py-4 rounded-xl flex items-center justify-center shadow-md active:scale-95 transition-transform"
//               onClick={() => setMenuOpen(false)}
//             >
//               Patient Portal
//             </Link>
//             <Link
//               href="https://foundation.gracespringhospitals.com/"
//               className="w-full bg-white border-2 border-[#2A157C] text-[#2A157C] font-bold py-4 rounded-xl flex items-center justify-center active:scale-95 transition-transform"
//               onClick={() => setMenuOpen(false)}
//             >
//               Gracespring Health Foundation
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }




