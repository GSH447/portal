"use client";
import React from "react";

const FooterCurves = () => {


  return (
    <>

     <div
       className=" relative w-full overflow-hidden bg-[#DBE1EF] py-[2.2rem] lg:py-[4.2rem] px-5 lg:px-10 flex lg:flex-row flex-col justify-between gap-[2em]"
     >
        <svg
          viewBox="0 0 1440 160"
          className="absolute top-0 left-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#d77dbf"
            d="
              M0,80
              C360,40 720,40 1080,80
              S1440,120 1440,80
              L1440,0
              L0,0
              Z
            "
          />
        </svg>

      </div>

    </>
  );
};

export default FooterCurves;