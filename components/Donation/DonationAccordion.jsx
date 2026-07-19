"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DonationAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-sm hover:bg-gray-50 transition"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Body */}
      {open && (
        <div className="px-4 py-3 text-sm text-gray-700 border-t bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
}
