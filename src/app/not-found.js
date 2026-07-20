'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hammer, ArrowLeft, MessageSquare, Phone, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-slate-50 via-white to-sky-50/50 flex items-center justify-center p-6 text-slate-800 my-20">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Animated Construction Visual */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-24 h-24 bg-[#2A157C]/5 rounded-3xl flex items-center justify-center text-[#2A157C]"
          >
            <motion.div
              animate={{ rotate: [0, -10, 15, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            >
              <Hammer size={44} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
          
          {/* Subtle pulse ring */}
          <span className="absolute top-0 w-24 h-24 bg-[#5CB338]/10 rounded-3xl animate-ping opacity-40 -z-10" />
        </div>

        {/* Messaging */}
        <div className="space-y-3">
          <span className="text-[#5CB338] font-bold text-xs uppercase tracking-widest bg-[#5CB338]/10 px-4 py-1.5 rounded-full inline-block">
            System Enhancement in Progress
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Page Undergoing Update
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            We are currently optimizing this section to serve your clinical requests better. Please check back shortly or connect with our care desk directly.
          </p>
        </div>

        {/* Quick Help / Call-To-Actions */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xl shadow-slate-100/60 text-left space-y-3">
          <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase border-b border-slate-100 pb-2">
            Instant Access Channels
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold">
            <a 
              href="https://wa.me/2347056482776" 
              className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 text-emerald-700 transition-colors"
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp</span>
            </a>

            <a 
              href="tel:07056482776" 
              className="flex items-center gap-2.5 p-3 rounded-xl bg-red-50/50 hover:bg-red-50 text-red-700 transition-colors"
            >
              <Phone size={16} />
              <span>Call Rapid Support</span>
            </a>
          </div>

          <a 
            href="mailto:care@gracespringhospitals.com" 
            className="flex items-center justify-center gap-2.5 p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 text-slate-600 transition-colors text-xs font-semibold w-full"
          >
            <Mail size={16} />
            <span>Email: care@gracespringhospitals.com</span>
          </a>
        </div>

        {/* Navigation fallback link */}
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2A157C] hover:text-[#3b239d] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Return to Clinical Homepage</span>
          </Link>
        </div>

      </div>
    </main>
  );
}