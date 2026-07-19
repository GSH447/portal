import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Chemotherapy Unit",
  category: "Specialty Units",
  image: "/assets/images/services/SpecialtyUnits/chemotherapy1.svg",
  tagline: "Dedicated Ambulatory and Inpatient Cytotoxic Infusion Care",
  overview: "Our Chemotherapy Unit features custom day-care suites structured for safe oncological drug administration, strict bio-safety compliance, and comprehensive post-infusion toxicity management.",
  features: [
    "Safe Central or Peripheral Intravenous Cytotoxic Drug Infusions",
    "Pre-Chemotherapy Lab Safety Verifications & Antiemetic Coverage",
    "Specialized Management of Port-a-Caths and PICC Access Lines",
    "Patient Education Frameworks on Dietary Adjustments and Side Effects"
  ]
};

export const metadata = {
  title: `Chemotherapy Clinic - Gracespring Hospitals`,
  description: `Dedicated oncological infusion care and specialized chemotherapy suites at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};

export default function ChemotherapyPage() {
  return <ServicePageLayout data={pageData} />;
}