"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DonationModal from "./DonationModal";

// const PRESET_AMOUNTS = [70000, 35000, 20000, 10000, 5000, 4000];



const DonationCard = () => {
  const [frequency, setFrequency] = useState("one-time"); // or monthly
  const [amount, setAmount] = useState("");
  const [dedicate, setDedicate] = useState(false);
  const [honouree, setHonouree] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [showImpactInfo, setShowImpactInfo] = useState(false);


  
  const DONATION_RANGES = [
    { label: "10k – 100k", min: 10_000, max: 100_000 },
    { label: "100k – 1M", min: 100_000, max: 1_000_000 },
    { label: "1M – 10M", min: 1_000_000, max: 10_000_000 },
    { label: "10M – 100M", min: 10_000_000, max: 100_000_000 },
    { label: "100M – 500M", min: 100_000_000, max: 500_000_000 },
    { label: "Above 500M", min: 500_000_000, max: null },
  ];

  const formatShort = (value) => {
    if (value >= 1_000_000) return `${value / 1_000_000}M`;
    if (value >= 1_000) return `${value / 1_000}k`;
    return value.toString();
  };

  // const handleDonate = () => {
  //   if (!amount) return alert("Please select or enter an amount");
  //   setShowModal(true);
  // };

  const handleDonate = () => {
  if (!amount || Number(amount) <= 0) {
    return alert("Please enter a valid donation amount");
  }

  if (
    selectedRange &&
    selectedRange.max &&
    (amount < selectedRange.min || amount > selectedRange.max)
  ) {
    return alert("Amount must be within the selected range");
  }

  setShowModal(true);

  useEffect(() => {
    const close = () => setShowImpactInfo(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

};


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" bg-white rounded-3xl shadow-xl px-2 space-y-6 donation-card-css"
      >
        {/* Header */}
        <div className="hidden flex items-center gap-2 text-sm font-semibold text-gray-700">
          🔒 Secure donation
        </div>


              <div className="hidden relative flex items-center gap-2 text-sm font-semibold text-gray-700">

                <button
                  type="button"
                  onClick={() => setShowImpactInfo((prev) => !prev)}
                  onMouseEnter={() => setShowImpactInfo(true)}
                  onMouseLeave={() => setShowImpactInfo(false)}
                  className="w-5 h-5 flex items-center justify-center rounded-full border text-xs text-primary hover:bg-primary/10"
                >
                  i
                </button>

                {/* Floating info card */}
                {showImpactInfo && (
                  <div className="absolute top-7 left-0 z-50 w-72 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800 shadow-lg">
                    <strong className="block mb-1">💙 Impact guide</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>
                        ₦15M sponsors <strong>1 child’s open-heart surgery</strong>
                      </li>
                      <li>
                        ₦30M sponsors <strong>2 children</strong>
                      </li>
                      <li>
                        ₦45M sponsors <strong>3 children</strong>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

        {/* Frequency Toggle */}
        <div className=" flex rounded-full border overflow-hidden">
          {["one-time", "monthly"].map((type) => (
            <button
              key={type}
              onClick={() => setFrequency(type)}
              className={`flex-1 py-2 text-sm font-semibold transition ${
                frequency === type
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {type === "one-time" ? "Give once" : "❤️ Monthly"}


            </button>
          ))}
        </div>

        {/* Donation Ranges */}
        <div className="grid grid-cols-2 gap-3">
          {DONATION_RANGES.map((range, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedRange(range);
                setAmount("");
              }}
              className={`border rounded-lg py-3 text-sm font-semibold transition ${
                selectedRange?.label === range.label
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-gray-300 hover:border-primary"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>

        {selectedRange && (
          <div className="space-y-2">
            <div className="text-xs text-gray-500">
              Enter an amount between{" "}
              <strong>
                ₦{selectedRange.min.toLocaleString()}
                {selectedRange.max && ` – ₦${selectedRange.max.toLocaleString()}`}
              </strong>
            </div>

            {/* <div className="flex items-center border rounded-lg px-3 py-2">
              <span className="mr-2 text-gray-500">₦</span>
              <input
                type="text"
                value={amount ? Number(amount).toLocaleString() : ""}
                onChange={(e) =>
                  setAmount(e.target.value.replace(/,/g, ""))
                }
                className="w-full outline-none text-xl text-[#2A157C] font-semibold italic"
              />
              <span className="ml-2 text-xs text-gray-400">NGN</span>
            </div> */}

            {/* Smart suggestions */}
            <div className="flex gap-2 flex-wrap">
              {[selectedRange.min,
                selectedRange.max && selectedRange.max / 2,
                selectedRange.max,
              ]
                .filter(Boolean)
                .map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setAmount(suggestion)}
                    className="px-3 py-1 text-xs border rounded-full hover:border-primary"
                  >
                    ₦{formatShort(suggestion)}
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Preset Amounts */}
        {/* <div className=" grid grid-cols-3 gap-3">
          {PRESET_AMOUNTS.map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`border rounded-lg py-2 text-sm font-medium transition ${
                amount === amt
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-gray-300 hover:border-primary"
              }`}
            >
              ₦{amt.toLocaleString()}
            </button>
          ))}
        </div> */}

        {/* Custom Amount */}
        <div className=" flex items-center border rounded-lg px-3 py-2">
          <span className="text-gray-500 mr-2">₦</span>
          {/* <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value).toLocaleString())}
            className="w-full outline-none text-xl text-[#2A157C] font-semibold italic"
          /> */}

          {/* <input
            type="text"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) =>
              setAmount(e.target.value.replace(/,/g, ""))
            }
            onBlur={() =>
              setAmount(Number(amount).toLocaleString())
            }
            className="w-full outline-none text-xl text-[#2A157C] font-semibold italic"
          /> */}


          <input
            type="text"
            value={amount ? Number(amount).toLocaleString() : ""}
            onChange={(e) =>
              setAmount(e.target.value.replace(/,/g, ""))
            }
            className="w-full outline-none text-xl text-[#2A157C] font-semibold italic"
          />
          <span className="ml-2 text-xs text-gray-400">NGN</span>
        </div>

        {/* Dedication */}
        <div className=" space-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={dedicate}
              onChange={() => setDedicate(!dedicate)}
            />
            Dedicate this donation
          </label>

          {dedicate && (
            <input
              type="text"
              placeholder="Honouree name"
              value={honouree}
              onChange={(e) => setHonouree(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          )}
        </div>

        {/* CTA */}
        <button
          onClick={handleDonate}
          className="w-full bg-primary text-white rounded-full py-3 text-sm font-semibold hover:bg-primaryblack transition"
        >
          {frequency === "monthly" ? "Donate monthly" : "Donate today"}
        </button>
      </motion.div>

      {/* STEP 2 MODAL */}
      <AnimatePresence>
        {showModal && (
          <DonationModal
           open={showModal}
            onClose={() => setShowModal(false)}
            donation={{
              frequency,
              amount,
              honouree,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DonationCard;
