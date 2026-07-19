"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  MapPin,
  ShieldAlert,
  Clock3,
  MessageSquare,
  Mail,
  Globe,
  Milestone,
  ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

/** Reusable booking row link */
function BookingRow({ href, isExternal = false, icon: Icon, iconColor, label, cta }) {
  const sharedClass =
    "w-full p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100/60 hover:from-slate-100 hover:to-slate-200/80 border border-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center justify-between group";

  const content = (
    <>
      <span className="flex items-center gap-2">
        <Icon size={14} className={iconColor} />
        {label}
      </span>
      <span className="flex items-center gap-0.5 text-[10px] text-slate-400 font-normal group-hover:text-[#5CB338] transition-colors">
        {cta}
        <ArrowRight size={10} className="ml-0.5" />
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={sharedClass}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClass}>
      {content}
    </Link>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ServicePageLayout({ data }) {
  if (!data) return null;

  return (
    <main className="min-h-screen bg-gradient-to-tr from-slate-50 via-white to-sky-50/40 text-slate-900 selection:bg-[#5CB338] selection:text-white overflow-x-hidden">

      {/* ── 1. CINEMATIC HERO ─────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[550px] max-h-[650px] flex items-center bg-[#1e1b4b] overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.image || "/assets/images/about/gsh.png"} 
            // src="/assets/images/about/gsh.png"
            alt={data.title || "Gracespring Hospitals Service"}
            fill
            priority
            className=" object-center opacity-2"
          />
          {/* Medical grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-60" />
          {/* Directional gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111029] via-[#1e1b4b]/25 lg:via-[#1e1b4b]/5 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="w-full max-w-[1600px] mx-auto px-8 xl:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center">

            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-block text-emerald-400 font-bold tracking-widest text-xs uppercase mb-5 px-4 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 w-fit"
            >
              {data.category || "Specialist Clinical Unit"}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight"
            >
              {data.title}
            </motion.h1>

            {data.tagline && (
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="mt-5 text-base xl:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed"
              >
                {data.tagline}
              </motion.p>
            )}

          </div>
        </div>
      </section>

      {/* ── BRAND ACCENT BAR ──────────────────────── */}
      <div className="flex w-full h-[6px] shadow-sm">
        <div className="bg-[#5CB338] flex-1" />
        <div className="bg-[#6F92E7] flex-1" />
        <div className="bg-[#4a912d] flex-1" />
      </div>

      {/* ── 2. DASHBOARD SECTION ──────────────────── */}
      <section className="w-full mx-auto px-2 lg:px-8 xl:px-16 py-5 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">

          {/* ── COLUMN 1: CLINICAL NARRATIVE (8 cols) ── */}
          <div className="lg:col-span-8 space-y-10">

            {/* Clinical Overview Card */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm"
            >
              <h2 className="text-xs font-bold tracking-widest uppercase text-[#5CB338] border-b border-slate-100 pb-4 mb-6 flex items-center gap-2">
                <Milestone size={14} />
                Clinical Overview &amp; Protocol
              </h2>
              <p className="text-slate-600 leading-relaxed text-base font-normal whitespace-pre-line antialiased max-w-prose">
                {data.overview || "System information matrix uploading dynamically."}
              </p>
            </motion.div>

            {/* Unit Offerings + Booking Options Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6"
            >
              {/* Unit Offerings */}
              <div>
                <h3 className="text-xs font-bold text-slate-800 tracking-wider uppercase flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Activity className="text-[#5CB338] h-4 w-4" />
                  Unit Offerings
                </h3>

                {data.features && data.features.length > 0 && (
                  <ul className="space-y-2.5 mt-3">
                    {data.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-600 font-medium leading-tight"
                      >
                        <CheckCircle2 className="text-[#5CB338] h-3.5 w-3.5 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </motion.div>



            {/* Compliance Banner */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-r from-slate-100 via-white to-sky-50/30 border border-slate-200 flex items-start gap-4"
            >
              <ShieldAlert className="text-[#6F92E7] shrink-0 mt-0.5" size={22} />
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">
                  Institutional Regulatory Compliance
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  All active procedures inside our units match state safety mandates under the
                  guidance framework of the Health Facility Monitoring and Accreditation Agency
                  (HEFAMAA) Lagos.
                </p>
              </div>
            </motion.div>

          </div>

          {/* ── COLUMN 2: BOOKING & EMERGENCY TRAY (4 cols) ── */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">

            {/* Emergency Call Banner */}
            <Link
              href="tel:07056482776"
              className="flex items-center gap-3 bg-red-600 font-bold tracking-wide uppercase py-3 px-6 rounded-xl shadow-md hover:bg-red-700 hover:shadow-red-200 transition-all w-full h-14 justify-center"
            >
              <div className="relative w-[46px] h-[46px] shrink-0">
                <Image
                  src="/assets/images/emergency/emergencies.gif"
                  alt="Emergency Alert"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-xs xl:text-sm tracking-wider">
                For Emergencies, Call 0705 648 2776
              </span>
            </Link>

            {/* WhatsApp Banner */}
            <Link
              href="https://wa.me/2347056482776"
              className="flex items-center gap-3 bg-[#25D366] font-bold tracking-wide uppercase py-3 px-6 rounded-xl shadow-md hover:bg-[#20ba59] hover:shadow-green-200 transition-all w-full h-14 justify-center"
            >
              <div className="relative w-[36px] h-[36px] shrink-0">
                <Image
                  src="/assets/images/emergency/Whatsap-Icon-Animation.gif"
                  alt="WhatsApp Chat"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-xs xl:text-sm tracking-wider">
                WhatsApp Chat: 0705 648 2776
              </span>
            </Link>

            {/* Unit Offerings + Booking Options Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6"
            >


              {/* Booking Channels */}
              <div className="space-y-2.5 border-t border-slate-100 pt-4">
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-2">
                  Alternative Booking Mediums
                </p>

                <BookingRow
                  href="/patient-portal"
                  icon={Globe}
                  iconColor="text-[#6F92E7]"
                  label="Use Patient Portal Systems"
                  cta="Instant Appoint"
                />

                <BookingRow
                  href="mailto:care@gracespringhospitals.com?subject=Specialist Consultation Booking Request"
                  isExternal
                  icon={Mail}
                  iconColor="text-slate-500"
                  label="care@gracespringhospitals.com"
                  cta="Email Us"
                />

                <BookingRow
                  href="sms:07056482776?body=Hello Gracespring Hospitals, I would like to book an appointment."
                  isExternal
                  icon={MessageSquare}
                  iconColor="text-amber-500"
                  label="SMS Text Message Booking"
                  cta="Send Text"
                />
              </div>
            </motion.div>

            {/* Availability Tracker */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5 text-xs text-slate-400 font-bold tracking-wider uppercase">
                <Clock3 size={14} className="text-[#6F92E7]" />
                Availability Tracker
              </div>
              <p className="text-sm font-bold text-[#4a912d] flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#5CB338] animate-pulse" />
                Continuous 24/7 Operations
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Consulting reviews are prioritized via pre-scheduled queues. Walk-in diagnostics
                are sorted according to triage urgency levels.
              </p>
            </motion.div>

            {/* Facility Citation */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
            >
              <div className="flex items-start gap-3 text-xs text-slate-600">
                <MapPin size={18} className="text-[#5CB338] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-800 mb-1">Official Facility Address</p>
                  <p className="leading-relaxed text-slate-500 font-medium">
                    Gracespring Hospitals,<br />
                    Block 3, Plot 32, Ajayi Apata Estate,<br />
                    Sangotedo, Eti-Osa, Lekki, Lagos.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
          {/* END COLUMN 2 */}

        </div>
      </section>

    </main>
  );
}