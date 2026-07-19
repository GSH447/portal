"use client";

import React from "react";
import { Eye, Target, Award, Shield } from "lucide-react";

export default function VisionMissionGrid() {
  const values = [
    "Patient-centered care", "Knowledge & Professionalism", 
    "Clinical Excellence", "Truth & Trustworthiness", 
    "Community Impact", "Hard Work", "Respect", "Compassion"
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="vmo">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Top Split: Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="p-8 rounded-2xl bg-[#1e1b4b] text-white space-y-4 shadow-xl relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 text-white/5 pointer-events-none transition-transform duration-500 group-hover:scale-110">
              <Eye size={240} />
            </div>
            <div className="h-10 w-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
              <Eye size={20} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Our Vision</h3>
            <p className="text-indigo-200 text-base leading-relaxed font-light">
              To be a premier healthcare institution and hospital of choice for patients, clinicians and employees, distinguished by exceptional quality and compassionate, patient-focused care.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 text-white/5 pointer-events-none transition-transform duration-500 group-hover:scale-110">
              <Target size={240} />
            </div>
            <div className="h-10 w-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
              <Target size={20} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Our Mission</h3>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              We are committed to delivering exceptional healthcare through clinical excellence, patient safety, and compassionate service, ensuring care that is accessible, affordable, and responsive to the needs of our patients and their families.
            </p>
          </div>
        </div>

        {/* Bottom Split: Objectives & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Objectives */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Strategic Objectives</h3>
            <div className="space-y-4">
            {[
            { title: "Technological Advancement & Research", info: "Integrating world-class medical informatics, state-of-the-art diagnostic machines, and modern treatment technologies." },
            { title: "Public Awareness & Health Promotion", info: "Driving community health literacy, preventive screening programs, and localized healthcare pathways across Lagos." },
            { title: "Financial Accessibility Frameworks", info: "Structuring cost-efficient medical services to make high-value interventions accessible for middle-income communities." },
            { title: "Holistic Support Systems", info: "Providing psychological, clinical, and reassuring structural support structures across all care touchpoints." }
            ].map((obj, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-0.5">{obj.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{obj.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">Our Core Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="bg-white px-4 py-3 rounded-xl border border-slate-200/60 shadow-sm flex items-center gap-3">
                  <Shield className="text-indigo-600 shrink-0" size={16} />
                  <span className="text-sm font-semibold text-slate-700">{v}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}