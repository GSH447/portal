import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Pulmonology Specialist Care",
  category: "Internal Medicine",
  image: "/assets/images/services/InternalMedicine/Pulmonology.png",
  tagline: "Expert Management of Respiratory and Chronic Lung Diseases",
  overview: "Our Pulmonology department evaluates and manages obstructive, restrictive, and infectious lung diseases, utilizing modern pulmonary function assessments to support respiratory health.",
  features: [
    "Spirometry and Complete Pulmonary Function Diagnostics",
    "Advanced Management of Chronic Asthma, COPD, and Bronchiectasis",
    "Evaluation of Interstitial Lung Diseases & Pulmonary Tuberculosis Care",
    "Sleep Apnea Evaluations and Non-Invasive Ventilation Setup"
  ]
};

export const metadata = {
  title: `Pulmonology Specialist Care - Gracespring Hospitals`,
  description: `Advanced respiratory and lung diagnostics at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Dedicated expert pulmonology internal medicine care.`,
};

export default function PulmonologyPage() {
  return <ServicePageLayout data={pageData} />;
}