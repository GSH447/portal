"use client";

import React from "react";
import CorporateHero from "./CorporateHero";
import OurStory from "./OurStory";
import ThreeWings from "./ThreeWings";
import VisionMissionGrid from "./VisionMissionGrid";
import SpecializationGrid from "./SpecializationGrid";
import CultureSection from "./CultureSection";
import SubscribeCTA from "../../Banner/CTA/subscribe";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased overflow-x-hidden">
      <CorporateHero />
      <OurStory />
      <ThreeWings />
      <VisionMissionGrid />
      <SpecializationGrid />
      <CultureSection />
      {/* <SubscribeCTA /> */}
    </div>
  );
}

