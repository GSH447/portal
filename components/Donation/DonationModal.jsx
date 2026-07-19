"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DonationSteps from "./DonationSteps";
import { X } from "lucide-react";
import Image from "next/image";

export default function DonationModal({ open, donation, onClose }) {

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);


  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-white lg:bg-black/50 w-[100%] grid lg:flex items-center justify-center px-4 py-6 overflow-auto zIndex-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // click outside closes modal
        >

          <div
            className=""
          >
            
            <div
                className="block lg:hidden"
            >
                <Image
                    src="/logo-nobg.png"
                    alt="Donation "
                    width={1000}
                    height={1000}
                    className="w-[23%]"
                />
            </div>

            <div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="
                  absolute
                  top-3
                  right-3
                  rounded-full
                  p-2
                  bg-gray-100
                  hover:bg-primary
                  transition
                "
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
            </div>
          
          </div>
          
          <motion.div
            className=" bg-transparent lg:w-[70%] lg:h-[90vh] lg:rounded-2xl lg:p-6 relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()} // prevent close on inner click
          >

            <DonationSteps donation={donation} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
