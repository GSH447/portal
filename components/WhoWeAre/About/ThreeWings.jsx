"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, HeartHandshake } from "lucide-react";

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: 'blur(8px)',
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.04,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};


const AnimatedText = ({
  text,
  className = '',
}) => {
  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};


const wings = [
  {
    name: "Pistis Wing",
    title: "The Wing of Faith",
    icon: ShieldCheck,
    color: "from-blue-600 to-indigo-700",
    bgLight: "bg-blue-50/50",
    textMuted: "text-blue-900",
    border: "border-blue-100",
    desc: "Reflects our commitment to dependable, evidence-driven care. Home to acute services, surgical suites, and high-dependency units, it stands as the foundation of medical certainty and professional reliability.",
    tagline: "Faith in Care. Anchored in trust, precision, and unwavering clinical excellence."
  },
  {
    name: "Elpis Wing",
    title: "The Wing of Hope",
    icon: Activity,
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50/50",
    textMuted: "text-emerald-900",
    border: "border-emerald-100",
    desc: "Symbolises the forward-looking spirit that guides healing. It houses our diagnostic services, specialist clinics, rehabilitation units, and recovery pathways designed to lift patients toward restored health.",
    tagline: "Hope in Healing. Empowering progress and embracing innovation."
  },
  {
    name: "Agape Wing",
    title: "The Wing of Love",
    icon: HeartHandshake,
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50/50",
    textMuted: "text-rose-900",
    border: "border-rose-100",
    desc: "Embodies unconditional love expressed through care. Dedicated to maternity, paediatrics, palliative support, and family-centred services, ensuring every patient is met with dignity, empathy, and profound respect.",
    tagline: "Love in Service. Compassion is the foundation of our every interaction."
  }
];

export default function ThreeWings() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200/60" id="wings">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">

          <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">

           
            <AnimatedText
              className=" justify-center"
              text="Our Identity Ecosystem"
            />
            
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            
            <AnimatedText
              className=" justify-center"
              text="The Three Wings of Gracespring"
            />
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            <AnimatedText
              text="Inspired by timeless virtues, our structural wings form an integrated ecosystem of compassionate, innovative, and patient-centered care."
            />

            
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {wings.map((wing, i) => {
            const Icon = wing.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl border ${wing.border} overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="p-8">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${wing.color} flex items-center justify-center text-white mb-6 shadow-md`}>
                    <Icon size={22} />
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 block mb-0.5">{wing.name}</span>
                    <h3 className="text-xl font-bold text-slate-900">{wing.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify mb-6">
                    {wing.desc}
                  </p>
                </div>
                
                <div className={`p-6 ${wing.bgLight} border-t ${wing.border} mt-auto`}>
                  <p className={`text-xs font-semibold ${wing.textMuted} leading-relaxed`}>
                    {wing.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}