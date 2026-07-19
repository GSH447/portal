"use client";
import React, { useState, useEffect } from "react";
import Accordion from "./accordion";
import { faqdata } from "./faqdata";
import Image from "next/image";

const FAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Automatically opens the first item on initial mounting sequence
  useEffect(() => {
    if (faqdata.length > 0) {
      setOpenAccordionId(faqdata[0].id);
    }
  }, []);

  const toggleAccordion = (accordionId) => {
    setOpenAccordionId((prevId) => (prevId === accordionId ? null : accordionId));
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section
      className="flex flex-col relative px-4 md:px-12 lg:px-[90.5px] bg-[#6F92E7] gap-6 py-20 justify-start items-center w-full"
      id="faq"
    >
      <div className="my-20 text-center dynamic-header-block">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
          Frequently Asked Questions
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Find comprehensive answers about our specialized care wings, facilities, and treatments.
        </p>
      </div>

      <div className="flex self-center w-full flex-col gap-1 items-stretch lg:w-[90%]">
        {faqdata
          .slice(0, showAll ? faqdata.length : 3)
          .map((faq) => (
            <Accordion
              key={faq.id}
              accordionId={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openAccordionId === faq.id}
              toggleAccordion={toggleAccordion}
            />
          ))}
      </div>

      <div className="mt-8 dynamic-action-row">
        <button
          className="min-w-[140px] h-[46px] flex items-center justify-center gap-2 border border-[#5CB338] px-4 rounded-[8px] bg-white shadow-md transform transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
          onClick={toggleShowAll}
        >
          <span className="font-bold text-[#E86512]">
            {showAll ? "See less" : "See all"}
          </span>
          <Image
            src="/assets/icons/faq-see-all-projects.svg"
            width={18}
            height={18}
            alt="Toggle viewing depth"
            className={`transition-transform duration-300 custom-icon-tick ${showAll ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>
    </section>
  );
};

export default FAQs;
