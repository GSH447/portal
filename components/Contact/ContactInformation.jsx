"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactInformation() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a]">
          Other ways to contact us
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Reach our dedicated emergency response lines or visit our clinic.
        </p>
      </div>

      <div className="grid gap-6 md:grid-row-3">
        {/* Card 1: Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-50 text-center"
        >
          <div className="relative w-16 h-16 flex items-center justify-center mb-4">
            <div className="absolute inset-0 bg-[#6F92E7] rounded-full scale-110 opacity-70" />
            <Image
              src="/assets/icons/office-building.png"
              width={40}
              height={40}
              alt="Clinic Address Icon"
              className="relative z-10"
            />
          </div>
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Visit our Clinic</h3>
          <div className="text-sm text-gray-600 space-y-1 flex-1">
            <p className="font-semibold text-gray-800">The Gracespring Hospitals</p>
            <p>Block 3, Plot 32, Ajayi Apata Estate,</p>
            <p>Sangotedo, Lekki, Lagos.</p>
          </div>
          <p className="text-xs text-primary font-semibold mt-4 bg-[#6F92E7] px-3 py-1 rounded-full">
            Clinical Operations: 24/7
          </p>
        </motion.div>

        {/* Card 2: Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-50 text-center"
        >
          <div className="relative w-16 h-16 flex items-center justify-center mb-4">
            <div className="absolute inset-0 bg-[#6F92E7] rounded-full scale-110 opacity-70" />
            <Image
              src="/assets/icons/telephone.png"
              width={40}
              height={40}
              alt="Phone Line Icon"
              className="relative z-10"
            />
          </div>
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Call Direct</h3>
          <div className="text-sm text-gray-600 flex-1 flex flex-col justify-center">
            <p>Get in touch with our emergency helpdesk:</p>
            <Link href="tel:+2347056482776" className="text-base font-bold text-primary hover:underline mt-1 block">
              +234 705-648-2776
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Call inquiries welcome anytime.
          </p>
        </motion.div>

        {/* Card 3: Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-50 text-center"
        >
          <div className="relative w-16 h-16 flex items-center justify-center mb-4">
            <div className="absolute inset-0 bg-[#6F92E7] rounded-full scale-110 opacity-70" />
            <Image
              src="/assets/icons/mailbox.png"
              width={40}
              height={40}
              alt="Email Support Icon"
              className="relative z-10"
            />
          </div>
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Send an Email</h3>
          <div className="text-sm text-gray-600 flex-1 flex flex-col justify-center">
            <p>For administrative queries or lab requests:</p>
            <Link href="mailto:care@gracespringhospitals.com" className="text-sm font-bold text-primary hover:underline mt-1 block break-all">
              care@gracespringhospitals.com
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Responds within 24 business hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
}