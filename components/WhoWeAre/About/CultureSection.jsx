"use client";

import React from "react";
import Image from "next/image";

export default function CultureSection() {
  return (
    <section className="py-20 lg:py-24 bg-white" id="culture">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/assets/images/about/OurPeopleOurPurpose.jpg" 
                alt="Medical Practitioners collaborating at Gracespring" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-1">Our People, Our Purpose</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Staff Culture</h2>
            </div>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              At Gracespring Hospitals Limited, we believe exceptional healthcare begins with exceptional people. Our culture is built on Faith, Hope, and Love, fostering a supportive and purpose-driven work environment.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-md bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">F</div>
                <p className="text-sm text-slate-600"><strong className="text-slate-900 font-semibold">Faith</strong> in professional integrity, meticulous teamwork, and ethical clinical practice.</p>
              </div>
              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-md bg-emerald-50 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">H</div>
                <p className="text-sm text-slate-600"><strong className="text-slate-900 font-semibold">Hope</strong> through continuous medical learning, structural innovation, and career development pathways.</p>
              </div>
              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-md bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">L</div>
                <p className="text-sm text-slate-600"><strong className="text-slate-900 font-semibold">Love</strong> expressed through proactive clinical compassion, mutual respect, and flat organization collaboration.</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-2 border-t border-slate-100">
              We are committed to supporting our employees with a safe, inclusive, and empowering workplace where excellence is recognized and service is meaningful.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}