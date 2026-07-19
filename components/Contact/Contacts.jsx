"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactsUsHero() {
  return (
    <section className="relative w-full bg-[#6F92E7] pt-[8rem] pb-12 flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center space-y-6"
      >
        <div className="relative flex justify-center items-center w-36 h-36">
          {/* Subtle animated background shape */}
          <svg
            width="160"
            height="160"
            viewBox="0 0 100 100"
            className="absolute transform scale-x-[-1] rotate-[120deg] animate-pulse duration-[4000ms]"
          >
            <path
              d="M10,10 C50,0 80,20 70,50 C60,80 30,90 20,60 C10,30 20,10 30,10 Z"
              fill="#6F92E7"
              opacity="0.15"
            />
          </svg>

          <Image
            src="/assets/icons/conversation-removebg-preview.png"
            width={120}
            height={120}
            alt="Conversation Icon"
            className="relative z-10 object-contain"
            priority
          />
        </div>

        <div className="space-y-3 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
            Get in touch with The Gracespring Hospitals. Whether you are booking a consultation, requesting lab results, or checking in on operational workflows, our support team is happy to help you.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="#contact-form"
            className="inline-block bg-primary hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-200 transform shadow-md hover:shadow-lg active:scale-95"
          >
            Send a message
          </Link>
        </div>
      </motion.div>
    </section>
  );
}