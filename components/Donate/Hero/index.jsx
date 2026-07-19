"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DonateHero = () => {
    

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >

        {/* <AnimatePresence>
        <motion.div
            className="
            absolute inset-0
            bg-center
            bg-[position:10%_2%]
            sm:bg-center
            object-cover object-top
            "
            style={{
            backgroundImage: `url('/assets/images/donation/vmo.png')`,
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        </AnimatePresence> */}

<motion.div className="absolute inset-0">
  <Image
    src="/assets/images/donation/vmo.png"
    alt="Donation background"
    fill
    className="object-cover object-top"
    priority
  />
</motion.div>

      {/* ================= OVERLAY (Opacity Control) ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

    </section>
  );
};

export default DonateHero;
