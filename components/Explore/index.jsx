"use client";
import { motion } from "framer-motion";
export default function ExplorePage() {
  return (
    <div className="lg:flex flex-row mx-auto py-20 justify-between nine20 "  id="explore">
        
      {/* Explore Section */}
      <motion.div 
        variants={{
          hidden: {
              opacity: 0,
              y: 50,
          },

          visible: {
              opacity: 1,
              y: 0,
          },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1, ease:"circIn" }}
          
          viewport={{ once: true }}
          className="animate_top lg:flex lg:mb-0 mb-5"
      >
        <div className="w-fit">

        <p className="lg:text-[16px] font-medium text-[10px]">Join other seasoned entrepreneurs</p>

        <h1 className="lg:text-[48px] text-[18px]" style={{fontFamily:"AvenirBold"}}>Make something awesome</h1>

        <p className="lg:w-[691px] lg:text-[16px] text-[11px]">Our team of seasoned entrepreneurs and industry experts provides one-on-one coaching and mentorship, empowering startup founders to navigate the challenges of building and growing a thriving business.</p>

        </div>
      </motion.div>

      {/* Explore CTA */}
      <div 
      className=""
      style={{ backgroundImage: "url('assets/images/explore/Ellipse.svg')", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
      >


        <motion.button
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1, ease:"circIn" }}
          
          viewport={{ once: true }}
          className="animate_top bg-primary hover:bg-black text-white font-semibold px-4 rounded-lg flex lg:w-fit w-full justify-center lg:mt-[5em] lg:mr-[2em]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#join-community"
        >
          <p className="text-white flex items-center justify-center w-[177px] h-[48px]">
            Join Community
          </p>
        </motion.button>

      </div>

    </div>
  );
}
