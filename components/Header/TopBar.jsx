"use client";

import React from "react";
import { MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-[#1e0e5a] text-white/90 text-xs py-2 px-4 sm:px-6 xl:px-12 2xl:px-16 border-b border-white/10">
      <div className="max-w-[1600px] 3xl:max-w-[2200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Location Info */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <MapPin className="w-3.5 h-3.5 text-[#5CB338] flex-shrink-0" />
          <span className="truncate max-w-[280px] sm:max-w-none">
            Lagos, Nigeria
          </span>
        </div>

        {/* Social Accounts */}
        <div className="flex items-center gap-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5CB338] transition-colors">
            <Facebook className="w-4 h-4" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5CB338] transition-colors">
            <Twitter className="w-4 h-4" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5CB338] transition-colors">
            <Instagram className="w-4 h-4" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5CB338] transition-colors">
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}