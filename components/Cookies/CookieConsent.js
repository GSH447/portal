"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "../../lib/axios";

const COOKIE_KEY = "cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = async (value) => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);

    // Optional backend tracking
    try {
      await axiosInstance.post("/?route=auth/track", {
        page_url: window.location.pathname,
        consent: value,
      });
    } catch (err) {
      console.error("Consent tracking failed");
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="
            fixed bottom-0 left-0 right-0 z-[9999]
            bg-white border-t shadow-lg
          "
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Text */}
            <p className="text-sm text-gray-700 max-w-2xl">
              We use cookies to improve your experience, analyze traffic, and
              personalize content. By clicking “Accept all”, you agree to our
              use of cookies. Read our{" "}
              <Link href="/privacy-policy" className="text-primary underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookie-policy" className="text-primary underline">
                Cookie Policy
              </Link>.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleConsent("accepted")}
                className="
                  px-4 py-2 text-sm rounded-md
                  border border-gray-300
                  text-gray-700 hover:bg-gray-100
                  transition
                "
              >
                Reject
              </button>

              <button
                onClick={() => handleConsent("accepted")}
                className="
                  px-4 py-2 text-sm rounded-md
                  bg-primary text-white
                  hover:bg-black transition
                "
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
