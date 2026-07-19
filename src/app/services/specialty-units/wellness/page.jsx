import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Wellness & Health Screenings",
  category: "Specialty Units",
  image: "/assets/images/services/SpecialtyUnits/Wellness11.svg",
  tagline: "Proactive Health Assessments and Institutional Lifestyle Diagnostics",
  overview: "Our Wellness Unit focuses on preventive health medicine, providing structured executive physical checkups and corporate screening options designed to detect potential medical vulnerabilities before they progress.",
  features: [
    "Customized Executive, Pre-Employment, and Annual Corporate Wellness Panels",
    "Comprehensive Cardiovascular, Renal, Hepatic, and Cancer Biomarker Screenings",
    "Detailed Lifestyle Risk Appraisals, Stress Testing & Nutri-health Audits",
    "Personalized Post-Screening Physician Dialogues and Early Preventive Paths"
  ]
};

export const metadata = {
  title: `Wellness & Preventive Health - Gracespring Hospitals`,
  description: `Comprehensive executive body screening, preventative tracking programs, and general wellness at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};

export default function WellnessPage() {
  return <ServicePageLayout data={pageData} />;
}