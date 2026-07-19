"use client";
import Product_Services from "./Product_Services";
import { product_services } from "../SiteMaps/data";
import Link from "next/link";
import Image from "next/image";

export default function Product_ServicesPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#2A157C] overflow-hidden">
      
      {/* Dimmed Background Pattern Layer */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/assets/images/services/gsh-icons-perks.svg')",
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen py-12 px-5 lg:px-20">
        
        <div className="flex flex-col items-center w-full gap-8">
          
          {/* 1. Emergency Banner (Top of page) */}
          <Link
            href="tel:07056482776"
            className=" flex items-center gap-3 bg-red-600 font-bold tracking-wide uppercase py-3 px-6 rounded-xl shadow-lg hover:bg-red-700 active:scale-98 w-full h-10 justify-center"
          >
            <div className=" relative w-[80px] lg:w-[100px] h-[80px]">
              <Image 
                src="/assets/images/emergency/emergencies.gif" 
                alt="Emergency Alert"
                fill
              />
            </div>
            <span className=" text-white text-[10px] lg:text-lg">For Emergencies, Call 0705 648 2776</span>
          </Link>

          {/* 2. Product Services Grid Component (Center) */}
          <div className="w-full flex justify-center py-4">
            <Product_Services product_services={product_services} />
          </div>

          {/* 3. WhatsApp CTA (Bottom of page) */}

                 {/* 1. Emergency Banner (Top of page) */}
          <Link
            href="https://wa.me/2347056482776" 
            className="flex items-center gap-3 bg-[#25D366] font-bold tracking-wide uppercase py-3 px-6 rounded-xl shadow-lg hover:bg-[#20ba59] active:scale-98 w-full h-10 justify-center"
          >
            <div className="relative w-[50px] lg:w-[100px] h-[80px]">
              <Image 
                src="/assets/images/emergency/Whatsap-Icon-Animation.gif" 
                alt="WhatsApp Chat"
                fill
              />
            </div>
            <span className="text-white text-[10px] lg:text-lg">WhatsApp - Chat With Us - 0705 648 2776</span>
          </Link>

          {/* <Link
            href="https://wa.me/2347056482776" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white font-semibold text-base py-3 px-6 rounded-xl shadow-md hover:bg-[#20ba59] hover:shadow-lg active:scale-98 w-full sm:w-fit"
          >
            <div className="relative w-7 h-7 shrink-0">
              <Image 
                src="/assets/images/emergency/Whatsap-Icon-Animation.gif" 
                alt="WhatsApp Chat"
                fill
                className="object-contain"
              />
            </div>
            <span>WhatsApp - Chat With Us - 0705 648 2776</span>
          </Link> */}

        </div>

      </div>

      {/* Bottom Border */}
      <div className="flex">
        <div className="border-[10px] border-[#5CB338] w-full"></div>
        <div className="border-[10px] border-[#6F92E7] w-full"></div>
        <div className="border-[10px] border-[#4a912d] w-full"></div>
      </div>


    </div>
  );
}